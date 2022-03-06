var B=Object.defineProperty;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var u=(e,n,t)=>n in e?B(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(e,n)=>{for(var t in n||(n={}))y.call(n,t)&&u(e,t,n[t]);if(c)for(var t of c(n))b.call(n,t)&&u(e,t,n[t]);return e};import{j as f,a as p,b as d,c as _,d as h,e as v,f as x,l as O,g as S,h as T,i as E,k as A,m as L,n as P,o as j,p as w,q as D,r as k,s as q}from"./vendor.94b9063e.js";const C=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}};C();const M={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var z=Object.freeze(Object.defineProperty({__proto__:null,parameters:M},Symbol.toStringTag,{value:"Module"}));const s=({text:e,fn:n,type:t="button"})=>f("button",{type:t,onClick:n(),children:e});try{s.displayName="BaseBtn",s.__docgenInfo={description:"",displayName:"BaseBtn",props:{type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},fn:{defaultValue:null,description:"",name:"fn",required:!0,type:{name:"Function"}},outlined:{defaultValue:null,description:"",name:"outlined",required:!0,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/atoms/BaseBtn/BaseBtn.tsx#BaseBtn"]={docgenInfo:s.__docgenInfo,name:"BaseBtn",path:"src/components/atoms/BaseBtn/BaseBtn.tsx#BaseBtn"})}catch{}const N={type:"button",text:"button",fn:()=>p("ignite"),outlined:!1,size:"small"};var I={parameters:{storySource:{source:`import { Meta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BaseBtn, BtnProps } from './BaseBtn';

const defaultArgs: BtnProps = {
  type: 'button',
  text: 'button',
  fn: () => action('ignite'),
  outlined: false,
  size: 'small',
};

export default {
  component: BaseBtn,
  title: 'Atoms/BaseBtn',
  argTypes: {
    type: { controle: { type: 'inline-radio', options: ['button', 'submit'] } },
    text: 'button',
    outlined: {
      controle: {
        type: 'boolean',
      },
    },
  },
  args: {
    fn: () => action('ignite'),
  },
} as Meta<typeof BaseBtn>;

const Template: ComponentStory<typeof BaseBtn> = (args: BtnProps) => (
  <BaseBtn {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
`,locationsMap:{default:{startLoc:{col:49,line:30},endLoc:{col:1,line:32},startBody:{col:49,line:30},endBody:{col:1,line:32}}}}},component:s,title:"Atoms/BaseBtn",argTypes:{type:{controle:{type:"inline-radio",options:["button","submit"]}},text:"button",outlined:{controle:{type:"boolean"}}},args:{fn:()=>p("ignite")}};const R=e=>f(s,l({},e)),m=R.bind({});m.args=l({},N);const V=["Default"];var K=Object.freeze(Object.defineProperty({__proto__:null,default:I,Default:m,__namedExportsOrder:V},Symbol.toStringTag,{value:"Module"}));function g(e){return{"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx":K}[e]}Object.assign(g,{keys:()=>["/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx"],resolve:e=>({"/home/runner/work/vite-react-blog/vite-react-blog/src/components/atoms/BaseBtn/BaseBtn.stories.tsx":"./src/components/atoms/BaseBtn/BaseBtn.stories.tsx"})[e]});function F(e){e(g,{hot:!1},!1)}const Y=[S,T,E,A,L,P,j,w,D,k,z].filter(Boolean);Y.forEach(e=>{Object.keys(e).forEach(n=>{const t=e[n];switch(n){case"args":case"argTypes":return O.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach(r=>x(r,!1));case"loaders":return t.forEach(r=>v(r,!1));case"parameters":return d(l({},t),!1);case"argTypesEnhancers":return t.forEach(r=>h(r));case"argsEnhancers":return t.forEach(r=>_(r));case"globals":case"globalTypes":{const r={};return r[n]=t,d(r,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(n+" was not supported :( !")}})});F(q);
//# sourceMappingURL=iframe.0d153ccc.js.map
