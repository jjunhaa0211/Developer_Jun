---
title: "오픈소스란?"
slug: "/iOS/blog/lib1"
excerpt: "오픈소스에 대해서 알려드립니다."
sidebar_position: 1
---

### 오픈 소스란?
오픈 소스는 소프트웨어의 소스 코드를 누구나 접근할 수 있도록 공개하는 것을 의미합니다. 이를 통해 다른 개발자들은 코드를 자유롭게 읽고, 수정하고, 배포할 수 있습니다.
- 투명성
    - 코드가 공개되어 있어 누구나 검토할 수 있습니다.
- 협업
    - 전 세계의 개발자들과 함께 작업할 수 있습니다.
### 의존성 관리 도구란?
의존성 관리 도구는 **프로젝트와 해당 라이브러리의 상관 관계를 용이하게 관리해주는 도구**입니다.
저희는 이를 통해 프로젝트에 필요한 외부 라이브러리를 쉽게 추가하고, 업데이트하며, 관리할 수 있습니다.
1. **Cocoa**  
   - macOS와 iOS 애플리케이션을 만들기 위한 프레임워크

2. **CocoaTouch**  
   - iOS 및 기타 Apple 장치용 애플리케이션을 개발하기 위한 프레임워크

3. **CocoaPods**  
   - Swift, Objective-C 프로젝트의 의존성을 관리해주는 도구  
   - `PodFile`이라는 파일에 필요한 라이브러리를 명시하면, CocoaPods가 이를 자동으로 설치, 업데이트 및 관리합니다.

4. **Carthage**  
   - 단순한 의존성 관리 도구  
   - Xcode 프로젝트에 라이브러리를 추가하는 방식을 취합니다.  
   - JSON 기반의 `Cartfile`을 사용하여 의존성을 명시합니다.

5. **SPM (Swift Package Manager)**  
   - Swift 언어와 통합된 의존성 관리 도구  
   - Swift 패키지를 손쉽게 관리하고 배포할 수 있습니다.  
   - 프로젝트 파일에 `Package.swift` 파일을 추가하여 의존성을 정의합니다.