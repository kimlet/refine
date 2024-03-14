"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26614],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});t(67294);var r=t(3905),a=t(25260);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={title:"i18n Provider"},c='i18n Provider <GuideBadge id="guides-concepts/i18n" />',d={unversionedId:"i18n/i18n-provider/index",id:"i18n/i18n-provider/index",title:"i18n Provider",description:"Internationalization (i18n) is a process that allows software applications to be localized for different regions and languages. Refine can work with any i18n framework, but needs an i18nProvider to be created based on the chosen library.",source:"@site/docs/i18n/i18n-provider/index.md",sourceDirName:"i18n/i18n-provider",slug:"/i18n/i18n-provider/",permalink:"/docs/i18n/i18n-provider/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/i18n/i18n-provider/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1710428700,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{title:"i18n Provider"},sidebar:"mainSidebar",previous:{title:"React Toastify",permalink:"/docs/examples/notification-provider/react-toastify"},next:{title:"useGetLocale",permalink:"/docs/i18n/hooks/use-get-locale/"}},u={},p=[{value:"Methods",id:"methods",level:2},{value:"translate",id:"translate",level:3},{value:"changeLocale",id:"changelocale",level:3},{value:"getLocale",id:"getlocale",level:3},{value:"Translation file",id:"translation-file",level:2},{value:"FAQ",id:"faq",level:2},{value:"How can I create translation files for other languages in an automated way?",id:"how-can-i-create-translation-files-for-other-languages-in-an-automated-way",level:3},{value:"Example",id:"example",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},f=m("GuideBadge"),g=m("DocThumbsUpDownFeedbackWidget"),h=m("CodeSandboxExample"),k={toc:p};function y(e){var{components:n}=e,t=s(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},k,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"i18n-provider-"},"i18n Provider ",(0,r.kt)(f,{id:"guides-concepts/i18n",mdxType:"GuideBadge"})),(0,r.kt)("p",null,"Internationalization (i18n) is a process that allows software applications to be localized for different regions and languages. Refine can work with any i18n framework, but needs an ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider")," to be created based on the chosen library."),(0,r.kt)("p",null,"Refine expects the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider")," type as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { I18nProvider } from "@refinedev/core";\n\nconst i18nProvider: I18nProvider = {\n  translate: (key: string, options?: any, defaultMessage?: string) => string,\n  changeLocale: (lang: string, options?: any) => Promise,\n  getLocale: () => string,\n};\n')),(0,r.kt)("p",null,"After creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider"),", you can pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport i18nProvider from "./i18nProvider";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      // highlight-next-line\n      i18nProvider={i18nProvider}\n      /* ... */\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n')),(0,r.kt)("p",null,"This will allow us to put translation features to the followings hooks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/i18n/hooks/use-translate"},(0,r.kt)("inlineCode",{parentName:"a"},"useTranslate"))," shows translation between different languages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/i18n/hooks/use-set-locale"},(0,r.kt)("inlineCode",{parentName:"a"},"useSetLocale"))," changes locale at runtime."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/i18n/hooks/use-get-locale"},(0,r.kt)("inlineCode",{parentName:"a"},"useGetLocale"))," getting current locale.")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"translate"},"translate"),(0,r.kt)(g,{id:"translate",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"translate")," takes parameters and passes them to the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider")," and expects a string as a return value."),(0,r.kt)("p",null,"It has two ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function"},"function signatures")," with different parameters, which is known as function overloading."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function translate(key: string, options?: any, defaultMessage?: string): string;\nfunction translate(key: string, defaultMessage?: string): string;\n")),(0,r.kt)("p",null,"It means that you can use it in two different ways. The first one is to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),", and, ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultMessage")," as parameters. The second one is to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultMessage")," parameters. The ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter is optional."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example of the ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultMessage")," function signature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { I18nProvider } from "@refinedev/core";\nimport { useTranslation } from "react-i18next";\n\n// ...\n\nconst { t } = useTranslation();\n\nconst i18nProvider: I18nProvider = {\n  translate: (key: string, defaultMessage?: string) => t(key, defaultMessage),\n  // ...\n};\n\n// ...\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslate } from "@refinedev/core";\n\n// ...\n\nconst translate = useTranslate();\n\n// ...\n\ntranslate("posts.fields.title", "Title");\n\n// ...\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example of the ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"options")," and, ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultMessage")," function signature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { I18nProvider } from "@refinedev/core";\nimport { useTranslation } from "react-i18next";\n\n// ...\n\nconst { t } = useTranslation();\n\nconst i18nProvider: I18nProvider = {\n  translate: (key: string, options?: any, defaultMessage?: string) =>\n    t(key, defaultMessage, options),\n  // ...\n};\n\n// ...\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslate } from "@refinedev/core";\n\n// ...\n\nconst translate = useTranslate();\n\n// ...\n\nconst title = translate("posts.fields.title", { ns: "resources" }, "Title");\n\n// ...\n')),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/hooks/use-translate"},(0,r.kt)("inlineCode",{parentName:"a"},"useTranslate"))," hook to call ",(0,r.kt)("inlineCode",{parentName:"p"},"translate")," method.")),(0,r.kt)("h3",{id:"changelocale"},"changeLocale"),(0,r.kt)(g,{id:"changelocale",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"translate")," takes parameters and passes them to the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider")," and expects a Promise as a return value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"changeLocale: (locale: string, options?: any) => Promise<any>;\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/hooks/use-set-locale"},(0,r.kt)("inlineCode",{parentName:"a"},"useSetLocale"))," hook to call ",(0,r.kt)("inlineCode",{parentName:"p"},"changeLocale")," method.")),(0,r.kt)("h3",{id:"getlocale"},"getLocale"),(0,r.kt)(g,{id:"getlocale",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getLocale")," expects a string as a return value. It should return the current locale from your ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"getLocale: () => string;\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/hooks/use-get-locale"},(0,r.kt)("inlineCode",{parentName:"a"},"useGetLocale"))," hook to call ",(0,r.kt)("inlineCode",{parentName:"p"},"getLocale")," method.")),(0,r.kt)("h2",{id:"translation-file"},"Translation file"),(0,r.kt)(g,{id:"translation-file",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"All of Refine's components supports ",(0,r.kt)("inlineCode",{parentName:"p"},"i18n"),", meaning that if you want to change their text, you can create your own translation files to override Refine's default texts."),(0,r.kt)("p",null,"Here is the list of all translation keys that you can override:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show translation file"),(0,r.kt)(a.ZP,{mdxType:"TranslationFileEN"}))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"how-can-i-create-translation-files-for-other-languages-in-an-automated-way"},"How can I create translation files for other languages in an automated way?"),(0,r.kt)(g,{id:"how-can-i-create-translation-files-for-other-languages-in-an-automated-way",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"You can use the following community example project as a starting point for incorporating automated translations. The project adds deepl-translate-github-action which uses DeepL, an AI translation service to translate your locales json."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lyqht/refine-i18n-react"},"refine-i18n-react")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(g,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)(h,{path:"i18n-react",mdxType:"CodeSandboxExample"})))}y.isMDXComponent=!0},25260:(e,n,t)=>{t.d(n,{ZP:()=>l});t(67294);var r=t(3905);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={toc:[]};function l(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},s,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/en/common.json"',title:'"/locales/en/common.json"'},'{\n  "pages": {\n    "login": {\n      "title": "Sign in to your account",\n      "signin": "Sign in",\n      "signup": "Sign up",\n      "divider": "or",\n      "fields": {\n        "email": "Email",\n        "password": "Password"\n      },\n      "errors": {\n        "validEmail": "Invalid email address"\n      },\n      "buttons": {\n        "submit": "Login",\n        "forgotPassword": "Forgot password?",\n        "noAccount": "Don\u2019t have an account?",\n        "rememberMe": "Remember me"\n      }\n    },\n    "forgotPassword": {\n      "title": "Forgot your password?",\n      "fields": {\n        "email": "Email"\n      },\n      "errors": {\n        "validEmail": "Invalid email address"\n      },\n      "buttons": {\n        "submit": "Send reset instructions"\n      }\n    },\n    "register": {\n      "title": "Sign up for your account",\n      "fields": {\n        "email": "Email",\n        "password": "Password"\n      },\n      "errors": {\n        "validEmail": "Invalid email address"\n      },\n      "buttons": {\n        "submit": "Register",\n        "haveAccount": "Have an account?"\n      }\n    },\n    "updatePassword": {\n      "title": "Update password",\n      "fields": {\n        "password": "New Password",\n        "confirmPassword": "Confirm new password"\n      },\n      "errors": {\n        "confirmPasswordNotMatch": "Passwords do not match"\n      },\n      "buttons": {\n        "submit": "Update"\n      }\n    },\n    "error": {\n      "info": "You may have forgotten to add the {{action}} component to {{resource}} resource.",\n      "404": "Sorry, the page you visited does not exist.",\n      "resource404": "Are you sure you have created the {{resource}} resource.",\n      "backHome": "Back Home"\n    }\n  },\n  "actions": {\n    "list": "List",\n    "create": "Create",\n    "edit": "Edit",\n    "show": "Show"\n  },\n  "buttons": {\n    "create": "Create",\n    "save": "Save",\n    "logout": "Logout",\n    "delete": "Delete",\n    "edit": "Edit",\n    "cancel": "Cancel",\n    "confirm": "Are you sure?",\n    "filter": "Filter",\n    "clear": "Clear",\n    "refresh": "Refresh",\n    "show": "Show",\n    "undo": "Undo",\n    "import": "Import",\n    "clone": "Clone",\n    "notAccessTitle": "You don\'t have permission to access"\n  },\n  "warnWhenUnsavedChanges": "Are you sure you want to leave? You have unsaved changes.",\n  "notifications": {\n    "success": "Successful",\n    "error": "Error (status code: {{statusCode}})",\n    "undoable": "You have {{seconds}} seconds to undo",\n    "createSuccess": "Successfully created {{resource}}",\n    "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n    "deleteSuccess": "Successfully deleted {{resource}}",\n    "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n    "editSuccess": "Successfully edited {{resource}}",\n    "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n    "importProgress": "Importing: {{processed}}/{{total}}"\n  },\n  "loading": "Loading",\n  "tags": {\n    "clone": "Clone"\n  },\n  "dashboard": {\n    "title": "Dashboard"\n  },\n  "posts": {\n    "posts": "Posts",\n    "fields": {\n      "id": "Id",\n      "title": "Title",\n      "category": "Category",\n      "status": {\n        "title": "Status",\n        "published": "Published",\n        "draft": "Draft",\n        "rejected": "Rejected"\n      },\n      "content": "Content",\n      "createdAt": "Created At"\n    },\n    "titles": {\n      "create": "Create Post",\n      "edit": "Edit Post",\n      "list": "Posts",\n      "show": "Show Post"\n    }\n  },\n  "table": {\n    "actions": "Actions"\n  },\n  "documentTitle": {\n    "default": "refine",\n    "suffix": " | Refine",\n    "post": {\n      "list": "Posts | Refine",\n      "show": "#{{id}} Show Post | Refine",\n      "edit": "#{{id}} Edit Post | Refine",\n      "create": "Create new Post | Refine",\n      "clone": "#{{id}} Clone Post | Refine"\n    }\n  },\n  "autoSave": {\n    "success": "saved",\n    "error": "auto save failure",\n    "loading": "saving...",\n    "idle": "waiting for changes"\n  }\n}\n')))}l.isMDXComponent=!0}}]);