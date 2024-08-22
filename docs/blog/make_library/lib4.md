---
title: "본격! CocoaPods 라이브러리 만들기"
slug: "/lib4"
excerpt: "CocoaPods 라이브러리 만들기"
sidebar_position: 4
---
이제 드디어 라이브러리를 만들어볼 시간입니다. 어렵지는 않아요~
데스크톱 터미널에서 아래와 같이 입력해주세요
```bash
pod lib create { 라이브러리 이름 }
```

그러면 이제 터미널에서 5가지 질문을 하게 됩니다.
<img src="https://i.imghippo.com/files/frEyD1722911096.png" alt="" border="0"/>
1. **What platform do you want to use?? [iOS / macOS]**
    - 해석: 너는 어떤 애플리케이션 기준으로 만들거야??
2. **What language do you want to use?? [Swift / ObjC]**
    - 해석: 어떤 언어로 만들거야??
3. **Would you like to include a demo application with your library? [Yes / No]**
    - 라이브러리 안에 데모를 포함할거야?
    - 이를 쉽게 말하면 너가 만든 코드는 화면에 보이는 거야??
    - ex: then, Alamofire = 앱화면에 보이지 않음
    - ex: FSCalendar, Chart = 화면에 보임
4. **Which testing frameworks will you use? [Quick / None]**
    - 해석: 프레임워크를 사용할거야?
    - [Quick 링크](https://github.com/Quick/Quick)
5. **Would you like to do view based testing? [ Yes / No]**
    - 해석: 뷰기반에 테스트를 진행할 것인가?
    - 사용하면 페이스북에서 만든 스냅샷 기반의 테스트 오픈소스를 추가해줍니다.

조금만 기다리시면 아래 파일이 생깁니다!
<img src="https://i.imghippo.com/files/ogzOy1722911730.png" alt="" border="0" width="200" height="200"/>
라이브러리 사용시  라이브러리 이름.podspec가 생깁니다. <br/>
라이브러리를 잘못하면 코코아팟 배포할 때 오류가 발생합니다.

<img src="https://i.imghippo.com/files/cTnqz1722912589.png" alt="" border="0"/>
- `name`: 라이브러리 이름 (**Library Name**)
- `version`: 배포 버전 (**Deployment version)**
- `license`: 오픈소스 라이선스 정보 (**About Open Source Licenses)**
- `homepage`: 홈페이지 주소로 주로 Github 저장소의 메인 페이지를 사용 (homepage)
- `author`: 라이브러리 만든이의 이름과 이메일 (**Library creator's name and email**)
- `summary`: 라이브러리에 대한 간단한 설명 (**A brief description of the library)**
- `source`: 라이브러리 소스가 위치해있는 원격 저장소 주소 (**Remote storage address**)
- `source_files`: 소스 파일이 위치한 디렉토리 주소 (**Directory Address)**
- `frameworks`: 사용한 프레임워크 (use frameworks)

그럼 이제 github로 가서 레포를 만들어주세요
자신이 만든 파일에 가서 밑에 코드를 터미널에 넣어주세요
```bash
git init
```
입력이 완료되었다면 git 파일을 만들고 리모트 해주세요
```bash
git remote add origin {git허브 주소.git}
```
그리고 아래 터미널에 명령어를 사용해주세요
```bash
git push -u origin master
```

<img src="https://i.imghippo.com/files/JHaLh1722913264.png" alt="" border="0"/>
**벌써 나만의 라이브러리를 만들었습니다**

<img src="https://i.imghippo.com/files/FM0Jv1722913371.png" alt="" border="0" width="200" height="400"/>
PContributionsView는 라이브러리명으로 제가 편집한 것이고 초기에는 PeplaceMe로 되어있을 것입니다.

이제 라이브러리를 다 만들고 아래에 명령어를 쓰면 배포할 수 있습니다.
```bash
pod spec lint
```

<img src="https://i.imghippo.com/files/AnUL31722913832.png" alt="" border="0"/>
이런 error가 발생할 텐데 걱정하지 마세요! error와 warning은 상황에 따라 달리질 수 있지만 위와 같이 문제가 발생했다면 podspec에서 에러가 나는 것입니다.
만약 자신이 아무해도 에러가 난다면 아레 코드를 복사한 후 이름만 바꿔서 배포해보시기를 바랍니다.
```swift
Pod::Spec.new do |s|
    s.name = 'PContributionsView'
    s.version = '0.1.0'
    s.swift_version = '4.2'
    s.summary = 'This library was originally created for github grass.'
    s.homepage = 'https://github.com/jjunhaa0211/PerfectContributionsView'
    s.license = { :type => 'MIT', :file => 'LICENSE' }
    s.author = { 'jjunhaa0211' => 'goodjunha@gmail.com' }
    s.source = { :git => 'https://github.com/jjunhaa0211/PerfectContributionsView.git', :tag => s.version.to_s }
    s.ios.deployment_target = '9.0'
    s.source_files = 'PContributionsView/Classes/**/*'
end
```

<img src="https://i.imghippo.com/files/5qn1K1722914027.png" alt="" border="0"/>
배포가 성공했다면 초록색에 문구가 나올 것입니다. 이러면 배포준비가 끝났습니다.

#### 본격~! 배포하기
```bash
pod trunk register {이메일} {이름}
// ex) pod trunk register goodjunha@gmail.com jjunhaa0211
```

드디어 마지막 작업입니다. 
아래 명령어를 라이브러리명만 바꾸어 적으시면 됩니다.
```bash
pod trunk push {라이브러리명}.podspec
```
<img src="https://i.imghippo.com/files/5ADx31722914222.png" alt="" border="0"/>

와우~! 끝났어요~ 참 기나긴 여정이었습니다~ 🫨
수고하셨습니다! @.@