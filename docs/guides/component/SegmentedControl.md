---
title: 'SegmentedControl'
slug: '/segmentedControl'
sidebar_position: 16
---

### UISegmentedControl 확장 문서

---

### 개요

이 확장은 `UISegmentedControl`의 외형을 커스터마이즈하는 기능을 추가하여, 기본 테두리를 제거하고 선택된 세그먼트에 밑줄을 추가합니다.

### 함수

---

**removeBorder()**

`UISegmentedControl`의 기본 테두리를 지정된 색상의 이미지로 제거합니다.

**선언:**

```swift
func removeBorder()
```

**설명:**

- 여러 상태(`normal`, `selected`, `highlighted`)에 대한 배경 이미지를 지정된 색상의 이미지로 설정합니다.
- 세그먼트 사이의 구분선 이미지를 지정된 색상의 이미지로 설정합니다.
- `selected` 및 `normal` 상태에 대한 텍스트 색상을 커스터마이즈합니다.

**예제:**

```swift
let segmentedControl = UISegmentedControl(items: ["One", "Two", "Three"])
segmentedControl.removeBorder()
```

---

**addUnderlineForSelectedSegment()**

선택된 세그먼트에 밑줄을 추가합니다.

**선언:**

```swift
func addUnderlineForSelectedSegment()
```

**설명:**

- `removeBorder()`를 호출하여 기본 테두리를 제거합니다.
- 선택된 세그먼트를 기준으로 밑줄의 크기 및 위치를 정의합니다.
- 특정 색상의 밑줄을 `UIView`로 추가합니다.

**예제:**

```swift
let segmentedControl = UISegmentedControl(items: ["One", "Two", "Three"])
segmentedControl.addUnderlineForSelectedSegment()
```

---

**changeUnderlinePosition()**

선택된 세그먼트에 맞게 밑줄의 위치를 애니메이션으로 변경합니다.

**선언:**

```swift
func changeUnderlinePosition()
```

**설명:**

- 태그를 사용하여 기존 밑줄 뷰를 확인합니다.
- 선택된 세그먼트를 기준으로 밑줄의 이동을 애니메이션합니다.

**예제:**

```swift
let segmentedControl = UISegmentedControl(items: ["One", "Two", "Three"])
segmentedControl.addTarget(self, action: #selector(segmentedControlValueChanged(_:)), for: .valueChanged)

// 값 변경을 처리하는 함수
@objc func segmentedControlValueChanged(_ sender: UISegmentedControl) {
    sender.changeUnderlinePosition()
}
```

---

### UIImage 확장 문서

---

### 개요

이 확장은 지정된 색상과 크기의 사각형 이미지를 생성하는 기능을 `UIImage`에 추가합니다.

### 함수

---

**gerRectangleImageWith(color:andSize:)**

지정된 색상과 크기의 사각형 이미지를 생성합니다.

**선언:**

```swift
class func gerRectangleImageWith(color: CGColor, andSize size: CGSize) -> UIImage
```

**매개변수:**

- `color`: 사각형 이미지의 색상 (`CGColor`).
- `size`: 사각형 이미지의 크기 (`CGSize`).

**반환:**

- 지정된 색상과 크기의 사각형을 나타내는 `UIImage` 인스턴스.

**설명:**

- `UIGraphicsBeginImageContextWithOptions`를 사용하여 비트맵 기반의 그래픽 컨텍스트를 생성합니다.
- 지정된 색상과 크기로 컨텍스트를 채웁니다.
- 현재 그래픽 컨텍스트에서 이미지를 가져옵니다.

**예제:**

```swift
let color = UIColor.red.cgColor
let size = CGSize(width: 100, height: 50)
let rectangleImage = UIImage.gerRectangleImageWith(color: color, andSize: size)
```

---

### 사용 예제

제공된 확장을 사용하여 `UISegmentedControl`을 커스터마이즈하는 방법의 예제입니다:

```swift
import UIKit

class ViewController: UIViewController {

    let segmentedControl = UISegmentedControl(items: ["One", "Two", "Three"])

    override func viewDidLoad() {
        super.viewDidLoad()

        segmentedControl.frame = CGRect(x: 50, y: 200, width: 300, height: 40)
        segmentedControl.removeBorder()
        segmentedControl.addUnderlineForSelectedSegment()

        segmentedControl.addTarget(self, action: #selector(segmentedControlValueChanged(_:)), for: .valueChanged)

        self.view.addSubview(segmentedControl)
    }

    @objc func segmentedControlValueChanged(_ sender: UISegmentedControl) {
        sender.changeUnderlinePosition()
    }
}
```

이 예제는 기본 테두리를 제거하고, 선택된 세그먼트에 밑줄을 추가하며, 선택된 세그먼트가 변경될 때 밑줄의 위치를 업데이트하는 방법을 보여줍니다.