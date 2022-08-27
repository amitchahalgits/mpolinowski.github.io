"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[37498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:7080,slug:"2021-11-10",title:"Tensorflow2 Crash Course - Part III",authors:"mpolinowski",tags:["Machine Learning","Python"]},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/index",id:"IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/index",title:"Tensorflow2 Crash Course - Part III",description:"Mong Kok, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii",slug:"/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/2021-11-10",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/2021-11-10",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:7080,frontMatter:{sidebar_position:7080,slug:"2021-11-10",title:"Tensorflow2 Crash Course - Part III",authors:"mpolinowski",tags:["Machine Learning","Python"]},sidebar:"tutorialSidebar",previous:{title:"Tensorflow2 Crash Course - Part IV",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-11--tensorflow-crash-course-part-iv/2021-11-11"},next:{title:"Tensorflow2 Crash Course - Part II",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/2021-11-09"}},s={},c=[{value:"Object Detection",id:"object-detection",level:2},{value:"Load Train Model From Checkpoint",id:"load-train-model-from-checkpoint",level:3},{value:"Detect Object from an Image File",id:"detect-object-from-an-image-file",level:3},{value:"Detect Object from your Live Videstream",id:"detect-object-from-your-live-videstream",level:3},{value:"Debugging",id:"debugging",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mong Kok, Hongkong",src:n(19468).Z,width:"1500",height:"544"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#object-detection"},"Object Detection"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#load-train-model-from-checkpoint"},"Load Train Model From Checkpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#detect-object-from-an-image-file"},"Detect Object from an Image File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#detect-object-from-your-live-videstream"},"Detect Object from your Live Videstream")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#debugging"},"Debugging"))),(0,r.kt)("p",null,"This set of Notebooks provides a complete set of code to be able to train and leverage your own custom object detection model using the Tensorflow Object Detection API."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article is based on a ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCHXa4OpASJEwrHrLeIzw7Yg"},"Tutorial")," by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nicknochnack"},"@nicknochnack"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2021-11-08--tensorflow-crash-course-part-i/2021-11-08"},"Tensorflow2 Crash Course Part I")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/2021-11-09"},"Tensorflow2 Crash Course Part II")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/2021-11-10"},"Tensorflow2 Crash Course Part III")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2021-11-11--tensorflow-crash-course-part-iv/2021-11-11"},"Tensorflow2 Crash Course Part IV")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v/2021-11-12"},"Tensorflow2 Crash Course Part V"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/tensorflow2-starter"},"Github Repository")),(0,r.kt)("h2",{id:"object-detection"},"Object Detection"),(0,r.kt)("h3",{id:"load-train-model-from-checkpoint"},"Load Train Model From Checkpoint"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This step requires a few import that caused some - Manjaro Linux / Anaconda3 related - issues - ",(0,r.kt)("a",{parentName:"p",href:"#debugging"},"see Debugging below"),".")),(0,r.kt)("p",null,"The previous training generated 3 check point in ",(0,r.kt)("inlineCode",{parentName:"p"},"TFODCourse/Tensorflow/workspace/models/my_ssd_mobnet")," out of which I will choose the last one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ckpt.restore(os.path.join(paths['CHECKPOINT_PATH'], 'ckpt-3')).expect_partial()\n")),(0,r.kt)("h3",{id:"detect-object-from-an-image-file"},"Detect Object from an Image File"),(0,r.kt)("p",null,"Select an image from the test folder that you want to run your algorithm against, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Tensorflow/workspace/images/test/metal.tyrxdf6-zzggg-RGdgfc-zdfg-1cDGF17f.jpg\n")),(0,r.kt)("p",null,"And add it to the corresponding line in your notebook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"IMAGE_PATH = os.path.join(paths['IMAGE_PATH'], 'test', 'metal.tyrxdf6-zzggg-RGdgfc-zdfg-1cDGF17f.jpg')\n")),(0,r.kt)("p",null,"Now run the detection code and see if the object is classified correctly:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Object Detection Walkthrough",src:n(97869).Z,width:"1077",height:"759"})),(0,r.kt)("h3",{id:"detect-object-from-your-live-videstream"},"Detect Object from your Live Videstream"),(0,r.kt)("p",null,"Here I got another ",(0,r.kt)("strong",{parentName:"p"},"Error Message"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"(-2:Unspecified error) Rebuild the library with Windows, GTK+ 2.x or Carbon support. If you are on Ubuntu or Debian, install libgtk2.0-dev and pkg-config, then re-run cmake or configure script in function 'cvShowImage'."))),(0,r.kt)("p",null,"This is a problem with openCV and missing libraries. I found that you can install the following package using ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," inside your virtual environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install opencv-contrib-python\n")),(0,r.kt)("p",null,"And the second solution was to globally install the following packages using your distro's package manager:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -Syu gtk4 pkg-config\n")),(0,r.kt)("p",null,"Once I had done that everything worked as expected:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Object Detection Walkthrough",src:n(38035).Z,width:"414",height:"319"})),(0,r.kt)("p",null,"The artifacts inside the video come from the ",(0,r.kt)("strong",{parentName:"p"},"UDP")," protocol and can be fixed by switching it to ",(0,r.kt)("strong",{parentName:"p"},"TCP"),". But I am currently having some issues with the RTSP server and have only the UDP option."),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"The notebook import two libraries that rely have a c++ dependency - ",(0,r.kt)("inlineCode",{parentName:"p"},"libstdc++.so"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cpython-39-x86_64-linux-gnu.so"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from object_detection.utils import visualization_utils as viz_utils\nfrom object_detection.builders import model_builder\n")),(0,r.kt)("p",null,"The first ",(0,r.kt)("strong",{parentName:"p"},"ERROR Message")," that I received while importing ",(0,r.kt)("inlineCode",{parentName:"p"},"visualization_utils")," was:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ImportError: /opt/Python/TFODCourse/tfod/lib/python3.9/site-packages/matplotlib/ft2font.cpython-39-x86_64-linux-gnu.so: undefined symbol: _ZSt28__throw_bad_array_new_lengthv\n")),(0,r.kt)("p",null,"This could be solved by upgrading ",(0,r.kt)("strong",{parentName:"p"},"Matplotlib")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"3.2.0")," to version ",(0,r.kt)("inlineCode",{parentName:"p"},"3.2.2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip uninstall -y matplotlib\npip install matplotlib==3.2.2\n")),(0,r.kt)("p",null,"When I now re-try the import the ",(0,r.kt)("strong",{parentName:"p"},"ERROR Message")," changes to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"ImportError: /home/myuser/anaconda3/bin/../lib/libstdc++.so.6: version `GLIBCXX_3.4.29' not found (required by /opt/Python/TFODCourse/tfod/lib/python3.9/site-packages/matplotlib/_path.cpython-39-x86_64-linux-gnu.so)`\n")),(0,r.kt)("p",null,"I have Manjaro (Arch) Linux installed and am running the latest version of ",(0,r.kt)("strong",{parentName:"p"},"Anaconda3"),". The latter uses ",(0,r.kt)("inlineCode",{parentName:"p"},"libstdc++.so.6.0.28")," while the newest version of Manjaro comes with ",(0,r.kt)("inlineCode",{parentName:"p"},"libstdc++.so.6.0.29"),". When I check the Anaconda version I can see that it only goes up to `GLIBCXX_3.4.28':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/home/myuser/anaconda3/lib/libstdc++.so.6 | grep GLIBCXX\n\nGLIBCXX_3.4\nGLIBCXX_3.4.1\nGLIBCXX_3.4.2\nGLIBCXX_3.4.3\nGLIBCXX_3.4.4\nGLIBCXX_3.4.5\nGLIBCXX_3.4.6\nGLIBCXX_3.4.7\nGLIBCXX_3.4.8\nGLIBCXX_3.4.9\nGLIBCXX_3.4.10\nGLIBCXX_3.4.11\nGLIBCXX_3.4.12\nGLIBCXX_3.4.13\nGLIBCXX_3.4.14\nGLIBCXX_3.4.15\nGLIBCXX_3.4.16\nGLIBCXX_3.4.17\nGLIBCXX_3.4.18\nGLIBCXX_3.4.19\nGLIBCXX_3.4.20\nGLIBCXX_3.4.21\nGLIBCXX_3.4.22\nGLIBCXX_3.4.23\nGLIBCXX_3.4.24\nGLIBCXX_3.4.25\nGLIBCXX_3.4.26\nGLIBCXX_3.4.27\nGLIBCXX_3.4.28\nGLIBCXX_DEBUG_MESSAGE_LENGTH\n")),(0,r.kt)("p",null,"I created an backup of all ",(0,r.kt)("inlineCode",{parentName:"p"},"libstdc++.so*")," files/symlinks and linked in the system library in their place:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv /home/myuser/anaconda3/lib/libstdc++.so /home/myuser/anaconda3/lib/libstdc++.so.bak\nln -s /usr/lib/libstdc++.so.6.0.29 /home/myuser/anaconda3/lib/libstdc++.so\n\nmv /home/myuser/anaconda3/lib/libstdc++.so.6 /home/myuser/anaconda3/lib/libstdc++.so.6.bak\nln -s /usr/lib/libstdc++.so.6.0.29 /home/myuser/anaconda3/lib/libstdc++.so.6\n\nmv /home/myuser/anaconda3/lib/libstdc++.so.6.0.28 /home/myuser/anaconda3/lib/libstdc++.so.6.0.28.bak\nln -s /usr/lib/libstdc++.so.6.0.29 /home/myuser/anaconda3/lib/libstdc++.so.6.0.28\n")),(0,r.kt)("p",null,"The result looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ll /home/myuser/anaconda3/lib | grep ibstdc++ \n\nlrwxrwxrwx  1 myuser myuser        28 Jan  2 16:17 libstdc++.so -> /usr/lib/libstdc++.so.6.0.29\nlrwxrwxrwx  1 myuser myuser        28 Jan  2 16:17 libstdc++.so.6 -> /usr/lib/libstdc++.so.6.0.29\nlrwxrwxrwx  1 myuser myuser        28 Jan  2 15:10 libstdc++.so.6.0.28 -> /usr/lib/libstdc++.so.6.0.29\n-rwxrwxr-x  3 myuser myuser  13121976 Jun  3  2021 libstdc++.so.6.0.28.bak\nlrwxrwxrwx  1 myuser myuser        19 Dec 25 17:01 libstdc++.so.6.bak -> libstdc++.so.6.0.28\nlrwxrwxrwx  1 myuser myuser        19 Dec 25 17:01 libstdc++.so.bak -> libstdc++.so.6.0.28\n")),(0,r.kt)("p",null,"When I recheck the file I now see the necessary reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"GLIBCXX_3.4.29"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/home/myuser/anaconda3/lib/libstdc++.so.6 | grep GLIBCXX\n\nGLIBCXX_3.4\nGLIBCXX_3.4.1\nGLIBCXX_3.4.2\nGLIBCXX_3.4.3\nGLIBCXX_3.4.4\nGLIBCXX_3.4.5\nGLIBCXX_3.4.6\nGLIBCXX_3.4.7\nGLIBCXX_3.4.8\nGLIBCXX_3.4.9\nGLIBCXX_3.4.10\nGLIBCXX_3.4.11\nGLIBCXX_3.4.12\nGLIBCXX_3.4.13\nGLIBCXX_3.4.14\nGLIBCXX_3.4.15\nGLIBCXX_3.4.16\nGLIBCXX_3.4.17\nGLIBCXX_3.4.18\nGLIBCXX_3.4.19\nGLIBCXX_3.4.20\nGLIBCXX_3.4.21\nGLIBCXX_3.4.22\nGLIBCXX_3.4.23\nGLIBCXX_3.4.24\nGLIBCXX_3.4.25\nGLIBCXX_3.4.26\nGLIBCXX_3.4.27\nGLIBCXX_3.4.28\nGLIBCXX_3.4.29\nGLIBCXX_DEBUG_MESSAGE_LENGTH\n")),(0,r.kt)("p",null,"Re-running the import now works as expected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"from object_detection.utils import visualization_utils as viz_utils\nfrom object_detection.builders import model_builder\n")))}u.isMDXComponent=!0},97869:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Tensorflow_Training_01-dee71ced5182650db9dec6b9a8d8cc5e.png"},38035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Tensorflow_Training_02-0c61fa8c6d045a08ebfd42275dcfdc0c.gif"},19468:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-8629210580d5b66cf728356357923b9f.jpg"}}]);