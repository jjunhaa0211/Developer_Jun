---
title: 'Tuist 리소스 엑세스'
slug: '/iOS/tuist/Tuist_공식문서_번역/chapterII/resource_access'
excerpt: 'Tuist 리소스 엑세스'
sidebar_position: 3
---

# Tuist 리소스 엑세스

> Tuist는 iOS 앱 및 프레임워크 프로젝트에서 리소스에 일관성있게 접근할 수 있는 도구입니다.
> 

**1. 리소스 액세스의 일관성과 문제점**

iOS 앱과 프레임워크의 리소스에 접근하는 방식이 서로 다르기 때문에 코드와 리소스를 이동하는 작업이 복잡해집니다. 예를 들어, 앱의 경우 **`Bundle.main`**에서 이미지를 가져오지만, 프레임워크의 경우 **`Bundle(for: FrameworkClass.self).resourceURL`**을 사용해야 합니다. 이로 인해 코드 이동과 리소스 접근이 번거로워집니다. 또한, iOS에서는 라이브러리에는 리소스를 포함할 수 없어서 프레임워크를 사용하거나, 빌드 단계를 추가하여 리소스를 최종 앱 번들에 복사해야 하는 상황이 발생합니다. 이로 인해 프로젝트 유지 보수가 어려워지고, 이해하기 어려운 사이드 이펙트가 발생할 수 있습니다.

**2. Tuist의 리소스 액세스 접근 방법**

Tuist는 이러한 문제를 해결하기 위해 자동으로 **`Bundle`** 확장을 생성하여 타겟의 유형에 따라 올바른 번들에 접근할 수 있도록 지원합니다. 예를 들어, **`MyFeature`**라는 프레임워크 타겟의 경우 **`Bundle.module`**을 사용하여 올바른 번들에 접근할 수 있습니다. 또한, 리소스를 지원하지 않는 라이브러리와 같은 제품에도 리소스를 정의할 수 있도록 합니다. 이런 경우, 관련된 번들 타겟을 생성하여 모든 리소스를 포함하고, 이 번들은 컴파일된 타겟을 포함하는 최종 앱 번들로 복사합니다.

**3. 리소스 액세스 방법 권장**

이러한 방식으로 리소스에 접근하는 것을 강제 사항은 아니지만, 강력히 권장합니다. 이를 통해 프로젝트의 리소스 액세스를 간소화하고, 라이브러리를 프레임워크로 변환하는 등의 변경 작업을 편하게 할 수 있습니다.

**4. 주의 사항**

Tuist의 리소스 액세스 자동 생성은 실시간으로 동작하지 않습니다. 따라서 리소스를 추가하거나 변경한 경우 **`tuist generate`** 명령어를 실행하여 리소스 액세스를 다시 생성해야 합니다.

**5. Objective-C에서 리소스 액세스**

Tuist는 Objective-C에서도 리소스 액세스를 자동으로 생성합니다. 이에 경우 이름 충돌을 피하기 위해 번들에 접근할 때 타겟 이름을 사용해야 합니다.

**6. SwiftGen과 리소스 인터페이스 액세스 자동 생성**

SwiftGen은 코드 생성기로, String 기반 API를 사용하여 이미지, 문자열 및 기타 리소스에 액세스하는 것을 도와줍니다. 이러한 리소스 인터페이스 액세스를 자동으로 생성할 수 있도록 합니다. 이를 통해 Tuist에서 생성된 번들 접근자를 라이브러리에서도 안전하게 사용할 수 있습니다.

**7. 리소스 인터페이스 액세스 자동 생성 방법**

리소스 인터페이스 액세스자를 자동으로 생성하는 방법은 간단합니다. 그저 Target에 리소스를 추가하고, Project에 적절한 ResourceSynthesizers를 정의해주면 됩니다.

**8. 리소스 인터페이스 액세스자 템플릿**

현재 Tuist에서는 다양한 리소스 유형에 대한 템플릿을 기본으로 제공합니다. (Assets, Strings, Plists, Fonts, Files 등)

**9. 리소스 인터페이스 액세스 예시**

MyFramework 타겟에 다음과 같은 리소스가 있다면:

```swift
swiftCopy code
// Asset Catalog 이미지에 액세스
let image1 = MyFrameworkAssets.myImage1
let image2 = MyFrameworkAssets.myImage2

// Plist 키 값을 얻는 방법
let myKeyValue = Environment.myKey

// 폰트에 액세스
let sfProBoldFont = MyFrameworkFontFamily.SFProDisplay.bold
let sfProHeavyFont = MyFrameworkFontFamily.SFProDisplay.heavy

```

**10. ResourceSynthesizers**

ResourceSynthesizers는 SwiftGen이 제공하는 모든 것을 지원하며, 이를 통해 리소스 생성을 자동화할 수 있습니다.

**11. 리소스 인터페이스 액세스 자동 생성기 사용자 정의**

사용자 정의 리소스 생성기를 추가하는 방법은 다양합니다. 사용자 지정 템플릿을 추가하려면 **`Tuist/ResourceSynthesizers/{name}.stencil`**에 해당 템플릿을 추가하고, **`name`**에는 리소스 이름을 기반으로 합니다.

**12. 플러그인을 이용한 리소스 인터페이스 액세스 자동 생성**

플러그인을 사용하는 경우에는 플러그인이 제공하는 리소스 생성기 템플릿을 사용하여 리소스 인터페이스 액세스자를 생성할 수 있습니다.

**13. 주의 사항 (캐시 기능과의 호환성)**

이러한 리소스 생성기는 Tuist의 캐시 기능과 잘 호환되도록 설계되어 빌드 경로에서 실행할 수 없습니다.

**14. 리소스 인터페이스 액세스 사용하지 않기**

만약 리소스 생성기를 사용하지 않으려면 Project 초기화 시 **`resourceSynthesizers: []`**와 같이 빈 배열을 전달하면 됩니다.

이렇게 Tuist를 사용하면 리소스에 일관성 있게 접근하고, SwiftGen을 통해 리소스 인터페이스 액세스 자동 생성도 가능하며 이를 통해 프로젝트의 리소스 액세스를 간편하게 관리할 수 있습니다.
