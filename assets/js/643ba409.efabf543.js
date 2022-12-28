"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[95867],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:4940,slug:"2022-12-12",title:"Breast Histopathology Image Segmentation Part 5",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Evaluate the performance of your trained model"},o=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/index",id:"IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/index",title:"Breast Histopathology Image Segmentation Part 5",description:"Evaluate the performance of your trained model",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5",slug:"/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/2022-12-12",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/2022-12-12",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4940,frontMatter:{sidebar_position:4940,slug:"2022-12-12",title:"Breast Histopathology Image Segmentation Part 5",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Evaluate the performance of your trained model"},sidebar:"tutorialSidebar",previous:{title:"Breast Histopathology Image Segmentation Part 6",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part6/2022-12-12"},next:{title:"Breast Histopathology Image Segmentation Part 4",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part4/2022-12-11"}},s={},c=[{value:"Model Evaluation",id:"model-evaluation",level:2},{value:"Classification Report",id:"classification-report",level:3},{value:"Confusion Matrix",id:"confusion-matrix",level:3},{value:"AUC-ROC",id:"auc-roc",level:3},{value:"Serializing a Model",id:"serializing-a-model",level:2},{value:"Training Re-run",id:"training-re-run",level:2}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Guangzhou, China",src:a(47451).Z,width:"1500",height:"383"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-12-10-tf-breast-cancer-classification-part1/2022-12-10"},"Part 1: Data Inspection and Pre-processing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part2/2022-12-11"},"Part 2: Weights, Data Augmentations and Generators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part3/2022-12-11"},"Part 3: Model creation based on a pre-trained and a custom model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part4/2022-12-11"},"Part 4: Train our model to fit the dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/2022-12-12"},"Part 5: Evaluate the performance of your trained model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part6/2022-12-12"},"Part 6: Running Predictions"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/tf-bc-classification"},"Github"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model-evaluation"},"Model Evaluation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#classification-report"},"Classification Report")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#confusion-matrix"},"Confusion Matrix")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#auc-roc"},"AUC-ROC")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#serializing-a-model"},"Serializing a Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#training-re-run"},"Training Re-run"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Based on ",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/paultimothymooney/breast-histopathology-images"},"Breast Histopathology Images")," by ",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/paultimothymooney"},"Paul Mooney"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"Invasive Ductal Carcinoma (IDC) is the most common subtype of all breast cancers. To assign an aggressiveness grade to a whole mount sample, pathologists typically focus on the regions which contain the IDC. As a result, one of the common pre-processing steps for automatic aggressiveness grading is to delineate the exact regions of IDC inside of a whole mount slide."),"\n",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/8XsiMQQ-4mM"},"Can recurring breast cancer be spotted with AI tech? - BBC News"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Citation: ",(0,r.kt)("a",{parentName:"li",href:"https://pubmed.ncbi.nlm.nih.gov/27563488/"},"Deep learning for digital pathology image analysis: A comprehensive tutorial with selected use cases")),(0,r.kt)("li",{parentName:"ul"},"Dataset: 198,738 IDC(negative) image patches; 78,786 IDC(positive) image patches")),(0,r.kt)("h2",{id:"model-evaluation"},"Model Evaluation"),(0,r.kt)("h3",{id:"classification-report"},"Classification Report"),(0,r.kt)("p",null,"Generate a ",(0,r.kt)("strong",{parentName:"p"},"Classification Report")," from your trained model:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Precision"),": ",(0,r.kt)("em",{parentName:"li"},"True Positives")," / (",(0,r.kt)("em",{parentName:"li"},"True Positives")," + ",(0,r.kt)("em",{parentName:"li"},"False Positives"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How certain are you that a positive prediction is actually positive?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recall"),": ",(0,r.kt)("em",{parentName:"li"},"True Positives")," / (",(0,r.kt)("em",{parentName:"li"},"True Positives")," + ",(0,r.kt)("em",{parentName:"li"},"False Negatives"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How many of the actual positives can be predicted with our model?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"F1 Score"),": Harmonic mean of precision and recall",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reaches a maximum when precision and recall are equal")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"utils/modelEval.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Loading the best performing model\n# Please specify the model name from the output folder which has the lowest val_loss\n\n# ResNet50\npath1 = config.OUTPUT_PATH + \'/resnet50_weights-025-0.6333.hdf5\'\n\n# Custom\n# path1 = config.OUTPUT_PATH + \'/custom_weights-009-0.4244.hdf5\'\n\nfModel = load_model(path1)\n\n# Predicting on the test data\nprint("Predicting on the test data")\n# if totalTest is odd number add `+1` to predTest\nprint("totalTrain: " , totalTrain , ", totalVal: " , totalVal , ", totalTest: " , totalTest)\n# totalTrain:  199818 , totalVal:  22201 , totalTest:  55505\npredTest = fModel.predict(x=testGen, steps=(totalTest // config.BATCH_SIZE)+1)\npredTest = np.argmax(predTest, axis=1)\n\n# Printing the Classification Report\nprint(classification_report(testGen.classes, predTest, target_names=testGen.class_indices.keys()))\n')),(0,r.kt)("p",null,"Run the script to generate the evaluation report:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ResNet50")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"              precision    recall  f1-score   support\n\n           0       0.84      0.60      0.70     39775\n           1       0.42      0.72      0.53     15730\n\n    accuracy                           0.64     55505\n   macro avg       0.63      0.66      0.62     55505\nweighted avg       0.72      0.64      0.65     55505\n")),(0,r.kt)("p",null,"Now this looks pretty terrible :)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"              precision    recall  f1-score   support\n\n           0       0.93      0.84      0.89     39775\n           1       0.68      0.84      0.75     15730\n\n    accuracy                           0.84     55505\n   macro avg       0.81      0.84      0.82     55505\nweighted avg       0.86      0.84      0.85     55505\n")),(0,r.kt)("p",null,"Already a lot better!"),(0,r.kt)("h3",{id:"confusion-matrix"},"Confusion Matrix"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Confusion Matrix")," can be used to visualize the performance of an classification model. Since we only have two classes - ",(0,r.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"malignant")," - the matrix will look like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"True Positive"),": Malignant carcinoma correctly predicted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"False Positive"),": Malignant carcinoma falsely predicted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"True Negative"),": Benign carcinoma correctly predicted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"True Negative"),": Benign carcinoma falsely predicted")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Breast Histopathology Image Segmentation",src:a(29010).Z,width:"677",height:"601"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"utils/modelEval.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Computing the confusion matrix and and using the same to derive the \n# accuracy, sensitivity, and specificity\ncm = confusion_matrix(testGen.classes, predTest)\ntotal = sum(sum(cm))\nacc = (cm[0, 0] + cm[1, 1]) / total\nsensitivity = cm[0, 0] / (cm[0, 0] + cm[0, 1])\nspecificity = cm[1, 1] / (cm[1, 0] + cm[1, 1])\n\n# Printing the confusion matrix, accuracy, sensitivity, and specificity\nprint(cm)\nprint("acc: {:.4f}".format(acc))\nprint("sensitivity: {:.4f}".format(sensitivity))\nprint("specificity: {:.4f}".format(specificity))\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ResNet50")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"[[23954 15821]\n [ 4425 11305]]\nacc: 0.6352\nsensitivity: 0.6022\nspecificity: 0.7187\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"[[33597  6178]\n [ 2498 13232]]\nacc: 0.8437\nsensitivity: 0.8447\nspecificity: 0.8412\n")),(0,r.kt)("h3",{id:"auc-roc"},"AUC-ROC"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Area Under the Curve")," (",(0,r.kt)("strong",{parentName:"p"},"AUC"),") of ",(0,r.kt)("em",{parentName:"p"},"Receiver Operating Characteristic")," (",(0,r.kt)("strong",{parentName:"p"},"ROC"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ROC"),": Evaluation metric for binary classification problems to separate ",(0,r.kt)("em",{parentName:"li"},"signal")," from ",(0,r.kt)("em",{parentName:"li"},"noise"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AUC"),": A measurement of the ability of a classifier to distinguish between classes based on the ",(0,r.kt)("strong",{parentName:"li"},"ROC"),". A higher value shows a better performance.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'## load latest weights\npath1 = config.OUTPUT_PATH + \'/resnet50_weights.hdf5\'\n\nfModel = load_model(path1)\n\n# Predicting on the test data\nprint("Predicting on the test data")\n# if totalTest is odd number add `+1` to predTest\nprint("totalTrain: " , totalTrain , ", totalVal: " , totalVal , ", totalTest: " , totalTest)\n# totalTrain:  199818 , totalVal:  22201 , totalTest:  55505\npredTest = fModel.predict(x=testGen, steps=(totalTest // config.BATCH_SIZE)+1)\npredTest = np.argmax(predTest, axis=1)\n\n# Calculate roc auc\nXGB_roc_value = roc_auc_score(testGen.classes, predTest)\nprint("XGboost roc_value: {0}" .format(XGB_roc_value))\n\n# Plotting the graph\ntraining_plot(MF, config.EPOCHS, config.PLOT_PATH)\n')),(0,r.kt)("h2",{id:"serializing-a-model"},"Serializing a Model"),(0,r.kt)("p",null,"When you are satisfied with the training you can save the model so it is ready for transfer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# Serialize/Writing the model to disk\nprint("Serializing network...")\nfModel.save(config.MODEL_PATH, save_format="h5")\n')),(0,r.kt)("h2",{id:"training-re-run"},"Training Re-run"),(0,r.kt)("p",null,"I changed the following variables:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"utils/config.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"BATCH_SIZE = 24\nINIT_LR = 1e-3\nEPOCHS = 20\n")),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},"Custom Model")," I am still seeing small improvements in the later epochs - looking much better:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Epoch 18/20\n8324/8325 [============================>.] - ETA: 0s - loss: 0.4561 - accuracy: 0.8652  \nEpoch 18: val_loss improved from 0.31292 to 0.31132, saving model to ./output/custom_weights.hdf5\n8325/8325 [==============================] - 247s 30ms/step - loss: 0.4561 - accuracy: 0.8652 - val_loss: 0.3113 - val_accuracy: 0.8663\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"ResNet50 Model")," also improves compared to the earlier run. But it still get's stuck around the 10th epoch and even gets much worse after that - given the fluctuation I probably should have let it run a bit longer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Epoch 9/20\n8323/8325 [============================>.] - ETA: 0s - loss: 0.8274 - accuracy: 0.7163  \nEpoch 9: val_loss improved from 0.60565 to 0.58112, saving model to ./output/resnet50_weights.hdf5\n8325/8325 [==============================] - 249s 30ms/step - loss: 0.8274 - accuracy: 0.7163 - val_loss: 0.5811 - val_accuracy: 0.7097\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Breast Histopathology Image Segmentation",src:a(84481).Z,width:"640",height:"480"})),(0,r.kt)("p",null,"I did another - much longer - run for the ",(0,r.kt)("strong",{parentName:"p"},"Custom Model")," and I am still seeing improvements up to the 54th epoch. Though the loss function still returns a slightly higher value as before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Epoch 54/220\n8324/8325 [============================>.] - ETA: 0s - loss: 0.4869 - accuracy: 0.8566  \nEpoch 54: val_loss improved from 0.37685 to 0.36609, saving model to ./output/custom_weights.hdf5\n8325/8325 [==============================] - 222s 27ms/step - loss: 0.4869 - accuracy: 0.8566 - val_loss: 0.3661 - val_accuracy: 0.8482\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Breast Histopathology Image Segmentation",src:a(12053).Z,width:"640",height:"480"})))}m.isMDXComponent=!0},29010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Breast_Histopathology_Image_Segmentation_01-f3de93010b82d49b76c60513eb9bc244.png"},12053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/TrainingHistoryCM-768eba8e672448b8c0d56a6aa19c1597.png"},84481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/TrainingHistoryRN-95a9debefd4d927cfb4182c0694081aa.png"},47451:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-918471126c0472aad97358a725e1a399.jpg"}}]);