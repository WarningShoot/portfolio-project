(this["webpackJsonpportfolio-project"]=this["webpackJsonpportfolio-project"]||[]).push([[0],{18:function(t,e,n){t.exports={container:"factorialR_container__22fFH",factorialForm:"factorialR_factorialForm__QsYlW",formLabel:"factorialR_formLabel__3KrBx",formInput:"factorialR_formInput__2WBBE",formButton:"factorialR_formButton__ykEHc",factorialDisplay:"factorialR_factorialDisplay__2B7id"}},23:function(t,e,n){t.exports={modal:"Modal_modal__1KUzZ",modalWrapper:"Modal_modalWrapper__3NdY3",closeModalButton:"Modal_closeModalButton__pfrmR"}},5:function(t,e,n){t.exports={form:"Form_form__2R_Vj",formInputs:"Form_formInputs__104Wt",formInput:"Form_formInput__3A9aY",formInputBtn:"Form_formInputBtn__XZ-wk"}},53:function(t,e,n){},54:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0),c=n(24),s=n.n(c),i=n(8),o=n(13),l=(n(53),["btn--primary","btn--outline"]),u=["btn--medium","btn--large"],j=function(t){var e=t.children,n=t.type,r=t.onClick,c=t.buttonStyle,s=t.buttonSize,i=l.includes(c)?c:l[0],o=u.includes(s)?s:u[0];return Object(a.jsx)("button",{className:"btn ".concat(i," ").concat(o),type:n,onClick:r,children:e})},d=(n(54),function(t){var e=Object(r.useState)(!1),n=Object(i.a)(e,2),c=n[0],s=n[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{onClick:function(){return s(!c)},className:c?"dropdown-menu clicked":"dropdown-menu",children:t.DropdownItems.map((function(t,e){return Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{className:t.cName,to:t.url,onClick:function(){return s(!1)},children:t.title})},e)}))})})}),m=n(23),b=n.n(m),f=n(31),h=function(t){var e=t.showModal,n=t.setShowModal,c=t.children,s=Object(r.useRef)(),i=Object(f.b)({config:{duration:300},opacity:e?1:0,transform:e?"translateY(0%)":"translateY(-100%)"}),o=Object(r.useCallback)((function(t){"Escape"===t.key&&e&&n(!1)}),[e,n]);return Object(r.useEffect)((function(){return document.addEventListener("keydown",o),function(){return document.removeEventListener("keydown",o)}}),[o]),Object(a.jsx)(a.Fragment,{children:e?Object(a.jsx)("div",{className:b.a.modal,ref:s,onClick:function(t){s.current===t.target&&n(!1)},children:Object(a.jsx)(f.a.div,{style:i,children:Object(a.jsxs)("div",{className:b.a.modalWrapper,children:[Object(a.jsx)("span",{className:b.a.closeModalButton,children:Object(a.jsx)("i",{className:"fas fa-times",onClick:function(){return n(!1)}})}),c]})})}):null})},p=n(14),x=n(29),O=function(t){var e=Object(r.useState)({username:"",email:"",password:"",password2:""}),n=Object(i.a)(e,2),a=n[0],c=n[1],s=Object(r.useState)({}),o=Object(i.a)(s,2),l=o[0],u=o[1];return{handleChange:function(t){var e=t.target,n=e.name,r=e.value;c(Object(x.a)(Object(x.a)({},a),{},Object(p.a)({},n,r)))},values:a,handleSubmit:function(e){return e.preventDefault(),u(t(a)),"user"},errors:l}};function v(t){var e={};return t.username.trim()||(e.username="Username required"),t.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(e.email="Email address is invalid"):e.email="Email required",t.password?t.password.length<6&&(e.password="Password needs to be 6 characters or more"):e.password="Password is required",t.password2?t.password2!==t.password&&(e.password2="Passwords do not match"):e.password2="Password is required",e}var w=n(5),g=n.n(w),y=function(t){var e=t.show,n=O(v),r=n.handleChange,c=n.values,s=n.handleSubmit,i=n.errors;return Object(a.jsx)("div",{className:g.a.formContent,children:Object(a.jsxs)("form",{className:g.a.form,onSubmit:s,children:[Object(a.jsx)("h1",{children:"Sign up"}),Object(a.jsxs)("div",{className:g.a.formInputs,children:[Object(a.jsx)("label",{htmlFor:"username",children:Object(a.jsx)("h4",{children:"Username"})}),Object(a.jsx)("input",{type:"text",name:"username",className:g.a.formInput,placeholder:"Enter your username",value:c.username,onChange:r}),i.username&&Object(a.jsx)("p",{children:i.username})]}),Object(a.jsxs)("div",{className:g.a.formInputs,children:[Object(a.jsx)("label",{htmlFor:"email",children:Object(a.jsx)("h4",{children:"Email"})}),Object(a.jsx)("input",{type:"text",name:"email",className:g.a.formInput,placeholder:"Enter your email",value:c.email,onChange:r}),i.email&&Object(a.jsx)("p",{children:i.email})]}),Object(a.jsxs)("div",{className:g.a.formInputs,children:[Object(a.jsx)("label",{htmlFor:"password",children:Object(a.jsx)("h4",{children:"Password"})}),Object(a.jsx)("input",{type:"password",name:"password",className:g.a.formInput,placeholder:"Enter your password",value:c.password,onChange:r}),i.password&&Object(a.jsx)("p",{children:i.password})]}),Object(a.jsxs)("div",{className:g.a.formInputs,children:[Object(a.jsx)("label",{htmlFor:"password2",children:Object(a.jsx)("h4",{children:"Confirm Password"})}),Object(a.jsx)("input",{type:"password",name:"password2",className:g.a.formInput,placeholder:"Enter your password",value:c.password2,onChange:r}),i.password2&&Object(a.jsx)("p",{children:i.password2})]}),Object(a.jsx)("button",{className:g.a.formInputBtn,type:"submit",children:"Sign up"}),Object(a.jsxs)("p",{children:["You don't have account yet?"," ",Object(a.jsx)("span",{onClick:function(){return e(!1)},children:"Sign Up!"})]})]})})},N=n(17),_=function(t){var e=t.show,n=O(v),r=n.handleChange,c=n.values,s=n.handleSubmit,i=n.errors,o=Object(N.b)();return Object(a.jsx)("div",{className:g.a.formContent,children:Object(a.jsxs)("form",{className:g.a.form,onSubmit:function(t){return o({type:"SIGN_IN",payload:s(t)})},id:"logIn",name:"logIn",children:[Object(a.jsx)("h1",{children:"Log In"}),Object(a.jsxs)("div",{className:g.a.formInputs,children:[Object(a.jsx)("label",{htmlFor:"username",children:Object(a.jsx)("h4",{children:"Username"})}),Object(a.jsx)("input",{type:"text",name:"username",className:g.a.formInput,placeholder:"Enter your username",value:c.username,onChange:r}),i.username&&Object(a.jsx)("p",{children:i.username})]}),Object(a.jsxs)("div",{className:g.a.formInputs,children:[Object(a.jsx)("label",{htmlFor:"password",children:Object(a.jsx)("h4",{children:"Password"})}),Object(a.jsx)("input",{type:"password",name:"password",className:g.a.formInput,placeholder:"Enter your password",value:c.password,onChange:r}),i.password&&Object(a.jsx)("p",{children:i.password})]}),Object(a.jsx)("button",{className:g.a.formInputBtn,type:"submit",children:"Log In"}),Object(a.jsxs)("p",{children:["You don't have account yet?"," ",Object(a.jsx)("span",{onClick:function(){return e(!0)},children:"Sign Up!"})]})]})})},k=function(){var t=Object(r.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(a.jsx)("div",{children:n?Object(a.jsx)(y,{show:c}):Object(a.jsx)(_,{show:c})})},I=(n(60),function(t){var e=Object(r.useState)(!1),n=Object(i.a)(e,2),c=n[0],s=n[1],l=Object(r.useState)(!1),u=Object(i.a)(l,2),m=u[0],b=u[1],f=Object(r.useState)(!1),p=Object(i.a)(f,2),x=p[0],O=p[1],v=Object(N.c)((function(t){return t.user})),w=Object(N.b)(),g=function(){s(!1),O((function(t){return!t}))},y=function(){window.innerWidth<960?b(!1):b(!0)},_=function(){window.innerWidth,b(!1)},I=function(){w({type:"LOG_OUT"})};return Object(a.jsxs)("nav",{className:"NavbarItems",children:[Object(a.jsx)(o.b,{to:"/",className:"navbar-logo",children:Object(a.jsxs)("h1",{children:["Shoot",Object(a.jsx)("i",{className:"fas fa-code"})]})}),Object(a.jsx)("div",{className:"menu-icon",onClick:function(){s((function(t){return!t}))},children:Object(a.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(a.jsx)("ul",{className:c?"nav-menu active":"nav-menu",children:t.MenuItems.map((function(t,e){return 1===t.type||2===t.type&&!0===c?Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{className:t.cName,to:t.url,onClick:function(){return s(!1)},children:t.title})},e):2===t.type?Object(a.jsx)("li",{onMouseEnter:y,onMouseLeave:_,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)(o.b,{className:t.cName,to:t.url,onClick:function(){return s(!1)},children:[t.title," ",Object(a.jsx)("i",{className:"fas fa-caret-down"})]}),m&&Object(a.jsx)(d,{DropdownItems:t.dropDownItems})]})},e):3===t.type?Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{className:t.cName,to:t.url,onClick:v?I:g,children:v?"Log Out":"Log In"})},e):console.log("oops")}))}),Object(a.jsx)(j,{onClick:v?I:g,children:v?"Log Out":"Log In"}),Object(a.jsx)(h,{showModal:x,setShowModal:O,children:Object(a.jsx)(k,{})})]})}),S=n(4),C=1,E=[{type:C,title:"Resume",url:"/",cName:"nav-links"},{type:C,title:"About Me",url:"#",cName:"nav-links"},{type:2,title:"Projects",url:"/projects",dropDownItems:[{title:"Factorial",url:"/projects/factorial",cName:"dropdown-link"},{title:"Weather",url:"/projects/weather",cName:"dropdown-link"},{title:"About",url:"#",cName:"dropdown-link"}],cName:"nav-links"},{type:3,title:"Log In",url:"#",cName:"nav-links-mobile"}],F=(n(61),n.p+"static/media/AvatarMaker.f1041ae8.svg"),M=n(6),D=n(7);function L(){var t=Object(M.a)(["\n\tmargin: 2rem;\n\tfont-size: 60px;\n\tcolor: white;\n\ttransition: color 0.5s;\n\n\t&:hover {\n\t\tcolor: black;\n\t}\n\n\t@media (max-width: 600px) {\n\t\tfont-size: 30px;\n\t\tmargin: 20px;\n\t}\n"]);return L=function(){return t},t}function B(){var t=Object(M.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]);return B=function(){return t},t}function z(){var t=Object(M.a)(["\n\tfont-size: 1.5rem;\n\tfont-weight: 400;\n\tcolor: #fff;\n\ttext-align: center;\n\tmargin: 2rem 10px 0 10px;\n\t@media (max-width: 600px) {\n\t\tfont-size: 1rem;\n\t}\n"]);return z=function(){return t},t}function R(){var t=Object(M.a)(["\n\tcolor: #fff;\n\ttext-align: center;\n\tfont-size: 3rem;\n\tfont-weight: bolder;\n\ttext-decoration: underline;\n\n\t@media (max-width: 600px) {\n\t\tfont-size: 2rem;\n\t}\n"]);return R=function(){return t},t}function P(){var t=Object(M.a)(["\n\theight: 400px;\n\twidth: 90%;\n\tbackground: rgba(192, 192, 192, 0.4);\n\tborder-radius: 10px;\n\tfont-weight: 800;\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-direction: column;\n\talign-items: center;\n\n\t@media (max-width: 600px) {\n\t\theight: 300px;\n\t}\n"]);return P=function(){return t},t}function W(){var t=Object(M.a)(["\n\theight: 300px;\n\twidth: 300px;\n\tborder-radius: 50%;\n\tbackground: white;\n\tmargin: 10px;\n\n\t@media (max-width: 600px) {\n\t\theight: 200px;\n\t\twidth: 200px;\n\t}\n"]);return W=function(){return t},t}function U(){var t=Object(M.a)(["\n\tbackground: var(--navBG);\n\theight: calc(100vh - 80px);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\n\t@media (max-width: 600px) {\n\t\tjustify-content: flex-start;\n\t}\n"]);return U=function(){return t},t}var T=D.a.div(U()),Y=D.a.img(W()),G=D.a.div(P()),q=D.a.p(R()),A=D.a.span(z()),X=D.a.span(B()),J=D.a.a(L()),H=function(){return Object(a.jsxs)(T,{children:[Object(a.jsx)(Y,{src:F}),Object(a.jsxs)(G,{children:[Object(a.jsx)(q,{children:"Full Stack"}),Object(a.jsx)(q,{children:"Web Developer"}),Object(a.jsx)(A,{children:"HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB"}),Object(a.jsxs)(X,{children:[Object(a.jsx)(J,{href:"https://www.facebook.com/damian.zajda.3",target:"blank",children:Object(a.jsx)("i",{className:"fab fa-facebook"})}),Object(a.jsx)(J,{href:"https://github.com/WarningShoot",target:"blank",children:Object(a.jsx)("i",{className:"fab fa-github"})}),Object(a.jsx)(J,{href:"https://www.freecodecamp.org/warningshoot",target:"blank",children:Object(a.jsx)("i",{className:"fab fa-free-code-camp"})}),Object(a.jsx)(J,{href:"https://wa.me/48799214749",target:"blank",children:Object(a.jsx)("i",{className:"fab fa-whatsapp"})})]})]})]})},K=n(18),V=n.n(K);function Z(t,e){Q(t),Q(e);for(var n=[],a=0;a<e.length;a++){n.push([]);for(var r=0;r<t.length;r++)n[a].push(e[a]*t[r])}n=n.reverse();for(var c=0;c<n.length;c++){for(var s=0;s<c;s++)n[c].push(0);for(var i=c;i<=n.length-1;i++)n[c].unshift(0)}!function(t){for(var e=0;e<t.length;e++)for(var n=0,a=t[e].length-1;a>=0;a--)t[e][a]+=n,n=Math.floor(t[e][a]/10),t[e][a]%=10}(n);for(var o=[],l=0,u=n[0].length-1;u>=0;u--){for(var j=0,d=n.length-1;d>=0;d--)j+=n[d][u];j+=l,l=Math.floor(j/10),j%=10,o.unshift(j)}for(;0===o[0];)o.shift();return o.join("")}function Q(t){t=t.split("");for(var e=0;e<t.length;e++)t[e]=parseInt(t[e]);return t}var $=function(t){for(var e="1",n=1;n<=t;n++)e=Z(e,n.toString());return e},tt=function(){var t=Object(r.useState)(1),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!1),o=Object(i.a)(s,2),l=o[0],u=o[1],j=Object(r.useState)("1"),d=Object(i.a)(j,2),m=d[0],b=d[1];return Object(a.jsxs)("div",{className:V.a.container,children:[Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b($(n))},className:V.a.factorialForm,children:[Object(a.jsx)("label",{htmlFor:"input",className:V.a.formLabel,children:"Give the number of factorial you want"}),Object(a.jsx)("input",{id:"input",type:"text",className:V.a.formInput,value:n,onChange:function(t){var e=Number(t.target.value);Number.isInteger(e)&&e>0?(c(e),u(!1)):u(!0)}}),l?Object(a.jsx)("p",{children:"Factorial must be number and be greater than 0 "}):null,Object(a.jsx)("button",{type:"submit",className:V.a.formButton,children:"OK"})]}),Object(a.jsx)("div",{className:V.a.factorialDisplay,children:Object(a.jsx)("p",{children:m})})]})};function et(){var t=Object(M.a)(["\n\tfont-size: 0.7rem;\n\tmargin-left: 5px;\n"]);return et=function(){return t},t}function nt(){var t=Object(M.a)(["\n\tfont-size: 2rem;\n"]);return nt=function(){return t},t}function at(){var t=Object(M.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.5rem;\n"]);return at=function(){return t},t}function rt(){var t=Object(M.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n\tfont-size: 1.2rem;\n"]);return rt=function(){return t},t}function ct(){var t=Object(M.a)([""]);return ct=function(){return t},t}function st(){var t=Object(M.a)(["\n\tfont-size: 1.2rem;\n"]);return st=function(){return t},t}function it(){var t=Object(M.a)(["\n\twidth: 50px;\n\theight: 50px;\n\tbackground: var(--btnPrimary);\n\tcolor: white;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\n\t&:hover {\n\t\ttransition: all 0.3 ease-out;\n\t\tbackground: black;\n\t\ttransition: 250ms;\n\t}\n"]);return it=function(){return t},t}function ot(){var t=Object(M.a)(["\n\twidth: 250px;\n\theight: 50px;\n\tfont-size: 1.2rem;\n\tpadding: 10px;\n\tborder: none;\n\toutline: none;\n\tbackground: rgba(192, 192, 192, 0.3);\n\tborder-radius: 5px;\n"]);return ot=function(){return t},t}function lt(){var t=Object(M.a)(["\n\tmargin: 20px;\n\twidth: 300px;\n\ttext-align: center;\n\theight: 50px;\n"]);return lt=function(){return t},t}function ut(){var t=Object(M.a)(["\n\twidth: 300px;\n\theight: 500px;\n\tbackground: rgba(192, 192, 192, 0.3);\n\tborder-radius: 5px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tpadding: 20px;\n\talign-items: center;\n"]);return ut=function(){return t},t}function jt(){var t=Object(M.a)(["\n\tdisplay: flex;\n\tjustify-content: start;\n\talign-items: center;\n\tpadding-top: 20px;\n\theight: calc(100vh - 80px);\n\tflex-direction: column;\n"]);return jt=function(){return t},t}var dt=D.a.div(jt()),mt=D.a.div(ut()),bt=D.a.form(lt()),ft=D.a.input(ot()),ht=D.a.button(it()),pt=D.a.i(st()),xt=D.a.h1(ct()),Ot=D.a.div(rt()),vt=D.a.div(at()),wt=D.a.span(nt()),gt=D.a.sup(et()),yt=n(47),Nt=n.n(yt).a.create({baseURL:"https://api.openweathermap.org/data/2.5/",validateStatus:!1}),_t=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(null),o=Object(i.a)(s,2),l=o[0],u=o[1],j={margin:"10px"};return Object(a.jsxs)(dt,{children:[Object(a.jsx)("h1",{children:"Weather APP"}),Object(a.jsxs)(bt,{onSubmit:function(t){t.preventDefault(),Nt.get("/weather?q=".concat(n,"&appid=4a5f8903f8a0fbb1618839167d0ea639")).then((function(t){console.log(t.data);var e=Math.round(t.data.main.temp-273.15),n={name:t.data.name,temperature:e,humidity:t.data.main.humidity,pressure:t.data.main.pressure,icon:t.data.weather[0].icon,iconDesc:t.data.weather[0].main};u(n)}))},children:[Object(a.jsx)(ft,{type:"text",name:"city",value:n,placeholder:"Type name of the city",onChange:function(t){c(t.target.value)}}),Object(a.jsx)(ht,{type:"submit",children:Object(a.jsx)(pt,{className:"fas fa-search"})})]}),l&&Object(a.jsxs)(mt,{children:[Object(a.jsxs)(Ot,{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("i",{className:"fas fa-wind",style:j}),l.pressure+" kPa"]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("i",{className:"fas fa-tint",style:j}),l.humidity+"%"]})]}),Object(a.jsx)(xt,{children:l.name}),Object(a.jsxs)(wt,{children:[l.temperature,Object(a.jsx)(gt,{children:Object(a.jsx)("i",{className:"far fa-circle"})}),"C"]}),Object(a.jsxs)(vt,{children:[Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(l.icon,"@2x.png"),alt:l.iconDesc}),l.iconDesc]})]})]})},kt=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(I,{MenuItems:E}),Object(a.jsxs)(S.c,{children:[Object(a.jsx)(S.a,{exact:!0,path:"/",children:Object(a.jsx)(H,{})}),Object(a.jsx)(S.a,{exact:!0,path:"/projects/factorial",children:Object(a.jsx)(tt,{})}),Object(a.jsx)(S.a,{exact:!0,path:"/projects/weather",children:Object(a.jsx)(_t,{})})]})]})})},It=n(21),St=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SIGN_IN":return e.payload;case"LOG_OUT":return null;default:return t}},Ct=Object(It.b)({user:St}),Et=Object(It.c)(Ct,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(a.jsx)(N.a,{store:Et,children:Object(a.jsx)(kt,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.8b09ec5f.chunk.js.map