(this["webpackJsonpreact-apps-firststeps"]=this["webpackJsonpreact-apps-firststeps"]||[]).push([[0],{30:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(6),r=n.n(s),o=(n(37),n(38),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))}),i=n(2),l=n(1),d=Object(c.createContext)(),j=function(e){var t=Object(c.useState)([{id:"1",name:"Pencil",price:1,description:"Perfect for those who can't remember things! 5/5 Highly recommend."}]),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(l.jsx)(d.Provider,{value:[a,s],children:e.children})};var b=function(){var e=Object(c.useContext)(d),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}),[]),Object(c.useEffect)((function(){s()}),[n]);var s=function(){localStorage.setItem("products",JSON.stringify(n))},r=function(){if(null===localStorage.getItem("products"))localStorage.setItem("products",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("products"));a(e)}};return Object(l.jsx)("div",{children:n.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{style:{display:"inline-block"},children:e.name})," ",Object(l.jsxs)("span",{children:[Number(e.price).toLocaleString("en-US",{style:"currency",currency:"USD"})," - ",e.description]})]},e.id)}))})};var u=function(){var e=Object(c.useContext)(d),t=Object(i.a)(e,2),n=t[0];return t[1],Object(l.jsxs)("nav",{className:"routingNav",children:[Object(l.jsx)("h3",{children:"Context-Api"}),Object(l.jsxs)("ul",{className:"routingNavElements",children:[Object(l.jsx)("li",{children:"Products"}),Object(l.jsx)("li",{className:"badge badge-warning",children:n.length})]})]})},h=n(16);var p=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],b=Object(c.useState)(""),u=Object(i.a)(b,2),p=u[0],m=u[1],O=Object(c.useContext)(d),x=Object(i.a)(O,2),g=(x[0],x[1]);return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g((function(e){return[].concat(Object(h.a)(e),[{id:e.length+1,name:n,price:o,description:p}])})),a(""),j(""),m("")},children:[Object(l.jsx)("input",{type:"text",name:"name",className:"form-control",style:{width:"45vw"},placeholder:"Name",onChange:function(e){a(e.target.value)},value:n,required:!0}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"number",name:"price",className:"form-control",style:{width:"45vw"},placeholder:"price",onChange:function(e){j(e.target.value)},value:o,required:!0}),Object(l.jsx)("input",{type:"text",name:"description",className:"form-control",style:{width:"45vw"},placeholder:"Description",onChange:function(e){m(e.target.value)},value:p}),Object(l.jsx)("button",{children:"Add"})]})};var m=function(){return Object(l.jsx)(j,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(u,{}),Object(l.jsx)(p,{}),Object(l.jsx)(b,{})]})})},O=(n(40),n(13));var x=function(){return Object(l.jsxs)("nav",{className:"routingNav",children:[Object(l.jsx)(O.b,{to:"/react-apps-firststeps/",children:Object(l.jsx)("h3",{children:"Router"})}),Object(l.jsxs)("ol",{className:"routingNavElements",children:[Object(l.jsx)(O.b,{to:"/react-apps-firststeps/about",className:"routingNavLink",children:Object(l.jsx)("li",{children:"About"})}),Object(l.jsx)(O.b,{to:"/react-apps-firststeps/shop",className:"routingNavLink",children:Object(l.jsx)("li",{children:"Shop"})})]})]})};var g=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Homepage"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(O.b,{to:"/react-apps-firststeps/shop",children:"go Shopping"})]})};var f=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"About"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(O.b,{to:"/react-apps-firststeps/shop",children:"go Shopping"})]})},v=n(5),y=n.n(v),S=n(15);var k=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(S.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){s()}),[]);var r=n.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(O.b,{to:"/react-apps-firststeps/shop/".concat(e.id),children:e.title})},e.id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Shop"}),Object(l.jsx)("ul",{className:"routingShopUl",children:r})]})};var N=function(e){var t=e.match,n=Object(c.useState)({}),a=Object(i.a)(n,2),s=a[0],r=a[1];console.log(s);var o=function(){var e=Object(S.a)(y.a.mark((function e(){var n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/".concat(t.params.id));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,r(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:s.title}),Object(l.jsx)("img",{src:s.image,style:{maxWidth:"100vw"}})]})},w=n(3);var C=function(){return Object(l.jsx)(O.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(x,{}),Object(l.jsxs)(w.c,{children:[Object(l.jsx)(w.a,{path:"/react-apps-firststeps/",exact:!0,component:g}),Object(l.jsx)(w.a,{path:"/react-apps-firststeps/about",component:f}),Object(l.jsx)(w.a,{path:"/react-apps-firststeps/shop",exact:!0,component:k}),Object(l.jsx)(w.a,{path:"/react-apps-firststeps/shop/:id",component:N})]})]})})};n(30);var T=function(e){var t=e.label,n=e.calories,c=e.image,a=e.ingredients;return Object(l.jsxs)("div",{style:{maxWidth:"300px"},children:[Object(l.jsx)("div",{className:"label",children:Object(l.jsx)("h1",{children:t})}),Object(l.jsxs)("h2",{style:{color:"#ffbe0f"},children:["calories: ",Math.round(n)]}),Object(l.jsx)("img",{className:"image",src:c}),Object(l.jsx)("h4",{style:{color:"whitesmoke"},children:"Ingredients"}),Object(l.jsx)("p",{className:"ingredients",children:a})]})},L=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],d=r[1],j=Object(c.useState)(1e4),b=Object(i.a)(j,2),u=b[0],h=b[1],p=Object(c.useState)(""),m=Object(i.a)(p,2),O=m[0],x=m[1],g=Object(c.useState)(""),f=Object(i.a)(g,2),v=f[0],k=f[1],N=function(){var e=Object(S.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(v,"&app_id=").concat("fdd263e4","&app_key=").concat("a43678d2012a0b9c6d815c7bbbfea1ef"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.hits),console.log("data fetched");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){N()}),[v]);console.log("filter: ",v);var w=0,C=n.map((function(e,t){if(Number(e.recipe.calories)<u){var n="";if(e.recipe.ingredients.map((function(e){return n+=e.text,e})),console.log(n),n.toLowerCase().includes(O))return w++,Object(l.jsx)(T,{label:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:n},t)}}));console.log("results: ",w);return Object(l.jsxs)("div",{className:"recipe",style:{backgroundColor:"#bd2000",minHeight:"100vh"},children:[Object(l.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),k(o)},children:[Object(l.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search! chicken etc...",onChange:function(e){d(e.target.value.toLowerCase())},value:o}),Object(l.jsx)("br",{}),Object(l.jsxs)("select",{name:"favColor",onChange:function(e){h(e.target.value)},className:"form-select form-select-sm",children:[Object(l.jsx)("option",{selected:!0,value:"10000",children:"Filter by max calories!..."}),Object(l.jsx)("option",{value:"10000",children:"reset calories"}),Object(l.jsx)("option",{value:"4000",children:"max 4000 cal."}),Object(l.jsx)("option",{value:"3000",children:"max 3000 cal."}),Object(l.jsx)("option",{value:"2000",children:"max 2000 cal."}),Object(l.jsx)("option",{value:"1000",children:"max 1000 cal."})]}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",className:"search-bar",placeholder:"Filter by ingredients!...",onChange:function(e){x(e.target.value.toLowerCase())}}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"btn btn-success",style:{borderRadius:"50%"},children:"Submit"})]}),Object(l.jsx)("br",{}),w<10?Object(l.jsxs)("h2",{children:[Object(l.jsxs)("span",{className:"badge badge-danger",children:["results: ",w]})," "]}):Object(l.jsx)("h2",{children:Object(l.jsxs)("span",{className:"badge badge-warning",children:["All Products: ",w,"  "]})}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",flexFlow:"row wrap"},children:[C,"  "]})]})},I=n(28),E=n.n(I);var M=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),r=Object(i.a)(s,2),o=r[0],d=r[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),u=b[0],h=b[1],p=Object(c.useState)(!1),m=Object(i.a)(p,2),O=m[0],x=m[1],g=E()();return Object(c.useEffect)((function(){setInterval((function(){a((function(e){return e+1}))}),1e3)}),[]),Object(c.useEffect)((function(){h(E()())}),[n]),Object(l.jsx)("div",{style:{textAlign:"center",backgroundColor:"#8f4068",minHeight:"50vh"},children:O?Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"202px",color:g},children:Object(l.jsx)("h1",{children:"Good by!"})}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{style:{color:u},children:n}),Object(l.jsx)("button",{style:{backgroundColor:"blue",color:"whitesmoke"},onClick:function(){return a((function(e){return e+1}))},children:"Plus!"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){x(!0)},style:{borderRadius:"50%",backgroundColor:"red",color:"whitesmoke"},children:"delete"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{style:{backgroundColor:"yellow"},onClick:function(){d((function(e){return e-1}))},children:"Minus!"}),Object(l.jsxs)("h1",{children:["  ",o]})]})})},A=n(17),D=n(18),H=n(9),B=n(10),F=n(12),U=n(11);var P=function(e){return Object(l.jsxs)("div",{style:{textAlign:"center",backgroundColor:"#28527a"},children:[Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("input",{style:{width:"40vw"},type:"text",name:"topText",value:e.topText,onChange:e.handleChange}),Object(l.jsx)("input",{style:{width:"40vw"},type:"text",name:"bottomText",value:e.bottomText,onChange:e.handleChange}),Object(l.jsx)("button",{style:{width:"10vw"},children:"ok"})]}),Object(l.jsxs)("div",{style:{width:"400px",height:"400px",margin:"auto",backgroundImage:"url(".concat(e.randomImg,")"),textAlign:"center"},children:[Object(l.jsx)("h1",{style:{margin:"auto",marginTop:"5%",color:"orange"},children:e.topTextSubmitted}),Object(l.jsx)("h1",{style:{margin:"auto",marginTop:"70%",color:"orange"},children:e.bottomTextSubmitted})]})]})},Y=function(e){Object(F.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(H.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={topText:"",bottomText:"",topTextSubmitted:"",bottomTextSubmitted:"",randomImg:"",memes:{}},e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(D.a)({},c,a))},e.handleSubmit=function(t){var n=Math.floor(100*Math.random());e.setState({randomImg:e.state.memes[n].url,topTextSubmitted:e.state.topText,bottomTextSubmitted:e.state.bottomText}),t.preventDefault()},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=Object(S.a)(y.a.mark((function e(){var t,n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.imgflip.com/get_memes");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.data.memes,this.setState({memes:c});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(l.jsx)(P,Object(A.a)({handleChange:this.handleChange,handleSubmit:this.handleSubmit},this.state))}}]),n}(c.Component);var J=function(){return Object(l.jsx)(Y,{})},R=n(22);var W=function(e){var t=e.display?{display:"block"}:{display:"none"},n=e.firstName?{display:"block"}:{display:"none"},c=e.lastName?{display:"block"}:{display:"none"},a=e.comment?{display:"block"}:{display:"none"},s=e.isOk?{display:"block"}:{display:"none"},r=e.gender?{display:"block"}:{display:"none"},o=e.favColor?{display:"block"}:{display:"none"};return Object(l.jsxs)("div",{className:"container",style:{minHeight:"100vh"},children:[Object(l.jsx)("h1",{children:"Forms"}),Object(l.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(l.jsx)("input",{type:"text",name:"firstName",className:"form-control",style:{width:"45vw"},placeholder:"First Name",onChange:e.onHandle}),Object(l.jsxs)("span",{children:[" ",e.firstName]}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",name:"lastName",className:"form-control",style:{width:"45vw"},placeholder:"Last Name",onChange:e.onHandle}),Object(l.jsxs)("span",{children:[" ",e.lastName]}),Object(l.jsx)("textarea",{name:"comment",className:"form-control",style:{width:"60vw",display:"inline-block"},id:"comment",placeholder:"Your Comment",onChange:e.onHandle}),Object(l.jsxs)("span",{children:[" ",e.comment]}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"checkbox",name:"isOk",onChange:e.onHandle}),"is ok?",Object(l.jsxs)("span",{children:[" ",e.isOk&&"Yes"]}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",name:"gender",value:"Male",onChange:e.onHandle}),"Male",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",name:"gender",value:"Female",onChange:e.onHandle}),"Female",Object(l.jsxs)("p",{children:[" Gender: ",e.gender]}),Object(l.jsx)("label",{children:"Favorite Color:"}),Object(l.jsxs)("select",{name:"favColor",value:e.favColor,onChange:e.onHandle,className:"form-select form-select-sm",children:[Object(l.jsx)("option",{selected:!0,children:"Open this select menu"}),Object(l.jsx)("option",{value:"red",children:"red"}),Object(l.jsx)("option",{value:"green",children:"green"}),Object(l.jsx)("option",{value:"blue",children:"blue"}),"_"]}),Object(l.jsxs)("p",{children:[" Favorite Color: ",e.favColor]}),Object(l.jsx)("button",{children:"Submit"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{style:t,children:[Object(l.jsxs)("h4",{style:n,children:["Your First Name: ",e.firstName]}),Object(l.jsxs)("h4",{style:c,children:["Your Last Name: ",e.lastName]}),Object(l.jsxs)("h4",{style:a,children:["Your Comment: ",e.comment]}),Object(l.jsxs)("h4",{style:s,children:["Your Choice: ",e.isOk&&"Yes"]}),Object(l.jsxs)("h4",{style:r,children:["Your Gender: ",e.gender]}),Object(l.jsxs)("h4",{style:o,children:["Your Favorite Color: ",e.favColor]})]})]})},_=function(e){Object(F.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(H.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={firstName:"",lastName:"",comment:"",isOk:null,gender:"",favColor:"",display:!1},e.handleChange=e.handleChange.bind(Object(R.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(R.a)(e)),e}return Object(B.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,c=t.value,a=t.type,s=t.checked;"checkbox"===a?this.setState(Object(D.a)({},n,s)):this.setState(Object(D.a)({},n,c))}},{key:"handleSubmit",value:function(e){this.setState({display:!0}),e.preventDefault()}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(W,Object(A.a)(Object(A.a)({},this.state),{},{onHandle:this.handleChange,onSubmit:this.handleSubmit}))})}}]),n}(c.Component);var G=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(_,{})})},K=n.p+"static/media/arrow-clockwise.2ba77545.svg",q=function(e){Object(F.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(H.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={output:{},loading:!0},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=Object(S.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.randomuser.me/",e.next=3,fetch("https://api.randomuser.me/");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({output:n.results[0],loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?Object(l.jsx)("center",{children:Object(l.jsx)("div",{className:"spinner-border"})}):Object(l.jsx)("div",{className:"container",style:{minHeight:"80vh"},children:Object(l.jsxs)("center",{children:[Object(l.jsx)("div",{children:"Fetched Data from https://randomuser.me:"}),Object(l.jsxs)("div",{children:[this.state.output.name.title," ",this.state.output.name.last," ",this.state.output.name.first," "]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:this.state.output.picture.large}),Object(l.jsx)("br",{}),Object(l.jsxs)("button",{className:"btn btn-warning",style:{marginTop:"20px"},onClick:function(){return e.componentDidMount()},children:[" ",Object(l.jsx)("img",{style:{},src:K})]})]})]})})}}]),n}(c.Component),V=function(e){Object(F.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(H.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isLogin:!1,input:"",user:"",message:""},e.handleOnChange=function(t){e.setState({input:t.target.value})},e.handleKeyUp=function(t){"Enter"===t.key&&e.handleButton()},e.handleButton=function(){e.state.isLogin?e.setState({input:"",isLogin:!e.state.isLogin,message:"Good by ".concat(e.state.user,", You are logged out")}):e.setState({user:e.state.input,isLogin:!e.state.isLogin,message:"Welcome "+e.state.input+"! You are logged in"})},e}return Object(B.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsx)("center",{children:Object(l.jsxs)("div",{style:{minHeight:"60vh"},children:[Object(l.jsx)("p",{children:Object(l.jsx)("input",{className:"form-control",style:{width:"50%",textAlign:"center"},type:"text",placeholder:"Wer bist du?",value:this.state.isLogin?"":this.state.input,onChange:this.handleOnChange,onKeyUp:this.handleKeyUp})}),Object(l.jsx)("button",{className:"btn btn-primary btn-sm-m-2",style:this.state.isLogin?{backgroundColor:"#F76C66"}:{backgroundColor:"#A5E54A"},onClick:function(){return e.handleButton()},children:this.state.isLogin?"log out":"log in"}),Object(l.jsx)("p",{style:{marginTop:"20px"},children:this.state.message})]})})}}]),n}(c.Component),z=0,Q=function(e){Object(F.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(H.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={imageLink:"https://www.fillmurray.com/400/200"},e}return Object(B.a)(n,[{key:"render",value:function(){var e=this,t=function(){++z%2?e.setState({imageLink:"https://www.fillmurray.com/g/400/200"}):e.setState({imageLink:"https://www.fillmurray.com/400/200"})};return Object(l.jsx)("div",{style:{minHeight:"70vh"},children:Object(l.jsxs)("center",{children:[Object(l.jsx)("img",{className:"img-fluid img-thumbnail",onClick:t,onMouseOver:function(){console.log("over")},src:this.state.imageLink}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})," ",Object(l.jsx)("button",{className:"btn btn-dark",onClick:t,children:"Change It!"})]})})}}]),n}(c.Component),X=(n(48),n(32));var Z=function(e){var t=1==!e.data.completed?"":"checked";return Object(l.jsxs)("div",{className:"todo-item",children:[Object(l.jsx)("input",{type:"checkbox",checked:e.data.completed,onChange:function(){console.log("".concat(e.data.id,".todo-item changed to ").concat(e.data.completed))},onClick:function(){return e.checkIt(e.data.id)}}),Object(l.jsx)("p",{style:{marginTop:"auto",marginBottom:"auto"},className:t,children:e.data.text}),Object(l.jsx)("button",{className:"btn delete",onClick:function(){return e.deleteTodo(e.data)},children:Object(l.jsx)(X.a,{size:14})})]})},$=function(e){Object(F.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(H.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:[],newTodo:"",ok:null,change:0,event:"",totalTodoNum:null,isLoading:!0},e.checkIt=function(t){var n=Object(h.a)(e.state.data),c=n.indexOf(t);n[c].completed=!n[c].completed,e.setState({data:n})},e.checkItV1=function(t){var n;e.setState({data:Object(h.a)(e.state.data).map((function(e){return e.id===t&&(e.completed=!e.completed,n=Object(A.a)({},e)),e}))}),n.completed?e.setState({event:'"'.concat(n.text,'" is now "Completed"')}):e.setState({event:'"'.concat(n.text,'" is now "Uncompleted"')})},e.checkItV2=function(t){var n=Object(h.a)(e.state.data).map((function(e){return e.id===t&&(e.completed=!e.completed),e}));e.setState({data:n})},e.setNewTodo=function(t){e.setState({newTodo:t.target.value})},e.addTodo=function(t){if("Enter"===t.key){e.setState({totalTodoNum:e.state.totalTodoNum+1});var n={id:e.state.totalTodoNum,text:e.state.newTodo,completed:!1};if(e.state.newTodo){e.setState({newTodo:""});var c=[].concat(Object(h.a)(e.state.data),[n]);e.setState({data:c}),e.setState({event:'"'.concat(n.text,'" is added')})}console.log(n.id,n.text)}},e.deleteTodo=function(t){var n=t.id;e.setState({data:e.state.data.filter((function(e){return e.id!=n}))}),console.log("todo number ".concat(t.text," is deleted")),e.setState({event:'"'.concat(t.text,'" is deleted')})},e.howManyOk=function(){var t=Object(h.a)(e.state.data),n=0;t=t.map((function(e){return e.completed&&n++,e})),e.setState({ok:n})},e.saveLocalTodos=function(){localStorage.setItem("todos",JSON.stringify(e.state.data)),console.log("stateData (in saveLocalTodos) ",e.state.data),console.log("todoLocal (in saveLocalTodos) ",JSON.parse(localStorage.getItem("todos")))},e.getLocalTodos=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));console.log("in getLocalTodos todoLocal",t),e.setState({data:t})}},e}return Object(B.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.data!==this.state.data&&(console.log("DidUpdate"),this.setState({change:this.state.change+1}),this.howManyOk(),this.saveLocalTodos())}},{key:"componentDidMount",value:function(){var e=this;this.getLocalTodos(),setTimeout((function(){e.setState({isLoading:!1}),e.setState({totalTodoNum:e.state.data.length+1})}),1500),this.howManyOk()}},{key:"render",value:function(){var e=this,t=this.state.data.map((function(t){return Object(l.jsx)(Z,{data:t,checkIt:e.checkItV1,deleteTodo:e.deleteTodo},t.id)})),n=this.state.data.length,c=this.state.ok,a=n-c;return Object(l.jsxs)("div",{className:"todo-list",style:{minHeight:"100vh",backgroundColor:"whitesmoke"},children:[Object(l.jsx)("h1",{children:"ToDO List "}),Object(l.jsx)("center",{children:this.state.isLoading?Object(l.jsx)("div",{className:"spinner-border"}):Object(l.jsxs)("div",{style:{height:"50px",margin:"0px 0px 20px 0px"},children:[c>0&&Object(l.jsxs)("p",{children:["Completed : ",Object(l.jsx)("span",{className:"badge badge-primary",children:c})]}),a>0&&Object(l.jsxs)("p",{children:["Uncompleted : ",Object(l.jsx)("span",{className:"badge badge-warning",children:a})]})]})}),Object(l.jsx)("hr",{style:{border:"1px solid grey",width:"150px"}}),this.state.isLoading?Object(l.jsx)("div",{className:"spinner-border"}):t,Object(l.jsx)("input",{className:"form-control",style:{width:"90%",textAlign:"center"},placeholder:"add new toDo!",type:"text",onKeyUp:this.addTodo,onChange:this.setNewTodo,value:this.state.newTodo}),Object(l.jsxs)("p",{children:["Update Nu : ",Object(l.jsx)("span",{className:"badge badge-secondary",children:this.state.change})]}),Object(l.jsx)("p",{children:Object(l.jsx)("span",{className:"badge badge-info",children:this.state.event})})]})}}]),n}(c.Component),ee=[{id:"1",name:"Pencil",price:1,description:"Perfect for those who can't remember things! 5/5 Highly recommend."},{id:"2",name:"Housing",price:0,description:"Housing provided for out-of-state students or those who can't commute"},{id:"3",name:"Computer Rental",price:300,description:"Don't have a computer? No problem!"},{id:"4",name:"Coffee",price:2,description:"Wake up!"},{id:"5",name:"Snacks",price:0,description:"Free snacks!"},{id:"6",name:"Rubber Duckies",price:3.5,description:"To help you solve your hardest coding problems."},{id:"7",name:"Fidget Spinner",price:21.99,description:"Because we like to pretend we're in high school."},{id:"8",name:"Sticker Set",price:14.99,description:"To prove to other devs you know a lot."}];var te=function(e){var t={border:"1px solid #ddd",padding:"8px"},n={border:"1px solid #ddd",padding:"8px",backgroundColor:"#bbb"},c={border:"1px solid #ddd",padding:"8px",color:"#fff"},a=e.data.map((function(e){return Object(l.jsxs)("tr",{style:0==e.price?n:t,children:[Object(l.jsx)("td",{style:t,children:e.id}),Object(l.jsx)("td",{style:t,children:e.name}),Object(l.jsx)("td",{style:0==e.price?c:t,children:e.price.toLocaleString("de-De",{style:"currency",currency:"EUR"})}),Object(l.jsx)("td",{style:t,children:e.description})]},e.id)}));return Object(l.jsxs)("table",{style:{borderCollapse:"collapse",width:"100%"},children:[Object(l.jsx)("caption",{style:{captionSide:"unset"},children:Object(l.jsx)("h1",{children:"Products"})}),Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{style:{border:"1px solid #ddd",padding:"8px"},children:[Object(l.jsx)("th",{children:"id"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{style:{width:70},children:"Price"}),Object(l.jsx)("th",{children:"Description"})]})}),Object(l.jsx)("tbody",{children:a})]})};var ne=function(){return Object(l.jsx)(te,{data:ee})};var ce=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.product.name}),Object(l.jsxs)("p",{children:[e.product.price.toLocaleString("en-US",{style:"currency",currency:"USD"})," - ",e.product.description]})]})};var ae=function(){var e=ee.map((function(e){return Object(l.jsx)(ce,{product:e},e.id)}));return Object(l.jsx)("div",{children:e})},se=n.p+"static/media/logo.6ce24c58.svg";n(49);var re=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:se,className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(l.jsx)("span",{style:{color:"red"},children:"los!"})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root12")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root11")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root10")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root9")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root8")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root7")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root6")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(V,{})}),document.getElementById("root5")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)($,{})}),document.getElementById("root4")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Q,{})}),document.getElementById("root3")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(ne,{})}),document.getElementById("root2")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(ae,{})}),document.getElementById("root1")),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(re,{})}),document.getElementById("root")),o()}},[[50,1,2]]]);
//# sourceMappingURL=main.dc8b6ea0.chunk.js.map