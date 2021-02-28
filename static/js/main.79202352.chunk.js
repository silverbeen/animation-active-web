(this.webpackJsonpanimation=this.webpackJsonpanimation||[]).push([[0],{34:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var i,c,a,o,r=t(1),s=t.n(r),l=t(25),j=t.n(l),b=(t(34),t(8)),d=t(3),p=t(5),h=t(6),u=t(7),x=u.a.div(i||(i=Object(h.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(240, 195, 49);\n  overflow: hidden;\n\n  span {\n    color: white;\n    font-size: 20px;\n    font-weight: 600;\n  }\n\n  .button-wrapper {\n    position: absolute;\n    top: 0;\n    margin: 20px auto;\n    width: 300px;\n    height: 40px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n\n    /* > i {\n      font-size: 25px;\n    } */\n  }\n"]))),O=u.a.div(c||(c=Object(h.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(74 216 239);\n  img {\n    width: 600px;\n  }\n\n  #circle {\n    width: 60px;\n    height: 60px;\n    background-color: black;\n    border-radius: 80%;\n    position: absolute;\n    left: 580px;\n    margin-right: 90px;\n    margin-bottom: 350px;\n  }\n\n  #lion-left {\n    width: 20px;\n    height: 20px;\n    background-color: black;\n    border-radius: 80%;\n    position: absolute;\n    top: 320px;\n    right: 767px;\n  }\n\n  #lion-right {\n    width: 20px;\n    height: 20px;\n    background-color: black;\n    border-radius: 80%;\n    position: absolute;\n    top: 320px;\n    right: 650px;\n  }\n"]))),f=u.a.div(a||(a=Object(h.a)(["\n  width: 700px;\n  height: 625px;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  opacity: 0.9;\n  transition: 5s;\n  overflow: hidden;\n\n  div {\n    width: 80px;\n    height: 250px;\n    border-radius: 10px;\n  }\n"]))),g=u.a.a(o||(o=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 20px;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  a {\n    text-decoration: none;\n    font-size: 23px;\n    color: black;\n  }\n"]))),m=t.p+"static/media/earth.fd69ccf0.png",v=t.p+"static/media/palne.ffc130d1.png",w=t.p+"static/media/lion.81c01d2b.png",y=t.p+"static/media/\ubbf8\ub2c8\uc5b8\uc988.0e672c6d.png",k=t.p+"static/media/rotation.164b7f5d.png",S=t.p+"static/media/color.8552e06f.png",C=t.p+"static/media/eyes.276667af.png",I=t(21),N=t(2);var E=function(){var n=Object(r.useState)(1),e=Object(p.a)(n,2),t=e[0],i=e[1],c={animationDuration:1e4/t+"s"};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(x,{children:[Object(N.jsxs)("div",{className:"button-wrapper",children:[Object(N.jsx)(I.b,{onClick:function(){10===t&&i(0),i((function(n){return n+1})),console.log(t)},size:36,color:"white"}),Object(N.jsx)("span",{children:t}),Object(N.jsx)(I.a,{onClick:function(){1===t&&i(10),i((function(n){return n-1}))},size:36,color:"white"})]}),Object(N.jsx)("img",{src:v,id:"plane",style:c}),Object(N.jsx)("img",{src:m,id:"earth"})]})})},z=function(){var n=Object(r.useState)(""),e=Object(p.a)(n,2),t=e[0],i=e[1],c=Object(r.useState)(""),a=Object(p.a)(c,2),o=a[0],s=a[1];return Object(N.jsxs)(x,{children:[Object(N.jsx)("div",{className:"button-wrapper"}),Object(N.jsxs)(O,{onMouseMove:function(n){var e=n.clientX,t=n.clientY;i("translate("+e/380+"vw,"+t/150+"vh)"),s("translate("+e/380+"vw,"+t/100+"vh)")},children:[Object(N.jsx)("img",{src:y,alt:"\ubbf8\ub2c8\uc5b8\uc988"}),Object(N.jsx)("div",{style:{transform:t},id:"circle"}),Object(N.jsx)("img",{src:w,alt:"\ub77c\uc774\uc5b8"}),Object(N.jsx)("div",{style:{transform:o},id:"lion-left"}),Object(N.jsx)("div",{style:{transform:o},id:"lion-right"})]})]})},M=t(18),D=function(){return Object(N.jsxs)(g,{children:[Object(N.jsx)(M.a,{size:30,color:"balck"}),Object(N.jsx)("i",{children:Object(N.jsx)(b.b,{to:"/",children:"Main Back"})})]})},R=function(n){var e=n.rotateValue,t=n.color,i=n.color1;return Object(N.jsx)(f,{style:{transform:"rotate("+e+"deg)"},children:Object(N.jsx)("div",{style:{backgroundColor:"rgb( 300,"+i+","+t+" )"}})})};var P,T,A,G=function(){for(var n=Object(r.useState)(0),e=Object(p.a)(n,2),t=e[0],i=e[1],c=[],a=Object(r.useState)("25px"),o=Object(p.a)(a,2),s=o[0],l=o[1],j=Object(r.useState)(""),b=Object(p.a)(j,2),d=b[0],h=b[1],u=0;u<18;u++)c[u]=u;var O=c.map((function(n){return Object(N.jsx)(R,{rotateValue:t*n,color:t*n,color1:t*n/3})})),f=function(){l("30px"),h("2s")};return Object(N.jsxs)(x,{style:{backgroundColor:"#f48fb1"},children:[Object(N.jsx)(D,{}),Object(N.jsxs)("div",{className:"button-wrapper",children:[Object(N.jsx)("i",{onClick:function(){console.log(t),i(20)},onMouseMove:f,style:{fontSize:s,translate:d},children:"open"}),Object(N.jsx)("i",{onClick:function(){i(0)},onMouseMove:f,style:{fontSize:s,translate:d},children:"close"})]}),O]})},F=t(13),L=t(14),U=u.a.div(P||(P=Object(h.a)(["\n  width: 100%auto;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n"]))),B=u.a.form(T||(T=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items : center;\n  width: 400px;\n  margin: 0 auto;\n\n  > input,\n  button {\n    width: 80%;\n    height: 30px;\n    margin: 2%;\n    padding: 2%;\n    border-radius: 50px;\n    border: none;\n    outline: none;\n  }\n  > button {\n    width: 84%;\n    height: 40px;\n    color: white;\n    background: linear-gradient(to left, #4759d8, #7f22af);\n  }\n"]))),Y=u.a.h1(A||(A=Object(h.a)(["\n  color: white;\n"])));var J=function(n){n.onSubmit;var e=Object(r.useState)({id:"",pw:""}),t=Object(p.a)(e,2),i=t[0],c=t[1],a=i.id,o=i.pw,s=function(n){var e=n.target,t=e.value,a=e.name;c(Object(L.a)(Object(L.a)({},i),{},Object(F.a)({},a,t)))};return Object(N.jsxs)(U,{style:{backgroundColor:"#43cee0"},children:[Object(N.jsx)(Y,{children:"SIGN IN"}),Object(N.jsxs)(B,{onSubmit:function(n){n.preventDefault(),c({id:"",pw:""}),console.log(i)},children:[Object(N.jsx)("input",{name:"id",placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:s,value:a}),Object(N.jsx)("input",{name:"pw",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",onChange:s,value:o}),Object(N.jsx)("button",{type:"submit",children:"SIGN IN"})]}),Object(N.jsx)(b.b,{to:"/sign-up",style:{color:"white"},children:"\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"})]})};var V,W,X,H,K,q=function(n){n.onSubmit;var e=Object(r.useState)({name:"",email:"",id:"",pw:"",pwCheck:""}),t=Object(p.a)(e,2),i=t[0],c=t[1],a=i.name,o=i.email,s=i.id,l=i.pw,j=i.pwCheck,d=function(n){var e=n.target,t=e.value,a=e.name;c(Object(L.a)(Object(L.a)({},i),{},Object(F.a)({},a,t)))};return Object(N.jsxs)(U,{style:{backgroundColor:"black"},children:[Object(N.jsx)(Y,{children:"SIGN UP"}),Object(N.jsxs)(B,{onSubmit:function(n){n.preventDefault(),c({name:"",email:"",id:"",pw:"",pwCheck:""}),console.log(i)},children:[Object(N.jsx)("input",{onChange:d,name:"name",placeholder:"\uc0ac\uc6a9\ud558\uc2e4 \ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",value:a}),Object(N.jsx)("input",{onChange:d,name:"email",placeholder:"EMAIL",value:o}),Object(N.jsx)("input",{onChange:d,name:"id",placeholder:"ID",value:s}),Object(N.jsx)("input",{onChange:d,name:"pw",placeholder:"PASSWORD",value:l}),Object(N.jsx)("input",{onChange:d,name:"pwCheck",placeholder:"PASSWORD CHECK",value:j}),Object(N.jsx)("button",{type:"submit",children:"SIGN UP"})]}),Object(N.jsx)(b.b,{to:"/sign-in",style:{color:"white"},children:"\uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694?"})]})},Q=u.a.div(V||(V=Object(h.a)(["\n  width: 100%;\n"]))),Z=u.a.nav(W||(W=Object(h.a)(["\n  width: 100%;\n  height: 70px;\n\n  i {\n    margin: 0 auto;\n    width: 70%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n  }\n\n  a {\n    padding: 10px;\n    color: black;\n    font-size: 20px;\n    font-weight: 600;\n    text-decoration: none;\n    text-shadow: 4px 4px 4px #8080808c;\n  }\n"]))),$=u.a.div(X||(X=Object(h.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #fdd835bf;\n"]))),_=u.a.div(H||(H=Object(h.a)(["\n  width: 235%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  height: 460px;\n  margin-top: 200px;\n\n  .introduce {\n    background-color: white;\n    margin: 0 200px;\n    width: 20%;\n    height: 100%;\n    display: flex;\n    justify-content: row;\n    box-shadow: 5px 3px 5px #00000029;\n    border-radius: 20px;\n  }\n"]))),nn=u.a.div(K||(K=Object(h.a)(["\n  margin: 40px auto;\n  width: 200px;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n\n"])));var en=function(){return Object(N.jsx)(Q,{children:Object(N.jsx)(Z,{children:Object(N.jsxs)("i",{children:[Object(N.jsx)(b.b,{to:"/rotation",children:"ROTATION"}),Object(N.jsx)(b.b,{to:"/mouse",children:"EYES MOUSE"}),Object(N.jsx)(b.b,{to:"/dispersion",children:"COLOR DISPERSION"}),Object(N.jsx)("a",{href:"https://github.com/silverbeen/Study-TypeScript/tree/master/animation",children:"GIT"}),Object(N.jsx)(b.b,{to:"/sign-in",children:"SIGN IN"})]})})})},tn=function(){var n=Object(r.useState)(0),e=Object(p.a)(n,2),t=e[0],i=e[1],c=Object(r.useRef)(null),a=Object(d.f)();return Object(r.useEffect)((function(){c.current.style.transition="all 0.5s ease-in-out",c.current.style.transform="translateX(-".concat(30*t,"%)")})),Object(N.jsxs)($,{children:[Object(N.jsx)(en,{}),Object(N.jsxs)(_,{ref:c,children:[Object(N.jsxs)("div",{className:"introduce",onClick:function(){a.push("/rotation")},children:[Object(N.jsx)("img",{src:k,alt:"\uc774\ubbf8\uc9c0"}),Object(N.jsx)("h1",{children:"ROTATION"})]}),Object(N.jsxs)("div",{className:"introduce",onClick:function(){a.push("/mouse")},children:[Object(N.jsx)("img",{src:C,alt:"\uc774\ubbf8\uc9c0"}),Object(N.jsx)("h1",{children:"EYES MOUSE"})]}),Object(N.jsxs)("div",{className:"introduce",onClick:function(){a.push("/dispersion")},children:[Object(N.jsx)("img",{src:S,alt:"\uc774\ubbf8\uc9c0"}),Object(N.jsx)("h1",{children:"COLOR DIEPERSION"})]})]}),Object(N.jsxs)(nn,{children:[Object(N.jsx)(M.a,{size:45,onClick:function(){i(0===t?2:t-1)}}),Object(N.jsx)(M.b,{size:45,onClick:function(){i(t>=2?0:t+1)}})]})]})};var cn=function(){return Object(N.jsx)(b.a,{basename:"/animation-active-web",children:Object(N.jsxs)(d.c,{children:[Object(N.jsx)(d.a,{path:"/",component:tn,exact:!0}),Object(N.jsx)(d.a,{path:"/rotation",component:E,exact:!0}),Object(N.jsx)(d.a,{path:"/mouse",component:z,exact:!0}),Object(N.jsx)(d.a,{path:"/dispersion",component:G,exact:!0}),Object(N.jsx)(d.a,{path:"/sign-in",component:J,exact:!0}),Object(N.jsx)(d.a,{path:"/sign-up",component:q,exact:!0})]})})};var an=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(cn,{})})},on=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),c(n),a(n),o(n)}))};j.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(an,{})}),document.getElementById("root")),on()}},[[42,1,2]]]);
//# sourceMappingURL=main.79202352.chunk.js.map