"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[2316],{80843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>S,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(74848),i=n(28453);const r={title:"Set",slug:"/grammar/set",excerpt:"Set\ub97c \uc124\uba85\ud569\ub2c8\ub2e4."},c=void 0,l={id:"grammar/\ub370\uc774\ud130\ud0c0\uc785/set",title:"Set",description:"Swift\uc758 Set\uacfc NSSet: \uae4a\uc774 \uc774\ud574\ud558\uae30",source:"@site/docs/grammar/\ub370\uc774\ud130\ud0c0\uc785/set.md",sourceDirName:"grammar/\ub370\uc774\ud130\ud0c0\uc785",slug:"/grammar/set",permalink:"/Developer_Jun/docs/grammar/set",draft:!1,unlisted:!1,editUrl:"https://github.com/immutable/imx-docs/tree/main/docs/grammar/\ub370\uc774\ud130\ud0c0\uc785/set.md",tags:[],version:"current",frontMatter:{title:"Set",slug:"/grammar/set",excerpt:"Set\ub97c \uc124\uba85\ud569\ub2c8\ub2e4."},sidebar:"tutorialSidebar",previous:{title:"nil",permalink:"/Developer_Jun/docs/grammar/nil"},next:{title:"typealias",permalink:"/Developer_Jun/docs/grammar/typealias"}},d={},a=[{value:"Swift\uc758 Set\uacfc NSSet: \uae4a\uc774 \uc774\ud574\ud558\uae30",id:"swift\uc758-set\uacfc-nsset-\uae4a\uc774-\uc774\ud574\ud558\uae30",level:3},{value:"Swift\uc758 Set \uc0ac\uc6a9\ubc95",id:"swift\uc758-set-\uc0ac\uc6a9\ubc95",level:3},{value:"Set\uc758 \ub3d9\uc801 \uc870\uc791",id:"set\uc758-\ub3d9\uc801-\uc870\uc791",level:3},{value:"Set\uc758 \uc9d1\ud569 \uc5f0\uc0b0",id:"set\uc758-\uc9d1\ud569-\uc5f0\uc0b0",level:3},{value:"NSSet\uc758 \uc0ac\uc6a9",id:"nsset\uc758-\uc0ac\uc6a9",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:3}];function o(e){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"swift\uc758-set\uacfc-nsset-\uae4a\uc774-\uc774\ud574\ud558\uae30",children:"Swift\uc758 Set\uacfc NSSet: \uae4a\uc774 \uc774\ud574\ud558\uae30"}),"\n",(0,s.jsxs)(t.p,{children:["Swift\uc5d0\uc11c\xa0",(0,s.jsx)(t.code,{children:"Set"}),"\uc740 \uc720\uc77c\ud55c \uac12\ub4e4\uc744 \uc800\uc7a5\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \uceec\ub809\uc158 \ud0c0\uc785\uc785\ub2c8\ub2e4.\xa0",(0,s.jsx)(t.code,{children:"Set"}),"\uc740 \uc21c\uc11c\uac00 \uc5c6\uc73c\uba70, \uac01 \uc694\uc18c\ub294 \uace0\uc720\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 \uc9d1\ud569 \uc5f0\uc0b0\uc774\ub098, \uc911\ubcf5\uc744 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\ub294 \ub370\uc774\ud130\ub97c \uad00\ub9ac\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4. \ubc18\uba74,\xa0",(0,s.jsx)(t.code,{children:"NSSet"}),"\uc740 Objective-C\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc9d1\ud569 \ud0c0\uc785\uc73c\ub85c, Swift\uc758\xa0",(0,s.jsx)(t.code,{children:"Set"}),"\uacfc \ube44\uc2b7\ud558\uc9c0\ub9cc Objective-C\uc640\uc758 \ud638\ud658\uc131\uc744 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.h3,{id:"swift\uc758-set-\uc0ac\uc6a9\ubc95",children:"Swift\uc758 Set \uc0ac\uc6a9\ubc95"}),"\n",(0,s.jsxs)(t.p,{children:["Swift\uc758\xa0",(0,s.jsx)(t.code,{children:"Set"}),"\uc740 \uae30\ubcf8 \ub370\uc774\ud130 \ud0c0\uc785\uacfc \uc0ac\uc6a9\uc790 \uc815\uc758 \ub370\uc774\ud130 \ud0c0\uc785\uc744 \ud3ec\ud568\ud558\uc5ec,\xa0",(0,s.jsx)(t.code,{children:"Hashable"}),"\xa0\ud504\ub85c\ud1a0\ucf5c\uc744 \uc900\uc218\ud558\ub294 \ubaa8\ub4e0 \ud0c0\uc785\uc744 \uc694\uc18c\ub85c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294\xa0",(0,s.jsx)(t.code,{children:"Set"}),"\uc774 \uac01 \uc694\uc18c\uc758 \ud574\uc2dc \uac12\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc720\uc77c\uc131\uc744 \ubcf4\uc7a5\ud558\uace0, \ube60\ub974\uac8c \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:'var fruits = Set(["apple", "orange", "banana"])\n'})}),"\n",(0,s.jsx)(t.h3,{id:"set\uc758-\ub3d9\uc801-\uc870\uc791",children:"Set\uc758 \ub3d9\uc801 \uc870\uc791"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Set"}),"\uc740 \uc694\uc18c\ub97c \ucd94\uac00, \uc0ad\uc81c \ubc0f \uac80\uc0ac\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \uc720\uc5f0\ud558\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\uc694\uc18c \ucd94\uac00"}),":\xa0",(0,s.jsx)(t.code,{children:"insert(_:)"}),"\xa0\uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc0c8 \uc694\uc18c\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\uc694\uc18c \uc81c\uac70"}),":\xa0",(0,s.jsx)(t.code,{children:"remove(_:)"}),"\xa0\ub610\ub294\xa0",(0,s.jsx)(t.code,{children:"removeAll()"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc694\uc18c\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\uba64\ubc84\uc2ed \uac80\uc0ac"}),":\xa0",(0,s.jsx)(t.code,{children:"contains(_:)"}),"\xa0\uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b9\uc815 \uc694\uc18c\uac00\xa0",(0,s.jsx)(t.code,{children:"Set"}),"\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294\uc9c0 \uac80\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:'fruits.insert("mango")\nfruits.remove("apple")\nprint(fruits.contains("banana"))  // true\n'})}),"\n",(0,s.jsx)(t.h3,{id:"set\uc758-\uc9d1\ud569-\uc5f0\uc0b0",children:"Set\uc758 \uc9d1\ud569 \uc5f0\uc0b0"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Set"}),"\uc740 \uc218\ud559\uc801 \uc9d1\ud569 \uc5f0\uc0b0\uc744 \uc9c0\uc6d0\ud558\uc5ec, \ub450 \uc9d1\ud569 \uac04\uc758 \ud569\uc9d1\ud569, \uad50\uc9d1\ud569, \ucc28\uc9d1\ud569 \ub4f1\uc744 \uc27d\uac8c \uacc4\uc0b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ub370\uc774\ud130\uc758 \uad00\uacc4\ub97c \ubd84\uc11d\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:'let vegetables = Set(["carrot", "tomato", "pepper"])\nlet allItems = fruits.union(vegetables)\nlet commonItems = fruits.intersection(vegetables)\nlet uniqueFruits = fruits.subtracting(vegetables)\n'})}),"\n",(0,s.jsx)(t.h3,{id:"nsset\uc758-\uc0ac\uc6a9",children:"NSSet\uc758 \uc0ac\uc6a9"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"NSSet"}),"\uc740 Objective-C\uc758 \uc9d1\ud569 \ud0c0\uc785\uc73c\ub85c, Swift\uc758\xa0",(0,s.jsx)(t.code,{children:"Set"}),"\uacfc \ud638\ud658\ub429\ub2c8\ub2e4.\xa0",(0,s.jsx)(t.code,{children:"NSSet"}),"\uc740 \ubd88\ubcc0\uc131\uc744 \uac00\uc9c0\uba70, \uc694\uc18c\ub97c \ucd94\uac00\ud558\uac70\ub098 \uc81c\uac70\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ubcc0\uacbd \uac00\ub2a5\ud55c \uc9d1\ud569\uc744 \uc0ac\uc6a9\ud558\ub824\uba74\xa0",(0,s.jsx)(t.code,{children:"NSMutableSet"}),"\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.\xa0",(0,s.jsx)(t.code,{children:"NSSet"}),"\uc740 \uc8fc\ub85c Objective-C API\uc640\uc758 \uc0c1\ud638 \uc791\uc6a9\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:'import Foundation\n\nlet nsSet: NSSet = NSSet(array: ["apple", "orange", "banana"])\nlet mutableSet = NSMutableSet(set: nsSet)\nmutableSet.add("grape")\n'})}),"\n",(0,s.jsx)(t.h3,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,s.jsxs)(t.p,{children:["Swift\uc758\xa0",(0,s.jsx)(t.code,{children:"Set"}),"\uacfc Objective-C\uc758\xa0",(0,s.jsx)(t.code,{children:"NSSet"}),"\uc740 \uac01\uac01\uc758 \uc5b8\uc5b4 \ud658\uacbd\uc5d0 \ucd5c\uc801\ud654\ub41c \uc9d1\ud569 \ud0c0\uc785\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. Swift\uc5d0\uc11c\ub294\xa0",(0,s.jsx)(t.code,{children:"Set"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\uc758 \uc720\uc77c\uc131\uc744 \ubcf4\uc7a5\ud558\uace0, \uc9d1\ud569 \uc5f0\uc0b0\uc744 \ud1b5\ud574 \uac15\ub825\ud55c \ub370\uc774\ud130 \uad00\ub9ac \ubc0f \ubd84\uc11d \uae30\ub2a5\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\xa0",(0,s.jsx)(t.code,{children:"NSSet"}),"\uc740 Objective-C\uc640\uc758 \ud638\ud658\uc744 \ud544\uc694\ub85c \ud560 \ub54c \uc720\uc6a9\ud558\uba70, Swift\uc640 Objective-C\ub97c \ud63c\ud569\ud558\uc5ec \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \ub450 \ud0c0\uc785 \ubaa8\ub450 \uceec\ub809\uc158 \ub370\uc774\ud130\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \ub2e4\ub8e8\ub294 \ub370 \ud544\uc218\uc801\uc778 \ub3c4\uad6c\uc785\ub2c8\ub2e4."]})]})}function S(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);