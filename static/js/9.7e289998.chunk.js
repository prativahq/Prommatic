(window["webpackJsonpupswiit-promatic"]=window["webpackJsonpupswiit-promatic"]||[]).push([[9],{186:function(e,t,a){"use strict";var n=a(13),r=a(15),l=a(20),c=a.n(l),o=a(1),s=a.n(o),i=(a(96),a(35)),m=a.n(i),u={type:m.a.string.isRequired,as:m.a.elementType},p=s.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"div":a,o=e.className,i=e.type,m=Object(r.a)(e,["as","className","type"]);return s.a.createElement(l,Object(n.a)({},m,{ref:t,className:c()(o,i&&i+"-feedback")}))}));p.displayName="Feedback",p.propTypes=u,p.defaultProps={type:"valid"};var d=p,f=s.a.createContext({controlId:void 0}),b=a(23),v=s.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,i=e.bsCustomPrefix,m=e.className,u=e.isValid,p=e.isInvalid,d=e.isStatic,v=e.as,E=void 0===v?"input":v,O=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),y=Object(o.useContext)(f),C=y.controlId;return l=y.custom?Object(b.b)(i,"custom-control-input"):Object(b.b)(l,"form-check-input"),s.a.createElement(E,Object(n.a)({},O,{ref:t,id:a||C,className:c()(m,l,u&&"is-valid",p&&"is-invalid",d&&"position-static")}))}));v.displayName="FormCheckInput",v.defaultProps={type:"checkbox"};var E=v,O=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,i=e.className,m=e.htmlFor,u=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(o.useContext)(f),d=p.controlId;return a=p.custom?Object(b.b)(l,"custom-control-label"):Object(b.b)(a,"form-check-label"),s.a.createElement("label",Object(n.a)({},u,{ref:t,htmlFor:m||d,className:c()(i,a)}))}));O.displayName="FormCheckLabel";var y=O,C=s.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,i=e.bsCustomPrefix,m=e.inline,u=e.disabled,p=e.isValid,v=e.isInvalid,O=e.feedback,C=e.className,h=e.style,N=e.title,j=e.type,g=e.label,w=e.children,x=e.custom,P=e.as,k=void 0===P?"input":P,I=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),S="switch"===j||x;l=S?Object(b.b)(i,"custom-control"):Object(b.b)(l,"form-check");var R=Object(o.useContext)(f).controlId,F=Object(o.useMemo)((function(){return{controlId:a||R,custom:S}}),[R,S,a]),L=null!=g&&!1!==g&&!w,U=s.a.createElement(E,Object(n.a)({},I,{type:"switch"===j?"checkbox":j,ref:t,isValid:p,isInvalid:v,isStatic:!L,disabled:u,as:k}));return s.a.createElement(f.Provider,{value:F},s.a.createElement("div",{style:h,className:c()(C,l,S&&"custom-"+j,m&&l+"-inline")},w||s.a.createElement(s.a.Fragment,null,U,L&&s.a.createElement(y,{title:N},g),(p||v)&&s.a.createElement(d,{type:p?"valid":"invalid"},O))))}));C.displayName="FormCheck",C.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},C.Input=E,C.Label=y;var h=C,N=(a(68),s.a.forwardRef((function(e,t){var a,l,i=e.bsPrefix,m=e.type,u=e.size,p=e.id,d=e.className,v=e.isValid,E=e.isInvalid,O=e.plaintext,y=e.readOnly,C=e.as,h=void 0===C?"input":C,N=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),j=Object(o.useContext)(f).controlId;if(i=Object(b.b)(i,"form-control"),O)(l={})[i+"-plaintext"]=!0,a=l;else if("file"===m){var g;(g={})[i+"-file"]=!0,a=g}else{var w;(w={})[i]=!0,w[i+"-"+u]=u,a=w}return s.a.createElement(h,Object(n.a)({},N,{type:m,ref:t,readOnly:y,id:p||j,className:c()(d,a,v&&"is-valid",E&&"is-invalid")}))})));N.displayName="FormControl",N.Feedback=d;var j=N,g=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.children,m=e.controlId,u=e.as,p=void 0===u?"div":u,d=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(b.b)(a,"form-group");var v=Object(o.useMemo)((function(){return{controlId:m}}),[m]);return s.a.createElement(f.Provider,{value:v},s.a.createElement(p,Object(n.a)({},d,{ref:t,className:c()(l,a)}),i))}));g.displayName="FormGroup";var w=g,x=["xl","lg","md","sm","xs"],P=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.as,i=void 0===o?"div":o,m=Object(r.a)(e,["bsPrefix","className","as"]),u=Object(b.b)(a,"col"),p=[],d=[];return x.forEach((function(e){var t,a,n,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var c="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+u+c:""+u+c+"-"+t),null!=n&&d.push("order"+c+"-"+n),null!=a&&d.push("offset"+c+"-"+a)})),p.length||p.push(u),s.a.createElement(i,Object(n.a)({},m,{ref:t,className:c.a.apply(void 0,[l].concat(p,d))}))}));P.displayName="Col";var k=P,I=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.column,i=e.srOnly,m=e.className,u=e.htmlFor,p=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),d=Object(o.useContext)(f).controlId;a=Object(b.b)(a,"form-label");var v=c()(m,a,i&&"sr-only",l&&"col-form-label");return u=u||d,l?s.a.createElement(k,Object(n.a)({as:"label",className:v,htmlFor:u},p)):s.a.createElement("label",Object(n.a)({ref:t,className:v,htmlFor:u},p))}));I.displayName="FormLabel",I.defaultProps={column:!1,srOnly:!1};var S=I,R=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.as,i=void 0===o?"small":o,m=e.muted,u=Object(r.a)(e,["bsPrefix","className","as","muted"]);return a=Object(b.b)(a,"form-text"),s.a.createElement(i,Object(n.a)({},u,{ref:t,className:c()(l,a,m&&"text-muted")}))}));R.displayName="FormText";var F=R,L=s.a.forwardRef((function(e,t){return s.a.createElement(h,Object(n.a)({},e,{ref:t,type:"switch"}))}));L.displayName="Switch",L.Input=h.Input,L.Label=h.Label;var U=L,V=a(69),D=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.inline,o=e.className,i=e.validated,m=e.as,u=void 0===m?"form":m,p=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(b.b)(a,"form"),s.a.createElement(u,Object(n.a)({},p,{ref:t,className:c()(o,i&&"was-validated",l&&a+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=Object(V.a)("form-row"),D.Group=w,D.Control=j,D.Check=h,D.Switch=U,D.Label=S,D.Text=F;t.a=D},376:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(6),o=a(3),s=a(16),i=a(1),m=a.n(i),u=a(218),p=a(167),d=a.n(p),f=a(187),b=(a(184),a(186)),v=a(152),E=a(38),O=a(46),y=a(56),C=a(57),h=a(99),N={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},j=new Uint8Array(16);function g(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(j)}for(var w=[],x=0;x<256;++x)w.push((x+256).toString(16).slice(1));function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase()}var k=function(e,t,a){if(N.randomUUID&&!t&&!e)return N.randomUUID();var n=(e=e||{}).random||(e.rng||g)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){a=a||0;for(var r=0;r<16;++r)t[a+r]=n[r];return t}return P(n)};function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e=Object(i.useState)(new Date),t=Object(s.a)(e,2),a=t[0],n=t[1],r=[],c=[],p=[],N=[],j=Object(i.useState)([]),g=Object(s.a)(j,2),w=g[0],x=g[1],P=Object(i.useState)(""),I=Object(s.a)(P,2),R=I[0],F=I[1],L=Object(i.useState)(""),U=Object(s.a)(L,2),V=U[0],D=U[1],T=Object(i.useState)(""),B=Object(s.a)(T,2),H=B[0],M=B[1],z=Object(i.useState)(""),G=Object(s.a)(z,2),J=G[0],Y=G[1],q=Object(i.useState)([]),A=Object(s.a)(q,2),K=A[0],Q=A[1],W=Object(i.useState)([]),X=Object(s.a)(W,2),Z=X[0],$=X[1],_=Object(i.useState)(!1),ee=Object(s.a)(_,2),te=ee[0],ae=ee[1],ne=Object(i.useState)(!1),re=Object(s.a)(ne,2),le=re[0],ce=re[1],oe=Object(i.useState)(!1),se=Object(s.a)(oe,2),ie=se[0],me=se[1],ue=Object(i.useState)(!1),pe=Object(s.a)(ue,2),de=pe[0],fe=pe[1],be=Object(i.useState)(""),ve=Object(s.a)(be,2),Ee=ve[0],Oe=ve[1],ye=Object(i.useState)(""),Ce=Object(s.a)(ye,2),he=Ce[0],Ne=Ce[1],je=Object(i.useState)([]),ge=Object(s.a)(je,2),we=ge[0],xe=ge[1],Pe=Object(i.useState)({CompanyName:"",CampaignName:""}),ke=Object(s.a)(Pe,2),Ie=ke[0],Se=ke[1];function Re(){return(Re=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)(Object(y.a)(E.b,"Company"));case 2:e.sent.forEach((function(e){e.exists()&&r.push(e.data())})),Q(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(e){return Le.apply(this,arguments)}function Le(){return(Le=Object(o.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==V){e.next=3;break}return f.b.error("Please Select Campaign !!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.abrupt("return");case 3:a=t.target.files[0],n=Object(h.b)(E.c,"".concat(V,"/").concat(a.name+k())),Object(h.c)(n,a).then((function(e){Object(h.a)(n).then((function(e){E.b.collection("Company").doc(R.toLowerCase()).collection("Campaign").onSnapshot((function(t){t.docs.map((function(t){t.data().CampaignName===V&&E.b.collection("Company").doc(R).collection("Campaign").doc(t.id).collection("Reports").add({timestamp:C.a.firestore.FieldValue.serverTimestamp(),fileURL:e,CreatedBy:E.a.currentUser.email}).then((function(){f.b.success("Report Uploaded :)",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}))}))}))})),D(""),F("");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ue(e){return Ve.apply(this,arguments)}function Ve(){return(Ve=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.b.collection("Company").doc(t.toLowerCase()).collection("Campaign").onSnapshot((function(e){e.docs.map((function(e){console.log(e.data()),c.push(e.data().CampaignName),$(c),N.push(e.data().CompanyName),x(N)}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function De(){return(De=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.b.collection("Company").doc(Ie.CompanyName.toLowerCase()).collection("Campaign").add({timestamp:C.a.firestore.FieldValue.serverTimestamp(),CampaignName:Ie.CampaignName,CompanyName:Ie.CompanyName}).then((function(){ae(!1),f.b.success("New Campaign Created :)",{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(){return(Te=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.b.collection("Company").doc(H.toLowerCase()).collection("Campaign").onSnapshot((function(e){e.docs.map((function(e){e.data().CampaignName===J&&(E.b.collection("Company").doc(H).collection("Campaign").doc(e.id).collection("Reports").onSnapshot((function(e){e.docs.map((function(e){console.log(e.id),p.push(e.data().fileURL)}))})),xe(p))}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){Object(O.c)(E.a,(function(e){e?e.uid:window.location.href="/"})),function(){Re.apply(this,arguments)}()}),[]),m.a.createElement("div",null,m.a.createElement(f.a,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),m.a.createElement("div",{className:"page-header"},m.a.createElement("h3",{className:"page-title"},m.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-white mr-2"},m.a.createElement("i",{className:"mdi mdi-file-document"})),"Reports")),m.a.createElement("div",{className:"row"}),m.a.createElement("div",{style:{marginBottom:"30px",display:"flex",flexDirection:"row"}},m.a.createElement(u.a,{onClick:function(){return ae(!te)}},"Create Campaign"),m.a.createElement(u.b,{visible:te,onClose:function(){return ae(!1)}},m.a.createElement(u.e,{onClose:function(){return ae(!1)}},m.a.createElement(u.f,null,"Campaign Details")),m.a.createElement(u.c,null,m.a.createElement("label",{htmlFor:"exampleInputName1"},"Company Name"),m.a.createElement(b.a.Control,{onChange:function(e){return Se(S({},Ie,{CompanyName:e.target.value}))},type:"text",className:"form-control",id:"exampleInputName1",placeholder:"Company Name"}),m.a.createElement("label",{htmlFor:"exampleInputName2",className:"mt-4"},"Campaign Name"),m.a.createElement(b.a.Control,{type:"text",onChange:function(e){return Se(S({},Ie,{CampaignName:e.target.value}))},className:"form-control",id:"exampleInputName2",placeholder:"Campaign Name"})),m.a.createElement(u.d,null,m.a.createElement(u.a,{color:"secondary",onClick:function(){return ae(!1)}},"Close"),m.a.createElement(u.a,{color:"primary",onClick:function(){return De.apply(this,arguments)}},"Create"))),m.a.createElement(d.a,{className:"form-control w-100",selected:a,onChange:function(e){return n(e)}}),m.a.createElement(v.a,null,m.a.createElement(v.a.Toggle,{variant:"btn",id:"dropdownMenuOutlineButton1"},"Performance"),m.a.createElement(v.a.Menu,null,m.a.createElement(v.a.Item,null,"Basic"),m.a.createElement(v.a.Item,null,"Medium"),m.a.createElement(v.a.Item,null,"High"),m.a.createElement(v.a.Item,null,"Extreme")))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12 grid-margin"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Upload Reports"),m.a.createElement("div",{className:"table-responsive"},m.a.createElement("table",{className:"table"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null," Company Name "),m.a.createElement("th",null," Campaign Name "),m.a.createElement("th",null," Upload Report "))),m.a.createElement("tbody",null,K.map((function(e){return m.a.createElement("tr",{key:e.CompanyName},m.a.createElement("td",null,e.CompanyName),m.a.createElement("td",null,m.a.createElement(u.a,{onClick:function(){Ue(e.CompanyName),setTimeout((function(){ce(!le)}),1e3)}},""!=Ee?Ee.toUpperCase():"Select Campaign"),m.a.createElement(u.b,{visible:le,onClose:function(){return ce(!1)}},m.a.createElement(u.e,{onClose:function(){return ce(!1)}},m.a.createElement(u.f,null,"Choose Your Campaign")),m.a.createElement(u.c,null,Z.map((function(e,t){return m.a.createElement("button",{type:"button",onClick:function(){console.log(w[t],e),Oe(e),F(w[t].toLowerCase()),D(e)},style:{marginLeft:"5px"},className:"btn btn-social-icon-text btn-twitter"},m.a.createElement("i",{className:"mdi mdi-star-circle"}),e)}))))),m.a.createElement("td",{style:{width:"40%"}},m.a.createElement("div",{className:"custom-file"},m.a.createElement(b.a.Control,{onChange:Fe,type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",className:"form-control visibility-hidden",id:"customFileLang",lang:"es"}),m.a.createElement("label",{className:"custom-file-label",htmlFor:"customFileLang"},"Upload CSV"))))}))))))))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12 grid-margin"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h4",{className:"card-title"},"Previous Reports"),m.a.createElement("div",{className:"table-responsive"},m.a.createElement("table",{className:"table"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null," Company Name "),m.a.createElement("th",null," Campaign Name "),m.a.createElement("th",null," Reports "))),m.a.createElement("tbody",null,K.map((function(e){return m.a.createElement("tr",null,m.a.createElement("td",null,e.CompanyName),m.a.createElement("td",null,m.a.createElement(u.a,{onClick:function(){Ue(e.CompanyName),setTimeout((function(){me(!le)}),1e3)}},""!=he?he.toUpperCase():"Select Campaign"),m.a.createElement(u.b,{visible:ie,onClose:function(){return me(!1)}},m.a.createElement(u.e,{onClose:function(){return me(!1)}},m.a.createElement(u.f,null,"Choose Your Campaign")),m.a.createElement(u.c,null,Z.map((function(e,t){return m.a.createElement("button",{type:"button",onClick:function(){console.log(w[t],e),Ne(e),M(w[t].toLowerCase()),Y(e)},style:{marginLeft:"5px"},className:"btn btn-social-icon-text btn-twitter"},m.a.createElement("i",{className:"mdi mdi-star-circle"}),e)}))))),m.a.createElement("td",{style:{width:"40%"}},m.a.createElement(u.a,{onClick:function(){console.log(J,H),function(){Te.apply(this,arguments)}(),setTimeout((function(){fe(!de)}),3e3)}},"View Reports"),m.a.createElement(u.b,{visible:de,onClose:function(){return fe(!1)}},m.a.createElement(u.e,{onClose:function(){return fe(!1)}},m.a.createElement(u.f,null,"Previous Reports")),m.a.createElement(u.c,null,m.a.createElement("div",{className:"table-responsive"},m.a.createElement("table",{className:"table"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null," Report Name "),m.a.createElement("th",null," Source "))),m.a.createElement("tbody",null,we.map((function(e,t){return m.a.createElement("tr",null,m.a.createElement("td",null,"Report ".concat(t+1)),m.a.createElement("td",null,m.a.createElement("i",{className:"mdi mdi-file-document icon-sm text-danger"}),m.a.createElement("span",{className:"mb-0 ml-1"},m.a.createElement("a",{href:e,style:{textDecoration:"none"}},"Link"))))})))))),m.a.createElement(u.d,null,m.a.createElement(u.a,{color:"secondary",onClick:function(){return fe(!1)}},"Close")))))}))))))))))}}}]);
//# sourceMappingURL=9.7e289998.chunk.js.map