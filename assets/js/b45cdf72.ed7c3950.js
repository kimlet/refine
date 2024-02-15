"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Migration Guide"},d=void 0,p={unversionedId:"ui-integrations/ant-design/migration-guide/index",id:"ui-integrations/ant-design/migration-guide/index",title:"Migration Guide",description:"Ant Design released a new major version, v5. This document will help you upgrade from antd 4.x version to antd 5.x version.",source:"@site/docs/ui-integrations/ant-design/migration-guide/index.md",sourceDirName:"ui-integrations/ant-design/migration-guide",slug:"/ui-integrations/ant-design/migration-guide/",permalink:"/docs/ui-integrations/ant-design/migration-guide/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/migration-guide/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1707994553,formattedLastUpdatedAt:"Feb 15, 2024",frontMatter:{title:"Migration Guide"},sidebar:"mainSidebar",previous:{title:"Theming",permalink:"/docs/ui-integrations/ant-design/theming/"},next:{title:"Introduction",permalink:"/docs/ui-integrations/material-ui/introduction/"}},s={},m=[{value:"Updating the packages",id:"updating-the-packages",level:2},{value:"\ud83e\ude84 Migrating your project automatically with Codemod \u2728 (recommended)",id:"-migrating-your-project-automatically-with-codemod--recommended",level:2},{value:"Migrating your project manually",id:"migrating-your-project-manually",level:2},{value:"Updating Imports",id:"updating-imports",level:3},{value:"Updating Props",id:"updating-props",level:3},{value:"Customized <code>&lt;Sider&gt;</code>",id:"customized-sider",level:3},{value:"Customized <code>&lt;Header&gt;</code>",id:"customized-header",level:3},{value:"LESS Users",id:"less-users",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Compile errors",id:"compile-errors",level:3},{value:"Solution 1",id:"solution-1",level:4},{value:"Solution 2",id:"solution-2",level:4}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=u("Tabs"),g=u("TabItem"),k={toc:m};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ant Design released a new major version, v5. This document will help you upgrade from antd 4.x version to antd 5.x version."),(0,a.kt)("p",null,"Ant Design removed ",(0,a.kt)("inlineCode",{parentName:"p"},"less")," and adopted ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS-in-JS")," for better support of dynamic themes. So now, the bottom layer uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ant-design/cssinjs"},(0,a.kt)("inlineCode",{parentName:"a"},"@ant-design/cssinjs"))," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"less")," as a solution."),(0,a.kt)("p",null,"Some components were removed or renamed, and some APIs are changed."),(0,a.kt)("p",null,"Some of the changes are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<PageHeader>")," component moved into ",(0,a.kt)("inlineCode",{parentName:"li"},"@ant-design/pro-components"),". Refine is using ",(0,a.kt)("inlineCode",{parentName:"li"},"<PageHeader>")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"<List>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<Create>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<Edit>"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"<Show>")," components and added as a dependency. You don't need to install ",(0,a.kt)("inlineCode",{parentName:"li"},"@ant-design/pro-components")," package manually."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Comment>")," component moved into ",(0,a.kt)("inlineCode",{parentName:"li"},"@ant-design/compatible"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"moment.js")," is replaced with ",(0,a.kt)("inlineCode",{parentName:"li"},"day.js"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"less")," is removed from ",(0,a.kt)("inlineCode",{parentName:"li"},"antd")," package.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/migration-v5"},"Ant Design's own migration guide"),".")),(0,a.kt)("admonition",{title:"A little more clarification",type:"info"},(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Refine package"),(0,a.kt)("th",{parentName:"tr",align:null},"Ant Design version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@","pankod/refine-antd","@","3.x.x"),(0,a.kt)("td",{parentName:"tr",align:null},"antd","@","4.x.x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@","pankod/refine-antd","@","4.x.x, ","@","refinedev/antd","@","5.x.x"),(0,a.kt)("td",{parentName:"tr",align:null},"antd","@","5.x.x"))))),(0,a.kt)("h2",{id:"updating-the-packages"},"Updating the packages"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," must be updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"4.x.x")),(0,a.kt)(c,{defaultValue:"refine-cli",values:[{label:"Refine CLI",value:"refine-cli"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},(0,a.kt)(g,{value:"refine-cli",mdxType:"TabItem"},(0,a.kt)("p",null,"\u26a1\ufe0f You can easily update Refine packages with the Refine CLI ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/cli/#update"},(0,a.kt)("inlineCode",{parentName:"a"},"update"))," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine update\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/packages/cli/#how-to-add-to-an-existing-project"},"How to add Refine CLI to an existing project?")))),(0,a.kt)(g,{value:"manual",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/antd@latest\n")))),(0,a.kt)("h2",{id:"-migrating-your-project-automatically-with-codemod--recommended"},"\ud83e\ude84 Migrating your project automatically with Codemod \u2728 (recommended)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/codemod")," package handles the breaking changes for your project automatically, migrating your ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"))," version from 3.x.x to 4.x.x. without any manual steps"),(0,a.kt)("p",null,"Just ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into root folder of your project (where ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," is contained) and run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx @refinedev/codemod antd4-to-antd5\n")),(0,a.kt)("p",null,"And it's done. Now your project uses ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd@4.x.x"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udea8 The Customized or swizzled ",(0,a.kt)("a",{parentName:"p",href:"#customized-sider"},"components")," and ",(0,a.kt)("a",{parentName:"p",href:"#less-users"},".less")," files cannot be migrated automatically. You need to migrate them manually.")),(0,a.kt)("h2",{id:"migrating-your-project-manually"},"Migrating your project manually"),(0,a.kt)("h3",{id:"updating-imports"},"Updating Imports"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CSS files are no longer included in package. Since CSS-in-JS supports importing on demand, the original ",(0,a.kt)("inlineCode",{parentName:"li"},"styles/antd.less")," has also been abandoned. If you need to reset some basic styles, please import ",(0,a.kt)("inlineCode",{parentName:"li"},"@refinedev/antd/dist/reset.css"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="App.tsx"',title:'"App.tsx"'},'- import "@refinedev/antd/dist/styles.min.css";\n+ import "@refinedev/antd/dist/reset.css";\n')),(0,a.kt)("h3",{id:"updating-props"},"Updating Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"actionButtons")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pageHeaderProps")," props was deprecated on ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd@3.x.x")," and has been removed on ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd@4.x.x")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"<List>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Create>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show>")," component due to inconsistency with all UI packages. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"headerButtons")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"headerProps")," props instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="List.tsx"',title:'"List.tsx"'},"- <List actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <List headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Create.tsx"',title:'"Create.tsx"'},"- <Create actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Create headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Show.tsx"',title:'"Show.tsx"'},"- <Show actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Show headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Edit.tsx"',title:'"Edit.tsx"'},"- <Edit actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Edit headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.kt)("h3",{id:"customized-sider"},"Customized ",(0,a.kt)("inlineCode",{parentName:"h3"},"<Sider>")),(0,a.kt)("p",null,"If you have customized or ",(0,a.kt)("inlineCode",{parentName:"p"},"swizzled")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider>")," component, there may be a color mismatch issue.\nYou can give theme dark to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Menu>")," component in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Sider>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Sider.tsx"',title:'"Sider.tsx"'},"    <AntdLayout.Sider\n      collapsible\n      collapsed={collapsed}\n      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n      collapsedWidth={isMobile ? 0 : 80}\n      breakpoint='lg'\n      style={isMobile ? antLayoutSiderMobile : antLayoutSider}>\n      <RenderToTitle collapsed={collapsed} />\n      <Menu\n+       theme='dark'\n        selectedKeys={[selectedKey]}\n        defaultOpenKeys={defaultOpenKeys}\n        mode='inline'\n        onClick={() => {\n          if (!breakpoint.lg) {\n            setCollapsed(true)\n          }\n        }}>\n        {renderSider()}\n      </Menu>\n    </AntdLayout.Sider>\n")),(0,a.kt)("h3",{id:"customized-header"},"Customized ",(0,a.kt)("inlineCode",{parentName:"h3"},"<Header>")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you have customized or ",(0,a.kt)("inlineCode",{parentName:"p"},"swizzled")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component, there may be a color mismatch issue.")),(0,a.kt)("p",null,"You can remove constant background color in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="Header.tsx"',title:'"Header.tsx"'},"   <AntdLayout.Header\n      style={{\n        display: 'flex',\n        justifyContent: 'flex-end',\n        alignItems: 'center',\n        padding: '0px 24px',\n        height: '64px',\n-       backgroundColor: '#FFF',\n      }}>\n")),(0,a.kt)("h3",{id:"less-users"},"LESS Users"),(0,a.kt)("p",null,"Ant Design removed ",(0,a.kt)("inlineCode",{parentName:"p"},"less"),", uses and recommends ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS-in-JS")," instead. You need to manually migrate your ",(0,a.kt)("inlineCode",{parentName:"p"},".less")," files to ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS-in-JS"),". ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/migration-v5#less-migration"},"Ant Design's documentation for ",(0,a.kt)("inlineCode",{parentName:"a"},"less")," migration.")),(0,a.kt)("h2",{id:"known-issues"},"Known Issues"),(0,a.kt)("h3",{id:"compile-errors"},"Compile errors"),(0,a.kt)("p",null,"Some users repored (",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/837692625737613362/1056236230641209396/1056236230641209396"},"issue#1"),", ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/channels/837692625737613362/1056592183702061177/1056592183702061177"},"issue#2"),") compile errors after upgrading from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd@3.x.x")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd@4.x.x"),". They also provided solutions."),(0,a.kt)("h4",{id:"solution-1"},"Solution 1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"remove ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," folder"),(0,a.kt)("li",{parentName:"ol"},"remove ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json")," file"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm install"))),(0,a.kt)("h4",{id:"solution-2"},"Solution 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react@latest react-dom@latest\n")))}f.isMDXComponent=!0}}]);