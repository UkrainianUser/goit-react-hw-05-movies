"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[178],{395:function(r,t,n){n.r(t),n.d(t,{default:function(){return v}});var e=n(861),a=n(439),u=n(757),c=n.n(u),s=n(689),i=n(791),o=n(952),p=n(184),f=function(r){var t=r.profile_path,n=r.original_name,e=r.character;return(0,p.jsxs)("li",{children:[t&&(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/"+t,alt:n}),(0,p.jsx)("h4",{children:n}),(0,p.jsxs)("p",{children:["Character: ",e]})]})},h="Cast_classList__-JY3a",v=function(){var r=(0,s.UO)().movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),u=n[0],v=n[1],d=(0,i.useState)(""),l=(0,a.Z)(d,2),m=l[0],_=l[1];return(0,i.useEffect)((function(){function t(){return t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.uV)(r);case 2:n=t.sent,v(n);case 4:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}(function(){return t.apply(this,arguments)})().catch((function(r){_("Sorry, something went wrong."),console.error(r)}))}),[r]),(0,p.jsx)("div",{children:m?(0,p.jsx)("p",{children:m}):(0,p.jsx)("ul",{className:h,children:null===u||void 0===u?void 0:u.map((function(r){return(0,p.jsx)(f,{profile_path:r.profile_path,original_name:r.original_name,character:r.character},r.id)}))})})}},952:function(r,t,n){n.d(t,{BG:function(){return p},Zm:function(){return o},uV:function(){return f},vS:function(){return h},wr:function(){return i}});var e=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="7d64af72531b3a4fd4be20da05e7a65f",i=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day",{params:{api_key:s}});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("search/movie",{params:{api_key:s,query:t,page:1}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t),{params:{api_key:s,pafe:1}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=178.b71f259d.chunk.js.map