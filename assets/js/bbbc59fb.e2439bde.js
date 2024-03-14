"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"<CanAccess />",siderbar_label:"<CanAccess />",source:"packages/core/src/components/canAccess/index.tsx"},s=void 0,p={unversionedId:"authorization/components/can-access/index",id:"authorization/components/can-access/index",title:"<CanAccess />",description:"` is the component form of useCan`.",source:"@site/docs/authorization/components/can-access/index.md",sourceDirName:"authorization/components/can-access",slug:"/authorization/components/can-access/",permalink:"/docs/authorization/components/can-access/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authorization/components/can-access/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1710428700,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"<CanAccess />",siderbar_label:"<CanAccess />",source:"packages/core/src/components/canAccess/index.tsx"},sidebar:"mainSidebar",previous:{title:"Access Control Provider",permalink:"/docs/authorization/access-control-provider/"},next:{title:"useCan",permalink:"/docs/authorization/hooks/use-can/"}},l={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Usage with props",id:"usage-with-props",level:3},{value:"Properties",id:"properties",level:2},{value:"onUnauthorized",id:"onunauthorized",level:3},{value:"fallback",id:"fallback",level:3},{value:"queryOptions",id:"queryoptions",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),f=d("PropsTable"),h={toc:u};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CanAccess>")," is the component form of ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,r.kt)("p",null,"It internally uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan")),"'s return values to provide its functionality."),(0,r.kt)("p",null,"Passes the given properties to the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method from your access control provider. After, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", it renders the children, otherwise, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", it renders ",(0,r.kt)("a",{parentName:"p",href:"#fallback"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it renders ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"To learn more about authorization, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides-concepts/authorization"},"Authorization")," guide and ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider")," documentation."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)(m,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," component will infer the current ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," based on your route automatically. ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," will also be inferred if the current route includes one."),(0,r.kt)("p",null,"So if you are at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts")," route, ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," will check authorization for the ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," resource and the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," action."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/show/:id")," route, the action will be ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nconst MyComponent = () => (\n  <CanAccess fallback={<CustomFallback />}>\n    <YourComponent />\n  </CanAccess>\n);\n'))),(0,r.kt)("h3",{id:"usage-with-props"},"Usage with props"),(0,r.kt)(m,{id:"usage-with-props",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"You may have a case like in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/show/:id")," page, where, inferred resource is ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," and action is ",(0,r.kt)("inlineCode",{parentName:"p"},"show"),", but you want to authorize a different resource eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),"."),(0,r.kt)("p",null,"In this case, you can explicitly pass props to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CanAccess")," component for authorizing a different resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@refinedev/core";\n\nexport const MyComponent = () => {\n  return (\n    <Buttons>\n      <CreateButton>Create</CreateButton>\n      <CanAccess resource="posts" action="delete">\n        <DeleteButton>Delete</DeleteButton>\n      </CanAccess>\n    </Buttons>\n  );\n};\n'))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)(m,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"It also accepts all the properties of ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan")),".")),(0,r.kt)("h3",{id:"onunauthorized"},"onUnauthorized"),(0,r.kt)(m,{id:"onunauthorized",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"Callback to be called when ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan"))," returns false."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess\n  onUnauthorized={({ resource, reason, action, params }) =>\n    console.log(\n      `You cannot access ${resource}-${params.id} resource with ${action} action because ${reason}`,\n    )\n  }\n>\n  <YourComponent />\n</CanAccess>\n"))),(0,r.kt)("h3",{id:"fallback"},"fallback"),(0,r.kt)(m,{id:"fallback",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"Component to render if ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},(0,r.kt)("inlineCode",{parentName:"a"},"useCan"))," returns false. If ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", it renders ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess fallback={<div>You cannot access this section</div>}>\n  <YourComponent />\n</CanAccess>\n"))),(0,r.kt)("h3",{id:"queryoptions"},"queryOptions"),(0,r.kt)(m,{id:"queryoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"Accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"UseQueryOptions<CanReturnType>")," to customize the caching behavior of the underlying query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess queryOptions={{ cacheTime: 25000 }}>\n  <YourComponent />\n</CanAccess>\n"))),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)(f,{module:"@refinedev/core/CanAccess",mdxType:"PropsTable"})))}k.isMDXComponent=!0}}]);