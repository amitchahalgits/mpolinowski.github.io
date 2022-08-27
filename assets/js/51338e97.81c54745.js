"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[97289],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),o=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=o(e.components);return n.createElement(c.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(t),d=s,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||r;return t?n.createElement(m,l(l({ref:a},p),{},{components:t})):n.createElement(m,l({ref:a},p))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var o=2;o<r;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60912:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=t(87462),s=(t(67294),t(3905));const r={sidebar_position:9060,slug:"2018-01-01",title:"Securing Elasticsearch with ReadOnlyREST",authors:"mpolinowski",tags:["LINUX","Databases","Elasticsearch"]},l=void 0,i={unversionedId:"DevOps/Elasticsearch/2018-01-01--securing-elasticsearch-readonlyrest/index",id:"DevOps/Elasticsearch/2018-01-01--securing-elasticsearch-readonlyrest/index",title:"Securing Elasticsearch with ReadOnlyREST",description:"Jomsom, Nepal",source:"@site/docs/DevOps/Elasticsearch/2018-01-01--securing-elasticsearch-readonlyrest/index.mdx",sourceDirName:"DevOps/Elasticsearch/2018-01-01--securing-elasticsearch-readonlyrest",slug:"/DevOps/Elasticsearch/2018-01-01--securing-elasticsearch-readonlyrest/2018-01-01",permalink:"/docs/DevOps/Elasticsearch/2018-01-01--securing-elasticsearch-readonlyrest/2018-01-01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2018-01-01--securing-elasticsearch-readonlyrest/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Databases",permalink:"/docs/tags/databases"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2018-01-01",title:"Securing Elasticsearch with ReadOnlyREST",authors:"mpolinowski",tags:["LINUX","Databases","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch 7 with Docker Compose",permalink:"/docs/DevOps/Elasticsearch/2019-09-08--elasticsearch_7-5_docker/2019-09-08"},next:{title:"Securing Elasticsearch with X-Pack",permalink:"/docs/DevOps/Elasticsearch/2017-12-31--securing-elasticsearch-xpack/2017-12-31"}},c={},o=[{value:"Securing Elasticsearch with ReadonlyREST",id:"securing-elasticsearch-with-readonlyrest",level:2},{value:"Install Elasticsearch",id:"install-elasticsearch",level:3},{value:"Install Kibana",id:"install-kibana",level:3},{value:"Secure Elasticsearch",id:"secure-elasticsearch",level:3},{value:"Disable X-Pack security module",id:"disable-x-pack-security-module",level:3},{value:"Upgrading the plugin",id:"upgrading-the-plugin",level:3},{value:"Securing Kibana",id:"securing-kibana",level:3}],p={toc:o};function h(e){let{components:a,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Jomsom, Nepal",src:t(84035).Z,width:"1500",height:"585"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#securing-elasticsearch-with-readonlyrest"},"Securing Elasticsearch with ReadonlyREST"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#install-elasticsearch"},"Install Elasticsearch")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#install-kibana"},"Install Kibana")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#secure-elasticsearch"},"Secure Elasticsearch")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#disable-x-pack-security-module"},"Disable X-Pack security module")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#upgrading-the-plugin"},"Upgrading the plugin")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#securing-kibana"},"Securing Kibana"))))),(0,s.kt)("h2",{id:"securing-elasticsearch-with-readonlyrest"},"Securing Elasticsearch with ReadonlyREST"),(0,s.kt)("p",null,"Neither ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/downloads/elasticsearch"},"Elasticsearch")," nor ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/downloads/kibana"},"Kibana")," offer a user authentication. In earlier ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/express-static"},"Projects")," we circumvented this issue by blocking all access - only allowing our Website and Kibana to access the database via localhost."),(0,s.kt)("p",null,"But now we need an anonymous user account that is only allowed to Request and Read search results - while Writing to the database is forbidden."),(0,s.kt)("p",null,"Elastic offer their own solution for it called ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/downloads/x-pack"},"X-Pack")," (On how to set it up - ",(0,s.kt)("a",{parentName:"p",href:"https://mpolinowski.github.io/nginx-node-elasticsearch/"},"read more"),") - which is a premium extension to the ELK stack and nobody seems to know how much it would cost to buy it. But as the wise man from the vintage sport car dealership knows - if you have to ask for the prize, you cannot afford it anyway. So are there free solutions out there?"),(0,s.kt)("p",null,"Yes! Searching for alternatives lead me to 2 solutions that are mentioned often - there are more if you keep searching:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/sscarduzio/elasticsearch-readonlyrest-plugin"},"ReadOnlyREST")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/floragunncom/search-guard"},"SearchGuard"))),(0,s.kt)("p",null,"Today we are going to set up the first of them. The first thing I noticed is, that those plugins are written for the exact Version number of Elasticsearch. The newest version of RestOnlyREST supports Elasticsearch Version 6.2.3 - I am using 6.2.4, which unfortunately means that I have to downgrade my ES version.... and since there is no downgrade option with ES, I have to shut off the service and go in manually to delete every folder that ES has generated on my CentOS server (really ? That is the only option that I could find online.. but it is really a mess...)."),(0,s.kt)("h3",{id:"install-elasticsearch"},"Install Elasticsearch"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"I. Download and install the public signing key")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," rpm --import https://packages.elastic.co/GPG-KEY-elasticsearch\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"II. Add the following in your /etc/yum.repos.d/ directory in a file with a .repo suffix, for example elasticsearch.repo")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"[elasticsearch-6.x]\nname=Elasticsearch repository for 6.x packages\nbaseurl=https://artifacts.elastic.co/packages/6.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"III. Install a specific version of Elasticsearch")),(0,s.kt)("p",null,"ReadOnlyREST requires us to install a specific version (6.2.3) of Elasticsearch. Let's check what versions are available to install (CentOS/yum):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yum --showduplicates list elasticsearch | expand\nInstalled Packages\nelasticsearch.noarch                 6.2.4-1                  @elasticsearch-6.x\nAvailable Packages\nelasticsearch.noarch                 6.0.0-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.0.0-1                  kibana-6.x\nelasticsearch.noarch                 6.0.1-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.0.1-1                  kibana-6.x\nelasticsearch.noarch                 6.1.0-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.1.0-1                  kibana-6.x\nelasticsearch.noarch                 6.1.1-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.1.1-1                  kibana-6.x\nelasticsearch.noarch                 6.1.2-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.1.2-1                  kibana-6.x\nelasticsearch.noarch                 6.1.3-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.1.3-1                  kibana-6.x\nelasticsearch.noarch                 6.1.4-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.1.4-1                  kibana-6.x\nelasticsearch.noarch                 6.2.0-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.2.0-1                  kibana-6.x\nelasticsearch.noarch                 6.2.1-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.2.1-1                  kibana-6.x\nelasticsearch.noarch                 6.2.2-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.2.2-1                  kibana-6.x\nelasticsearch.noarch                 6.2.3-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.2.3-1                  kibana-6.x\nelasticsearch.noarch                 6.2.4-1                  elasticsearch-6.x\nelasticsearch.noarch                 6.2.4-1                  kibana-6.x\n")),(0,s.kt)("p",null,"To install the version 6.2.3 of elasticsearch type:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yum install elasticsearch-6.2.3-1\n")),(0,s.kt)("p",null,"Here I ran into issues due to the messy uninstall of the earlier (newer) version of Elasticsearch - ",(0,s.kt)("strong",{parentName:"p"},"if someone knows a cleaner way to do this, please tell :)")),(0,s.kt)("p",null,"Yum still had the older version in its DB leading to an 'package already installed. Checking for update. Nothing to do' error. This can be fixed by:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"rpm -e --justdb --nodeps elasticsearch\nrpm -e --justdb --nodeps kibana\n")),(0,s.kt)("p",null,"Now re-run the install command above:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yum install elasticsearch-6.2.3-1\nDependencies Resolved\n\n====================================================================================================\n Package                  Arch              Version              Repository                    Size\n====================================================================================================\nInstalling:\n elasticsearch            noarch            6.2.3-1              elasticsearch-6.x             28 M\n\nTransaction Summary\n====================================================================================================\nInstall  1 Package\n\nTotal download size: 28 M\nInstalled size: 31 M\nIs this ok [y/d/N]:y\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"IV. Restrict access to your Elasticsearch instance")),(0,s.kt)("p",null,"To configure Elasticsearch open the following file inside your text editor: ",(0,s.kt)("em",{parentName:"p"},"/etc/elasticsearch/elasticsearch.yml"),". We want to limit access to localhost and a public domain that we are going to configure in NGINX. This can be done with the variable ",(0,s.kt)("strong",{parentName:"p"},"network.host"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# ---------------------------------- Network -----------------------------------\n#\n# Set the bind address to a specific IP (IPv4 or IPv6):\n#\nnetwork.host: 127.0.0.1, my.domain.com\n#\n# Set a custom port for HTTP:\n#\nhttp.port: 9200\n")),(0,s.kt)("p",null,"The HTTP port 9200 is the default port and should be changed - but we are only going to use it on localhost. NGINX will take care of it on the outside - so we will just leave it at it's default value. The webserver will also add a security layer to our app - which means, we will need to enable ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"CORS header")," for the transaction. Add the following lines below the Network Block:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# --------------------------------- CORS ----------------------------------\n#\n#\n#http.cors:\n#  enabled: true\n#  allow-origin: /https?:\\/\\/my.domain.com(:[0-9]+)?/\nhttp.cors:\n enabled: true\n allow-origin: /https?:\\/\\/my.domain.com(:[0-9][0-9][0-9][0-9])?/\n")),(0,s.kt)("p",null,"Both examples above allow Cross-Origin Resource Sharing for your domain on every available port - but for some reasons the first regular expression stopped to work in Elasticsearch 6.2.x. You just need one of them."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"V. Set up the Elasticsearch Service")),(0,s.kt)("p",null,"To configure Elasticsearch to start automatically when the system boots up, run the following commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo /bin/systemctl daemon-reload\nsudo /bin/systemctl enable elasticsearch.service\n")),(0,s.kt)("p",null,"Elasticsearch can be started and stopped as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo systemctl start elasticsearch.service\nsudo systemctl stop elasticsearch.service\n")),(0,s.kt)("h3",{id:"install-kibana"},"Install Kibana"),(0,s.kt)("p",null,"Since we installed a specific version (6.2.3) of Elasticsearch we now need to install the same version of the admin panel Kibana. First Create and edit a new yum repository file for Kibana in ",(0,s.kt)("em",{parentName:"p"},"/etc/yum.repos.d/kibana.repo"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"[kibana-6.x]\nname=Kibana repository for 6.x packages\nbaseurl=https://artifacts.elastic.co/packages/6.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md\n")),(0,s.kt)("p",null,"Then install the correct version as listed earlier:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yum install kibana-6.2.3-1\n")),(0,s.kt)("p",null,"Now set the Elasticsearch Connection URL for Kibana in ",(0,s.kt)("em",{parentName:"p"},"/etc/kibana/kibana.yml"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"elasticsearch.url: 'http://localhost:9200'\n")),(0,s.kt)("p",null,"To configure Kibana to start automatically when the system boots up, run the following commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /bin/systemctl daemon-reload\nsudo /bin/systemctl enable kibana.service\n")),(0,s.kt)("p",null,"Kibana can be started and stopped as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo systemctl start kibana.service\nsudo systemctl stop kibana.service\n")),(0,s.kt)("h3",{id:"secure-elasticsearch"},"Secure Elasticsearch"),(0,s.kt)("p",null,"Now we can install RestOnlyREST to secure the database. First ",(0,s.kt)("a",{parentName:"p",href:"https://readonlyrest.com/download.html"},"download")," the correct package for the installed version of Elasticsearch and place it inside the ",(0,s.kt)("em",{parentName:"p"},"./tmp")," directory."),(0,s.kt)("p",null,"First set up the configuration file in ",(0,s.kt)("em",{parentName:"p"},"/etc/elasticsearch/readonlyrest.yml")," to allow all access from localhost (required by Kibana) and restrict outside access to specific indices to read only:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"readonlyrest:\n    #optional\n    response_if_req_forbidden: Sorry, your request is forbidden.\n    \n    access_control_rules:\n\n    - name: Accept all requests from localhost\n      hosts: [127.0.0.1]\n\n    - name: Just certain indices, and read only\n      actions: ['indices:data/read/*']\n      indices: ['all_my_public_indices_start_with*'] # index aliases are taken in account!\n")),(0,s.kt)("p",null,"Then install the plugin to the elasticsearch plugin directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/share/elasticsearch/bin\n./elasticsearch-plugin install file:///tmp/readonlyrest-1.16.18_es6.2.3.zip\n\n-> Downloading file:///tmp/readonlyrest-1.16.18_es6.2.3.zip\n[=================================================] 100%\xa0\xa0\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@     WARNING: plugin requires additional permissions     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n* java.io.FilePermission << ALL FILES >> read\n* java.lang.RuntimePermission accessDeclaredMembers\n* java.lang.RuntimePermission getClassLoader\n* java.lang.reflect.ReflectPermission suppressAccessChecks\n* java.net.SocketPermission * connect,accept,resolve\n* java.security.SecurityPermission getProperty.ssl.KeyManagerFactory.algorithm\n* java.util.PropertyPermission * read,write\nSee http://docs.oracle.com/javase/8/docs/technotes/guides/security/permissions.html\nfor descriptions of what these permissions allow and the associated risks.\n\nContinue with installation? [y/N]y\n-> Installed readonlyrest\n")),(0,s.kt)("h3",{id:"disable-x-pack-security-module"},"Disable X-Pack security module"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"(applies to ES 6.4.0 or greater)")),(0,s.kt)("p",null,"ReadonlyREST and X-Pack security module can't run together, so the latter needs to be disabled."),(0,s.kt)("p",null,"Edit ",(0,s.kt)("em",{parentName:"p"},"elasticsearch.yml")," and append ",(0,s.kt)("inlineCode",{parentName:"p"},"xpack.security.enabled: false"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ES_HOME/conf/elasticsearch.yml\n")),(0,s.kt)("h3",{id:"upgrading-the-plugin"},"Upgrading the plugin"),(0,s.kt)("p",null,"To upgrade ReadonlyREST for Elasticsearch:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Stop Elasticsearch.\nEither kill the process manually, or use:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"service stop elasticsearch\n")),(0,s.kt)("p",null,"depending on your environment."),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Uninstall ReadonlyREST")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"bin/elasticsearch-plugin remove readonlyrest\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Install the new version of ReadonlyREST into Elasticsearch.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"bin/elasticsearch-plugin install file://<download_dir>/readonlyrest-<ROR_VERSION>_es<ES_VERSION>.zip\n")),(0,s.kt)("p",null,"e.g. bin/elasticsearch-plugin install file:///tmp/readonlyrest-1.16.15_es6.1.1.zip"),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Restart Elasticsearch.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"service start elasticsearch\n")),(0,s.kt)("h3",{id:"securing-kibana"},"Securing Kibana"),(0,s.kt)("p",null,"Remember to secure Kibana with NGINX, since it is not protected by the free version of ReadOnlyREST!"))}h.isMDXComponent=!0},84035:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/photo-15514459555_50b13064fa_o-1fad066839f1a3d5a790953d8c7399b8.png"}}]);