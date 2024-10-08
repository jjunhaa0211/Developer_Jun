---
title: 'binaryfile?'
slug: '/iOS/tuist/chapterII/binaryfile-description'
excerpt: 'binaryfile?'
sidebar_position: 4
---

# Binary File

## 실행 파일 (Execute File)이란?

<img src="https://i.imghippo.com/files/c3A0F1722865364.png" alt="" border="0"/>

전에 한번 했지만 다시한번 복습하고 가겠습니다.

**실행 파일**은 컴퓨터에서 직접 실행할 수 있는 프로그램을 포함하는 파일입니다. 일반적으로 이 파일은 `컴파일된 코드`, `라이브러리`, `데이터`, 그리고 프로그램이 동작하는 데 필요한 다양한 정보를 포함하고 있습니다.

### 특징

- **확장자**: macOS에서는 `.exe`
- **실행 권한**: 실행 파일은 실행 권한이 부여되어 있어야 하며, 이는 해당 파일이 실행될 수 있도록 하는 권한을 의미합니다.

Echo의 파일 정보 확인

```swift
file /bin/echo
```

<img src="https://i.imghippo.com/files/ub6BI1722865384.png" alt="" border="0"/>

일단 뭐가 있는지 한번 확인해보죠

- Mach-O
- Universal binary
- architecturees: [x86_64:Mach-O 64-bit arm64e]

## Mach-O (Mach Object File Format)

- Mach 기반의 커널
    - OS에서 사용하는 excuetable file, object file, library 파일 포멧
    - 커널: 프로그램이 OS 영역에 직접 접근을 못하지만 Kernel을 통해 OS를 제어
- Mach-O 용어
    - File Types
        - Executable (앱을 실행하기 위한 main binary)
        - Dylib (Dynamic library)
        - Bundle (링크될 수 없는 Dylib을 의미하고 dlopen()으로 실행)
    - Image
        - 실행 가능한 dylib, bundle

## CPU Architecture

- 아이폰은 기종에 따라 다른 아키텍쳐의 CPU를 사용한다.
- 빌드를 하면 Execute file이 생성되고 이 파일을 CPU에서 일기 때문에 CPU에 맞는 Architecture 생성이 필요합니다.

CPU에 맞는 버전

<img src="https://i.imghippo.com/files/CXyKY1722865403.png" alt="" border="0"/>

- armv7
    - 아이폰: iPhone3S ~ iPhone5s
    - 아이패드: iPad2 ~ iPad4
- arm64
    - 아이폰: iPhone5S ~ 최신아이폰
    - 아이패드: iPad5 ~ iPad9
- x86_64
    - 64bit 기기에 대응하는 simulator, mac (32bit는 i386)

## **Build Active Architectures Only 옵션**

<img src="https://i.imghippo.com/files/iN2S01722865423.png" alt="" border="0"/>

- Yes로 이 옵션을 활성화하면, 해당 기기에 맞는 아키텍쳐용 빌드만 실행
- No로 이 옵션을 비활성화하면, 모든 기기에 대응되는 아키텍쳐용 빌드를 생성

- Debug 환경에서는 Build Active Architecture Only를 Yes로하여 디버그 용도만 사용하는 아키텍쳐만 사용하게끔 처리하게하는 것이 Default입니다.
    - 시뮬레이터 빌드 - 인텔 맥이면 x86_64, 실리콘 맥 일 경우 arm64 아키텍쳐로 빌드

## **Universal Binary**

- 두 개 이상의 아키텍쳐를 지원하는 excute file
- 위 Build Active Architecture Only 옵션에서 false로 지정하거나 아래 처럼 info.plist에 universal app 등록
- armv7을 사용하면 Universal 앱이 가능

아래 명령어를 info에 추가하면 universal app을 만들 수 있습니다.

```jsx
<key>UIRequiredDeviceCapabilities</key>
  <array>
    <string>armv7</string>
  </array>
```

## **Universal Dynamic Framework**

- Universal이 붙은 dynamic framework는 리소스와 library가 포함된 번들이고, Heap 영역에 주소를 저장해놓고 stack 영역에서 binary 파일을 사용
- Universal이 붙은 dynamic framwork는 말 그대로 프레임워크가 모든 기기에서 사용가능하도록 유지하는 방법
