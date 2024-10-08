---
title: 'Tuist 의존성 추가'
slug: '/iOS/tuist/Tuist_공식문서_번역/chapterII/add_dependency'
excerpt: 'Tuist 의존성 추가'
sidebar_position: 4
---

# Tuist 의존성 추가

외부 의존성 또는 그래프로 표현되며, 노드 프레임워크, 아리브러리 또는 번들을 나타냅니다. CocoaPods와 같은 의존성 관리자는 pod install을 실행할 때 Xcode 워크페이스를 활용하여 통합하며, SPM은 빌드 시 Xcode의 폐쇄된 빌드 시스템을 활용합니다. 이러한 방식은 통합 문제를 야기할 수 있고 컴파일 문제를 발생시킬 수 있습니다. 이는 좋은 경험은 아니기에 Tuist는 라이브러리를  지원하는 다른 방식으로 외부 의존성 관리를 수행합니다. 이로 인해 린팅과 캐싱과 같은 Tuist의 기능을 활용할 수 있습니다. 이 간단한 아니디어는 개발자들이 Dependencies.swift 파일에 Carthage 및 Swift Package 의존성을 정의하도록하고, tuist fetch를 실행하여서 생성된 Xcode 프로젝트에 통합하는 것입니다. 프로젝트와 외부 의존성 그래프를 하나로 병협하므로, 결과적인 그래프가 유효하지 않으면 빠르게 실패 할 수 있습니다.

## CocoaPods 지원

CocoaPods는 더이상 지원하고 있지 않지만 tuist로 생성된 프로젝트 위에 pod install을 해서 사용이 가능하기는 합니다.

## SPM 지원

원하는 경우, Project.packages 속성에 패키지를 정의하여 기본적인 SPM 지원을 사용할 수 있습니다. 그리고 TargetDependency case를 사용하여 타겟에 의존성을 추가할 수 있습니다.

이것은 Dependencies.swift 통합에 문제가 있는 경우 SPM 플러그인을 사용해야하는 경우 유용하게 사용할 수 있으나 이경우 캐싱 및 생성 시간 패키지 해결과 같은 중요한 기능에 대한 지원을 잃을 수 있습니다.

## 의존성 선언

외부 의존성은 프로젝트의 루트에 있는 Tuist 디렉토리의 Dependencies.swift 파일에 선언합니다. 이 파일이 존재하지 않으면 빈 파일을 만들고 tuist edit을 실행하여 Xcode에서 내용을 편집합니다. 아래는 Dependencies.swift의 매니페스트 파일의 예시입니다.

```swift
import ProjectDescription

let dependencies = Dependencies(
    carthage: [
        .github(path: "Alamofire/Alamofire", requirement: .exact("5.0.4")),
    ],
    swiftPackageManager: [
        .remote(url: "https://github.com/Alamofire/Alamofire", requirement: .upToNextMajor(from: "5.0.0")),
    ],
    platforms: [.iOS]
)
```

## 표준 인터페이스

Tuist의 내장된 외부 의존성 선언 지원을 사요하는 이점 중 하나는, 모든 지원되는 의존성 관리자에서 인터페이스가 표준화되어 있다는 것입니다. 이로 인해 관리자를 다른 것으로 이동하는 것이 안전합니다.

# 의존성 가져오기

의존성이 선언된 후, tuist fetch를 실행하여 가져와야 합니다. Tuist는 의존성 관리자를 사용하여 의존성을 Tuist/Dependencies 디렉토리 아래에 끌어옵니다.

```swift
Tuist
    |- Dependencies.swift # Manifest
    |- Dependencies
        |- graph.json # tuist fetch에 의해 생성된 직렬화된 의존성 그래프 저장
        |- Lockfiles # 의존성 해결에 의해 생성된 락 파일 저장
            |- Carthage.resolved
            |- Package.resolved
        |- Carthage 
            |- Build # Carthage에 의해 생성된 `Carthage/Build` 디렉토리 내용 저장
                |- Alamofire.xcframework
                |- .Alamofire.version
            |- Cartfile # 생성된 Cartfile
        |- SwiftPackageManager
            |- .build # Swift Package Manager에 의해 생성된 `.build/` 디렉토리 내용 저장
                |- artifacts
                |- checkouts
                |- repositories
                |- manifest.db
                |- workspace-state.json
            |- Package.swift # 생성된 Package.swift
```

다음 파일 및 디렉토리를 버전 관리에서 제외하는 것을 권장합니다(예: .gitignore 파일).

```swift
Tuist/Dependencies/graph.json # Tuist에 의해 생성된 직렬화된 의존성 그래프 체크인 방지
Tuist/Dependencies/Carthage # Carthage 의존성의 빌드 아티팩트 체크인 방지
Tuist/Dependencies/SwiftPackageManager # Swift Package Manager 의존성의 빌드 아티팩트 체크인 방지
```

## 프로젝트에 의존성 통합

의존성이 가져와진 후, 프로젝트의 타겟에 의존성을 선언할 수 있습니다. tuist edit을 실행하여 프로젝트 매니페스트를 편집하고, external 타겟 의존성 옵션을 사용하여 의존성을 선언합니다.

```swift
import ProjectDescription

let project = Project(
    name: "App",
    organizationName: "tuist.io",
    targets: [
        Target(
            name: "App",
            platform: .iOS,
            product: .app,
            bundleId: "io.tuist.app",
            deploymentTarget: .iOS(targetVersion: "13.0", devices: .iphone),
            infoPlist: .default,
            sources: ["Targets/App/Sources/**"],
            dependencies: [
                .external(name: "Alamofire"),
            ]
        ),
    ]
)
```

## 참고 사항

- Swift 패키지가 프로젝트의 그래프로 소스 코드로 통합될 때, 일반적으로 의존성을 명시적으로 빌드하려고 하지 않으므로 스킴은 생성되지 않습니다.
    - 이러한 경우 스킴은 Xcode에서 직접 만들거나 Project.swift에서 정의하여 생성을 사용할 수 있습니다.
- 존재하는 경우, Tuist는 패키지 매니페스트 파일에 정의된 제품 유형을 사용합니다. 그렇지 않은 경우 기본적으로 .staticFramework를 사용합니다.
