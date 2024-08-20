---
title: 'Abstract?'
slug: '/gof/constructor/abstract'
excerpt: 'Abstract?'
sidebar_position: 4
---

### 추상 택토리 패턴이란?
추상 팩토리 패턴은 생성 패턴의 한 종류로 객체의 집합을 생성할 떄 유리한 패턴입니다. 추상 팩토리 패턴은 앞에서 소개한 팩토리 메서드 패턴하고는 다른 패턴입니다. 추상 팩토리 패턴은 기존 팩토리 패턴에서 한번 더 추상화시켜서 서로 관련이 있는 제품을 생성하게 해줍니다.
즉 구상 클래스들을 지정하지 않고도 객체의 모음을 생성할 수 있습니다.

### 왜 추상 팩토리이 나오게 된 걸까?
객체들을 프로그램 내에서 모든 UI를 각자 다른 객체로 만들게 되면 나중에 수정이 어려울 수 있기 떄문에 객체들을 표현하는 하나의 추상 클래스를 저의하여 이를 해결하기 위한 방법으로 만들어졌습니다.

### 팩토리 메서드 패턴 VS 추상 팩토리 메서드 패턴
팩토리 패턴 대신 추상황 팩토리 패턴을 사용하는 경우는?
- 제품 중 하나를 선택해서 시스템을 설정해야 하고 구성한 제품군을 다른 것으로 대체할 수 있을 때
- 연관된 다수의 인스턴스가 함께 설계되거나 외부로부터 무언가를 제약하고 싶을 경우

조금 쉽게 설명하면 연관이 있는 객체를 묶어서 생성하는 경우에 추상화 팩토리 패턴이 팩토리 메서드 패턴에 비해서 유리합니다. (하지만 저는 인스턴스를 굳이 숨길 필요 없는 코드에는 조금 더 간단한 팩토리 메서드 패턴을 사용하는 것이 좋다고 생각합니다.)

### 추상 팩토리 메서드 패턴 구조 이해해 보기
- Avstract Factory = AvstractFactoryMethod(맨 위에 있는 것) = Facroty 추상화 타입
- Concrete Factory = iPhoneFactory, iPadFactory = 각 연관이 있는 인스턴스 집합을 생성할 Factory 타입
- Abstract Product = CButton, CLabel = 생성됨 인스턴스를 추상화한 타입
- Concrete Product = iPhoneButton, iPadLabel, iPadButton, iPhoneLabel = 최종적으로 생성되는 구체적인 타입

### 추상 팩토리 메서드 패턴의 장단점
#### 장점
- 팩토리에서 생성되는 제품의 상호 호환을 보장할 수 있습니다.
- 단일 책임 원칙이기 때문에 코드를 쉽게 유지보수 할 수 있습니다.
- 나머지는 팩토리 메서드와 동일한 장점입니다.
#### 단점
- 단점 역시 팩토리 메서드와 동일한 단점입니다.

> 코드가 길어서 링크를 통해 확인해주세요

[Abstract Factory Method Pattern 예제코드](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/GoF-AbstractFactoryMethodPattern)
