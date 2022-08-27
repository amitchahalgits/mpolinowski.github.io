"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[50792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:8030,slug:"2020-02-01",title:"Running Gitlab in Podman on CentOS8",authors:"mpolinowski",tags:["LINUX","Docker","Gitlab"]},r=void 0,l={unversionedId:"DevOps/Provisioning/2020-02-01--gitlab-in-podman-on-centos8/index",id:"DevOps/Provisioning/2020-02-01--gitlab-in-podman-on-centos8/index",title:"Running Gitlab in Podman on CentOS8",description:"Siem Reap, Cambodia",source:"@site/docs/DevOps/Provisioning/2020-02-01--gitlab-in-podman-on-centos8/index.mdx",sourceDirName:"DevOps/Provisioning/2020-02-01--gitlab-in-podman-on-centos8",slug:"/DevOps/Provisioning/2020-02-01--gitlab-in-podman-on-centos8/2020-02-01",permalink:"/docs/DevOps/Provisioning/2020-02-01--gitlab-in-podman-on-centos8/2020-02-01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2020-02-01--gitlab-in-podman-on-centos8/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:8030,frontMatter:{sidebar_position:8030,slug:"2020-02-01",title:"Running Gitlab in Podman on CentOS8",authors:"mpolinowski",tags:["LINUX","Docker","Gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Running Gitlab as Docker Registry",permalink:"/docs/DevOps/Provisioning/2020-02-02--docker-images-in-gitlab/2020-02-02"},next:{title:"Vanilla Forums Installation on Debian",permalink:"/docs/DevOps/Provisioning/2019-09-16--installing-vanilla-forum/2019-09-16"}},s={},p=[{value:"Installation through Podman on CentOS8",id:"installation-through-podman-on-centos8",level:2},{value:"Setting Up Gitlab",id:"setting-up-gitlab",level:2},{value:"Adding your SSH Key",id:"adding-your-ssh-key",level:3},{value:"Testing that everything is set up correctly",id:"testing-that-everything-is-set-up-correctly",level:3},{value:"Uploading your Project",id:"uploading-your-project",level:3}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Siem Reap, Cambodia",src:n(84507).Z,width:"1500",height:"757"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation-through-podman-on-centos8"},"Installation through Podman on CentOS8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-gitlab"},"Setting Up Gitlab"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adding-your-ssh-key"},"Adding your SSH Key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#testing-that-everything-is-set-up-correctly"},"Testing that everything is set up correctly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#uploading-your-project"},"Uploading your Project"))))),(0,i.kt)("h2",{id:"installation-through-podman-on-centos8"},"Installation through Podman on CentOS8"),(0,i.kt)("p",null,"Before setting everything else, configure a new enviroment variable $GITLAB_HOME pointing to the folder where the configuration, logs, and data files will reside. Ensure that the folder exists and appropriate permission have been granted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export GITLAB_HOME=/srv\n")),(0,i.kt)("p",null,"The GitLab container uses host mounted volumes to store persistent data:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Local location"),(0,i.kt)("th",{parentName:"tr",align:null},"Container location"),(0,i.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$GITLAB_HOME/gitlab/data")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/var/opt/gitlab")),(0,i.kt)("td",{parentName:"tr",align:null},"For storing application data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$GITLAB_HOME/gitlab/logs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/var/log/gitlab")),(0,i.kt)("td",{parentName:"tr",align:null},"For storing logs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"$GITLAB_HOME/gitlab/config")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/etc/gitlab")),(0,i.kt)("td",{parentName:"tr",align:null},"For storing the GitLab configuration files")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /srv/gitlab/{data,logs,config}\n")),(0,i.kt)("p",null,"You can fine tune these directories to meet your requirements. Once you\u2019ve set up the GITLAB_HOME variable, you can run the image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"podman run --detach \\\n  --privileged \\\n  --hostname centos8.fritz.box \\\n  --publish 443:443 --publish 80:80 --publish 55466:22 \\\n  --name gitlab \\\n  --restart always \\\n  --volume $GITLAB_HOME/gitlab/config:/etc/gitlab \\\n  --volume $GITLAB_HOME/gitlab/logs:/var/log/gitlab \\\n  --volume $GITLAB_HOME/gitlab/data:/var/opt/gitlab \\\n  gitlab/gitlab-ce:latest\n")),(0,i.kt)("p",null,"If you are on SELinux, then run this instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"podman run --detach \\\n  --hostname centos8.fritz.box \\\n  --publish 443:443 --publish 80:80 --publish 55466:22 \\\n  --name gitlab \\\n  --restart always \\\n  --volume $GITLAB_HOME/gitlab/config:/etc/gitlab:Z \\\n  --volume $GITLAB_HOME/gitlab/logs:/var/log/gitlab:Z \\\n  --volume $GITLAB_HOME/gitlab/data:/var/opt/gitlab:Z \\\n  gitlab/gitlab-ce:latest\n")),(0,i.kt)("p",null,"This will ensure that the Docker process has enough permissions to create the config files in the mounted volumes. For my test environment ",(0,i.kt)("inlineCode",{parentName:"p"},"centos8.fritz.box")," is a local domain that I use for this server - replace it with your own domain. The ",(0,i.kt)("strong",{parentName:"p"},"SSH Port")," for the Gitlab container is - in the original documentation - exposed on port ",(0,i.kt)("inlineCode",{parentName:"p"},"22"),". I replaced this by a random port ",(0,i.kt)("inlineCode",{parentName:"p"},"55466")," since I am already using ",(0,i.kt)("inlineCode",{parentName:"p"},"22")," to get into my server."),(0,i.kt)("p",null,"The initialization process may take a long time. You can track this process with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"podman logs -f gitlab\n")),(0,i.kt)("p",null,"After starting a container you can visit ",(0,i.kt)("inlineCode",{parentName:"p"},"centos8.fritz.box"),". It might take a while before the Docker container starts to respond to queries. The very first time you visit GitLab, you will be asked to set up the admin password. After you change it, you can login with username root and the password you set up."),(0,i.kt)("h2",{id:"setting-up-gitlab"},"Setting Up Gitlab"),(0,i.kt)("p",null,"On first access you will be asked to add a password for the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Running Gitlab in Podman on CentOS8",src:n(3971).Z,width:"947",height:"429"})),(0,i.kt)("h3",{id:"adding-your-ssh-key"},"Adding your SSH Key"),(0,i.kt)("p",null,"You can create and configure an ",(0,i.kt)("strong",{parentName:"p"},"ED25519")," key with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t ed25519 -C '<comment>'\n")),(0,i.kt)("p",null,"The -C flag, with a quoted comment such as an email address, is an optional way to label your SSH keys. You'll see a response similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t ed25519 -C 'm.polinowski@gmail.com'\nGenerating public/private ed25519 key pair.\nEnter file in which to save the key (C:\\Users\\INSTAR/.ssh/id_ed25519):\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in C:\\Users\\INSTAR/.ssh/id_ed25519.\nYour public key has been saved in C:\\Users\\INSTAR/.ssh/id_ed25519.pub.\nThe key fingerprint is:\nSHA256:shdfhgfhjghjghjdfgj467wudjh m.polinowski@gmail.com\nThe key's randomart image is:\n+--[ED25519 256]--+\n|9-+o+o           |\n|+-=.= =          |\n|+_.._+ u d *     |\n| .Y .            |\n+----[SHA256]-----+\n")),(0,i.kt)("p",null,"Copy your public SSH key to a location that saves information in text format. For Windows you can use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_ed25519.pub | clip\n")),(0,i.kt)("p",null,"Select your avatar in the upper right corner, and click Settings. Click SSH Keys. Paste the public key that you copied into the Key text box:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Running Gitlab in Podman on CentOS8",src:n(74335).Z,width:"895",height:"473"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you manually copied your public SSH key make sure you copied the entire key starting with ssh-ed25519 (or ssh-rsa) and ending with your email address.")),(0,i.kt)("h3",{id:"testing-that-everything-is-set-up-correctly"},"Testing that everything is set up correctly"),(0,i.kt)("p",null,"To test whether your SSH key was added correctly, run the following command in your terminal (replace centos8.fritz.box with your GitLab's instance domain and port ",(0,i.kt)("inlineCode",{parentName:"p"},"55466")," with the port you have chosen when starting the Gitlab container earlier):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -p 55466 -T git@centos8.fritz.box\nThe authenticity of host '[centos8.fritz.box]:55466 ([192.168.2.111]:55466)' can't be established.\nECDSA key fingerprint is SHA256:shdfhgfhjghjghjdfgj467wudjh.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '[centos8.fritz.box]:55466,[192.168.2.111]:55466' (ECDSA) to the list of known hosts.\n")),(0,i.kt)("h3",{id:"uploading-your-project"},"Uploading your Project"),(0,i.kt)("p",null,"Start by creating a project (or cloning one from e.g. Github or Gitlab.com). I created a blank repo with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"mui-gatsby-markdown-fr"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Running Gitlab in Podman on CentOS8",src:n(85005).Z,width:"815",height:"710"})),(0,i.kt)("p",null,"You can now clone the empty repository, enter the directory and add some project code. To keep it simple, I am going to use Github Desktop and the HTTP URL (if you want to use SSH remember to use the SSH port that you assigned to your Gitlab container):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Running Gitlab in Podman on CentOS8",src:n(83565).Z,width:"1115",height:"534"})),(0,i.kt)("p",null,"Copy your code into the created directory, commit und publish it with Github Desktop (you have to login with your Gitlab user ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," + your password)."),(0,i.kt)("p",null,"It works!"))}d.isMDXComponent=!0},3971:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Gitlab_Podman_CentOS_01-36804a9614ff7189bf7f4fa4e2e60247.png"},74335:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Gitlab_Podman_CentOS_02-db3c57a365cf42246648d6ae57306a43.png"},85005:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Gitlab_Podman_CentOS_03-fe44fb056ee3f68f548688c2ee6435e0.png"},83565:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Gitlab_Podman_CentOS_04-b440b668ca1eaea52980024c1786fd18.png"},84507:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-9ee0e705058907f79b17ea71944fa884.jpg"}}]);