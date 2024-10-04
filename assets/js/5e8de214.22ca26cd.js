"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[4383],{68620:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var n=i(74848),t=i(28453);const s={title:"Framework?",slug:"/iOS/tuist/chapterII/framework-description",excerpt:"Framework?",sidebar_position:2},c="Framework",l={id:"iOS/tuist/chapter II/framework-description",title:"Framework?",description:"- \ud5e4\ub354 \ud30c\uc77c, localizable \ud30c\uc77c, \uc774\ubbf8\uc9c0, \ubb38\uc11c\uc640 \uac19\uc740 \ucd94\uac00 \ub9ac\uc18c\uc2a4\uae4c\uc9c0 \uc774 \ubaa8\ub4e0 \uac83\uc744 \ud558\ub098\uc758 Bundle \ubb36\uc5b4 \ub193\uc740 \uac83",source:"@site/docs/iOS/tuist/chapter II/framework-description.md",sourceDirName:"iOS/tuist/chapter II",slug:"/iOS/tuist/chapterII/framework-description",permalink:"/Developer_Jun/docs/iOS/tuist/chapterII/framework-description",draft:!1,unlisted:!1,editUrl:"https://github.com/immutable/imx-docs/tree/main/docs/iOS/tuist/chapter II/framework-description.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Framework?",slug:"/iOS/tuist/chapterII/framework-description",excerpt:"Framework?",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Library?",permalink:"/Developer_Jun/docs/iOS/tuist/chapterII/library"},next:{title:"Framework\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790!",permalink:"/Developer_Jun/docs/iOS/tuist/chapterII/make-framework"}},o={},a=[{value:"Static framework VS Dynamic framework",id:"static-framework-vs-dynamic-framework",level:2},{value:"<strong>Static Framework (\uc815\uc801 \ud504\ub808\uc784\uc6cc\ud06c)</strong>",id:"static-framework-\uc815\uc801-\ud504\ub808\uc784\uc6cc\ud06c",level:3},{value:"<strong>Dynamic Framework (\ub3d9\uc801 \ud504\ub808\uc784\uc6cc\ud06c)</strong>",id:"dynamic-framework-\ub3d9\uc801-\ud504\ub808\uc784\uc6cc\ud06c",level:3}];function d(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"framework",children:"Framework"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\ud5e4\ub354 \ud30c\uc77c, localizable \ud30c\uc77c, \uc774\ubbf8\uc9c0, \ubb38\uc11c\uc640 \uac19\uc740 \ucd94\uac00 \ub9ac\uc18c\uc2a4\uae4c\uc9c0 \uc774 \ubaa8\ub4e0 \uac83\uc744 \ud558\ub098\uc758 ",(0,n.jsx)(r.em,{children:"Bundle"})," \ubb36\uc5b4 \ub193\uc740 \uac83"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:"Bundle"}),": \uc11c\ube0c \ub514\ub809\ud1a0\ub9ac \ub0b4\ubd80\uc758 \ud30c\uc77c \ub514\ub809\ud1a0\ub9ac"]}),"\n",(0,n.jsxs)(r.li,{children:["iOS\uc5d0\uc11c ",(0,n.jsx)(r.em,{children:"Bundle"}),"\uc5d0 \uad00\ub828 \ud30c\uc77c\uc744 \ud558\ub098\uc758 \ud328\ud0a4\uc9c0\ub85c \ud3b8\ud558\uac8c \ud568\uaed8 \uc81c\uacf5"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["\uc989, ",(0,n.jsx)(r.strong,{children:"Framework"}),"\uac00 \ubab8\uc9d1\uc774 \ud06c\uace0 ",(0,n.jsx)(r.strong,{children:"Library"}),"\uac00 \ubab8\uc9d1\uc774 \uc791\uc73c\uba70, ",(0,n.jsx)(r.strong,{children:"Framework"})," \uc548\uc5d0 ",(0,n.jsx)(r.strong,{children:"Library"}),"\uac00 \uc18d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(r.h2,{id:"static-framework-vs-dynamic-framework",children:"Static framework VS Dynamic framework"}),"\n",(0,n.jsx)(r.h3,{id:"static-framework-\uc815\uc801-\ud504\ub808\uc784\uc6cc\ud06c",children:(0,n.jsx)(r.strong,{children:"Static Framework (\uc815\uc801 \ud504\ub808\uc784\uc6cc\ud06c)"})}),"\n",(0,n.jsx)("img",{src:"https://i.imghippo.com/files/dtch51722864322.png",alt:"",border:"0",width:"600",height:"400"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\uad6c\uc131: Source File + Static Library + Static Linker"}),"\n",(0,n.jsxs)(r.li,{children:["\ub3d9\uc791 \uc6d0\ub9ac: ",(0,n.jsx)(r.code,{children:"Static Linker"}),"\ub97c \ud1b5\ud574 ",(0,n.jsx)(r.code,{children:"Static Library"})," \ucf54\ub4dc\uac00 ",(0,n.jsx)(r.code,{children:"Execute File(application file)"})," \ub0b4\uc5d0 \ubcf5\uc0ac\ub418\uc5b4 Heap \uba54\ubaa8\ub9ac\uc5d0 \uc0c1\uc8fc"]}),"\n",(0,n.jsxs)(r.li,{children:["\ubb38\uc81c\uc810: ",(0,n.jsx)(r.code,{children:"Static Library"}),"\uac00 \ubcf5\uc0ac\ub418\ubbc0\ub85c \uc5ec\ub7ec ",(0,n.jsx)(r.code,{children:"framework"}),"\uc5d0 \uc0ac\uc6a9\ud558\uba74 \ucf54\ub4dc \uc911\ubcf5\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc74c"]}),"\n",(0,n.jsx)(r.li,{children:"\ud2b9\uc9d5: \ucd08\uae30\uc5d0 \ubaa8\ub4e0 \uac83\uc744 \uace0\uc815\ud574\ub450\uace0 \uac00\ub294 \ud615\ud0dc"}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\uc7a5\uc810"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\ub7f0\ud0c0\uc784 \uc18d\ub3c4\uac00 \ube60\ub984"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\ub2e8\uc810"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc774 \ub9ce\uc74c"}),"\n",(0,n.jsx)(r.li,{children:"\ucef4\ud30c\uc77c \uc18d\ub3c4\uac00 \uc624\ub798 \uac78\ub9bc"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"dynamic-framework-\ub3d9\uc801-\ud504\ub808\uc784\uc6cc\ud06c",children:(0,n.jsx)(r.strong,{children:"Dynamic Framework (\ub3d9\uc801 \ud504\ub808\uc784\uc6cc\ud06c)"})}),"\n",(0,n.jsx)("img",{src:"https://i.imghippo.com/files/7Knfc1722864351.png",alt:"",border:"0",width:"600",height:"400"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\uad6c\uc131: Source File + Dynamic Library References + Dynamic Library + Static Linker"}),"\n",(0,n.jsxs)(r.li,{children:["\ub3d9\uc791 \uc6d0\ub9ac: \ud30c\uc77c\uc774 \uc544\ub2cc \uc8fc\uc18c\ub97c ",(0,n.jsx)(r.code,{children:"execute file"}),"\uc5d0 \uc800\uc7a5\ud558\uace0, ",(0,n.jsx)(r.code,{children:"static linker"}),"\ub97c \ud1b5\ud574\uc11c ",(0,n.jsx)(r.code,{children:"stack"}),"\uc73c\ub85c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc744 \ubd88\ub7ec\uc640\uc11c \uc0ac\uc6a9\ud558\ub294 \ud615\ud0dc"]}),"\n",(0,n.jsx)(r.li,{children:"\ud2b9\uc9d5: \ube4c\ub4dc \uc2dc\uac04\uc744 \uc904\uc774\uace0 \uc571 \ub0b4\uc5d0\uc11c \ub7f0\ud0c0\uc784 \uc2dc \ud574\ub2f9 \ud504\ub808\uc784\uc6cc\ud06c\uac00 \uc0ac\uc6a9\ub418\ub294 \ubd80\ubd84\uc5d0\uc11c \uc5f0\uacb0\ud558\uc5ec \uc0ac\uc6a9"}),"\n",(0,n.jsxs)(r.li,{children:["\uc120\ud638 \uc2dc\ub098\ub9ac\uc624: \uc804\uccb4 \uc5d0\uc14b \ub4f1\uc758 \uc18c\uc2a4\ub97c \uac00\uc9c0\uba74 ",(0,n.jsx)(r.code,{children:"Dynamic framework"}),"\uac00 \ub354 \uc801\ud569"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\uc7a5\uc810"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\ucef4\ud30c\uc77c \uc18d\ub3c4\uac00 \ube60\ub984"}),"\n",(0,n.jsx)(r.li,{children:"\uba54\ubaa8\ub9ac\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"\ub2e8\uc810"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\ub7f0\ud0c0\uc784 \uc18d\ub3c4\uac00 \ub290\ub9bc"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>c,x:()=>l});var n=i(96540);const t={},s=n.createContext(t);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);