---
title: 'MVP'
slug: '/mvp'
excerpt: 'MVP 패턴이란?'
sidebar_position: 1
---

# MVP

<br/>

우리가 보통 그냥 심심한데 개발 좀 해볼까? 할 때 하는 개발은 주로 MVC로 구현하기 때문에 MVC에 적응되어 있을 텐데 오늘은 조금 생소한 MVP를 알아보도록 하겠습니다.

<br/>

<img src="https://i.imghippo.com/files/uEpbT1722867009.png" alt="" border="0"/>

<img src="https://i.imghippo.com/files/UxdDy1722867054.png" alt="" border="0"/>

### MVP란?
MVP, 즉 Model-View-Presenter는 소프트웨어 디자인 패턴 중 하나로, 사용자 인터페이스 관련 구조를 효과적으로 관리하는 데 중점을 둡니다. 이 패턴은 전통적인 MVC 패턴을 변형하여, 애플리케이션의 사용자 인터페이스를 Model, View, 그리고 Presenter 세 가지 주요 구성 요소로 나눕니다.

이 구분은 각 컴포넌트의 역할을 명확하게 하여, 시스템 전체의 유지보수와 확장성을 개선합니다. Model은 데이터와 비즈니스 로직을 관리하며, View는 사용자에게 정보를 표시하는 역할만을 담당합니다. 이와 별도로, Presenter는 Model과 View 사이의 상호작용을 조정합니다. Presenter는 View에 표시될 데이터를 Model로부터 가져와 가공하고, 사용자의 입력에 따라 Model을 업데이트하며 View에 반영합니다.

MVP 패턴의 핵심 이점은 각 컴포넌트가 서로의 구현 세부사항으로부터 독립적이라는 점입니다. 이로 인해 View와 Model 사이에 직접적인 통신이 없어짐으로써, 테스트와 유지보수가 훨씬 간편해집니다. 각 부분을 독립적으로 테스트할 수 있으므로, 버그를 쉽게 식별하고 수정할 수 있으며, 애플리케이션의 다양한 부분을 개별적으로 개선할 수 있습니다. 따라서, MVP는 특히 대규모 애플리케이션 개발에 적합한 패턴으로 평가받고 있습니다.

<br/>

### MVP의 지켜야할 규칙
**ViewController**는 사용자로부터의 입력을 처리하는 인터페이스로서의 역할에 집중합니다. 사용자가 버튼을 클릭하거나 다른 형태의 입력을 제공할 때, 이러한 행동들은 Presenter에 의해 처리됩니다. Presenter는 필요한 로직을 수행한 후, 그 결과를 ViewController에 반환하여 사용자 인터페이스를 업데이트합니다. 이 과정에서 ViewController는 어떤 버튼이나 사용자 트리거도 직접 처리하지 않으며, 이 모든 처리는 Presenter에 의해 이루어집니다.

**Model**은 데이터 관리를 전담합니다. 데이터의 수정, 추가 또는 삭제 등의 작업은 모두 Model에서 처리되며, 이 데이터는 Presenter를 통해 다른 컴포넌트와 상호작용합니다. Model은 직접적으로 ViewController와 통신하지 않으며, 모든 데이터 흐름은 Presenter를 경유합니다.

**Presenter**는 중간 관리자로서의 역할을 수행합니다. 이는 API 요청과 같은 외부 데이터 소스와의 통신을 포함하여 필요한 데이터를 수신하고 처리합니다. 처리된 데이터는 적절한 시점에 Model 또는 ViewController에 전달되어 애플리케이션의 흐름을 조정하고, 사용자 인터페이스의 변경사항을 적용합니다.

마지막으로, **ViewController**는 사용자 인터페이스의 구성 및 수정을 담당합니다. 이 역할에는 View의 업데이트, 설정 변경, 새로운 View 요소의 추가 등이 포함됩니다. 이러한 작업을 통해 사용자 경험을 최적화하고, 애플리케이션의 시각적 요소를 관리합니다.

<br/>

### Model
**Model**은 애플리케이션의 데이터 구조와 로직을 담당합니다. 이는 실질적인 데이터와 그 데이터 형식 및 속성을 정의하며, 데이터의 수정 및 추가와 같은 작업을 수행합니다. Model은 순수한 데이터 관리에 초점을 맞추고, 이 데이터는 비즈니스 로직에 따라 처리되어 애플리케이션 전체에 필요한 정보를 제공합니다.

<br/>

### View
**View**는 MVP 구조에서 사용자에게 보여지는 UI 요소를 포함합니다. 이는 전통적인 MVC 패턴의 View와 ViewController의 역할을 모두 수행하는 구성 요소로, 사용자의 입력을 받아 Presenter에 전달하고, Presenter로부터 데이터를 받아 사용자에게 시각적으로 표시합니다. View는 디자인과 사용자 인터페이스를 관리하며, 사용자의 상호작용에 대한 직접적인 응답을 구현합니다.

<br/>

### Presenter
**Presenter**는 View와 Model 사이의 중재자로서의 역할을 수행하며, UIKit과 관련 없는 로직들을 처리합니다. Presenter는 사용자의 입력에 반응하거나 UI를 업데이트하는 역할을 맡습니다. View에서 발생하는 사용자의 요청에 따라 필요한 정보를 Model로부터 가져와서 가공한 후, 그 결과를 다시 View에 전달하여 화면을 업데이트합니다. 이 과정에서 Presenter는 데이터 처리 및 변환의 책임을 지며, View를 통해 사용자에게 최종 결과를 제공합니다.

<br/>

### MVP 장점

MVP (Model-View-Presenter) 패턴은 MVC (Model-View-Controller) 아키텍처에서 발견되는 일부 한계를 극복하고자 개발된 구조로, 특히 View와 Model 사이의 의존성 문제를 해결합니다. MVP에서는 Presenter가 중심적인 역할을 하며, 이를 통해 View와 Model 간의 직접적인 상호작용을 제거합니다. 이 구조에서 Presenter는 모든 데이터 통신의 중재자로서 작용하여, View와 Model 사이의 상호작용을 관리합니다.

이러한 분리 덕분에, View와 Model은 서로 독립적으로 변경하거나 교체할 수 있으며, 이는 유연한 개발을 가능하게 합니다. 예를 들어, 사용자 인터페이스를 새로운 디자인으로 쉽게 업데이트할 수 있거나, 데이터 처리 로직을 개선하기 위해 Model을 수정할 수 있습니다. 이 모든 변경 사항이 다른 컴포넌트에 미치는 영향을 최소화하면서도, 애플리케이션의 기능을 유지할 수 있습니다.

더불어, MVP 패턴은 유지보수성과 테스트의 용이성을 크게 향상시킵니다. Presenter의 도입으로, 비즈니스 로직과 사용자 인터페이스 로직이 명확히 분리되기 때문에, 각 컴포넌트를 독립적으로 테스트할 수 있습니다. 이는 오류를 쉽게 식별하고 수정할 수 있게 하며, 전체적인 코드의 품질을 향상시킵니다.

결과적으로, MVP 패턴은 애플리케이션의 유연성, 유지보수성, 그리고 테스트 가능성을 크게 증가시키는 효과적인 아키텍처 접근 방식입니다.

<br/>

### 단점
하나의 주요 문제는 View와 Presenter 사이의 의존성입니다. MVP 패턴에서, View는 사용자의 입력을 처리하고 이벤트를 Presenter에 전달합니다. 이에 대해 Presenter는 필요한 데이터 처리를 수행한 후 View를 업데이트합니다. 이러한 상호작용은 코드의 복잡성을 증가시키며, 유지보수를 더 어렵게 만들 수 있습니다.

또 다른 문제는 Presenter의 책임과 역할이 과중될 수 있다는 점입니다. Presenter가 View와 Model 사이의 중개자 역할을 수행하며, 이 과정에서 코드가 길어지고 복잡해질 수 있습니다. 데이터의 변화를 감지하고 이에 반응하여 알림을 보내는 등의 추가 코드가 필요하게 되며, 이는 전반적인 코드 관리를 더욱 어렵게 만듭니다.

MVP에서는 View와 Model 사이에도 의존성이 발생할 수 있습니다. 패턴의 설계상 View가 직접 Model을 호출하게 되면, 이 두 컴포넌트 사이의 독립성을 유지하기 어려워집니다. 이는 또한 코드의 복잡성을 증가시키는 요인이 될 수 있습니다.

마지막으로, MVP 패턴 자체의 구현이 번거롭고 어려울 수 있습니다. View, Presenter, Model 간의 상호작용을 적절히 처리하고 유지하기 위해서는 상당한 설계 고민과 구현 노력이 필요합니다. 이는 개발 과정을 느리게 하고, 프로젝트의 초기 구성 단계에서 팀원들에게 높은 학습 곡선을 요구할 수 있습니다.


[MVP 예제 코드](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/MVP/JNBoard_MVP)

[MVP 테스트 예제](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/MVP/JNBoard_MVP)