---
title: 'Builder?'
slug: '/gof/constructor/builder'
excerpt: 'Builder?'
sidebar_position: 1
---

### 빌더 패턴이란?
> 빌더 패턴은 복잡한 객체를 생성과정을 분리하여 동일한 생성 절차에서 서로 다른 표현 결과를 만드는 패턴입니다.

### 빌더 패턴 쉽게 이해하기

빌더 패턴은 간단하게 생각하면 공장이라고 생각하시면 편합니다.
만약 아이폰을 만드는 공장이 돌아간다고 하면 아이폰의 경우 용량이 256GB, 128GB 선택할 수 있고 컬러는 red, blue를 선택할 수 있습니다.

이런 경우 클래스를 만들게 되면 red일 경우 클래스가 만들어지고 blue인 경우도 클래스를 만들어야하기 때문에 이러한 방법은 계층구도가 효율적이지 못하게됩니다. 또는 자식 클래스를 늘려서 재사용성을 높이는 경우도 있습니다. 하지만 만약 red 컬러가 인기가 없어지면 red의 자식 클래스는 아무도 쓰지 않기 때문에 이러한 경우 매개변수가 사용되지 않아서 생성자 호출코드가 더러워질 것 입니다.

그럼 빌더 패턴은 이것을 어떻게 해결했을까요? 빌더 패턴은 빌더라는 객체를 만드는 방법을 제안합니다. 이 방법은 쉽게 생각해서 공장에서 처음부터 하나의 값만 받고 만들어내는 것이 아닌 빌더를 만들어서 원하는 값을 넣으면 빌더가 모든 재료와 특징에 맞게 합치는 방법이라고 생각하시면 이해하기 편합니다.

### 빌더 패턴은 주로 어떤 경우에 사용할까?
주로 복잡한 객체를 사용할 때 유용합니다. 예를 들어서 객체를 선언하고 값이 많이 변동되거나 선언부가 많은 경우 재선언에 어려움을 겪을 경우 빌더 패턴을 사용합니다.

### 빌더 패턴은 주로 어떤 경우에 사용할까?
사실 swift 조금 하신 분들은 조금 당황했을 수 있습니다. swift에는 기본적으로 init이 있기 때문에 이렇게 타입을 만들지 않아도 초기화 메서드를 사용하거나 프로퍼티를 사용하면 간단했을 테니까요. 빌더 패턴은 사실 swift에서 자주 사용되는 패턴은 아닙니다. 하지만 위에서 말했듯이 프로퍼티 개수가 엄청 많아지고 복잡한 경우 한 번쯤 사용해볼만한 것 같습니다.

### 빌더 패턴의 구조 이해해보기
> Builder -> Product

빌더 패턴의 구조는 Product와 이를 만드는 Builder로 구성되어 있습니다.
Builder는 어떤 값들을 세팅하는 메서드와 최종적으로 Product를 마드는 build() 메서드를 가지게 됩니다.
때문에 product가 만들어지는 모든 과정에는 Builder의 책임이 따릅니다.

### 빌더 패턴 코드로 보기

```swift
struct iPhone {
    let color: String
    let memory: Int
    let specification: String
    let plus: Bool
    
    init(color: String, memory: Int, specification: String, plus: Bool) {
        self.color = color
        self.memory = memory
        self.specification = specification
        self.plus = plus
    }
}

class iPhoneBuilder {
    private var color = "기본"
    private var memory = 100
    private var specification = "128GB"
    private var plus = false
    
    typealias BuilderClosure = (iPhoneBuilder) -> ()
    
    //자신은 반환해야 합니다
    func setColor(_ c: String) -> iPhoneBuilder {
        self.color = c
        return self
    }
    
    func setMemory(_ m: Int) -> iPhoneBuilder {
        self.memory = m
        return self
    }
    
    func setSpecification(_ s: String) -> iPhoneBuilder {
        self.specification = s
        return self
    }
    
    func setPlus(_ p: Bool) -> iPhoneBuilder {
        self.plus = p
        return self
    }
    
    func build() -> iPhone {
        return iPhone(color: color, memory: memory, specification: specification, plus: plus)
    }
    
    init(builder: BuilderClosure) {
        builder(self)
    }
}
```

```swift
let iphoen12 = iPhoneBuilder(builder: {
    $0.setPlus(false).setMemory(200).setColor("red").setSpecification("128GB").build()
})
    
let custemiPhone = iPhoneBuilder(builder: {
    $0.build()
})
```

[Builder Pattern 예제코드](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/GoF-BuilderPattern)