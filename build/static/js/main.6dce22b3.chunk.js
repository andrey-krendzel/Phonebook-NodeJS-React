(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(2),a=t.n(r),o=t(15),i=t.n(o),u=(t(6),t(3)),s=function(e){var n=e.person,t=e.eliminatePerson;return Object(c.jsxs)("li",{children:[n.name,"  ",n.number,"  ",Object(c.jsx)("button",{onClick:t,children:"delete"})]})},d=t(4),l=t.n(d),j="/api/persons",b=function(){return l.a.get(j)},h=function(e){return l.a.post(j,e)},f=function(e,n){return l.a.put("".concat(j,"/").concat(e),n)},m=function(e){return l.a.delete("".concat(j,"/").concat(e))},O=function(e){return Object(c.jsxs)("p",{children:["filter shown with  ",Object(c.jsx)("input",{onChange:e.onChange})]})},p=function(e){var n=Object(r.useState)("some message"),t=Object(u.a)(n,2),a=t[0],o=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)("ul",{children:e.persons.filter((function(n){return n.name.includes(e.filter)})).map((function(e){return Object(c.jsx)(s,{person:e,eliminatePerson:function(){return n=e.id,void m(n).then((function(e){o("id "+n+" was deleted"),alert(a)})).catch((function(e){alert("the person '".concat(n,"' was already deleted from server"))}));var n}},e.id)}))})]})},g=function(e){return Object(c.jsx)("form",{onSubmit:e.submit,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Add a new number"}),Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})},v=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{children:n})},x=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),s=i[0],d=i[1],l=Object(r.useState)(""),j=Object(u.a)(l,2),m=j[0],x=j[1],w=Object(r.useState)(""),C=Object(u.a)(w,2),S=C[0],N=C[1],k=Object(r.useState)("some error happened..."),y=Object(u.a)(k,2),P=y[0],F=y[1];Object(r.useEffect)((function(){b().then((function(e){a(e.data)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(v,{message:P}),Object(c.jsx)(O,{onChange:function(e){N(e.target.value)}}),Object(c.jsx)(g,{submit:function(e){e.preventDefault();var n={name:s,number:m,date:(new Date).toISOString(),id:Math.random()*t.length+1};if(console.log(n),console.log(t),0==function(e,n){var t;for(t=0;t<n.length;t++)if(n[t].name===e.name)return!0;return!1}(n,t))h(n).then((function(e){a(t.concat(e.data)),d(""),x(""),F("Added "+n.name)})).catch((function(e){F(e.response.data)}));else if(1==window.confirm("".concat(s," is already added to phonebook, replace the old number with the new one? "))){var c=function(e,n){var t;for(t=0;t<n.length;t++)if(n[t].name===e.name)return n[t].id}(n,t);f(c,n).then((function(e){a(t.map((function(e){return e.id!==c?e:n}))),d(""),x("")})).catch((function(e){F("Note '".concat(n.name,"' was already removed from server")),setTimeout((function(){F(null)}),5e3)}))}else alert("ok")},newName:s,handleNameChange:function(e){d(e.target.value)},newNumber:m,handleNumberChange:function(e){x(e.target.value)}}),Object(c.jsx)(p,{persons:t,filter:S})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),w()},6:function(e,n,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.6dce22b3.chunk.js.map