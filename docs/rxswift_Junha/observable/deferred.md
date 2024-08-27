---
title: 'deferred?'
slug: '/rxswift/observable/deferred'
excerpt: 'deferred?'
sidebar_position: 10
---

> **deferred**는 **Observable**이 생성되는 시점을 구독자에 의해서 **구독되기 전까지 미뤄주는 역할**을 합니다.
> 

<img src="https://i.imghippo.com/files/NJuHa1724721838.png" alt="" border="0"/>

`deferred` 연산자는 무언가를 `“미루는”` 연산자입니다. `Observervle`이 생 성되는 시점을 구독자에 의해서 구독되기 전까지 미뤄주는 역할을 하게됩니다. ~~시간이 제일 두려워~ 미루니~~~~

### 사용방법

`deferred`는 아래 선언부를 보시면 `Observerble`을 리턴해준다는 것을 알 수 있습니다:

```swift
public static func deferred(_ observableFactory: @escaping () throws -> Observable<Element>) 
    -> Observable<Element> {
    Deferred(observableFactory: observableFactory)
}
```

클로저를 통해서 `Observable`을 생성해주는데, `Observable`이 구독될 때까지 생성을 미루는 것을 보실 수 있습니다.

`deferred`의 경우 `Observable`에서 직접 호출이 가능합니다. 아래는 `deferred`의 가장 기본적인 형태입니다.

```swift
let deferredObservable = Observable<String>.deferred {
}
```

위 코드처럼 `deferred` 클로저 내에서 실제로 구독할 `Observable`을 리턴해주면 됩니다. 예를 들어 아래와 같은 `just` 코드가 있다고 할 때 `deferred`로 감싸주기를 원한다면 아래와 같이 할 수 있습니다.

```swift
// deferred에 감싸기 전
let ob = Observable.just("junha")

// deferred의 감싼 후
let deferredOb = Observable<String>.deferred {
    return Observable.just("junha")
}
```

지금부터는 어떤 경우에 `deferred`를 해주어야하는지 알려드리겠습니다.

```swift
let testObservable = Observable.just(doSomeMath())

func doSomeTest() {
    print("1 + 1 = 2")
}
```

이렇게 `mathObservable`을 구독하지 않았는데 `doSomething()`이 호출되는 것을 볼 수 있습니다.

`.just` 뿐만 아니라 `.from`, `.of` 도 모두 선언되는 시점에서 이런식으로 계산됩니다.

그런데 만약 위 코드 처럼 `doSomeTest()`의 함수가 간단한 로직이라면 구독되기 전에 미리 계산 해주는 것이 좋겠죠

하지만 여기서 `doSomeTest()` 라는 함수가 엄청 복잡해서 10초 이상 걸리는 큰 작업이라고 한다면 `Observeble`을 구독하기도 전에 그 10초를 소요시키는 것은 낭비가 되고 주요 스레드를 방해하는 불상사가 발생하게 됩니다.

실제 앱을 구동하였을 때는 앱이 10초간 멈춰있다가 불러와지게 보이게 됩니다.
이럴 때는 굳이 구독되기 전에 미리 계산을 할 필요가 없는 그런 `Observerble`들을 `deferred`로 처리해주는 것입니다.

```swift
let deferredSequence = Observable<Any>.deferred {
		return Observable.just(doSomeTest())
}
```

이렇게 감싸주게 된다면 구독이 되기 전까지는 `doSomeTest()` 이라는 작업을 실행하지 않게 됩니다.

아직 이해가 되지 않은 분들을 위해서 예제를 하나만 더 보고 가겠습니다.

```swift
func photoObservable() -> Observable<PhotoStatus> {
	return .just(Call.photoStatus())
}
```

위 코드와 같이 사진의 권한을 받아왔는지 아니면 받아오지 않았는지 상태를 보고하는 `Observable`이 있다고 해봅시다. 디폴드 값이 `false`라고 하였을 때 위와 같이 선언 되어있는 상태라고 한다면 `Observable`을 구독하기 전에 사용자가 사진 권한을 `false`에서 `true`로 변경했다고 합시다 그러면 `Observable`의 구독 결과는 어떻게 나올까요?

`Observable`이 구독하기 전에 생성 시점에서 가져와진 `false`가 나올 것입니다. 하지만 사용자가 설정한 권한의 상태는 `true`가 나올 것 입니다.

이러한 경우 아래와 같이 `Observable`을 구독하는 동시에 최신의 값을 가져오는 로직을 수행할 때 `deferred` 연산자가 유용하게 사용됩니다.

```swift
func photoObservable() -> Observable<PhotoStatus> {
	return Observable.deferred {
		return .just(Call.photoStatus())
	}
}
```

### 정리

무거운 작업의 `Observable`을 만들어 사용할 경우에는 `deferred`를 사용하여 구독하는 시점과 동시에 작업을 시작할 수 있도록 하여서 쓸데 없는 낭비를 막을 수 있고 구독과 동시에 최신값이 필요한 경우 `Observable`을 `deferred`로 삼싸서 사용합니다.

### 실습

`RxSwift`는 무조건 실습이 답입니다.

주로 `Observable`을 생성하는 `create`와 달리 구독을 해줘야 `Observable`이 생기기 때문에, 당장은 필요하지 않지만 필요한 상황에 구독하여 생성할 수 있는 것이 `deferred`입니다.

직접적으로 네트워킹을 테스트 해보면 너무 좋을 수 있지만 조금 어렵기에 한번 이번 실습은 터치를 했을 때 `Observer`가 구독되는 예제를 만들어봅시다.

- 실습 예제
    
    ```swift
    var touched = true
    
    let testOb1 = Observable<Stirng>.deferred {
    	touched.toggle()
    
        if touched {
            return Observable.of(["T","R","U","E"])
        } else {
            return Observable.of(["F","A","L","S","E"])
        }
    }
    
    testOb1.subscribe(onNext: {
        print($0)
    }).disposed(by: disposeBag)
    
    // TRUE
    
    testOb1.subscribe(onNext: {
        print($0)
    }).disposed(by: disposeBag)
    // FALSE
    ```