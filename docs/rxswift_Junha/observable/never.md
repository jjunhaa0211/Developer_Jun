---
title: 'never?'
slug: '/rxswift/observable/never'
excerpt: 'never?'
sidebar_position: 7
---

> **never**는 **Observable**이 아무런 이벤트도 방출시키지 않게 합니다.
> 

<img src="https://i.imghippo.com/files/guKVu1724641702.png" alt="" border="0"/>

마블다이어그램을 보시면 아무것도 **`emit`** 하지 않고 종료마저 되지 않습니다. 그 뜻은 무한한 상태로 스크림이 종료되지 않는다는 것을 알 수 있습니다.

### 사용방법

아래는 `never`의 가장 기본적인 형태입니다:

```swift
Observable<Int>.never()
```

`never`는 `subscribe`하면 `onNext`나 `onCompleted`는 반환되지 않고 **오직 `onDisposed`만을 할 수 있습니다.**

`never`를 사용하게 된다면 아무런 이벤트를 방출시키지 않는 `Observable`을 생성할 수 있습니다.

### 뜯어보기

```swift
public static func never() -> Observable<Element> {
    NeverProducer()
}

final private class NeverProducer<Element>: Producer<Element> {
    override func subscribe<Observer: ObserverType>(_ observer: Observer) -> Disposable where Observer.Element == Element {
        Disposables.create()
    }
}
```

`empty`와의 차이점은 `onComplete`가 구현되지 않아있습니다. 때문에 `empty`는 `onComplete`를 호출시켜서 스크림을 종료시키지만 `never`는 `onComplete`를 호출하지 않아서 스크림이 종료되지 않습니다.