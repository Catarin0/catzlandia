(this.webpackJsonpCatzlandia=this.webpackJsonpCatzlandia||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(23),s=n.n(r),i=(n(85),n(50)),o=(n(86),n(70)),j=n(14),u=n(12),d=n(150),b=n(151),l=n(31),h=(n(89),n.p+"static/media/video.93e5dd0d.mp4"),O=n(51),x=n(2),m=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1],m=Object(j.f)(),p=Object(l.d)();return Object(x.jsxs)("div",{className:"homepage",children:[Object(x.jsx)(O.a,{children:Object(x.jsx)(O.a.Source,{src:h,type:"video/mp4"})}),Object(x.jsx)("h1",{children:"Catzlandia"}),Object(x.jsx)("div",{children:Object(x.jsx)(d.a,{id:"outlined-name",label:"Username",value:n,onChange:function(e){c(e.target.value)}})}),Object(x.jsx)("div",{children:Object(x.jsx)(d.a,{id:"outlined-password-input",label:"Password",type:"Password",autoComplete:"current-password",value:i,onChange:function(e){o(e.target.value)}})}),Object(x.jsx)("div",{className:"spaceButtonLogin",children:Object(x.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){"admin"===i&&"admin"===n?(m.push("/dash"),p.success("Login successfully!")):p.error("Verify username and password!")},children:"Login"})})]})},p=(n(96),n(67)),f=n(54),v=n.n(f),g=n(68),w=n(153),C=(n(114),function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(Math.floor(100*Math.random()+1)),s=Object(u.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(""),b=Object(u.a)(j,2),l=b[0],h=b[1],O=function(e){return new Promise((function(t){return setTimeout(t,e)}))};Object(a.useEffect)(Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(i),i!==n){e.next=8;break}return h("equal"),e.next=5,O(5e3);case 5:o(Math.floor(100*Math.random()+1)),e.next=9;break;case 8:i>n?h("greater"):i<n&&h("lower");case 9:n||h("none");case 10:case"end":return e.stop()}}),e)}))),[n,i]);return Object(x.jsxs)("div",{className:"number-guesser",children:[Object(x.jsx)(w.a,{variant:"h4",color:"primary",marginBottom:"30px",marginTop:"60px",children:"Guess the number between 1 and 100!"}),Object(x.jsx)(d.a,{type:"number",value:n,onChange:function(e){c(parseInt(e.target.value))}}),function(e){switch(e){case"greater":return Object(x.jsxs)(w.a,{variant:"h5",children:["The number is greater then ",n," !"]});case"lower":return Object(x.jsxs)(w.a,{variant:"h5",children:["The number is lower then ",n," !"]});case"equal":return Object(x.jsxs)(w.a,{variant:"h5",children:["Good Job, the number was ",i," , new game starting in 5 seconds!"]});default:return}}(l)]})}),N=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(j.f)();return Object(x.jsxs)("div",{className:"dash",children:[Object(x.jsxs)(p.push,{children:[Object(x.jsx)("div",{className:"button_spacer",children:Object(x.jsx)(b.a,{variant:"contained",children:"CV"})}),Object(x.jsx)("div",{className:"button_spacer",children:Object(x.jsx)(b.a,{variant:"contained",onClick:function(){return c(!0)},children:"Games"})}),Object(x.jsx)("div",{className:"button_spacer",children:Object(x.jsx)(b.a,{variant:"contained",onClick:function(){r.push("/")},children:"Exit"})})]}),n&&Object(x.jsx)(C,{})]})},S=n(69);var k=function(){var e={position:l.b.BOTTOM_CENTER,width:"auto",timeout:5e3,offset:"30px",transition:l.c.SCALE};return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(l.a,Object(i.a)(Object(i.a)({template:S.a},e),{},{children:Object(x.jsx)(o.a,{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/dash",children:Object(x.jsx)(N,{})}),Object(x.jsx)(j.a,{path:"/*",children:Object(x.jsx)(m,{})})]})})}))})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root"))},85:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){},96:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.bac623c6.chunk.js.map