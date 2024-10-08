---
title: 'Type Casting'
slug: '/iOS/grammar/type-casting'
excerpt: 'Type Casting를 설명합니다.'
sidebar_position: 7
---
### 타입 캐스팅 정의

Swift 코드를 작성할 때 컴파일러가 어떤 값의 특정 타입을 식별하지 못하는 경우가 발생합니다. 이런 경우 메서드나 함수가 반환하는 값이 불명확하거나 예상되지 않은 타입의 값일 때 종종 발생하게 됩니다. 이럴 때는 `as` 키워드를 사용하여 여러분의 코드가 의도하는 값의 타입을 컴파일러가 알 수 있게 해야 합니다. 이를 저희는 타입 캐스팅 이라고 부르기로 했습니다. 

쉽게 생각해서 **타입 캐스팅은 인스턴스의 타입을 확인하거나, 해당 인스턴스를 슈퍼 클래스나 하위 클래스로 취급하는 방법**입니다.

### 업캐스팅과 다운캐스팅

예를 들어, 다음은 `object(forKey:)` 메서드가 반환하는 값을 `String` 타입으로 처리해야 한다고 컴파일러에게 알려주는 코드입니다.

```swift
let myValue = record.object(for: "comment") as! String
```

실제로 타입 캐스팅에는 업캐스팅과 다운캐스팅이라는 두 가지 형태가 있다. 업캐스팅은 특정 클래스의 객체가 상위 클래스들 중의 하나로 변형되는 것을 말한다. 업캐스팅은 as 키워드를 사용하여 수행되며, 이러한 변환은 성공할 것이라고 컴파일러가 알려줄 수 있기 때문에 보장된 변환이라고 합니다. 이를 서브 클래스 인스턴스를 “슈퍼 클래스의 타입”으로 참조하며 보장된 변환을 하기 때문에 업 캐스팅은 항상 성공합니다.

### 업캐스팅

예를 들어서, 아래 그림과 같이 `UIKit` 클래스 계층 구조를 볼 때 `UISlider` 클래스는 UIControl 클래스의 하위 클래스입니다.

<img src="https://i.imghippo.com/files/rdlC71724285390.png" alt="" border="0"/>

`UISlider`는 `UIControl`의 하위 클래스이므로 다음과 같이 안전하게 업캐스팅될 수 있습니다.

```swift
let testSlider = UISlider()
let testControl = testSlider as UIControl
```

반면, 다운 캐스팅은 어떤 클래스에서 다른 클래스로 만드는 변환이 일어날 때 발생합니다. 이런 변환이 안전하게 수행된다거나 유효하지 않은 변환 시도를 컴파일러가 잡아낼 것이라는 보장을 할 수 없습니다. 다운 캐스팅으르로 유효하지 않은 변환을 했는데 컴파일러가 발견하지 못한다면, 대부분의 경우 런타임 에러가 발생하게 됩니다.

### 다운캐스팅

다운캐스팅은 보통 어떤 클래스에서 그 클래스의 하위 클래스로 변환하게 됩니다. 이를 슈퍼 클래스 인스턴스를 “서브 클래스의 타입”으로 참조한다고 합니다. 다운캐스팅은 `as!` 키워드로 수행됩니다. 이를 강제 변환이라고 부릅니다. 

`as!`는 런타임 시점에 타입 캐스팅(다운 캐스팅)을 하며, 실패할 경우 에러를 발생시킵니다. 때문에 특수한 상황이 아니라면 `as?`를 사용하는 것을 추천드립니다.

위 그림에서 만약 `UIView`가 `UIControl`이 되려고 한다면 그것을 강제 변환이라고 하게 됩니다. 이럴 경우 `UIView` 객체를 `UIControl` 클래스로 변환하기 위해서는 다운캐스팅이 필요합니다. 아래는 코드는 `UIView`를 `UIControl`로 다운 캐스팅하는 코드입니다.

```swift
let testView = UIView()
let testControl = testView as UIControl
```

위와 같이 코드를 작동시키면 아래 에러가 날 것입니다:

```swift
'UIView' is not convertible to 'UIControl'
```

컴파일러는 `UIView` 인스턴스를 `UIControl` 클래스 인스턴스로 안전하게 변환할 수 없음을 알려줍니다. 이것은 이렇게 하는 것이 틀렸다는 것을 의미하는 것이 아니라 컴파일러는 지금 이것은 안전한 선택이 아니다를 말하고 있습니다. 저희가 이 선택이 맞다고 생각하시면 `as` 뒤에 `!` 를 붙여서 강제적으로 다운캐스팅을 진행시킬 수 있습니다.

```swift
let testControl = testView as! UIControl
```

이제 컴파일 오류는 없어졌을 것입니다. 하지만, `UIView`를 `UIControl`로 변환할 수 없어서 에러가 날 것 입니다. 때문에 여러분이 강제 다운 캐스팅을 사용하는 것은 주의가 많이 필요합니다.

지금까지 보아왔듯이 다운 캐스팅은 업캐스팅과 달리 실패할 수 있습니다.

다운캐스팅을 하는 더 안전한 방법은 `as?`를 사용한 옵셔널 바인딩을 하는 것입니다.

`as?` 는 런타임 시점에 타입 캐스팅(다운 캐스팅)을 하며, 실패할 경우 `nil`을 리턴합니다. 만약에 성공적으로 수행된다면 지정한 타입의 옵셔널을 반환하게 됩니다.
때문에 `as?`를 사용하기 위해서는 `Optional-Type`으로 선언해주어야합니다.

```swift
if let testControl = testView as? UIControl {
	print("변환 성공")
} else {
	print("변환 실패")
}
```

### is 키워드

`is` 키워드를 사용하여 타입 검사를 할 수도 있습니다. is 클래스의 표현식은 아래와 같습니다:

```swift
표현식 is Type
```

타입을 체크하는 연산자로, 런타임 시점에 실제 체크가 이루어지게 됩니다. 표션식이 `Type`과 동일하거나, 표현식이 `Type`의 서브 클래스인 경우 `true`이며 아니면 `flase`를 내뱉습니다. 그러면 저희가 알 수 있는 것은 `is` 연산자는 반환 값이 `Bool`형이라는 것입니다.

예를 들어, 다음은 해당 객체가 `TestClass`라는 이름의 클래스의 인스턴스인지를 검사하는 코드입니다.

```swift
if myobject is TestClass {
	// myobject는 TestClass의 인스턴스다.
}
```