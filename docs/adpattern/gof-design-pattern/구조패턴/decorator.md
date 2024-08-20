---
title: 'Decorator?'
slug: '/gof/structural/decorator'
excerpt: 'Decorator?'
sidebar_position: 2
---

### 데코레이터 패턴이란?

데코레이터 패턴은 주어진 상황과 용도에 따라 객체에 추가적인 책임을 부여하는 디자인 패턴입니다. 이 패턴은 기능 확장이 필요할 때 서브클래싱을 대신하여 사용할 수 있으며, 기존 객체의 동작을 포함하는 특수 래퍼를 만드는 방식으로 작동합니다.

### 데코레이터 패턴의 다른 이름은 무엇인가요?

데코레이터 패턴은 객체를 자기 자신으로 감싸면서 점점 큰 블록을 형성하는 특징 때문에 'Wrapper pattern'이라고도 불립니다. 또한, 작은 블록에서 시작해 점차 큰 블록으로 확장된다는 점에서 'Structural pattern'이라는 명칭으로도 알려져 있습니다.

### 데코레이터 패턴의 사용 시기

- 개별 객체에 추가 기능을 부여하면서 다른 객체들에 영향을 주지 않고자 할 때
- 동적으로 객체 기능을 추가하거나 제거할 필요가 있을 때
- 상속을 사용한 기능 확장이 어려울 때

### 데코레이터 패턴의 이해를 돕는 예제

데코레이터 패턴을 이해하는 데 도움이 되는 좋은 비유는 옷을 입는 것입니다. 추운 날씨에는 스웨터를 입고, 그 위에 재킷을 추가하고, 비가 오면 그 위에 비옷을 입습니다. 이처럼 옷은 기본적인 보호 기능을 확장하지만, 필요에 따라 쉽게 추가하거나 제거할 수 있습니다.

### 데코레이터 패턴의 장단점

#### 장점

- 상속을 통한 하위 클래스 생성 없이 객체 기능을 확장할 수 있습니다.
- 여러 객체를 래핑하여 다양한 동작을 조합할 수 있습니다.
- 단일 책임 원칙을 준수하여, 각 데코레이터는 특정 기능에만 집중합니다.
- 런타임에 객체에 책임을 추가하거나 제거할 수 있습니다.

#### 단점

- 데코레이터의 사용으로 코드 복잡도가 증가할 수 있습니다.
- 데코레이터 스택에서 특정 데코레이터를 제거하는 것이 복잡할 수 있습니다.
- 데코레이터의 기능이 스택의 순서에 의존할 수 있습니다.

### Swift에서의 데코레이터 패턴 예제

Swift에서 데코레이터 패턴을 구현하는 방법을 보여주는 간단한 예제입니다. 

```swift
protocol Coffee {
    func cost() -> Double
    func ingredients() -> String
}

class SimpleCoffee: Coffee {
    func cost() -> Double {
        return 2.0
    }

    func ingredients() -> String {
        return "Coffee"
    }
}

class CoffeeDecorator: Coffee {
    private let decoratedCoffee: Coffee
    
    required init(decoratedCoffee: Coffee) {
        self.decoratedCoffee = decoratedCoffee
    }
    
    func cost() -> Double {
        return decoratedCoffee.cost()
    }
    
    func ingredients() -> String {
        return decoratedCoffee.ingredients()
    }
}

class MilkDecorator: CoffeeDecorator {
    override func cost() -> Double {
        return super.cost() + 0.5
    }
    
    override func ingredients() -> String {
        return super.ingredients() + ", Milk"
    }
}

class SugarDecorator: CoffeeDecorator {
    override func cost() -> Double {
        return super.cost() + 0.3
    }
    
    override func ingredients() -> String {
        return super.ingredients() + ", Sugar"
    }
}

// 사용 예제
var myCoffee: Coffee = SimpleCoffee()
myCoffee = MilkDecorator(decoratedCoffee: myCoffee)
myCoffee = SugarDecorator(decoratedCoffee: myCoffee)

print("Cost: \(myCoffee.cost())") // 출력: Cost: 2.8
print("Ingredients: \(myCoffee.ingredients())") // 출력: Ingredients: Coffee, Milk, Sugar
```

[Decorator Pattern 예제코드](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/GoF-DecoratorPattern)
