---
title: "UIViewController"
slug: "/blog/uikit/viewController"
excerpt: "ViewController가 무엇인지 알려줍니다."
sidebar_position: 1
---

## UIViewController란?

`UIViewController`는 `UIKit` 앱의 **뷰 계층 구조를 관리하는 객체**라고 명시되어있습니다. 이는 앱의 근간을 이루는 객체로 모든 앱에 최소 하나 이상의 `UIViewController`를 가지게 됩니다. 왜냐하면 **사용자가 화면을 보는 것에 대한 관리 기능을 제공하는 객체**이기 때문입니다. 따라서 저희가 새로운 **xcode project**를 생성할 때 기본적으로 `ViewController`가 생성되는 이유 중 하나가 됩니다.

## UIViewController의 역활

먼저, 데이터의 변화에 따라 뷰의 콘텐츠를 업데이트합니다. 또한 뷰와 함께 사용자 상호작용에 응답하며 이벤트를 처리합니다. 이 외에도 뷰의 리사이징과 전체 인터페이스 레이아웃을 관리하며, 다른 ViewController들과의 화면 전환을 담당합니다. 마지막으로, 여러 ViewController를 조합해 앱을 구성하는 역할을 합니다.

쉽게 생각해서 하나를 관리하는 단위라고 생각하면 됩니다. 화면의 하나의 단위라서 ViewController는 화면을 꽉채우는 것이 목적입니다. 화면을 보여주는 단위로는 스크린이 있으며 스크린 안에 윈도우라는 개념이 있고 윈도우는 스크린에 들어가는 실제적인 뷰이고 그 위에 올라가는 것이 View입니다.

<img src="https://i.imghippo.com/files/FcIYt1724046293.png" alt="" border="0"/>

## UIViewController의 주요 콜백

- Did: 이벤트 발생 전
- Will: 이벤트 발생 후
- sholud: 선택사항

### 화면 관련

- init
- viewDidLoad()
- viewWillAppear(Bool)
- viewDidAppear(Bool)
- viewWillDisappear(Bool)
- viewDidDisappear(Bool)

### init

`UIViewController`의 생명주기를 설명할 때, 초기화 과정인 `init` 메서드가 중요한 부분입니다. `UIViewController`를 초기화하는 것은 생명주기에서 가장 처음 동작하는 과정입니다. 초기화 구문이 있다면, `UIViewController`가 객체화될 때 `init(coder:)` 또는 `init(nibName:bundle:)` 메서드를 호출하여 초기화됩니다.

### `init(coder:)`

- **설명**: `init(coder:)`는 주로 스토리보드나 XIB 파일에서 뷰 컨트롤러를 인스턴스화할 때 호출됩니다.
- **사용 시기**: 스토리보드에서 ViewController를 만들고, 인터페이스 빌더에서 해당 ViewController를 참조할 때 자동으로 호출됩니다. 이 메서드는 `NSCoder` 객체를 매개변수로 받아, 저장된 상태를 사용해 ViewController를 복원합니다.
- **주로 사용할 경우**: 스토리보드나 XIB 파일을 통해 UI를 구성할 때 사용됩니다.

### `init(nibName:bundle:)`

- **설명**: `init(nibName:bundle:)`는 지정된 XIB 파일을 로드해 `UIViewController`를 초기화하는 메서드입니다.
- **사용 시기**: XIB 파일을 사용해 코드로 `UIViewController`를 생성할 때 사용합니다. nib 파일의 이름과 번들을 인자로 받아, 해당 XIB 파일에서 뷰를 로드합니다.
- **주로 사용할 경우**: 스토리보드를 사용하지 않고, 특정 XIB 파일을 로드해 ViewController를 생성하고자 할 때 사용합니다.

### 두 메서드의 차이점

- `init(coder:)`는 **스토리보드나 XIB 파일**에서 ViewController를 복원할 때 호출됩니다.
- `init(nibName:bundle:)`는 **특정 XIB 파일**을 명시적으로 지정하여 ViewController를 초기화할 때 사용됩니다.

XIB 파일이란?

XIB 파일은 iOS 및 macOS 개발에서 사용자 인터페이스를 정의하는 파일 형식입니다. XIB 파일은 XML 형식으로 작성되어 있으며, 인터페이스 빌더를 통해 시각적으로 UI를 설계할 수 있습니다.

### 스토리보드와의 차이점

- **XIB 파일**: 개별 화면이나 뷰의 UI를 정의하는 데 주로 사용됩니다. 작은 모듈화된 UI나 재사용 가능한 컴포넌트를 만들 때 적합합니다.
- **스토리보드**: 여러 화면과 그들 간의 전환을 한 곳에서 시각적으로 설계할 수 있는 기능을 제공합니다. 앱의 흐름을 전체적으로 관리할 수 있어, 복잡한 UI를 설계할 때 유용합니다.

### viewDidLoad

`UIViewController`의 **`View`가 로드되기 전에 호출되는 메서드**입니다.
일반적으로 뷰 계층 구조를 설정하고 필요한 데이터가 있으면 로드하는 역할을 합니다.

Model 혹은 Navigation의 형태 또 다른 `UIViewController`가 화면 위에 보이게 된 이후 **사라졌을 경우에 다시 호출되지 않습니다.**
즉, 객**체가 생성된(메모리에 올라간) 이후 한 번만 호출**되게 됩니다.

해당 메소드는 시스템에 의해 자동으로 호출되기 때문에 일반적으로 리소스나 화면의 구성요소들을 초기화하는 용도로 사용됩니다.

### viewWillAppear

이 메소드를 직역하자면 “View가 보일 것이다” 라고 해석됩니다.

`UIViewController`가 **화면에 나타나기 직전에 호출되는 메서드**입니다. 이를 다른말고 뷰가 계층 구조에 추가되기 직전에 호출한다고도 합니다.
일반적으로 뷰를 업데이트하거나 필요한 애니메이션을 추가합니다.

Model 혹은 Navigation의 형태 등 또 다른 `UIViewController`가 화면 위에 보이게 된 이후 사라질 경우, viewWillAppear가 호출됩니다.

이는 메모리 로드와는 상관없이 현재 화면에 해당 View가 보이는지에 대해서만 영향을 받기 때문에 생성시 딱 한번만 호출되는 `viewDidLoad` 메서드와는 달리, **View가 화면에 나타나기 직전마다 호출**됩니다.

### viewDidAppear

이 메소드를 직역하면 “화면에 나타난 직후” 라고 해석됩니다.

`UIViewController`가 **화면에 나타난 직후에 호출되는 메서드**입니다.
일반적으로 애니메이션을 시작을 적용합니다. 이를 다시 말해서 View가 계층 구조에 추가된 직후를 뜻하며 `viewWillAppear` 메서드의 다음단계입니다.

`viewWillAppear`와 마찬가지로 화면 전환 이후 다시 호출됩니다.

### viewWillDisappear

앱을 사용하면서 다른 화면으로 넘어가거나, 이전 화면으로 돌아갈 때 현재 사용하던 화면은 사라집니다. 이렇게 현재 `UIViewController`가 **화면에서 사라지기 직전에 호출되는 메서드**입니다.

이는 `ViewController`가 View 계층 구조에서 사라지기 직전을 뜻합니다.

일반적으로 필요한 데이터를 저장하는 등의 역할을 수행합니다.

### viewDidDisappear

`UIViewController`가 **화면에서 사라진 후에 호출**됩니다.

다시 말해 `ViewController`가 View 계층 구조에서 사라진 직후, 즉 View가 화면에서 사라진 직후 호출 됩니다.
일반적으로 해당 `ViewController`와 관련된 자원을 해제하는 등의 역할을 합니다.

### loadView

`loadView()` 라는 메소드는 사실 `viewDidLoad()` 메서드 **이전에 호출되는데**, 애플 공식문서에는 해당 메소드를 **직접 호출해서는 안된다고** 적혀있습니다.

`loadView()` 메서드는 View를 만들고 이를 메모리에 올리는 역할을 하는 메소드이기 때문에 함부로 호출해서 사용해서는 안되고, 만약 프로그램의 초기값들을 설정해야하는 경우라면 View가 메모리에 할당되는 작업이 완료된 후인 `viewDidLoad()`에서 실행하는 것이 맞습니다.

### viewDidUnload

`viewDidUnload()` 메소드는 **iOS 6이후로 사용이 중지**되었습니다.

iOS 5 이전에는 메모리 부족 상태가 발생할 수 있었기 때문에 해당 메소드를 통해 ViewController가 View에 대한 별도의 Reference를 가지고 있는 경우 이를 해제할 수 있었는데, iOS 6 이상부터는 그럴 필요가 없어졌다고 합니다.

## ViewController의 두가지 유형

1. Content View Controller

`Content View Controller`은 저희가 생성하는 `ViewController`에 대한 주 유형입니다. 이는 화면을 구성하는 뷰들을 직접 구현하고 관리하며, 관련된 이벤트를 처리합니다. 주로 Root View와 하위뷰들 입니다.

<img src="https://i.imghippo.com/files/tdIHP1724046354.png" alt="" border="0"/>

<br/>

2. Container View Controller

하나 이상의 `Child View Controller`를 가지고 있으며, 하나 이상의 `Child View Controller`를 관리하고 레이아웃과 화면전환을 담당하는 ViewController입니다. `Container View Controller`는 자식 ViewController의 내용을 관리하지 않고, 크기 조정 및 배치만 관리합니다. 실제 화면 구성과 이벤트 관리는 각 Child View Controller에서 이뤄집니다. 또한 모든 UIViewController는 하나의 Root View를 가지고 있으며, UIView 요소를 포함시킵니다. 이를 대표적으로 사용하는 Controller는 `UINavigationController`, `UITabBarController`, `UISplitViewController`가 있습니다.

<img src="https://i.imghippo.com/files/ZwDEo1724046388.png" alt="" border="0"/>