"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[4342],{95075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(74848),o=n(28453);const s={title:"Prototype?",slug:"/gof/constructor/prototype",excerpt:"Prototype?",sidebar_position:2},p=void 0,c={id:"adpattern/gof-design-pattern/\uc0dd\uc131\ud328\ud134/prototype",title:"Prototype?",description:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc774\ub780?",source:"@site/docs/adpattern/gof-design-pattern/\uc0dd\uc131\ud328\ud134/prototype.md",sourceDirName:"adpattern/gof-design-pattern/\uc0dd\uc131\ud328\ud134",slug:"/gof/constructor/prototype",permalink:"/Developer_Jun/docs/gof/constructor/prototype",draft:!1,unlisted:!1,editUrl:"https://github.com/immutable/imx-docs/tree/main/docs/adpattern/gof-design-pattern/\uc0dd\uc131\ud328\ud134/prototype.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Prototype?",slug:"/gof/constructor/prototype",excerpt:"Prototype?",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Builder?",permalink:"/Developer_Jun/docs/gof/constructor/builder"},next:{title:"Factory?",permalink:"/Developer_Jun/docs/gof/constructor/factory"}},l={},i=[{value:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc774\ub780?",id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134\uc774\ub780",level:3},{value:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134 \uc27d\uac8c \uc774\ud574\ud558\uae30",id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134-\uc27d\uac8c-\uc774\ud574\ud558\uae30",level:3},{value:"\ucf54\ub4dc\ub85c \ubcf4\ub294 \ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134 \uc774\ud574\ud558\uae30",id:"\ucf54\ub4dc\ub85c-\ubcf4\ub294-\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134-\uc774\ud574\ud558\uae30",level:4},{value:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc740 \uc8fc\ub85c \uc5b4\ub5a4 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ud560\uae4c?",id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134\uc740-\uc8fc\ub85c-\uc5b4\ub5a4-\uacbd\uc6b0\uc5d0-\uc0ac\uc6a9\ud560\uae4c",level:3},{value:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134 \uad6c\uc870 \uc774\ud574\ud558\uae30",id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134-\uad6c\uc870-\uc774\ud574\ud558\uae30",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134\uc774\ub780",children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc774\ub780?"}),"\n",(0,r.jsx)(t.p,{children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc740 \uc0dd\uc131\ud560 \uac1d\uccb4\ub4e4\uc758 \ud0c0\uc785\uc774 \ud504\ub85c\ud1a0\ud0c0\uc785 \uc778\uc2a4\ud134\uc2a4\ub85c\ubd80\ud130 \uacb0\uc815\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4.\n\uc778\uc2a4\ud134\uc2a4\ub294 \uc0c8 \uac1d\uccb4\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 \uc790\uc2e0\uc744 \ubcf5\uc81c\ud569\ub2c8\ub2e4.\n\uc989 \ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc740 \ucf54\ub4dc\ub97c \ub2e4\ub978 \ud074\ub798\uc2a4\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0 \uae30\uc874 \uac1d\uccb4\ub4e4\uc744 \ubcf5\uc0ac\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uc0dd\uc131 \ub514\uc790\uc778 \ud328\ud134\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(t.h3,{id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134-\uc27d\uac8c-\uc774\ud574\ud558\uae30",children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134 \uc27d\uac8c \uc774\ud574\ud558\uae30"}),"\n",(0,r.jsx)(t.p,{children:"\uc608\ub97c \ub4e4\uc5b4\uc11c \uc6d0\uc2dc\uc778\ub4e4\uc774 \uc788\ub2e4\uace0 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4. \uadf8\ub7f0\ub370 \uc5b4\ub290 \ub0a0 \ud558\ub298\uc5d0\uc11c \ud578\ub4dc\ud3f0\uc774 \ub5a8\uc5b4\uc84c\ub2e4\uace0 \uc0dd\uac01\ud574\ubd05\uc2dc\ub2e4.\n\uc6d0\uc2dc\uc778\ub4e4\uc740 \ud578\ub4dc\ud3f0\uc758 \uae30\ub2a5\uc778 \uc190\uc804\ub4f1, \uc720\ud29c\ube0c\ub97c \ubcf4\uace0 \ud578\ub4dc\ud3f0\uc5d0 \uc695\uc2ec\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4. \ud55c \uc6d0\uc2dc\uc778\uc774 \uc790\uae30\uac00 \ud578\ub4dc\ud3f0\uc744 \ub9cc\ub4e4\uaca0\ub2e4\uace0 \ud574\uc11c \uc815\ub9d0 \ub611\uac19\uc740 \uc678\ud615\uc73c\ub85c \ud578\ub4dc\ud3f0 \ubaa8\uc591 \ub3cc\uc744 \uac00\uc9c0\uace0 \uc654\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uadf8\uac83\uc740 \uc190\uc804\ub4f1, \uc720\ud29c\ube0c\ub97c \uc2e4\ud57c\uc2dc\ud0ac \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc608\uc81c\uac00 \uc5b4\ub835\ub2e4\uba74 \uc544\ub798\ub97c \uc77d\uc5b4\uc8fc\uc138\uc694"}),"\n",(0,r.jsx)(t.h4,{id:"\ucf54\ub4dc\ub85c-\ubcf4\ub294-\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134-\uc774\ud574\ud558\uae30",children:"\ucf54\ub4dc\ub85c \ubcf4\ub294 \ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134 \uc774\ud574\ud558\uae30"}),"\n",(0,r.jsx)(t.p,{children:"\ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\ub2e4\ubcf4\uba74 \ud504\ub77c\uc774\ube57 \ubcc0\uc218 \ub610\ub294 \ud568\uc218\ub97c \uacf5\uac1c\ud558\uace0 \uc2f6\uc9c0 \uc54a\uc740 \uacbd\uc6b0\ub294 \uc811\uadfc \uc81c\uc5b4\uc790\ub97c \uc0ac\uc6a9\ud574\uc11c \ub9c9\uc2b5\ub2c8\ub2e4. \uadf8 \ub73b\uc740 \uc544\ubb34\ub9ac \uc6d0\ud558\ub294 \uac1d\uccb4\ub97c \uac00\uc838\uc640\ub3c4 \ube44\uacf5\uac1c\uc5ec\uc11c \uac1d\uccb4\uc758 \ub0b4\ubd80\ub97c \ub611\uac19\uc774 \ubc1b\uc544\uc624\uc9c0 \ubabb\ud55c\ub2e4\ub294 \ub73b\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc124\ub839 \ucf54\ub4dc\ub97c \ubc1b\uc544\uc654\ub2e4\uace0 \ud558\ub354\ub77c\ub3c4 \ud074\ub798\uc2a4\uc758 \uc758\uc874\uc131\uc774 \uc62c\ub77c\uac11\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4\uc11c \uba54\uc11c\ub4dc\uc758 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc77c\ubd80 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub530\ub974\ub294 \ubaa8\ub4e0 \uac1d\uccb4\ub97c \uc218\ub77d\ud560 \ub54c \uc778\uc2a4\ud134\uc2a4\ub9cc \uc54c\uace0 \uad6c\uc131 \ud074\ub798\uc2a4\uc758 \ub0b4\ubd80\ub294 \uc54c\uc9c0 \ubabb\ud560 \uac00\ub2a5\uc131\uc774 \ud07d\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0 \ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uba74 \uc2e4\uc81c\ub85c \ubcf5\uc81c\ub418\ub294 \uac1d\uccb4\ub4e4\uc744 \ubcf5\uc81c \ud504\ub85c\uc138\uc2a4\ub85c \uc704\uc784\ud558\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc740 \ubcf5\uc81c\ub97c \uc9c0\uc6d0\ud558\ub294 \ubaa8\ub4e0 \uac1d\uccb4\uc5d0 \ub300\ud55c \uacf5\ud1b5 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc120\uc5b8\ud569\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0\uc5d0\ub294 \ud074\ub798\uc2a4\uc640 \uacb0\ud569\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uae30 \ub584\ubb38\uc5d0 \uc758\uc874\uc131\uc774 \ub0ae\uc544\uc9d1\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c clone \uba54\uc11c\ub4dc\uc5d0 \ud3ec\ud568\uc2dc\ud0b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 clone \uba54\uc11c\ub4dc\ub294 \uc77c\ubc18 \ud074\ub798\uc2a4\ucc98\ub7fc \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \uc0ac\uc6a9\ud558\uba74 \uac1d\uccb4\ub4e4\uc774 \uac19\uc740 \ud074\ub798\uc2a4\uc5d0 \uc18d\ud55c \ub2e4\ub978 \uac1d\uccb4\uc758 \ube44\uacf5\uac1c \ud544\ub4dc\uc5d0\ub3c4 \uc811\uadfc\ud560 \uc218 \uc788\uace0 \ubcf5\uc0ac\ud558\ub294 \uac83\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\uadf8\ub9ac\uace0 \uc800\ud76c\ub294 \uc774\ub97c \ubcf5\uc81c\ub41c \uac1d\uccb4\ub97c \ud504\ub85c\ud1a0\ud0c0\uc785\uc774\ub77c\uace0 \ubd80\ub974\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(t.h3,{id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134\uc740-\uc8fc\ub85c-\uc5b4\ub5a4-\uacbd\uc6b0\uc5d0-\uc0ac\uc6a9\ud560\uae4c",children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc740 \uc8fc\ub85c \uc5b4\ub5a4 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ud560\uae4c?"}),"\n",(0,r.jsx)(t.p,{children:"\uc8fc\ub85c \ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc740 \uc81c\ud488\uc758 \ub300\ub7c9 \uc0dd\uc0b0\uc744 \uc2dc\uc791\ud558\uae30 \uc804\uc5d0 \ub2e4\uc591\ud55c \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud504\ub85c\ud1a0\ud0c0\uc785 \uc790\uccb4\ub294 \uc0dd\uc0b0 \uacfc\uc815\uc5d0 \ucc38\uc5ec\ud558\uc9c0 \uc54a\uace0 \uc218\ub3d9\uc801\uc778 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \ub54c\ubb38\uc5d0 \ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134\uc758 \ubcc4\uba85\uc774 (\uc720\uc0ac \ubd84\uc5f4)\uc785\ub2c8\ub2e4. \uc774\uc720\ub294 \ud558\ub098\uc758 \ud504\ub85c\ud1a0\ud0c0\uc785 \uc790\uccb4\uc5d0\uc11c\ub294 \uacfc\uc815\uc5d0 \ucc38\uc5ec\ud558\uc9c0 \uc54a\uace0 \uc790\uc2e0\uc744 \ubcf5\uc0ac\ud558\uc5ec\uc11c \uc6d0\ubcf8 \ud504\ub85c\ud1a0\ud0c0\uc785\ucc98\ub7fc \ud589\ub3d9\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(t.h3,{id:"\ud504\ub85c\ud1a0\ud0c0\uc785-\ud328\ud134-\uad6c\uc870-\uc774\ud574\ud558\uae30",children:"\ud504\ub85c\ud1a0\ud0c0\uc785 \ud328\ud134 \uad6c\uc870 \uc774\ud574\ud558\uae30"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Concrete Prototype -> Prototype(clone())"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\uc6d0\ub798 \ucf54\ub4dc \uad6c\uc870\ub97c \ud328\ud134\ud654 \ud558\uae30 \uc704\ud574\uc11c\ub294 interface\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc interface\ub97c \uad73\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc790\uc2e0\uc744 \ubc18\ud658\ud558\ub294 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uac00 \ub300\ubd80\ubd84\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"protocol Prototype: AnyObject {\n    func clone() -> Self\n}\n\nclass Apple: Prototype {\n    var user: Int\n    \n    init(user: Int) {\n        self.user = user\n    }\n    \n    func clone() -> Self {\n        return (Apple(user: self.user) as? Self)!\n    }\n}\n\nlet apple1 = Apple(user: 10)\napple1.user = (apple1.user + 100)\nprint(apple1.user) // 110\n        \nlet apple2 = apple1.clone()\napple2.user = (apple2.user + 90)\nprint(apple2.user) // \uc289! \uc790\uac00\ubcf5\uc81c!\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/GoF-PrototypePattern",children:"Prototype Pattern \uc608\uc81c\ucf54\ub4dc"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>p,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function p(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:p(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);