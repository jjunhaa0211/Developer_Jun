---
title: ".gitignore 하는 방법"
slug: "/gitignore"
excerpt: "gitignore 방법을 알려드립니다."
sidebar_position: 3
---

<img src="https://i.imghippo.com/files/NNTPc1722921319.png" alt="" border="0"/>
<img src="https://i.imghippo.com/files/0Sod21722921363.png" alt="" border="0"/>
터미널에서 `sudo touch .gitignore`를 붙여넣기 해주시면됩니다.

그러면 아래와 같은 파일이 나오게 됩니다.
<img src="https://i.imghippo.com/files/flj8v1722921454.png" alt="" border="0"/>
.gitignore가 생긴 것을 알 수 있습니다. 
> .gitignore가 만약 보이않으시다면 (command + 쉬프트 + .)을 해주시면 보입니다.
하지만 깃 이그노에 무언가를 적용욕하기 위해서는 파일 정보에 들어가야합니다.

<img src="https://i.imghippo.com/files/w54Gm1722921578.png" alt="" border="0"/>
이렇게 바꾸어 주시면 됩니다.
그러면 파일을 수정할려고 했을 경우 편집을 할 수 있는 권한이 생기게 됩니다.

<img src="https://i.imghippo.com/files/QC9s91722921647.png" alt="" border="0"/>
이제 여기다가 Swift, CocoaPod, xcode 같은 경우에는 아래를 넣어주시면 됩니다.

```swift
# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## User settings
xcuserdata/

## compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)
*.xcscmblueprint
*.xccheckout

## compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)
build/
DerivedData/
*.moved-aside
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3

## Obj-C/Swift specific
*.hmap

## App packaging
*.ipa
*.dSYM.zip
*.dSYM

## Playgrounds
timeline.xctimeline
playground.xcworkspace

# Swift Package Manager
#
# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.
# Packages/
# Package.pins
# Package.resolved
# *.xcodeproj
#
# Xcode automatically generates this directory with a .xcworkspacedata file and xcuserdata
# hence it is not needed unless you have added a package configuration file to your project
# .swiftpm

.build/

# CocoaPods
#
# We recommend against adding the Pods directory to your .gitignore. However
# you should judge for yourself, the pros and cons are mentioned at:
# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control
#
# Pods/
#
# Add this line if you want to avoid checking in source code from the Xcode workspace
# *.xcworkspace

# Carthage
#
# Add this line if you want to avoid checking in source code from Carthage dependencies.
# Carthage/Checkouts

Carthage/Build/

# Accio dependency management
Dependencies/
.accio/

# fastlane
#
# It is recommended to not store the screenshots in the git repo.
# Instead, use fastlane to re-generate the screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://docs.fastlane.tools/best-practices/source-control/#source-control

fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots/**/*.png
fastlane/test_output

# Code Injection
#
# After new code Injection tools there's a generated folder /iOSInjectionProject
# https://github.com/johnno1962/injectionforxcode

iOSInjectionProject/
```

만약 이그노할 것이 더 필요한 경우에는 아래 사이트에 추가해주세요.
[깃이그노 추가하러가기](https://www.toptal.com/developers/gitignore/)