---
title: 'Optional'
slug: '/grammar/optional'
excerpt: 'optional를 설명합니다.'
sidebar_position: 6
---

### Optional의 정의 이해하기

`Swift`의 `Optional` 데이터 타입은 다른 프로그래밍 언어에서는 보기 드문 새로운 개념입니다. `Swift`는 안정성 높은 언어이기 때문에 오류를 별로 좋아하지 않습니다. 따라서 `Optional` 타입의 목적은 **변수 또는 상수에 값이 할당되지 않은 상황을 처리하기 위해 안전하고 일관된 접근 방식을 제공**하는 것입니다.

또한 `null safety`를 보장하는 `Swift`는 `nil`의 가능성을 가지고 있는 변수를 나타내기 위해서 사용하고 `readability`와 `code dfficiency`에 도움을 줍니다. 이 때문에 `complietime`에서 잡을 수 있는 에러의 종류를 늘려주니 개발자에게 도움됩니다.

옵셔널 사용법에 앞서서 오늘 공부할 `Optional`의 4가지를 보고 가겠습니다.

```swift
//Forced unwrapping == 억지로 내용을 까보기 // 강제 언래핑

//Optional binding (if let) == 부드럽게 내용을 까보기1 // 옵셔널 바인딩

//Optional binding (guard) == 부드럽게 내용을 까보기2 // 옵셔널 바인딩

//Nil coalescing == 내용을 까봤더니, 값이 없으면 디폴트 값을 주자
```

### Optional 사용법

`Optional`을 사용하기 위해서는 데이터 타입 어노테이션 뒤에 `?` 문자를 두어 `Optional`이 되도록 합니다. 아래는 정수형 `Optional`을 선언한 것입니다:

```swift
 var user: Int?
```

`user`는 정숫값이 할당되거나 아무런 값도 할당되지 않을 수 있다는 것을 선언한 것입니다. 이를 내부적으로 컴파일러와 런타임의 관점에서 보면, 어떤 값도 할당되지 않은 `Optional`은 실제로 `nil` 값을 자동으로 참조하게 됩니다.

`Optional` 값에 데이터가 할당 되어있는 있는지를 확인은 다음과 같이 할 수 있습니다:

```swift
var index: Int?

if index != nil {
// index 안에 변수가 있음
} else {
// index 변수는 값이 할당되어 있지 않다
}
```

만약 `Optional`에 값이 할당되었다면, 해당 값이 `Optional` 내에 래핑되었다고 말할 수 있습니다.

### 강제 언래핑

 `Optional` 안에 래핑된 값을 사용할 때는 강제 언래핑이라는 개념을 이용하게 됩니다. 간단히 말해, 래핑된 값은 `Optional` 데이터 타입에서 옵셔널 이름 뒤에 `!`를 붙여 강제로 추출할 수 있습니다.

강제 언래핑의 개념을 좀 더 자세히 살펴보기 위해 다음과 같이 할 수 있습니다:

```swift
var index: Int?

index = 3

var junhaArray = ["J", "U", "N", "H", "A"]

if index != nil {
	print(junhaArray[index!])
} else {
	print("index does not contain a value")
}
```

이 코드는 이름을 나타내는 문자열 배열의 인덱스를 담는 `Optional` 변수를 사용하고 있습니다. 만약 `index` `Optional` 변수에 값이 할당되면, 배열의 해당 위치에 있는 알파벳이 콘솔에 출력됩니다. `index` 변수가 `Optional` 타입이기 때문에, 변수명 뒤에 `!`를 붙여 값을 강제로 언래핑하게 됩니다.

```swift
print(junhaArray[index!])
```

반대로, 앞의 코드에서 느낌표를 빼서 index 변수가 언래핑되지 않는다면 컴파일러는 다음과 같은 에러가 납니다.

만약에, 위 코드에서 느낌표를 빼고 index 변수가 언래핑되지 않는다면 아래와 같이 컴파일러가 에러를 보여줍니다:

```swift
Value of optional type 'Int?' must be unwrapped to a value of type 'Int'
```

`!` 는 암시적 추출 옵셔널이라는 것을 이해하고 `?` 는 `Optional` 이라는 것을 이해하셨나요? `!` 는 `Optional`이 아닌 일반 값과 연산이 가능합니다. 즉 `!` 로 `Optional`을 선언한 변수의 경우 개발자가 알아서 `nil`이 아닌 경우에만 이를 사용할 것이라고 믿는 것입니다. 때문에 지나치게 `!` 를 많이 사용하게 된다면 `runtime error`의 가능성이 높아집니다. 추가적으로 `?` 로 선언된 경우에는 다른 일반값들과 불가능합니다.

### Optional 언래핑을 하지 않는다면?

`Optional` 언래핑을 하지 않고 데이터를 추출하게 된다면 어떻게 될까요? 아래는 그에 대한 예시 코드입니다:

```swift
var user: String?
var user = "박준하"
print(user) // Optional("박준하")
```

위와 같이 저희가 원하는 데이터가 아닌 `Optional`이라는 것에 감싸진 데이터를 볼 수 있습니다. 위 코드처럼 데이터가 확정적으로 넣어져있다고 한다면 강제 `Optional`을 사용할 수 있지만 안전하게 언래핑을 하는 방법은 없을까요?

### Optional 바인딩

지금부터는 강제 언래핑과 같은 무식한 방법이 아닌 옵셔널로 할당된 값을 `Optional` 바인딩을 이용해서 임시 변수나 상수에 할당하는 방법을 알아봅시다:

```swift
var optionalName: String? = "Junha"

if let constantName = optionalName {
    print("The name is \(constantName)") // 출력: The name is Junha
}

if var variableName = optionalName {
    variableName = "JJunhaa"
    print("The name is \(variableName)") // 출력: The name is JJunhaa
}

optionalName = nil

// if-let 구문을 사용한 옵셔널 바인딩 (optionalName이 nil인 경우)
if let constantName = optionalName {
    print("The name is \(constantName)") // 이 부분은 실행되지 않음
} else {
    print("optionalName is nil") // 출력: optionalName is nil
}
```

위 코드는 세 가지 작업을 수행합니다. 첫 번째 작업은 주어진 `Optional`이 값을 가지고 있는지를 확인하는 것이고, 두 번째 작업은 `Optional` 변수가 값을 가지고 있을 때, 그 값을 새 변수에 할당하고 이를 수정하는 것입니다. 세 번째 작업은 if-let 구문을 사용해 `Optional`이 nil인 경우를 처리하는 것입니다. 이처럼 앞서 언급한 강제 언래핑 예제를 `Optional binding`을 사용하는 방식으로 수정할 수 있습니다.

```swift
var index: Int? = 3
var junhaArray = ["J", "U", "N", "H", "A"]

if let index = index {
    print(junhaArray[index]) // 출력: "H"
} else {
    print("index does not contain a value")
}

func printArrayValue(at index: Int?) {
    guard let index = index else {
        print("index does not contain a value")
        return
    }
    print(junhaArray[index]) // 출력: "H"
}

printArrayValue(at: index)
```

위 코드는 `index` 변수에 할당된 값을 `Optional binding`을 통해 `nameValue`라는 임시 상수에 할당하고, 이를 배열의 인덱스로 사용합니다. `nameValue`는 `if` 구문 내에서만 유효한 상수이기 때문에, if 구문이 종료되면 이 상수는 더 이상 사용할 수 없습니다. 그렇기 때문에 동일한 이름의 변수를 다른 곳에서 다시 사용해도 충돌이 발생하지 않습니다.

### Optional 바인딩의 역사

Swift 5.7부터는 `if let`뿐만 아니라 `guard let` 구문도 도입되어, `Optional`을 좀 더 간편하게 처리할 수 있게 되었습니다. 굳이 한 번만 사용할 값을 미리 선언하지 않고, `if let`을 사용해 바로 언래핑하는 방법이 생긴 것이죠. 

본래의 Swift 5.7 버전 전에는 아래와 같이 사용했습니다:

```swift
// guard let
guard let self = self else { return }

// if let
if let testData = testData {
    print(testData)
}
```

기존의 `Optional` 값을 벗겨내기 위해서 같은 이름을 중복해서 사용해왔습니다.

하지만 Swift 5.7버전 이후부터는 아래와 같이 사용할 수 있습니다:

```swift
// guard let
guard let self else { return }

// if let
if let testData {
    print(testData)
}
```

동일한 이름으로 바인딩할 수 있어 코드가 더 간결하고 직관적으로 작성될 수 있습니다.

### Optional binding - if let

```swift
var index: Int?

index = 3

var junhaArray = ["J", "U", "N", "H", "A"]

if let index {
	print(index)
} else {
	print("index does not contain a value")
}
```

이와 같은 방식을 사용하게 되면 더 이상 임시 값을 `Optional`에 할당할 필요가 없어집니다.

아래와 같이 `Optional binding`을 사용하여 여러 선택 사항을 풀고 조건식을 포함할 수도 있습니다:

```swift
if let 상수이름1, let 상수이름2, let 옵셔널 이름3, ... <조건식> {
}
```

예를 들어, 다음의 코드의 약식 `Optional binding`을 사용하여 한 줄의 코드 내에서 2개의 `Optional`을 언래핑한다.

```swift
var pet1: String?
var pet2: String?

pet1 = "cat"
pet2 = "dog"

if let pet1, let pet2 {
	print(pet1)
	print(pet2)
} else {
	print("insufficient pets")
}
```

위에 설명에 있든 조건식을 아래와 같이 사용할 수도 있습니다.

```swift
if let pet1, let pet2, petCount > 1 {
	print(pet1)
	print(pet2)
} else {
	print("insufficient pets")
}
```

앞의 예제에서 petCount에 할당된 값이 1보다 크지 않다면 `Optional binding`이 수행되지 않을 것이다.

또한, 암묵적으로 언래핑되도록 `Optional`을 선언할 수도 있다. 이런 방식으로 `Optional`을 선언하면 강제 언래핑이나 옵셔널 바인딩을 하지 않아도 값에 접근할 수 있다. `Optional`을 선언할 때 물음표(?) 대신 느낌표(!)를 사용하여 암묵적으로 언래핑되도록 하는 것이다.

```swift
var index: Int!

index = 3

var junhaArray = ["J", "U", "N", "H", "A"]

if let index != nil {
	print(junhaArray[index])
} else {
	print("index does not contain a value")
}
```

이제 index `Optional` 변수는 암묵적으로 언래핑되도록 선언되어, 앞의 코드에서 배열의 인덱스로 사용될 때 값을 언래핑할 필요가 없게됩니다.

### Optional binding - guard let

지금부터는 guard let을 사용한 언래핑을 알아보겠습니다:

```swift
guard let 상수이름1 = 옵셔널이름1,
      let 상수이름2 = 옵셔널이름2,
      let 상수이름3 = 옵셔널이름3, // 옵셔널 값이 nil이 아닐 때 바인딩
      <조건식> else {
    // 조건이 충족되지 않을 때 실행되는 블록
    return // 또는 다른 조기 종료 명령어
}
```

`guard let` 구문은 옵셔널 바인딩을 통해 옵셔널 값이 유효한지 검사하고, 조건이 충족되지 않을 때 코드의 흐름을 조기에 종료하는 데 사용됩니다. 위와 같이 여러 개의 옵셔널 값을 동시에 바인딩할 때도 사용할 수 있습니다.

아래 코드는 guard let에 대한 기본적인 예제입니다:

```swift
var name: String?
name = "준하"

func printParsedInt(from: String) {
        guard let parsedInt = Int(from) else {
                print("Int로 컨버팅 안됩니다")
                return
        }
        print(parsedInt)
}
```

> 커버팅이란? → 변환을 말하는 것입니다.
> 

### Optional binding - 공통점/차이점

`guard let`과 `if let`을 처음 접했을 때는 각각의 용도와 차이점이 명확하지 않아 언제 어떻게 사용해야 할지 감이 잘 잡히지 않을 수 있습니다. 지금부터 차이점과 공통점에 대해서 설명드리겠습니다.

`guard let`과 `if let`은 모두 `Optional binding`을 위해 사용하는 것이 공통점입니다.

`guard let`은 전역적으로 사용할 수 있는 변수를 바인딩하는 데 사용됩니다. 이 구문은 항상 `else` 블록을 필요로 하며, `return`, `break`, `continue`, `throw`와 같은 제어문을 사용하여 함수나 루프의 흐름을 제어해야 합니다. 이로 인해, 조건이 충족되지 않을 경우 함수의 실행을 조기에 종료하거나 루프를 중단할 수 있습니다. 이러한 방식은 코드의 흐름을 명확히 하고, 조건이 충족되지 않는 경우의 처리를 구분하여 가독성을 높이는 데 유리합니다.

반면, `if let`은 지역 변수를 바인딩하며, `else` 블록을 선택적으로 사용할 수 있습니다. 조건이 충족되지 않아도 함수나 루프의 흐름은 계속 진행됩니다. 이로 인해, `if let`은 조건에 따른 처리가 상대적으로 유연하며, 상황에 따라 `else` 블록 없이 사용할 수 있어 코드가 더 간결하게 작성될 수 있습니다.

결론적으로, `guard let`을 사용하면 코드의 가독성이 더 좋아질 수 있으며, 조건이 충족되지 않을 경우의 처리를 명확히 할 수 있습니다. 반면, `if let`은 더 유연한 조건 처리를 가능하게 하며, `else` 블록을 생략할 수 있는 장점이 있습니다.

### Optional Nil coalescing

다음은 `Nil coalescing`입니다. `Nil coalescing`을 설명하기 전에 예제를 먼저 보여드리겠습니다:

```swift
var name: String?
name = "준하"
let myName: String = name ?? "이름"
```

`Nil coalescing`은 초기 값을 정해주거나 `nil`일 경우를 대비하는 것입니다. 프로젝트를 진행하면서 서버통신을 할 때 서버의 값이 들어오지 않았을 때나 초기 테스트에 사용하면 매우 유용합니다.

### 값이 없거나 nil을 할당할 수 있는 변수와 상수

스위프트의 `Optional`에 대해 마지막으로 살펴봐야할 부분은 할당된 값이 없거나 `nil`을 할당할 수 있는 것은 `Optional` 타입뿐이라는 점이다. 즉, 스위프트에서 `Optional`이 아닌 변수 또는 상수에는 `nil`을 할당할 수 없다. 예를 들어, 다음의 코드는 모두 컴파일 에러가 날 것이다. 그 이유는 `Optional`로 선언된 변수가 아니기 때문이다.

```swift
var testInt = nil // 유효하지 않은 코드
var testString: String = nil // 유효하지 않은 코드
var testConstant = nil // 유효하지 않은 코드
```

### Optional 뜯어보기

지금부터는 제가 `Optional`을 뜯으면서 발견한 것을 공유해보도록 하겠습니다.

`Optional`의 내부적인 코드는 `제네릭 enum`입니다.

```swift
public enum Optional<Wrapped>: ExpressibleByNilLiteral {
	case none
	case some(Wrapped)
}
```

값이 있는 경우에 `Some`으로 표기되며 `Optional` 내부에는 값이 있을 수 있습니다. 이 경우 값을 저장하고 해당 값을 가져올 수 있습니다. 반대로 값이 없는 경우를 `None`이라고 하며 `Optional` 내부에 값이 없을 수 있습니다. 이의 경우 `nil`을 가지며, 이를 통해 값이 없을 나타내게 됩니다.