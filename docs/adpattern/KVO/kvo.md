---
title: 'KVO Cocoa 프레임워크'
slug: '/kvo'
excerpt: 'KVO 패턴이란?'
sidebar_position: 1
---

# KVO (key-value-observing)
`Observing`이라는 단어, 어디서 많이 들어보셨나요? `RxSwift`를 공부하신 분이라면 `Observable`이라는 단어가 익숙할 겁니다. `Observable`은 "관찰 가능한"이라는 의미를, `Observing`은 "관찰하다"라는 뜻을 가지고 있습니다.

그렇다면 `KVO`(Key-Value Observing)는 무엇을 관찰하는 걸까요? 간단히 말하자면, `KVO`는 다른 객체의 속성을 관찰하는 역할을 합니다. 아직 잘 와닿지 않으신가요?

아래 더 자세한 설명을 해드리겠습니다. <br/>
- 특정 키 값의 변화를 감지기 위한 기능
- 객체의 프로퍼티 변경 사항을 다른 객체에 알리기 위해 사용하는 코코아 프로그래밍 패턴
- `Model`과 `View` 같이 논리적으로 분리된 파트간의 변경 사항을 전달하는데 유용하다
- `KVO`는 모델 레이어와 뷰 레이어 같이 논리적으로 분리되어 있는 오브젝트 간 메세지를 전달 합니다.
- 타입 정의 외부에서 `obsever`를 추가할 때 사용한다.

### 시각화

`KVO`를 시각화 해볼게요.

```swift
값 변경 -> 감시하고 있는 오브젝트 헨들러가 호출됨 -> handler 작동
```

위 동작이 생각보다 어렵지 않죠??

이제 본격적 설명ㅇㅡ…

아! 맞다 `KVO` 를 알기 위해서 사전에 알고 가야하는 지식이 있습니다.

### 알고 가야할 것

`KVO`를 사용하기 위해서는 `NSOject`를 상속해야합니다. 그러므로
상속을 받아야하기 때문에, `Class`에서만 사용이 가능하고요.
observe 하려는 프로퍼티에 `@objc attribute`와 `dynamic modifier`를 붙여주어야합니다.

이때 `Dynamic modifier`이 선언된 부분에 한해 Objc 런타임 방식을 사용하겠다는 것이고, 런타임 시점에 호출해야 할 특정 메소드의 구현을 결정하는 것이다.

### 감시자를 정의하는 방법

감시자 역할을 하는 인스턴스는 한 개 이상의 속성을 감시할 수 있습니다.
감시자의 인스터스는 `observe(_:options:changeHandler:)` 메소드에 감시를 원하는 속성의 key-path를 전달하는 것입니다. 호출하는 시점부터 속성의 값 변경을 감시합니다.

1. 파라미터에는 `\.objectToObserve`는 `objectToObserve` 인스턴스의 속은 key path입니다.
2. 파라미터인 `[.old, .new]`는 마지막 트레일링 클로저에 `oldValue`와 `newValue` 라는 속성을 사용여부 결정을 해야합니다.
    1. `oldValue`는 변경 직전의 속성의 값이고, `newValue`는 변경 이후 속성의 값입니다.
3. 파라미터는 클로저로, 값 변경시 수행할 동작을 정의해야합니다.

결론은 첫번째 파라미터에서 받는 것은 감시자 역할을 하는 오브젝트가 전달이되고 두번째 파라미터에 `NSKeyValueObservedCange<Value>` 타입의 값이 들어오는데, 이 값에서 `oldValue`와 `newValue`에 접근 할 수 있습니다.

만약 `observe` 메서드의 `options` 파라미터에 아무것도 전달되지 않는다면, `nil`로 값이 초기화됩니다.

### 본격! 사용방법!

`Model` 객체에서 값이 변경 되었을 경우, 변경된 값을 `UI` 에 반영해야합니다.
이때 컨트롤러가 모델 객체에 `observing`을 도입, 델리게이트에 메세지를 보내 처리하게해야합니다.

```swift
class Person: NSObject {
	@objc dynamic var name: String
		
	init(name: Stirng) {
		self.name = name
	}
}

var person = Person(name: "Junha")
person.observe(\.name, options: [.old, .new]) { (object, change) in
	print("name changed form \(change.oldValue) to \(change.newValue)")
}

person.name = "준하" // Name changed from Optional("Junha") to Optional("준하")
```

프로퍼티 값이 `Junha`에서 `준하`로 변경되어서 `Observer`의 change handler가 호출 했기 때문에 `handler` 내의 `oldValue`와 `newValue`를 가져올 수 있게 된다.

그리고 `Option`에 `old/new` 말고도 `initial`과 `prior`가 있으며 설명은 아래와 같습니다.

- old
    - 변경 전 값
- new
    - 변경 후 값
- initial
    - Observer 등록 전 handler 호출 시 (newValue로 들어갑니다)
    - 예제
    
    ```swift
    var person = Person(name: "junha")
    person.observe(\.name, options: [.old, .new, .initial]) { (object, change) in
    		print("name changed form \(change.oldValue) to \(change.newValue)")
    }
    
    // Name changed from nil to Optional("junha")
    ```
    
- prior
    - 변경 전, 후 상태 모두 파악시
    - 예제
    
    ```swift
    var person = Person(name: "junha")
    person.observe(\.name, options: [.old, .new, .prior]) { (object, change) in
        print("Name changed from \(change.oldValue) to \(change.newValue)")
    }
    
    person.name = "준하"
    
    // Name changed from Optional("junha") to nil
    // Name changed from Optional("junha") to Optional("준하")
    ```
    

### KVO의 장점
KVO의 주요 장점은 두 객체 간의 동기화를 효과적으로 수행할 수 있다는 것입니다. 예를 들어, `Model`과 `View`와 같이 서로 분리된 부분 사이에서 변경 사항을 전달할 수 있습니다. 또한, 내부 코드를 수정하지 않고도 상태 변화에 적응할 수 있으며, 변경이 일어나기 전과 후의 값을 쉽게 파악할 수 있는 이점도 있습니다.

### KVO의 단점
KVO는 Objective-C 런타임에 크게 의존하며, 이 기능을 사용하기 위해서는 NSObject를 상속받은 클래스에서만 구현이 가능합니다. 이는 사용의 유연성을 제한할 수 있는 요소입니다. 또한, 객체가 메모리에서 해제될 때(dealloc), 등록된 옵저버들을 반드시 제거해야 합니다. 이를 놓치면 메모리 누수나 예상치 못한 동작 오류를 초래할 위험이 있습니다. 이러한 단점들은 KVO를 사용할 때 고려해야 할 중요한 요소입니다.

### KVO 왜 사용하는데?
KVO를 사용하는 이유는 몇 가지 주요 장점 때문입니다. 첫째, `RxSwift`의 `Subscribe`와 유사하게 논리적인 분리를 가능하게 합니다. 예를 들어, `ViewModel`의 특정 프로퍼티가 변경될 때 `View`에서의 변화를 유도하는 등의 상황에서 유용하게 사용될 수 있습니다. 그러나 KVO는 Objective-C 런타임에 의존하기 때문에, `class`가 `final`이거나 `static dispatch`로 사용될 때 보다는 `dynamic dispatch`를 사용해야 하며, 이는 성능에 다소 영향을 줄 수 있습니다.

또한, KVO의 가장 큰 장점은 내부 코드를 수정하지 않고도 외부에서 해당 값의 변화를 감지하여 동작을 수행할 수 있다는 것입니다. `willSet`과 `didSet` 같은 기능들은 클래스 내부에 구현해야 하지만, KVO를 사용하면 논리적으로 분리하여 외부에서 감시가 가능합니다. 이는 특히 외부 라이브러리나 다른 사람이 작성한 코드, SDK를 사용하는 상황에서 내부 코드를 수정하기 어려울 때 유리합니다. 하지만 이 기능은 `NSObject`를 상속받고 `@objc dynamic`을 통해 Objective-C 런타임 중에 접근할 수 있는 경우에만 가능합니다.

마지막으로, 기존의 내장 프레임워크에서 아직 Objective-C 코드가 Swift로 전환되지 않은 부분이 있다면, KVO를 통해 접근이 가능한 경우가 있습니다. 예를 들어 `AVFoundation`과 같은 프레임워크에서 내부 변수들을 참조할 때 KVO를 사용하는 경우가 많습니다. 이러한 점들은 KVO를 사용할 때 고려해야 할 중요한 요소들입니다.