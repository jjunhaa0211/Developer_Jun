---
title: "LLDB 기초"
slug: "/iOS/blog/LLDB1"
excerpt: "LLDB 기초에 대해서 설명해주세요"
sidebar_position: 6
---

# LLDB 사용 가이드

LLDB는 강력한 디버거로서 Xcode 및 터미널을 통해 사용할 수 있습니다. 애플리케이션의 버그를 식별하고 해결하는 데 필수적인 도구입니다.

## LLDB 사용 이유

- **개발 효율 향상**: LLDB를 사용하면 코드의 실행 흐름을 멈추고, 상태를 검사하며, 문제의 원인을 정확히 진단할 수 있습니다.
- **다양한 기능 제공**: LLDB는 breakpoint 설정, 실행 흐름 제어, 변수 검사 및 수정 등 다양한 기능을 제공합니다.

## 기본 구조

LLDB 명령어는 `command`, `subcommand`, `option`, `argument`로 구성되며, 각 요소는 공백으로 구분됩니다.

### 명령어 예제

```swift
(lldb) breakpoint set --file test.c --line 12
```

위 예제는 `test.c` 파일의 12번째 줄에 breakpoint를 설정합니다.

## 도움말 사용

- **Help 사용**: LLDB의 `help` 명령어를 사용하면 다양한 subcommands 및 options의 사용법과 리스트를 제공합니다.
    
    ```swift
    (lldb) help
    (lldb) help breakpoint
    (lldb) help breakpoint set
    ```
    
- **Apropos 사용**: 특정 기능을 찾기 위해 `apropos` 명령어와 키워드를 사용할 수 있습니다.
    
    ```swift
    (lldb) apropos "reference count"
    ```
    

## Breakpoint 설정

Breakpoint는 프로그램 실행 중 특정 지점에서 멈추게 하는 기능입니다.

### 함수 이름으로 Breakpoint 설정

```swift
(lldb) breakpoint set --name viewDidLoad
(lldb) b -n viewDidLoad
```

### 정규 표현식을 사용한 Breakpoint 설정

```swift
(lldb) breakpoint set --func-regex '^hello'
(lldb) br s -r '^hello'
```

### 파일과 줄 번호를 이용한 Breakpoint 설정

```swift
(lldb) br s --file ViewController.swift --line 2
(lldb) br s -f ViewController.swift -l 20
```

## Breakpoint 명령어

- **Breakpoint 실행 및 자동 계속 실행 설정**:
    
    ```swift
    (lldb) breakpoint set -n "viewDidLoad" --command "po $arg1" -G1
    (lldb) br s -n "viewDidLoad" -C "po $arg1" -G1
    ```
    
- **Breakpoint 리스트 확인**:
    
    ```swift
    (lldb) breakpoint list
    ```
    
- **Breakpoint 삭제 및 비활성화**:
    
    ```swift
    (lldb) breakpoint delete
    (lldb) breakpoint disable
    (lldb) br de 1
    (lldb) br di 1.1
    ```
    

## PO 명령어

`po`는 "print object"의 줄임말로, 실행 중인 객체의 정보를 출력합니다. 이는 주로 객체의 상태를 확인할 때 사용됩니다.

```swift
(lldb) po Label1.text
```

### 문제 해결

- **에러 메시지**: `cannot find 'Label1' in scope` 이러한 에러는 해당 객체가 현재 스코프에 없거나, 잘못된 이름을 사용했을 때 발생합니다.
- **nil 값**: 객체가 초기화되지 않았거나 적절한 값이 할당되지 않았을 때 `nil`을 반환할 수 있습니다.