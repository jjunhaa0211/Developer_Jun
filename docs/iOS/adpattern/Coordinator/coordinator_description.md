---
title: 'Coordinator 이론'
slug: '/iOS/adpattern/what_is_coordinator'
excerpt: 'Coordinator 이론 설명합니다.'
---

# Coordinator Pattern 이론
---
본래 RxFlow를 하고 싶었지만 RxFlow 하면서 많은 어려움을 느꼈습니다. 그래서 RxFlow에 기반이 되는 패턴이 **Coordinator** 패턴이더라고요. 그래서 오늘은 Coordinator Pattern에 대해서 알아보겠습니다.

### **Coordinator** 란?
**Coordinator**는 일반적으로 "조정자"로 번역되며, 이 용어는 소프트웨어 아키텍처 내에서 특정 역할을 나타냅니다. **Coordinator**는 여러 뷰 컨트롤러들 사이에서 지휘 및 조정 역할을 수행하는 객체로, 애플리케이션 내에서 화면 전환과 계층적 흐름을 관리합니다. 이는 앱의 네비게이션을 담당하며, 각 화면이 어떻게 전환되고 어떻게 서로 연결되는지를 제어하는 중추적인 역할을 합니다.

### **Coordinator** 사용 이유

여러분도 그렇고 저도 그렇고 초반에 화면 전환이라고 하면 주로 push 혹은 present를 사용합니다.

그러면 온전히 ViewController에 책임이 부여되며 ViewController에 의존성이 생깁니다.

하지만 **Coordinator**를 사용하면 ViewController의 화면제어와 흐름을 **Coordinator**가 도와주기 때문에 ViewController의  
부담을 줄여 줄 수 있습니다. 그리고 나중에 ViewModel을 같이 사용하면서 DI 또한 해결할 수 있다고 하네요.

> DI = 의존관계 주입 (”A가 B를 의존하다” , 의존 대상 B가 변하면 그것이 A에겍 영향을 미친다)

<br/>

### 장점

앱의 모든 작업을 캡슐화할 수 있으며 **Coordinator**는 완전히 제어 가능하기 때문에 view의 라이프사이클을 무시하고 독립적으로 view를 컨트롤 할 수 있습니다. 위에서 말한 사용이유 또한 장점이기 때문이 이하 생략하겠습니다.

<br/>

### 단점

단점을 예시로 들면 약간 swift 디자인 패턴에 MVP와 유사하다고 생각했습니다.

이유는 하나의 View를 이동하기 위해서는 무조건 ViewController간의 이동을 할때

**Coordinator**가 하나씩 생기는 번거로움이 생기기 때문입니다 MVP는 프리젠트를 계속 만들었는데 

**Coordinator** 패턴은 **Coordinator**를 계속 만드는 번거로움이 있습니다 그리고 소규모 프로젝트를 할때는

어느정도 관리가 될 수 있다고 생각하지만 규모가 커져버리는 경우에는 유지보수도 어렵다고 생각합니다...

