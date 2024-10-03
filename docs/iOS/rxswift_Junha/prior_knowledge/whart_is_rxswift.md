---
title: 'RxSwift란?'
slug: '/rxswift/whart_is_rxswift'
excerpt: 'RxSwift에 대한 설명을 합니다.'
sidebar_position: 2
---

### RxSwift란

`RxSwit`는 **Reactive eXtension Swift**로 **관찰 가능한 시퀀스를 사용하여 비동기 및 이벤트 기반 프로그램을 구성하는 라이브러리**입니다. 

참고로 Swift 자체에 내장되어있는 라이브러리는 아니며 `ReactiveX`에서 만든 라이브러리입니다. `ReactiveX`에서는 `RxJava`, `RxJS`, `RxScala` 등등을 `Rx`를 꾸준히 릴리즈 하고 있습니다.

`RxSwift`를 한번에 이해시켜주는 자료를 보여드리겠습니다. (저는 **Wallaby**님이 설명한 `RxSwift`를 참고해서 말씀드리겠습니다. ~~이해가 너무 잘되었거든요)~~
우선 `Observable`을 유튜브로 치면 바로 영상을 제작하는 **유튜버**와 같은 것입니다. 그리고 우리가 **유튜버**가 만든 영상을 보고 재미있다고 한다면 저희는 **구독**을 하죠. 이것이 `Subscribe`입니다.

해당 **유튜버**가 어떤 영상을 올리는지 관심이 있으니까요.

`RxSwift`에서도 이렇게 `Observalbe(**유튜버**)`에서 `이벤트를 방출(동영상 업로드)` 하면 그에 따라 해당 액션을 취해야하는 녀석이 `Observable(유튜버)`을 `Subscribe(구독)` 하고 방출된 이벤트 (업로드 된 동영상)에 따라 해당 액션을 취하는 방식입니다.

<aside>
💡 **유튜버**가 영상을 제작해서 올리면 **구독자는 알림을 받고** **영상을 시청**한다.

</aside>

아래는 위 말을 `RxSwift`식으로 풀면:

<aside>
➡️ **Observable**이 이벤트를 방출하면 **Subscriber**는 **이벤트를 구독**하고 **액션**을 취한다.

</aside>

`Observable`이 이벤트를 방출하면 그 `Observable`을 구독한 `Subscriber`가 `Observable`이 방출한 이벤트를 가지고 액션을 취하는 것이 바로 `Rx`의 핵심입니다.

*이상 Wallaby님의 RxSwift 글은 독스 하단에 저작권에 링크가 있습니다.*

### RxSwift을 왜 사용해야하는 걸까?

저희가 API 통신을 하다보면, 성공할 경우도 있지만 실패할 경우도 존재하게 됩니다.

한번 실패하고 끝내면 여운이 남으니까 우리 2번만 재시도 해보는 것이 좋지 않을까? 라는 생각에 재시도 코드를 구현하면 아래와 같습니다:

```swift
enum IncredibleError: Error {
    case requestFailed
}

struct AwesomeResult {
    let message: String
}

func makeRequest(to name: String) throws -> AwesomeResult {
    let success = Bool.random()  // 무작위 성공/실패 시뮬레이션
    if success {
        return AwesomeResult(message: "Awesome result for \(name)")
    } else {
        throw IncredibleError.requestFailed
    }
}

func attempt<T>(_ retries: Int, action: () throws -> T) rethrows -> T {
    var triesLeft = retries
    while triesLeft > 0 {
        do {
            return try action()
        } catch {
            triesLeft -= 1
            if triesLeft == 0 {
                throw error
            }
        }
    }
    fatalError("This point should never be reached")
}

do {
    let finalResult = try attempt(2) {
        try makeRequest(to: "Junha")
    }
    print(finalResult.message)
} catch {
    print("Failed to get a successful response after 2 attempts")
}
```

이러한 코드가 나오겠네요. 그러면 위 코드가 편리해보이시나요? 조금 지저분하다는 생각도 들기도 하고 로직이 너무 복잡해서 굳이 내가 구현해야하나라는 생각이 들기도 할 것입니다. 이럴 때 `RxSwift`를 사용한다면 아래와 같이 표현할 수 있습니다:

```swift
enum IncredibleError: Error {
    case requestFailed
}

struct AwesomeResult {
    let message: String
}

func makeRequest(to name: String) -> Observable<AwesomeResult> {
    return Observable.create { observer in
        let success = Bool.random() // 무작위 성공/실패 시뮬레이션
        if success {
            observer.onNext(AwesomeResult(message: "Awesome result for \(name)"))
            observer.onCompleted()
        } else {
            observer.onError(IncredibleError.requestFailed)
        }
        return Disposables.create()
    }
}

let disposeBag = DisposeBag()

makeRequest(to: "Junha")
    .retry(2)
    .subscribe(
        onNext: { result in
            print(result.message)
        },
        onError: { _ in
            print("Failed to get a successful response after 2 attempts")
        }
    )
    .disposed(by: disposeBag)
```

`RxSwift`로만 바꾸었을 뿐인데 코드가 깔끔해졌습니다. 물론 지금 당장 보시기에는 정체불명의 문법들이 보이지만 추후에 `RxSwift`를 이해하시고 보셨다면 코드가 몹시 간결해진 것을 볼 수 있습니다.

이 뿐 아니라 비동기를 동기화 된 것인 것만양 작성할 수 있고 기존에 비동기 코드를 작성할 때 `DispatchQueue` 저기는 `MainQueue` 이런식으로 분산되어있는 코드를 하나의 비동기 코드로 개발할 수 있습니다.

그리고 제가 생각하는 `RxSwift`를 사용해야하는 이유는 크게 3가지가 있습니다. 첫번째로 콜백지옥을 벗어나기가 좋습니다. 이벤트 처리, 네트워크 처리를 하다보면 콜백 지옥 누구나 한번씩 경험해보았을 텐데요 `RxSwift`를 이용하면 가독성이 높아지고 스레드를 쉽게 넘나들 수 있어서 **콜백지옥을 벗어나기 쉬워집니다**. 두번째 이유는 **`Thread` 처리가 참 쉽다는 것입니다.** `MainThread`와 백그라운드 처리를 쉽게 넘나들 수 있으며 멀티 스레드 코드를 작성하는 시간도 낮춰줍니다. 마지막 세번째 이유는 iOS 개발자라면 `Swift`, `RxSwift`는 필수로 알아야한다는 인식이 많아져서 웬만한 개발자와 협업을 할때 `RxSwift`를 알고 있다면 협업이 수월할 수 있습니다.

### RxSwift의 단점

확실한 것은 너무 어렵습니다. 처음 `RxSwift`를 공부할 때 자료도 열심히 찾아보았고 글도 많이 읽어 보았지만 이상하게 이해가 되지 않았습니다. 이게 무슨 말인지… 근데 지금 와서 생각해보니까! `RxSwift`를 공부하기 전 `GCD`에 개념에 익숙해져있으면 조금 더 다가가기 쉬울 수 있습니다.

나머지는 추후에 써놓겠습니다! (딱히 어렵다 빼고 쓸게 없네요.)

하나 생각났는데! 클로저 사용이 많기 때문에 메모리 누수 및 순환 참조가 일어날 수 있어서 이를 피할 수 있도록 캡처 리스트를 신경써야합니다.