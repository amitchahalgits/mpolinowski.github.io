"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[48417],{3905:(t,a,e)=>{e.d(a,{Zo:()=>m,kt:()=>g});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=n.createContext({}),p=function(t){var a=n.useContext(o),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},m=function(t){var a=p(t.components);return n.createElement(o.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(e),g=l,c=u["".concat(o,".").concat(g)]||u[g]||s[g]||r;return e?n.createElement(c,i(i({ref:a},m),{},{components:e})):n.createElement(c,i({ref:a},m))}));function g(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=u;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var p=2;p<r;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},67888:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=e(87462),l=(e(67294),e(3905));const r={sidebar_position:4470,slug:"2023-04-12",title:"tStochastic Neighbor Embedding (t-SNE)",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"t-distributed stochastic neighbor embedding (t-SNE) is a statistical method for visualizing high-dimensional data by giving each datapoint a location in a two or three-dimensional map."},i=void 0,d={unversionedId:"IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/index",id:"IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/index",title:"tStochastic Neighbor Embedding (t-SNE)",description:"t-distributed stochastic neighbor embedding (t-SNE) is a statistical method for visualizing high-dimensional data by giving each datapoint a location in a two or three-dimensional map.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding",slug:"/IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/2023-04-12",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/2023-04-12",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4470,frontMatter:{sidebar_position:4470,slug:"2023-04-12",title:"tStochastic Neighbor Embedding (t-SNE)",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"t-distributed stochastic neighbor embedding (t-SNE) is a statistical method for visualizing high-dimensional data by giving each datapoint a location in a two or three-dimensional map."},sidebar:"tutorialSidebar",previous:{title:"Multidimensional Scaling (MDS)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/2023-04-13"},next:{title:"Locally Linear Embedding (LLE)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/2023-04-11"}},o={},p=[{value:"Dataset",id:"dataset",level:2},{value:"RAW Data Analysis",id:"raw-data-analysis",level:2},{value:"2-Dimensional Plot",id:"2-dimensional-plot",level:3},{value:"3-Dimensional Plot",id:"3-dimensional-plot",level:3},{value:"Normalized Data Analysis",id:"normalized-data-analysis",level:2},{value:"2-Dimensional Plot",id:"2-dimensional-plot-1",level:3},{value:"3-Dimensional Plot",id:"3-dimensional-plot-1",level:3},{value:"Standardized Data Analysis",id:"standardized-data-analysis",level:2},{value:"2-Dimensional Plot",id:"2-dimensional-plot-2",level:3},{value:"3-Dimensional Plot",id:"3-dimensional-plot-2",level:3}],m={toc:p};function s(t){let{components:a,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Victoria Harbour, Hongkong",src:e(63531).Z,width:"2385",height:"858"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dimensionality-reduction"},"Dimensionality Reduction"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dataset"},"Dataset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#raw-data-analysis"},"RAW Data Analysis"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-dimensional-plot"},"2-Dimensional Plot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-dimensional-plot"},"3-Dimensional Plot")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#normalized-data-analysis"},"Normalized Data Analysis"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-dimensional-plot-1"},"2-Dimensional Plot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-dimensional-plot-1"},"3-Dimensional Plot")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#standardized-data-analysis"},"Standardized Data Analysis"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-dimensional-plot-2"},"2-Dimensional Plot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-dimensional-plot-2"},"3-Dimensional Plot"))))))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/tstochastic-neighbor-embedding"},"Github Repository")),(0,l.kt)("p",null,"t-distributed stochastic neighbor embedding (t-SNE) is a statistical method for visualizing high-dimensional data by giving each datapoint a location in a two or three-dimensional map."),(0,l.kt)("h1",{id:"dimensionality-reduction"},"Dimensionality Reduction"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/manifold.html"},"Manifold learning")," is an approach to non-linear dimensionality reduction. Algorithms for this task are based on the idea that the dimensionality of many data sets is only artificially high."),(0,l.kt)("p",null,"High-dimensional datasets can be very difficult to visualize. While data in two or three dimensions can be plotted to show the inherent structure of the data, equivalent high-dimensional plots are much less intuitive. To aid visualization of the structure of a dataset, the dimension must be reduced in some way."),(0,l.kt)("p",null,"The simplest way to accomplish this dimensionality reduction is by taking a random projection of the data. Though this allows some degree of visualization of the data structure, the randomness of the choice leaves much to be desired. In a random projection, it is likely that the more interesting structure within the data will be lost."),(0,l.kt)("p",null,"To address this concern, a number of supervised and unsupervised linear dimensionality reduction frameworks have been designed, such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-09-principal-component-analysis/2023-04-09"},"Principal Component Analysis (PCA)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/2023-04-11"},"Locally Linear Embedding (LLE)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/2023-04-12"},"tStochastic Neighbor Embedding (t-SNE)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/2023-04-13"},"Multidimensional Scaling (MDS)"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2009.10301"},"Stochastic Neighbor Embedding with Gaussian and Student-t Distributions: Tutorial and Survey"),": Stochastic Neighbor Embedding (SNE) is a manifold learning and dimensionality reduction method with a probabilistic approach. In SNE, every point is consider to be the neighbor of all other points with some probability and this probability is tried to be preserved in the embedding space. SNE considers Gaussian distribution for the probability in both the input and embedding spaces. However, t-SNE uses the Student-t and Gaussian distributions in these spaces, respectively. In this tutorial and survey paper, we explain SNE, symmetric SNE, t-SNE (or Cauchy-SNE), and t-SNE with general degrees of freedom. We also cover the out-of-sample extension and acceleration for these methods.\n",(0,l.kt)("inlineCode",{parentName:"p"},"Benyamin Ghojogh"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Ali Ghodsi"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Fakhri Karray"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Mark Crowley"))),(0,l.kt)("h2",{id:"dataset"},"Dataset"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/243766527_A_multivariate_study_of_variation_in_two_species_of_rock_crab_of_genus_Leptograpsus"},"A multivariate study of variation in two species of rock crab of genus Leptograpsus"),": A multivariate approach has been used to study morphological variation in the blue and orange-form species of rock crab of the genus Leptograpsus. Objective criteria for the identification of the two species are established, based on the following characters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SP"),": Species (Blue or Orange)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sex"),": Male or Female"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FL"),": Width of the frontal region of the carapace; "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RW"),": Width of the posterior region of the carapace (rear width); "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CL"),": Length of the carapace along the midline;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CW"),": Maximum width of the carapace; "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"BD"),": and the depth of the body;")),(0,l.kt)("p",null,"The dataset can be ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tercen/crabs_dataset"},"downloaded from Github"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(see introduction in: ",(0,l.kt)("a",{parentName:"em",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-04-09-principal-component-analysis/2023-04-09"},"Principal Component Analysis PCA"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"raw_data = pd.read_csv('data/A_multivariate_study_of_variation_in_two_species_of_rock_crab_of_genus_Leptograpsus.csv')\n\ndata = raw_data.rename(columns={\n    'sp' : 'Species',\n    'sex' : 'Sex',\n    'index' : 'Index',\n    'FL' : 'Frontal Lobe',\n    'RW' : 'Rear Width',\n    'CL' : 'Carapace Midline',\n    'CW' : 'Maximum Width',\n    'BD' : 'Body Depth'\n})\n\ndata['Species'] = data['Species'].map({'B':'Blue', 'O':'Orange'})\ndata['Sex'] = data['Sex'].map({'M':'Male', 'F':'Female'})\n\ndata.head(5)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Species"),(0,l.kt)("th",{parentName:"tr",align:null},"Sex"),(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"8.1"),(0,l.kt)("td",{parentName:"tr",align:null},"6.7"),(0,l.kt)("td",{parentName:"tr",align:null},"16.1"),(0,l.kt)("td",{parentName:"tr",align:null},"19.0"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8.8"),(0,l.kt)("td",{parentName:"tr",align:null},"7.7"),(0,l.kt)("td",{parentName:"tr",align:null},"18.1"),(0,l.kt)("td",{parentName:"tr",align:null},"20.8"),(0,l.kt)("td",{parentName:"tr",align:null},"7.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"9.2"),(0,l.kt)("td",{parentName:"tr",align:null},"7.8"),(0,l.kt)("td",{parentName:"tr",align:null},"19.0"),(0,l.kt)("td",{parentName:"tr",align:null},"22.4"),(0,l.kt)("td",{parentName:"tr",align:null},"7.7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"9.6"),(0,l.kt)("td",{parentName:"tr",align:null},"7.9"),(0,l.kt)("td",{parentName:"tr",align:null},"20.1"),(0,l.kt)("td",{parentName:"tr",align:null},"23.1"),(0,l.kt)("td",{parentName:"tr",align:null},"8.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"9.8"),(0,l.kt)("td",{parentName:"tr",align:null},"8.0"),(0,l.kt)("td",{parentName:"tr",align:null},"20.3"),(0,l.kt)("td",{parentName:"tr",align:null},"23.0"),(0,l.kt)("td",{parentName:"tr",align:null},"8.2")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# generate a class variable for all 4 classes\ndata['Class'] = data.Species + data.Sex\n\nprint(data['Class'].value_counts())\ndata.head(1)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BlueMale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50")),(0,l.kt)("li",{parentName:"ul"},"BlueFemale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50")),(0,l.kt)("li",{parentName:"ul"},"OrangeMale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50")),(0,l.kt)("li",{parentName:"ul"},"OrangeFemale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"species"),(0,l.kt)("th",{parentName:"tr",align:null},"sex"),(0,l.kt)("th",{parentName:"tr",align:null},"index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"8.1"),(0,l.kt)("td",{parentName:"tr",align:null},"6.7"),(0,l.kt)("td",{parentName:"tr",align:null},"16.1"),(0,l.kt)("td",{parentName:"tr",align:null},"19.0"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"data_columns = ['Frontal Lobe', 'Rear Width', 'Carapace Midline', 'Maximum Width', 'Body Depth']\n")),(0,l.kt)("h2",{id:"raw-data-analysis"},"RAW Data Analysis"),(0,l.kt)("h3",{id:"2-dimensional-plot"},"2-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# reduce data to 2 dimensions\nno_components = 2\nno_iter = 2000\nperplexity = 10\ninit = 'random'\n\ndata_tsne = TSNE(\n    n_components=no_components,\n    perplexity=perplexity,\n    n_iter=no_iter,\n    init=init).fit_transform(data[data_columns])\n\n# add columns to original dataset\ndata[['TSNE1', 'TSNE2']] = data_tsne\n\ndata.tail()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Species"),(0,l.kt)("th",{parentName:"tr",align:null},"Sex"),(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"TSNE1"),(0,l.kt)("th",{parentName:"tr",align:null},"TSNE2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"195"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"46"),(0,l.kt)("td",{parentName:"tr",align:null},"21.4"),(0,l.kt)("td",{parentName:"tr",align:null},"18.0"),(0,l.kt)("td",{parentName:"tr",align:null},"41.2"),(0,l.kt)("td",{parentName:"tr",align:null},"46.2"),(0,l.kt)("td",{parentName:"tr",align:null},"18.7"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"39.232815"),(0,l.kt)("td",{parentName:"tr",align:null},"-1.699857")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"196"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"47"),(0,l.kt)("td",{parentName:"tr",align:null},"21.7"),(0,l.kt)("td",{parentName:"tr",align:null},"17.1"),(0,l.kt)("td",{parentName:"tr",align:null},"41.7"),(0,l.kt)("td",{parentName:"tr",align:null},"47.2"),(0,l.kt)("td",{parentName:"tr",align:null},"19.6"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"40.689430"),(0,l.kt)("td",{parentName:"tr",align:null},"0.257805")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"197"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"48"),(0,l.kt)("td",{parentName:"tr",align:null},"21.9"),(0,l.kt)("td",{parentName:"tr",align:null},"17.2"),(0,l.kt)("td",{parentName:"tr",align:null},"42.6"),(0,l.kt)("td",{parentName:"tr",align:null},"47.4"),(0,l.kt)("td",{parentName:"tr",align:null},"19.5"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"41.692440"),(0,l.kt)("td",{parentName:"tr",align:null},"1.029953")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"198"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"49"),(0,l.kt)("td",{parentName:"tr",align:null},"22.5"),(0,l.kt)("td",{parentName:"tr",align:null},"17.2"),(0,l.kt)("td",{parentName:"tr",align:null},"43.0"),(0,l.kt)("td",{parentName:"tr",align:null},"48.7"),(0,l.kt)("td",{parentName:"tr",align:null},"19.8"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"42.851078"),(0,l.kt)("td",{parentName:"tr",align:null},"2.015537")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"199"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"23.1"),(0,l.kt)("td",{parentName:"tr",align:null},"20.2"),(0,l.kt)("td",{parentName:"tr",align:null},"46.2"),(0,l.kt)("td",{parentName:"tr",align:null},"52.5"),(0,l.kt)("td",{parentName:"tr",align:null},"21.1"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"49.569035"),(0,l.kt)("td",{parentName:"tr",align:null},"3.964387")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"fig = plt.figure(figsize=(8,8))\nplt.title('RAW Data Analysis')\nsns.scatterplot(x='TSNE1', y='TSNE2', hue='Class', data=data)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tStochastic Neighbor Embedding (t-SNE)",src:e(84231).Z,width:"702",height:"701"})),(0,l.kt)("h3",{id:"3-dimensional-plot"},"3-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# reduce data to 3 dimensions\nno_components = 3\nno_iter = 2000\nperplexity = 10\ninit = 'random'\n\ndata_tsne = TSNE(\n    n_components=no_components,\n    perplexity=perplexity,\n    n_iter=no_iter,\n    init=init).fit_transform(data[data_columns])\n\n# add columns to original dataset\ndata[['TSNE1', 'TSNE2', 'TSNE3']] = data_tsne\n\ndata.tail()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Species"),(0,l.kt)("th",{parentName:"tr",align:null},"Sex"),(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"TSNE1"),(0,l.kt)("th",{parentName:"tr",align:null},"TSNE2"),(0,l.kt)("th",{parentName:"tr",align:null},"TSNE3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"195"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"46"),(0,l.kt)("td",{parentName:"tr",align:null},"21.4"),(0,l.kt)("td",{parentName:"tr",align:null},"18.0"),(0,l.kt)("td",{parentName:"tr",align:null},"41.2"),(0,l.kt)("td",{parentName:"tr",align:null},"46.2"),(0,l.kt)("td",{parentName:"tr",align:null},"18.7"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"-12.564007"),(0,l.kt)("td",{parentName:"tr",align:null},"4.956237"),(0,l.kt)("td",{parentName:"tr",align:null},"-2.111369")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"196"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"47"),(0,l.kt)("td",{parentName:"tr",align:null},"21.7"),(0,l.kt)("td",{parentName:"tr",align:null},"17.1"),(0,l.kt)("td",{parentName:"tr",align:null},"41.7"),(0,l.kt)("td",{parentName:"tr",align:null},"47.2"),(0,l.kt)("td",{parentName:"tr",align:null},"19.6"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"-13.217113"),(0,l.kt)("td",{parentName:"tr",align:null},"5.572454"),(0,l.kt)("td",{parentName:"tr",align:null},"-2.733016")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"197"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"48"),(0,l.kt)("td",{parentName:"tr",align:null},"21.9"),(0,l.kt)("td",{parentName:"tr",align:null},"17.2"),(0,l.kt)("td",{parentName:"tr",align:null},"42.6"),(0,l.kt)("td",{parentName:"tr",align:null},"47.4"),(0,l.kt)("td",{parentName:"tr",align:null},"19.5"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"-13.523155"),(0,l.kt)("td",{parentName:"tr",align:null},"5.879868"),(0,l.kt)("td",{parentName:"tr",align:null},"-2.971745")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"198"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"49"),(0,l.kt)("td",{parentName:"tr",align:null},"22.5"),(0,l.kt)("td",{parentName:"tr",align:null},"17.2"),(0,l.kt)("td",{parentName:"tr",align:null},"43.0"),(0,l.kt)("td",{parentName:"tr",align:null},"48.7"),(0,l.kt)("td",{parentName:"tr",align:null},"19.8"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"-13.959590"),(0,l.kt)("td",{parentName:"tr",align:null},"6.371356"),(0,l.kt)("td",{parentName:"tr",align:null},"-3.287457")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"199"),(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"Female"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"23.1"),(0,l.kt)("td",{parentName:"tr",align:null},"20.2"),(0,l.kt)("td",{parentName:"tr",align:null},"46.2"),(0,l.kt)("td",{parentName:"tr",align:null},"52.5"),(0,l.kt)("td",{parentName:"tr",align:null},"21.1"),(0,l.kt)("td",{parentName:"tr",align:null},"OrangeFemale"),(0,l.kt)("td",{parentName:"tr",align:null},"-15.850336"),(0,l.kt)("td",{parentName:"tr",align:null},"8.684433"),(0,l.kt)("td",{parentName:"tr",align:null},"-3.833084")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class_colours = {\n    'BlueMale': '#0027c4', #blue\n    'BlueFemale': '#f18b0a', #orange\n    'OrangeMale': '#0af10a', # green\n    'OrangeFemale': '#ff1500', #red\n}\n\ncolours = data['Class'].apply(lambda x: class_colours[x])\n\nx=data.TSNE1\ny=data.TSNE2\nz=data.TSNE3\n\nfig = plt.figure(figsize=(10,10))\nplt.title('RAW Data Analysis')\nax = fig.add_subplot(projection='3d')\n\nax.scatter(xs=x, ys=y, zs=z, s=50, c=colours)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tStochastic Neighbor Embedding (t-SNE)",src:e(35405).Z,width:"837",height:"836"})),(0,l.kt)("h2",{id:"normalized-data-analysis"},"Normalized Data Analysis"),(0,l.kt)("h3",{id:"2-dimensional-plot-1"},"2-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# normalize the data columns\n# values have to be between 0-1\ndata_norm = data.copy()\ndata_norm[data_columns] = MinMaxScaler().fit_transform(data[data_columns])\n\ndata_norm.describe()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# reduce data to 2 dimensions\nno_components = 2\nno_iter = 1000\nperplexity = 10\ninit = 'random'\n\ndata_tsne = TSNE(\n    n_components=no_components,\n    perplexity=perplexity,\n    n_iter=no_iter,\n    init=init).fit_transform(data_norm[data_columns])\n\n# add columns to original dataset\ndata_norm[['TSNE1', 'TSNE2']] = data_tsne\n\ndata_norm.tail()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"fig = plt.figure(figsize=(8,8))\nplt.title('Normalized Data Analysis')\nsns.scatterplot(x='TSNE1', y='TSNE2', hue='Class', data=data_norm)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tStochastic Neighbor Embedding (t-SNE)",src:e(50639).Z,width:"698",height:"701"})),(0,l.kt)("h3",{id:"3-dimensional-plot-1"},"3-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# reduce data to 3 dimensions\nno_components = 3\nno_iter = 1000\nperplexity = 10\ninit = 'random'\n\ndata_tsne = TSNE(\n    n_components=no_components,\n    perplexity=perplexity,\n    n_iter=no_iter,\n    init=init).fit_transform(data_norm[data_columns])\n\n# add columns to original dataset\ndata_norm[['TSNE1', 'TSNE2', 'TSNE3']] = data_tsne\n\ndata_norm.tail()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class_colours = {\n    'BlueMale': '#0027c4', #blue\n    'BlueFemale': '#f18b0a', #orange\n    'OrangeMale': '#0af10a', # green\n    'OrangeFemale': '#ff1500', #red\n}\n\ncolours = data_norm['Class'].apply(lambda x: class_colours[x])\n\nx=data_norm.TSNE1\ny=data_norm.TSNE2\nz=data_norm.TSNE3\n\nfig = plt.figure(figsize=(10,8))\nplt.title('Normalized Data Analysis')\nax = fig.add_subplot(projection='3d')\n\nax.scatter(xs=x, ys=y, zs=z, s=50, c=colours)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tStochastic Neighbor Embedding (t-SNE)",src:e(36319).Z,width:"837",height:"682"})),(0,l.kt)("h2",{id:"standardized-data-analysis"},"Standardized Data Analysis"),(0,l.kt)("h3",{id:"2-dimensional-plot-2"},"2-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# standardize date to mean of 0 and std-dev of 1\ndata_std = data.copy()\ndata_std[data_columns] = StandardScaler().fit_transform(data[data_columns])\n\ndata_std.describe()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# reduce data to 2 dimensions\nno_components = 2\nno_iter = 1000\nperplexity = 10\ninit = 'random'\n\ndata_tsne = TSNE(\n    n_components=no_components,\n    perplexity=perplexity,\n    n_iter=no_iter,\n    init=init).fit_transform(data_std[data_columns])\n\n# add columns to original dataset\ndata_std[['TSNE1', 'TSNE2']] = data_tsne\n\ndata_std.tail()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"fig = plt.figure(figsize=(12,8))\nplt.title('Standardized Data Analysis')\nsns.scatterplot(x='TSNE1', y='TSNE2', hue='Class', data=data_std)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tStochastic Neighbor Embedding (t-SNE)",src:e(59242).Z,width:"1008",height:"701"})),(0,l.kt)("h3",{id:"3-dimensional-plot-2"},"3-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# reduce data to 3 dimensions\nno_components = 3\nno_iter = 1000\nperplexity = 10\ninit = 'random'\n\ndata_tsne = TSNE(\n    n_components=no_components,\n    perplexity=perplexity,\n    n_iter=no_iter,\n    init=init).fit_transform(data_std[data_columns])\n\n# add columns to original dataset\ndata_std[['TSNE1', 'TSNE2', 'TSNE3']] = data_tsne\n\ndata_std.tail()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class_colours = {\n    'BlueMale': '#0027c4', #blue\n    'BlueFemale': '#f18b0a', #orange\n    'OrangeMale': '#0af10a', # green\n    'OrangeFemale': '#ff1500', #red\n}\n\ncolours = data_std['Class'].apply(lambda x: class_colours[x])\n\nx=data_std.TSNE1\ny=data_std.TSNE2\nz=data_std.TSNE3\n\nfig = plt.figure(figsize=(10,8))\nplt.title('Standardized Data Analysis')\nax = fig.add_subplot(projection='3d')\n\nax.scatter(xs=x, ys=y, zs=z, s=50, c=colours)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tStochastic Neighbor Embedding (t-SNE)",src:e(55243).Z,width:"837",height:"682"})))}s.isMDXComponent=!0},63531:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-936fe81d44bf1beb4563551aafeb5788.jpg"},84231:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/tStochastic-Neighbor-Embedding_01-9cc89e4e6e08cb650897e0cbc8204916.png"},35405:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/tStochastic-Neighbor-Embedding_02-d8e0c08e1132afcf7d6e88efa5028ad5.png"},50639:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/tStochastic-Neighbor-Embedding_03-f52f844ebae8ffc318e9249c06c10945.png"},36319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/tStochastic-Neighbor-Embedding_04-ec22bca25e0e481a3547e4a00310b1dd.png"},59242:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/tStochastic-Neighbor-Embedding_05-32b1897c513587eb724332dcfd19c58d.png"},55243:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/tStochastic-Neighbor-Embedding_06-73a4e14218d0c8261c87b4e3d2fc361a.png"}}]);