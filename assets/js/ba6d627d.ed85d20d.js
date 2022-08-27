"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[93229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:9090,slug:"2019-03-31",title:"Introduction to TensorFlow 2 Beta",authors:"mpolinowski",tags:["Machine Learning","Python"]},r=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/index",id:"IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/index",title:"Introduction to TensorFlow 2 Beta",description:"Shanghai, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/index.mdx",sourceDirName:"IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta",slug:"/IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/2019-03-31",permalink:"/docs/IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/2019-03-31",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2019-03-31--introduction-to-tensorflow-2-beta/index.mdx",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:9090,frontMatter:{sidebar_position:9090,slug:"2019-03-31",title:"Introduction to TensorFlow 2 Beta",authors:"mpolinowski",tags:["Machine Learning","Python"]},sidebar:"tutorialSidebar",previous:{title:"Tesseract OCR on Arch Linux",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-10-31--tesseract_ocr_arch_linux/2021-10-31"},next:{title:"Machine Learning with SciKit Learn",permalink:"/docs/IoT-and-Machine-Learning/ML/2018-01-02--machine-learning-with-python/2018-01-02"}},s={},p=[{value:"Installation of Tensorflow",id:"installation-of-tensorflow",level:2},{value:"Convolutional Neural Networks (CNNS)",id:"convolutional-neural-networks-cnns",level:2},{value:"Picking a model",id:"picking-a-model",level:2},{value:"Linear Model",id:"linear-model",level:3},{value:"Example: Simple Linear Regression",id:"example-simple-linear-regression",level:3},{value:"Creating the Model using Numpy",id:"creating-the-model-using-numpy",level:4},{value:"Training the Model",id:"training-the-model",level:4},{value:"Introduction to TensorFlow",id:"introduction-to-tensorflow",level:2},{value:"Making Predictions",id:"making-predictions",level:3},{value:"Customizing your Model",id:"customizing-your-model",level:3},{value:"Adding Initializers",id:"adding-initializers",level:4},{value:"Setting the Learning rate",id:"setting-the-learning-rate",level:4}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Shanghai, China",src:n(75952).Z,width:"1500",height:"870"})),(0,i.kt)("h2",{id:"installation-of-tensorflow"},"Installation of Tensorflow"),(0,i.kt)("p",null,"You can install TensorFlow directly through ",(0,i.kt)("inlineCode",{parentName:"p"},"pip3 install tensorflow")," or with GPU support ",(0,i.kt)("inlineCode",{parentName:"p"},"pip3 install tensorflow-gpu")," (make sure you have ",(0,i.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python v3")," installed)."),(0,i.kt)("p",null,"I have ",(0,i.kt)("a",{parentName:"p",href:"https://docs.anaconda.com/anaconda/install/windows/"},"Anaconda")," set up on my computer and am going to use it for this instead. If you already have Anaconda installed, make sure that it is up to date (make sure that you start the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.anaconda.com/anaconda/user-guide/getting-started/#write-a-python-program-using-anaconda-prompt-or-terminal"},"Anaconda Prompt")," with Admin privileges):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda update conda\nconda update anaconda\n")),(0,i.kt)("p",null,"Anaconda allows us to create a virtual environment in which we can run our TensorFlow program. To create the environment with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"py3-TF2")," run the following command in the Anaconda Prompt - hit ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," when prompted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"conda create --name py3-TF2 python=3\nconda activate py3-TF2\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introduction to Tensorflow 2 Beta",src:n(65867).Z,width:"976",height:"510"})),(0,i.kt)("p",null,"We can now continue installing TensorFlow inside this virtual environment. At the time of writing TensorFlow 2 is still in Beta and the exact version needs to be specified to prevent pip from using version 1 - please check the ",(0,i.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/install/"},"latest version")," before running the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install tensorflow==2.0.0-beta1\n")),(0,i.kt)("p",null,"To be able to use the virtual environment in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.anaconda.com/anaconda/user-guide/getting-started/#run-python-in-a-jupyter-notebook"},"Jupyter Notebook")," we need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"ipykernel")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nb_conda_kernels")," inside it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install ipykernel\nconda install nb_conda_kernels\n")),(0,i.kt)("p",null,"Open a new Python 3 project file inside Jupyter Notebook and verify that Tensorflow is up-and-running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"import tensorflow as tf\n\ntf.__version__\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introduction to Tensorflow 2 Beta",src:n(91394).Z,width:"977",height:"565"})),(0,i.kt)("p",null,"Your research environment is now ready for use!"),(0,i.kt)("h2",{id:"convolutional-neural-networks-cnns"},"Convolutional Neural Networks (",(0,i.kt)("a",{parentName:"h2",href:"https://www.tensorflow.org/beta/tutorials/images/intro_to_cnns"},"CNNS"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Classify an Image (e.g. a plane)"),(0,i.kt)("li",{parentName:"ul"},"Classify and Segment (getting the outline of an object - e.g. a plane - inside an image for further analysis)"),(0,i.kt)("li",{parentName:"ul"},"Recognize an Image (e.g. a Sukhoi SU-25T)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://missinglink.ai/guides/neural-network-concepts/neural-network-bias-bias-neuron-overfitting-underfitting/"},"Underfitting"),": Our model has been trained on a data set that is too small. It can not be used to generalize or recognize. If our data set is too small we can use ",(0,i.kt)("a",{parentName:"p",href:"http://cs231n.github.io/transfer-learning/"},"Transfer Learning")," to adapt a external model by retraining it's outer layer with our training data."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://missinglink.ai/guides/neural-network-concepts/neural-network-bias-bias-neuron-overfitting-underfitting/"},"Overfitting"),": The model was trained with a very specific data set and reaches a high percentage in recognizing fits. But it fails to generalize and will only be useful with your specific sample data."),(0,i.kt)("h2",{id:"picking-a-model"},"Picking a model"),(0,i.kt)("p",null,"There are three different types of Machine Learning:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Supervised Learning"),": We train our model with a set of labeled data before letting it have a go in the wild."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unsupervised Learning"),": The model trains itself with unlabeled data and splits the set into a given number of groups based on similarity. The groups can afterwards be labeled by us based on the goal we are persuing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reinforced Learning"),": We let the model train unsupervised but add a reward system to make sure that the training goes into the direction we need it to go.")),(0,i.kt)("p",null,"In the following we will concentrate on ",(0,i.kt)("strong",{parentName:"p"},"Supervised Learning"),"."),(0,i.kt)("h3",{id:"linear-model"},"Linear Model"),(0,i.kt)("p",null,"The simplest model is always the Linear Model where we just have to feed the learning process a few x- and y-values and have it interpolate data points in between:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"f(x) = xw + b\n")),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," being the input, ",(0,i.kt)("inlineCode",{parentName:"p"},"w")," the ",(0,i.kt)("strong",{parentName:"p"},"Weight")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," the ",(0,i.kt)("strong",{parentName:"p"},"Bias")," for our model. Training the model would mean finding values for the weight and bias that the value of ",(0,i.kt)("strong",{parentName:"p"},"y")," - with a given set of values for ",(0,i.kt)("strong",{parentName:"p"},"x")," - comes as close to observed values as possible."),(0,i.kt)("p",null,"An example would be a model that calculates the rent for an apartment based on the size of the apartment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rent = size * weight + bias\n")),(0,i.kt)("p",null,"When we know more then one observation that would affect the prize of the apartment, we can simply add them up:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Rent = (Size*Weight) + (Proximity to Subway*Weight) - (Proximity to City Center*Weight) + Bias\n")),(0,i.kt)("p",null,"To assess the quality of our linear model we can use the squard-loss (",(0,i.kt)("strong",{parentName:"p"},"L2-norm"),") that weights the distance of each datapoint from the position it should have according to our model. The smaller the sum over all those distances the more accurate represents our model the give dataset."),(0,i.kt)("h3",{id:"example-simple-linear-regression"},"Example: Simple Linear Regression"),(0,i.kt)("h4",{id:"creating-the-model-using-numpy"},"Creating the Model using Numpy"),(0,i.kt)("p",null,"As an example we will create fake data with a linear relationship using ",(0,i.kt)("inlineCode",{parentName:"p"},"numpy")," to help us to create and train a linear model. We will then use ",(0,i.kt)("inlineCode",{parentName:"p"},"matplotlib")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mplot3d")," to visualize the results we are getting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"observations = 1000\n\nxs=np.random.uniform(low=-10, high=10, size=(observations,1))\nzs=np.random.uniform(-10, 10,(observations,1))\n\ninputs = np.column_stack((xs,zs))\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," is defined by the number of observations times the number of variables for our linear function - here we only use one variable ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),". The resulting matrix ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," consits of 2 columns each holding 1000 random values."),(0,i.kt)("p",null,"We now need to create a target for our algorithm - a function that our model should find given the random but linear dataset, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"f(x,y) = 3x - 4z + 7 + noise\n")),(0,i.kt)("p",null,"The weights 3 and 4 as well as the bias 7 are randomly chosen and the noise is again generated using Numpy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"noise=np.random.uniform(-1,1,(observations,1))\n\ntargets = 3*xs - 4*zs + 7 noise\n")),(0,i.kt)("p",null,"We can now plot this data and will receive a plane inside a threedimensional space:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introduction to Tensorflow 2 Beta",src:n(233).Z,width:"885",height:"855"})),(0,i.kt)("p",null,"We can now set an initial range for the algorithm to pick weights and biases from at random to find a good fit: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"init_range=0.1\n\nweights=np.random.uniform(-init_range,init_range,size=(2,1))\nbiases=np.random.uniform(-init_range,init_range,size=1)\n")),(0,i.kt)("p",null,"In this example our initial weights and biases will be picked randomly from the interval ","[-0.1,0.1]","."),(0,i.kt)("p",null,"Last preparation needed is setting a learning rate - the smaller the number, the smaller the increments that are used by the learning algorithm. This will lead to a more accurate value but will slow the algorithm down. In the example we will set the learning rate to a value of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"learning_rate = 0.02\n")),(0,i.kt)("h4",{id:"training-the-model"},"Training the Model"),(0,i.kt)("p",null,"We now can use a for loop to iterate through our data (in TensorFLow 1 iteration is called an ",(0,i.kt)("strong",{parentName:"p"},"Epoch"),", see further down), calculate outputs and compare them to targets using the loss function. Every interation should refine the weights and biases of our model and minimize the result of the loss function for the next run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"for i in range (100):\n    outputs=np.dot(inputs,weights)+biases\n    deltas=outputs-targets\n    loss=np.sum(deltas**2)/2/observations\n    \n    print(loss)\n    \n    deltas_scaled=deltas/observations\n    \n    weights = weights-learning_rate*np.dot(inputs.T,deltas_scaled)\n    biases = biases-learning_rate*np.sum(deltas_scaled)\n")),(0,i.kt)("p",null,"This function runs 100-times, optimizing the value for our weights and biases with each run. Printing the result of the loss function shows us a smaller value with each run:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introduction to Tensorflow 2 Beta",src:n(31793).Z,width:"877",height:"857"})),(0,i.kt)("p",null,"In the initialization step we can see that the algorithm starts out with the following weights and biases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"print(weights)\nprint(biases)\n\n[[-0.06156192]\n [-0.02018205]]\n[0.05114518]\n")),(0,i.kt)("p",null,"After running training the algorithm with 100 iterations those values change to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"print(weights,biases)\n\n[[ 3.00537904]\n [-4.00032605]] [6.06949437]\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introduction to Tensorflow 2 Beta",src:n(50864).Z,width:"885",height:"194"})),(0,i.kt)("p",null,"This is already very close to our target of 3&4 and 7 - but not close enough yet. We can increase the number of iterations in the learning step to improve the outcome. Or simply rerun the training step to add another 100 iterations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"print(weights,biases)\n\n[[ 3.00076145]\n [-4.00183613]] [6.86818993]\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introduction to Tensorflow 2 Beta",src:n(4497).Z,width:"887",height:"128"})),(0,i.kt)("p",null,"Plotting the Outputs of our Model against the Target value shows us a linear function at an angle close to 45 degrees. Our model, almost perfectly, represents the training data:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introduction to Tensorflow 2 Beta",src:n(27750).Z,width:"885",height:"416"})),(0,i.kt)("h2",{id:"introduction-to-tensorflow"},"Introduction to TensorFlow"),(0,i.kt)("p",null,"We can start by creating the same dataset as before only this time we will store the generated test dataset in a file format that supports storage of tensor data (n-dimensional arrays) (",(0,i.kt)("inlineCode",{parentName:"p"},".npz"),")  with the help of Numpy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import numpy as np\nimport matplotlib.pyplot as plt\nimport tensorflow as tf\n\nobservations = 1000\n\nxs = np.random.uniform(low=-10, high=10, size=(observations,1))\nzs = np.random.uniform(-10, 10, (observations,1))\n\ngenerated_inputs = np.column_stack((xs,zs))\n\nnoise = np.random.uniform(-1, 1, (observations,1))\n\ngenerated_targets = 3*xs - 4*zs + 7 + noise\n\nnp.savez('tf-model-data-example', inputs=generated_inputs, targets=generated_targets)\n")),(0,i.kt)("p",null,"Running this code will create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"tf-model-data-example.npz")," that holds our training data."),(0,i.kt)("p",null,"In the next step we can load this data set with Numpy and use a Keras function to calculate the output (y) of our function (",(0,i.kt)("inlineCode",{parentName:"p"},"output=np.dot(input,weights)+bias"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"training_data=np.load('tf_model_data_example.npz')\n\ninput_size=2\noutput_size=1\n\nmodel=tf.keras.Sequential([\n    tf.keras.layers.Dense(output_size)\n])\n\nmodel.compile(optimizer='sgd',loss='mean_squared_error' )\n\nmodel.fit(training_data['inputs'],training_data['targets'],epochs=100,verbose=2)\n")),(0,i.kt)("p",null,"You can display the Weights and Bias using the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"weights=model.layers[0].get_weights()[0]\nbias=model.layers[0].get_weights()[1]\n\nweights\nbias\n")),(0,i.kt)("p",null,"Those values should now be close to our target as defined above ",(0,i.kt)("inlineCode",{parentName:"p"},"targets = 3*xs - 4*zs + 7 + noise")," - Weights ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"-4")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"7")," as the Bias."),(0,i.kt)("h3",{id:"making-predictions"},"Making Predictions"),(0,i.kt)("p",null,"We can now use our model to make predictions ",(0,i.kt)("inlineCode",{parentName:"p"},"model.predict_on_batch(data)")," for output values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"model.predict_on_batch(training_data['inputs'])\n")),(0,i.kt)("p",null,"This will show you the outputs that have been calculated for the training data and previously compared to the target values to calculate the loss function."),(0,i.kt)("p",null,"Plotting those values against the targets will again result in a line graph close to a 45 degrees angle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"plt.plot(np.squeeze(model.predict_on_batch(training_data['inputs'])),np.squeeze(training_data['targets']))\nplt.xlabel('outputs')\nplt.ylabel('targets')\nplt.show()\n")),(0,i.kt)("h3",{id:"customizing-your-model"},"Customizing your Model"),(0,i.kt)("p",null,"In the Numpy model earlier we set an initial range (",(0,i.kt)("inlineCode",{parentName:"p"},"init_range=0.1"),") to define the step size between epochs. But with TensorFlow we left everything at it's default, letting Keras choose for us - let's take control."),(0,i.kt)("h4",{id:"adding-initializers"},"Adding Initializers"),(0,i.kt)("p",null,"Here is how you add kernel and bias initializers to ",(0,i.kt)("inlineCode",{parentName:"p"},"tf.keras.layers.Dense(output_size, kernel_initializer, bias_initializer)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"model=tf.keras.Sequential([\n    tf.keras.layers.Dense(\n      output_size,\n      kernel_initializer=tf.random_uniform_initializer(minval=-0.1, maxval=0.1),\n      bias_initializer=tf.random_uniform_initializer(minval=-0.1, maxval=0.1)\n      )\n])\n")),(0,i.kt)("h4",{id:"setting-the-learning-rate"},"Setting the Learning rate"),(0,i.kt)("p",null,"We can also set the learning rate for our model, which in our Numpy model we defined with ",(0,i.kt)("inlineCode",{parentName:"p"},"learning_rate = 0.02"),". In TensorFlow this is done by customizing the optimizer - we choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"SGD")," optimizer (Stochastic Gradient Descent optimizer) that supports a couple of modifiers, including the ",(0,i.kt)("strong",{parentName:"p"},"Learning Rate"),", ",(0,i.kt)("strong",{parentName:"p"},"Momentum"),", ",(0,i.kt)("strong",{parentName:"p"},"Decay"),", etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"custom_optimizer=tf.keras.optimizers.SGD(learning_rate=0.02)\n\nmodel.compile(optimizer=custom_optimizer,loss='mean_squared_error' )\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Introduction to Tensorflow 2 Beta",src:n(15585).Z,width:"977",height:"797"})))}u.isMDXComponent=!0},75952:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-ccc87e8d9b472a864929c19fe8159b0e.jpg"},65867:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tensorflow_01-794e84597a5d1fb3069c168dff74614b.png"},91394:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tensorflow_02-b8cf5e613eece544bd7938337faaeeaf.png"},233:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tensorflow_03-b0a9d1faf5d2a72c7c327d8c7440e688.png"},31793:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tensorflow_04-834e83c570240e929833405fd158b1d3.png"},50864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tensorflow_05-7642b4ab05941686e8622485f69c9908.png"},4497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tensorflow_06-14276634908d17ce76695f508d750a0b.png"},27750:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tensorflow_07-023096d0c3ad74bb6232a6eb6e3041a0.png"},15585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tensorflow_08-3aed281dc8b2e860a862e900f771b274.png"}}]);