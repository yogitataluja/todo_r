(this.webpackJsonpredux_todo=this.webpackJsonpredux_todo||[]).push([[0],{39:function(e,t,a){},55:function(e,t,a){},67:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(24),i=a.n(n),r=(a(55),a(18)),l=(a(39),a(9)),o=a(21),d=a(28),j=(a(60),a(61),d.a.initializeApp({apiKey:"AIzaSyDkZrQDDz8CS17qD7jc3IdIYwwPA5XKMZw",authDomain:"react-with-firebase-75c2d.firebaseapp.com",projectId:"react-with-firebase-75c2d",storageBucket:"react-with-firebase-75c2d.appspot.com",messagingSenderId:"761043356033",appId:"1:761043356033:web:7581fdfc42383e411b8080",measurementId:"G-F3LYSJTNYR"})),b=d.a.auth(),u=(d.a.firestore(),d.a.database().ref().child("todos"),a(3)),m=function(e){var t=e.user;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container-fluis nav_bg",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col mx-auto",children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Todo"}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(u.jsx)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:t?Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.b,{className:"nav-link active",exact:!0,activeClassName:"active_class","aria-current":"page",onClick:function(){j.auth().signOut(),alert("Log out Successfully")},to:"/",children:"Log out"})}):Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.b,{className:"nav-link active",exact:!0,activeClassName:"active_class","aria-current":"page",to:"/signup",children:"Sign up"})})})})]})})})})})})},h=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(r.a)(n,2),o=i[0],d=i[1],b=Object(l.g)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row w-75",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.auth().signInWithEmailAndPassword(a,o).then((function(){alert("login sucessful"),b.push("/todo")})).catch((function(e){alert("No user exist | ",e)}))},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(u.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),Object(u.jsx)("button",{onClick:function(){b.push("/signup")},type:"button",className:"btn btn-primary",children:"Sign up"})]})]})})})})})},p=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(r.a)(n,2),o=i[0],d=i[1],b=Object(l.g)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row w-75",children:Object(u.jsx)("div",{className:"col ",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(a,o),j.auth().createUserWithEmailAndPassword(a,o).then((function(){alert("User Created")})).catch((function(){alert("Error Occured or user not created")}))},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(u.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Confirm",onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 ",children:"Sign Up"}),Object(u.jsx)("button",{type:"submit",onClick:function(){return b.push("/")},className:"btn btn-primary mt-4",children:"Sign in instead"})]})]})})})})})},O=(a(67),a(47)),x=a.n(O),f=a(27),v=a(48),g=a.n(v),N=a.p+"static/media/todo.77e5a9f7.svg",w=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(f.c)((function(e){return e.todoList.list})),i=Object(f.b)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"main_div",children:Object(u.jsxs)("div",{className:"child_div",children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("img",{src:N,alt:"todo logo"}),Object(u.jsx)("figcaption",{children:"Add Your List here \ud83d\udd16"})]}),Object(u.jsxs)("div",{className:"add_item",children:[Object(u.jsx)("input",{type:"text",placeholder:"\u270d\ufe0f Add your new todo...",required:!0,value:a,onChange:function(e){s(e.target.value)}}),Object(u.jsxs)("a",{className:"plus_btn",onClick:function(){return i((e=a,{type:"ADD",payload:{id:(new Date).getTime().toString(),inputtodo:e}}),s(""));var e},children:[Object(u.jsx)(x.a,{})," "]})]}),Object(u.jsx)("div",{className:"list_items",children:n.map((function(e){return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("h3",{className:"h3",children:e.inputtodo}),Object(u.jsx)("a",{className:"delet_btn",title:"Delete Item ",onClick:function(){return i({type:"DELETE",id:e.id})},children:Object(u.jsx)(g.a,{})})]},e.id)}))})]})})})},y=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){b.onAuthStateChanged((function(e){s(e||null)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{user:a}),Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",children:Object(u.jsx)(h,{user:a})}),Object(u.jsx)(l.b,{exact:!0,path:"/signup",component:p}),Object(u.jsx)(l.b,{exact:!0,path:"/todo",children:Object(u.jsx)(w,{user:a})}),Object(u.jsx)(l.a,{to:"/"})]})]})},E=(a(69),a(70),a(32)),S=a(49),_=a(29),I={list:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":var a=t.payload,c=a.id,s=a.inputtodo;return Object(_.a)(Object(_.a)({},e),{},{list:[].concat(Object(S.a)(e.list),[{id:c,inputtodo:s}])});case"DELETE":var n=e.list.filter((function(e){return e.id!==t.id}));return Object(_.a)(Object(_.a)({},e),{},{list:n});default:return e}},C=Object(E.a)({todoList:D}),P=Object(E.b)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(f.a,{store:P,children:Object(u.jsx)(y,{})})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.53a43572.chunk.js.map