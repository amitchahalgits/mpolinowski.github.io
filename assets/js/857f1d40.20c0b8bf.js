"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[21153],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:9060,slug:"2019-11-08",title:"Adding an OBS Stream to your Website",tags:["LINUX","Smarthome","IoT","Docker","NGINX"]},l=void 0,o={unversionedId:"DevOps/NGINX/2019-11-08--nginx-rtmp-website/index",id:"DevOps/NGINX/2019-11-08--nginx-rtmp-website/index",title:"Adding an OBS Stream to your Website",description:"Koh Rong, Cambodia",source:"@site/docs/DevOps/NGINX/2019-11-08--nginx-rtmp-website/index.md",sourceDirName:"DevOps/NGINX/2019-11-08--nginx-rtmp-website",slug:"/DevOps/NGINX/2019-11-08--nginx-rtmp-website/2019-11-08",permalink:"/docs/DevOps/NGINX/2019-11-08--nginx-rtmp-website/2019-11-08",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/NGINX/2019-11-08--nginx-rtmp-website/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"NGINX",permalink:"/docs/tags/nginx"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2019-11-08",title:"Adding an OBS Stream to your Website",tags:["LINUX","Smarthome","IoT","Docker","NGINX"]},sidebar:"tutorialSidebar",previous:{title:"Securing Webservers - Apache and NGINX",permalink:"/docs/DevOps/NGINX/2020-07-29--securing-apache-and-nginx/2020-07-29"},next:{title:"Building an RTMP Streaming Server with Podman",permalink:"/docs/DevOps/NGINX/2019-11-07--nginx-rtmp-streaming-container/2019-11-07"}},s={},p=[{value:"Update the NGINX Configuration File",id:"update-the-nginx-configuration-file",level:2},{value:"RTMP Module Config",id:"rtmp-module-config",level:3},{value:"HTTP Server Config",id:"http-server-config",level:3},{value:"Complete nginx.conf",id:"complete-nginxconf",level:3},{value:"Test your Stream",id:"test-your-stream",level:2},{value:"From existing rtmp stream already in h264",id:"from-existing-rtmp-stream-already-in-h264",level:2},{value:"From local webcam",id:"from-local-webcam",level:2},{value:"Embed within website",id:"embed-within-website",level:2}],c={toc:p};function m(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Koh Rong, Cambodia",src:t(33011).Z,width:"1500",height:"638"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-the-nginx-configuration-file"},"Update the NGINX Configuration File"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rtmp-module-config"},"RTMP Module Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#http-server-config"},"HTTP Server Config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#complete-nginxconf"},"Complete nginx.conf")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#test-your-stream"},"Test your Stream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#from-existing-rtmp-stream-already-in-h264"},"From existing rtmp stream already in h264")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#from-local-webcam"},"From local webcam")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#embed-within-website"},"Embed within website"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This tutorial starts where the last ended. I setup OBS to re-stream my INSTAR IP cameras RTSP stream to the NGINX RTMP module and tested that I was able to access this RTMP stream with a VLC player. I now want to embed this video stream into a website (",(0,r.kt)("a",{parentName:"p",href:"https://docs.peer5.com/guides/setting-up-hls-live-streaming-server-using-nginx/"},"Reference"),").")),(0,r.kt)("h2",{id:"update-the-nginx-configuration-file"},"Update the NGINX Configuration File"),(0,r.kt)("h3",{id:"rtmp-module-config"},"RTMP Module Config"),(0,r.kt)("p",null,"Our current RTMP setup looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"}," rtmp {\n         server {\n                 listen 1935;\n                 chunk_size 4096;\n\n                 application live {\n                         live on;\n                         record off;\n                 }\n         }\n }\n")),(0,r.kt)("p",null,"We will be using stream as our stream name so our endpoint will be: ",(0,r.kt)("inlineCode",{parentName:"p"},"rtmp://localhost/show/stream")," . Which will later be available as ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/hls/stream.m3u8"),". For good HLS experience we recommend using 3 seconds fragments with 60 seconds playlist:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"rtmp {\n    server {\n        listen 1935; # Listen on standard RTMP port\n        chunk_size 4096;\n\n        application show {\n            live on;\n            # Turn on HLS\n            hls on;\n            hls_path /mnt/hls/;\n            hls_fragment 3;\n            hls_playlist_length 60;\n            # disable consuming the stream from nginx as rtmp\n            deny play all;\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Note that the example points ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/hls/")," as the target path for the hls playlist and video files. You can change this to a different directory but make sure that nginx have write permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /mnt/hls/\nchown -R <nginx user>:<nginx user> /mnt/hls/\nchmod 777 /mnt/hls\n")),(0,r.kt)("h3",{id:"http-server-config"},"HTTP Server Config"),(0,r.kt)("p",null,"Since HLS consists of static files, a simple http server can be set up with two additions, correct MIME types and CORS headers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"server {\n    listen 8080;\n\n    location /hls {\n        # Disable cache\n        add_header Cache-Control no-cache;\n\n        # CORS setup\n        add_header 'Access-Control-Allow-Origin' '*' always;\n        add_header 'Access-Control-Expose-Headers' 'Content-Length';\n\n        # allow CORS preflight requests\n        if ($request_method = 'OPTIONS') {\n            add_header 'Access-Control-Allow-Origin' '*';\n            add_header 'Access-Control-Max-Age' 1728000;\n            add_header 'Content-Type' 'text/plain charset=UTF-8';\n            add_header 'Content-Length' 0;\n            return 204;\n        }\n\n        types {\n            application/vnd.apple.mpegurl m3u8;\n            video/mp2t ts;\n        }\n\n        root /mnt/;\n    }\n}\n")),(0,r.kt)("h3",{id:"complete-nginxconf"},"Complete nginx.conf"),(0,r.kt)("p",null,"The default location for nginx conf is ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/nginx/conf/nginx.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"worker_processes  auto;\nevents {\n    worker_connections  1024;\n}\n\n# RTMP configuration\nrtmp {\n    server {\n        listen 1935; # Listen on standard RTMP port\n        chunk_size 4096;\n\n        application show {\n            live on;\n            # Turn on HLS\n            hls on;\n            hls_path /mnt/hls/;\n            hls_fragment 3;\n            hls_playlist_length 60;\n            # disable consuming the stream from nginx as rtmp\n            deny play all;\n        }\n    }\n}\n\nhttp {\n    sendfile off;\n    tcp_nopush on;\n    directio 512;\n    default_type application/octet-stream;\n\n    server {\n        listen 8080;\n\n        location / {\n            # Disable cache\n            add_header 'Cache-Control' 'no-cache';\n\n            # CORS setup\n            add_header 'Access-Control-Allow-Origin' '*' always;\n            add_header 'Access-Control-Expose-Headers' 'Content-Length';\n\n            # allow CORS preflight requests\n            if ($request_method = 'OPTIONS') {\n                add_header 'Access-Control-Allow-Origin' '*';\n                add_header 'Access-Control-Max-Age' 1728000;\n                add_header 'Content-Type' 'text/plain charset=UTF-8';\n                add_header 'Content-Length' 0;\n                return 204;\n            }\n\n            types {\n                application/dash+xml mpd;\n                application/vnd.apple.mpegurl m3u8;\n                video/mp2t ts;\n            }\n\n            root /mnt/;\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Restart nginx with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/nginx/sbin/nginx -s stop\n/usr/local/nginx/sbin/nginx -t\n/usr/local/nginx/sbin/nginx\n")),(0,r.kt)("h2",{id:"test-your-stream"},"Test your Stream"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NGINX RTMP Streaming Server",src:t(25409).Z,width:"1081",height:"827"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NGINX RTMP Streaming Server",src:t(1192).Z,width:"932",height:"647"})),(0,r.kt)("h2",{id:"from-existing-rtmp-stream-already-in-h264"},"From existing rtmp stream already in h264"),(0,r.kt)("p",null,"if you have an existing rtmp stream in the correct codec, you can skip ffmpeg and tell nginx to pull the stream directly. In order to do so add a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/arut/nginx-rtmp-module/wiki/Directives#pull"},"pull directive")," under application section in nginx.conf like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"application show {\n    live on;\n    pull rtmp://example.com:4567/sports/channel3 live=1;\n    # to change the local stream name use this syntax: ... live=1 name=ch3;\n\n    # other directives...\n    # hls_...\n}\n")),(0,r.kt)("h2",{id:"from-local-webcam"},"From local webcam"),(0,r.kt)("p",null,"To achieve the stream encoding and muxing we will use the almighty ffmpeg."),(0,r.kt)("p",null,"To install ffmpeg using ",(0,r.kt)("a",{parentName:"p",href:"https://launchpad.net/~mc3man/+archive/ubuntu/bionic-prop"},"PPA")," run these commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"add-apt-repository ppa:mc3man/bionic-prop\napt-get update\napt-get install ffmpeg\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ffmpeg -i rtsp://192.168.2.117/12 -vcodec libx264 -vprofile baseline -acodec aac -strict -2 -f flv rtmp://localhost:1935/show/stream\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-re")," - consume stream on media's native bitrate (and not as fast as possible)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f")," - use video4linux2 plugin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i")," - select physical device to capture from"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-vcodec")," - specify video codec to output"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-vprofile")," - use x264 baseline profile"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-acodec")," - use aac audio codec"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-strict")," - allow using the experimental aac codec"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f")," - specify format to output"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rtmp://localhost/show/stream")," - rtmp endpoint to stream to. if the target port is not 1935 is should be included in the uri.")),(0,r.kt)("p",null,"The last path component is the stream name - that means that multiple channels can be pushed using different names"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"rtmp {\n    server {\n        listen 1935; # Listen on standard RTMP port\n        chunk_size 4096;\n\n        application show {\n\n            # Once receive stream, transcode for adaptive streaming\n            # This single ffmpeg command takes the input and transforms\n            # the source into 4 different streams with different bitrate\n            # and quality. P.S. The scaling done here respects the aspect\n            # ratio of the input.\n\n            exec ffmpeg -i rtmp://192.168.2.111/appname/streamname -vcodec libx264 -vprofile baseline -acodec aac -strict -2 -f flv rtmp://localhost/show/stream\n\n            live on;\n            # Turn on HLS\n            hls on;\n            hls_path /mnt/hls/;\n            hls_fragment 3;\n            hls_playlist_length 60;\n            # disable consuming the stream from nginx as rtmp\n            deny play all;\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Restart nginx with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/nginx/sbin/nginx -s stop\n/usr/local/nginx/sbin/nginx -t\n/usr/local/nginx/sbin/nginx\n")),(0,r.kt)("h2",{id:"embed-within-website"},"Embed within website"),(0,r.kt)("p",null,"Now that we are pushing our stream into nginx, a manifest file in the format stream-name.m3u8 is created in the target folder along with the video fragments."),(0,r.kt)("p",null,"For our example, the manifest is available at: http://localhost:8080/hls/stream.m3u8."),(0,r.kt)("p",null,"For testing our new HLS live stream we will use ",(0,r.kt)("a",{parentName:"p",href:"http://videojs.com/"},"videojs5"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<video\n  id="autoplay"\n  width="720"\n  height="360"\n  class="video-js vjs-default-skin vjs-big-play-centered"\n  controls\n>\n  <source\n    src="http://192.168.2.111:8080/hls/stream.m3u8"\n    type="application/x-mpegURL"\n  />\n</video>\n\n<link href="//vjs.zencdn.net/5.7.1/video-js.css" rel="stylesheet" />\n<script src="//vjs.zencdn.net/5.7.1/video.js"><\/script>\n<script src="//videojs.github.io/videojs-contrib-hls/node_modules/videojs-contrib-hls/dist/videojs.hls.min.js"><\/script>\n\n<script>\n  var player = videojs(\'autoplay\')\n  player.play()\n<\/script>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://html5boilerplate.com"},"HTML5 Boilerplate")))}m.isMDXComponent=!0},25409:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/NGINX_RTMP_Streaming_Server_01-ddf60aa5b8970abcd588bcfc00dce24f.png"},1192:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/NGINX_RTMP_Streaming_Server_02-bec616fd88209448f9d863d7bd55d4f5.png"},33011:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-8d2d91e3e0054cd91340c6e3d05d419a.jpg"}}]);