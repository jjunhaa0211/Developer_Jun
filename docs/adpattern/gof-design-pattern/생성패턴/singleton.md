---
title: 'Singleton?'
slug: '/gof/constructor/singleton'
excerpt: 'Singleton?'
sidebar_position: 5
---

### 싱글톤 패턴이란?
클래스에 인스턴스가 하나만 있도록 하면서 그 하나의 인스턴스를 전역 접근으로 지정하는 것을 제공하는 디자인 패턴입니다. <br/>
즉 하나의 생성자가 여러개 호출되더라도 실제 객체는 하나이고 최초 생성 이후에 최초 생성자가 생성된 객체를 return하는 것입니다.

### 주로 사용하는 경우 + 쉽게 이해해보기
우리가 swift를 하면서 회원의 정보를 받아야할 상황이 온다고 가정합시다. 1VC는 name을 받고 2VC는 password를 받고 3VC를 받는다고 생각해봅시다. 평소 우리는 아례와 같이 코드를 구성할 것입니다.

```swift
class UserInFo {
    var name: String
    var password: String
    var age: Int
}

//1VC = name
class 1VC {
    let u = UserInFo()
    u.name = "하하"
    u.password = nil
    u.age = nil
}

// 2VC = password
class 2VC {
    let u = UserInFo()
    u.name = nil
    u.password = "12345678"
    u.age = nil
}

// 3VC = age
class 3VC {
    let u = UserInFo()
    u.name = nil
    u.password = nil
    u.age = 18
}
```
여러 클래스에서 동일한 데이터를 공유하고 싶을 때 싱글톤 패턴을 사용하면 효과적입니다. 예를 들어, 사용자의 이름, 비밀번호, 나이 등의 정보를 관리할 때 각 정보가 별도의 인스턴스가 아닌 하나의 인스턴스에 저장되면 관리가 용이해집니다. 싱글톤 패턴을 적용하면 하나의 유일한 인스턴스가 전역적으로 접근 가능하여, 어떤 클래스에서든 해당 인스턴스의 데이터에 접근하고 수정할 수 있습니다. 이는 코드를 더욱 깔끔하고 관리하기 쉽게 만들어 줍니다.

### 싱글톤 패턴을 구조체로 사용가능할까?
싱글턴 패턴은 주로 클래스를 사용하여 구현됩니다. 구조체로 싱글턴 패턴을 구현하는 것은 일반적이지 않으며, 이는 구조체의 특성 때문입니다. 구조체는 인스턴스화할 때마다 새로운 복사본을 생성하기 때문에, 싱글턴 패턴의 핵심 요소인 '단 하나의 유일한 인스턴스'를 유지하기 어렵습니다. 그러나 구조체를 인스턴스화하지 않고 상수로만 사용한다면, 이론적으로는 싱글턴 패턴과 비슷하게 사용할 수 있습니다.

### 싱글톤 패턴의 장단점
#### 장점
- 유일한 객체를 만들어서 다양한 객체들에게 공유되는 객체를 만들 수 있다는 장점이 있습니다.
- 재사용성이 높아서 메모리 낭비를 방지할 수 있다는 장점도 있습니다.
- 코드 중복 방지할 수 있습니다.

#### 단점
- 싱글턴 패턴은 인스턴스들 간에 결합도가 높아져서 OCP(개방 패쇄 원칙)을 위반 합니다.
- 다중 스레드 환경일 경우 싱글턴 객체를 여러번 생성하지 않도록 처리해야합니다
- 수정과 테스트가 어렵습니다

### 우리의 개발 속 잠입해있었던 싱글턴 패턴
개발을 하다보면 사용하는
- **UIScreen.main**
- **URLSession.shared**
- **UserDefaults.standard**
- **otificationCenter.default**
등등에 전부 싱글톤 패턴을 사용하고 있었습니다.

[Singleton Pattern 예제코드](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/GoF-SingletonPattern)
