---
title: 'if-switch'
slug: '/grammar/if-switch'
excerpt: 'if-switch를 설명합니다.'
sidebar_position: 2
---

# Swift의 조건문: if문과 switch문 이해하기

프로그래밍 언어 Swift에서 조건문은 특정 조건에 따라 코드의 실행 흐름을 제어하는 중요한 역할을 합니다. Swift의 `if`문과 `switch`문은 다양한 조건에 따라 코드를 실행할 수 있도록 돕습니다. 이 두 조건문의 이해는 Swift 프로그래밍의 기본을 마스터하는 데 필수적입니다.

## if문

Swift의 `if`문은 하나 이상의 조건을 평가하고, 그 결과에 따라 다른 코드 블록을 실행합니다. 이는 가장 기본적인 조건문으로, 특정 조건이 참일 때 해당 코드 블록을 실행합니다. 추가적으로 `else`와 `else if`를 통해 다양한 조건과 그에 따른 대안을 구현할 수 있습니다.

### 기본 구조

```swift
swift코드 복사
if 조건 {
    // 조건이 참일 때 실행될 코드
} else if 다른 조건 {
    // 다른 조건이 참일 때 실행될 코드
} else {
    // 위의 어떤 조건도 참이 아닐 때 실행될 코드
}

```

### 예제

```swift
swift코드 복사
let score = 85

if score >= 90 {
    print("A grade")
} else if score >= 80 {
    print("B grade")
} else {
    print("C grade or below")
}

```

## switch문

Swift의 `switch`문은 다양한 가능한 경우 중 하나를 선택하여 실행할 수 있습니다. 이 조건문은 매우 강력하며, 다른 언어들의 `switch`보다 유연합니다. 각 `case`는 특정 값이나 범위와 일치하는지 확인하고, 일치하는 경우 해당 코드 블록을 실행합니다. 모든 가능한 경우를 처리해야 하며, `default` 케이스를 통해 그 외의 모든 경우를 처리합니다.

### 기본 구조

```swift
swift코드 복사
switch 변수 {
case 값1:
    // 변수가 값1과 일치할 때 실행될 코드
case 값2, 값3:
    // 변수가 값2 또는 값3과 일치할 때 실행될 코드
default:
    // 어떤 case도 일치하지 않을 때 실행될 코드
}

```

### 예제

```swift
swift코드 복사
let someCharacter = "z"

switch someCharacter {
case "a", "e", "i", "o", "u":
    print("\(someCharacter) is a vowel.")
case "b", "c", "d", "f", "g":
    print("\(someCharacter) is a consonant.")
default:
    print("\(someCharacter) is not a vowel or a consonant.")
}

```

## C언어와의 비교

### if문

Swift와 C언어의 `if`문은 매우 유사하지만, Swift에서는 조건식을 괄호로 묶지 않아도 됩니다.

### switch문

C언어에서 `switch` 문은 `break`를 사용하지 않으면, 선택된 케이스 이후의 모든 케이스가 실행되는 'fall-through' 특성을 가집니다. 반면, Swift에서는 각 케이스가 명시적으로 `break`를 필요로 하지 않으며, `fallthrough` 키워드를 사용해 이 동작을 명시적으로 표현할 수 있습니다.

## 반복문: for-in

### Swift

Swift에서 `for-in` 문은 컬렉션의 각 항목에 대해 반복을 수행합니다. 이 구조는 C언어의 전통적인 `for` 문보다 간결하며, `where` 절을 추가하여 특정 조건을 만족하는 항목에 대해서만 반복을 수행할 수 있습니다.

```swift
swift코드 복사
let numbers = [1, 2, 3, 4, 5]
for number in numbers where number > 3 {
    print(number)
}

```

### C언어

C언어의 `for` 문은 초기화, 조건, 반복 실행(증감) 세 부분으로 구성됩니다. 이는 복잡한 반복 조건을 다룰 수 있지만, Swift의 `for-in` 문처럼 직관적이지는 않습니다.

```c
c코드 복사
int numbers[] = {1, 2, 3, 4, 5};
for(int i = 0; i < 5; i++) {
    if(numbers[i] > 3) {
        printf("%d\n", numbers[i]);
    }
}

```

## 결론

Swift의 `if`문과 `switch`문은 프로그램 내에서 조건부 로직을 구현하는 데 필수적인 도구입니다. `if`문은 간단한 조건에 적합하며, `switch`문은 많은 수의 가능한 경우 중에서 선택해야 할 때 더 적합합니다. 두 조건문 모두 각기 다른 시나리오에서 최적의 코드 흐름을 제공하며, Swift 프로그래밍의 유연성과 표현력을 높여줍니다.