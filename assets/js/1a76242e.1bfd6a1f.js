"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[96664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,k=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return r?i.createElement(k,o(o({ref:t},p),{},{components:r})):i.createElement(k,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={sidebar_position:7070,slug:"2020-08-03",title:"Gitlab as Docker Registry",authors:"mpolinowski",tags:["LINUX","Gitlab"]},o=void 0,l={unversionedId:"DevOps/Provisioning/2020-08-03--gitlab-as-docker-registry/index",id:"DevOps/Provisioning/2020-08-03--gitlab-as-docker-registry/index",title:"Gitlab as Docker Registry",description:"Guangzhou, China",source:"@site/docs/DevOps/Provisioning/2020-08-03--gitlab-as-docker-registry/index.md",sourceDirName:"DevOps/Provisioning/2020-08-03--gitlab-as-docker-registry",slug:"/DevOps/Provisioning/2020-08-03--gitlab-as-docker-registry/2020-08-03",permalink:"/docs/DevOps/Provisioning/2020-08-03--gitlab-as-docker-registry/2020-08-03",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2020-08-03--gitlab-as-docker-registry/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:7070,frontMatter:{sidebar_position:7070,slug:"2020-08-03",title:"Gitlab as Docker Registry",authors:"mpolinowski",tags:["LINUX","Gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Working with Gitlab",permalink:"/docs/DevOps/Provisioning/2020-08-04--working-with-gitlab/2020-08-04"},next:{title:"Setting up Gitlab",permalink:"/docs/DevOps/Provisioning/2020-08-02--gitlab-setup/2020-08-02"}},s={},c=[{value:"Setting Up GitLab\u2019s Docker Registry",id:"setting-up-gitlabs-docker-registry",level:2},{value:"Building a Docker Image",id:"building-a-docker-image",level:2},{value:"Test your Docker Registry",id:"test-your-docker-registry",level:2},{value:"Clean Up",id:"clean-up",level:2}],p={toc:c};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Guangzhou, China",src:r(89358).Z,width:"1500",height:"625"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setting-up-gitlabs-docker-registry"},"Setting Up GitLab\u2019s Docker Registry")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#building-a-docker-image"},"Building a Docker Image")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#test-your-docker-registry"},"Test your Docker Registry")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#clean-up"},"Clean Up"))),(0,n.kt)("h2",{id:"setting-up-gitlabs-docker-registry"},"Setting Up GitLab\u2019s Docker Registry"),(0,n.kt)("p",null,"GitLab will set up a private Docker registry with just a few configuration updates. First we\u2019ll set up the URL where the registry will reside. SSH into your GitLab server, then open up the GitLab configuration file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/gitlab/gitlab.rb\n")),(0,n.kt)("p",null,"Scroll down to the ",(0,n.kt)("strong",{parentName:"p"},"Container Registry")," settings section. We\u2019re going to uncomment the ",(0,n.kt)("inlineCode",{parentName:"p"},"registry_external_url")," line and set it to our GitLab hostname with a port number:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"registry_external_url 'https://gitlab.example.com:34578'\n")),(0,n.kt)("p",null,"Save and close the file, then reconfigure GitLab:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gitlab-ctl reconfigure\n")),(0,n.kt)("p",null,"Now switch to another machine with Docker installed, and log in to the private Docker registry:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker login gitlab.example.com:34578\n")),(0,n.kt)("p",null,"You will be prompted for your username and password. Use your GitLab credentials to log in."),(0,n.kt)("h2",{id:"building-a-docker-image"},"Building a Docker Image"),(0,n.kt)("p",null,"To get our app building in Docker, we need to update the ",(0,n.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," file:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gitlab Privat Docker Registry",src:r(15406).Z,width:"1049",height:"576"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},'image: docker:19.03.0-dind\n\nvariables:\n  DOCKER_HOST: tcp://docker:2375\n  DOCKER_TLS_CERTDIR: ""\n\nservices:\n  - name: docker:19.03.12-dind\n    entrypoint: ["env", "-u", "DOCKER_HOST"]\n    command: ["dockerd-entrypoint.sh"]\n\n\nstages:\n- build\n# - test\n- release\n\nvariables:\n  TEST_IMAGE: gitlab.example.com:34578/wiki/wiki-instar-en-docker:$CI_COMMIT_REF_NAME\n  RELEASE_IMAGE: gitlab.example.com:34578/wiki/wiki-instar-en-docker:latest\n\nbefore_script:\n  - docker login -u gitlab-ci-token -p $CI_JOB_TOKEN gitlab.example.com:34578\n\nbuild:\n  stage: build\n  script:\n    - docker build --pull -t $TEST_IMAGE .\n    - docker push $TEST_IMAGE\n\n# test:\n#   stage: test\n#     - docker pull $TEST_IMAGE\n#     - docker run $TEST_IMAGE npm test\n\nrelease:\n  stage: release\n  script:\n    - docker pull $TEST_IMAGE\n    - docker tag $TEST_IMAGE $RELEASE_IMAGE\n    - docker push $RELEASE_IMAGE\n  only:\n    - master\n')),(0,n.kt)("p",null,"Once you commit your CI script the job will be started:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gitlab Privat Docker Registry",src:r(72982).Z,width:"1046",height:"253"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gitlab Privat Docker Registry",src:r(39481).Z,width:"1029",height:"292"})),(0,n.kt)("h2",{id:"test-your-docker-registry"},"Test your Docker Registry"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull gitlab.example.com:34578/wiki/wiki-instar-en-docker:latest\ndocker run -p 80:7777 gitlab.example.com:34578/wiki/wiki-instar-en-docker:latest\n")),(0,n.kt)("h2",{id:"clean-up"},"Clean Up"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gitlab-ctl registry-garbage-collect -m\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://forums.docker.com/t/some-way-to-clean-up-identify-contents-of-var-lib-docker-overlay/30604/29"},"https://forums.docker.com/t/some-way-to-clean-up-identify-contents-of-var-lib-docker-overlay/30604/29")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/gitlab-org/gitlab-foss/-/issues/21690"},"https://gitlab.com/gitlab-org/gitlab-foss/-/issues/21690")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/gitlab-org/docker-distribution-pruner"},"https://gitlab.com/gitlab-org/docker-distribution-pruner")))}g.isMDXComponent=!0},72982:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/Gitlab_Docker_Registry_01-5bb962504226c81f718329e69f218173.png"},39481:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/Gitlab_Docker_Registry_02-ea523e9b85f1b713a57edaec301b55ed.png"},15406:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/Gitlab_Docker_Registry_03-d472891a8b04155b81d06c17f8802868.png"},89358:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-3c682f7dbaf3c13bccb0cad63672e020.jpg"}}]);