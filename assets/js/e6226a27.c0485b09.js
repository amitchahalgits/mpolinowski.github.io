"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[54456],{326294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(785893),r=t(603905);const o={sidebar_position:5894,slug:"2023-12-15",title:"Simple Redux",authors:"mpolinowski",tags:["Javascript","React"],description:"Redux and Redux Devtools Setup"},a=void 0,i={id:"Development/Javascript/2023-12-15-reactjs-typescript-redux/index",title:"Simple Redux",description:"Redux and Redux Devtools Setup",source:"@site/docs/Development/Javascript/2023-12-15-reactjs-typescript-redux/index.md",sourceDirName:"Development/Javascript/2023-12-15-reactjs-typescript-redux",slug:"/Development/Javascript/2023-12-15-reactjs-typescript-redux/2023-12-15",permalink:"/docs/Development/Javascript/2023-12-15-reactjs-typescript-redux/2023-12-15",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2023-12-15-reactjs-typescript-redux/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:5894,frontMatter:{sidebar_position:5894,slug:"2023-12-15",title:"Simple Redux",authors:"mpolinowski",tags:["Javascript","React"],description:"Redux and Redux Devtools Setup"},sidebar:"tutorialSidebar",previous:{title:"Javascript",permalink:"/docs/category/javascript"},next:{title:"Typescript for Web APIs",permalink:"/docs/Development/Javascript/2023-12-31-js-typescript-rest/2023-12-31"}},c={},d=[{value:"Setup",id:"setup",level:2},{value:"Basic Redux Todo List",id:"basic-redux-todo-list",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"TST, Hongkong",src:t(125768).Z+"",width:"2359",height:"864"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#setup",children:"Setup"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#basic-redux-todo-list",children:"Basic Redux Todo List"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm init -y && tsc --init\nnpm install --save-dev webpack webpack-cli webpack webpack-dev-server\nnpm install --save-dev @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript ts-loader\nnpm install redux @redux-devtools/extension\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"./tsconfig.json"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "include": ["./src"],\n  "exclude": ["./node_modules", "./src/bak"],\n  "compilerOptions": {\n    "target": "es6",\n    "jsx": "react",\n    "module": "es6",\n    "moduleResolution": "node",\n    "allowJs": true,\n    "sourceMap": true,\n    "outDir": "./public/src/",\n    "esModuleInterop": true,\n    "forceConsistentCasingInFileNames": true,\n    "strict": true,\n    "skipLibCheck": true\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"./package.json"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "react-redux-2024",\n  "version": "1.0.0",\n  "description": "",\n  "main": "dist/index.js",\n  "scripts": {\n    "tsc": "tsc --watch",\n    "dev": "node public/index.js",\n    "serve": "webpack serve",\n    "build": "webpack"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "@types/lodash": "^4.14.202",\n    "@types/node": "^20.11.5",\n    "@typescript-eslint/eslint-plugin": "^6.19.0",\n    "@typescript-eslint/parser": "^6.19.0",\n    "eslint": "^8.56.0",\n    "ts-loader": "^9.5.1",\n    "typescript": "^5.3.3",\n    "webpack": "^5.89.0",\n    "webpack-cli": "^5.1.4",\n    "webpack-dev-server": "^4.15.1"\n  },\n  "dependencies": {\n    "lodash": "^4.17.21"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"./webpack.config.js"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const path = require('path');\n\nmodule.exports = {\n    entry: './src/index.ts',\n    devtool: 'inline-source-map',\n    module: {\n      rules: [\n        {\n          test: /\\.tsx?$/,\n          use: 'ts-loader',\n          exclude: /node_modules/,\n        },\n      ],\n    },\n    resolve: {\n      extensions: ['.tsx', '.ts', '.js'],\n    },\n    output: {\n      filename: 'bundle.js',\n      path: path.resolve(__dirname, 'public'),\n    },\n  devServer: {\n    static: {\n      directory: path.resolve(__dirname, 'public'),\n    },\n    hot: true,\n    port: 3000\n  },\n  devtool: \"source-map\",\n  mode: 'development'\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"basic-redux-todo-list",children:"Basic Redux Todo List"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"./src/store/tasks/actionTypes.js"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'export const ADD_TASK = "ADD_TASK"\nexport const TASK_DONE = "TASK_DONE"\nexport const REMOVE_TASK = "REMOVE_TASK"\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"./src/store/tasks/actions.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import * as actionTypes from './actionTypes'\n\nexport const addTask = (task: string) => {\n    return {\n        type: actionTypes.ADD_TASK,\n        payload: {\n        task: task\n        }\n    }\n}\n\nexport const taskCompleted = (id: number, completed: boolean) => {\n  return {\n      type: actionTypes.TASK_DONE,\n      payload: {\n        id: id,\n        completed: completed\n      }\n  }\n}\n\nexport const removeTask = (taskid: number) => {\n    return {\n        type: actionTypes.REMOVE_TASK,\n        payload: {\n          id: taskid\n        }\n      }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"./src/store/tasks/reducer.js"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import * as actionTypes from '../actions/actionTypes'\n\nlet id = 0\n\nexport function taskReducer(state = [], action) {\n    switch(action.type) {\n        case actionTypes.ADD_TASK:\n            return [\n                ...state,\n                {\n                    id: ++id,\n                    task: action.payload.task,\n                    completed: false\n                }\n            ]\n        case actionTypes.TASK_DONE:\n            return state.map(task => task.id === action.payload.id ? {\n                ...task, completed: true\n            } : task)\n        case actionTypes.REMOVE_TASK:\n            return state.filter(task => task.id !== action.payload.id)\n\n        default:\n            return state\n    } \n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"./src/store/configuration\n.js"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { legacy_createStore as createStore} from 'redux'\nimport { composeWithDevTools } from '@redux-devtools/extension';\nimport { taskReducer } from './tasks/reducer'\n\nconst composeEnhancers = composeWithDevTools({\n    trace: true,\n});\n\nconst store = createStore(\n    taskReducer,\n    /* preloadedState, */ composeEnhancers(),\n    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()\n    // https://github.com/reduxjs/redux-devtools/tree/main/extension#installation\n    )\n\nexport default store\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now with the store build and the reducer defined you can add the following to:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"./src/index.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import store from './store/configuration\n'\nimport { addTask, removeTask, taskCompleted } from './store/tasks/actions'\n\nconst unsubscribe = store.subscribe(() => {\n  console.log(\"State updated ::\", store.getState())\n})\n\nstore.dispatch(addTask('Hello Task!'))\nstore.dispatch(taskCompleted(1, true))\nstore.dispatch(removeTask(1))\nunsubscribe()\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will create a new task and store it inside your store, update it's completion state and then remove it. Check your Browser console for the log output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'State updated :: [\n  {\n    "id": 1,\n    "task": "Hello Task!",\n    "completed": false\n  }\n]\n\nState updated :: [\n  {\n    "id": 1,\n    "task": "Hello Task!",\n    "completed": true\n  }\n]\n\nState updated :: []\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>d});var s=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),d=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},p=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return t?s.createElement(h,a(a({ref:n},p),{},{components:t})):s.createElement(h,a({ref:n},p))}));p.displayName="MDXCreateElement"},125768:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c3aedc7eed015cc5372c21f9c394693d.jpg"}}]);