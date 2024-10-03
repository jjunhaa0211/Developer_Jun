---
title: 'tuist install'
slug: '/iOS/tuist/chapterIV/tuist_install'
excerpt: 'tuist_install'
sidebar_position: 1
---

# Tuist 설치

## 다운로드 방법

- 프로젝트를 시작하는 방법

```swift
curl -Ls https://install.tuist.io | bash
```

## 다운로드 취소 방법

- 다운로드를 된 `tuist`를 삭제하는 방법

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

> `tuist init`을 실행하면 위와 같은 파일들이 자동 생성됩니다

<img src="https://i.imghippo.com/files/mRcVa1722865505.png" alt="" border="0"/>

- `UIKit`

```swift
tuist init --platform ios
```

`UIkit`을 개발할 수 있는 환경으로 `Tuist`를 만들어줍니다.

- `SwiftUI`

```swift
tuist init --platform ios --template swiftui
```

`SwiftUI`을 개발할 수 있는 환경으로 `Tuist`를 만들어줍니다.

## `Tuist` 모듈 수정 방법

```swift
tuist edit
```

<img src="https://i.imghippo.com/files/KiFmi1722865603.png" alt="" border="0"/>

명령어를 치게 되면 자동으로 `xcode`가 열립니다. 여기서 **`project.swift`이 구조를 정해주는 모듈 파일입니다. `project` 파일을 수정해서 모듈 구조를 변경할 수 있습니다.**

## `Tuist` 프로젝트 생성 방법

```swift
tuist generate
```

<img src="https://i.imghippo.com/files/BVzaQ1722865623.png" alt="" border="0"/>

<img src="https://i.imghippo.com/files/q6Uio1722865643.png" alt="" border="0"/>

- `xcodeprej`와 `xcworkspace` 파일이 생긴다.

`tuist generate`가 성공하면 파일을 실행할 준비가 된 상태입니다.
