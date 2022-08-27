"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[31178],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>u});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return a?t.createElement(f,s(s({ref:n},p),{},{components:a})):t.createElement(f,s({ref:n},p))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6622:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=a(87462),i=(a(67294),a(3905));const r={sidebar_position:9050,slug:"2021-11-03",title:"Streamlit user interface for openCV/Mediapipe face mesh app",authors:"mpolinowski",tags:["Machine Learning","Python"]},s=void 0,o={unversionedId:"IoT-and-Machine-Learning/ML/2021-11-03--streamlit-opencv-mediapipe/index",id:"IoT-and-Machine-Learning/ML/2021-11-03--streamlit-opencv-mediapipe/index",title:"Streamlit user interface for openCV/Mediapipe face mesh app",description:"Victoria Harbour, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-03--streamlit-opencv-mediapipe/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-03--streamlit-opencv-mediapipe",slug:"/IoT-and-Machine-Learning/ML/2021-11-03--streamlit-opencv-mediapipe/2021-11-03",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-03--streamlit-opencv-mediapipe/2021-11-03",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-03--streamlit-opencv-mediapipe/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:9050,frontMatter:{sidebar_position:9050,slug:"2021-11-03",title:"Streamlit user interface for openCV/Mediapipe face mesh app",authors:"mpolinowski",tags:["Machine Learning","Python"]},sidebar:"tutorialSidebar",previous:{title:"Installing YOLOv4 with Anaconda",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4/2021-11-04"},next:{title:"spaCy NER Predictions",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-02--spacy_ner_predictions/2021-11-02"}},l={},d=[{value:"Face Landmark Detection",id:"face-landmark-detection",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"StreamLit",id:"streamlit",level:3},{value:"Create About Page",id:"create-about-page",level:2},{value:"Create Image Page",id:"create-image-page",level:2},{value:"Create Video Page",id:"create-video-page",level:2}],p={toc:d};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Victoria Harbour, Hongkong",src:a(92353).Z,width:"1500",height:"663"})),(0,i.kt)("p",null,"This code is based on a free tutorial by Agumented Startups. All free tutorials available on ",(0,i.kt)("a",{parentName:"p",href:"https://www.augmentedstartups.com/visionstore"},"augmentedstartups.com"),". Changes made:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated all dependencies to latest version"),(0,i.kt)("li",{parentName:"ul"},"Removed deprecation errors"),(0,i.kt)("li",{parentName:"ul"},"Added new demo files")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#face-landmark-detection"},"Face Landmark Detection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#basic-setup"},"Basic Setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#streamlit"},"StreamLit")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-about-page"},"Create About Page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-image-page"},"Create Image Page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-video-page"},"Create Video Page"))),(0,i.kt)("h2",{id:"face-landmark-detection"},"Face Landmark Detection"),(0,i.kt)("h3",{id:"basic-setup"},"Basic Setup"),(0,i.kt)("p",null,"Go to Augmented Startups and open the ",(0,i.kt)("a",{parentName:"p",href:"https://www.augmentedstartups.com/face-mesh-Stream-Lit-UI"},"Face Landmark Detection StreamLit User Interface")," project page. Scroll down and download the project setup files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /opt/Python/streamLit/ cd /opt/Python/streamLit/ \nwget https://www.augmentedstartups.com/resource_redirect/downloads/sites/104576/themes/2148177103/downloads/yWtJ2GTTUmbdL4paud0M_Face-Mesh-MediaPipe-StreamLit.zip\nunzip yWtJ2GTTUmbdL4paud0M_Face-Mesh-MediaPipe-StreamLit.zip\n")),(0,i.kt)("p",null,"The project contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file that we can use to install the following dependencies into your\nvirtual environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"opencv_python_headless==4.5.2.54\nstreamlit==0.82.0\nmediapipe==0.8.4.2\nnumpy==1.18.5\nPillow==8.2.0\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,i.kt)("h3",{id:"streamlit"},"StreamLit"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.streamlit.io"},"Streamlit")," is an open-source Python library that makes it easy to create and share beautiful, custom web apps for\nmachine learning and data science. In just a few minutes you can build and deploy powerful data apps."),(0,i.kt)("p",null,"Create a new Python file ",(0,i.kt)("inlineCode",{parentName:"p"},"face_mesh_app.py")," and import the dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import streamlit as st\nimport mediapipe as mp\nimport cv2 as cv\nimport numpy as np\nimport tempfile\nimport time\nfrom PIL import Image\n")),(0,i.kt)("p",null,"Test your installation by running the following and opening your browser on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8501"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"st.title('Face Mesh App using Mediapipe')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"streamlit run face_mesh_app.py\n")),(0,i.kt)("p",null,"You should see the title displayed on the Top of your page. Ok now we can continue building the rest of the page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Basic App Scaffolding\nst.title('Face Mesh App using Streamlit')\n\nst.markdown(\n    \"\"\"\n    <style>\n    [data-testid=\"stSidebar\"][aria-expanded=\"true\"] > div:first-child{\n        width: 350px\n    }\n    [data-testid=\"stSidebar\"][aria-expanded=\"false\"] > div:first-child{\n        width: 350px\n        margin-left: -350px\n    }\n    </style>\n    \"\"\",\n    unsafe_allow_html=True,\n)\n\n# Create Sidebar\nst.sidebar.title('FaceMesh Sidebar')\nst.sidebar.subheader('Parameter')\n\n# Define available pages in selection box\napp_mode = st.sidebar.selectbox(\n    'App Mode',\n    ['About','Image','Video']\n)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"StreamLit",src:a(70863).Z,width:"1229",height:"421"})),(0,i.kt)("p",null,"Make sure that the image dimensions do not exceed the dimensions of the page - else resize:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Resize Images to fit Container\n@st.cache()\n# Get Image Dimensions\ndef image_resize(image, width=None, height=None, inter=cv.INSTER_AREA):\n    dim = None\n    (h,w) = image.shape[:2]\n\n    if width is None and height is None:\n        return image\n\n    if width is None:\n        r = width/float(w)\n        dim = (int(w*r),height)\n\n    else:\n        r = width/float(w)\n        dim = width, int(h*r)\n\n    # Resize image\n    resized = cv.resize(image,dim,interpolation=inter)\n\n    return resized\n")),(0,i.kt)("h2",{id:"create-about-page"},"Create About Page"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# About Page\n\nif app_mode == \'About\':\n    st.markdown(\'\'\'\n                ## Face Mesh \\n\n                In this application we are using **MediaPipe** for creating a Face Mesh. **StreamLit** is used to create the Web Graphical User Interface (GUI) \\n\n                \n                - [Github](https://github.com/mpolinowski/streamLit-cv-mediapipe) \\n\n    \'\'\')\n\n## Add Sidebar and Window style\nst.markdown(\n    """\n    <style>\n    [data-testid="stSidebar"][aria-expanded="true"] > div:first-child{\n        width: 350px\n    }\n    [data-testid="stSidebar"][aria-expanded="false"] > div:first-child{\n        width: 350px\n        margin-left: -350px\n    }\n    </style>\n    """,\n    unsafe_allow_html=True,\n)\n')),(0,i.kt)("h2",{id:"create-image-page"},"Create Image Page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"StreamLit",src:a(5864).Z,width:"1227",height:"908"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'elif app_mode == \'Image\':\n    drawing_spec = mp.solutions.drawing_utils.DrawingSpec(thickness=2, circle_radius=1)\n\n    st.sidebar.markdown(\'---\')\n\n    ## Add Sidebar and Window style\n    st.markdown(\n        """\n        <style>\n        [data-testid="stSidebar"][aria-expanded="true"] > div:first-child{\n            width: 350px\n        }\n        [data-testid="stSidebar"][aria-expanded="false"] > div:first-child{\n            width: 350px\n            margin-left: -350px\n        }\n        </style>\n        """,\n        unsafe_allow_html=True,\n    )\n\n    st.markdown("**Detected Faces**")\n    kpil_text = st.markdown(\'0\')\n\n    max_faces = st.sidebar.number_input(\'Maximum Number of Faces\', value=2, min_value=1)\n    st.sidebar.markdown(\'---\')\n\n    detection_confidence = st.sidebar.slider(\'Min Detection Confidence\', min_value=0.0,max_value=1.0,value=0.5)\n    st.sidebar.markdown(\'---\')\n\n    img_file_buffer = st.sidebar.file_uploader("Upload an Image", type=["jpg","jpeg","png"])\n    if img_file_buffer is not None:\n        image = np.array(Image.open(img_file_buffer))\n\n    else:\n        demo_image = DEMO_IMAGE\n        image = np.array(Image.open(demo_image))\n\n    st.sidebar.text(\'Original Image\')\n    st.sidebar.image(image)\n\n    face_count=0\n\n    ## Dashboard\n    with mp.solutions.face_mesh.FaceMesh(\n        static_image_mode=True, #Set of unrelated images\n        max_num_faces=max_faces,\n        min_detection_confidence=detection_confidence\n    ) as face_mesh:\n\n            results = face_mesh.process(image)\n            out_image=image.copy()\n\n            #Face Landmark Drawing\n            for face_landmarks in results.multi_face_landmarks:\n                face_count += 1\n\n                mp.solutions.drawing_utils.draw_landmarks(\n                    image=out_image,\n                    landmark_list=face_landmarks,\n                    connections=mp.solutions.face_mesh.FACE_CONNECTIONS,\n                    landmark_drawing_spec=drawing_spec\n                )\n\n                kpil_text.write(f"<h1 style=\'text-align: center; color:red;\'>{face_count}</h1>", unsafe_allow_html=True)\n\n            st.subheader(\'Output Image\')\n            st.image(out_image, use_column_width=True)\n')),(0,i.kt)("h2",{id:"create-video-page"},"Create Video Page"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"StreamLit",src:a(46816).Z,width:"1227",height:"848"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"elif app_mode == 'Video':\n\n    st.set_option('deprecation.showfileUploaderEncoding', False)\n\n    use_webcam = st.sidebar.button('Use Webcam')\n    record = st.sidebar.checkbox(\"Record Video\")\n\n    if record:\n        st.checkbox('Recording', True)\n\n    drawing_spec = mp.solutions.drawing_utils.DrawingSpec(thickness=2, circle_radius=1)\n\n    st.sidebar.markdown('---')\n\n    ## Add Sidebar and Window style\n    st.markdown(\n        \"\"\"\n        <style>\n        [data-testid=\"stSidebar\"][aria-expanded=\"true\"] > div:first-child{\n            width: 350px\n        }\n        [data-testid=\"stSidebar\"][aria-expanded=\"false\"] > div:first-child{\n            width: 350px\n            margin-left: -350px\n        }\n        </style>\n        \"\"\",\n        unsafe_allow_html=True,\n    )\n\n    max_faces = st.sidebar.number_input('Maximum Number of Faces', value=5, min_value=1)\n    st.sidebar.markdown('---')\n    detection_confidence = st.sidebar.slider('Min Detection Confidence', min_value=0.0,max_value=1.0,value=0.5)\n    tracking_confidence = st.sidebar.slider('Min Tracking Confidence', min_value=0.0,max_value=1.0,value=0.5)\n    st.sidebar.markdown('---')\n\n    ## Get Video\n    stframe = st.empty()\n    video_file_buffer = st.sidebar.file_uploader(\"Upload a Video\", type=['mp4', 'mov', 'avi', 'asf', 'm4v'])\n    temp_file = tempfile.NamedTemporaryFile(delete=False)\n\n    if not video_file_buffer:\n        if use_webcam:\n            video = cv.VideoCapture(0)\n        else:\n            video = cv.VideoCapture(DEMO_VIDEO)\n            temp_file.name = DEMO_VIDEO\n\n    else:\n        temp_file.write(video_file_buffer.read())\n        video = cv.VideoCapture(temp_file.name)\n\n    width = int(video.get(cv.CAP_PROP_FRAME_WIDTH))\n    height = int(video.get(cv.CAP_PROP_FRAME_HEIGHT))\n    fps_input = int(video.get(cv.CAP_PROP_FPS))\n\n    ## Recording\n    codec = cv.VideoWriter_fourcc('a','v','c','1')\n    out = cv.VideoWriter('output1.mp4', codec, fps_input, (width,height))\n\n    st.sidebar.text('Input Video')\n    st.sidebar.video(temp_file.name)\n\n    fps = 0\n    i = 0\n\n    drawing_spec = mp.solutions.drawing_utils.DrawingSpec(thickness=2, circle_radius=1)\n\n    kpil, kpil2, kpil3 = st.columns(3)\n\n    with kpil:\n        st.markdown('**Frame Rate**')\n        kpil_text = st.markdown('0')\n\n    with kpil2:\n        st.markdown('**Detected Faces**')\n        kpil2_text = st.markdown('0')\n\n    with kpil3:\n        st.markdown('**Image Resolution**')\n        kpil3_text = st.markdown('0')\n\n    st.markdown('<hr/>', unsafe_allow_html=True)\n\n\n    ## Face Mesh\n    with mp.solutions.face_mesh.FaceMesh(\n        max_num_faces=max_faces,\n        min_detection_confidence=detection_confidence,\n        min_tracking_confidence=tracking_confidence\n\n    ) as face_mesh:\n\n            prevTime = 0\n\n            while video.isOpened():\n                i +=1\n                ret, frame = video.read()\n                if not ret:\n                    continue\n\n                results = face_mesh.process(frame)\n                frame.flags.writeable = True\n\n                face_count = 0\n                if results.multi_face_landmarks:\n\n                    #Face Landmark Drawing\n                    for face_landmarks in results.multi_face_landmarks:\n                        face_count += 1\n\n                        mp.solutions.drawing_utils.draw_landmarks(\n                            image=frame,\n                            landmark_list=face_landmarks,\n                            connections=mp.solutions.face_mesh.FACEMESH_CONTOURS,\n                            landmark_drawing_spec=drawing_spec,\n                            connection_drawing_spec=drawing_spec\n                        )\n\n                # FPS Counter\n                currTime = time.time()\n                fps = 1/(currTime - prevTime)\n                prevTime = currTime\n\n                if record:\n                    out.write(frame)\n\n                # Dashboard\n                kpil_text.write(f\"<h1 style='text-align: center; color:red;'>{int(fps)}</h1>\", unsafe_allow_html=True)\n                kpil2_text.write(f\"<h1 style='text-align: center; color:red;'>{face_count}</h1>\", unsafe_allow_html=True)\n                kpil3_text.write(f\"<h1 style='text-align: center; color:red;'>{width*height}</h1>\",\n                                 unsafe_allow_html=True)\n\n                frame = cv.resize(frame,(0,0), fx=0.8, fy=0.8)\n                frame = image_resize(image=frame, width=640)\n                stframe.image(frame,channels='BGR', use_column_width=True)\n")))}c.isMDXComponent=!0},70863:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/face_mesh_app_01-968ee4a1f7faf9eb21034937f7692520.png"},5864:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/face_mesh_app_02-d72131fae56911c5ba8a8a5980ae9dc4.png"},46816:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/face_mesh_app_03-63758b9c883cd6c0335eace5ee9a1440.png"},92353:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4f747fa38245d3c618169ab90d8c3f77.jpg"}}]);