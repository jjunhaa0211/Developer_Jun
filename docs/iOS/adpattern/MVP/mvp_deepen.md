---
title: 'MVP_Deepen'
slug: '/iOS/adpattern/mvp_deepen'
excerpt: 'MVP 패턴이란?'
sidebar_position: 1
---

# MVP 심화
### 1. Presenter

- Presenter가 View의 UI 비즈니스 로직 담당
- View의 발생하는 모든 호출은 Presenter에 직접 위임
- Presenter는 View와 직접 분리되어있어서 인터페이스를 통해서 뷰와 소통합니다.
- Presenter는 Model을 View에 전달하여 바인딩함
- Presenter는 버튼 누르기, 네비게이션과 같은 로직 또한 수행하게 됩니다.
- 장점
    - 데이터 바인딩을 활용하여 코드의 양을 줄일 수 있습니다.
- 단점
    - 테스트 가능한 표면이 적고, View에 모델과 직접 대화가 힘들며 캡슐화가 덜합니다.

### 2. View

- 단순하며 거의 로직이 호함되어있지 않습니다.
- Model과 완전히 격리되어 있어야 합니다.
- 항상 Presenter가 구독하면 View는 업데이트만 하면됩니다.
- 직접적인 데이터 바인딩은 할 수 없지만 View는 Presenter가 데이터를 설정하는데 사용하는 Setter를 노출합니다.
- 모든 상태 관리는 View가 아닌 Presenter가 관리합니다.

### 3. Model

- 데이터 저장 및 관리

## MVP 특징

- 테스트에 적합하다.
    - 이유
        1. 대부분의 비지니스 로직을 테스트할 수 있다.
        2. 단위 테스트에서 View를 모의 MOCK을 만들 수 있다.
- 많은 양방향 디스패치가 필요합니다.
    - 말이 좀 어렵죠…. 풀어드릴게용!
        - 양방향 디스패치란?
            - 뷰에서 발생하는 이벤트를 Presenter로 보내고 Presenter에서 전달된 이벤트를 View에 띄워주는 것을 말합니다.
        - ex:
        - 저장 버튼이 완료되면, Presenter는 그 인터페이스를 통해 View에게 저장완료 되었다는 것을 알려주어서 뷰에 표기합니다.
- MVP는 WebForms에서 Presenter 분리를 할 수 있는 프레임 워크인데용
    - ASP.NET에 의하면 View가 제일 먼저 생성된다고 합니다.


[MVP 예제 코드](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/MVP/JNBoard_MVP)

[MVP 테스트 예제](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/MVP/JNBoard_MVP)