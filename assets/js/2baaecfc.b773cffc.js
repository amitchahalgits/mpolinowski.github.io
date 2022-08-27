"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[93969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},24944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:7060,slug:"2020-08-04",title:"Working with Gitlab",authors:"mpolinowski",tags:["LINUX","Gitlab"]},o=void 0,l={unversionedId:"DevOps/Provisioning/2020-08-04--working-with-gitlab/index",id:"DevOps/Provisioning/2020-08-04--working-with-gitlab/index",title:"Working with Gitlab",description:"Guangzhou, China",source:"@site/docs/DevOps/Provisioning/2020-08-04--working-with-gitlab/index.md",sourceDirName:"DevOps/Provisioning/2020-08-04--working-with-gitlab",slug:"/DevOps/Provisioning/2020-08-04--working-with-gitlab/2020-08-04",permalink:"/docs/DevOps/Provisioning/2020-08-04--working-with-gitlab/2020-08-04",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2020-08-04--working-with-gitlab/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:7060,frontMatter:{sidebar_position:7060,slug:"2020-08-04",title:"Working with Gitlab",authors:"mpolinowski",tags:["LINUX","Gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Serving Static Files with Hapi and Docker",permalink:"/docs/DevOps/Provisioning/2020-08-29--static-server-with-hapi-and-docker/2020-08-29"},next:{title:"Gitlab as Docker Registry",permalink:"/docs/DevOps/Provisioning/2020-08-03--gitlab-as-docker-registry/2020-08-03"}},s={},p=[{value:"Pulling Images from a Private Docker Registry",id:"pulling-images-from-a-private-docker-registry",level:2},{value:"Setting a Pipline Tigger",id:"setting-a-pipline-tigger",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Guangzhou, China",src:n(48009).Z,width:"1500",height:"625"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pulling-images-from-a-private-docker-registry"},"Pulling Images from a Private Docker Registry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setting-a-pipline-tigger"},"Setting a Pipline Tigger"))),(0,a.kt)("h2",{id:"pulling-images-from-a-private-docker-registry"},"Pulling Images from a Private Docker Registry"),(0,a.kt)("p",null,"Start by logging in with your Gitlab account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker login -u me@email-address.com gitlab.example.com:34578\n")),(0,a.kt)("p",null,"And type in your Gitlab password."),(0,a.kt)("p",null,"Now enter your repository and go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Packages&Registries")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"Container Registry")," and copy the Image URL:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Working with Gitlab",src:n(7770).Z,width:"1028",height:"287"})),(0,a.kt)("p",null,"Now you are ready to pull the image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull gitlab.example.com:34578/wiki/wiki-instar-en-docker:latest\n")),(0,a.kt)("h2",{id:"setting-a-pipline-tigger"},"Setting a Pipline Tigger"),(0,a.kt)("p",null,"I want to automatically start a Docker build when new build artifacts were generated in a different repository. The Docker pipeline should than take this new code, wrap it into a new container image and push it into the Docker Registry."),(0,a.kt)("p",null,"The container I am using is a Go Fiber Webserver that should serve the static HTML code generated by a Gatsby.js repository (in form of build artifacts from a CI pipeline). I am using a variation of this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/boilerplate"},"Go Fiber boilerplate"),", build the Go Fiber webserver and load/unzip the artifacts into the public directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Building the binary of the App\nFROM golang:1.15 AS build\n\n# Project labels\nLABEL maintainer="m.polinowski@instar.com"\n\n# `wiki` should be replaced with your project name\nWORKDIR /go/src/wiki\n\n# Copy all the Code and stuff to compile everything\nCOPY . .\nRUN curl -L --header "PRIVATE-TOKEN:MYPRIVATETOKEN" "https://my.gitlab.com/api/v4/projects/wiki%2Fwiki_de/jobs/artifacts/master/download?job=page-render" >> ./temp/artifacts.zip\nRUN apt update && apt install -y unzip && unzip -qq ./temp/artifacts.zip -d ./static\n\n# Downloads all the dependencies in advance (could be left out, but it\'s more clear this way)\nRUN go mod download\n\n# Builds the application as a staticly linked one, to allow it to run on alpine\nRUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .\n\n# Moving the binary to the \'final Image\' to make it smaller\nFROM alpine:latest\n\nWORKDIR /app\n\n# Create the `public` dir and copy all the assets into it\nRUN mkdir ./static\nCOPY --from=build /go/src/wiki/static ./static\n\n# `wiki` should be replaced here as well\nCOPY --from=build /go/src/wiki/app .\n\n# Exposes port 8888 because our program listens on that port\nEXPOSE 8888\n\n# CMD ["./app"]\nRUN chmod +x ./static/run.sh\nCMD ["ash", "./static/run.sh"]\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," file just starts the web server for me once the container is run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/ash\n./app\n")),(0,a.kt)("p",null,"To add the trigger enter the repository and go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," / ",(0,a.kt)("strong",{parentName:"p"},"CI/CD")," and click to add a new trigger:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Working with Gitlab",src:n(51689).Z,width:"970",height:"498"})),(0,a.kt)("p",null,"In the following examples, you can see the exact API call you need to make in order to rebuild a specific ref (branch or tag) with a trigger token."),(0,a.kt)("p",null,"All you need to do is replace the TOKEN and REF_NAME with the trigger token and the branch or tag name respectively."),(0,a.kt)("p",null,"Use cURL\nCopy one of the tokens above, set your branch or tag name, and that reference will be rebuilt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST \\\n     -F token=TOKEN \\\n     -F ref=REF_NAME \\\n     https://my.gitlab.com/api/v4/projects/76/trigger/pipeline\n")),(0,a.kt)("p",null,"The value of ",(0,a.kt)("strong",{parentName:"p"},"TOKEN")," is the value token that is displayed next to your new generated trigger (see screenshot above ",(0,a.kt)("inlineCode",{parentName:"p"},"9b7b..."),"). And the ",(0,a.kt)("strong",{parentName:"p"},"REF_NAME")," is in my case the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch. Note that the project that you want to trigger is defined by the number ",(0,a.kt)("inlineCode",{parentName:"p"},"76"),"."),(0,a.kt)("p",null,"I can now add those lines to my ",(0,a.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," file in the Gatsby repository (",(0,a.kt)("strong",{parentName:"p"},"NOT the repository for the container"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'image: node:latest\n\ncache:\n  paths:\n    - node_modules/\n    - .cache/\n    - public/\n\nstages:\n  - build\n  - deploy\n\npage-render:\n  stage: build\n  script:\n    - npm install\n    - npm run pre-build\n    - ./node_modules/.bin/gatsby build --prefix-paths\n  artifacts:\n    expire_in: 1 days\n    paths:\n      - public\n  only:\n    - master\n  tags: [build]\n\ncontainerize:\n  stage: deploy\n  script:\n    - curl --request POST --form "token=9b7b..." --form ref=master https://my.gitlab.com/api/v4/projects/76/trigger/pipeline\n')),(0,a.kt)("p",null,"This file will take my Gatsby source code (when committed to the MASTER branch) and run a Gatsby build on it. Once the build is done the deploy stage will be started and trigger the Docker pipeline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'image: docker:19.03.12-dind\n\nvariables:\n  DOCKER_HOST: tcp://docker:2375\n  DOCKER_TLS_CERTDIR: ""\n\nservices:\n  - name: docker:19.03.12-dind\n    entrypoint: ["env", "-u", "DOCKER_HOST"]\n    command: ["dockerd-entrypoint.sh"]\n\n\nstages:\n- build\n# - test\n- release\n\nvariables:\n  TEST_IMAGE: my.gitlab.com:12345/wiki/wiki_de_container:$CI_COMMIT_REF_NAME\n  RELEASE_IMAGE: my.gitlab.com:12345/wiki/wiki_de_container:latest\n\nbefore_script:\n  - docker login -u gitlab-ci-token -p $CI_JOB_TOKEN my.gitlab.com:12345\n\nbuild:\n  stage: build\n  script:\n    - docker build --pull -t $TEST_IMAGE .\n    - docker push $TEST_IMAGE\n\n# test:\n#   stage: test\n#     - docker pull $TEST_IMAGE\n#     - docker run $TEST_IMAGE npm test\n\nrelease:\n  stage: release\n  script:\n    - docker pull $TEST_IMAGE\n    - docker tag $TEST_IMAGE $RELEASE_IMAGE\n    - docker push $RELEASE_IMAGE\n  only:\n    - master\n\n')),(0,a.kt)("p",null,"Once the pipeline finished you will be able to pull your fresh Docker images:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull my.gitlab.com:12345/wiki/wiki_de_container\n")))}d.isMDXComponent=!0},7770:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Working_with_Gitlab_01-5ec4c8e52f37785d26d20f268519a25c.png"},51689:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Working_with_Gitlab_02-57b7b16c17c180c17e0b7e58065f6852.png"},48009:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-3c682f7dbaf3c13bccb0cad63672e020.jpg"}}]);