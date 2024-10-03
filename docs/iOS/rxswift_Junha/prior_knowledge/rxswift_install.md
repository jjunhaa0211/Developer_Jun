---
title: 'RxSwift 설치 방법'
slug: '/rxswift/rxswift_install'
excerpt: 'RxSwift 설치 방법을 설명합니다.'
sidebar_position: 3
---

`RxSwift`를 설치하는 방법은 `CocoaPods`, `Carthage`, `SPM`을 사용하는 방법을 알려드리겠습니다.

### 1. CocoaPods 설치하는 방법

1. **CocoaPods 설치**: CocoaPods가 설치되어 있지 않다면, 터미널에서 다음 명령어로 설치할 수 있습니다.
    
    ```bash
    sudo gem install cocoapods
    ```
    
2. **Podfile 생성**: 프로젝트 폴더에서 `Podfile`을 생성하거나, 이미 생성된 `Podfile`을 엽니다.
    
    ```bash
    pod init
    ```
    
3. **Podfile 수정**: `Podfile`을 열어 RxSwift를 추가합니다. (두개를 필수로 넣어야합니다.)
    
    ```ruby
    target 'YourTargetName' do
      use_frameworks!
    
      pod 'RxSwift', '~> 6.0'
      pod 'RxCocoa', '~> 6.0'
    end
    ```
    
4. **RxSwift 설치**: 터미널에서 다음 명령어를 실행하여 RxSwift를 설치합니다.
    
    ```bash
    pod install
    ```
    
    M1 칩의 경우 아래 명령어를 사용해주세요.
    
    ```swift
    arch -x86_64 pod install
    ```
    
5. **프로젝트 열기**: `YourProjectName.xcworkspace` 파일을 열어 프로젝트를 실행합니다.

### 2. Carthage 설치 방법

1. **Carthage 설치**: Carthage가 설치되어 있지 않다면, 다음 명령어로 설치합니다.
    
    ```bash
    brew install carthage
    ```
    
2. **Cartfile 생성**: 프로젝트 루트 디렉토리에 `Cartfile`을 생성하고 RxSwift를 추가합니다.
    
    ```
    github "ReactiveX/RxSwift" ~> 6.0
    ```
    
3. **Carthage 빌드**: 다음 명령어를 실행하여 RxSwift를 빌드합니다.
    
    ```bash
    carthage update --use-xcframeworks
    ```
    
4. **프로젝트에 라이브러리 추가**: Carthage가 생성한 RxSwift와 RxCocoa 프레임워크를 Xcode 프로젝트에 추가합니다.

### 3. Swift Package Manager(SPM) 설치 방법

1. **Xcode에서 SPM 추가**: Xcode에서 프로젝트를 열고 `File > Add Packages`를 선택합니다.
2. **RxSwift 패키지 추가**: 다음 URL을 입력하고, 패키지를 추가합니다.
    
    ```
    https://github.com/ReactiveX/RxSwift.git
    ```
    
3. **버전 선택**: RxSwift의 버전을 선택하고, `Add Package`를 클릭하여 추가합니다.