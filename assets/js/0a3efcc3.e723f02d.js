"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[10349],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>u});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?t.createElement(h,o(o({ref:a},p),{},{components:n})):t.createElement(h,o({ref:a},p))}));function u(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96133:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(87462),i=(n(67294),n(3905));const r={sidebar_position:4700,slug:"2023-02-04",title:"Apache Airflow Data Pipelines",authors:"mpolinowski",tags:["Python","Machine Learning","Airflow"],description:"Airflow is a platform to author, schedule and monitor workflows."},o=void 0,l={unversionedId:"IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/index",id:"IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/index",title:"Apache Airflow Data Pipelines",description:"Airflow is a platform to author, schedule and monitor workflows.",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines",slug:"/IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/2023-02-04",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/2023-02-04",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Airflow",permalink:"/docs/tags/airflow"}],version:"current",sidebarPosition:4700,frontMatter:{sidebar_position:4700,slug:"2023-02-04",title:"Apache Airflow Data Pipelines",authors:"mpolinowski",tags:["Python","Machine Learning","Airflow"],description:"Airflow is a platform to author, schedule and monitor workflows."},sidebar:"tutorialSidebar",previous:{title:"Apache Airflow DAG Scheduling",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-05-apache-airflow-scheduler/2023-02-05"},next:{title:"Apache Airflow Introduction",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/2023-02-01"}},s={},c=[{value:"Setup",id:"setup",level:2},{value:"Model Training Pipeline (DAG)",id:"model-training-pipeline-dag",level:2},{value:"Airflow UI",id:"airflow-ui",level:3},{value:"Taskflow API",id:"taskflow-api",level:2},{value:"Dynamic Task Mappings",id:"dynamic-task-mappings",level:2}],p={toc:c};function d(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Guangzhou, China",src:n(38001).Z,width:"1061",height:"405"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setup"},"Setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#model-training-pipeline-dag"},"Model Training Pipeline (DAG)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#airflow-ui"},"Airflow UI")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#taskflow-api"},"Taskflow API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dynamic-task-mappings"},"Dynamic Task Mappings"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mpolinowski/apache-airflow-intro"},"Github Repository"))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"I am going to use the image I ",(0,i.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/2023-02-01"},"build earlier"),". But to be able to write and use my own data pipelines I need to mount a volume into the container so that the Python files on my host system become available to Airflow inside the running container. I can also create a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/airflow/blob/main/airflow/config_templates/default_airflow.cfg"},"default Airflow configuration file")," and mount it into place to be used by my container. So start by preparing those directories on my host:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /opt/airflow/dags\nsudo chown -R myuser /opt/airflow\n")),(0,i.kt)("p",null,"To get the latest configuration file I will first start the container without the configuration mount and have the file generated inside the container. Then I can copy it to my host system and modify it if needed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp airflow:/opt/airflow/airflow.cfg /opt/airflow/airflow.cfg\n")),(0,i.kt)("p",null,"Now I can start the container with all mounts in place:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -d -p 8080:8080 \\\n    --mount type=bind,source=/opt/airflow/airflow.cfg,target=/opt/airflow/airflow.cfg \\\n    --mount type=bind,source=/opt/airflow/dags,target=/opt/airflow/dags \\\n    --name airflow airflow-postgres\n")),(0,i.kt)("p",null,"Now every file I drop into ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/airflow/dags")," will be available inside the container."),(0,i.kt)("h2",{id:"model-training-pipeline-dag"},"Model Training Pipeline (DAG)"),(0,i.kt)("p",null,"This is an example of a trainings pipeline. We have a group of models that might perform well in the given task. We choose the model that gives us the highest accuracy and then perform a follow-up task based on whether or not the accuracy is acceptable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Model A                  Accuracy above Threshold\nModel B -> Best Model -> \nModel C                  Accuracy below Threshold\n")),(0,i.kt)("p",null,"Start by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"example_dag.py")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"dags")," directory - ",(0,i.kt)("strong",{parentName:"p"},"Note")," that it will take some time (defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"min_file_process_interval")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dag_dir_list_interval"),") before your DAG shows up in the Airflow UI, By default the ",(0,i.kt)("inlineCode",{parentName:"p"},"dags")," directory is scanned every ",(0,i.kt)("strong",{parentName:"p"},"5min")," and the webUI refreshes every ",(0,i.kt)("strong",{parentName:"p"},"30s")," - so worst case scenario five and a half minutes: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from airflow import DAG\nfrom airflow.operators.python import PythonOperator, BranchPythonOperator\nfrom airflow.operators.bash import BashOperator\n\nfrom datetime import datetime\nfrom random import randint\n\n# define functions to be run by airflow\n## simulate training accuracy metric\ndef _taining_model():\n    return randint(1,10)\n\n## evaluate accuracies and trigger follow-ups\ndef _best_model(ti):\n    ### get results from training runs\n    accuracies = ti.xcom_pull(task_ids=[\n        \'training_model_A\',\n        \'training_model_B\',\n        \'training_model_C\'\n    ])\n    ### find best accuracy\n    best_accuracy = max(accuracies)\n    ### trigger next step based on value\n    if (best_accuracy > 7):\n        return \'acc_passed\'\n    return \'acc_failed\'\n\n\n\nwith DAG("example_dag", start_date=datetime(2023,2,5), schedule="@daily", catchup=False, description="Training ML models A-C", tags=["modelA", "modelB", "modelC", "training"]) as dag:\n\n    training_model_A = PythonOperator(\n        task_id="training_model_A",\n        python_callable=_taining_model\n    )\n\n    training_model_B = PythonOperator(\n        task_id="training_model_B",\n        python_callable=_taining_model\n    )\n\n    training_model_C = PythonOperator(\n        task_id="training_model_C",\n        python_callable=_taining_model\n    )\n\n    choose_best_model = BranchPythonOperator(\n        task_id="choose_best_model",\n        python_callable=_best_model\n    )\n\n    acc_passed = BashOperator(\n        task_id="acc_passed",\n        bash_command="echo \'INFO :: Accuracy assessment PASSED minimum requirements\'"\n    )\n\n    acc_failed = BashOperator(\n        task_id="acc_failed",\n        bash_command="echo \'WARNING :: Accuracy assessment FAILED minimum requirements\'"\n    )\n\n    ## define task flow\n    [training_model_A, training_model_B, training_model_C] >> choose_best_model >> [acc_passed, acc_failed]\n')),(0,i.kt)("h3",{id:"airflow-ui"},"Airflow UI"),(0,i.kt)("p",null,"After a few minutes the flow finally shows up in my DAG list:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache Airflow Data Pipelines",src:n(31214).Z,width:"1129",height:"121"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache Airflow Data Pipelines",src:n(29818).Z,width:"1125",height:"598"})),(0,i.kt)("p",null,"And I can test-run it using the UI:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache Airflow Data Pipelines",src:n(18489).Z,width:"1124",height:"661"})),(0,i.kt)("p",null,"The colour-coding allows you to follow the execution of your flow in realtime in the case in the case below the models were evaluated and the best one passed the accuracy threshold:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache Airflow Data Pipelines",src:n(16386).Z,width:"1326",height:"578"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache Airflow Data Pipelines",src:n(38225).Z,width:"1336",height:"754"})),(0,i.kt)("h2",{id:"taskflow-api"},"Taskflow API"),(0,i.kt)("p",null,"If you write most of your DAGs using plain Python code rather than Operators, then the ",(0,i.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/2.1.4/tutorial_taskflow_api.html"},"TaskFlow API")," will make it much easier to author clean DAGs without extra boilerplate, all using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@task")," decorator."),(0,i.kt)("p",null,"TaskFlow takes care of moving inputs and outputs between your Tasks using XComs for you, as well as automatically calculating dependencies - when you call a TaskFlow function in your DAG file, rather than executing it, you will get an object representing the XCom for the result (an ",(0,i.kt)("inlineCode",{parentName:"p"},"XComArg"),"), that you can then use as inputs to downstream tasks or operators:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from airflow import DAG\nfrom airflow.decorators import task\nfrom airflow.operators.python import PythonOperator, BranchPythonOperator\nfrom airflow.operators.bash import BashOperator\n\nfrom datetime import datetime\nfrom random import randint\n\n\nwith DAG("example_dag", start_date=datetime(2023,2,5), schedule="@daily", catchup=False, description="Training ML models A-C", tags=["modelA", "modelB", "modelC", "training"]):\n\n    @task\n    ## simulate training accuracy metric\n    def training_model():\n        return randint(1,10)\n\n    @task.branch\n    ## evaluate accuracies and trigger follow-ups\n    def best_model(accuracies):\n        ### find best accuracy\n        best_accuracy = max(accuracies)\n        ### trigger next step based on value\n        if (best_accuracy > 7):\n            return \'acc_passed\'\n        return \'acc_failed\'\n\n    acc_passed = BashOperator(\n        task_id="acc_passed",\n        bash_command="echo \'INFO :: Accuracy assessment PASSED minimum requirements\'"\n    )\n\n    acc_failed = BashOperator(\n        task_id="acc_failed",\n        bash_command="echo \'WARNING :: Accuracy assessment FAILED minimum requirements\'"\n    )\n\n    best_model(training_model())\n')),(0,i.kt)("h2",{id:"dynamic-task-mappings"},"Dynamic Task Mappings"),(0,i.kt)("p",null,"Now we simplified our pipeline code. But we are now missing our three models A, B and C. They can be added back in using ",(0,i.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/2.5.1/authoring-and-scheduling/dynamic-task-mapping.html"},"Dynamic Task Mapping"),". Dynamic Task Mapping allows a way for a workflow to create a number of tasks at runtime based upon current data, rather than the DAG author having to know in advance how many tasks would be needed."),(0,i.kt)("p",null,"Instead of defining model training function as before (simulated by ",(0,i.kt)("inlineCode",{parentName:"p"},"randint(1,10)"),") we can no pass the accuracy results from an unspecified amount of models in and start the evaluation from there:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'with DAG("example_dag", start_date=datetime(2023,2,5), schedule="@daily", catchup=False, description="Training ML models A-C", tags=["training"]):\n\n    @task\n    ## simulate training accuracy metric\n    def training_model(accuracy):\n        return accuracy\n\n    @task.branch\n    ## evaluate accuracies and trigger follow-ups\n    def best_model(accuracies):\n        ### find best accuracy\n        best_accuracy = max(accuracies)\n        ### trigger next step based on value\n        if (best_accuracy > 7):\n            return \'acc_passed\'\n        return \'acc_failed\'\n\n    acc_passed = BashOperator(\n        task_id="acc_passed",\n        bash_command="echo \'INFO :: Accuracy assessment PASSED minimum requirements\'"\n    )\n\n    acc_failed = BashOperator(\n        task_id="acc_failed",\n        bash_command="echo \'WARNING :: Accuracy assessment FAILED minimum requirements\'"\n    )\n\n    best_model(training_model.expand(accuracy=[3, 7, 9])) >> [acc_passed, acc_failed]\n')),(0,i.kt)("p",null,"We now no longer specify the amount of models we evaluate and made our pipeline much more flexible."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Apache Airflow Data Pipelines",src:n(30098).Z,width:"1331",height:"525"})))}d.isMDXComponent=!0},31214:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Apache_Airflow_DAGs_01-7370f27dc363e37f120a643be1b2d114.png"},29818:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Apache_Airflow_DAGs_02-a2c5054d98d9666d6ed1b1848870eda9.png"},18489:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Apache_Airflow_DAGs_03-29adf2f16334651dcde437ea6d6662ee.png"},16386:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Apache_Airflow_DAGs_04-a9d564ae33bf0fcae660754cedc0bd61.png"},38225:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Apache_Airflow_DAGs_05-848dcf72c8ff9126b05077d762f5fa31.png"},30098:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/Apache_Airflow_DAGs_06-15e3b8fd145ac00d6de2b5efba93da22.png"},38001:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-fe9bbb57ea8da08fea2f3fef2bf2515b.jpg"}}]);