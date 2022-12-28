"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[30972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:5960,slug:"2022-12-15",title:"Convert RTSP to HLS using FFmpeg",authors:"mpolinowski",tags:["LINUX"],description:"INSTAR IP Camera RTSP Stream to HLS with FFMPEG"},s=void 0,i={unversionedId:"IoT-and-Machine-Learning/Home_Automation/2022-12-15--rtsp-to-hls-ffmpeg/index",id:"IoT-and-Machine-Learning/Home_Automation/2022-12-15--rtsp-to-hls-ffmpeg/index",title:"Convert RTSP to HLS using FFmpeg",description:"INSTAR IP Camera RTSP Stream to HLS with FFMPEG",source:"@site/docs/IoT-and-Machine-Learning/Home_Automation/2022-12-15--rtsp-to-hls-ffmpeg/index.md",sourceDirName:"IoT-and-Machine-Learning/Home_Automation/2022-12-15--rtsp-to-hls-ffmpeg",slug:"/IoT-and-Machine-Learning/Home_Automation/2022-12-15--rtsp-to-hls-ffmpeg/2022-12-15",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-12-15--rtsp-to-hls-ffmpeg/2022-12-15",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/Home_Automation/2022-12-15--rtsp-to-hls-ffmpeg/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:5960,frontMatter:{sidebar_position:5960,slug:"2022-12-15",title:"Convert RTSP to HLS using FFmpeg",authors:"mpolinowski",tags:["LINUX"],description:"INSTAR IP Camera RTSP Stream to HLS with FFMPEG"},sidebar:"tutorialSidebar",previous:{title:"Grafana IoT Dashboard",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-12-22--grafana-for-iot/2022-12-22"},next:{title:"Run Camera.UI with Docker-Compose",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-10-18-camera-ui-docker/2022-10-18"}},p={},l=[{value:"Convert RTSP to HLS using FFmpeg",id:"convert-rtsp-to-hls-using-ffmpeg",level:2}],m={toc:l};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TST, Hong Kong",src:n(76929).Z,width:"1500",height:"517"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#convert-rtsp-to-hls-using-ffmpeg"},"Convert RTSP to HLS using FFmpeg"))),(0,r.kt)("h2",{id:"convert-rtsp-to-hls-using-ffmpeg"},"Convert RTSP to HLS using FFmpeg"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.ffmpeg.org/ffmpeg-formats.html#hls-1"},"FFmpeg supports")," convert the RTSP streaming to HLS ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_Live_Streaming"},"HTTP Live Streaming"),". Based on standard HTTP transactions, HTTP Live Streaming can traverse any firewall or proxy server that lets through standard HTTP traffic, unlike UDP-based protocols such as RTP. This also allows content to be offered from conventional HTTP servers."),(0,r.kt)("p",null,"Start by creating a file ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," and embed the soon to be created stream:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>HLS Stream</title>\n  </head>\n  <body>\n    <video id="video" autoplay="true" controls="controls">\n      <source src="/stream/index.m3u8" type="application/x-mpegURL" />\n      Your browser does not support HTML5 streaming!\n    </video>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," folder ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir stream"),", install FFMPEG, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"apt install ffmpeg"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -version\nffmpeg version n5.1.2 Copyright (c) 2000-2022 the FFmpeg developers\n")),(0,r.kt)("p",null,"and for an ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.instar.com/en/Outdoor_Cameras/IN-9408_WQHD/Video_Streaming/"},"IP camera stream"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"INSTAR 2k+ WQHD Cameras")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rtsp://admin:instar@192.168.2.120:554/livestream/12\n")),(0,r.kt)("p",null,"run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -fflags nobuffer \\\n -loglevel debug \\\n -rtsp_transport tcp \\\n -i rtsp://admin:instar@192.168.2.120:554/livestream/11 \\\n -vsync 0 \\\n -copyts \\\n -vcodec copy \\\n -movflags frag_keyframe+empty_moov \\\n -an \\\n -hls_flags delete_segments+append_list \\\n -f hls \\\n -hls_time 1 \\\n -hls_list_size 3 \\\n -hls_segment_type mpegts \\\n -hls_segment_filename './stream/%d.ts' \\\n./stream/index.m3u8\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"INSTAR Full HD Cameras")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -fflags nobuffer \\\n -loglevel debug \\\n -rtsp_transport tcp \\\n -i rtsp://admin:instar@192.168.2.31:554/11 \\\n -vsync 0 \\\n -copyts \\\n -vcodec copy \\\n -movflags frag_keyframe+empty_moov \\\n -an \\\n -hls_flags delete_segments+append_list \\\n -f hls \\\n -hls_time 1 \\\n -hls_list_size 3 \\\n -hls_segment_type mpegts \\\n -hls_segment_filename './stream/%d.ts' \\\n./stream/index.m3u8\n")),(0,r.kt)("p",null,"By starting a web server on port ",(0,r.kt)("inlineCode",{parentName:"p"},"3000")," on a PC with the local IP ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.2.112")," the stream will now be served on the path ",(0,r.kt)("inlineCode",{parentName:"p"},"http://192.168.2.112:3000/stream/index.m3u8"),". You can test the stream using ",(0,r.kt)("inlineCode",{parentName:"p"},"ffplay"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RTSP to HLS with FFMPEG",src:n(12820).Z,width:"1566",height:"554"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," that the Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"audio/x-mpegurl")," is not supported on desktop systems - I had to use Google Chrome on Android to display the video embedded in the HTML file:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RTSP to HLS with FFMPEG",src:n(10320).Z,width:"1536",height:"985"})))}c.isMDXComponent=!0},76929:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ec671595d585b88a85b017a7908fb619.jpg"},12820:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rtsp-to-hls-ffmpeg_01-6c63935fc3f9b8c602aa484e1800c502.png"},10320:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rtsp-to-hls-ffmpeg_02-b96c70ca1111183745af53a5eed4de28.jpg"}}]);