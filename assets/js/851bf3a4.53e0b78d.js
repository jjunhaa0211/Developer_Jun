"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[8417],{92424:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var c=i(74848),s=i(28453);const n={title:"Framework\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790!",slug:"/iOS/tuist/chapterII/make-framework",excerpt:"Framework\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uba74\uc11c \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4!",sidebar_position:3},o="Framework \ub9cc\ub4e4\uc5b4\ubcf4\uae30",d={id:"iOS/tuist/chapter II/make-framework",title:"Framework\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790!",description:"Framework \ub9cc\ub4e4\uae30\ub97c \ud574\ubcfc \ud150\ub370 \uc5ec\uae30\uae4c\uc9c0 \uc77d\uc5b4\uc8fc\uc2e0\uac70 \uac10\uc0ac\ud569\ub2c8\ub2e4!!",source:"@site/docs/iOS/tuist/chapter II/make-framework.md",sourceDirName:"iOS/tuist/chapter II",slug:"/iOS/tuist/chapterII/make-framework",permalink:"/Developer_Jun/docs/iOS/tuist/chapterII/make-framework",draft:!1,unlisted:!1,editUrl:"https://github.com/immutable/imx-docs/tree/main/docs/iOS/tuist/chapter II/make-framework.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Framework\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790!",slug:"/iOS/tuist/chapterII/make-framework",excerpt:"Framework\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uba74\uc11c \ubc30\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4!",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Framework?",permalink:"/Developer_Jun/docs/iOS/tuist/chapterII/framework-description"},next:{title:"binaryfile?",permalink:"/Developer_Jun/docs/iOS/tuist/chapterII/binaryfile-description"}},t={},l=[{value:"Mach-O Type?",id:"mach-o-type",level:2},{value:"Embed vs Do Not Embed?",id:"embed-vs-do-not-embed",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:3},{value:"Static Framework",id:"static-framework",level:2},{value:"<strong><strong>Dynamic</strong></strong> Framework",id:"dynamic-framework",level:2}];function h(e){const r={blockquote:"blockquote",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.header,{children:(0,c.jsx)(r.h1,{id:"framework-\ub9cc\ub4e4\uc5b4\ubcf4\uae30",children:"Framework \ub9cc\ub4e4\uc5b4\ubcf4\uae30"})}),"\n",(0,c.jsxs)(r.p,{children:["Framework \ub9cc\ub4e4\uae30\ub97c \ud574\ubcfc \ud150\ub370 \uc5ec\uae30\uae4c\uc9c0 \uc77d\uc5b4\uc8fc\uc2e0\uac70 \uac10\uc0ac\ud569\ub2c8\ub2e4!! ",(0,c.jsx)("br",{}),"\n\uc5f4\uc2ec\ud788 \uc815\ub9ac\ud55c \ub9cc\ud07c \ub3c4\uc6c0\uc774 \ub418\uae30\ub97c \ubc14\ub798\uc694! ",(0,c.jsx)("br",{}),"\n\uc77c\ub2e8 Xcode \uc2e4\ud589 \ud6c4 Framework\ub97c \ub9cc\ub4e4\uc5b4 \uc8fc\uc138\uc694. ",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/6yca61722864764.png",alt:"",border:"0"}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/H96c41722864784.png",alt:"",border:"0"}),"\n",(0,c.jsx)(r.p,{children:"\uc704\uc640 \uac19\uc774 \ub098\uc654\ub2e4\uba74 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ub9cc\ub4e4\uc900\ube44\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,c.jsx)(r.p,{children:"\uc800\ud76c\ub294 \uac04\ub2e8\ud558\uac8c \uc720\uc800 \uc774\ub984\uc744 \ub123\uc73c\uba74 Hello\ub97c \ucd9c\ub825\ud574\uc8fc\ub294 Hello \ud074\ub9ac\uc2a4\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/l2mtO1722864801.png",alt:"",border:"0"}),"\n",(0,c.jsx)(r.p,{children:"\uadf8\ub9ac\uace0 \uc774\uc81c \uc0ac\uc6a9\ud558\ub294 \ubc95\uc5d0 \ub300\ud574\uc11c \uc54c\ub824\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(r.p,{children:["\uc77c\ub2e8 \uc790\uc2e0\uc758 \ub2e4\ub978 \ud504\ub85c\uc81d\ud2b8\uc5d0 ",(0,c.jsx)(r.code,{children:"Framework"}),"\ub97c \ucd94\uac00 \ud574\uc904 \uac83\uc778\ub370 \uc9c0\uae08 \uc774 \ud504\ub85c\uc81d\ud2b8 \ub9d0\uace0 \ub2e4\uc2dc \ud504\ub85c\uc81d\ud2b8 \ub9cc\ub4dc\ub294 \uacf3\uc73c\ub85c \ub3cc\uc544\uac00\uc11c \ub2f9\uc2e0\ub9cc\uc5d0 \uc0c8\ub85c\uc6b4 Xcode \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\uc138\uc694!"]}),"\n",(0,c.jsxs)(r.p,{children:["\uadf8\ub7ec\uba74 \uae30\ubcf8 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c ",(0,c.jsx)(r.code,{children:"Add Files to \u201cyour project\u201d"})," \ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/kg7AN1722864820.png",alt:"",border:"0"}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/miBDR1722864840.png",alt:"",border:"0"}),"\n",(0,c.jsxs)(r.p,{children:["\uc774\ub807\uac8c \ub2f9\uc2e0\uc774 \ub9cc\ub4e0 ",(0,c.jsx)(r.code,{children:"Framework"}),"\uc758 ",(0,c.jsx)(r.code,{children:"xcdeproj"}),"\ub97c \ucd94\uac00\ud574\uc8fc\uc138\uc694"]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/oE0Uv1722864861.png",alt:"",border:"0"}),"\n",(0,c.jsxs)(r.p,{children:["\uc774\ub807\uac8c \ub4e4\uc5b4\uc654\ub2e4\uba74 \uc131\uacf5\uc785\ub2c8\ub2e4. \ud639\uc2dc\ub098 \ud574\uc11c \ub9d0\ud558\ub294 \uac74\ub370\u2026 \ud639\uc2dc ",(0,c.jsx)(r.code,{children:"TestFramework"}),"\ub97c \ucf1c\ub450\uace0 \ucd94\uac00\ub97c \ub204\ub974\uba74 \ud654\uc0b4\ud45c\uac00 \ub728\uc9c0 \uc54a\uc744 \uac83 \uc785\ub2c8\ub2e4. \ub2f9\ud669\ud558\uc9c0 \ub9c8\uc2dc\uace0 Xcode \ub044\uc2dc\uace0 \ub2e4\uc2dc Project \uc5f4\uc5b4\uc11c \ud504\ub808\uc784\uc6cc\ud06c \ucd94\uac00\ud558\uc2dc\uba74 \uc815\uc0c1 \uc791\ub3d9 \ub420 \uac83\uc785\ub2c8\ub2e4!"]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/fCi4f1722864882.png",alt:"",border:"0"}),"\n",(0,c.jsx)(r.p,{children:"\uc774\ucabd\uc73c\ub85c \uac00\uc11c Frameworks, Libraries, and Embedded Content\ub97c \ucd94\uac00\ud574\uc90d\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(r.ul,{children:["\n",(0,c.jsx)(r.li,{children:"\ubc84\ud2bc\uc744 \ub204\ub974\uc2dc\uace0 \uc774\ub807\uac8c \ud574\uc8fc\uc138\uc694"}),"\n"]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/BpvDA1722864908.png",alt:"",border:"0"}),"\n",(0,c.jsxs)(r.p,{children:["\uc774\uc81c \ud3c9\uc18c\uc5d0 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc0ac\uc6a9\ud558\ub4ef ",(0,c.jsx)(r.code,{children:"import"})," \ud574\uc11c \uc0ac\uc6a9\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/yMPE91722864925.png",alt:"",border:"0"}),"\n",(0,c.jsxs)(r.p,{children:["\uc774\ub807\uac8c \uc77c\ub2e8\uc740 ",(0,c.jsx)(r.code,{children:"Framework"}),"\ub97c \ub9cc\ub4dc\ub294 \ubc95\uc5d0 \ub300\ud574\uc11c \ubc30\uc6cc\ubcf4\uc558\ub294\ub370"]}),"\n",(0,c.jsxs)(r.p,{children:["\uc800\ud76c\ub294 \uc800\ubc88 \ucc55\ud130\uc5d0\uc11c ",(0,c.jsx)(r.code,{children:"Static Framework"}),"\uc640 ",(0,c.jsx)(r.code,{children:"Dynamic Framework"}),"\ub97c \uc548\ud574\ubcf4\uba74 \uc12d\uc12d\ud558\ub2c8\uae4c \ud55c\ubc88 \ud574\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(r.p,{children:"\uc77c\ub2e8 \uc54c\uace0 \uac00\uc57c\ud558\ub294 \uc0ac\uc804 \uc9c0\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4!"}),"\n",(0,c.jsx)(r.h2,{id:"mach-o-type",children:"Mach-O Type?"}),"\n",(0,c.jsxs)(r.p,{children:["Xcode\uc5d0\uc11c ",(0,c.jsx)(r.code,{children:"Static"}),"\uacfc ",(0,c.jsx)(r.code,{children:"Dynamic"}),"\uc758 \ucc28\uc774\ub97c \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 ",(0,c.jsx)(r.code,{children:"Mach-O Type"}),"\ub97c \ubcc0\uacbd\ud574\uc57c\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:["\uc5b4\ub824\uc6b4 \uac1c\ub150\uc740 \uc544\ub2c8\uace0 \uc5b4\ub5a4 ",(0,c.jsx)(r.code,{children:"Framework"}),"\ub97c \uc0ac\uc6a9\ud560 \uac83\uc778\uc9c0 \ubcc0\uacbd\ud574\uc904 \uc218 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8 \uc138\ud305 \uc7a5\uc18c\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:["\ud574\ub2f9 \uc138\ud305\uc740 ",(0,c.jsx)(r.code,{children:"Executable"}),", ",(0,c.jsx)(r.code,{children:"Dynamic Library"}),", ",(0,c.jsx)(r.code,{children:"Bundle"}),", ",(0,c.jsx)(r.code,{children:"Static Library"}),", ",(0,c.jsx)(r.code,{children:"Relocatable Object File"})," \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(r.h2,{id:"embed-vs-do-not-embed",children:"Embed vs Do Not Embed?"}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/JV2Ge1722864949.png",alt:"",border:"0"}),"\n",(0,c.jsxs)(r.p,{children:["\uc774\uac83\ub3c4 \uc815\ub9d0 \uc911\uc694\ud55c\ub370\uc694 \uc800\ucc98\ub7fc \uba4b\ubaa8\ub974\uace0 \u201c\ucf54\uce74\ucf5c\ub77c \ub9db\uc788\ub2e4~\ub9db\uc788\u2026\u201c \uac08\uae30\uc2dc\uba74 \ub098\uc911\uc5d0 \uc774\uc720\ub3c4 \ubaa8\ub974\uace0 \ud06c\ub7ec\uc26c\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. ",(0,c.jsx)(r.code,{children:"Embed"}),"\uc640 ",(0,c.jsx)(r.code,{children:"Do Not Embed"}),"\ub294 \uc704\uc5d0\uc11c ",(0,c.jsx)(r.code,{children:"Framework"}),"\ub97c \ub9cc\ub4e4 \ub54c \ucd94\uac00 \uc791\uc5c5\uc5d0\uc11c \ubcf4\uc558\ub358 \uac83\uc778\ub370\uc694. \ud55c\ubc88 \uc54c\uc544\ubcf4\ub3c4\ub85d \ud558\uc8e0"]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"embed"}),"\ub294 \uc774 ",(0,c.jsx)(r.code,{children:"Framework"}),"\ub97c \uc571\uc5d0 \ub123\uc5b4\ub77c\ub294 \ub73b\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:["\ubc18\uba74 ",(0,c.jsx)(r.code,{children:"Do Not Embed"}),"\ub294 \uc774 ",(0,c.jsx)(r.code,{children:"Framework"}),"\ub97c \uc571\uc5d0 \ub123\uc9c0 \ub9d0\ub77c\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.blockquote,{children:["\n",(0,c.jsx)(r.p,{children:"\uadf8\ub798\uc11c \uc774\uac8c \ubb50\uac00\uc911\uc694\ud55c\ub370?"}),"\n"]}),"\n",(0,c.jsxs)(r.p,{children:["\ud328\ud0a4\uc9c0\uac00 ",(0,c.jsx)(r.code,{children:"Framework"}),"\ub85c \ubd88\ub9ac\ub294 \ud3f4\ub354\ub97c \ud3ec\ud568\ud558\ub294\uc9c0\uc758 \uc5ec\ubd80\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Dynamic"}),"\uc740 \ub7f0\ud0c0\uc784\uc5d0 \uc758\uc874\ud558\uac8c \ub418\ub294\ub370 \ub9cc\uc57d ",(0,c.jsx)(r.code,{children:"Do Not Embed"}),"\ub97c \ud558\uac8c\ub418\uba74 \ub7f0\ud0c0\uc784\uc5d0 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud638\ucd9c\ud560 \ud544\uc694\uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc5d0\ub7ec\uac00 \ub0a9\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:["\ud558\uc9c0\ub9cc \ubc11\uc5d0\uc11c \uc790\uc138\ud788 \uc124\uba85\ud558\uaca0\uc9c0\ub9cc ",(0,c.jsx)(r.code,{children:"Static"}),"\uc740 \uc774\ubbf8 \ube4c\ub4dc\uc5d0 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uace0\uc815\uc801\uc73c\ub85c \ub123\uc5b4\uc8fc\uc5c8\uae30 \ub54c\ubb38\uc5d0  ",(0,c.jsx)(r.code,{children:"Do Not Embed"}),"\ub97c \ud574\uc8fc\uc154\uc57c \ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc774\ub807\uac8c \ud558\uc9c0 \uc54a\uc73c\uba74 \ub2e4\uc2dc \uc784\ubca0\ub4dc\ud558\ub294 \uac83\uc740 \uc911\ubcf5\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(r.h3,{id:"\uc815\ub9ac",children:"\uc815\ub9ac"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Dynamic Library"}),"\ub294 ",(0,c.jsx)(r.code,{children:"Embed"}),"\ub97c \ud574\uc8fc\uc5b4\uc57c\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Static Library"}),"\ub294 ",(0,c.jsx)(r.code,{children:"Do Not Embed"}),"\ub97c \ud574\uc57c\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(r.p,{children:"\uadf8\ub7ec\uba74 \ub2e4\uc2dc \uc2e4\uc2b5 \uc608\uc2dc\ub85c \uac00\ubcfc\uae4c\uc694?"}),"\n",(0,c.jsx)(r.h2,{id:"static-framework",children:"Static Framework"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Framework"}),"\ub97c \ub9cc\ub4e4\uba74 ",(0,c.jsx)(r.code,{children:"Mach-O Type"}),"\uc774 ",(0,c.jsx)(r.code,{children:"Dynamic Library"}),"\ub85c \ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/SlmGY1722864971.png",alt:"",border:"0"}),"\n",(0,c.jsxs)(r.p,{children:["\uc5ec\uae30\uc11c \uc6b0\ub9ac\ub294 ",(0,c.jsx)(r.code,{children:"Static Library"})," \ub85c \ubc14\uafb8\uc5b4\uc90d\ub2c8\ub2e4."]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/GTZIe1722864993.png",alt:"",border:"0"}),"\n",(0,c.jsx)(r.p,{children:"\uc704 Products \ud30c\uc77c\uc744 \uc5f4\uc5b4\ubcf4\uba74"}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/KY7fB1722865016.png",alt:"",border:"0"}),"\n",(0,c.jsx)(r.p,{children:"Products \uc758 \uad6c\uc870\ub97c \ubcf4\uc2e4 \uc218 \uc788\ub294\ub370 \uc5ec\uae30\uc11c \uc808\ub300\ub85c \ub204\ub974\uba74 \uc798\ubabb\ub420 \uac83 \uac19\uc740 \uce5c\uad6c\ub97c \uc6b0\ud074\ub9ad \ud6c4 \uc790\uc138\ud788\ubcf4\uae30\ub97c \ub204\ub974\uba74 \uc544\ub798\uc640 \uac19\uc740 \uacb0\uacfc\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/BVvlW1722865045.png",alt:"",border:"0"}),"\n",(0,c.jsx)(r.p,{children:"\uc9dc\ub780~! \uc548\uc5d0 \ub0b4\ubd80 \uc18c\uc2a4\ub97c \ub72f\uc5b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(r.p,{children:["\uc5ec\uae30\uc11c \ub72f\uc5b4\ubcf4\uba74 \uc800\ud76c\ub294 ",(0,c.jsx)(r.code,{children:"TestFramework"}),"\ub97c ",(0,c.jsx)(r.code,{children:"Static"}),"\uc73c\ub85c \ube4c\ub4dc \ud574\ubcf4\uc558\ub294\ub370 ",(0,c.jsx)(r.code,{children:"TestFrameworkProject"}),"\uc744 \ube4c\ub4dc \ud560 \ub54c ",(0,c.jsx)(r.code,{children:"TestFramework"})," \ucf54\ub4dc\ub97c \uc804\ubd80 \ud3ec\ud568\ud55c ",(0,c.jsx)(r.code,{children:"TestFrameworkProject"}),"\uac00 \ub9cc\ub4e4\uc5b4\uc9c0\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:["\uadf8\ub7ec\ub2c8\uae4c ",(0,c.jsx)(r.code,{children:"Static Library"}),"\ub97c \uc124\uba85\ud560\ub54c \uc571\uc774 \ucee4\uc9c0\ub294 \uc774\uc720\ub97c \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ub9cc\uc57d ",(0,c.jsx)(r.code,{children:"Static Library"}),"\uc5d0 ",(0,c.jsx)(r.code,{children:"Do Not Embed"}),"\ub97c \ud558\uac8c\ub418\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?"]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/4MXyf1722865062.png",alt:"",border:"0"}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/MIRu91722865080.png",alt:"",border:"0"}),"\n",(0,c.jsxs)(r.p,{children:["\uc774\ub807\uac8c \ud558\uba74 ",(0,c.jsx)(r.code,{children:"Frameworks"})," \ud30c\uc77c\uc774 \uc5c6\uc5b4\uc9d1\ub2c8\ub2e4"]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Do Not Embed"}),"\ub294 \ub9d0 \uadf8\ub300\ub85c \u201c\uc774 \ud504\ub808\uc784\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \ucf58\ud150\uce20\ub97c main application\uacfc \ud568\uacc4 \ub2f4\uc9c0 \ub9d0\uc544\ub77c\u201d\uc785\ub2c8\ub2e4. \ub54c\ubb38\uc5d0 application package\uac00 ",(0,c.jsx)(r.code,{children:"frameworks"})," \ud3f4\ub354 \uc548\uc5d0 \ud574\ub2f9 \ud504\ub808\uc784\uc6cc\ud06c \ucf54\ub4dc\ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Static Framework"}),"\uc5d0\uc11c ",(0,c.jsx)(r.code,{children:"Embeded & Sign"}),"\uc744 \ud558\uba74 \uc548\ub418\ub294 \uc774\uc720\ub97c \uc54c\ub824\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Framework"}),"\uc758 \ud30c\uc77c\uc774 \uc0dd\uae30\uba74\uc11c ",(0,c.jsx)(r.code,{children:"excutable binary"})," \ud30c\uc77c\uc774 \ubcc4\ub3c4\ub85c \uc0dd\uc131\ub418\uc9c0\ub9cc \uc774\ubbf8 \uc571\uc758 ",(0,c.jsx)(r.code,{children:"excuable binary"}),"\ud30c\uc77c \uc548\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc5b4\uc11c \uc911\ubcf5\uc73c\ub85c \ucc98\ub9ac\ub418\ub294 \uac83\uc774\ub77c\uc11c \uacb0\uad6d\uc5d0 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4 \ub54c\ubb38\uc5d0 ",(0,c.jsx)(r.code,{children:"Static Framework"}),"\ub97c \ud560\ub54c\ub294 ",(0,c.jsx)(r.code,{children:"Do Not Embed"}),"\ub85c \ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:["\ubc8c\uc368 \ubc18\uc774 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4. \ucc38\uc27d\uc8e0\u2026\u3160\u315c \uc5b4\ub835\uc9c0\ub9cc \uadf8\ub798\ub3c4 ",(0,c.jsx)(r.del,{children:"\ud560\ub9cc\ud558\ub2c8\uae4c"})," \ubc14\ub85c ",(0,c.jsx)(r.code,{children:"Dynamic Framework"}),"\ub97c \ud574\ubcf4\ub3c4\ub85d \ud558\uc8e0~"]}),"\n",(0,c.jsxs)(r.h2,{id:"dynamic-framework",children:[(0,c.jsx)(r.strong,{children:(0,c.jsx)(r.strong,{children:"Dynamic"})})," Framework"]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Framework"}),"\ub97c \ub9cc\ub4e4\uba74 ",(0,c.jsx)(r.code,{children:"Mach-O Type"}),"\uc774 ",(0,c.jsx)(r.code,{children:"Dynamic"}),"\uc73c\ub85c \ub2e4\uc2dc \ubc14\uafd4\uc8fc\uc2dc\uba74\ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/EeTJe1722865099.png",alt:"",border:"0"}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/CceAp1722865118.png",alt:"",border:"0"}),"\n",(0,c.jsxs)(r.p,{children:["\uc704\uc5d0\uc11c ",(0,c.jsx)(r.code,{children:"Embed & Sign"}),"\uc744 \ud558\uac8c \ub418\uba74 \uc544\ub798\uc640 \uac19\uc740 \ud30c\uc77c\uad6c\uc870\uac00 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."]}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/VZ0EX1722865137.png",alt:"",border:"0"}),"\n",(0,c.jsx)(r.p,{children:"\ud558\uc9c0\ub9cc Do Not Embed\ub97c \ud558\uac8c \ub418\uba74"}),"\n",(0,c.jsx)("img",{src:"https://i.imghippo.com/files/NDKbV1722865154.png",alt:"",border:"0"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"Dynamic Framework"}),"\uc758 \uacbd\uc6b0\uc5d0\ub294 \ub7f0\ud0c0\uc784 \uc911\uc5d0 ",(0,c.jsx)(r.code,{children:"Framework"}),"\uc758 \ub808\ud37c\ub7f0\uc2a4\ub85c \ucc3e\ub294\ub2e4\ud588\ub294\ub370 ",(0,c.jsx)(r.code,{children:"excutable binary"}),"\uac00 \uc5c6\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. \ub54c\ubb38\uc5d0 \ube4c\ub4dc\ub294 \uac00\ub2a5\ud558\uc9c0\ub9cc \uc2e4\ud589 \uc2dc\ud0a4\uba74 \ub7f0\ud0c0\uc784 \uc911\uc5d0 \ub9c1\ud06c\ub97c \ucc3e\uae30 \uc704\ud574 ",(0,c.jsx)(r.code,{children:"Frameworks"}),"\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:["\uc774 \ub54c\ubb38\uc5d0 ",(0,c.jsx)(r.code,{children:"Dynamic Framework"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 ",(0,c.jsx)(r.code,{children:"Embeded & Sign"}),"\uc744 \uc120\ud0dd\ud574\uc57c \ubcc4\ub3c4\uc758 ",(0,c.jsx)(r.code,{children:"Excutable binary"})," \ud30c\uc77c\uc774 \ud3ec\ud568\ud560 \uc218 \uc788\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(r.p,{children:["\uc624\ub298\uc740 ",(0,c.jsx)(r.code,{children:"Framework"}),"\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uace0 \ub72f\uc5b4\ubcf4\uba74\uc11c \uc7a5\ub2e8\uc810\uc774 \uc65c \uadf8\ub7f0\uc9c0\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 ",(0,c.jsx)(r.code,{children:"Tuist"}),"\ub97c \ud558\uac8c\ub418\uba74 \uc774\uc640 \uac19\uc740 \uac83\ub4e4\uc744 \ubb34\uc218\uc758 \ub9ce\uc774 \ubcf4\uac8c \ub420 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \uc800\ub294 \ubaa8\ub974\uace0 \ud558\ub294 \uac83\ubcf4\ub2e4\ub294 \uc774\ub7f0\uac8c \uc788\uace0 \uc774\ub798\uc11c \uc774\ub807\uad6c\ub098 \uc815\ub3c4\ub294 \uc54c\uace0 \uac19\uc73c\uba74 \ud569\ub2c8\ub2e4. \ub3c4\uc6c0\uc774 \ub418\uc5c8\ub2e4\uba74 \uc2a4\ud0c0\ub97c \ub20c\ub7ec\uc8fc\uc138\uc694!"]})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>o,x:()=>d});var c=i(96540);const s={},n=c.createContext(s);function o(e){const r=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(n.Provider,{value:r},e.children)}}}]);