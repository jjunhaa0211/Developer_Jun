---
title: 'AnyObjcet'
slug: '/grammar/AnyObjcet'
excerpt: 'AnyObjcet를 설명합니다.'
---

# Any, AnyObject

> Swift에서 `Any`와 `AnyObject`는 각각 모든 타입 또는 모든 객체 타입의 값을 나타내는 데 사용합니다.
> 
- Swift는 불특정한 타입을 위해 두가지 특이한 타입을 제공하는데 그것이 Any, AnyObject입니다.
- Any는 함수 타입을 포함한 모든 타입의 인스턴스를 나타낼 수 있습니다.
- AnyObject는 클래스 타입의 인스턴스를 나타낼 수 있습니다.
- 타입이 명백한 경우에는 명확한 타입을 적시하는 것이 좋지만 그렇게 하지 못할 경우 사용합니다.

> `Any`는 함수 타입을 포함하여 **모든 유형의 인스턴스**를 나타내는 데 사용할 수 있는 프로토콜입니다. `Any`는 일반 코드를 작성할 때와 같이 알 수 없는 타입의 값을 작업하는 데 사용할 수 있습니다.
> 

모든 타입의 값을 저장하는 [Any]타입의 배열을 만들 수 있습니다.

```swift
var anyArray: [Any] = [1, "tow", 3.0, ture]
```

Int 타입인, String 타입인 “two”, Double 타입의 3.0, Boolean 타입의 ture.
이모든 값들은 전부 타입이 다릅니다. Swift는 타입에 민감하기 때문에 Int 혹은 String등으로 정해진 타입의 배열은 이 모든 원소를 받아들일 수 없다. 따라서 Any라는 타입을 설정함으로써 어떤 타입이라도 전부 받아들일 수 있도록 하는 것이 Any가 있는 이유입니다.

> 반면에 `AnyObject`는 **클래스 유형의 인스턴스**를 나타내는 프로토콜입니다. 알 수 없는 클래스 유형의 개체에 대해 작업하는 데 사용할 수 있습니다.
> 

예를들어 AnyObject를 사용하여 모든 객체를 취할 수 있는 함수 매개변수를 정의할 수 있습니다. 

```swift
func doSomething(withObject object: AnyObject) {
}
```

- Any가 어떤 타입이든 전부 흡수 한다고 하면 AnyObject는 클래스의 객체만 사용해야한다.
- AnyObject를 사용해서 Int, String 등의 Struct의 타입을 사용하면 오류가 납니다.

### 왜 사용하는걸까?

- AnyObject를 사용하는 예시 중 하나는 Objective-C와의 호환성 때문에 필요할 수 있습니다.
- Objective-C는 모든 객체를 id 타입으로 다루며, Objective-C와 상호작용해야 하는 경우 AnyObject를 사용하여 Swift 객체를 Objective-C의 id 타입으로 변환할 수 있습니다.
- Objective-C로 작성된 라이브러리를 사용하는 경우, Swift 코드에서 Objective-C 객체를 사용해야할 때가 있습니다. 이 경우, Swift에서는 AnyObject를 사용하여 Objective-C 객체를 다룹니다.

```swift
import UIKit

let view: AnyObject = UIView()
```

위의 예시에서, view는 UIView 인스턴스이며, AnyObject 타입으로 선언되어 있습니다. 이렇게 하면 Objective-C와의 호환성을 유지하면서 Swift에서 Objective-C 객체를 다룰 수 있습니다.

위 말에 Objective-C의 id 타입을 반환한다는 말이 있습니다. id란? C언어의 포인터 개념, void*의 역활을 한다. 랍니다… 

C언어의 포인터는 메모리의 주소값을 저장하는 변수이기에 즉 objective-C 환경에서 만들어진 클래스 객체인 UIView를 AnyObject를 활용해서 Swift와 Objective-C간에 타입을 맞춰주는 역활이다.

```swift
import Foundation

class TestClass: NSObject {
	@objc func doSomething() {
		print("junha")
	}
}

let anyObject: AnyObject = TestClass()

if let testClassObject = anyObject as? TestClass {
	testClassObject.perform(#selector(TestClass.doSomething))
}
```

위 코드에서는 NSObject에서 상속하고 doSomething() 메서드가 있는 TestClass를 정의 합니다. objc를 사용하기위해 @objc를 추가합니다.
TestClass의 인스턴스를 생성하고 anyObject라는 변수에 할당합니다. 이 변수는 AnyObject 유형으로 선언됩니다. 그런 다음 Optional Binding을 사용하여 anyObject를 TestClass로 캐스팅할 수 있는지 확인합니다.

NSObject(objc) 타입의 클래스도 AnyObject를 활용하면 사용할 수 있다는 것을 보여줍니다. 아직 Foundation이라던가 UIKit이라던가 많은 프레임워크 속에 objc의 잔해가 남아 있기 때문에 UIKit 개발중에는 많이 보게 될 것 같습니다.

### 정리

- AnyObject란
    - 프로토콜로 정의되어 있습니다.
    - 클래스 타입의 인스턴스(객체)를 나타내는 타입입니다.
    - 컴파일 시간에 개체의 특정 클래스를 알지 못하거나 특정 프로토콜을 준수하는 개체로 작업하려는 경우에 사용할 수 있는 탑입니다.
    - Objective-C 코드와 상호 작용하는데 사용할 수 있습니다.

### 참고

- Any, AnyObject 타입을 사용하는 것보다 명확한 타입을 작업하는 것이 항상 낫습니다.
- Any, AnyObject 타입은 nil 대입이 불가능합니다.
    - nil은 optional 변수에만 대입이 가능하기 때문에 Any와 AnyObject에는 각 데이터 타입과 클래스를 받기 때문에 없음을 표현할 수 없습니다.