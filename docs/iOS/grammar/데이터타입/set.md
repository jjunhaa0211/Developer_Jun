---
title: 'Set'
slug: '/iOS/grammar/set'
excerpt: 'Set를 설명합니다.'
---

### Swift의 Set과 NSSet: 깊이 이해하기

Swift에서 `Set`은 유일한 값들을 저장하는 데 사용되는 컬렉션 타입입니다. `Set`은 순서가 없으며, 각 요소는 고유해야 합니다. 이는 집합 연산이나, 중복을 허용하지 않는 데이터를 관리할 때 유용합니다. 반면, `NSSet`은 Objective-C에서 사용되는 집합 타입으로, Swift의 `Set`과 비슷하지만 Objective-C와의 호환성을 위해 사용됩니다.

### Swift의 Set 사용법

Swift의 `Set`은 기본 데이터 타입과 사용자 정의 데이터 타입을 포함하여, `Hashable` 프로토콜을 준수하는 모든 타입을 요소로 저장할 수 있습니다. 이는 `Set`이 각 요소의 해시 값을 사용하여 유일성을 보장하고, 빠르게 접근할 수 있도록 합니다.

```swift
var fruits = Set(["apple", "orange", "banana"])
```

### Set의 동적 조작

`Set`은 요소를 추가, 삭제 및 검사하는 메서드를 제공합니다. 이를 통해 데이터를 유연하게 관리할 수 있습니다.

- **요소 추가**: `insert(_:)` 메서드를 사용해 새 요소를 추가할 수 있습니다.
- **요소 제거**: `remove(_:)` 또는 `removeAll()`을 사용하여 요소를 제거할 수 있습니다.
- **멤버십 검사**: `contains(_:)` 메서드를 사용하여 특정 요소가 `Set`에 포함되어 있는지 검사할 수 있습니다.

```swift
fruits.insert("mango")
fruits.remove("apple")
print(fruits.contains("banana"))  // true
```

### Set의 집합 연산

`Set`은 수학적 집합 연산을 지원하여, 두 집합 간의 합집합, 교집합, 차집합 등을 쉽게 계산할 수 있습니다. 이는 데이터의 관계를 분석할 때 유용합니다.

```swift
let vegetables = Set(["carrot", "tomato", "pepper"])
let allItems = fruits.union(vegetables)
let commonItems = fruits.intersection(vegetables)
let uniqueFruits = fruits.subtracting(vegetables)
```

### NSSet의 사용

`NSSet`은 Objective-C의 집합 타입으로, Swift의 `Set`과 호환됩니다. `NSSet`은 불변성을 가지며, 요소를 추가하거나 제거할 수 없습니다. 변경 가능한 집합을 사용하려면 `NSMutableSet`을 사용해야 합니다. `NSSet`은 주로 Objective-C API와의 상호 작용에서 사용됩니다.

```swift
import Foundation

let nsSet: NSSet = NSSet(array: ["apple", "orange", "banana"])
let mutableSet = NSMutableSet(set: nsSet)
mutableSet.add("grape")
```

### 결론

Swift의 `Set`과 Objective-C의 `NSSet`은 각각의 언어 환경에 최적화된 집합 타입을 제공합니다. Swift에서는 `Set`을 사용하여 데이터의 유일성을 보장하고, 집합 연산을 통해 강력한 데이터 관리 및 분석 기능을 활용할 수 있습니다. `NSSet`은 Objective-C와의 호환을 필요로 할 때 유용하며, Swift와 Objective-C를 혼합하여 사용하는 프로젝트에서 중요한 역할을 합니다. 두 타입 모두 컬렉션 데이터를 효과적으로 다루는 데 필수적인 도구입니다.