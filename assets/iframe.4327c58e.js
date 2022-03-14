var Z=Object.defineProperty;var v=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var D=(e,u,n)=>u in e?Z(e,u,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[u]=n,a=(e,u)=>{for(var n in u||(u={}))X.call(u,n)&&D(e,n,u[n]);if(v)for(var n of v(u))ee.call(u,n)&&D(e,n,u[n]);return e};import{c as B,j as t,a as k,L as ue,F as x,b as E,M as A,m as O,l as te,d as T,e as ne,f as oe,g as re,h as ae,i as se,k as le,n as ie,o as ce,p as de,q as me,r as ge,s as pe,t as Be,u as Ae,v as fe,w as ye}from"./vendor.9026b569.js";const Ce=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Ce();const _e={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var he=Object.freeze(Object.defineProperty({__proto__:null,parameters:_e},Symbol.toStringTag,{value:"Module"}));const Fe=e=>{switch(e){case"sm":return"py-2 px-6 text-base";case"lg":return"py-2 px-10 text-xl";default:return"py-2 px-8 text-lg"}},_=({text:e,fn:u,type:n="button",outlined:o=!1,rounded:r=!1,size:s="md"})=>{const c=B(Fe(s),o?"bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white":"bg-blue-700 text-white hover:border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500",r?"rounded-full":"rounded");return t("button",{type:n,onClick:u(),className:c,children:e})};try{_.displayName="BaseBtn",_.__docgenInfo={description:"",displayName:"BaseBtn",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},fn:{defaultValue:null,description:"",name:"fn",required:!0,type:{name:"Function"}},outlined:{defaultValue:{value:"false"},description:"",name:"outlined",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseBtn/BaseBtn.tsx#BaseBtn"]={docgenInfo:_.__docgenInfo,name:"BaseBtn",path:"src/components/atoms/BaseBtn/BaseBtn.tsx#BaseBtn"})}catch{}const be={type:"button",text:"button",fn:()=>k("ignite"),outlined:!1,rounded:!1,size:"sm"};var Ee={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:49,line:22},endLoc:{col:1,line:24},startBody:{col:49,line:22},endBody:{col:1,line:24}}}}},component:_,title:"Atoms/BaseBtn",args:{fn:()=>k("ignite")}};const xe=e=>t(_,a({},e)),w=xe.bind({});w.args=a({},be);const ve=["Default"];var De=Object.freeze(Object.defineProperty({__proto__:null,default:Ee,Default:w,__namedExportsOrder:ve},Symbol.toStringTag,{value:"Module"}));const d=({text:e,hLv:u=1,underlined:n=!1,className:o=""})=>{const r=`h${u}`,s=B({"border-b-2 border-indigo-400 pb-2":n},o);return t(r,{className:s,children:e})};try{d.displayName="BaseHeading",d.__docgenInfo={description:"",displayName:"BaseHeading",props:{hLv:{defaultValue:{value:"1"},description:"",name:"hLv",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},underlined:{defaultValue:{value:"false"},description:"",name:"underlined",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseHeading/BaseHeading.tsx#BaseHeading"]={docgenInfo:d.__docgenInfo,name:"BaseHeading",path:"src/components/atoms/BaseHeading/BaseHeading.tsx#BaseHeading"})}catch{}const Te={hLv:1,text:"SampleHeading",underlined:!1};var Se={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},component:d,title:"Atoms/BaseHeading"};const Le=e=>t(d,a({},e)),H=Le.bind({});H.args=a({},Te);const ke=["Default"];var Oe=Object.freeze(Object.defineProperty({__proto__:null,default:Se,Default:H,__namedExportsOrder:ke},Symbol.toStringTag,{value:"Module"}));const we=e=>{switch(e){case"sm":return"w-8 h-8";case"lg":return"w-15 h-15";default:return"w-10 h-10"}},f=({img:e,alt:u,size:n="sm",className:o=""})=>{const r=B(we(n),o);return t("img",{src:e,alt:u,className:r})};try{f.displayName="BaseImg",f.__docgenInfo={description:"",displayName:"BaseImg",props:{img:{defaultValue:null,description:"",name:"img",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseImg/BaseImg.tsx#BaseImg"]={docgenInfo:f.__docgenInfo,name:"BaseImg",path:"src/components/atoms/BaseImg/BaseImg.tsx#BaseImg"})}catch{}const He={img:"http://placehold.jp/150x150.png",alt:"\u30C0\u30DF\u30FC\u753B\u50CF",size:"sm"};var Me={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:49,line:15},endLoc:{col:1,line:17},startBody:{col:49,line:15},endBody:{col:1,line:17}}}}},component:f,title:"Atoms/BaseImg"};const $e=e=>t(f,a({},e)),M=$e.bind({});M.args=a({},He);const Ie=["Default"];var je=Object.freeze(Object.defineProperty({__proto__:null,default:Me,Default:M,__namedExportsOrder:Ie},Symbol.toStringTag,{value:"Module"}));const l=({cp:e,link:u,className:n=""})=>{const o=B(n);return u.indexOf("http")!==-1?t("a",{href:u,className:o,children:e}):t(ue,{to:u,className:o,children:e})};try{l.displayName="BaseLink",l.__docgenInfo={description:"",displayName:"BaseLink",props:{cp:{defaultValue:null,description:"",name:"cp",required:!0,type:{name:"Element"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseLink/BaseLink.tsx#BaseLink"]={docgenInfo:l.__docgenInfo,name:"BaseLink",path:"src/components/atoms/BaseLink/BaseLink.tsx#BaseLink"})}catch{}const Ne={cp:t(x,{children:"SampleLink"}),link:"https://example.com"};var Re={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:50,line:14},endLoc:{col:1,line:16},startBody:{col:50,line:14},endBody:{col:1,line:16}}}}},component:l,title:"Atoms/BaseLink"};const Pe=e=>t(l,a({},e)),$=Pe.bind({});$.args=a({},Ne);const qe=["Default"];var Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Re,Default:$,__namedExportsOrder:qe},Symbol.toStringTag,{value:"Module"}));const i=({text:e,className:u=""})=>{const n=B("text-xl",u);return t("p",{className:n,children:e})};try{i.displayName="BaseText",i.__docgenInfo={description:"",displayName:"BaseText",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseText/BaseText.tsx#BaseText"]={docgenInfo:i.__docgenInfo,name:"BaseText",path:"src/components/atoms/BaseText/BaseText.tsx#BaseText"})}catch{}const ze={text:"SampleText"};var Ye={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:50,line:13},endLoc:{col:1,line:15},startBody:{col:50,line:13},endBody:{col:1,line:15}}}}},component:i,title:"Atoms/BaseText"};const Ke=e=>t(i,a({},e)),I=Ke.bind({});I.args=a({},ze);const Je=["Default"];var We=Object.freeze(Object.defineProperty({__proto__:null,default:Ye,Default:I,__namedExportsOrder:Je},Symbol.toStringTag,{value:"Module"}));const m=({badge:e,link:u,outlined:n=!1,className:o="flex justify-center"})=>{const r=B(n?"bg-white border border-blue-500 text-blue-500":"bg-blue-700 text-white","px-2 rounded-full hover:opacity-70",o),{name:s,img:c}=e,{url:U}=c;return t(l,{cp:t("div",{className:r,children:E(x,{children:[t(i,{text:s,className:"p-1"}),t(f,{img:U,alt:`${s}\u306E\u30ED\u30B4`,size:"sm",className:"p-1"})]})}),link:u})};try{m.displayName="ArticleBadge",m.__docgenInfo={description:"",displayName:"ArticleBadge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!0,type:{name:"any"}},outlined:{defaultValue:{value:"false"},description:"",name:"outlined",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},className:{defaultValue:{value:"flex justify-center"},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleBadge/ArticleBadge.tsx#ArticleBadge"]={docgenInfo:m.__docgenInfo,name:"ArticleBadge",path:"src/components/molecules/ArticleBadge/ArticleBadge.tsx#ArticleBadge"})}catch{}const S={id:"dummy-id",name:"duumy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"},Ge=e=>({id:`dummy-${e}`,name:`duumy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),L=Ge(1);var Qe={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleBadge, BadgeProps, BadgeType } from './ArticleBadge';


const CategoryArgs: BadgeType = {
  id: 'dummy-id',
  name: 'duumy',
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
};

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`duumy\${i}\`,
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
});

const TagArgs: BadgeType = templateTag(1);

export default {
  component: ArticleBadge,
  title: 'Molecules/ArticleBadge',
} as Meta<typeof ArticleBadge>;

const Template: ComponentStory<typeof ArticleBadge> = (args: BadgeProps) => (
  <MemoryRouter initialEntries={['/category/fnuhudhvufj']}>
    <ArticleBadge {...args} />
  </MemoryRouter>
);

export const Category = Template.bind({});
Category.args = { badge: CategoryArgs, link: \`category/\${CategoryArgs.id}\`, outlined: false };

export const Tags = Template.bind({});
Tags.args = { badge: TagArgs, link: \`/tag/\${TagArgs.id}\` ,outlined: true };
`,locationsMap:{category:{startLoc:{col:54,line:33},endLoc:{col:1,line:37},startBody:{col:54,line:33},endBody:{col:1,line:37}},tags:{startLoc:{col:54,line:33},endLoc:{col:1,line:37},startBody:{col:54,line:33},endBody:{col:1,line:37}}}}},component:m,title:"Molecules/ArticleBadge"};const j=e=>t(A,{initialEntries:["/category/fnuhudhvufj"],children:t(m,a({},e))}),N=j.bind({});N.args={badge:S,link:`category/${S.id}`,outlined:!1};const R=j.bind({});R.args={badge:L,link:`/tag/${L.id}`,outlined:!0};const Ue=["Category","Tags"];var Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Qe,Category:N,Tags:R,__namedExportsOrder:Ue},Symbol.toStringTag,{value:"Module"}));O.setOptions({highlight(e,u){return te.highlightAuto(e,[u]).value},breaks:!0,gfm:!0});const h=({body:e})=>{const u=O(e);return t("div",{className:"w-4/5 md:w-full",children:t("div",{dangerouslySetInnerHTML:{__html:u},className:"markdown-body"})})};try{h.displayName="ArticleBody",h.__docgenInfo={description:"",displayName:"ArticleBody",props:{body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleBody/ArticleBody.tsx#ArticleBody"]={docgenInfo:h.__docgenInfo,name:"ArticleBody",path:"src/components/molecules/ArticleBody/ArticleBody.tsx#ArticleBody"})}catch{}const Xe={body:`# \u30B5\u30F3\u30D7\u30EB\u30C6\u30AD\u30B9\u30C8

  ---
  ## \u898B\u51FA\u3057\u30BF\u30B0
  # \u3053\u308C\u306FH1\u30BF\u30B0\u3067\u3059
  ## \u3053\u308C\u306FH2\u30BF\u30B0\u3067\u3059
  ### \u3053\u308C\u306FH3\u30BF\u30B0\u3067\u3059
  #### \u3053\u308C\u306FH4\u30BF\u30B0\u3067\u3059
  ##### \u3053\u308C\u306FH5\u30BF\u30B0\u3067\u3059
  ###### \u3053\u308C\u306FH6\u30BF\u30B0\u3067\u3059

  \`\`\`markdown
  # \u3053\u308C\u306FH1\u30BF\u30B0\u3067\u3059
  ## \u3053\u308C\u306FH2\u30BF\u30B0\u3067\u3059
  ### \u3053\u308C\u306FH3\u30BF\u30B0\u3067\u3059
  #### \u3053\u308C\u306FH4\u30BF\u30B0\u3067\u3059
  ##### \u3053\u308C\u306FH5\u30BF\u30B0\u3067\u3059
  ###### \u3053\u308C\u306FH6\u30BF\u30B0\u3067\u3059
  \`\`\`

  ---
  ## \u5F37\u8ABF(bold, italic)
  *hoge*
  _hoge_
  **hoge**
  __hoge__

  \`\`\`markdown
  *hoge*
  _hoge_
  **hoge**
  __hoge__
  \`\`\`

  ---
  ## \u6253\u3061\u6D88\u3057
  ~~hoge~~

  \`\`\`~~ hoge ~~\`\`\`

  ---
  ## Disc\u578B
  \u6587\u982D\u306B\u300C*\u300D\u300C+\u300D\u300C-\u300D\u3092\u3044\u308C\u308B\u3068Disc\u578B\u306B\u306A\u308B
  * hoge
      * hoge
  * hoge
  + hoge
      + hoge
  + hoge
  - hoge
      - hoge
  - hoge

  \`\`\`markdown
  * hoge
      * hoge
  * hoge
  + hoge
      + hoge
  + hoge
  - hoge
      - hoge
  - hoge
  \`\`\`

  ---
  ## Decimal\u578B
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  
  \`\`\`markdown
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  \`\`\`

  ---
  ## \u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9
  - [ ] \u30BF\u30B9\u30AF1
  - [x] \u30BF\u30B9\u30AF2

  \`\`\`markdown
  [ ] \u30BF\u30B9\u30AF1
  [x] \u30BF\u30B9\u30AF2
  \`\`\`

  ---
  ## \u5F15\u7528
  > hogehogehoge
  > \u30CD\u30B9\u30C8\u3055\u308C\u305F\u5F15\u7528\u3067\u3059\u3002
  > hogehogehoge

  \`\`\`markdown
  > hogehogehoge
  > \u30CD\u30B9\u30C8\u3055\u308C\u305F\u5F15\u7528\u3067\u3059\u3002
  > hogehogehoge
  \`\`\`

  ---
  ## \u30EA\u30F3\u30AF
  [\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u30B5\u30A4\u30C8](https://www.taka1156.site)

  \`\`\`markdown
  [\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u30B5\u30A4\u30C8](https://www.taka1156.site)
  \`\`\`

  ---
  ## \u753B\u50CF
  ![markdown](//images.ctfassets.net/ygk38bhnxik1/vj9J9UsQnmBqWi9NGJNqM/5990f9b230aff5138dbf22908045ca1b/markdown.svg "markdown")
  
  \`\`\`markdown
  ![markdown](//images.ctfassets.net/ygk38bhnxik1/vj9J9UsQnmBqWi9NGJNqM/5990f9b230aff5138dbf22908045ca1b/markdown.svg "markdown\u30ED\u30B4")
  \`\`\`

  ---
  ## \u30C6\u30FC\u30D6\u30EB\u8A18\u6CD5

  | \u30B3\u30F3\u30D1\u30A4\u30EB\u8A00\u8A9E | \u30B9\u30AF\u30EA\u30D7\u30C8\u8A00\u8A9E| 
  |:-------------:|:-------------:|
  | C/C++         | Ruby          |
  | Java          | PHP           |
  | scala         | Python        |
  | C#            | JavaScript    |
  | Swift         | TypeScript    |

  \`\`\`markdown
  | \u30B3\u30F3\u30D1\u30A4\u30EB\u8A00\u8A9E | \u30B9\u30AF\u30EA\u30D7\u30C8\u8A00\u8A9E| 
  |:-------------:|:-------------:|
  | C/C++         | Ruby          |
  | Java          | PHP           |
  | scala         | Python        |
  | C#            | JavaScript    |
  | Swift         | TypeScript    |
  \`\`\`

  ---
  ## \u305D\u306E\u4ED6
  ### Java

  \`\`\`java
  public class Hello{
    public static void main(String[] args){
      // java
      System.out.println("Hello Java World");
    }
  }
  \`\`\`

  ---
  ### C++
  \`\`\`cpp
   #include <iostream>
  using namespace std;
  int main(void){
     // c++
    cout << "Hello C++ world." << endl;
    return 0;
  }
  \`\`\`

  ---
  ### PHP
  \`\`\`php
  // php
  print "Hello PHP World";
  \`\`\`

  ---
  ### Ruby
  \`\`\`ruby
  # ruby
  puts 'Hello Ruby World'
  \`\`\`

  ---
  ### JavaScript
  \`\`\`javascript
  // javascript
  console.log("Hello JavaScript World");
  \`\`\`
  `};var eu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { ArticleBody, BodyProps } from './ArticleBody';

const defaultArgs: BodyProps = {
  body: \`# \u30B5\u30F3\u30D7\u30EB\u30C6\u30AD\u30B9\u30C8

  ---
  ## \u898B\u51FA\u3057\u30BF\u30B0
  # \u3053\u308C\u306FH1\u30BF\u30B0\u3067\u3059
  ## \u3053\u308C\u306FH2\u30BF\u30B0\u3067\u3059
  ### \u3053\u308C\u306FH3\u30BF\u30B0\u3067\u3059
  #### \u3053\u308C\u306FH4\u30BF\u30B0\u3067\u3059
  ##### \u3053\u308C\u306FH5\u30BF\u30B0\u3067\u3059
  ###### \u3053\u308C\u306FH6\u30BF\u30B0\u3067\u3059

  \\\`\\\`\\\`markdown
  # \u3053\u308C\u306FH1\u30BF\u30B0\u3067\u3059
  ## \u3053\u308C\u306FH2\u30BF\u30B0\u3067\u3059
  ### \u3053\u308C\u306FH3\u30BF\u30B0\u3067\u3059
  #### \u3053\u308C\u306FH4\u30BF\u30B0\u3067\u3059
  ##### \u3053\u308C\u306FH5\u30BF\u30B0\u3067\u3059
  ###### \u3053\u308C\u306FH6\u30BF\u30B0\u3067\u3059
  \\\`\\\`\\\`

  ---
  ## \u5F37\u8ABF(bold, italic)
  *hoge*
  _hoge_
  **hoge**
  __hoge__

  \\\`\\\`\\\`markdown
  *hoge*
  _hoge_
  **hoge**
  __hoge__
  \\\`\\\`\\\`

  ---
  ## \u6253\u3061\u6D88\u3057
  ~~hoge~~

  \\\`\\\`\\\`~~ hoge ~~\\\`\\\`\\\`

  ---
  ## Disc\u578B
  \u6587\u982D\u306B\u300C*\u300D\u300C+\u300D\u300C-\u300D\u3092\u3044\u308C\u308B\u3068Disc\u578B\u306B\u306A\u308B
  * hoge
      * hoge
  * hoge
  + hoge
      + hoge
  + hoge
  - hoge
      - hoge
  - hoge

  \\\`\\\`\\\`markdown
  * hoge
      * hoge
  * hoge
  + hoge
      + hoge
  + hoge
  - hoge
      - hoge
  - hoge
  \\\`\\\`\\\`

  ---
  ## Decimal\u578B
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  
  \\\`\\\`\\\`markdown
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  1. hoge
      1. hoge
          1. hoge
          1. hoge
      1. hoge
          1. hoge
          1. hoge
  \\\`\\\`\\\`

  ---
  ## \u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9
  - [ ] \u30BF\u30B9\u30AF1
  - [x] \u30BF\u30B9\u30AF2

  \\\`\\\`\\\`markdown
  [ ] \u30BF\u30B9\u30AF1
  [x] \u30BF\u30B9\u30AF2
  \\\`\\\`\\\`

  ---
  ## \u5F15\u7528
  > hogehogehoge
  > \u30CD\u30B9\u30C8\u3055\u308C\u305F\u5F15\u7528\u3067\u3059\u3002
  > hogehogehoge

  \\\`\\\`\\\`markdown
  > hogehogehoge
  > \u30CD\u30B9\u30C8\u3055\u308C\u305F\u5F15\u7528\u3067\u3059\u3002
  > hogehogehoge
  \\\`\\\`\\\`

  ---
  ## \u30EA\u30F3\u30AF
  [\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u30B5\u30A4\u30C8](https://www.taka1156.site)

  \\\`\\\`\\\`markdown
  [\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u30B5\u30A4\u30C8](https://www.taka1156.site)
  \\\`\\\`\\\`

  ---
  ## \u753B\u50CF
  ![markdown](//images.ctfassets.net/ygk38bhnxik1/vj9J9UsQnmBqWi9NGJNqM/5990f9b230aff5138dbf22908045ca1b/markdown.svg "markdown")
  
  \\\`\\\`\\\`markdown
  ![markdown](//images.ctfassets.net/ygk38bhnxik1/vj9J9UsQnmBqWi9NGJNqM/5990f9b230aff5138dbf22908045ca1b/markdown.svg "markdown\u30ED\u30B4")
  \\\`\\\`\\\`

  ---
  ## \u30C6\u30FC\u30D6\u30EB\u8A18\u6CD5

  | \u30B3\u30F3\u30D1\u30A4\u30EB\u8A00\u8A9E | \u30B9\u30AF\u30EA\u30D7\u30C8\u8A00\u8A9E| 
  |:-------------:|:-------------:|
  | C/C++         | Ruby          |
  | Java          | PHP           |
  | scala         | Python        |
  | C#            | JavaScript    |
  | Swift         | TypeScript    |

  \\\`\\\`\\\`markdown
  | \u30B3\u30F3\u30D1\u30A4\u30EB\u8A00\u8A9E | \u30B9\u30AF\u30EA\u30D7\u30C8\u8A00\u8A9E| 
  |:-------------:|:-------------:|
  | C/C++         | Ruby          |
  | Java          | PHP           |
  | scala         | Python        |
  | C#            | JavaScript    |
  | Swift         | TypeScript    |
  \\\`\\\`\\\`

  ---
  ## \u305D\u306E\u4ED6
  ### Java

  \\\`\\\`\\\`java
  public class Hello{
    public static void main(String[] args){
      // java
      System.out.println("Hello Java World");
    }
  }
  \\\`\\\`\\\`

  ---
  ### C++
  \\\`\\\`\\\`cpp
   #include <iostream>
  using namespace std;
  int main(void){
     // c++
    cout << "Hello C++ world." << endl;
    return 0;
  }
  \\\`\\\`\\\`

  ---
  ### PHP
  \\\`\\\`\\\`php
  // php
  print "Hello PHP World";
  \\\`\\\`\\\`

  ---
  ### Ruby
  \\\`\\\`\\\`ruby
  # ruby
  puts 'Hello Ruby World'
  \\\`\\\`\\\`

  ---
  ### JavaScript
  \\\`\\\`\\\`javascript
  // javascript
  console.log("Hello JavaScript World");
  \\\`\\\`\\\`
  \`
}

export default {
  component: ArticleBody,
  title: 'Molecules/ArticleBody',
} as Meta<typeof ArticleBody>;

const Template: ComponentStory<typeof ArticleBody> = (args: BodyProps) => (
  <ArticleBody {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:53,line:216},endLoc:{col:1,line:218},startBody:{col:53,line:216},endBody:{col:1,line:218}}}}},component:h,title:"Molecules/ArticleBody"};const uu=e=>t(h,a({},e)),P=uu.bind({});P.args=a({},Xe);const tu=["Default"];var nu=Object.freeze(Object.defineProperty({__proto__:null,default:eu,Default:P,__namedExportsOrder:tu},Symbol.toStringTag,{value:"Module"}));const g=({category:e,className:u="flex"})=>{const{id:n}=e;return t("div",{className:u,children:t(m,{badge:e,link:`/category/${n}`,outlined:!1})})};try{g.displayName="ArticleCategory",g.__docgenInfo={description:"",displayName:"ArticleCategory",props:{category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"ArticleCategory"}},className:{defaultValue:{value:"flex"},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleCategory/ArticleCategory.tsx#ArticleCategory"]={docgenInfo:g.__docgenInfo,name:"ArticleCategory",path:"src/components/molecules/ArticleCategory/ArticleCategory.tsx#ArticleCategory"})}catch{}const ou={category:{id:"dummy-id",name:"duumy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}};var ru={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import { ArticleCategory, CategoryProps } from './ArticleCategory';

const defaultArgs: CategoryProps = {
  category: {
    id: 'dummy-id',
    name: 'duumy',
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
) => <MemoryRouter initialEntries={['/category/fnuhudhvufj']}><ArticleCategory {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:57,line:22},endLoc:{col:106,line:24},startBody:{col:57,line:22},endBody:{col:106,line:24}}}}},component:g,title:"Molecules/ArticleCategory"};const au=e=>t(A,{initialEntries:["/category/fnuhudhvufj"],children:t(g,a({},e))}),q=au.bind({});q.args=a({},ou);const su=["Default"];var lu=Object.freeze(Object.defineProperty({__proto__:null,default:ru,Default:q,__namedExportsOrder:su},Symbol.toStringTag,{value:"Module"}));const y=({tag:e,className:u="flex"})=>{const{id:n}=e;return t("div",{className:u,children:t(m,{badge:e,link:`/tag/${n}`,outlined:!0})})};try{y.displayName="ArticleTag",y.__docgenInfo={description:"",displayName:"ArticleTag",props:{tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"ArticleTag"}},className:{defaultValue:{value:"flex"},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleTag/ArticleTag.tsx#ArticleTag"]={docgenInfo:y.__docgenInfo,name:"ArticleTag",path:"src/components/molecules/ArticleTag/ArticleTag.tsx#ArticleTag"})}catch{}const iu=e=>({id:`dummy-${e}`,name:`duumy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),cu={tag:iu(0)};var du={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleTag, TagProps } from './ArticleTag';

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`duumy\${i}\`,
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
});

const defaultArgs: TagProps = {
  tag: templateTag(0),
};

export default {
  component: ArticleTag,
  title: 'Molecules/ArticleTag',
} as Meta<typeof ArticleTag>;

const Template: ComponentStory<typeof ArticleTag> = (args: TagProps) => (
  <MemoryRouter initialEntries={['/tag/fnuhudhvufj']}>
    <ArticleTag {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:52,line:24},endLoc:{col:1,line:28},startBody:{col:52,line:24},endBody:{col:1,line:28}}}}},component:y,title:"Molecules/ArticleTag"};const mu=e=>t(A,{initialEntries:["/tag/fnuhudhvufj"],children:t(y,a({},e))}),V=mu.bind({});V.args=a({},cu);const gu=["Default"];var pu=Object.freeze(Object.defineProperty({__proto__:null,default:du,Default:V,__namedExportsOrder:gu},Symbol.toStringTag,{value:"Module"}));const p=({tags:e,className:u=""})=>{const n=B("flex flex-wrap",u);return t("div",{className:n,children:e.map(o=>t(y,{tag:o,className:"m-1"}))})};try{p.displayName="ArticleTags",p.__docgenInfo={description:"",displayName:"ArticleTags",props:{tags:{defaultValue:null,description:"",name:"tags",required:!0,type:{name:"ArticleTag[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleTags/ArticleTags.tsx#ArticleTags"]={docgenInfo:p.__docgenInfo,name:"ArticleTags",path:"src/components/molecules/ArticleTags/ArticleTags.tsx#ArticleTags"})}catch{}const Bu=e=>({id:`dummy-${e}`,name:`duumy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),Au=(e,u)=>[...new Array(e)].map((n,o)=>u(o)),fu={tags:Au(5,Bu)};var yu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleTags, TagsProps } from './ArticleTags';

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`duumy\${i}\`,
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
  <MemoryRouter initialEntries={['/tag/fnuhudhvufj']}>
    <ArticleTags {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:53,line:28},endLoc:{col:1,line:32},startBody:{col:53,line:28},endBody:{col:1,line:32}}}}},component:p,title:"Molecules/ArticleTags"};const Cu=e=>t(A,{initialEntries:["/tag/fnuhudhvufj"],children:t(p,a({},e))}),z=Cu.bind({});z.args=a({},fu);const _u=["Default"];var hu=Object.freeze(Object.defineProperty({__proto__:null,default:yu,Default:z,__namedExportsOrder:_u},Symbol.toStringTag,{value:"Module"}));const F=({article:e})=>{const{id:u,title:n,summary:o,tags:r,category:s}=e;return t("div",{className:"flex justify-center",children:E("div",{className:"m-1 p-3 w-full md:w-4/5 border-2 border-blue-500 rounded-lg",children:[t(g,{category:s,className:"flex justify-end items-center"}),t(l,{cp:t(d,{hLv:2,text:n,underlined:!1,className:"text-xl text-blue-500 hover:opacity-70"}),link:`/article/${u}`}),t(i,{text:o,className:"text-sm"}),t("div",{className:"border border-b-1 border-blue-500"}),t(p,{tags:r,className:"py-2"})]})})};try{F.displayName="ArticleHeader",F.__docgenInfo={description:"",displayName:"ArticleHeader",props:{article:{defaultValue:null,description:"",name:"article",required:!0,type:{name:"Article"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ArticleHeader/ArticleHeader.tsx#ArticleHeader"]={docgenInfo:F.__docgenInfo,name:"ArticleHeader",path:"src/components/organisms/ArticleHeader/ArticleHeader.tsx#ArticleHeader"})}catch{}const Fu=e=>({id:`dummy-${e}`,name:`duumy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),bu=`
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
`,Eu=e=>({id:`article-${e}`,createdAt:"2022/1/1",updatedAt:"2022/12/31",title:`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002${e}`,summary:"\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF",body:bu,tags:xu(5,Fu),category:{id:"dummy-id",name:"duumy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}}),xu=(e,u)=>[...new Array(e)].map((n,o)=>u(o)),vu={article:Eu(1)};var Du={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleHeader, HeaderProps } from './ArticleHeader';

const templateTag = (i: number): ArticleTag => ({
    id: \`dummy-\${i}\`,
    name: \`duumy\${i}\`,
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
    name: 'duumy',
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

const defaultArgs: HeaderProps = {
  article: templateArticle(1),
};

export default {
  component: ArticleHeader,
  title: 'Molecules/ArticleHeader',
} as Meta<typeof ArticleHeader>;

const Template: ComponentStory<typeof ArticleHeader> = (
  args: HeaderProps
) => <MemoryRouter initialEntries={['/', 'article', 'fnuhudhvufj']}><ArticleHeader {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:55,line:61},endLoc:{col:110,line:63},startBody:{col:55,line:61},endBody:{col:110,line:63}}}}},component:F,title:"Molecules/ArticleHeader"};const Tu=e=>t(A,{initialEntries:["/","article","fnuhudhvufj"],children:t(F,a({},e))}),Y=Tu.bind({});Y.args=a({},vu);const Su=["Default"];var Lu=Object.freeze(Object.defineProperty({__proto__:null,default:Du,Default:Y,__namedExportsOrder:Su},Symbol.toStringTag,{value:"Module"}));const C=({article:e})=>{const{id:u,title:n,summary:o,tags:r,category:s}=e;return t("div",{className:"flex justify-center",children:E("div",{className:"m-1 p-3 w-full md:w-4/5 border-2 border-blue-500 rounded-lg",children:[t(g,{category:s,className:"flex justify-end items-center"}),t(l,{cp:t(d,{hLv:2,text:n,underlined:!1,className:"text-xl text-blue-500 hover:opacity-70"}),link:`/article/${u}`}),t(i,{text:o,className:"text-sm"}),t("div",{className:"border border-b-1 border-blue-500"}),t(p,{tags:r,className:"py-2"})]})})};try{C.displayName="ArticleListItem",C.__docgenInfo={description:"",displayName:"ArticleListItem",props:{article:{defaultValue:null,description:"",name:"article",required:!0,type:{name:"Article"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ArticleListItem/ArticleListItem.tsx#ArticleListItem"]={docgenInfo:C.__docgenInfo,name:"ArticleListItem",path:"src/components/organisms/ArticleListItem/ArticleListItem.tsx#ArticleListItem"})}catch{}const b=({articleList:e})=>t(x,{children:e.map(u=>t(C,{article:u}))});try{b.displayName="ArticleList",b.__docgenInfo={description:"",displayName:"ArticleList",props:{articleList:{defaultValue:null,description:"",name:"articleList",required:!0,type:{name:"Article[]"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ArticleList/ArticleList.tsx#ArticleList"]={docgenInfo:b.__docgenInfo,name:"ArticleList",path:"src/components/organisms/ArticleList/ArticleList.tsx#ArticleList"})}catch{}const ku=e=>({id:`dummy-${e}`,name:`duumy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),Ou=`
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
`,wu=e=>({id:e,createdAt:"2022/1/1",updatedAt:"2022/12/31",title:`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002${e}`,summary:"\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF",body:Ou,tags:K(5,ku),category:{id:"dummy-id",name:"duumy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}}),K=(e,u)=>[...new Array(e)].map((n,o)=>u(o)),Hu={articleList:K(5,wu)};var Mu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleList, ListProps } from './ArticleList';

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`duumy\${i}\`,
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
    name: 'duumy',
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
`,locationsMap:{default:{startLoc:{col:53,line:61},endLoc:{col:1,line:63},startBody:{col:53,line:61},endBody:{col:1,line:63}}}}},component:b,title:"Molecules/ArticleList"};const $u=e=>t(A,{initialEntries:["/","article"],children:t(b,a({},e))}),J=$u.bind({});J.args=a({},Hu);const Iu=["Default"];var ju=Object.freeze(Object.defineProperty({__proto__:null,default:Mu,Default:J,__namedExportsOrder:Iu},Symbol.toStringTag,{value:"Module"}));const Nu=e=>({id:`dummy-${e}`,name:`duumy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),Ru=`
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
`,Pu=e=>({id:`article-${e}`,createdAt:"2022/1/1",updatedAt:"2022/12/31",title:`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002${e}`,summary:"\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF",body:Ru,tags:qu(5,Nu),category:{id:"dummy-id",name:"duumy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}}),qu=(e,u)=>[...new Array(e)].map((n,o)=>u(o)),Vu={article:Pu(1)};var zu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleListItem, ListItemProps } from './ArticleListItem';

const templateTag = (i: number): ArticleTag => ({
    id: \`dummy-\${i}\`,
    name: \`duumy\${i}\`,
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
    name: 'duumy',
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
`,locationsMap:{default:{startLoc:{col:57,line:61},endLoc:{col:112,line:63},startBody:{col:57,line:61},endBody:{col:112,line:63}}}}},component:C,title:"Molecules/ArticleListItem"};const Yu=e=>t(A,{initialEntries:["/","article","fnuhudhvufj"],children:t(C,a({},e))}),W=Yu.bind({});W.args=a({},Vu);const Ku=["Default"];var Ju=Object.freeze(Object.defineProperty({__proto__:null,default:zu,Default:W,__namedExportsOrder:Ku},Symbol.toStringTag,{value:"Module"}));const G=()=>{const e=new Date().getFullYear();return t("div",{className:"bg-blue-500 w-full",children:E("p",{children:["\xA9 ",e]})})};var Wu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { Footer  } from './Footer';

export default {
  component: Footer,
  title: 'Organisms/Footer',
} as Meta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <Footer />
);

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:48,line:9},endLoc:{col:1,line:11},startBody:{col:48,line:9},endBody:{col:1,line:11}}}}},component:G,title:"Organisms/Footer"};const Gu=()=>t(G,{}),Qu=Gu.bind({}),Uu=["Default"];var Zu=Object.freeze(Object.defineProperty({__proto__:null,default:Wu,Default:Qu,__namedExportsOrder:Uu},Symbol.toStringTag,{value:"Module"}));const Xu=[];var et=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:Xu},Symbol.toStringTag,{value:"Module"}));const ut=[];var tt=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:ut},Symbol.toStringTag,{value:"Module"}));function Q(e){return{"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx":De,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseHeading/BaseHeading.stories.tsx":Oe,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseImg/BaseImg.stories.tsx":je,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseLink/BaseLink.stories.tsx":Ve,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseText/BaseText.stories.tsx":We,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBadge/ArticleBadge.stories.tsx":Ze,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBody/ArticleBody.stories.tsx":nu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx":lu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTag/ArticleTag.stories.tsx":pu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTags/ArticleTags.stories.tsx":hu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleHeader/ArticleHeader.stories.tsx":Lu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleList/ArticleList.stories.tsx":ju,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx":Ju,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Footer/Footer.stories.tsx":Zu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Header/Header.stories.tsx":et,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Navigation/Navigation.stories.tsx":tt}[e]}Object.assign(Q,{keys:()=>["/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseHeading/BaseHeading.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseImg/BaseImg.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseLink/BaseLink.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseText/BaseText.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBadge/ArticleBadge.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBody/ArticleBody.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTag/ArticleTag.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTags/ArticleTags.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleHeader/ArticleHeader.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleList/ArticleList.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Footer/Footer.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Header/Header.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Navigation/Navigation.stories.tsx"],resolve:e=>({"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx":"./src/components/atoms/BaseBtn/BaseBtn.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseHeading/BaseHeading.stories.tsx":"./src/components/atoms/BaseHeading/BaseHeading.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseImg/BaseImg.stories.tsx":"./src/components/atoms/BaseImg/BaseImg.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseLink/BaseLink.stories.tsx":"./src/components/atoms/BaseLink/BaseLink.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseText/BaseText.stories.tsx":"./src/components/atoms/BaseText/BaseText.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBadge/ArticleBadge.stories.tsx":"./src/components/molecules/ArticleBadge/ArticleBadge.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBody/ArticleBody.stories.tsx":"./src/components/molecules/ArticleBody/ArticleBody.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx":"./src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTag/ArticleTag.stories.tsx":"./src/components/molecules/ArticleTag/ArticleTag.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTags/ArticleTags.stories.tsx":"./src/components/molecules/ArticleTags/ArticleTags.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleHeader/ArticleHeader.stories.tsx":"./src/components/organisms/ArticleHeader/ArticleHeader.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleList/ArticleList.stories.tsx":"./src/components/organisms/ArticleList/ArticleList.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx":"./src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Footer/Footer.stories.tsx":"./src/components/organisms/Footer/Footer.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Header/Header.stories.tsx":"./src/components/organisms/Header/Header.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Navigation/Navigation.stories.tsx":"./src/components/organisms/Navigation/Navigation.stories.tsx"})[e]});function nt(e){e(Q,{hot:!1},!1)}const ot=[le,ie,ce,de,me,ge,pe,Be,Ae,fe,he].filter(Boolean);ot.forEach(e=>{Object.keys(e).forEach(u=>{const n=e[u];switch(u){case"args":case"argTypes":return se.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(o=>ae(o,!1));case"loaders":return n.forEach(o=>re(o,!1));case"parameters":return T(a({},n),!1);case"argTypesEnhancers":return n.forEach(o=>oe(o));case"argsEnhancers":return n.forEach(o=>ne(o));case"globals":case"globalTypes":{const o={};return o[u]=n,T(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(u+" was not supported :( !")}})});nt(ye);
//# sourceMappingURL=iframe.4327c58e.js.map
