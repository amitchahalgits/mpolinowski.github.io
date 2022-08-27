"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[43686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5030,slug:"2022-04-04",title:"Face Restoration with GFPGAN",authors:"mpolinowski",tags:["PyTorch","Machine Learning","Python"]},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2022-04-04-pytorch-face-restoration/index",id:"IoT-and-Machine-Learning/ML/2022-04-04-pytorch-face-restoration/index",title:"Face Restoration with GFPGAN",description:"Victoria Harbour, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-04-04-pytorch-face-restoration/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-04-04-pytorch-face-restoration",slug:"/IoT-and-Machine-Learning/ML/2022-04-04-pytorch-face-restoration/2022-04-04",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-04-04-pytorch-face-restoration/2022-04-04",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-04-04-pytorch-face-restoration/index.md",tags:[{label:"PyTorch",permalink:"/docs/tags/py-torch"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:5030,frontMatter:{sidebar_position:5030,slug:"2022-04-04",title:"Face Restoration with GFPGAN",authors:"mpolinowski",tags:["PyTorch","Machine Learning","Python"]},sidebar:"tutorialSidebar",previous:{title:"Machine Learning",permalink:"/docs/category/machine-learning"},next:{title:"Super Resolution with Real-ESRGAN",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-04-03-pytorch-real-super-resolution/2022-04-03"}},s={},p=[{value:"Project Setup",id:"project-setup",level:2},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Run Up-Sampling",id:"run-up-sampling",level:2},{value:"Results",id:"results",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Victoria Harbour, Hongkong",src:n(67570).Z,width:"1500",height:"565"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#project-setup"},"Project Setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#install-dependencies"},"Install Dependencies")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run-up-sampling"},"Run Up-Sampling"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#results"},"Results"))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/GFPGAN"},"Github Repository")),(0,a.kt)("h2",{id:"project-setup"},"Project Setup"),(0,a.kt)("p",null,"This project uses the GFPGAN repository available on Github:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mpolinowski/GFPGAN\n")),(0,a.kt)("p",null,"And we will be using a pre-trained model that can be downloaded from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/GFPGAN#european_castle-model-zoo"},"here"),". There are different models available - one of them does not rely on a CUDA-Extensions (can be run on a CPU). But the following one does require an nVidia graphics card:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd GFPGAN\nwget https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth -P experiments/pretrained_models\n")),(0,a.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,a.kt)("p",null,"All dependencies are listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"torch>=1.7\nnumpy<1.21  # numba requires numpy<1.21,>=1.17\nopencv-python\ntorchvision\nscipy\ntqdm\nbasicsr>=1.3.4.0\nfacexlib>=0.2.0.3\nlmdb\npyyaml\ntb-nightly\nyapf\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,a.kt)("p",null,"If you want to enhance the background (non-face) regions with Real-ESRGAN, you also need to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"realesrgan")," package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install realesrgan\n")),(0,a.kt)("p",null,"And run the setup script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python setup.py develop\n")),(0,a.kt)("h2",{id:"run-up-sampling"},"Run Up-Sampling"),(0,a.kt)("p",null,"We can run the following script included inside the repository to feed images from the ",(0,a.kt)("inlineCode",{parentName:"p"},"./inputs/whole_imgs")," directory into our GAN and output the up-sampled images into the ",(0,a.kt)("inlineCode",{parentName:"p"},"./results")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python inference_gfpgan.py -i inputs/whole_imgs -o results -v 1.3 -s 2\n")),(0,a.kt)("h3",{id:"results"},"Results"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ESRGAN Super Resolution",src:n(92343).Z,width:"1791",height:"587"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ESRGAN Super Resolution",src:n(12918).Z,width:"1867",height:"567"})))}u.isMDXComponent=!0},92343:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Before_After-574e289d9c5ffe649f47ce9577f47215.png"},12918:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Before_After2-c6e59bde2b550a290b3946286f09863a.png"},67570:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-23d027067cc9016279f834178a642545.jpg"}}]);