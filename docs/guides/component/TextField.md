---
title: 'TextField'
slug: '/textField'
sidebar_position: 12
---

# JTextField 사용 가이드

이 문서는 `JTextField` 커스텀 텍스트 필드 컴포넌트의 기능과 구성 요소에 대한 상세 설명을 제공합니다. `JTextField`는 입력 필드에 오류 메시지 표시, 입력값 제거 버튼, 동적 테두리 색 변경 등 다양한 기능을 포함하고 있습니다.

## 구성 요소

`JTextField`는 다음과 같은 주요 구성 요소를 포함합니다:

- **underlineView**: 입력 필드 하단에 위치하는 언더라인 뷰입니다. 입력 상태에 따라 색상이 변경됩니다.
- **errorLabel**: 오류 메시지를 표시하는 레이블입니다. 오류가 있을 때만 표시됩니다.
- **deleteButton**: 입력 내용을 지울 수 있는 삭제 버튼입니다. 텍스트 필드에 내용이 있을 때만 표시됩니다.

## 속성

`JTextField`는 다음과 같은 속성을 제공합니다:

- **errorFont**: 오류 메시지의 폰트를 설정할 수 있습니다.
- **underlineColor**: 기본 언더라인 색상을 설정합니다.
- **errorColor**: 오류 상태에서 언더라인과 오류 메시지의 색상을 설정합니다.
- **focusUnderlineColor**: 입력 필드에 포커스가 맞춰져 있을 때 언더라인의 색상을 설정합니다.
- **animationDuration**: 애니메이션의 지속 시간을 설정합니다.

## 초기화

`JTextField`는 다음과 같이 초기화할 수 있습니다:

```swift
public init(
    frame: CGRect = .zero,
    errorFont: UIFont = UIFont.systemFont(ofSize: 12),
    underlineColor: UIColor = .gray,
    errorColor: UIColor = .red,
    focusUnderlineColor: UIColor = .blue,
    animationDuration: TimeInterval = 0.3
) {
    self.errorFont = errorFont
    self.underlineColor = underlineColor
    self.errorColor = errorColor
    self.focusUnderlineColor = focusUnderlineColor
    self.animationDuration = animationDuration
    super.init(frame: frame)
    setupUI()
}

```

## 기능

### 오류 메시지 표시

오류 유형에 따라 다음과 같은 메시지를 표시할 수 있습니다:

- **tooLong**: "너무 긴 닉네임이에요. (10글자 이하)"
- **tooShort**: "너무 짧은 닉네임이에요. (2글자 이상)"
- **alreadyTaken**: "이미 사용중인 닉네임이에요."
- **sensitiveInfo**: "민감한 정보가 포함된 닉네임이에요."
- **reservedWord**: "예약어 사용 제한"

### 삭제 버튼

`deleteButton`은 사용자가 텍스트 필드에 입력한 내용을 한 번에 삭제할 수 있게 해주며, 내용이 있을 때만 표시됩니다. 삭제 버튼의 동작은 다음과 같이 구현됩니다:

```swift
deleteButton.rx.tap
    .subscribe(onNext: { [weak self] in
        self?.text = ""
        self?.deleteButton.isHidden = true
    })
    .disposed(by: disposeBag)

```

### 입력 필드 동적 반응

사용자가 입력 필드에 포커스를 맞추거나 벗어날 때, 언더라인의 색상이 동적으로 변경됩니다. 이는 다음과 같이 RxSwift를 이용하여 구현됩니다:

```swift
self.rx.controlEvent(.editingDidBegin).asObservable().subscribe(onNext: { [weak self] _ in
    UIView.animate(withDuration: self?.animationDuration ?? 0.3) {
        self?.underlineView.backgroundColor = self?.focusUnderlineColor
    }
}).disposed(by: disposeBag)

self.rx.controlEvent(.editingDidEnd).asObservable().subscribe(onNext: { [weak self] _ in
    UIView.animate(withDuration: self?.animationDuration ?? 0.3) {
        self?.underlineView.backgroundColor = self?.text?.isEmpty ?? true ? self?.underlineColor : self?.focusUnderlineColor
    }
    self?.deleteButton.isHidden = self?.text?.isEmpty ?? true
}).disposed(by: disposeBag)

```

이 가이드는 `JTextField`의 주요 기능과 사용 방법에 대해 상세하게 설명하고 있으며, 이 컴포넌트를 사용하여 사용자 친화적인 입력 폼을 구현할 수 있습니다.