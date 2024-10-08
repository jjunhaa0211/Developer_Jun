---
title: 'Tuist 채택하기'
slug: '/iOS/tuist/Tuist_공식문서_번역/chapterII/adopting_Tuist'
excerpt: 'Tuist 채택하기'
sidebar_position: 1
---

# Tuist 채택하기

빌드 설정을 .xcconfig 파일로 추출

- 프로젝트가 간결할 수록 더 마이그레이션이 쉬워진다.
- 빌드 설정과 같은 정보를 추출할 수 있는 것은 개발자가 빌드 설정을 사용하여 설정을 정의하지 못하도록 해야합니다.

## 대상 빌드 추출 방법?

```swift
tuist migration settings-to-xcconfig -p Project.xcodeproj -t MyApp -x MyApp.xcconfig
```

## Tuist 프로젝트 빌드 설정 추출

```swift
tuist migration settings-to-xcconfig -p Project.xcodeproj -x MyAppProject.xcconfig
```

## 처음으로 독립적인 마이그래이션 하는 법

```swift
tuist migration list-targets -p Project.xcodeproj
```

위 명령어를 사용하면 종속성 수로 정렬된 프로젝트의 대상을 나열합니다.

종속성이 가장 적은 대상부터 맨 위에서 시작하는 것을 추천합니다.
