"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[470],{2470:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(2791),r=n(9434),s=n(3634),c=function(e){return e.contacts.items},o=function(e){return e.filter},i=function(e){return e.contacts.isLoading},u="ContactForm_form__dhl+T",l="ContactForm_form__label__8W82B",m="ContactForm_form__btn__WXQ4e",d=n(184);function f(){var e=(0,r.I0)(),t=(0,r.v9)(c);return(0,d.jsx)("div",{children:(0,d.jsxs)("form",{className:u,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,r=a.elements.name.value,c=a.elements.number.value;if(t.map((function(e){return e.name.toLowerCase()})).includes(r.toLowerCase()))return alert("Subscriber ".concat(r.toUpperCase()," is already in the phonebook"));e((0,s.uK)({name:r,number:c})),a.reset()},id:"form",children:[(0,d.jsxs)("label",{className:l,children:["Name",(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("label",{className:l,children:["Number",(0,d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})})}var h=n(1634),_="Filter_search__label__SuJYK";function p(){var e=(0,r.I0)();return(0,d.jsx)("div",{children:(0,d.jsxs)("label",{className:_,children:["Find contacts by name",(0,d.jsx)("input",{onChange:function(t){e((0,h.G)(t.target.value))}})]})})}var b="ContactListItem_contact__gtH4X",x="ContactListItem_contact__btn__D0pkC";function v(e){var t=e.contact,n=(0,r.I0)();return(0,d.jsxs)("li",{className:b,children:[t.name,": ",t.number,(0,d.jsx)("button",{className:x,name:t.id,type:"button",onClick:function(e){n((0,s.GK)(e.target.name))},children:"Delete"})]})}function j(){var e=(0,r.v9)(c),t=(0,r.v9)(o),n=(0,a.useMemo)((function(){return console.log(e),e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}),[e,t]);return(0,d.jsx)("div",{children:(0,d.jsx)("ul",{children:n.map((function(e){return(0,d.jsx)(v,{contact:e},e.id)}))})})}function C(){var e=(0,r.I0)(),t=(0,r.v9)(i);return(0,a.useEffect)((function(){e((0,s.yF)())}),[e]),(0,d.jsxs)("div",{children:[(0,d.jsx)(f,{}),(0,d.jsx)(p,{}),t&&(0,d.jsx)("h1",{children:"Loading..."}),(0,d.jsx)(j,{})]})}}}]);
//# sourceMappingURL=470.3759a9ba.chunk.js.map