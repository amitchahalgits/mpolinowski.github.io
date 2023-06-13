"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[58479],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:8090,slug:"2021-02-22",title:"NGINX Docker Ingress for your Gatsby Build",authors:"mpolinowski",tags:["NGINX","Gatsby","Docker"]},i=void 0,s={unversionedId:"DevOps/NGINX/2021-02-22-nginx-docker-ingress/index",id:"DevOps/NGINX/2021-02-22-nginx-docker-ingress/index",title:"NGINX Docker Ingress for your Gatsby Build",description:"Guangzhou, China",source:"@site/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/index.md",sourceDirName:"DevOps/NGINX/2021-02-22-nginx-docker-ingress",slug:"/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22",permalink:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/index.md",tags:[{label:"NGINX",permalink:"/docs/tags/nginx"},{label:"Gatsby",permalink:"/docs/tags/gatsby"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8090,frontMatter:{sidebar_position:8090,slug:"2021-02-22",title:"NGINX Docker Ingress for your Gatsby Build",authors:"mpolinowski",tags:["NGINX","Gatsby","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Setting up Certbot Auto-renewal for NGINX (Maintenance Mode)",permalink:"/docs/DevOps/NGINX/2021-07-29--certbot-nginx-autorenewal/2021-07-29"},next:{title:"NGINX Docker Multihost",permalink:"/docs/DevOps/NGINX/2020-08-30--nginx-docker-multihost/2020-08-30"}},l={},c=[{value:"Frontend Container",id:"frontend-container",level:2},{value:"Prefix URL",id:"prefix-url",level:3},{value:"NGINX Ingress",id:"nginx-ingress",level:2},{value:"Container Network",id:"container-network",level:3},{value:"Configuring the Docker Ingress",id:"configuring-the-docker-ingress",level:3},{value:"Encryption",id:"encryption",level:3},{value:"Testing",id:"testing",level:3}],p={toc:c};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Guangzhou, China",src:t(10769).Z,width:"1500",height:"624"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#frontend-container"},"Frontend Container"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prefix-url"},"Prefix URL")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nginx-ingress"},"NGINX Ingress"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#container-network"},"Container Network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuring-the-docker-ingress"},"Configuring the Docker Ingress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#encryption"},"Encryption")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#testing"},"Testing"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Update 2023"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2023-06-13-nginx-docker-ingress/2023-06-13/"},"NGINX HTTP/2 Docker Ingress"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Continuation from ",(0,a.kt)("a",{parentName:"p",href:"/docs/Development/Go/2021-02-21-gofiber-container-gatsby/2021-02-21"},"GoFiber Container for your Gatsby Build"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/nginx_docker_ingress"},"Github Repository")),(0,a.kt)("p",null,"I want to continue setting up my Gatsby build webpage by adding a NGINX ingress to my Docker cluster (of one container, so far). The Webpage should be served with an URL prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"en")," (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2020-08-30--nginx-docker-multihost/2020-08-30"},"NGINX Multihost"),") and NGINX should take care of the SSL certificate (I will use a self-signed cert for my dev environment - it can later be replaced with Certbot)."),(0,a.kt)("h2",{id:"frontend-container"},"Frontend Container"),(0,a.kt)("p",null,"I prepared my GoFiber served webpage in the previous step and am able to build and start my frontend container with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t wiki_en .\ndocker run -d -p 8888:8888 wiki_en\n")),(0,a.kt)("p",null,"Now I can access the web frontend served on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8888"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8888"))),(0,a.kt)("h3",{id:"prefix-url"},"Prefix URL"),(0,a.kt)("p",null,"To add the prefix URL I now have to tell Gatsby to automatically prefix all links for me. This can be done by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"pathPrefix")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"gatsby-config.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  pathPrefix: '/en',\n\n  ...\n")),(0,a.kt)("p",null,"Now I have to re-run the ",(0,a.kt)("inlineCode",{parentName:"p"},"gatsby build")," command with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--prefix-path")," flag. I will add an ",(0,a.kt)("strong",{parentName:"p"},"NPM Script")," for it, that also raises the Node.js cache size for me ",(0,a.kt)("inlineCode",{parentName:"p"},"--max-old-space-size=8192")," (my page seems to need that):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "prefix": "node --max-old-space-size=8192 node_modules/gatsby/dist/bin/gatsby build --prefix-paths",\n\n    ...\n')),(0,a.kt)("p",null,"To run the script run the following command from the root directory of your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run prefix\n")),(0,a.kt)("p",null,"If you try to run the GoFiber container now and access it via ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8888")," most of the page will be broken - due to the prefixed links. So lets prepare the NGINX container to take care of that!"),(0,a.kt)("h2",{id:"nginx-ingress"},"NGINX Ingress"),(0,a.kt)("p",null,"Since accessing our container directly now no longer works, we kill it and replace it with a container instance without an exposed port:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop <containerID> && docker rm <containerID>\ndocker run -d --name wiki_en wiki_en\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Update: I just noticed that I already exposed port ",(0,a.kt)("inlineCode",{parentName:"p"},"8888")," inside my Dockerfile. Comment out the following lines and rebuild your container, if you want to prevent traffic from accessing your container directly. Or block access to port ",(0,a.kt)("inlineCode",{parentName:"p"},"8888")," with your firewall.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"# Exposes port 8888 because our program listens on that port\n# EXPOSE 8888\n")),(0,a.kt)("h3",{id:"container-network"},"Container Network"),(0,a.kt)("p",null,"Now we have a container running with no exposed ports to the client, but we need to get it to communicate with with our ingress. In order to do that we need to put them all into the same virtual network. Let\u2019s create our network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create wikinet\n")),(0,a.kt)("p",null,"Now add the container by it's name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker network connect wikinet wiki_en\n")),(0,a.kt)("p",null,"Let\u2019s see if they have been added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker network inspect wikinet\n")),(0,a.kt)("p",null,"The output show us that our container has been added successfully:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Name": "wikinet",\n    "Id": "725dfcde3015d752f8d0c4bbfe2027d9a4cb1cb3c6cc9b4f4094fb33d5a1d6bc",\n    "Created": "2021-05-10T15:07:38.420998455+08:00",\n    "Scope": "local",\n    "Driver": "bridge",\n    "EnableIPv6": false,\n    "IPAM": {\n      "Driver": "default",\n      "Options": {},\n      "Config": [\n        {\n          "Subnet": "172.18.0.0/16",\n          "Gateway": "172.18.0.1"\n        }\n      ]\n    },\n    "Internal": false,\n    "Attachable": false,\n    "Ingress": false,\n    "ConfigFrom": {\n      "Network": ""\n    },\n    "ConfigOnly": false,\n    "Containers": {\n      "e903e22b56f21973ade9bab9aa58aa8994b0a2399eadff36a4801fbc26fb82d4": {\n        "Name": "wiki_en",\n        "EndpointID": "82090263f6853a6219989828ade375a4db5aa655561293bf5bce0d7dfeb4640a",\n        "MacAddress": "02:42:ac:12:00:02",\n        "IPv4Address": "172.18.0.2/16",\n        "IPv6Address": ""\n      }\n    },\n    "Options": {},\n    "Labels": {}\n  }\n]\n')),(0,a.kt)("h3",{id:"configuring-the-docker-ingress"},"Configuring the Docker Ingress"),(0,a.kt)("p",null,"Before running the NGINX container we first need to provide a configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"default.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /opt/docker_ingress\nnano /opt/docker_ingress/default.conf\n")),(0,a.kt)("p",null,"Docker provides a DNS service for it's virtual networks. To connect our NGINX ingress we just need to set a ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_pass")," to the container name ",(0,a.kt)("inlineCode",{parentName:"p"},"wiki_en")," with the port 8888:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"server {\n    listen       80;\n    listen  [::]:80;\n    server_name  localhost;\n\n    #  redirect from / to /en to make it the default location (optional)\n\n    location / {\n      rewrite   ^/(.*)$  /en/$1  permanent;\n    }\n\n    location /en/ {\n      proxy_pass http://wiki_en:8888/;\n    }\n\n    # redirect server error pages to the static page /50x.html\n\n    error_page  404 /404.html;\n    error_page  500 502 503 504 /50x.html;\n    location = /50x.html {\n    root   /usr/share/nginx/html;\n    }\n}\n")),(0,a.kt)("p",null,"We can now start the NGINX ingress with the configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 80:80 -v /opt/docker_ingress:/etc/nginx --network=wikinet --name ingress nginx:1.21.1-alpine\n")),(0,a.kt)("p",null,"You can test it by accessing the docker host IP address followed by the language prefix we defined in NGINX. You should automatically be redirected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/en/")," prefix and your Gatsby App should load correctly, again."),(0,a.kt)("h3",{id:"encryption"},"Encryption"),(0,a.kt)("p",null,"We can now continue with adding a self-signed SSL certificate to our app. My webserver uses Debian Bullseye the following steps might differ for your OS of choice. We can create a self-signed key and certificate pair with OpenSSL in a single command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/docker_ingress/ssl/{private,certs}\n\nopenssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /opt/docker_ingress/ssl/private/nginx-selfsigned.key -out /opt/docker_ingress/ssl/certs/nginx-selfsigned.crt\n")),(0,a.kt)("p",null,"Make sure to use either your servers IP (public or local) or it's domain (if available) when asked for ",(0,a.kt)("strong",{parentName:"p"},"Common Name"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Generating a RSA private key\nwriting new private key to '/opt/docker_ingress/ssl/private/nginx-selfsigned.key'\n-----\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) [AU]:\nState or Province Name (full name) [Some-State]:\nLocality Name (eg, city) []:\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:\nOrganizational Unit Name (eg, section) []:\nCommon Name (e.g. server FQDN or YOUR name) []:192.168.2.111\nEmail Address []:\n")),(0,a.kt)("p",null,"While we are using OpenSSL, we should also create a strong Diffie-Hellman group, which is used in negotiating Perfect Forward Secrecy with clients:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"openssl dhparam -out /opt/docker_ingress/ssl/private/dhparam.pem 4096\n")),(0,a.kt)("p",null,"Let\u2019s now create a new Nginx configuration snippet in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/docker_ingress")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/docker_ingress/self-signed.conf\n")),(0,a.kt)("p",null,"Within this file, we need to set the ",(0,a.kt)("strong",{parentName:"p"},"ssl_certificate")," directive to our certificate file and the ",(0,a.kt)("strong",{parentName:"p"},"ssl_certificate_key")," to the associated key. Add the following lines to the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfg"},"ssl_certificate /etc/nginx/conf.d/ssl/certs/nginx-selfsigned.crt;\nssl_certificate_key /etc/nginx/conf.d/ssl/private/nginx-selfsigned.key;\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Just a side note"),": If you mix these up key <-> cert you end up with the following NGINX error: ",(0,a.kt)("inlineCode",{parentName:"p"},'cannot load certificate "/etc/nginx/conf.d/ssl/private/nginx-selfsigned.key": PEM_read_bio_X509_AUX() failed (SSL: error:0909006C:PEM routines:get_name:no start line:Expecting: TRUSTED CERTIFICATE)')," :)")),(0,a.kt)("p",null,"Next, we will create another snippet that will define some ",(0,a.kt)("a",{parentName:"p",href:"https://hynek.me/articles/hardening-your-web-servers-ssl-ciphers/#nginx"},"SSL settings"),". This will set Nginx up with a strong SSL cipher suite and enable some advanced features that will help keep our server secure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/docker_ingress/ssl-params.conf\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfg"},'ssl_protocols TLSv1.3 TLSv1.2;\nssl_prefer_server_ciphers on;\nssl_dhparam /etc/nginx/ssl/dhparam.pem;\nssl_ciphers ECDH+AESGCM:ECDH+CHACHA20:ECDH+AES256:ECDH+AES128:!aNULL:!SHA1:!AESCCM;\nssl_conf_command Options PrioritizeChaCha; # Requires nginx >= nginx:1.21\nssl_conf_command Ciphersuites TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256; # Requires nginx >= nginx:1.21\nssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0\nssl_session_timeout  10m;\nssl_session_cache shared:SSL:10m;\nssl_session_tickets off; # Requires nginx >= 1.5.9\nssl_stapling on; # Requires nginx >= 1.3.7\nssl_stapling_verify on; # Requires nginx => 1.3.7\nresolver 8.8.8.8 8.8.4.4 valid=300s;\nresolver_timeout 5s;\n# add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";\nadd_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;\n# add_header X-Frame-Options DENY;\nadd_header X-Frame-Options "";\nadd_header X-Content-Type-Options nosniff;\nadd_header X-XSS-Protection "1; mode=block";\n')),(0,a.kt)("p",null,"Now we just have to link our snippets into the default NGINX configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/docker_ingress/default.conf\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"server {\n    listen 80;\n    listen [::]:80;\n\n    server_name my.domain.com;\n\n    return 301 https://$server_name$request_uri;\n}\n\n\nserver {\n    listen 443 ssl http2 default_server;\n    listen [::]:443 ssl;\n    # ssl_certificate /opt/letsencrypt/live/my.domain.com/fullchain.pem;\n    # ssl_certificate_key /opt/letsencrypt/live/my.domain.com/privkey.pem;\n    include ssl/self-signed.conf; # Replace with the 2 lines above when using CA Cert\n    include ssl/ssl-params.conf;\n    include /etc/nginx/conf.d/header.conf;\n\n    server_name my.domain.com;\n\n    location / {\n        rewrite ^/(.*)$  /en/$1  permanent;\n    }\n\n    location /de/ {\n      proxy_pass http://my_container_de:9999/;\n    }\n\n    location /en/ {\n      proxy_pass http://my_container_en:8888/;\n    }\n\n    location /fr/ {\n       proxy_pass http://my_container_fr:7777/;\n    }\n\n\n    error_page  404 /404.html;\n    error_page  500 502 503 504 /50x.html;\n    location = /50x.html {\n    root   /usr/share/nginx/html;\n  }\n}\n")),(0,a.kt)("p",null,"Now kill both containers and restart them with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --network=wikinet --name wiki_en  wiki_en\n\ndocker run -d -p 443:443 -p 80:80 -v /opt/docker_ingress:/etc/nginx --network=wikinet --name ingress nginx:1.21.1-alpine\n")),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Test if NGINX is using the correct encryption protocols:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Test Nginx for TLS 1\ncurl -I -v --tlsv1 --tls-max 1.0 https://www.example.com/\n\n# Test Nginx for TLS 1.1\ncurl -I -v --tlsv1.1 --tls-max 1.1 https://www.example.com/\n\n# Test Nginx for TLS 1.2\ncurl -I -v --tlsv1.2 --tls-max 1.2 https://www.example.com/\n\n# Test Nginx for TLS 1.3\ncurl -I -v --tlsv1.3 --tls-max 1.3 https://www.example.com/\n")))}d.isMDXComponent=!0},10769:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-526887f388d51eb7c6cdecdbf57889ba.jpg"}}]);