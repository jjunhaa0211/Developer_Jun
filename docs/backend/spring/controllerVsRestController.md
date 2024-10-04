---
title: '@Controller와 @RestController 차이점'
slug: '/backend/spring/controllerVsRestController'
excerpt: 'controllerVsRestController 차이점을 추가합니다.'
sidebar_position: 4
---

`Spring`에서 클래스에 컨트롤러를 지정해주기 위한 어노테이션은 `@Controller`와 `@RestController`가 있습니다. `Controller`는 `HTTP ResponseBody`가 생성되는 방식이고 `@Controller + @ResponseBody` 조합이 `@RestController`라고 할 수 있습니다.

### @Controller란?

전통적인 `Spring MVC`의 컨트롤러 어노테이션인 `@Controller`는 주로 `View`를 반환하기 위해 사용합니다.

```java
@Controller
public class TestController {

	@RequestMapping(value = "api/test", method = {RequestMethod.POST})
	public String test() {
		return "test";
	}
}
```

아래 과정을 통해서 `Spring MVC Container`는 `Client` 요청으로부터 View를 반환합니다.

<img src="https://i.imghippo.com/files/b8oqL1728021847.png" alt="" border="0"/>

과정

1. `Client`는 **URL 형식으로 요청**을 보낸다.
2. `DispatcherServlet`이 요청을 위임할 `Handler Mapping`을 찾는다.
3. `Handler Mapping`을 통해 요청을 `Controller`로 위임한다.
4. `Controller`는 요청을 처리한 후 `View Name`에 해당하는 `View`를 찾아서 **Client한테 반환**한다.
5. `Handler Adopter`는 이걸 `DisparcherServlet`에게 반환한다.
6. `DispatcherServlet`는 `view Resolver`를 통해 `View Name`에 해당하는 `View`를 찾아서 `Client`한테 반환한다.

위 과정을 거치면서 `View`를 찾아서 렌더링 하는 과정을 거치게 됩니다.

하지만 `Spring`을 사용하다보면 `Data`를 반환해야하는 경우가 있을 텐데 이 경우 `Controller`를 반환하기 위해 `@ResponseBody` 어노테이션을 활용해서 `JSON` 형태의 데이터를 반환할 수 있습니다.

<img src="https://i.imghippo.com/files/J5G9e1728021865.png" alt="" border="0"/>

과정

1. `Client`는 **URL 형식으로 요청**을 보낸다.
2. `DispatcherServlet`이 요청을 위임할 `Handler Mapping`을 찾는다.
3. `Handler Mapping`을 통해 요청을 `Controller`로 위임한다.
4. `Controller`는 요청을 처리한 후 **객체를 반환한다.**
5. 반환되는 객체는 **JSON으로 직렬화**되어서 `Client`**에게** **반환된다**.

컨트롤러를 통해 객체를 반환할 때 일반적으로 `ResponseEntity`로 감싸서 반환합니다. 그리고 객체를 반환하기 위해서는 View를 반환할 때 사용된 **`View Resolver` 대신에 `HttpMessageConverter`가 동작**합니다.

`HttpMessageConverter`에는 여러 `Converter`가 등록되어 있고, 반환하는 데이터에 따라 사용되는 `Converter`가 달라집니다.

단순 문자열인 경우 `StringHttpMessageConverter`가 사용되고, 객체인 경우에는 `MappingJackson2HttpMessageConverter`가 사용되고, 데이터의 종류에 따라 서로 다른 `MessageConverter`가 작동하게 됩니다.

`Spring`은 `Client`의 `HTTP Accept Header`와 서버의 컨트롤러 반환 타입 정보 2개를 조합해서 적합한 `HttpMessageConverter`를 선택해서 처리합니다. `Message Converter`가 동작하는 시점은 `HandlerAdapter`와 `Controller`가 요청을 주고받는 시점입니다.

상단 그림을 보면 4번에서 `Message`를 객체로 반환, 6번에서는 객체를 `Message`로 변환하는데 `Message Converter`가 사용됩니다.

```java
@Controller
@RequiredArgsConstructor

public class TestController {
	private final MemberService memberService;
	
	@GetMapping("api/board/member")
	public @ResponseBody ResponseEntity<Member> findMember(@RequestParam("id") String id) {
		return ResponseEntity.ok(memberService.findMember(member));
	}
}
```

상단 코드에서 `findMember()`는 `Member`이라는 이름을 가진 객체를 `ResponseEntity`로 감싸서 반환하고, `Member`를 `JSON`으로 반환하기 위해 `@ResponseBody` 어노테이션을 붙여주었습니다.

이 2가지를 한 곳에 작성하는 것보다는 데이터를 반환하는 `Controller`와 `View`를 반환하는 `Controller`를 분리해서 작성하는 것이 더욱 좋은 방법입니다.

### @RestController란

`@RestController` 어노테이션은 `Restful Web Service`에서 사용되는 컨트롤러 어노테이션입니다.
`@Controller + @ResponseBody`가 합쳐진 형태로 `JSON` 형태의 객체 데이터를 반환합니다.

```java
@RestController
@RequiredArgsConstructor
public class TestController {
	private final MemberService memberService;
	
	@GetMapping("api/board/member")
	public Member findMember(RequestParam("id") String id) {
		return memberService.findMember(member);
	}
	
	@GetMapping("api/board/member")
	public ResponseEntity<Member> findMemberResponseEntity(@RequestParam("id") String id) {
		return ResponseEntity.ok(memberService.findMember(member));
	}
}
```

`findMember()`는 `Member` 객체 그대로를 반환하고 있습니다.

이러한 경우에 문제는 `Client`가 예상하는 `HttpStatus`를 설정할 수 없기에 객체 상황에 맞는 `ResponseEntity`로 감싸서 반환해줘야합니다.

### 결론

`@Controller`와 `@RestController`의 차이점은 용도의 차이라고 말할 수 있다고 생각합니다.
`@Controller` 어노테이션은 공식적으로 Spring 2.5버전에서 추가되었고, `@RestController`는 Spring 4.0 버전에 추가되었습니다.

과거에는 `JSP`, `HTML`과 같은 `view`를 전달해 주었기에 주로 `@Controller`를 사용하였고, 최근에는 `Frontend`와 `Backend`가 나누어져서 개발하는 경우가 많기 때문에 `@RestController`를 사용합니다.