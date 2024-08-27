"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[3992],{70307:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>g,toc:()=>f});var n=t(74848),o=t(28453),s=t(11470),a=t(19365),l=t(96540);const i=e=>{let{fileName:r="app_log",saveFileNum:t=10,dateFormat:n="yyyy/MM/dd-HH:mm:ss",logsDirectory:o="logs/",saveLevel:s="verbose",printLevel:a="verbose"}=e;const[i,u]=(0,l.useState)([]);(0,l.useEffect)((()=>{console.log(`Logs are being saved at ${o}`)}),[o]);const c=(e,r)=>{const t=`${(new Date).toISOString()} [${r.toUpperCase()}]: ${e}`;(e=>{const r=["verbose","debug","warning","error","test"];return r.indexOf(a)<=r.indexOf(e)})(r)&&console.log(t),(e=>{const r=["verbose","debug","warning","error","test"];return r.indexOf(s)<=r.indexOf(e)})(r)&&(u((e=>[...e,t])),console.log(`Saving log: ${t}`))};return{verbose:e=>c(e,"verbose"),debug:e=>c(e,"debug"),warning:e=>c(e,"warning"),error:e=>c(e,"error"),test:e=>c(e,"test")}},u=()=>{const e=(0,l.useRef)(i({fileName:"app_log",saveFileNum:10,dateFormat:"yyyy/MM/dd-HH:mm:ss",logsDirectory:"logs/",saveLevel:"verbose",printLevel:"verbose"})).current;return(0,l.useEffect)((()=>{e.verbose("Logger is now active!")}),[e]),(0,n.jsx)("div",{children:"Demo Test"})},c={title:"Logger",slug:"/logger",sidebar_position:12},d=void 0,g={id:"guides/component/Logger",title:"Logger",description:"MGLogger \uac00\uc774\ub4dc",source:"@site/docs/guides/component/Logger.mdx",sourceDirName:"guides/component",slug:"/logger",permalink:"/Developer_Jun/docs/logger",draft:!1,unlisted:!1,editUrl:"https://github.com/immutable/imx-docs/tree/main/docs/guides/component/Logger.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Logger",slug:"/logger",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Calendar",permalink:"/Developer_Jun/docs/calendar"},next:{title:"TextField",permalink:"/Developer_Jun/docs/textField"}},m={},f=[{value:"MGLogger \uac00\uc774\ub4dc",id:"mglogger-\uac00\uc774\ub4dc",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:3},{value:"\uc0ac\uc6a9 \ubc29\ubc95",id:"\uc0ac\uc6a9-\ubc29\ubc95",level:3},{value:"iOS (Swift) \uc0ac\uc6a9 \ubc29\ubc95",id:"ios-swift-\uc0ac\uc6a9-\ubc29\ubc95",level:3},{value:"FE (React) \uc0ac\uc6a9 \ubc29\ubc95",id:"fe-react-\uc0ac\uc6a9-\ubc29\ubc95",level:3}];function p(e){const r={blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"mglogger-\uac00\uc774\ub4dc",children:"MGLogger \uac00\uc774\ub4dc"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"MGLogger"}),"\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub2e4\uc591\ud55c \uc2ec\uac01\uc131 \uc218\uc900\uc758 \uba54\uc2dc\uc9c0\ub97c \uae30\ub85d\ud558\ub294 \ub85c\uae45 \uc720\ud2f8\ub9ac\ud2f0 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4. \uad6c\uc870\ud654\ub41c \ubc29\uc2dd\uc73c\ub85c \ub85c\uadf8\ub97c \uc800\uc7a5\ud558\uace0 \uc778\uc1c4\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(r.h3,{id:"\ud2b9\uc9d5",children:"\ud2b9\uc9d5"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\uc800\uc7a5 \ubc0f \uc778\uc1c4\ub97c \uc704\ud55c \uad6c\uc131 \uac00\ub2a5\ud55c \ub85c\uadf8 \ub808\ubca8 \uc9c0\uc6d0."}),"\n",(0,n.jsx)(r.li,{children:"\ub2e4\uc591\ud55c \ub85c\uadf8 \ub808\ubca8 \uc9c0\uc6d0: \uc0c1\uc138(verbose), \ub514\ubc84\uadf8(debug), \uacbd\uace0(warning), \uc624\ub958(error), \ud14c\uc2a4\ud2b8(test)."}),"\n",(0,n.jsx)(r.li,{children:"\ub85c\uadf8 \ud30c\uc77c \uc218\ub97c \uc81c\ud55c\ud560 \uc218 \uc788\ub294 \uc9c0\uc815\ub41c \ub514\ub809\ud1a0\ub9ac\uc5d0 \ub85c\uadf8\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(r.li,{children:"\uc804\uc6a9 \ub514\uc2a4\ud328\uce58 \ud050\ub97c \uc0ac\uc6a9\ud55c \uc2a4\ub808\ub4dc \uc548\uc804 \ub85c\uae45."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"\uc0ac\uc6a9-\ubc29\ubc95",children:"\uc0ac\uc6a9 \ubc29\ubc95"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsxs)(a.A,{value:"ios",label:"iOS (Swift)",default:!0,children:[(0,n.jsx)(r.h3,{id:"ios-swift-\uc0ac\uc6a9-\ubc29\ubc95",children:"iOS (Swift) \uc0ac\uc6a9 \ubc29\ubc95"}),(0,n.jsxs)(r.p,{children:["\uba3c\uc800 Swift \ud30c\uc77c\uc5d0 ",(0,n.jsx)(r.code,{children:"MGLogger"})," \ud074\ub798\uc2a4\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-swift",children:'   JNLogger.verbose("\uc0c1\uc138\ud55c \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4")\n   JNLogger.debug("\ub514\ubc84\uadf8 \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4")\n   JNLogger.warning("\uacbd\uace0 \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4")\n   JNLogger.error("\uc624\ub958 \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4")\n   JNLogger.test("\ud14c\uc2a4\ud2b8 \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4")\n'})}),(0,n.jsx)(r.p,{children:"\uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 Print\uac00 \ub429\ub2c8\ub2e4."}),(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"2024\ub144/08\uc6d4/02\uc77c-09:26:04\ucd08 \ud83d\udce2 [VERBOSE] [com.apple.main-thread] ButtonTableView.swift:27 showDetailViewController(for:)> Auth Button"}),"\n"]})]}),(0,n.jsxs)(a.A,{value:"fe",label:"FE (React)",children:[(0,n.jsx)(r.h3,{id:"fe-react-\uc0ac\uc6a9-\ubc29\ubc95",children:"FE (React) \uc0ac\uc6a9 \ubc29\ubc95"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"import React, { useEffect, useRef } from 'react';\nimport UseLogger from '../DesignSystem/UseLogger';\n\nconst LoggerDemo = () => {\n  const logger = useRef(UseLogger({\n    fileName: 'app_log',\n    saveFileNum: 10,\n    dateFormat: 'yyyy/MM/dd-HH:mm:ss',\n    logsDirectory: 'logs/',\n    saveLevel: 'verbose',\n    printLevel: 'verbose'\n  })).current;\n\n  useEffect(() => {\n    const message = \"Logger is now active!\";\n    logger.verbose(message);\n  }, [logger]);\n\n  return (\n    <div>Demo Test</div>\n  );\n}\n\nexport default LoggerDemo;\n"})})]})]}),"\n",(0,n.jsx)(u,{})]})}function b(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(18215);const o={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,a),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>j});var n=t(96540),o=t(18215),s=t(23104),a=t(56347),l=t(205),i=t(57485),u=t(31682),c=t(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:o}}=e;return{value:r,label:t,attributes:n,default:o}}))}(t);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const o=(0,a.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(o.location.search);r.set(s,e),o.replace({...o.location,search:r.toString()})}),[s,o])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:o}=e,s=g(e),[a,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[u,d]=f({queryString:t,groupId:o}),[p,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,s]=(0,c.Dv)(t);return[o,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),v=(()=>{const e=u??p;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var h=t(74848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=i.indexOf(r),o=l[t].value;o!==n&&(u(r),a(o))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,h.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,o.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function w(e){let{lazy:r,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=p(e);return(0,h.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,h.jsx)(x,{...r,...e}),(0,h.jsx)(w,{...r,...e})]})}function j(e){const r=(0,b.A)();return(0,h.jsx)(y,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);