---
title: 'manifests'
slug: '/iOS/tuist/chapterIV/manifests'
excerpt: 'manifests'
sidebar_position: 2
---

# Manifests

<img src="https://i.imghippo.com/files/1dAMV1722854315.png" alt="" border="0"/>
<br/>
<img src="https://i.imghippo.com/files/dmgtc1722854349.png" alt="" border="0"/>

## 역할

> `xcode` 프로젝트와 워크스페이스를 관리하고, 구성하는데 도움을 줍니다.
> 

`Manifests`는 프로젝트 구조를 관리해주며, 프로젝트를 일관성을 유지해주고 복잡성을 줄이고 가장중요한 프로젝트간의 의존성을 설정할 수 있습니다.

## 어떤 것을 해야할까?

### Project.swift

- 개별 프로젝트의 설정을 포함합니다.
- EX: `Target`, `Schema`, `의존성`

### Workspace.swift

- 워크스테이스 레벨의 설정을 포함합니다.
- EX: 추가된 파일의 위치, 파일들의 정의

### Config.swift

- `Tuist` 도구의 전역 설정을 포함합니다.
- `xcode 버전`, `스키마의 generation` 옵션등을 정의할 수 있습니다.

### Dependencies.swift

- 프로젝트에 들어가는 라이브러리를 추가할 수 있습니다.
- EX: SPM, 카르타고

## 어떻게 사용하면 될까?

```swift
import ProjectDescription
```

`Manifests`를 사용하려면 ProjectDescription 프레임워크를 가져와야 모든 클래스와 열거형을 사용할 수 있습니다.
