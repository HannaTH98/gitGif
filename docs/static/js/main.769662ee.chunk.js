(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategorias,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),d=function(t){var e=t.title,n=t.url;return console.log(e,n),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsxs)("h3",{children:[" ",e," "]})]})},l=n(6),f=n.n(l),b=n(8),p=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,r,c,a,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=zrYWIg6VZTdlmbFxAffO7qszVqov67s5&q=".concat(encodeURI(e)),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),1500)}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:" Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(r.useState)(["Game of Thrones"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategorias:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.769662ee.chunk.js.map