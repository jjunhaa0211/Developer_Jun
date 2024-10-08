---
title: 'Factory?'
slug: '/iOS/adpattern/gof/constructor/factory'
excerpt: 'Factory?'
sidebar_position: 3
---

### 팩토리 메서드 패턴이란?
팩토리 메서드 패턴은 객체지향 디자인 패턴의 하나인데 **Factory emthod**는 부모 클래스에 알려지지 않는 구체 클래스를 생성하는 패턴이다. 때문에 자식 클래스가 어떤 객체를 생성해야 할지 알려주는 패턴이기도 한다. 그리고 주로 클래스 코드에 구체 클래스의 이름을 감추기 위해서도 사용되는 패턴입니다.

즉 부모 클래스에서 객체들을 생성할 수 있는 인터페이스를 제공하지만, 자식 클래스들이 생성될 객체의 유형을 변경할 수 있도록 하는 패턴입니다.

### 팩토리 메서드 패턴 쉽게 이해하기
공장 관리 앱을 만들고 있다고 생각해봅시다. 앱 기능 중 트럭 운송을 처리할 수 있는 트럭 클래스가 있다고 생각해봅시다. 하지만 어느날 비행기 관련 배송을 지원하겠다고 발표가 났습니다. 근데 당신은 지상만을 지원할 줄 알고 base 코드를 트럭 클래스와 결합돼있도록 만들었다고 생각합시다. 그러면 만약 제가 여기서 비행기를 추가하게 되면 또는 비행 코드를 잘못 넣었다가는 육상을 달리는 비행기 또는 하늘을 날라다니는 트럭이 완성될 것입니다. 또는 코드를 싹 다 바꾸는 방법도 있죠 하지만 base 코드를 변경하는 것은 매우 힘든 일입니다. 그러면 팩토리 메서드는 이런 상황을 base 코드를 전부 뜯어고치는 것이 아닌 현재 순송 추가 요청이 들어오면 요청에 맞게 운송을 추가해주신다고 생각하시면 쉽습니다. 때문에 팩토리 메서드의 특이점은 어떤 우송 수단이 추가될지 몰라도 요청에 맞는 운송 기능을 추가해 주는 것입니다.

### 팩토리 메서드 패턴은 주로 어떤 경우에 사용할까?
나중에 앱에 기능이 색다른 것들이 늘어나는 경우 사용하는 것이 좋다고 생각합니다. 이유는 기능을 추가할 때 하위클래스만 추가하면 되기에 유지 보수가 높아질 수 있다고 생각합니다. 때문에 저는 많은 기능들이 생겨나는 프로젝트에 도입하면 좋을 것 같다고 생각합니다.

### 팩토리 메서드 패턴 구조 이해해 보기!
> ConcreteCreator -> Creator -> Product < ConcreateProduct

- ConcreteCreator = Creator를 가지고 있고 Product에 맞게 구체적 기능 설계
- Creator = Factory에 기본 역할을 정의하는 객체
- Product = Concreate Product가 해야할 동작을 선언하는 객체
- Concrete Product = Product를 채택하며 그에 맞게 만든 실제 객체

### 팩토리 메서드 패턴의 장단점
#### 장점
- 프로토콜은 기본 기능을 정의하는 용도이기 때문에 기존 코드를 변경하지 않고 하위 클래스를 추가할 수 있기 때문에 유연하고 화장성이 높습니다.
- 코드 수정이 생겨도 팩토리 메서드만 수정하면 되기 때문에 수정에 용이합니다.
- 유지보수 및 관리가 편해집니다.
- 개방/패쇄 원칙을 수용하고 있어서 기존 클라이언트에 코드를 훼손하지 않고 쉽게 원하는 것을 도입할 수 있습니다.

#### 단점
- Product를 추가할 경우 새로운 하위클래스를 정의해야 하기 떄문에 불필요한 클래스 정의가 생겨서 코드가 복잡해질 수 있습니다.
- 중첩되어 사용하면 코드가 매우 복잡해집니다.

```swift
protocol Product {
    func produceProduct()
}

protocol AppleFactory {
    func createElectronics() -> Product
}

class Client {
    func order(f: AppleFactory) {
        let ep = f.createElectronics()
        ep.produceProduct()
    }
}

class Mac: Product {
    func produceProduct() {
        print("mac 기능이 추가되었습니다.")
    }
}

class MacFactory: AppleFactory {
    func createElectronics() -> Product {
        return Mac()
    }
}

class iPhone: Product {
    func produceProduct() {
        print("아이폰 기능이 추가되었습니다.")
    }
}

class iPhoneFactory: AppleFactory {
    func createElectronics() -> Product {
        return iPhone()
    }
}

var client = Client()

client.order(f: iPhoneFactory())
client.order(f: MacFactory())
```

[FactoryMethod Pattern 예제코드](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/GoF-FactoryMethodPattern)
