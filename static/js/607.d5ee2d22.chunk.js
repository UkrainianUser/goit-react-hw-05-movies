"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[607],{3883:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7689),a=r(1087),u="ListMovies_list__-DUZK",s="ListMovies_item__8luVs",i=r(184),c=function(e){var t=e.movies,r=(0,n.TH)();return(0,i.jsx)("ul",{className:u,children:t.map((function(e){return(0,i.jsx)("li",{className:s,children:(0,i.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:r},children:e.name?e.name:e.title})},e.id)}))})}},5607:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(5861),a=r(9439),u=r(7757),s=r.n(u),i=r(2791),c=r(1087),o=r(4952),f=r(1686),p=r.n(f),m="SearchBar_input__du0TV",v=r(184),h=function(e){var t=e.onSubmit,r=(e.searchQuery,(0,i.useState)("")),n=(0,a.Z)(r,2),u=n[0],s=n[1],c=(0,i.useState)(!1),o=(0,a.Z)(c,2),f=o[0],h=o[1];return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==u.trim()?(t(u),h(!0)):p().Notify.warning("Search is a required field")},children:[(0,v.jsx)("input",{className:m,type:"text",name:"query",value:u,onChange:function(e){s(e.target.value),h(!1)},placeholder:"Enter the name of the movie"}),(0,v.jsx)("button",{type:"submit",disabled:f,children:"Search"})]})},d=r(3883),l=function(){var e=(0,c.lr)(),t=(0,a.Z)(e,2),r=t[0],u=t[1],f=r.get("query"),p=(0,i.useState)([]),m=(0,a.Z)(p,2),l=m[0],x=m[1],y=(0,i.useState)(""),Z=(0,a.Z)(y,2),_=Z[0],w=Z[1];(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Zm)(f);case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){w("Sorry, something went wrong..."),console.error(e)}))}),[f]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{onSubmit:function(e){u({query:e})},searchQuery:f}),_?(0,v.jsx)("p",{children:_}):(0,v.jsx)(d.Z,{movies:l})]})}},4952:function(e,t,r){r.d(t,{BG:function(){return f},Zm:function(){return o},uV:function(){return p},vS:function(){return m},wr:function(){return c}});var n=r(5861),a=r(7757),u=r.n(a),s=r(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="7d64af72531b3a4fd4be20da05e7a65f",c=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day",{params:{api_key:i}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie",{params:{api_key:i,query:t,page:1}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t),{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits"),{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t),{params:{api_key:i,pafe:1}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=607.d5ee2d22.chunk.js.map