---
title: 'Dropdown'
slug: '/dropdown'
sidebar_position: 15
---

## JDropdown

`JDropdown`은 iOS 13.0 이상에서 사용 가능한 커스텀 드롭다운 뷰 컴포넌트입니다. UIKit과 SnapKit을 사용하여 구현되어 있으며, `UITableViewDataSource`와 `UITableViewDelegate` 프로토콜을 준수합니다.

### 초기화

`JDropdown`은 두 가지 방법으로 초기화할 수 있습니다:

- **프레임과 데이터 배열을 사용한 초기화**
    
    ```swift
    init(frame: CGRect, data: [String])
    ```
    
    이 초기화 메서드를 사용하여 드롭다운 뷰의 위치와 크기(`frame`)와 표시할 데이터(`data`)를 설정할 수 있습니다.
    
- **인터페이스 빌더를 통한 초기화**
    
    ```swift
    required init?(coder aDecoder: NSCoder)
    ```
    
    스토리보드 또는 XIB 파일에서 `JDropdown`을 사용할 때 이 초기화 메서드가 호출됩니다.
    

### 프로퍼티

- `data: [String]` 드롭다운에 표시될 문자열 데이터 배열입니다.
- `isDropdownVisible: Bool` 드롭다운 메뉴의 표시 상태를 관리하는 부울 값입니다. 드롭다운이 표시되면 `true`, 숨겨지면 `false`로 설정됩니다.

### 메서드

- `setupUI()` 버튼과 테이블 뷰를 설정하고 뷰 계층에 추가하는 내부 메서드입니다.
- `setupDropdownButton()` 드롭다운 버튼의 속성을 설정하고 레이아웃 제약조건을 적용하는 메서드입니다.
- `toggleDropdown()` 드롭다운 메뉴의 표시 상태를 전환하는 메서드입니다. 드롭다운이 표시되거나 숨겨질 때 애니메이션 효과를 적용합니다.
- `dropDownButtonClick(title: String)` 드롭다운에서 항목을 선택했을 때 호출되어 버튼의 제목을 업데이트하고 드롭다운 상태를 전환하는 메서드입니다.
- `setupTableView()` 테이블 뷰의 속성을 설정하고 뷰 계층에 추가하는 메서드입니다.

### 사용 예제

```swift
let dropdownData = ["Option 1", "Option 2", "Option 3"]
let dropdownView = JDropdown(frame: CGRect(x: 0, y: 100, width: 320, height: 50), data: dropdownData)
view.addSubview(dropdownView)
```

이 코드는 화면에 `JDropdown` 인스턴스를 추가하고 초기 데이터를 설정하는 방법을 보여줍니다. `dropdownView`는 주어진 `frame` 위치에 생성되며, 선택 가능한 옵션들이 `data` 배열에 따라 설정됩니다.