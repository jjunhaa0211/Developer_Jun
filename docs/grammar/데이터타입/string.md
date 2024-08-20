---
title: 'string'
slug: '/grammar/string'
excerpt: 'string을 설명합니다.'
sidebar_position: 3
---

### Swift의 문자열 데이터 타입: String 깊이 이해하기

Swift에서 String 타입은 텍스트 데이터를 저장하고 처리하는 데 사용되는 핵심 데이터 타입입니다. Swift에서는 문자는 내부적으로 그래핌 클러스터의 형태로 저장됩니다. 그래핌 클러스터는 눈에 보이는 하나의 문자를 표현하기 위해 결합된 둘이상의 유니코드 스칼라로 구성됩니다.
```swift
var xText1 = "X"
var xText2 = "\u{0058}"

//둘의 결과는 똑같습니다.
```
위 코드는 유니코드의 코드 포인트를 이용하여 문자열을 표현하는 작업을 보여줍니다. 문자열 xText1과 xText2는 동일하다는 것을 유니코드를 통해서 확인할 수 있습니다.
문자열은 앱 개발에서 사용자 인터페이스, 데이터 처리, 통신 등 다양한 영역에서 중요한 역할을 합니다. Swift의 String은 유연하고 강력한 기능을 제공하여, 다양한 문자 인코딩과 복잡한 문자 조합을 효율적으로 관리할 수 있습니다.

### String의 기본 사용

Swift의 String 타입은 유니코드를 완벽히 지원하며, 이는 세계 어떤 언어의 문자든지 저장하고 처리할 수 있다는 의미입니다. String은 내부적으로 문자의 유니코드 스칼라 값을 사용하여 저장하기 때문에, 다국어 지원이 필수적인 현대 애플리케이션 개발에 적합합니다.

```swift
var greeting = "Hello, world!"
print(greeting)  // 출력: Hello, world!
```

### String과 문자 조작

String 값은 `+` 연산자를 사용하여 쉽게 결합할 수 있으며, **문자열 보간(string interpolation)**을 통해 변수를 문자열 중간에 삽입할 수 있습니다. 이러한 특성은 로그 메시지, 사용자 인터페이스, 데이터 포맷팅 등에서 유용하게 사용됩니다.

```swift
var name = "Jane"
var personalizedGreeting = "Hello, \(name)!"
print(personalizedGreeting)  // 출력: Hello, Jane!
```

여러 줄의 문자열은 아래와 같이 삼중 따옴표를 사용할 수 있습니다.
```swift
let multiLineString = """
This is a multi-line string.

"It can span multiple lines."

Each line is preserved as it is.
"""

print(multiLineString)
```
코드를 실행하게된다면 아래와 같이 출력됩니다.

```swift
This is a multi-line string.

"It can span multiple lines."

Each line is preserved as it is.
```

삼중 따옴표를 사용하게 된다면 해당 줄의 들여쓰기 한만큼 띄어쓰기 한만큼 값을 가지게 됩니다. 때문에 여러 줄의 문자열을 깔끔하고 형식화하고, 동시에 각 줄마다 개별적으로 들여쓰기도 할 수 있게 합니다.

### 문자열 처리의 고급 기능

Swift의 String은 다양한 메서드를 제공하여 문자열을 조작하고 분석할 수 있습니다. 예를 들어, `contains`, `replacingOccurrences`, `split` 등의 메서드를 사용하여 문자열 내용을 검색, 교체 또는 분할할 수 있습니다.

```swift
let quote = "Time is a great teacher, but unfortunately it kills all its pupils."
let shortened = quote.replacingOccurrences(of: "unfortunately ", with: "")
print(shortened)  // 출력: Time is a great teacher, but it kills all its pupils.
```

### 특수 문자/이스케이프 시퀀스
String에는 문자에 들어갔을 때 효과를 이르키는 특수 문자도 있습니다. 보통 이 특수문자는 마인크래프트 명령어를 작성하는 것처럼 역스래시 문자를 앞에 써서 구별하게 됩니다.
개발에서 이를 이스케이핑이라고 부르게 됩니다.
```swift
var newline = "박\n준하"
```
위와 같이 사용하게 되면 출력 결과는 아래와 같아지게됩니다.
```swift
박
준하
```

만약에 이스케이핑을 쓰고 싶지 않고 역슬래시를 문자로 출력하고 싶다면 아래와 같이 사용하면됩니다.
```swift
var slash1 = "\" // 잘못된 표기법 ❌
var slash2 = "\\" // ✅
```

이외에도 여러가지 특수문자가 있습니다.

- `\n` : 개행
- `\r` : 캐리지 리턴
- `\t` : 탭
- `\\` : 역슬래시
- `\"` : 쌍따옴표 (문자열 내에 ""가 필요한 경우)
- `\'` : 홀따옴표 (문자열 내에 ''가 필요할 경우)
- `\u{nn}` : 한 바이트 유니코드 스칼라 (nn은 유니코드 문자를 표현하는 두 개의 16진수)
- `\u{nnnn}` : 두 바이트 유니코드 스칼라 (nn은 유니코드 문자를 표현하는 네 개의 16진수)
- `\u{nnnnnnnn}` : 네 바이트 유니코드 스칼라 (nn은 유니코드 문자를 표현하는 여덟 개의 16진수)

### String 활용 팁

1. **성능 최적화**: 큰 문자열을 다룰 때는 문자열 보간이나 결합을 적절히 사용하고, 필요한 경우 `StringBuilder`클래스를 활용하여 성능을 최적화할 수 있습니다.
2. **메모리 관리**: 문자열이 큰 데이터를 포함하고 있는 경우, 적절한 시점에 메모리에서 해제하여 앱의 성능을 유지합니다.
3. **정규 표현식 사용**: `NSRegularExpression`을 활용하여 복잡한 문자열 패턴 매칭 및 데이터 추출을 수행할 수 있습니다.

### 결론

Swift의 String 데이터 타입은 텍스트 처리의 모든 측면을 지원하도록 설계되었습니다. 강력한 유니코드 지원과 다양한 문자열 조작 메서드를 통해 개발자는 국제화된 앱 개발 및 복잡한 텍스트 기반 데이터 처리 작업을 효과적으로 수행할 수 있습니다. 적절한 String 사용 방법을 숙지하고 활용함으로써, 보다 빠르고 효율적인 애플리케이션 개발이 가능해집니다.