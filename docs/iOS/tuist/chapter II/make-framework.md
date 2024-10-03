---
title: 'Framework를 만들어보자!'
slug: '/iOS/tuist/chapterII/make-framework'
excerpt: 'Framework를 만들어보면서 배울 수 있습니다!'
sidebar_position: 3
---

# Framework 만들어보기

Framework 만들기를 해볼 텐데 여기까지 읽어주신거 감사합니다!! <br/>
열심히 정리한 만큼 도움이 되기를 바래요! <br/>
일단 Xcode 실행 후 Framework를 만들어 주세요. <br/>

<img src="https://i.imghippo.com/files/6yca61722864764.png" alt="" border="0"/>

<img src="https://i.imghippo.com/files/H96c41722864784.png" alt="" border="0"/>

위와 같이 나왔다면 프레임워크를 만들준비가 되었습니다.

저희는 간단하게 유저 이름을 넣으면 Hello를 출력해주는 Hello 클리스를 만들어주겠습니다.

<img src="https://i.imghippo.com/files/l2mtO1722864801.png" alt="" border="0"/>

그리고 이제 사용하는 법에 대해서 알려드리겠습니다.

일단 자신의 다른 프로젝트에 `Framework`를 추가 해줄 것인데 지금 이 프로젝트 말고 다시 프로젝트 만드는 곳으로 돌아가서 당신만에 새로운 Xcode 프로젝트를 만들어주세요!

그러면 기본 프로젝트에서 `Add Files to “your project”` 를 선택해주세요

<img src="https://i.imghippo.com/files/kg7AN1722864820.png" alt="" border="0"/>

<img src="https://i.imghippo.com/files/miBDR1722864840.png" alt="" border="0"/>

이렇게 당신이 만든 `Framework`의 `xcdeproj`를 추가해주세요

<img src="https://i.imghippo.com/files/oE0Uv1722864861.png" alt="" border="0"/>

이렇게 들어왔다면 성공입니다. 혹시나 해서 말하는 건데… 혹시 `TestFramework`를 켜두고 추가를 누르면 화살표가 뜨지 않을 것 입니다. 당황하지 마시고 Xcode 끄시고 다시 Project 열어서 프레임워크 추가하시면 정상 작동 될 것입니다!

<img src="https://i.imghippo.com/files/fCi4f1722864882.png" alt="" border="0"/>

이쪽으로 가서 Frameworks, Libraries, and Embedded Content를 추가해줍니다.

+ 버튼을 누르시고 이렇게 해주세요

<img src="https://i.imghippo.com/files/BpvDA1722864908.png" alt="" border="0"/>

이제 평소에 라이브러리 사용하듯 `import` 해서 사용하시면 됩니다.

<img src="https://i.imghippo.com/files/yMPE91722864925.png" alt="" border="0"/>

이렇게 일단은 `Framework`를 만드는 법에 대해서 배워보았는데

저희는 저번 챕터에서 `Static Framework`와 `Dynamic Framework`를 안해보면 섭섭하니까 한번 해보도록 하겠습니다.

일단 알고 가야하는 사전 지식이 있습니다!

## Mach-O Type?

Xcode에서 `Static`과 `Dynamic`의 차이를 바꾸고 싶다면 `Mach-O Type`를 변경해야합니다.

어려운 개념은 아니고 어떤 `Framework`를 사용할 것인지 변경해줄 수 있는 프로젝트 세팅 장소입니다.

해당 세팅은 `Executable`, `Dynamic Library`, `Bundle`, `Static Library`, `Relocatable Object File` 등이 있습니다.

## Embed vs Do Not Embed?

<img src="https://i.imghippo.com/files/JV2Ge1722864949.png" alt="" border="0"/>

이것도 정말 중요한데요 저처럼 멋모르고 “코카콜라 맛있다~맛있…“ 갈기시면 나중에 이유도 모르고 크러쉬가 발생합니다. `Embed`와 `Do Not Embed`는 위에서 `Framework`를 만들 때 추가 작업에서 보았던 것인데요. 한번 알아보도록 하죠

`embed`는 이 `Framework`를 앱에 넣어라는 뜻입니다.

반면 `Do Not Embed`는 이 `Framework`를 앱에 넣지 말라는 것입니다.

> 그래서 이게 뭐가중요한데?

패키지가 `Framework`로 불리는 폴더를 포함하는지의 여부입니다.

`Dynamic`은 런타임에 의존하게 되는데 만약 `Do Not Embed`를 하게되면 런타임에 프레임워크를 호출할 필요없기 때문에 에러가 납니다.

하지만 밑에서 자세히 설명하겠지만 `Static`은 이미 빌드에 프레임워크를 고정적으로 넣어주었기 때문에  `Do Not Embed`를 해주셔야 합니다. 만약 이렇게 하지 않으면 다시 임베드하는 것은 중복입니다.

### 정리

`Dynamic Library`는 `Embed`를 해주어야합니다.

`Static Library`는 `Do Not Embed`를 해야합니다.

그러면 다시 실습 예시로 가볼까요?

## Static Framework

`Framework`를 만들면 `Mach-O Type`이 `Dynamic Library`로 되어있습니다.

<img src="https://i.imghippo.com/files/SlmGY1722864971.png" alt="" border="0"/>

여기서 우리는 `Static Library` 로 바꾸어줍니다.

<img src="https://i.imghippo.com/files/GTZIe1722864993.png" alt="" border="0"/>

위 Products 파일을 열어보면

<img src="https://i.imghippo.com/files/KY7fB1722865016.png" alt="" border="0"/>

Products 의 구조를 보실 수 있는데 여기서 절대로 누르면 잘못될 것 같은 친구를 우클릭 후 자세히보기를 누르면 아래와 같은 결과가 발생합니다.

<img src="https://i.imghippo.com/files/BVvlW1722865045.png" alt="" border="0"/>

짜란~! 안에 내부 소스를 뜯어볼 수 있습니다.

여기서 뜯어보면 저희는 `TestFramework`를 `Static`으로 빌드 해보았는데 `TestFrameworkProject`을 빌드 할 때 `TestFramework` 코드를 전부 포함한 `TestFrameworkProject`가 만들어지게 됩니다.

그러니까 `Static Library`를 설명할때 앱이 커지는 이유를 알아보았습니다. 그러면 만약 `Static Library`에 `Do Not Embed`를 하게되면 어떻게 될까요?

<img src="https://i.imghippo.com/files/4MXyf1722865062.png" alt="" border="0"/>

<img src="https://i.imghippo.com/files/MIRu91722865080.png" alt="" border="0"/>

이렇게 하면 `Frameworks` 파일이 없어집니다 

`Do Not Embed`는 말 그대로 “이 프레임워크의 모든 콘텐츠를 main application과 함계 담지 말아라”입니다. 때문에 application package가 `frameworks` 폴더 안에 해당 프레임워크 코드를 포함하지 않는 것입니다.

`Static Framework`에서 `Embeded & Sign`을 하면 안되는 이유를 알려드리겠습니다.

`Framework`의 파일이 생기면서 `excutable binary` 파일이 별도로 생성되지만 이미 앱의 `excuable binary`파일 안에 포함되어 있어서 중복으로 처리되는 것이라서 결국에 필요가 없습니다 때문에 `Static Framework`를 할때는 `Do Not Embed`로 하시면 됩니다.

벌써 반이 끝났습니다. 참쉽죠…ㅠㅜ 어렵지만 그래도 ~~할만하니까~~ 바로 `Dynamic Framework`를 해보도록 하죠~

## ****Dynamic**** Framework

`Framework`를 만들면 `Mach-O Type`이 `Dynamic`으로 다시 바꿔주시면됩니다.

<img src="https://i.imghippo.com/files/EeTJe1722865099.png" alt="" border="0"/>

<img src="https://i.imghippo.com/files/CceAp1722865118.png" alt="" border="0"/>

위에서 `Embed & Sign`을 하게 되면 아래와 같은 파일구조가 이루어집니다.

<img src="https://i.imghippo.com/files/VZ0EX1722865137.png" alt="" border="0"/>

하지만 Do Not Embed를 하게 되면 

<img src="https://i.imghippo.com/files/NDKbV1722865154.png" alt="" border="0"/>

`Dynamic Framework`의 경우에는 런타임 중에 `Framework`의 레퍼런스로 찾는다했는데 `excutable binary`가 없어졌습니다. 때문에 빌드는 가능하지만 실행 시키면 런타임 중에 링크를 찾기 위해 `Frameworks`가 없기 때문에 에러가 발생합니다.

이 때문에 `Dynamic Framework`를 사용하는 경우에는 `Embeded & Sign`을 선택해야 별도의 `Excutable binary` 파일이 포함할 수 있는 것을 알 수 있습니다.

오늘은 `Framework`를 만들어보고 뜯어보면서 장단점이 왜 그런지에 대해서 알아보았습니다. 나중에 `Tuist`를 하게되면 이와 같은 것들을 무수의 많이 보게 될 것이기 때문에 저는 모르고 하는 것보다는 이런게 있고 이래서 이렇구나 정도는 알고 같으면 합니다. 도움이 되었다면 스타를 눌러주세요!
