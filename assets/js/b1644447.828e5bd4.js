"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[41245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||p[d]||n;return a?o.createElement(k,c(c({ref:t},i),{},{components:a})):o.createElement(k,c({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var m=2;m<n;m++)c[m]=a[m];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var o=a(87462),r=(a(67294),a(3905));const n={sidebar_position:9070,slug:"2020-12-25",title:"Tomcat 10 Docker Cluster",authors:"mpolinowski",tags:["LINUX","Tomcat","Docker"]},c=void 0,l={unversionedId:"DevOps/Tomcat/2020-12-25-tomcat10-docker-cluster/index",id:"DevOps/Tomcat/2020-12-25-tomcat10-docker-cluster/index",title:"Tomcat 10 Docker Cluster",description:"Siem Reap, Cambodia",source:"@site/docs/DevOps/Tomcat/2020-12-25-tomcat10-docker-cluster/index.md",sourceDirName:"DevOps/Tomcat/2020-12-25-tomcat10-docker-cluster",slug:"/DevOps/Tomcat/2020-12-25-tomcat10-docker-cluster/2020-12-25",permalink:"/docs/DevOps/Tomcat/2020-12-25-tomcat10-docker-cluster/2020-12-25",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Tomcat/2020-12-25-tomcat10-docker-cluster/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Tomcat",permalink:"/docs/tags/tomcat"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:9070,frontMatter:{sidebar_position:9070,slug:"2020-12-25",title:"Tomcat 10 Docker Cluster",authors:"mpolinowski",tags:["LINUX","Tomcat","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Tomcat 10 Cluster with individual Node Server",permalink:"/docs/DevOps/Tomcat/2020-12-26-tomcat10-cluster-with-individual-nodes/2020-12-26"},next:{title:"Tomcat 9 Cluster & Loadbalancing",permalink:"/docs/DevOps/Tomcat/2020-12-24-tomcat9-cluster-and-load-balancing/2020-12-24"}},s={},m=[{value:"Docker Image",id:"docker-image",level:2},{value:"Sample Web Application",id:"sample-web-application",level:3},{value:"Running the Docker Images",id:"running-the-docker-images",level:3},{value:"Building the Docker Image",id:"building-the-docker-image",level:3},{value:"Running a Cluster with Docker-Compose",id:"running-a-cluster-with-docker-compose",level:2}],i={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Siem Reap, Cambodia",src:a(63341).Z,width:"1500",height:"706"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-image"},"Docker Image"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sample-web-application"},"Sample Web Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-the-docker-images"},"Running the Docker Images")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-the-docker-image"},"Building the Docker Image")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-a-cluster-with-docker-compose"},"Running a Cluster with Docker-Compose"))),(0,r.kt)("h2",{id:"docker-image"},"Docker Image"),(0,r.kt)("p",null,"You can download a version of Tomcat from ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/tomcat?tab=tags&page=1&ordering=last_updated"},"Docker Hub"),". I have been working with Tomcat 9 before - but I will try the ",(0,r.kt)("a",{parentName:"p",href:"https://tomcat.apache.org/tomcat-10.0-doc/index.html"},"version 10")," that is not yet labeled as stable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull tomcat:10-jdk11-corretto\n")),(0,r.kt)("h3",{id:"sample-web-application"},"Sample Web Application"),(0,r.kt)("p",null,"Tomcat offers a sample application that we can use with our container - ",(0,r.kt)("a",{parentName:"p",href:"https://tomcat.apache.org/tomcat-10.0-doc/appdev/sample/"},"you can download it here"),". The example app has been packaged as a ",(0,r.kt)("inlineCode",{parentName:"p"},"sample.war")," file. If you just want to browse the contents, you can unpack the war file with the jar command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"jar -xvf sample.war\n")),(0,r.kt)("p",null,"The easiest way to run this application is simply to move the war file to your ",(0,r.kt)("inlineCode",{parentName:"p"},"CATALINA_BASE/webapps")," directory. A default Tomcat install will automatically expand and deploy the application for you. You can view it with the following URL (assuming that you're running tomcat on port 8080 which is the default):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://<My-Server>:8080/sample\n")),(0,r.kt)("h3",{id:"running-the-docker-images"},"Running the Docker Images"),(0,r.kt)("p",null,"To run the sample app in Docker copy the file onto your LINUX server and mount it into the Tomcat container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -p 8888:8080 \\\n-v /opt/tomcat/docker/sample.war:/usr/local/tomcat/webapps/sample.war \\\ntomcat:10-jdk11-corretto\n\nUsing CATALINA_BASE:   /usr/local/tomcat\nUsing CATALINA_HOME:   /usr/local/tomcat\nUsing CATALINA_TMPDIR: /usr/local/tomcat/temp\nUsing JRE_HOME:        /usr/lib/jvm/java-11-amazon-corretto\nUsing CLASSPATH:       /usr/local/tomcat/bin/bootstrap.jar:/usr/local/tomcat/bin/tomcat-juli.jar\n")),(0,r.kt)("p",null,"I forwarded the Tomcat service on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8888")," so I can now access the sample app under:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://<My-Server>:8888/sample/\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tomcat 10 Docker Cluster",src:a(42148).Z,width:"771",height:"234"})),(0,r.kt)("h3",{id:"building-the-docker-image"},"Building the Docker Image"),(0,r.kt)("p",null,"Alternatively, you can build the sample application into your container (so you don't need to use a volume mount). For this, create a Dockerfile next to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sample.war")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM tomcat:10-jdk11-corretto\nADD sample.war /usr/local/tomcat/webapps/\nEXPOSE 8080\nCMD chmod +x /usr/local/tomcat/bin/catalina.sh\nCMD ["catalina.sh", "run"]\n')),(0,r.kt)("p",null,"And build and run your docker container from it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t tomcat10 .\ndocker run -it -p 8888:8080 tomcat10\n")),(0,r.kt)("h2",{id:"running-a-cluster-with-docker-compose"},"Running a Cluster with Docker-Compose"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"docker-compose.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"portal:\n  image: nginx:stable-alpine\n  ports:\n    - '8888:80'\n  volumes:\n    - /opt/tomcat/docker/cluster/nginx/default.conf:/etc/nginx/conf.d/default.conf\n  links:\n    - tomcatOne:tomcat1\n    - tomcatTwo:tomcat2\n    - tomcatThree:tomcat3\ntomcatOne:\n  image: tomcat:10-jdk11-corretto\n  volumes:\n    - /opt/tomcat/docker/cluster/tomcat/conf/server.xml:/usr/local/tomcat/conf/server.xml\n    - /opt/tomcat/docker/cluster/tomcat/conf/tomcat-users.xml:/usr/local/tomcat/conf/tomcat-users.xml\n    - /opt/tomcat/docker/cluster/tomcat/webapps/sample.war:/usr/local/tomcat/webapps/sample.war\ntomcatTwo:\n  image: tomcat:10-jdk11-corretto\n  volumes:\n    - /opt/tomcat/docker/cluster/tomcat/conf/server.xml:/usr/local/tomcat/conf/server.xml\n    - /opt/tomcat/docker/cluster/tomcat/conf/tomcat-users.xml:/usr/local/tomcat/conf/tomcat-users.xml\n    - /opt/tomcat/docker/cluster/tomcat/webapps/sample.war:/usr/local/tomcat/webapps/sample.war\ntomcatThree:\n  image: tomcat:10-jdk11-corretto\n  volumes:\n    - /opt/tomcat/docker/cluster/tomcat/conf/server.xml:/usr/local/tomcat/conf/server.xml\n    - /opt/tomcat/docker/cluster/tomcat/conf/tomcat-users.xml:/usr/local/tomcat/conf/tomcat-users.xml\n    - /opt/tomcat/docker/cluster/tomcat/webapps/sample.war:/usr/local/tomcat/webapps/sample.war\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"upstream backend  {\n  server tomcat1:8080;\n  server tomcat2:8080;\n  server tomcat3:8080;\n}\n\nserver {\n    listen       80;\n    server_name  localhost;\n\n    #charset koi8-r;\n    #access_log  /var/log/nginx/log/host.access.log  main;\n\n    location / {\n    proxy_pass  http://backend;\n    }\n\n    #error_page  404              /404.html;\n\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}\n\n")),(0,r.kt)("p",null,"I forwarded the Tomcat service on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8888")," so I can now access the sample app under:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://<My-Server>:8888/sample/\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tomcat 10 Docker Cluster",src:a(42148).Z,width:"771",height:"234"})))}p.isMDXComponent=!0},63341:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-dbec03b1535301c8b293ac3087af0dd4.jpg"},42148:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/tomcat10-docker-cluster_01-ee5d2ef1a8f5457b7245b32c7d7a3dce.png"}}]);