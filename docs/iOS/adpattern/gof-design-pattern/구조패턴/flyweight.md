---
title: 'Flyweight?'
slug: '/iOS/adpattern/gof/structural/flyweight'
excerpt: 'Flyweight?'
sidebar_position: 4
---

# Flyweight Pattern (플라이웨이트 패턴)

## 플라이웨이트 패턴이란?

플라이웨이트 패턴은 동일하거나 유사한 객체들 사이에서 가능한 많은 데이터를 공유하여 사용하도록 함으로써 메모리 사용을 절약하는 디자인 패턴입니다. 이 패턴을 통해 객체 생성과 메모리 사용의 효율성을 높일 수 있습니다.

## 플라이웨이트 패턴 쉽게 이해하기

예를 들어, 여러 게임 캐릭터를 생성할 때 각 캐릭터마다 모든 특성을 별도의 객체로 만들면 메모리 낭비가 될 수 있습니다. 플라이웨이트 패턴을 사용하면, 캐릭터들이 공통된 속성은 하나의 객체로 관리하고, 개별적인 속성만 별도의 객체로 생성하여 관리합니다. 이 방법을 통해 객체의 수를 줄이고 메모리 사용을 최적화할 수 있습니다.

## 플라이웨이트 패턴의 적용 시기

- 객체 생성 비용이 높은 상황에서 성능을 향상시키거나 메모리 관리가 필요한 경우에 사용합니다.
- 객체 생성에 많은 자원, 시간, 비용이 소요되는 경우, 플라이웨이트 패턴을 통해 비용을 절감하고 객체의 재사용성을 높일 수 있습니다.

## 플라이웨이트 패턴의 장단점

### 장점

- 메모리 사용량을 줄여 성능을 향상시키며, 객체 인스턴스 수를 줄입니다.
- 객체 생성 비용을 절감하고, 객체의 재사용성을 높입니다.
- 유연성, 유지보수성, 코드 가독성을 향상시킵니다.
- 객체를 생성할 때 필요한 데이터를 캡슐화하여 동일한 데이터를 여러 객체에서 사용할 수 있습니다.

### 단점

- 공유 객체의 상태가 변경되면 모든 객체에 영향을 미칩니다.
- 공유되는 데이터가 자주 변경되는 경우, 재사용성이 감소할 수 있습니다.

## Swift에서의 플라이웨이트 패턴 적용성

Swift는 객체 지향 프로그래밍 언어이므로 플라이웨이트 패턴을 적용하기에 적합합니다. Swift에서는 클래스를 사용하여 플라이웨이트 객체를 구현하는 것이 적절합니다. 구조체를 사용할 경우 값이 복사되므로 값을 공유하는 데 제한이 있습니다.

## 플라이웨이트 패턴 구현 방법

1. 플라이웨이트 객체를 생성하고 관리할 팩토리 클래스 또는 메소드를 작성합니다.
2. 공유할 데이터를 캡슐화하는 플라이웨이트 객체를 작성합니다.
3. 팩토리에서 이미 생성된 객체를 저장하고 필요할 때 재사용합니다.

[예제 코드 보기](https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/GoF-FlyweightPattern)
