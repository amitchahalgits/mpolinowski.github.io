"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[84051],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=p(t),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=h;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},61577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const i={sidebar_position:4090,slug:"2022-06-09",title:"Hashicorp Waypoint with Nomad",authors:"mpolinowski",tags:["Waypoint","Nomad","LINUX"]},s=void 0,r={unversionedId:"DevOps/Hashicorp/2022-06-08-hashicorp-waypoint-nomad/index",id:"DevOps/Hashicorp/2022-06-08-hashicorp-waypoint-nomad/index",title:"Hashicorp Waypoint with Nomad",description:"Shen Zhen, China",source:"@site/docs/DevOps/Hashicorp/2022-06-08-hashicorp-waypoint-nomad/index.md",sourceDirName:"DevOps/Hashicorp/2022-06-08-hashicorp-waypoint-nomad",slug:"/DevOps/Hashicorp/2022-06-08-hashicorp-waypoint-nomad/2022-06-09",permalink:"/docs/DevOps/Hashicorp/2022-06-08-hashicorp-waypoint-nomad/2022-06-09",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-06-08-hashicorp-waypoint-nomad/index.md",tags:[{label:"Waypoint",permalink:"/docs/tags/waypoint"},{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:4090,frontMatter:{sidebar_position:4090,slug:"2022-06-09",title:"Hashicorp Waypoint with Nomad",authors:"mpolinowski",tags:["Waypoint","Nomad","LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp",permalink:"/docs/category/hashicorp"},next:{title:"Hashicorp Waypoint with Docker",permalink:"/docs/DevOps/Hashicorp/2022-06-07-hashicorp-waypoint-docker/2022-06-07"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Use Waypoint with Nomad",id:"use-waypoint-with-nomad",level:2},{value:"Persistence",id:"persistence",level:3},{value:"Set up the Waypoint Server",id:"set-up-the-waypoint-server",level:3},{value:"Initialize the Waypoint Job",id:"initialize-the-waypoint-job",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Waypoint Help",id:"waypoint-help",level:2}],c={toc:p};function d(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shen Zhen, China",src:t(79654).Z,width:"1500",height:"562"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#use-waypoint-with-nomad"},"Use Waypoint with Nomad"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#persistence"},"Persistence")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-up-the-waypoint-server"},"Set up the Waypoint Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#initialize-the-waypoint-job"},"Initialize the Waypoint Job")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#debugging"},"Debugging")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#waypoint-help"},"Waypoint Help"))),(0,o.kt)("p",null,"Let's use ",(0,o.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/collections/waypoint/get-started-nomad"},"Waypoint to deploy an application into a Nomad Cluster"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Get Waypoint by downloading the ",(0,o.kt)("a",{parentName:"p",href:"https://www.waypointproject.io/downloads"},"latest a pre-compiled waypoint binary"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://releases.hashicorp.com/waypoint/0.9.0/waypoint_0.9.0_linux_amd64.zip\nunzip waypoint_0.9.0_linux_amd64.zip && rm waypoint_0.9.0_linux_amd64.zip\nmv ./waypoint /usr/bin/waypoint\nchmod +x /usr/bin/waypoint\n")),(0,o.kt)("p",null,"Verify the installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"waypoint -version\nCLI: v0.9.0 (2a7b89036)\n")),(0,o.kt)("h2",{id:"use-waypoint-with-nomad"},"Use Waypoint with Nomad"),(0,o.kt)("p",null,"I am following the getting started guide by Hashicorp to set up an NodeJS app inside a Docker container using waypoint. The Example code can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/waypoint-examples/tree/main/nomad/nodejs"},"Github"),". Start by cloning the Waypoint Examples repository and navigate to the NodeJS example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/hashicorp/waypoint-examples.git\ncd waypoint-examples/nomad/nodejs\n")),(0,o.kt)("h3",{id:"persistence"},"Persistence"),(0,o.kt)("p",null,"To be able to ",(0,o.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/2022-05-27#data-persistence"},"persist data")," we first need to add a host volume to our Nomad minion. Add the following configs in your ",(0,o.kt)("inlineCode",{parentName:"p"},"client.hcl")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'client {\n  enabled = true\n  servers = ["myhost:port"]\n  host_volume "waypoint" {\n    path = "/opt/waypoint_data"\n    read_only = false\n  }\n}\n\n# Docker Configuration\nplugin "docker" {\n    volumes {\n      enabled = true\n    }\n}\n')),(0,o.kt)("p",null,"Create the ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/waypoint_data")," directory and I am not sure about the permissions needed here. The documentation says that you have to ",(0,o.kt)("inlineCode",{parentName:"p"},"chown <Nomad User>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chown nomad:nomad /opt/waypoint_data/\nchmod 775 /opt/waypoint_data/\n")),(0,o.kt)("h3",{id:"set-up-the-waypoint-server"},"Set up the Waypoint Server"),(0,o.kt)("p",null,"To install Waypoint with host volume persistent storage into the default data center ",(0,o.kt)("inlineCode",{parentName:"p"},"dc1"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"waypoint install -platform=nomad -accept-tos -nomad-host=https://localhost:4646 -nomad-dc=dc1 -nomad-host-volume=waypoint -nomad-runner-host-volume=waypoint -nomad-consul-service=true -nomad-consul-datacenter=dc1\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Error installing the runner: please include '-nomad-csi-volume-provider' or '-nomad-host-volume' ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/waypoint/issues/3588"},"Github Issue"))),(0,o.kt)("p",null,"You can deactivate the Consul integration if the service is not present on your system."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hashicorp Waypoint",src:t(29820).Z,width:"1356",height:"785"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hashicorp Waypoint",src:t(56566).Z,width:"1358",height:"451"})),(0,o.kt)("p",null,"The docker container is running on my server in the specified data center where I added the ",(0,o.kt)("inlineCode",{parentName:"p"},"waypoint")," volume to Nomad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\nIMAGE                      PORTS\nhashicorp/waypoint:latest  dc1.server.ip:9701-9702->9701-9702/tcp\n")),(0,o.kt)("p",null,"And I am able to access the Waypoint UI on port ",(0,o.kt)("inlineCode",{parentName:"p"},"9702")," and I can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"waypoint user token")," command on my Waypoint server (that is in a different data center) to create an access token."),(0,o.kt)("p",null,"In addition I can see that Waypoint is using the volume I created on the Nomad minion to store a database file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls /opt/waypoint_data\ndata.db  waypoint-restore.db.lock\n")),(0,o.kt)("h3",{id:"initialize-the-waypoint-job"},"Initialize the Waypoint Job"),(0,o.kt)("p",null,"Back on the Waypoint server I am still inside the example repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls /opt/waypoint/waypoint-examples/nomad/nodejs\nindex.js  package.json  public  README.md  views  waypoint.hcl\n")),(0,o.kt)("p",null,"Here I have to edit the HCL file since I am not actually use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dc1")," data center for my test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'cat waypoint.hcl\n\nproject = "nomad-nodejs"\n\napp "nomad-nodejs-web" {\n\n  build {\n    use "pack" {}\n    registry {\n      use "docker" {\n        image = "nomad-nodejs-web"\n        tag   = "1"\n        local = true\n      }\n    }\n  }\n\n  deploy {\n    use "nomad" {\n      // these options both default to the values shown, but are left here to\n      // show they are configurable\n      datacenter = "dc1"\n      // namespace  = "default"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"With these configurations in place, issue the following command in order to initialize Waypoint with this configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'waypoint init\n\n\u2713 Configuration file appears valid\n\u2713 Connection to Waypoint server was successful\n\u2713 Project "nomad-nodejs" and all apps are registered with the server.\n\nProject initialized!\n')),(0,o.kt)("p",null,"We can now deploy the application to Nomad by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"waypoint up\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hashicorp Waypoint",src:t(7595).Z,width:"1353",height:"861"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'The deploy was successful! A Waypoint deployment URL is shown below. This\ncan be used internally to check your deployment and is not meant for external\ntraffic. You can manage this hostname using "waypoint hostname."\n\n           URL: https://curiously-evolving-muskox.waypoint.run\nDeployment URL: https://curiously-evolving-muskox--v1.waypoint.run\n')),(0,o.kt)("h3",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"But I am seeing that the allocation fails in Nomad. The issue seems to be that the Docker image is being build on my Waypoint server but is not pushed to the Nomad minion server:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hashicorp Waypoint",src:t(46239).Z,width:"1354",height:"844"})),(0,o.kt)("p",null,"I do see that the image was build on the Waypoint server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\nREPOSITORY           TAG      IMAGE ID       CREATED         SIZE\nnomad-nodejs-web     1        168778d136f0   4 minutes ago   782MB\nnomad-nodejs-web     latest   168778d136f0   4 minutes ago   782MB\n")),(0,o.kt)("p",null,"I did open the ",(0,o.kt)("strong",{parentName:"p"},"gRPC")," port ",(0,o.kt)("inlineCode",{parentName:"p"},"9702")," (",(0,o.kt)("a",{parentName:"p",href:"https://www.waypointproject.io/docs/server/run/production#ports-used"},"see docs"),"). But how is this transfer supposed to happen?"),(0,o.kt)("p",null,"So I ",(0,o.kt)("a",{parentName:"p",href:"https://mpolinowski.github.io/docs/DevOps/Linux/2019-06-14--download-and-save-docker-image/2019-06-14#docker-save"},"pushed the Docker image manually")," to the minion server, stopped the Nomad allocation and restarted it:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hashicorp Waypoint",src:t(2289).Z,width:"1352",height:"769"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hashicorp Waypoint",src:t(53774).Z,width:"1339",height:"584"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hashicorp Waypoint",src:t(88628).Z,width:"1352",height:"514"})),(0,o.kt)("p",null,"The minion now hosts the application on port ",(0,o.kt)("inlineCode",{parentName:"p"},"27478"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\nIMAGE              PORTS\nnomad-nodejs-web:1 dc1.server.ip:27478->3000/tcp\n")),(0,o.kt)("p",null,"And lo and behold there is the application:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hashicorp Waypoint",src:t(25714).Z,width:"1351",height:"615"})),(0,o.kt)("h2",{id:"waypoint-help"},"Waypoint Help"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: waypoint server install [options]\nAlias: waypoint install\n\n  Installs a Waypoint server to an existing platform. The platform should be\n  specified as kubernetes, nomad, ecs, or docker.\n\n  This will also install a single Waypoint runner by default. This enables\n  remote operations out of the box, such as polling a Git repository. This can\n  be disabled by specifying \"-runner=false\".\n\n  By default, this will also automatically create a new default CLI context\n  (see \"waypoint context\") so the CLI will be configured to use the newly\n  installed server.\n\n  This command will require you to accept the Waypoint Terms of Service\n  and Privacy Policy for the Waypoint URL service by specifying the \"-accept-tos\"\n  flag. This only applies to the Waypoint URL service. You may disable the\n  URL service by manually running the server. If you disable the URL service,\n  you do not need to accept any terms.\n\n  To further customize the server installation, you may pass advanced flag options\n  specified in the documentation for the 'server run' command. To set these values,\n  include a '--' after the full argument list for 'install', followed by these\n  advanced flag options. As an example, to set the server log level to trace\n  and disable the UI, the command would be:\n\n    waypoint install -platform=docker -accept-tos -- -vvv -disable-ui\n\nGlobal Options:\n\n  -app=<string>\n      App to target. Certain commands require a single app target for Waypoint\n      configurations with multiple apps. If you have a single app, then this\n      can be ignored. This is aliased as \"-a\".\n\n  -plain\n      Plain output: no colors, no animation. The default is false.\n\n  -project=<string>\n      Project to target. This is aliased as \"-p\".\n\n  -workspace=<string>\n      Workspace to operate in. This is aliased as \"-w\".\n\nCommand Options:\n\n  -accept-tos\n      Pass to accept the Terms of Service and Privacy Policy to use the\n      Waypoint URL Service. This is required if the URL service is enabled\n      and you're using the HashiCorp-provided URL service rather than\n      self-hosting. See the privacy policy at https://hashicorp.com/privacy\n      and the ToS at https://waypointproject.io/terms The default is false.\n\n  -context-create=<string>\n      Create a context with connection information for this installation. The\n      default value if not set will be 'install-' and then be suffixed with a\n      timestamp at the time the command is executed.\n\n  -context-set-default\n      Set the newly installed server as the default CLI context. The default\n      is true.\n\n  -platform=<string>\n      Platform to install the Waypoint server into.\n\ndocker Options:\n\n  -docker-odr-image=<string>\n      Docker image for the Waypoint On-Demand Runners. This will default to\n      the server image with the name (not label) suffixed with '-odr'.\n\n  -docker-server-image=<string>\n      Docker image for the Waypoint server. The default is\n      hashicorp/waypoint:latest.\n\necs Options:\n\n  -ecs-cluster=<string>\n      Configures the Cluster to install into. The default is waypoint-server.\n\n  -ecs-cpu=<string>\n      Configures the requested CPU amount for the Waypoint server task in ECS.\n      The default is 512.\n\n  -ecs-execution-role-name=<string>\n      Configures the IAM Execution role name to use. The default is\n      waypoint-server-execution-role.\n\n  -ecs-mem=<string>\n      Configures the requested memory amount for the Waypoint server task in\n      ECS. The default is 1024.\n\n  -ecs-odr-cpu=<string>\n      Configures the requested CPU amount for the Waypoint On-Demand runner in\n      ECS. The default is 512.\n\n  -ecs-odr-image=<string>\n      Docker image for the Waypoint On-Demand Runners. This will default to\n      the server image with the name (not label) suffixed with '-odr'.\n\n  -ecs-odr-mem=<string>\n      Configures the requested memory amount for the Waypoint On-Demand runner\n      in ECS. The default is 2048.\n\n  -ecs-region=<string>\n      Configures which AWS region to install into.\n\n  -ecs-server-image=<string>\n      Docker image for the Waypoint server. The default is\n      hashicorp/waypoint:latest.\n\n  -ecs-subnets=<string>\n      Subnets to install server into.\n\n  -ecs-task-role-name=<string>\n      IAM Execution Role to assign to the on-demand runner. If this is blank,\n      an IAM role will be created automatically with the default permissions.\n      The default is waypoint-runner.\n\nkubernetes Options:\n\n  -k8s-advertise-internal\n      Advertise the internal service address rather than the external. This\n      is useful if all your deployments will be able to access the private\n      service address. This will default to false but will be automatically\n      set to true if the external host is detected to be localhost. The\n      default is false.\n\n  -k8s-annotate-service=<key=value>\n      Annotations for the Service generated.\n\n  -k8s-config-path=<string>\n      Path to the kubeconfig file to use.\n\n  -k8s-context=<string>\n      The Kubernetes context to install the Waypoint server to. If left unset,\n      Waypoint will use the current Kubernetes context.\n\n  -k8s-cpu-limit=<string>\n      Configures the CPU limit for the Waypoint server in Kubernetes. The\n      default is 0.\n\n  -k8s-cpu-request=<string>\n      Configures the requested CPU amount for the Waypoint server in\n      Kubernetes. The default is 0.\n\n  -k8s-helm-version=<string>\n      The version of the Helm chart to use for the Waypoint runner install.\n      The required version number format is: 'vX.Y.Z'.\n\n  -k8s-mem-limit=<string>\n      Configures the memory limit for the Waypoint server in Kubernetes. The\n      default is 0.\n\n  -k8s-mem-request=<string>\n      Configures the requested memory amount for the Waypoint server in\n      Kubernetes. The default is 0.\n\n  -k8s-namespace=<string>\n      Namespace to install the Waypoint server into for Kubernetes.\n\n  -k8s-odr-image=<string>\n      Docker image for the Waypoint On-Demand Runners\n\n  -k8s-pull-policy=<string>\n      Set the pull policy for the Waypoint server image.\n\n  -k8s-pull-secret=<string>\n      Secret to use to access the Waypoint server image on Kubernetes.\n\n  -k8s-runner-service-account=<string>\n      Service account to assign to the on-demand runner. If this is blank,\n      a service account will be created automatically with the correct\n      permissions. The default is waypoint-runner.\n\n  -k8s-runner-service-account-init\n      Create the service account if it does not exist. The default is true.\n\n  -k8s-secret-file=<string>\n      Use the Kubernetes Secret in the given path to access the Waypoint\n      server image.\n\n  -k8s-server-image=<string>\n      Docker image for the Waypoint server. The default is\n      hashicorp/waypoint:latest.\n\n  -k8s-storage-request=<string>\n      Configures the requested persistent volume size for the Waypoint server\n      in Kubernetes. The default is 1Gi.\n\n  -k8s-storageclassname=<string>\n      Name of the StorageClass required by the volume claim to install the\n      Waypoint server image to.\n\nnomad Options:\n\n  -nomad-annotate-service=<key=value>\n      Annotations for the Service generated.\n\n  -nomad-auth-soft-fail\n      Don't fail the Nomad task on an auth failure obtaining server image\n      container. Attempt to continue without auth. The default is false.\n\n  -nomad-consul-datacenter=<string>\n      The datacenter where Consul is located. The default is dc1.\n\n  -nomad-consul-domain=<string>\n      The domain where Consul is located. The default is consul.\n\n  -nomad-consul-service\n      Create service for Waypoint UI and Server in Consul. The default is\n      true.\n\n  -nomad-consul-service-backend-tags=<string>\n      Tags for the Waypoint backend service generated in Consul. The 'first'\n      tag will be used when crafting the Consul DNS hostname for accessing\n      Waypoint. The default is waypoint.\n\n  -nomad-consul-service-hostname=<string>\n      If set, will use this hostname for Consul DNS rather than the default,\n      i.e. \"waypoint-server.service.consul\".\n\n  -nomad-consul-service-ui-tags=<string>\n      Tags for the Waypoint UI service generated in Consul. The default is\n      waypoint.\n\n  -nomad-consul-token=<string>\n      If set, the passed Consul token is stored in the job before sending to\n      the Nomad servers. Overrides the CONSUL_HTTP_TOKEN environment variable\n      if set.\n\n  -nomad-csi-external-id=<string>\n      The ID of the physical volume from the Nomad storage provider.\n\n  -nomad-csi-fs=<string>\n      Nomad CSI volume mount option file system. The default is xfs.\n\n  -nomad-csi-parameters=<key=value>\n      Parameters passed directly to the CSI plugin to configure the volume.\n\n  -nomad-csi-plugin-id=<string>\n      The ID of the CSI plugin that manages the volume, required for volume\n      type 'csi'.\n\n  -nomad-csi-secrets=<key=value>\n      Secrets to provide for the CSI volume.\n\n  -nomad-csi-topologies=<key=value>\n      Locations from which the Nomad Volume will be accessible.\n\n  -nomad-csi-volume-capacity-max=<int>\n      Nomad CSI volume capacity maximum, in bytes. The default is 2147483648.\n\n  -nomad-csi-volume-capacity-min=<int>\n      Nomad CSI volume capacity minimum, in bytes. The default is 1073741824.\n\n  -nomad-csi-volume-provider=<string>\n      Nomad CSI volume provider, required for volume type 'csi'.\n\n  -nomad-dc=<string>\n      Datacenters to install to for Nomad. The default is dc1.\n\n  -nomad-host=<string>\n      Hostname of the Nomad server to use, like for launching on-demand tasks.\n      The default is http://localhost:4646.\n\n  -nomad-host-volume=<string>\n      Nomad host volume name to use for the Waypoint server, required for\n      volume type 'host'.\n\n  -nomad-namespace=<string>\n      Namespace to install the Waypoint server into for Nomad. The default is\n      default.\n\n  -nomad-odr-image=<string>\n      Docker image for the on-demand runners. If not specified, it defaults to\n      the server image name + '-odr' (i.e. 'hashicorp/waypoint-odr:latest')\n\n  -nomad-policy-override\n      Override the Nomad sentinel policy for enterprise Nomad. The default is\n      false.\n\n  -nomad-region=<string>\n      Region to install to for Nomad. The default is global.\n\n  -nomad-runner-cpu=<string>\n      CPU required to run this task in MHz. The default is 200.\n\n  -nomad-runner-csi-volume-capacity-max=<int>\n      Waypoint runner Nomad CSI volume capacity maximum, in bytes. The default\n      is 2147483648.\n\n  -nomad-runner-csi-volume-capacity-min=<int>\n      Waypoint runner Nomad CSI volume capacity minimum, in bytes. The default\n      is 1073741824.\n\n  -nomad-runner-csi-volume-provider=<string>\n      Name of the CSI volume provider to use for the Waypoint runner.\n\n  -nomad-runner-host-volume=<string>\n      Name of the host volume to use for the Waypoint runner.\n\n  -nomad-runner-memory=<string>\n      MB of Memory to allocate to the runner job task. The default is 600.\n\n  -nomad-server-cpu=<string>\n      CPU required to run this task in MHz. The default is 200.\n\n  -nomad-server-image=<string>\n      Docker image for the Waypoint server. The default is\n      hashicorp/waypoint:latest.\n\n  -nomad-server-memory=<string>\n      MB of Memory to allocate to the Server job task. The default is 600.\n")))}d.isMDXComponent=!0},29820:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hashicorp-waypoint_01-7a2c9d39b7321babba828843c49f3b40.png"},56566:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hashicorp-waypoint_02-219924f9088f897a6c6fb6334637c86f.png"},7595:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hashicorp-waypoint_03-7bcf97ffd7a251359ad34d7168c2f82b.png"},46239:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hashicorp-waypoint_05-19b30c00fd209ca00f1fa9f07cb6f771.png"},2289:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hashicorp-waypoint_06-488ce630f6ade654a885b98c6437f43a.png"},25714:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hashicorp-waypoint_07-f9c0a367e499c0de79fad2cd392a979c.png"},53774:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hashicorp-waypoint_08-2c0a4c21216336d1a675e73de43bf232.png"},88628:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hashicorp-waypoint_09-8416a0b3fa716f5fe91774fe30bfcb8b.png"},79654:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4fd563b06144187a3119f9b8b79aa8d1.jpg"}}]);