(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{48:function(n,e,t){},60:function(n,e,t){"use strict";t.r(e);var i,r,c,a,o=t(1),s=t.n(o),d=t(38),l=t.n(d),j=(t(48),t(62)),u=t(39),h=t(6),b=t(63),x=function(n){return n?+n.split("location/")[1]:null},O=t(8),p=t(29),g=t(18),m=t(9),f=t(0),v=m.a.div(i||(i=Object(O.a)(["\n  flex: 1 1 0%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  span.title {\n    color: rgb(158, 158, 158);\n    font-size: 16px;\n    font-weight: 500;\n  }\n  span.value {\n    color: rgb(245, 245, 245);\n  }\n"]))),y=function(n){var e=n.left,t=n.children,i=n.onClick,r=n.width,c=n.height,a=n.isLoading,o=Object(g.a)(n,["left","children","onClick","width","height","isLoading"]);return Object(f.jsxs)($,Object(h.a)(Object(h.a)(Object(h.a)({},i?{onClick:i,$clickable:!0}:{}),{},{$width:r,$height:c},o),{},{children:[a&&Object(f.jsx)(J,{id:"card-loader"}),e&&Object(f.jsx)(z,{children:e}),Object(f.jsx)(F,{children:t})]}))};y.Section=function(n){var e=n.title,t=n.children,i=Object(g.a)(n,["title","children"]);return Object(f.jsxs)(v,Object(h.a)(Object(h.a)({},i),{},{children:[e&&Object(f.jsx)("span",{className:"title",children:e}),Object(f.jsx)("span",{className:"value",children:t})]}))};var k,w,C,L,S,I,A,R,$=m.a.article(r||(r=Object(O.a)(["\n  position: relative;\n  display: flex;\n  flex: 0 1 ",";\n  ",";\n  overflow: hidden;\n  background: rgb(60, 62, 68) none repeat scroll 0% 0%;\n  border-radius: 0.5rem;\n  margin: 0.75rem;\n  transition: all 0.2s;\n\n  ","\n"])),(function(n){return n.$width||"auto"}),(function(n){return"height: "+n.$height}),(function(n){return n.$clickable&&"\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.05);\n  }\n  "})),z=m.a.div(c||(c=Object(O.a)(["\n  position: relative;\n  flex: 2 1 0%;\n  width: 100%;\n"]))),F=m.a.div(a||(a=Object(O.a)(["\n  flex: 3 1 0%;\n  position: relative;\n  padding: 0.75rem;\n  color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n"]))),B=function(n){var e=n.status;return Object(f.jsx)(N,{$color:D(e)})},N=m.a.span(k||(k=Object(O.a)(["\n  height: 0.5rem;\n  width: 0.5rem;\n  margin-right: 0.375rem;\n  background: ",";\n  border-radius: 50%;\n  margin-top: 2px;\n"])),(function(n){return n.$color})),D=function(n){return"Dead"===n?"rgb(214, 61, 46)":"Alive"===n?"rgb(85, 204, 68)":"rgb(224, 184, 72)"},T=t(43),E=t.p+"static/media/placeholder.049210b4.jpeg",G=Object(o.memo)((function(n){var e=n.src,t=Object(g.a)(n,["src"]),i=Object(o.useState)(!0),r=Object(T.a)(i,2),c=r[0],a=r[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(P,Object(h.a)(Object(h.a)({},t),{},{onLoad:function(){return a(!1)},src:c?E:e})),c&&Object(f.jsx)(J,{id:"image-loader"})]})})),P=m.a.img(w||(w=Object(O.a)(["\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  opacity: 1;\n  object-fit: cover;\n  object-position: center center;\n  transition: opacity 0.5s ease 0s;\n"]))),W=s.a.memo((function(n){return Object(f.jsx)(H,Object(h.a)({},n))})),H=m.a.button(C||(C=Object(O.a)(["\n  background: rgb(60, 62, 68) none repeat scroll 0% 0%;\n  color: white;\n  border-radius: 0.5rem;\n  border: none;\n  font-size: 1.2rem;\n  padding: 12px 16px;\n  transition: 0.2s all;\n\n  :hover {\n    cursor: pointer;\n    background: rgb(94, 97, 105) none repeat scroll 0% 0%;\n  }\n"]))),J=function(n){return Object(f.jsx)(M,Object(h.a)({},n))},M=m.a.div(L||(L=Object(O.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 50px;\n  width: 50px;\n  margin: -25px 0 0 -25px;\n  border: 4px rgba(0, 0, 0, 0.25) solid;\n  border-top: 4px black solid;\n  border-radius: 50%;\n  animation: spin2 1s infinite linear;\n\n  @-webkit-keyframes spin2 {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n  @keyframes spin2 {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n"]))),U=function(n){var e=n.data,t=n.size,i=void 0===t?"default":t,r=Object(g.a)(n,["data","size"]);return Object(f.jsxs)(y,Object(h.a)(Object(h.a)({left:Object(f.jsx)(G,{src:e.image,alt:e.name})},r),{},{children:[Object(f.jsxs)(y.Section,{children:[Object(f.jsx)(q,{$fontSize:"default"===i?24:34,children:e.name}),Object(f.jsxs)(_,{children:[Object(f.jsx)(B,{status:e.status}),e.status," - ",e.species]})]}),Object(f.jsx)(y.Section,{title:"Gender",children:e.gender}),r.children]}),e.id)},_=m.a.div(S||(S=Object(O.a)(["\n  display: flex;\n  align-items: center;\n"]))),q=m.a.h2(I||(I=Object(O.a)(["\n  padding: 0;\n  margin: 0;\n  font-size: ","px;\n"])),(function(n){return n.$fontSize})),K=t(5),Q=function(n){var e=n.data,t=n.isLoading,i=Array.isArray(e)?e:null!=e?[e]:[];return t?Object(f.jsx)("div",{style:{height:"80vh"},children:Object(p.a)(Array(3).keys()).map((function(n){return Object(f.jsx)(y,{isLoading:!0,height:"124px",style:{margin:"0 0 0.74rem 0"}},n)}))}):Object(f.jsx)(K.Grid,{fluid:!0,style:{padding:0},children:Object(f.jsx)(V,{start:"xs",children:null===i||void 0===i?void 0:i.map((function(n,e){return Object(f.jsx)(K.Col,{xs:12,children:Object(f.jsxs)(y,{style:{margin:"0 0 0.74rem 0"},children:[Object(f.jsx)(y.Section,{title:"Name",style:{flex:"3 1 0"},children:n.name}),Object(f.jsxs)(K.Row,{children:[Object(f.jsx)(K.Col,{xs:4,children:Object(f.jsx)(y.Section,{title:"Episode",children:n.episode})}),Object(f.jsx)(K.Col,{children:Object(f.jsx)(y.Section,{title:"Air Date",children:n.air_date})})]})]})},n.id)}))})})},V=Object(m.a)(K.Row)(A||(A=Object(O.a)(["\n  max-height: 80vh;\n  overflow: auto;\n  scrollbar-color: #c2c2c2 transparent;\n"]))),X=function(n){var e=n.data,t=n.title,i=n.isLoading;return Object(f.jsxs)(y,{style:{margin:"0.75rem 0 0 0"},isLoading:i,children:[t&&Object(f.jsx)(Y,{children:t}),null==e?Object(f.jsx)(y.Section,{children:"Unknown"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y.Section,{title:"Name",children:null===e||void 0===e?void 0:e.name}),Object(f.jsx)(y.Section,{title:"Type",children:null===e||void 0===e?void 0:e.type}),Object(f.jsx)(y.Section,{title:"Dimension",children:null===e||void 0===e?void 0:e.dimension}),Object(f.jsx)(y.Section,{title:"Residents",children:null===e||void 0===e?void 0:e.residents.length})]})]})},Y=m.a.h2(R||(R=Object(O.a)(["\n  padding: 0;\n  margin: 0;\n"]))),Z=t(7),nn=function(){var n=Object(Z.i)().characterId,e=Object(Z.g)();return Object(f.jsxs)(K.Row,{style:{padding:"0.75rem 8px 0 8px"},children:[Object(f.jsx)(K.Col,{children:Object(f.jsx)(W,{onClick:function(){e.push("")},style:{marginRight:"0.75rem",marginBottom:"0.75rem"},children:"Back"})}),Object(f.jsx)(K.Col,{children:+n>1&&Object(f.jsx)(W,{onClick:function(){e.push("/characters/".concat(+n-1))},style:{marginRight:"0.75rem",marginBottom:"0.75rem"},children:"Previous Character"})}),Object(f.jsx)(K.Col,{children:Object(f.jsx)(W,{onClick:function(){e.push("/characters/".concat(+n+1))},style:{marginRight:"0.75rem",marginBottom:"0.75rem"},children:"Next Character"})})]})},en=function(){var n,e,t,i=Object(Z.h)().state,r=Object(Z.i)().characterId,c=function(n){return Object(b.a)(["character",n],(function(){return fetch("https://rickandmortyapi.com/api/character/".concat(n)).then((function(n){return n.json()}))}),{enabled:null!=n})}(i?void 0:r),a=i||c.data,o=a?function(n){var e=x(n.origin.url),t=x(n.location.url);return{originId:e,locationId:t}}(a):{originId:null,locationId:null},s=o.originId,d=o.locationId,l=function(n){var e=function(n){return n?n.map((function(n){return+n.split("episode/")[1]})).sort((function(n,e){return n-e})):[]}(n),t=Object(b.a)(["episodes",e],(function(){return fetch("https://rickandmortyapi.com/api/episode/".concat(e.join(","))).then((function(n){return n.json()}))}),{refetchInterval:!1,refetchOnWindowFocus:!1,enabled:((null===e||void 0===e?void 0:e.length)||[])>0}),i=t.data||[];return Array.isArray(t.data)||null==t.data||(i=[t.data]),Object(h.a)(Object(h.a)({},t),{},{data:i,isLoading:t.isLoading||t.isIdle})}(null===a||void 0===a?void 0:a.episode),j=function(n){var e=null===n||void 0===n?void 0:n.filter((function(e,t){return n.indexOf(e)===t})),t=Object(b.a)(["locations",e],(function(){return fetch("https://rickandmortyapi.com/api/location/".concat(null===e||void 0===e?void 0:e.join(","))).then((function(n){return n.json()}))}),{refetchInterval:!1,refetchOnWindowFocus:!1,enabled:((null===e||void 0===e?void 0:e.length)||[])>0}),i=t.data||[];return Array.isArray(t.data)||null==t.data||(i=[t.data]),Object(h.a)(Object(h.a)({},t),{},{data:i,isLoading:t.isLoading||t.isIdle})}([s,d]);return Object(f.jsx)(K.Grid,{fluid:!0,children:Object(f.jsx)(K.Row,{center:"xs",middle:"xs",style:{height:"100vh"},children:Object(f.jsx)(K.Col,{xs:16,md:12,lg:10,xl:8,children:Object(f.jsxs)(K.Row,{start:"xs",children:[Object(f.jsx)(K.Col,{xs:16,md:8,children:Object(f.jsxs)(K.Row,{children:[Object(f.jsx)(K.Col,{xs:12,children:null==a?Object(f.jsx)(y,{style:{margin:0,maxHeight:260},height:"260px",isLoading:!0}):Object(f.jsxs)(U,{size:"large",data:a,style:{margin:0,maxHeight:260},children:[Object(f.jsx)(y.Section,{title:"# Episodes",children:(null===a||void 0===a||null===(n=a.episode)||void 0===n?void 0:n.length)||0}),(null===a||void 0===a?void 0:a.type)&&Object(f.jsx)(y.Section,{title:"Type",children:null===a||void 0===a?void 0:a.type})]})}),Object(f.jsx)(K.Col,{xs:12,md:6,children:Object(f.jsx)(X,{isLoading:j.isLoading,title:"Last seen",data:null===(e=j.data)||void 0===e?void 0:e.find((function(n){return n.id===s}))})}),Object(f.jsx)(K.Col,{xs:12,md:6,children:Object(f.jsx)(X,{isLoading:j.isLoading,title:"Origin",data:null===(t=j.data)||void 0===t?void 0:t.find((function(n){return n.id===s}))})}),Object(f.jsx)(K.Col,{xs:12,first:"xs",last:"md",children:Object(f.jsx)(nn,{})})]})}),Object(f.jsx)(K.Col,{xs:12,md:4,children:Object(f.jsx)(Q,{isLoading:l.isLoading,data:l.data})})]})})})})};var tn={name:"-",id:0,status:"unknown",species:"",type:"",gender:"unknown",origin:{name:"unknown",url:""},location:{name:"unknown",url:""},image:E,episode:[],url:"",created:""};function rn(){var n,e=Object(Z.g)(),t=Object(b.a)("characters",(function(){return fetch("https://rickandmortyapi.com/api/character").then((function(n){return n.json()}))}));return Object(f.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:t.isLoading?Object(p.a)(Array(30).keys()).map((function(n){return Object(f.jsx)(U,{isLoading:!0,data:tn,width:"380px",height:"184px"},n)})):null===(n=t.data)||void 0===n?void 0:n.results.map((function(n){return Object(f.jsx)(U,{data:n,onClick:function(){return function(n){e.push({pathname:"characters/".concat(n.id),state:n})}(n)},width:"380px"},n.id)}))})}var cn=t(23),an=new j.a;var on=function(){return Object(f.jsx)(u.a,{client:an,children:Object(f.jsx)(cn.a,{basename:"/RickAndMorty",children:Object(f.jsxs)(Z.d,{children:[Object(f.jsx)(Z.b,{path:"/characters/:characterId",component:en}),Object(f.jsx)(Z.b,{path:"/characters",component:rn}),Object(f.jsx)(Z.a,{to:"/characters"})]})})})},sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))};l.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(on,{})}),document.getElementById("root")),sn()}},[[60,1,2]]]);
//# sourceMappingURL=main.1dc29bca.chunk.js.map