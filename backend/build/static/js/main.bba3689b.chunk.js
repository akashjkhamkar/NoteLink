(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{198:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(11),c=a.n(r),s=a(24),i=a(238),l=a(82),o=a.n(l),u=a(229),d=a(232),m=a(239),j=a(240),b=a(81),h=a.n(b),f=a(6),p=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},submit:{margin:e.spacing(3,0,2)}}})),g=function(e){var t=e.Name,a=e.Url,n=e.Username,r=e.nameHandler,c=e.urlHandler,s=e.addHandler,i=e.usernameHandler,l=p();return Object(f.jsxs)("div",{className:l.paper,children:[Object(f.jsx)(d.a,{component:"h4",variant:"h4",style:{fontWeight:600},children:"Create a new entry"}),Object(f.jsxs)("form",{children:[Object(f.jsx)(m.a,{required:!0,size:"small",fullWidth:!0,margin:"normal",value:t,onChange:r,m:5,variant:"outlined",label:"Name of the document",autoFocus:!0}),Object(f.jsx)(m.a,{required:!0,size:"small",fullWidth:!0,margin:"normal",value:a,onChange:c,variant:"outlined",label:"url",autoFocus:!0}),Object(f.jsx)(m.a,{required:!0,size:"small",fullWidth:!0,margin:"normal",value:n,onChange:i,variant:"outlined",label:"You name",autoFocus:!0})]}),Object(f.jsx)(j.a,{style:{backgroundColor:"#BB86FC"},variant:"contained",type:"submit",onClick:s,className:l.submit,startIcon:Object(f.jsx)(h.a,{}),children:"save"}),Object(f.jsx)("img",{className:"loading",src:"https://i.pinimg.com/originals/2c/bb/5e/2cbb5e95b97aa2b496f6eaec84b9240d.gif",alt:"loading"}),Object(f.jsx)("img",{className:"done",src:"https://i.pinimg.com/originals/37/78/db/3778dbeebfe43a60eca57c5aecfdcf0d.gif",alt:"loading"})]})},O=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},submit:{margin:e.spacing(3,0,2)}}})),x=function(e){var t=e.Query,a=e.queryHandler,n=O();return Object(f.jsxs)("div",{className:n.paper,children:[Object(f.jsx)(d.a,{component:"h1",variant:"h5",children:"or"}),Object(f.jsx)(d.a,{style:{fontWeight:600},component:"h1",variant:"h5",children:"Search for the document"}),Object(f.jsx)("form",{children:Object(f.jsx)(m.a,{required:!0,size:"small",fullWidth:!0,value:t,onChange:a,margin:"normal",variant:"standard",label:"search"})})]})},v=a(234),y=a(235),N=a(236),C=a(237),k=Object(u.a)({root:{minWidth:100,background:"#FFFFFF"},title:{fontSize:14},pos:{marginBottom:12}}),w=function(e){var t=e.results,a=k(),n="resultgrid";return 0===t.length&&(n="hidden"),Object(f.jsx)(v.a,{className:n,container:!0,spacing:10,style:{padding:"24px"},children:t.map((function(e){return Object(f.jsx)(v.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:3,className:"result",height:140,width:120,children:Object(f.jsxs)(y.a,{className:a.root,children:[Object(f.jsxs)(N.a,{children:[Object(f.jsx)(d.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:"Name"}),Object(f.jsx)(d.a,{variant:"h5",component:"h2",children:e.fileName}),Object(f.jsx)(d.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:"by -"}),Object(f.jsx)(d.a,{variant:"body2",component:"p",children:e.user})]}),Object(f.jsx)(C.a,{children:Object(f.jsx)(j.a,{style:{backgroundColor:"#6c00b4",color:"white"},label:"url",variant:"contained",target:"_blank",href:e.url,children:"link"})})]})},e.id)}))})},S=function(){return Object(f.jsx)("h1",{className:"header",style:{fontWeight:550},children:"NoteLink"})},W=a(35),F=a.n(W),H=a(49),q=a(50),B=a.n(q),L="/api/files",z={getAll:function(){var e=Object(H.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get(L);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),add:function(){var e=Object(H.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=B.a.post(L,t),e.next=3,a;case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),l=Object(s.a)(c,2),u=l[0],d=l[1],m=Object(n.useState)(""),j=Object(s.a)(m,2),b=j[0],h=j[1],p=Object(n.useState)(""),O=Object(s.a)(p,2),v=O[0],y=O[1],N=Object(n.useState)([]),C=Object(s.a)(N,2),k=C[0],W=C[1],F=Object(n.useState)([]),H=Object(s.a)(F,2),q=H[0],B=H[1];Object(n.useEffect)((function(){z.getAll().then((function(e){console.log("fetched !"),W(e)}))}),[]);return Object(f.jsxs)(i.a,{className:"mainContainer",component:"main",children:[Object(f.jsxs)(i.a,{maxWidth:"xs",children:[Object(f.jsx)(S,{}),Object(f.jsx)(g,{Name:a,Url:u,Username:v,nameHandler:function(e){r(e.target.value)},urlHandler:function(e){d(e.target.value)},usernameHandler:function(e){y(e.target.value)},addHandler:function(e){if(e.preventDefault(),a&&u&&v)if(o.a.isURL(u)){var t=u;t.toLowerCase().startsWith("https://")?t=t.replace("https://",""):t.toLowerCase().startsWith("http://")&&(t=t.replace("http://",""));var n={fileName:a,url:"//".concat(t),user:v},c=document.querySelector(".loading"),s=document.querySelector(".done");c.style.display="block",z.add(n).then((function(e){W(k.concat(e)),r(""),d(""),y(""),c.style.display="none",s.style.display="block",setTimeout((function(){s.style.display="none"}),4e3)})).catch((function(e){c.display="none",console.log(e)}))}else alert("not a valid url !");else alert("some fields are empty !")}}),Object(f.jsx)(x,{Query:b,queryHandler:function(e){var t=e.target.value;h(t),B(t?k.filter((function(e){return e.fileName.toLowerCase().includes(t.toLowerCase())})):[])}})]}),Object(f.jsx)(w,{results:q})]})};a(198);c.a.render(Object(f.jsx)(U,{}),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.bba3689b.chunk.js.map