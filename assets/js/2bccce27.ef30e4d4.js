"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[9589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),g=a,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:9050,slug:"2019-06-11",title:"Windows Server 2019 - Active Directory Installation",authors:"mpolinowski",tags:["Windows"]},o=void 0,s={unversionedId:"DevOps/Windows/2019-06-11--windows-server-2019-active-directory/index",id:"DevOps/Windows/2019-06-11--windows-server-2019-active-directory/index",title:"Windows Server 2019 - Active Directory Installation",description:"Shanghai, China",source:"@site/docs/DevOps/Windows/2019-06-11--windows-server-2019-active-directory/index.mdx",sourceDirName:"DevOps/Windows/2019-06-11--windows-server-2019-active-directory",slug:"/DevOps/Windows/2019-06-11--windows-server-2019-active-directory/2019-06-11",permalink:"/docs/DevOps/Windows/2019-06-11--windows-server-2019-active-directory/2019-06-11",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Windows/2019-06-11--windows-server-2019-active-directory/index.mdx",tags:[{label:"Windows",permalink:"/docs/tags/windows"}],version:"current",sidebarPosition:9050,frontMatter:{sidebar_position:9050,slug:"2019-06-11",title:"Windows Server 2019 - Active Directory Installation",authors:"mpolinowski",tags:["Windows"]},sidebar:"tutorialSidebar",previous:{title:"Windows Server 2019 - Active Directory Setup",permalink:"/docs/DevOps/Windows/2019-06-12--windows-server-2019-active-directory/2019-06-12"},next:{title:"Windows Server 2019 - Scripting and Sharing",permalink:"/docs/DevOps/Windows/2019-06-10--windows-server-2019-scripting-and-sharing/2019-06-10"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shanghai, China",src:r(51913).Z,width:"1500",height:"766"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To be able to set up an ",(0,a.kt)("strong",{parentName:"p"},"Active Directory")," on our domain controller we have to first set up:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A DNS service"),(0,a.kt)("li",{parentName:"ul"},"A static IP address for our Server"),(0,a.kt)("li",{parentName:"ul"},"A name for our domain controller that can be resolved by the DNS service"),(0,a.kt)("li",{parentName:"ul"},"A NetBIOS Domain Name that has to be prepend to every username on login")),(0,a.kt)("p",null,"Let's start with adding a static IP. This setting can be found under ",(0,a.kt)("strong",{parentName:"p"},"Network & Internet"),". Click on ",(0,a.kt)("strong",{parentName:"p"},"Change adapter options")," and in the next window on ",(0,a.kt)("strong",{parentName:"p"},"Properties"),". Open the ",(0,a.kt)("strong",{parentName:"p"},"Internet Protocol Version 4")," settings and assign an IP address from your personal local network that is not currently in use:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(55933).Z,width:"876",height:"709"})),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Now we are able to add ",(0,a.kt)("strong",{parentName:"p"},"Active Directory")," to our domain controller by opening the ",(0,a.kt)("strong",{parentName:"p"},"Server Manager")," and clicking on ",(0,a.kt)("strong",{parentName:"p"},"Add roles and features"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(93255).Z,width:"1045",height:"410"})),(0,a.kt)("p",null,"Checking ",(0,a.kt)("strong",{parentName:"p"},"Active Directory Domain Services")," will show you a list of all the features that are required. Click on ",(0,a.kt)("strong",{parentName:"p"},"Add Features"),". Secondly we need to add the ",(0,a.kt)("strong",{parentName:"p"},"DNS Server")," in the same way:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(20502).Z,width:"1043",height:"548"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(68231).Z,width:"1068",height:"553"})),(0,a.kt)("p",null,"Now click ",(0,a.kt)("strong",{parentName:"p"},"Next")," until you reached the ",(0,a.kt)("strong",{parentName:"p"},"Confirmation")," tab then click ",(0,a.kt)("strong",{parentName:"p"},"Install"),". Once the Installation process is done head back to the ",(0,a.kt)("strong",{parentName:"p"},"Server Manager")," and click on the notification button. You should see a notification that you now have to promote your server to ",(0,a.kt)("strong",{parentName:"p"},"Domain Controller"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(4755).Z,width:"1042",height:"332"})),(0,a.kt)("p",null,"Now choose a Domain Name for your network:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(64635).Z,width:"1041",height:"630"})),(0,a.kt)("p",null,"Type in a Directory Service Restore Mode (",(0,a.kt)("strong",{parentName:"p"},"DSRM"),") password:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(65733).Z,width:"1042",height:"628"})),(0,a.kt)("p",null,"Now click ",(0,a.kt)("strong",{parentName:"p"},"Next")," a couple of times (only change the NetBIOS domain name, if desired):"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(68428).Z,width:"1044",height:"391"})),(0,a.kt)("p",null,"Hit ",(0,a.kt)("strong",{parentName:"p"},"Install")," once your ",(0,a.kt)("em",{parentName:"p"},"Prerequisite Check")," gives you a green light:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(40586).Z,width:"1039",height:"568"})),(0,a.kt)("p",null,"Your server should restart automatically once the installation finished and you have to reconnect to your server afterwards:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(35777).Z,width:"1029",height:"391"})),(0,a.kt)("p",null,"Once you are back in verify that Active Directory was installed successfully - you should now be able to find the ",(0,a.kt)("strong",{parentName:"p"},"Active Directory Administrative Center")," in your start menu:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(76581).Z,width:"1085",height:"539"})),(0,a.kt)("p",null,"Searching for ",(0,a.kt)("inlineCode",{parentName:"p"},"DNS")," inside the start menu should also bring up the ",(0,a.kt)("strong",{parentName:"p"},"DNS Manager"),". A quick ping should show you that the server name is resolved correctly:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Windows Server 2019",src:r(30067).Z,width:"1084",height:"522"})))}p.isMDXComponent=!0},55933:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_01-822b0244ea4658f3ba1d7402c4c41eed.png"},93255:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_02-bdd0556bb69e683ec979437ecad1719a.png"},20502:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_03-1af4efd23ad5afde90c5a75edec48f0d.png"},68231:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_04-66219f9465bb9c8d1f1b0fc4417223a3.png"},4755:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_05-fcd7a371a33277e158ec9aac9a06b9a8.png"},64635:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_06-f31f33129100bd1b340a3b90f9a4cc9a.png"},65733:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_07-db5fa7592cabf91b6ac0e214fb1f2af0.png"},68428:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_08-f8d5f4304f78badccf4642cf3e7b5884.png"},40586:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_09-a50d94a7fe8d1a7d8a5caa9d208993a5.png"},35777:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_10-57e5dbd58b89ced138695464d9d0a2ad.png"},76581:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_11-516e477e182cdbec5a3c80ab27981157.png"},30067:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Windows_Server_2019_12-b57b22ab8d848171641b7a509befe54a.png"},51913:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/photo-f454_gf45g4e3ff-58b1f03e072141e5c9118a76435bb93f.png"}}]);