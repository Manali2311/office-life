(this.webpackJsonptrial=this.webpackJsonptrial||[]).push([[0],{14:function(e,a,n){e.exports=n(28)},19:function(e,a,n){},20:function(e,a,n){},21:function(e,a,n){},22:function(e,a,n){},23:function(e,a,n){},28:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),l=n(8),r=n.n(l),c=(n(19),n(9)),o=n(10),m=n(13),s=n(12),u=(n(20),n(21),function(e){return i.a.createElement("div",{className:"card-component"},i.a.createElement("img",{alt:"Family",src:"https://robohash.org/".concat(e.family.id,"?set=set2&size=180x200")}),i.a.createElement("h3",null,i.a.createElement("i",null,e.family.name)),i.a.createElement("b",null,e.family.email),i.a.createElement("i",null,e.family.no))}),h=(n(22),function(e){return i.a.createElement("div",{className:"card-list"},e.family.map((function(e){return i.a.createElement(u,{key:e.id,family:e})})))}),d=(n(23),n(30)),f=(n(24),function(e){var a=e.placeholder,n=e.handlechange;return i.a.createElement("div",{style:{width:"50%"}},i.a.createElement(d.a.Control,{type:"search",className:"search",placeholder:a,onChange:n}))}),g=function(e){Object(m.a)(n,e);var a=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=a.call(this)).state={family:[{id:1,name:"Manali",email:"manalisharma2311@gmail.com",no:123456789},{id:2,name:"Mousam",email:"mousam.sharma@gmail.com",no:12345678},{id:3,name:"Sheetal",email:"sheetal@gmail.com",no:1234567},{id:4,name:"Vipin",email:"vipinsharma@gmail.com",no:123456},{id:5,name:"Sakshi",email:"saks@gmail.com",no:12345},{id:6,name:"sarthak",email:"sarthak@gmail.com",no:12345785},{id:7,name:"Atul",email:"atu@gmail.com",no:12345e3}],SearchField:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,a=this.state,n=a.family,t=a.SearchField,l=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return i.a.createElement("div",null,i.a.createElement("h1",null,"Office Life"),i.a.createElement(f,{placeholder:"Search...",handlechange:function(a){return e.setState({SearchField:a.target.value})}}),i.a.createElement(h,{family:l}))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.179d0d20.chunk.js.map