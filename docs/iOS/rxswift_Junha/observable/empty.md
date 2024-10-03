---
title: 'empty?'
slug: '/rxswift/observable/empty'
excerpt: 'empty?'
sidebar_position: 6
---
> **empty**는 어떠한 **항목도 방출하지 않고**, **즉시 onCompleted()를 호출**하여서 **정상적으로 종료**되는 Observable을 생성합니다.
> 

<img src="https://i.imghippo.com/files/B3cj61724378910.png" alt="" border="0"/>

마블다이어그램을 보시면 어떠한 이벤트도 방출하지 않습니다. 다만 `Empty Operator`를 통해 `Observable`을 생성할 경우, `onCompleted()` 메서드를 호출 후 스트림이 정상 종료 됩니다. 또한 어떤 항목도 방출하지 않기 때문에 `onNext`의 이벤트를 호출하지 않고 바로 `onComplete`가 방출되어 스트림이 정상 종료됩니다. 즉 빈 값으로 종료시키는 것입니다.

### 사용방법

`RxSwift`를 사용하다보면 초기화하고 싶을 경우가 있을 수 있습니다. 하지만 아래의 처럼 초기화 하면 에러가 나게됩니다:

```swift
let emptyObservable: Observable = Observable<Any>()
```

`'Observable<Element>' initializer is inaccessible due to 'internal' protection level`

이를 초기화 하는 방법은 `empty()`를 사용하면 아래 코드처럼 빈 `Observable`을 선언할 수 있습니다:

```swift
let emptyObservable: Observable = Observable<Any>.empty()

emptyObservable
    .subscribe { print($0) }
    .disposed(by: disposeBag)
    
// completed
```

위 코드처럼 `Observable`을 사용해서 초기화 시킬 경우도 있지만 마블다이어그램 쪽에서 설명한 것과 같이 `completed`되는 `Observable`이나 `element`가 0개인 `Observable`을 의도적으로 호출하고 싶을 때 유용하게 사용됩니다.

결론적으로 즉시 종료되는 `Observable`을 반환하고 싶을 때나, 의도적으로 빈 값을 내뱉도록 하고 싶을 경우에 사용합니다.

이는 주로 빈 `Observable`을 만들고 싶거나 `Observable`을 초기화하고 싶을 때 또는 즉시 종료하고 싶거나 의도적으로 0개의 `Observable`을 `return` 하고 싶은 경우 사용합니다.

### 구현부

```swift
public static func empty() -> Observable<Element> {
    EmptyProducer<Element>()
}

final private class EmptyProducer<Element>: Producer<Element> {
    override func subscribe<Observer: ObserverType>(_ observer: Observer) -> Disposable where Observer.Element == Element {
        observer.on(.completed)
        return Disposables.create()
    }
}
```

`EmptyProduce`에서 보면 `onCompleted`를 처리해주고 있다는 것을 알 수 있습니다.

### 주의

`empty`는 타입을 추론 할 수 없습니다. 때문에 `empty`를 사용할 경우 타입을 필수로 명시 해주어야합니다.