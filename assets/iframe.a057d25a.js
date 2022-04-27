var oe=Object.defineProperty,re=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var L=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t)=>{for(var n in t||(t={}))se.call(t,n)&&L(e,n,t[n]);if(k)for(var n of k(t))ie.call(t,n)&&L(e,n,t[n]);return e},O=(e,t)=>re(e,ae(t));import{c as m,j as u,a as $,L as le,b,M as g,m as P,l as ce,d as H,F as de,e as w,f as me,g as ge,h as pe,i as Be,k as Ae,n as fe,o as ye,p as Ce,q as _e,r as he,s as Fe,t as be,u as Ee,v as xe,w as ve,x as De}from"./vendor.dc8dcf25.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Te();const Se={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var ke=Object.freeze(Object.defineProperty({__proto__:null,parameters:Se},Symbol.toStringTag,{value:"Module"}));const Le=e=>{switch(e){case"sm":return"py-2 px-6 text-base";case"lg":return"py-2 px-10 text-xl";default:return"py-2 px-8 text-lg"}},E=({text:e,fn:t,type:n="button",outlined:o=!1,rounded:r=!1,size:s="md"})=>{const i=m(Le(s),o?"bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white":"bg-blue-700 text-white hover:border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500",r?"rounded-full":"rounded");return u("button",{type:n,onClick:t(),className:i,children:e})};try{E.displayName="BaseBtn",E.__docgenInfo={description:"",displayName:"BaseBtn",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},fn:{defaultValue:null,description:"",name:"fn",required:!0,type:{name:"Function"}},outlined:{defaultValue:{value:"false"},description:"",name:"outlined",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseBtn/BaseBtn.tsx#BaseBtn"]={docgenInfo:E.__docgenInfo,name:"BaseBtn",path:"src/components/atoms/BaseBtn/BaseBtn.tsx#BaseBtn"})}catch{}const Oe={type:"button",text:"button",fn:()=>$("ignite"),outlined:!1,rounded:!1,size:"sm"};var we={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:49,line:22},endLoc:{col:1,line:24},startBody:{col:49,line:22},endBody:{col:1,line:24}}}}},component:E,title:"Atoms/BaseBtn",args:{fn:()=>$("ignite")}};const Me=e=>u(E,a({},e)),j=Me.bind({});j.args=a({},Oe);const Ie=["Default"];var $e=Object.freeze(Object.defineProperty({__proto__:null,default:we,Default:j,__namedExportsOrder:Ie},Symbol.toStringTag,{value:"Module"}));const B=({text:e,hLv:t=1,underlined:n=!1,className:o=""})=>{const r=`h${t}`,s=m({"border-b-2 border-indigo-400 pb-2":n},o);return u(r,{className:s,children:e})};try{B.displayName="BaseHeading",B.__docgenInfo={description:"",displayName:"BaseHeading",props:{hLv:{defaultValue:{value:"1"},description:"",name:"hLv",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},underlined:{defaultValue:{value:"false"},description:"",name:"underlined",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseHeading/BaseHeading.tsx#BaseHeading"]={docgenInfo:B.__docgenInfo,name:"BaseHeading",path:"src/components/atoms/BaseHeading/BaseHeading.tsx#BaseHeading"})}catch{}const Pe={hLv:1,text:"SampleHeading",underlined:!1};var He={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},component:B,title:"Atoms/BaseHeading"};const je=e=>u(B,a({},e)),N=je.bind({});N.args=a({},Pe);const Ne=["Default"];var Re=Object.freeze(Object.defineProperty({__proto__:null,default:He,Default:N,__namedExportsOrder:Ne},Symbol.toStringTag,{value:"Module"}));const qe=e=>{switch(e){case"sm":return"w-8 h-8";case"lg":return"w-15 h-15";case"md":return"w-10 h-10";default:return""}},_=({img:e,alt:t,size:n="sm",className:o=""})=>{const r=m(qe(n),o);return u("img",{src:e,alt:t,className:r})};try{_.displayName="BaseImg",_.__docgenInfo={description:"",displayName:"BaseImg",props:{img:{defaultValue:null,description:"",name:"img",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseImg/BaseImg.tsx#BaseImg"]={docgenInfo:_.__docgenInfo,name:"BaseImg",path:"src/components/atoms/BaseImg/BaseImg.tsx#BaseImg"})}catch{}const Ve={img:"http://placehold.jp/150x150.png",alt:"\u30C0\u30DF\u30FC\u753B\u50CF",size:"sm"};var Ye={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:49,line:15},endLoc:{col:1,line:17},startBody:{col:49,line:15},endBody:{col:1,line:17}}}}},component:_,title:"Atoms/BaseImg"};const Ke=e=>u(_,a({},e)),R=Ke.bind({});R.args=a({},Ve);const ze=["Default"];var Je=Object.freeze(Object.defineProperty({__proto__:null,default:Ye,Default:R,__namedExportsOrder:ze},Symbol.toStringTag,{value:"Module"}));const c=({children:e,link:t,className:n=""})=>{const o=m(n);return t.indexOf("http")!==-1?u("a",{href:t,className:o,children:e}):u(le,{to:t,className:o,children:e})};try{c.displayName="BaseLink",c.__docgenInfo={description:"",displayName:"BaseLink",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseLink/BaseLink.tsx#BaseLink"]={docgenInfo:c.__docgenInfo,name:"BaseLink",path:"src/components/atoms/BaseLink/BaseLink.tsx#BaseLink"})}catch{}const We={link:"https://example.com"};var Ge={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { BaseLink, LinkProps } from './BaseLink';

const defaultArgs: LinkProps = {
 link: 'https://example.com'
};

export default {
  component: BaseLink,
  title: 'Atoms/BaseLink',
} as Meta<typeof BaseLink>;

const Template: ComponentStory<typeof BaseLink> = (args: LinkProps) => (
  <BaseLink {...args}>dummyLink</BaseLink>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:50,line:13},endLoc:{col:1,line:15},startBody:{col:50,line:13},endBody:{col:1,line:15}}}}},component:c,title:"Atoms/BaseLink"};const Qe=e=>u(c,O(a({},e),{children:"dummyLink"})),q=Qe.bind({});q.args=a({},We);const Ue=["Default"];var Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Ge,Default:q,__namedExportsOrder:Ue},Symbol.toStringTag,{value:"Module"}));const d=({text:e,className:t="text-xl"})=>{const n=m(t);return u("p",{className:n,children:e})};try{d.displayName="BaseText",d.__docgenInfo={description:"",displayName:"BaseText",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},className:{defaultValue:{value:"text-xl"},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseText/BaseText.tsx#BaseText"]={docgenInfo:d.__docgenInfo,name:"BaseText",path:"src/components/atoms/BaseText/BaseText.tsx#BaseText"})}catch{}const Xe={text:"SampleText"};var eu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:50,line:13},endLoc:{col:1,line:15},startBody:{col:50,line:13},endBody:{col:1,line:15}}}}},component:d,title:"Atoms/BaseText"};const uu=e=>u(d,a({},e)),V=uu.bind({});V.args=a({},Xe);const tu=["Default"];var nu=Object.freeze(Object.defineProperty({__proto__:null,default:eu,Default:V,__namedExportsOrder:tu},Symbol.toStringTag,{value:"Module"}));const A=({badge:e,link:t,outlined:n=!1,className:o="flex justify-self-center items-center"})=>{const r=m(n?"bg-white border border-blue-500 text-blue-500":"bg-blue-700 text-white","px-2 rounded-full hover:opacity-70",o),{name:s,img:i}=e,{url:p}=i;return u(c,{link:t,children:b("div",{className:r,children:[u(d,{text:s,className:"text-xs"}),u(_,{img:p,alt:`${s}\u306E\u30ED\u30B4`,size:"sm",className:"m-0 p-1.5"})]})})};try{A.displayName="ArticleBadge",A.__docgenInfo={description:"",displayName:"ArticleBadge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!0,type:{name:"any"}},outlined:{defaultValue:{value:"false"},description:"",name:"outlined",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},className:{defaultValue:{value:"flex justify-self-center items-center"},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleBadge/ArticleBadge.tsx#ArticleBadge"]={docgenInfo:A.__docgenInfo,name:"ArticleBadge",path:"src/components/molecules/ArticleBadge/ArticleBadge.tsx#ArticleBadge"})}catch{}const M={id:"dummy-id",name:"dummy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"},ou=e=>({id:`dummy-${e}`,name:`dummy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),I=ou(1);var ru={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleBadge, BadgeProps, BadgeType } from './ArticleBadge';


const CategoryArgs: BadgeType = {
  id: 'dummy-id',
  name: 'dummy',
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
};

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`dummy\${i}\`,
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
`,locationsMap:{category:{startLoc:{col:54,line:33},endLoc:{col:1,line:37},startBody:{col:54,line:33},endBody:{col:1,line:37}},tags:{startLoc:{col:54,line:33},endLoc:{col:1,line:37},startBody:{col:54,line:33},endBody:{col:1,line:37}}}}},component:A,title:"Molecules/ArticleBadge"};const Y=e=>u(g,{initialEntries:["/category/fnuhudhvufj"],children:u(A,a({},e))}),K=Y.bind({});K.args={badge:M,link:`category/${M.id}`,outlined:!1};const z=Y.bind({});z.args={badge:I,link:`/tag/${I.id}`,outlined:!0};const au=["Category","Tags"];var su=Object.freeze(Object.defineProperty({__proto__:null,default:ru,Category:K,Tags:z,__namedExportsOrder:au},Symbol.toStringTag,{value:"Module"}));P.setOptions({highlight(e,t){return ce.highlightAuto(e,[t]).value},breaks:!0,gfm:!0});const x=({body:e})=>{const t=P(e);return u("div",{className:"bg-gray-500 my-4 w-4/5 md:w-full",children:u("div",{dangerouslySetInnerHTML:{__html:t},className:"markdown-body"})})};try{x.displayName="ArticleBody",x.__docgenInfo={description:"",displayName:"ArticleBody",props:{body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleBody/ArticleBody.tsx#ArticleBody"]={docgenInfo:x.__docgenInfo,name:"ArticleBody",path:"src/components/molecules/ArticleBody/ArticleBody.tsx#ArticleBody"})}catch{}const iu={body:`# \u30B5\u30F3\u30D7\u30EB\u30C6\u30AD\u30B9\u30C8

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
  `};var lu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:53,line:216},endLoc:{col:1,line:218},startBody:{col:53,line:216},endBody:{col:1,line:218}}}}},component:x,title:"Molecules/ArticleBody"};const cu=e=>u(x,a({},e)),J=cu.bind({});J.args=a({},iu);const du=["Default"];var mu=Object.freeze(Object.defineProperty({__proto__:null,default:lu,Default:J,__namedExportsOrder:du},Symbol.toStringTag,{value:"Module"}));const f=({category:e,className:t="flex"})=>{const{id:n}=e;return u("div",{className:t,children:u(A,{badge:e,link:`/category/${n}`,outlined:!1})})};try{f.displayName="ArticleCategory",f.__docgenInfo={description:"",displayName:"ArticleCategory",props:{category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"ArticleCategory"}},className:{defaultValue:{value:"flex"},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleCategory/ArticleCategory.tsx#ArticleCategory"]={docgenInfo:f.__docgenInfo,name:"ArticleCategory",path:"src/components/molecules/ArticleCategory/ArticleCategory.tsx#ArticleCategory"})}catch{}const gu={category:{id:"dummy-id",name:"dummy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}};var pu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import { ArticleCategory, CategoryProps } from './ArticleCategory';

const defaultArgs: CategoryProps = {
  category: {
    id: 'dummy-id',
    name: 'dummy',
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
`,locationsMap:{default:{startLoc:{col:57,line:22},endLoc:{col:106,line:24},startBody:{col:57,line:22},endBody:{col:106,line:24}}}}},component:f,title:"Molecules/ArticleCategory"};const Bu=e=>u(g,{initialEntries:["/category/fnuhudhvufj"],children:u(f,a({},e))}),W=Bu.bind({});W.args=a({},gu);const Au=["Default"];var fu=Object.freeze(Object.defineProperty({__proto__:null,default:pu,Default:W,__namedExportsOrder:Au},Symbol.toStringTag,{value:"Module"}));const y=({pageInfo:e,className:t=""})=>{const{current:n,maxPage:o,pageKind:r}=e,s=m("flex -space-x-px justify-center",t),i=[...new Array(o)].map((l,T)=>T+1),p=l=>l===0?o:l===o+1?1:l;return b("ul",{className:s,children:[u("li",{className:"py-2 px-3 ml-0 leading-tight text-gray-500 hover:opacity-50",children:u(c,{link:`${r}/${p(n-1)}`,children:"<"})}),i.map(l=>u("li",{className:"py-2 px-3 ml-0 leading-tight text-gray-500 hover:opacity-50",children:u(c,{link:`${r}/${l}`,children:l},l)})),u("li",{className:"py-2 px-3 ml-0 leading-tight text-gray-500 hover:opacity-50",children:u(c,{link:`${r}/${p(n+1)}`,children:">"})})]})};try{y.displayName="ArticlePagination",y.__docgenInfo={description:"",displayName:"ArticlePagination",props:{pageInfo:{defaultValue:null,description:"",name:"pageInfo",required:!0,type:{name:"PageInfo"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticlePagination/ArticlePagination.tsx#ArticlePagination"]={docgenInfo:y.__docgenInfo,name:"ArticlePagination",path:"src/components/molecules/ArticlePagination/ArticlePagination.tsx#ArticlePagination"})}catch{}const yu={pageInfo:{current:0,maxPage:3,pageKind:""}};var Cu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import { ArticlePagination, PaginationProps } from './ArticlePagination';

const defaultArgs: PaginationProps = {
  pageInfo: {
    current: 0,
    maxPage: 3,
    pageKind: ''
  }
};

export default {
  component: ArticlePagination,
  title: 'Molecules/ArticlePagination',
} as Meta<typeof ArticlePagination>;

const Template: ComponentStory<typeof ArticlePagination> = (
  args: PaginationProps
) => <MemoryRouter initialEntries={['/category/fnuhudhvufj']}><ArticlePagination {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:59,line:18},endLoc:{col:108,line:20},startBody:{col:59,line:18},endBody:{col:108,line:20}}}}},component:y,title:"Molecules/ArticlePagination"};const _u=e=>u(g,{initialEntries:["/category/fnuhudhvufj"],children:u(y,a({},e))}),G=_u.bind({});G.args=a({},yu);const hu=["Default"];var Fu=Object.freeze(Object.defineProperty({__proto__:null,default:Cu,Default:G,__namedExportsOrder:hu},Symbol.toStringTag,{value:"Module"}));const h=({tag:e,className:t="flex"})=>{const{id:n}=e;return u("div",{className:t,children:u(A,{badge:e,link:`/tag/${n}`,outlined:!0})})};try{h.displayName="ArticleTag",h.__docgenInfo={description:"",displayName:"ArticleTag",props:{tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"ArticleTag"}},className:{defaultValue:{value:"flex"},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleTag/ArticleTag.tsx#ArticleTag"]={docgenInfo:h.__docgenInfo,name:"ArticleTag",path:"src/components/molecules/ArticleTag/ArticleTag.tsx#ArticleTag"})}catch{}const bu=e=>({id:`dummy-${e}`,name:`dummy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),Eu={tag:bu(0)};var xu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleTag, TagProps } from './ArticleTag';

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`dummy\${i}\`,
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
`,locationsMap:{default:{startLoc:{col:52,line:24},endLoc:{col:1,line:28},startBody:{col:52,line:24},endBody:{col:1,line:28}}}}},component:h,title:"Molecules/ArticleTag"};const vu=e=>u(g,{initialEntries:["/tag/fnuhudhvufj"],children:u(h,a({},e))}),Q=vu.bind({});Q.args=a({},Eu);const Du=["Default"];var Tu=Object.freeze(Object.defineProperty({__proto__:null,default:xu,Default:Q,__namedExportsOrder:Du},Symbol.toStringTag,{value:"Module"}));const C=({tags:e,className:t=""})=>{const n=m("flex flex-wrap",t);return u("div",{className:n,children:e.map(o=>u(h,{tag:o,className:"m-0.5"},o.id))})};try{C.displayName="ArticleTags",C.__docgenInfo={description:"",displayName:"ArticleTags",props:{tags:{defaultValue:null,description:"",name:"tags",required:!0,type:{name:"ArticleTag[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/molecules/ArticleTags/ArticleTags.tsx#ArticleTags"]={docgenInfo:C.__docgenInfo,name:"ArticleTags",path:"src/components/molecules/ArticleTags/ArticleTags.tsx#ArticleTags"})}catch{}const Su=e=>({id:`dummy-${e}`,name:`dummy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),ku=(e,t)=>[...new Array(e)].map((n,o)=>t(o)),Lu={tags:ku(5,Su)};var Ou={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleTags, TagsProps } from './ArticleTags';

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`dummy\${i}\`,
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
`,locationsMap:{default:{startLoc:{col:53,line:28},endLoc:{col:1,line:32},startBody:{col:53,line:28},endBody:{col:1,line:32}}}}},component:C,title:"Molecules/ArticleTags"};const wu=e=>u(g,{initialEntries:["/tag/fnuhudhvufj"],children:u(C,a({},e))}),U=wu.bind({});U.args=a({},Lu);const Mu=["Default"];var Iu=Object.freeze(Object.defineProperty({__proto__:null,default:Ou,Default:U,__namedExportsOrder:Mu},Symbol.toStringTag,{value:"Module"}));H.locale("ja");const v=({article:e})=>{const{id:t,title:n,summary:o,tags:r,category:s,createdAt:i,updatedAt:p}=e,l=(S="")=>S===""?"--/--/--":H(S).format("YYYY/M/D"),T={createdAt:l(i),updatedAt:l(p)};return u("div",{className:"flex justify-center",children:b("div",{className:"m-1 p-3 w-full border-2 border-blue-500 rounded-lg",children:[u(f,{category:s,className:"flex justify-end items-center"}),"\u4F5C\u6210\u65E5:"," ",u("time",{className:"mr-0.5 text-base tracking-widest",dateTime:i,children:T.createdAt}),"~ \u66F4\u65B0\u65E5:",u("time",{className:"ml-0.5 text-base tracking-widest",dateTime:p,children:T.updatedAt}),u(c,{link:`/article/${t}`,children:u(B,{hLv:2,text:n,underlined:!1,className:"text-xl text-blue-500 hover:opacity-70"})}),u(d,{text:o,className:"text-sm"}),u("div",{className:"border border-b-1 border-blue-500"}),u(C,{tags:r,className:"py-2"})]})})};try{v.displayName="ArticleHeader",v.__docgenInfo={description:"",displayName:"ArticleHeader",props:{article:{defaultValue:null,description:"",name:"article",required:!0,type:{name:"ArticleInfo"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ArticleHeader/ArticleHeader.tsx#ArticleHeader"]={docgenInfo:v.__docgenInfo,name:"ArticleHeader",path:"src/components/organisms/ArticleHeader/ArticleHeader.tsx#ArticleHeader"})}catch{}const $u=e=>({id:`dummy-${e}`,name:`dummy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),Pu=`
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
`,Hu=e=>({id:`article-${e}`,createdAt:"2022/1/1",updatedAt:"2022/12/31",title:`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002${e}`,summary:"\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF",body:Pu,tags:ju(5,$u),category:{id:"dummy-id",name:"dummy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}}),ju=(e,t)=>[...new Array(e)].map((n,o)=>t(o)),Nu={article:Hu(1)};var Ru={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleHeader, HeaderProps } from './ArticleHeader';

const templateTag = (i: number): ArticleTag => ({
    id: \`dummy-\${i}\`,
    name: \`dummy\${i}\`,
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
    name: 'dummy',
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
`,locationsMap:{default:{startLoc:{col:55,line:61},endLoc:{col:110,line:63},startBody:{col:55,line:61},endBody:{col:110,line:63}}}}},component:v,title:"Molecules/ArticleHeader"};const qu=e=>u(g,{initialEntries:["/","article","fnuhudhvufj"],children:u(v,a({},e))}),Z=qu.bind({});Z.args=a({},Nu);const Vu=["Default"];var Yu=Object.freeze(Object.defineProperty({__proto__:null,default:Ru,Default:Z,__namedExportsOrder:Vu},Symbol.toStringTag,{value:"Module"}));const F=({article:e})=>{const{id:t,title:n,summary:o,tags:r,category:s}=e;return u("li",{className:"flex justify-center",children:b("div",{className:"m-1 p-3 w-full border-2 border-blue-500 rounded-lg",children:[u(f,{category:s,className:"flex justify-end items-center"}),u(c,{link:`/article/${t}`,children:u(B,{hLv:2,text:n,underlined:!1,className:"text-xl text-blue-500 hover:opacity-70"})}),u(d,{text:o,className:"text-sm"}),u("div",{className:"border border-b-1 border-blue-500"}),u(C,{tags:r,className:"py-2"})]})})};try{F.displayName="ArticleListItem",F.__docgenInfo={description:"",displayName:"ArticleListItem",props:{article:{defaultValue:null,description:"",name:"article",required:!0,type:{name:"ArticleInfo"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ArticleListItem/ArticleListItem.tsx#ArticleListItem"]={docgenInfo:F.__docgenInfo,name:"ArticleListItem",path:"src/components/organisms/ArticleListItem/ArticleListItem.tsx#ArticleListItem"})}catch{}const D=({pageInfo:e,articleList:t})=>t!=null?b(de,{children:[u(y,{pageInfo:e}),u("ul",{children:t.map(n=>u(F,{article:n},n.id))}),u(y,{pageInfo:e})]}):u(d,{text:"\u8A18\u4E8B\u304C\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"});try{D.displayName="ArticleList",D.__docgenInfo={description:"",displayName:"ArticleList",props:{pageInfo:{defaultValue:null,description:"",name:"pageInfo",required:!0,type:{name:"PageInfo"}},articleList:{defaultValue:null,description:"",name:"articleList",required:!0,type:{name:"ArticleInfo[] | null"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/organisms/ArticleList/ArticleList.tsx#ArticleList"]={docgenInfo:D.__docgenInfo,name:"ArticleList",path:"src/components/organisms/ArticleList/ArticleList.tsx#ArticleList"})}catch{}const Ku=e=>({id:`dummy-${e}`,name:`dummy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),zu=`
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
`,Ju=e=>({id:e,createdAt:"2022/1/1",updatedAt:"2022/12/31",title:`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002${e}`,summary:"\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF",body:zu,tags:X(5,Ku),category:{id:"dummy-id",name:"dummy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}}),X=(e,t)=>[...new Array(e)].map((n,o)=>t(o)),Wu={articleList:X(5,Ju)};var Gu={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleList, ListProps } from './ArticleList';

const templateTag = (i: number): ArticleTag => ({
  id: \`dummy-\${i}\`,
  name: \`dummy\${i}\`,
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
    name: 'dummy',
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
`,locationsMap:{default:{startLoc:{col:53,line:61},endLoc:{col:1,line:63},startBody:{col:53,line:61},endBody:{col:1,line:63}}}}},component:D,title:"Molecules/ArticleList"};const Qu=e=>u(g,{initialEntries:["/","article"],children:u(D,a({},e))}),ee=Qu.bind({});ee.args=a({},Wu);const Uu=["Default"];var Zu=Object.freeze(Object.defineProperty({__proto__:null,default:Gu,Default:ee,__namedExportsOrder:Uu},Symbol.toStringTag,{value:"Module"}));const Xu=e=>({id:`dummy-${e}`,name:`dummy${e}`,img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}),et=`
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
`,ut=e=>({id:`article-${e}`,createdAt:"2022/1/1",updatedAt:"2022/12/31",title:`\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002${e}`,summary:"\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF\u3001\u5B57\u9593\u3001\u884C\u9593\u7B49\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u5165\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u6587\u7AE0\u306F\u30C0\u30DF\u30FC\u3067\u3059\u3002\u6587\u5B57\u306E\u5927\u304D\u3055\u3001\u91CF",body:et,tags:tt(5,Xu),category:{id:"dummy-id",name:"dummy",img:{url:"http://placehold.jp/150x150.png"},createdAt:"2022/1/1",updatedAt:"2022/12/31"}}),tt=(e,t)=>[...new Array(e)].map((n,o)=>t(o)),nt={article:ut(1)};var ot={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleListItem, ListItemProps } from './ArticleListItem';

const templateTag = (i: number): ArticleTag => ({
    id: \`dummy-\${i}\`,
    name: \`dummy\${i}\`,
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
    name: 'dummy',
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
`,locationsMap:{default:{startLoc:{col:57,line:61},endLoc:{col:112,line:63},startBody:{col:57,line:61},endBody:{col:112,line:63}}}}},component:F,title:"Molecules/ArticleListItem"};const rt=e=>u(g,{initialEntries:["/","article","fnuhudhvufj"],children:u(F,a({},e))}),ue=rt.bind({});ue.args=a({},nt);const at=["Default"];var st=Object.freeze(Object.defineProperty({__proto__:null,default:ot,Default:ue,__namedExportsOrder:at},Symbol.toStringTag,{value:"Module"}));const it=[];var lt=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:it},Symbol.toStringTag,{value:"Module"}));const te=()=>{const e=new Date().getFullYear();return u("div",{className:"bg-blue-500 w-full",children:b("p",{children:["\xA9 ",e]})})};var ct={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { Footer  } from './Footer';

export default {
  component: Footer,
  title: 'Organisms/Footer',
} as Meta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <Footer />
);

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:48,line:9},endLoc:{col:1,line:11},startBody:{col:48,line:9},endBody:{col:1,line:11}}}}},component:te,title:"Organisms/Footer"};const dt=()=>u(te,{}),mt=dt.bind({}),gt=["Default"];var pt=Object.freeze(Object.defineProperty({__proto__:null,default:ct,Default:mt,__namedExportsOrder:gt},Symbol.toStringTag,{value:"Module"}));const Bt=[];var At=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:Bt},Symbol.toStringTag,{value:"Module"}));const ft=[];var yt=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:ft},Symbol.toStringTag,{value:"Module"}));function ne(e){return{"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx":$e,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseHeading/BaseHeading.stories.tsx":Re,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseImg/BaseImg.stories.tsx":Je,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseLink/BaseLink.stories.tsx":Ze,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseText/BaseText.stories.tsx":nu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBadge/ArticleBadge.stories.tsx":su,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBody/ArticleBody.stories.tsx":mu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx":fu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticlePagination/ArticlePagination.stories.tsx":Fu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTag/ArticleTag.stories.tsx":Tu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTags/ArticleTags.stories.tsx":Iu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleHeader/ArticleHeader.stories.tsx":Yu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleList/ArticleList.stories.tsx":Zu,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx":st,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ClassificationListItem/ClassificationListItem.stories.tsx":lt,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Footer/Footer.stories.tsx":pt,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Header/Header.stories.tsx":At,"/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Navigation/Navigation.stories.tsx":yt}[e]}Object.assign(ne,{keys:()=>["/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseHeading/BaseHeading.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseImg/BaseImg.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseLink/BaseLink.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseText/BaseText.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBadge/ArticleBadge.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBody/ArticleBody.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticlePagination/ArticlePagination.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTag/ArticleTag.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTags/ArticleTags.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleHeader/ArticleHeader.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleList/ArticleList.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ClassificationListItem/ClassificationListItem.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Footer/Footer.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Header/Header.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Navigation/Navigation.stories.tsx"],resolve:e=>({"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx":"./src/components/atoms/BaseBtn/BaseBtn.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseHeading/BaseHeading.stories.tsx":"./src/components/atoms/BaseHeading/BaseHeading.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseImg/BaseImg.stories.tsx":"./src/components/atoms/BaseImg/BaseImg.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseLink/BaseLink.stories.tsx":"./src/components/atoms/BaseLink/BaseLink.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseText/BaseText.stories.tsx":"./src/components/atoms/BaseText/BaseText.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBadge/ArticleBadge.stories.tsx":"./src/components/molecules/ArticleBadge/ArticleBadge.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleBody/ArticleBody.stories.tsx":"./src/components/molecules/ArticleBody/ArticleBody.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx":"./src/components/molecules/ArticleCategory/ArticleCategory.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticlePagination/ArticlePagination.stories.tsx":"./src/components/molecules/ArticlePagination/ArticlePagination.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTag/ArticleTag.stories.tsx":"./src/components/molecules/ArticleTag/ArticleTag.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/molecules/ArticleTags/ArticleTags.stories.tsx":"./src/components/molecules/ArticleTags/ArticleTags.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleHeader/ArticleHeader.stories.tsx":"./src/components/organisms/ArticleHeader/ArticleHeader.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleList/ArticleList.stories.tsx":"./src/components/organisms/ArticleList/ArticleList.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx":"./src/components/organisms/ArticleListItem/ArticleListItem.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/ClassificationListItem/ClassificationListItem.stories.tsx":"./src/components/organisms/ClassificationListItem/ClassificationListItem.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Footer/Footer.stories.tsx":"./src/components/organisms/Footer/Footer.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Header/Header.stories.tsx":"./src/components/organisms/Header/Header.stories.tsx","/home/runner/work/vite-react-blog/vite-react-blog/src/components/organisms/Navigation/Navigation.stories.tsx":"./src/components/organisms/Navigation/Navigation.stories.tsx"})[e]});function Ct(e){e(ne,{hot:!1},!1)}const _t=[fe,ye,Ce,_e,he,Fe,be,Ee,xe,ve,ke].filter(Boolean);_t.forEach(e=>{Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"args":case"argTypes":return Ae.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(o=>Be(o,!1));case"loaders":return n.forEach(o=>pe(o,!1));case"parameters":return w(a({},n),!1);case"argTypesEnhancers":return n.forEach(o=>ge(o));case"argsEnhancers":return n.forEach(o=>me(o));case"globals":case"globalTypes":{const o={};return o[t]=n,w(o,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});Ct(De);
//# sourceMappingURL=iframe.a057d25a.js.map
