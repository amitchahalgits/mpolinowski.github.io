"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[60818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),b=o,m=d["".concat(p,".").concat(b)]||d[b]||u[b]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1e4,slug:"2021-02-21",title:"GoFiber Container for your Gatsby Build",authors:"mpolinowski",tags:["Javascript","React","Gatsby","Docker","GoFiber","Golang"]},i="GoFiber Docker Container for your Gatsby Build",l={unversionedId:"Development/Go/2021-02-21-gofiber-container-gatsby/index",id:"Development/Go/2021-02-21-gofiber-container-gatsby/index",title:"GoFiber Container for your Gatsby Build",description:"Shenzhen, China",source:"@site/docs/Development/Go/2021-02-21-gofiber-container-gatsby/index.md",sourceDirName:"Development/Go/2021-02-21-gofiber-container-gatsby",slug:"/Development/Go/2021-02-21-gofiber-container-gatsby/2021-02-21",permalink:"/docs/Development/Go/2021-02-21-gofiber-container-gatsby/2021-02-21",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2021-02-21-gofiber-container-gatsby/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"},{label:"Gatsby",permalink:"/docs/tags/gatsby"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"GoFiber",permalink:"/docs/tags/go-fiber"},{label:"Golang",permalink:"/docs/tags/golang"}],version:"current",sidebarPosition:1e4,frontMatter:{sidebar_position:1e4,slug:"2021-02-21",title:"GoFiber Container for your Gatsby Build",authors:"mpolinowski",tags:["Javascript","React","Gatsby","Docker","GoFiber","Golang"]},sidebar:"tutorialSidebar",previous:{title:"Paho MQTT Client with Golang",permalink:"/docs/Development/Go/2021-06-03--mqtt-with-golang/2021-06-03"},next:{title:"Graphs",permalink:"/docs/category/graphs"}},p={},c=[{value:"Preparation",id:"preparation",level:2},{value:"Development",id:"development",level:2},{value:"Prepare Deployment",id:"prepare-deployment",level:2},{value:"Production Setup",id:"production-setup",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gofiber-docker-container-for-your-gatsby-build"},"GoFiber Docker Container for your Gatsby Build"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shenzhen, China",src:r(41404).Z,width:"1500",height:"546"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/gatsby_gofiber_container"},"Repository"))),(0,o.kt)("p",null,"I want to use a Gatsby.js project and serve it inside a Docker container (can be pushed into a Docker cluster or to Kubernetes, OpenShift etc.). For the demonstration I will use an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/justinmahar/gatsby-starter-mdx-launchpad"},"Gatsby MDX Starter"),"."),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"I installed the Starter with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gatsby new gatsby_gofiber_container https://github.com/justinmahar/gatsby-starter-mdx-launchpad\n")),(0,o.kt)("p",null,"And prepared a simplified variation of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gofiber/boilerplate"},"GoFiber Boilerplate"),". To edit the Gatsby page code run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gatsby develop\n")),(0,o.kt)("p",null,"For the build I prepared an npm script that copies the static build from ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"fiber/public")," - you can trigger the build script with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run static\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," that I wrote the script under Windows ",(0,o.kt)("inlineCode",{parentName:"p"},"rimraf fiber/public && gatsby build && move public fiber")," - make changes, where necessary, when you are using a different OS.")),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"Once you finalized your Gatsby code run the following command to start the GoFiber and serve your static page on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8888"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go run app.go\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8888"))),(0,o.kt)("h2",{id:"prepare-deployment"},"Prepare Deployment"),(0,o.kt)("p",null,"We can now use the included Dockerfile to build our web app container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t gofiber .\ndocker run -d -p 8888:8888 gofiber\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8888"))),(0,o.kt)("h2",{id:"production-setup"},"Production Setup"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Continue with ",(0,o.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22"},"NGINX Docker Ingress"))))}u.isMDXComponent=!0},41404:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0795219c47cded4f1a1480a5f18e4c60.jpg"}}]);