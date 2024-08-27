"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[7894],{58388:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(74848),s=t(28453);const i={title:"Singleton?",slug:"/gof/constructor/singleton",excerpt:"Singleton?",sidebar_position:5},l=void 0,o={id:"adpattern/gof-design-pattern/\uc0dd\uc131\ud328\ud134/singleton",title:"Singleton?",description:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc774\ub780?",source:"@site/docs/adpattern/gof-design-pattern/\uc0dd\uc131\ud328\ud134/singleton.md",sourceDirName:"adpattern/gof-design-pattern/\uc0dd\uc131\ud328\ud134",slug:"/gof/constructor/singleton",permalink:"/Developer_Jun/docs/gof/constructor/singleton",draft:!1,unlisted:!1,editUrl:"https://github.com/immutable/imx-docs/tree/main/docs/adpattern/gof-design-pattern/\uc0dd\uc131\ud328\ud134/singleton.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Singleton?",slug:"/gof/constructor/singleton",excerpt:"Singleton?",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Abstract?",permalink:"/Developer_Jun/docs/gof/constructor/abstract"},next:{title:"Interpreter?",permalink:"/Developer_Jun/docs/gof/behavioral/interpreter"}},a={},c=[{value:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc774\ub780?",id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc774\ub780",level:3},{value:"\uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 + \uc27d\uac8c \uc774\ud574\ud574\ubcf4\uae30",id:"\uc8fc\ub85c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0--\uc27d\uac8c-\uc774\ud574\ud574\ubcf4\uae30",level:3},{value:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uad6c\uc870\uccb4\ub85c \uc0ac\uc6a9\uac00\ub2a5\ud560\uae4c?",id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc744-\uad6c\uc870\uccb4\ub85c-\uc0ac\uc6a9\uac00\ub2a5\ud560\uae4c",level:3},{value:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc758 \uc7a5\ub2e8\uc810",id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc758-\uc7a5\ub2e8\uc810",level:3},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:4},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:4},{value:"\uc6b0\ub9ac\uc758 \uac1c\ubc1c \uc18d \uc7a0\uc785\ud574\uc788\uc5c8\ub358 \uc2f1\uae00\ud134 \ud328\ud134",id:"\uc6b0\ub9ac\uc758-\uac1c\ubc1c-\uc18d-\uc7a0\uc785\ud574\uc788\uc5c8\ub358-\uc2f1\uae00\ud134-\ud328\ud134",level:3}];function d(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc774\ub780",children:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc774\ub780?"}),"\n",(0,r.jsxs)(e.p,{children:["\ud074\ub798\uc2a4\uc5d0 \uc778\uc2a4\ud134\uc2a4\uac00 \ud558\ub098\ub9cc \uc788\ub3c4\ub85d \ud558\uba74\uc11c \uadf8 \ud558\ub098\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \uc804\uc5ed \uc811\uadfc\uc73c\ub85c \uc9c0\uc815\ud558\ub294 \uac83\uc744 \uc81c\uacf5\ud558\ub294 \ub514\uc790\uc778 \ud328\ud134\uc785\ub2c8\ub2e4. ",(0,r.jsx)("br",{}),"\n\uc989 \ud558\ub098\uc758 \uc0dd\uc131\uc790\uac00 \uc5ec\ub7ec\uac1c \ud638\ucd9c\ub418\ub354\ub77c\ub3c4 \uc2e4\uc81c \uac1d\uccb4\ub294 \ud558\ub098\uc774\uace0 \ucd5c\ucd08 \uc0dd\uc131 \uc774\ud6c4\uc5d0 \ucd5c\ucd08 \uc0dd\uc131\uc790\uac00 \uc0dd\uc131\ub41c \uac1d\uccb4\ub97c return\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(e.h3,{id:"\uc8fc\ub85c-\uc0ac\uc6a9\ud558\ub294-\uacbd\uc6b0--\uc27d\uac8c-\uc774\ud574\ud574\ubcf4\uae30",children:"\uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 + \uc27d\uac8c \uc774\ud574\ud574\ubcf4\uae30"}),"\n",(0,r.jsx)(e.p,{children:"\uc6b0\ub9ac\uac00 swift\ub97c \ud558\uba74\uc11c \ud68c\uc6d0\uc758 \uc815\ubcf4\ub97c \ubc1b\uc544\uc57c\ud560 \uc0c1\ud669\uc774 \uc628\ub2e4\uace0 \uac00\uc815\ud569\uc2dc\ub2e4. 1VC\ub294 name\uc744 \ubc1b\uace0 2VC\ub294 password\ub97c \ubc1b\uace0 3VC\ub97c \ubc1b\ub294\ub2e4\uace0 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4. \ud3c9\uc18c \uc6b0\ub9ac\ub294 \uc544\ub840\uc640 \uac19\uc774 \ucf54\ub4dc\ub97c \uad6c\uc131\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-swift",children:'class UserInFo {\n    var name: String\n    var password: String\n    var age: Int\n}\n\n//1VC = name\nclass 1VC {\n    let u = UserInFo()\n    u.name = "\ud558\ud558"\n    u.password = nil\n    u.age = nil\n}\n\n// 2VC = password\nclass 2VC {\n    let u = UserInFo()\n    u.name = nil\n    u.password = "12345678"\n    u.age = nil\n}\n\n// 3VC = age\nclass 3VC {\n    let u = UserInFo()\n    u.name = nil\n    u.password = nil\n    u.age = 18\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\uc5ec\ub7ec \ud074\ub798\uc2a4\uc5d0\uc11c \ub3d9\uc77c\ud55c \ub370\uc774\ud130\ub97c \uacf5\uc720\ud558\uace0 \uc2f6\uc744 \ub54c \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uba74 \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc0ac\uc6a9\uc790\uc758 \uc774\ub984, \ube44\ubc00\ubc88\ud638, \ub098\uc774 \ub4f1\uc758 \uc815\ubcf4\ub97c \uad00\ub9ac\ud560 \ub54c \uac01 \uc815\ubcf4\uac00 \ubcc4\ub3c4\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \uc544\ub2cc \ud558\ub098\uc758 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc800\uc7a5\ub418\uba74 \uad00\ub9ac\uac00 \uc6a9\uc774\ud574\uc9d1\ub2c8\ub2e4. \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uc801\uc6a9\ud558\uba74 \ud558\ub098\uc758 \uc720\uc77c\ud55c \uc778\uc2a4\ud134\uc2a4\uac00 \uc804\uc5ed\uc801\uc73c\ub85c \uc811\uadfc \uac00\ub2a5\ud558\uc5ec, \uc5b4\ub5a4 \ud074\ub798\uc2a4\uc5d0\uc11c\ub4e0 \ud574\ub2f9 \uc778\uc2a4\ud134\uc2a4\uc758 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud558\uace0 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ucf54\ub4dc\ub97c \ub354\uc6b1 \uae54\ub054\ud558\uace0 \uad00\ub9ac\ud558\uae30 \uc27d\uac8c \ub9cc\ub4e4\uc5b4 \uc90d\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h3,{id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc744-\uad6c\uc870\uccb4\ub85c-\uc0ac\uc6a9\uac00\ub2a5\ud560\uae4c",children:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uad6c\uc870\uccb4\ub85c \uc0ac\uc6a9\uac00\ub2a5\ud560\uae4c?"}),"\n",(0,r.jsx)(e.p,{children:"\uc2f1\uae00\ud134 \ud328\ud134\uc740 \uc8fc\ub85c \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud604\ub429\ub2c8\ub2e4. \uad6c\uc870\uccb4\ub85c \uc2f1\uae00\ud134 \ud328\ud134\uc744 \uad6c\ud604\ud558\ub294 \uac83\uc740 \uc77c\ubc18\uc801\uc774\uc9c0 \uc54a\uc73c\uba70, \uc774\ub294 \uad6c\uc870\uccb4\uc758 \ud2b9\uc131 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uad6c\uc870\uccb4\ub294 \uc778\uc2a4\ud134\uc2a4\ud654\ud560 \ub54c\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 \ubcf5\uc0ac\ubcf8\uc744 \uc0dd\uc131\ud558\uae30 \ub54c\ubb38\uc5d0, \uc2f1\uae00\ud134 \ud328\ud134\uc758 \ud575\uc2ec \uc694\uc18c\uc778 '\ub2e8 \ud558\ub098\uc758 \uc720\uc77c\ud55c \uc778\uc2a4\ud134\uc2a4'\ub97c \uc720\uc9c0\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uad6c\uc870\uccb4\ub97c \uc778\uc2a4\ud134\uc2a4\ud654\ud558\uc9c0 \uc54a\uace0 \uc0c1\uc218\ub85c\ub9cc \uc0ac\uc6a9\ud55c\ub2e4\uba74, \uc774\ub860\uc801\uc73c\ub85c\ub294 \uc2f1\uae00\ud134 \ud328\ud134\uacfc \ube44\uc2b7\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h3,{id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc758-\uc7a5\ub2e8\uc810",children:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc758 \uc7a5\ub2e8\uc810"}),"\n",(0,r.jsx)(e.h4,{id:"\uc7a5\uc810",children:"\uc7a5\uc810"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uc720\uc77c\ud55c \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5b4\uc11c \ub2e4\uc591\ud55c \uac1d\uccb4\ub4e4\uc5d0\uac8c \uacf5\uc720\ub418\ub294 \uac1d\uccb4\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"\uc7ac\uc0ac\uc6a9\uc131\uc774 \ub192\uc544\uc11c \uba54\ubaa8\ub9ac \ub0ad\ube44\ub97c \ubc29\uc9c0\ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"\ucf54\ub4dc \uc911\ubcf5 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"\ub2e8\uc810",children:"\ub2e8\uc810"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uc2f1\uae00\ud134 \ud328\ud134\uc740 \uc778\uc2a4\ud134\uc2a4\ub4e4 \uac04\uc5d0 \uacb0\ud569\ub3c4\uac00 \ub192\uc544\uc838\uc11c OCP(\uac1c\ubc29 \ud328\uc1c4 \uc6d0\uce59)\uc744 \uc704\ubc18 \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"\ub2e4\uc911 \uc2a4\ub808\ub4dc \ud658\uacbd\uc77c \uacbd\uc6b0 \uc2f1\uae00\ud134 \uac1d\uccb4\ub97c \uc5ec\ub7ec\ubc88 \uc0dd\uc131\ud558\uc9c0 \uc54a\ub3c4\ub85d \ucc98\ub9ac\ud574\uc57c\ud569\ub2c8\ub2e4"}),"\n",(0,r.jsx)(e.li,{children:"\uc218\uc815\uacfc \ud14c\uc2a4\ud2b8\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\uc6b0\ub9ac\uc758-\uac1c\ubc1c-\uc18d-\uc7a0\uc785\ud574\uc788\uc5c8\ub358-\uc2f1\uae00\ud134-\ud328\ud134",children:"\uc6b0\ub9ac\uc758 \uac1c\ubc1c \uc18d \uc7a0\uc785\ud574\uc788\uc5c8\ub358 \uc2f1\uae00\ud134 \ud328\ud134"}),"\n",(0,r.jsx)(e.p,{children:"\uac1c\ubc1c\uc744 \ud558\ub2e4\ubcf4\uba74 \uc0ac\uc6a9\ud558\ub294"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"UIScreen.main"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"URLSession.shared"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"UserDefaults.standard"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"otificationCenter.default"})," ",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\ub4f1\ub4f1\uc5d0 \uc804\ubd80 \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/GoF-SingletonPattern",children:"Singleton Pattern \uc608\uc81c\ucf54\ub4dc"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);