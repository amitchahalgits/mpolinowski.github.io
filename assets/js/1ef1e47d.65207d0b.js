"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[49039],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,s(s({ref:e},p),{},{components:n})):a.createElement(h,s({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16064:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:9090,slug:"2020-12-23",title:"Tomcat 9 Configuration",authors:"mpolinowski",tags:["LINUX","Tomcat"]},s=void 0,l={unversionedId:"DevOps/Tomcat/2020-12-23-tomcat9-configuration/index",id:"DevOps/Tomcat/2020-12-23-tomcat9-configuration/index",title:"Tomcat 9 Configuration",description:"Siem Reap, Cambodia",source:"@site/docs/DevOps/Tomcat/2020-12-23-tomcat9-configuration/index.md",sourceDirName:"DevOps/Tomcat/2020-12-23-tomcat9-configuration",slug:"/DevOps/Tomcat/2020-12-23-tomcat9-configuration/2020-12-23",permalink:"/docs/DevOps/Tomcat/2020-12-23-tomcat9-configuration/2020-12-23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Tomcat/2020-12-23-tomcat9-configuration/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Tomcat",permalink:"/docs/tags/tomcat"}],version:"current",sidebarPosition:9090,frontMatter:{sidebar_position:9090,slug:"2020-12-23",title:"Tomcat 9 Configuration",authors:"mpolinowski",tags:["LINUX","Tomcat"]},sidebar:"tutorialSidebar",previous:{title:"Contributing to Apache Tomcat",permalink:"/docs/DevOps/Tomcat/2020-12-24-tomcat9-cluster-and-load-balancing/tomcat/instance3/CONTRIBUTING"},next:{title:"Install Tomcat 9 on Ubuntu 20.04",permalink:"/docs/DevOps/Tomcat/2020-12-22-tomcat9-ubuntu-20-10-installation/2020-12-22"}},i={},c=[{value:"Security",id:"security",level:2},{value:"Generating a self-signed SSL Key",id:"generating-a-self-signed-ssl-key",level:3},{value:"Adding the Key to Tomcat",id:"adding-the-key-to-tomcat",level:3},{value:"Enforcing Encryption",id:"enforcing-encryption",level:3},{value:"Virtual Hosts",id:"virtual-hosts",level:2},{value:"Creating a Virtual Host",id:"creating-a-virtual-host",level:3}],p={toc:c};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Siem Reap, Cambodia",src:n(34671).Z,width:"1500",height:"706"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#security"},"Security"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generating-a-self-signed-ssl-key"},"Generating a self-signed SSL Key")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#adding-the-key-to-tomcat"},"Adding the Key to Tomcat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enforcing-encryption"},"Enforcing Encryption")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#virtual-hosts"},"Virtual Hosts"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-virtual-host"},"Creating a Virtual Host"))))),(0,o.kt)("h2",{id:"security"},"Security"),(0,o.kt)("h3",{id:"generating-a-self-signed-ssl-key"},"Generating a self-signed SSL Key"),(0,o.kt)("p",null,"Java offers a tool to generate self-signed certificates called ",(0,o.kt)("strong",{parentName:"p"},"keytool"),". You can find it inside the ",(0,o.kt)("strong",{parentName:"p"},"bin")," directory of your Java installation, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'"%JAVA_HOME%\\bin\\keytool" -genkey -keyalg RSA -alias TomcatKey -keystore /opt/tomcat/ssl/sslKey.jks\n\nEnter keystore password:\nRe-enter new password:\nWhat is your first and last name?\n  [Unknown]:\nWhat is the name of your organizational unit?\n  [Unknown]:\nWhat is the name of your organization?\n  [Unknown]:\nWhat is the name of your City or Locality?\n  [Unknown]:\nWhat is the name of your State or Province?\n  [Unknown]:\nWhat is the two-letter country code for this unit?\n  [Unknown]:\nIs CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown correct?\n')),(0,o.kt)("h3",{id:"adding-the-key-to-tomcat"},"Adding the Key to Tomcat"),(0,o.kt)("p",null,"We have to point Tomcat to our freshly generated SSL keystore. To do this open the ",(0,o.kt)("inlineCode",{parentName:"p"},"server.conf")," file - add the following lines with the path to your keystore and the password you defined for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- /opt/tomcat/apache-tomcat-9.0.41/conf/server.conf --\x3e\n\n<Connector protocol="org.apache.coyote.http11.Http11NioProtocol"\n               port="8443" maxThreads="200"\n               scheme="https" secure="true" SSLEnabled="true"\n               keystoreFile="/opt/tomcat/ssl/sslKey.jks" keystorePass="instar"\n               clientAuth="false" sslProtocol="TLS"/>\n')),(0,o.kt)("p",null,"Open the define port - default ",(0,o.kt)("inlineCode",{parentName:"p"},"8443")," - inside your firewall and restart your server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ufw allow 8443/tcp\nservice tomcat restart\n")),(0,o.kt)("p",null,"And visit the dashboard on ",(0,o.kt)("inlineCode",{parentName:"p"},"https://192.168.2.111:8443/"),"."),(0,o.kt)("h3",{id:"enforcing-encryption"},"Enforcing Encryption"),(0,o.kt)("p",null,"Now all web apps are accessible via http on port 8080 and https on port 8443. If you want to enforce traffic for the management app to go through https you can edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"web.xml")," file of the application. Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"user-data-constraint")," tag and set the transport to ",(0,o.kt)("strong",{parentName:"p"},"CONFIDENTIAL"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- nano /opt/tomcat/apache-tomcat-9.0.41/webapps/manager/WEB-INF/web.xml --\x3e\n\n<security-constraint>\n    <web-resource-collection>\n      <web-resource-name>HTML Manager interface (for humans)</web-resource-name>\n      <url-pattern>/html/*</url-pattern>\n    </web-resource-collection>\n    <auth-constraint>\n       <role-name>manager-gui</role-name>\n    </auth-constraint>\n    <user-data-constraint>\n      <transport-guarantee>CONFIDENTIAL</transport-guarantee>\n    </user-data-constraint>\n  </security-constraint>\n")),(0,o.kt)("h2",{id:"virtual-hosts"},"Virtual Hosts"),(0,o.kt)("h3",{id:"creating-a-virtual-host"},"Creating a Virtual Host"),(0,o.kt)("p",null,"To serve multiple web sites from our server we first create the following folder structure inside the root of the Tomcat install dir:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"virtual-hosts\n\u251c\u2500\u2500 host1\n\u2502  \u2514\u2500\u2500 ROOT\n\u251c\u2500\u2500 host2\n\u2502  \u2514\u2500\u2500 ROOT\n\u2514\u2500\u2500 host3\n   \u2514\u2500\u2500 ROOT\n")),(0,o.kt)("p",null,"Each ",(0,o.kt)("strong",{parentName:"p"},"ROOT")," folder will hold the content for one of the web apps ",(0,o.kt)("inlineCode",{parentName:"p"},"host1")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"host3"),". Now we need to tell Tomcat where to find our apps. The ",(0,o.kt)("strong",{parentName:"p"},"Host")," directory currently only points to the ",(0,o.kt)("inlineCode",{parentName:"p"},"webapps")," folder - let's add our virtual host below that entry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- nano /opt/tomcat/apache-tomcat-9.0.41/conf/server.xml --\x3e\n\n<Host name="localhost"  appBase="webapps"\n      unpackWARs="true" autoDeploy="true">\n\n      <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"\n          prefix="localhost_access_log" suffix=".txt"\n          pattern="%h %l %u %t &quot;%r&quot; %s %b" />\n\n</Host>\n\n<Host name="virtual-host1.com"  appBase="virtual-hosts/host1"\n    unpackWARs="true" autoDeploy="true" />\n\n<Host name="virtual-host2.com"  appBase="virtual-hosts/host2"\n    unpackWARs="true" autoDeploy="true" />\n\n<Host name="virtual-host3.com"  appBase="virtual-hosts/host3"\n    unpackWARs="true" autoDeploy="true" />\n')),(0,o.kt)("p",null,"For testing we can now add a hello-world to each ",(0,o.kt)("strong",{parentName:"p"},"ROOT")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<%@ page language="java" contentType="text/html; charset=ISO-8859-1"\npageEncoding="ISO-8859-1"%>\n\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n<html>\n  <head>\n    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n    <title>Tomcat Boilerplate</title>\n  </head>\n  <body>\n    <h1>Hello from Virtual Host 1</h1>\n    <h3>Virtual Host Address: <%=request.getRequestURL().toString() %></h3>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"To test our settings we need to add the 3 domains to our ",(0,o.kt)("inlineCode",{parentName:"p"},"host")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"192.168.2.111  virtual-host1.com\n192.168.2.111  virtual-host2.com\n192.168.2.111  virtual-host3.com\n")),(0,o.kt)("p",null,"Now restart your server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"service tomcat restart\n")),(0,o.kt)("p",null,"And you will be able to access your virtual hosts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://virtual-host1.com:8443/\nhttps://virtual-host2.com:8443/\nhttps://virtual-host3.com:8443/\n")))}u.isMDXComponent=!0},34671:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-dbec03b1535301c8b293ac3087af0dd4.jpg"}}]);