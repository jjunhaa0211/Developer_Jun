"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[5084],{10963:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var s=r(74848),t=r(28453);const l={title:"empty?",slug:"/rxswift/observable/empty",excerpt:"empty?",sidebar_position:6},c=void 0,i={id:"rxswift_Junha/observable/empty",title:"empty?",description:"empty\ub294 \uc5b4\ub5a0\ud55c \ud56d\ubaa9\ub3c4 \ubc29\ucd9c\ud558\uc9c0 \uc54a\uace0, \uc989\uc2dc onCompleted()\ub97c \ud638\ucd9c\ud558\uc5ec\uc11c \uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc\ub418\ub294 Observable\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.",source:"@site/docs/rxswift_Junha/observable/empty.md",sourceDirName:"rxswift_Junha/observable",slug:"/rxswift/observable/empty",permalink:"/Developer_Jun/docs/rxswift/observable/empty",draft:!1,unlisted:!1,editUrl:"https://github.com/immutable/imx-docs/tree/main/docs/rxswift_Junha/observable/empty.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"empty?",slug:"/rxswift/observable/empty",excerpt:"empty?",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"range?",permalink:"/Developer_Jun/docs/rxswift/observable/range"},next:{title:"never?",permalink:"/Developer_Jun/docs/rxswift/observable/never"}},o={},d=[{value:"\uc0ac\uc6a9\ubc29\ubc95",id:"\uc0ac\uc6a9\ubc29\ubc95",level:3},{value:"\uad6c\ud604\ubd80",id:"\uad6c\ud604\ubd80",level:3},{value:"\uc8fc\uc758",id:"\uc8fc\uc758",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"empty"}),"\ub294 \uc5b4\ub5a0\ud55c ",(0,s.jsx)(n.strong,{children:"\ud56d\ubaa9\ub3c4 \ubc29\ucd9c\ud558\uc9c0 \uc54a\uace0"}),", ",(0,s.jsx)(n.strong,{children:"\uc989\uc2dc onCompleted()\ub97c \ud638\ucd9c"}),"\ud558\uc5ec\uc11c ",(0,s.jsx)(n.strong,{children:"\uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc"}),"\ub418\ub294 Observable\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:"https://i.imghippo.com/files/B3cj61724378910.png",alt:"",border:"0"}),"\n",(0,s.jsxs)(n.p,{children:["\ub9c8\ube14\ub2e4\uc774\uc5b4\uadf8\ub7a8\uc744 \ubcf4\uc2dc\uba74 \uc5b4\ub5a0\ud55c \uc774\ubca4\ud2b8\ub3c4 \ubc29\ucd9c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc ",(0,s.jsx)(n.code,{children:"Empty Operator"}),"\ub97c \ud1b5\ud574 ",(0,s.jsx)(n.code,{children:"Observable"}),"\uc744 \uc0dd\uc131\ud560 \uacbd\uc6b0, ",(0,s.jsx)(n.code,{children:"onCompleted()"})," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c \ud6c4 \uc2a4\ud2b8\ub9bc\uc774 \uc815\uc0c1 \uc885\ub8cc \ub429\ub2c8\ub2e4. \ub610\ud55c \uc5b4\ub5a4 \ud56d\ubaa9\ub3c4 \ubc29\ucd9c\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 ",(0,s.jsx)(n.code,{children:"onNext"}),"\uc758 \uc774\ubca4\ud2b8\ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,s.jsx)(n.code,{children:"onComplete"}),"\uac00 \ubc29\ucd9c\ub418\uc5b4 \uc2a4\ud2b8\ub9bc\uc774 \uc815\uc0c1 \uc885\ub8cc\ub429\ub2c8\ub2e4. \uc989 \ube48 \uac12\uc73c\ub85c \uc885\ub8cc\uc2dc\ud0a4\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"\uc0ac\uc6a9\ubc29\ubc95",children:"\uc0ac\uc6a9\ubc29\ubc95"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RxSwift"}),"\ub97c \uc0ac\uc6a9\ud558\ub2e4\ubcf4\uba74 \ucd08\uae30\ud654\ud558\uace0 \uc2f6\uc744 \uacbd\uc6b0\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc544\ub798\uc758 \ucc98\ub7fc \ucd08\uae30\ud654 \ud558\uba74 \uc5d0\ub7ec\uac00 \ub098\uac8c\ub429\ub2c8\ub2e4:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"let emptyObservable: Observable = Observable<Any>()\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"'Observable<Element>' initializer is inaccessible due to 'internal' protection level"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\ub97c \ucd08\uae30\ud654 \ud558\ub294 \ubc29\ubc95\uc740 ",(0,s.jsx)(n.code,{children:"empty()"}),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uc544\ub798 \ucf54\ub4dc\ucc98\ub7fc \ube48 ",(0,s.jsx)(n.code,{children:"Observable"}),"\uc744 \uc120\uc5b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"let emptyObservable: Observable = Observable<Any>.empty()\n\nemptyObservable\n    .subscribe { print($0) }\n    .disposed(by: disposeBag)\n    \n// completed\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc704 \ucf54\ub4dc\ucc98\ub7fc ",(0,s.jsx)(n.code,{children:"Observable"}),"\uc744 \uc0ac\uc6a9\ud574\uc11c \ucd08\uae30\ud654 \uc2dc\ud0ac \uacbd\uc6b0\ub3c4 \uc788\uc9c0\ub9cc \ub9c8\ube14\ub2e4\uc774\uc5b4\uadf8\ub7a8 \ucabd\uc5d0\uc11c \uc124\uba85\ud55c \uac83\uacfc \uac19\uc774 ",(0,s.jsx)(n.code,{children:"completed"}),"\ub418\ub294 ",(0,s.jsx)(n.code,{children:"Observable"}),"\uc774\ub098 ",(0,s.jsx)(n.code,{children:"element"}),"\uac00 0\uac1c\uc778 ",(0,s.jsx)(n.code,{children:"Observable"}),"\uc744 \uc758\ub3c4\uc801\uc73c\ub85c \ud638\ucd9c\ud558\uace0 \uc2f6\uc744 \ub54c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uacb0\ub860\uc801\uc73c\ub85c \uc989\uc2dc \uc885\ub8cc\ub418\ub294 ",(0,s.jsx)(n.code,{children:"Observable"}),"\uc744 \ubc18\ud658\ud558\uace0 \uc2f6\uc744 \ub54c\ub098, \uc758\ub3c4\uc801\uc73c\ub85c \ube48 \uac12\uc744 \ub0b4\ubc49\ub3c4\ub85d \ud558\uace0 \uc2f6\uc744 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\ub294 \uc8fc\ub85c \ube48 ",(0,s.jsx)(n.code,{children:"Observable"}),"\uc744 \ub9cc\ub4e4\uace0 \uc2f6\uac70\ub098 ",(0,s.jsx)(n.code,{children:"Observable"}),"\uc744 \ucd08\uae30\ud654\ud558\uace0 \uc2f6\uc744 \ub54c \ub610\ub294 \uc989\uc2dc \uc885\ub8cc\ud558\uace0 \uc2f6\uac70\ub098 \uc758\ub3c4\uc801\uc73c\ub85c 0\uac1c\uc758 ",(0,s.jsx)(n.code,{children:"Observable"}),"\uc744 ",(0,s.jsx)(n.code,{children:"return"})," \ud558\uace0 \uc2f6\uc740 \uacbd\uc6b0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"\uad6c\ud604\ubd80",children:"\uad6c\ud604\ubd80"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"public static func empty() -> Observable<Element> {\n    EmptyProducer<Element>()\n}\n\nfinal private class EmptyProducer<Element>: Producer<Element> {\n    override func subscribe<Observer: ObserverType>(_ observer: Observer) -> Disposable where Observer.Element == Element {\n        observer.on(.completed)\n        return Disposables.create()\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"EmptyProduce"}),"\uc5d0\uc11c \ubcf4\uba74 ",(0,s.jsx)(n.code,{children:"onCompleted"}),"\ub97c \ucc98\ub9ac\ud574\uc8fc\uace0 \uc788\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"\uc8fc\uc758",children:"\uc8fc\uc758"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"empty"}),"\ub294 \ud0c0\uc785\uc744 \ucd94\ub860 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub54c\ubb38\uc5d0 ",(0,s.jsx)(n.code,{children:"empty"}),"\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \ud0c0\uc785\uc744 \ud544\uc218\ub85c \uba85\uc2dc \ud574\uc8fc\uc5b4\uc57c\ud569\ub2c8\ub2e4."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var s=r(96540);const t={},l=s.createContext(t);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);