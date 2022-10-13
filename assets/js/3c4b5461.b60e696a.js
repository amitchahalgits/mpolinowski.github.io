"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[28458],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=i(t),m=a,u=h["".concat(p,".").concat(m)]||h[m]||d[m]||o;return t?r.createElement(u,s(s({ref:n},l),{},{components:t})):r.createElement(u,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=h;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},32580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:7040,slug:"2022-10-11",title:"Opensearch & Dashboard",authors:"mpolinowski",tags:["LINUX","Elasticsearch"],description:"Run a single Opensearch node + Dashboard cluster with Docker-Compose."},s=void 0,c={unversionedId:"DevOps/Elasticsearch/2022-10-11--opensearch-docker-compose/index",id:"DevOps/Elasticsearch/2022-10-11--opensearch-docker-compose/index",title:"Opensearch & Dashboard",description:"Run a single Opensearch node + Dashboard cluster with Docker-Compose.",source:"@site/docs/DevOps/Elasticsearch/2022-10-11--opensearch-docker-compose/index.md",sourceDirName:"DevOps/Elasticsearch/2022-10-11--opensearch-docker-compose",slug:"/DevOps/Elasticsearch/2022-10-11--opensearch-docker-compose/2022-10-11",permalink:"/docs/DevOps/Elasticsearch/2022-10-11--opensearch-docker-compose/2022-10-11",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2022-10-11--opensearch-docker-compose/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:7040,frontMatter:{sidebar_position:7040,slug:"2022-10-11",title:"Opensearch & Dashboard",authors:"mpolinowski",tags:["LINUX","Elasticsearch"],description:"Run a single Opensearch node + Dashboard cluster with Docker-Compose."},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/docs/category/elasticsearch"},next:{title:"Elasticsearch v8, Filebeat (Docker) and Apache",permalink:"/docs/DevOps/Elasticsearch/2022-02-06--elasticsearch-v8-data-ingestion-apache/2022-02-06"}},p={},i=[{value:"Setup",id:"setup",level:2}],l={toc:i};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shenzhen, China",src:t(55829).Z,width:"1500",height:"403"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setup"},"Setup"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Run the Docker-Compose file for a single Opensearch node + Dashboard cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'version: \'3\'\nservices:\n  opensearch-node1:\n    image: opensearchproject/opensearch:latest\n    container_name: opensearch-node1\n    environment:\n      - cluster.name=opensearch-cluster\n      - node.name=opensearch-node1\n      - discovery.seed_hosts=opensearch-node1\n      - cluster.initial_cluster_manager_nodes=opensearch-node1\n      - bootstrap.memory_lock=true # along with the memlock settings below, disables swapping\n      - "OPENSEARCH_JAVA_OPTS=-Xms512m -Xmx512m" # minimum and maximum Java heap size, recommend setting both to 50% of system RAM\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n      nofile:\n        soft: 65536 # maximum number of open files for the OpenSearch user, set to at least 65536 on modern systems\n        hard: 65536\n    volumes:\n      - opensearch-data1:/usr/share/opensearch/data\n    ports:\n      - 9200:9200\n      - 9600:9600 # required for Performance Analyzer\n    networks:\n      - opensearch-net\n  opensearch-dashboards:\n    image: opensearchproject/opensearch-dashboards:latest\n    container_name: opensearch-dashboards\n    ports:\n      - 5601:5601\n    expose:\n      - "5601"\n    environment:\n      OPENSEARCH_HOSTS: \'["https://opensearch-node1:9200"]\'\n    networks:\n      - opensearch-net\n\nvolumes:\n  opensearch-data1:\n  opensearch-data2:\n\nnetworks:\n  opensearch-net:\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"ERROR")," message: Virtual memory is too low:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"opensearch-node1         | ERROR: [1] bootstrap checks failed\nopensearch-node1         | [1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]\nopensearch-node1         | ERROR: OpenSearch did not exit normally - check the logs at /usr/share/opensearch/logs/opensearch-cluster.log\nopensearch-node1         | Killing performance analyzer process 103\nopensearch-node1         | OpenSearch exited with code 78\nopensearch-node1         | Performance analyzer exited with code 143\nopensearch-node1 exited with code 0\n")),(0,a.kt)("p",null,"Increase the virtual memory for Elasticsearch on the host machine by running this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sysctl -w vm.max_map_count=262144\n")),(0,a.kt)("p",null,"and then restart your docker-containers and login with ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5601/app/home"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Opensearch",src:t(9782).Z,width:"1186",height:"455"})))}d.isMDXComponent=!0},9782:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Opensearch_01-f227994fe897509974fdefc0859d99f2.png"},55829:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-94d62ec3ff079da54fce88aad4901707.jpg"}}]);