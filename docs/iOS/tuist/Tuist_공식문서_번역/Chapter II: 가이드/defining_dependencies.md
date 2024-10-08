---
title: 'Tuist 의존성 정의'
slug: '/iOS/tuist/Tuist_공식문서_번역/chapterII/defining_dependencies'
excerpt: 'Tuist 의존성 정의'
sidebar_position: 4
---

# Tuist 의존성 정의

Xocde 프로젝트에서 의존성을 설정하는 것은 쉽지 않습니다 특히 의존성이 다른 의존성을 가질 때는 복잡해지며, 이로 인해 특정 의존성 브랜치에 속한 타겟에 변경이 필요할 수 있습니다.

이를 예를 들어서 앱이 동적 프레임워크인 Search에 의존하고, Search가 의존하는 새로운 동적 프레임워크인 Core가 추가된 경우, Search 뿐만 아니라 앱에서도 해당 프레임워크를 제품에 포함해야합니다.

이렇게 설정한 것은 모듈식 앱으로, 8개의 프로젝트로 고성되어 있으며, 각각에는 최소한 두개의 타겟이 있습니다.

- 프레임워크
- 라이브러리를 컴파일 및 테스트를 실행하는 것

이들은 거로 의존성을 가지고 있습니다. 이는 대형 프로젝트에서 흔한 설정으로, 다른 타겟 간에 코드를 재사용해야 하는 경우에 유용합니다. 이렇게 16개의 타겟을 설정하려면,개발자들은 올바를 방법으로 수행하기 위해 많은 것을 알고 있어야합니다. 누가 이 타겟을 의존하는지, 이 동적 프레임워크를 어디에 포함해야 하는지, 라이브러리의 공개 인터페이스를 사용할 수 있도록 업데이트 할 빌드 설정은 어떤 것인지 등의 사항을 고려해야합니다.

너무나도 다행히 Tuist 는 이 모든 작업을 대시 처리해줍니다. 의존성을 정의할 수 있도록 하고, 이러한 지식을 사용하여 올바를 빌드 단계와 빌드 설접을 설정합니다. 처음 매니페스트 파일을 소개할 때, 링킹 빌드 당계를 정의하는 공개 모델은 없다는 것을 알 수 있습니다. tuist는 이렇게 의도한것은, 이러한 모든 것들을 자동으로 처리하기 위해서 입니다.

## 의존성 정의

매니페스트 에서 사용하는 Target 모델에는 의존성을 정의할 수 있는 속성인 `dependencies` 가 있습니다.

```swift
let target = Target(
    dependencies: [

    ]
    /* 매니페스트의 나머지 부분 */
)
```

의존성은 다음과 같은 유형 중 하나일 수 있습니다.

## 대상 종속성

**`.target(name: "App")`**

위와 같은 프로젝트의 다른 타겟과의 의존성을 제공합니다. 예를 들어서 테스트 타겟은 테스트되는 타겟에 의존합니다.

## 프로젝트 간 대상 종속성

**`.project(target: "Core", path: "../Core")`**

다른 프로젝트에 있는 타겟과의 의존성을 정의합니다. 워크스페이스를 생성하면 다른 프로젝트도 포함되므로 Xcode가 해당 타겟을 컴파일 할 수 있게 됩니다.

## 프레임워크 의존성

**`.framework(path: "Carthage/Build/iOS/Alamofire.framework")`**

컴파일된 프레임워크와의 의존성을 정의합니다. 예를 들어서 카르타고 로 컴파일된 프레임워크가 있을 경우 사용할 수 있습니다. 이 프레임워크에 다양한 아키텍처가 포함되어 있다면, Tuist 는 추가적인 빌드 단계를 추가하여 해당 아키텍처를 제거합니다.

## 라이브러리 의존성

```swift
.library(
    path: "Vendor/Library.a",
    publicHeaders: nil,
    swiftModuleMap: "Vendor/Library.modulemap"
)
```

컴파일된 라이브러리와의 의존성을 정의합니다. 공개 헤더 또는 Swift 모듈 맵이 있는 경로를 지정할 수 있습니다.

## 시스템 라이브러리 및 프레임워크 종속성

```swift
.sdk(name: "StoreKit", type: .framework, status: .required)

.sdk(name: "ARKit", type: .framework, status: .optional)

.sdk(name: "c++", type: .library)
```

시스템 라이브러리(.tbd) 또는 프레임워크에 의존성을 정의하며, 필요한 경우 필수 또는 선택적으로 설정할 수 있습니다.

## XCTest 의존성

시스템의 XCTest 프레임워크에 대한 의존성을 나타내는 데 사용됩니다. SDK 의존성과 달리 XCTest.framework은 $(PLATFORM_DIR)/Developer/Library/Frameworks 디렉토리 아래에 있으며, Tuist가 FRAMEWORK_SEARCH_PATH 빌드 설정을 통해 해당 경로를 노출해야합니다.

## XCFramework 종속성

**`.xcframework(path: "Frameworks/Alamofire.xcframework")`**

컴파일된 xcframework에 대한 의존성을 정의합니다.

## 외부 종속성

**`.external(name: "Alamofire")`**

Dependencies.swift 파일에서 정의된 외부 종속성과의 의존성을 정의합니다.
