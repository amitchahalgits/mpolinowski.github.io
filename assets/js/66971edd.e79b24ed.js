"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[87265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,m=c["".concat(l,".").concat(h)]||c[h]||s[h]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:6980,slug:"2022-10-17",title:"OpenThread Border Router with Docker",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"Build an OpenThread Border Router with Raspberry Pi 3B+ and Pitaya Go."},i=void 0,d={unversionedId:"IoT-and-Machine-Learning/Home_Automation/2022-10-17-thread-edge-router/index",id:"IoT-and-Machine-Learning/Home_Automation/2022-10-17-thread-edge-router/index",title:"OpenThread Border Router with Docker",description:"Build an OpenThread Border Router with Raspberry Pi 3B+ and Pitaya Go.",source:"@site/docs/IoT-and-Machine-Learning/Home_Automation/2022-10-17-thread-edge-router/index.md",sourceDirName:"IoT-and-Machine-Learning/Home_Automation/2022-10-17-thread-edge-router",slug:"/IoT-and-Machine-Learning/Home_Automation/2022-10-17-thread-edge-router/2022-10-17",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-10-17-thread-edge-router/2022-10-17",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/Home_Automation/2022-10-17-thread-edge-router/index.md",tags:[{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:6980,frontMatter:{sidebar_position:6980,slug:"2022-10-17",title:"OpenThread Border Router with Docker",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"Build an OpenThread Border Router with Raspberry Pi 3B+ and Pitaya Go."},sidebar:"tutorialSidebar",previous:{title:"Run Camera.UI with Docker-Compose",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-10-18-camera-ui-docker/2022-10-18"},next:{title:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-17-node-red-for-mqtt-autodiscovery/2022-07-17"}},l={},p=[{value:"Run OTBR Docker",id:"run-otbr-docker",level:2},{value:"Use the Web GUI",id:"use-the-web-gui",level:2},{value:"Form a Thread Network",id:"form-a-thread-network",level:3}],u={toc:p};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Guangzhou, China",src:r(45741).Z,width:"1500",height:"526"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#run-otbr-docker"},"Run OTBR Docker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#use-the-web-gui"},"Use the Web GUI"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#form-a-thread-network"},"Form a Thread Network"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I tried to ",(0,n.kt)("a",{parentName:"p",href:"/docs/DevOps/Linux/2023-02-03--installing-docker-raspberry-pi/2023-02-03"},"prepare a Raspberry Pi and install Docker")," but I keep running into issues that are most likely based on me getting past the countries firewall (TLS errors on downloads). The bootstrap and setup script run through without to the end. But there are still parts missing. So now I simply use ",(0,n.kt)("a",{parentName:"p",href:"https://openthread.io/guides/border-router/docker"},"Docker to setup the router")," on my desktop Linux PC.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You still need to ",(0,n.kt)("a",{parentName:"p",href:"docs/IoT-and-Machine-Learning/Home_Automation/2022-10-17-thread-edge-router/2022-10-17#preparing-the-pitaya-go"},"prepare the Pitaya Go")," and plug it into a free USB port on your PC.")),(0,n.kt)("h2",{id:"run-otbr-docker"},"Run OTBR Docker"),(0,n.kt)("p",null,"Attach the Pitaya Go to the Raspberry Pi 3B via USB and determine the serial port name for the NCP device by checking ",(0,n.kt)("inlineCode",{parentName:"p"},"/dev")," - e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"ttyACM0"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ls /dev/tty*\n")),(0,n.kt)("p",null,"Get the Docker image:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull openthread/otbr\n")),(0,n.kt)("p",null,"In a new terminal window, start OTBR Docker, referencing the Pitaya Go's serial port. For example, if the Pitaya Go is mounted at ",(0,n.kt)("inlineCode",{parentName:"p"},"/dev/ttyACM0"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --sysctl "net.ipv6.conf.all.disable_ipv6=0 net.ipv4.conf.all.forwarding=1 net.ipv6.conf.all.forwarding=1" -p 8888:80 --dns=127.0.0.1 -it --volume /dev/ttyACM0:/dev/ttyACM0 --privileged openthread/otbr --radio-url spinel+hdlc+uart:///dev/ttyACM0\n')),(0,n.kt)("h2",{id:"use-the-web-gui"},"Use the Web GUI"),(0,n.kt)("p",null,"Now, you can use the OpenThread Border Router (OTBR) Web GUI to configure and form, join, or check the status of a Thread network."),(0,n.kt)("p",null,"Visit the WebUI on ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:8888"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"OpenThread Border Router with Docker",src:r(47026).Z,width:"1310",height:"568"})),(0,n.kt)("h3",{id:"form-a-thread-network"},"Form a Thread Network"),(0,n.kt)("p",null,"Use the Form menu option to create a new Thread network. Observe that GREEN LED on Pitaya Go is lit. Confirm by checking the Status menu option:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"OpenThread Border Router with Docker",src:r(98944).Z,width:"1310",height:"704"})))}s.isMDXComponent=!0},47026:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Thread-Edge-Router_06-1e4600e840aed6990e2d5884a5786982.png"},98944:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Thread-Edge-Router_07-2c323841be523ec14e70a09bf14ba1f6.png"},45741:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-98d71e33f881256303c68773a2ed92ba.jpg"}}]);