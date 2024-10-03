---
title: 'Observable?'
slug: '/rxswift/observable'
excerpt: 'observable란?'
sidebar_position: 1
---

`Observable`은 `RxSwift`의 심장이라고도 불리는 녀석입니다. 저는 옛날에 `Observable`, `Observable Sequence`, `Sequence`가 전부 다른 용어인줄 알고 많이 곤란했었습니다. `Observable`들은 일정한 기간 동안 계속해서 이벤트를 생성하고 이를 `Marble duagran`으로 표현하게 됩니다.

### Observable 생명주기

어떤 구성요소를 가진 `next` 이벤트를 가지는 `next` 이벤트를 계속 방출할 수 있고 `error` 이벤트를 방출해서 완전히 종료할 수도 있으며 `complete` 이벤트를 방출하여 완전히 종료 시킬 수도 있습니다.

### Observable 사용방법

```swift
Observable<Type>
```

선택적으로 `제네릭`하고 있기 때문에 어떤 형태로 방출 할 것인지 타입을 정할 수 있습니다.

### 이벤트 타입

`Observable`의 생명주기를 보셨다면 `next`, `error`, `complete`를 이해하셨을 것입니다. 추가적으로 `Observable`의 이벤트는 네 가지가 있습니다.

- `onNext`
- `onError`
- `onCompleted`
- `onDisposed`

`Observable`을 `subscribe`하면 이벤트를 전달을 받고 상황에 따라 액션을 내뱉습니다.

`onNext`는 새로운 요소들을 방출할 때 마다 `onNext` 메소드가 호출되게 됩니다.
`onError`는 잘못된 값이 거나 오류가 발생할 경우 `onError` 메소드가 호출됩니다.
`onCompleted`는 에러가 발생하지 않고 더 이상 발생할 데이터가 없다면 `onCompleted` 메소드가 호출됩니다.
`onDisposed`는 `disposed(버려진)` 경우 끝났을 때  호출됩니다. 

### 사용방법

`Observable`이 시간의 흐름에 따라서 그리고 각 상황에 맞는 이벤트를 방출하고 그 이벤트를 `Observable`을 구독하여 이벤트에 따라 액션을 취한다는 사실을 알았습니다.

예를 들어서 `1, 2, 3, 4`를 순차적으로 방출하는 `Observable`이 있다고 합시다. 그러면 `Observable`이 방출하게 될 `1, 2, 3, 4`에 대해 어떻해야할까요? 

`Observable`에 담아 놓기만 한다면 아무것도 할 수가 없어요 이를 `Subscribe(구독)`해야합니다. 그래야 해당 `Observable`을 방출할 수 있습니다. 

다른 많은 `Observable`을 공부하기전 `of`에 대해서 먼저 한번 공부해볼까요?

```swift
let testObservable = Observable.of(1,2,3,4)
testObservable.subscribe()
```

이렇게 `subscribe()`를 해주시면 내용물을 받을 준비가 되셨다고 생각하시면 됩니다. 현재는 데이터를 방출하지는 않습니다. 다만 방출할 준비는 된 것이죠 여기서 저희가 위에서 배운 이벤트 타입을 사용해주시면 됩니다. `onNext`, `onError`, `onCompleted`, `onDisposed` 이벤트에 대한 처리를 해야합니다. 이때 저희가 원하는 것은 `1,2,3,4` 데이터를 방출하는 것이므로 `onNext`를 사용해서 데이터를 받을 수 있습니다.

코드로 예시를 볼까요:

```swift
testObservable.subscribe { #Element# in
	#code#
} onError: { #Error# in
	#code#
} onCompleted: {
	#code#
} onDisposed: {
	#code#
}
```

위 코드에서 `Element`를 받을 수 있는 곳이 `onNext`입니다. 이것에서 `Element`를 받고 `1,2,3,4`를 받을 수 있을 것입니다.

한번 완성된 코드를 봅시다. 아래 코드는 데이터를 전달 받고 출력하는 것입니다:

```swift
testObservable.subscribe { element in
    print("Observable: \(element) 출력")
} onError: { error in
    print(error.localizedDescription)
} onCompleted: {
    print("Observable 종료")
} onDisposed: {
    print("Observable Disposed")
}
```

위 코드를 출력하게 된다면 아래와 같이 출력 결과가 나오게 됩니다:

```swift
Observable 1 출력
Observable 2 출력
Observable 3 출력
Observable 4 출력
Observable 종료
Observable Disposed
```

위 예제를 이해하셨다면 `Observable`을 구독해서 방출하는 값 또는 이벤트에 대해 처리를 해주는 것이 기본적인 `Observable`과 `subscribe`의 관계 원리입니다.

`Observable`은 시간의 흐름에 따라 이벤트를 방출해주는 녀석이고 방출하는 이벤트에 관심있는 곳에서 구독을 해서 이벤트에 따라 액션을 취할 수 있습니다.