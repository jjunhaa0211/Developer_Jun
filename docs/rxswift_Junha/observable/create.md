---
title: 'create?'
slug: '/rxswift/observable/create'
excerpt: 'create?'
sidebar_position: 8
---

> **Create**는 직접적인 코드 구현을 통해 옵저버 메서드를 호출하여 옵저버블을 생성합니다.
> 

<img src="https://i.imghippo.com/files/wXqaf1724716540.png" alt="" border="0"/>

`onNext`, `onError`, `onCompleted`, `onDisposed` 이러한 이벤트를 방출 시킬 수 있게 도와주는 것을 `create` 연산자라고 합니다.

`create` 연산자를 이용하면 자유 자제로 원하는 시점의 이벤트를 방출 시키는 `Observable`을 생성하고 `subscribe`를 통해 사용할 수 있습니다.

예를 들어서 `create`를 사용하여 `API`를 호출하는 `Observable`을 생성하여 결과를 `onNext`를 통해 구독자에게 결과 값을 전달하는 등 응용이 될 수 있습니다.

### 사용방법

아래는 `create`의 가장 기본적인 형태입니다:

```swift
let testObservable = Observable<Int>.create { **observer** in
    return Disposables.create()
}
```

위 코드에서는 `Observable<Int>`를 통해서 제네릭으로 타입을 받고 `onNext`로 방출시킬 요소의 타입입니다. 이제 `create`를 통해서 `onNext`, `onError`, `onCompleted` 이벤트를 방출 할 수 있습니다. 또한 마지막에 리턴되는 `disposable`는 `Disposables.create()` 이며 이는 필수 구현 요소입니다. 위 내용이 이해가 되지 않았다면 다시한번 `Disposables`를 이해하는 것을 추천드립니다.

만약에 위 코드에서 숫자 1을 내뱉는 `testObservable1`을 만들고 싶다면 아래와 같이 사용하면 됩니다:

```swift
let testObservable1 = Observable<Int>.create { observer in
    **observer.onNext(1)**
    observer.onCompleted()
    
    return Disposables.create()
}
```

이제 만들어진 `observable`을 구독해주어서 실행결과가 잘 나오는지 확인해보도록 하겠습니다:

```swift
testObservable1.subscribe(onNext: { e in
    print(e)
}, onCompleted: {
    print("completed")
}).disposed(by: disposeBag)

//출력 결과
// 1
// completed
```

지금까지는 변수를 통한 `create` 사용방법을 알아보았습니다. 하지만 네트워크 통신 등을 할 때 변수로 사용하는 `create` 보다는 아래와 같이 함수로 사용하는 `create`가 훨씬 많습니다.

```swift
func testObservable1() **-> Observable<Int>** {
    **return Observable<Int>.create** { observer in
        observer.onNext(1)
        observer.onCompleted()
        
        return Disposables.create()
    }
}
```

```swift
testObservable1().subscribe(onNext: { e in
    print(e)
}, onCompleted: {
    print("completed")
}).disposed(by: disposeBag)

//출력 결과
// 1
// completed
```

위와 같이 사용한다면 변수대신 함수를 사용할 수도 있습니다. 이때 만약 여러분이 함수의 초기값을 선언해주고 싶지 않다면 `Observable<T>`를 사용해서 타입을 **제네릭으로 받을 수 있습니다.**

### 사용 예시

아래 데이터는 날씨를 받는 단순한 로직입니다. 천천히 이해해보세요

```swift
// 날씨 데이터 모델
struct WeatherData {
    let temperature: Double
    let condition: String
}

// 서버에서 날씨 데이터를 요청하는 함수
func fetchWeatherData(for city: String) -> Observable<WeatherData> {
    return Observable.create { observer in
        print("Fetching weather data for \(city)...")
        
        // 성공 시 가상의 날씨 데이터 반환
        let weatherData = WeatherData(temperature: 23.0, condition: "Sunny")
        observer.onNext(weatherData)
        observer.onCompleted()
        
        // Disposable 리턴: 요청이 취소되었을 때 실행되는 코드
        return Disposables.create()
    }
}
```

생각보다 그렇게 크게 어렵지는 않았을 것이라고 믿습니다. 일반적인 `excaping` 방식과도 유사하기에 이해가 쉽지 않았나 생각해 봅니다.

이런식으로 만든 `create`는 아래와 같이 사용할 수 있습니다:

```swift
func testWeatherRequest() {
    let disposeBag = DisposeBag()
    
    fetchWeatherData(for: "Seoul")
        .subscribe(
            onNext: { weatherData in
                print("온도: \(weatherData.temperature)°C, 상태: \(weatherData.condition)")
            },
            onError: { error in
                print("날씨 데이터를 가져오지 못했습니다: \(error.localizedDescription)")
            },
            onCompleted: {
                print("날씨 데이터 가져오기 완료.")
            }
        )
        .disposed(by: disposeBag)
}
```

### 왜 일반적인 함수로 escaping 하지 않을까?

물론 `create`만 하고 비지니스 로직은 **RxSwift**를 사용했다고 **RxSwift**를 할줄안다고는 할 수 없습니다.

예를 들어서 `A, B`를 다운받는다고 생각해봅시다. `B`는 `A`가 있어야만 다운 받을 수 있는 파일이라는 전제를 두었을 때 `A`와 `B`를 동시에 다운 받는다고 하면 둘 중 누가 먼저 다운될지 모릅니다. 또한 `B`가 먼저 다운받아진다면 대참사가 일어납니다. 그렇다고 `A`를 먼저 받고 `B`를 받는 로직은 효율적이지 못하죠.

주로 이러한 시간차가 있는 코드들은 `escaping cloure`를 사용해 해결하게 된다면 **콜백 지옥의 시작**, **에로우 코드의 탄생**이됩니다. 또한 코드의 길이도 길어지게 되고, 가독성도 떨어지고 유지보수도 어려워지게됩니다.

하지만 **RxSwift**를 사용하게 된다면 반응형 프로그래밍을 사용하다보니 `A, B` 가 모두 다운이 완료 될 때까지 기다리도록 `Observable`을 콤바인 시켜서 모두 다운이 완료되면 그때 이벤트를 방출시켜 액션을 취하도록 할 수 있습니다. 내장 함수가 많다보니까 코드의 길이가 줄어들고 사용하기가 편하다는 장점도 있습니다.

### 뜯어보기

```swift
public static func create(_ subscribe: @escaping (RxSwift.AnyObserver<Self.Element>) -> RxSwift.Disposable) -> RxSwift.Observable<Self.Element>
```

`subscribe` 파라미터는 `AnyObserver`를 가져와 `Disposable`을 반환하는 이스케이프 클로저입니다.

### 동작원리

```swift
let testObservable = Observable<Int>.create { observer in
    observer.onNext(1)
    observer.onCompleted()
    return Disposables.create()
}

testObservable.subscribe(...)
```

저희가 이러한 코드를 개발하고 실행시키면 어떻게 되는지 확인해봅시다. `create`는 `Observable`이 아니라 `ObservableType`의 타입메서드로 정의되어있습니다:

```swift
class Observable<Element>: ObservableType {
	typealias Element = Element
	func subscribe<Observer: ObserverType>(_ observer: Observer) -> Disposable where Observer.Element == Element {
		fatalError()
	}
}
```

`Observable`을 뜯어보게 되면 `ObservableType` 프로토콜을 채택하고 있습니다. 저희가 `create`라고 불렀던 메서드는 `Observable`의 메서드가 아니라 `ObservableType`의 타입 메서드인겁니다.

```swift
extension ObservableType {
	public static func create(_ subscribe: @escaping (AnyObserver<Element>) -> Disposable) -> Observable<Element> {
		return AnonymousObservable(subscribe)
	}
}
```

위 코드를 보시면 `create`는 `subscribe`이라는 이름의 `excaping closure`를 받고 있습니다. 이 클로저는 `AnyObserver`를 인자로 받고 `Disposable`을 반환하는 클로저입니다.

```swift
let testObservable = Observable<Int>.create { observer in
    observer.onNext(1)
    observer.onCompleted()
    return Disposables.create()
}

testObservable.subscribe(...)
```

위 클로저를 다시 보시면 `observer`라는 입력을 받아서 `observer`의 `onNext` 메서드와 `onCompleted` 메서드를 실행하고, 마지막에는 `Disposables.create()` 를 통해서 `Disposable`을 반환하는 클로저입니다.

`create` 메서드에서는 이 클로저를 그대로 사용하지는 않고 `AnonymousObservable`의 생성자에 클로저를 그대로 넘겨주고 있습니다. 그리고 `AnonymousObservable`이 `create`의 결과로 반환되고 있습니다.

그러면 이제 `AnonymousObservable`이 어떤 클래스 인지 확인해봅시다.

```swift
class AnonymousObservable<Element>: Producer<Element> {
	typealias Subscribehandler = (AnyObserver<Element>) -> Disposable
	
	let subscribeHandler: SubscribeHandler
	
	init(_ subscribeHandler: @escaping SubscribeHandler) {
		self.subscribeHandler = subscribeHandler
	}
	
	override func run<Observer: ObserverType>(_ observer: Observer, cancle: Cancleable) -> (sink: Disposable, subscription: Disposable) where Observer.Element == Element {
		let sink = AnonymousObservableSink(observer: observer, cancel: cancel)
		let subscription = sink.run(self)
		
		return (sink: sink, subscription: subscription)
	}
}
```

`AnonymousObservable` 안에는 생성자도 있고, `run`이라는 메서드도 존재합니다.

생성자는 `SubscribeHandler` 타입을 인자로 받아서 `subscribeHandler` 프로퍼티에 할당해주고 반환합니다. 그러면 `SubscribeHandler`는 전에 보았던 create의 파라미터 타입과 동일한 `(AnyObserver) → Disposable`입니다.

결국 저희가 전달한 클로저가 `AnonymousObservable`의 `subscribeHandler`에 저장되고, 이 `AnonymousObservable`의 인스턴스가 `create` 메서드의 결과로 반환된다고 할 수 있습니다.

내용을 정리하면 아래와 같습니다.

1. `create` 메서드를 호출하면 클로저를 전달한다.
2. `create` 메서드는 `ObservableType`에 정의되어 있고, 구현은 `AnonymousObservable` 인스턴스를 생성해 반환하도록 작성되어있습니다.
3. `AnonymousObservable`을 생성할 떄는 `create`를 호출하며 전달한 클로저가 `subscribeHandler`에 저장됩니다.