(this["webpackJsonpgama-start-tech-challenge"]=this["webpackJsonpgama-start-tech-challenge"]||[]).push([[0],{2:function(e,t,c){e.exports={formPage:"Form_formPage__ll0EZ",container:"Form_container__34wUq",logo:"Form_logo__23jIh",inputBlock:"Form_inputBlock__3LFmm",docs:"Form_docs__HSpIk",inputOptional:"Form_inputOptional__ILhGF",primaryButton:"Form_primaryButton__2Mk4f",button:"Form_button__1Vax0"}},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),l=c(28),i=c.n(l),s=c(11),o=c(3),r=c.p+"static/media/logo.bd184203.png",d=c(9),j=c.n(d),h=c(0),b=function(){return Object(h.jsx)("div",{id:j.a.landingPage,children:Object(h.jsxs)("div",{id:j.a.container,children:[Object(h.jsxs)("header",{className:j.a.animateUp,children:[Object(h.jsx)("img",{id:j.a.logo,src:r,alt:"JobsNET Logo"}),Object(h.jsx)("h1",{children:"JobsNET"})]}),Object(h.jsxs)("main",{children:[Object(h.jsx)("h1",{className:j.a.animateUp,children:"Find your perfect Job"}),Object(h.jsxs)("section",{className:j.a.button,children:[Object(h.jsx)("p",{className:j.a.animateUp,children:"Fill out the form and wait for a interview."}),Object(h.jsxs)(s.b,{to:"/register",className:j.a.animateUp,children:["REGISTER\xa0",Object(h.jsx)("i",{className:"fas fa-arrow-circle-right"})]})]})]})]})})},m=c(18),u=c.n(m),p=c(30),x=c(13),O=c(2),g=c.n(O),v=c(19),f=c.n(v),y=function(){var e=a.a.useState(!1),t=Object(x.a)(e,2),c=t[0],n=t[1],l=a.a.useState(!1),i=Object(x.a)(l,2),o=i[0],d=i[1],j=a.a.useState(!1),b=Object(x.a)(j,2),m=b[0],O=b[1],v=a.a.useState({name:"",position:"",birth:"",marital:"0",gender:"0",address:"",number:"",neighborhood:"",city:"",cep:"",phone1:"",phone2:"",cellphone:"",email:"",identity:"",cpf:"",vehicle:"0",license:"0"}),y=Object(x.a)(v,2),N=y[0],_=y[1];function F(){return(F=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f.a.post("https://start-tech-jobsnet.herokuapp.com/register",N);case 4:200===e.sent.status&&(alert("Candidate registered!"),window.location.href="/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(!0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function B(e){var t=e.target.value;if(0!==t.length){var c=function(e){if(0!==e){var t,c;if(t=0,"00000000000"===e)return!1;for(var n=1;n<=9;n++)t+=parseInt(e.substring(n-1,n))*(11-n);if(10!==(c=10*t%11)&&11!==c||(c=0),c!==parseInt(e.substring(9,10)))return!1;for(t=0,n=1;n<=10;n++)t+=parseInt(e.substring(n-1,n))*(12-n);return 10!==(c=10*t%11)&&11!==c||(c=0),c===parseInt(e.substring(10,11))}}(t);d(!c)}}function k(e){N[e.target.name]=e.target.value,_(N)}return Object(h.jsx)("div",{id:g.a.formPage,children:Object(h.jsxs)("div",{id:g.a.container,children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("img",{id:g.a.logo,src:r,alt:"JobsNET Logo"}),Object(h.jsx)("h1",{children:"JobsNET"})]}),Object(h.jsxs)("main",{children:[Object(h.jsxs)("form",{onSubmit:function(e){return F.apply(this,arguments)},children:[Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Personal Data"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-6"),children:[Object(h.jsxs)("label",{htmlFor:"name",children:["Full Name",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"text",id:"name",name:"name",onChange:k,required:!0})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-6"),children:[Object(h.jsxs)("label",{htmlFor:"position",children:["Intended Position",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"text",id:"position",name:"position",onChange:k,required:!0})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-6"),children:[Object(h.jsxs)("label",{htmlFor:"birth",children:["Birth Date",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"date",id:"birth",name:"birth",onChange:k,required:!0})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-3"),children:[Object(h.jsx)("label",{children:"Marital Status"}),Object(h.jsxs)("select",{id:"marital",name:"marital",defaultValue:"0",onChange:k,children:[Object(h.jsx)("option",{disabled:!0,value:"0",children:"Select"}),Object(h.jsx)("option",{value:"1",children:"Single"}),Object(h.jsx)("option",{value:"2",children:"Married"}),Object(h.jsx)("option",{value:"3",children:"Divorced"}),Object(h.jsx)("option",{value:"4",children:"Widower"})]})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-3"),children:[Object(h.jsx)("label",{children:"Gender"}),Object(h.jsxs)("select",{id:"gender",name:"gender",defaultValue:"0",onChange:k,children:[Object(h.jsx)("option",{disabled:!0,value:"0",children:"Select"}),Object(h.jsx)("option",{value:"1",children:"Male"}),Object(h.jsx)("option",{value:"2",children:"Female"}),Object(h.jsx)("option",{value:"3",children:"Rather not answer"})]})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-4"),children:[Object(h.jsxs)("label",{htmlFor:"cep",children:["CEP",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"text",id:"cep",name:"cep",placeholder:"Only numbers",maxLength:"8",onChange:function(e){0!==e.target.value.length&&8===e.target.value.length?(k(e),function(e){0!==e.target.value.length&&f.a.get("https://viacep.com.br/ws/".concat(e.target.value,"/json/")).then((function(e){N.address=e.data.logradouro,N.neighborhood=e.data.bairro,N.city=e.data.localidade;var t=document.querySelector("#address");void 0!==N.address?(t.value=N.address,O(!1)):(O(!0),t.value="");var c=document.querySelector("#neighborhood");void 0!==N.neighborhood?c.value=N.neighborhood:c.value="";var n=document.querySelector("#city");void 0!==N.neighborhood?n.value=N.city:n.value=""}))}(e)):O(!1)},required:!0}),m?Object(h.jsxs)("p",{style:{color:"tomato",textAlign:"center",marginTop:"10px"},children:[Object(h.jsx)("i",{className:"fas fa-exclamation-circle"})," CEP do not exist! Try again."]}):""]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-8"),children:[Object(h.jsxs)("label",{htmlFor:"address",children:["Address",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"text",id:"address",name:"address",onChange:k,required:!0})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-5"),children:[Object(h.jsxs)("label",{htmlFor:"neighborhood",children:["Neighborhood",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"text",id:"neighborhood",name:"neighborhood",onChange:k,required:!0})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-5"),children:[Object(h.jsxs)("label",{htmlFor:"city",children:["City",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"text",id:"city",name:"city",onChange:k,required:!0})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-2"),children:[Object(h.jsxs)("label",{htmlFor:"address",children:["Number",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"text",id:"number",name:"number",onChange:k,required:!0})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-4"),children:[Object(h.jsx)("label",{htmlFor:"phone1",children:"Phone 1"}),Object(h.jsx)("input",{type:"text",id:"phone1",name:"phone1",placeholder:"Only numbers",className:g.a.inputOptional,onChange:k})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-4"),children:[Object(h.jsx)("label",{htmlFor:"phone2",children:"Phone 2"}),Object(h.jsx)("input",{type:"text",id:"phone2",name:"phone2",placeholder:"Only numbers",className:g.a.inputOptional,onChange:k})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-4"),children:[Object(h.jsxs)("label",{htmlFor:"cellphone",children:["Cell Phone",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"text",id:"cellphone",name:"cellphone",placeholder:"Only numbers",onChange:k,required:!0})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-12"),children:[Object(h.jsxs)("label",{htmlFor:"email",children:["E-mail",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"email",id:"email",name:"email",onChange:k,required:!0})]})]})]}),Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Documents"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-6"),children:[Object(h.jsx)("label",{htmlFor:"identity",children:"ID"}),Object(h.jsx)("input",{type:"text",id:"identity",name:"identity",placeholder:"Only numbers",className:g.a.inputOptional,onChange:k})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-6"),children:[Object(h.jsxs)("label",{htmlFor:"cpf",children:["CPF",Object(h.jsx)("small",{children:" *"})]}),Object(h.jsx)("input",{type:"text",id:"cpf",name:"cpf",placeholder:"Only numbers",maxLength:"11",onChange:function(e){0!==e.target.value.length&&11===e.target.value.length?(k(e),B(e)):(d(!1),n(!1))},required:!0}),c?Object(h.jsxs)("p",{style:{color:"tomato",textAlign:"center",marginTop:"10px"},children:[Object(h.jsx)("i",{className:"fas fa-exclamation-circle"})," CPF already registered"]}):"",o?Object(h.jsxs)("p",{style:{color:"tomato",textAlign:"center",marginTop:"10px"},children:[Object(h.jsx)("i",{className:"fas fa-exclamation-circle"})," CPF do not exist"]}):""]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-6"),children:[Object(h.jsx)("label",{children:"Vehicle"}),Object(h.jsxs)("select",{id:"vehicle",name:"vehicle",defaultValue:"0",onChange:k,children:[Object(h.jsx)("option",{disabled:!0,value:"0",children:"Select"}),Object(h.jsx)("option",{value:"1",children:"Yes"}),Object(h.jsx)("option",{value:"2",children:"No"})]})]}),Object(h.jsxs)("div",{className:"".concat(g.a.inputBlock," col-md-6"),children:[Object(h.jsx)("label",{children:"Driving License"}),Object(h.jsxs)("select",{id:"license",name:"license",defaultValue:"0",onChange:k,children:[Object(h.jsx)("option",{disabled:!0,value:"0",children:"Select"}),Object(h.jsx)("option",{value:"1",children:"A"}),Object(h.jsx)("option",{value:"2",children:"B"}),Object(h.jsx)("option",{value:"3",children:"C"}),Object(h.jsx)("option",{value:"4",children:"D"}),Object(h.jsx)("option",{value:"5",children:"E"})]})]})]})]}),Object(h.jsx)("button",{type:"submit",className:g.a.primaryButton,children:"Send"})]}),Object(h.jsx)("section",{className:g.a.button,children:Object(h.jsxs)(s.b,{to:"/",children:[Object(h.jsx)("i",{className:"fas fa-arrow-circle-left"}),"\xa0BACK"]})})]})]})})},N=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:b}),Object(h.jsx)(o.a,{path:"/register",component:y})]})})};c(63);var _=function(){return Object(h.jsx)(N,{})};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))},9:function(e,t,c){e.exports={landingPage:"Home_landingPage__3lBNn",container:"Home_container__1s89M",logo:"Home_logo__3auvB",button:"Home_button__2fSRs",animateUp:"Home_animateUp__39cDB",up:"Home_up__1rkr9"}}},[[64,1,2]]]);
//# sourceMappingURL=main.bd75cb9e.chunk.js.map