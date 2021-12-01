(this.webpackJsonpvisualise_fundamentals=this.webpackJsonpvisualise_fundamentals||[]).push([[0],{398:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(22),i=a(60),o=a(30),s=a(15),l=a(73),j=a(6),d=a(455),u=a(456),b=a(475),h=a(457),O=a(458),m=a(460),x=a(112),f=a(461),p=a(462),v=a(448),g=a(453),y=a(454),k=a(212),w=a.n(k),D=a(452),N=a(2),S=Object(N.jsx)("div",{children:Object(N.jsxs)(v.a,{button:!0,component:D.a,href:"/#/market/US",children:[Object(N.jsx)(g.a,{children:Object(N.jsx)(w.a,{code:"us",height:"16"})}),Object(N.jsx)(y.a,{primary:"United States"})]})}),E=a(473),T=a(471),P="https://api.cheapstocks.app";function M(t,e,a){return fetch("".concat(P,"/markets/").concat(t,"/").concat(a,"/").concat(e,".json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}function R(t,e,a){return M(t,e,"".concat("key-metrics","/").concat(a)).then((function(t){if(null!=t)return t.sort((function(t,e){return t.date<e.date?-1:t.date>e.date?1:0})),t})).catch((function(t){console.log(t)}))}function C(t){return fetch("".concat(P,"/markets/").concat(t,"/general_metrics.json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}var K=Object(d.a)((function(t){return{root:{display:"flex"},toolbarIcon:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},t.mixins.toolbar),appBar:{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},title:{flexGrow:1},drawer:{width:180,flexShrink:0},drawerPaper:{width:180},drawerContainer:{overflow:"auto"},appBarSpacer:t.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:t.spacing(4),paddingBottom:t.spacing(4)}}})),F=window.location.origin;function _(t){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),c=a[0],r=a[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),d=o[0],v=o[1],g=K();return Object(n.useMemo)((function(){fetch("".concat(P,"/markets/symbols.json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)})).then((function(t){v(t)}))}),[]),Object(N.jsxs)("div",{className:g.root,children:[Object(N.jsx)(u.a,{}),Object(N.jsx)(h.a,{position:"absolute",className:Object(j.a)(g.appBar),children:Object(N.jsxs)(O.a,{children:[Object(N.jsx)(x.a,{component:"h1",href:F,variant:"h6",color:"inherit",noWrap:!0,className:g.title,children:"Visualizing Stocks"}),Object(N.jsx)(E.a,{autoHighlight:!0,id:"stocks_search",style:{width:"30%",backgroundColor:"#FFFFFF",height:"30%"},open:c,onOpen:function(){r(!0)},onClose:function(){r(!1)},getOptionSelected:function(t,e){return t===e},getOptionLabel:function(t){return"".concat(t)},options:d,onChange:function(t,e){!function(t){if(void 0!==t){var e=t.split("."),a="US";e.length>1&&(a=e[1]),window.location.href="/#/market/".concat(a,"/").concat(e[0])}}(e)},renderInput:function(t){return Object(N.jsx)(T.a,Object(l.a)(Object(l.a)({},t),{},{label:"Search for stock, market",variant:"outlined",InputProps:Object(l.a)({},t.InputProps)}))}})]})}),Object(N.jsxs)(b.a,{className:g.drawer,variant:"permanent",classes:{paper:Object(j.a)(g.drawerPaper)},children:[Object(N.jsx)(O.a,{}),Object(N.jsx)(f.a,{}),Object(N.jsx)("div",{className:g.drawerContainer,children:Object(N.jsx)(m.a,{children:S})})]}),Object(N.jsxs)("main",{className:g.content,children:[Object(N.jsx)("div",{className:g.appBarSpacer}),Object(N.jsx)(p.a,{className:g.container,children:t.children})]})]})}function A(t){return Object(N.jsx)(x.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:t.children})}var z=a(399),I=a(463),G=Object(d.a)((function(t){return{paper:{padding:t.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:800}}}));function B(t){var e=G(),a=Object(j.a)(e.paper,e.fixedHeight);return Object(N.jsx)(I.a,{container:!0,spacing:3,children:Object(N.jsx)(I.a,{item:!0,xs:12,children:Object(N.jsx)(z.a,{className:a,children:t.children})})})}var L=a(220),V=a.n(L),q=a(221),Y=a.n(q),H=a(464),U=a(222),J=a.n(U),W=a(465);var Q=a(38),X=a(466),Z=a(134),$=a(135),tt=a(111),et=a(108),at=a(235);var nt=a(470),ct=a(238),rt=a(476),it=Object(d.a)({root:{width:250},input:{width:42}}),ot=[5,25];function st(t,e){var a=t;return null==a||null==a.payload||null==a.payload[0]?null:Object(N.jsxs)(z.a,{elevation:3,children:[Object(N.jsxs)("p",{className:"label",children:["Name: ","".concat(a.payload[0].payload.name)]}),Object(N.jsxs)("p",{className:"intro",children:["Dividend/Price ratio: ","".concat(a.payload[0].payload.dividendsRatio.toFixed(1),"%")]}),Object(N.jsxs)("p",{className:"intro",children:["Category: ","".concat(a.payload[0].payload.category)]})]})}function lt(t){return"".concat(t,"%")}var jt=a(48),dt=a(477),ut=Object(d.a)((function(t){return Object(dt.a)({root:{width:250},margin:{height:t.spacing(3)}})}));var bt=a(133),ht=a(228);var Ot=Object(d.a)((function(t){return Object(dt.a)({root:{width:250},margin:{height:t.spacing(3)}})}));Object(r.render)(Object(N.jsx)(c.a.Fragment,{children:Object(N.jsx)(_,{children:Object(N.jsx)(i.a,{children:Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/market/:market/dividends/:id",component:function(){var t=Object(n.useState)(),e=Object(s.a)(t,2),a=e[0],c=e[1],r=Object(o.f)(),i=Object(Q.a)();return Object(n.useEffect)((function(){R(r.market,r.id,"quarter").then((function(t){void 0!==t&&c(t)}))}),[r.id,r.market]),Object(N.jsxs)(B,{children:[Object(N.jsxs)(A,{children:[r.id," dividends historical"]}),Object(N.jsx)(H.a,{children:Object(N.jsxs)(X.a,{width:500,height:300,data:a,margin:{top:5,right:30,left:20,bottom:5},children:[Object(N.jsx)(Z.a,{dataKey:"date",tickFormatter:function(t){return"".concat(new Date(t).getFullYear().toString())},stroke:i.palette.text.secondary}),Object(N.jsx)($.a,{dataKey:"dividendYield",stroke:i.palette.text.secondary}),Object(N.jsx)(tt.a,{formatter:function(t){return t.toFixed(3)}}),Object(N.jsx)(et.a,{}),Object(N.jsx)(at.a,{type:"monotone",dataKey:"dividendYield",name:"Dividends",stroke:i.palette.primary.main,dot:!1})]})})]})}}),Object(N.jsx)(o.a,{exact:!0,path:"/market/:market",component:function(){var t=Object(o.f)();return Object(N.jsxs)(B,{children:[Object(N.jsxs)(A,{children:[t.market," market insights"]}),Object(N.jsx)(H.a,{children:Object(N.jsxs)(I.a,{container:!0,children:[Object(N.jsx)(I.a,{item:!0,xs:!0,children:Object(N.jsxs)(v.a,{button:!0,component:D.a,href:"/#/market/".concat(t.market,"/dividends"),children:[Object(N.jsx)(g.a,{children:Object(N.jsx)(V.a,{style:{fontSize:120}})}),Object(N.jsx)(y.a,{primary:"Dividends"})]})}),Object(N.jsx)(I.a,{item:!0,xs:!0,children:Object(N.jsxs)(v.a,{button:!0,component:D.a,href:"/#/market/".concat(t.market,"/analysis"),children:[Object(N.jsx)(g.a,{children:Object(N.jsx)(Y.a,{style:{fontSize:120}})}),Object(N.jsx)(y.a,{primary:"Cheap Value Stocks"})]})}),Object(N.jsx)(I.a,{item:!0,xs:!0,children:Object(N.jsxs)(v.a,{button:!0,component:D.a,href:"/#/market/".concat(t.market,"/sector"),children:[Object(N.jsx)(g.a,{children:Object(N.jsx)(J.a,{style:{fontSize:120}})}),Object(N.jsx)(y.a,{primary:"Stocks by sector"})]})}),Object(N.jsx)(I.a,{item:!0,xs:!0,children:Object(N.jsxs)(v.a,{button:!0,component:D.a,href:"/#/market/".concat(t.market,"/dcf"),children:[Object(N.jsx)(g.a,{children:Object(N.jsx)(W.a,{style:{fontSize:120}})}),Object(N.jsx)(y.a,{primary:"Stocks by DCF ratio"})]})})]})})]})}}),Object(N.jsx)(o.a,{exact:!0,path:"/market/:market/dividends",component:function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),a=e[0],r=e[1],i=Object(n.useState)([]),l=Object(s.a)(i,2),j=l[0],d=l[1],u=Object(o.f)(),b=it(),h=c.a.useState(ot),O=Object(s.a)(h,2),m=O[0],f=O[1];return Object(n.useEffect)((function(){var t;(t=u.market,fetch("".concat(P,"/markets/").concat(t,"/dividendsRate.json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))).then((function(t){r(t)})),function(t){return fetch("".concat(P,"/markets/").concat(t,"/peers.json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}(u.market).then((function(t){d(t)}))}),[u.market]),Object(n.useMemo)((function(){for(var t=function(t){var e;return void 0===(n=j.find((function(e){return e.group.includes(a[t].name)})))||void 0===(c=n.peers.find((function(e){return e.symbol===a[t].name})))?"continue":void(a[t].category=null===(e=c)||void 0===e?void 0:e.industry)},e=0;e<a.length;e++){var n,c;t(e)}}),[a,j]),Object(N.jsxs)(B,{children:[Object(N.jsxs)(A,{children:[u.market," biggest dividends"]}),Object(N.jsx)(H.a,{width:"100%",height:"100%",children:Object(N.jsxs)(nt.a,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},children:[Object(N.jsx)(Z.a,{type:"category",dataKey:"category",allowDuplicatedCategory:!1}),Object(N.jsx)($.a,{type:"number",dataKey:"dividendsRatio",name:"ratio",unit:"%",domain:m,allowDataOverflow:!0}),Object(N.jsx)(tt.a,{content:Object(N.jsx)(st,{})}),Object(N.jsx)(ct.a,{name:"A school",data:a,fill:"#8884d8",onClick:function(t){return function(t){void 0!==(null===t||void 0===t?void 0:t.name)&&(window.location.href="/#/market/".concat(u.market,"/").concat(t.name))}(t)}})]})}),Object(N.jsxs)("div",{className:b.root,children:[Object(N.jsx)(x.a,{id:"range-slider",gutterBottom:!0,children:"Dividends Range"}),Object(N.jsx)(rt.a,{value:m,onChange:function(t,e){f(e)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:lt})]})]})}}),Object(N.jsx)(o.a,{exact:!0,path:"/market/:market/analysis",component:function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(0),i=Object(s.a)(r,2),l=i[0],j=i[1],d=Object(o.f)(),u=Object(n.useState)(20),b=Object(s.a)(u,2),h=b[0],O=b[1];Object(n.useEffect)((function(){C(d.market).then((function(t){var e=t;e.sort((function(t,e){return t._peNormalizedAnnual<e._peNormalizedAnnual?-1:0})),c(e)}))}),[d.market]),Object(n.useMemo)((function(){for(var t=0;t<a.length;t++)if(a[t]._peNormalizedAnnual>=h&&a[t]._peNormalizedAnnual<h+.2){j(t);break}}),[h,a]);var m=ut();function f(t,e){var a=t;if(null==a||null==a.payload||null==a.payload[0])return null;var n=a.payload[0].payload;return Object(N.jsxs)(z.a,{elevation:3,children:[Object(N.jsxs)("p",{className:"label",children:["Name: ","".concat(n.name)]}),Object(N.jsx)(p,{title:"P/E Ratio",data:n._peNormalizedAnnual,averageData:0}),Object(N.jsx)(p,{title:"Gross Margin",data:n._grossMarginTTM,averageData:0}),Object(N.jsx)(p,{title:"Net Margin",data:n._netProfitMarginTTM,averageData:0}),Object(N.jsx)(p,{title:"ROE",data:n._roeTTM,averageData:0}),Object(N.jsx)(p,{title:"Debt Ratio",data:n.debtNetIncomeRatio,averageData:0}),Object(N.jsx)(p,{title:"Enterprise Value",data:n.enterpriseValueMultipleTTM,averageData:0}),Object(N.jsxs)("p",{className:"intro",children:["Category: ","".concat(n.category)]})]})}var p=function(t){var e=0;return null!==t.data&&(e=t.data),Object(N.jsxs)("p",{className:"intro",children:[t.title,": ","".concat(e.toFixed(2))]})};return Object(N.jsxs)(B,{children:[Object(N.jsxs)(A,{children:[d.market," smallest P/E"]}),Object(N.jsx)(H.a,{width:"100%",height:"100%",children:Object(N.jsxs)(nt.a,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},children:[Object(N.jsx)(Z.a,{type:"category",dataKey:"category",allowDuplicatedCategory:!1,minTickGap:1}),Object(N.jsx)($.a,{type:"number",dataKey:"_peNormalizedAnnual",name:"ratio",allowDataOverflow:!0,children:Object(N.jsx)(jt.a,{value:"P/E",offset:0,position:"insideLeft"})}),Object(N.jsx)(tt.a,{content:Object(N.jsx)(f,{})}),Object(N.jsx)(ct.a,{name:"A school",data:a.slice(0,l),fill:"#8884d8",onClick:function(t){return function(t){void 0!==(null===t||void 0===t?void 0:t.name)&&(window.location.href="/#/market/".concat(d.market,"/").concat(t.name))}(t)}})]})}),Object(N.jsxs)("div",{className:m.root,children:[Object(N.jsx)(x.a,{id:"track-inverted-slider",gutterBottom:!0,children:"Max P/E ratio"}),Object(N.jsx)(rt.a,{track:"inverted","aria-labelledby":"track-inverted-slider",getAriaValueText:function(t){return"".concat(t,"%")},value:h,onChange:function(t,e){"number"===typeof e&&O(e)},valueLabelDisplay:"auto"})]})]})}}),Object(N.jsx)(o.a,{exact:!0,path:"/market/:market/sector",component:function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),j=i[0],d=i[1],u=Object(n.useState)([]),b=Object(s.a)(u,2),h=b[0],O=b[1],m=Object(n.useState)([]),x=Object(s.a)(m,2),f=x[0],p=x[1],v=Object(o.f)();function g(t,e){var a=t;if(null==a||null==a.payload||null==a.payload[0])return null;var n=a.payload[0].payload;return Object(N.jsxs)(z.a,{elevation:3,children:[Object(N.jsxs)("p",{className:"label",children:["Name: ","".concat(n.name)]}),Object(N.jsx)(y,{title:"P/E Ratio",data:n._peNormalizedAnnual,averageData:0}),Object(N.jsx)(y,{title:"Gross Margin",data:n._grossMarginTTM,averageData:0}),Object(N.jsx)(y,{title:"Net Margin",data:n._netProfitMarginTTM,averageData:0}),Object(N.jsx)(y,{title:"ROE",data:n._roeTTM,averageData:0}),Object(N.jsx)(y,{title:"Debt Ratio:",data:n.debtNetIncomeRatio,averageData:0}),Object(N.jsxs)("p",{className:"intro",children:["Category: ","".concat(n.category)]})]})}Object(n.useEffect)((function(){C(v.market).then((function(t){var e=t;c(e);for(var a=[],n=0;n<e.length;n++)a.includes(e[n].category)||a.push(e[n].category);a.sort(),p(a)}))}),[v.market]),Object(n.useMemo)((function(){if(h!==[]){for(var t=[],e=a.length,n=0;n<e;n++)h.includes(a[n].category)&&t.push(a[n]);d(t)}}),[h,a]);var y=function(t){var e=0;return null!==t.data&&(e=t.data),Object(N.jsxs)("p",{className:"intro",children:[t.title,": ","".concat(e.toFixed(2))]})};return Object(N.jsxs)(B,{children:[Object(N.jsxs)(A,{children:[v.market," - ",h," P/E vs Net Margin"]}),Object(N.jsx)(E.a,{multiple:!0,id:"tags-standard",options:f,getOptionLabel:function(t){return"".concat(t)},onChange:function(t,e){!function(t){O(t)}(e)},renderInput:function(t){return Object(N.jsx)(T.a,Object(l.a)(Object(l.a)({},t),{},{variant:"standard",label:"Stock Industries",placeholder:"Industries"}))}}),Object(N.jsx)(H.a,{width:"100%",height:"85%",children:Object(N.jsxs)(nt.a,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},children:[Object(N.jsx)(Z.a,{type:"number",dataKey:"_netProfitMarginTTM",domain:[-1,1],allowDataOverflow:!0,children:Object(N.jsx)(jt.a,{value:"Net Margin",offset:0,position:"bottom"})}),Object(N.jsx)($.a,{type:"number",dataKey:"_peNormalizedAnnual",domain:[-20,50],allowDataOverflow:!0,children:Object(N.jsx)(jt.a,{value:"P/E",offset:0,position:"insideLeft"})}),Object(N.jsx)(tt.a,{content:Object(N.jsx)(g,{})}),Object(N.jsx)(ct.a,{name:"A school",data:j,fill:"#8884d8",onClick:function(t){return function(t){void 0!==(null===t||void 0===t?void 0:t.name)&&(window.location.href="/#/market/".concat(v.market,"/").concat(t.name))}(t)},children:Object(N.jsx)(bt.a,{dataKey:"name",position:"top"})}),Object(N.jsx)(ht.a,{y:0,stroke:"#000000"}),Object(N.jsx)(ht.a,{x:0,stroke:"#000000"})]})})]})}}),Object(N.jsx)(o.a,{exact:!0,path:"/market/:market/dcf",component:function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),a=e[0],c=e[1],r=Object(o.f)(),i=Object(n.useState)(1),l=Object(s.a)(i,2),j=l[0],d=l[1];Object(n.useEffect)((function(){var t;(t=r.market,fetch("".concat(P,"/markets/").concat(t,"/dcf.json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))).then((function(t){var e=t;e.sort((function(t,e){return t.ratio<e.ratio?-1:0})),c(e)}))}),[r.market]);var u=Ot();function b(t,e){var a=t;if(null==a||null==a.payload||null==a.payload[0])return null;var n=a.payload[0].payload;return Object(N.jsxs)(z.a,{elevation:3,children:[Object(N.jsxs)("p",{className:"label",children:["Symbol: ","".concat(n.symbol)]}),Object(N.jsx)(h,{title:"Price",data:n.price,averageData:0}),Object(N.jsx)(h,{title:"Target Price",data:n.target_price,averageData:0}),Object(N.jsxs)("p",{className:"label",children:["Date: ","".concat(n.date)]})]})}var h=function(t){var e=0;return null!==t.data&&(e=t.data),Object(N.jsxs)("p",{className:"intro",children:[t.title,": ","".concat(e.toFixed(2))]})};return Object(N.jsxs)(B,{children:[Object(N.jsxs)(A,{children:[r.market," DCF biggest delta"]}),Object(N.jsx)(H.a,{width:"100%",height:"100%",children:Object(N.jsxs)(nt.a,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},children:[Object(N.jsx)(Z.a,{type:"category",dataKey:"category",allowDuplicatedCategory:!1,minTickGap:1}),Object(N.jsx)($.a,{type:"number",dataKey:"ratio",name:"ratio",allowDataOverflow:!0,domain:[1,10]}),Object(N.jsx)(tt.a,{content:Object(N.jsx)(b,{})}),Object(N.jsx)(ct.a,{name:"A school",data:a,fill:"#8884d8",onClick:function(t){return function(t){void 0!==(null===t||void 0===t?void 0:t.symbol)&&(window.location.href="/#/market/".concat(r.market,"/").concat(t.symbol))}(t)}})]})}),Object(N.jsxs)("div",{className:u.root,children:[Object(N.jsx)(x.a,{id:"track-inverted-slider",gutterBottom:!0,children:"Minimium ratio"}),Object(N.jsx)(rt.a,{track:"inverted","aria-labelledby":"track-inverted-slider",getAriaValueText:function(t){return"".concat(t,"%")},value:j,onChange:function(t,e){"number"===typeof e&&d(e)},valueLabelDisplay:"auto"})]})]})}}),Object(N.jsx)(o.a,{exact:!0,path:"/market/:market/:stock",component:function(){var t,e=Object(o.f)(),a=Object(n.useState)(),r=Object(s.a)(a,2),i=r[0],l=r[1],j=Object(n.useState)(),d=Object(s.a)(j,2),u=d[0],b=d[1],h=Object(n.useState)(),O=Object(s.a)(h,2),m=O[0],f=O[1];function p(t){return Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)(x.a,{variant:"h6",color:"inherit",children:t.title}),Object(N.jsxs)(X.a,{width:300,height:100,data:u,children:[Object(N.jsx)(Z.a,{dataKey:"date"}),Object(N.jsx)($.a,{hide:!0}),Object(N.jsx)(at.a,{type:"monotone",dataKey:t.dataKey,stroke:"#8884d8",name:t.label,strokeWidth:2}),Object(N.jsx)(tt.a,{formatter:function(t){return t.toFixed(3)}})]})]})}return Object(n.useEffect)((function(){var t,a;(t=e.market,a=e.stock,M(t,a,"info").then((function(t){if(null!=t)return t[0]})).catch((function(t){console.log(t)}))).then((function(t){void 0!==t&&l(t)})),R(e.market,e.stock,"quarter").then((function(t){void 0!==t&&b(t)})),function(t,e){return fetch("".concat(P,"/markets/").concat(t,"/dcf/").concat(e,".json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}(e.market,e.stock).then((function(t){void 0!==t&&f(t)}))}),[e.market,e.stock]),Object(N.jsx)(H.a,{width:"100%",height:"100%",children:Object(N.jsxs)(B,{children:[Object(N.jsxs)(A,{children:[e.stock," - ",null===i||void 0===i?void 0:i.companyName]}),Object(N.jsxs)(x.a,{variant:"h5",color:"inherit",children:["Industry: ",null===i||void 0===i?void 0:i.industry]}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsxs)(I.a,{container:!0,spacing:4,children:[Object(N.jsxs)(I.a,{item:!0,spacing:5,children:[Object(N.jsx)(x.a,{variant:"h4",color:"inherit",children:"Income and Revenue"}),Object(N.jsx)(p,{title:"ROE",dataKey:"roe",label:"Ratio",description:"Profit/Equity"}),Object(N.jsx)(p,{title:"EPS",dataKey:"earningsYield",label:"Ratio",description:"Earns per Share"})]}),Object(N.jsxs)(I.a,{item:!0,children:[Object(N.jsx)(x.a,{variant:"h4",color:"inherit",children:"Debt and liabilites"}),Object(N.jsx)(p,{title:"Debt to Equity",dataKey:"debtToEquity",label:"Ratio",description:"Total Debt/Equity"}),Object(N.jsx)(p,{title:"Current Ratio",dataKey:"currentRatio",label:"Ratio",description:"Assets/Liabilities"})]}),Object(N.jsxs)(I.a,{item:!0,children:[Object(N.jsx)(x.a,{variant:"h4",color:"inherit",children:"Dividends"}),Object(N.jsx)(p,{title:"Dividends",dataKey:"dividendYield",label:"Dividend Ratio",description:"Dividends/Stock Price"})]}),Object(N.jsxs)(I.a,{item:!0,children:[Object(N.jsx)(x.a,{variant:"h4",color:"inherit",children:"Ratios"}),Object(N.jsx)(p,{title:"Price to Book",dataKey:"pbRatio",label:"Ratio",description:"Price to assets"}),Object(N.jsx)(p,{title:"P/E historical",dataKey:"peRatio",label:"Ratio",description:"P/E historical"})]}),Object(N.jsxs)(I.a,{item:!0,children:[Object(N.jsx)(x.a,{variant:"h4",color:"inherit",children:"DCF"}),Object(N.jsxs)(x.a,{variant:"h5",color:"inherit",children:["Price: ",null===m||void 0===m?void 0:m["Stock Price"]]}),Object(N.jsxs)(x.a,{variant:"h5",color:"inherit",children:["Target Price: ",null===m||void 0===m||null===(t=m.dcf)||void 0===t?void 0:t.toFixed(.2)]})]})]})]})})}})]})})})}),document.getElementById("root"))}},[[398,1,2]]]);
//# sourceMappingURL=main.b8544fa3.chunk.js.map