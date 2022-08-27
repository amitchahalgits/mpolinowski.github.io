"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[13278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(a),m=i,d=k["".concat(s,".").concat(m)]||k[m]||c[m]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},76309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:8040,slug:"2019-09-26",title:"Kali Linux with Docker for Windows",authors:"mpolinowski",tags:["LINUX"]},l=void 0,o={unversionedId:"DevOps/Linux/2019-09-26--kali-docker-windows/index",id:"DevOps/Linux/2019-09-26--kali-docker-windows/index",title:"Kali Linux with Docker for Windows",description:"Victoria Harbour, Hongkong",source:"@site/docs/DevOps/Linux/2019-09-26--kali-docker-windows/index.md",sourceDirName:"DevOps/Linux/2019-09-26--kali-docker-windows",slug:"/DevOps/Linux/2019-09-26--kali-docker-windows/2019-09-26",permalink:"/docs/DevOps/Linux/2019-09-26--kali-docker-windows/2019-09-26",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2019-09-26--kali-docker-windows/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8040,frontMatter:{sidebar_position:8040,slug:"2019-09-26",title:"Kali Linux with Docker for Windows",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Podman FTP Server Container",permalink:"/docs/DevOps/Linux/2019-12-03--podman-ftp-server-container/2019-12-03"},next:{title:"Podman Cheat Sheet",permalink:"/docs/DevOps/Linux/2019-09-25--podman-cheat-sheet/2019-09-25"}},s={},p=[{value:"Installing Kali",id:"installing-kali",level:2},{value:"Installing Tools",id:"installing-tools",level:2},{value:"Committing the Image",id:"committing-the-image",level:2},{value:"Starting Kali Containers",id:"starting-kali-containers",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Victoria Harbour, Hongkong",src:a(58416).Z,width:"1500",height:"864"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installing-kali"},"Installing Kali")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installing-tools"},"Installing Tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#committing-the-image"},"Committing the Image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#starting-kali-containers"},"Starting Kali Containers"))),(0,i.kt)("h2",{id:"installing-kali"},"Installing Kali"),(0,i.kt)("p",null,"see available docker images on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/kalilinux"},"Docker Hub")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kalilinux/kali-rolling\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it kalilinux/kali-rolling /bin/bash\n")),(0,i.kt)("h2",{id:"installing-tools"},"Installing Tools"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt update && apt full-upgrade && apt auto-remove && apt auto-clean\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install kali-linux-full\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.kali.org/news/kali-linux-metapackages/"},"available packages")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kali-linux"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-all"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-forensic"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-full"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-gpu"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-pwtools"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-rfid"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-sdr"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-top10"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-voip"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-web"),(0,i.kt)("li",{parentName:"ul"},"kali-linux-wireless")),(0,i.kt)("p",null,"Checked contained programs in packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt-cache show kali-linux-wireless |grep Depends\n")),(0,i.kt)("h2",{id:"committing-the-image"},"Committing the Image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker start {containerID}\ndocker attach {containerID}\ndocker commit {containerID} kali\ndocker images\ndocker rm {containerID}\n")),(0,i.kt)("h2",{id:"starting-kali-containers"},"Starting Kali Containers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -ti -rm kali /bin/bash\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -p 4444:4444 kali\n")))}c.isMDXComponent=!0},58416:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-fa551bab9f5111c66bca5032ac4de574.jpg"}}]);