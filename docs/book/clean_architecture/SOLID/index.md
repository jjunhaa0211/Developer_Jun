---
title: 'SOLID'
slug: '/book/clean_architecture/solid'
excerpt: '클린 아키텍처에 대해서 정리합니다.'
sidebar_position: 3
---

### SOLID 원칙이란?

SOLID는 **객체 지향 프로그래밍에서 유지보수성과 확장성이 높은 소프트웨어 설계를 위해 제안된 다섯 가지 원칙의 집합**입니다. 이 원칙들을 따르면 코드의 품질을 개선하고, 변경에 유연하게 대응할 수 있습니다.

### SOLID 맛보기

1. **SRP (Single Responsibility Principle, 단일 책임 원칙)**
   - 클래스는 하나의 책임만 가져야 한다.

2. **OCP (Open/Closed Principle, 개방/폐쇄 원칙)**
   - 확장에는 열려 있고, 수정에는 닫혀 있어야 한다.

3. **LSP (Liskov Substitution Principle, 리스코프 치환 원칙)**
   - 하위 클래스는 상위 클래스를 대체할 수 있어야 한다.

4. **ISP (Interface Segregation Principle, 인터페이스 분리 원칙)**
   - 인터페이스는 클라이언트에 맞게 분리되어야 한다.

5. **DIP (Dependency Inversion Principle, 의존성 역전 원칙)**
   - 추상화에 의존하고, 구체적인 것에 의존하지 말아야 한다.
   
이번 챕터에서는 SOLID에 대해서 자세하게 설명합니다. <br/>
추가적으로 이번 챕터는 저의 주관적인 내용이 많이 들어가 있습니다.