"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[392],{6392:function(t,r,e){e.r(r),e.d(r,{default:function(){return v}});var n=e(5861),a=e(9439),c=e(4687),u=e.n(c),s=e(2791),o=e(7689),i=e(8830),p="cast_myActorImg__WLIDZ",f="cast_myActorList__rwA1s",l="cast_myActorName__lsCSY",m="cast_myActorCharacter__GjR54",h=e(184),v=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],v=(0,o.UO)().movieId;return console.log(v),(0,s.useEffect)((function(){if(v){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.XI)(v);case 3:r=t.sent,c(r.cast),console.log(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}}),[v]),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{className:f,children:null===e||void 0===e?void 0:e.map((function(t){return(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{className:l,children:t.name}),(0,h.jsxs)("p",{className:m,children:["Character",t.character]}),(0,h.jsx)("div",{children:t.profile_path?(0,h.jsx)("img",{className:p,src:"http://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:t.title}):(0,h.jsx)("img",{className:p,src:"https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-avatar-user-basic-abstract-circle-background-flat-color-icon-png-image_1647265.jpg",height:200,width:140,alt:t.title})})]},t.id)}))})})}},8830:function(t,r,e){e.d(r,{DF:function(){return i},XI:function(){return p},lj:function(){return f},oM:function(){return s},on:function(){return o}});var n=e(5861),a=e(4687),c=e.n(a),u=e(5294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US",api_key:"9300bf12d1efa3d214110c172e601b4c"}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/all/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=392.4acbc12c.chunk.js.map