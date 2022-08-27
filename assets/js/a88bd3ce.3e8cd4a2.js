"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[80734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5040,slug:"2022-04-03",title:"Super Resolution with Real-ESRGAN",authors:"mpolinowski",tags:["PyTorch","Machine Learning","Python"]},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2022-04-03-pytorch-real-super-resolution/index",id:"IoT-and-Machine-Learning/ML/2022-04-03-pytorch-real-super-resolution/index",title:"Super Resolution with Real-ESRGAN",description:"Victoria Harbour, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-04-03-pytorch-real-super-resolution/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-04-03-pytorch-real-super-resolution",slug:"/IoT-and-Machine-Learning/ML/2022-04-03-pytorch-real-super-resolution/2022-04-03",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-04-03-pytorch-real-super-resolution/2022-04-03",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-04-03-pytorch-real-super-resolution/index.md",tags:[{label:"PyTorch",permalink:"/docs/tags/py-torch"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:5040,frontMatter:{sidebar_position:5040,slug:"2022-04-03",title:"Super Resolution with Real-ESRGAN",authors:"mpolinowski",tags:["PyTorch","Machine Learning","Python"]},sidebar:"tutorialSidebar",previous:{title:"Face Restoration with GFPGAN",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-04-04-pytorch-face-restoration/2022-04-04"},next:{title:"Super Resolution with ESRGAN",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-04-02-pytorch-super-resolution/2022-04-02"}},p={},s=[{value:"Project Setup",id:"project-setup",level:2},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Run Up-Sampling",id:"run-up-sampling",level:2},{value:"Results",id:"results",level:3}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Victoria Harbour, Hongkong",src:n(77953).Z,width:"1500",height:"565"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#project-setup"},"Project Setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#install-dependencies"},"Install Dependencies")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run-up-sampling"},"Run Up-Sampling"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#results"},"Results"))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/Real-ESRGAN"},"Github Repository")),(0,a.kt)("h2",{id:"project-setup"},"Project Setup"),(0,a.kt)("p",null,"This project uses the Real-ESRGAN repository available on Github:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mpolinowski/Real-ESRGAN\n")),(0,a.kt)("p",null,"And we will be using a pre-trained model that can be downloaded from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth"},"here"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd Real-ESRGAN\nwget https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth -P experiments/pretrained_models\n")),(0,a.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,a.kt)("p",null,"All dependencies are listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"basicsr>=1.3.3.11\nfacexlib>=0.2.0.3\ngfpgan>=0.2.1\nnumpy\nopencv-python\nPillow\ntorch>=1.7\ntorchvision\ntqdm\ndaal==2021.2.3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,a.kt)("p",null,"And run the setup script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python setup.py develop\n")),(0,a.kt)("h2",{id:"run-up-sampling"},"Run Up-Sampling"),(0,a.kt)("p",null,"We can run the following script included inside the repository to feed images from the ",(0,a.kt)("inlineCode",{parentName:"p"},"./inputs")," directory into our GAN and output the up-sampled images into the ",(0,a.kt)("inlineCode",{parentName:"p"},"./results")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python inference_realesrgan.py -n RealESRGAN_x4plus -i inputs --face_enhance\n")),(0,a.kt)("h3",{id:"results"},"Results"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ESRGAN Super Resolution",src:n(7191).Z,width:"1716",height:"579"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ESRGAN Super Resolution",src:n(64002).Z,width:"2045",height:"837"})))}c.isMDXComponent=!0},7191:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Before_After-4b86ae8806fe32781f47267405d50bde.png"},64002:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Before_After2-eef20ac2c712bd6f8b1d4b542ba39c85.png"},77953:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-23d027067cc9016279f834178a642545.jpg"}}]);