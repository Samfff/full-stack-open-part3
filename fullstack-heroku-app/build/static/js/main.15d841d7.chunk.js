(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),o=t.n(c),a=t(15),u=t.n(a),i=(t(21),t(6)),l=t(3),d=function(e){var n=e.filterInput,t=e.handleFilterInputChange;return Object(r.jsxs)("p",{children:["filter shown with ",Object(r.jsx)("input",{value:n,onChange:t})]})},s=function(e){return Object(r.jsxs)("form",{onSubmit:e.handleAddPerson,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){var n=e.person,t=e.handleDelete;return Object(r.jsxs)("p",{children:[n.name," ",n.number," ",Object(r.jsx)("button",{onClick:function(){return t(n)},children:"delete"})]})},j=function(e){var n=e.persons,t=e.filter,c=e.handleDelete;return Object(r.jsx)("p",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(r.jsx)(h,{person:e,handleDelete:c},e.name)}))})},b=t(4),f=t.n(b),m="/api/persons",O=function(){return f.a.get(m).then((function(e){return e.data}))},p=function(e){return f.a.post(m,e).then((function(e){return e.data}))},x=function(e,n){return f.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return f.a.delete("".concat(m,"/").concat(e))},v=function(e){var n=e.message,t={color:n.color,background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return null===n.content?null:Object(r.jsx)("div",{style:t,children:n.content})},w=function(){var e=Object(c.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],a=Object(c.useState)(""),u=Object(l.a)(a,2),h=u[0],b=u[1],f=Object(c.useState)(""),m=Object(l.a)(f,2),w=m[0],C=m[1],N=Object(c.useState)(""),S=Object(l.a)(N,2),y=S[0],D=S[1],k=Object(c.useState)({content:null}),I=Object(l.a)(k,2),A=I[0],E=I[1],P={name:h,number:w};Object(c.useEffect)((function(){O().then((function(e){return o(e)}))}),[]);var B=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"green";E({content:e,color:n}),setTimeout((function(){E({content:null})}),5e3)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(v,{message:A}),Object(r.jsx)(d,{filter:y,onFilterChange:function(e){return D(e.target.value)}}),Object(r.jsx)("h2",{children:"add a new"}),Object(r.jsx)(s,{handleAddPerson:function(e){(e.preventDefault(),function(e,n){return e.filter((function(e){return e.name===n})).length}(t,h))?window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))&&function(e){var n=t.find((function(n){return n.name===e})),r=Object(i.a)(Object(i.a)({},n),{},{number:w});x(r.id,r).then((function(e){o(t.map((function(t){return t.id!==n.id?t:e}))),B("Updated ".concat(r.name))})).catch((function(n){E({content:"Information of ".concat(e," has already been removed from server"),isError:!0})}))}(h):(p(P).then((function(e){o(t.concat(e)),B("Added ".concat(e.name))})),b(""),C(""))},handleNameChange:function(e){return b(e.target.value)},handleNumberChange:function(e){return C(e.target.value)},newName:h,newNumber:w}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(j,{persons:t,filter:y,handleDelete:function(e){window.confirm("Delete ".concat(e.name,"?"))&&g(e.id).then((function(){o(t.filter((function(n){return n.id!==e.id}))),B("Deleted ".concat(e.name))}))}})]})};u.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.15d841d7.chunk.js.map