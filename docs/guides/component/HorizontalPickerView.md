---
title: 'HorizontalPickerView'
slug: '/horizontalPickerView'
sidebar_position: 15
---

### JHorizontalPickerView

`JHorizontalPickerView`는 iOS를 위한 사용자 정의 수평 피커 뷰로, SnapKit과 Then 라이브러리를 활용하여 레이아웃 및 초기화를 향상시킨 Swift 기반 컴포넌트입니다.

### 초기화

```swift
JHorizontalPickerView(frame: CGRect, initialPickerValue: Int, selectedFontSize: CGFloat = 30, regularFontSize: CGFloat = 20, selectedTextColor: UIColor = .white, regularTextColor: UIColor = .black)
```

- **매개변수:**
    - `frame`: 포인트 단위로 측정된 뷰의 프레임 사각형.
    - `initialPickerValue`: 피커에서 초기에 선택된 값.
    - `selectedFontSize`: 선택된 항목의 글꼴 크기.
    - `regularFontSize`: 선택되지 않은 항목의 글꼴 크기.
    - `selectedTextColor`: 선택된 항목의 텍스트 색상.
    - `regularTextColor`: 선택되지 않은 항목의 텍스트 색상.

### 속성

- `pickerWidth`: 피커 뷰의 너비.
- `pickerSelectValue`: 현재 선택된 값.
- `isFirstLoad`: 뷰가 처음 로드되었는지를 나타내는 부울 플래그.
- `selectedFontSize`: 선택된 피커 항목의 글꼴 크기.
- `regularFontSize`: 다른 피커 항목의 글꼴 크기.
- `selectedTextColor`: 선택된 피커 항목 텍스트의 색상.
- `regularTextColor`: 다른 피커 항목의 텍스트 색상.
- `delegate`: `JHorizontalPickerViewDelegate` 프로토콜을 준수하는 대리자.

### 메소드

- `setPicker()`: 피커를 설정합니다.
- `setUpLayout()`: 하위 뷰의 제약 조건과 레이아웃을 설정합니다.

### 대리자 프로토콜: `JHorizontalPickerViewDelegate`

```swift
protocol JHorizontalPickerViewDelegate {
    func didLevelChanged(selectedLevel: Int)
}
```

- **메소드:**
    - `didLevelChanged(selectedLevel: Int)`: 피커에서 새로운 값이 선택될 때 호출됩니다.

### 예제 사용

```swift
class JHorizontalPickerViewController: UIViewController, JHorizontalPickerViewDelegate {
    private lazy var hPickerView: JHorizontalPickerView = {
        let frame = CGRect(x: 20, y: 100, width: 300, height: 100)
        let initialPickerValue = 5
        return JHorizontalPickerView(frame: frame, initialPickerValue: initialPickerValue, selectedFontSize: 30, regularFontSize: 20, selectedTextColor: .red).then {
            $0.pickerSelectValue = 0
            $0.delegate = self
        }
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        setUpLayout()
        view.backgroundColor = .white
    }

    func didLevelChanged(selectedLevel: Int) {
        print("변경된 값은?: \(selectedLevel)")
    }

    func setUpLayout() {
        view.addSubview(hPickerView)
        hPickerView.snp.makeConstraints {
            $0.leading.equalToSuperview()
            $0.trailing.equalToSuperview()
            $0.center.equalToSuperview()
            $0.height.equalTo(120)
        }
    }
}
```