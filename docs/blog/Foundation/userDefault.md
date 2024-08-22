---
title: "UserDefault"
slug: "/blog/foundation/userDefault"
excerpt: "userDefault 방법을 알려드립니다."
sidebar_position: 4
---

# UserDefaults 소개 및 사용법

## 개요

`UserDefaults`는 Swift에서 제공하는 로컬 저장소로, iOS와 macOS 앱에서 간단한 데이터를 키-값 쌍으로 저장하고 조회할 수 있습니다. 이는 주로 사용자의 설정이나 선호도와 같은 소량의 데이터를 저장하는 데 사용됩니다.
앱어디서나 데이터를 쉽게 읽고 저장할 수 있습니다. 그리고 싱클톤 패턴으로 설계되어 **앱 전체에서 단 하나의 인스턴스만 존재**하게 됩니다.
UserDefault의 저장된 데이터는 **앱을 끄고 다시 실행 후에도 간단한 데이터가 남도록 도와줍니다**. 하지만 이 역시 사용자가 **앱을 삭제해버리면 통으로 데이터가 날라갑니다**.

## 사용 적합성

- **적합한 사용**: 사용자의 기본 설정, 스위치 상태, 언어 설정 등
- **부적합한 사용**: 대량의 데이터, 복잡한 데이터 구조(대신 `CoreData` 또는 `SQLite` 권장).

## UserDefault 뜯어보기
```swift
open class var standard: UserDefaults { get }
    
// 데이터 가져오기
open func object(forKey defaultName: String) -> Any?
open func string(forKey defaultName: String) -> String?
open func array(forKey defaultName: String) -> [Any]?
    
// 데이터 저장하기
open func set(_ value: Any?, forKey defaultName: String)
    
// 데이터 지우기 
// 키 값을 입력하면 삭제 가능
open func removeObject(forKey defaultName: String)
```

## 기본 사용법

```swift
UserDefaults.standard.set("값", forKey: "키")
let value = UserDefaults.standard.string(forKey: "키")
UserDefaults.standard.removeObject(forKey: "키")
```

## UserDefault는 어떻게 저장될까?
UserDefaults.standard.set(데이터, “키”) 이런식으로 저장된 UserDefaults는 plist에 데이터를 저장하게 됩니다.
이는 Data container 안에 Library > Preferences 내 plist 파일을 확인할 수 있습니다. 이뿐만 아니라 데이터가 어디에 저장되었는지도 알 수 있는데 아래는 그 예제입니다:
```swift
UserDefaults.standard.setValue(true, forKey: "test")
// 저장 경로 출력
print("App Directory path : \(NSHomeDirectory())")
```
위 코드로 출력된 경로를 찾아서 들어가면 앱 번들 ID.plist 파일을 확인할 수 있습니다.

## 사용자 꿀팁

1. **상수 관리**: 키 값은 상수로 관리하여 오타를 방지합니다.
2. **변경 감지**: `NotificationCenter`로 변경사항을 감시합니다.
3. **테스트 용이성**: 프로토콜을 사용하여 추상화하고 테스트를 용이하게 합니다.

## 보안 강화: 데이터 암호화

`UserDefaults`는 암호화되지 않기 때문에 보안이 요구되는 정보를 저장하기에 적합하지 않습니다. 그러나 필요시 데이터를 암호화하여 사용하는 방법은 다음과 같습니다.

### 암호화 예제

```swift
import CryptoKit

// 암호화
func encrypt(_ data: String, using key: SymmetricKey) -> Data? {
    let dataToEncrypt = Data(data.utf8)
    do {
        let sealedBox = try AES.GCM.seal(dataToEncrypt, using: key)
        return sealedBox.combined
    } catch {
        print("Encryption error: \(error)")
        return nil
    }
}

// 복호화
func decrypt(_ data: Data, using key: SymmetricKey) -> String? {
    do {
        let sealedBox = try AES.GCM.SealedBox(combined: data)
        let decryptedData = try AES.GCM.open(sealedBox, using: key)
        return String(decoding: decryptedData, as: UTF8.self)
    } catch {
        print("Decryption error: \(error)")
        return nil
    }
}

// 사용 예
let key = SymmetricKey(size: .bits256)  // 키 생성
let encryptedData = encrypt("Sensitive User Data", using: key) // 데이터 암호화
UserDefaults.standard.set(encryptedData, forKey: "encryptedUserData") // 암호화된 데이터 저장

```

## 주의사항

- `UserDefaults`의 데이터는 암호화되지 않으며, 앱 삭제 시 함께 제거됩니다.
- 복잡한 데이터 저장이 필요하거나 보안이 중요한 경우 `Keychain`을 사용하는 것이 더 적합합니다.

이러한 내용을 종합적으로 이해하고 적용하면 `UserDefaults`를 더욱 효과적으로 활용할 수 있습니다.