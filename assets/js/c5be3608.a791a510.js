"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["Refine","react","material-ui","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",hide_table_of_contents:!1},c=void 0,p={permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",source:"@site/blog/2022-07-21-admin-panel-with-materialui-and-strapi.md",title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",date:"2022-07-21T00:00:00.000Z",formattedDate:"July 21, 2022",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:16.775,hasTruncateMarker:!0,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",slug:"build-admin-panel-with-material-ui-and-strapi",authors:"necati",tags:["Refine","react","material-ui","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-07-21-admin-panel-with-materialui-and-strapi/featured.png",hide_table_of_contents:!1},prevItem:{title:"Mocking API calls in React Tests with Nock",permalink:"/blog/mocking-api-calls-in-react"},nextItem:{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program"},relatedPosts:[{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"February 7, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:16.44,date:"2024-02-07T00:00:00.000Z"},{title:"Swiper.js Tutorial - A Powerful Touch Slider Library",description:"We'll take a dive into the Swiper.js library, a powerful JavaScript library that lets you quickly add touch-enabled and responsive sliders to your website or web application.",permalink:"/blog/swiper-js",formattedDate:"December 7, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:13.605,date:"2023-12-07T00:00:00.000Z"},{title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",permalink:"/blog/tanstack-react-table",formattedDate:"October 31, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:11.7,date:"2023-10-31T00:00:00.000Z"}],authorPosts:[{title:"We\u2019ve raised $1M in Seed Funding! \ud83d\ude80 \ud83d\ude80 \ud83d\ude80",description:"We are very excited to announce that Refine has raised $1M in our first round led by 500 Istanbul.",permalink:"/blog/weve-raised-dollar1m-seed-funding",formattedDate:"June 10, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.74,date:"2022-06-10T00:00:00.000Z"},{title:"refine Open Source Hackathon 2",description:"The second Refine Open Source Hackathon is an excellent opportunity for developers to showcase their skills, learn Refine and win prizes!",permalink:"/blog/refine-hackathon-2",formattedDate:"June 14, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:10.235,date:"2023-06-14T00:00:00.000Z"},{title:"refine Hackaton Winners",description:"The winners of the Refine Open Source Hackathon are announced!",permalink:"/blog/refine-hackathon-winners",formattedDate:"February 28, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:2.36,date:"2023-02-28T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],u={toc:m};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,a.kt)("strong",{parentName:"p"},"Refine"),". Although we plan to update it with the latest version of ",(0,a.kt)("strong",{parentName:"p"},"Refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,a.kt)("p",{parentName:"admonition"},"You should know that ",(0,a.kt)("strong",{parentName:"p"},"Refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,a.kt)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"We will build an ",(0,a.kt)("strong",{parentName:"p"},"admin panel")," that supports ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," operations, has built-in ",(0,a.kt)("strong",{parentName:"p"},"authentication"),", and a ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/mutation-mode/"},"mutation mode")," feature using industry-standard best tools."),(0,a.kt)("p",null,"Industry-standard tools and practices can be hard to reach and time-consuming to maintain on your own. Frameworks can save you time by doing these jobs for you. So, we'll use powerful frameworks including ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com"},"Material UI"),", ",(0,a.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/"},"Refine")," to build a high-quality admin panel."))}d.isMDXComponent=!0}}]);