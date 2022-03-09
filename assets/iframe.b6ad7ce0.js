var R=Object.defineProperty;var E=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var v=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&v(e,r,t[r]);if(E)for(var r of E(t))H.call(t,r)&&v(e,r,t[r]);return e};import{c as _,j as u,a as F,u as z,L as q,F as b,m as V,b as x,M as C,d as T,e as K,f as Y,g as J,h as Z,l as G,i as Q,k as U,n as W,o as X,p as ee,q as te,r as ue,s as re,t as oe,v as ne,w as ae}from"./vendor.aeb92371.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};se();const le={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var ie=Object.freeze(Object.defineProperty({__proto__:null,parameters:le},Symbol.toStringTag,{value:"Module"}));const ce=e=>{switch(e){case"sm":return"py-2 px-6 text-base";case"lg":return"py-2 px-10 text-xl";default:return"py-2 px-8 text-lg"}},f=({text:e,fn:t,type:r="button",outlined:o=!1,rounded:n=!1,size:s="md"})=>{const i=_(ce(s),o?"bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white":"bg-blue-700 text-white hover:border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500",n?"rounded-full":"rounded");return u("button",{type:r,onClick:t(),className:i,children:e})};try{f.displayName="BaseBtn",f.__docgenInfo={description:"",displayName:"BaseBtn",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},fn:{defaultValue:null,description:"",name:"fn",required:!0,type:{name:"Function"}},outlined:{defaultValue:{value:"false"},description:"",name:"outlined",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseBtn/BaseBtn.tsx#BaseBtn"]={docgenInfo:f.__docgenInfo,name:"BaseBtn",path:"src/components/atoms/BaseBtn/BaseBtn.tsx#BaseBtn"})}catch{}const me={type:"button",text:"button",fn:()=>F("ignite"),outlined:!1,rounded:!1,size:"sm"};var de={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BaseBtn, BtnProps } from './BaseBtn';

const defaultArgs: BtnProps = {
  type: 'button',
  text: 'button',
  fn: () => action('ignite'),
  outlined: false,
  rounded: false,
  size: 'sm',
};

export default {
  component: BaseBtn,
  title: 'Atoms/BaseBtn',
  args: {
    fn: () => action('ignite'),
  },
} as Meta<typeof BaseBtn>;

const Template: ComponentStory<typeof BaseBtn> = (args: BtnProps) => (
  <BaseBtn {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:49,line:22},endLoc:{col:1,line:24},startBody:{col:49,line:22},endBody:{col:1,line:24}}}}},component:f,title:"Atoms/BaseBtn",args:{fn:()=>F("ignite")}};const pe=e=>u(f,a({},e)),h=pe.bind({});h.args=a({},me);const ge=["Default"];var Be=Object.freeze(Object.defineProperty({__proto__:null,default:de,Default:h,__namedExportsOrder:ge},Symbol.toStringTag,{value:"Module"}));const fe=(e=1)=>`${["text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl"].reverse()[e-1]}`,d=({text:e,hLv:t=1,underlined:r=!1,className:o=""})=>{const n=`h${t}`,s=_(fe(Number(t)),{"border-b-4 border-indigo-400 pb-2":r,className:o});return u(n,{className:s,children:e})};try{d.displayName="BaseHeading",d.__docgenInfo={description:"",displayName:"BaseHeading",props:{hLv:{defaultValue:{value:"1"},description:"",name:"hLv",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},underlined:{defaultValue:{value:"false"},description:"",name:"underlined",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseHeading/BaseHeading.tsx#BaseHeading"]={docgenInfo:d.__docgenInfo,name:"BaseHeading",path:"src/components/atoms/BaseHeading/BaseHeading.tsx#BaseHeading"})}catch{}const ye={hLv:1,text:"SampleHeading",underlined:!1};var Ae={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { BaseHeading, HeadingProps } from './BaseHeading';

const defaultArgs: HeadingProps = {
 hLv: 1,
 text: 'SampleHeading',
 underlined: false
};

export default {
  component: BaseHeading,
  title: 'Atoms/BaseHeading',
} as Meta<typeof BaseHeading>;

const Template: ComponentStory<typeof BaseHeading> = (args: HeadingProps) => (
  <BaseHeading {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},component:d,title:"Atoms/BaseHeading"};const _e=e=>u(d,a({},e)),S=_e.bind({});S.args=a({},ye);const Ce=["Default"];var be=Object.freeze(Object.defineProperty({__proto__:null,default:Ae,Default:S,__namedExportsOrder:Ce},Symbol.toStringTag,{value:"Module"}));const xe=e=>{switch(e){case"sm":return"w-10 h-10";case"lg":return"w-18 h-18";default:return"w-14 h-14"}},c=({img:e,alt:t,size:r="sm",className:o=""})=>{const n=_(xe(r),o);return u("img",{src:e,alt:t,className:n})};try{c.displayName="BaseImg",c.__docgenInfo={description:"",displayName:"BaseImg",props:{img:{defaultValue:null,description:"",name:"img",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseImg/BaseImg.tsx#BaseImg"]={docgenInfo:c.__docgenInfo,name:"BaseImg",path:"src/components/atoms/BaseImg/BaseImg.tsx#BaseImg"})}catch{}const Ee={img:"http://placehold.jp/150x150.png",alt:"\u30C0\u30DF\u30FC\u753B\u50CF",size:"sm"};var ve={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { BaseImg, ImgProps } from './BaseImg';

const defaultArgs: ImgProps = {
  img: 'http://placehold.jp/150x150.png',
  alt: '\u30C0\u30DF\u30FC\u753B\u50CF',
  size: 'sm',
};

export default {
  component: BaseImg,
  title: 'Atoms/BaseImg',
} as Meta<typeof BaseImg>;

const Template: ComponentStory<typeof BaseImg> = (args: ImgProps) => (
  <BaseImg {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:49,line:15},endLoc:{col:1,line:17},startBody:{col:49,line:15},endBody:{col:1,line:17}}}}},component:c,title:"Atoms/BaseImg"};const Te=e=>u(c,a({},e)),L=Te.bind({});L.args=a({},Ee);const Fe=["Default"];var he=Object.freeze(Object.defineProperty({__proto__:null,default:ve,Default:L,__namedExportsOrder:Fe},Symbol.toStringTag,{value:"Module"}));const m=({cp:e,link:t,className:r=""})=>{const o=_(r);if(t.indexOf("http")!==-1)return u("a",{href:t,className:o,children:e});{const n=z();return u(q,{to:`${n.pathname}/${t}`,className:o,children:e})}};try{m.displayName="BaseLink",m.__docgenInfo={description:"",displayName:"BaseLink",props:{cp:{defaultValue:null,description:"",name:"cp",required:!0,type:{name:"Element"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseLink/BaseLink.tsx#BaseLink"]={docgenInfo:m.__docgenInfo,name:"BaseLink",path:"src/components/atoms/BaseLink/BaseLink.tsx#BaseLink"})}catch{}const Se={cp:u(b,{children:"SampleLink"}),link:"https://example.com"};var Le={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { BaseLink, LinkProps } from './BaseLink';

const defaultArgs: LinkProps = {
 cp: (<>SampleLink</>),
 link: 'https://example.com'
};

export default {
  component: BaseLink,
  title: 'Atoms/BaseLink',
} as Meta<typeof BaseLink>;

const Template: ComponentStory<typeof BaseLink> = (args: LinkProps) => (
  <BaseLink {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}}}}},component:m,title:"Atoms/BaseLink"};const De=e=>u(m,a({},e)),D=De.bind({});D.args=a({},Se);const Oe=["Default"];var ke=Object.freeze(Object.defineProperty({__proto__:null,default:Le,Default:D,__namedExportsOrder:Oe},Symbol.toStringTag,{value:"Module"}));const l=({text:e,className:t=""})=>{const r=_("text-xl",t);return u("p",{className:r,children:e})};try{l.displayName="BaseText",l.__docgenInfo={description:"",displayName:"BaseText",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseText/BaseText.tsx#BaseText"]={docgenInfo:l.__docgenInfo,name:"BaseText",path:"src/components/atoms/BaseText/BaseText.tsx#BaseText"})}catch{}const Ie={text:"SampleText"};var Me={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { BaseText, TextProps } from './BaseText';

const defaultArgs: TextProps = {
 text: 'SampleText',
};

export default {
  component: BaseText,
  title: 'Atoms/BaseText',
} as Meta<typeof BaseText>;

const Template: ComponentStory<typeof BaseText> = (args: TextProps) => (
  <BaseText {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:50,line:13},endLoc:{col:1,line:15},startBody:{col:50,line:13},endBody:{col:1,line:15}}}}},component:l,title:"Atoms/BaseText"};const $e=e=>u(l,a({},e)),O=$e.bind({});O.args=a({},Ie);const we=["Default"];var Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Me,Default:O,__namedExportsOrder:we},Symbol.toStringTag,{value:"Module"}));const y=({body:e})=>{const t=V(e);return u("div",{dangerouslySetInnerHTML:{__html:t},className:"markdown-body"})};try{y.displayName="ArticleBody",y.__docgenInfo={description:"",displayName:"ArticleBody",props:{body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleBody/ArticleBody.tsx#ArticleBody"]={docgenInfo:y.__docgenInfo,name:"ArticleBody",path:"src/components/molecules/ArticleBody/ArticleBody.tsx#ArticleBody"})}catch{}const je={body:"## SampleText"};var Re={parameters:{storySource:{source:`
import { Meta, ComponentStory } from '@storybook/react';
import { ArticleBody, BodyProps } from './ArticleBody';

const defaultArgs: BodyProps = {
 body: '## SampleText',
};

export default {
  component: ArticleBody,
  title: 'Molecules/ArticleBody',
} as Meta<typeof ArticleBody>;

const Template: ComponentStory<typeof ArticleBody> = (args: BodyProps) => (
  <ArticleBody {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:53,line:14},endLoc:{col:1,line:16},startBody:{col:53,line:14},endBody:{col:1,line:16}}}}},component:y,title:"Molecules/ArticleBody"};const Pe=e=>u(y,a({},e)),k=Pe.bind({});k.args=a({},je);const He=["Default"];var ze=Object.freeze(Object.defineProperty({__proto__:null,default:Re,Default:k,__namedExportsOrder:He},Symbol.toStringTag,{value:"Module"}));const p=({category:e,className:t=""})=>{const{id:r,name:o,img:n}=e,{url:s}=n,i=u("div",{className:"flex justify-end",children:x("div",{className:"flex m-1 p-1 border-2 border-blue-500 rounded-full",children:[u("div",{children:u(l,{text:o,className:"p-1"})}),u("div",{children:u(c,{img:s,alt:`${o}\u306E\u30ED\u30B4`,size:"sm",className:"p-1"})})]})});return u("div",{className:t,children:u(m,{cp:i,link:`category/${r}`})})};try{p.displayName="ArticleCategory",p.__docgenInfo={description:"",displayName:"ArticleCategory",props:{category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"ArticleCategory"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleCategory/ArticleCategory.tsx#ArticleCategory"]={docgenInfo:p.__docgenInfo,name:"ArticleCategory",path:"src/components/molecules/ArticleCategory/ArticleCategory.tsx#ArticleCategory"})}catch{}const qe={category:{id:"dummy-id",name:"duumyCategory",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}};var Ve={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import { ArticleCategory, CategoryProps } from './ArticleCategory';

const defaultArgs: CategoryProps = {
  category: {
    id: 'dummy-id',
    name: 'duumyCategory',
    img: {
        url: 'http://placehold.jp/150x150.png'
    },
    createdAt: '2022/1/1',
    updatedAt: '2022/12/31'
  },
};

export default {
  component: ArticleCategory,
  title: 'Molecules/ArticleCategory',
} as Meta<typeof ArticleCategory>;

const Template: ComponentStory<typeof ArticleCategory> = (
  args: CategoryProps
) => <MemoryRouter initialEntries={['/', 'category', 'fnuhudhvufj']}><ArticleCategory {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:57,line:22},endLoc:{col:113,line:24},startBody:{col:57,line:22},endBody:{col:113,line:24}}}}},component:p,title:"Molecules/ArticleCategory"};const Ke=e=>u(C,{initialEntries:["/","category","fnuhudhvufj"],children:u(p,a({},e))}),I=Ke.bind({});I.args=a({},qe);const Ye=["Default"];var Je=Object.freeze(Object.defineProperty({__proto__:null,default:Ve,Default:I,__namedExportsOrder:Ye},Symbol.toStringTag,{value:"Module"}));const g=({tags:e,className:t=""})=>{const r=({name:o,img:n})=>{const{url:s}=n;return x("div",{className:"flex justify-between",children:[u(l,{text:o,className:"p-1"}),u(c,{img:s,alt:`${o}\u306E\u30ED\u30B4`,size:"sm",className:"p-1"})]})};return u("div",{className:"flex justify-start "+t,children:e.map(o=>u(m,{cp:r(o),link:`tag/${o.id}`,className:"m-1 p-1 border-2 border-blue-500 rounded-full"}))})};try{g.displayName="ArticleTags",g.__docgenInfo={description:"",displayName:"ArticleTags",props:{tags:{defaultValue:null,description:"",name:"tags",required:!0,type:{name:"ArticleTag[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleTags/ArticleTags.tsx#ArticleTags"]={docgenInfo:g.__docgenInfo,name:"ArticleTags",path:"src/components/molecules/ArticleTags/ArticleTags.tsx#ArticleTags"})}catch{}const Ze=e=>({id:`dummy-${e}`,name:`duumyTag${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),Ge=(e,t)=>[...new Array(e)].map((r,o)=>t(o)),Qe={tags:Ge(5,Ze)};var Ue={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleTags, TagsProps } from './ArticleTags';

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`duumyTag\${i}\`,
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
});

const factory = (n: number, template: Function) => {
  return [...new Array(n)].map((_, i) => template(i));
};

const defaultArgs: TagsProps = {
  tags: factory(5, templateTag),
};

export default {
  component: ArticleTags,
  title: 'Molecules/ArticleTags',
} as Meta<typeof ArticleTags>;

const Template: ComponentStory<typeof ArticleTags> = (args: TagsProps) => (
  <MemoryRouter initialEntries={['/', 'tag', 'fnuhudhvufj']}>
    <ArticleTags {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:53,line:28},endLoc:{col:1,line:32},startBody:{col:53,line:28},endBody:{col:1,line:32}}}}},component:g,title:"Molecules/ArticleTags"};const We=e=>u(C,{initialEntries:["/","tag","fnuhudhvufj"],children:u(g,a({},e))}),M=We.bind({});M.args=a({},Qe);const Xe=["Default"];var et=Object.freeze(Object.defineProperty({__proto__:null,default:Ue,Default:M,__namedExportsOrder:Xe},Symbol.toStringTag,{value:"Module"}));const B=({article:e})=>{const{title:t,summary:r,tags:o,category:n}=e;return u(b,{children:x("div",{className:"m-1 p-1 border-2 border-blue-500 rounded-lg",children:[u(p,{category:n}),u("div",{className:"border-b-1 border-blue-500"}),u(d,{hLv:2,text:t,underlined:!0}),u(l,{text:r}),u(g,{tags:o,className:"py-2"})]})})};try{B.displayName="ArticleListItem",B.__docgenInfo={description:"",displayName:"ArticleListItem",props:{article:{defaultValue:null,description:"",name:"article",required:!0,type:{name:"Article"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ArticleListItem/ArticleListItem.tsx#ArticleListItem"]={docgenInfo:B.__docgenInfo,name:"ArticleListItem",path:"src/components/organisms/ArticleListItem/ArticleListItem.tsx#ArticleListItem"})}catch{}const A=({articleList:e})=>u(b,{children:e.map(t=>u(B,{article:t}))});try{A.displayName="ArticleList",A.__docgenInfo={description:"",displayName:"ArticleList",props:{articleList:{defaultValue:null,description:"",name:"articleList",required:!0,type:{name:"Article[]"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ArticleList/ArticleList.tsx#ArticleList"]={docgenInfo:A.__docgenInfo,name:"ArticleList",path:"src/components/organisms/ArticleList/ArticleList.tsx#ArticleList"})}catch{}const tt=e=>({id:`dummy-${e}`,name:`duumyTag${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),ut=`
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002** 
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002 
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002** 
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002 
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
`,rt=e=>({id:e,createdAt:"2022/1/1",updatedAt:"2022/12/31",title:`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002${e}`,summary:"\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF",body:ut,tags:$(5,tt),category:{id:"dummy-id",name:"duumyTag",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}}),$=(e,t)=>[...new Array(e)].map((r,o)=>t(o)),ot={articleList:$(5,rt)};var nt={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleList, ListProps } from './ArticleList';

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`duumyTag\${i}\`,
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
});

const dummyMarkdown = \`
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002** 
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002 
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002** 
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002 
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
\`;

const templateArticle = (i: number) => ({
  id: i,
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
  title: \`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\${i}\`,
  summary:
    '\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF',
  body: dummyMarkdown,
  tags: factory(5, templateTag),
  category: {
    id: 'dummy-id',
    name: 'duumyTag',
    img: {
      url: 'http://placehold.jp/150x150.png',
    },
    createdAt: '2022/1/1',
    updatedAt: '2022/12/31',
  },
});

const factory = (n: number, tamplate: Function) => {
  return [...new Array(n)].map((_, i) => tamplate(i));
};

const defaultArgs: ListProps = {
  articleList: factory(5, templateArticle),
};

export default {
  component: ArticleList,
  title: 'Molecules/ArticleList',
} as Meta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args: ListProps) => (
  <MemoryRouter initialEntries={['/', 'article']}><ArticleList {...args} /></MemoryRouter>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:53,line:61},endLoc:{col:1,line:63},startBody:{col:53,line:61},endBody:{col:1,line:63}}}}},component:A,title:"Molecules/ArticleList"};const at=e=>u(C,{initialEntries:["/","article"],children:u(A,a({},e))}),w=at.bind({});w.args=a({},ot);const st=["Default"];var lt=Object.freeze(Object.defineProperty({__proto__:null,default:nt,Default:w,__namedExportsOrder:st},Symbol.toStringTag,{value:"Module"}));const it=e=>({id:`dummy-${e}`,name:`duumyTag${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),ct=`
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002** 
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002 
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002** 
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002 
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
`,mt=e=>({id:`article-${e}`,createdAt:"2022/1/1",updatedAt:"2022/12/31",title:`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002${e}`,summary:"\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF",body:ct,tags:dt(5,it),category:{id:"dummy-id",name:"duumyTag",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}}),dt=(e,t)=>[...new Array(e)].map((r,o)=>t(o)),pt={article:mt(1)};var gt={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleListItem, ListItemProps } from './ArticleListItem';

const templateTag = (i: number): ArticleTag => ({
    id: \`dummy-\${i}\`,
    name: \`duumyTag\${i}\`,
    img: {
      url: 'http://placehold.jp/150x150.png',
    },
    createdAt: '2022/1/1',
    updatedAt: '2022/12/31',
});

const dummyMarkdown = \`
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002** 
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002 
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002** 
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002 
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
## \u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002
  **\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002**
\`;

const templateArticle = (i: number):Article => ({
  id: \`article-\${i}\`,
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
  title: \`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\${i}\`,
  summary:
    '\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF',
  body: dummyMarkdown,
  tags: factory(5, templateTag),
  category: {
    id: 'dummy-id',
    name: 'duumyTag',
    img: {
      url: 'http://placehold.jp/150x150.png',
    },
    createdAt: '2022/1/1',
    updatedAt: '2022/12/31',
  },
});

const factory = (n: number, tamplate: Function) => {
  return [...new Array(n)].map((_, i) => tamplate(i));
};

const defaultArgs: ListItemProps = {
  article: templateArticle(1),
};

export default {
  component: ArticleListItem,
  title: 'Molecules/ArticleListItem',
} as Meta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (
  args: ListItemProps
) => <MemoryRouter initialEntries={['/', 'article', 'fnuhudhvufj']}><ArticleListItem {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:57,line:61},endLoc:{col:112,line:63},startBody:{col:57,line:61},endBody:{col:112,line:63}}}}},component:B,title:"Molecules/ArticleListItem"};const Bt=e=>u(C,{initialEntries:["/","article","fnuhudhvufj"],children:u(B,a({},e))}),N=Bt.bind({});N.args=a({},pt);const ft=["Default"];var yt=Object.freeze(Object.defineProperty({__proto__:null,default:gt,Default:N,__namedExportsOrder:ft},Symbol.toStringTag,{value:"Module"}));const At=[];var _t=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:At},Symbol.toStringTag,{value:"Module"}));const Ct=[];var bt=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:Ct},Symbol.toStringTag,{value:"Module"}));const xt=[];var Et=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:xt},Symbol.toStringTag,{value:"Module"}));function j(e){return{"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx":Be,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseHeading/BaseHeading.stories.tsx":be,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseImg/BaseImg.stories.tsx":he,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseLink/BaseLink.stories.tsx":ke,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseText/BaseText.stories.tsx":Ne,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBody/ArticleBody.stories.tsx":ze,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx":Je,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTags/ArticleTags.stories.tsx":et,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleList/ArticleList.stories.tsx":lt,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx":yt,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Footer/Footer.stories.tsx":_t,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Header/Header.stories.tsx":bt,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Navigation/Navigation.stories.tsx":Et}[e]}Object.assign(j,{keys:()=>["/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseHeading/BaseHeading.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseImg/BaseImg.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseLink/BaseLink.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseText/BaseText.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBody/ArticleBody.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTags/ArticleTags.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleList/ArticleList.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Footer/Footer.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Header/Header.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Navigation/Navigation.stories.tsx"],resolve:e=>({"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx":"./src/components/atoms/BaseBtn/BaseBtn.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseHeading/BaseHeading.stories.tsx":"./src/components/atoms/BaseHeading/BaseHeading.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseImg/BaseImg.stories.tsx":"./src/components/atoms/BaseImg/BaseImg.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseLink/BaseLink.stories.tsx":"./src/components/atoms/BaseLink/BaseLink.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseText/BaseText.stories.tsx":"./src/components/atoms/BaseText/BaseText.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBody/ArticleBody.stories.tsx":"./src/components/molecules/ArticleBody/ArticleBody.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx":"./src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTags/ArticleTags.stories.tsx":"./src/components/molecules/ArticleTags/ArticleTags.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleList/ArticleList.stories.tsx":"./src/components/organisms/ArticleList/ArticleList.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx":"./src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Footer/Footer.stories.tsx":"./src/components/organisms/Footer/Footer.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Header/Header.stories.tsx":"./src/components/organisms/Header/Header.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Navigation/Navigation.stories.tsx":"./src/components/organisms/Navigation/Navigation.stories.tsx"})[e]});function vt(e){e(j,{hot:!1},!1)}const Tt=[Q,U,W,X,ee,te,ue,re,oe,ne,ie].filter(Boolean);Tt.forEach(e=>{Object.keys(e).forEach(t=>{const r=e[t];switch(t){case"args":case"argTypes":return G.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(r));case"decorators":return r.forEach(o=>Z(o,!1));case"loaders":return r.forEach(o=>J(o,!1));case"parameters":return T(a({},r),!1);case"argTypesEnhancers":return r.forEach(o=>Y(o));case"argsEnhancers":return r.forEach(o=>K(o));case"globals":case"globalTypes":{const o={};return o[t]=r,T(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});vt(ae);
//# sourceMappingURL=iframe.b6ad7ce0.js.map
