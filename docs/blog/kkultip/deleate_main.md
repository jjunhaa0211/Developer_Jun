---
title: "Main 삭제 및 코드 기반 방법"
slug: "/deleate_main"
excerpt: "main을 삭제합니다."
sidebar_position: 2
---

이번 블로그에서는 그동안의 Main을 사용한 방식을 채택하여 Xib 기반 방식이 아닌 코드 베이스 방식에 프로젝트를 하는 방법에 대해 알려드리겠습니다.

<img src="https://i.imghippo.com/files/8APbf1722920615.png" alt="" border="0"/>
1.위 메인을 삭제 해줍니다.

<img src="https://i.imghippo.com/files/jvaxd1722920655.png" alt="" border="0"/>
<img src="https://i.imghippo.com/files/fSbp11722920774.png" alt="" border="0"/>
2. Info.plist로 이동한 후 main을 제거 해줍니다.
    - 굳이 삭제를 하지 않아도 main만 지워도 괜찮습니다.

<img src="https://i.imghippo.com/files/ml0lh1722920943.png" alt="" border="0"/>
<img src="https://i.imghippo.com/files/q9oI41722920960.png" alt="" border="0"/>
3. Build Setting에 가서 검색창에 main 을 입력하면 UIKit Main Storyboard File Base Name에 있는 main을 지워줍니다

4.마지막으로 SceneDelegate에 가서 아래 코드를 붙여넣기 해주면 됩니다.
```swift
import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?
    
    func scene(_ scene: UIScene,
               willConnectTo session: UISceneSession,
               options connectionOptions: UIScene.ConnectionOptions) {
        guard let scene = (scene as? UIWindowScene) else { return }
        
        window = UIWindow(frame: scene.coordinateSpace.bounds)
        window?.windowScene = scene
        window?.rootViewController = UINavigationController(rootViewController: ViewController())
        window?.makeKeyAndVisible()
    }

    func sceneDidDisconnect(_ scene: UIScene) {}

    func sceneWillResignActive(_ scene: UIScene) {}

    func sceneWillEnterForeground(_ scene: UIScene) {}

    func sceneDidEnterBackground(_ scene: UIScene) {}
}
```

이상 스토리보드를 제거하고 코드 기반으로 바꾸는 방법을 알려드렸습니다.