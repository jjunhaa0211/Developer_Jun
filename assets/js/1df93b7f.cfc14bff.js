"use strict";(self.webpackChunkimx_docs=self.webpackChunkimx_docs||[]).push([[4583],{46975:(t,e,i)=>{i.r(e),i.d(e,{default:()=>z});var r=i(20053),o=i(96540),n=i(41957);const a="root_brRS",l="heroTitle_qg2I",s="displayForExtraSmall_f3Wz",d="communityCardSection_fyQI",c="title_GqtP";var m=i(33540),h=i(74848);const x=m.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
`,p=m.Ay.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  color: var(--ifm-color-home-text-primary);
`,g=m.Ay.p`
  font-size: 16px;
  margin: 0;
  text-align: center;
  color: var(--ifm-color-home-text-primary);
`,u=t=>{let{title:e,subtitle:i,className:r}=t;return(0,h.jsxs)(x,{children:[(0,h.jsx)(p,{className:r,children:e}),i&&(0,h.jsx)(g,{children:i})]})};var f=i(95293);const b=m.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 123px;
  width: 100%;
  max-width: 1024px;
`,v=m.Ay.p`
  font-family: inherit;
  color: var(--ifm-color-home-text-primary);
  text-align: left;
  margin: 0;
`,y=()=>{(0,f.G)();return(0,h.jsx)(b,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(v,{children:"\uc800\ub294 \uc6b0\uc8fc\ucd5c\uac15 \uac1c\ubc1c\uc790\uac00 \ub420 \ubc15\uc900\ud558\uc785\ub2c8\ub2e4"}),(0,h.jsx)("a",{href:"https://hits.seeyoufarm.com",children:(0,h.jsx)("img",{src:"https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjjunhaa0211.github.io%2FDeveloper_Jun%2F&count_bg=%23007AF4&title_bg=%23191919&icon=smugmug.svg&icon_color=%23007AF4&title=JN&edge_flat=true"})})]})})},j=m.Ay.button`
  width: fit-content;
  height: 48px;
  cursor: pointer;
  border-radius: ${t=>"default"===t.variant?"48px":"8px"};
  color: var(--ifm-color-home-text-primary);
  font-family: inherit;
  font-size: inherit;

  ${t=>"default"===t.variant&&m.AH`
    padding-left: 28px;
    padding-right: 28px;
    border: 2px solid var(--ifm-color-home-text-primary);
    background: transparent;

    &:hover {
      border-width: 3px;
      padding-left: 27px;
      padding-right: 27px;
    }

    &:active {
      border-width: 4px;
      padding-left: 26px;
      padding-right: 26px;
    }
  `}

  ${t=>"solid"===t.variant&&m.AH`
    padding-left: 1rem;
    padding-right: 1rem;
    border-width: 0;
    background: var(--ifm-color-home-elevation-01);
    transition: background 300ms ease-out;

    &:hover, &:active {
      background: var(--ifm-color-home-elevation-02);
    }

    ${t=>"dark"===t.theme.colorMode&&m.AH`
      background: var(--ifm-color-home-elevation-03);

      &:hover, &:active {
        background: var(--ifm-color-home-elevation-04);
      }
    `}
  `}
`,w=t=>{let{variant:e="default",children:i,onClick:r,disabled:o=!1,className:n}=t;return(0,h.jsx)(j,{variant:e,onClick:r,disabled:o,className:n,children:i})},k=m.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 240px;
  padding: 2rem 3rem 2rem 1.5rem;
  border-radius: 16px;
  border: 2px solid #131313;
  background: var(--ifm-color-home-elevation-00);

  ${t=>{let{theme:e}=t;return"dark"===e.colorMode&&m.AH`
      border: none;
      background: var(--ifm-color-home-elevation-02);
    `}}

  @media (min-width: 640px) {
    .communityCardContainer {
      height: 260px;
    }
  }
`,A=m.Ay.div`
  &:first-child {
    background-position-x: -150px;
    background-position-y: -14px;
  }

  &:nth-child(4) {
    background-position-x: -677px;
    background-position-y: -205px;
  }
`,_=m.Ay.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`,C=m.Ay.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: var(--ifm-color-home-text-primary);
  margin: 0;
`,N=m.Ay.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: var(--ifm-color-home-text-primary);
  margin: 0;
  margin-top: 10px;
`,F=(0,m.Ay)(w)`
  width: 160px;

  @media (min-width: 768px) {
    width: fit-content;
  }
`,T=t=>{let{title:e,subtitle:i,buttonText:r,url:o,isLongCard:n=!1}=t;const a=(0,f.G)();return(0,h.jsxs)(k,{theme:a,as:n?A:void 0,children:[(0,h.jsxs)(_,{children:[(0,h.jsx)(C,{children:e}),(0,h.jsx)(N,{children:i})]}),(0,h.jsx)(F,{onClick:()=>{window.open(o,"_blank")},children:r})]})},z=()=>(0,h.jsx)("div",{className:"homepage",children:(0,h.jsx)(n.A,{children:(0,h.jsxs)("div",{className:a,children:[(0,h.jsx)("div",{}),(0,h.jsx)(u,{title:(0,h.jsxs)("div",{className:(0,r.A)("grad",c),children:["\ubc15\uc900\ud558\uc758",(0,h.jsx)("br",{className:s})," \uac1c\ubc1c \ucee8\ud3ec\ub10c\ud2b8 \ub3c5\uc2a4\uc785\ub2c8\ub2e4."]}),subtitle:(0,h.jsxs)(h.Fragment,{children:["iOS, React\ub97c \uc911\uc810\uc73c\ub85c \uc124\uba85\ud569\ub2c8\ub2e4.",(0,h.jsx)("br",{})," \ucee8\ud3ec\ub10c\ud2b8\uac00 \uc62c\ub77c\uac00\uac70\ub098 \ube14\ub85c\uadf8 \uae00\uc774 \uc62c\ub77c\uac11\ub2c8\ub2e4! ",(0,h.jsx)("br",{})]}),className:l}),(0,h.jsx)("hr",{style:{width:"100%",textAlign:"center",margin:"60px",backgroundColor:"#e0e0e0"}}),(0,h.jsx)(u,{title:"\uc5ec\uae30\uc11c\ub3c4 \uc800\ub97c \ub9cc\ub098\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4~!",subtitle:(0,h.jsxs)(h.Fragment,{children:["\uc800\uc5d0\uac8c \uad00\uc2ec\uc774 \uc788\uc73c\uc2dc\ub2e4\uba74! \uc5b8\uc81c\ub4e0 \ucc3e\uc544\uc640\uc8fc\uc138\uc694",(0,h.jsx)("br",{})," \uc9c8\ubb38\ub3c4 \uc774\ucabd\uc73c\ub85c \ubcf4\ub0b4\uc8fc\uc2dc\uba74 \uc88b\uc744 \uac83 \uac19\uc544\uc694~"]})}),(0,h.jsx)("div",{className:d,children:[{title:"Github",subtitle:"\uc800\uc758 \ucf54\ub4dc \uc800\uc7a5\uc18c\uc785\ub2c8\ub2e4! \uc81c\uac00 \uc8fc\ub85c \uc0b4\uace0 \uc788\ub294 \uacf3\uc774\uae30\ub3c4 \ud558\uc8e0 \ud83d\udc50",buttonText:"\ubc29\ubb38\ud558\uae30",isLongCard:!0,url:"https://github.com/jjunhaa0211"},{title:"Portfolio",subtitle:"\uc800\uc758 \ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4! \uc57d\uac04..\uad81\uae08\ud558\uc2dc\uc8e0?",buttonText:"\ubcf4\ub7ec\uac00\uae30",isLongCard:!1,url:"https://www.goodjunha.com/"},{title:"Linkedin",subtitle:"\uc800\ub791 \uc774\uc6c3\ud558\uc2e4\ub798? \ud83e\udd74",buttonText:"Follow",isLongCard:!1,url:"https://www.linkedin.com/in/goodjunha/"},{title:"Instagram",subtitle:"\uac1c\ubc1c\uc740 \uc544\ub2cc\ub370.. \uc800\uc758 \uc77c\uc0c1\uc774 \uc62c\ub77c\uac11\ub2c8\ub2e4 \ud83d\udcaa\ud83c\udfff",buttonText:"\ubcf4\ub7ec\uac00\uae30",isLongCard:!0,url:"https://www.instagram.com/jn_xhx?igsh=MTNqcHFoOWo1aGM3NA%3D%3D&utm_source=qr"}].map(((t,e)=>(0,o.createElement)(T,{...t,key:e})))}),(0,h.jsx)(y,{})]})})})},20053:(t,e,i)=>{function r(t){var e,i,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(i=r(t[e]))&&(o&&(o+=" "),o+=i);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}i.d(e,{A:()=>o});const o=function(){for(var t,e,i=0,o="";i<arguments.length;)(t=arguments[i++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}}}]);