---
title: 'from?'
slug: '/rxswift/observable/from'
excerpt: 'from?'
sidebar_position: 4
---
> from은 배열로 요소를 받은 후에 하나하나 요소를 방출해주는 연산자

<img src="https://i.imghippo.com/files/gf8we1724316114.png" alt="" border="0"/>

마블다이어그램을 보시면 **하나의 요소를 방출하고 끝나는 것**을 볼 수 있습니다. 때문에 우리가 알 수 있는 것은 `just`는 딱 하나의 `Element`를 방출 시키는 `Observable`입니다.

### 사용방법

아래는 `from`의 가장 기본적인 형태입니다:

```swift
Observable.from(["junha", "goodjunha", "jjunhaa"])
```

`from`은 배열을 인자로 받습니다. 그리고 아래는 from의 예시입니다:

```swift
Observable.from(["junha", "goodjunha", "jjunhaa"]).subscribe { e in
    print(e)
} onCompleted: {
    print("completed")
}

// junha
// goodjunha
// jjunhaa
// completed
```

그러면 웬지 모르게 전에 배웠던 of 연산자와 비슷해보입니다. 하지만 제가 전에도 설명했듯이 of 연산자는 배열을 하나의 항목으로 보기 때문에 배열 자체를 하나로 간주하고 뱉습니다. 하지만 from에 경우에는 배열의 값 하나한를 Observable의 요소로 방출합니다.

아래 코드는 from과 of의 연산자입니다.

```swift
public static func of(_ elements: Element ..., scheduler: ImmediateSchedulerType = CurrentThreadScheduler.instance) -> Observable<Element> {
    return ObservableSequence(elements: elements, scheduler: scheduler)
}

public static func from(_ array: [Element], scheduler: ImmediateSchedulerType = CurrentThreadScheduler.instance) -> Observable<Element> {
    return ObservableSequence(elements: array, scheduler: scheduler)
}
```

두 연산자의 차이점은 배열로 받는지 아니면 그냥 데이터를 받는지의 차이점 이외에는 차이점이 없습니다.