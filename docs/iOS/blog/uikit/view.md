---
title: "UIView"
slug: "/iOS/blog/uikit/uiview"
excerpt: "UIView가 무엇인지 알려줍니다."
sidebar_position: 2
---

## UIView란?

`UIView`는 화면의 사각형 영역을 관리하는 객체로, 화면을 구성하는 요소들의 기본 클래스입니다. 이 객체는 위치와 크기를 가진 사각형 영역을 정의하며, 배경색을 설정하거나 문자, 이미지와 같은 콘텐츠를 포함할 수 있습니다. 따라서, 앱에서 `Label`, `Image`, `Button` 등 다양한 인터페이스 요소를 표시하려면 UIKit 프레임워크가 제공하는 뷰의 하위 클래스를 사용하면 됩니다. 아래 이미지와 같이 `Label`, `Image`, `Button`은 모든 `UIView`의 하위 객체라고 생각하면되겠습니다.

<img src="https://i.imghippo.com/files/wynqy1724117771.png" alt="" border="0"/>

### 선언 방식

```swift
@MainActor class UIView: UIResponder
```

### 개요

`View`는 앱의 UI에 있어서 가장 기본적인 구성 요소이며, `UIView` 클래스 모든 `View`의 공통적인 동작을 정의합니다. `View` 객체는 객체의 `bounds` 사각형 안에서 컨텐츠를 만들며 이 컨텐츠와의 모든 상호 작용들을 처리합니다.

`UIView` 클래스는 `background color`를 설정할 수 있는 구체적인 클래스입니다. 또한 이 클래스를 상속하여 좀 더 정교한 컨텐츠를 그릴 수 있습니다. 앱에서 흔히 보이는 레이블, 이미지, 버튼 및 기타 UI 요소들을 나타내려면 **직접 만드는 것보단 UIKit 프레임워크가 제공하는 `View`를 상속한 것들을 사용**하세요.

`View` 객체는 앱을 통해 사용자와 상호 작용하기 위한 가장 주된 방법이기 때문에 많은 책임이 따릅니다.

첫번째로는 `View`들은 UIKit 또는 `Core Graphics`를 이용하여 직사각형 영역안에 컨텐츠를 그립니다. 그리고 `View`의 속성들을 새로운 값으로 애니메이션을 만들 수도 있습니다. 또한 `View`들은 0개 이상의 `subview`를 포함하며 `View`들은 `subview`의 `size`나 `position`을 조절할 수 있습니다.
오토레이아웃을 사용하여 `View`의 계층의 변화에 따라 `View`의 크기와 위치를 변경할 수 있습니다.

`View`는 `UIResponder`를 상속받아있어서 터치 및 다른 이벤트에 대해 응답을 할 수 있습니다. 때문에 `UIButton`과 `UIView`에 대해 물어보는 질문이 이 때문에 생기는 거죠! 그리고 일반적인 제스쳐를 처리하기 위한 `gesture recognizers`를 설치할 수 있습니다.

`View`는 다른 `View`안에 중첩되어 계층을 형성할 수 있으므로 관련 내용을 쉽게 구성할 수 있습니다. `View`를 중첩하면 중첩된 자식 뷰와 부모 뷰간의 부모-자식 관계를 형성합니다. 부모 뷰는 원하는 수만큼 `subview`를 포함할 수 있지만 각각의 `subview`는 오직 하나의 `superview`만 존재합니다.
기본적으로 `subview`의 보여지는 영역이 `superview`의 `bounds`보다 넘어가게 되면 `subview`의 콘텐츠는 잘리지 않게 됩니다. 이를 위해 사용하는 함수가 `clipsToBuounds` 입니다.

`frame`과 `bounds` 속성은 각 `View`의 기하학적 구조를 정의합니다. `frame` 속성은 `superview`의 좌표계에서 `View`의 원점과 치수를 정의합니다. `bounds` 속성은 보이는 대로 내부 치수를 정의합니다. `center` 속성은 `View`의 `frame`과 `bounds` 속성을 직접적으로 사용하지 않고 쉽게 위치를 재정의하는데 사용합니다.

### View 생성하기

<aside>
⚠️ 저는 스토리보드를 기준으로 설명하지 않습니다.

</aside>

`View`를 생성할 때 미래의 `superview`를 기준으로 사이즈와 위치를 지정합니다. 예를 들어서, 아래 코드는 `View`를 생성 후 `superview`의 좌표계에 있는 점 (20,20)에 위치는 왼쪽 상단에 붙게 됩니다.

```swift
let rect = CGRect(x: 20, y: 20, width: 100, height: 100)
let myView = UIView(frame: rect)
```

`View`에 `subview`를 추가하면, `superview`에서 `addSubView(_:)` 메서드를 호출해야합니다. `View`에 원하는 수만큼 `View`를 추가할 수 있고 iOS의 어떤 이슈 없이 `View`들을 서로 겹칠 수 있습니다.

`insertSubview(*:aboveSubview)`와 `insertSubview(*:belowSubview)` 메소드를 사용하여 `subview`의 상대적인 `z-order`를 지정할 수 있습니다.

`exchangeSubView(at:withSubviewAt)` 메소드를 사용하여 이미 추가된 `subview`의 위치를 바꿀 수도 있습니다.

### 뷰의 드로잉 사이클

`View` 드로잉은 필요에 따라 발생하게 됩니다. `View`가 처음 보여지거나 레이아웃 변경으로 `View`의 전체 혹은 일부가 표시되면 시스템은 `View`에게 컨텐츠를 그리도록 요청합니다. UIKit이나 `Core Graphics`를 통해 커스텀 컨텐츠가 포함된 `View`일 경우 시스템은 `View`의 `draw(_:)` 메소드를 호출합니다. 이 메소드를 구현하면 `current graphic context`에 `View`의 컨텐츠를 그릴 수 있으며, 이 메소드를 호출하기 전에 시스템에서 자동으로 설정됩니다. 화면에 표시될 수 있는 정적이고 시각적인 표현이 생성됩니다.

`view`의 컨텐츠가 바뀔 때, view를 다시 그려야한다고 시스템에게 알리는것은 저희가 해야하는 역할입니다. view의 setNeedDisplay() 혹은 `setNeedsDisplay(_:)` 메소드를 호출하여 사용할 수 있습니다. 이러한 메소드들은 다음 드로잉 사이클 동안 `View`를 업데이트 해야한다고 시스템에게 알립니다. `View`를 업데이트하기 위해 다음 드로잉 사이클까지 기다리기 때문에 여러 `View`에서 이러한 메소드를 호출하여 동시에 업데이트 할 수 있습니다. (이 메소드를 호출하는 즉시 `View`의 컨텐츠를 업데이트하는 것은 아닙니다. 다음 드로잉 사이클이 올때까지 기다렸다가 변화된 내용들을 한번에 업데이트합니다. 따라서 호출하는 시점과 변경되는 시점의 차이가 생깁니다.)

### 애니메이션

`View`의 여러 속성들에 대한 변경 사항을 애니메이션할 수 있습니다. 즉, 속성을 변경하면 현재 값에서 시작하여 새로 지정한 값에 끝나는 애니메이션을 생성합니다. 다음 나열되는 `UIView`의 속성들은 애니메이션할 수 있습니다.

- frame
- bounds
- center
- transform
- alpha
- backgroundColor

변화에 대해 애니메이션 하려면 `UIViewPropertyAnimator` 객체를 만들고 `handle block`을 사용하여 `View`의 속성 값을 변경합니다. `UIViewPropertyAnimator` 클래스를 사용하면 애니메이션의 지속 시간과 타이밍을 지정할 수 있고 실제 애니메이션을 수행합니다. 속성 기반 애니메이터를 일시 중지하여 애니메이션을 중단할 수도 있습니다.

### 스레드 고려하기

앱의 **UI는 반드시 메인 스레드에서 조작**되어야 합니다. 따라서 항상 앱의 메인 스레드에서 실행되는 코드에서 UIView 클래스의 메소드를 호출해야합니다. 오직 `View`를 생성할 때만 메인 스레드에서 실행되지 않아도 되지만 그 이외에는 반드시 메인 스레드에서 실행되야합니다.

### 하위 뷰 만들기

`View`를 상속받는 것은 `View`를 구현하고 성능을 조정하기 위해 더 많은 작업들이 필요합니다. 따라서 `UIView` 클래스가 제공하지 않은 것이 있을 때만 구현하는 것이 좋습니다.

### 재정의 하는 방법

`UIView`를 상속받을 때, 재정의 해야하는 소수의 메소드가 있고 필요에 따라 재정의할 수 있는 메소드도 있습니다. `UIView`는 `highly configurable` 클래스이기 때문에 커스텀 메소드를 재정의하지 않고도 정교한 뷰 동작을 구현하는 방법도 많습니다. 다음 목록은 `UIView` 클래스를 상속받으면 재정의할 수 있는 메소드들입니다.

- Initializaion
    - **`init(frame:)`**
        - 이 방법으로 초기화하는 것이 좋습니다. 또한 이. 메소드를 커스텀하여 초기화 메소드를 구현할 수 있습니다.
    - **`init(coder:)`**
        - 스토리보드 혹은 Nib 파일에서 view를 로드하고 view에 커스텀 초기화가 필요한 경우 이 메소드를 사용합니다.
    - **`layerClass`**
        - view의 뒤에 다른 Core Animation layer를 사용하려면 이 속성을 사용하세요.
- Drawing and Printing
    - **`draw(_:)`**
        - 커스텀 컨텐츠를 그릴려면 이 메소드를 사용하면됩니다.
        - 커스텀 컨텐츠를 그릴게 없다면 이 메소드를 재정의하지 않는 것이 좋습니다.
    - **`draw(_:for:)`**
        - printing하는 동안 `view`의 컨텐츠를 다르게 그리려는 경우에만 이 메소드를 구현하세요.
- layout and Constraints
    - **`requiresConstraintBasedLayout`**
        - `view` 클래스가 제대로 작동하기 위해 제약조건이 필요한 경우 이 속성을 사용하세요
    - **`updateConstraints`**
        - `view`와 하위 `view` 간의 커스텀 제약조건 생성이 필요한 경우 이 메소드를 구현하세요.
    - **`alignmentRect(forFrame:), frame(forAlignmentRect:)`**
        - 여러 view 간의 정렬되는 방식을 재정의하려면 이 메소드를 구현하세요
    - **`didAddSubview(_:), willRemoveSubview(_:)`**
        - 하위 `view`를 추가하거나 제거하는 것은 추적하고 싶다면 이러한 메소드를 구현하세요
    - **`willMove(toSuperview:), didMoveToSuperview()`**
        - `view` 계층에서 현재 `view`의 이동을 추적하고 싶다면 이러한 메소드를 구현하세요.
- Event Handling
    - **`gestureRecognizerShouldBegin(_:)`**
        - `view`가 터치 이벤트를 직접 처리하고 연결된 gesture recognizer가 추가 작업을 트리거하지 못하도록 하려면 이 메소드를 구현하세요.
    - **`touchesBegan(_:with:), touchesMoved(_:with:), touchesEnded(_:with:), touchesCancelled(_:with:)`**
        - 터치 이벤트를 직접 처리하고 싶다면 이 메소드를 구현하세요

### 서브클래스 대안

`View`의 여러 동작들은 따로 상속할 필요없이도 설정할 수 있습니다. 메소드를 재정의하기 전에 다음 나열되는 속성이나 동작들을 수정하면 필요한 동작을 제공할 수 있는지 생각해보세요.

- **`addConstraint(_:)`**
    - 뷰와 하위 뷰에 대한 오토레이아웃을 정의합니다.
- **`autoresizingMask`**
    - 슈퍼뷰의 `frame`이 바뀌면 오토레이아웃 동작을 제공합니다. 이러한 동작들은 `constraints`들과 결합될 수 있습니다.
- **`contentMode`**
    - `view frame`과 달리 `view`의 컨텐츠에 대한 레이아웃 동작을 제공합니다. 또한 이 속성은 뷰에 맞게 컨텐츠를 확장하는 방법과 컨텐츠를 캐시 또는 다시 그리기 여부에도 영향을 줍니다.
- **`isHidden or alpha`**
    - `view` 전체의 투명도를 변경합니다.
- **`backgroundColor`**
    - 해당 색상을 직접 그리는 것보다는 `view`의 색상을 설정합니다.
- **`Subviews`**
    - `draw(_:)` 메소드를 사용하여 컨텐츠를 그리는 대신 원하는 컨텐츠를 포함한 `image`나 `label`의 하위 뷰를 포함합니다.
- **`Gesture Recognizer`**
    - 터치 이벤트를 직접 처리하는 하위 클래스 대신 `gesture recognizer`을 사용하여 대상 객체에 `Target-Action`을 보낼 수 있습니다.
- **`Animations`**
    - 변경 사항을 직접 애니메이션으로 만들지 말고 내장된 애니메이션 `support`를 사용하는 것이 편리합니다.
    - `Core Animation`에서 제공하는 애니메이션 `support`는 빠르고 사용하기 쉽습니다.
- **`Image-based backgrounds`**
    - 정적인 컨텐츠를 표시하는 `View`의 경우 이미지를 직접 서브클래싱하고 그리는 대신 `gesture recognizer`와 함께 `UIImageView` 객체를 사용하는 것이 좋습니다. 대안으로 `UIView` 객체를 사용하고 이미지를 `View`의 `CALayer` 객체의 컨텐츠로 할당할 수 있습니다.