/*! For license information please see 698.1d12bf0d.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[698],{4698:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return Oe}});var t=r(5861),n=r(9439),i=r(4687),s=r.n(i),o=r(2791),c=r(1087),l=r(7689),u=r(8830),d=r(8683);function f(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=r(1694),m=r.n(p),v=r(2007),y=r.n(v),b=r(184),x=["as","className","type","tooltip"],h={type:y().string,tooltip:y().bool,as:y().elementType},g=o.forwardRef((function(e,a){var r=e.as,t=void 0===r?"div":r,n=e.className,i=e.type,s=void 0===i?"valid":i,o=e.tooltip,c=void 0!==o&&o,l=f(e,x);return(0,b.jsx)(t,(0,d.Z)((0,d.Z)({},l),{},{ref:a,className:m()(n,"".concat(s,"-").concat(c?"tooltip":"feedback"))}))}));g.displayName="Feedback",g.propTypes=h;var N=g,j=o.createContext({}),k=["xxl","xl","lg","md","sm","xs"],Z=o.createContext({prefixes:{},breakpoints:k,minBreakpoint:"xs"});Z.Consumer,Z.Provider;function _(e,a){var r=(0,o.useContext)(Z).prefixes;return e||r[a]||a}var w=["id","bsPrefix","className","type","isValid","isInvalid","as"],P=o.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,n=e.className,i=e.type,s=void 0===i?"checkbox":i,c=e.isValid,l=void 0!==c&&c,u=e.isInvalid,p=void 0!==u&&u,v=e.as,y=void 0===v?"input":v,x=f(e,w),h=(0,o.useContext)(j).controlId;return t=_(t,"form-check-input"),(0,b.jsx)(y,(0,d.Z)((0,d.Z)({},x),{},{ref:a,type:s,id:r||h,className:m()(n,t,l&&"is-valid",p&&"is-invalid")}))}));P.displayName="FormCheckInput";var I=P,F=["bsPrefix","className","htmlFor"],C=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.htmlFor,i=f(e,F),s=(0,o.useContext)(j).controlId;return r=_(r,"form-check-label"),(0,b.jsx)("label",(0,d.Z)((0,d.Z)({},i),{},{ref:a,htmlFor:n||s,className:m()(t,r)}))}));C.displayName="FormCheckLabel";var O=C;var S=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],R=o.forwardRef((function(e,a){var r=e.id,t=e.bsPrefix,n=e.bsSwitchPrefix,i=e.inline,s=void 0!==i&&i,c=e.reverse,l=void 0!==c&&c,u=e.disabled,p=void 0!==u&&u,v=e.isValid,y=void 0!==v&&v,x=e.isInvalid,h=void 0!==x&&x,g=e.feedbackTooltip,k=void 0!==g&&g,Z=e.feedback,w=e.feedbackType,P=e.className,F=e.style,C=e.title,R=void 0===C?"":C,T=e.type,L=void 0===T?"checkbox":T,z=e.label,B=e.children,M=e.as,V=void 0===M?"input":M,E=f(e,S);t=_(t,"form-check"),n=_(n,"form-switch");var D=(0,o.useContext)(j).controlId,H=(0,o.useMemo)((function(){return{controlId:r||D}}),[D,r]),G=!B&&null!=z&&!1!==z||function(e,a){return o.Children.toArray(e).some((function(e){return o.isValidElement(e)&&e.type===a}))}(B,O),U=(0,b.jsx)(I,(0,d.Z)((0,d.Z)({},E),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:y,isInvalid:h,disabled:p,as:V}));return(0,b.jsx)(j.Provider,{value:H,children:(0,b.jsx)("div",{style:F,className:m()(P,G&&t,s&&"".concat(t,"-inline"),l&&"".concat(t,"-reverse"),"switch"===L&&n),children:B||(0,b.jsxs)(b.Fragment,{children:[U,G&&(0,b.jsx)(O,{title:R,children:z}),Z&&(0,b.jsx)(N,{type:w,tooltip:k,children:Z})]})})})}));R.displayName="FormCheck";var T=Object.assign(R,{Input:I,Label:O}),L=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),z=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.type,n=e.size,i=e.htmlSize,s=e.id,c=e.className,l=e.isValid,u=void 0!==l&&l,p=e.isInvalid,v=void 0!==p&&p,y=e.plaintext,x=e.readOnly,h=e.as,g=void 0===h?"input":h,N=f(e,L),k=(0,o.useContext)(j).controlId;return r=_(r,"form-control"),(0,b.jsx)(g,(0,d.Z)((0,d.Z)({},N),{},{type:t,size:i,ref:a,readOnly:x,id:s||k,className:m()(c,y?"".concat(r,"-plaintext"):r,n&&"".concat(r,"-").concat(n),"color"===t&&"".concat(r,"-color"),u&&"is-valid",v&&"is-invalid")}))}));z.displayName="FormControl";var B=Object.assign(z,{Feedback:N}),M=["className","bsPrefix","as"],V=o.forwardRef((function(e,a){var r=e.className,t=e.bsPrefix,n=e.as,i=void 0===n?"div":n,s=f(e,M);return t=_(t,"form-floating"),(0,b.jsx)(i,(0,d.Z)({ref:a,className:m()(r,t)},s))}));V.displayName="FormFloating";var E=V,D=["controlId","as"],H=o.forwardRef((function(e,a){var r=e.controlId,t=e.as,n=void 0===t?"div":t,i=f(e,D),s=(0,o.useMemo)((function(){return{controlId:r}}),[r]);return(0,b.jsx)(j.Provider,{value:s,children:(0,b.jsx)(n,(0,d.Z)((0,d.Z)({},i),{},{ref:a}))})}));H.displayName="FormGroup";var G=H,U=["as","bsPrefix","className"],q=["className"];function A(e){var a=e.as,r=e.bsPrefix,t=e.className,n=f(e,U);r=_(r,"col");var i=(0,o.useContext)(Z).breakpoints,s=(0,o.useContext)(Z).minBreakpoint,c=[],l=[];return i.forEach((function(e){var a,t,i,o=n[e];delete n[e],"object"===typeof o&&null!=o?(a=o.span,t=o.offset,i=o.order):a=o;var u=e!==s?"-".concat(e):"";a&&c.push(!0===a?"".concat(r).concat(u):"".concat(r).concat(u,"-").concat(a)),null!=i&&l.push("order".concat(u,"-").concat(i)),null!=t&&l.push("offset".concat(u,"-").concat(t))})),[(0,d.Z)((0,d.Z)({},n),{},{className:m().apply(void 0,[t].concat(c,l))}),{as:a,bsPrefix:r,spans:c}]}var W=o.forwardRef((function(e,a){var r=A(e),t=(0,n.Z)(r,2),i=t[0],s=i.className,o=f(i,q),c=t[1],l=c.as,u=void 0===l?"div":l,p=c.bsPrefix,v=c.spans;return(0,b.jsx)(u,(0,d.Z)((0,d.Z)({},o),{},{ref:a,className:m()(s,!v.length&&p)}))}));W.displayName="Col";var X=W,Q=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],Y=o.forwardRef((function(e,a){var r=e.as,t=void 0===r?"label":r,n=e.bsPrefix,i=e.column,s=void 0!==i&&i,c=e.visuallyHidden,l=void 0!==c&&c,u=e.className,p=e.htmlFor,v=f(e,Q),y=(0,o.useContext)(j).controlId;n=_(n,"form-label");var x="col-form-label";"string"===typeof s&&(x="".concat(x," ").concat(x,"-").concat(s));var h=m()(u,n,l&&"visually-hidden",s&&x);return p=p||y,s?(0,b.jsx)(X,(0,d.Z)({ref:a,as:"label",className:h,htmlFor:p},v)):(0,b.jsx)(t,(0,d.Z)({ref:a,className:h,htmlFor:p},v))}));Y.displayName="FormLabel";var J=Y,K=["bsPrefix","className","id"],$=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.id,i=f(e,K),s=(0,o.useContext)(j).controlId;return r=_(r,"form-range"),(0,b.jsx)("input",(0,d.Z)((0,d.Z)({},i),{},{type:"range",ref:a,className:m()(t,r),id:n||s}))}));$.displayName="FormRange";var ee=$,ae=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],re=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.size,n=e.htmlSize,i=e.className,s=e.isValid,c=void 0!==s&&s,l=e.isInvalid,u=void 0!==l&&l,p=e.id,v=f(e,ae),y=(0,o.useContext)(j).controlId;return r=_(r,"form-select"),(0,b.jsx)("select",(0,d.Z)((0,d.Z)({},v),{},{size:n,ref:a,className:m()(i,r,t&&"".concat(r,"-").concat(t),c&&"is-valid",u&&"is-invalid"),id:p||y}))}));re.displayName="FormSelect";var te=re,ne=["bsPrefix","className","as","muted"],ie=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.as,i=void 0===n?"small":n,s=e.muted,o=f(e,ne);return r=_(r,"form-text"),(0,b.jsx)(i,(0,d.Z)((0,d.Z)({},o),{},{ref:a,className:m()(t,r,s&&"text-muted")}))}));ie.displayName="FormText";var se=ie,oe=o.forwardRef((function(e,a){return(0,b.jsx)(T,(0,d.Z)((0,d.Z)({},e),{},{ref:a,type:"switch"}))}));oe.displayName="Switch";var ce=Object.assign(oe,{Input:T.Input,Label:T.Label}),le=["bsPrefix","className","children","controlId","label"],ue=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,n=e.children,i=e.controlId,s=e.label,o=f(e,le);return r=_(r,"form-floating"),(0,b.jsxs)(G,(0,d.Z)((0,d.Z)({ref:a,className:m()(t,r),controlId:i},o),{},{children:[n,(0,b.jsx)("label",{htmlFor:i,children:s})]}))}));ue.displayName="FloatingLabel";var de=ue,fe=["className","validated","as"],pe={_ref:y().any,validated:y().bool,as:y().elementType},me=o.forwardRef((function(e,a){var r=e.className,t=e.validated,n=e.as,i=void 0===n?"form":n,s=f(e,fe);return(0,b.jsx)(i,(0,d.Z)((0,d.Z)({},s),{},{ref:a,className:m()(r,t&&"was-validated")}))}));me.displayName="Form",me.propTypes=pe;var ve=Object.assign(me,{Group:G,Control:B,Floating:E,Check:T,Switch:ce,Label:J,Text:se,Range:ee,Select:te,FloatingLabel:de}),ye=o.createContext(null);ye.displayName="InputGroupContext";var be=ye,xe=["className","bsPrefix","as"],he=o.forwardRef((function(e,a){var r=e.className,t=e.bsPrefix,n=e.as,i=void 0===n?"span":n,s=f(e,xe);return t=_(t,"input-group-text"),(0,b.jsx)(i,(0,d.Z)({ref:a,className:m()(r,t)},s))}));he.displayName="InputGroupText";var ge=he,Ne=["bsPrefix","size","hasValidation","className","as"],je=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.size,n=e.hasValidation,i=e.className,s=e.as,c=void 0===s?"div":s,l=f(e,Ne);r=_(r,"input-group");var u=(0,o.useMemo)((function(){return{}}),[]);return(0,b.jsx)(be.Provider,{value:u,children:(0,b.jsx)(c,(0,d.Z)((0,d.Z)({ref:a},l),{},{className:m()(i,r,t&&"".concat(r,"-").concat(t),n&&"has-validation")}))})}));je.displayName="InputGroup";var ke=Object.assign(je,{Text:ge,Radio:function(e){return(0,b.jsx)(ge,{children:(0,b.jsx)(I,(0,d.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,b.jsx)(ge,{children:(0,b.jsx)(I,(0,d.Z)({type:"checkbox"},e))})}}),Ze=["as","disabled"];function _e(e){var a=e.tagName,r=e.disabled,t=e.href,n=e.target,i=e.rel,s=e.role,o=e.onClick,c=e.tabIndex,l=void 0===c?0:c,u=e.type;a||(a=null!=t||null!=n||null!=i?"a":"button");var d={tagName:a};if("button"===a)return[{type:u||"button",disabled:r},d];var f=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===a&&(t||(t="#"),r&&(t=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:r?void 0:l,href:t,target:"a"===a?n:void 0,"aria-disabled":r||void 0,rel:"a"===a?i:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},d]}var we=o.forwardRef((function(e,a){var r=e.as,t=e.disabled,i=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,Ze),s=_e(Object.assign({tagName:r,disabled:t},i)),o=(0,n.Z)(s,2),c=o[0],l=o[1].tagName;return(0,b.jsx)(l,Object.assign({},i,c,{ref:a}))}));we.displayName="Button";var Pe=["as","bsPrefix","variant","size","active","disabled","className"],Ie=o.forwardRef((function(e,a){var r=e.as,t=e.bsPrefix,i=e.variant,s=void 0===i?"primary":i,o=e.size,c=e.active,l=void 0!==c&&c,u=e.disabled,p=void 0!==u&&u,v=e.className,y=f(e,Pe),x=_(t,"btn"),h=_e((0,d.Z)({tagName:r,disabled:p},y)),g=(0,n.Z)(h,2),N=g[0],j=g[1].tagName;return(0,b.jsx)(j,(0,d.Z)((0,d.Z)((0,d.Z)({},N),y),{},{ref:a,disabled:p,className:m()(v,x,l&&"active",s&&"".concat(x,"-").concat(s),o&&"".concat(x,"-").concat(o),y.href&&p&&"disabled")}))}));Ie.displayName="Button";var Fe=Ie,Ce=r(9033),Oe=function(){var e=(0,o.useState)([]),a=(0,n.Z)(e,2),r=a[0],i=a[1],d=(0,c.lr)({}),f=(0,n.Z)(d,2),p=f[0],m=f[1],v=(0,l.TH)(),y=p.get("query");return(0,o.useEffect)((function(){if(y){var e=function(){var e=(0,t.Z)(s().mark((function e(){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.on)(y);case 3:a=e.sent,i(a.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}else i([])}),[y]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(ve,{onSubmit:function(e){e.preventDefault();var a=e.currentTarget.elements.inputQuery.value;m({query:a})},className:Ce.Z.containerInput,children:(0,b.jsxs)(ke,{className:Ce.Z.myInput,children:[(0,b.jsx)(B,{type:"text",name:"inputQuery",placeholder:""}),(0,b.jsx)(Fe,{className:Ce.Z.myButton,type:"submit",style:{backgroundColor:"rgba(1, 13, 113, 0.483)",color:"rgb(236, 253, 3)",border:"none"},children:"Search"})]})}),(0,b.jsx)("ul",{className:Ce.Z.myMovieList,children:r.map((function(e){return(0,b.jsx)("li",{children:(0,b.jsx)(c.rU,{className:Ce.Z.myMovieLink,to:"/movies/".concat(e.id),state:{from:v},children:e.title||e.name})},e.id)}))})]})}},8830:function(e,a,r){"use strict";r.d(a,{DF:function(){return l},XI:function(){return u},lj:function(){return d},oM:function(){return o},on:function(){return c}});var t=r(5861),n=r(4687),i=r.n(n),s=r(5294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US",api_key:"9300bf12d1efa3d214110c172e601b4c"}}),o=function(){var e=(0,t.Z)(i().mark((function e(){var a,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/all/day");case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,t.Z)(i().mark((function e(a){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:a}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(a){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(a));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(i().mark((function e(a){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(a,"/credits"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(a){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(a,"/reviews"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},1694:function(e,a){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=n.apply(null,r);s&&e.push(s)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},888:function(e,a,r){"use strict";var t=r(9047);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,r,n,i,s){if(s!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},2007:function(e,a,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2391:function(e){"use strict";var a=function(){};e.exports=a},9033:function(e,a){"use strict";a.Z={myPoster:"pages_myPoster__c5Jq1",myContainer:"pages_myContainer__4cSeH",myFilmContainer:"pages_myFilmContainer__xz8UF",myFilmScore:"pages_myFilmScore__gzzyC",myHomeTitle:"pages_myHomeTitle__dT9Bi",myFilmParagraph:"pages_myFilmParagraph__b4MSb",myMovieList:"pages_myMovieList__hGiuX",myMovieLink:"pages_myMovieLink__HXk5F",containerInput:"pages_containerInput__lOdy6",myInput:"pages_myInput__Eauci",myGoBackBtn:"pages_myGoBackBtn__Ymmk1",myFilmDiv:"pages_myFilmDiv__HFNim",myFilmLink:"pages_myFilmLink__o-jME",myButton:"pages_myButton__Mfi3C"}}}]);
//# sourceMappingURL=698.1d12bf0d.chunk.js.map