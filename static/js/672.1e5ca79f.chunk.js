"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[672],{672:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(5861),a=t(9439),i=t(4687),u=t.n(i),c=t(2791),s=t(1087),o="trendMovie_myTrendMovieList__JcWhh",m="trendMovie_myTrendMovieLink__HcWsI",p=t(184),_=function(e){var n=e.list;return console.log(n),(0,p.jsx)("div",{children:(0,p.jsx)("ul",{className:o,children:null===n||void 0===n?void 0:n.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{className:m,to:"/movies/".concat(e.id),children:e.title||e.name},e.id)},e.id)}))})})},f=t(8830),l=t(9033),v=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],i=n[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.oM)();case 3:n=e.sent,i(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}}),e,null,[[0,7,10,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{className:l.Z.myHomeTitle,children:"Trending Today"}),(0,p.jsx)(_,{list:t})]})}},8830:function(e,n,t){t.d(n,{DF:function(){return o},XI:function(){return m},lj:function(){return p},oM:function(){return c},on:function(){return s}});var r=t(5861),a=t(4687),i=t.n(a),u=t(5294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US",api_key:"9300bf12d1efa3d214110c172e601b4c"}}),c=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/all/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:n}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},9033:function(e,n){n.Z={myPoster:"pages_myPoster__c5Jq1",myContainer:"pages_myContainer__4cSeH",myFilmContainer:"pages_myFilmContainer__xz8UF",myFilmScore:"pages_myFilmScore__gzzyC",myHomeTitle:"pages_myHomeTitle__dT9Bi",myFilmParagraph:"pages_myFilmParagraph__b4MSb",myMovieList:"pages_myMovieList__hGiuX",myMovieLink:"pages_myMovieLink__HXk5F",containerInput:"pages_containerInput__lOdy6",myInput:"pages_myInput__Eauci",myGoBackBtn:"pages_myGoBackBtn__Ymmk1",myFilmDiv:"pages_myFilmDiv__HFNim",myFilmLink:"pages_myFilmLink__o-jME",myButton:"pages_myButton__Mfi3C"}}}]);
//# sourceMappingURL=672.1e5ca79f.chunk.js.map