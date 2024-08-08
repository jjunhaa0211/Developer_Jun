---
title: 'Banner'
slug: '/banner'
sidebar_position: 14
---

### JBanner 라이브러리 개발 문서

JBanner 라이브러리는 iOS 애플리케이션에서 이미지 배너를 효과적으로 표시하고 관리할 수 있도록 설계된 컴포넌트 집합입니다. 이 문서는 각 클래스의 상세한 구현과 사용 방법을 제공하여, 개발자가 라이브러리를 쉽게 이해하고 통합할 수 있도록 돕습니다.

### 1. JBannerCell (UICollectionViewCell)

`JBannerCell`은 `UICollectionViewCell`을 상속받아 이미지 배너를 표시하는 데 사용됩니다.

### 속성:

- `bannerImageView`: `UIImageView`로 배너 이미지를 표시합니다.

### 초기화:

- `init(frame:)`: 셀을 코드로 초기화할 때 사용합니다.
- `init?(coder:)`: 스토리보드나 XIB 파일로부터 셀을 초기화할 때 사용합니다.

### 메소드:

- `configure(with:)`: 특정 이미지를 셀에 설정합니다.
- `configureUI()`: 뷰와 레이아웃을 설정합니다. 이미지 뷰를 콘텐츠 뷰에 추가하고 오토레이아웃을 사용해 가장자리에 맞춥니다.

### 2. JBannerModel

`JBannerModel`은 배너의 너비와 왼쪽 오프셋을 계산하는 로직을 포함하고 있습니다. RxSwift를 사용하여 데이터 변화를 관찰하고 반응합니다.

### 속성:

- `imageList`: 배너에 표시될 이미지 목록을 저장합니다.
- `widthRatioObservable`: 너비 비율의 변화를 관찰할 수 있는 Observable입니다.
- `leftOffsetRatioObservable`: 왼쪽 오프셋 비율의 변화를 관찰할 수 있는 Observable입니다.

### 메소드:

- `computeWidthRatio()`: 전체 컨텐츠 너비 대비 표시되는 너비의 비율을 계산합니다.
- `computeLeftOffsetRatio()`: 스크롤 위치에 따른 왼쪽 오프셋의 비율을 계산합니다.

### 3. JBannerTableViewCell (UITableViewCell)

`JBannerTableViewCell`은 배너 이미지를 스크롤 가능한 컬렉션 뷰로 관리합니다.

### 속성:

- `bannerModel`: `JBannerModel`의 인스턴스로, 배너 로직을 처리합니다.
- `collectionView`: 이미지를 수평 스크롤할 수 있는 컬렉션 뷰입니다.
- `indicatorView`: 현재 배너의 위치를 나타내는 뷰입니다.

### 메소드:

- `setUp(_:)`: 모델을 설정하고 초기 레이아웃을 구성합니다.
- `layout()`: 컬렉션 뷰와 인디케이터 뷰의 레이아웃을 설정합니다.
- `setupImages()`: 모델에서 이미지 리스트를 가져와 콜렉션 뷰를 업데이트합니다.
- `bannerTimer()`: 일정 간격으로 배너를 자동으로 스크롤합니다.

### 4. JIndicatorView

`JIndicatorView`는 배너의 현재 위치를 나타내는 인디케이터를 관리합니다.

### 속성:

- `viewModel`: `JBannerModel`을 참조하여 너비와 오프셋의 변화를 받습니다.

### 메소드:

- `setupUI()`: 인디케이터 뷰의 UI를 구성합니다.
- `bindUI()`: 뷰 모델의 Observable을 구독하고 인디케이터 뷰를 업데이트합니다.

### 예제 코드

```swift
import Foundation
import JBanner
import UIKit
import SnapKit
import RxCocoa
import RxSwift
import Then

public enum TestBannerCell {
    case banner(model: JBannerModel)
}

public class DSBannerViewController: UIViewController {
    
    private var viewModel: JBannerModel?
    private var cellList: [UITableViewCell] = []
    private var cells: [TestBannerCell] = []
    private lazy var tableView = UITableView(frame: .zero).then {
        $0.delegate = self
        $0.dataSource = self
        $0.backgroundColor = .systemBackground
        $0.showsHorizontalScrollIndicator = false
        $0.register(
            JBannerTableViewCell.self,
            forCellReuseIdentifier: JBannerTableViewCell.identifier
        )
    }
    
    public override func viewDidLoad() {
        super.viewDidLoad()
        
        self.viewModel = JBannerModel()
        self.configureUI()
        self.addCells()
    }
}

extension DSBannerViewController {
    
    private func configureUI() {
        view.backgroundColor = .white

        self.view.addSubview(self.tableView)
        
        self.tableView.snp.makeConstraints {
            $0.top.equalTo(self.view.safeAreaLayoutGuide.snp.top)
            $0.leading.equalToSuperview()
            $0.trailing.equalToSuperview()
            $0.bottom.equalTo(self.view.safeAreaLayoutGuide.snp.bottom)
        }
    }
    
    private func addCells() {
        guard let viewModel = self.viewModel else { return }
        self.cells.append(.banner(model: viewModel))
    }
}

extension DSBannerViewController: UITableViewDelegate {
    public func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        if indexPath.row == 0 {
            return self.view.frame.height / 2
        } else if indexPath.row == 1 {
            return self.view.frame.height / 3.55
        } else {
            return self.view.frame.height / 2
        }
    }
    
    public func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
//        print("클릭")
    }
    
    public func tableView(_ tableView: UITableView, willDisplay cell: UITableViewCell, forRowAt indexPath: IndexPath) {
        switch self.cells[indexPath.item] {
        case .banner:
            cell.separatorInset = UIEdgeInsets(top: 0, left: self.tableView.bounds.width, bottom: 0, right: 0)
        }
    }
}

extension DSBannerViewController: UITableViewDataSource {
    public func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.cells.count
    }
    
    public func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    public func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let viewModel = self.viewModel else { return UITableViewCell() }
        switch self.cells[indexPath.item] {
        case .banner:
            guard let cell = tableView.dequeueReusableCell(
                withIdentifier: JBannerTableViewCell.identifier
            ) as? JBannerTableViewCell else {
                return UITableViewCell()
            }
            cell.setUp(viewModel)
            return cell
        }
    }
}
```

이 문서는 JBanner 라이브러리의 각 구성 요소를 상세하게 설명하고 있으며, 라이브러리를 사용하여 iOS 애플리케이션에서 동적인 이미지 배너를 쉽게 구현할 수 있도록 합니다.