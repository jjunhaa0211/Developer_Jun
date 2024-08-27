"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[6697],{98113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const s={title:"Facade?",slug:"/gof/structural/facade",excerpt:"Facade?",sidebar_position:2},l="\ud37c\uc0ac\ub4dc \ud328\ud134(Facade Pattern)",a={id:"adpattern/gof-design-pattern/\uad6c\uc870\ud328\ud134/facade",title:"Facade?",description:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc774\ub780?",source:"@site/docs/adpattern/gof-design-pattern/\uad6c\uc870\ud328\ud134/facade.md",sourceDirName:"adpattern/gof-design-pattern/\uad6c\uc870\ud328\ud134",slug:"/gof/structural/facade",permalink:"/Developer_Jun/docs/gof/structural/facade",draft:!1,unlisted:!1,editUrl:"https://github.com/immutable/imx-docs/tree/main/docs/adpattern/gof-design-pattern/\uad6c\uc870\ud328\ud134/facade.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Facade?",slug:"/gof/structural/facade",excerpt:"Facade?",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Decorator?",permalink:"/Developer_Jun/docs/gof/structural/decorator"},next:{title:"Flyweight?",permalink:"/Developer_Jun/docs/gof/structural/flyweight"}},d={},c=[{value:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc774\ub780?",id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc774\ub780",level:2},{value:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \uc5b4\uc6d0",id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\uc5b4\uc6d0",level:2},{value:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \uc0ac\uc6a9 \uc2dc\uae30",id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\uc0ac\uc6a9-\uc2dc\uae30",level:2},{value:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \uad6c\uc870",id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\uad6c\uc870",level:2},{value:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \uc7a5\ub2e8\uc810",id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\uc7a5\ub2e8\uc810",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \ud55c\uacc4",id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\ud55c\uacc4",level:2}];function o(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\ud37c\uc0ac\ub4dc-\ud328\ud134facade-pattern",children:"\ud37c\uc0ac\ub4dc \ud328\ud134(Facade Pattern)"})}),"\n",(0,r.jsx)(n.h2,{id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc774\ub780",children:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc774\ub780?"}),"\n",(0,r.jsx)(n.p,{children:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc740 \ubcf5\uc7a1\ud55c \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud558\ub294 \uad6c\uc870\uc801 \ub514\uc790\uc778 \ud328\ud134\uc785\ub2c8\ub2e4. \uc774 \ud328\ud134\uc740 \uc5ec\ub7ec \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc758 \ubcf5\uc7a1\ud55c \uc758\uc874\uc131\uc744 \ud37c\uc0ac\ub4dc\ub77c\ub294 \ub2e8\uc77c \ud074\ub798\uc2a4 \ub4a4\uc5d0 \uc228\uaca8\uc11c, \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ub354 \uc27d\uac8c \uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc774\ub294 \ud2b9\ud788 \ud06c\uace0 \ubcf5\uc7a1\ud55c \ucf54\ub4dc \ub77c\uc774\ube0c\ub7ec\ub9ac\ub098 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ub2e4\ub8f0 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\uc5b4\uc6d0",children:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \uc5b4\uc6d0"}),"\n",(0,r.jsx)(n.p,{children:"\ud37c\uc0ac\ub4dc(facade)\ub77c\ub294 \ub2e8\uc5b4\ub294 '\uac74\ubb3c\uc758 \uc815\uba74'\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc774 \uc6a9\uc5b4\ub294 \ud328\ud134\uc774 \uc678\ubd80\uc5d0\ub294 \uac04\ub2e8\ud55c \uc815\uba74\uc744 \uc81c\uacf5\ud558\uba74\uc11c \ub0b4\ubd80\uc758 \ubcf5\uc7a1\ud55c \uad6c\uc870\ub97c \uc228\uae34\ub2e4\ub294 \uac1c\ub150\uc744 \uc798 \ud45c\ud604\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\uc0ac\uc6a9-\uc2dc\uae30",children:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \uc0ac\uc6a9 \uc2dc\uae30"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ubcf5\uc7a1\ud55c \uc2dc\uc2a4\ud15c\uc758 \uc77c\ubd80\ubd84\ub9cc\uc744 \uc0ac\uc6a9\ud558\uace0\uc790 \ud560 \ub54c"}),"\n",(0,r.jsx)(n.li,{children:"\uc2dc\uc2a4\ud15c\uacfc\uc758 \uc758\uc874\uc131\uc744 \ucd5c\uc18c\ud654\ud558\uace0, \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud558\uace0\uc790 \ud560 \ub54c"}),"\n",(0,r.jsx)(n.li,{children:"\uc11c\ube0c\uc2dc\uc2a4\ud15c \uac04\uc758 \ud1b5\ud569\uc744 \ub2e8\uc21c\ud654\ud558\uace0\uc790 \ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\uad6c\uc870",children:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \uad6c\uc870"}),"\n",(0,r.jsx)(n.p,{children:"Client -> Facade -> Subsystem Classes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Client"}),": \ud074\ub77c\uc774\uc5b8\ud2b8\ub294 \ud37c\uc0ac\ub4dc\ub97c \ud1b5\ud574 \uc11c\ube0c \uc2dc\uc2a4\ud15c\uacfc \uc0c1\ud638\uc791\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\ub294 \ub354 \uac04\ub2e8\ud574\uc9c0\uace0, \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc758 \ubcf5\uc7a1\uc131\uc5d0 \ub300\ud574 \uac71\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Facade"}),": \ud37c\uc0ac\ub4dc \ud074\ub798\uc2a4\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc694\uccad\uc744 \uc801\uc808\ud55c \uc11c\ube0c\uc2dc\uc2a4\ud15c \ud074\ub798\uc2a4\ub85c \uc804\ub2ec\ud569\ub2c8\ub2e4. \uc774 \ud074\ub798\uc2a4\ub294 \uc5b4\ub5a4 \uc11c\ube0c\uc2dc\uc2a4\ud15c \ud074\ub798\uc2a4\uac00 \uc694\uccad\uc744 \ucc98\ub9ac\ud560\uc9c0\ub97c \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Subsystem Classes"}),": \uc11c\ube0c \uc2dc\uc2a4\ud15c \ud074\ub798\uc2a4\ub4e4\uc740 \ud37c\uc0ac\ub4dc \uac1d\uccb4\ub97c \ud1b5\ud574 \ub4e4\uc5b4\uc628 \uc694\uccad\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uac01 \ud074\ub798\uc2a4\ub294 \uad6c\uccb4\uc801\uc778 \uae30\ub2a5\uc744 \uc218\ud589\ud558\uba70, \uc11c\ube0c \uc2dc\uc2a4\ud15c\ub4e4\uc740 \ud37c\uc0ac\ub4dc\uc758 \uc874\uc7ac\ub97c \ubaa8\ub985\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\uc7a5\ub2e8\uc810",children:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \uc7a5\ub2e8\uc810"}),"\n",(0,r.jsx)(n.h3,{id:"\uc7a5\uc810",children:"\uc7a5\uc810"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ubcf5\uc7a1\ud55c \ud558\uc704 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ucf54\ub4dc\ub97c \ubd84\ub9ac\ud558\uc5ec, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640\uc758 \uacb0\ud569\ub3c4\ub97c \ub0ae\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc81c\uacf5\ud568\uc73c\ub85c\uc368 \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uc811\uadfc\uc131\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uc2dc\uc2a4\ud15c\uc758 \uac1c\ubcc4 \ubd80\ubd84\uc5d0 \ub300\ud55c \ubcc0\uacbd\uc774 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc744 \ucd5c\uc18c\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\ub2e8\uc810",children:"\ub2e8\uc810"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud37c\uc0ac\ub4dc \ud074\ub798\uc2a4\uac00 \ub108\ubb34 \ub9ce\uc740 \uc5ed\ud560\uc744 \ub9e1\uac8c \ub418\uc5b4, \uc2dc\uc2a4\ud15c\uc758 \ubaa8\ub4e0 \ud074\ub798\uc2a4\uc640 \uac15\ud558\uac8c \uacb0\ud569\ub420 \uc218 \uc788\ub294 '\uc2e0(God)' \uac1d\uccb4\uac00 \ub420 \uc704\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ucd08\uae30 \uc124\uacc4\uac00 \ub2e8\uc21c\ud560 \uacbd\uc6b0, \ud37c\uc0ac\ub4dc \ud328\ud134\uc774 \ubd88\ud544\uc694\ud558\uac8c \ub290\uaef4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud655\uc7a5 \uc2dc\uc5d0\ub3c4 \uad00\ub9ac\ud574\uc57c \ud560 \ud0c0\uc785\uc774 \ub298\uc5b4\ub098, \ubcf5\uc7a1\uc131\uc744 \uc99d\uac00\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ud37c\uc0ac\ub4dc-\ud328\ud134\uc758-\ud55c\uacc4",children:"\ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \ud55c\uacc4"}),"\n",(0,r.jsx)(n.p,{children:"\uc571 \uac1c\ubc1c \ucd08\uae30\uc5d0\ub294 \uad6c\uc870\uac00 \ube44\uad50\uc801 \ub2e8\uc21c\ud558\ubbc0\ub85c \ud37c\uc0ac\ub4dc \ud328\ud134\uc744 \ub3c4\uc785\ud558\ub294 \uac83\uc774 \ubd88\ud544\uc694\ud558\uac8c \ub290\uaef4\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \ud37c\uc0ac\ub4dc\ub97c \ub3c4\uc785\ud558\uba74 \uc0c8\ub85c\uc6b4 \uacc4\uce35\uc744 \ucd94\uac00\ud558\ub294 \uac83\uc774\ubbc0\ub85c, \uc2dc\uc2a4\ud15c\uc758 \uad00\ub9ac\ud574\uc57c \ud560 \ubd80\ubd84\uc774 \ub298\uc5b4\ub098\ub294 \ub2e8\uc810\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud37c\uc0ac\ub4dc \ud328\ud134\uc758 \uc0ac\uc6a9\uc740 \uc2e0\uc911\ud558\uac8c \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/jjunhaa0211/ADPattern-Swift/tree/main/GoF-FlyweightPattern",children:"\uc608\uc81c \ucf54\ub4dc"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);