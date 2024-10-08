---
title: '시작하기'
slug: '/iOS/tuist/Tuist_공식문서_번역/chapterI/start'
excerpt: '시작하기'
sidebar_position: 1
---

# 시작하기

> Tuist 는 Xcode 프로젝트를 세팅하고 유지보수를 하는 것을 목표로 사용하는 CLI 툴입니다.
> 

## 다운로드 방법

- 프로젝트를 시작하는 방법

```swift
curl -Ls https://install.tuist.io | bash
```

## 다운로드 취소 방법

- 다운로드를 된 tuist를 삭제하는 방법

```swift
curl -Ls https://raw.githubusercontent.com/tuist/tuist/main/script/uninstall | bash
```

## 파일을 만드는 방법

```swift
mkdir MyApp
```

## 파일 찾아가는 방법

```swift
cd MyApp
```

## Tuist 기본 init 하는 방법

- UIKit

```swift
tuist init --platform ios
```

tuist init 을 실행하면 위와 같은 파일들이 자동 생성됩니다

- SwiftUI

```swift
tuist init --platform ios --template swiftui
```

## Tuist 모듈 수정 방법

```swift
tuist edit
```

## Tuist 프로젝트 생성 방법

```swift
tuist generate
```

- xcodeprej와 xcworkspace 파일이 생긴다.
