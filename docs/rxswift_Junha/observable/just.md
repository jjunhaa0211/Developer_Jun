---
title: 'Just?'
slug: '/rxswift/observable/just'
excerpt: 'Just?'
sidebar_position: 2
---

> **Just의 경우에는 값을 넣어주면 그대로 넘겨줍니다.**
> 

<img src="https://i.imghippo.com/files/DJ29y1724309134.png" alt="" border="0"/>

마블다이어그램을 보시면 **하나의 요소를 방출하고 끝나는 것**을 볼 수 있습니다. 때문에 우리가 알 수 있는 것은 `just`는 딱 하나의 `Element`를 방출 시키는 `Observable`입니다.

### 사용방법

아래는 `just`의 가장 기본적인 형태입니다:

```swift
Observable<Int>.just(1)
```

본래는 `create`를 사용하여 조금 섬세하게 할 수 있지만 아직 `create`를 알려주지 않았기 때문에 기본 형태들만 보고 가겠습니다:

```swift
Observable.just("Hello")
    .subscribe(onNext: { e in
        print(e)
     }, onCompleted: {
        print("completed")
    })
     // Hello
     // completed
```

위 코드처럼 문자열을 넣을 수도 있고 아래 코드 처럼 배열을 넣을 수도 있습니다:

```swift
Observable.just([1,2,3])
    .subscribe(onNext: { arr in
        print(arr)
        })
    .disposed(by: disposeBag)
    // [1,2,3]
```

지금처럼 `just`를 타입추론을 활용해서 데이터를 넣어줄 수도 있지만 아래 코드처럼 `just`의 타입을 제한할 수도 있습니다.

```swift
let justObservable: Observable<Int> = Observable.just(1)
```