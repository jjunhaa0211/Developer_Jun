---
title: '여러 매니페스트 파일 간의 코드 공유'
slug: '/iOS/tuist/Tuist_공식문서_번역/chapterII/manifest'
excerpt: '여러 매니페스트 파일 간의 코드 공유'
sidebar_position: 2
---

# 여러 매니페스트 파일 간의 코드 공유

매니페스트 파일?

- 프로젝트 또는 빌드 설정을 정의하는 파일
- 주로 텍스트 형식으로 작성합니다.
- Tuist의 매니페스트 파일은 Project.swift

그래서 매니페스트 파일을 언제씀?

- 프로젝트나 빌드 도구를 사용하다보면 매니페스트 파일이 필요한데 이유는 중복되는 설정이나 코드가 많을 수 있기 때문에 이러한 중복을 최소화하고 코드를 재사용하기 위해 매니 페스트 파일을 공유해야합니다.

tuist 의 해결 방법

- Tuist 를 사용하는 큰 프로젝트에서 Xcode 의 불편한 점 중 하나는 `.xcconfig` 파일을 통해 빌드 설정 외에 프로젝트 요소를 재사용 할 수 없습니다.

프로젝트 정의를 재사용 하면 장점

1. 변경 사항을 한 곳에서 적용하여 모든 프로젝트에 자동으로 적용되므로 유지 보수가 용이해진다.
2. 새 프로젝트가 기존 로직을 재사용하도록 규칙을 정의할 수 있다.
3. 프로젝트가 일괄성 있으면 일광성 부족으로 인한 빌드 오류 가능성이 줄어듭니다.
4. 기존 로직을 재사용하기 때문에 새로운 프로젝트를 추가하기 쉬워집니다.

> Tuist에서는 이러한 프로젝트 정의를 재사용하기 위해서는 project description helpers라는 개념을 사용합니다.
> 

정의

- Project Description Helpers 는 Swift 파일들로 구성되어 있으며. 이들은 ProjectDescriptionHelpers 라는 이름의 프레임워크로 컴파일되며 이 프로레임워크를 매니페스트 파일에서 import 할 수 있습니다.

위치

- Tuist 는 Tuist 디렉토리를 찾을 때까지 디럭토리 계층을 거슬러 올라가야합니다. 그런 다음 Tuist 디렉토리 내에 있는 ProjectDescriptionHelpers 디렉토리 아래 모든 파일을 포함하여 도우미 모듈을 빌드합니다.

예제

- 아래 코드 스니펫은 Project 모델을 확장하여 정적 생성자를 추가하는 방법과 이를 Project.swift 파일에서 사용하는 방법에 대한 예제를 포함합니다.

Project+Templates.swift

```swift
import ProjectDescription

extension Project {
  public static func featureFramework(name: String, dependencies: [TargetDependency] = []) -> Project {
    return Project(
        name: name,
        targets: [
            Target(
                name: name,
                platform: .iOS,
                product: .framework,
                bundleId: "io.tuist.\(name)",
                infoPlist: "\(name).plist",
                sources: ["Sources/\(name)/**"],
                resources: ["Resources/\(name)/**",],
                dependencies: dependencies
            ),
            Target(
                name: "\(name)Tests",
                platform: .iOS,
                product: .unitTests,
                bundleId: "io.tuist.\(name)Tests",
                infoPlist: "\(name)Tests.plist",
                sources: ["Sources/\(name)Tests/**"],
                resources: ["Resources/\(name)Tests/**",],
                dependencies: [.target(name: name)]
            )
        ]
    )
  }
}
```

Project.swift

```swift
import ProjectDescription
import ProjectDescriptionHelpers

let project = Project.featureFramework(name: "MyFeature")
```
