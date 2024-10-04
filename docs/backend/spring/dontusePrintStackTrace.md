---
title: 'PrintStackTrace를 사용하면 안되는 이유'
slug: '/backend/dontusePrintStackTrace'
excerpt: 'PrintStackTrace를 사용하면 안되는 이유를 설명합니다.'
sidebar_position: 2
---

# `e.printStackTrace()`를 사용하면 안 되는 이유

`Java` 또는 `Spring` 프로젝트를 진행하면서 예외 처리를 위해 간단히 `e.printStackTrace()`를 사용하는 경우가 있습니다. 하지만, 이 방법은 여러 이유로 권장되지 않습니다. 이번 글에서는 그 이유와 대안에 대해 알아보겠습니다.

## `e.printStackTrace()`란?

`e.printStackTrace()`는 예외 발생 당시의 호출 스택에 있던 메소드의 정보와 예외 결과를 화면에 출력하는 내장 함수입니다. 주로 예외 상황을 분석하고 디버깅할 수 있는 힌트를 제공하는 용도로 사용됩니다.

## `e.printStackTrace()`를 사용하지 말아야 하는 이유

### 1. 보안 취약점

`printStackTrace()`는 호출 스택 정보를 외부로 노출합니다. 이는 개발 중 디버깅 과정에서는 편리하지만, **프로덕션 환경에서는 보안 상의 이유로 사용하지 않는 것이 좋습니다**. 호출 스택 정보가 노출될 경우, 악의적인 공격자가 시스템의 **취약점을 파악하고 악용**할 수 있기 때문입니다.

이 문제를 해결하기 위해 **로깅 라이브러리 사용**을 권장합니다.

### 2. 오버헤드 발생

`printStackTrace()`는 **Java 리플렉션을 사용하여 호출 스택을 추적**합니다. 리플렉션 사용은 시스템에 많은 오버헤드를 발생시킬 수 있으므로, 성능이 중요한 애플리케이션에서는 피하는 것이 좋습니다.

### 3. 서버 부하

서버에서 호출 스택 정보를 수집하고 출력하는 과정은 **서버에 부하를 발생**시킬 수 있습니다. 특히 대량의 예외가 발생하는 상황에서 `printStackTrace()`를 사용하면 서버 성능에 악영향을 줄 수 있습니다.

### 4. 출력 위치 파악의 어려움

`printStackTrace()`는 기본적으로 **`System.err`에 출력**됩니다. `System.setErr()`를 통해 출력 대상이 변경될 수 있으므로, **출력이 어디로 되는지 정확히 파악하기 어렵습니다**. 이러한 이유로 로깅 위치를 명확히 설정할 수 있는 로깅 프레임워크를 사용하는 것이 좋습니다.

## 대안: 로깅 라이브러리 사용

`printStackTrace()` 대신 **로깅 라이브러리**를 사용하는 것이 좋습니다. 로깅 프레임워크를 사용하면 **로그가 기록되는 위치와 보존 정책을 설정**할 수 있어 더욱 안전하고 효율적으로 예외를 관리할 수 있습니다.

대표적인 로깅 라이브러리로는 다음과 같은 것들이 있습니다:

- `logback`
- `slf4j`
- `java.util.logging`
- `log4j`

이 중에서 **`slf4j`**를 사용하는 것을 추천합니다.

### `slf4j`를 사용한 예제 코드

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TestClass {
    private static final Logger logger = LoggerFactory.getLogger(TestClass.class);

    public void codeTest() {
        try {
            // 예외 발생 가능 코드
        } catch (Exception e) {
            logger.error("예외 발생", e);
        }
    }
}
```

## 결론

`e.printStackTrace()`는 보안 취약점, 성능 저하, 서버 부하, 그리고 출력 위치 파악의 어려움 등의 이유로 **프로덕션 환경에서 사용하지 않는 것이 좋습니다**. 대신 **로깅 라이브러리**를 사용하여 예외를 처리하고 관리하는 것이 더 안전하고 효율적입니다.

오늘은 `printStackTrace()`를 사용하면 안 되는 이유에 대해 알아보았습니다. 감사합니다.