---
title: 'disposable?'
slug: '/rxswift/observable/disposable'
excerpt: 'disposable?'
sidebar_position: 8
---
> Disposable는 각종 Dispasable을 반환하는 create 메소드입니다.
> 

> **dispose**는 구독을 취소하는 것을 말합니다.
> 

개념이 조금 어려운 것 같네요. 그럼 천천히 한번 분석해보도록 하겠습니다. 현재 여러분이 **RxSwift**를 실습해보면서 아마 `dispose`는 들어보았나요? `dispose`를 한국어로 바꾸면 **“처리하다/없애다”** 입니다. 그러면 다시 저희가 `Observable`을 구독할 때는 어떻게 한다고 했을까요? 맞습니다. `subscribe`를 통해서 구독을 하게 됩니다. 그렇다면 구독을 어떻게 해지할 수 있을까요? 구독을 해지할 수 있도록 해주는 것이 `Disposable`입니다.

아직은 여려우실 것 같습니다. `Observable`을 구독할 때 사용하는 `subscribe`의 원래 형태는 아래와 같습니다:

```swift
public func subscribe() -> Disposable
```

반환 타입이 `Disposable`이라는 것을 알 수 있습니다.

구독되어있는 `Observable`를 더 이상 이벤트를 받고 싶지 않을 때 해당 구독을 취소할 수 있는 수단인 `Disposable`을 타입의 값을 리턴하게 됩니다.

```swift
public protocol Disposable {
	func dispose()
}
```

`dispose`는 **프로토콜로 선언**되어있는 것을 보실 수 있습니다. 이때 저희가 알 수 있는 것은 `Observer`는 `Observable`을 구독하기 위해 `subscribe`을 사용하는데 `subscribe` 메서드를 구독을 해지할때는 `Disposable`의 타입을 반환하고 반환된 값을 `Disposable` 타입의 값에 대고 `dispose()` 메서드를 호출하면 구독을 해제할 수 있습니다.

```swift
Observable.just(1)
    .subscribe(onNext: { e in
        print(e)
    }).dispose()
```

### DisposeBag

어디서 많이 들어보셨나요? 그럼 당신은 **RxSwift**를 해보셨던 분이실 것 같습니다. 말그대로 `DisposeBag`는 `dispose`를 담아두는 가방과 같은 것입니다. 일반적인 `dispose()`는 하나하나 처리를 해주어야합니다:

```swift
class testViewController: UIViewController {
	private var test1: Disposable?
	private var test2: Disposable?
	private var test3: Disposable?
	
	deinit {
		test1?.dispose()
		test2?.dispose()
		test3?.dispose()
	}
}
```

이렇게 일일이 처리해주어야합니다. 이렇게 되면 코드가 더러워지고 효율적이지 못합니다. 그래서 **RxSwift**는 이러한 문제를 해결하고자 `DisposeBag`을 만들었습니다:

```swift
public final class DisposeBag: DisposeBase {
	private var disposables = [Disposable]()
	
	deinit {
		self.dispose()
	}
}
```

이제 한번이 이해가 되실 것 입니다. `DisposeBag`은 `Disposable`을 담은 객체라는 것을 알 수 있습니다. 그렇다면 앞으로는 메모리를 해제할 때 아래와 같이 `disposeBag`을 담고 해제하면됩니다:

```swift
private var disposeBag: DisposeBag = .init()
// let disposeBag = DisposeBag()
```

<aside>
⚠️ disposeBag을 전역 변수가 아닌 지역 변수로 선언할 경우, 예를 들어 viewDidLoad에 넣었을 경우 메소드가 끝날 때 disposeBag도 같이 해제 되기 때문에 동작하지 않을 것입니다. 때문에 보통의 상황에서는 disposeBag을 전역에 선언합니다.

</aside>

사용의 경우 아래와 같이 해주시면 됩니다.

```swift
testObservable.subscribe(onNext: {
		print($0)
}).dispose(by: disposeBag)
```

`dispose` 안에 저희가 선언한 `disposeBag`을 담아주면 됩니다. 또한 임의로 해제를 시킬 수 있습니다:

```swift
disposeBag = nil
```

하지만 위와 같이 선언할려면 **옵셔널 타입**이여야합니다.

### onDisposed

`subscribe`을 뜯어보게 되면 아래와 같습니다:

```swift
public func subscribe(
    onNext: ((Element) -> Void)? = nil,
    onError: ((Swift.Error) -> Void)? = nil,
    onCompleted: (() -> Void)? = nil,
    onDisposed: (() -> Void)? = nil
) -> Disposable
```

해당 `Observable`이 구독을 해제할 때, `disposed()` 메서드가 불릴 때 클로저로 넘겨줍니다.

### ControlEvent 경우

*소들이님* 블로그에서 `ControlEvent`의 경우에는 해당 이벤트를 갖고 있는 인스턴스가 `deinit` 될 때 자동으로 `dispose`가 된다고 합니다.

```swift
import UIKit
import RxSwift
import RxCocoa
 
class SodeulViewController: UIViewController {
    @IBOutlet weak var sodeulButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        sodeulButton.rx.tap
            .subscribe(onNext: {
                print("소들 버튼 눌림")
            }, onDisposed: {
                print("소들 버튼 disposed")
            })
    }
}
// 저작권 소들님
```

위 코드처럼 `Disposable`에 대한 처리를 해주지 않아도 된다고 합니다. 이때 `Subscribe` 메서드에 result를 사용하지 않는다는 에러가 나오게 됩니다.

하지만 위 코드는 `dispose`를 따로 해주지 않아도 소들 버튼 disposed가 출력되게 됩니다. 하지만 이는 아래 코드를 보면 이해할 수 있습니다:

```swift
public func controlEvent(_ controlEvents: UIControl.Event) -> ControlEvent<()> {
	let surce: Observable<Void> = observable.create { [weak control = self.base] observer in
	...
	}
	.take(until: deallocated)
}
```

소들님 말씀.

`ControlEvent`를 만들 `create` 메소드를 통해 생성된 `Observable`에 `take(until:)` 이라는 `operator`를 실행시키는데, 이때 파라미터로 `deallocated`를 넘겨주게 됩니다.

이 코드를 본 소들님 생각은 `ControlEvent`를 통해 `Observable`을 구독하는 경우, 해당 `ControlEvent`를 갖고 있는 객체가 `deallocate` 되기 전까지만 구독하기 때문에 뷰가 사라져서 객체도 같이 `deallocate`되었다면, 구독이 자동으로 중지되는 것 같다고 합니다.

`UIControlEvent`를 가진 객체가 `deinit`되면, 당연히 해당 객체를 통해 생성한 `Observable` 또한 쓸모가 없어기고 이때 자동으로 해당 구독을 취소하는 작업도 진행하게 된 것 같다고 합니다. 하지만 경고 메세지가 나오기 때문에 명시적으로 `disposeBag`을 넣는 것이 좋을 것 같습니다.

이상 소들님의 블로그는 저의 하단 저작권에 가시면 볼 수 있습니다.

### 사용 이유

기본적으로 사용하는 가장 큰 이유는 메모리 관리 때문에 입니다. `Observable`의 특징 중 하나는 `complete`나 `error`가 발생하기 전까지 계혹 이벤트를 방출하게 됩니다. 따라서 이벤트가 더 이상 방출하지 않는 시점이서는 저희가 직접 `deinit`을 해줘야합니다. 만약에 `deinit`을 해주지 않으면 메모리 릭으로 이어지기도 합니다. 그러면 저희가 `class`를 `deinit` 시켜주는 것처럼 `Observable`의 `deinit`은 어떻게 할 수 있을까요? 그 역할을 하는 것이 바로 `dispose()`입니다.

때문에 `Disposable` 타입의 인스턴스의 `dispose` 메서드를 호출한다는 것은 `Observable`을 `deinit` 시키는 것입니다. 이는 **RxSwift**에서 메모리를 관리하는 것이라고 알고 있으면 될 것 같습니다.

메모리 릭에 대해서 간단하게 설명을 드리면 저희가 보여주고 싶은 `AViewController`에서 `BViewController`를 호출하였을 때 `BViewController`에서 타이머를 돌리고 다시 `AViewController`로 돌아왔을 때 `BViewContrller`를 제거했음에도 리소스가 해제되지 않아서 `BViewController`가 죽지 않고 계속 이벤트를 발생하는 것을 말합니다.