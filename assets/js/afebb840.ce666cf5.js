"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5151],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},65535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});a(67294);var n=a(3905);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const i={title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",slug:"kubectl-scale",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/kubectl-scale",source:"@site/blog/2023-12-25-kubectl-scale.md",title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",date:"2023-12-25T00:00:00.000Z",formattedDate:"December 25, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:6.4,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubectl Scale - DevOps Guide",description:"Kubectl scale is a powerful command that allows you to scale your Kubernetes resources. This article will explore different scenarios to scale your Kubernetes replica/nodes.",slug:"kubectl-scale",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/social.png",hide_table_of_contents:!1},prevItem:{title:"How to Build a Web App in 10 steps in 2024",permalink:"/blog/how-to-build-a-web-app"},nextItem:{title:"The Anatomy of the Web Development in 2024",permalink:"/blog/web-development"},relatedPosts:[{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",permalink:"/blog/kubernetes-operators",formattedDate:"January 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.425,date:"2024-01-12T00:00:00.000Z"},{title:"A Detailed Guide on Docker Volumes",description:"We'll go over the fundamentals of Docker volumes, including what they are, why they're important, and how to use them.",permalink:"/blog/docker-volumes",formattedDate:"July 11, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.64,date:"2023-07-11T00:00:00.000Z"},{title:"Check Kubernetes Version - Advanced Use Cases with kubectl version",description:"Kubectl version is a very basic command, however, you might still face some errors like connection issues, version mismatches, or configuration problems. Here are some steps to debug these common errors.",permalink:"/blog/kubectl-version",formattedDate:"January 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.98,date:"2024-01-05T00:00:00.000Z"}],authorPosts:[{title:"Docker Swarm vs. Kubernetes - DevOps Guide",description:"We'll present a detailed comparison between both Docker swarm and Kubernetes.",permalink:"/blog/docker-swarm-vs-kubernetes",formattedDate:"February 14, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.645,date:"2024-02-14T00:00:00.000Z"},{title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",permalink:"/blog/git-diff-command",formattedDate:"May 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.915,date:"2023-05-12T00:00:00.000Z"},{title:"Docker Cheat Sheet - Most Commonly Used Commands",description:"A reference guide highlighting essential Docker commands to streamline container management tasks efficiently.",permalink:"/blog/docker-cheat-sheet",formattedDate:"February 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.675,date:"2024-02-12T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Scaling with kubectl scale",id:"basic-scaling-with-kubectl-scale",level:2},{value:"Syntax and Usage",id:"syntax-and-usage",level:4},{value:"Practical Example",id:"practical-example",level:4},{value:"Advanced Scaling Options in Kubectl",id:"advanced-scaling-options-in-kubectl",level:2},{value:"A. Conditional Scaling",id:"a-conditional-scaling",level:3},{value:"B. Scaling Multiple Resources",id:"b-scaling-multiple-resources",level:4},{value:"Automated Scaling vs. Manual Scaling",id:"automated-scaling-vs-manual-scaling",level:2},{value:"Horizontal Pod Autoscaler (HPA)",id:"horizontal-pod-autoscaler-hpa",level:3},{value:"When to Use Manual Scaling",id:"when-to-use-manual-scaling",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:m};function d(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Understanding Kubernetes Workloads")),(0,n.kt)("p",null,"In Kubernetes, we deal with several types of workloads, each serving a unique purpose. Let's dive into what these are and how ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"kubectl scale"))," can be applied to manage them."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deployments")),(0,n.kt)("p",null,"Imagine Deployments as managers for your application instances. They ensure that a specified number of these instances, known as Pods, are running at any given time. Using ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"kubectl scale")),", you can tell Kubernetes to increase or decrease the number of Pods in a Deployment."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"StatefulSets")),(0,n.kt)("p",null,"StatefulSets are like Deployments but with a memory. They're used when your application needs to remember its state (like a database). You can also scale StatefulSets with ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"kubectl scale")),", adjusting the number of replicas while maintaining their unique identities and storage."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ReplicaSets")),(0,n.kt)("p",null,"ReplicaSets are the workforce behind Deployments. They make sure the right number of Pod replicas are running. Though usually managed by Deployments, you can directly scale ReplicaSets using ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"kubectl scale"))," if needed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DaemonSets")),(0,n.kt)("p",null,"DaemonSets ensure that each node in your Kubernetes cluster runs a copy of a Pod. It's like having a utility software installed on every computer in an office. Scaling DaemonSets is a bit different. Instead of changing the number of Pods, scaling here typically involves adding or removing nodes from the cluster."),(0,n.kt)("p",null,"Understanding these workloads and how to scale them efficiently is crucial in Kubernetes. It ensures your applications have the resources they need when they need them, and also that you're not using more resources than necessary. Whether it's handling peak traffic times or scaling down during quieter periods, ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"kubectl scale"))," gives you the flexibility to manage your application's demands effectively."),(0,n.kt)("h2",{id:"basic-scaling-with-kubectl-scale"},"Basic Scaling with kubectl scale"),(0,n.kt)("p",null,"Managing your Kubernetes resources effectively means needing to adjust their scale to accommodate different loads or requirements. This is where the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl scale")," command comes into play, offering a straightforward way to change the number of replicas of a resource."),(0,n.kt)("h4",{id:"syntax-and-usage"},"Syntax and Usage"),(0,n.kt)("p",null,"The basic syntax for scaling a resource is:\n",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl scale --replicas=<number> <resource-type>/<resource-name>")),(0,n.kt)("p",null,"This command allows you to specify the desired number of replicas for a particular resource, such as a Deployment or ReplicaSet."),(0,n.kt)("h4",{id:"practical-example"},"Practical Example"),(0,n.kt)("p",null,"Consider you have a Kubernetes deployment named ",(0,n.kt)("inlineCode",{parentName:"p"},"printing")," that has currently just one replica. We will use the command ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get deployment <deploymentName>"),' to currently serve replicas. Notice the value in the "available" column, which shows the current replica count available to serve. That is currently 1.'),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image1.PNG",alt:"kubectl scale"})),(0,n.kt)("p",null,"Now you want to scale it to 3 replicas. Here's how you would do it:\n",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl scale --replicas=3 deployment/printing")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image2.PNG",alt:"kubectl scale"})),(0,n.kt)("p",null,"As you can see from above srcreenshot, this command has increased the number of replicas for ",(0,n.kt)("inlineCode",{parentName:"p"},"printing")," deployment to 3."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Expert tips:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do not confuse replica with pod; they are both different. Replica is the desired number of running pods whereas the pods are the actual running instances of an application. A deployment with 3 replicas might have 2 running pods if one pod is being unhealthy."),(0,n.kt)("li",{parentName:"ul"},"Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"--dry-run")," flag to simulate the scaling command without actually applying the changes. It is helpful when you want to confirm the command syntax, your access rights, the name of the deployment, etc.")),(0,n.kt)("h2",{id:"advanced-scaling-options-in-kubectl"},"Advanced Scaling Options in Kubectl"),(0,n.kt)("h3",{id:"a-conditional-scaling"},"A. Conditional Scaling"),(0,n.kt)("p",null,"Conditional scaling in Kubectl allows you to scale resources based on current states. It's like saying, \"If there are 'X' replicas now, change it to 'Y' replicas.\""),(0,n.kt)("p",null,"Use the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl scale --current-replicas=<number> --replicas=<new-number> <resource>"),"."),(0,n.kt)("p",null,"Note that the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," here can refer to any of the deployment types mentioned workloads above, e.g., deployment, replica sets, stateful sets, etc."),(0,n.kt)("p",null,'Let\'s try this command. In our example, we will use the "deployment" resource.'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kubectl scale --current-replicas=3 --replicas=5 deployment/printing")," So this command should increase the replicas to 5, right?"),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image3.PNG",alt:"kubectl scale"})),(0,n.kt)("p",null,"What do you think what happened? The scaling operation failed. And this is the difference between this command (conditional scaling) and the simple non-conditional scaling command we discussed above. The conditional scaling command verifies whether you have specified the current replica count correctly or not. If incorrect, it will not scale. This is contrary to the simple non-conditional scaling command that will scale the replicas to the desired number regardless of the current replica count. Let's correct the command and try again. As you can see below, it worked fine this time."),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image4.PNG",alt:"kubectl scale"})),(0,n.kt)("h4",{id:"b-scaling-multiple-resources"},"B. Scaling Multiple Resources"),(0,n.kt)("p",null,"Sometimes, you would like to scale multiple resources simultaneously, e.g., scaling two deployments at the same time, like one for API and one for the front end."),(0,n.kt)("p",null,"You can use the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl scale --replicas=<number> deployment/<deployment1> deployment/<deployment2>"),". In our example we have two deployments named printing. You can use the command ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get deployments")," to confirm the name of your deployments. Let's scale both of these in the same command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl scale --replicas=3 deployment/hello-app deployment/printing\n")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image5.PNG",alt:"kubectl scale"})),"The above screenshots show that both deployments were scaled successfully.",(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Expert tips:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can scale more than two deployments in the same command; just use the same format as above."),(0,n.kt)("li",{parentName:"ul"},"If you specify two deployments to scale, but the name of one of the deployments is incorrect, the deployment with the correct name will scale successfully, but the other one with the incorrect name will fail, and you will see its error, too. See the screenshot below for an example.")),(0,n.kt)("div",{className:"centered-image"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-25-kubectl-scale/image6.PNG",alt:"kubectl scale partial failure"})),(0,n.kt)("h2",{id:"automated-scaling-vs-manual-scaling"},"Automated Scaling vs. Manual Scaling"),(0,n.kt)("h3",{id:"horizontal-pod-autoscaler-hpa"},"Horizontal Pod Autoscaler (HPA)"),(0,n.kt)("p",null,"Automated scaling in Kubernetes is primarily handled by the Horizontal Pod Autoscaler (HPA). HPA automatically adjusts the number of pods in a deployment, replica set, or stateful set based on observed CPU utilization or other select metrics. It's like having a smart assistant that keeps an eye on your application's load and adjusts resources accordingly without any manual intervention."),(0,n.kt)("p",null,"To set up HPA, you can use below command:\n",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl autoscale deployment [deployment-name] --min=[min-pods] --max=[max-pods] --cpu-percent=[target-percentage]")),(0,n.kt)("p",null,"This command tells Kubernetes to keep the number of pods between the minimum and maximum limits, scaling up or down based on CPU usage. Let's look at the example below:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"kubectl autoscale deployment hello-app --min=2 --max=5 --cpu-percent=80")),(0,n.kt)("p",null,"In the above example, 80% is the target average CPU utilization across all pods in the deployment. When the average CPU utilization exceeds this threshold, Kubernetes will add more pods (not more than 5 which is max). When the average CPU utilization falls below this threshold, Kubernetes will remove pods (not less than 2, which is the minimum)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Expert tip:")," The scope of this article's scaling options is limited to horizontal scaling. Kubernetes also allows to do vertical scaling. Just like HPA (horizontal pod autoscaler), there is VPA (vertical pod autoscaler) too. Depending on your need, you can utilize vertical pod autoscaler too (a topic for some other day perhaps)."),(0,n.kt)("h3",{id:"when-to-use-manual-scaling"},"When to Use Manual Scaling"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Specific Event-Driven Scenarios: If you know there will be a spike in traffic (like a sale or an event), you can proactively scale up."),(0,n.kt)("li",{parentName:"ul"},"Testing and Development: In development environments, you might need to test the behavior of your application under different loads, e.g., load testing, etc.")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"This article provided a comprehensive overview of kubectl scale, a crucial tool for managing Kubernetes workloads. We explored different scenarios to scale your Kubernetes replica/nodes. We also explored advanced scaling options like conditional scaling, scaling multiple resources simultaneously, and automated scaling using Horizontal Pod Autoscalers (HPA). Finally, we discussed the pros and cons of manual scaling versus automated scaling and potential scenarios where each might be beneficial."))}d.isMDXComponent=!0}}]);