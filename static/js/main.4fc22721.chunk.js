(this["webpackJsonpclock-timer"]=this["webpackJsonpclock-timer"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),i=n(5),r=n(6),s=n(8),o=n(7),l=n(1),j=n.n(l),u=n(0),b=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={date:new Date},c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Clock"}),Object(u.jsx)("p",{className:"time",children:this.state.date.toLocaleTimeString()})]})}}]),n}(j.a.Component),h=n(2);function d(e){var t=Object(l.useState)(0),n=Object(h.a)(t,2),c=n[0],a=n[1],i=Object(l.useState)(0),r=Object(h.a)(i,2),s=r[0],o=r[1],j=Object(l.useState)(0),b=Object(h.a)(j,2),d=b[0],O=b[1],m=Object(l.useState)(0),v=Object(h.a)(m,2),f=v[0],k=v[1];return setInterval((function(){var e=(new Date("1 Jan 2024")-new Date)/1e3,t=Math.floor(e/3600/24),n=Math.floor(e/3600)%24,c=Math.floor(e/60)%60,i=Math.floor(e)%60;k(t),o(n),a(c),O(i)}),1e3),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("h1",{children:["Timer ",Object(u.jsx)("span",{children:'(To:"1 Jan 2024")'})]}),Object(u.jsxs)("p",{className:"time",children:[f," : ",s," : ",c," : ",d]})]})}n(14);var O=document.getElementById("root");a.a.render(Object(u.jsxs)("div",{id:"body",children:[Object(u.jsx)(b,{}),Object(u.jsx)(d,{})]}),O)}},[[15,1,2]]]);
//# sourceMappingURL=main.4fc22721.chunk.js.map