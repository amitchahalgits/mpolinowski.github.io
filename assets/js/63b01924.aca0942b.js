"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[28207],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=n.createContext({}),c=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(r.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=c(t),u=i,p=g["".concat(r,".").concat(u)]||g[u]||d[u]||l;return t?n.createElement(p,s(s({ref:a},m),{},{components:t})):n.createElement(p,s({ref:a},m))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=g;var o={};for(var r in a)hasOwnProperty.call(a,r)&&(o[r]=a[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},62617:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const l={sidebar_position:4560,slug:"2023-03-05",title:"Tensorflow 2 - Convolutional Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Computer Vision for Multiclass Image Classifications"},s=void 0,o={unversionedId:"IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/index",id:"IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/index",title:"Tensorflow 2 - Convolutional Neural Networks",description:"Computer Vision for Multiclass Image Classifications",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications",slug:"/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4560,frontMatter:{sidebar_position:4560,slug:"2023-03-05",title:"Tensorflow 2 - Convolutional Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Computer Vision for Multiclass Image Classifications"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Transfer Learning",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06"},next:{title:"Tensorflow 2 - Convolutional Neural Networks",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03"}},r={},c=[{value:"Multiclass Image Classification",id:"multiclass-image-classification",level:2},{value:"Visualizing the Data",id:"visualizing-the-data",level:3},{value:"Preprocessing the Data",id:"preprocessing-the-data",level:3},{value:"Building the Model",id:"building-the-model",level:3},{value:"Reduce Overfitting",id:"reduce-overfitting",level:4},{value:"Making Predictions",id:"making-predictions",level:3},{value:"Saving &amp; Loading the Model",id:"saving--loading-the-model",level:3}],m={toc:c};function d(e){let{components:a,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TST, Hongkong",src:t(37151).Z,width:"1500",height:"626"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tensorflow-convolutional-neural-networks"},"Tensorflow Convolutional Neural Networks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multiclass-image-classification"},"Multiclass Image Classification"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#visualizing-the-data"},"Visualizing the Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#preprocessing-the-data"},"Preprocessing the Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#building-the-model"},"Building the Model"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reduce-overfitting"},"Reduce Overfitting")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#making-predictions"},"Making Predictions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#saving--loading-the-model"},"Saving \\& Loading the Model"))))))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"See also:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fun, fun, tensors: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19"},"Tensor Constants, Variables and Attributes"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"},"Tensor Indexing, Expanding and Manipulations"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22"},"Matrix multiplications, Squeeze, One-hot and Numpy")),(0,i.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Regression: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23"},"Building a Regression Model"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"},"Model Evaluation"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25"},"Model Optimization"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},'Working with a "Real" Dataset'),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"},"Feature Scaling")),(0,i.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Classification: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27"},"Non-linear Data and Activation Functions"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28"},"Model Evaluation and Performance Improvement"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02"},"Multiclass Classification Problems")),(0,i.kt)("li",{parentName:"ul"},"Tensorflow 2 - Convolutional Neural Networks: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03"},"Binary Image Classification"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05"},"Multiclass Image Classification")),(0,i.kt)("li",{parentName:"ul"},"Tensorflow 2 - Transfer Learning: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06"},"Feature Extraction"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11"},"Fine-Tuning"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16"},"Scaling"))),(0,i.kt)("h1",{id:"tensorflow-convolutional-neural-networks"},"Tensorflow Convolutional Neural Networks"),(0,i.kt)("h2",{id:"multiclass-image-classification"},"Multiclass Image Classification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cd datasets"),(0,i.kt)("li",{parentName:"ul"},"wget ",(0,i.kt)("a",{parentName:"li",href:"https://storage.googleapis.com/ztm_tf_course/food_vision/10_food_classes_all_data.zip"},"https://storage.googleapis.com/ztm_tf_course/food_vision/10_food_classes_all_data.zip")),(0,i.kt)("li",{parentName:"ul"},"unzip 10_food_classes_all_data.zip && rm 10_food_classes_all_data.zip")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"10_food_classes_all_data\n\u251c\u2500\u2500 test\n\u2502\xa0\xa0 \u251c\u2500\u2500 chicken_curry\n\u2502\xa0\xa0 \u251c\u2500\u2500 chicken_wings\n\u2502\xa0\xa0 \u251c\u2500\u2500 fried_rice\n\u2502\xa0\xa0 \u251c\u2500\u2500 grilled_salmon\n\u2502\xa0\xa0 \u251c\u2500\u2500 hamburger\n\u2502\xa0\xa0 \u251c\u2500\u2500 ice_cream\n\u2502\xa0\xa0 \u251c\u2500\u2500 pizza\n\u2502\xa0\xa0 \u251c\u2500\u2500 ramen\n\u2502\xa0\xa0 \u251c\u2500\u2500 steak\n\u2502\xa0\xa0 \u2514\u2500\u2500 sushi\n\u2514\u2500\u2500 train\n    \u251c\u2500\u2500 chicken_curry\n    \u251c\u2500\u2500 chicken_wings\n    \u251c\u2500\u2500 fried_rice\n    \u251c\u2500\u2500 grilled_salmon\n    \u251c\u2500\u2500 hamburger\n    \u251c\u2500\u2500 ice_cream\n    \u251c\u2500\u2500 pizza\n    \u251c\u2500\u2500 ramen\n    \u251c\u2500\u2500 steak\n    \u2514\u2500\u2500 sushi\n\n23 directories, 0 files\n")),(0,i.kt)("h3",{id:"visualizing-the-data"},"Visualizing the Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# set directories\ntraining_directory = \"../datasets/10_food_classes_all_data/train/\"\ntesting_directory = \"../datasets/10_food_classes_all_data/test/\"\n\n# get class names\ndata_dir = pathlib.Path(training_directory)\nclass_names = np.array(sorted([item.name for item in data_dir.glob('*')]))\nlen(class_names), class_names \n\n# the data set has 10 classes:\n# (10,\n# array(['chicken_curry', 'chicken_wings', 'fried_rice', 'grilled_salmon',\n#        'hamburger', 'ice_cream', 'pizza', 'ramen', 'steak', 'sushi'],\n#       dtype='<U14'))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# visualizing the dataset\n## display random images\ndef view_random_image(target_dir, target_class):\n    target_folder = str(target_dir) + \"/\" + target_class\n    random_image = random.sample(os.listdir(target_folder), 1)\n    \n    img = mpimg.imread(target_folder + \"/\" + random_image[0])\n    plt.imshow(img)\n    plt.title(str(target_class) + str(img.shape))\n    plt.axis(\"off\")\n    \n    return tf.constant(img)\n\nfig = plt.figure(figsize=(12, 6))\nplot1 = fig.add_subplot(1, 2, 1)\nplot1.title.set_text(f'Class: {class_names[0]}')\npizza_image = view_random_image(target_dir = training_directory, target_class=class_names[0])\nplot2 = fig.add_subplot(1, 2, 2)\nplot2.title.set_text(f'Class: {class_names[1]}')\nsteak_image = view_random_image(target_dir = training_directory, target_class=class_names[1])\n\nfig = plt.figure(figsize=(12, 6))\nplot3 = fig.add_subplot(1, 2, 1)\nplot3.title.set_text(f'Class: {class_names[2]}')\npizza_image = view_random_image(target_dir = training_directory, target_class=class_names[2])\nplot4 = fig.add_subplot(1, 2, 2)\nplot4.title.set_text(f'Class: {class_names[3]}')\nsteak_image = view_random_image(target_dir = training_directory, target_class=class_names[3])\n\nfig = plt.figure(figsize=(12, 6))\nplot5 = fig.add_subplot(1, 2, 1)\nplot5.title.set_text(f'Class: {class_names[4]}')\npizza_image = view_random_image(target_dir = training_directory, target_class=class_names[4])\nplot6 = fig.add_subplot(1, 2, 2)\nplot6.title.set_text(f'Class: {class_names[5]}')\nsteak_image = view_random_image(target_dir = training_directory, target_class=class_names[5])\n\nfig = plt.figure(figsize=(12, 6))\nplot7 = fig.add_subplot(1, 2, 1)\nplot7.title.set_text(f'Class: {class_names[6]}')\npizza_image = view_random_image(target_dir = training_directory, target_class=class_names[6])\nplot8 = fig.add_subplot(1, 2, 2)\nplot8.title.set_text(f'Class: {class_names[7]}')\nsteak_image = view_random_image(target_dir = training_directory, target_class=class_names[7])\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(46044).Z,width:"950",height:"465"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(36870).Z,width:"910",height:"504"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(98036).Z,width:"950",height:"465"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(62910).Z,width:"950",height:"465"})),(0,i.kt)("h3",{id:"preprocessing-the-data"},"Preprocessing the Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"seed = 42\nbatch_size = 32\nimg_height = 224\nimg_width = 224\n\ntf.random.set_seed(seed)\n\ntraining_data_multi = image_dataset_from_directory(training_directory,\n                                              labels='inferred',\n                                              label_mode='categorical',\n                                              seed=seed,\n                                              shuffle=True,\n                                              image_size=(img_height, img_width),\n                                              batch_size=batch_size)\n\ntesting_data_multi = image_dataset_from_directory(testing_directory,\n                                              labels='inferred',\n                                              label_mode='categorical',\n                                              seed=seed,\n                                              shuffle=True,\n                                              image_size=(img_height, img_width),\n                                              batch_size=batch_size)\n\n# Found 7500 files belonging to 10 classes.\n# Found 2500 files belonging to 10 classes.\n")),(0,i.kt)("h3",{id:"building-the-model"},"Building the Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'tf.random.set_seed(seed)\n# building the model based on the tiny vgg architecture\nvgg_model_multiclass = Sequential([\n  Rescaling(1./255),\n  Conv2D(filters=10, \n         kernel_size=3,\n         activation="relu", \n         input_shape=(img_height, img_width, 3)),\n  Conv2D(10, 3, activation="relu"),\n  MaxPool2D(pool_size=2, padding="valid"),\n  Conv2D(10, 3, activation="relu"),\n  Conv2D(10, 3, activation="relu"),\n  MaxPool2D(2, padding="valid"),\n  Flatten(),\n  Dense(len(class_names), activation="softmax")\n])\n\n# compile the model\nvgg_model_multiclass.compile(loss="categorical_crossentropy",\n                 optimizer=Adam(learning_rate=1e-3),\n                 metrics=["accuracy"])\n\n# fitting the model\nhistory_vgg_model_multiclass = vgg_model_multiclass.fit(training_data_multi, epochs=5,\n                            steps_per_epoch=len(training_data_multi),\n                            validation_data=testing_data_multi,\n                            validation_steps=len(testing_data_multi))\n\n# Epoch 5/5\n# 235/235 [==============================] - 12s 52ms/step - loss: 0.2465 - accuracy: 0.9251 - val_loss: 4.0673 - val_accuracy: 0.2760\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pd.DataFrame(history_vgg_model_multiclass.history).plot(title="Tiny VGG (Multiclass)")\n\n# The training loss and accuracy are getting close to being perfect\n# while the validation loss is running away => overfitting\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(92989).Z,width:"547",height:"435"})),(0,i.kt)("h4",{id:"reduce-overfitting"},"Reduce Overfitting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'tf.random.set_seed(seed)\n# reduce the complexity of our model to minimize the overfit\nvgg_model_multiclass_simplified = Sequential([\n  Rescaling(1./255),\n  Conv2D(filters=10, \n         kernel_size=3,\n         activation="relu", \n         input_shape=(img_height, img_width, 3)),\n  MaxPool2D(pool_size=2, padding="valid"),\n  Conv2D(10, 3, activation="relu"),\n  MaxPool2D(2, padding="valid"),\n  Flatten(),\n  Dense(len(class_names), activation="softmax")\n])\n\n# compile the model\nvgg_model_multiclass_simplified.compile(loss="categorical_crossentropy",\n                 optimizer=Adam(learning_rate=1e-3),\n                 metrics=["accuracy"])\n\n# fitting the model\nhistory_vgg_model_multiclass_simplified = vgg_model_multiclass_simplified.fit(\n                            training_data_multi, epochs=5,\n                            steps_per_epoch=len(training_data_multi),\n                            validation_data=testing_data_multi,\n                            validation_steps=len(testing_data_multi))\n\n# Epoch 5/5\n# 235/235 [==============================] - 12s 52ms/step - loss: 0.2465 - accuracy: 0.9251 - val_loss: 4.0673 - val_accuracy: 0.2760\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'fig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_vgg_model_multiclass.history).plot(ax=axes[0], title="Tiny VGG (Multiclass)")\npd.DataFrame(history_vgg_model_multiclass_simplified.history).plot(ax=axes[1], title="Simple Tiny VGG (Multiclass)")\n# that did not help at all...\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(84326).Z,width:"981",height:"528"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'tf.random.set_seed(seed)\n# adding data augmentations\n# i experimented a little bit with this\n# things can go horrible wrong if you\n# add too much :)\ndata_augmentation = Sequential([\n    RandomFlip("horizontal_and_vertical"),\n    RandomRotation(0.2),\n#     RandomZoom(0.1),\n#     RandomContrast(0.2),\n#     RandomBrightness(0.2)\n])\n\n# building the model\nvgg_model_multiclass_augmentation = Sequential([\n  data_augmentation,\n  Rescaling(1./255, input_shape=(img_height, img_width, 3)),\n  Conv2D(16, 3, activation="relu"),\n  Conv2D(10, 3, activation="relu"),\n  MaxPool2D(pool_size=2, padding="same"),\n  Conv2D(16, 3, activation="relu"),\n  Conv2D(10, 3, activation="relu"),\n  MaxPool2D(2, padding="same"),\n  Flatten(),\n  Dense(len(class_names), activation="softmax")\n])\n\n# compile the model\nvgg_model_multiclass_augmentation.compile(loss="categorical_crossentropy",\n                 optimizer=Adam(learning_rate=1e-3),\n                 metrics=["accuracy"])\n\n# fitting the model\nhistory_vgg_model_multiclass_augmentation = vgg_model_multiclass_augmentation.fit(\n                            training_data_multi, epochs=25,\n                            steps_per_epoch=len(training_data_multi),\n                            validation_data=testing_data_multi,\n                            validation_steps=len(testing_data_multi))\n\n# Epoch 10/10\n# 235/235 [==============================] - 23s 99ms/step - loss: 1.6899 - accuracy: 0.4245 - val_loss: 1.8349 - val_accuracy: 0.3736\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'fig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_vgg_model_multiclass.history).plot(ax=axes[0], title="Tiny VGG (Multiclass)")\npd.DataFrame(history_vgg_model_multiclass_augmentation.history).plot(ax=axes[1], title="Augmented Tiny VGG (Multiclass)")\n# this looks already alot better - but the improvement is very slow...\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(31729).Z,width:"981",height:"528"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# try adding a few more epochs to get those curves closer\nhistory_vgg_model_multiclass_augmentation = vgg_model_multiclass_augmentation.fit(\n                            training_data_multi, epochs=25,\n                            steps_per_epoch=len(training_data_multi),\n                            validation_data=testing_data_multi,\n                            validation_steps=len(testing_data_multi))\n\n# as expected - running the training for longer - slowly - improves the accuracy\n# as well as validation accuracy for the model. The validation loss, however, remains\n# stubbornly high:\n# Epoch 25/25\n# 235/235 [==============================] - 23s 97ms/step - loss: 1.3810 - accuracy: 0.5397 - val_loss: 1.7875 - val_accuracy: 0.4048\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'fig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_vgg_model_multiclass.history).plot(ax=axes[0], title="Tiny VGG (Multiclass)")\npd.DataFrame(history_vgg_model_multiclass_augmentation.history).plot(ax=axes[1], title="Augmented Tiny VGG (Multiclass)")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(16185).Z,width:"987",height:"528"})),(0,i.kt)("h3",{id:"making-predictions"},"Making Predictions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'img_height = 224\nimg_width = 224\n\n# helper function to pre-process images for predictions\ndef prepare_image(file_name, img_height=img_height, img_width=img_width):\n    # read in image\n    img = tf.io.read_file(file_name)\n    # image array => tensor\n    img = tf.image.decode_image(img)\n    # reshape to training size\n    img = tf.image.resize(img, size=[img_height, img_width])\n    # we don\'t need to normalize the image this is done by the model itself\n    # img = img/255\n    # add a dimension in front for batch size => shape=(1, 224, 224, 3)\n    img = tf.expand_dims(img, axis=0)\n    return img\n\n# adapt plot function for multiclass predictions\ndef predict_and_plot_multi(model, file_name, class_names):\n    # load the image and preprocess\n    img = prepare_image(file_name)\n    # run prediction\n    prediction = model.predict(img)\n    # check for multiclass\n    if len(prediction[0]) > 1:\n        # pick class with highest probability\n        pred_class = class_names[tf.argmax(prediction[0])]\n    else:\n        # binary classifications only return 1 probability value\n        pred_class = class_names[int(tf.round(prediction))]\n    # plot image & prediction\n    plt.imshow(mpimg.imread(file_name))\n    plt.title(f"Prediction: {pred_class}")\n    plt.axis(False)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"fig = plt.figure(figsize=(12, 6))\nplot7 = fig.add_subplot(1, 2, 1)\npizza_image = predict_and_plot_multi(model=vgg_model_multiclass_augmentation, file_name=pizza_path, class_names=class_names)\nplot8 = fig.add_subplot(1, 2, 2)\nsteak_image = predict_and_plot_multi(model=vgg_model_multiclass_augmentation, file_name=steak_path, class_names=class_names)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(61336).Z,width:"950",height:"323"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# a few more images to test with\nice_cream_path = "../assets/ice_cream.jpg"\nhamburger_path = "../assets/hamburger.jpg"\n\nfig = plt.figure(figsize=(12, 6))\nplot7 = fig.add_subplot(1, 2, 1)\npizza_image = predict_and_plot_multi(model=vgg_model_multiclass_augmentation, file_name=ice_cream_path, class_names=class_names)\nplot8 = fig.add_subplot(1, 2, 2)\nsteak_image = predict_and_plot_multi(model=vgg_model_multiclass_augmentation, file_name=hamburger_path, class_names=class_names)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(40730).Z,width:"950",height:"359"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(24671).Z,width:"200",height:"200"})),(0,i.kt)("p",null,"This pretty much sums up the ",(0,i.kt)("inlineCode",{parentName:"p"},"val_accuracy: 0.4048")," value I gut during the training. With 10 I would get an ~ accuracy of ",(0,i.kt)("inlineCode",{parentName:"p"},"10%")," if the model was guessing randomly. The training got us factor 4 improvement. But it is far from perfect."),(0,i.kt)("p",null,"The validation accuracy was still increasing - so if I kept training the model I would get better results. But the increase was very slow - it might take a long time. The validation loss was running away in the beginning. But adding image augmentations pulled it back down nicely. I have been experimenting with different augmentations and their effect ranged from good to terrible :) - there is still some room for improvement adding or adjusting augmentations."),(0,i.kt)("p",null,"The next thing - or maybe the first - would be to consolidate the dataset. Some of the images in it are terrible. They have plenty of clutter in the background. There is grilled salmon that looks like sushi. Or close-up chicken curry that could be a pizza. Removing some of those images, or preferably replacing them with higher quality images, will improve our model performance."),(0,i.kt)("p",null,"We could also check out the confuion matrix to see if there are classes that perform particularly bad. If there are we can concentrate our efforts on them. (see below - ",(0,i.kt)("inlineCode",{parentName:"p"},"sushi")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ramen")," seems to perform ",(0,i.kt)("em",{parentName:"p"},"OK"),")"),(0,i.kt)("h3",{id:"saving--loading-the-model"},"Saving & Loading the Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# save a model\nvgg_model_multiclass_augmentation.save("../saved_models/vgg_model_multiclass_augmentation")\n\n# INFO:tensorflow:Assets written to: ../saved_models/vgg_model_multiclass_augmentation/assets\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# load a trained model\nloaded_model = tf.keras.models.load_model("../saved_models/vgg_model_multiclass_augmentation")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# test if the model was loaded successful\nsushi_path = "../assets/sushi.jpg"\nramen_path = "../assets/ramen.jpg"\n\nfig = plt.figure(figsize=(12, 6))\nplot7 = fig.add_subplot(1, 2, 1)\npizza_image = predict_and_plot_multi(model=loaded_model, file_name=sushi_path, class_names=class_names)\nplot8 = fig.add_subplot(1, 2, 2)\nsteak_image = predict_and_plot_multi(model=loaded_model, file_name=ramen_path, class_names=class_names)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:t(73220).Z,width:"950",height:"458"})),(0,i.kt)("p",null,"To fast forward -> Next step ",(0,i.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06"},"Transfer Learning")))}d.isMDXComponent=!0},46044:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_09-1352e1349407f735f0e2191ae26c45f3.png"},36870:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_10-2a118657821ad192f6398df000a920b0.png"},98036:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_11-a442b086d6f2f305f49cdb9e0e313e25.png"},62910:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_12-e7e9f4c03f74ba6b642906f9a7469fff.png"},92989:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_13-0a766446a5b0084e830a9f65eca3fe1a.png"},84326:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_14-26bf4f147471d9896a2889deed93009a.png"},31729:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_15-582bf5b2a2b901bafee7614101908f9a.png"},16185:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_16-b5bc2d6629772e625c139c057756578c.png"},61336:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_17-63f2703cb543c8df55bbb8b4de0b4bcc.png"},40730:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_18-af2be271e7738975734a60dcc2c43bad.png"},73220:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_19-30824550113d807f2806e93ff862e095.png"},24671:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/hmmmm-0aa854f42905bbb37952c1b5e1e14729.gif"},37151:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-cd27afc91b9ae79990579bad65920e0c.jpg"}}]);