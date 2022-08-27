"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[58459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:6070,slug:"2021-10-10",title:"Hashicorp Nomad in Production",authors:"mpolinowski",tags:["Nomad"]},l=void 0,s={unversionedId:"DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/index",id:"DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/index",title:"Hashicorp Nomad in Production",description:"Koh Rong, Cambodia",source:"@site/docs/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/index.md",sourceDirName:"DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production",slug:"/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/2021-10-10",permalink:"/docs/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/2021-10-10",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"}],version:"current",sidebarPosition:6070,frontMatter:{sidebar_position:6070,slug:"2021-10-10",title:"Hashicorp Nomad in Production",authors:"mpolinowski",tags:["Nomad"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Consul in Production",permalink:"/docs/DevOps/Hashicorp/2021-10-11--hashicorp-consul-in-production/2021-10-11"},next:{title:"Hashicorp Terraform - Providers, Variables & Attributes",permalink:"/docs/DevOps/Hashicorp/2021-09-06--hashicorp-terraform-providers-variables-attributes/2021-09-07"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Run as a Service",id:"run-as-a-service",level:2},{value:"Clusterize",id:"clusterize",level:2},{value:"Encryption",id:"encryption",level:2},{value:"Gossip Encryption",id:"gossip-encryption",level:3},{value:"Mutual TLS Encryption",id:"mutual-tls-encryption",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Koh Rong, Cambodia",src:n(30858).Z,width:"1500",height:"432"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-as-a-service"},"Run as a Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clusterize"},"Clusterize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#encryption"},"Encryption"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gossip-encryption"},"Gossip Encryption")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mutual-tls-encryption"},"Mutual TLS Encryption"))))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Download a pre-compiled binary (",(0,r.kt)("a",{parentName:"p",href:"https://www.nomadproject.io/downloads"},"Check latest Binary Version here"),") and run it on your machine locally. You can also verify the binary using the available SHA-256 sums:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://releases.hashicorp.com/nomad/1.1.6/nomad_1.1.6_linux_amd64.zip\nwget https://releases.hashicorp.com/nomad/1.1.6/nomad_1.1.6_SHA256SUMS\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SHA256SUMS")," shows me the corresponding check sum for this file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"93f287758a464930e35cd1866167f05a3a6a48af2b0e010dfc0fbc914ae2f830  nomad_1.1.6_linux_amd64.zip\n")),(0,r.kt)("p",null,"The following command has to give you the same sum - if you downloaded the correct version of the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sha256sum nomad_1.1.6_linux_amd64.zip\n93f287758a464930e35cd1866167f05a3a6a48af2b0e010dfc0fbc914ae2f830  nomad_1.1.6_linux_amd64.zip\n")),(0,r.kt)("p",null,"Now that we know that the zip container has not been tempered with we can unzip it to a place that is in our system PATH:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo $PATH\n\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"unzip ./nomad_1.1.6_linux_amd64.zip\nrm ./nomad_1.1.6_linux_amd64.zip\nmv nomad /usr/bin/nomad\n")),(0,r.kt)("p",null,"Verify that it is working:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad -v\nNomad v1.1.6 (b83d623fb5ff475d5e40df21e9e7a61834071078)\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Prepare configuration and data directories:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /etc/nomad.d\nmkdir -p /opt/nomad/data\n")),(0,r.kt)("p",null,"Add a default configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nomad.d/nomad.hcl\n")),(0,r.kt)("p",null,"I added an ",(0,r.kt)("inlineCode",{parentName:"p"},"advertise")," block specifies the advertise address for individual network services. Both the RPC and the serf interface will be accessible for the other Nomad clients - so they are bound to the WAN IP of your server. But the HTTP interface (web user interface) I only want to be able to use via SSH on localhost:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": Binding ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," to localhost makes the Nomad Web UI unavailable but also closes the HTTP REST API for clients. You will no longer be able to send GET or POST request to your server.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"http")," - The address to advertise for the HTTP interface. This should be reachable by all the nodes from which end users are going to use the Nomad CLI tools.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"rpc")," - The address advertised to Nomad client nodes. This allows advertising a different RPC address than is used by Nomad Servers such that the clients can connect to the Nomad servers if they are behind a NAT.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"serf")," - The address advertised for the gossip layer. This address must be reachable from all server nodes. It is not required that clients can reach this address. Nomad servers will communicate to each other over RPC using the advertised Serf IP and advertised RPC Port."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'## https://www.nomadproject.io/docs/agent/configuration\nname = "my_server_name"\ndatacenter = "my_data_center"\ndata_dir = "/opt/nomad/data"\nbind_addr = "0.0.0.0"\n\nadvertise {\n  # Defaults to the first private IP address.\n  http = "127.0.0.1"\n  rpc  = "1.2.3.4"\n  serf = "1.2.3.4"\n}\n\nports {\n  # Change the default ports below\n  http = 4646\n  rpc  = 4647\n  serf = 4648\n}\n\nserver {\n  enabled = true\n  bootstrap_expect = 1\n}\n\nclient {\n  enabled = true\n  servers = ["127.0.0.1:4647"]\n}\n\n## Connect to Consul service if available\n## consul {\n##   address = "1.2.3.4:8500"\n## }\n\n## https://www.nomadproject.io/docs/agent/configuration/index.html#log_level\n## [WARN|INFO|DEBUG]\nlog_level = "INFO"\nlog_rotate_duration = "30d"\nlog_rotate_max_files = 12\n')),(0,r.kt)("p",null,"We can test-run this Master/Minion configuration with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad agent -config /etc/nomad.d -bind 1.2.3.4\n\n==> WARNING: Bootstrap mode enabled! Potentially unsafe operation.\n==> Loaded configuration from /etc/nomad.d/nomad.hcl\n==> Starting Nomad agent...\n==> Nomad agent configuration:\n\n       Advertise Addrs: HTTP: 127.0.0.1:4646; RPC: 1.2.3.4:9020; Serf: 1.2.3.4:9408\n            Bind Addrs: HTTP: 0.0.0.0:4646; RPC: 0.0.0.0:9020; Serf: 0.0.0.0:9408\n                Client: true\n             Log Level: INFO\n                Region: global (DC: mydatacenter)\n                Server: true\n               Version: 1.1.6\n\n==> Nomad agent started! Log data will stream in below:\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},'nomad.raft: failed to make requestVote RPC: target="{Voter IP-ADDRESS:4647 IP-ADDRESS:4647}" error="dial tcp IP-ADDRESS:4647: connect: connection refused"')," I started the server with default ports, changed the ports and restarted. But now I started seeing the error message above - ",(0,r.kt)("strong",{parentName:"p"},"connection refused on default port"),". Clear the data dir ",(0,r.kt)("inlineCode",{parentName:"p"},"rm -rf /opt/nomad/data/*")," to get rid of it.")),(0,r.kt)("p",null,"To test the Nomad UI just tunnel the user interface through SSH onto your local server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh myuser@my-server-ip -p ssh-port -L4646:localhost:4646\n")),(0,r.kt)("p",null,"Check the UI on port ",(0,r.kt)("inlineCode",{parentName:"p"},"4646")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4646/ui/jobs"),"."),(0,r.kt)("h2",{id:"run-as-a-service"},"Run as a Service"),(0,r.kt)("p",null,"Kill the manually started instance of Nomad and add a SystemD service for Nomad:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /lib/systemd/system/nomad.service\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"[Unit]\nDescription=Nomad\nDocumentation=https://nomadproject.io/docs/\nWants=network-online.target\nAfter=network-online.target\n\n# When using Nomad with Consul it is not necessary to start Consul first. These\n# lines start Consul before Nomad as an optimization to avoid Nomad logging\n# that Consul is unavailable at startup.\n#Wants=consul.service\n#After=consul.service\n\n[Service]\nExecReload=/bin/kill -HUP $MAINPID\nExecStart=/usr/bin/nomad agent -config /etc/nomad.d\nKillMode=process\nKillSignal=SIGINT\nLimitNOFILE=65536\nLimitNPROC=infinity\nRestart=on-failure\nRestartSec=2\n\n## Configure unit start rate limiting. Units which are started more than\n## *burst* times within an *interval* time span are not permitted to start any\n## more. Use `StartLimitIntervalSec` or `StartLimitInterval` (depending on\n## systemd version) to configure the checking interval and `StartLimitBurst`\n## to configure how many starts per interval are allowed. The values in the\n## commented lines are defaults.\n\n# StartLimitBurst = 5\n\n## StartLimitIntervalSec is used for systemd versions >= 230\n# StartLimitIntervalSec = 10s\n\n## StartLimitInterval is used for systemd versions < 230\n# StartLimitInterval = 10s\n\nTasksMax=infinity\nOOMScoreAdjust=-1000\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"And enable the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable --now nomad\nsystemctl status nomad\n")),(0,r.kt)("p",null,"Access the UI again to verify that everything is working."),(0,r.kt)("h2",{id:"clusterize"},"Clusterize"),(0,r.kt)("p",null,"To add clients to our server we now need to open the ",(0,r.kt)("inlineCode",{parentName:"p"},"serf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," ports of our server:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ufw")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ufw allow 4647/tcp\nufw allow 4648\nufw reload\nufw status verbose\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FirewallD")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo firewall-cmd --permanent --zone=public --add-port=4647/tcp  --add-port=4648/tcp  --add-port=4648/udp\nsudo firewall-cmd --reload\nsudo firewall-cmd --zone=public --list-ports\n")),(0,r.kt)("p",null,"Continue by installing Nomad in client configuration on your minion server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nomad.d/nomad.hcl\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'## https://www.nomadproject.io/docs/agent/configuration\nname = "my_client_name"\ndatacenter = "my_data_center"\ndata_dir = "/opt/nomad/data"\nbind_addr = "0.0.0.0"\n\nadvertise {\n  # Defaults to the first private IP address.\n  http = "127.0.0.1"\n  rpc  = "2.3.4.5"\n  serf = "2.3.4.5"\n}\n\nports {\n  # Change the default ports below\n  http = 4646\n  rpc  = 4647\n  serf = 4648\n}\n\nserver {\n  enabled = false\n}\n\nclient {\n  enabled = true\n  servers = ["1.2.3.4:4647"]\n}\n\n## Connect to Consul service if available\n## consul {\n##   address = "2.3.4.5:8500"\n## }\n\n## https://www.nomadproject.io/docs/agent/configuration/index.html#log_level\n## [WARN|INFO|DEBUG]\nlog_level = "INFO"\nlog_rotate_duration = "30d"\nlog_rotate_max_files = 12\n')),(0,r.kt)("p",null,"And prepare the service file for the Nomad client. But before starting the service we need to forward the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"serf")," ports on our client."),(0,r.kt)("p",null,"Now start the service on your client and reload the Nomad service on your master. When successful you should see that the new client is connected by using the following command on your master:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad node status\n\nID        DC              Name            Class   Drain  Eligibility  Status\nehddf7ec  my_data_center  my_client_name  <none>  false  eligible     ready\n5a675yye  my_data_center  my_server_name  <none>  false  eligible     ready\n")),(0,r.kt)("h2",{id:"encryption"},"Encryption"),(0,r.kt)("h3",{id:"gossip-encryption"},"Gossip Encryption"),(0,r.kt)("p",null,"To encrypt the ",(0,r.kt)("strong",{parentName:"p"},"SERF")," gossip communication create an encryption key to encrypt the communication between Nomad agents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad operator keygen\n4kRkFQfcc3LU0BazP1ca+z==\n")),(0,r.kt)("p",null,"And add the key to the server block of your master server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/nomad.d/nomad.hcl\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'server {\n  enabled = true\n  encrypt = "4kRkFQfcc3LU0BazP1ca+z=="\n\n...\n')),(0,r.kt)("h3",{id:"mutual-tls-encryption"},"Mutual TLS Encryption"),(0,r.kt)("p",null,"Nomad optionally uses mutual TLS (mTLS) for all ",(0,r.kt)("strong",{parentName:"p"},"HTTP")," and ",(0,r.kt)("strong",{parentName:"p"},"RPC")," communication. You can generate a private CA certificate and key with ",(0,r.kt)("strong",{parentName:"p"},"Cloudflare cfssl"),". Download the latest release with wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/cloudflare/cfssl/releases/download/v1.6.0/cfssl_1.6.0_linux_amd64 -O cfssl\nwget https://github.com/cloudflare/cfssl/releases/download/v1.6.0/cfssljson_1.6.0_linux_amd64 -O cfssljson\n\nchmod +x cfssljson cfssl\nmv cfssl* /usr/local/bin\n\ncfssl version\ncfssljson -version\n")),(0,r.kt)("p",null,"Generate the CA's private key and certificate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /opt/nomad/nomad_certs && cd /opt/nomad/nomad_certs\ncfssl print-defaults csr | cfssl gencert -initca - | cfssljson -bare nomad-ca\n")),(0,r.kt)("p",null,"To create certificates for the client and server in the cluster use the following configuration file as cfssl.json to increase the default certificate expiration time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano cfssl.json\n")),(0,r.kt)("p",null,"Generate a certificate for the Nomad server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo '{}' | cfssl gencert -ca=nomad-ca.pem -ca-key=nomad-ca-key.pem -config=cfssl.json \\\n    -hostname=\"server.global.nomad,localhost,127.0.0.1\" - | cfssljson -bare server\n")),(0,r.kt)("p",null,"Generate a certificate for the Nomad client"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo '{}' | cfssl gencert -ca=nomad-ca.pem -ca-key=nomad-ca-key.pem -config=cfssl.json \\\n    -hostname=\"client.global.nomad,localhost,127.0.0.1\" - | cfssljson -bare client\n")),(0,r.kt)("p",null,"Generate a certificate for the CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo '{}' | cfssl gencert -ca=nomad-ca.pem -ca-key=nomad-ca-key.pem -profile=client \\\n    - | cfssljson -bare cli\n")),(0,r.kt)("p",null,"You should now have the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cfssl.json")," - cfssl configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nomad-ca.csr")," - CA signing request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nomad-ca-key.pem")," - CA private key. Keep safe."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nomad-ca.pem")," - CA public certificate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cli.csr")," - Nomad CLI certificate signing request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cli-key.pem")," - Nomad CLI private key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cli.pem")," - Nomad CLI certificate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.csr")," - Nomad client node certificate signing request for the global region."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client-key"),".pem - Nomad client node private key for the global region."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.pem")," - Nomad client node public certificate for the global region."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"server.csr")," - Nomad server node certificate signing request for the global region."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"server-key"),".pem - Nomad server node private key for the global region."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"server.pem")," - Nomad server node public certificate for the global region.")),(0,r.kt)("p",null,"Each Nomad node should have:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Master Server Configuration"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /etc/nomad.d/certs\ncp server-key.pem /etc/nomad.d/certs\ncp server.pem /etc/nomad.d/certs\ncp nomad-ca.pem /etc/nomad.d/certs\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minion Server Configuration")),(0,r.kt)("p",null,"The client needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"client-key.pem"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"client.pem")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nomad-ca.pem"),". Create the same directory and choose you favourite way to copy in the client certs from your master server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /etc/nomad.d/certs\n")),(0,r.kt)("p",null,"Now add them to your Nomad configuration (",(0,r.kt)("strong",{parentName:"p"},"I will deactivate the HTTP encryption")," since I bound the HTTP interface to localhost):"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Master Server Configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'tls {\n  http = false\n  rpc  = true\n\n  ca_file   = "/etc/nomad.d/certs/nomad-ca.pem"\n  cert_file = "/etc/nomad.d/certs/server.pem"\n  key_file  = "/etc/nomad.d/certs/server-key.pem"\n\n  verify_server_hostname = true\n  verify_https_client    = true\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minion Server Configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'tls {\n  http = false\n  rpc  = true\n\n  ca_file   = "/etc/nomad.d/certs/nomad-ca.pem"\n  cert_file = "/etc/nomad.d/certs/client.pem"\n  key_file  = "/etc/nomad.d/certs/client-key.pem"\n\n  verify_server_hostname = true\n  verify_https_client    = true\n}\n')),(0,r.kt)("p",null,"Verify that your servers can still see each other:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad node status\n\nID        DC              Name            Class   Drain  Eligibility  Status\nehddf7ec  my_data_center  my_client_name  <none>  false  eligible     ready\n5a675yye  my_data_center  my_server_name  <none>  false  eligible     ready\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": When you activated TLS for HTTP you will noe ",(0,r.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2021-08-02--hashicorp-nomad-security/2021-08-02#system-environment"},"need to provide the certificates for the CLI command above"),"!")))}d.isMDXComponent=!0},30858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ea22587f1b942051274c9ca9f4668bb8.jpg"}}]);