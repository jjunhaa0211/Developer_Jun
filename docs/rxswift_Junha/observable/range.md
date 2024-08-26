---
title: 'range?'
slug: '/rxswift/observable/range'
excerpt: 'range?'
sidebar_position: 5
---

> **range**는 for문과 같이 Observable에서도 요소를 **단순히 연속적으로 반복해서 방출**시키는 연산자

<img src="https://i.imghippo.com/files/dV7vl1724318128.png" alt="" border="0"/>

마블다이어그램을 보시면 `n`과 `m`을 입력하였을 때 `n`에서 정해진 수부터 사용자가 `m`으로 정한 수까지 **연속적으로 반복 방출**하는 것을 볼 수 있습니다.

### 사용방법

아래는 `range`의 가장 기본적인 형태입니다:

```swift
Observable.range(start: 0, count: 10)
```

`range`를 호출하려면 `start`와 `count`라는 파라미터가 있습니다. 이때 `start`가 생성할 정수 시퀀스의 시작 값이고 `count` 값이 생성할 정수의 개수입니다.

예를 들어, `Observable.range(start: 0, count: 10)` 는 0부터 시작하여 10개의 정수를 순차적으로 방출하는 `Observable`을 반환합니다.

방출되는 값은 `0, 1, 2, ..., 9`가 됩니다. 쉽게 생각해서 `start..<count`로 해석하면됩니다.

아래 코드는 위 설명을 바탕으로 코드화 시킨 것입니다:

```swift
Observable.range(start: 0, count: 10).subscribe(onNext: { element in
    print(element)
})

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

단순 반복 요소 방출하는 `Observable`를 만들고 싶다면 `range`를 사용하면 될 것 같습니다.

여기서 추가적으로 *Wallaby*님에게 배운건데 `from`과 `range`를 동일하게 사용할 수 있다고 합니다. 아래는 그 예제의 코드입니다:

```swift
let fromObservable = Observable.from(0..<10)

rangeObservable.subscribe(onNext: { element in
    print(element)
})
```

이런식으로 사용하게 된다면 `from(0..<10)` 과 `range(start: 0, count: 10)` 과 동일한 효과를 보실 수 있습니다. 스타일 차이입니다.

### 실습 예제

`range`로 구구단을 만들어봅시다.

- 구구단 예제
    ```swift
    Observable.range(start: 1, count: 9)
        .subscribe(onNext: {
            print("2 * \($0) = \(2*$0)")
        })
    ```