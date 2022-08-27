"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[40153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:7080,slug:"2021-02-25",title:"Gatsby Build Gitlab CI Pipeline",authors:"mpolinowski",tags:["NGINX","Gatsby","Docker"]},o=void 0,l={unversionedId:"Development/Javascript/2021-02-25-gatsby-build-gitlab-pipeline/index",id:"Development/Javascript/2021-02-25-gatsby-build-gitlab-pipeline/index",title:"Gatsby Build Gitlab CI Pipeline",description:"Guangzhou, China",source:"@site/docs/Development/Javascript/2021-02-25-gatsby-build-gitlab-pipeline/index.md",sourceDirName:"Development/Javascript/2021-02-25-gatsby-build-gitlab-pipeline",slug:"/Development/Javascript/2021-02-25-gatsby-build-gitlab-pipeline/2021-02-25",permalink:"/docs/Development/Javascript/2021-02-25-gatsby-build-gitlab-pipeline/2021-02-25",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2021-02-25-gatsby-build-gitlab-pipeline/index.md",tags:[{label:"NGINX",permalink:"/docs/tags/nginx"},{label:"Gatsby",permalink:"/docs/tags/gatsby"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:7080,frontMatter:{sidebar_position:7080,slug:"2021-02-25",title:"Gatsby Build Gitlab CI Pipeline",authors:"mpolinowski",tags:["NGINX","Gatsby","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Electron for Cross Platform Applications",permalink:"/docs/Development/Javascript/2021-05-07-electron-cross-platform-apps/2021-05-07"},next:{title:"Next.js in 2021",permalink:"/docs/Development/Javascript/2021-02-14-next-js-2021/2021-02-14"}},s={},p=[{value:"Adding a CI/CD Build Pipeline",id:"adding-a-cicd-build-pipeline",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Guangzhou, China",src:n(60139).Z,width:"1500",height:"667"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adding-a-cicd-build-pipeline"},"Adding a CI/CD Build Pipeline"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Continuation from ",(0,i.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22"},"NGINX Docker Ingress for your Gatsby Build"))),(0,i.kt)("p",null,"I now have a Gatsby webpage that I build locally. ",(0,i.kt)("a",{parentName:"p",href:"/docs/Development/Go/2021-02-21-gofiber-container-gatsby/2021-02-21"},"Wrap it inside a GoFiber Web Container"),". I then uploaded this container to my server and provided an ",(0,i.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22"},"NGINX Ingress container")," to handle the SSL certificate and direct web traffic to my web site."),(0,i.kt)("p",null,"Now I want to use Gitlab to do the hard work for me with ",(0,i.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2020-08-04--working-with-gitlab/2020-08-04"},"Gitlab CI/CD Pipelines"),". I want to be able to upload my Gatsby source code to Gitlab and have it run the build for me. Afterwards it should trigger a second job that takes the ",(0,i.kt)("strong",{parentName:"p"},"Build Artifacts"),", wraps them inside the ",(0,i.kt)("strong",{parentName:"p"},"GoFiber Webserver Container")," and uploads the container into the ",(0,i.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2020-02-02--docker-images-in-gitlab/2020-02-02"},"Gitlab Docker Registry"),"."),(0,i.kt)("h2",{id:"adding-a-cicd-build-pipeline"},"Adding a CI/CD Build Pipeline"),(0,i.kt)("p",null,"After you ",(0,i.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2020-02-01--gitlab-in-podman-on-centos8/2020-02-01"},"Installed Gitlab")," you can add your Gatsby project to your account. After adding a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file to the root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"# Dependency directories\nnode_modules/\n\n# Optional npm cache directory\n.npm\n\n# Optional eslint cache\n.eslintcache\n\n# dotenv environment variables file\n.env\n\n# gatsby files\n.cache/\npublic/\n\n# System files\n.DS_Store\n.thumbs\n")),(0,i.kt)("p",null,"Additionally, we need a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," file that holds our instructions for the CI Pipline:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'image: node:latest\n\ncache:\n  paths:\n    - node_modules/\n    - .cache/\n    - public/\n\nstages:\n  - build\n  - deploy\n\npage-render:\n  stage: build\n  script:\n    - npm install\n    - npm run pre-build\n    - ./node_modules/.bin/gatsby build --prefix-paths\n  artifacts:\n    expire_in: 1 days\n    paths:\n      - public\n  only:\n    - master\n  tags: [build]\n\ncontainerize:\n  stage: deploy\n  script:\n    - curl --request POST --form "token=mysecrettoken" --form ref=master https://my.gitlab.com/api/v4/projects/75/trigger/pipeline\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Containerize")," step above is a ",(0,i.kt)("strong",{parentName:"p"},"Pipeline Trigger")," - ",(0,i.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2020-08-04--working-with-gitlab/2020-08-04#setting-a-pipline-tigger"},'see "Setting a Pipline Tigger"'),". This will take the ",(0,i.kt)("strong",{parentName:"p"},"Build Artifacts")," from the Gatsby build and build the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/gatsby_gofiber_container"},"GoFiber Container around it")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Building the binary of the App\nFROM golang:1.16 AS build\n\n# Project labels\nLABEL maintainer="m.polinowski@instar.com"\n\n# `wiki` should be replaced with your project name\nWORKDIR /go/src/wiki\n\n# Copy in the build artifacts from the Gatsby static build to add it to your GoFiber container\nCOPY . .\nRUN curl -L --header "PRIVATE-TOKEN: myprivatetoken" "https://my.gitlab.com/api/v4/projects/wiki%2Fwiki_en/jobs/artifacts/master/download?job=page-render" >> ./temp/artifacts.zip\nRUN apt update && apt install -y unzip && unzip -qq ./temp/artifacts.zip -d ./static\n\n# Downloads all the dependencies in advance (could be left out, but it\'s more clear this way)\nRUN go mod download\n\n# Builds the application as a staticly linked one, to allow it to run on alpine\nRUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .\n\n# Moving the binary to the \'final Image\' to make it smaller\nFROM alpine:latest\n\nWORKDIR /app\n\n# Create the `public` dir and copy all the assets into it\nRUN mkdir ./static\nCOPY --from=build /go/src/wiki/static ./static\n\n# `wiki` should be replaced here as well\nCOPY --from=build /go/src/wiki/app .\n\n# Exposes port 9999 because our program listens on that port\nEXPOSE 9999\n\n# CMD ["./app"]\nRUN chmod +x ./static/run.sh\nCMD ["ash", "./static/run.sh"]\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The last step in the Dockerfile above triggers a shell script that I added to the static folder of the project. It simply executes the compiled Fiber app for me - as I had difficulties to get it to run otherwise.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/ash\n./app\n")))}d.isMDXComponent=!0},60139:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-3d8ffa6b9b1e3c6c1237d6b73dec3fbc.jpg"}}]);