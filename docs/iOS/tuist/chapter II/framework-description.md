---
title: 'Framework?'
slug: '/iOS/tuist/chapterII/framework-description'
excerpt: 'Framework?'
sidebar_position: 2
---

# Framework

- 헤더 파일, localizable 파일, 이미지, 문서와 같은 추가 리소스까지 이 모든 것을 하나의 *Bundle* 묶어 놓은 것
- *Bundle*: 서브 디렉토리 내부의 파일 디렉토리
- iOS에서 *Bundle*에 관련 파일을 하나의 패키지로 편하게 함께 제공

즉, **Framework**가 몸집이 크고 **Library**가 몸집이 작으며, **Framework** 안에 **Library**가 속할 수 있습니다.

## Static framework VS Dynamic framework

### **Static Framework (정적 프레임워크)**

<img src="https://i.imghippo.com/files/dtch51722864322.png" alt="" border="0"  width="600" height="400"/>

- 구성: Source File + Static Library + Static Linker
- 동작 원리: `Static Linker`를 통해 `Static Library` 코드가 `Execute File(application file)` 내에 복사되어 Heap 메모리에 상주
- 문제점: `Static Library`가 복사되므로 여러 `framework`에 사용하면 코드 중복이 발생할 수 있음
- 특징: 초기에 모든 것을 고정해두고 가는 형태
- **장점**
    - 런타임 속도가 빠름
- **단점**
    - 메모리 사용량이 많음
    - 컴파일 속도가 오래 걸림

### **Dynamic Framework (동적 프레임워크)**

<img src="https://i.imghippo.com/files/7Knfc1722864351.png" alt="" border="0" width="600" height="400"/>


- 구성: Source File + Dynamic Library References + Dynamic Library + Static Linker
- 동작 원리: 파일이 아닌 주소를 `execute file`에 저장하고, `static linker`를 통해서 `stack`으로 라이브러리들을 불러와서 사용하는 형태
- 특징: 빌드 시간을 줄이고 앱 내에서 런타임 시 해당 프레임워크가 사용되는 부분에서 연결하여 사용
- 선호 시나리오: 전체 에셋 등의 소스를 가지면 `Dynamic framework`가 더 적합
- **장점**
    - 컴파일 속도가 빠름
    - 메모리를 효율적으로 사용
- **단점**
    - 런타임 속도가 느림
