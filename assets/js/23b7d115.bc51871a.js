"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[14875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:9070,slug:"2022-05-04",title:"React Native Hooks",authors:"mpolinowski",tags:["Javascript","React","ReactNative"]},i=void 0,s={unversionedId:"Development/ReactNative/2022-05-04-react-native-hooks/index",id:"Development/ReactNative/2022-05-04-react-native-hooks/index",title:"React Native Hooks",description:"Victoria Harbour, Hongkong",source:"@site/docs/Development/ReactNative/2022-05-04-react-native-hooks/index.md",sourceDirName:"Development/ReactNative/2022-05-04-react-native-hooks",slug:"/Development/ReactNative/2022-05-04-react-native-hooks/2022-05-04",permalink:"/docs/Development/ReactNative/2022-05-04-react-native-hooks/2022-05-04",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/ReactNative/2022-05-04-react-native-hooks/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"},{label:"ReactNative",permalink:"/docs/tags/react-native"}],version:"current",sidebarPosition:9070,frontMatter:{sidebar_position:9070,slug:"2022-05-04",title:"React Native Hooks",authors:"mpolinowski",tags:["Javascript","React","ReactNative"]},sidebar:"tutorialSidebar",previous:{title:"React Native Context & Hooks",permalink:"/docs/Development/ReactNative/2022-05-05-react-native-context-hooks/2022-05-05"},next:{title:"React Native Context API",permalink:"/docs/Development/ReactNative/2022-05-03-react-native-contextapi/2022-05-03"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"useState Hook in Functional Components",id:"usestate-hook-in-functional-components",level:2},{value:"Working with Form Data",id:"working-with-form-data",level:3},{value:"useEffect Hook in Functional Components",id:"useeffect-hook-in-functional-components",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Victoria Harbour, Hongkong",src:n(47707).Z,width:"1500",height:"565"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setup"},"Setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usestate-hook-in-functional-components"},"useState Hook in Functional Components"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#working-with-form-data"},"Working with Form Data")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#useeffect-hook-in-functional-components"},"useEffect Hook in Functional Components"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/react-native-hooks"},"Github Repository")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g expo-cli\nexpo init react-native-hooks\n")),(0,a.kt)("p",null,"Choose the ",(0,a.kt)("strong",{parentName:"p"},"blank")," template and run the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd react-native-hooks\nnpm install styled-components\nnpm start\n")),(0,a.kt)("p",null,"I can test code by scanning the QR Code using the ",(0,a.kt)("strong",{parentName:"p"},"Expo Go")," app under Android or by pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," key to activate a web preview."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"error:0308010C:digital envelope routines::unsupported"),": Newer versions of Node.js use OpenSSLv3 that brought some ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.openssl.org/index.php/OpenSSL_3.0#Upgrading_to_OpenSSL_3.0_from_OpenSSL_1.0.2"},"breaking changes"),". Can be fixed (",(0,a.kt)("strong",{parentName:"p"},">=Nodejs v17"),") by adding the following option to the start script inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},'"start": "export NODE_OPTIONS=--openssl-legacy-provider && expo start"'))),(0,a.kt)("h2",{id:"usestate-hook-in-functional-components"},"useState Hook in Functional Components"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," function allows us to access state in functional components. In a ",(0,a.kt)("a",{parentName:"p",href:"obsidian://open?vault=Obsidian%20Vault&file=2022-05-02-react-native-navigation%2F2022-05-02-react-native-navigation"},"previous example")," we used state in a class component to add items to a React Native ",(0,a.kt)("strong",{parentName:"p"},"FlatList"),". Here is how this would look like in a functional component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, {useState} from 'react'\nimport { View, Text } from 'react-native'\nimport { v4 as uuidv4 } from 'uuid';\n\nimport { StyledList, ListButton, ListButtonTitle } from './_styles'\n\nconst ToDoList = () => {\n\n    const [todos, setTodos] = useState([\n        {text: 'Qu\xe9 tengas un lindo d\xeda!', id: `${uuidv4()}`},\n    ])\n\n    const addTodo = () => {\n        setTodos([...todos, {text: '\xa1Y otra cosa que hacer!', id: `${uuidv4()}`}])\n    }\n\n    return (\n        <View>\n            <StyledList \n                data={todos}\n                keyExtractor={(todo) => todo.id}\n                renderItem={ ({ item }) => {\n                    return (\n                        <Text>{item.text}</Text>\n                    )\n                }}\n            />\n            <ListButton onPress={addTodo}>\n                <ListButtonTitle>A\xf1adir art\xedculo</ListButtonTitle>\n            </ListButton>\n        </View>\n    )\n}\n\nexport default ToDoList\n")),(0,a.kt)("h3",{id:"working-with-form-data"},"Working with Form Data"),(0,a.kt)("p",null,"Instead of adding some hard coded text we can now create an input field and use the user input to add new items to our list. This will be done in a component ",(0,a.kt)("strong",{parentName:"p"},"AddToDo")," that will feed the user input into our ",(0,a.kt)("inlineCode",{parentName:"p"},"addTodo")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, {useState} from 'react'\nimport { View, Text } from 'react-native'\nimport { v4 as uuidv4 } from 'uuid';\n\nimport { StyledList } from './_styles'\nimport AddToDo from './AddToDo';\n\nconst ToDoList = () => {\n\n    const [todos, setTodos] = useState([\n        {text: 'Qu\xe9 tengas un lindo d\xeda!', id: `${uuidv4()}`},\n    ])\n\n    const addTodo = (text) => {\n        setTodos([...todos, { text, id: `${uuidv4()}`}])\n    }\n\n    return (\n        <View>\n            <StyledList \n                data={todos}\n                keyExtractor={(todo) => todo.id}\n                renderItem={ ({ item }) => {\n                    return (\n                        <Text>{item.text}</Text>\n                    )\n                }}\n            />\n            <AddToDo addTodo={addTodo} />\n        </View>\n    )\n}\n\nexport default ToDoList\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, {useState} from 'react'\n\nimport {StyledTextInput, ListButton, ListButtonTitle, FormContainer, FormHeader } from './_styles'\n\nconst AddToDo = ({addTodo}) => {\n\n    const [input, setTodo] = useState('')\n\n    const onButtonPress = () => {\n        // Push input from state to parent component to add to list\n        addTodo(input)\n        // Clean input field once done\n        setTodo('')\n    }\n\n    return (\n        <FormContainer>\n                <FormHeader>Agregar un nuevo elemento de tareas pendientes:</FormHeader>\n            <StyledTextInput \n                // set value of field to it's content\n                value={input}\n                // update state with the user input text\n                onChangeText={(text) => setTodo(text)}\n            />\n            <ListButton onPress={onButtonPress} >\n                <ListButtonTitle>A\xf1adir art\xedculo</ListButtonTitle>\n            </ListButton>\n        </FormContainer>\n    )\n}\n\nexport default AddToDo\n")),(0,a.kt)("h2",{id:"useeffect-hook-in-functional-components"},"useEffect Hook in Functional Components"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," replaces the life cycle function that allows you to run functions every time a component renders:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect (() => {\n        console.log('useEffect', todos)\n    })\n")),(0,a.kt)("p",null,"We can limit the function to only run when a certain value changes, e.g. :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect (() => {\n        console.log('useEffect', todos)\n    }, [todos])\n")))}u.isMDXComponent=!0},47707:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-23d027067cc9016279f834178a642545.jpg"}}]);