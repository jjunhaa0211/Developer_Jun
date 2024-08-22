"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[3865],{17881:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(74848),o=s(28453);const t={title:"of?",slug:"/rxswift/observable/of",excerpt:"of?",sidebar_position:3},i=void 0,c={id:"rxswift_Junha/observable/of",title:"of?",description:"of\ub294 \uc5ec\ub7ec\uac1c\uc758 \uc694\uc18c\ub4e4\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \ubc29\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/rxswift_Junha/observable/of.md",sourceDirName:"rxswift_Junha/observable",slug:"/rxswift/observable/of",permalink:"/Developer_Jun/docs/rxswift/observable/of",draft:!1,unlisted:!1,editUrl:"https://github.com/immutable/imx-docs/tree/main/docs/rxswift_Junha/observable/of.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"of?",slug:"/rxswift/observable/of",excerpt:"of?",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Just?",permalink:"/Developer_Jun/docs/rxswift/observable/just"},next:{title:"from?",permalink:"/Developer_Jun/docs/rxswift/observable/from"}},l={},d=[{value:"\uc0ac\uc6a9\ubc29\ubc95",id:"\uc0ac\uc6a9\ubc29\ubc95",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"of"}),"\ub294 \uc5ec\ub7ec\uac1c\uc758 \uc694\uc18c\ub4e4\uc744 \uc21c\ucc28\uc801\uc73c\ub85c \ubc29\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)("img",{src:"https://i.imghippo.com/files/QbPQZ1724310554.png",alt:"",border:"0"}),"\n",(0,r.jsxs)(n.p,{children:["\ub9c8\ube14\ub2e4\uc774\uc5b4\uadf8\ub7a8\uc744 \ubcf4\uc2dc\uba74 \ud558\ub098\uc758 \uc694\uc18c\ub9cc\ub4e4 \ubc29\ucd9c\ud558\uace0 \ub05d\ub098\ub294 ",(0,r.jsx)(n.code,{children:"just"}),"\uc640 \ub2ec\ub9ac \uc5ec\ub7ec\uac1c\uc758 ",(0,r.jsx)(n.strong,{children:"\ub370\uc774\ud2b8\ub97c \uc21c\ucc28\uc801\uc73c\ub85c \ubc29\ucd9c"}),"\ud558\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"\uc0ac\uc6a9\ubc29\ubc95",children:"\uc0ac\uc6a9\ubc29\ubc95"}),"\n",(0,r.jsxs)(n.p,{children:["\uc544\ub798\ub294 ",(0,r.jsx)(n.code,{children:"of"}),"\uc758 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \ud615\ud0dc\uc785\ub2c8\ub2e4:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'Observable<String>.of("J", "U", "N", "H", "A")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\uc544\ub798\ub294 ",(0,r.jsx)(n.code,{children:"of"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uae30\ubcf8\uc801 \uc608\uc2dc\ub4e4\uc785\ub2c8\ub2e4:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'Observable<String>.of("J", "U", "N", "H", "A")\n    .subscribe(onNext: { s in\n        print(s)\n     }, onCompleted: {\n        print("completed")\n    })\n     // J\n     // U\n     // N\n     // H\n     // A\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"of"})," \uc548\uc5d0 \ub4e4\uc5b4\uac00\ub294 \uc694\uc18c\ub4e4\uc740 \ud0c0\uc785\ucd94\ub860\ub418\uc5b4\uc11c \ud0c0\uc785 \uc81c\ud55c\uc774 \uc0dd\uae30\uae30 \ub54c\ubb38\uc5d0 \ud558\ub098\uc758 \ud0c0\uc785\uc73c\ub85c \ud1b5\uc77c\uc2dc\ucf1c\uc8fc\uc5b4\uc57c\ud569\ub2c8\ub2e4. \ub54c\ubb38\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \ud558\uba74 \uc548\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'Observable.of("J", 1, "N", 3, "A") // \uc5d0\ub7ec\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\ub54c\ubb38\uc5d0 \uc704\uc640 \uac19\uc740 \ucf54\ub4dc\ub97c \uc791\ub3d9\uc2dc\ud0a4\uace0 \uc2f6\ub2e4\uba74 ",(0,r.jsx)(n.code,{children:"Any"}),"\ub97c \uc0ac\uc6a9\ud574\uc11c \ud569\ubc95\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:'Observable<Any>.of("J", 1, "N", 3, "A") // \uc131\uacf5\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\ub610 \uc8fc\uc758\ud560 \uc810\uc740 \uc544\ub798\uc640 \uac19\uc774 \ubc30\uc5f4\uc744 \ud558\ub098 \ub123\uc5c8\uc744 \uacbd\uc6b0 ",(0,r.jsx)(n.code,{children:"just"}),"\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ubc30\uc5f4 \ud558\ub098\ub97c \ud558\ub098\ub85c \uc778\uc9c0\ud558\uace0 \ud558\ub098\ub9cc \ubc49\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-swift",children:"Observable.of([1, 2, 3])\n// [1,2,3]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\ub54c\ubb38\uc5d0 \ud30c\ub77c\ubbf8\ud130 \ud558\ub098\ub97c \ud558\ub098\uc758 \ud56d\ubaa9\uc73c\ub85c \ubcf4\uae30 \ub54c\ubb38\uc5d0 \uc774\ub97c \uc798 \uc778\uc9c0\ud574\uc57c\ud569\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"of"}),"\uac00 \ubc30\uc5f4\uc744 \ub123\uc5c8\uc744 \ub54c \ud574\ub2f9 \ubc30\uc5f4 \uc790\uccb4\ub97c \ubc29\ucd9c\ud558\ub294 \uc774\uc720\ub294 \ubc30\uc5f4\uc744 \ub123\uc5c8\uc744 \uacbd\uc6b0 ",(0,r.jsx)(n.code,{children:"Element"}),"\ub97c \ud558\ub098\uc529 \ubc29\ucd9c\ud558\ub294 \uba54\uc11c\ub4dc\uac00 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(96540);const o={},t=r.createContext(o);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);