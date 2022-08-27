"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[43003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:7040,slug:"2021-11-14",title:"Tensorflow.js React App",authors:"mpolinowski",tags:["React","Machine Learning","Python"]},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2021-11-14--tensorflow-model-for-tfjs/index",id:"IoT-and-Machine-Learning/ML/2021-11-14--tensorflow-model-for-tfjs/index",title:"Tensorflow.js React App",description:"Mong Kok, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-14--tensorflow-model-for-tfjs/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-14--tensorflow-model-for-tfjs",slug:"/IoT-and-Machine-Learning/ML/2021-11-14--tensorflow-model-for-tfjs/2021-11-14",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-14--tensorflow-model-for-tfjs/2021-11-14",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-14--tensorflow-model-for-tfjs/index.md",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:7040,frontMatter:{sidebar_position:7040,slug:"2021-11-14",title:"Tensorflow.js React App",authors:"mpolinowski",tags:["React","Machine Learning","Python"]},sidebar:"tutorialSidebar",previous:{title:"Introduction into FB Prophet",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-15--facebook-prophet-introduction/2021-11-15"},next:{title:"Tensorflow2 Model Zoo",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-13--tensorflow-model-zoo/2021-11-13"}},s={},p=[{value:"Steps",id:"steps",level:2},{value:"Workbox Issue",id:"workbox-issue",level:2},{value:"Test your Object Detection",id:"test-your-object-detection",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mong Kok, Hongkong",src:n(5429).Z,width:"1500",height:"544"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#steps"},"Steps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#workbox-issue"},"Workbox Issue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#test-your-object-detection"},"Test your Object Detection"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/js"},"TensorFlow.js")," is a library for machine learning in JavaScript. Develop ML models in JavaScript, and use ML directly in the browser or in Node.js."),(0,a.kt)("p",null,"A Tutorial based on the ","[Tensorflow Object Detection Tutorial]"," and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nicknochnack/TFODApp"},"Tensorflow.js Code Example")," by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nicknochnack/"},"@nicknochnack"),"."),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Clone this repository: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mpolinowski/tensorflow-js-react-app"},"https://github.com/mpolinowski/tensorflow-js-react-app")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Install Node ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Install App Dependencies ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Copy your ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2021-11-11--tensorflow-crash-course-part-iv/2021-11-11"},"exported Tensorflow.js model")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"public/model"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls -la public/model\n\n   4096 Jan  8 22:11 .\n   4096 Jan  8 22:11 ..\n4194304 Jan  8 20:54 group1-shard1of3.bin\n4194304 Jan  8 20:54 group1-shard2of3.bin\n3356824 Jan  8 20:54 group1-shard3of3.bin\n 467951 Jan  8 20:54 model.json\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Link the model into your ",(0,a.kt)("inlineCode",{parentName:"li"},"src/App.js"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"const net = await tf.loadGraphModel('http://localhost:3000/model/model.json')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," this only works when you access the App via ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),". You can replace ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," with the IP address of your machine - but you will get an CORS Error if you try to access it. The ",(0,a.kt)("em",{parentName:"p"},"clean")," solution would be to stash your model on a server where you can adjust the webserver to allow resources from different IPs (this path is described in the Youtube video linked above). But this way is good enough for testing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Edit ",(0,a.kt)("inlineCode",{parentName:"li"},"src/utilities.js")," to add your labels - in my case I only have one labeled object in my Tensorflow model. Add all of yours inside the ",(0,a.kt)("strong",{parentName:"li"},"Label Map"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const labelMap = {\n    1:{name:'INSTAR', color:'red'}\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Fix the bounding box - see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nicknochnack/TFODApp/issues/1"},"Github Issue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8.")," Run the App ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 9.")," The Tensorflow detection returns an Object that contains a lot of different data. Find the correct one by incrementing ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log(await obj[0].array())")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"src/App.js")," and check the output:")),(0,a.kt)("p",null,"For me the position was ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," for ",(0,a.kt)("strong",{parentName:"p"},"confidence scores"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," for ",(0,a.kt)("strong",{parentName:"p"},"object classes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," for the corner position of the ",(0,a.kt)("strong",{parentName:"p"},"boundary box")," - adjust these values accordingly in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"const boxes = await obj[3].array()\nconst classes = await obj[1].array()\nconst scores = await obj[0].array()\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scores")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"console.log(await obj[0].array())")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tensorflow.js Object Detection React Application",src:n(57482).Z,width:"646",height:"318"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Classes")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"console.log(await obj[1].array())")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tensorflow.js Object Detection React Application",src:n(33230).Z,width:"652",height:"329"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Boxes")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"console.log(await obj[3].array())")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tensorflow.js Object Detection React Application",src:n(40819).Z,width:"652",height:"264"})),(0,a.kt)("h2",{id:"workbox-issue"},"Workbox Issue"),(0,a.kt)("p",null,"The Workbox service worker that ships with Create React App overrides the consol.log() output. Simply unregister the SW in your browser and reload the page to get rid of it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Console -> Application tab -> Service workers -> sw.js unregister\n")),(0,a.kt)("h2",{id:"test-your-object-detection"},"Test your Object Detection"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tensorflow.js Object Detection React Application",src:n(40145).Z,width:"430",height:"248"})))}d.isMDXComponent=!0},57482:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obj[0]-cc413247ad9535ee71249de4a713ae09.png"},33230:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obj[1]-8392dccbf8debc91b5ac15859103bec5.png"},40819:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/obj[3]-bf7f1436c79bf0e63cce35aab08eed56.png"},5429:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-8629210580d5b66cf728356357923b9f.jpg"},40145:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tensorflowjs-object-detection-06a728be580bd1ebe761a07fb46a5699.gif"}}]);