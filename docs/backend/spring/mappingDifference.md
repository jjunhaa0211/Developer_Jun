---
title: '@RequestMapping, @GetMapping의 차이점'
slug: '/backend/spring/mappingDifference'
excerpt: 'mappingDifference 차이점을 추가합니다.'
sidebar_position: 3
---

`spring` 프로젝트에서 회사의 컨트롤러 단을 확인해보면 `GET`, `POST`를 모두 이용할 수 있는 `requestMapping`을 주로 사용하고 있었는데

그러면 `GetMapping`, `PostMapping` 이외 다른 `Mapping` 어노테이션들은 어떤 기능을 하길래 존재하는 것일까? 궁금했습니다.

~~저는 GetMapping, PostMapping 방식이 훨씬 깔끔하다고 생각했거든요~~

## 등장 시기

Spring 4.3 버전부터 Spring MVC 컨트롤 메소드를 위한 새로운 어노테이션이 4개 추가되었습니다.

- **@PostMapping**
- **@GetMapping**
- **@PutMapping**
- **@DeleteMapping**
- **@PatchMapping**

각각 어노테이션은 `HttpMethods`에 `Mapping` 되어 있습니다.

## Mapping 선언 방식

### @RequestMapping

```java
@RequestMapping(value="경로", method=RequestMethod.Get)
@RequestMapping(value="경로", method=RequestMethod.Post)
```

### @GetMapping

```java
@GetMapping("경로")
```

### @PostMapping

```java
@PostMapping("경로")
```

### @PutMapping

```java
@PutMapping("경로")
```

### @DeleteMapping

```java
@DeleteMapping("경로")
```

### @PatchMapping

```java
@PatchMapping("경로")
```

## 궁금한 점

`@RequestMapping`의 경우 `method`를 생략하면 요청받은 `request HttpMethods`에 맞게 `GET` 방식과 POST 방식을 모두 처리해줍니다.

이때의 궁금점은 `RequestMapping`으로 굳이 불필요하게 `method` 구분없이 `GET`, `POST` 두가지 메소드를 전부 사용할 수 있는데 왜 `GetMapping`, `PostMapping`이 존재하는 것일까?

## 이유

첫번째 이유는 다음과 같다

> 예를 들어서, `Url`로 다양한 로직을 처리해야 하는 작업 건이 있다고 가정할 경우 기본적으로 `RequestMapping`의 경우 메서드가 지정된 `GetMapping`이나 `PostMapping` 등을 사용할 때보다 어노테이션 선언부 코드가 길어서 가독성 측면에서 사용할 수 있겠다는 생각이 들었습니다.
> 

두번째 이유는 리펙토링입니다:

> 소스를 작성 할 때 뿐만 아니라 유지보수 시점에서도 Spring 4.3 이후의 `POST` `GET`, `DELEAT`, `PATCH` Mapping 어노테이션은 위에서도 말했듯이 해당 맵핑 메서드에 따라 어떤 로직이 진행 될지, 리스트 검색인지 `INSERT`인지 용도 파악이 쉽기 때문에 소스 파악과 리펙토링 용도로 코드 리펙토링을 할 수 있다고 생각합니다.
>