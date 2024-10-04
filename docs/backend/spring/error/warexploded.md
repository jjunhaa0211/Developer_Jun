---
title: 'spring.com:war exploded'
slug: '/backend/spring/warexploded'
excerpt: 'war exploded를 해결하는 방법에 대해 알려드립니다.'
sidebar_position: 1
---

톰캣을 사용해서 프로젝트를 열고 싶었는데.. 아직 초보자라서 어떻게 열어야하는 방법도 모르고 아키텍트가 뭔지 프로젝트 구조가 어떤거길래 거기서 자바 버전을 수정하라는 것인지 이해하지 못했습니다. 
때문에 tomcat을 설정하고 아래 에러가 나길래 몹시 당황하였습니다.
<img src="https://i.imghippo.com/files/ySDf41728003573.png" alt="" border="0"/>

Fix를 누르면 될 것 같아서 Fix를 눌러보았더니 아무것도 없어서 2배로 당황..
<img src="https://i.imghippo.com/files/AtNTS1728003676.png" alt="" border="0"/>

무언가를 눌러야할 것 같아서 아키펙트를 추가하고 별짓을 다했었습니다.

<img src="https://i.imghippo.com/files/yVYSm1728003733.png" alt="" border="0"/>

하지만 방법은 생각보다 간단함니다. 
일단 톰켓 설정은 사용자 분께서 하시고 아래 에러가 나신다면
<img src="https://i.imghippo.com/files/ySDf41728003573.png" alt="" border="0"/>

프로젝트 구조르 이동해서 아래와 같은 창이 나오게 해주세요.
<img src="https://i.imghippo.com/files/YaC6t1728003851.png" alt="" border="0"/>

큰 확율로 모듈이나 패싯에 Web이 없을 것입니다. 
Web을 추가하라는 경고창이 있으실 것입니다. 모듈과 패싯이 아래와 같아지도록 만들어주세요.
<img src="https://i.imghippo.com/files/inFU21728004057.png" alt="" border="0"/>
<img src="https://i.imghippo.com/files/zCMQS1728004071.png" alt="" border="0"/>

위와 같은 상태가 되었다면 아래와 같이 아키텍트가 생겼을 것입니다.
<img src="https://i.imghippo.com/files/rjQ991728004136.png" alt="" border="0"/>
> 대문자는 제가 임의로 만든 것이라서 무시해주세요.

그러면 이제 다시 톰컷으로 돌아가시면 됩니다.
<img src="https://i.imghippo.com/files/OXeQ71728004223.png" alt="" border="0"/>
배포창으로 가서 + 버튼을 눌러서 아키텍터를 2개 추가해주시면 정상 작동하게 됩니다.
<img src="https://i.imghippo.com/files/cIDvu1728004276.png" alt="" border="0"/>

수고하셨습니다. 감사합니다.