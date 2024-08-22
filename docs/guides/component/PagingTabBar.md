---
title: 'PagingTabBar'
slug: '/pagingTabBar'
sidebar_position: 17
---

### PagingTabBar 개발 독스

`JPagingTabBar`는 `UICollectionView`를 사용하여 수평 스크롤이 가능한 탭 바 인터페이스를 제공하는 커스텀 UIView입니다. 이 컴포넌트를 사용하면 사용자는 탭 형태로 제공되는 다양한 카테고리 중 하나를 선택할 수 있습니다. 탭이 선택되면, 선택된 탭이 시각적으로 강조 표시되고 RxSwift의 `PublishSubject`를 사용하여 다른 부분의 애플리케이션에 선택된 탭의 인덱스를 전달합니다.

### 특징

- **커스텀 탭 타이틀**: 각 탭의 타이틀을 나타내는 문자열 배열로 초기화합니다.
- **반응형 선택 업데이트**: `PublishSubject`를 사용하여 선택된 탭의 인덱스를 방출하므로, 다른 컴포넌트가 변경에 반응할 수 있습니다.
- **스크롤 가능 인터페이스**: 탭의 수가 일정 수준을 초과하면 수평 스크롤을 허용하여 다양한 아이템에 적합합니다.
- **적응형 레이아웃**: 텍스트 길이와 공백 문자에 따라 각 탭의 크기를 조정합니다.
- **현대적 미학**: 필요에 따라 어두운 모드와 밝은 모드를 지원하며 현대적 iOS 인터페이스 요소를 조정합니다.

### 사용 방법

### 초기화

카테고리 타이틀의 리스트로 `JPagingTabBar`를 초기화합니다:

```swift
let tabBar = JPagingTabBar(categoryTitleList: ["Home", "Profile", "Settings"])
```

### 선택 처리

`selectedIndex`에 구독하여 탭 변경을 처리합니다:

```swift
tabBar.selectedIndex.subscribe(onNext: { index in
    print("Selected Index: \(index)")
}).disposed(by: disposeBag)
```

### 뷰에 추가

`JPagingTabBar`를 부모 UIView에 추가하고 제약 조건을 설정합니다:

```swift
view.addSubview(tabBar)
tabBar.snp.makeConstraints { make in
    make.top.equalToSuperview().offset(100)
    make.left.right.equalToSuperview()
    make.height.equalTo(80)
}
```

### 컴포넌트 상세

### `JPagingTabBar`

- **collectionView**: 탭을 호스팅하는 수평 UICollectionView입니다.
- **selectedIndex**: 선택된 탭의 인덱스를 방출하는 `PublishSubject<Int>`입니다.
- **itemSelected**: UICollectionView의 선택 이벤트를 직접적으로 전달하는 `PublishSubject<IndexPath>`입니다.
- **calculateCellWidth**: 타이틀의 길이에 기반하여 각 셀의 너비를 계산하여 레이아웃 역학을 향상시킵니다.

### `JPagingTabBarCell`

- **titleLabel**: 탭의 타이틀을 표시합니다.
- **underline**: 선택된 탭을 강조하는 시각적 요소입니다.
- **isSelected**: 선택 상태에 따라 텍스트 색상과 밑줄 가시성을 조정합니다.

### RxSwift와의 통합

`JPagingTabBar`는 반응형 프로그래밍을 위해 RxSwift를 통합하여 사용자 상호작용과 데이터 바인딩을 효율적으로 처리합니다. 이 통합은 UI 업데이트가 일관되고 성능이 좋도록 상태 관리를 단순화합니다.

### 커스터마이징

`font`, `textColor`, `backgroundColor`와 같은 속성을 조정하여 탭 바와 그 셀의 외관을 사용자 정의할 수 있습니다. 레이아웃은 `SnapKit`을 사용하므로, 제약 조건이나 레이아웃 로직을 쉽게 수정할 수 있어 다양한 UI 디자인에 적응할 수 있습니다.