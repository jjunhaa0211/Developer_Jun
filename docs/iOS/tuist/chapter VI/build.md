---
title: 'Build'
slug: '/iOS/tuist/chapterVI/build'
excerpt: 'tuist Build에 대해서'
sidebar_position: 5
---

# Build

> tuist build
> 
- 프로젝트를 빌드하는 명령어입니다.

xcodebuild 명령줄 도구를 사용하여 xcode 프로젝트를 생성하고 빌드합니다.

프로젝트의 모든 빌드 가능한 대상 또는 명령에 전달하는 스키마를 빌드합니다.

### 권고사항

프로젝트를 생성하고 xocdebuild 또는 자동화 도구로 빌드할 수 있지만 저희 프로젝트를 빌드하는데 tuist build를 권장합니다.

왜냐하면 tuist build는 그래프 정보를 활용하여 프로젝트를 더 빨리 빌드할 수 있습니다. (바이너리 캐싱 작업)