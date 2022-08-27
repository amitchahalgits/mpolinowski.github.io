"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[15774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:7030,slug:"2021-11-15",title:"Introduction into FB Prophet",authors:"mpolinowski",tags:["Machine Learning","Python"]},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2021-11-15--facebook-prophet-introduction/index",id:"IoT-and-Machine-Learning/ML/2021-11-15--facebook-prophet-introduction/index",title:"Introduction into FB Prophet",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-15--facebook-prophet-introduction/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-15--facebook-prophet-introduction",slug:"/IoT-and-Machine-Learning/ML/2021-11-15--facebook-prophet-introduction/2021-11-15",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-15--facebook-prophet-introduction/2021-11-15",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-15--facebook-prophet-introduction/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:7030,frontMatter:{sidebar_position:7030,slug:"2021-11-15",title:"Introduction into FB Prophet",authors:"mpolinowski",tags:["Machine Learning","Python"]},sidebar:"tutorialSidebar",previous:{title:"OpenCV and Images",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-01--opencv-with-images/2021-12-01"},next:{title:"Tensorflow.js React App",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-14--tensorflow-model-for-tfjs/2021-11-14"}},p={},s=[{value:"Working with multiple Python Versions on Arch Linux",id:"working-with-multiple-python-versions-on-arch-linux",level:2},{value:"Setting up an Virtual Environment",id:"setting-up-an-virtual-environment",level:3},{value:"Installation",id:"installation",level:3},{value:"Jupyter Notebook",id:"jupyter-notebook",level:2},{value:"Importing Data",id:"importing-data",level:2},{value:"Using Prophet",id:"using-prophet",level:2},{value:"Fit a Model",id:"fit-a-model",level:3},{value:"Make Prediction",id:"make-prediction",level:3},{value:"Model Performance",id:"model-performance",level:3}],d={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shenzhen, China",src:n(67203).Z,width:"2385",height:"825"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#working-with-multiple-python-versions-on-arch-linux"},"Working with multiple Python Versions on Arch Linux"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-an-virtual-environment"},"Setting up an Virtual Environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation"},"Installation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#jupyter-notebook"},"Jupyter Notebook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#importing-data"},"Importing Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-prophet"},"Using Prophet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fit-a-model"},"Fit a Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#make-prediction"},"Make Prediction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model-performance"},"Model Performance"))))),(0,r.kt)("h2",{id:"working-with-multiple-python-versions-on-arch-linux"},"Working with multiple Python Versions on Arch Linux"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Issues with PyStan")," cannot get it - as a FBProphet dependency - installed on ",(0,r.kt)("strong",{parentName:"p"},"Python v3.9"),". So I had to add an older version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S yay\nyay -S python37\n")),(0,r.kt)("p",null,"Verify that you can use it - and your main version is not broken:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python --version\nPython 3.9.7\n\npython3.7 --version\nPython 3.7.12\n")),(0,r.kt)("h3",{id:"setting-up-an-virtual-environment"},"Setting up an Virtual Environment"),(0,r.kt)("p",null,"Create a virtual environment using the Python version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3.7 -m venv venv\nsource venv/bin/activate\n")),(0,r.kt)("p",null,"Verify that you get the older version from inside the environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python --version\nPython 3.7.12\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"I created a dependency file to install everything in one go - but this would install the incorrect version of PyStan for FBProphet. Just pre-install the correct version by hand and the Prophet installer will skip this step and continue it's work:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pystan==2.19.1.1\n")),(0,r.kt)("p",null,"Since I am going to work in a jupyter notebook I also need to install and to make some preparation to have it use the old version of Python:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install ipykernel\npython3.7 -m ipykernel install --user --name=prophet\n")),(0,r.kt)("p",null,"Now I can create the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies.txt")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"jupyter\npandas\nplotly\nmatplotlib\nfbprophet\n")),(0,r.kt)("p",null,"And install it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r dependencies.txt\n")),(0,r.kt)("p",null,"Success! Getting to work now :)"),(0,r.kt)("h2",{id:"jupyter-notebook"},"Jupyter Notebook"),(0,r.kt)("p",null,"Start the environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"jupyter notebook\n")),(0,r.kt)("p",null,"And create a new notebook using the iPyKernel created earlier:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Introduction into FB Prophet",src:n(92757).Z,width:"1152",height:"200"})),(0,r.kt)("p",null,"Now I can check if my environment actually works by importing all the libraries I am going to need into my notebook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nimport matplotlib.pyplot as pp\nfrom fbprophet import Prophet\nfrom fbprophet.diagnostics import cross_validation\nfrom fbprophet.diagnostics import performance_metrics\nfrom fbprophet.plot import plot_cross_validation_metric\n")),(0,r.kt)("p",null,"When this cell runs without errors - you are good to go!"),(0,r.kt)("h2",{id:"importing-data"},"Importing Data"),(0,r.kt)("p",null,"I want to use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ecdc.europa.eu/en/publications-data/data-daily-new-cases-covid-19-eueea-country"},"Data on the daily number of new reported COVID-19 cases and deaths by EU/EEA country"),". I extracted countries of interest from the available Excel file and saved them into ",(0,r.kt)("strong",{parentName:"p"},"data/*.csv")," files. I can import them into the notebook with:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Introduction into FB Prophet",src:n(36179).Z,width:"1055",height:"442"})),(0,r.kt)("p",null,"I brought in all columns into the Panda data frame. But for now I want to concentrate only on the mortality rate of covid - how many people have died from this disease that has changed all of our life as a percentage to the entire population of the country:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Introduction into FB Prophet",src:n(54543).Z,width:"1065",height:"668"})),(0,r.kt)("p",null,"Prophet requires us to rename the columns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Rename date and value column names for Facebook Prophet\ndf.rename(columns = {\n    "dateRep": "ds",\n    "MortPercentage": "y"\n}, inplace = True)\n')),(0,r.kt)("p",null,"And we can take a look at our data by plotting it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pp.style.use("ggplot")\ngraph = df.set_index("ds").plot(figsize=(20,10))\ngraph.set_title("Relative Mortality - COVID19")\ngraph.set_xlabel("Date")\ngraph.set_ylabel("Death rel. to Population [%]")\npp.show()\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Introduction into FB Prophet",src:n(85025).Z,width:"981",height:"499"})),(0,r.kt)("p",null,"The data is almost a flat line for most of the pandemic with a stark increase at the beginning of 2022 (delayed deaths after the holidays? Early Omicron effect?). And it looks identical to the graph I am getting for all the EU countries I tested. It is not ideal to train a prediction model on."),(0,r.kt)("p",null,"So I added a column to my data where I added up all deaths and re-plotted:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Introduction into FB Prophet",src:n(99117).Z,width:"995",height:"499"})),(0,r.kt)("p",null,"Now I can see a steady increase. There is still this explosion at the end that will throw off the prediction model. But let's see what Prophet does with this data set."),(0,r.kt)("h2",{id:"using-prophet"},"Using Prophet"),(0,r.kt)("h3",{id:"fit-a-model"},"Fit a Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Fit a model with Prophet\nINTERVAL_WIDTH = 0.9\nmodel = Prophet(interval_width = INTERVAL_WIDTH,\n                daily_seasonality=True)\n\nmodel.fit(df)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Iter      log prob        ||dx||      ||grad||       alpha      alpha0  # evals  Notes \n      99       724.378    0.00718031       139.315      0.3324           1      135   \n    Iter      log prob        ||dx||      ||grad||       alpha      alpha0  # evals  Notes \n     124       725.949   0.000456015       117.735   3.512e-06       0.001      214  LS failed, Hessian reset \n     187       727.661   0.000866116        167.82   1.014e-05       0.001      346  LS failed, Hessian reset \n     199       727.942    0.00199099       72.1614           1           1      363   \n    Iter      log prob        ||dx||      ||grad||       alpha      alpha0  # evals  Notes \n     214       728.179   0.000101734       24.5358   2.882e-06       0.001      421  LS failed, Hessian reset \n     256         728.5   0.000721259       107.772   7.301e-06       0.001      510  LS failed, Hessian reset \n     299        728.54   5.93182e-06       68.6047           1           1      566   \n    Iter      log prob        ||dx||      ||grad||       alpha      alpha0  # evals  Notes \n     317       728.541   1.73007e-05       56.2555   1.914e-07       0.001      635  LS failed, Hessian reset \n     338       728.542   7.27887e-08       37.9324      0.2247           1      671   \nOptimization terminated normally: \n  Convergence detected: relative gradient magnitude is below tolerance\n")),(0,r.kt)("h3",{id:"make-prediction"},"Make Prediction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Make predictions with Prophet\nNUMBER_OF_PERIODS = 100\npred_df = model.make_future_dataframe(periods = NUMBER_OF_PERIODS)\n\nprediction = model.predict(pred_df)\npred_100_days = prediction[["yhat"]].iloc[[-1]]\npred_100_days\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"yhat"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"411"),(0,r.kt)("td",{parentName:"tr",align:null},"-849.961226")))),(0,r.kt)("h3",{id:"model-performance"},"Model Performance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Analyze model performance\ndf_xeval = cross_validation(model,\n                            initial="100 days",\n                            period="50 days",\n                            horizon="10 days")\ndf_xeval\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Introduction into FB Prophet",src:n(7165).Z,width:"1011",height:"302"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"## mean-square-error(mse),root-mean-square-error(rmse),\n## model-absolute-error(mae),mean-absolute-percentage-error(mape),\n## median-absolute-percentage-error(mdape), coverage\ndf_perf = performance_metrics(df_xeval)\ndf_perf\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Introduction into FB Prophet",src:n(10574).Z,width:"1065",height:"441"})),(0,r.kt)("p",null,"Print different error messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'plot_cross_validation_metric(df_xeval, metric="mse")\n\nplot_cross_validation_metric(df_xeval, metric="rmse")\n\nplot_cross_validation_metric(df_xeval, metric="mae")\n\nplot_cross_validation_metric(df_xeval, metric="mape")\n\nplot_cross_validation_metric(df_xeval, metric="mdape")\n\nplot_cross_validation_metric(df_xeval, metric="coverage")\n')))}c.isMDXComponent=!0},92757:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyter_prophet_01-90f982173a6ff0805072ef3fd87cede8.png"},36179:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyter_prophet_02-ee513062f98df7b0a1f0abcb098ce37f.png"},54543:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyter_prophet_03-4e8b0dbdb2861c0738990643a6d2f3ad.png"},85025:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyter_prophet_04-95596acf6e6ca75cf20e199d6df5c7e7.png"},99117:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyter_prophet_05-fc65cc18812c89c03e2d6edd474847f7.png"},7165:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyter_prophet_06-d9b3ca3bea2a520a23adf5a728127047.png"},10574:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jupyter_prophet_07-f6040444cf64f34879be7faca4ea6140.png"},67203:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-08bdf1674ecb1534111947a5d55c314a.jpg"}}]);