(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{6276:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(9916)}])},9916:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(7568),i=t(4051),s=t.n(i),o=t(5893),a=t(7294),c=t(9008),u=t.n(c),l=t(6455),_=t.n(l),m=t(8966),d=t.n(m),p=t(8771),f=t.n(p),x=function(e){var r=e.name,t=e.img,n=e.type,i=e.placeHolder,s=e.required,a=e.refe;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{htmlFor:r,children:r}),(0,o.jsxs)("div",{className:f().input_icon_box,children:[(0,o.jsx)("img",{className:f().input_icon,src:"/".concat(t,".svg"),alt:r}),(0,o.jsx)("input",{name:r,className:f().input,type:n,placeholder:i,required:s,ref:a})]})]})},g=t(2295),b=t.n(g),h=function(){var e=(0,a.useState)(0),r=e[0],t=e[1],i=(0,a.useState)({}),c=i[0],l=i[1],m=(0,a.useRef)(null),p=(0,a.useRef)(""),f=(0,a.useRef)(""),g=(0,a.useRef)(""),h=(0,a.useRef)(""),v=(0,a.useRef)(""),j=(0,a.useRef)(""),w=(0,a.useRef)(""),R=(0,a.useRef)(""),y=(0,a.useRef)(""),N=(0,a.useRef)(""),C=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n,i,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),d().isEmail(R.current.value)){e.next=3;break}return e.abrupt("return",_().fire({title:"Error de autenticaci\xf3n",text:"Ingrese un correo electronico v\xe1lido",icon:"error",confirmButtonText:"Intentar de nuevo",buttonsStyling:!1,customClass:{title:"swal_title",htmlContainer:"swal_text",confirmButton:"swal_confirm_btn"}}));case 3:if(d().isStrongPassword(y.current.value,{minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1})){e.next=5;break}return e.abrupt("return",_().fire({title:"Error de registro",html:"La contrase\xf1a debe contener: <br> 8 car\xe1cteres <br> 1 letra min\xfascula <br> 1 letra may\xfascula <br> 1 n\xfamero <br> 1 s\xedmbolo",icon:"error",confirmButtonText:"Intentar de nuevo",buttonsStyling:!1,customClass:{title:"swal_title",htmlContainer:"swal_text",confirmButton:"swal_confirm_btn"}}));case 5:if(e.prev=5,y.current.value===N.current.value){e.next=9;break}return _().fire({title:"Error de registro",text:"Las contrase\xf1as no coinciden",icon:"error",confirmButtonText:"Intentar de nuevo",buttonsStyling:!1,customClass:{title:"swal_title",htmlContainer:"swal_text",confirmButton:"swal_confirm_btn"}}),e.abrupt("return");case 9:return t={email:R.current.value,user_password:y.current.value},n=Object.assign(c,t),l(n),e.next=14,fetch("https://vladjs.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 14:return i=e.sent,e.next=17,i.json();case 17:if(o=e.sent,i.ok){e.next=21;break}return _().fire({title:"Error de registro",text:o.message,icon:"error",confirmButtonText:"Intentar de nuevo",buttonsStyling:!1,customClass:{title:"swal_title",htmlContainer:"swal_text",confirmButton:"swal_confirm_btn"}}),e.abrupt("return");case 21:_().fire({title:"\xa1Registro exitoso!",text:"Espere mientras se redirecciona al inicio de sesi\xf3n",icon:"success",buttonsStyling:!1,customClass:{title:"swal_title",htmlContainer:"swal_text",confirmButton:"swal_confirm_btn"}}),setTimeout((function(){window.location.replace("/")}),4e3),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(5),console.log(e.t0);case 28:case"end":return e.stop()}}),e,null,[[5,25]])})));return function(r){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{className:b().container,children:[(0,o.jsx)(u(),{children:(0,o.jsx)("title",{children:"MedMax App - Registro"})}),(0,o.jsxs)("div",{className:b().main_container,children:[0===r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{className:b().register_header,children:"Reg\xedstro - Datos Personales"}),(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={cedula:m.current.value,primer_nombre:p.current.value,segundo_nombre:f.current.value,apellidos:g.current.value,seguro_medico:h.current.value,seguro_medico_compania:v.current.value,telefono:j.current.value,direccion:w.current.value};l(r),t(1)},className:b().form_box_1,children:[(0,o.jsxs)("div",{className:b().input_container_box,children:[(0,o.jsxs)("div",{className:b().input_container,children:[(0,o.jsx)(x,{name:"C\xe9dula",img:"cedula-icon",type:"number",placeHolder:"000-0000000-0",required:!0,refe:m}),(0,o.jsx)(x,{name:"Primer nombre",img:"user-o",type:"text",placeHolder:"Ana",required:!0,refe:p}),(0,o.jsx)(x,{name:"Segundo nombre",img:"user-o",type:"text",placeHolder:"Mar\xeda",required:!1,refe:f}),(0,o.jsx)(x,{name:"Apellidos",img:"user-o",type:"text",placeHolder:"P\xe9rez Rodr\xedguez",required:!0,refe:g})]}),(0,o.jsxs)("div",{className:b().input_container,children:[(0,o.jsx)(x,{name:"Seguro m\xe9dico",img:"seguro",type:"text",placeHolder:"No. de P\xf3liza",required:!0,refe:h}),(0,o.jsx)(x,{name:"Aseguradora",img:"seguro",type:"text",placeHolder:"Humano",required:!0,refe:v}),(0,o.jsx)(x,{name:"Tel\xe9fono",img:"phone",type:"number",placeHolder:"000-000-0000",required:!0,refe:j}),(0,o.jsx)(x,{name:"Direcci\xf3n",img:"map",type:"text",placeHolder:"Calle No. Sector, Ciudad",required:!0,refe:w})]})]}),(0,o.jsx)("p",{children:"Si necesita ayuda para registrarse, p\xf3ngase en contacto con su centro de salud."}),(0,o.jsx)("button",{className:b().continueBtn,children:"Continuar"})]})]}),1===r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{className:b().register_header,children:"Reg\xedstro - Cuenta"}),(0,o.jsxs)("form",{onSubmit:C,className:b().form_box_2,children:[(0,o.jsxs)("div",{className:b().input_box_2,children:[(0,o.jsx)(x,{name:"Correo electr\xf3nico",img:"email-blue",type:"text",placeHolder:"maria@email.com",required:!0,refe:R}),(0,o.jsx)(x,{name:"Constrase\xf1a",img:"key-blue",type:"password",placeHolder:"Constrase\xf1a",required:!0,refe:y}),(0,o.jsx)(x,{name:"Constrase\xf1a",img:"key-blue",type:"password",placeHolder:"Confirme su constrase\xf1a",required:!0,refe:N})]}),(0,o.jsx)("button",{className:b().registerBtn,children:"Continuar"})]})]})]})]})}},8771:function(e){e.exports={input_icon_box:"RegisterInput_input_icon_box__s58o1",input_icon:"RegisterInput_input_icon__1bLuc",icon_size__fix:"RegisterInput_icon_size__fix__ZptoG",input:"RegisterInput_input__re91D"}},2295:function(e){e.exports={container:"Register_container__EWKE2",main_container:"Register_main_container__1c1Fe",register_header:"Register_register_header__GPkNj",form_box_1:"Register_form_box_1__5BMBD",input_container_box:"Register_input_container_box__wW2X2",input_container:"Register_input_container___s7EI",continueBtn:"Register_continueBtn__JzzHQ",form_box_2:"Register_form_box_2__tdWHn",input_box_2:"Register_input_box_2__T6tJM",registerBtn:"Register_registerBtn__wj6KP"}}},function(e){e.O(0,[816,774,888,179],(function(){return r=6276,e(e.s=r);var r}));var r=e.O();_N_E=r}]);