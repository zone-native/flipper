"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7713],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>s});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){return function(n){var t=u(n.components);return i.createElement(e,l({},n,{components:t}))}},u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(t),c=r,g=s["".concat(o,".").concat(c)]||s[c]||m[c]||l;return t?i.createElement(g,a(a({ref:n},d),{},{components:t})):i.createElement(g,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var d=2;d<l;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1745:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>d,toc:()=>s,default:()=>c});var i=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],a={id:"deeplinks",title:"Using deeplinks"},p=void 0,d={unversionedId:"extending/deeplinks",id:"extending/deeplinks",isDocsHomePage:!1,title:"Using deeplinks",description:"Flipper supports opening Flipper through deeplinks, by using the flipper:// protocol.",source:"@site/../docs/extending/deeplinks.mdx",sourceDirName:"extending",slug:"/extending/deeplinks",permalink:"/docs/extending/deeplinks",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/deeplinks.mdx",version:"current",frontMatter:{id:"deeplinks",title:"Using deeplinks"},sidebar:"extending",previous:{title:"Styling Components",permalink:"/docs/extending/styling-components"},next:{title:"UI Components",permalink:"/docs/extending/ui-components"}},s=[{value:"open-plugin",id:"open-plugin",children:[{value:"Handling deeplinks in the plugin",id:"handling-deeplinks-in-the-plugin",children:[]}]}],u={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.mdx)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Flipper supports opening Flipper through deeplinks, by using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"flipper://")," protocol. "),(0,l.mdx)("h2",{id:"open-plugin"},"open-plugin"),(0,l.mdx)("p",null,"The follow link format can be used to open Flipper, and open a specific plugin:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"flipper://open-plugin?plugin-id=<plugin-id>&client=<client>&devices=<devices>&payload=<payload>")),(0,l.mdx)("p",null,"The parameters are specified as follows:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"plugin-id")," (required) the identifier of the plugin that needs to be opened, as specified by the ",(0,l.mdx)("inlineCode",{parentName:"li"},"id")," field in ",(0,l.mdx)("inlineCode",{parentName:"li"},"package.json"),"."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"client")," (optional) the name of the application that should be opened. For device plugins, this doesn't need to be specified. If not set, the user will be prompted to select a client."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"devices")," (optional) comma separated list of device types that are acceptable. E.g. ",(0,l.mdx)("inlineCode",{parentName:"li"},"iOS,Android")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"Metro"),". If set, ",(0,l.mdx)("inlineCode",{parentName:"li"},"client")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"plugin-id")," must be running on this type of device."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"payload")," (optional) any additional string argument to pass to the plugin. Note that this argument should be properly URL encoded.   ")),(0,l.mdx)("p",null,"Using this deeplink format will make sure that:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"[FB-ONLY]"," The user is logged in & connected to Facebook."),(0,l.mdx)("li",{parentName:"ul"},"Verify that Flipper is up to date."),(0,l.mdx)("li",{parentName:"ul"},"[FB-ONLY]"," Install the specified plugin if not installed already."),(0,l.mdx)("li",{parentName:"ul"},"Make sure the plugin is available on the provided client / device, or will prompt the user for a valid device / client selection is made on which the plugin is available."),(0,l.mdx)("li",{parentName:"ul"},"Enable the plugin if not enabled already.")),(0,l.mdx)("h3",{id:"handling-deeplinks-in-the-plugin"},"Handling deeplinks in the plugin"),(0,l.mdx)("p",null,"If a plugin is opened through a deeplink, for which a ",(0,l.mdx)("inlineCode",{parentName:"p"},"payload")," was set, the ",(0,l.mdx)("a",{parentName:"p",href:"flipper-plugin#ondeeplink"},(0,l.mdx)("inlineCode",{parentName:"a"},"onDeepLink"))," handler will be triggered directly after initializing and rendering the plugin."),(0,l.mdx)("p",null,"Note that the same payload format can also be used to open other plugins programmatically from inside another plugin, by passing the payload as second argument to ",(0,l.mdx)("a",{parentName:"p",href:"flipper-plugin#selectplugin"},(0,l.mdx)("inlineCode",{parentName:"a"},"selectPlugin")),"."))}c.isMDXComponent=!0}}]);