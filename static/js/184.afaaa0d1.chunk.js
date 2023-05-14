"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[184],{6184:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(5861),a=t(9439),s=t(7757),i=t.n(s),c=t(2791),u=t(7689),o=t(1087),p=t(4952),d="BackLink_backlink__4tKEe",f=t(184),l=function(e){var r=e.to;return(0,f.jsx)(o.rU,{to:r,className:d,children:" \u2190 Go back"})},v=t(6178),h="MovieInfo_movieCard__2PgTK",x=t(4161),m=function(e){var r=e.poster_path,t=e.title,n=e.release_date,a=e.vote_average,s=e.overview,i=e.genres;return(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w300/"+r:x,alt:t}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[t," (",null===n||void 0===n?void 0:n.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User Score: ",Math.round(10*a),"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:s}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:null===i||void 0===i?void 0:i.map((function(e){return e.name})).join(" ")})]})]})},_=function(){var e,r,t=(0,u.UO)().movieId,s=(0,c.useState)({}),d=(0,a.Z)(s,2),h=d[0],x=d[1],_=(0,c.useState)(""),j=(0,a.Z)(_,2),w=j[0],g=j[1],k=null!==(e=null===(r=(0,u.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.BG)(t);case 2:r=e.sent,x(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){g("The resource you requsted could not be found."),console.error(e)}))}),[t]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{to:k}),w?(0,f.jsx)("p",{children:w}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m,{poster_path:h.poster_path,title:h.title,release_date:h.release_date,vote_average:h.vote_average,overview:h.overview,genres:h.genres}),(0,f.jsx)("h4",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"cast",state:{from:k},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"reviews",state:{from:k},children:"Reviews"})})]}),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(v.Z,{}),children:(0,f.jsx)(u.j3,{})})]})]})}},4952:function(e,r,t){t.d(r,{BG:function(){return p},Zm:function(){return o},uV:function(){return d},vS:function(){return f},wr:function(){return u}});var n=t(5861),a=t(7757),s=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="7d64af72531b3a4fd4be20da05e7a65f",u=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day",{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie",{params:{api_key:c,query:r,page:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(r),{params:{api_key:c,pafe:1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},4161:function(e,r,t){e.exports=t.p+"static/media/default.b5ce25068e6f2b4e69dc.jpg"}}]);
//# sourceMappingURL=184.afaaa0d1.chunk.js.map