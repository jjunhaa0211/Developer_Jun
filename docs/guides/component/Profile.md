---
title: 'Profile'
slug: '/profile'
sidebar_position: 13
---

### 개발 문서: 프로필 뷰 구성 요소

### 개요

이 문서는 iOS 애플리케이션에서 사용할 수 있는 다양한 크기와 스타일의 사용자 프로필 이미지를 표시하는 `JProfileView` 및 관련 컴포넌트의 설정 및 사용 방법에 대해 설명합니다. 이 뷰는 사용자 정의 이미지를 적용할 수 있으며, 각 프로필 유형에 맞는 크기와 라운드 코너 반경을 제공합니다.

### 주요 컴포넌트

1. **`JProfileView`**
    - 사용자 프로필 이미지와 관련 설정을 관리하는 UIView입니다.
    - 사용자 정의 이미지를 지원하며, 다양한 프로필 유형에 따라 크기와 모서리 둥근 정도를 조정합니다.
2. **`JProfileType`**
    - 프로필의 크기와 둥근 모서리의 반경을 정의하는 열거형입니다.
    - 프로필 유형에는 작은 프로필, 중간 프로필, 큰 프로필, 소개, 배지, 최대 프로필 등이 있습니다.
3. **`JProfileImage`**
    - 프로필 이미지 타입과 사용자 정의 이미지를 관리하는 구조체입니다.
    - 사용자 정의 이미지 또는 기본 이미지(이미지가 없을 경우 시스템 이미지 사용)를 선택적으로 제공합니다.

### 구현 방법

### 초기화 및 설정

`JProfileView`는 초기화 시 `JProfileImage`와 `JProfileType` 인스턴스를 필요로 합니다. 이 두 매개변수는 각각 프로필 이미지와 뷰의 크기 및 스타일을 설정합니다.

```swift
let profileView = JProfileView(
    profileImage: JProfileImage(type: .custom, customImage: UIImage(named: "userImage")),
    profileType: .bigProfile
)
```

### 레이아웃 설정

`SnapKit`을 사용하여 `JProfileView`의 크기와 위치를 정의할 수 있습니다. 아래 예제는 `JProfileView`를 부모 뷰의 중앙에 배치하고 안전 영역 상단과의 거리를 설정하는 방법을 보여줍니다.

```swift
profileView.snp.makeConstraints { make in
    make.centerX.equalToSuperview()
    make.top.equalTo(view.safeAreaLayoutGuide.snp.top).offset(20)
}
```

### 이미지 구성

프로필 뷰에 새로운 이미지를 설정할 때는 `configureImage` 메소드를 사용합니다. 이 메소드는 `JProfileImage` 객체를 매개변수로 받아 현재 설정된 이미지 타입에 따라 이미지를 업데이트합니다.

```swift
let newImage = UIImage(named: "newUserImage")
profileView.configureImage(with: JProfileImage(type: .custom, customImage: newImage))
```

### 사용 사례

`DSProfileViewController` 클래스는 다양한 크기의 프로필 뷰를 포함하여 뷰 컨트롤러를 구성하는 방법을 보여줍니다. 여기서는 네 가지 프로필 (소개, 작은 프로필, 중간 프로필, 큰 프로필)을 생성하고 뷰에 추가한 다음, 각각의 위치를 설정합니다.

### 결론

`JProfileView` 및 관련 컴포넌트는 사용자 정의가 가능하고 유연한 방식으로 다양한 프로필 뷰를 iOS 애플리케이션에 통합할 수 있도록 설계되었습니다. 이를 통해 개발자는 사용자의 요구에 맞춰 높은 수준의 사용자 경험을 제공할 수 있습니다.