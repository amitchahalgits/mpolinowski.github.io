"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[18707],{72389:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(67294),l=a(39962),s=a(91764),i=a(2984),n=a(79658),c=a(81929),o=a(95685),d=a(536),m=a(19591);const h=function(){return r.createElement(i.Z,{url:"https://search.instar.wiki",app:"dev_2022_08_20"},r.createElement(n.Z,{componentId:"searchbox",placeholder:"Search Assistant",className:"SearchBox",searchOperators:!0,autosuggest:!0,highlight:!0,fuzziness:1,debounce:100,showFilter:!0,filterLabel:"Filter",URLParams:!0,dataField:[{field:"title",weight:5},{field:"description",weight:3},{field:"tags",weight:5},{field:"abstract",weight:2},{field:"short",weight:2}]}),r.createElement(c.Z,null),r.createElement(o.Z,{componentId:"results",dataField:"_score",size:36,stream:!0,pagination:!0,paginationAt:"bottom",loader:"Loading Results..",showResultStats:!0,scrollOnChange:!0,sortOptions:[{label:"Published",dataField:"date.raw",sortBy:"desc"},{label:"Best Match",dataField:"_score",sortBy:"desc"}],react:{and:["searchbox","searchfilter"]},render:e=>{let{data:t}=e;return r.createElement(o.Z.ResultCardsWrapper,null,t.map((e=>r.createElement("a",{target:"_self",href:e.link,className:"SearchLink"},r.createElement(d.Z,{key:e._id},r.createElement(d.Z.Image,{className:"SearchSquareImage",src:e.imagesquare}),r.createElement(d.Z.Title,{className:"SearchTitle",dangerouslySetInnerHTML:{__html:e.title}}),r.createElement(d.Z.Description,{className:"SearchDescription"},e.abstract))))))}}),r.createElement(m.Z,{componentId:"searchfilter",dataField:"tags.raw",title:"Filter by Tags",aggregationSize:5,size:100,queryFormat:"and",showSearch:!1,showFilter:!0,URLParams:!0,loader:"Loading ..."}))};function u(){const{siteConfig:e}=(0,l.Z)();return r.createElement(s.Z,{title:`Hello from ${e.title}`,description:"Development Notebook"},r.createElement("main",null,r.createElement("div",{className:"container"},r.createElement(h,null))))}}}]);