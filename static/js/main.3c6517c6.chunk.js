(this.webpackJsonpvisualise_fundamentals=this.webpackJsonpvisualise_fundamentals||[]).push([[0],{407:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(21),r=n(24),s=n(20),o=n(78),d=n(443),j=n(444),l=n(229),h=n(230),b=n(56),u=n(100),O=n(241),x=window.location.origin;function p(t,e,n){return fetch("".concat(x,"/data/").concat(t,"/").concat(n,"/").concat(e,".json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}function f(t,e){return p(t,e,"info").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))}var m=n(23),g=n(132),v=n(4);function y(t){return Object(v.jsx)(g.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:t.children})}var w=n(462);var k=n(92),S=n(126),B=n(232),D=n(11),N=n(451),E=n(452),C=n(460),I=n(453),F=n(454),R=n(457),H=n(456),K=n(455),P=n(458),G=n(459),L=n(409),T=n(238),z=n.n(T),J=n(239),W=n.n(J),$=n(448),_=n(449),X=n(450),q=n(233),A=n.n(q),M=n(234),Q=n.n(M),U=n(235),V=n.n(U),Y=n(236),Z=n.n(Y),tt=n(237),et=n.n(tt),nt=Object(v.jsxs)("div",{children:[Object(v.jsxs)($.a,{button:!0,children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(A.a,{})}),Object(v.jsx)(X.a,{primary:"Dashboard"})]}),Object(v.jsxs)($.a,{button:!0,children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(Q.a,{})}),Object(v.jsx)(X.a,{primary:"Orders"})]}),Object(v.jsxs)($.a,{button:!0,children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(V.a,{})}),Object(v.jsx)(X.a,{primary:"Customers"})]}),Object(v.jsxs)($.a,{button:!0,children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(X.a,{primary:"Reports"})]}),Object(v.jsxs)($.a,{button:!0,children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(et.a,{})}),Object(v.jsx)(X.a,{primary:"Integrations"})]})]}),at=Object(N.a)((function(t){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(B.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},t.mixins.toolbar),appBar:{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerPaperClose:Object(S.a)({overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},t.breakpoints.up("sm"),{width:t.spacing(9)}),appBarSpacer:t.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:t.spacing(4),paddingBottom:t.spacing(4)},paper:{padding:t.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ct(t){var e=at(),n=c.a.useState(!0),a=Object(s.a)(n,2),i=a[0],r=a[1],o=Object(D.a)(e.paper,e.fixedHeight);return Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsx)(E.a,{}),Object(v.jsx)(I.a,{position:"absolute",className:Object(D.a)(e.appBar,i&&e.appBarShift),children:Object(v.jsxs)(F.a,{className:e.toolbar,children:[Object(v.jsx)(K.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},className:Object(D.a)(e.menuButton,i&&e.menuButtonHidden),children:Object(v.jsx)(z.a,{})}),Object(v.jsx)(g.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Dashboard"})]})}),Object(v.jsxs)(C.a,{variant:"permanent",classes:{paper:Object(D.a)(e.drawerPaper,!i&&e.drawerPaperClose)},open:i,children:[Object(v.jsx)("div",{className:e.toolbarIcon,children:Object(v.jsx)(K.a,{onClick:function(){r(!1)},children:Object(v.jsx)(W.a,{})})}),Object(v.jsx)(H.a,{}),Object(v.jsx)(R.a,{children:nt})]}),Object(v.jsxs)("main",{className:e.content,children:[Object(v.jsx)("div",{className:e.appBarSpacer}),Object(v.jsx)(P.a,{maxWidth:"lg",className:e.container,children:Object(v.jsx)(G.a,{container:!0,spacing:3,children:Object(v.jsx)(G.a,{item:!0,xs:12,md:8,lg:9,children:Object(v.jsx)(L.a,{className:o,children:t.children})})})})]})]})}Object(i.render)(Object(v.jsx)(c.a.Fragment,{children:Object(v.jsx)(ct,{children:Object(v.jsx)(k.a,{children:Object(v.jsxs)(m.c,{children:[Object(v.jsx)(m.a,{exact:!0,path:"/dividends/:market/:id",component:function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],x=Object(a.useState)("$"),g=Object(s.a)(x,2),w=g[0],k=g[1],S=Object(m.f)(),B=Object(o.a)();return Object(a.useEffect)((function(){var t,e;(t=S.market,e=S.id,p(t,e,"dividends").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))).then((function(t){var e,n=t,a=[],c=Object(r.a)(n);try{for(c.s();!(e=c.n()).done;){var s=e.value,o=new Date(s.Date);a.push({x:o.toLocaleDateString(),y:s.Dividends})}}catch(d){c.e(d)}finally{c.f()}i(a)})),f(S.market,S.id).then((function(t){k(t.currency)}))}),[S.id,S.market]),Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsxs)(y,{children:[S.id," dividends historical"]}),Object(v.jsx)(d.a,{children:Object(v.jsxs)(j.a,{width:500,height:300,data:n,margin:{top:5,right:30,left:20,bottom:5},children:[Object(v.jsx)(l.a,{dataKey:"x",stroke:B.palette.text.secondary}),Object(v.jsx)(h.a,{tickFormatter:function(t){return"".concat(w," ").concat(t)},stroke:B.palette.text.secondary}),Object(v.jsx)(b.a,{}),Object(v.jsx)(u.a,{}),Object(v.jsx)(O.a,{type:"monotone",dataKey:"y",name:"Dividends",stroke:B.palette.primary.main,dot:!1})]})})]})}}),Object(v.jsx)(m.a,{exact:!0,path:"/price/:market/:id",component:function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],x=Object(a.useState)("$"),g=Object(s.a)(x,2),w=g[0],k=g[1],S=Object(m.f)(),B=Object(o.a)();return Object(a.useEffect)((function(){var t,e;(t=S.market,e=S.id,p(t,e,"prices").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))).then((function(t){var e,n=t,a=[],c=Object(r.a)(n);try{for(c.s();!(e=c.n()).done;){var s=e.value,o=new Date(s.Date);a.push({x:o.toLocaleDateString(),y:s.Close})}}catch(d){c.e(d)}finally{c.f()}i(a)})),f(S.market,S.id).then((function(t){k(t.currency)}))}),[S.id,S.market]),Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsxs)(y,{children:[S.id," dividends historical"]}),Object(v.jsx)(d.a,{children:Object(v.jsxs)(j.a,{width:800,height:600,data:n,margin:{top:5,right:30,left:20,bottom:5},children:[Object(v.jsx)(l.a,{dataKey:"x",stroke:B.palette.text.secondary}),Object(v.jsx)(h.a,{tickFormatter:function(t){return"".concat(w," ").concat(t)}}),Object(v.jsx)(b.a,{}),Object(v.jsx)(u.a,{}),Object(v.jsx)(O.a,{type:"monotone",dataKey:"y",name:"Historical Price",stroke:B.palette.primary.main,dot:!1})]})})]})}}),Object(v.jsx)(m.a,{exact:!0,path:"/market/:market",component:function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],i=Object(m.f)();return Object(a.useEffect)((function(){var t;(t=i.market,fetch("".concat(x,"/data/").concat(t,"/dividendsRate"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))).then((function(t){var e=t.map((function(t){var e=Number((100*t.dividendRate).toFixed(2));return{name:"".concat(t.ticker," ").concat(e,"%"),dividends:e}}));c(e.sort((function(t,e){var n=t.dividends,a=e.dividends;return n>a?-1:n<a?1:0})))}))}),[i.market]),Object(v.jsx)("div",{style:{width:800,height:600},children:Object(v.jsx)(d.a,{width:"100%",height:"100%",children:Object(v.jsx)(w.a,{width:400,height:200,data:n,dataKey:"dividends",aspectRatio:4/3,stroke:"#fff",fill:"#8884d8"})})})}})]})})})}),document.getElementById("root"))}},[[407,1,2]]]);
//# sourceMappingURL=main.3c6517c6.chunk.js.map