"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[178],{1178:function(r,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(5861),a=e(9439),u=e(7757),c=e.n(u),i=e(7689),s=e(2791),o=e(4952),p=e(4161),f=e(184),h=function(r){var t=r.profile_path,e=r.original_name,n=r.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w300/"+t:p,alt:e}),(0,f.jsx)("h4",{children:e}),(0,f.jsxs)("p",{children:["Character: ",n]})]})},d="Cast_classList__-JY3a",l=function(){var r=(0,i.UO)().movieId,t=(0,s.useState)([]),e=(0,a.Z)(t,2),u=e[0],p=e[1],l=(0,s.useState)(""),v=(0,a.Z)(l,2),m=v[0],x=v[1];return(0,s.useEffect)((function(){function t(){return t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.uV)(r);case 2:e=t.sent,p(e);case 4:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}(function(){return t.apply(this,arguments)})().catch((function(r){x("Sorry, something went wrong."),console.error(r)}))}),[r]),(0,f.jsxs)("div",{children:[m?(0,f.jsx)("p",{children:m}):(0,f.jsx)("ul",{className:d,children:null===u||void 0===u?void 0:u.map((function(r){return(0,f.jsx)(h,{profile_path:r.profile_path,original_name:r.original_name,character:r.character},r.id)}))}),0===u.length&&(0,f.jsx)("p",{children:"There is no information about the cast of this movie."})]})}},4952:function(r,t,e){e.d(t,{BG:function(){return p},Zm:function(){return o},uV:function(){return f},vS:function(){return h},wr:function(){return s}});var n=e(5861),a=e(7757),u=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="7d64af72531b3a4fd4be20da05e7a65f",s=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day",{params:{api_key:i}});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("search/movie",{params:{api_key:i,query:t,page:1}});case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t),{params:{api_key:i}});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits"),{params:{api_key:i}});case 2:return e=r.sent,r.abrupt("return",e.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(u().mark((function r(t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t),{params:{api_key:i,pafe:1}});case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},4161:function(r,t,e){r.exports=e.p+"static/media/default.b5ce25068e6f2b4e69dc.jpg"}}]);
//# sourceMappingURL=178.1efae90e.chunk.js.map