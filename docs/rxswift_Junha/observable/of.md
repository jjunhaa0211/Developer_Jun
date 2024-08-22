---
title: 'of?'
slug: '/rxswift/observable/of'
excerpt: 'of?'
sidebar_position: 3
---

> **of**는 여러개의 요소들을 순차적으로 방출할 수 있습니다.
> 

<img src="https://i.imghippo.com/files/QbPQZ1724310554.png" alt="" border="0"/>

마블다이어그램을 보시면 하나의 요소만들 방출하고 끝나는 `just`와 달리 여러개의 **데이트를 순차적으로 방출**하는 것을 볼 수 있습니다.

### 사용방법

아래는 `of`의 가장 기본적인 형태입니다:

```swift
Observable<String>.of("J", "U", "N", "H", "A")
```

아래는 `of`를 사용하는 기본적 예시들입니다:

```swift
Observable<String>.of("J", "U", "N", "H", "A")
    .subscribe(onNext: { s in
        print(s)
     }, onCompleted: {
        print("completed")
    })
     // J
     // U
     // N
     // H
     // A
```

`of` 안에 들어가는 요소들은 타입추론되어서 타입 제한이 생기기 때문에 하나의 타입으로 통일시켜주어야합니다. 때문에 아래와 같이 하면 안됩니다.

```swift
Observable.of("J", 1, "N", 3, "A") // 에러
```

때문에 위와 같은 코드를 작동시키고 싶다면 `Any`를 사용해서 합법적으로 사용할 수 있습니다.

```swift
Observable<Any>.of("J", 1, "N", 3, "A") // 성공
```

또 주의할 점은 아래와 같이 배열을 하나 넣었을 경우 `just`와 마찬가지로 배열 하나를 하나로 인지하고 하나만 뱉습니다:

```swift
Observable.of([1, 2, 3])
// [1,2,3]
```

때문에 파라미터 하나를 하나의 항목으로 보기 때문에 이를 잘 인지해야합니다. `of`가 배열을 넣었을 때 해당 배열 자체를 방출하는 이유는 배열을 넣었을 경우 `Element`를 하나씩 방출하는 메서드가 있기 때문입니다.