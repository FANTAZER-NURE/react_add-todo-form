(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),s=a(6),c=a(2),r=(a(13),a(1)),o=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],l=a(8),u=a.n(l),m=a(0),j=function(e){var t=e.userId,a=d.find((function(e){return e.id===t}));return Object(m.jsx)(m.Fragment,{children:a&&Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a.email),children:a.name})})},b=function(e){var t=e.todo;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("article",{className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),"data-id":t.id,children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{userId:t.userId})]})})},h=function(e){var t=e.todos;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})})},O=function(){var e=Object(r.useState)(Object(s.a)(o)),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(""),l=Object(c.a)(i,2),u=l[0],j=l[1],b=Object(r.useState)("Choose a user"),O=Object(c.a)(b,2),f=O[0],p=O[1],x=Object(r.useState)(!0),v=Object(c.a)(x,2),N=v[0],S=v[1],y=Object(r.useState)(!1),g=Object(c.a)(y,2),C=g[0],I=g[1],_=Object(r.useState)(!0),k=Object(c.a)(_,2),T=k[0],D=k[1],w=Object(r.useState)(!1),B=Object(c.a)(w,2),L=B[0],P=B[1];return Object(r.useEffect)((function(){S(""!==u),D("Choose a user"!==f)}),[N,T]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text",className:"input is-rounded","data-cy":"titleInput",placeholder:"Name the todo",value:u,onChange:function(e){j(e.currentTarget.value),S(!0),I(!1)}}),C&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",className:"select is-rounded",value:f,onChange:function(e){p(e.currentTarget.value),D(!0),P(!1)},children:[Object(m.jsx)("option",{value:"",children:"Choose a user"}),d.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),L&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit",className:"button is-rounded","data-cy":"submitButton",onClick:function(e){e.preventDefault(),function(){I(!N),P(!T);var e=Object(s.a)(a);if(N&&T){var t=e.sort((function(e,t){return e.id-t.id}))[e.length-1],i=d.find((function(e){return e.name===f})),c=i?i.id:0,r={id:t.id+1,title:u,completed:!1,userId:c};e.push(r),n(e),j(""),p("Choose a user"),S(!1),D(!1)}}()},children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.20abba16.chunk.js.map