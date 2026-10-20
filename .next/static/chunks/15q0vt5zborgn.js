(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38022,e=>{"use strict";let t,r,n,o,i,a,l;var s,c,u,d,p,h,f,m,g,v,b,_,x,k,y,w,j,z,S,I,E,C,P,T,A,M,N,O,D,L,$,B,R,F,q,W,H,V,X,U,Z,G,Y,K,J,Q,ee,et,er,en,eo,ei,ea,el,es,ec,eu,ed,ep,eh,ef,em,eg,ev,eb,e_,ex,ek,ey,ew,ej,ez,eS,eI,eE,eC,eP,eT,eA,eM,eN,eO,eD,eL,e$,eB,eR,eF,eq,eW,eH,eV,eX,eU,eZ,eG,eY,eK,eJ,eQ,e0,e1,e2,e4,e3,e6,e5,e8,e7,e9,te,tt,tr,tn,to,ti,ta,tl,ts,tc,tu,td,tp,th,tf,tm,tg,tv,tb,t_,tx,tk,ty,tw,tj,tz,tS,tI,tE,tC,tP,tT,tA,tM,tN,tO,tD,tL,t$,tB,tR,tF,tq,tW,tH,tV,tX,tU,tZ,tG,tY,tK,tJ,tQ,t0,t1,t2,t4,t3,t6,t5,t8,t7,t9,re,rt,rr,rn,ro,ri,ra,rl,rs,rc,ru,rd,rp,rh,rf,rm,rg=e.i(43476),rv=e.i(71645),rb=e.i(18566),r_=e.i(11848),rx=e.i(36329),rk=e.i(16031),ry=e.i(93821),rw=e.i(68653),rj=e.i(96568);(0,rj.$)(),(0,rj.$)(),(0,rj.$)(),(0,rj.$)(),(0,rj.$)(),(0,rj.$)();var rz=(e,t=e)=>({slot:({value:r,propName:n,field:o,isReadOnly:i})=>{let a=i?t:e;return e=>a((0,rj.s)((0,rj.X)({allow:(null==o?void 0:o.type)==="slot"?o.allow:[],disallow:(null==o?void 0:o.type)==="slot"?o.disallow:[]},e),{zone:n,content:r}))}});function rS(e,t,r){let n={};return Object.keys(e).forEach(o=>{n[o]=n=>{var{parentId:i}=n,a=(0,rj.H)(n,["parentId"]);let l=a.propPath.replace(/\[\d+\]/g,"[*]"),s=(null==t?void 0:t[a.propPath])||(null==t?void 0:t[l])||r||!1,c=e[o];return null==c?void 0:c((0,rj.s)((0,rj.X)({},a),{field:a.field,isReadOnly:s,componentId:i}))}}),n}function rI(e,t,r,n=r,o,i){var a;let l,s;return a=rz(r,n),l=(0,rv.useMemo)(()=>rS(a,o,i),[a,o,i]),s=(0,rv.useMemo)(()=>(0,rw.t)(t,l,e).props,[e,t,l]),(0,rv.useMemo)(()=>(0,rj.X)((0,rj.X)({},t.props),s),[t.props,s])}(0,rj.$)(),(0,rj.$)(),(0,rj.$)(),(0,rj.$)(),(0,rj.$)();var rE=(0,ry.f)("RichTextEditor",rx.f);function rC({content:e}){return(0,rg.jsx)("div",{className:rE(),children:(0,rg.jsx)("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:e}})})}(0,rj.$)();var rP=(e,t,r)=>{if(!e)return null;if(0===t.length)return r(e);let[n,...o]=t;return Array.isArray(e)?e.map(e=>rP(e,t,r)):(0,rj.s)((0,rj.X)({},e),{[n]:rP(e[n],o,r)})},rT=(0,rv.lazy)(()=>e.A(2728).then(e=>({default:e.RichTextRender})));function rA(e,t){let r=(e,t=[])=>{if(!e)return[];let n=[];for(let[o,i]of Object.entries(e)){let e=[...t,o];"richtext"===i.type&&n.push({path:e,field:i}),"array"===i.type&&"arrayFields"in i&&n.push(...r(i.arrayFields,e)),"object"===i.type&&"objectFields"in i&&n.push(...r(i.objectFields,e))}return n},n=(0,rv.useMemo)(()=>r(e),[e]);return(0,rv.useMemo)(()=>{if(!(null==n?void 0:n.length))return{};let e=(0,rj.X)({},t);for(let{path:t,field:r}of n)e=rP(e,t,e=>(0,rg.jsx)(rv.Suspense,{fallback:(0,rg.jsx)(rC,{content:e}),children:(0,rg.jsx)(rT,{content:e,field:r})},t.join(".")));return e},[n,t,e])}(0,rj.$)();var rM=e=>(0,rg.jsx)(rO,(0,rj.X)({},e)),rN=({config:e,item:t,metadata:r})=>{let n=e.components[t.type],o=rI(e,t,t=>(0,rg.jsx)(rM,(0,rj.s)((0,rj.X)({},t),{config:e,metadata:r}))),i=rA(n.fields,o);return(0,rg.jsx)(n.render,(0,rj.s)((0,rj.X)((0,rj.X)({},o),i),{puck:(0,rj.s)((0,rj.X)({},o.puck),{metadata:r||{}})}))},rO=(0,rv.forwardRef)(function({className:e,style:t,content:r,config:n,metadata:o,as:i},a){return(0,rg.jsx)(null!=i?i:"div",{className:e,style:t,ref:a,children:r.map(e=>n.components[e.type]?(0,rg.jsx)(rN,{config:n,item:e,metadata:o},e.props.id):null)})}),rD=e.i(9071),rL=e.i(84173),r$=e.i(54396),rB=rj,rR=rg;let rF=(e,t)=>{let r=e instanceof Map?e:new Map(e.entries()),n=t instanceof Map?t:new Map(t.entries());if(r.size!==n.size)return!1;for(let[e,t]of r)if(!n.has(e)||!Object.is(t,n.get(e)))return!1;return!0};function rq(e){let t=rv.default.useRef(void 0);return r=>{let n=e(r);return!function(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;if(Symbol.iterator in e&&Symbol.iterator in t){if("entries"in e&&"entries"in t)return rF(e,t);let r=e[Symbol.iterator](),n=t[Symbol.iterator](),o=r.next(),i=n.next();for(;!o.done&&!i.done;){if(!Object.is(o.value,i.value))return!1;o=r.next(),i=n.next()}return!!o.done&&!!i.done}return rF({entries:()=>Object.entries(e)},{entries:()=>Object.entries(t)})}(t.current,n)?t.current=n:t.current}}var rW=e.i(8155),rH=e.i(68834),rV=e.i(79473),rX=Symbol.for("preact-signals");function rU(){if(rQ>1)rQ--;else{var e,t=!1,r=r4;for(r4=void 0;void 0!==r;){var n=r.S;if(n.v===r.v)for(var o=n.t;void 0!==o;o=o.x)o.i===r.i&&(o.i=n.i);r=r.o}for(;void 0!==rJ;){var i=rJ;for(rJ=void 0,r0++;void 0!==i;){var a=i.u;if(i.u=void 0,i.f&=-3,!(8&i.f)&&r7(i))try{i.c()}catch(r){t||(e=r,t=!0)}i=a}}if(r0=0,rQ--,t)throw e}}function rZ(e){if(rQ>0)return e();r2=++r1,rQ++;try{return e()}finally{rU()}}var rG,rY=void 0;function rK(e){var t=rY,r=rG;rY=void 0,rG=void 0;try{return e()}finally{rY=t,rG=r}}var rJ=void 0,rQ=0,r0=0,r1=0,r2=0,r4=void 0,r3=0;function r6(e){if(void 0!==rY){var t=e.n;if(void 0===t||t.t!==rY)return t={i:0,S:e,p:rY.s,n:void 0,t:rY,e:void 0,x:void 0,r:t},void 0!==rY.s&&(rY.s.n=t),rY.s=t,e.n=t,32&rY.f&&e.S(t),t;if(-1===t.i)return t.i=0,void 0!==t.n&&(t.n.p=t.p,void 0!==t.p&&(t.p.n=t.n),t.p=rY.s,t.n=void 0,rY.s.n=t,rY.s=t),t}}function r5(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=null==t?void 0:t.watched,this.Z=null==t?void 0:t.unwatched,this.name=null==t?void 0:t.name}function r8(e,t){return new r5(e,t)}function r7(e){for(var t=e.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function r9(e){for(var t=e.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r&&(t.r=r),t.S.n=t,t.i=-1,void 0===t.n){e.s=t;break}}}function ne(e){for(var t=e.s,r=void 0;void 0!==t;){var n=t.p;-1===t.i?(t.S.U(t),void 0!==n&&(n.n=t.n),void 0!==t.n&&(t.n.p=n)):r=t,t.S.n=t.r,void 0!==t.r&&(t.r=void 0),t=n}e.s=r}function nt(e,t){r5.call(this,void 0,t),this.x=e,this.s=void 0,this.g=r3-1,this.f=4}function nr(e){var t=e.m;if(e.m=void 0,"function"==typeof t){rQ++;var r=rY;rY=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,nn(e),t}finally{rY=r,rU()}}}function nn(e){for(var t=e.s;void 0!==t;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,nr(e)}function no(e){if(rY!==this)throw Error("Out-of-order effect");ne(this),rY=e,this.f&=-2,8&this.f&&nn(this),rU()}function ni(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=null==t?void 0:t.name,rG&&rG.push(this)}function na(e,t){var r=new ni(e,t);try{r.c()}catch(e){throw r.d(),e}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}r5.prototype.brand=rX,r5.prototype.h=function(){return!0},r5.prototype.S=function(e){var t=this,r=this.t;r!==e&&void 0===e.e&&(e.x=r,this.t=e,void 0!==r?r.e=e:rK(function(){var e;null==(e=t.W)||e.call(t)}))},r5.prototype.U=function(e){var t=this;if(void 0!==this.t){var r=e.e,n=e.x;void 0!==r&&(r.x=n,e.e=void 0),void 0!==n&&(n.e=r,e.x=void 0),e===this.t&&(this.t=n,void 0===n&&rK(function(){var e;null==(e=t.Z)||e.call(t)}))}},r5.prototype.subscribe=function(e){var t=this;return na(function(){var r=t.value;rK(function(){return e(r)})},{name:"sub"})},r5.prototype.valueOf=function(){return this.value},r5.prototype.toString=function(){return this.value+""},r5.prototype.toJSON=function(){return this.value},r5.prototype.peek=function(){var e=this;return rK(function(){return e.value})},Object.defineProperty(r5.prototype,"value",{get:function(){var e=r6(this);return void 0!==e&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(r0>100)throw Error("Cycle detected");0!==rQ&&0===r0&&this.l!==r2&&(this.l=r2,r4={S:this,v:this.v,i:this.i,o:r4}),this.v=e,this.i++,r3++,rQ++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{rU()}}}}),nt.prototype=new r5,nt.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===r3))return!0;if(this.g=r3,this.f|=1,this.i>0&&!r7(this))return this.f&=-2,!0;var e=rY;try{r9(this),rY=this;var t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return rY=e,ne(this),this.f&=-2,!0},nt.prototype.S=function(e){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}r5.prototype.S.call(this,e)},nt.prototype.U=function(e){if(void 0!==this.t&&(r5.prototype.U.call(this,e),void 0===this.t)){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}},nt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;void 0!==e;e=e.x)e.t.N()}},Object.defineProperty(nt.prototype,"value",{get:function(){if(1&this.f)throw Error("Cycle detected");var e=r6(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),ni.prototype.c=function(){var e=this.S();try{if(8&this.f||void 0===this.x)return;var t=this.x();"function"==typeof t&&(this.m=t)}finally{e()}},ni.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,nr(this),r9(this),rQ++;var e=rY;return rY=this,no.bind(this,e)},ni.prototype.N=function(){2&this.f||(this.f|=2,this.u=rJ,rJ=this)},ni.prototype.d=function(){this.f|=8,1&this.f||nn(this)},ni.prototype.dispose=function(){this.d()};var nl=Object.create,ns=Object.defineProperty,nc=Object.defineProperties,nu=Object.getOwnPropertyDescriptor,nd=Object.getOwnPropertyDescriptors,np=Object.getOwnPropertySymbols,nh=Object.prototype.hasOwnProperty,nf=Object.prototype.propertyIsEnumerable,nm=e=>{throw TypeError(e)},ng=(e,t,r)=>t in e?ns(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nv=(e,t)=>ns(e,"name",{value:t,configurable:!0}),nb=["class","method","getter","setter","accessor","field","value","get","set"],n_=e=>void 0!==e&&"function"!=typeof e?nm("Function expected"):e,nx=(e,t,r,n,o)=>({kind:nb[e],name:t,metadata:n,addInitializer:e=>r._?nm("Already initialized"):o.push(n_(e||null))}),nk=(e,t)=>{let r,n;return ng(t,(r="metadata",(n=Symbol[r])?n:Symbol.for("Symbol."+r)),e[3])},ny=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)1&t?i[o].call(r):n=i[o].call(r,n);return n},nw=(e,t,r,n,o,i)=>{var a,l,s,c,u,d=7&t,p=!!(8&t),h=!!(16&t),f=d>3?e.length+1:d?p?1:2:0,m=nb[d+5],g=d>3&&(e[f-1]=[]),v=e[f]||(e[f]=[]),b=d&&(h||p||(o=o.prototype),d<5&&(d>3||!h)&&nu(d<4?o:{get[r](){return nS(this,i)},set[r](e){return nE(this,i,e)}},r));d?h&&d<4&&nv(i,(d>2?"set ":d>1?"get ":"")+r):nv(o,r);for(var _=n.length-1;_>=0;_--)c=nx(d,r,s={},e[3],v),d&&(c.static=p,c.private=h,u=c.access={has:h?e=>nz(o,e):e=>r in e},3^d&&(u.get=h?e=>(1^d?nS:nC)(e,o,4^d?i:b.get):e=>e[r]),d>2&&(u.set=h?(e,t)=>nE(e,o,t,4^d?i:b.set):(e,t)=>e[r]=t)),l=(0,n[_])(d?d<4?h?i:b[m]:d>4?void 0:{get:b.get,set:b.set}:o,c),s._=1,4^d||void 0===l?n_(l)&&(d>4?g.unshift(l):d?h?i=l:b[m]=l:o=l):"object"!=typeof l||null===l?nm("Object expected"):(n_(a=l.get)&&(b.get=a),n_(a=l.set)&&(b.set=a),n_(a=l.init)&&g.unshift(a));return d||nk(e,o),b&&ns(o,r,b),h?4^d?i:b:o},nj=(e,t,r)=>t.has(e)||nm("Cannot "+r),nz=(e,t)=>Object(t)!==t?nm('Cannot use the "in" operator on this value'):e.has(t),nS=(e,t,r)=>(nj(e,t,"read from private field"),r?r.call(e):t.get(e)),nI=(e,t,r)=>t.has(e)?nm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),nE=(e,t,r,n)=>(nj(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),nC=(e,t,r)=>(nj(e,t,"access private method"),r);function nP(e,t){if(t){let r;return new nt(()=>{let n=e();return n&&r&&t(r,n)?r:(r=n,n)},void 0)}return new nt(e,void 0)}function nT(e,t){if(Object.is(e,t))return!0;if(null===e||null===t)return!1;if("function"==typeof e&&"function"==typeof t)return e===t;if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&!e.some((e,r)=>!nT(e,t[r]));if("object"==typeof e&&"object"==typeof t){let r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&!r.some(r=>!nT(e[r],t[r]))}return!1}function nA({get:e},t){return{init:e=>r8(e),get(){return e.call(this).value},set(t){let r=e.call(this);r.peek()!==t&&(r.value=t)}}}function nM(e,t){let r=new WeakMap;return function(){let t=r.get(this);return t||(t=nP(e.bind(this)),r.set(this,t)),t.value}}function nN(e=!0){return function(t,r){r.addInitializer(function(){let t="field"===r.kind||r.static?this:Object.getPrototypeOf(this),n=Object.getOwnPropertyDescriptor(t,r.name);n&&Object.defineProperty(t,r.name,nc(((e,t)=>{for(var r in t||(t={}))nh.call(t,r)&&ng(e,r,t[r]);if(np)for(var r of np(t))nf.call(t,r)&&ng(e,r,t[r]);return e})({},n),nd({enumerable:e})))})}}function nO(...e){let t=e.map(e=>na(e));return()=>t.forEach(e=>e())}w=[nA],y=[nA],k=[nA],x=[nN()],_=[nN()],b=[nN()];var nD=class{constructor(e,t=Object.is){this.defaultValue=e,this.equals=t,ny(j,5,this),nI(this,C),nI(this,z,ny(j,8,this)),ny(j,11,this),nI(this,P,ny(j,12,this)),ny(j,15,this),nI(this,N,ny(j,16,this)),ny(j,19,this),this.reset=this.reset.bind(this),this.reset()}get current(){return nS(this,C,D)}get initial(){return nS(this,C,I)}get previous(){return nS(this,C,A)}set current(e){let t=rK(()=>nS(this,C,D));e&&t&&this.equals(t,e)||rZ(()=>{nS(this,C,I)||nE(this,C,e,E),nE(this,C,t,M),nE(this,C,e,L)})}reset(e=this.defaultValue){rZ(()=>{nE(this,C,void 0,M),nE(this,C,e,E),nE(this,C,e,L)})}};function nL(e){return rK(()=>{let t={};for(let r in e)t[r]=e[r];return t})}j=[,,,nl(null)],z=new WeakMap,C=new WeakSet,P=new WeakMap,N=new WeakMap,I=(S=nw(j,20,"#initial",w,C,z)).get,E=S.set,A=(T=nw(j,20,"#previous",y,C,P)).get,M=T.set,D=(O=nw(j,20,"#current",k,C,N)).get,L=O.set,nw(j,2,"current",x,nD),nw(j,2,"initial",_,nD),nw(j,2,"previous",b,nD),nk(j,nD);var n$=class{constructor(){nI(this,$,new WeakMap)}get(e,t){var r;return e?null==(r=nS(this,$).get(e))?void 0:r.get(t):void 0}set(e,t,r){var n;if(e)return nS(this,$).has(e)||nS(this,$).set(e,new Map),null==(n=nS(this,$).get(e))?void 0:n.set(t,r)}clear(e){var t;return e?null==(t=nS(this,$).get(e))?void 0:t.clear():void 0}};$=new WeakMap;var nB=Object.create,nR=Object.defineProperty,nF=Object.getOwnPropertyDescriptor,nq=Object.getOwnPropertySymbols,nW=Object.prototype.hasOwnProperty,nH=Object.prototype.propertyIsEnumerable,nV=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),nX=e=>{throw TypeError(e)},nU=Math.pow,nZ=(e,t,r)=>t in e?nR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nG=(e,t)=>nR(e,"name",{value:t,configurable:!0}),nY=["class","method","getter","setter","accessor","field","value","get","set"],nK=e=>void 0!==e&&"function"!=typeof e?nX("Function expected"):e,nJ=(e,t,r,n,o)=>({kind:nY[e],name:t,metadata:n,addInitializer:e=>r._?nX("Already initialized"):o.push(nK(e||null))}),nQ=(e,t)=>nZ(t,nV("metadata"),e[3]),n0=(e,t,r,n,o,i)=>{var a,l,s,c,u,d=7&t,p=!!(8&t),h=!!(16&t),f=d>3?e.length+1:d?p?1:2:0,m=nY[d+5],g=d>3&&(e[f-1]=[]),v=e[f]||(e[f]=[]),b=d&&(h||p||(o=o.prototype),d<5&&(d>3||!h)&&nF(d<4?o:{get[r](){return n4(this,i)},set[r](e){return n3(this,i,e)}},r));d?h&&d<4&&nG(i,(d>2?"set ":d>1?"get ":"")+r):nG(o,r);for(var _=n.length-1;_>=0;_--)c=nJ(d,r,s={},e[3],v),d&&(c.static=p,c.private=h,u=c.access={has:h?e=>n2(o,e):e=>r in e},3^d&&(u.get=h?e=>(1^d?n4:n6)(e,o,4^d?i:b.get):e=>e[r]),d>2&&(u.set=h?(e,t)=>n3(e,o,t,4^d?i:b.set):(e,t)=>e[r]=t)),l=(0,n[_])(d?d<4?h?i:b[m]:d>4?void 0:{get:b.get,set:b.set}:o,c),s._=1,4^d||void 0===l?nK(l)&&(d>4?g.unshift(l):d?h?i=l:b[m]=l:o=l):"object"!=typeof l||null===l?nX("Object expected"):(nK(a=l.get)&&(b.get=a),nK(a=l.set)&&(b.set=a),nK(a=l.init)&&g.unshift(a));return d||nQ(e,o),b&&nR(o,r,b),h?4^d?i:b:o},n1=(e,t,r)=>t.has(e)||nX("Cannot "+r),n2=(e,t)=>Object(t)!==t?nX('Cannot use the "in" operator on this value'):e.has(t),n4=(e,t,r)=>(n1(e,t,"read from private field"),r?r.call(e):t.get(e)),n3=(e,t,r,n)=>(n1(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),n6=(e,t,r)=>(n1(e,t,"access private method"),r),n5=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,r){return new e(t.x-r.x,t.y-r.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:r}){return new e(t,r)}},n8=class e{constructor(e,t,r,n){this.left=e,this.top=t,this.width=r,this.height=n,this.scale={x:1,y:1}}get inverseScale(){return{x:1/this.scale.x,y:1/this.scale.y}}translate(t,r){let{top:n,left:o,width:i,height:a,scale:l}=this,s=new e(o+t,n+r,i,a);return s.scale=((e,t)=>{for(var r in t||(t={}))nW.call(t,r)&&nZ(e,r,t[r]);if(nq)for(var r of nq(t))nH.call(t,r)&&nZ(e,r,t[r]);return e})({},l),s}get boundingRectangle(){let{width:e,height:t,left:r,top:n,right:o,bottom:i}=this;return{width:e,height:t,left:r,top:n,right:o,bottom:i}}get center(){let{left:e,top:t,right:r,bottom:n}=this;return new n5((e+r)/2,(t+n)/2)}get area(){let{width:e,height:t}=this;return e*t}equals(t){if(!(t instanceof e))return!1;let{left:r,top:n,width:o,height:i}=this;return r===t.left&&n===t.top&&o===t.width&&i===t.height}containsPoint(e){let{top:t,left:r,bottom:n,right:o}=this;return t<=e.y&&e.y<=n&&r<=e.x&&e.x<=o}intersectionArea(t){var r,n;let o,i,a,l;return t instanceof e?(r=this,o=Math.max((n=t).top,r.top),i=Math.max(n.left,r.left),a=Math.min(n.left+n.width,r.left+r.width),l=Math.min(n.top+n.height,r.top+r.height),i<a&&o<l?(a-i)*(l-o):0):0}intersectionRatio(e){let{area:t}=this,r=this.intersectionArea(e);return r/(e.area+t-r)}get bottom(){let{top:e,height:t}=this;return e+t}get right(){let{left:e,width:t}=this;return e+t}get aspectRatio(){let{width:e,height:t}=this;return e/t}get corners(){return[{x:this.left,y:this.top},{x:this.right,y:this.top},{x:this.left,y:this.bottom},{x:this.right,y:this.bottom}]}static from({top:t,left:r,width:n,height:o}){return new e(r,t,n,o)}static delta(e,t,r={x:"center",y:"center"}){let n=(e,t)=>{let n=r[t],o="x"===t?e.left:e.top,i="x"===t?e.width:e.height;return"start"==n?o:"end"==n?o+i:o+i/2};return n5.delta({x:n(e,"x"),y:n(e,"y")},{x:n(t,"x"),y:n(t,"y")})}static intersectionRatio(t,r){return e.from(t).intersectionRatio(e.from(r))}},n7=class extends(F=nD,R=[nM],B=[nM],F){constructor(e){let t;super(n5.from(e),(e,t)=>n5.equals(e,t)),((e,t)=>{for(var r=0,n=e[2],o=n&&n.length;r<o;r++)n[r].call(t)})(W,this),(t=q).has(this)?nX("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(this):t.set(this,0),this.velocity={x:0,y:0}}get delta(){return n5.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let r={x:e.x-t.x,y:e.y-t.y};return r.x||r.y?Math.abs(r.x)>Math.abs(r.y)?r.x>0?"right":"left":r.y>0?"down":"up":null}get current(){return super.current}set current(e){let{current:t}=this,r=n5.from(e),n={x:r.x-t.x,y:r.y-t.y},o=Date.now(),i=o-n4(this,q),a=e=>Math.round(e/i*100);rZ(()=>{n3(this,q,o),this.velocity={x:a(n.x),y:a(n.y)},super.current=r})}reset(e=this.defaultValue){super.reset(n5.from(e)),this.velocity={x:0,y:0}}};function n9({x:e,y:t},r){let n=Math.abs(e),o=Math.abs(t);return"number"==typeof r?Math.sqrt(nU(n,2)+nU(o,2))>r:"x"in r&&"y"in r?n>r.x&&o>r.y:"x"in r?n>r.x:"y"in r&&o>r.y}W=[,,,nB(null!=(s=null==F?void 0:F[nV("metadata")])?s:null)],q=new WeakMap,n0(W,2,"delta",R,n7),n0(W,2,"direction",B,n7),nQ(W,n7);var oe=((c=oe||{}).Horizontal="x",c.Vertical="y",c),ot=Object.values(oe),or=Object.create,on=Object.defineProperty,oo=Object.defineProperties,oi=Object.getOwnPropertyDescriptor,oa=Object.getOwnPropertyDescriptors,ol=Object.getOwnPropertySymbols,os=Object.prototype.hasOwnProperty,oc=Object.prototype.propertyIsEnumerable,ou=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),od=e=>{throw TypeError(e)},op=(e,t,r)=>t in e?on(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,oh=(e,t)=>{for(var r in t||(t={}))os.call(t,r)&&op(e,r,t[r]);if(ol)for(var r of ol(t))oc.call(t,r)&&op(e,r,t[r]);return e},of=(e,t)=>oo(e,oa(t)),om=(e,t)=>on(e,"name",{value:t,configurable:!0}),og=(e,t)=>{var r={};for(var n in e)os.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&ol)for(var n of ol(e))0>t.indexOf(n)&&oc.call(e,n)&&(r[n]=e[n]);return r},ov=e=>{var t;return[,,,or(null!=(t=null==e?void 0:e[ou("metadata")])?t:null)]},ob=["class","method","getter","setter","accessor","field","value","get","set"],o_=e=>void 0!==e&&"function"!=typeof e?od("Function expected"):e,ox=(e,t,r,n,o)=>({kind:ob[e],name:t,metadata:n,addInitializer:e=>r._?od("Already initialized"):o.push(o_(e||null))}),ok=(e,t)=>op(t,ou("metadata"),e[3]),oy=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)1&t?i[o].call(r):n=i[o].call(r,n);return n},ow=(e,t,r,n,o,i)=>{var a,l,s,c,u,d=7&t,p=!!(8&t),h=!!(16&t),f=d>3?e.length+1:d?p?1:2:0,m=ob[d+5],g=d>3&&(e[f-1]=[]),v=e[f]||(e[f]=[]),b=d&&(h||p||(o=o.prototype),d<5&&(d>3||!h)&&oi(d<4?o:{get[r](){return oS(this,i)},set[r](e){return oE(this,i,e)}},r));d?h&&d<4&&om(i,(d>2?"set ":d>1?"get ":"")+r):om(o,r);for(var _=n.length-1;_>=0;_--)c=ox(d,r,s={},e[3],v),d&&(c.static=p,c.private=h,u=c.access={has:h?e=>oz(o,e):e=>r in e},3^d&&(u.get=h?e=>(1^d?oS:oC)(e,o,4^d?i:b.get):e=>e[r]),d>2&&(u.set=h?(e,t)=>oE(e,o,t,4^d?i:b.set):(e,t)=>e[r]=t)),l=(0,n[_])(d?d<4?h?i:b[m]:d>4?void 0:{get:b.get,set:b.set}:o,c),s._=1,4^d||void 0===l?o_(l)&&(d>4?g.unshift(l):d?h?i=l:b[m]=l:o=l):"object"!=typeof l||null===l?od("Object expected"):(o_(a=l.get)&&(b.get=a),o_(a=l.set)&&(b.set=a),o_(a=l.init)&&g.unshift(a));return d||ok(e,o),b&&on(o,r,b),h?4^d?i:b:o},oj=(e,t,r)=>t.has(e)||od("Cannot "+r),oz=(e,t)=>Object(t)!==t?od('Cannot use the "in" operator on this value'):e.has(t),oS=(e,t,r)=>(oj(e,t,"read from private field"),r?r.call(e):t.get(e)),oI=(e,t,r)=>t.has(e)?od("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),oE=(e,t,r,n)=>(oj(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),oC=(e,t,r)=>(oj(e,t,"access private method"),r);function oP(e,t){return{plugin:e,options:t}}function oT(e){return t=>oP(e,t)}function oA(e){return"function"==typeof e?{plugin:e,options:void 0}:e}H=[nA];var oM=class{constructor(e,t){this.manager=e,this.options=t,oI(this,X,oy(V,8,this,!1)),oy(V,11,this),oI(this,U,new Set)}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return rK(()=>this.disabled)}configure(e){this.options=e}registerEffect(e){let t=na(e.bind(this));return oS(this,U).add(t),t}destroy(){oS(this,U).forEach(e=>e())}static configure(e){return oP(this,e)}};V=ov(null),X=new WeakMap,U=new WeakMap,ow(V,4,"disabled",H,oM,X),ok(V,oM);var oN=class extends oM{},oO=class{constructor(e){this.manager=e,this.instances=new Map,oI(this,Z,[])}get values(){return Array.from(this.instances.values())}set values(e){let t=e.map(oA).reduce((e,t)=>{let r=e.find(({plugin:e})=>e===t.plugin);return r?(r.options=t.options,e):[...e,t]},[]),r=t.map(({plugin:e})=>e);for(let e of oS(this,Z))if(!r.includes(e)){if(e.prototype instanceof oN)continue;this.unregister(e)}for(let{plugin:e,options:r}of t)this.register(e,r);oE(this,Z,r)}get(e){return this.instances.get(e)}register(e,t){let r=this.instances.get(e);if(r)return r.options!==t&&(r.options=t),r;let n=new e(this.manager,t);return this.instances.set(e,n),n}unregister(e){let t=this.instances.get(e);t&&(t.destroy(),this.instances.delete(e))}destroy(){for(let e of this.instances.values())e.destroy();this.instances.clear()}};function oD(e,t){return e.priority===t.priority?e.type===t.type?t.value-e.value:t.type-e.type:t.priority-e.priority}Z=new WeakMap;var oL=[],o$=class extends oM{constructor(e){super(e),oI(this,G),oI(this,Y),this.computeCollisions=this.computeCollisions.bind(this),oE(this,Y,r8(oL)),this.destroy=nO(()=>{let e=this.computeCollisions(),t=rK(()=>this.manager.dragOperation.position.current);if(e!==oL){let e=oS(this,G);if(oE(this,G,t),e&&t.x==e.x&&t.y==e.y)return}else oE(this,G,void 0);oS(this,Y).value=e},()=>{let{dragOperation:e}=this.manager;e.status.initialized&&this.forceUpdate()})}forceUpdate(e=!0){rK(()=>{e?oS(this,Y).value=this.computeCollisions():oE(this,G,void 0)})}computeCollisions(e,t){let{registry:r,dragOperation:n}=this.manager,{source:o,shape:i,status:a}=n;if(!a.initialized||!i)return oL;let l=[],s=[];for(let i of null!=e?e:r.droppables){if(i.disabled||o&&!i.accepts(o))continue;let e=null!=t?t:i.collisionDetector;if(!e)continue;s.push(i),i.shape;let r=rK(()=>e({droppable:i,dragOperation:n}));r&&(null!=i.collisionPriority&&(r.priority=i.collisionPriority),l.push(r))}return 0===s.length?oL:(l.sort(oD),l)}get collisions(){return oS(this,Y).value}};G=new WeakMap,Y=new WeakMap,Q=[nA],J=[nA],K=[nA];var oB=class e{constructor(e,t){oI(this,en,oy(er,8,this)),oy(er,11,this),oI(this,eo),oI(this,ei,oy(er,12,this)),oy(er,15,this),oI(this,ea,oy(er,16,this)),oy(er,19,this);let{effects:r,id:n,data:o={},disabled:i=!1,register:a=!0}=e,l=n;oE(this,eo,r8(n)),this.manager=t,this.data=o,this.disabled=i,this.effects=()=>{var e;return[()=>{let{id:e,manager:t}=this;if(e!==l)return l=e,null==t||t.registry.register(this),()=>null==t?void 0:t.registry.unregister(this)},...null!=(e=null==r?void 0:r())?e:[]]},this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.destroy=this.destroy.bind(this),t&&a&&queueMicrotask(this.register)}get id(){var t,r;let n=oS(this,eo).value;return null!=(r=null==(t=e.pendingIdChanges)?void 0:t.get(this))?r:n}set id(t){var r,n;t!==(null!=(n=null==(r=e.pendingIdChanges)?void 0:r.get(this))?n:oS(this,eo).peek())&&(e.pendingIdChanges||(e.pendingIdChanges=new Map,queueMicrotask(()=>oC(e,ee,et).call(e))),e.pendingIdChanges.set(this,t))}register(){var e;return null==(e=this.manager)?void 0:e.registry.register(this)}unregister(){var e;null==(e=this.manager)||e.registry.unregister(this)}destroy(){var e;null==(e=this.manager)||e.registry.unregister(this)}};er=ov(null),ee=new WeakSet,et=function(){let e=oB.pendingIdChanges;oB.pendingIdChanges=null,e&&rZ(()=>{for(let[t,r]of e)oS(t,eo).value=r})},en=new WeakMap,eo=new WeakMap,ei=new WeakMap,ea=new WeakMap,ow(er,4,"manager",Q,oB,en),ow(er,4,"data",J,oB,ei),ow(er,4,"disabled",K,oB,ea),oI(oB,ee),ok(er,oB),oB.pendingIdChanges=null;var oR=oB,oF=class{constructor(){this.map=r8(new Map),this.cleanupFunctions=new WeakMap,this.register=(e,t)=>{let r=this.map.peek(),n=r.get(e),o=()=>this.unregister(e,t);if(n===t)return o;if(n&&n.id===e){let e=this.cleanupFunctions.get(n);null==e||e(),this.cleanupFunctions.delete(n)}let i=new Map(r);for(let[n,o]of r)if(o===t&&n!==e){i.delete(n);break}i.set(e,t),this.map.value=i;let a=nO(...t.effects());return this.cleanupFunctions.set(t,a),o},this.unregister=(e,t)=>{let r=this.map.peek();if(r.get(e)!==t)return;let n=this.cleanupFunctions.get(t);null==n||n(),this.cleanupFunctions.delete(t);let o=new Map(r);o.delete(e),this.map.value=o}}[Symbol.iterator](){return this.map.peek().values()}get value(){return this.map.value.values()}has(e){return this.map.value.has(e)}get(e){return this.map.value.get(e)}destroy(){for(let e of this){let t=this.cleanupFunctions.get(e);null==t||t(),e.destroy()}this.map.value=new Map}},oq=class extends(eh=oR,ep=[nA],ed=[nA],eu=[nA],ec=[nM],es=[nM],el=[nM],eh){constructor(e,t){var{modifiers:r,type:n,sensors:o,plugins:i,effects:a}=e,l=og(e,["modifiers","type","sensors","plugins","effects"]);super(of(oh({},l),{effects:()=>{var e;return[...null!=(e=null==a?void 0:a())?e:[],()=>{let{manager:e,plugins:t}=this;if(e&&t)for(let r of t){let{plugin:t}=oA(r);e.registry.plugins.register(t)}}]}}),t),oy(ef,5,this),oI(this,em,oy(ef,8,this)),oy(ef,11,this),oI(this,eg,oy(ef,12,this)),oy(ef,15,this),oI(this,ev,oy(ef,16,this,this.isDragSource?"dragging":"idle")),oy(ef,19,this),this.type=n,this.sensors=o,this.modifiers=r,this.alignment=l.alignment,this.plugins=i}pluginConfig(e){if(this.plugins)for(let t of this.plugins){let r=oA(t);if(r.plugin===e)return r.options}}get isDropping(){return"dropping"===this.status&&this.isDragSource}get isDragging(){return"dragging"===this.status&&this.isDragSource}get isDragSource(){var e,t;return(null==(t=null==(e=this.manager)?void 0:e.dragOperation.source)?void 0:t.id)===this.id}};ef=ov(eh),em=new WeakMap,eg=new WeakMap,ev=new WeakMap,ow(ef,4,"type",ep,oq,em),ow(ef,4,"modifiers",ed,oq,eg),ow(ef,4,"status",eu,oq,ev),ow(ef,2,"isDropping",ec,oq),ow(ef,2,"isDragging",es,oq),ow(ef,2,"isDragSource",el,oq),ok(ef,oq);var oW=class extends(ej=oR,ew=[nA],ey=[nA],ek=[nA],ex=[nA],e_=[nA],eb=[nM],ej){constructor(e,t){var{accept:r,collisionDetector:n,collisionPriority:o,type:i}=e;super(og(e,["accept","collisionDetector","collisionPriority","type"]),t),oy(ez,5,this),oI(this,eS,oy(ez,8,this)),oy(ez,11,this),oI(this,eI,oy(ez,12,this)),oy(ez,15,this),oI(this,eE,oy(ez,16,this)),oy(ez,19,this),oI(this,eC,oy(ez,20,this)),oy(ez,23,this),oI(this,eP,oy(ez,24,this)),oy(ez,27,this),this.accept=r,this.collisionDetector=n,this.collisionPriority=o,this.type=i}accepts(e){let{accept:t}=this;return!t||("function"==typeof t?t(e):!!e.type&&(Array.isArray(t)?t.includes(e.type):e.type===t))}get isDropTarget(){var e,t;return(null==(t=null==(e=this.manager)?void 0:e.dragOperation.target)?void 0:t.id)===this.id}};ez=ov(ej),eS=new WeakMap,eI=new WeakMap,eE=new WeakMap,eC=new WeakMap,eP=new WeakMap,ow(ez,4,"accept",ew,oW,eS),ow(ez,4,"type",ey,oW,eI),ow(ez,4,"collisionDetector",ek,oW,eE),ow(ez,4,"collisionPriority",ex,oW,eC),ow(ez,4,"shape",e_,oW,eP),ow(ez,2,"isDropTarget",eb,oW),ok(ez,oW);var oH=class{constructor(){this.registry=new Map}addEventListener(e,t){let{registry:r}=this,n=new Set(r.get(e));return n.add(t),r.set(e,n),()=>this.removeEventListener(e,t)}removeEventListener(e,t){let{registry:r}=this,n=new Set(r.get(e));n.delete(t),r.set(e,n)}dispatch(e,...t){let{registry:r}=this,n=r.get(e);if(n)for(let e of n)e(...t)}},oV=class extends oH{constructor(e){super(),this.manager=e}dispatch(e,t){let r=[t,this.manager];super.dispatch(e,...r)}};function oX(e,t=!0){let r=!1;return of(oh({},e),{cancelable:t,get defaultPrevented(){return r},preventDefault(){t&&(r=!0)}})}var oU=class extends oN{constructor(e){super(e);let t=[];this.destroy=nO(()=>{let{dragOperation:r,collisionObserver:n}=e;r.status.initializing&&(t=[],n.enable())},()=>{let r,{collisionObserver:n,monitor:o}=e,{collisions:i}=n;if(n.isDisabled()||oR.pendingIdChanges)return;let a=oX({collisions:i});if(o.dispatch("collision",a),a.defaultPrevented||(r=t,i.map(({id:e})=>e).join("")===r.map(({id:e})=>e).join("")))return;t=i;let[l]=i;rK(()=>{var t;(null==l?void 0:l.id)!==(null==(t=e.dragOperation.target)?void 0:t.id)&&(n.disable(),e.actions.setDropTarget(null==l?void 0:l.id).then(()=>{n.enable()}))})})}},oZ=((u=oZ||{})[u.Lowest=0]="Lowest",u[u.Low=1]="Low",u[u.Normal=2]="Normal",u[u.High=3]="High",u[u.Highest=4]="Highest",u),oG=((d=oG||{})[d.Collision=0]="Collision",d[d.ShapeIntersection=1]="ShapeIntersection",d[d.PointerIntersection=2]="PointerIntersection",d);eL=[nA],eD=[nM],eO=[nM],eN=[nM],eM=[nM],eA=[nM],eT=[nM];var oY=class{constructor(){oy(e$,5,this),oI(this,eB,oy(e$,8,this,"idle")),oy(e$,11,this)}get current(){return this.value}get idle(){return"idle"===this.value}get initializing(){return"initializing"===this.value}get initialized(){let{value:e}=this;return"idle"!==e&&"initialization-pending"!==e}get dragging(){return"dragging"===this.value}get dropped(){return"dropped"===this.value}set(e){this.value=e}};e$=ov(null),eB=new WeakMap,ow(e$,4,"value",eL,oY,eB),ow(e$,2,"current",eD,oY),ow(e$,2,"idle",eO,oY),ow(e$,2,"initializing",eN,oY),ow(e$,2,"initialized",eM,oY),ow(e$,2,"dragging",eA,oY),ow(e$,2,"dropped",eT,oY),ok(e$,oY);var oK=class{constructor(e){this.manager=e}setDragSource(e){let{dragOperation:t}=this.manager;t.sourceIdentifier="string"==typeof e||"number"==typeof e?e:e.id}setDropTarget(e){return rK(()=>{let{dragOperation:t}=this.manager,r=null!=e?e:null;if(t.targetIdentifier===r)return Promise.resolve(!1);t.targetIdentifier=r;let n=oX({operation:t.snapshot()});return t.status.dragging&&this.manager.monitor.dispatch("dragover",n),this.manager.renderer.rendering.then(()=>n.defaultPrevented)})}start(e){return rK(()=>{let{dragOperation:t}=this.manager;if(null!=e.source&&this.setDragSource(e.source),!t.source)throw Error("Cannot start a drag operation without a drag source");if(!t.status.idle)throw Error("Cannot start a drag operation while another is active");let r=new AbortController,{event:n,coordinates:o}=e;rZ(()=>{t.status.set("initialization-pending"),t.shape=null,t.canceled=!1,t.activatorEvent=null!=n?n:null,t.position.reset(o)});let i=oX({operation:t.snapshot()});return(this.manager.monitor.dispatch("beforedragstart",i),i.defaultPrevented)?(t.reset(),r.abort()):(t.status.set("initializing"),t.controller=r,this.manager.renderer.rendering.then(()=>{if(r.signal.aborted)return;let{status:e}=t;"initializing"===e.current&&rZ(()=>{t.status.set("dragging"),this.manager.monitor.dispatch("dragstart",{nativeEvent:n,operation:t.snapshot(),cancelable:!1})})})),r})}move(e){return rK(()=>{var t,r;let{dragOperation:n}=this.manager,{status:o,controller:i}=n;if(!o.dragging||!i||i.signal.aborted)return;let a=oX({nativeEvent:e.event,operation:n.snapshot(),by:e.by,to:e.to},null==(t=e.cancelable)||t);(null==(r=e.propagate)||r)&&this.manager.monitor.dispatch("dragmove",a),queueMicrotask(()=>{var t,r,o,i,l;if(a.defaultPrevented)return;let s=null!=(l=e.to)?l:{x:n.position.current.x+(null!=(r=null==(t=e.by)?void 0:t.x)?r:0),y:n.position.current.y+(null!=(i=null==(o=e.by)?void 0:o.y)?i:0)};n.position.current=s})})}stop(e={}){return rK(()=>{var t,r;let n,{dragOperation:o}=this.manager,{controller:i}=o;if(!i||i.signal.aborted)return;i.abort();let a=()=>{this.manager.renderer.rendering.then(()=>{o.status.set("dropped");let e=rK(()=>{var e;return(null==(e=o.source)?void 0:e.status)==="dropping"}),t=()=>{o.controller===i&&(o.controller=void 0),o.reset()};if(e){let{source:e}=o,r=na(()=>{(null==e?void 0:e.status)==="idle"&&(r(),t())})}else this.manager.renderer.rendering.then(t)})};o.canceled=null!=(t=e.canceled)&&t,this.manager.monitor.dispatch("dragend",{nativeEvent:e.event,operation:o.snapshot(),canceled:null!=(r=e.canceled)&&r,suspend:()=>{let e={resume:()=>{},abort:()=>{}};return n=new Promise((t,r)=>{e.resume=t,e.abort=r}),e}}),n?n.then(a).catch(()=>o.reset()):a()})}},oJ=class extends oM{constructor(e,t){super(e,t),this.manager=e,this.options=t}},oQ=class extends AbortController{constructor(e,t){for(let r of(super(),this.constraints=e,this.onActivate=t,this.activated=!1,null!=e?e:[]))r.controller=this}onEvent(e){var t;if(!this.activated)if(null==(t=this.constraints)?void 0:t.length)for(let t of this.constraints)t.onEvent(e);else this.activate(e)}activate(e){this.activated||(this.activated=!0,this.onActivate(e))}abort(e){this.activated=!1,super.abort(e)}},o0=class{constructor(e){this.options=e,oI(this,eR)}set controller(e){oE(this,eR,e),e.signal.addEventListener("abort",()=>this.abort())}activate(e){var t;null==(t=oS(this,eR))||t.activate(e)}};eR=new WeakMap;var o1=class extends oM{constructor(e,t){super(e,t),this.manager=e,this.options=t}apply(e){return e.transform}},o2=class{constructor(e){this.draggables=new oF,this.droppables=new oF,this.plugins=new oO(e),this.sensors=new oO(e),this.modifiers=new oO(e)}register(e,t){if(e instanceof oq)return this.draggables.register(e.id,e);if(e instanceof oW)return this.droppables.register(e.id,e);if(e.prototype instanceof o1)return this.modifiers.register(e,t);if(e.prototype instanceof oJ)return this.sensors.register(e,t);if(e.prototype instanceof oM)return this.plugins.register(e,t);throw Error("Invalid instance type")}unregister(e){if(e instanceof oR)return e instanceof oq?this.draggables.unregister(e.id,e):e instanceof oW?this.droppables.unregister(e.id,e):()=>{};if(e.prototype instanceof o1)return this.modifiers.unregister(e);if(e.prototype instanceof oJ)return this.sensors.unregister(e);if(e.prototype instanceof oM)return this.plugins.unregister(e);throw Error("Invalid instance type")}destroy(){this.draggables.destroy(),this.droppables.destroy(),this.plugins.destroy(),this.sensors.destroy(),this.modifiers.destroy()}};eG=[nM],eZ=[nA],eU=[nA],eX=[nA],eV=[nA],eH=[nA],eW=[nM],eq=[nM],eF=[nM];var o4=class{constructor(e){oy(eQ,5,this),oI(this,eY),oI(this,eK),oI(this,eJ,new nD(void 0,(e,t)=>e&&t?e.equals(t):e===t)),this.status=new oY,oI(this,e0,oy(eQ,8,this,!1)),oy(eQ,11,this),oI(this,e1,oy(eQ,12,this,null)),oy(eQ,15,this),oI(this,e2,oy(eQ,16,this,null)),oy(eQ,19,this),oI(this,e4,oy(eQ,20,this,null)),oy(eQ,23,this),oI(this,e3,oy(eQ,24,this,[])),oy(eQ,27,this),this.position=new n7({x:0,y:0}),oI(this,e6,{x:0,y:0}),oE(this,eY,e)}get shape(){let{current:e,initial:t,previous:r}=oS(this,eJ);return e&&t?{current:e,initial:t,previous:r}:null}set shape(e){e?oS(this,eJ).current=e:oS(this,eJ).reset()}get source(){var e;let t=this.sourceIdentifier;if(null==t)return null;let r=oS(this,eY).registry.draggables.get(t);return r&&oE(this,eK,r),null!=(e=null!=r?r:oS(this,eK))?e:null}get target(){var e;let t=this.targetIdentifier;return null!=t&&null!=(e=oS(this,eY).registry.droppables.get(t))?e:null}get transform(){let{x:e,y:t}=this.position.delta,r={x:e,y:t};for(let e of this.modifiers)r=e.apply(of(oh({},this.snapshot()),{transform:r}));return oE(this,e6,r),r}snapshot(){return rK(()=>({source:this.source,target:this.target,activatorEvent:this.activatorEvent,transform:oS(this,e6),shape:this.shape?nL(this.shape):null,position:nL(this.position),status:nL(this.status),canceled:this.canceled}))}reset(){rZ(()=>{this.status.set("idle"),this.sourceIdentifier=null,this.targetIdentifier=null,oS(this,eJ).reset(),this.position.reset({x:0,y:0}),oE(this,e6,{x:0,y:0}),this.modifiers=[]})}};eQ=ov(null),eY=new WeakMap,eK=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e4=new WeakMap,e3=new WeakMap,e6=new WeakMap,ow(eQ,2,"shape",eG,o4),ow(eQ,4,"canceled",eZ,o4,e0),ow(eQ,4,"activatorEvent",eU,o4,e1),ow(eQ,4,"sourceIdentifier",eX,o4,e2),ow(eQ,4,"targetIdentifier",eV,o4,e4),ow(eQ,4,"modifiers",eH,o4,e3),ow(eQ,2,"source",eW,o4),ow(eQ,2,"target",eq,o4),ow(eQ,2,"transform",eF,o4),ok(eQ,o4);var o3={get rendering(){return Promise.resolve()}};function o6(e,t){return"function"==typeof e?e(t):null!=e?e:t}var o5=class{constructor(e){var t;this.destroy=()=>{this.dragOperation.status.idle||this.actions.stop({canceled:!0}),this.dragOperation.modifiers.forEach(e=>e.destroy()),this.registry.destroy(),this.collisionObserver.destroy()};let r=null!=e?e:{},n=o6(r.plugins,[]),o=o6(r.sensors,[]),i=o6(r.modifiers,[]),a=null!=(t=r.renderer)?t:o3,l=new oV(this),s=new o2(this);this.registry=s,this.monitor=l,this.renderer=a,this.actions=new oK(this),this.dragOperation=new o4(this),this.collisionObserver=new o$(this),this.plugins=[oU,...n],this.modifiers=i,this.sensors=o;let{destroy:c}=this,u=nO(()=>{var e,t,r;let n=rK(()=>this.dragOperation.modifiers),o=this.modifiers;for(let e of n)o.includes(e)||e.destroy();this.dragOperation.modifiers=null!=(r=null==(t=null==(e=this.dragOperation.source)?void 0:e.modifiers)?void 0:t.map(e=>{let{plugin:t,options:r}=oA(e);return new t(this,r)}))?r:o});this.destroy=()=>{u(),c()}}get plugins(){return this.registry.plugins.values}set plugins(e){this.registry.plugins.values=e}get modifiers(){return this.registry.modifiers.values}set modifiers(e){this.registry.modifiers.values=e}get sensors(){return this.registry.sensors.values}set sensors(e){this.registry.sensors.values=e}},o8=e=>{throw TypeError(e)},o7=(e,t,r)=>t.has(e)||o8("Cannot "+r),o9=(e,t,r)=>(o7(e,t,"read from private field"),t.get(e)),ie=(e,t,r)=>t.has(e)?o8("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),it=(e,t,r,n)=>(o7(e,t,"write to private field"),t.set(e,r),r),ir=(e,t,r)=>(o7(e,t,"access private method"),r);function io(e){return!!e&&(e instanceof KeyframeEffect||"getKeyframes"in e&&"function"==typeof e.getKeyframes)}function ii(e,t){let r=e.getAnimations(),n=null;for(let e of r){if("running"!==e.playState)continue;let{effect:r}=e,o=(io(r)?r.getKeyframes():[]).filter(t);o.length>0&&(n=[o[o.length-1],e])}return n}function ia(e){let{width:t,height:r,top:n,left:o,bottom:i,right:a}=e.getBoundingClientRect();return{width:t,height:r,top:n,left:o,bottom:i,right:a}}function il(e){let t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function is(e){return"nodeType"in e}function ic(e){var t,r,n;return e?il(e)?e:is(e)?"defaultView"in e?null!=(t=e.defaultView)?t:window:null!=(n=null==(r=e.ownerDocument)?void 0:r.defaultView)?n:window:window:window}function iu(e){let{Document:t}=ic(e);return e instanceof t||"nodeType"in e&&e.nodeType===Node.DOCUMENT_NODE}function id(e){return!(!e||il(e))&&(e instanceof ic(e).HTMLElement||"namespaceURI"in e&&"string"==typeof e.namespaceURI&&e.namespaceURI.endsWith("html"))}function ip(e){return e instanceof ic(e).SVGElement||"namespaceURI"in e&&"string"==typeof e.namespaceURI&&e.namespaceURI.endsWith("svg")}function ih(e){return e?il(e)?e.document:is(e)?iu(e)?e:id(e)||ip(e)?e.ownerDocument:document:document:document}function im(e,t=e.getBoundingClientRect(),r=0){var n,o,i,a,l;let s=t,{ownerDocument:c}=e,u=null!=(n=c.defaultView)?n:window,d=e.parentElement;for(;d&&d!==c.documentElement;){if(!function(e){if("DETAILS"===e.tagName&&!1===e.open)return!1;let{overflow:t,overflowX:r,overflowY:n}=getComputedStyle(e);return"visible"===t&&"visible"===r&&"visible"===n}(d)){let e=d.getBoundingClientRect(),t=r*(e.bottom-e.top),n=r*(e.right-e.left),o=r*(e.bottom-e.top),i=r*(e.right-e.left);(s={top:Math.max(s.top,e.top-t),right:Math.min(s.right,e.right+n),bottom:Math.min(s.bottom,e.bottom+o),left:Math.max(s.left,e.left-i),width:0,height:0}).width=s.right-s.left,s.height=s.bottom-s.top}d=d.parentElement}let p=u.visualViewport,h=null!=(o=null==p?void 0:p.offsetTop)?o:0,f=null!=(i=null==p?void 0:p.offsetLeft)?i:0,m=null!=(a=null==p?void 0:p.width)?a:u.innerWidth,g=null!=(l=null==p?void 0:p.height)?l:u.innerHeight,v=r*g,b=r*m;return(s={top:Math.max(s.top,h-v),right:Math.min(s.right,f+m+b),bottom:Math.min(s.bottom,h+g+v),left:Math.max(s.left,f-b),width:0,height:0}).width=s.right-s.left,s.height=s.bottom-s.top,s.width<0&&(s.width=0),s.height<0&&(s.height=0),s}function ig(e){return{x:e.clientX,y:e.clientY}}var iv="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function ib(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function i_(){var e,t;let r=ib()?window.visualViewport:null;return{x:null!=(e=null==r?void 0:r.offsetLeft)?e:0,y:null!=(t=null==r?void 0:r.offsetTop)?t:0}}function ix(e){return!!e&&!!is(e)&&e instanceof ic(e).ShadowRoot}function ik(e){if(e&&is(e)){let t=e.getRootNode();if(ix(t)||t instanceof Document)return t}return ih(e)}function iy(e){return e.matchMedia("(prefers-reduced-motion: reduce)").matches}function iw(e){return"value"in e}function ij(e){return"CANVAS"===e.tagName}var iz=new WeakMap,iS=class{constructor(){this.entries=new Set,this.clear=()=>{for(let e of this.entries){let[t,{type:r,listener:n,options:o}]=e;t.removeEventListener(r,n,o)}this.entries.clear()}}bind(e,t){let r=Array.isArray(e)?e:[e],n=Array.isArray(t)?t:[t],o=[];for(let e of r)for(let t of n){let{type:r,listener:n,options:i}=t,a=[e,t];e.addEventListener(r,n,i),this.entries.add(a),o.push(a)}let i=this.entries;return function(){for(let e of o){let[t,{type:r,listener:n,options:o}]=e;t.removeEventListener(r,n,o),i.delete(e)}}}};function iI(e){let t=null==e?void 0:e.ownerDocument.defaultView;if(t&&t.self!==t.parent)return t.frameElement}function iE(e,t){let r,n;return function(...o){let i=this;if(n){let a;null==r||r(),a=setTimeout(()=>{e.apply(i,o),n=performance.now()},t-(performance.now()-n)),r=()=>clearTimeout(a)}else e.apply(i,o),n=performance.now()}}var iC=iv?ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},iP=class extends iC{constructor(e){super(t=>{o9(this,e5)?e(t,this):it(this,e5,!0)}),ie(this,e5,!1)}};e5=new WeakMap;var iT=Array.from({length:100},(e,t)=>t/100),iA=class{constructor(e,t,r={debug:!1,skipInitial:!1}){this.element=e,this.callback=t,ie(this,ti),this.disconnect=()=>{var e,t,r;it(this,tn,!0),null==(e=o9(this,e9))||e.disconnect(),null==(t=o9(this,te))||t.disconnect(),o9(this,tt).disconnect(),null==(r=o9(this,tr))||r.remove()},ie(this,e8,!0),ie(this,e7),ie(this,e9),ie(this,te),ie(this,tt),ie(this,tr),ie(this,tn,!1),ie(this,to,iE(()=>{var e,t,r;let{element:n}=this;if(null==(e=o9(this,te))||e.disconnect(),o9(this,tn)||!o9(this,e8)||!n.isConnected)return;let o=null!=(t=n.ownerDocument)?t:document,{innerHeight:i,innerWidth:a}=null!=(r=o.defaultView)?r:window,l=n.getBoundingClientRect(),{top:s,left:c,bottom:u,right:d}=im(n,l),p=-Math.floor(s),h=-Math.floor(c),f=-Math.floor(a-d),m=-Math.floor(i-u),g=`${p}px ${f}px ${m}px ${h}px`;this.boundingClientRect=l,it(this,te,new IntersectionObserver(e=>{let[t]=e,{intersectionRect:r}=t;1!==(1!==t.intersectionRatio?t.intersectionRatio:n8.intersectionRatio(r,im(n)))&&o9(this,to).call(this)},{threshold:iT,rootMargin:g,root:o})),o9(this,te).observe(n),ir(this,ti,ta).call(this)},75)),this.boundingClientRect=e.getBoundingClientRect(),it(this,e8,function(e,t=e.getBoundingClientRect()){let{width:r,height:n}=im(e,t);return r>0&&n>0}(e,this.boundingClientRect));let n=!0;this.callback=e=>{n&&(n=!1,r.skipInitial)||t(e)};let o=e.ownerDocument;(null==r?void 0:r.debug)&&(it(this,tr,document.createElement("div")),o9(this,tr).style.background="rgba(0,0,0,0.15)",o9(this,tr).style.position="fixed",o9(this,tr).style.pointerEvents="none",o.body.appendChild(o9(this,tr))),it(this,tt,new IntersectionObserver(t=>{var r,n;let{boundingClientRect:o,isIntersecting:i}=t[t.length-1],{width:a,height:l}=o,s=o9(this,e8);it(this,e8,i),(a||l)&&(s&&!i?(null==(r=o9(this,te))||r.disconnect(),this.callback(null),null==(n=o9(this,e9))||n.disconnect(),it(this,e9,void 0),o9(this,tr)&&(o9(this,tr).style.visibility="hidden")):o9(this,to).call(this),i&&!o9(this,e9)&&(it(this,e9,new iP(o9(this,to))),o9(this,e9).observe(e)))},{threshold:iT,root:o})),o9(this,e8)&&!r.skipInitial&&this.callback(this.boundingClientRect),o9(this,tt).observe(e)}};e8=new WeakMap,e7=new WeakMap,e9=new WeakMap,te=new WeakMap,tt=new WeakMap,tr=new WeakMap,tn=new WeakMap,to=new WeakMap,ti=new WeakSet,ta=function(){var e,t;!o9(this,tn)&&(ir(this,ti,tl).call(this),(e=this.boundingClientRect)===(t=o9(this,e7))||e&&t&&e.top==t.top&&e.left==t.left&&e.right==t.right&&e.bottom==t.bottom||(this.callback(this.boundingClientRect),it(this,e7,this.boundingClientRect)))},tl=function(){if(o9(this,tr)){let{top:e,left:t,width:r,height:n}=im(this.element);o9(this,tr).style.overflow="hidden",o9(this,tr).style.visibility="visible",o9(this,tr).style.top=`${Math.floor(e)}px`,o9(this,tr).style.left=`${Math.floor(t)}px`,o9(this,tr).style.width=`${Math.floor(r)}px`,o9(this,tr).style.height=`${Math.floor(n)}px`}};var iM=new WeakMap,iN=new WeakMap,iO=class{constructor(e,t,r){this.callback=t,ie(this,ts),ie(this,tc,!1),ie(this,tu),ie(this,td,iE(e=>{if(!o9(this,tc)&&e.target&&"contains"in e.target&&"function"==typeof e.target.contains){for(let t of o9(this,tu))if(e.target.contains(t)){this.callback(o9(this,ts).boundingClientRect);break}}},75));let n=function(e){let t=new Set,r=iI(e);for(;r;)t.add(r),r=iI(r);return t}(e),o=function(e,t){let r=new Set;for(let n of e){let e=function(e,t){let r=iM.get(e);return r||(r={disconnect:new iA(e,t=>{let r=iM.get(e);r&&r.callbacks.forEach(e=>e(t))},{skipInitial:!0}).disconnect,callbacks:new Set}),r.callbacks.add(t),iM.set(e,r),()=>{r.callbacks.delete(t),0===r.callbacks.size&&(iM.delete(e),r.disconnect())}}(n,t);r.add(e)}return()=>r.forEach(e=>e())}(n,t),i=function(e,t){var r;let n=e.ownerDocument;if(!iN.has(n)){let e=new AbortController,t=new Set;document.addEventListener("scroll",e=>t.forEach(t=>t(e)),{capture:!0,passive:!0,signal:e.signal}),iN.set(n,{disconnect:()=>e.abort(),listeners:t})}let{listeners:o,disconnect:i}=null!=(r=iN.get(n))?r:{};return o&&i?(o.add(t),()=>{o.delete(t),0===o.size&&(i(),iN.delete(n))}):()=>{}}(e,o9(this,td));it(this,tu,n),it(this,ts,new iA(e,t,r)),this.disconnect=()=>{o9(this,tc)||(it(this,tc,!0),o(),i(),o9(this,ts).disconnect())}}};function iD(e){return"showPopover"in e&&"hidePopover"in e&&"function"==typeof e.showPopover&&"function"==typeof e.hidePopover}function iL(e){try{iD(e)&&e.isConnected&&e.hasAttribute("popover")&&!e.matches(":popover-open")&&e.showPopover()}catch(e){}}function i$(e){return!!iv&&!!e&&e===ih(e).scrollingElement}function iB(e){var t,r;let n=ic(e),o=i$(e)?function(e){var t,r,n,o;let{documentElement:i}=ih(e),a=ic(e).visualViewport,l=null!=(t=null==a?void 0:a.width)?t:i.clientWidth,s=null!=(r=null==a?void 0:a.height)?r:i.clientHeight,c=null!=(n=null==a?void 0:a.offsetTop)?n:0,u=null!=(o=null==a?void 0:a.offsetLeft)?o:0;return{top:c,left:u,right:u+l,bottom:c+s,width:l,height:s}}(e):ia(e),i=n.visualViewport,a=i$(e)?{height:null!=(t=null==i?void 0:i.height)?t:n.innerHeight,width:null!=(r=null==i?void 0:i.width)?r:n.innerWidth}:{height:e.clientHeight,width:e.clientWidth},l={current:{x:e.scrollLeft,y:e.scrollTop},max:{x:e.scrollWidth-a.width,y:e.scrollHeight-a.height}},s=l.current.y<=0,c=l.current.x<=0,u=l.current.y>=l.max.y,d=l.current.x>=l.max.x;return{rect:o,position:l,isTop:s,isLeft:c,isBottom:u,isRight:d}}ts=new WeakMap,tc=new WeakMap,tu=new WeakMap,td=new WeakMap;var iR=class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;for(let t of(this.pending=!1,this.tasks=new Set,this.resolvers=new Set,e))t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}},iF=new iR(e=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(e):e()}),iq=new iR(e=>setTimeout(e,50)),iW=new Map,iH=iW.clear.bind(iW);function iV(e,t=!1){if(!t)return iX(e);let r=iW.get(e);return r||(r=iX(e),iW.set(e,r),iq.schedule(iH)),r}function iX(e){return ic(e).getComputedStyle(e)}var iU={excludeElement:!0,escapeShadowDOM:!0};function iZ(e,t=iU){let{limit:r,excludeElement:n,escapeShadowDOM:o}=t,i=new Set;return e?function t(a){if(null!=r&&i.size>=r||!a)return i;if(iu(a)&&null!=a.scrollingElement&&!i.has(a.scrollingElement))return i.add(a.scrollingElement),i;if(o&&ix(a))return t(a.host);if(!id(a))return ip(a)?t(a.parentElement):i;if(i.has(a))return i;let l=iV(a,!0);if(n&&a===e||function(e,t=iV(e,!0)){let r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(e=>{let n=t[e];return"string"==typeof n&&r.test(n)})}(a,l)&&i.add(a),function(e,t=iV(e,!0)){return"fixed"===t.position||"sticky"===t.position}(a,l)){let{scrollingElement:e}=a.ownerDocument;return e&&i.add(e),i}return t(a.parentNode)}(e):i}function iG(e,t=window.frameElement){let r={x:0,y:0,scaleX:1,scaleY:1};if(!e)return r;let n=iI(e);for(;n&&n!==t;){let e=ia(n),{x:t,y:o}=function(e,t=ia(e)){let r=Math.round(t.width),n=Math.round(t.height);if(id(e))return{x:r/e.offsetWidth,y:n/e.offsetHeight};let o=iV(e,!0);return{x:(parseFloat(o.width)||r)/r,y:(parseFloat(o.height)||n)/n}}(n,e);r.x=r.x+e.left,r.y=r.y+e.top,r.scaleX=r.scaleX*t,r.scaleY=r.scaleY*o,n=iI(n)}return r}function iY(e){if("none"===e)return null;let[t,r,n="0"]=e.split(" "),o={x:parseFloat(t),y:parseFloat(r),z:parseInt(n,10)};return isNaN(o.x)&&isNaN(o.y)?null:{x:isNaN(o.x)?0:o.x,y:isNaN(o.y)?0:o.y,z:isNaN(o.z)?0:o.z}}function iK(e){var t,r,n,o,i,a,l,s,c;let{scale:u,transform:d,translate:p}=e,h=function(e){if("none"===e)return null;let t=e.split(" "),r=parseFloat(t[0]),n=parseFloat(t[1]);return isNaN(r)&&isNaN(n)?null:{x:isNaN(r)?n:r,y:isNaN(n)?r:n}}(u),f=iY(p),m=function(e){if(e.startsWith("matrix3d(")){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(d);if(!m&&!h&&!f)return null;let g={x:null!=(t=null==h?void 0:h.x)?t:1,y:null!=(r=null==h?void 0:h.y)?r:1},v={x:null!=(n=null==f?void 0:f.x)?n:0,y:null!=(o=null==f?void 0:f.y)?o:0},b={x:null!=(i=null==m?void 0:m.x)?i:0,y:null!=(a=null==m?void 0:m.y)?a:0,scaleX:null!=(l=null==m?void 0:m.scaleX)?l:1,scaleY:null!=(s=null==m?void 0:m.scaleY)?s:1};return{x:v.x+b.x,y:v.y+b.y,z:null!=(c=null==f?void 0:f.z)?c:0,scaleX:g.x*b.scaleX,scaleY:g.y*b.scaleY}}var iJ=((p=iJ||{})[p.Idle=0]="Idle",p[p.Forward=1]="Forward",p[p.Reverse=-1]="Reverse",p),iQ={x:.2,y:.2},i0={x:10,y:10};function i1(e,{block:t="nearest",inline:r="nearest"}={}){if(!id(e))return;let n=iZ(e),o=[];for(let i of n){if(!id(i))continue;let{top:n,left:a}=function(e,t){let r=i2(e),n=i2(t);return{top:r.top-n.top-t.clientTop,left:r.left-n.left-t.clientLeft}}(e,i),l=n,s=a;for(let e of o)l-=e.scrollTop,s-=e.scrollLeft;if("none"!==t){let r=l<i.scrollTop;r!==l+e.offsetHeight>i.scrollTop+i.clientHeight&&("center"===t?i.scrollTop=l-i.clientHeight/2+e.offsetHeight/2:r?i.scrollTop=l:i.scrollTop=l+e.offsetHeight-i.clientHeight)}if("none"!==r){let t=s<i.scrollLeft;t!==s+e.offsetWidth>i.scrollLeft+i.clientWidth&&("center"===r?i.scrollLeft=s-i.clientWidth/2+e.offsetWidth/2:t?i.scrollLeft=s:i.scrollLeft=s+e.offsetWidth-i.clientWidth)}o.push(i)}}function i2(e){let t=0,r=0,n=e;for(;n;){t+=n.offsetTop,r+=n.offsetLeft;let e=n.offsetParent;if(!id(e))break;t+=e.clientTop,r+=e.clientLeft,n=e}return{top:t,left:r}}function i4({element:e,keyframes:t,options:r}){return e.animate(t,r).finished}function i3(e,t=iV(e).translate,r=!0){if(r){let t=ii(e,e=>"translate"in e);if(t){let{translate:e=""}=t[0];if("string"==typeof e){let t=iY(e);if(t)return t}}}if(t){let e=iY(t);if(e)return e}return{x:0,y:0,z:0}}var i6=new iR(e=>setTimeout(e,0)),i5=new Map,i8=i5.clear.bind(i5),i7=class extends n8{constructor(e,t={}){var r,n,o,i;let a,{frameTransform:l=iG(e),ignoreTransforms:s,getBoundingClientRect:c=ia}=t,u=function(e,t){let r=(function(e){let t=e.ownerDocument,r=i5.get(t);if(r)return r;r=t.getAnimations(),i5.set(t,r),i6.schedule(i8);let n=r.filter(t=>io(t.effect)&&t.effect.target===e);return i5.set(e,n),r})(e).filter(e=>{var r,n;if(io(e.effect)){let{target:o}=e.effect;if(null==(n=o&&(null==(r=t.isValidTarget)?void 0:r.call(t,o)))||n)return e.effect.getKeyframes().some(e=>{for(let r of t.properties)if(e[r])return!0})}}).map(e=>{let{effect:t,currentTime:r}=e,n=null==t?void 0:t.getComputedTiming().duration;if(!e.pending&&"finished"!==e.playState&&"number"==typeof n&&"number"==typeof r&&r<n)return e.currentTime=n,()=>{e.currentTime=r}});if(r.length>0)return()=>r.forEach(e=>null==e?void 0:e())}(e,{properties:["transform","translate","scale","width","height"],isValidTarget:t=>(t!==e||ib())&&t.contains(e)}),d=c(e),{top:p,left:h,width:f,height:m}=d,g=iV(e),v=iK(g),b={x:null!=(r=null==v?void 0:v.scaleX)?r:1,y:null!=(n=null==v?void 0:v.scaleY)?n:1},_=function(e,t){let r,n,o,i=e.getAnimations();if(!i.length)return null;let a=!1;for(let e of i){if("running"!==e.playState)continue;let t=io(e.effect)?e.effect.getKeyframes():[],i=t[t.length-1];if(!i)continue;let{transform:l,translate:s,scale:c}=i;"string"==typeof l&&l&&(r=l,a=!0),"string"==typeof s&&s&&(n=s,a=!0),"string"==typeof c&&c&&(o=c,a=!0)}return a?iK({transform:null!=r?r:t.transform,translate:null!=n?n:t.translate,scale:null!=o?o:t.scale}):null}(e,g);null==u||u(),v&&(a=function(e,t,r){let{scaleX:n,scaleY:o,x:i,y:a}=t,l=e.left-i-(1-n)*parseFloat(r),s=e.top-a-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),c=n?e.width/n:e.width,u=o?e.height/o:e.height;return{width:c,height:u,top:s,right:l+c,bottom:s+u,left:l}}(d,v,g.transformOrigin),(s||_)&&(p=a.top,h=a.left,f=a.width,m=a.height));let x={width:null!=(o=null==a?void 0:a.width)?o:f,height:null!=(i=null==a?void 0:a.height)?i:m};if(_&&!s&&a){let e=function(e,t,r){let{scaleX:n,scaleY:o,x:i,y:a}=t,l=e.left+i+(1-n)*parseFloat(r),s=e.top+a+(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),c=n?e.width*n:e.width,u=o?e.height*o:e.height;return{width:c,height:u,top:s,right:l+c,bottom:s+u,left:l}}(a,_,g.transformOrigin);p=e.top,h=e.left,f=e.width,m=e.height,b.x=_.scaleX,b.y=_.scaleY}l&&(s||(h*=l.scaleX,f*=l.scaleX,p*=l.scaleY,m*=l.scaleY),h+=l.x,p+=l.y),super(h,p,f,m),this.scale=b,this.intrinsicWidth=x.width,this.intrinsicHeight=x.height}};function i9(e){return"style"in e&&"object"==typeof e.style&&null!==e.style&&"setProperty"in e.style&&"removeProperty"in e.style&&"function"==typeof e.style.setProperty&&"function"==typeof e.style.removeProperty}var ae=class{constructor(e){this.element=e,this.initial=new Map}set(e,t=""){let{element:r}=this;if(i9(r))for(let[n,o]of Object.entries(e)){let e=`${t}${n}`;this.initial.has(e)||this.initial.set(e,r.style.getPropertyValue(e)),r.style.setProperty(e,"string"==typeof o?o:`${o}px`)}}remove(e,t=""){let{element:r}=this;if(i9(r))for(let n of e){let e=`${t}${n}`;r.style.removeProperty(e)}}reset(){let{element:e}=this;if(i9(e)){for(let[t,r]of this.initial)e.style.setProperty(t,r);""===e.getAttribute("style")&&e.removeAttribute("style")}}};function at(e){return!!e&&(e instanceof ic(e).Element||is(e)&&e.nodeType===Node.ELEMENT_NODE)}function ar(e){if(!e)return!1;let{KeyboardEvent:t}=ic(e.target);return e instanceof t}var an={};function ao(e){let t=null==an[e]?0:an[e]+1;return an[e]=t,`${e}-${t}`}var ai=e=>{var t;return null!=(t=(({dragOperation:e,droppable:t})=>{let r=e.position.current;if(!r)return null;let{id:n}=t;return t.shape&&t.shape.containsPoint(r)?{id:n,value:1/n5.distance(t.shape.center,r),type:oG.PointerIntersection,priority:oZ.High}:null})(e))?t:(({dragOperation:e,droppable:t})=>{let{shape:r}=e;if(!t.shape||!(null==r?void 0:r.current))return null;let n=r.current.intersectionArea(t.shape);if(n){let{position:o}=e,i=n5.distance(t.shape.center,o.current),a=n/(r.current.area+t.shape.area-n);return{id:t.id,value:a/i,type:oG.ShapeIntersection,priority:oZ.Normal}}return null})(e)},aa=e=>{let{dragOperation:t,droppable:r}=e,{shape:n,position:o}=t;if(!r.shape)return null;let i=n?n8.from(n.current.boundingRectangle).corners:void 0,a=n8.from(r.shape.boundingRectangle).corners.reduce((e,t,r)=>{var n;return e+n5.distance(n5.from(t),null!=(n=null==i?void 0:i[r])?n:o.current)},0);return{id:r.id,value:1/(a/4),type:oG.Collision,priority:oZ.Normal}},al=Object.create,as=Object.defineProperty,ac=Object.defineProperties,au=Object.getOwnPropertyDescriptor,ad=Object.getOwnPropertyDescriptors,ap=Object.getOwnPropertySymbols,ah=Object.prototype.hasOwnProperty,af=Object.prototype.propertyIsEnumerable,am=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ag=e=>{throw TypeError(e)},av=(e,t,r)=>t in e?as(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ab=(e,t)=>{for(var r in t||(t={}))ah.call(t,r)&&av(e,r,t[r]);if(ap)for(var r of ap(t))af.call(t,r)&&av(e,r,t[r]);return e},a_=(e,t)=>as(e,"name",{value:t,configurable:!0}),ax=(e,t)=>{var r={};for(var n in e)ah.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&ap)for(var n of ap(e))0>t.indexOf(n)&&af.call(e,n)&&(r[n]=e[n]);return r},ak=e=>{var t;return[,,,al(null!=(t=null==e?void 0:e[am("metadata")])?t:null)]},ay=["class","method","getter","setter","accessor","field","value","get","set"],aw=e=>void 0!==e&&"function"!=typeof e?ag("Function expected"):e,aj=(e,t,r,n,o)=>({kind:ay[e],name:t,metadata:n,addInitializer:e=>r._?ag("Already initialized"):o.push(aw(e||null))}),az=(e,t)=>av(t,am("metadata"),e[3]),aS=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)1&t?i[o].call(r):n=i[o].call(r,n);return n},aI=(e,t,r,n,o,i)=>{var a,l,s,c,u,d=7&t,p=!!(8&t),h=!!(16&t),f=d>3?e.length+1:d?p?1:2:0,m=ay[d+5],g=d>3&&(e[f-1]=[]),v=e[f]||(e[f]=[]),b=d&&(h||p||(o=o.prototype),d<5&&(d>3||!h)&&au(d<4?o:{get[r](){return aP(this,i)},set[r](e){return aA(this,i,e)}},r));d?h&&d<4&&a_(i,(d>2?"set ":d>1?"get ":"")+r):a_(o,r);for(var _=n.length-1;_>=0;_--)c=aj(d,r,s={},e[3],v),d&&(c.static=p,c.private=h,u=c.access={has:h?e=>aC(o,e):e=>r in e},3^d&&(u.get=h?e=>(1^d?aP:aM)(e,o,4^d?i:b.get):e=>e[r]),d>2&&(u.set=h?(e,t)=>aA(e,o,t,4^d?i:b.set):(e,t)=>e[r]=t)),l=(0,n[_])(d?d<4?h?i:b[m]:d>4?void 0:{get:b.get,set:b.set}:o,c),s._=1,4^d||void 0===l?aw(l)&&(d>4?g.unshift(l):d?h?i=l:b[m]=l:o=l):"object"!=typeof l||null===l?ag("Object expected"):(aw(a=l.get)&&(b.get=a),aw(a=l.set)&&(b.set=a),aw(a=l.init)&&g.unshift(a));return d||az(e,o),b&&as(o,r,b),h?4^d?i:b:o},aE=(e,t,r)=>t.has(e)||ag("Cannot "+r),aC=(e,t)=>Object(t)!==t?ag('Cannot use the "in" operator on this value'):e.has(t),aP=(e,t,r)=>(aE(e,t,"read from private field"),r?r.call(e):t.get(e)),aT=(e,t,r)=>t.has(e)?ag("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),aA=(e,t,r,n)=>(aE(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),aM=(e,t,r)=>(aE(e,t,"access private method"),r),aN={draggable:"To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel."},aO={dragstart({operation:{source:e}}){if(e)return`Picked up draggable item ${e.id}.`},dragover({operation:{source:e,target:t}}){if(e&&e.id!==(null==t?void 0:t.id))return t?`Draggable item ${e.id} was moved over droppable target ${t.id}.`:`Draggable item ${e.id} is no longer over a droppable target.`},dragend({operation:{source:e,target:t},canceled:r}){if(e)return r?`Dragging was cancelled. Draggable item ${e.id} was dropped.`:t?`Draggable item ${e.id} was dropped over droppable target ${t.id}`:`Draggable item ${e.id} was dropped.`}},aD=["dragover","dragmove"],aL=class extends oM{constructor(e,t){var r,n;let o,i,a,l,s,c;super(e);let{id:u,idPrefix:{description:d="dnd-kit-description",announcement:p="dnd-kit-announcement"}={},announcements:h=aO,screenReaderInstructions:f=aN,debounce:m=500}=null!=t?t:{},g=u?`${d}-${u}`:ao(d),v=u?`${p}-${u}`:ao(p),b=(e=l)=>{a&&e&&(null==a?void 0:a.nodeValue)!==e&&(a.nodeValue=e)},_=()=>iF.schedule(b),x=(r=_,n=m,(c=()=>{clearTimeout(s),s=setTimeout(r,n)}).cancel=()=>clearTimeout(s),c),k=Object.entries(h).map(([e,t])=>this.manager.monitor.addEventListener(e,(r,n)=>{let o=a;if(!o)return;let i=null==t?void 0:t(r,n);i&&o.nodeValue!==i&&(l=i,aD.includes(e)?x():(_(),x.cancel()))})),y=()=>{var e;let t=[];if(!(null==o?void 0:o.isConnected)){let r;e=f.draggable,(r=document.createElement("div")).id=g,r.style.setProperty("display","none"),r.textContent=e,o=r,t.push(o)}if(!(null==i?void 0:i.isConnected)){let e;(e=document.createElement("div")).id=v,e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.style.setProperty("position","fixed"),e.style.setProperty("width","1px"),e.style.setProperty("height","1px"),e.style.setProperty("margin","-1px"),e.style.setProperty("border","0"),e.style.setProperty("padding","0"),e.style.setProperty("overflow","hidden"),e.style.setProperty("clip","rect(0 0 0 0)"),e.style.setProperty("clip-path","inset(100%)"),e.style.setProperty("white-space","nowrap"),i=e,a=document.createTextNode(""),i.appendChild(a),t.push(i)}t.length>0&&document.body.append(...t)},w=new Set;function j(){for(let e of w)e()}this.registerEffect(()=>{var e;for(let t of(w.clear(),this.manager.registry.draggables.value)){let r=null!=(e=t.handle)?e:t.element;if(r){for(let e of(o&&i||w.add(y),(!["input","select","textarea","a","button"].includes(r.tagName.toLowerCase())||ib())&&!r.hasAttribute("tabindex")&&w.add(()=>r.setAttribute("tabindex","0")),r.hasAttribute("role")||"button"===r.tagName.toLowerCase()||w.add(()=>r.setAttribute("role","button")),r.hasAttribute("aria-roledescription")||w.add(()=>r.setAttribute("aria-roledescription","draggable")),r.hasAttribute("aria-describedby")||w.add(()=>r.setAttribute("aria-describedby",g)),["aria-pressed","aria-grabbed"])){let n=String(t.isDragging);r.getAttribute(e)!==n&&w.add(()=>r.setAttribute(e,n))}let e=String(t.disabled);r.getAttribute("aria-disabled")!==e&&w.add(()=>r.setAttribute("aria-disabled",e))}}w.size>0&&iF.schedule(j)}),this.destroy=()=>{super.destroy(),null==o||o.remove(),null==i||i.remove(),k.forEach(e=>e())}}},a$=new Map,aB=class extends(tg=oN,tm=[nA],tf=[nM],th=[nM],tp=[nM],tg){constructor(e,t){super(e,t),aS(tb,5,this),aT(this,tx),aT(this,tv,new Set),aT(this,t_,aS(tb,8,this,new Set)),aS(tb,11,this),this.registerEffect(aM(this,tx,tk))}register(e){return aP(this,tv).add(e),()=>{aP(this,tv).delete(e)}}addRoot(e){return rK(()=>{let t=new Set(this.additionalRoots);t.add(e),this.additionalRoots=t}),()=>{rK(()=>{let t=new Set(this.additionalRoots);t.delete(e),this.additionalRoots=t})}}get sourceRoot(){var e;let{source:t}=this.manager.dragOperation;return ik(null!=(e=null==t?void 0:t.element)?e:null)}get targetRoot(){var e;let{target:t}=this.manager.dragOperation;return ik(null!=(e=null==t?void 0:t.element)?e:null)}get roots(){let{status:e}=this.manager.dragOperation;return e.initializing||e.initialized?new Set([...[this.sourceRoot,this.targetRoot].filter(e=>null!=e),...this.additionalRoots]):new Set}};tb=ak(tg),tv=new WeakMap,t_=new WeakMap,tx=new WeakSet,tk=function(){let{roots:e}=this,t=[];for(let r of e)for(let e of aP(this,tv))t.push(aM(this,tx,ty).call(this,r,e));return()=>{for(let e of t)e()}},ty=function(e,t){let r=a$.get(e);r||(r=new Map,a$.set(e,r));let n=r.get(t);if(!n){let o=iu(e)?aM(this,tx,tw).call(this,e,r,t):aM(this,tx,tj).call(this,e,r,t);if(!o)return()=>{};n=o,r.set(t,n)}n.refCount++;let o=!1;return()=>{o||(o=!0,n.refCount--,0===n.refCount&&n.cleanup())}},tw=function(e,t,r){var n;let o=e.createElement("style"),{nonce:i}=null!=(n=this.options)?n:{};i&&o.setAttribute("nonce",i),o.textContent=r,e.head.prepend(o);let a=new MutationObserver(t=>{for(let r of t)for(let t of Array.from(r.removedNodes))if(t===o)return void e.head.prepend(o)});return a.observe(e.head,{childList:!0}),{refCount:0,cleanup:()=>{a.disconnect(),o.remove(),t.delete(r),0===t.size&&a$.delete(e)}}},tj=function(e,t,r){"adoptedStyleSheets"in e&&Array.isArray(e.adoptedStyleSheets);let n=e.ownerDocument.defaultView,{CSSStyleSheet:o}=null!=n?n:{};if(!o)return null;let i=new o;return i.replaceSync(r),e.adoptedStyleSheets.push(i),{refCount:0,cleanup:()=>{var n;if(ix(e)&&(null==(n=e.host)?void 0:n.isConnected)){let t=e.adoptedStyleSheets.indexOf(i);-1!==t&&e.adoptedStyleSheets.splice(t,1)}t.delete(r),0===t.size&&a$.delete(e)}}},aI(tb,4,"additionalRoots",tm,aB,t_),aI(tb,2,"sourceRoot",tf,aB),aI(tb,2,"targetRoot",th,aB),aI(tb,2,"roots",tp,aB),az(tb,aB),aB.configure=oT(aB);var aR=class extends oM{constructor(e,t){super(e,t),this.manager=e;let{cursor:r="grabbing"}=null!=t?t:{},n=e.registry.plugins.get(aB),o=null==n?void 0:n.register(`* { cursor: ${r} !important; }`);if(o){let e=this.destroy.bind(this);this.destroy=()=>{o(),e()}}}},aF="data-dnd-",aq=`${aF}dropping`,aW="--dnd-",aH=`${aF}dragging`,aV=`${aF}placeholder`,aX=[aH,aV,"popover","aria-pressed","aria-grabbing"],aU=["view-transition-name"],aZ=`
  :is(:root,:host) [${aH}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${aW}top, 0px) !important;
    left: var(${aW}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${aW}width, auto);
    max-width: var(${aW}width, auto);
    height: var(${aW}height, auto);
    max-height: var(${aW}height, auto);
    transform: var(${aW}transform, none) !important;
    transition: var(${aW}transition) !important;
  }

  :is(:root,:host) [${aV}] {
    transition: none;
  }

  :is(:root,:host) [${aV}='hidden'] {
    visibility: hidden;
  }

  [${aH}] * {
    pointer-events: none !important;
  }

  [${aH}]:not([${aq}]) {
    translate: var(${aW}translate) !important;
  }

  [${aH}][style*='${aW}scale'] {
    scale: var(${aW}scale) !important;
    transform-origin: var(${aW}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${aH}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${aH}]::backdrop, [${aF}overlay]:not([${aH}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g," ").replace(/\s+/g," ").trim();function aG(e,t){return e===t||iI(e)===iI(t)}function aY(e){let{target:t}=e;"newState"in e&&"closed"===e.newState&&at(t)&&t.hasAttribute("popover")&&requestAnimationFrame(()=>iL(t))}function aK(e){return"TR"===e.tagName}var aJ=class extends(tS=oM,tz=[nA],tS){constructor(e,t){super(e,t),aT(this,tC),aT(this,tE,aS(tI,8,this)),aS(tI,11,this),this.state={initial:{},current:{}};let r=e.registry.plugins.get(aB),n=null==r?void 0:r.register(aZ);if(n){let e=this.destroy.bind(this);this.destroy=()=>{n(),e()}}this.registerEffect(aM(this,tC,tP).bind(this,r)),this.registerEffect(aM(this,tC,tT))}};tI=ak(tS),tE=new WeakMap,tC=new WeakSet,tP=function(e){let{overlay:t}=this;if(!t||!e)return;let r=ik(t);if(r)return e.addRoot(r)},tT=function(){var e,t,r,n,o,i,a,l;let s,c,u,{state:d,manager:p,options:h}=this,{dragOperation:f}=p,{position:m,source:g,status:v}=f;if(v.idle){d.current={},d.initial={};return}if(!g)return;let{element:b}=g,_=g.pluginConfig(aJ),x=null!=(t=null!=(e=null==_?void 0:_.feedback)?e:null==h?void 0:h.feedback)?t:"default",k="function"==typeof x?x(g,p):x;if(!b||"none"===k||!v.initialized||v.initializing)return;let{initial:y}=d,w=null!=(r=this.overlay)?r:b,j=iG(w),z=iG(b),S=!aG(b,w),I=new i7(b,{frameTransform:S?z:null,ignoreTransforms:!S}),E={x:z.scaleX/j.scaleX,y:z.scaleY/j.scaleY},{width:C,height:P,top:T,left:A}=I;S&&(C/=E.x,P/=E.y);let M=new ae(w),N=iV(b),{transition:O,translate:D,boxSizing:L,paddingBlockStart:$,paddingBlockEnd:B,paddingInlineStart:R,paddingInlineEnd:F,borderInlineStartWidth:q,borderInlineEndWidth:W,borderBlockStartWidth:H,borderBlockEndWidth:V}=N,X=O.split(",").filter(e=>!/^\s*(transform|translate|scale)\b/.test(e)).join(","),U=iK(N),Z=N.transform,G="clone"===k,Y="content-box"===L,K=Y?parseInt(R)+parseInt(F)+parseInt(q)+parseInt(W):0,J=Y?parseInt($)+parseInt(B)+parseInt(H)+parseInt(V):0,Q="move"===k||this.overlay?null:function(e,t="hidden"){return rK(()=>{let r,n,o,{element:i,manager:a}=e;if(!i||!a)return;let l=function(e,t){let r=new Map;for(let n of t)if(n.element&&(e===n.element||e.contains(n.element))){let e=`${aF}${ao("dom-id")}`;n.element.setAttribute(e,""),r.set(n,e)}return r}(i,a.registry.droppables),s=[],c=(r="input, textarea, select, canvas, [contenteditable]",n=i.cloneNode(!0),o=Array.from(i.querySelectorAll(r)),Array.from(n.querySelectorAll(r)).forEach((e,t)=>{let r=o[t];if(iw(e)&&iw(r)&&("file"!==e.type&&(e.value=r.value),"radio"===e.type&&e.name&&(e.name=`Cloned__${e.name}`)),ij(e)&&ij(r)&&r.width>0&&r.height>0){let t=e.getContext("2d");null==t||t.drawImage(r,0,0)}}),n),{remove:u}=c;return function(e,t,r){for(let[n,o]of e){if(!n.element)continue;let e=`[${o}]`,i=t.matches(e)?t:t.querySelector(e);if(n.element.removeAttribute(o),!i)continue;let a=n.element;n.proxy=i,i.removeAttribute(o),iz.set(a,i),r.push(()=>{iz.delete(a),n.proxy=void 0})}}(l,c,s),function(e,t="hidden"){e.setAttribute("inert","true"),e.setAttribute("tab-index","-1"),e.setAttribute("aria-hidden","true"),e.setAttribute(aV,t)}(c,t),c.remove=()=>{s.forEach(e=>e()),u.call(c)},c})}(g,G?"clone":"hidden"),ee=rK(()=>ar(p.dragOperation.activatorEvent));if(!y.translate){if(this.overlay&&U)y.translate={x:U.x,y:U.y};else if("none"!==D){let e=iY(D);e&&(y.translate=e)}}if(!y.transformOrigin){let e=rK(()=>m.current),t=A+(null!=(n=null==U?void 0:U.x)?n:0),r=T+(null!=(o=null==U?void 0:U.y)?o:0);y.transformOrigin={x:(e.x-t*j.scaleX-j.x)/(C*j.scaleX),y:(e.y-r*j.scaleY-j.y)/(P*j.scaleY)}}let{transformOrigin:et}=y,er=T*j.scaleY+j.y,en=A*j.scaleX+j.x;if(!y.coordinates&&(y.coordinates={x:en,y:er},1!==E.x||1!==E.y)){let{scaleX:e,scaleY:t}=z,{x:r,y:n}=et;y.coordinates.x+=(C*e-C)*r,y.coordinates.y+=(P*t-P)*n}y.dimensions||(y.dimensions={width:C,height:P}),y.frameTransform||(y.frameTransform=j);let eo={x:y.coordinates.x-en,y:y.coordinates.y-er},ei={width:(y.dimensions.width*y.frameTransform.scaleX-C*j.scaleX)*et.x,height:(y.dimensions.height*y.frameTransform.scaleY-P*j.scaleY)*et.y},ea={x:eo.x/j.scaleX+ei.width,y:eo.y/j.scaleY+ei.height},el={left:A+ea.x,top:T+ea.y};w.setAttribute(aH,"true");let es=rK(()=>f.transform),ec=null!=(i=y.translate)?i:{x:0,y:0},eu=es.x*j.scaleX+ec.x,ed=es.y*j.scaleY+ec.y,ep=i_();M.set({width:C-K,height:P-J,top:el.top+ep.y,left:el.left+ep.x,translate:`${eu}px ${ed}px 0`,transform:this.overlay?"none":Z,transition:X?`${X}, translate 0ms linear`:"translate 0ms linear",scale:S?`${E.x} ${E.y}`:"","transform-origin":`${100*et.x}% ${100*et.y}%`},aW),Q&&(b.insertAdjacentElement("afterend",Q),(null==h?void 0:h.rootElement)&&("function"==typeof h.rootElement?h.rootElement(g):h.rootElement).appendChild(b)),iD(w)&&(w.hasAttribute("popover")||w.setAttribute("popover","manual"),iL(w),w.addEventListener("beforetoggle",aY));let eh=(l={placeholder:Q,element:b,feedbackElement:w,frameTransform:j,transformOrigin:et,width:C,height:P,top:T,left:A,widthOffset:K,heightOffset:J,delta:ea,styles:M,dragOperation:f,getTranslate:()=>d.current.translate,getElementMutationObserver:()=>s,getSavedCellWidths:()=>u,setSavedCellWidths:e=>{u=e}},new ResizeObserver(()=>{var e,t,r;let n=new i7(l.placeholder,{frameTransform:l.frameTransform,ignoreTransforms:!0}),o=null!=(e=l.transformOrigin)?e:{x:1,y:1},i=(l.width-n.width)*o.x+l.delta.x,a=(l.height-n.height)*o.y+l.delta.y,s=i_();if(l.styles.set({width:n.width-l.widthOffset,height:n.height-l.heightOffset,top:l.top+a+s.y,left:l.left+i+s.x},aW),null==(t=l.getElementMutationObserver())||t.takeRecords(),aK(l.element)&&aK(l.placeholder)){let e=Array.from(l.element.cells),t=Array.from(l.placeholder.cells);for(let[r,n]of(l.getSavedCellWidths()||l.setSavedCellWidths(e.map(e=>e.style.width)),e.entries())){let e=t[r];n.style.width=`${e.getBoundingClientRect().width}px`}}let c=null!=(r=l.getTranslate())?r:{x:0,y:0},u=l.left+i+s.x+c.x,d=l.top+a+s.y+c.y,p=n.width-l.widthOffset,h=n.height-l.heightOffset,f=l.frameTransform;l.dragOperation.shape=new n8(u*f.scaleX+f.x,d*f.scaleY+f.y,p*f.scaleX,h*f.scaleY)})),ef=new i7(w);rK(()=>f.shape=ef);let em=ic(w),eg=e=>{this.manager.actions.stop({event:e})},ev=iy(em);if(ee&&em.addEventListener("resize",eg),"idle"===rK(()=>g.status)&&requestAnimationFrame(()=>g.status="dragging"),Q){let e,t;eh.observe(Q),(e=new MutationObserver(e=>{let t=!1;for(let r of e){if(r.target!==b){t=!0;continue}if("attributes"!==r.type)continue;let e=r.attributeName;if(e.startsWith("aria-")||aX.includes(e))continue;let n=b.getAttribute(e);if("style"===e){if(i9(b)&&i9(Q)){let e=b.style;for(let t of Array.from(Q.style))""===e.getPropertyValue(t)&&Q.style.removeProperty(t);for(let t of Array.from(e)){if(aU.includes(t)||t.startsWith(aW))continue;let r=e.getPropertyValue(t);Q.style.setProperty(t,r)}}}else null!==n?Q.setAttribute(e,n):Q.removeAttribute(e)}t&&G&&Q.replaceChildren(...b.cloneNode(!0).childNodes)})).observe(b,{attributes:!0,subtree:!0,childList:!0}),s=e,(t=new MutationObserver(e=>{for(let t of e)if(0!==t.addedNodes.length)for(let e of Array.from(t.addedNodes)){if(e.contains(b)&&b.nextElementSibling!==Q){b.insertAdjacentElement("afterend",Q),iL(w);return}if(e.contains(Q)&&Q.previousElementSibling!==b){Q.insertAdjacentElement("beforebegin",b),iL(w);return}}b.isConnected&&Q.isConnected&&b.nextElementSibling!==Q&&(b.insertAdjacentElement("afterend",Q),iL(w))})).observe(b.ownerDocument.body,{childList:!0,subtree:!0}),c=t}let eb=null==(a=p.dragOperation.source)?void 0:a.id,e_=()=>{var e;if(!ee||null==eb)return;let t=p.registry.draggables.get(eb),r=null!=(e=null==t?void 0:t.handle)?e:null==t?void 0:t.element;id(r)&&r.focus()},ex=()=>{var e;if(null==s||s.disconnect(),null==c||c.disconnect(),eh.disconnect(),em.removeEventListener("resize",eg),iD(w)&&(w.removeEventListener("beforetoggle",aY),w.removeAttribute("popover")),w.removeAttribute(aH),M.reset(),u&&aK(b))for(let[t,r]of Array.from(b.cells).entries())r.style.width=null!=(e=u[t])?e:"";g.status="idle";let t=null!=d.current.translate,r=f.status.dragging;Q&&(!r&&t||Q.parentElement!==w.parentElement)&&w.isConnected&&Q.replaceWith(w),null==Q||Q.remove()},ek=null==h?void 0:h.dropAnimation,ey=this,ew=nO(()=>{var e,t,r;let{transform:n,status:o}=f;if((n.x||n.y||d.current.translate)&&o.dragging){let o=null!=(e=y.translate)?e:{x:0,y:0},i={x:n.x/j.scaleX+o.x,y:n.y/j.scaleY+o.y},a=d.current.translate,l=rK(()=>f.modifiers),c=rK(()=>{var e;return null==(e=f.shape)?void 0:e.current}),u=null==h?void 0:h.keyboardTransition,p=ee&&!ev&&null!==u?`${null!=(t=null==u?void 0:u.duration)?t:250}ms ${null!=(r=null==u?void 0:u.easing)?r:"cubic-bezier(0.25, 1, 0.5, 1)"}`:"0ms linear";if(M.set({transition:X?`${X}, translate ${p}`:`translate ${p}`,translate:`${i.x}px ${i.y}px 0`},aW),null==s||s.takeRecords(),c&&c!==ef&&a&&!l.length){let e=n5.delta(i,a);f.shape=n8.from(c.boundingRectangle).translate(e.x*j.scaleX,e.y*j.scaleY)}else f.shape=new i7(w);d.current.translate=i}},function(){if(f.status.dropped){this.dispose(),g.status="dropping";let e=(null==_?void 0:_.dropAnimation)!==void 0?_.dropAnimation:void 0!==ey.dropAnimation?ey.dropAnimation:ek,t=d.current.translate,r=null!=t;if(t||b===w||(t={x:0,y:0}),!t||null===e)return void ex();p.renderer.rendering.then(()=>{!function(e){var t,r,n,o;let{animation:i}=e;if("function"==typeof i)return Promise.resolve(i({source:e.source,element:e.element,feedbackElement:e.feedbackElement,placeholder:e.placeholder,translate:e.translate,moved:e.moved})).then(()=>{e.cleanup(),requestAnimationFrame(e.restoreFocus)});let{duration:a=250,easing:l="ease"}=null!=i?i:{};iL(e.feedbackElement);let[,s]=null!=(t=ii(e.feedbackElement,e=>"translate"in e))?t:[];null==s||s.pause();let c=null!=(r=e.placeholder)?r:e.element,u={frameTransform:aG(e.feedbackElement,c)?null:void 0},d=new i7(e.feedbackElement,u),p=null!=(n=iY(iV(e.feedbackElement).translate))?n:e.translate,h=new i7(c,u),f=n8.delta(d,h,e.alignment),m={x:p.x-f.x,y:p.y-f.y},g=Math.round(d.intrinsicHeight)!==Math.round(h.intrinsicHeight)?{minHeight:[`${d.intrinsicHeight}px`,`${h.intrinsicHeight}px`],maxHeight:[`${d.intrinsicHeight}px`,`${h.intrinsicHeight}px`]}:{},v=Math.round(d.intrinsicWidth)!==Math.round(h.intrinsicWidth)?{minWidth:[`${d.intrinsicWidth}px`,`${h.intrinsicWidth}px`],maxWidth:[`${d.intrinsicWidth}px`,`${h.intrinsicWidth}px`]}:{};e.styles.set({transition:e.transition},aW),e.feedbackElement.setAttribute(aq,""),null==(o=e.getElementMutationObserver())||o.takeRecords(),i4({element:e.feedbackElement,keyframes:ac(ab(ab({},g),v),ad({translate:[`${p.x}px ${p.y}px 0`,`${m.x}px ${m.y}px 0`]})),options:{duration:iy(ic(e.feedbackElement))?0:e.moved||e.feedbackElement!==e.element?a:0,easing:l}}).then(()=>{e.feedbackElement.removeAttribute(aq),null==s||s.finish(),e.cleanup(),requestAnimationFrame(e.restoreFocus)})}({source:g,element:b,feedbackElement:w,placeholder:Q,translate:t,moved:r,transition:O,alignment:g.alignment,styles:M,animation:null!=e?e:void 0,getElementMutationObserver:()=>s,cleanup:ex,restoreFocus:e_})})}});return()=>{ex(),ew()}},aI(tI,4,"overlay",tz,aJ,tE),az(tI,aJ),aJ.configure=oT(aJ),tN=[nA],tO=iJ.Forward,tA=[nA],tM=iJ.Reverse;var aQ=class{constructor(){aT(this,tL,aS(tD,8,this,!0)),aS(tD,11,this),aT(this,t$,aS(tD,12,this,!0)),aS(tD,15,this)}isLocked(e){return e!==iJ.Idle&&(null==e?!0===this[iJ.Forward]&&!0===this[iJ.Reverse]:!0===this[e])}unlock(e){e!==iJ.Idle&&(this[e]=!1)}};tD=ak(null),tL=new WeakMap,t$=new WeakMap,aI(tD,4,tO,tN,aQ,tL),aI(tD,4,tM,tA,aQ,t$),az(tD,aQ);var a0=[iJ.Forward,iJ.Reverse],a1=class{constructor(){this.x=new aQ,this.y=new aQ}isLocked(){return this.x.isLocked()&&this.y.isLocked()}},a2=class extends oM{constructor(e){super(e);let t=r8(new a1),r=null;this.signal=t,na(()=>{let{status:n}=e.dragOperation;if(!n.initialized){r=null,t.value=new a1;return}let{delta:o}=e.dragOperation.position;if(r){let e={x:a4(o.x,r.x),y:a4(o.y,r.y)},n=t.peek();rZ(()=>{for(let t of ot)for(let r of a0)e[t]===r&&n[t].unlock(r);t.value=n})}r=o})}get current(){return this.signal.peek()}};function a4(e,t){return Math.sign(e-t)}var a3=class extends(tR=oN,tB=[nA],tR){constructor(e){super(e),aT(this,tq,aS(tF,8,this,!1)),aS(tF,11,this),aT(this,tW),aT(this,tH,()=>{if(!aP(this,tW))return;let{element:e,by:t}=aP(this,tW);t.y&&(e.scrollTop+=t.y),t.x&&(e.scrollLeft+=t.x)}),this.scroll=(e,t)=>{var r;if(this.disabled)return!1;let n=this.getScrollableElements();if(!n)return aA(this,tW,void 0),!1;let{position:o}=this.manager.dragOperation,i=null==o?void 0:o.current;if(i){let{by:o}=null!=e?e:{},a=o?{x:a6(o.x),y:a6(o.y)}:void 0,l=a?void 0:this.scrollIntentTracker.current;if(null==l?void 0:l.isLocked())return!1;for(let e of n){let n=function(e,t){let{isTop:r,isBottom:n,isLeft:o,isRight:i,position:a}=iB(e),{x:l,y:s}=null!=t?t:{x:0,y:0},c=!r&&a.current.y+s>0,u=!n&&a.current.y+s<a.max.y,d=!o&&a.current.x+l>0,p=!i&&a.current.x+l<a.max.x;return{top:c,bottom:u,left:d,right:p,x:d||p,y:c||u}}(e,o);if(n.x||n.y){let{speed:n,direction:s}=function(e,t,r,n=25,o=iQ,i=i0){let{x:a,y:l}=t,{rect:s,isTop:c,isBottom:u,isLeft:d,isRight:p}=iB(e),h=iG(e),f=iK(iV(e,!0)),m=null!==f&&(null==f?void 0:f.scaleX)<0,g=null!==f&&(null==f?void 0:f.scaleY)<0,v=new n8(s.left*h.scaleX+h.x,s.top*h.scaleY+h.y,s.width*h.scaleX,s.height*h.scaleY),b={x:0,y:0},_={x:0,y:0},x={height:v.height*o.y,width:v.width*o.x};return x.height>0&&(!c||g&&!u)&&l<=v.top+x.height&&(null==r?void 0:r.y)!==1&&a>=v.left-i.x&&a<=v.right+i.x?(b.y=g?1:-1,_.y=n*Math.abs((v.top+x.height-l)/x.height)):x.height>0&&(!u||g&&!c)&&l>=v.bottom-x.height&&(null==r?void 0:r.y)!==-1&&a>=v.left-i.x&&a<=v.right+i.x&&(b.y=g?-1:1,_.y=n*Math.abs((v.bottom-x.height-l)/x.height)),x.width>0&&(!p||m&&!d)&&a>=v.right-x.width&&(null==r?void 0:r.x)!==-1&&l>=v.top-i.y&&l<=v.bottom+i.y?(b.x=m?-1:1,_.x=n*Math.abs((v.right-x.width-a)/x.width)):x.width>0&&(!d||m&&!p)&&a<=v.left+x.width&&(null==r?void 0:r.x)!==1&&l>=v.top-i.y&&l<=v.bottom+i.y&&(b.x=m?1:-1,_.x=n*Math.abs((v.left+x.width-a)/x.width)),{direction:b,speed:_}}(e,i,a,null==t?void 0:t.acceleration,null==t?void 0:t.threshold);if(l)for(let e of ot)l[e].isLocked(s[e])&&(n[e]=0,s[e]=0);if(s.x||s.y){let{x:t,y:i}=null!=o?o:s,a=t*n.x,l=i*n.y;if(a||l){let t=null==(r=aP(this,tW))?void 0:r.by;if(this.autoScrolling&&t&&(t.x&&!a||t.y&&!l))continue;return aA(this,tW,{element:e,by:{x:a,y:l}}),iF.schedule(aP(this,tH)),!0}}}}}return aA(this,tW,void 0),!1};let t=null,r=null,n=nP(()=>{let{position:r,source:n}=e.dragOperation;if(!r)return null;let o=function e(t,{x:r,y:n}){var o;let i=t.elementFromPoint(r,n);if((null==(o=i)?void 0:o.tagName)==="IFRAME"){let{contentDocument:t}=i;if(t){let{left:o,top:a}=i.getBoundingClientRect();return e(t,{x:r-o,y:n-a})}}return i}(ik(null==n?void 0:n.element),r.current);return o&&(t=o),null!=o?o:t}),o=nP(()=>{let t=n.value,{documentElement:o}=ih(t);if(!t||t===o){let{target:t}=e.dragOperation,n=null==t?void 0:t.element;if(n){let e=iZ(n,{excludeElement:!1});return r=e,e}}if(t){let e=iZ(t,{excludeElement:!1});return this.autoScrolling&&r&&e.size<(null==r?void 0:r.size)?r:(r=e,e)}return r=null,null},nT);this.getScrollableElements=()=>o.value,this.scrollIntentTracker=new a2(e),this.destroy=e.monitor.addEventListener("dragmove",t=>{!this.disabled&&!t.defaultPrevented&&ar(e.dragOperation.activatorEvent)&&t.by&&this.scroll({by:t.by})&&t.preventDefault()})}};function a6(e){return e>0?iJ.Forward:e<0?iJ.Reverse:iJ.Idle}tF=ak(tR),tq=new WeakMap,tW=new WeakMap,tH=new WeakMap,aI(tF,4,"autoScrolling",tB,a3,tq),az(tF,a3);var a5=new class{constructor(e){this.scheduler=e,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:e,resolvers:t}=this;for(let t of(this.pending=!1,this.tasks=new Set,this.resolvers=new Set,e))t();for(let e of t)e()}}schedule(e){return this.tasks.add(e),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(e=>this.resolvers.add(e))}}(e=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(e):e()}),a8=class extends oM{constructor(e,t){super(e,t);let r=e.registry.plugins.get(a3);if(!r)throw Error("AutoScroller plugin depends on Scroller plugin");this.destroy=na(()=>{var t,n,o;if(this.disabled)return;let{position:i,status:a}=e.dragOperation;if(a.dragging){let e={acceleration:null==(t=this.options)?void 0:t.acceleration,threshold:"number"==typeof(null==(n=this.options)?void 0:n.threshold)?{x:this.options.threshold,y:this.options.threshold}:null==(o=this.options)?void 0:o.threshold};if(r.scroll(void 0,e)){r.autoScrolling=!0;let t=setInterval(()=>a5.schedule(()=>r.scroll(void 0,e)),10);return()=>{clearInterval(t)}}r.autoScrolling=!1}})}};a8.configure=oT(a8);var a7={capture:!0,passive:!0},a9=class extends oN{constructor(e){super(e),aT(this,tV),this.handleScroll=()=>{null==aP(this,tV)&&aA(this,tV,setTimeout(()=>{this.manager.collisionObserver.forceUpdate(!1),aA(this,tV,void 0)},50))};let{dragOperation:t}=this.manager;this.destroy=na(()=>{var e,r,n;if(t.status.dragging){let o=null!=(n=null==(r=null==(e=t.source)?void 0:e.element)?void 0:r.ownerDocument)?n:document;return o.addEventListener("scroll",this.handleScroll,a7),()=>{o.removeEventListener("scroll",this.handleScroll,a7)}}})}};tV=new WeakMap;var le=class extends oM{constructor(e){super(e),this.manager=e;let t=e.registry.plugins.get(aB),r=null==t?void 0:t.register("* { user-select: none !important; -webkit-user-select: none !important; }");if(this.destroy=na(()=>{let{dragOperation:e}=this.manager;if(e.status.initialized)return lt(),document.addEventListener("selectionchange",lt,{capture:!0}),()=>{document.removeEventListener("selectionchange",lt,{capture:!0})}}),r){let e=this.destroy.bind(this);this.destroy=()=>{r(),e()}}}};function lt(){var e;null==(e=document.getSelection())||e.removeAllRanges()}var lr=Object.freeze({offset:10,keyboardCodes:{start:["Space","Enter"],cancel:["Escape"],end:["Space","Enter","Tab"],up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"]},preventActivation(e,t){var r;let n=null!=(r=t.handle)?r:t.element;return e.target!==n}}),ln=class extends oJ{constructor(e,t){super(e),this.manager=e,this.options=t,aT(this,tX,[]),this.listeners=new iS,this.handleSourceKeyDown=(e,t,r)=>{if(this.disabled||e.defaultPrevented||!at(e.target)||t.disabled)return;let{keyboardCodes:n=lr.keyboardCodes,preventActivation:o=lr.preventActivation}=null!=r?r:{};!n.start.includes(e.code)||!this.manager.dragOperation.status.idle||null!=o&&o(e,t)||this.handleStart(e,t,r)}}bind(e,t=this.options){return na(()=>{var r;let n=null!=(r=e.handle)?r:e.element,o=r=>{ar(r)&&this.handleSourceKeyDown(r,e,t)};if(n)return n.addEventListener("keydown",o),()=>{n.removeEventListener("keydown",o)}})}handleStart(e,t,r){let{element:n}=t;if(!n)throw Error("Source draggable does not have an associated element");e.preventDefault(),e.stopImmediatePropagation(),i1(n);let{center:o}=new i7(n);if(this.manager.actions.start({event:e,coordinates:{x:o.x,y:o.y},source:t}).signal.aborted)return this.cleanup();this.sideEffects();let i=ih(n),a=[this.listeners.bind(i,[{type:"keydown",listener:e=>this.handleKeyDown(e,t,r),options:{capture:!0}}])];aP(this,tX).push(...a)}handleKeyDown(e,t,r){let{keyboardCodes:n=lr.keyboardCodes}=null!=r?r:{};if(lo(e,[...n.end,...n.cancel])){e.preventDefault();let t=lo(e,n.cancel);this.handleEnd(e,t);return}lo(e,n.up)?this.handleMove("up",e):lo(e,n.down)&&this.handleMove("down",e),lo(e,n.left)?this.handleMove("left",e):lo(e,n.right)&&this.handleMove("right",e)}handleEnd(e,t){this.manager.actions.stop({event:e,canceled:t}),this.cleanup()}handleMove(e,t){var r,n;let{shape:o}=this.manager.dragOperation,i=t.shiftKey?5:1,a={x:0,y:0},l=null!=(n=null==(r=this.options)?void 0:r.offset)?n:lr.offset;if("number"==typeof l&&(l={x:l,y:l}),o){switch(e){case"up":a={x:0,y:-l.y*i};break;case"down":a={x:0,y:l.y*i};break;case"left":a={x:-l.x*i,y:0};break;case"right":a={x:l.x*i,y:0}}(a.x||a.y)&&(t.preventDefault(),this.manager.actions.move({event:t,by:a}))}}sideEffects(){let e=this.manager.registry.plugins.get(a8);(null==e?void 0:e.disabled)===!1&&(e.disable(),aP(this,tX).push(()=>{e.enable()}))}cleanup(){aP(this,tX).forEach(e=>e()),aA(this,tX,[])}destroy(){this.cleanup(),this.listeners.clear()}};function lo(e,t){return t.includes(e.code)}tX=new WeakMap,ln.configure=oT(ln),ln.defaults=lr;var li=class extends o0{constructor(){super(...arguments),aT(this,tU)}onEvent(e){switch(e.type){case"pointerdown":aA(this,tU,ig(e));break;case"pointermove":if(!aP(this,tU))return;let{x:t,y:r}=ig(e),n={x:t-aP(this,tU).x,y:r-aP(this,tU).y},{tolerance:o}=this.options;if(o&&n9(n,o))return void this.abort();n9(n,this.options.value)&&this.activate(e);break;case"pointerup":this.abort()}}abort(){aA(this,tU,void 0)}};tU=new WeakMap;var la=class extends o0{constructor(){super(...arguments),aT(this,tZ),aT(this,tG)}onEvent(e){switch(e.type){case"pointerdown":aA(this,tG,ig(e)),aA(this,tZ,setTimeout(()=>this.activate(e),this.options.value));break;case"pointermove":if(!aP(this,tG))return;let{x:t,y:r}=ig(e);n9({x:t-aP(this,tG).x,y:r-aP(this,tG).y},this.options.tolerance)&&this.abort();break;case"pointerup":this.abort()}}abort(){aP(this,tZ)&&(clearTimeout(aP(this,tZ)),aA(this,tG,void 0),aA(this,tZ,void 0))}};tZ=new WeakMap,tG=new WeakMap;var ll=class{};ll.Delay=la,ll.Distance=li;var ls=Object.freeze({activationConstraints(e,t){var r;let{pointerType:n,target:o}=e;if(!("mouse"===n&&at(o)&&(t.handle===o||(null==(r=t.handle)?void 0:r.contains(o)))))return"touch"===n?[new ll.Delay({value:250,tolerance:5})]:function(e){var t;if(!at(e))return!1;let{tagName:r}=e;return"INPUT"===r||"TEXTAREA"===r||(t=e).hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable")}(o)&&!e.defaultPrevented?[new ll.Delay({value:200,tolerance:0})]:[new ll.Delay({value:200,tolerance:10}),new ll.Distance({value:5})]},preventActivation(e,t){var r;let{target:n}=e;return!(n===t.element||n===t.handle||!at(n)||(null==(r=t.handle)?void 0:r.contains(n)))&&!!n.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `)}}),lc=class extends oJ{constructor(e,t){super(e),this.manager=e,this.options=t,aT(this,tY,new Set),this.listeners=new iS,this.latest={event:void 0,coordinates:void 0},this.handleMove=()=>{let{event:e,coordinates:t}=this.latest;e&&t&&this.manager.actions.move({event:e,to:t})},this.handleCancel=this.handleCancel.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activationConstraints(e,t,r=this.options){let{activationConstraints:n=ls.activationConstraints}=null!=r?r:{};return"function"==typeof n?n(e,t):n}bind(e,t=this.options){return na(()=>{var r,n;let o=new AbortController,{signal:i}=o,a=r=>{(function(e){if(!e)return!1;let{PointerEvent:t}=ic(e.target);return e instanceof t})(r)&&this.handlePointerDown(r,e,t)},l=[null!=(r=e.handle)?r:e.element];for(let r of((null==t?void 0:t.activatorElements)&&(l=Array.isArray(t.activatorElements)?t.activatorElements:t.activatorElements(e)),l)){r&&(!(n=r.ownerDocument.defaultView)||lp.has(n)||(n.addEventListener("touchmove",ld,{capture:!1,passive:!1}),lp.add(n)),r.addEventListener("pointerdown",a,{signal:i}))}return()=>o.abort()})}handlePointerDown(e,t,r){if(this.disabled||!e.isPrimary||0!==e.button||!at(e.target)||t.disabled||"sensor"in e||!this.manager.dragOperation.status.idle)return;let{preventActivation:n=ls.preventActivation}=null!=r?r:{};if(null==n?void 0:n(e,t))return;let{target:o}=e,i=id(o)&&o.draggable&&"true"===o.getAttribute("draggable"),a=iG(t.element),{x:l,y:s}=ig(e);this.initialCoordinates={x:l*a.scaleX+a.x,y:s*a.scaleY+a.y};let c=this.activationConstraints(e,t,r);e.sensor=this;let u=new oQ(c,e=>this.handleStart(t,e));u.signal.onabort=()=>this.handleCancel(e),u.onEvent(e),this.controller=u;let d=function e(t=document,r=new Set){if(r.has(t))return[];r.add(t);let n=[t];for(let o of Array.from(t.querySelectorAll("iframe, frame")))try{let t=o.contentDocument;t&&!r.has(t)&&n.push(...e(t,r))}catch(e){}try{let o=t.defaultView;if(o&&o!==window.top){let i=o.parent;i&&i.document&&i.document!==t&&n.push(...e(i.document,r))}}catch(e){}return n}(),p=this.listeners.bind(d,[{type:"pointermove",listener:e=>this.handlePointerMove(e,t)},{type:"pointerup",listener:this.handlePointerUp,options:{capture:!0}},{type:"pointercancel",listener:this.handleCancel},{type:"dragstart",listener:i?this.handleCancel:lu,options:{capture:!0}}]),h=()=>{p(),this.initialCoordinates=void 0};aP(this,tY).add(h)}handlePointerMove(e,t){var r,n;if((null==(r=this.controller)?void 0:r.activated)===!1){null==(n=this.controller)||n.onEvent(e);return}if(this.manager.dragOperation.status.dragging){let r=ig(e),n=iG(t.element);r.x=r.x*n.scaleX+n.x,r.y=r.y*n.scaleY+n.y,e.preventDefault(),e.stopPropagation(),this.latest.event=e,this.latest.coordinates=r,iF.schedule(this.handleMove)}}handlePointerUp(e){let{status:t}=this.manager.dragOperation;if(!t.idle){e.preventDefault(),e.stopPropagation();let r=!t.initialized;this.manager.actions.stop({event:e,canceled:r})}this.cleanup()}handleKeyDown(e){"Escape"===e.key&&(e.preventDefault(),this.handleCancel(e))}handleStart(e,t){let{manager:r,initialCoordinates:n}=this;if(!n||!r.dragOperation.status.idle||t.defaultPrevented)return;if(r.actions.start({coordinates:n,event:t,source:e}).signal.aborted)return this.cleanup();t.preventDefault();let o=ih(t.target).body;try{o.setPointerCapture(t.pointerId)}catch(e){this.handleCancel(t);return}let i=at(t.target)?[t.target,o]:o,a=this.listeners.bind(i,[{type:"touchmove",listener:lu,options:{passive:!1}},{type:"click",listener:lu},{type:"contextmenu",listener:lu},{type:"keydown",listener:this.handleKeyDown}]);aP(this,tY).add(a)}handleCancel(e){let{dragOperation:t}=this.manager;t.status.initialized&&this.manager.actions.stop({event:e,canceled:!0}),this.cleanup()}cleanup(){let{controller:e}=this;this.controller=void 0,e&&!e.signal.aborted&&e.abort(),this.latest={event:void 0,coordinates:void 0},aP(this,tY).forEach(e=>e()),aP(this,tY).clear()}destroy(){this.cleanup(),this.listeners.clear()}};function lu(e){e.preventDefault()}function ld(){}tY=new WeakMap,lc.configure=oT(lc),lc.defaults=ls;var lp=new WeakSet,lh=[],lf=[aL,a8,aR,aJ,le],lm=[lc,ln],lg=class extends o5{constructor(e={}){let t=o6(e.plugins,lf),r=o6(e.sensors,lm),n=o6(e.modifiers,lh);super(ac(ab({},e),ad({plugins:[a9,a3,aB,...t],sensors:r,modifiers:n})))}},lv=class extends(tQ=oq,tJ=[nA],tK=[nA],tQ){constructor(e,t){var{element:r,effects:n=()=>[],handle:o}=e;super(ab({effects:()=>[...n(),()=>{var e,t;let{manager:r}=this;if(!r)return;let n=(null!=(t=null==(e=this.sensors)?void 0:e.map(oA))?t:[...r.sensors]).map(e=>{let t=e instanceof oJ?e:r.registry.register(e.plugin),n=e instanceof oJ?void 0:e.options;return t.bind(this,n)});return function(){n.forEach(e=>e())}}]},ax(e,["element","effects","handle"])),t),aT(this,t1,aS(t0,8,this)),aS(t0,11,this),aT(this,t2,aS(t0,12,this)),aS(t0,15,this),this.element=r,this.handle=o}};t0=ak(tQ),t1=new WeakMap,t2=new WeakMap,aI(t0,4,"handle",tJ,lv,t1),aI(t0,4,"element",tK,lv,t2),az(t0,lv);var lb=class extends(t6=oW,t3=[nA],t4=[nA],t6){constructor(e,t){var{element:r,effects:n=()=>[]}=e,o=ax(e,["element","effects"]);let{collisionDetector:i=ai}=o,a=e=>{let{manager:t,element:r}=this;if(!r||null===e){this.shape=void 0;return}if(!t)return;let n=new i7(r),o=rK(()=>this.shape);return n&&(null==o?void 0:o.equals(n))?o:(this.shape=n,n)},l=r8(!1);super(ac(ab({},o),ad({collisionDetector:i,effects:()=>[...n(),()=>{let{element:e,manager:t}=this;if(!t)return;let{dragOperation:r}=t,{source:n}=r;l.value=!!(n&&r.status.initialized&&e&&!this.disabled&&this.accepts(n))},()=>{let{element:e}=this;if(l.value&&e){let t=new iO(e,a);return()=>{t.disconnect(),this.shape=void 0}}},()=>{var e;if(null==(e=this.manager)?void 0:e.dragOperation.status.initialized)return()=>{this.shape=void 0}}]})),t),aT(this,rt),aT(this,t8,aS(t5,8,this)),aS(t5,11,this),aT(this,rr,aS(t5,12,this)),aS(t5,15,this),this.element=r,this.refreshShape=()=>a()}set element(e){aA(this,rt,e,re)}get element(){var e;return null!=(e=this.proxy)?e:aP(this,rt,t9)}};t5=ak(t6),t8=new WeakMap,rt=new WeakSet,rr=new WeakMap,t9=(t7=aI(t5,20,"#element",t3,rt,t8)).get,re=t7.set,aI(t5,4,"proxy",t4,lb,rr),az(t5,lb);var l_=e.i(74080);function lx(e){var t;if(null!=e)return null!=e&&"object"==typeof e&&"current"in e?null!=(t=e.current)?t:void 0:e}var lk="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement?rv.useLayoutEffect:rv.useEffect;function ly(e,t){let r,n=(0,rv.useRef)(new Map),o=(r=(0,rv.useState)(0)[1],(0,rv.useCallback)(()=>{r(e=>e+1)},[r]));return lk(()=>e?na(()=>{var r;let i=!1,a=!1;for(let o of n.current){let[l]=o,s=rK(()=>o[1]),c=e[l];s!==c&&(i=!0,n.current.set(l,c),a=null!=(r=null==t?void 0:t(l,s,c))&&r)}i&&(a?queueMicrotask(()=>(0,l_.flushSync)(o)):o())}):void n.current.clear(),[e]),(0,rv.useMemo)(()=>e?new Proxy(e,{get(e,t){let r=e[t];return n.current.set(t,r),r}}):e,[e])}function lw(e,t){e()}function lj(e){let t=(0,rv.useRef)(e);return lk(()=>{t.current=e},[e]),t}function lz(e,t,r=rv.useEffect,n=Object.is){let o=(0,rv.useRef)(e);r(()=>{let r=o.current;n(e,r)||(o.current=e,t(e,r))},[t,e])}function lS(e,t){let r=(0,rv.useRef)(lx(e));lk(()=>{let n=lx(e);n!==r.current&&(r.current=n,t(n))})}var lI=Object.defineProperty,lE=Object.defineProperties,lC=Object.getOwnPropertyDescriptors,lP=Object.getOwnPropertySymbols,lT=Object.prototype.hasOwnProperty,lA=Object.prototype.propertyIsEnumerable,lM=(e,t,r)=>t in e?lI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lN=(e,t)=>{for(var r in t||(t={}))lT.call(t,r)&&lM(e,r,t[r]);if(lP)for(var r of lP(t))lA.call(t,r)&&lM(e,r,t[r]);return e},lO=new lg,lD=(0,rv.createContext)(lO),lL=(0,rv.memo)((0,rv.forwardRef)(({children:e},t)=>{let[r,n]=(0,rv.useState)(0),o=(0,rv.useRef)(null),i=(0,rv.useRef)(null),a=(0,rv.useMemo)(()=>({renderer:{get rendering(){var e;return null!=(e=o.current)?e:Promise.resolve()}},trackRendering(e){o.current||(o.current=new Promise(e=>{i.current=e})),(0,rv.startTransition)(()=>{e(),n(e=>e+1)})}}),[]);return lk(()=>{var e;null==(e=i.current)||e.call(i),o.current=null},[e,r]),(0,rv.useImperativeHandle)(t,()=>a),null})),l$=[void 0,nT];function lB(e){let t;var r,{children:n,onCollision:o,onBeforeDragStart:i,onDragStart:a,onDragMove:l,onDragOver:s,onDragEnd:c}=e,u=((e,t)=>{var r={};for(var n in e)lT.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&lP)for(var n of lP(e))0>t.indexOf(n)&&lA.call(e,n)&&(r[n]=e[n]);return r})(e,["children","onCollision","onBeforeDragStart","onDragStart","onDragMove","onDragOver","onDragEnd"]);let d=(0,rv.useRef)(null),{plugins:p,modifiers:h,sensors:f}=u,m=o6(p,lf),g=o6(f,lm),v=o6(h,lh),b=lj(i),_=lj(a),x=lj(s),k=lj(l),y=lj(c),w=lj(o),j=(r=()=>{var e;return null!=(e=u.manager)?e:new lg(u)},(t=(0,rv.useRef)(null)).current||(t.current=r()),(0,rv.useInsertionEffect)(()=>()=>{var e;return null==(e=t.current)?void 0:e.destroy()},[]),t.current);return(0,rv.useEffect)(()=>{if(!d.current)throw Error("Renderer not found");let{renderer:e,trackRendering:t}=d.current,{monitor:r}=j;j.renderer=e;let n=[r.addEventListener("beforedragstart",e=>{let r=b.current;r&&t(()=>r(e,j))}),r.addEventListener("dragstart",e=>{var t;return null==(t=_.current)?void 0:t.call(_,e,j)}),r.addEventListener("dragover",e=>{let r=x.current;r&&t(()=>r(e,j))}),r.addEventListener("dragmove",e=>{let r=k.current;r&&t(()=>r(e,j))}),r.addEventListener("dragend",e=>{let r=y.current;r&&t(()=>r(e,j))}),r.addEventListener("collision",e=>{var t;return null==(t=w.current)?void 0:t.call(w,e,j)})];return()=>n.forEach(e=>e())},[j]),lz(m,()=>j&&(j.plugins=m),...l$),lz(g,()=>j&&(j.sensors=g),...l$),lz(v,()=>j&&(j.modifiers=v),...l$),(0,rg.jsxs)(lD.Provider,{value:j,children:[(0,rg.jsx)(lL,{ref:d,children:n}),n]})}function lR(){return(0,rv.useContext)(lD)}function lF(e){var t;let r=null!=(t=lR())?t:void 0,[n]=(0,rv.useState)(()=>e(r));return n.manager!==r&&(n.manager=r),lk(n.register,[r,n]),n}function lq(e,t,r){return"isDragSource"===e&&!r&&!!t}var lW=Object.create,lH=Object.defineProperty,lV=Object.getOwnPropertyDescriptor,lX=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),lU=e=>{throw TypeError(e)},lZ=["class","method","getter","setter","accessor","field","value","get","set"],lG=e=>void 0!==e&&"function"!=typeof e?lU("Function expected"):e,lY=(e,t,r,n,o)=>({kind:lZ[e],name:t,metadata:n,addInitializer:e=>r._?lU("Already initialized"):o.push(lG(e||null))}),lK=(e,t,r,n,o,i)=>{for(var a,l,s,c=7&t,u=lZ[c+5],d=e[2]||(e[2]=[]),p=lV(o=o.prototype,r),h=n.length-1;h>=0;h--)(s=lY(c,r,l={},e[3],d)).static=!1,s.private=!1,(s.access={has:e=>r in e}).get=e=>e[r],a=(0,n[h])(p[u],s),l._=1,lG(a)&&(p[u]=a);return p&&lH(o,r,p),o},lJ=(e,t,r)=>t.has(e)||lU("Cannot "+r),lQ=class e{constructor(e,t){this.x=e,this.y=t}static delta(t,r){return new e(t.x-r.x,t.y-r.y)}static distance(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static from({x:t,y:r}){return new e(t,r)}},l0=class extends(ri=nD,ro=[nM],rn=[nM],ri){constructor(e){let t;super(lQ.from(e),(e,t)=>lQ.equals(e,t)),((e,t)=>{for(var r=0,n=e[2],o=n&&n.length;r<o;r++)n[r].call(t)})(rl,this),(t=ra).has(this)?lU("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(this):t.set(this,0),this.velocity={x:0,y:0}}get delta(){return lQ.delta(this.current,this.initial)}get direction(){let{current:e,previous:t}=this;if(!t)return null;let r={x:e.x-t.x,y:e.y-t.y};return r.x||r.y?Math.abs(r.x)>Math.abs(r.y)?r.x>0?"right":"left":r.y>0?"down":"up":null}get current(){return super.current}set current(e){let t,{current:r}=this,n=lQ.from(e),o={x:n.x-r.x,y:n.y-r.y},i=Date.now(),a=i-(lJ(this,t=ra,"read from private field"),t.get(this)),l=e=>Math.round(e/a*100);rZ(()=>{let e;lJ(this,e=ra,"write to private field"),e.set(this,i),this.velocity={x:l(o.x),y:l(o.y)},super.current=n})}reset(e=this.defaultValue){super.reset(lQ.from(e)),this.velocity={x:0,y:0}}};rl=[,,,lW(null!=(h=null==ri?void 0:ri[lX("metadata")])?h:null)],ra=new WeakMap,lK(rl,2,"delta",ro,l0),lK(rl,2,"direction",rn,l0),f=rl,n=lX("metadata"),o=f[3],n in l0?lH(l0,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):l0[n]=o;var l1=((m=l1||{}).Horizontal="x",m.Vertical="y",m);Object.values(l1);var l2=e=>{var t;return null!=(t=(({dragOperation:e,droppable:t})=>{let r=e.position.current;if(!r)return null;let{id:n}=t;return t.shape&&t.shape.containsPoint(r)?{id:n,value:1/lQ.distance(t.shape.center,r),type:oG.PointerIntersection,priority:oZ.High}:null})(e))?t:(({dragOperation:e,droppable:t})=>{let{shape:r}=e;if(!t.shape||!(null==r?void 0:r.current))return null;let n=r.current.intersectionArea(t.shape);if(n){let{position:o}=e,i=lQ.distance(t.shape.center,o.current),a=n/(r.current.area+t.shape.area-n);return{id:t.id,value:a/i,type:oG.ShapeIntersection,priority:oZ.Normal}}return null})(e)};function l4(e){let{collisionDetector:t,data:r,disabled:n,element:o,id:i,accept:a,type:l}=e,s=lF(t=>new lb(lE(lN({},e),lC({register:!1,element:lx(o)})),t)),c=ly(s);return lz(i,()=>s.id=i),lS(o,e=>s.element=e),lz(a,()=>s.accept=a,void 0,nT),lz(t,()=>s.collisionDetector=null!=t?t:l2),lz(r,()=>r&&(s.data=r)),lz(n,()=>s.disabled=!0===n),lz(l,()=>s.type=l),{droppable:c,get isDropTarget(){return c.isDropTarget},ref:(0,rv.useCallback)(e=>{var t,r;(e||null==(t=s.element)||!t.isConnected||(null==(r=s.manager)?void 0:r.dragOperation.status.idle))&&(s.element=null!=e?e:void 0)},[s])}}var l3=Object.create,l6=Object.defineProperty,l5=Object.defineProperties,l8=Object.getOwnPropertyDescriptor,l7=Object.getOwnPropertyDescriptors,l9=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,sr=e=>{throw TypeError(e)},sn=(e,t,r)=>t in e?l6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,so=(e,t)=>{for(var r in t||(t={}))se.call(t,r)&&sn(e,r,t[r]);if(l9)for(var r of l9(t))st.call(t,r)&&sn(e,r,t[r]);return e},si=["class","method","getter","setter","accessor","field","value","get","set"],sa=e=>void 0!==e&&"function"!=typeof e?sr("Function expected"):e,sl=(e,t,r,n,o)=>({kind:si[e],name:t,metadata:n,addInitializer:e=>r._?sr("Already initialized"):o.push(sa(e||null))}),ss=(e,t,r,n)=>{for(var o=0,i=e[t>>1],a=i&&i.length;o<a;o++)1&t?i[o].call(r):n=i[o].call(r,n);return n},sc=(e,t,r,n,o,i)=>{for(var a,l,s,c,u,d=7&t,p=e.length+1,h=si[d+5],f=e[p-1]=[],m=e[p]||(e[p]=[]),g=(o=o.prototype,l8({get[r](){return sd(this,i)},set[r](e){return sh(this,i,e)}},r)),v=n.length-1;v>=0;v--)(c=sl(d,r,s={},e[3],m)).static=!1,c.private=!1,(u=c.access={has:e=>r in e}).get=e=>e[r],u.set=(e,t)=>e[r]=t,l=(0,n[v])({get:g.get,set:g.set},c),s._=1,void 0===l?sa(l)&&(g[h]=l):"object"!=typeof l||null===l?sr("Object expected"):(sa(a=l.get)&&(g.get=a),sa(a=l.set)&&(g.set=a),sa(a=l.init)&&f.unshift(a));return g&&l6(o,r,g),o},su=(e,t,r)=>t.has(e)||sr("Cannot "+r),sd=(e,t,r)=>(su(e,t,"read from private field"),t.get(e)),sp=(e,t,r)=>t.has(e)?sr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),sh=(e,t,r,n)=>(su(e,t,"write to private field"),t.set(e,r),r);function sf(e){return e instanceof sO||e instanceof sN}var sm=class extends oM{constructor(e){super(e);let t=na(()=>{let{dragOperation:t}=e;if(ar(t.activatorEvent)&&sf(t.source)&&t.status.initialized){let t=e.registry.plugins.get(a3);if(t)return t.disable(),()=>t.enable()}}),r=e.monitor.addEventListener("dragmove",(e,t)=>{queueMicrotask(()=>{if(this.disabled||e.defaultPrevented||!e.nativeEvent)return;let{dragOperation:r}=t;if(!ar(e.nativeEvent)||!sf(r.source)||!r.shape)return;let{actions:n,collisionObserver:o,registry:i}=t,{by:a}=e;if(!a)return;let l=function(e){let{x:t,y:r}=e;return t>0?"right":t<0?"left":r>0?"down":r<0?"up":void 0}(a),{source:s,target:c}=r,{center:u}=r.shape.current,d=[],p=[];rZ(()=>{for(let e of i.droppables){let{id:t}=e;if(!e.accepts(s)||t===(null==c?void 0:c.id)&&sf(e)||!e.element)continue;let r=e.shape,n=new i7(e.element,{getBoundingClientRect:e=>im(e,void 0,.2)});n.height&&n.width&&("down"==l&&u.y+10<n.center.y||"up"==l&&u.y-10>n.center.y||"left"==l&&u.x-10>n.center.x||"right"==l&&u.x+10<n.center.x)&&(d.push(e),e.shape=n,p.push(()=>e.shape=r))}}),e.preventDefault(),o.disable();let h=o.computeCollisions(d,aa);rZ(()=>p.forEach(e=>e()));let[f]=h;if(!f)return;let{id:m}=f,{index:g,group:v}=s.sortable;n.setDropTarget(m).then(()=>{let{source:e,target:t,shape:i}=r;if(!e||!sf(e)||!i)return;let{index:a,group:l,target:s}=e.sortable,c=g!==a||v!==l,u=c?s:null==t?void 0:t.element;if(!u)return;i1(u);let d=new i7(u);if(!d)return;let p=n8.delta(d,n8.from(i.current.boundingRectangle),e.alignment);n.move({by:p}),c?n.setDropTarget(e.id).then(()=>o.enable()):o.enable()})})});this.destroy=()=>{r(),t()}}},sg=Object.defineProperty,sv=Object.defineProperties,sb=Object.getOwnPropertyDescriptors,s_=Object.getOwnPropertySymbols,sx=Object.prototype.hasOwnProperty,sk=Object.prototype.propertyIsEnumerable,sy=(e,t,r)=>t in e?sg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,sw=(e,t)=>{for(var r in t||(t={}))sx.call(t,r)&&sy(e,r,t[r]);if(s_)for(var r of s_(t))sk.call(t,r)&&sy(e,r,t[r]);return e};function sj(e,t,r){if(t===r)return e;let n=e.slice();return n.splice(r,0,n.splice(t,1)[0]),n}function sz(e){return"initialIndex"in e&&"number"==typeof e.initialIndex&&"index"in e&&"number"==typeof e.index}var sS="__default__";function sI(e,t,r,n){r.insertAdjacentElement(n<t?"afterend":"beforebegin",e)}function sE(e,t){return e.index-t.index}function sC(e){return Array.from(e).sort(sE)}var sP=[sm,class extends oM{constructor(e){super(e);let t=()=>{let t=new Map;for(let r of e.registry.droppables)if(r instanceof sO){let{sortable:e}=r,{group:n}=e,o=t.get(n);o||(o=new Set,t.set(n,o)),o.add(e)}for(let[e,r]of t)t.set(e,new Set(sC(r)));return t},r=[e.monitor.addEventListener("dragover",(e,r)=>{if(this.disabled)return;let{dragOperation:n}=r,{source:o,target:i}=n;if(!sf(o)||!sf(i)||o.sortable===i.sortable)return;let a=t(),l=o.sortable.group===i.sortable.group,s=a.get(o.sortable.group),c=l?s:a.get(i.sortable.group);s&&c&&queueMicrotask(()=>{e.defaultPrevented||r.renderer.rendering.then(()=>{var n,u,d;let p=t();for(let[e,t]of a.entries())for(let[r,o]of Array.from(t).entries())if(o.index!==r||o.group!==e||!(null==(n=p.get(e))?void 0:n.has(o)))return;let h=o.sortable.element,f=i.sortable.element;if(!f||!h||!l&&i.id===o.sortable.group)return;let m=sC(s),g=l?m:sC(c),v=null!=(u=o.sortable.group)?u:sS,b=null!=(d=i.sortable.group)?d:sS,_={[v]:m,[b]:g},x=function(e,t,r){var n,o,i;let a,l,{source:s,target:c,canceled:u}=t.operation;if(!s||!c||u)return"preventDefault"in t&&t.preventDefault(),e;let d=(e,t)=>e===t||"object"==typeof e&&"id"in e&&e.id===t;if(Array.isArray(e)){let n=e.findIndex(e=>d(e,s.id)),o=e.findIndex(e=>d(e,c.id));if(-1===n||-1===o){if(sz(s)){let n=s.initialIndex,o=s.index;return n===o||n<0||n>=e.length?("preventDefault"in t&&t.preventDefault(),e):r(e,n,o)}return e}if(!u&&"index"in s&&"number"==typeof s.index){let t=s.index;if(t!==n)return r(e,n,t)}return r(e,n,o)}let p=Object.entries(e),h=-1,f=-1;for(let[e,t]of p)if(-1===h&&-1!==(h=t.findIndex(e=>d(e,s.id)))&&(a=e),-1===f&&-1!==(f=t.findIndex(e=>d(e,c.id)))&&(l=e),-1!==h&&-1!==f)break;if(-1===h&&sz(s)){let n=s.initialGroup,o=s.initialIndex,i=s.group,a=s.index;if(null==n||null==i||!(n in e)||!(i in e)||n===i&&o===a)return"preventDefault"in t&&t.preventDefault(),e;if(n===i)return sv(sw({},e),sb({[n]:r(e[n],o,a)}));let l=e[n][o];return sv(sw({},e),sb({[n]:[...e[n].slice(0,o),...e[n].slice(o+1)],[i]:[...e[i].slice(0,a),l,...e[i].slice(a)]}))}if(!s.manager)return e;let{dragOperation:m}=s.manager,g=null!=(o=null==(n=m.shape)?void 0:n.current.center)?o:m.position.current;if(null==l&&c.id in e){let t=c.shape&&g.y>c.shape.center.y?e[c.id].length:0;l=c.id,f=t}if(null==a||null==l||a===l&&h===f){if(null!=a&&a===l&&h===f&&sz(s)){let t=null!=s.group&&s.group!==a,n=s.index!==h;if(t||n){let t=null!=(i=s.group)?i:a;if(t in e){if(a===t)return sv(sw({},e),sb({[a]:r(e[a],h,s.index)}));let n=e[a][h];return sv(sw({},e),sb({[a]:[...e[a].slice(0,h),...e[a].slice(h+1)],[t]:[...e[t].slice(0,s.index),n,...e[t].slice(s.index)]}))}}}return"preventDefault"in t&&t.preventDefault(),e}if(a===l)return sv(sw({},e),sb({[a]:r(e[a],h,f)}));let v=+!!(c.shape&&Math.round(g.y)>Math.round(c.shape.center.y)),b=e[a][h];return sv(sw({},e),sb({[a]:[...e[a].slice(0,h),...e[a].slice(h+1)],[l]:[...e[l].slice(0,f+v),b,...e[l].slice(f+v)]}))}(_,e,sj);if(_===x)return;let k=x[b].indexOf(o.sortable),y=x[b].indexOf(i.sortable);r.collisionObserver.disable(),sI(h,k,f,y),rZ(()=>{for(let[e,t]of x[v].entries())t.index=e;if(!l)for(let[e,t]of x[b].entries())t.group=i.sortable.group,t.index=e}),r.actions.setDropTarget(o.id).then(()=>r.collisionObserver.enable())})})}),e.monitor.addEventListener("dragend",(e,r)=>{if(!e.canceled)return;let{dragOperation:n}=r,{source:o}=n;sf(o)&&(o.sortable.initialIndex!==o.sortable.index||o.sortable.initialGroup!==o.sortable.group)&&queueMicrotask(()=>{let e=t(),n=e.get(o.sortable.initialGroup);n&&r.renderer.rendering.then(()=>{for(let[t,r]of e.entries())for(let[e,n]of Array.from(r).entries())if(n.index!==e||n.group!==t)return;let t=sC(n),r=o.sortable.element,i=t[o.sortable.initialIndex],a=null==i?void 0:i.element;i&&a&&r&&(sI(r,i.index,a,o.index),rZ(()=>{for(let[t,r]of e.entries())for(let e of Array.from(r).values())e.index=e.initialIndex,e.group=e.initialGroup}))})})})];this.destroy=()=>{for(let e of r)e()}}}],sT={duration:250,easing:"cubic-bezier(0.25, 1, 0.5, 1)",idle:!1},sA=new n$;rc=[nA],rs=[nA];var sM=class{constructor(e,t){sp(this,rd,ss(ru,8,this)),ss(ru,11,this),sp(this,rp),sp(this,rh),sp(this,rf,ss(ru,12,this)),ss(ru,15,this),sp(this,rm),this.register=()=>(rZ(()=>{var e,t;null==(e=this.manager)||e.registry.register(this.droppable),null==(t=this.manager)||t.registry.register(this.draggable)}),()=>this.unregister()),this.unregister=()=>{rZ(()=>{var e,t;null==(e=this.manager)||e.registry.unregister(this.droppable),null==(t=this.manager)||t.registry.unregister(this.draggable)})},this.destroy=()=>{rZ(()=>{this.droppable.destroy(),this.draggable.destroy()})};var{effects:r=()=>[],group:n,index:o,sensors:i,type:a,transition:l=sT,plugins:s}=e,c=((e,t)=>{var r={};for(var n in e)se.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&l9)for(var n of l9(e))0>t.indexOf(n)&&st.call(e,n)&&(r[n]=e[n]);return r})(e,["effects","group","index","sensors","type","transition","plugins"]);let u=o6(s,sP);this.droppable=new sO(c,t,this),this.draggable=new sN(l5(so({},c),l7({plugins:u,effects:()=>[()=>{var e,t,r;let n=null==(e=this.manager)?void 0:e.dragOperation.status;(null==n?void 0:n.initializing)&&this.id===(null==(r=null==(t=this.manager)?void 0:t.dragOperation.source)?void 0:r.id)&&sA.clear(this.manager),(null==n?void 0:n.dragging)&&sA.set(this.manager,this.id,rK(()=>({initialIndex:this.index,initialGroup:this.group})))},()=>{let{index:e,group:t,manager:r}=this,n=sd(this,rh),o=sd(this,rp);(e!==n||t!==o)&&(sh(this,rh,e),sh(this,rp,t),this.animate())},()=>{var e,t;let{target:r}=this,{isDragSource:n}=this.draggable;"move"===(null!=(t=null==(e=this.draggable.pluginConfig(aJ))?void 0:e.feedback)?t:"default")&&n&&(this.droppable.disabled=!r)},...r()],type:a,sensors:i})),t,this),sh(this,rm,c.element),this.manager=t,this.index=o,sh(this,rh,o),this.group=n,sh(this,rp,n),this.type=a,this.transition=l}get initialIndex(){var e,t;return null!=(t=null==(e=sA.get(this.manager,this.id))?void 0:e.initialIndex)?t:this.index}get initialGroup(){var e,t;return null!=(t=null==(e=sA.get(this.manager,this.id))?void 0:e.initialGroup)?t:this.group}animate(){rK(()=>{let{manager:e,transition:t}=this,{shape:r}=this.droppable;if(!e)return;let{idle:n}=e.dragOperation.status;r&&t&&(!n||t.idle)&&e.renderer.rendering.then(()=>{let{element:n}=this;if(!n)return;for(let e of n.getAnimations())"transitionProperty"in e&&("transform"===e.transitionProperty||"translate"===e.transitionProperty||"scale"===e.transitionProperty)&&e.cancel();let o=this.refreshShape();if(!o)return;let i={x:r.boundingRectangle.left-o.boundingRectangle.left,y:r.boundingRectangle.top-o.boundingRectangle.top},{translate:a}=iV(n),l=i3(n,a,!1),s=i3(n,a);if(i.x||i.y){let r=iy(ic(n))?l5(so({},t),l7({duration:0})):t;i4({element:n,keyframes:{translate:[`${l.x+i.x}px ${l.y+i.y}px ${l.z}`,`${s.x}px ${s.y}px ${s.z}`]},options:r}).then(()=>{e.dragOperation.status.dragging||(this.droppable.shape=void 0)})}})})}get manager(){return this.draggable.manager}set manager(e){rZ(()=>{this.draggable.manager=e,this.droppable.manager=e})}set element(e){rZ(()=>{let t=sd(this,rm),r=this.droppable.element,n=this.draggable.element;r&&r!==t||(this.droppable.element=e),n&&n!==t||(this.draggable.element=e),sh(this,rm,e)})}get element(){var e,t;let r=sd(this,rm);if(r)return null!=(t=null!=(e=iz.get(r))?e:r)?t:this.droppable.element}set target(e){this.droppable.element=e}get target(){return this.droppable.element}set source(e){this.draggable.element=e}get source(){return this.draggable.element}get disabled(){return this.draggable.disabled&&this.droppable.disabled}set plugins(e){this.draggable.plugins=o6(e,sP)}set disabled(e){rZ(()=>{this.droppable.disabled=e,this.draggable.disabled=e})}set data(e){rZ(()=>{this.droppable.data=e,this.draggable.data=e})}set handle(e){this.draggable.handle=e}set id(e){this.droppable.id=e,this.draggable.id=e}get id(){return this.droppable.id}set sensors(e){this.draggable.sensors=e}set modifiers(e){this.draggable.modifiers=e}set collisionPriority(e){this.droppable.collisionPriority=e}set collisionDetector(e){this.droppable.collisionDetector=null!=e?e:ai}set alignment(e){this.draggable.alignment=e}get alignment(){return this.draggable.alignment}set type(e){rZ(()=>{this.droppable.type=e,this.draggable.type=e})}get type(){return this.draggable.type}set accept(e){this.droppable.accept=e}get accept(){return this.droppable.accept}get isDropTarget(){return this.droppable.isDropTarget}get isDragSource(){return this.draggable.isDragSource}get isDragging(){return this.draggable.isDragging}get isDropping(){return this.draggable.isDropping}get status(){return this.draggable.status}refreshShape(){return this.droppable.refreshShape()}accepts(e){return this.droppable.accepts(e)}};ru=[,,,l3(null)],rd=new WeakMap,rp=new WeakMap,rh=new WeakMap,rf=new WeakMap,rm=new WeakMap,sc(ru,4,"index",rc,sM,rd),sc(ru,4,"group",rs,sM,rf),g=ru,sn(sM,(i="metadata",(a=Symbol[i])?a:Symbol.for("Symbol."+i)),g[3]);var sN=class extends lv{constructor(e,t,r){super(e,t),this.sortable=r}get index(){return this.sortable.index}get initialIndex(){return this.sortable.initialIndex}get group(){return this.sortable.group}get initialGroup(){return this.sortable.initialGroup}},sO=class extends lb{constructor(e,t,r){super(e,t),this.sortable=r}get index(){return this.sortable.index}get group(){return this.sortable.group}},sD=Object.defineProperty,sL=Object.defineProperties,s$=Object.getOwnPropertyDescriptors,sB=Object.getOwnPropertySymbols,sR=Object.prototype.hasOwnProperty,sF=Object.prototype.propertyIsEnumerable,sq=(e,t,r)=>t in e?sD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,sW=(e,t)=>{for(var r in t||(t={}))sR.call(t,r)&&sq(e,r,t[r]);if(sB)for(var r of sB(t))sF.call(t,r)&&sq(e,r,t[r]);return e};function sH(e){let{accept:t,collisionDetector:r,collisionPriority:n,id:o,data:i,element:a,handle:l,index:s,group:c,disabled:u,modifiers:d,sensors:p,target:h,type:f,plugins:m}=e,g=sW(sW({},sT),e.transition),v=lF(t=>new sM(sL(sW({},e),s$({transition:g,register:!1,handle:lx(l),element:lx(a),target:lx(h)})),t)),b=ly(v,sV);return lz(o,()=>v.id=o),lk(()=>{rZ(()=>{v.group=c,v.index=s})},[v,c,s]),lz(f,()=>v.type=f),lz(t,()=>v.accept=t,void 0,nT),lz(i,()=>i&&(v.data=i)),lz(s,()=>{var e;(null==(e=v.manager)?void 0:e.dragOperation.status.idle)&&(null==g?void 0:g.idle)&&v.refreshShape()},lw),lS(l,e=>v.handle=e),lS(a,e=>v.element=e),lS(h,e=>v.target=e),lz(u,()=>v.disabled=!0===u),lz(p,()=>v.sensors=p),lz(r,()=>v.collisionDetector=r),lz(n,()=>v.collisionPriority=n),lz(m,()=>v.plugins=m,void 0,nT),lz(g,()=>v.transition=g,void 0,nT),lz(d,()=>v.modifiers=d,void 0,nT),lz(e.alignment,()=>v.alignment=e.alignment),{sortable:b,get isDragging(){return b.isDragging},get isDropping(){return b.isDropping},get isDragSource(){return b.isDragSource},get isDropTarget(){return b.isDropTarget},handleRef:(0,rv.useCallback)(e=>{v.handle=null!=e?e:void 0},[v]),ref:(0,rv.useCallback)(e=>{var t,r;(e||null==(t=v.element)||!t.isConnected||(null==(r=v.manager)?void 0:r.dragOperation.status.idle))&&(v.element=null!=e?e:void 0)},[v]),sourceRef:(0,rv.useCallback)(e=>{var t,r;(e||null==(t=v.source)||!t.isConnected||(null==(r=v.manager)?void 0:r.dragOperation.status.idle))&&(v.source=null!=e?e:void 0)},[v]),targetRef:(0,rv.useCallback)(e=>{var t,r;(e||null==(t=v.target)||!t.isConnected||(null==(r=v.manager)?void 0:r.dragOperation.status.idle))&&(v.target=null!=e?e:void 0)},[v])}}function sV(e,t,r){return"isDragSource"===e&&!r&&!!t}var sX=e.i(68673),sU=e.i(81697);function sZ(e,t,r){let n,o=r.initialDeps??[],i=!0;function a(){let a=e();return(a.length!==o.length||a.some((e,t)=>o[t]!==e))&&(o=a,n=t(...a),(null==r?void 0:r.onChange)&&!(i&&r.skipInitialOnChange)&&r.onChange(n),i=!1),n}return a.updateDeps=e=>{o=e},a}function sG(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}let sY=(e,t)=>1.01>Math.abs(e-t),sK=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},sJ={capture:!0,passive:!0};class sQ{constructor(e){this.host=e,this._touch=null,this.inMotion=()=>null!==this._touch&&"lateFling"!==this._touch.phase,this.dragging=()=>{var e;return(null==(e=this._touch)?void 0:e.phase)==="down"&&this._touch.moved},this.tail=()=>{var e;return(null==(e=this._touch)?void 0:e.phase)==="tail"?this._touch.moved?"fling":"tap":null},this.onScroll=({isScrolling:e,ownReadBack:t,moved:r,external:n})=>{var o,i,a;return e&&(null==(o=this._touch)?void 0:o.phase)==="tail"?this._openTail(this._touch.moved||!t,!1):(null==(i=this._touch)?void 0:i.phase)==="lateFling"&&(this.host.now()>this._touch.until?this._touch=null:n&&e&&r&&this._openTail(!0,!1)),!t&&!!e&&!!r&&(null==(a=this._touch)?void 0:a.phase)==="down"&&(this._touch.moved=!0,!0)},this.touchStart=()=>{this.end(),this._touch={phase:"down",moved:!1}},this.touchEnd=()=>{var e;let t=(null==(e=this._touch)?void 0:e.phase)==="down"&&this._touch.moved;this.end(),this._openTail(t,t)},this.end=()=>{var e;let t=this.host.getWindow();(null==(e=this._touch)?void 0:e.phase)==="tail"&&null!=t&&t.clearTimeout(this._touch.timerId),this._touch=null},this.listen=e=>{let t=()=>this.touchStart(),r=()=>this.touchEnd();return e.addEventListener("touchstart",t,sJ),e.addEventListener("touchend",r,sJ),e.addEventListener("touchcancel",r,sJ),()=>{e.removeEventListener("touchstart",t,sJ),e.removeEventListener("touchend",r,sJ),e.removeEventListener("touchcancel",r,sJ),this.end()}},this._openTail=(e,t)=>{let r=this.host.getWindow();if(!sK()||null==r)return;this.end();let n={phase:"tail",moved:e,awaitingFling:t,timerId:r.setTimeout(()=>{this.host.tailStillMoving()?this._openTail(n.moved,n.awaitingFling):(this._touch=n.awaitingFling?{phase:"lateFling",until:this.host.now()+1e3}:null,this.host.onTailClosed())},150)};this._touch=n}}get touch(){return this._touch}}let s0=e=>{let{clientWidth:t,clientHeight:r}=e;return{width:t,height:r}},s1=e=>{let t=new Set;return{schedule:r=>{let n=e.requestAnimationFrame(()=>{t.delete(n),r()});t.add(n)},cancel:()=>{t.forEach(t=>e.cancelAnimationFrame(t)),t.clear()}}},s2=e=>e,s4=e=>{let t=e.overscan*Math.max(e.lanes??1,1),r=Math.max(e.startIndex-t,0),n=Math.min(e.endIndex+t,e.count-1)-r+1,o=Array(n);for(let e=0;e<n;e++)o[e]=r+e;return o},s3=(e,t)=>{let r=e.scrollElement;if(!r)return;let n=e.targetWindow;if(!n)return;let o=e=>{let{width:r,height:n}=e;t({width:Math.round(r),height:Math.round(n)})};if(o(s0(r)),!n.ResizeObserver)return()=>{};let i=s1(n),a=new n.ResizeObserver(()=>{let t=()=>{o(s0(r))};e.options.useAnimationFrameWithResizeObserver?i.schedule(t):t()});return a.observe(r,{box:"content-box"}),()=>{a.unobserve(r),i.cancel()}},s6={passive:!0},s5="u"<typeof window||"onscrollend"in window,s8=(e,t,r)=>{var n,o;let i,a=e.scrollElement;if(!a)return;let l=e.targetWindow;if(!l)return;let s=e.options.useScrollendEvent&&s5,c=0,u=s?null:(n=()=>t(r(a),!1),o=e.options.isScrollingResetDelay,Object.assign(function(...e){l.clearTimeout(i),i=l.setTimeout(()=>n.apply(this,e),o)},{cancel:()=>{l.clearTimeout(i)}})),d=e=>()=>{c=r(a),null==u||u(),t(c,e)},p=d(!0),h=d(!1);return a.addEventListener("scroll",p,s6),s&&a.addEventListener("scrollend",h,s6),()=>{a.removeEventListener("scroll",p),s&&a.removeEventListener("scrollend",h),null==u||u.cancel()}},s7=(e,t)=>s8(e,t,t=>{let{horizontal:r,isRtl:n}=e.options;return r?t.scrollLeft*(n&&-1||1):t.scrollTop}),s9=(e,t,r)=>{if(r.options.useCachedMeasurements){let t=r.indexFromElement(e),n=r.options.getItemKey(t);return r.itemSizeCache.get(n)??r.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[r.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=r.indexFromElement(e),n=r.options.getItemKey(t),o=r.itemSizeCache.get(n);if(void 0!==o)return o}return e[r.options.horizontal?"offsetWidth":"offsetHeight"]},ce=(e,{adjustments:t=0,behavior:r},n)=>{var o,i;null==(i=null==(o=n.scrollElement)?void 0:o.scrollTo)||i.call(o,{[n.options.horizontal?"left":"top"]:e+t,behavior:r})},ct=(e,t)=>"smooth"===e?t?"smoothLanded":"smooth":"instant",cr=e=>(null==e?void 0:e.phase)==="smooth"||(null==e?void 0:e.phase)==="smoothLanded";class cn{constructor(e){let t,r,n,o;this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this._holdOffset=0,this._reportedOverscroll=!1,this._iosGesture=new sQ({getWindow:()=>this.targetWindow,now:()=>this.now(),tailStillMoving:()=>{let e=this.scrollState;if((null==e?void 0:e.phase)!=="queued"||null!==this.pendingWrite)return!1;let t=this._readElementOffset();return!(null===t||null===this._lastElementOffset||1>Math.abs(t-this._lastElementOffset))&&(this._lastElementOffset=t,e.samples=[...e.samples??[],{t:this.now(),offset:t}],!0)},onTailClosed:()=>{let e=this.scrollState;(null==e?void 0:e.phase)==="queued"&&function(e){let t=e[e.length-1];if(void 0===t)return!1;let r=e.length-2;for(;r>=0&&t.t-e[r].t<40;)r--;if(r<0)return!1;let n=e[r];return Math.abs(t.offset-n.offset)/(t.t-n.t)>=.05}(e.samples??[])&&(this.scrollState=null),this._flushHoldIfReady(!0),this._writeAwaitingCommand()}}),this._lastElementOffset=null,this.pendingWrite=null,this._clampedAdjustment=null,this.elementsCache=new Map,this._resizeBatch=null,this.now=()=>{var e,t,r;return(null==(r=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:r.call(t))??Date.now()},this.observer=(t=null,r=null,n=()=>{if(t)return t;let e=this.targetWindow;if(!e||!e.ResizeObserver)return null;let n=r=s1(e);return t=new e.ResizeObserver(e=>{let t=()=>{let t={sync:!1};this._resizeBatch=t;try{e.forEach(o)}finally{this._resizeBatch=null,t.notify&&(this.notify(t.sync),this._noteClampMax(),this._flushHoldIfReady(!0),this._retryClampedAdjustment())}};this.options.useAnimationFrameWithResizeObserver?n.schedule(t):t()})},o=e=>{let t=e.target,r=this.indexFromElement(t);if(!t.isConnected){for(let[e,r]of(this.observer.unobserve(t),this.elementsCache))if(r===t){this.elementsCache.delete(e);break}return}this.isIndexInRange(r)&&this.shouldMeasureDuringScroll(r)&&this.resizeItem(r,this.options.measureElement(t,e,this))},{disconnect:()=>{var e;null==(e=n())||e.disconnect(),null==r||r.cancel(),t=null,r=null},observe:e=>{var t;return null==(t=n())?void 0:t.observe(e,{box:"border-box"})},unobserve:e=>{var t;return null==(t=n())?void 0:t.unobserve(e)}}),this.range=null,this.setOptions=e=>{var t;let r={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:s2,rangeExtractor:s4,onChange:()=>{},measureElement:s9,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let n=e[t];void 0!==n&&(r[t]=n)}let n=this.options,o=null,i=null,a=!1;if(void 0!==n&&n.enabled&&r.enabled&&"end"===r.anchorTo&&null!==this.scrollElement){let e=n.count,l=r.count,s=this.getMeasurements(),c=(null==(t=this._singleLaneMeasurements)?void 0:t.items)??s,u=e=>{var t;return"object"==typeof(t=c[e])?t.key:t},d=e>0?u(0):null,p=e>0?u(e-1):null;if(l!==e||e>0&&l>0&&(r.getItemKey(0)!==d||r.getItemKey(l-1)!==p)){a=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??s[0]:null;t&&(o=[t.key,this.getScrollOffset()-t.start]);let c=!0===r.followOnAppend?"auto":r.followOnAppend||null;c&&l>0&&this.isAtEnd(n.scrollEndThreshold)&&(0===e||r.getItemKey(l-1)!==p)&&(l>e||function(e,t,r,n){if(0===t)return!1;let o=n(0),i=new Set,a=0;for(;a<e;){let e=r(a);if(e===o)break;i.add(e),a++}let l=e-a;if(0===l||l>=t)return!1;for(let e=0;e<l;e++)if(n(e)!==r(a+e))return!1;for(let e=l;e<t;e++)if(i.has(n(e)))return!1;return!0}(e,l,u,r.getItemKey))&&(i=c)}}this.options=r,a&&(this.pendingMin=0,this.itemSizeCacheVersion++);let l=null;if(o&&null!==this.scrollOffset&&!this._awaitingCommandReadBack()){let[e,t]=o,r=this.getMeasurements(),{count:n,getItemKey:a}=this.options,s=0;for(;s<n&&a(s)!==e;)s++;if(s<n){let e=r[s];if(e){let r=Math.max(0,e.start+t);i||r===this.scrollOffset||(l=r-this.scrollOffset,this.scrollOffset=r)}}}i?this.pendingScrollAnchor={kind:"follow",behavior:i}:null!==l&&(this._canWriteScroll()?this.pendingScrollAnchor={kind:"anchor",delta:l}:(this._holdOffset+=l,this._followOffsetTarget(l)))},this.notify=e=>{var t,r;null==(r=(t=this.options).onChange)||r.call(t,this,e)},this.maybeNotify=sZ(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{var e;this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,null==(e=this._momentumStop)||e.restore(),this._momentumStop=null,this.isScrolling=!1,this.scrollDirection=null,this._holdOffset=0,this._reportedOverscroll=!1,this._clampedAdjustment=null,this.pendingWrite=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{var r,n,o,i;let a=t?this._elementMaxScrollOffset():null,l=this._reportedOverscroll;this._reportedOverscroll=e<0||null!==a&&e>a+1;let s=e;this._lastElementOffset=s,e=this._toLayoutOffset(e);let c=this._classifyScrollEvent(e,t,a);if("spurious"===c)return;"readBack"===c?e=this.pendingWrite.target:"clampedReadBack"===c&&(null==(r=this.scrollState)?void 0:r.index)!=null&&e<this.getMaxScrollOffset()-1.5?this.scrollState.lastTargetOffset=e:function({kind:e,offset:t,command:r,target:n}){let o;return"spurious"!==e&&"readBack"!==e&&"clampedReadBack"!==e&&(null==r?void 0:r.index)!=null&&"queued"!==r.phase&&"smooth"!==(o=r.phase)&&"smoothFinishing"!==o&&!sY(t,r.lastTargetOffset)&&!sY(t,n())&&"clampedEcho"!==e}({kind:c,offset:e,command:this.scrollState,target:()=>this.getScrollStateTarget(this.scrollState)})&&(this.scrollState=null),this.pendingWrite=null,null!==this._clampedAdjustment&&Math.abs(e-this._clampedAdjustment.maxAtWrite)>=1.5&&(this._clampedAdjustment=null);let u=this.getScrollOffset(),d=this.scrollDirection;this.scrollDirection=t?u===e?this.scrollDirection:u<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t;let p=this.scrollState;if((null==p?void 0:p.phase)==="queued"&&"external"===c&&t)if(l||this._reportedOverscroll)p.samples=[];else{let e=this.now();p.samples=[...(p.samples??[]).filter(t=>e-t.t<=200),{t:e,offset:s}],(null!==d&&this.scrollDirection!==d||function(e){let t=e[e.length-1];if(void 0===t)return!1;let r=e.length-2;for(;r>=0&&t.t-e[r].t<40;)r--;if(r<0)return!1;let n=e[r],o=r-1;for(;o>=0&&n.t-e[o].t<40;)o--;if(o<0)return!1;let i=e[o],a=(t.offset-n.offset)/(t.t-n.t),l=(n.offset-i.offset)/(n.t-i.t);return a*l>=0&&Math.abs(a)>=2*Math.abs(l)&&Math.abs(a)-Math.abs(l)>=.8}(p.samples))&&(this.scrollState=null)}this._iosGesture.onScroll({isScrolling:t,ownReadBack:"readBack"===c,moved:e!==u,external:"external"===c&&(null==(n=this.scrollState)?void 0:n.phase)!=="smooth"&&(null==(o=this.scrollState)?void 0:o.phase)!=="smoothFinishing"})&&(null==(i=this.scrollState)?void 0:i.phase)==="queued"&&(this.scrollState=null),this._flushHoldIfReady(!0),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement&&this.unsubs.push(this._iosGesture.listen(this.scrollElement)),this._scrollToOffset(this.getScrollOffset())}this._noteClampMax();let r=this.pendingScrollAnchor;this.pendingScrollAnchor=null,r&&this.scrollElement&&this.options.enabled&&("anchor"===r.kind?this._canWriteScroll()?cr(this.scrollState)&&!sY(this.getScrollOffset()-r.delta,this.scrollState.lastTargetOffset)||(this._followOffsetTarget(r.delta),this._scrollToOffset(this.getScrollOffset())):(this._holdOffset+=r.delta,this._followOffsetTarget(r.delta),this.notify(!1)):this.scrollToEnd({behavior:r.behavior})),this._flushHoldIfReady(!1),this._retryClampedAdjustment()},this._classifyScrollEvent=(e,t,r)=>{var n;return function({offset:e,isScrolling:t,elementMax:r,holdOffset:n,scrollOffset:o,pendingWrite:i,clampedMaxAtWrite:a}){var l;return t&&null===i&&e===o?"spurious":null!==i&&1.5>Math.abs(e-i.target)?"readBack":null!==i&&!i.smooth&&null!==r&&i.target>r+n+.5&&1.5>Math.abs(e-(r+n))||null!==i&&!i.smooth&&(null==(l=i.lowMaxes)?void 0:l.some(t=>1.5>Math.abs(e-t)))?"clampedReadBack":null!==a&&1.5>Math.abs(e-a)?"clampedEcho":"external"}({offset:e,isScrolling:t,elementMax:r,holdOffset:this._holdOffset,scrollOffset:this.scrollOffset,pendingWrite:this.pendingWrite,clampedMaxAtWrite:(null==(n=this._clampedAdjustment)?void 0:n.maxAtWrite)??null})},this._retryClampedAdjustment=()=>{if(null===this._clampedAdjustment||!this.scrollElement||!this.options.enabled)return;let{target:e,maxAtWrite:t}=this._clampedAdjustment,r=this.getMaxScrollOffset();r>t+.5&&(this._clampedAdjustment=e>r+.5?{target:e,maxAtWrite:r}:null,this._scrollToOffset(e))},this._writeAwaitingCommand=()=>{let e=this.scrollState;if(null===e||"queued"!==e.phase)return;let{behavior:t}=e;this.getMeasurements();let r=this.getScrollStateTarget(e);e.lastTargetOffset=r,this._clampedAdjustment=null,e.phase=ct(t,null!=e.index&&sY(r,this.getScrollOffset())),this._scrollToOffset(r,{behavior:t}),this.scheduleScrollReconcile()},this._readElementOffset=()=>{let e=this.scrollElement;if(null==e)return null;let{horizontal:t,isRtl:r}=this.options;return"number"==typeof e.scrollTop?t?e.scrollLeft*(r&&-1||1):e.scrollTop:"number"==typeof e.scrollY?t?e.scrollX:e.scrollY:null},this._canWriteScroll=()=>!(sK()&&this._iosGesture.inMotion())&&!this._reportedOverscroll,this._flushHoldIfReady=e=>{var t;if(0===this._holdOffset||!this.scrollElement||!this.options.enabled||!this._canWriteScroll()||(null==(t=this.scrollState)?void 0:t.phase)==="smooth")return;this._holdOffset=0,null!==this.scrollOffset&&this.scrollOffset<0&&(this.scrollOffset=0),this.notify(e);let r=this.getCommandWrittenOffset()??this.getScrollOffset();this._clampedAdjustment=this._clampedBy(r),this._scrollToOffset(r)},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=sZ(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(e,t,r,n,o,i,a,l)=>(void 0!==this.prevLanes&&this.prevLanes!==i&&(this.lanesChangedFlag=!0),this.prevLanes=i,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:r,getItemKey:n,enabled:o,lanes:i,laneAssignmentMode:a,gap:l}),{key:!1}),this.isIndexInRange=e=>e>=0&&e<this.options.count,this.getMeasurements=sZ(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:r,getItemKey:n,enabled:o,lanes:i,laneAssignmentMode:a,gap:l},s)=>{var c,u;let d=this.itemSizeCache;if(!o)return this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let p=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===i){let o,i,a=2*e,s=null==(c=this._singleLaneMeasurements)?void 0:c.flat;if(!s||s.length<a){let e=new Float64Array(a);s&&p>0&&e.set(s.subarray(0,2*p)),s=e}let h=0===p?Array(e):this._singleLaneMeasurements.items.slice();if(0===p)o=t+r;else{let e=p-1;o=s[2*e]+s[2*e+1]+l}for(let t=p;t<e;t++){let e=n(t);h[t]=e;let r=d.get(e),i="number"==typeof r?r:this.options.estimateSize(t);s[2*t]=o,s[2*t+1]=i,o+=i+l}this._singleLaneMeasurements={flat:s,items:h};let f=(u=s,i=h.length,new Proxy(h,{get(e,t,r){if("string"==typeof t){let r=t.charCodeAt(0);if(r>=48&&r<=57){let r=+t;if(Number.isInteger(r)&&r>=0&&r<i){let t=e[r];if("object"!=typeof t){let n=u[2*r];t=e[r]={index:r,key:t,start:n,size:u[2*r+1],end:n+u[2*r+1],lane:0}}return t}}if("length"===t)return i}return Reflect.get(e,t,r)}}));return this.measurementsCache=f,f}let h=this.measurementsCache.slice(0,p),f=Array(i).fill(void 0),m=new Float64Array(i),g=0;for(let e=0;e<p;e++){let t=h[e];t&&(void 0===f[t.lane]&&g++,f[t.lane]=e,m[t.lane]=t.end)}for(let o=p;o<e;o++){let e,s,c=n(o),u=this.laneAssignments.get(o),p="estimate"===a||d.has(c);if(void 0!==u&&this.options.lanes>1){let n=f[e=u],o=void 0!==n?h[n]:void 0;s=o?o.end+l:t+r}else if(g===i){let t=0,r=m[0],n=f[0];for(let e=1;e<i;e++){let o=m[e];(o<r||o===r&&f[e]<n)&&(t=e,r=o,n=f[e])}e=t,s=r+l,p&&this.laneAssignments.set(o,e)}else e=o%this.options.lanes,s=t+r,p&&this.laneAssignments.set(o,e);let v=d.get(c),b="number"==typeof v?v:this.options.estimateSize(o),_=s+b;h[o]={index:o,start:s,size:b,end:_,key:c,lane:e},void 0===f[e]&&g++,f[e]=o,m[e]=_}return this.measurementsCache=h,h},{key:!1,debug:()=>this.options.debug}),this.calculateRange=sZ(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,r,n)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,r,n,o){let i=e.length-1;if(e.length<=n)return{startIndex:0,endIndex:i};if(1===n&&null!==o){let e=function(e,t,r){let n=0;for(;n<=t;){let o=(n+t)/2|0,i=e[2*o];if(i<r)n=o+1;else{if(!(i>r))return o;t=o-1}}return n>0?n-1:0}(o,i,r),n=e,a=r+t;for(;n<i&&o[2*n]+o[2*n+1]<a;)n++;return{startIndex:e,endIndex:n}}let a=co(0,i,t=>e[t].start,r),l=a;if(1===n)for(;l<i&&e[l].end<r+t;)l++;else if(n>1){let o=Array(n).fill(0);for(;l<i&&o.some(e=>e<r+t);){let t=e[l];o[t.lane]=t.end,l++}let s=Array(n).fill(r+t);for(;a>=0&&s.some(e=>e>=r);){let t=e[a];s[t.lane]=t.start,a--}a=Math.max(0,a-a%n),l=Math.min(i,l+(n-1-l%n))}return{startIndex:a,endIndex:l}}(e,t,r,n,1===n&&null!==this._singleLaneMeasurements?this._singleLaneMeasurements.flat:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=sZ(()=>{let e=null,t=null,r=this.calculateRange();return r&&(e=r.startIndex,t=r.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t,this.options.lanes]},(e,t,r,n,o,i)=>null===n||null===o?[]:e({startIndex:n,endIndex:o,overscan:t,count:r,lanes:i}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,r=e.getAttribute(t);return r?parseInt(r,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!cr(this.scrollState))return!0;let r=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==r&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),n=Math.max(0,r-t),o=Math.min(this.options.count-1,r+t);return e>=n&&e<=o}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e);if(!this.isIndexInRange(t))return;let r=this.options.getItemKey(t),n=this.elementsCache.get(r);n!==e&&(n&&this.observer.unobserve(n),this.observer.observe(e),this.elementsCache.set(r,e)),e.isConnected&&(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var r,n,o;let i,a,l;if(!this.isIndexInRange(e))return;(null==(r=this._resizeBatch)?void 0:r.sync)&&this.getMeasurements();let s=null==(n=this._singleLaneMeasurements)?void 0:n.flat;if(1===this.options.lanes&&null!=s)l=this.options.getItemKey(e),a=s[2*e],i=s[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;l=t.key,a=t.start,i=t.size}let c=this.itemSizeCache.get(l)??i,u=t-c;if(0!==u){let r="end"===this.options.anchorTo&&!cr(this.scrollState)&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,n=r?this._getLayoutTotalSize():0,s=this.getScrollOffset(),d=this.itemSizeCache.has(l)?a+c<=s&&"backward"!==this.scrollDirection:a<s,p=!cr(this.scrollState)&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:l,start:a,size:i,end:a+i,lane:0},u,this):d);(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(l,t),this.itemSizeCacheVersion++;let h=!1;if(!this._awaitingCommandReadBack()&&(r?h=this.applyScrollAdjustment(this._getLayoutTotalSize()-n):p&&(h=this.applyScrollAdjustment(u))),this._resizeBatch){this._resizeBatch.notify=!0,(o=this._resizeBatch).sync||(o.sync=h);return}this.notify(h),this._noteClampMax(),this._flushHoldIfReady(!0),this._retryClampedAdjustment()}},this.getVirtualItems=sZ(()=>[this.getVirtualIndexes(),this.getMeasurements(),this._holdOffset],(e,t,r)=>{let n=[];for(let o=0,i=e.length;o<i;o++){let i=t[e[o]];n.push(0===r?i:{...i,start:i.start-r,end:i.end-r})}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{var t;let r=this.getMeasurements();if(0===r.length)return;let n=null==(t=this._singleLaneMeasurements)?void 0:t.flat,o=1===this.options.lanes&&null!=n,i=co(0,r.length-1,o?e=>n[2*e]:e=>sG(r[e]).start,e);return sG(r[i])},this._noteClampMax=()=>{if(!this._awaitingCommandReadBack())return;let e=this._elementMaxScrollOffset();if(null===e)return;let t=this.pendingWrite,r=Math.max(e,0)+this._holdOffset;if(r>=t.target)return;let n=t.lowMaxes??(t.lowMaxes=[]);n[n.length-1]!==r&&n.push(r)},this.getMaxScrollOffset=()=>(this._elementMaxScrollOffset()??0)+this._holdOffset,this._toLayoutOffset=e=>{var t;let r=e+this._holdOffset;return(null==(t=this.pendingScrollAnchor)?void 0:t.kind)==="anchor"&&(r+=this.pendingScrollAnchor.delta),r},this._elementMaxScrollOffset=()=>{let e=this.scrollElement;if(null===e)return null;if("scrollHeight"in e)return this.options.horizontal?e.scrollWidth-e.clientWidth:e.scrollHeight-e.clientHeight;if("document"in e){let t=e.document.documentElement;return this.options.horizontal?t.scrollWidth-e.innerWidth:t.scrollHeight-e.innerHeight}return null},this._momentumStop=null,this._stopMomentum=e=>{let t=this.scrollElement,r=this.targetWindow;if(null===t||null===r)return;let n="document"in t?t.document.scrollingElement:t;if(!(null==n?void 0:n.style))return;if(this._momentumStop){this._momentumStop.done=e;return}let{style:o}=n,i=this.options.horizontal?"overflow-x":"overflow-y",a=o.getPropertyValue(i),l=o.getPropertyPriority(i);o.setProperty(i,"hidden","important");let s={restore:()=>"hidden"===o.getPropertyValue(i)&&"important"===o.getPropertyPriority(i)&&(o.setProperty(i,a,l),!0),done:e};this._momentumStop=s,r.requestAnimationFrame(()=>r.requestAnimationFrame(()=>{this._momentumStop===s&&(this._momentumStop=null,s.restore()&&s.done())}))},this._clampedBy=e=>{let t=this._elementMaxScrollOffset();if(null===t)return null;let r=t+this._holdOffset;return e>r+.5?{target:e,maxAtWrite:r}:null},this.getVirtualDistanceFromEnd=()=>Math.max(this._getLayoutTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,r=0)=>{if(!this.scrollElement)return 0;let n=this.getSize(),o=this.getScrollOffset();return"auto"===t&&(t=e>=o+n?"end":"start"),"center"===t?e+=(r-n)/2:"end"===t&&(e-=n),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getSize(),n=this.getScrollOffset(),o=this.measurementsCache[e];if(!o)return;if("auto"===t)if(o.end>=n+r-this.options.scrollPaddingEnd)t="end";else{if(!(o.start<=n+this.options.scrollPaddingStart))return[n,t];t="start"}if("end"===t&&e===this.options.count-1){let e=this.getMaxScrollOffset();return[Math.max(Math.min(e-this.options.paddingEnd+this.options.scrollPaddingEnd,e),0),t]}let i="end"===t?o.end+this.options.scrollPaddingEnd:o.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(i,t,o.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:r="auto"}={})=>{this._startScroll({index:null,align:t},this.getOffsetForAlignment(e,t),r,"absolute")},this.scrollToIndex=(e,{align:t="auto",behavior:r="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getOffsetForIndex(e,t);if(!n)return;let[o,i]=n;this._startScroll({index:e,align:i},o,r,"absolute")},this.scrollBy=(e,{behavior:t="auto"}={})=>{let r=this.getOffsetForAlignment((this.getCommandWrittenOffset()??this.getScrollOffset())+e,"start");this._startScroll({index:null,align:"start"},r,t,"relative")},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this._startScroll({index:this.options.count-1,align:"end",toEnd:!0},Math.max(this.getMaxScrollOffset(),0),e,"absolute"):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.cancelScroll=()=>{null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null},this.getTotalSize=()=>Math.max(this._getLayoutTotalSize()-this._holdOffset,0),this._getLayoutTotalSize=()=>{var e,t;let r,n=this.getMeasurements();if(0===n.length)r=this.options.paddingStart;else if(1===this.options.lanes){let o=n.length-1,i=null==(e=this._singleLaneMeasurements)?void 0:e.flat;r=null!=i?i[2*o]+i[2*o+1]:(null==(t=n[o])?void 0:t.end)??0}else{let e=Array(this.options.lanes).fill(null),t=n.length-1;for(;t>=0&&e.some(e=>null===e);){let r=n[t];null===e[r.lane]&&(e[r.lane]=r.end),t--}r=Math.max(...e.filter(e=>null!==e))}return Math.max(r-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:r}={})=>{let n={target:e+(t??0),smooth:"smooth"===r};return this.pendingWrite=n,this.options.scrollToFn(e-this._holdOffset,{behavior:r,adjustments:t},this),n},this.getCommandWrittenOffset=()=>null===this.scrollState||null===this.pendingWrite||this.pendingWrite.smooth?null:this.pendingWrite.target,this._awaitingCommandReadBack=()=>{let e=this.getCommandWrittenOffset();return!(sK()&&this._iosGesture.dragging())&&null!==e&&!sY(e,this.getScrollOffset())},this._followOffsetTarget=e=>{null!==this.scrollState&&null==this.scrollState.index&&(this.scrollState.lastTargetOffset+=e)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}get scrollAdjustments(){return 0}applyScrollAdjustment(e,t){if(0===e)return!1;if(this._followOffsetTarget(e),!this._canWriteScroll())return this._holdOffset+=e,null!==this.scrollOffset&&(this.scrollOffset+=e),!0;{let r=this.getScrollOffset();this._clampedAdjustment=this._clampedBy(r+e);let n=this._scrollToOffset(r,{adjustments:e,behavior:t});return null!==this.scrollOffset&&(this.pendingWrite===n&&(this.scrollOffset+=e),this.scrollOffset<0&&(this.scrollOffset=0)),!0}}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}getScrollStateTarget(e){let t=e.toEnd?[Math.max(this.getMaxScrollOffset(),0)]:null!=e.index?this.getOffsetForIndex(e.index,e.align):void 0;return t?t[0]:e.lastTargetOffset}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}if("queued"===this.scrollState.phase)return void this.scheduleScrollReconcile();this.getMeasurements();let e=this.getScrollStateTarget(this.scrollState),t=null==this.scrollState.index?1:this.options.useAnimationFrameWithResizeObserver?3:2,r=e!==this.scrollState.lastTargetOffset;if(!r&&sY(e,this.getScrollOffset())){if("smooth"===this.scrollState.phase?this.scrollState.phase="smoothLanded":"smoothFinishing"===this.scrollState.phase&&(this.scrollState.phase="instant"),this.scrollState.stableFrames++,this.scrollState.stableFrames>=t){this.getScrollOffset()!==e&&this._scrollToOffset(e,{behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,r){let t=this.getSize()||600,r=Math.abs(e-this.getScrollOffset()),n=cr(this.scrollState)&&r>t;this.scrollState.lastTargetOffset=e,n?this.scrollState.phase="smooth":"smooth"===this.scrollState.phase?this.scrollState.phase="smoothFinishing":"smoothLanded"===this.scrollState.phase&&(this.scrollState.phase="instant"),this._scrollToOffset(e,{behavior:n?"smooth":"auto"})}this.scheduleScrollReconcile()}_startScroll(e,t,n,o){let i=this._iosGesture.tail();if("absolute"===o&&null!==i){if("fling"===i&&(void 0!==r?r:r=sK()&&"u">typeof CSS&&"function"==typeof CSS.supports&&CSS.supports("overflow-anchor: auto"))){this._stopMomentum(()=>{let e=this.scrollState;(null==e?void 0:e.phase)!=="queued"||"fling"!==this._iosGesture.tail()||this._reportedOverscroll||(this._iosGesture.end(),this._flushHoldIfReady(!0),this._writeAwaitingCommand())}),this.scrollState={...e,startedAt:this.now(),lastTargetOffset:t,stableFrames:0,phase:"queued",behavior:n,samples:[]},this.scheduleScrollReconcile();return}this._iosGesture.end()}this.scrollState={...e,startedAt:this.now(),lastTargetOffset:t,stableFrames:0,behavior:n,phase:ct(n,null!=e.index&&sY(t,this.getScrollOffset()))},this._scrollToOffset(t,{behavior:n}),this.scheduleScrollReconcile()}}let co=(e,t,r,n)=>{for(;e<=t;){let o=(e+t)/2|0,i=r(o);if(i<n)e=o+1;else{if(!(i>n))return o;t=o-1}}return e>0?e-1:0},ci="u">typeof document?rv.useLayoutEffect:rv.useEffect;function ca(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:r="transform",...n}){let o=rv.useReducer(e=>e+1,0)[1],i=rv.useRef({enabled:t,mode:r,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});i.current.enabled=t,i.current.mode=r;let a=rv.useRef(!1),l=e=>{let t=i.current;if(!t.enabled||!t.container)return;let r=e.getTotalSize();if(r!==t.lastSize){t.lastSize=r;let n=e.options.horizontal?"width":"height";t.container.style[n]=`${r}px`}},s=(e,t,r)=>{let n=i.current,o=!!e.options.horizontal,a=t.start-e.options.scrollMargin;n.lastPositions.get(r)!==a&&(n.lastPositions.set(r,a),"transform"===n.mode?r.style.transform=o?`translate3d(${a}px, 0, 0)`:`translate3d(0, ${a}px, 0)`:r.style[o?"left":"top"]=`${a}px`)},c=e=>{let t=i.current;if(t.enabled&&t.container)for(let t of(l(e),e.getVirtualItems())){let r=e.elementsCache.get(t.key);r&&s(e,t,r)}},u={...n,onChange:(t,r)=>{var l;let s=i.current,u=!0;if(s.enabled){c(t);let e=t.range,r=s.prevRange;(u=!r||r.isScrolling!==t.isScrolling||r.startIndex!==(null==e?void 0:e.startIndex)||r.endIndex!==(null==e?void 0:e.endIndex))&&(s.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}u&&(e&&r&&!a.current?(0,l_.flushSync)(o):o()),null==(l=n.onChange)||l.call(n,t,r)}},[d]=rv.useState(()=>{let e=new cn(u),t=e.measureElement;return e.measureElement=r=>{a.current=!0;try{t(r)}finally{a.current=!1}let n=i.current;if(null!==r&&n.enabled&&n.container){let t=e.measurementsCache[e.indexFromElement(r)];t&&s(e,t,r)}},Object.assign(e,{containerRef:t=>{let r=i.current;r.container=t,r.lastSize=null,null!==t&&c(e)}})});return d.setOptions(u),ci(()=>d._didMount(),[]),ci(()=>(l(d),d._willUpdate())),ci(()=>{c(d)}),d}({observeElementRect:s3,observeElementOffset:s7,scrollToFn:ce,...e})}var cl=e.i(68971);(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var cs=e=>Array.isArray(e)?[...e]:(e=>{if("object"!=typeof e||null===e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||null===t})(e)?(0,rB.X)({},e):{};function cc(e,t,r){let n=t.split("."),o=(0,rB.X)({},e),i=o;for(let e=0;e<n.length;e++){let[t,o]=n[e].replace("]","").split("["),a=e===n.length-1;if(void 0!==o){i[t]=Array.isArray(i[t])?[...i[t]]:[];let e=Number(o);if(a){i[t][e]=r;continue}i[t][e]=cs(i[t][e]),i=i[t][e];continue}if(a){i[t]=r;continue}i[t]=cs(i[t]),i=i[t]}return o}(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var cu=/^(data-.*)$/,cd=(0,ry.f)("Button",{Button:"_Button_oe4qj_1","Button--medium":"_Button--medium_oe4qj_34","Button--large":"_Button--large_oe4qj_62","Button-icon":"_Button-icon_oe4qj_89","Button--primary":"_Button--primary_oe4qj_93","Button--disabled":"_Button--disabled_oe4qj_123","Button--secondary":"_Button--secondary_oe4qj_135","Button--flush":"_Button--flush_oe4qj_171","Button--fullWidth":"_Button--fullWidth_oe4qj_179","Button-spinner":"_Button-spinner_oe4qj_184"}),cp=e=>{var{children:t,href:r,onClick:n,variant:o="primary",type:i,disabled:a,tabIndex:l,newTab:s,fullWidth:c,icon:u,size:d="medium",loading:p=!1}=e,h=(0,rB.H)(e,["children","href","onClick","variant","type","disabled","tabIndex","newTab","fullWidth","icon","size","loading"]);let[f,m]=(0,rv.useState)(p);(0,rv.useEffect)(()=>m(p),[p]);let g=(e=>{let t={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&cu.test(r)&&(t[r]=e[r]);return t})(h);return(0,rR.jsxs)(r?"a":i?"button":"span",(0,rB.s)((0,rB.X)({className:cd({primary:"primary"===o,secondary:"secondary"===o,disabled:a,fullWidth:c,[d]:!0}),onClick:e=>{n&&(m(!0),Promise.resolve(n(e)).then(()=>{m(!1)}))},type:i,disabled:a||f,tabIndex:l,target:s?"_blank":void 0,rel:s?"noreferrer":void 0,href:r},g),{children:[u&&(0,rR.jsx)("div",{className:cd("icon"),children:u}),t,f&&(0,rR.jsx)("div",{className:cd("spinner"),children:(0,rR.jsx)(rL.cD,{size:14})})]}))};(0,rB.$)(),(0,rB.$)();var ch={InputWrapper:"_InputWrapper_qyenz_1","Input-label":"_Input-label_qyenz_5","Input-labelIcon":"_Input-labelIcon_qyenz_17","Input-disabledIcon":"_Input-disabledIcon_qyenz_24","Input-input":"_Input-input_qyenz_29","Input-select":"_Input-select_qyenz_61","Input-selectIcon":"_Input-selectIcon_qyenz_71",Input:"_Input_qyenz_1","Input--readOnly":"_Input--readOnly_qyenz_111","Input-radioGroupItems":"_Input-radioGroupItems_qyenz_150","Input-radio":"_Input-radio_qyenz_150","Input-radioInner":"_Input-radioInner_qyenz_179","Input-radioInput":"_Input-radioInput_qyenz_261"},cf=(0,ry.f)("Input",ch),cm=({children:e,icon:t,label:r,el:n="label",readOnly:o,className:i})=>{let a=(0,rL.mP)("field-readonly");return(0,rR.jsxs)(n,{className:i,children:[(0,rR.jsxs)("div",{className:cf("label"),children:[t?(0,rR.jsx)("div",{className:cf("labelIcon"),children:t}):(0,rR.jsx)(rR.Fragment,{}),r,o&&(0,rR.jsx)("div",{className:cf("disabledIcon"),title:a,children:(0,rR.jsx)(rL.uM,{size:"12"})})]}),e]})},cg=({children:e,icon:t,label:r,el:n="label",readOnly:o})=>{let i=(0,rL.mm)(e=>e.overrides),a=(0,rv.useMemo)(()=>i.fieldLabel||cm,[i]);return r?(0,rR.jsx)(a,{label:r,icon:t,className:cf({readOnly:o}),readOnly:o,el:n,children:e}):(0,rR.jsx)(rR.Fragment,{children:e})};(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var cv={ArrayField:"_ArrayField_62huh_5","ArrayField--isDraggingFrom":"_ArrayField--isDraggingFrom_62huh_30","ArrayField-addButton":"_ArrayField-addButton_62huh_38","ArrayField--hasItems":"_ArrayField--hasItems_62huh_58","ArrayField-inner":"_ArrayField-inner_62huh_93",ArrayFieldItem:"_ArrayFieldItem_62huh_101","ArrayFieldItem--isDragging":"_ArrayFieldItem--isDragging_62huh_110","ArrayFieldItem--isExpanded":"_ArrayFieldItem--isExpanded_62huh_114","ArrayFieldItem-summary":"_ArrayFieldItem-summary_62huh_132","ArrayFieldItem--noFields":"_ArrayFieldItem--noFields_62huh_167","ArrayField--addDisabled":"_ArrayField--addDisabled_62huh_176","ArrayFieldItem-body":"_ArrayFieldItem-body_62huh_228","ArrayFieldItem-fieldset":"_ArrayFieldItem-fieldset_62huh_237","ArrayFieldItem-rhs":"_ArrayFieldItem-rhs_62huh_250","ArrayFieldItem-actions":"_ArrayFieldItem-actions_62huh_256"};function cb(e,t){let r=(0,rv.useContext)(e);if(!r)throw Error("useContextStore must be used inside context");return(0,rH.f)(r,rq(t))}(0,rB.$)(),(0,rB.$)();var c_=(v={},{ctx:l=(0,rv.createContext)((0,rW.f)((0,rV.f)(()=>v))),Provider:({children:e,value:t})=>{let[r]=(0,rv.useState)(()=>(0,rW.f)(()=>t));return(0,rR.jsx)(l.Provider,{value:r,children:e})}}),cx=()=>(0,rv.useContext)(c_.ctx);function ck(e){let t=(0,rv.useContext)(c_.ctx);if(!t)throw Error("useContextStore must be used inside context");return(0,rH.f)(t,rq(e))}(0,rB.$)(),(0,rB.$)();var cy=(0,ry.f)("DragIcon",{DragIcon:"_DragIcon_5e515_1","DragIcon--disabled":"_DragIcon--disabled_5e515_10"}),cw=({isDragDisabled:e})=>(0,rR.jsx)("div",{className:cy({disabled:e}),children:(0,rR.jsx)("svg",{viewBox:"0 0 20 20",width:"12",fill:"currentColor",children:(0,rR.jsx)("path",{d:"M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"})})});(0,rB.$)(),(0,rB.$)();var{Delay:cj,Distance:cz}=ll,cS=[new cj({value:200,tolerance:10})],cI=[new cj({value:200,tolerance:10}),new cz({value:5})],cE=({other:e=cI,mouse:t,touch:r=cS}={touch:cS,other:cI})=>{let[n]=(0,rv.useState)(()=>[lc.configure({activationConstraints(n,o){var i;let{pointerType:a,target:l}=n;return"mouse"===a&&at(l)&&(o.handle===l||(null==(i=o.handle)?void 0:i.contains(l)))?t:"touch"===a?r:e}})]);return n};(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var cC=(e,t,r,n,o)=>{},cP="increasing";(0,rB.$)();var cT=(e,t)=>{if("dynamic"===e){if(!(Math.abs(t.y)>Math.abs(t.x)))return 0===t.x?null:t.x>0?"right":"left"}else if("x"===e)return 0===t.x?null:t.x>0?"right":"left";return 0===t.y?null:t.y>0?"down":"up"};(0,rB.$)(),(0,rB.$)();var cA={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null};(0,rB.$)();var cM=({dragOperation:e,droppable:t})=>{let r=e.position.current;if(!r)return null;let{id:n}=t;return t.shape&&t.shape.containsPoint(r)?{id:n,value:1/n5.distance(t.shape.center,r),type:oG.PointerIntersection,priority:oZ.High}:null};(0,rB.$)();var cN=(0,rW.f)(()=>({fallbackEnabled:!1})),cO="",cD=(e,t=.05)=>r=>{var n,o,i,a,l;let{dragOperation:s,droppable:c}=r,{position:u}=s,d=null==(n=s.shape)?void 0:n.current,{shape:p}=c;if(!d||!p)return null;let{center:h}=d,{fallbackEnabled:f}=cN.getState(),m=((e,t="dynamic")=>(cA.current=e,cA.delta={x:e.x-cA.previous.x,y:e.y-cA.previous.y},cA.direction=cT(t,cA.delta)||cA.direction,(Math.abs(cA.delta.x)>10||Math.abs(cA.delta.y)>10)&&(cA.previous=n5.from(e)),cA))(u.current,e),g={direction:m.direction},{center:v}=p,b=((e,t,r,n=0)=>{let o=e.boundingRectangle,i=t.center;if("down"===r){let e=n*t.boundingRectangle.height;return o.bottom>=i.y+e}if("up"===r){let e=n*t.boundingRectangle.height;return o.top<i.y-e}if("left"===r){let e=n*t.boundingRectangle.width;return i.x-e>=o.left}let a=n*t.boundingRectangle.width;return o.right-a>=i.x})(d,p,m.direction,t);if((null==(o=s.source)?void 0:o.id)===c.id){let e=((e,t)=>{var r;let{dragOperation:n,droppable:o}=e,{shape:i}=o,{position:a}=n,l=null==(r=n.shape)?void 0:r.current;if(!l||!i)return null;let s=i.center,c=Math.sqrt(Math.pow(s.x-t.x,2)+Math.pow(s.y-t.y,2)),u=Math.sqrt(Math.pow(s.x-a.current.x,2)+Math.pow(s.y-a.current.y,2));return(cP=u===c?cP:u<c?"decreasing":"increasing",cC(l.center,s,o.id.toString(),"rebeccapurple"),"decreasing"===cP)?{id:o.id,value:1,type:oG.Collision}:null})(r,m.previous);if(cC(h,v,c.id.toString(),"yellow"),e)return(0,rB.s)((0,rB.X)({},e),{priority:oZ.Highest,data:g})}let _=d.intersectionArea(p),x=_/p.area;if(_&&b){cC(h,v,c.id.toString(),"green",m.direction);let e={id:c.id,value:x,priority:oZ.High,type:oG.Collision},t=cO===c.id;return cO="",(0,rB.s)((0,rB.X)({},e),{id:t?"flush":e.id,data:g})}if(f&&(null==(i=s.source)?void 0:i.id)!==c.id){let t=p.boundingRectangle.right>d.boundingRectangle.left&&p.boundingRectangle.left<d.boundingRectangle.right,n=p.boundingRectangle.bottom>d.boundingRectangle.top&&p.boundingRectangle.top<d.boundingRectangle.bottom;if("y"===e&&t||n){let t=(e=>{let{dragOperation:t,droppable:r}=e,{shape:n,position:o}=t;if(!r.shape)return null;let i=n?n8.from(n.current.boundingRectangle).corners:void 0,a=n8.from(r.shape.boundingRectangle).corners.reduce((e,t,r)=>{var n;return e+n5.distance(n5.from(t),null!=(n=null==i?void 0:i[r])?n:o.current)},0);return{id:r.id,value:1/(a/4),type:oG.Collision,priority:oZ.Normal}})(r);if(t){let r=cT(e,{x:d.center.x-((null==(a=c.shape)?void 0:a.center.x)||0),y:d.center.y-((null==(l=c.shape)?void 0:l.center.y)||0)});return(g.direction=r,_)?(cC(h,v,c.id.toString(),"red",r||""),cO=c.id,(0,rB.s)((0,rB.X)({},t),{priority:oZ.Low,data:g})):(cC(h,v,c.id.toString(),"orange",r||""),(0,rB.s)((0,rB.X)({},t),{priority:oZ.Lowest,data:g}))}}}return cC(h,v,c.id.toString(),"hotpink"),null};(0,rB.$)();var cL=(e,t="ltr")=>"up"===e||"ltr"===t&&"left"===e||"rtl"===t&&"right"===e?"before":"after",c$=({position:e,sourceIndex:t,targetIndex:r,isSameZone:n})=>{let o=r;return n&&o>=t&&(o-=1),"after"===e&&(o+=1),o},cB=({children:e,onDragStart:t,onDragEnd:r,onMove:n})=>{let o=cE({mouse:[new ll.Distance({value:5})]});return(0,rR.jsx)(lB,{sensors:o,onDragStart:e=>{var r,n;return t(null!=(n=null==(r=e.operation.source)?void 0:r.id.toString())?n:"")},onDragOver:(e,t)=>{var r;e.preventDefault();let{operation:o}=e,{source:i,target:a}=o;if(!i||!a)return;let l=i.data.index,s=a.data.index,c=null==(r=t.collisionObserver.collisions[0])?void 0:r.data;l!==s&&i.id!==a.id&&n({source:l,target:c$({position:cL(null==c?void 0:c.direction),sourceIndex:l,targetIndex:s,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{r()},250)},children:e})},cR=({id:e,index:t,disabled:r,children:n,type:o="item"})=>{let{ref:i,isDragging:a,isDropping:l,handleRef:s}=sH({id:e,type:o,index:t,disabled:r,data:{index:t},collisionDetector:cD("y")});return n({isDragging:a,isDropping:l,ref:i,handleRef:s})};(0,rB.$)();var cF=(0,rv.createContext)({}),cq=()=>{let e=(0,rv.useContext)(cF);return(0,rB.s)((0,rB.X)({},e),{readOnlyFields:e.readOnlyFields||{}})},cW=({children:e,name:t,subName:r,wildcardName:n=t,readOnlyFields:o})=>{let i=`${t}.${r}`,a=`${n}.${r}`,l=(0,rv.useMemo)(()=>Object.keys(o).reduce((e,r)=>{if(r.indexOf(i)>-1||r.indexOf(a)>-1){let i=new RegExp(`^(${t}|${n}).`.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\./g,"\\.").replace(/\*/g,"\\*")),a=r.replace(i,"");return(0,rB.s)((0,rB.X)({},e),{[a]:o[r]})}return e},{}),[t,r,n,o]);return(0,rR.jsx)(cF.Provider,{value:{readOnlyFields:l,localName:r},children:e})};(0,rB.$)();var cH=(e,t)=>t.split(".").reduce((e,t)=>{if(!e)return;let[r,n]=t.replace("]","").split("["),o=e[r];return n&&o?o[parseInt(n)]:o},e);(0,rB.$)();var cV=(0,rv.memo)(({field:e,id:t,index:r,name:n,subName:o,localName:i,onChange:a,forceReadOnly:l})=>{let s=void 0!==r?`${n}[${r}]`:n,c=n?`${s}.${o}`:o,u=void 0!==r?`${i}[${r}]`:null!=i?i:o,d=void 0!==r?`${i}[*]`:i,p=`${u}.${o}`,h=`${d}.${o}`,{readOnlyFields:f}=cq(),m=l||(void 0!==f[c]?f[p]:f[h]),g=e.label||o;return(0,rR.jsx)(cW,{name:u,wildcardName:d,subName:o,readOnlyFields:f,children:(0,rR.jsx)(ud,{name:c,label:g,id:t,readOnly:m,field:(0,rB.s)((0,rB.X)({},e),{label:g}),onChange:(e,t)=>{a(e,t,o)}})})}),cX=(0,ry.f)("ArrayField",cv),cU=(0,ry.f)("ArrayFieldItem",cv),cZ=(0,rv.memo)(({index:e,originalIndex:t,field:r,name:n})=>{let o=ck(t=>cH(t,`${[n]}[${e}]`)),i=(0,rL.mP)("field-arrayitem-summary",{index:t});return(0,rv.useMemo)(()=>o&&r.getItemSummary?r.getItemSummary(o,e):i,[o,r,t,e,i])}),cG=(0,rv.memo)(({id:e,arrayId:t,index:r,dragIndex:n,originalIndex:o,field:i,onChange:a,onToggleExpand:l,readOnly:s,actions:c,name:u,localName:d})=>{let p=(0,rL.mm)(r=>{var n;return(null==(n=r.state.ui.arrayState[t])?void 0:n.openId)===e}),h=(0,rL.mm)(e=>e.permissions.getPermissions({item:e.selectedItem}).edit),f=(0,rv.useMemo)(()=>!!i.arrayFields&&Object.values(i.arrayFields).some(e=>"slot"!==e.type&&!1!==e.visible),[i.arrayFields]);return(0,rR.jsx)(cR,{id:e,index:n,disabled:s,children:({isDragging:t,ref:n,handleRef:m})=>(0,rR.jsxs)("div",{ref:n,className:cU({isExpanded:p&&f,isDragging:t,noFields:!f}),children:[(0,rR.jsxs)("div",{ref:m,onClick:r=>{t||(r.preventDefault(),r.stopPropagation(),f&&l(e,p))},className:cU("summary"),children:[(0,rR.jsx)(cZ,{index:r,originalIndex:o,field:i,name:u}),(0,rR.jsxs)("div",{className:cU("rhs"),children:[!s&&(0,rR.jsx)("div",{className:cU("actions"),children:c}),(0,rR.jsx)("div",{children:(0,rR.jsx)(cw,{})})]})]}),(0,rR.jsx)("div",{className:cU("body"),children:p&&f&&(0,rR.jsx)("fieldset",{className:cU("fieldset"),children:Object.keys(i.arrayFields).map(t=>{let n=i.arrayFields[t];return(0,rR.jsx)(cV,{id:`${e}_${t}`,name:u,index:r,subName:t,localName:d,field:n,onChange:a,forceReadOnly:!h},`${e}_${t}_${r}`)})})})]})})});(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var cY=(e,t=!0)=>ck(r=>t?cH(r,e):void 0);(0,rB.$)();var cK=(e,t,{tracked:r=!0,fallback:n}={})=>{let o=cY(e,r),i=(0,rL.mm)(t=>t.state.ui.field.focus===e),[a,l]=(0,rv.useState)(o),s=(0,rv.useCallback)((e,...r)=>{l(e),t(e,...r)},[t]);return((0,rv.useEffect)(()=>{r&&(i||l(o))},[r,i,o]),r)?[void 0!==n&&null==a?n:a,s]:[void 0,t]},cJ=(0,ry.f)("Input",ch),cQ=({field:e,onChange:t,readOnly:r,id:n,name:o=n,label:i,labelIcon:a,Label:l})=>{let[s,c]=cK(o,t,{fallback:""});return(0,rR.jsx)(l,{label:i||o,icon:a||(0,rR.jsxs)(rR.Fragment,{children:["text"===e.type&&(0,rR.jsx)(rL.sn,{size:16}),"number"===e.type&&(0,rR.jsx)(rL.e5,{size:16})]}),readOnly:r,children:(0,rR.jsx)("input",{className:cJ("input"),autoComplete:"off",type:e.type,title:i||o,name:o,value:s,onChange:t=>{if("number"===e.type){let r=Number(t.currentTarget.value);(void 0===e.min||!(r<e.min))&&(void 0!==e.max&&r>e.max||c(r))}else c(t.currentTarget.value)},readOnly:r,tabIndex:r?-1:void 0,id:n,min:"number"===e.type?e.min:void 0,max:"number"===e.type?e.max:void 0,placeholder:"text"===e.type||"number"===e.type?e.placeholder:void 0,step:"number"===e.type?e.step:void 0})})};(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var c0={"ExternalInput-actions":"_ExternalInput-actions_143vl_1","ExternalInput-button":"_ExternalInput-button_143vl_5","ExternalInput--dataSelected":"_ExternalInput--dataSelected_143vl_34","ExternalInput--readOnly":"_ExternalInput--readOnly_143vl_41","ExternalInput-detachButton":"_ExternalInput-detachButton_143vl_48",ExternalInput:"_ExternalInput_143vl_1",ExternalInputModal:"_ExternalInputModal_143vl_118","ExternalInputModal-grid":"_ExternalInputModal-grid_143vl_128","ExternalInputModal--filtersToggled":"_ExternalInputModal--filtersToggled_143vl_139","ExternalInputModal-filters":"_ExternalInputModal-filters_143vl_144","ExternalInputModal-masthead":"_ExternalInputModal-masthead_143vl_164","ExternalInputModal-tableWrapper":"_ExternalInputModal-tableWrapper_143vl_173","ExternalInputModal-table":"_ExternalInputModal-table_143vl_173","ExternalInputModal-thead":"_ExternalInputModal-thead_143vl_189","ExternalInputModal-th":"_ExternalInputModal-th_143vl_189","ExternalInputModal-td":"_ExternalInputModal-td_143vl_204","ExternalInputModal-tr":"_ExternalInputModal-tr_143vl_210","ExternalInputModal-tbody":"_ExternalInputModal-tbody_143vl_217","ExternalInputModal--hasData":"_ExternalInputModal--hasData_143vl_244","ExternalInputModal-loadingBanner":"_ExternalInputModal-loadingBanner_143vl_248","ExternalInputModal--isLoading":"_ExternalInputModal--isLoading_143vl_265","ExternalInputModal-searchForm":"_ExternalInputModal-searchForm_143vl_269","ExternalInputModal-search":"_ExternalInputModal-search_143vl_269","ExternalInputModal-searchIcon":"_ExternalInputModal-searchIcon_143vl_306","ExternalInputModal-searchIconText":"_ExternalInputModal-searchIconText_143vl_333","ExternalInputModal-searchInput":"_ExternalInputModal-searchInput_143vl_343","ExternalInputModal-searchActions":"_ExternalInputModal-searchActions_143vl_358","ExternalInputModal-searchActionIcon":"_ExternalInputModal-searchActionIcon_143vl_371","ExternalInputModal-footerContainer":"_ExternalInputModal-footerContainer_143vl_375","ExternalInputModal-footer":"_ExternalInputModal-footer_143vl_375","ExternalInputModal-field":"_ExternalInputModal-field_143vl_388"};(0,rB.$)(),(0,rB.$)();var c1=(0,ry.f)("Modal",{Modal:"_Modal_g5xob_1","Modal--isOpen":"_Modal--isOpen_g5xob_15","Modal-inner":"_Modal-inner_g5xob_19"}),c2=({children:e,onClose:t,isOpen:r})=>{let[n,o]=(0,rv.useState)(null);return((0,rv.useEffect)(()=>{o(document.getElementById("puck-portal-root"))},[]),n)?(0,l_.createPortal)((0,rR.jsx)("div",{className:c1({isOpen:r}),onClick:t,children:(0,rR.jsx)("div",{className:c1("inner"),onClick:e=>e.stopPropagation(),children:e})}),n):(0,rR.jsx)("div",{})};(0,rB.$)(),(0,rB.$)();var c4=(0,ry.f)("Heading",{Heading:"_Heading_97eh4_1","Heading--xxxxl":"_Heading--xxxxl_97eh4_12","Heading--xxxl":"_Heading--xxxl_97eh4_18","Heading--xxl":"_Heading--xxl_97eh4_22","Heading--xl":"_Heading--xl_97eh4_26","Heading--l":"_Heading--l_97eh4_30","Heading--m":"_Heading--m_97eh4_34","Heading--s":"_Heading--s_97eh4_38","Heading--xs":"_Heading--xs_97eh4_42"}),c3=({children:e,rank:t,size:r="m"})=>{let n=t?`h${t}`:"span";return(0,rR.jsx)(n,{className:c4({[r]:!0}),children:e})};(0,rB.$)();var c6=(0,ry.f)("ExternalInput",c0),c5=(0,ry.f)("ExternalInputModal",c0),c8=({count:e})=>{let t=(0,rL.mP)("field-external-result-singular",{count:e}),r=(0,rL.mP)("field-external-result-plural",{count:e});return(0,rR.jsx)("span",{className:c5("footer"),children:1===e?t:r})},c7={},c9=({field:e,onChange:t,value:r=null,name:n,id:o,readOnly:i})=>{var a;let{mapProp:l=e=>e,mapRow:s=e=>e,filterFields:c}=e||{},{enabled:u}=null!=(a=e.cache)?a:{enabled:!0},[d,p]=(0,rv.useState)([]),[h,f]=(0,rv.useState)(!1),[m,g]=(0,rv.useState)(!0),v=!!c,[b,_]=(0,rv.useState)(e.initialFilters||{}),[x,k]=(0,rv.useState)(v),y=(0,rv.useMemo)(()=>d.map(s),[d]),w=(0,rv.useMemo)(()=>{let e=new Set;for(let t of y)for(let r of Object.keys(t))("string"==typeof t[r]||"number"==typeof t[r]||(0,rv.isValidElement)(t[r]))&&e.add(r);return Array.from(e)},[y]),[j,z]=(0,rv.useState)(e.initialQuery||""),S=(0,rv.useCallback)((t,r)=>(0,rB._)(null,null,function*(){let n;g(!0);let i=`${o}-${t}-${JSON.stringify(r)}`;(n=u&&c7[i]?c7[i]:yield e.fetchList({query:t,filters:r}))&&(p(n),g(!1),u&&(c7[i]=n))}),[o,e]),I=(0,rv.useCallback)(t=>e.renderFooter?e.renderFooter(t):(0,rR.jsx)(c8,{count:t.items.length}),[e.renderFooter]);(0,rv.useEffect)(()=>{S(j,b)},[]);let E=(0,rL.mP)("field-external-item"),C=(0,rL.mP)("field-external-search"),P=(0,rL.mP)("field-external-togglefilters"),T=(0,rL.mP)("field-external-selectdata");return(0,rR.jsxs)("div",{className:c6({dataSelected:!!r,modalVisible:h,readOnly:i}),id:o,children:[(0,rR.jsxs)("div",{className:c6("actions"),children:[(0,rR.jsx)("button",{type:"button",onClick:()=>f(!0),className:c6("button"),disabled:i,children:r?e.getItemSummary?e.getItemSummary(r):E:(0,rR.jsxs)(rR.Fragment,{children:[(0,rR.jsx)(rL.at,{size:"16"}),(0,rR.jsx)("span",{children:e.placeholder})]})}),r&&(0,rR.jsx)("button",{type:"button",className:c6("detachButton"),onClick:()=>{t(null)},disabled:i,children:(0,rR.jsx)(rL.XI,{size:16})})]}),(0,rR.jsx)(c2,{onClose:()=>f(!1),isOpen:h,children:(0,rR.jsxs)("form",{className:c5({isLoading:m,loaded:!m,hasData:y.length>0,filtersToggled:x}),onSubmit:e=>{e.preventDefault(),e.stopPropagation(),S(j,b)},children:[(0,rR.jsx)("div",{className:c5("masthead"),children:e.showSearch?(0,rR.jsxs)("div",{className:c5("searchForm"),children:[(0,rR.jsxs)("label",{className:c5("search"),children:[(0,rR.jsx)("span",{className:c5("searchIconText"),children:C}),(0,rR.jsx)("div",{className:c5("searchIcon"),children:(0,rR.jsx)(rL.BH,{size:"18"})}),(0,rR.jsx)("input",{className:c5("searchInput"),name:"q",type:"search",placeholder:e.placeholder,onChange:e=>{z(e.currentTarget.value)},autoComplete:"off",value:j})]}),(0,rR.jsxs)("div",{className:c5("searchActions"),children:[(0,rR.jsx)(cp,{type:"submit",loading:m,fullWidth:!0,children:C}),v&&(0,rR.jsx)("div",{className:c5("searchActionIcon"),children:(0,rR.jsx)(rL.eu,{type:"button",title:P,onClick:e=>{e.preventDefault(),e.stopPropagation(),k(!x)},children:(0,rR.jsx)(rL.KH,{size:20})})})]})]}):(0,rR.jsx)(c3,{rank:"2",size:"xs",children:e.placeholder||T})}),(0,rR.jsxs)("div",{className:c5("grid"),children:[v&&(0,rR.jsx)("div",{className:c5("filters"),children:v&&Object.keys(c).map(e=>{let t=c[e];return(0,rR.jsx)("div",{className:c5("field"),children:(0,rR.jsx)(cm,{label:t.label||e,children:(0,rR.jsx)(uh,{field:t,id:`external_field_${e}_filter`,value:b[e],onChange:t=>{_(r=>{let n=(0,rB.s)((0,rB.X)({},r),{[e]:t});return S(j,n),n})}})})},e)})}),(0,rR.jsxs)("div",{className:c5("tableWrapper"),children:[(0,rR.jsxs)("table",{className:c5("table"),children:[(0,rR.jsx)("thead",{className:c5("thead"),children:(0,rR.jsx)("tr",{className:c5("tr"),children:w.map(e=>(0,rR.jsx)("th",{className:c5("th"),style:{textAlign:"left"},children:e},e))})}),(0,rR.jsx)("tbody",{className:c5("tbody"),children:y.map((e,r)=>(0,rR.jsx)("tr",{style:{whiteSpace:"nowrap"},className:c5("tr"),onClick:()=>{t(l(d[r])),f(!1)},children:w.map(t=>(0,rR.jsx)("td",{className:c5("td"),children:e[t]},t))},r))})]}),(0,rR.jsx)("div",{className:c5("loadingBanner"),children:(0,rR.jsx)(rL.cD,{size:24})})]})]}),(0,rR.jsx)("div",{className:c5("footerContainer"),children:(0,rR.jsx)(I,{items:y})})]})})]})};(0,rB.$)();var ue=(0,ry.f)("Input",ch);(0,rB.$)();var ut=(0,ry.f)("Input",ch);(0,rB.$)();var ur=(0,ry.f)("Input",ch);(0,rB.$)(),(0,rB.$)();var un=(0,rv.memo)(e=>{var t;return(0,rR.jsx)(r_.x,(0,rB.s)((0,rB.X)({},e),{editor:null,menu:(0,rR.jsx)(rD.h,{field:e.field,editor:null,editorState:null,readOnly:null!=(t=e.readOnly)&&t}),children:(0,rR.jsx)("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:e.content},contentEditable:!0})}))});un.displayName="EditorFallback";var uo=(0,rv.lazy)(()=>e.A(67900).then(e=>({default:e.Editor})));(0,rB.$)(),(0,rB.$)();var ui=(0,ry.f)("ObjectField",{ObjectField:"_ObjectField_c5reb_1","ObjectField-fieldset":"_ObjectField-fieldset_c5reb_10"});(0,rB.$)();var ua=()=>{if(void 0!==rv.default.useId)return rv.default.useId();let[e]=(0,rv.useState)((0,r$.$)());return e},ul=(0,ry.f)("Input",ch),us=(0,ry.f)("InputWrapper",ch),uc={array:({field:e,onChange:t,id:r,name:n=r,label:o,labelIcon:i,readOnly:a,Label:l=e=>(0,rR.jsx)("div",(0,rB.X)({},e))})=>{let s=(0,rL.mm)(e=>e.setUi),c=(0,rL.jG)(),u=cx(),{localName:d=n}=cq(),p=()=>{var e;return null!=(e=cH(u.getState(),n))?e:[]},h=(0,rv.useCallback)(()=>{var e;let{state:t}=c.getState(),n=t.ui.arrayState[r];return(null==(e=null==n?void 0:n.items)?void 0:e.length)?n:{items:Array.from(p()||[]).map((e,t)=>({_originalIndex:t,_currentIndex:t,_arrayId:`${r}-${t}`})),openId:""}},[c,r,p,n]),f=ck(()=>p().length),m=(0,rv.useMemo)(h,[h]),g=(0,rL.mm)(e=>{let t=e.state.ui.arrayState[r];return null!=t?t:m}),v=(0,rL.jG)(),b=(0,rv.useCallback)(e=>{let t=v.getState().state;return{arrayState:(0,rB.s)((0,rB.X)({},t.ui.arrayState),{[r]:(0,rB.X)((0,rB.X)({},h()),e)})}},[v]),_=(0,rv.useCallback)(()=>h().items.reduce((e,t)=>t._originalIndex>e?t._originalIndex:e,-1),[]),x=(0,rv.useCallback)(e=>{let t=_(),n=h(),o=Array.from(e||[]).map((e,o)=>{var i,a,l;let s=n.items[o],c={_originalIndex:null!=(i=null==s?void 0:s._originalIndex)?i:t+1,_currentIndex:null!=(a=null==s?void 0:s._currentIndex)?a:o,_arrayId:(null==(l=n.items[o])?void 0:l._arrayId)||`${r}-${t+1}`};return c._originalIndex>t&&(t=c._originalIndex),c});return(0,rB.s)((0,rB.X)({},n),{items:o})},[]),[k,y]=(0,rv.useState)(""),w=!!k,j=(0,rv.useRef)([]);(0,rv.useEffect)(()=>{j.current=p()},[]);let z=(0,rv.useCallback)(t=>{if("array"!==e.type||!e.arrayFields)return;let r=v.getState().config;return(0,rw.h)({value:t,fields:e.arrayFields,mappers:{slot:({value:e})=>e.map(e=>(0,r$.l)(e,r,!0))},config:r})},[v,e]),S=(0,rv.useCallback)(()=>{let e=h(),t=e.items.map((e,t)=>(0,rB.s)((0,rB.X)({},e),{_currentIndex:t})),n=v.getState().state;s({arrayState:(0,rB.s)((0,rB.X)({},n.ui.arrayState),{[r]:(0,rB.s)((0,rB.X)({},e),{items:t})})},!1)},[]),I=(0,rv.useCallback)(e=>{s(b(x(e)),!1),t(e)},[x,s,b,t]);(0,rv.useEffect)(()=>{s(b(x(p())),!1)},[f]);let E=(0,rL.mP)("field-arrayitem-duplicate"),C=(0,rL.mP)("field-arrayitem-delete");if("array"!==e.type||!e.arrayFields)return null;let P=void 0!==e.max&&(null==g?void 0:g.items.length)>=e.max||a;return(0,rR.jsx)(l,{label:o||n,icon:i||(0,rR.jsx)(rL.IQ,{size:16}),el:"div",readOnly:a,children:(0,rR.jsx)(cB,{onDragStart:e=>{j.current=p(),y(e),S()},onDragEnd:()=>{y(""),t(j.current);let e=u.getState();u.setState(cc(e,n,j.current)),S()},onMove:e=>{let t=h();if(t.items[e.source]._arrayId!==k)return;let n=(0,rL.wL)(j.current,e.source,e.target),o=(0,rL.wL)(t.items,e.source,e.target),i=v.getState().state;s({arrayState:(0,rB.s)((0,rB.X)({},i.ui.arrayState),{[r]:(0,rB.s)((0,rB.X)({},t),{items:o})})},!1),j.current=n},children:(0,rR.jsxs)("div",{className:cX({hasItems:f>0,addDisabled:P}),children:[g.items.length>0&&(0,rR.jsx)("div",{className:cX("inner"),"data-dnd-container":!0,children:g.items.map((o,i)=>{let{_arrayId:l=`${r}-${i}`,_originalIndex:c=i,_currentIndex:u=i}=o;return(0,rR.jsx)(cG,{index:u,dragIndex:i,originalIndex:c,arrayId:r,id:l,readOnly:a,field:e,name:n,localName:d,onChange:(e,r,n)=>{let o=p(),a=Array.from(o||[])[i]||{};t((0,rL.H)(o,i,(0,rB.s)((0,rB.X)({},a),{[n]:e})),r)},onToggleExpand:(e,t)=>{t?s(b({openId:""})):s(b({openId:e}))},actions:(0,rR.jsxs)(rR.Fragment,{children:[(0,rR.jsx)("div",{className:cU("action"),children:(0,rR.jsx)(rL.eu,{type:"button",disabled:!!P,onClick:e=>{e.stopPropagation();let t=[...p()||[]],r=z(t[i]);t.splice(i,0,r),I(t)},title:E,children:(0,rR.jsx)(rL._0,{size:16})})}),(0,rR.jsx)("div",{className:cU("action"),children:(0,rR.jsx)(rL.eu,{type:"button",disabled:void 0!==e.min&&e.min>=g.items.length,onClick:e=>{e.stopPropagation();let t=[...p()||[]];t.splice(i,1),I(t)},title:C,children:(0,rR.jsx)(rL.Me,{size:16})})})]})},l)})}),!P&&(0,rR.jsx)("button",{type:"button",className:cX("addButton"),onClick:()=>{var t;if(w)return;let r=p()||[],n="function"==typeof e.defaultItemProps?e.defaultItemProps(r.length):null!=(t=e.defaultItemProps)?t:{};I([...r,(0,rw.g)(z(n),e.arrayFields)])},children:(0,rR.jsx)(rL.r3,{size:21})})]})})})},external:({field:e,onChange:t,id:r,name:n=r,label:o,labelIcon:i,Label:a,readOnly:l})=>{var s,c,u;let d=cY(n),p=(0,rL.mP)("field-external-selectdata");return((0,rv.useEffect)(()=>{e.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),"external"!==e.type)?null:(0,rR.jsx)(a,{label:o||n,icon:i||(0,rR.jsx)(rL.at,{size:16}),el:"div",children:(0,rR.jsx)(c9,{name:n,field:(0,rB.s)((0,rB.X)({},e),{placeholder:(null==(s=e.adaptor)?void 0:s.name)?`Select from ${e.adaptor.name}`:e.placeholder||p,mapProp:(null==(c=e.adaptor)?void 0:c.mapProp)||e.mapProp,mapRow:e.mapRow,fetchList:(null==(u=e.adaptor)?void 0:u.fetchList)?()=>(0,rB._)(null,null,function*(){return yield e.adaptor.fetchList(e.adaptorParams)}):e.fetchList}),onChange:t,value:d,id:r,readOnly:l})})},object:({field:e,onChange:t,id:r,name:n=r,label:o,labelIcon:i,Label:a,readOnly:l})=>{let{localName:s=n}=cq(),c=cx(),u=(0,rL.mm)(e=>e.permissions.getPermissions({item:e.selectedItem}).edit);return"object"===e.type&&e.objectFields?(0,rR.jsx)(a,{label:o||n,icon:i||(0,rR.jsx)(rL.WP,{size:16}),el:"div",readOnly:l,children:(0,rR.jsx)("div",{className:ui(),children:(0,rR.jsx)("fieldset",{className:ui("fieldset"),children:Object.keys(e.objectFields).map(o=>{let i=e.objectFields[o],a=`${s}.${o}`;return(0,rR.jsx)(cV,{id:`${r}_${o}`,name:n,subName:o,localName:s,field:i,forceReadOnly:!u,onChange:(e,r,o)=>{var i;let a=null!=(i=cH(c.getState(),n))?i:{};a[o]!==e&&t((0,rB.s)((0,rB.X)({},a),{[o]:e}),r)}},a)})})})}):null},select:({field:e,onChange:t,label:r,labelIcon:n,Label:o,id:i,name:a=i,readOnly:l})=>{let s=cY(a);return"select"===e.type&&e.options?(0,rR.jsx)(o,{label:r||a,icon:n||(0,rR.jsx)(rL.N8,{size:16}),readOnly:l,children:(0,rR.jsxs)("div",{className:ut("select"),children:[(0,rR.jsx)("select",{id:i,title:r||a,className:ut("input"),disabled:l,onChange:e=>{t(JSON.parse(e.target.value).value)},value:JSON.stringify({value:s}),children:e.options.map(e=>(0,rR.jsx)("option",{label:e.label,value:JSON.stringify({value:e.value})},e.label+JSON.stringify(e.value)))}),(0,rR.jsx)(rL.N8,{size:18,className:ut("selectIcon")})]})}):null},textarea:({field:e,onChange:t,readOnly:r,id:n,name:o=n,label:i,labelIcon:a,Label:l})=>{let[s,c]=cK(o,t,{fallback:""});return(0,rR.jsx)(l,{label:i||o,icon:a||(0,rR.jsx)(rL.sn,{size:16}),readOnly:r,children:(0,rR.jsx)("textarea",{id:n,className:ur("input"),autoComplete:"off",name:o,value:s,onChange:e=>c(e.currentTarget.value),readOnly:r,tabIndex:r?-1:void 0,rows:5,placeholder:"textarea"===e.type?e.placeholder:void 0})})},radio:({field:e,onChange:t,readOnly:r,id:n,name:o=n,label:i,labelIcon:a,Label:l})=>{let s=cY(o);return"radio"===e.type&&e.options?(0,rR.jsx)(l,{icon:a||(0,rR.jsx)(rL.i2,{size:16}),label:i||o,readOnly:r,el:"div",children:(0,rR.jsx)("div",{className:ue("radioGroupItems"),id:n,children:e.options.map(e=>{var n;return(0,rR.jsxs)("label",{className:ue("radio"),children:[(0,rR.jsx)("input",{type:"radio",className:ue("radioInput"),value:JSON.stringify({value:e.value}),name:o,onChange:e=>{t(JSON.parse(e.target.value).value)},disabled:r,checked:s===e.value}),(0,rR.jsx)("div",{className:ue("radioInner"),children:e.label||(null==(n=e.value)?void 0:n.toString())})]},e.label+e.value)})})}):null},text:cQ,number:cQ,richtext:({onChange:e,readOnly:t=!1,id:r,name:n=r,label:o,labelIcon:i,Label:a,field:l})=>{let s={onChange:e,content:cY(n),readOnly:t,field:l,id:r,name:n};return(0,rR.jsx)(rR.Fragment,{children:(0,rR.jsx)(a,{label:o||n,icon:i||(0,rR.jsx)(rL.sn,{size:16}),readOnly:t,el:"div",children:(0,rR.jsx)(rv.Suspense,{fallback:(0,rR.jsx)(un,(0,rB.X)({},s)),children:(0,rR.jsx)(uo,(0,rB.X)({},s))})})})}};function uu(e){var t,r,n;let o=(0,rL.mm)(e=>e.dispatch),i=(0,rL.mm)(e=>e.overrides),a=(0,rL.mm)(rq(e=>{var t;return null==(t=e.selectedItem)?void 0:t.readOnly})),l=(0,rv.useContext)(cF),{id:s,Label:c=cg}=e,u=e.field,d=u.label,p=u.labelIcon,h=ua(),f=s||h,m=(0,rv.useMemo)(()=>{var e,t,r,n,o,a,l,s,c,u;return(0,rB.s)((0,rB.X)({},i.fieldTypes),{custom:null==(e=i.fieldTypes)?void 0:e.custom,array:(null==(t=i.fieldTypes)?void 0:t.array)||uc.array,external:(null==(r=i.fieldTypes)?void 0:r.external)||uc.external,object:(null==(n=i.fieldTypes)?void 0:n.object)||uc.object,select:(null==(o=i.fieldTypes)?void 0:o.select)||uc.select,textarea:(null==(a=i.fieldTypes)?void 0:a.textarea)||uc.textarea,radio:(null==(l=i.fieldTypes)?void 0:l.radio)||uc.radio,text:(null==(s=i.fieldTypes)?void 0:s.text)||uc.text,number:(null==(c=i.fieldTypes)?void 0:c.number)||uc.number,richtext:(null==(u=i.fieldTypes)?void 0:u.richtext)||uc.richtext})},[i]),g="custom"===u.type||!!(null==(t=i.fieldTypes)?void 0:t[u.type]),v=null!=(r=e.name)?r:f,b=cx(),_=(0,rv.useMemo)(()=>g?(t,r)=>{var n;null==(n=e.onChange)||n.call(e,t,r),b.setState(cc(b.getState(),v,t))}:e.onChange,[g,e.onChange,v,b]),[x,k]=cK(v,_,{tracked:g}),y=(0,rv.useMemo)(()=>(0,rB.s)((0,rB.X)({},e),{field:u,label:d,labelIcon:p,Label:c,id:f,value:x,onChange:k}),[e,u,d,p,c,f,x,k]),w=(0,rv.useCallback)(e=>{y.name&&("INPUT"===e.target.nodeName||"TEXTAREA"===e.target.nodeName)&&(e.stopPropagation(),o({type:"setUi",ui:{field:{focus:y.name}}}))},[y.name]),j=(0,rv.useCallback)(e=>{"name"in e.target&&o({type:"setUi",ui:{field:{focus:null}}})},[]),z=(0,rv.useMemo)(()=>"custom"!==u.type&&"slot"!==u.type?uc[u.type]:e=>null,[u.type]),S="custom"===u.type?u.key:void 0,I=(0,rv.useMemo)(()=>"custom"!==u.type||m[u.type]?"slot"!==u.type?m[u.type]:void 0:u.render?u.render:null,[u.type,S,m]),{visible:E=!0}=e.field;if(!E||"slot"===u.type)return null;if(!I)throw Error(`Field type for ${u.type} did not exist.`);return(0,rR.jsx)(cF.Provider,{value:{readOnlyFields:l.readOnlyFields||a||{},localName:null!=(n=l.localName)?n:y.name},children:(0,rR.jsx)("div",{className:us(),onFocus:w,onBlur:j,onClick:e=>{e.stopPropagation()},children:(0,rR.jsx)(I,(0,rB.s)((0,rB.X)({},y),{children:(0,rR.jsx)(z,(0,rB.X)({},y))}))})})}function ud(e){return(0,rR.jsx)(uu,(0,rB.X)({},e))}function up(e){var{value:t}=e,r=(0,rB.H)(e,["value"]);let n=(0,rv.useMemo)(()=>e=>(0,rR.jsx)("div",(0,rB.s)((0,rB.X)({},e),{className:ul({readOnly:r.readOnly})})),[r.readOnly]),o=cx(),i=(0,rv.useCallback)(e=>{r.id&&(o.setState({[r.id]:e}),r.onChange(e))},[o,r.onChange,r.id]);return(0,rv.useEffect)(()=>{r.id&&o.setState({[r.id]:t})},[r.id,t,o]),(0,rR.jsx)(uu,(0,rB.s)((0,rB.X)({},r),{onChange:i,Label:n}))}function uh(e){let t=ua();return"slot"===e.field.type?null:(0,rR.jsx)(c_.Provider,{value:{[t]:e.value},children:(0,rR.jsx)(up,(0,rB.s)((0,rB.X)({},e),{id:t}))})}function uf(e){let t={x:0,y:0},r=e;for(;r&&r!==document.documentElement;){let e=r.parentElement;e&&(t.x+=e.scrollLeft,t.y+=e.scrollTop),r=e}return t}(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var um=(0,rv.createContext)(null),ug=(0,rv.createContext)((0,rW.f)(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),uv=({children:e,store:t})=>(0,rR.jsx)(ug.Provider,{value:t,children:e}),ub=({children:e,value:t})=>{let r=(0,rL.mm)(e=>e.dispatch),n=(0,rv.useCallback)(e=>{r({type:"registerZone",zone:e})},[r]),o=(0,rv.useMemo)(()=>(0,rB.X)({registerZone:n},t),[t]);return(0,rR.jsx)(rR.Fragment,{children:o&&(0,rR.jsx)(um.Provider,{value:o,children:e})})};(0,rB.$)();var u_=(e,t=[])=>{let r=(0,rL.jG)();return(0,rv.useCallback)(()=>{let t=()=>{},n=r=>{r?e(!1):(setTimeout(()=>{e(!0)},0),t&&t())},o=r.getState().state.ui.isDragging;return n(o),o&&(t=r.subscribe(e=>e.state.ui.isDragging,e=>{n(e)})),t},[r,...t])};(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var ux=()=>{if("u"<typeof window)return;let e=document.querySelector("#preview-frame");return(null==e?void 0:e.tagName)==="IFRAME"?e.contentDocument||document:(null==e?void 0:e.ownerDocument)||document};(0,rB.$)(),(0,rB.$)();var uk=e=>"u">typeof CSS&&"function"==typeof CSS.escape?CSS.escape(e):e,uy=e=>`[data-puck-component="${uk(e)}"]`,uw=e=>`[data-puck-dropzone="${uk(e)}"]`,uj={duration:250,easing:"ease"},uz=e=>{var t,r;return null!=(r=null==(t=e.defaultView)?void 0:t.matchMedia("(prefers-reduced-motion: reduce)").matches)&&r},uS=(e,{zones:t,itemId:r,targetZone:n,getExpectedOrder:o,initialExpectedOrder:i=[]},a)=>{let l=new Set(i),s=0,c=()=>{var i;let u=e.querySelector(uw(n)),d=o(),p=null!=r?r:d.find(e=>!l.has(e)),h=p&&null!=(i=null==u?void 0:u.querySelector(`:scope > ${uy(p)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`))?i:null,f=u?Array.from(u.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(e=>e.getAttribute("data-puck-component")):[],m=new Set(f),g=d.filter(e=>m.has(e)),v=f.length===g.length&&f.every((e,t)=>e===g[t]),b=t.every(t=>t===n||!p||!e.querySelector(`${uw(t)} > ${uy(p)}`));if((!h||!v||!b)&&s<10){s++,requestAnimationFrame(c);return}a(h)};requestAnimationFrame(c)};(0,rB.$)();var uI=(e,t)=>{var r,n;return null!=(n=null==(r=e.indexes.zones[t])?void 0:r.contentIds)?n:[]},uE=(e,t)=>{let r=(0,rL.jG)();return(0,rv.useCallback)(n=>{var o,i,a,l,s;let c,u=Object.values(null!=(o=e.getState().previewIndex)?o:{}),d=t?u.find(e=>(null==e?void 0:e.props.id)===t&&!e.ghost):u.find(e=>(null==e?void 0:e.type)==="insert"),p=t?(null==d?void 0:d.linePlaceholder)||(null==d?void 0:d.type)==="insert":!!d;return i=d&&p?{itemId:"move"===d.type?t:void 0,targetZone:d.zone,getExpectedOrder:()=>uI(r.getState().state,d.zone)}:void 0,!(null!=(l=null==(c=null==(a=n.source.manager)?void 0:a.dragOperation)?void 0:c.canceled)&&l||(null==(s=null==c?void 0:c.target)?void 0:s.type)==="void")&&i?void(({feedbackElement:e,itemId:t,targetZone:r,getExpectedOrder:n})=>{var o;let i=e.ownerDocument,a=null!=(o=ux())?o:i;if(uz(i))return;let l=e.getBoundingClientRect(),s=n(),c=e.cloneNode(!0);c.removeAttribute("id"),c.removeAttribute("popover"),c.removeAttribute("data-puck-component"),c.removeAttribute("data-puck-dnd"),c.removeAttribute("data-dnd-dragging"),c.setAttribute("inert","true"),Object.assign(c.style,{position:"fixed",left:`${l.left}px`,top:`${l.top}px`,width:`${l.width}px`,height:`${l.height}px`,margin:"0",overflow:"hidden",pointerEvents:"none",transform:"none",transition:"none",translate:"none",zIndex:"2147483647"});let u=a.createElement("style");u.textContent=`
    ${t?`${uy(t)} { visibility: hidden !important; }`:""}
    [data-puck-overlay] { opacity: 0 !important; }
  `,a.head.appendChild(u),i.body.appendChild(c);let d=()=>{c.remove(),u.remove()};uS(a,{zones:[r],itemId:t,targetZone:r,getExpectedOrder:n,initialExpectedOrder:s},e=>{if(!e)return void d();let r=e.getAttribute("data-puck-component");!t&&r&&(u.textContent+=`
          ${uy(r)} { visibility: hidden !important; }
        `);let n=((e,t)=>{var r,n;let o=e.getBoundingClientRect();if(e.ownerDocument===t)return o;let i=((e,t)=>{var r,n;let o={x:0,y:0,scaleX:1,scaleY:1},i=null==(r=e.ownerDocument.defaultView)?void 0:r.frameElement;for(;i&&i!==t;){let e=i.getBoundingClientRect(),t=i.offsetWidth?e.width/i.offsetWidth:1,r=i.offsetHeight?e.height/i.offsetHeight:1;o.x+=e.left,o.y+=e.top,o.scaleX*=t,o.scaleY*=r,i=null==(n=i.ownerDocument.defaultView)?void 0:n.frameElement}return o})(e,null!=(n=null==(r=t.defaultView)?void 0:r.frameElement)?n:null);return{left:o.left*i.scaleX+i.x,top:o.top*i.scaleY+i.y,width:o.width*i.scaleX,height:o.height*i.scaleY}})(e,i);c.animate({left:[`${l.left}px`,`${n.left}px`],top:[`${l.top}px`,`${n.top}px`],width:[`${l.width}px`,`${n.width}px`],height:[`${l.height}px`,`${n.height}px`]},(0,rB.s)((0,rB.X)({},uj),{fill:"forwards"})).finished.catch(()=>void 0).then(d)})})((0,rB.s)((0,rB.X)({},i),{feedbackElement:n.feedbackElement})):(({element:e,feedbackElement:t,placeholder:r,translate:n})=>{var o;if(uz(t.ownerDocument))return;let i=null!=r?r:e,a={frameTransform:t.ownerDocument===i.ownerDocument?null:void 0},l=new i7(t,a),s=new i7(i,a),c=null!=(o=iY(iV(t).translate))?o:n,u={x:c.x-(l.center.x-s.center.x),y:c.y-(l.center.y-s.center.y)};return t.setAttribute("data-dnd-dropping",""),t.animate({translate:[`${c.x}px ${c.y}px 0`,`${u.x}px ${u.y}px 0`]},uj).finished.catch(()=>void 0).then(()=>{t.removeAttribute("data-dnd-dropping")})})(n)},[r,e,t])};function uC(e,t){e.forEach(e=>{"function"==typeof e?e(t):e&&"object"==typeof e&&"current"in e&&(e.current=t)})}(0,rB.$)();var uP=(0,ry.f)("DraggableComponent",{DraggableComponent:"_DraggableComponent_1627v_1","DraggableComponent-overlayWrapper":"_DraggableComponent-overlayWrapper_1627v_6","DraggableComponent-overlay":"_DraggableComponent-overlay_1627v_6","DraggableComponent-loadingOverlay":"_DraggableComponent-loadingOverlay_1627v_38","DraggableComponent--hover":"_DraggableComponent--hover_1627v_54","DraggableComponent--isSelected":"_DraggableComponent--isSelected_1627v_72","DraggableComponent-actionsOverlay":"_DraggableComponent-actionsOverlay_1627v_89","DraggableComponent-actions":"_DraggableComponent-actions_1627v_89","DraggableComponent-actionsAction":"_DraggableComponent-actionsAction_1627v_111"}),uT=({label:e,children:t,parentAction:r})=>(0,rR.jsxs)(rL.iu,{children:[(0,rR.jsxs)(rL.iu.Group,{children:[r,e&&(0,rR.jsx)(rL.iu.Label,{label:e})]}),(0,rR.jsx)(rL.iu.Group,{children:t})]}),uA=({children:e})=>(0,rR.jsx)(rR.Fragment,{children:e}),uM=({children:e,depth:t,componentType:r,id:n,index:o,zoneCompound:i,isLoading:a=!1,isSelected:l=!1,debug:s,label:c,autoDragAxis:u,userDragAxis:d,inDroppableZone:p=!0,itemRef:h})=>{let f=(0,rL.mm)(e=>{var t;return(null==(t=e.selectedItem)?void 0:t.props.id)===n?e.zoomConfig.zoom:1}),m=(0,rL.mm)(e=>e._experimentalFullScreenCanvas),g=(0,rL.mm)(e=>e.overrides),v=(0,rL.mm)(e=>e.dispatch),b=(0,rL.mm)(e=>e.iframe),_=(0,rv.useRef)(0),x=(0,rv.useContext)(um),[k,y]=(0,rv.useState)({}),w=(0,rv.useCallback)((e,t)=>{var r;null==(r=null==x?void 0:x.registerLocalZone)||r.call(x,e,t),y(r=>(0,rB.s)((0,rB.X)({},r),{[e]:t}))},[y]),j=(0,rv.useCallback)(e=>{var t;null==(t=null==x?void 0:x.unregisterLocalZone)||t.call(x,e),y(t=>{let r=(0,rB.X)({},t);return delete r[e],r})},[y]),z=Object.values(k).filter(Boolean).length>0,S=(0,rL.mm)(rq(e=>{var t;return null==(t=e.state.indexes.nodes[n])?void 0:t.path})),I=(0,rL.mm)(rq(e=>{let t=(0,r$.n)({index:o,zone:i},e.state);return e.permissions.getPermissions({item:t})})),E=(0,rv.useContext)(ug),C=(0,rL.jG)(),[P,T]=(0,rv.useState)(d||u),A=(0,rv.useMemo)(()=>cD(P),[P]),M=uE(E,n),{ref:N,isDragging:O,sortable:D}=sH({id:n,index:o,group:i,type:"component",data:{areaId:null==x?void 0:x.areaId,zone:i,index:o,componentType:r,containsActiveZone:z,depth:t,path:S||[],inDroppableZone:p},collisionPriority:t,collisionDetector:A,transition:{duration:200,easing:"cubic-bezier(0.2, 0, 0, 1)"},plugins:e=>[...e,aJ.configure({feedback:"clone",dropAnimation:M})]});(0,rv.useEffect)(()=>{let e=E.getState().enabledIndex[i];D.droppable.disabled=!e,D.draggable.disabled=!I.drag;let t=E.subscribe(e=>{D.droppable.disabled=!e.enabledIndex[i]});return $.current&&!I.drag?($.current.setAttribute("data-puck-disabled",""),()=>{var e;null==(e=$.current)||e.removeAttribute("data-puck-disabled"),t()}):t},[I.drag,i]);let[,L]=(0,rv.useState)(0),$=(0,rv.useRef)(null),B=(0,rv.useCallback)(e=>{N(e),$.current!==e&&($.current=e,L(e=>e+1),h&&uC([h],e))},[h,N]),[R,F]=(0,rv.useState)();(0,rv.useEffect)(()=>{var e,t,r;F(b.enabled?null==(e=$.current)?void 0:e.ownerDocument.body:null!=(r=null==(t=$.current)?void 0:t.closest("[data-puck-preview]"))?r:document.body)},[b.enabled]);let q=(0,rv.useCallback)(()=>{var e,t;if(!$.current)return;let r=$.current,n=r.getBoundingClientRect(),o=b.enabled?null:r.closest("[data-puck-preview]"),i=(()=>{let e=r;for(;e&&e!==document.documentElement;){if("fixed"===getComputedStyle(e).position)return!0;e=e.parentElement}return!1})(),a=null==o?void 0:o.getBoundingClientRect(),l=o?uf(o):{x:0,y:0},s=i?{x:0,y:0}:uf(r),c=i?{x:0,y:0}:{x:s.x-l.x-(null!=(e=null==a?void 0:a.left)?e:0),y:s.y-l.y-(null!=(t=null==a?void 0:a.top)?t:0)};return{left:`${n.left+c.x}px`,top:`${n.top+c.y}px`,height:`${n.height}px`,width:`${n.width}px`,position:i?"fixed":void 0}},[b.enabled]),[W,H]=(0,rv.useState)(),V=(0,rv.useRef)(null),X=(0,rv.useRef)(null),U=(0,rv.useCallback)(()=>{H(q()),h&&uC([h],$.current)},[q,h]),Z=(0,rv.useCallback)(()=>{null==X.current&&(X.current=requestAnimationFrame(()=>{X.current=null,U()}))},[U]);(0,rv.useEffect)(()=>()=>{null!=X.current&&(cancelAnimationFrame(X.current),X.current=null)},[]),(0,rv.useEffect)(()=>{if($.current){let e=new ResizeObserver(()=>{Z()});return e.observe($.current),()=>{e.disconnect()}}},[Z,h]);let G=(0,rL.mm)(e=>e.nodes.registerNode),Y=(0,rL.mm)(e=>e.nodes.unregisterNode),K=(0,rv.useCallback)(()=>{eu(!1)},[]),J=(0,rv.useCallback)(()=>{eu(!0)},[]),Q=(0,rv.useRef)({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});(0,rv.useLayoutEffect)(()=>{Q.current.sync=U,Q.current.hideOverlay=K,Q.current.showOverlay=J},[K,J,U]),(0,rv.useEffect)(()=>(G(n,Q.current),()=>{Y(n)}),[n,G,Y]);let ee=(0,rv.useMemo)(()=>g.actionBar||uT,[g.actionBar]),et=(0,rv.useMemo)(()=>g.componentOverlay||uA,[g.componentOverlay]),er=(0,rv.useCallback)(e=>{E.getState().draggedItem||(e.target.closest("[data-puck-overlay-portal]")||e.stopPropagation(),m?v({type:"setUi",ui:{itemSelector:l?null:{index:o,zone:i}}}):v({type:"setUi",ui:{itemSelector:{index:o,zone:i}}}))},[o,i,n,l,m]),en=(0,rv.useCallback)(()=>{let{nodes:e,zones:t}=C.getState().state.indexes,r=e[n],o=(null==r?void 0:r.parentId)?e[null==r?void 0:r.parentId]:null;if(!o||!r.parentId)return;let i=`${o.parentId}:${o.zone}`,a=t[i].contentIds.indexOf(r.parentId);v({type:"setUi",ui:{itemSelector:{zone:i,index:a}}})},[x,S]),eo=(0,rv.useCallback)(()=>{v({type:"duplicate",sourceIndex:o,sourceZone:i})},[o,i]),ei=(0,rv.useCallback)(()=>{v({type:"remove",index:o,zone:i})},[o,i]),[ea,el]=(0,rv.useState)(!1),es=cb(ug,e=>e.hoveringComponent===n);(0,rv.useEffect)(()=>{if(!$.current)return;let e=$.current,t=e=>{E.getState().draggedItem?O?el(!0):el(!1):el(!0),e.stopPropagation()},r=e=>{e.stopPropagation(),el(!1)};return e.setAttribute("data-puck-component",n),e.setAttribute("data-puck-dnd",n),e.style.position="relative",e.addEventListener("click",er),e.addEventListener("mouseover",t),e.addEventListener("mouseout",r),()=>{e.removeAttribute("data-puck-component"),e.removeAttribute("data-puck-dnd"),e.removeEventListener("click",er),e.removeEventListener("mouseover",t),e.removeEventListener("mouseout",r)}},[$.current,er,z,i,n,O,p]);let[ec,eu]=(0,rv.useState)(!1),[ed,ep]=(0,rv.useState)(!0),[eh,ef]=(0,rv.useTransition)();(0,rv.useEffect)(()=>{ef(()=>{ea||es||l?(Z(),eu(!0),eg(!1)):eu(!1)})},[ea,es,l,b]);let[em,eg]=(0,rv.useState)(!1),ev=u_(e=>{e?ef(()=>{U(),ep(!0)}):ep(!1)});(0,rv.useEffect)(()=>{O&&eg(!0)},[O]),(0,rv.useEffect)(()=>{if(em)return ev()},[em,ev]),(0,rv.useEffect)(()=>{if(!ed||!(l||O))return;let e=$.current;if(!e)return;let t=e.ownerDocument,r=t.defaultView;if(!r)return;_.current=0,Z();let n=()=>Z(),o=()=>Z();t.addEventListener("scroll",n,!0),r.addEventListener("resize",o);let i=0,a=e=>{if(e-_.current>=100){_.current=e;let t=$.current;if(t){let e=t.getBoundingClientRect(),r=V.current;(!r||Math.abs(e.x-r.x)>.5||Math.abs(e.y-r.y)>.5||Math.abs(e.width-r.width)>.5||Math.abs(e.height-r.height)>.5)&&(V.current=e,Z())}}i=requestAnimationFrame(a)};return i=requestAnimationFrame(a),()=>{t.removeEventListener("scroll",n,!0),r.removeEventListener("resize",o),cancelAnimationFrame(i)}},[ed,l,O,Z]);let eb=(0,rv.useCallback)(e=>{if(e&&e.ownerDocument.defaultView){let t=e.getBoundingClientRect(),r=t.x<0,n=t.y;r&&(e.style.transformOrigin="left top",e.style.left="0px"),n<0&&(e.style.top="12px",r||(e.style.transformOrigin="right top"))}},[f]),e_=(0,rv.useRef)(null);(0,rv.useEffect)(()=>{eb(e_.current)},[e_.current,eb]),(0,rv.useEffect)(()=>{if(d)return void T(d);if($.current){let e=window.getComputedStyle($.current);if("inline"===e.display||"inline-block"===e.display)return void T("x")}T(u)},[$,d,u]);let ex=(0,rL.mP)("action-selectparent"),ek=(0,rL.mP)("action-duplicate"),ey=(0,rL.mP)("action-delete"),ew=(0,rv.useMemo)(()=>(null==x?void 0:x.areaId)&&(null==x?void 0:x.areaId)!=="root"&&(0,rR.jsx)(rL.iu.Action,{onClick:en,label:ex,children:(0,rR.jsx)(rL.X0,{size:16})}),[null==x?void 0:x.areaId,ex]),ej=(0,rv.useMemo)(()=>(0,rB.s)((0,rB.X)({},x),{areaId:n,zoneCompound:i,index:o,depth:t+1,registerLocalZone:w,unregisterLocalZone:j}),[x,n,i,o,t,w,j]),ez=(0,rL.mm)(e=>{var t;return(null==(t=e.currentRichText)?void 0:t.inlineComponentId)===n?e.currentRichText:null}),eS=I.duplicate||I.delete;return(0,rR.jsxs)(ub,{value:ej,children:[ed&&ec&&(0,l_.createPortal)((0,rR.jsxs)("div",{className:uP({isSelected:l,isDragging:O,hover:ea||es}),style:(0,rB.X)({},W),"data-puck-overlay":!0,children:[s,a&&(0,rR.jsx)("div",{className:uP("loadingOverlay"),children:(0,rR.jsx)(rL.cD,{})}),(0,rR.jsx)("div",{className:uP("actionsOverlay"),style:{top:52/f},children:(0,rR.jsx)("div",{className:uP("actions"),style:{transform:`scale(${1/f}`,top:-44/f,right:0,paddingLeft:8,paddingRight:8},ref:e_,children:(0,rR.jsxs)(ee,{parentAction:ew,label:c,children:[ez&&(0,rR.jsxs)(rR.Fragment,{children:[(0,rR.jsx)(r_.S,{editor:ez.editor,field:ez.field,inline:!0,readOnly:!1}),eS&&(0,rR.jsx)(rL.iu.Separator,{})]}),I.duplicate&&(0,rR.jsx)(rL.iu.Action,{onClick:eo,label:ek,children:(0,rR.jsx)(rL._0,{className:uP("actionsAction")})}),I.delete&&(0,rR.jsx)(rL.iu.Action,{onClick:ei,label:ey,children:(0,rR.jsx)(rL.Me,{className:uP("actionsAction")})})]})})}),(0,rR.jsx)("div",{className:uP("overlayWrapper"),children:(0,rR.jsx)(et,{componentId:n,componentType:r,hover:ea,isSelected:l,children:(0,rR.jsx)("div",{className:uP("overlay")})})})]}),R||document.body),e(B)]})};(0,rB.$)();var uN={DropZone:"_DropZone_wc2ks_1","DropZone--hasChildren":"_DropZone--hasChildren_wc2ks_11","DropZone--isAreaSelected":"_DropZone--isAreaSelected_wc2ks_24","DropZone--hoveringOverArea":"_DropZone--hoveringOverArea_wc2ks_25","DropZone--isRootZone":"_DropZone--isRootZone_wc2ks_25","DropZone-item":"_DropZone-item_wc2ks_39","DropZone-linePlaceholder":"_DropZone-linePlaceholder_wc2ks_43","DropZone-hitbox":"_DropZone-hitbox_wc2ks_55","DropZone--isEnabled":"_DropZone--isEnabled_wc2ks_63","DropZone--isAnimating":"_DropZone--isAnimating_wc2ks_74"};(0,rB.$)();var uO=(e,{allow:t,disallow:r})=>{if(!e)return!0;let n=new Set(t),o=new Set(r);return r?(o.has(e)&&n.has(e)&&o.delete(e),!o.has(e)):!t||n.has(e)};(0,rB.$)(),(0,rB.$)();var uD={Drawer:"_Drawer_1n90m_1","Drawer-draggable":"_Drawer-draggable_1n90m_8","Drawer-draggableBg":"_Drawer-draggableBg_1n90m_12","DrawerItem-draggable":"_DrawerItem-draggable_1n90m_22","DrawerItem--disabled":"_DrawerItem--disabled_1n90m_38",DrawerItem:"_DrawerItem_1n90m_22","Drawer--isDraggingFrom":"_Drawer--isDraggingFrom_1n90m_48","DrawerItem-name":"_DrawerItem-name_1n90m_72"};(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var uL=class{constructor(e,t){var r;this.scaleFactor=1,this.frameEl=null,this.frameRect=null,this.target=e,this.original=t,this.frameEl=document.querySelector("iframe#preview-frame"),this.frameEl&&(this.frameRect=this.frameEl.getBoundingClientRect(),this.scaleFactor=this.frameRect.width/((null==(r=this.frameEl.contentWindow)?void 0:r.innerWidth)||1))}get x(){return this.original.x}get y(){return this.original.y}get global(){return document!==this.target.ownerDocument&&this.frameRect?{x:this.x*this.scaleFactor+this.frameRect.left,y:this.y*this.scaleFactor+this.frameRect.top}:this.original}get frame(){return document===this.target.ownerDocument&&this.frameRect?{x:(this.x-this.frameRect.left)/this.scaleFactor,y:(this.y-this.frameRect.top)/this.scaleFactor}:this.original}};(0,rB.$)();var u$="u">typeof PointerEvent?PointerEvent:Event,uB=class extends u${constructor(e,t){super(e,t),this._originalTarget=null,this.originalTarget=t.originalTarget}set originalTarget(e){this._originalTarget=e}get originalTarget(){return this._originalTarget}};(0,rB.$)(),(0,rB.$)();var uR=(e,{isDraggingBetweenSlots:t=!1,isNewComponent:r=!1}={})=>"auto"===e?t||r?"static":"fluid":e;(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var uF=(e,t)=>{let r=e.indexes.nodes[t];if(!r)return;let n=`${r.parentId}:${r.zone}`,o=e.indexes.zones[n].contentIds.indexOf(t);return{zone:n,index:o}};function uq(e,t,r="force",n=!1,o){return(0,rB._)(this,null,function*(){let i=yield t().resolveComponentData(e,r);if(!i.didChange&&!n)return;let a=uF(t().state,i.node.props.id);a?t().dispatch({type:"replace",data:(0,rw.f)(i.node),destinationIndex:a.index,destinationZone:a.zone,ui:o}):console.warn(`Warning: Could not find component with id "${e.props.id}" to resolve its data. Component may have been removed or the id is invalid.`)})}(0,rB.$)();var uW=(e,t,r,n)=>(0,rB._)(null,null,function*(){var o,i,a;(0,n.getState().dispatch)({type:"move",sourceIndex:t.index,sourceZone:null!=(o=t.zone)?o:rw.i,destinationIndex:r.index,destinationZone:null!=(i=r.zone)?i:rw.i,recordHistory:!1});let l=null==(a=n.getState().state.indexes.nodes[e])?void 0:a.data;l&&(yield uq(l,n.getState,"move"))});function uH(e){return e?function e(t){return t?t.getAttribute("dir")||e(t.parentElement):"ltr"}(e):"ltr"}(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var uV=(e,t,r)=>Math.max(t,Math.min(r,e)),uX=(e,t)=>{let r=uV(e.x,Math.min(t.x1,t.x2),Math.max(t.x1,t.x2)),n=uV(e.y,Math.min(t.y1,t.y2),Math.max(t.y1,t.y2));return Math.hypot(e.x-r,e.y-n)};(0,rB.$)();var uU=(e,t,r=t.getComputedStyle(e))=>{let n=r.display,o="rtl"===uH(e);if("flex"===n||"inline-flex"===n){let e=r.flexDirection;if(e.startsWith("row")){let t="row-reverse"===e;return{axis:"x",reversed:o?!t:t}}return{axis:"y",reversed:"column-reverse"===e}}if("grid"===n||"inline-grid"===n){let e;return r.gridAutoFlow.startsWith("column")||((e=r.gridTemplateColumns.replace(/\[[^\]]*\]/g," ").trim())&&"none"!==e?e.split(/\s+/).length:0)>1?{axis:"x",reversed:o}:{axis:"y",reversed:!1}}return{axis:"y",reversed:!1}},uZ=({axis:e,reversed:t})=>{let r="x"===e,n=t?-1:1;return{horizontal:r,reversed:t,forward:n,start:e=>r?t?e.right:e.left:t?e.bottom:e.top,end:e=>r?t?e.left:e.right:t?e.top:e.bottom,isBefore:(e,t)=>n>0?e<=t:e>=t}},uG=(e,t,r)=>{var n,o;let i=e.ownerDocument.defaultView;if(!i)return null;let a=new Map(r.map((e,t)=>[e,t])),l=Array.from(e.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(e=>{var t,r;return{index:null!=(r=a.get(null!=(t=e.getAttribute("data-puck-component"))?t:""))?r:-1,el:e}}).filter(e=>-1!==e.index).sort((e,t)=>e.index-t.index).map(({index:e,el:t})=>({index:e,rect:t.getBoundingClientRect()}));if(0===l.length)return 0;let{horizontal:s,reversed:c,start:u,end:d}=uZ(uU(e,i)),p=(e,t,r,n=[r])=>{let o=1/0,i=-1/0;for(let e of n)o=Math.min(o,s?e.top:e.left),i=Math.max(i,s?e.bottom:e.right);return s?{index:e,x1:t,x2:t,y1:r.top,y2:r.bottom,laneStart:o,laneEnd:i}:{index:e,x1:r.left,x2:r.right,y1:t,y2:t,laneStart:o,laneEnd:i}},h=[],f=(e,t,r)=>p(e,"before"===r?u(t):d(t),t);for(let e=0;e<=l.length;e++){let t=l[e-1],r=l[e];if(r)if(t)if(r.index-t.index>1)h.push(f(t.index+1,t.rect,"after")),h.push(f(r.index,r.rect,"before"));else if(c?d(t.rect)<u(r.rect):d(t.rect)>u(r.rect))h.push(f(r.index,r.rect,"before")),h.push(f(r.index,t.rect,"after"));else{let e=(d(t.rect)+u(r.rect))/2;h.push(p(r.index,e,r.rect,[t.rect,r.rect]))}else h.push(f(r.index,r.rect,"before"));else h.push(f(t.index+1,t.rect,"after"))}let m=s?t.y:t.x,g=null,v=1/0,b=null,_=1/0;for(let e of h){let r=uX(t,e);r<v&&(v=r,g=e),m>=e.laneStart&&m<=e.laneEnd&&r<_&&(_=r,b=e)}return null!=(o=null==(n=null!=b?b:g)?void 0:n.index)?o:null};(0,rB.$)();var uY=(e,t)=>{var r;let n=document.querySelector("iframe#preview-frame");if(!n||e.ownerDocument!==n.contentDocument)return t;let o=n.getBoundingClientRect(),i=o.width/((null==(r=n.contentWindow)?void 0:r.innerWidth)||1);return i>0?{x:(t.x-o.left)/i,y:(t.y-o.top)/i}:t},uK=(0,rv.createContext)({dragListeners:{}}),uJ=({children:e,disableAutoScroll:t,behavior:r="auto"})=>{let n,o,i,a,l,s,c,u,d=(0,rL.mm)(e=>e.dispatch),p=(0,rL.mm)(e=>e.instanceId),h=(0,rL.jG)(),f=(0,rv.useRef)(null),m=(n=(0,rv.useRef)(null),(0,rv.useCallback)(e=>{cN.setState({fallbackEnabled:!1});let t=(0,r$.$)();n.current=t,setTimeout(()=>{n.current===t&&(cN.setState({fallbackEnabled:!0}),e.collisionObserver.forceUpdate(!0))},100)},[])),[g]=(0,rv.useState)(()=>{let e=new Map;return(0,rW.f)(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(t,r)=>{e.set(t,r)},unregisterRootVirtualizer:t=>{e.delete(t)},scrollToComponent:t=>{let r=Array.from(e.values());if(r.length>0)for(let e of r){let r=e.resolveIndex(t);r<0||e.virtualizer.scrollToIndex(r,{behavior:"auto",align:"auto"})}else{let e=ux(),r=null==e?void 0:e.querySelector(uy(t));null==r||r.scrollIntoView({behavior:"smooth"})}}}))}),v=(0,rv.useCallback)(e=>{let{zoneDepthIndex:t={},areaDepthIndex:r={}}=g.getState()||{},n=Object.keys(t).length>0,o=Object.keys(r).length>0,i=!1,a=!1;return e.zone&&!t[e.zone]?i=!0:!e.zone&&n&&(i=!0),e.area&&!r[e.area]?a=!0:!e.area&&o&&(a=!0),{zoneChanged:i,areaChanged:a}},[g]),b=(0,rv.useCallback)((e,t)=>{let{zoneChanged:r,areaChanged:n}=v(e);(r||n)&&(g.setState({zoneDepthIndex:e.zone?{[e.zone]:!0}:{},areaDepthIndex:e.area?{[e.area]:!0}:{}}),m(t),setTimeout(()=>{t.collisionObserver.forceUpdate(!0)},50),f.current=null)},[g]),_=(0,sX.s)(b,100),x=()=>{_.cancel(),f.current=null};(0,rv.useEffect)(()=>{},[]);let[k]=(0,rv.useState)(()=>[...t?lf.filter(e=>e!==a8):lf,(({onChange:e},t)=>class extends oM{constructor(r,n){if(super(r),"u"<typeof window)return;this.registerEffect(()=>{var n;let o,i,a=(n=n=>{let o=new uL(n instanceof uB&&n.originalTarget||n.target,{x:n.clientX,y:n.clientY});document.elementsFromPoint(o.global.x,o.global.y).some(e=>e.id===t)&&e(((e,t)=>{var r;let n=((e,t)=>{let r=[],n=e.target.ownerDocument.elementsFromPoint(e.x,e.y),o=n.find(e=>e.getAttribute("data-puck-preview")),i=n.find(e=>e.getAttribute("data-puck-drawer"));if(i&&(n=[i]),o){let t=ux();t&&(n=t.elementsFromPoint(e.frame.x,e.frame.y))}if(n)for(let o=0;o<n.length;o++){let i=n[o],a=i.getAttribute("data-puck-dropzone"),l=i.getAttribute("data-puck-dnd"),s=i.hasAttribute("data-puck-dnd-void");if((a||l)&&!s){let t=i.getBoundingClientRect(),r={left:t.left+6,right:t.right-6,top:t.top+6,bottom:t.bottom-6};if(e.frame.x<r.left||e.frame.x>r.right||e.frame.y>r.bottom||e.frame.y<r.top)continue}if(a){let e=t.registry.droppables.get(a);e&&r.push(e)}if(l){let e=t.registry.droppables.get(l);e&&r.push(e)}}return r})(e,t);if(n.length>0){let e=n.sort((e,t)=>{let r=e.data,n=t.data;return r.depth>n.depth?1:n.depth>r.depth?-1:0}),o=t.dragOperation.source,i=e.findIndex(e=>e.id===(null==o?void 0:o.id)),a=null==o?void 0:o.id,l=[...e];a&&i>-1&&l.splice(i,1),(l=l.filter(e=>{let t=e.data;if(a&&i>-1&&t.path.indexOf(a)>-1)return!1;if("dropzone"===e.type){let t=e.data;if(!t.isDroppableTarget||t.areaId===a)return!1}else if("component"===e.type&&!e.data.inDroppableZone)return!1;return!0})).reverse();let s=l[0];if(!s)return{zone:null,area:null};let c=s.data,u="containsActiveZone"in c;return{zone:(e=>{let t=null==e?void 0:e.id;if(!e)return null;if("component"===e.type){let r=e.data;t=r.containsActiveZone?null:r.zone}else if("void"===e.type)return"void";return t})(s),area:u&&c.containsActiveZone?l[0].id:null==(r=l[0])?void 0:r.data.areaId}}return{zone:rw.i,area:rw.U}})(o,r),r)},i=0,function(...e){let t=performance.now(),r=this;if(t-i>=50)n.apply(r,e),i=t;else{let a;null==o||o(),a=setTimeout(()=>{n.apply(r,e),i=performance.now()},50-(t-i)),o=()=>clearTimeout(a)}}),l=e=>{a(e)};return document.body.addEventListener("pointermove",l,{capture:!0}),()=>{document.body.removeEventListener("pointermove",l,{capture:!0})}})}})({onChange:(e,t)=>{let r=g.getState(),{zoneChanged:n,areaChanged:o}=v(e),i=t.dragOperation.status.dragging;if(o||n){let t={},r={};e.zone&&(t={[e.zone]:!0}),e.area&&(r={[e.area]:!0}),g.setState({nextZoneDepthIndex:t,nextAreaDepthIndex:r})}if("void"!==e.zone&&(null==r?void 0:r.zoneDepthIndex.void))return void b(e,t);if(o){if(i){let r=f.current;r&&r.area===e.area&&r.zone===e.zone||(x(),_(e,t),f.current=e)}else x(),b(e,t);return}n&&b(e,t),x()}},p)]),y=cE(),[w,j]=(0,rv.useState)({}),z=(0,rv.useRef)(null),S=(0,rv.useRef)(void 0),{getTargetIndex:I,setActive:E,startScrollTracking:C,stopScrollTracking:P,update:T}=(o=(0,rL.jG)(),i=(0,rv.useRef)(null),a=(0,rv.useCallback)(e=>{var t;let r=null==(t=ux())?void 0:t.querySelector("[data-puck-entry]");e?null==r||r.setAttribute("data-puck-line-drag","true"):null==r||r.removeAttribute("data-puck-line-drag")},[]),l=(0,rv.useCallback)((e,t)=>{var r;let n=null==(r=ux())?void 0:r.querySelector(uw(e));if(!n)return null;let i=uY(n,t.dragOperation.position.current);return uG(n,i,uI(o.getState().state,e))},[o]),s=(0,rv.useCallback)(e=>{var t;let{previewIndex:r={}}=g.getState(),n=Object.values(r).find(e=>null==e?void 0:e.linePlaceholder);if(!n)return;let i=null==(t=ux())?void 0:t.querySelector(uw(n.zone));if(!i)return;let a=uY(i,e.dragOperation.position.current),l=i.getBoundingClientRect();if(!(a.x>=l.left&&a.x<=l.right&&a.y>=l.top&&a.y<=l.bottom))return;let s=uG(i,a,uI(o.getState().state,n.zone));null!==s&&s!==n.index&&g.setState({previewIndex:(0,rB.s)((0,rB.X)({},r),{[n.zone]:(0,rB.s)((0,rB.X)({},n),{index:s})})})},[o,g]),c=(0,rv.useCallback)(()=>{var e;null==(e=i.current)||e.call(i),i.current=null},[]),u=(0,rv.useCallback)(e=>{c();let t=ux();if(!t)return;let r=null,n=()=>{null===r&&(r=requestAnimationFrame(()=>{r=null,s(e)}))};t.addEventListener("scroll",n,{capture:!0,passive:!0}),i.current=()=>{null!==r&&cancelAnimationFrame(r),t.removeEventListener("scroll",n,{capture:!0})}},[c,s]),(0,rv.useEffect)(()=>c,[c]),{getTargetIndex:l,setActive:a,startScrollTracking:u,stopScrollTracking:c,update:s}),A=(0,rv.useMemo)(()=>({mode:"edit",areaId:"root",depth:0}),[]);return(0,rR.jsx)(uK.Provider,{value:{dragListeners:w,setDragListeners:j},children:(0,rR.jsx)(lB,{plugins:k,sensors:y,onDragEnd:(e,t)=>{var r,n;let o;P();let i=null==(r=ux())?void 0:r.querySelector("[data-puck-entry]");null==i||i.removeAttribute("data-puck-dragging");let{source:a,target:l}=e.operation;if(!a){E(!1),g.setState({draggedItem:null});return}let{zone:s,index:c}=a.data,{previewIndex:u={}}=g.getState()||{},p=null!=(n=Object.values(u).find(e=>(null==e?void 0:e.props.id)===a.id&&!e.ghost))?n:null,f=!e.canceled&&(null==l?void 0:l.type)!=="void"&&(null==p?void 0:p.linePlaceholder)?(({zones:e,itemId:t,targetZone:r,getExpectedOrder:n})=>{let o=ux();if(!o||uz(o))return()=>{};let i=Array.from(new Set(e)).map(e=>`${uw(e)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(", "),a=()=>{let e=new Map;return o.querySelectorAll(i).forEach(r=>{let n=r.getAttribute("data-puck-component");n&&n!==t&&e.set(n,{el:r,rect:r.getBoundingClientRect()})}),e},l=a(),s=n();return()=>{uS(o,{zones:e,itemId:t,targetZone:r,getExpectedOrder:n,initialExpectedOrder:s},()=>{a().forEach(({el:e,rect:t},r)=>{var n;let o=null==(n=l.get(r))?void 0:n.rect;if(!o)return;let i=o.x-t.x,a=o.y-t.y;1>Math.abs(i)&&1>Math.abs(a)||e.animate({translate:[`${i}px ${a}px 0`,"0px 0px 0"]},uj)})})}})({zones:S.current?[S.current.zone,p.zone]:[p.zone],itemId:"move"===p.type?p.props.id:void 0,targetZone:p.zone,getExpectedOrder:()=>uI(h.getState().state,p.zone)}):null;o=na(()=>{"idle"===a.status&&((()=>{var r,n,o,i,a;if(E(!1),g.setState({draggedItem:null}),e.canceled||(null==l?void 0:l.type)==="void"){g.setState({previewIndex:{}}),null==(r=w.dragend)||r.forEach(r=>{r(e,t)}),d({type:"setUi",ui:{itemSelector:null,isDragging:!1}});return}let u=p&&p.linePlaceholder&&S.current&&p.zone===S.current.zone&&p.index>S.current.index?p.index-1:null!=(n=null==p?void 0:p.index)?n:c;if(p){if(g.setState({previewIndex:{}}),"insert"===p.type){let e,t,r;e=p.componentType,t=p.zone,r=p.index,(0,rB._)(null,null,function*(){let{getState:n}=h,o=(0,r$.$)(e),i={type:"insert",componentType:e,destinationIndex:r,destinationZone:t,id:o},a=n().state,l=(0,r$.q)(a,i,n()),s=n().dispatch;s((0,rB.s)((0,rB.X)({},i),{recordHistory:!0}));let c={index:r,zone:t};s({type:"setUi",ui:{itemSelector:c}});let u=(0,r$.n)(c,l);u&&(yield uq(u,n,"insert"))})}else S.current&&uW(p.props.id,S.current,(0,rB.s)((0,rB.X)({},p),{index:u}),h);null==f||f()}let m=(null==(o=S.current)?void 0:o.zone)!==(null==p?void 0:p.zone)||(null==(i=S.current)?void 0:i.index)!==u;d({type:"setUi",ui:{itemSelector:p?{index:u,zone:p.zone}:{index:c,zone:s},isDragging:!1},recordHistory:m}),null==(a=w.dragend)||a.forEach(r=>{r(e,t)})})(),null==o||o())})},onDragMove:(e,t)=>{var r;T(t),null==(r=w.dragmove)||r.forEach(r=>{r(e,t)})},onDragOver:(e,t)=>{var n,o,i,a,l,s;if(e.preventDefault(),!(null==(n=g.getState())?void 0:n.draggedItem))return;x();let{source:c,target:u}=e.operation;if(!u||!c||"void"===u.type)return;let[d]=c.id.split(":"),[p]=u.id.split(":"),f=c.data,m=f.zone,v=f.index,b="",_=0;if("component"===u.type){let e=u.data;b=e.zone;let r=null==(o=t.collisionObserver.collisions[0])?void 0:o.data;_=c$({position:cL(null==r?void 0:r.direction,uH(u.element)),sourceIndex:v,targetIndex:e.index,isSameZone:m===b})}else b=u.id.toString(),_=0;let k=(null==(i=h.getState().state.indexes.nodes[u.id])?void 0:i.path)||[];if(!(p===d||k.find(e=>{let[t]=e.split(":");return t===d}))){if("new"===z.current){let e="static"===uR(r,{isNewComponent:!0});e&&(_=null!=(a=I(b,t))?a:_),E(e),g.setState({previewIndex:{[b]:{componentType:f.componentType,type:"insert",index:_,zone:b,element:c.element,props:{id:c.id.toString()},linePlaceholder:e}}})}else{S.current||(S.current={zone:f.zone,index:f.index});let e=(0,r$.n)(S.current,h.getState().state);if(e){let n=S.current.zone,o=n!==b,i="static"===uR(r,{isDraggingBetweenSlots:o});i&&(_=null!=(l=I(b,t))?l:_),E(i);let a={[b]:{componentType:f.componentType,type:"move",index:_,zone:b,props:e.props,element:c.element,linePlaceholder:i}};if(i&&o){let t=g.getState().previewIndex[n],r=S.current.index;t&&!t.linePlaceholder&&(r=t.index),a[n]={componentType:f.componentType,type:"move",index:r,zone:n,props:e.props,element:c.element,ghost:!0}}g.setState({previewIndex:a})}}null==(s=w.dragover)||s.forEach(r=>{r(e,t)})}},onDragStart:(e,t)=>{var n;"fluid"!==r&&C(t);let{source:o}=e.operation;if((null==o?void 0:o.type)==="component"){let e=o.data,t={zone:e.zone,index:e.index};S.current=t;let n=(0,r$.n)(t,h.getState().state);if(n){let t="static"===uR(r);E(t),g.setState({previewIndex:{[e.zone]:{componentType:e.componentType,type:"move",index:e.index,zone:e.zone,props:n.props,element:o.element,linePlaceholder:t}}})}}null==(n=w.dragstart)||n.forEach(r=>{r(e,t)})},onBeforeDragStart:e=>{var t,r,n,o;z.current=(null==(t=e.operation.source)?void 0:t.type)==="drawer"?"new":"existing",S.current=void 0,g.setState({draggedItem:e.operation.source}),(null==(r=h.getState().selectedItem)?void 0:r.props.id)!==(null==(n=e.operation.source)?void 0:n.id)?d({type:"setUi",ui:{itemSelector:null,isDragging:!0},recordHistory:!1}):d({type:"setUi",ui:{isDragging:!0},recordHistory:!1});let i=null==(o=ux())?void 0:o.querySelector("[data-puck-entry]");null==i||i.setAttribute("data-puck-dragging","true"),E(!1)},children:(0,rR.jsx)(uv,{store:g,children:(0,rR.jsx)(ub,{value:A,children:e})})})})},uQ=({children:e,disableAutoScroll:t,behavior:r})=>"LOADING"===(0,rL.mm)(e=>e.status)?e:(0,rR.jsx)(uJ,{disableAutoScroll:t,behavior:r,children:e}),u0=(0,ry.f)("Drawer",uD),u1=(0,ry.f)("DrawerItem",uD),u2=({children:e,name:t,label:r,dragRef:n,isDragDisabled:o})=>{let i=(0,rv.useMemo)(()=>e||(({children:e})=>(0,rR.jsx)("div",{className:u1("default"),children:e})),[e]);return(0,rR.jsx)("div",{className:u1({disabled:o}),ref:n,onMouseDown:e=>e.preventDefault(),"data-testid":n?`drawer-item:${t}`:"","data-puck-drawer-item":!0,children:(0,rR.jsx)(i,{name:t,children:(0,rR.jsx)("div",{className:u1("draggableWrapper"),children:(0,rR.jsxs)("div",{className:u1("draggable"),children:[(0,rR.jsx)("div",{className:u1("name"),children:null!=r?r:t}),(0,rR.jsx)("div",{className:u1("icon"),children:(0,rR.jsx)(cw,{})})]})})})})},u4=({children:e,name:t,label:r,id:n,isDragDisabled:o})=>{let i=uE((0,rv.useContext)(ug)),{ref:a}=function(e){let{disabled:t,data:r,element:n,handle:o,id:i,modifiers:a,sensors:l,plugins:s}=e,c=lF(t=>new lv(lE(lN({},e),lC({register:!1,handle:lx(o),element:lx(n)})),t)),u=ly(c,lq);return lz(i,()=>c.id=i),lS(o,e=>c.handle=e),lS(n,e=>c.element=e),lz(r,()=>r&&(c.data=r)),lz(t,()=>c.disabled=!0===t),lz(l,()=>c.sensors=l),lz(a,()=>c.modifiers=a,void 0,nT),lz(s,()=>c.plugins=s,void 0,nT),lz(e.alignment,()=>c.alignment=e.alignment),{draggable:u,get isDragging(){return u.isDragging},get isDropping(){return u.isDropping},get isDragSource(){return u.isDragSource},handleRef:(0,rv.useCallback)(e=>{c.handle=null!=e?e:void 0},[c]),ref:(0,rv.useCallback)(e=>{var t,r;(e||null==(t=c.element)||!t.isConnected||(null==(r=c.manager)?void 0:r.dragOperation.status.idle))&&(c.element=null!=e?e:void 0)},[c])}}({id:n,data:{componentType:t},disabled:o,type:"drawer",plugins:[aJ.configure({dropAnimation:i})]});return(0,rR.jsxs)("div",{className:u0("draggable"),children:[(0,rR.jsx)("div",{className:u0("draggableBg"),children:(0,rR.jsx)(u2,{name:t,label:r,children:e})}),(0,rR.jsx)("div",{className:u0("draggableFg"),children:(0,rR.jsx)(u2,{name:t,label:r,dragRef:a,isDragDisabled:o,children:e})})]})},u3=({children:e,droppableId:t,direction:r})=>{t&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),r&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");let n=ua(),{ref:o}=l4({id:n,type:"void",collisionPriority:0});return(0,rR.jsx)("div",{className:u0(),ref:o,"data-puck-dnd":n,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:e})};u3.Item=({name:e,children:t,id:r,label:n,index:o,isDragDisabled:i})=>{let a=r||e,[l,s]=(0,rv.useState)((0,r$.$)(a));return void 0!==o&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),!function(e,t,r=[]){let{setDragListeners:n}=(0,rv.useContext)(uK);(0,rv.useEffect)(()=>{n&&n(r=>(0,rB.s)((0,rB.X)({},r),{[e]:[...r[e]||[],t]}))},r)}("dragend",()=>{s((0,r$.$)(a))},[a]),(0,rR.jsx)("div",{children:(0,rR.jsx)(u4,{name:e,label:n,id:l,isDragDisabled:i,children:t})},l)},(0,rB.$)();var u6=(e,t)=>e.getState().state.indexes.zones[t].contentIds.length;(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var u5=({componentId:e,zone:t})=>{let r=(0,rL.mm)(e=>e.config),n=(0,rL.mm)(e=>e.metadata),o=(0,rL.mm)(rq(r=>{var n,o;let i=r.state.indexes;return(null!=(o=null==(n=i.zones[`${e}:${t}`])?void 0:n.contentIds)?o:[]).map(e=>i.nodes[e].flatData)}));return(0,rR.jsx)(rM,{content:o,zone:t,config:r,metadata:n})};function u8(e,t,r,n,o){let i=(0,rv.useRef)(null),a=(0,rv.useRef)(null),l=(0,rv.useRef)(t.props),s=(0,rv.useMemo)(()=>rS(r,n,o),[r,n,o]),c=(0,rv.useMemo)(()=>{var r,n,o,c;let u,d="root"===t.type?e.root:null==(r=e.components)?void 0:r[t.type],p=null!=(n=null==d?void 0:d.fields)?n:{},h=i.current!==s,f=!1;if(!a.current||h)for(let e in t.props)(null==(o=p[e])?void 0:o.type)==="slot"&&(f=!0);else for(let e of(u=["id"],new Set([...Object.keys(t.props),...Object.keys(a.current)])))t.props[e]!==a.current[e]&&(u.push(e),(null==(c=p[e])?void 0:c.type)==="slot"&&(f=!0));let m=(0,rw.t)(t,s,e,!1,f,u).props;return a.current=t.props,i.current=s,l.current=u?(0,rB.X)((0,rB.X)({},l.current),m):m,l.current},[e,t,s]);return(0,rv.useMemo)(()=>(0,rB.X)((0,rB.X)({},t.props),c),[t.props,c])}(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var u7=(e,t={})=>{if(!e)return;let{disableDrag:r=!1,disableDragOnFocus:n=!0}=t,o=e=>{e.stopPropagation()};e.addEventListener("mouseover",o,{capture:!0});let i=()=>{setTimeout(()=>{e.addEventListener("pointerdown",o,{capture:!0})},200)},a=()=>{e.removeEventListener("pointerdown",o,{capture:!0})};return r?e.addEventListener("pointerdown",o,{capture:!0}):n&&(e.addEventListener("focus",i,{capture:!0}),e.addEventListener("blur",a,{capture:!0})),e.setAttribute("data-puck-overlay-portal","true"),()=>{e.removeEventListener("mouseover",o,{capture:!0}),r?e.removeEventListener("pointerdown",o,{capture:!0}):n&&(e.removeEventListener("focus",i,{capture:!0}),e.removeEventListener("blur",a,{capture:!0})),e.removeAttribute("data-puck-overlay-portal")}};(0,rB.$)();var u9=(0,ry.f)("InlineTextField",{InlineTextField:"_InlineTextField_104qp_1"}),de=(0,rv.memo)(({propPath:e,componentId:t,value:r,isReadOnly:n,opts:o={}})=>{var i;let a=(0,rv.useRef)(null),l=(0,rL.jG)(),s=null!=(i=o.disableLineBreaks)&&i;(0,rv.useEffect)(()=>{let n=l.getState(),o=n.state.indexes.nodes[t].data;if(!n.getComponentConfig(o.type))throw Error(`InlineTextField Error: No config defined for ${o.type}`);if(a.current){let n=null!=r?r:"";n!==a.current.innerText&&a.current.replaceChildren(n);let o=u7(a.current),i=r=>(0,rB._)(null,null,function*(){let n=l.getState().state.indexes.nodes[t],o=r.target.innerText;s&&(o=o.replaceAll(/\n/gm,""));let i=cc(n.data.props,e,o);yield uq((0,rB.s)((0,rB.X)({},n.data),{props:i}),l.getState,"replace",!0)});return a.current.addEventListener("input",i),()=>{var e;null==(e=a.current)||e.removeEventListener("input",i),null==o||o()}}},[l,a.current,r,s]);let[c,u]=(0,rv.useState)(!1),[d,p]=(0,rv.useState)(!1);return(0,rR.jsx)("span",{className:u9(),ref:a,contentEditable:c||d?"plaintext-only":"false",onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let r=uF(l.getState().state,t);l.getState().setUi({itemSelector:r})},onKeyDown:e=>{e.stopPropagation(),(s&&"Enter"===e.key||n)&&e.preventDefault()},onKeyUp:e=>{e.stopPropagation(),e.preventDefault()},onMouseOverCapture:()=>u(!0),onMouseOutCapture:()=>u(!1),onFocus:()=>p(!0),onBlur:()=>p(!1)})});(0,rB.$)();var dt=(0,rv.lazy)(()=>e.A(67900).then(e=>({default:e.Editor}))),dr=(0,rv.lazy)(()=>e.A(2728).then(e=>({default:e.RichTextRender}))),dn=(0,rv.memo)(({value:e,componentId:t,propPath:r,field:n,id:o})=>{let i=(0,rv.useRef)(null),a=(0,rL.jG)();(0,rv.useEffect)(()=>{if(!i.current)return;let e=u7(i.current,{disableDragOnFocus:!0});return()=>null==e?void 0:e()},[i.current]);let l=(0,rv.useCallback)((e,n)=>(0,rB._)(null,null,function*(){let o=a.getState().state.indexes.nodes[t],i=cc(o.data.props,r,e);yield uq((0,rB.s)((0,rB.X)({},o.data),{props:i}),a.getState,"replace",!0,n)}),[a,t,r]),s=(0,rv.useCallback)(e=>{a.setState({currentRichText:{inlineComponentId:t,inline:!0,field:n,editor:e,id:o}})},[n,t]);if(!n.contentEditable)return(0,rR.jsx)(rv.Suspense,{fallback:(0,rR.jsx)(rC,{content:e}),children:(0,rR.jsx)(dr,{content:e,field:n})});let c={content:e,onChange:l,field:n,inline:!0,onFocus:s,id:o,name:r};return(0,rR.jsx)("div",{ref:i,onClick:e=>{e.preventDefault(),e.stopPropagation()},onClickCapture:e=>{e.preventDefault(),e.stopPropagation();let r=uF(a.getState().state,t);a.getState().setUi({itemSelector:r})},children:(0,rR.jsx)(rv.Suspense,{fallback:(0,rR.jsx)(un,(0,rB.X)({},c)),children:(0,rR.jsx)(dt,(0,rB.X)({},c))})})});dn.displayName="InlineEditorWrapper",(0,rB.$)(),(0,rB.$)();var di=(0,rv.memo)(({Component:e,componentProps:t})=>(0,rR.jsx)(e,(0,rB.X)({},t)),(e,t)=>{let r=!0;return"puck"in e.componentProps&&"puck"in t.componentProps&&(r=(0,sU.f)(e.componentProps.puck,t.componentProps.puck)),e.Component===t.Component&&function(e,t,r=[]){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t||Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;let n=new Set(r),o=Object.keys(e).filter(e=>!n.has(e)),i=Object.keys(t).filter(e=>!n.has(e));if(o.length!==i.length)return!1;for(let r=0;r<o.length;r++){let n=o[r];if(!Object.prototype.hasOwnProperty.call(t,n)||!Object.is(e[n],t[n]))return!1}return!0}(e.componentProps,t.componentProps,["puck"])&&r});(0,rB.$)();var da=new Map,dl=({contentIds:e,zoneCompound:t,renderItem:r})=>{let n=(0,rL.mm)(e=>{var t,r;return null!=(r=null==(t=e.selectedItem)?void 0:t.props.id)?r:null}),o=ux(),i=(0,rv.useContext)(ug),a=cb(ug,e=>{var t;let r=null==(t=e.draggedItem)?void 0:t.id;return r?String(r):null}),l=cb(ug,e=>{var t,r,n;if(null==(t=e.draggedItem)?void 0:t.id){let[t]=null!=(n=Object.entries(null!=(r=e.previewIndex)?r:{}).find(([,e])=>!(null==e?void 0:e.ghost)))?n:[];return null==t?void 0:t.split(":")[0]}return null}),s=null==o?void 0:o.defaultView,c=(0,rv.useRef)(new Map),u=(0,rL.jG)(),d=(0,rv.useCallback)(t=>{var r,n,o,i;if(!t||"root"===t)return -1;let a=e.indexOf(t);if(a>-1)return a;let l=null!=(o=null==(n=null==(r=u.getState().state.indexes.nodes)?void 0:r[t])?void 0:n.path)?o:[];for(let t=l.length-1;t>=0;t-=1){let r=null==(i=l[t])?void 0:i.split(":")[0];if(!r||"root"===r)continue;let n=e.indexOf(r);if(n>-1)return n}return -1},[u,e]),p=(0,rv.useMemo)(()=>{let e=new Set;return[n,a,l].forEach(t=>{let r=d(t);r>-1&&e.add(r)}),Array.from(e).sort((e,t)=>e-t)},[l,a,d,n]),h=(0,rv.useCallback)(e=>{let t=s4(e);return p.forEach(e=>{t.includes(e)||t.push(e)}),t.sort((e,t)=>e-t),t},[p]),f=ca({count:e.length,getItemKey:t=>e[t],estimateSize:t=>{var r,n;return r=e[t],null!=(n=da.get(r))?n:320},getScrollElement:()=>null!=s?s:null,overscan:5,observeElementRect:(e,t)=>s?((e,t)=>{let r=e.scrollElement;if(!r)return;let n=()=>{t({width:r.innerWidth,height:r.innerHeight})};return n(),r.addEventListener("resize",n,s6),()=>{r.removeEventListener("resize",n)}})(e,t):s3(e,t),observeElementOffset:(e,t)=>s?s8(e,t,t=>e.options.horizontal?t.scrollX:t.scrollY):s7(e,t),scrollToFn:(e,t,r)=>ce(e,t,r),rangeExtractor:h,initialOffset:()=>s?s.scrollY:0});(0,rv.useEffect)(()=>(i.getState().registerRootVirtualizer(t,{resolveIndex:e=>d(e),virtualizer:f}),()=>{i.getState().unregisterRootVirtualizer(t)}),[d,f,t,i]);let m=(0,rv.useCallback)(e=>{let t=c.current.get(e);if(t)return t;let r=t=>{if(!t)return;let r=Math.ceil(t.getBoundingClientRect().height)||320;"number"==typeof r&&r>0&&(r<=0||da.set(e,r))};return c.current.set(e,r),r},[]);(0,rv.useEffect)(()=>{let t=new Set(e);Array.from(c.current.keys()).forEach(e=>{t.has(e)||c.current.delete(e)})},[e]);let g=f.getVirtualItems(),v=f.getTotalSize(),b=(0,rv.useMemo)(()=>{let t=[],n=0,o=-1;g.forEach(i=>{if(!i)return;let a=e[i.index],l=Math.max(i.start-n,0);l>0&&t.push((0,rR.jsx)("div",{style:{height:`${l}px`}},`gap:${o}:${i.index}`)),t.push(r({componentId:a,index:i.index,measureRef:m(a)})),n=i.end,o=i.index});let i=Math.max(v-n,0);return i>0&&t.push((0,rR.jsx)("div",{style:{height:`${i}px`}},`gap:${o}:end`)),t},[v,g,m]);return(0,rR.jsx)(rR.Fragment,{children:b})};(0,rB.$)();var ds=(0,ry.f)("DropZone",uN),dc="var(--puck-line-placeholder-width, 2px)",du=({zoneRef:e,contentIds:t,index:r})=>{let[n,o]=(0,rv.useState)();return((0,rv.useLayoutEffect)(()=>{var n,i,a,l;let s,c=e.current,u=null==c?void 0:c.ownerDocument.defaultView;if(!c||!u)return;let d=e=>parseFloat(null!=e?e:"")||0,p=e=>{let r=t[e];if(void 0===r)return;let n=c.querySelector(`:scope > ${uy(r)}:not([data-dnd-dragging])`);if(n)return{el:n,rect:n.getBoundingClientRect()}},h=c.getBoundingClientRect(),f=u.getComputedStyle(c),m=p(r-1),g=p(r),v=null!=g?g:m,{horizontal:b,reversed:_,forward:x,start:k,end:y,isBefore:w}=uZ(uU(c,u,f)),j=d(b?f.columnGap:f.rowGap),z=(e,t)=>{var r;return d(null==(r=e?u.getComputedStyle(e):void 0)?void 0:r["start"===t==!_?b?"marginLeft":"marginTop":b?"marginRight":"marginBottom"])},S=d(f.borderLeftWidth),I=d(f.borderTopWidth),E=d(f.borderRightWidth),C=d(f.borderBottomWidth);s=g?m&&w(y(m.rect),k(g.rect))?(y(m.rect)+k(g.rect))/2:k(g.rect)-x*(Math.max(z(g.el,"start"),j)/2):m?y(m.rect)+x*(Math.max(z(m.el,"end"),j)/2):b?_?h.right-E-d(f.paddingRight):h.left+S+d(f.paddingLeft):_?h.bottom-C-d(f.paddingBottom):h.top+I+d(f.paddingTop),b?o({top:(null!=(n=null==v?void 0:v.rect.top)?n:h.top+I+d(f.paddingTop))-h.top+c.scrollTop-I,height:null!=(i=null==v?void 0:v.rect.height)?i:h.height-I-C-d(f.paddingTop)-d(f.paddingBottom),left:uV(s-h.left+c.scrollLeft-S,0,c.scrollWidth),width:dc,transform:"translateX(-50%)"}):o({left:(null!=(a=null==v?void 0:v.rect.left)?a:h.left+S+d(f.paddingLeft))-h.left+c.scrollLeft-S,width:null!=(l=null==v?void 0:v.rect.width)?l:h.width-S-E-d(f.paddingLeft)-d(f.paddingRight),top:uV(s-h.top+c.scrollTop-I,0,c.scrollHeight),height:dc,transform:"translateY(-50%)"})},[e,t,r]),n)?(0,rR.jsx)("div",{className:ds("linePlaceholder"),style:n,"data-puck-line-placeholder":!0}):null},dd=(0,ry.f)("DropZone",uN),dp=({element:e,label:t,override:r})=>e?(0,rR.jsx)("div",{dangerouslySetInnerHTML:{__html:e.outerHTML}}):(0,rR.jsx)(u2,{name:t,children:r}),dh=e=>(0,rR.jsx)(dm,(0,rB.X)({},e)),df=(0,rv.memo)(({zoneCompound:e,componentId:t,index:r,dragAxis:n,collisionAxis:o,inDroppableZone:i,itemRef:a})=>{var l,s,c,u;let d=(0,rL.mm)(e=>e.metadata),p=(0,rv.useContext)(um),{depth:h=1}=null!=p?p:{},f=(0,rv.useContext)(ug),m=(0,rL.mm)(rq(e=>{var r;return null==(r=e.state.indexes.nodes[t])?void 0:r.flatData.props})),g=(0,rL.mm)(e=>{var r;return null==(r=e.state.indexes.nodes[t])?void 0:r.data.type}),v=(0,rL.mm)(rq(e=>{var r;return null==(r=e.state.indexes.nodes[t])?void 0:r.data.readOnly})),b=(0,rL.jG)(),_=(0,rv.useMemo)(()=>{if(m)return(0,rw.B)({type:g,props:m});let r=f.getState().previewIndex[e];return t===(null==r?void 0:r.props.id)?{type:r.componentType,props:r.props,previewType:r.type,element:r.element}:null},[b,t,e,g,m]),x=(0,rL.mm)(e=>(null==_?void 0:_.type)?e.config.components[_.type]:null),k=(0,rv.useMemo)(()=>({renderDropZone:dh,isEditing:!0,dragRef:null,metadata:(0,rB.X)((0,rB.X)({},d),null==x?void 0:x.metadata)}),[d,null==x?void 0:x.metadata]),y=(0,rL.mm)(e=>e.overrides),w=(0,rL.mm)(e=>{var r;return(null==(r=e.componentState[t])?void 0:r.loadingCount)>0}),j=(0,rL.mm)(e=>{var r;return(null==(r=e.selectedItem)?void 0:r.props.id)===t}),z=(0,rL.mP)("label-component"),S=(0,rL.mP)("canvas-noconfig",{type:null!=(s=null==(l=null==_?void 0:_.type)?void 0:l.toString())?s:""}),I=null!=(u=null!=(c=null==x?void 0:x.label)?c:null==_?void 0:_.type.toString())?u:z,E=(0,rv.useMemo)(()=>(0,rB.s)((0,rB.X)((0,rB.X)({},null==x?void 0:x.defaultProps),null==_?void 0:_.props),{puck:k,editMode:!0}),[null==x?void 0:x.defaultProps,null==_?void 0:_.props,k]),C=(0,rv.useMemo)(()=>{var e;return{type:null!=(e=null==_?void 0:_.type)?e:g,props:E}},[null==_?void 0:_.type,g,E]),P=(0,rL.mm)(e=>e.config),T=(0,rL.mm)(e=>e.plugins),A=(0,rL.mm)(e=>e.fieldTransforms),M=u8(P,C,(0,rv.useMemo)(()=>(0,rB.X)((0,rB.X)((0,rB.X)((0,rB.X)((0,rB.X)({},rz(dh,e=>(0,rR.jsx)(u5,{componentId:t,zone:e.zone}))),{text:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>r.contentEditable?(0,rR.jsx)(de,{propPath:n,componentId:t,value:e,opts:{disableLineBreaks:!0},isReadOnly:o}):e,textarea:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>r.contentEditable?(0,rR.jsx)(de,{propPath:n,componentId:t,value:e,isReadOnly:o}):e,custom:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>r.contentEditable&&"string"==typeof e?(0,rR.jsx)(de,{propPath:n,componentId:t,value:e,isReadOnly:o}):e}),{richtext:({value:e,componentId:t,field:r,propPath:n,isReadOnly:o})=>{let{contentEditable:i=!0,tiptap:a}=r;if(!1===i||o)return(0,rR.jsx)(dr,{content:e,field:r});let l=`${t}_${r.type}_${n}`;return(0,rR.jsx)(dn,{value:e,componentId:t,propPath:n,field:r,id:l},l)}}),T.reduce((e,t)=>(0,rB.X)((0,rB.X)({},e),t.fieldTransforms),{})),A),[T,A]),v,w);if(!_)return;let N=x?x.render:()=>(0,rR.jsx)("div",{style:{padding:48,textAlign:"center"},children:S}),O=_.type,D="previewType"in _&&"insert"===_.previewType;return(0,rR.jsx)(uM,{id:t,componentType:O,zoneCompound:e,depth:h+1,index:r,isLoading:w,isSelected:j,label:I,autoDragAxis:n,userDragAxis:o,inDroppableZone:i,itemRef:a,children:e=>{var t;return(null==x?void 0:x.inline)&&!D?(0,rR.jsx)(di,{Component:N,componentProps:(0,rB.s)((0,rB.X)({},M),{puck:(0,rB.s)((0,rB.X)({},M.puck),{dragRef:e})})}):(0,rR.jsx)("div",{ref:e,children:D?(0,rR.jsx)(dp,{label:I,override:null!=(t=y.componentItem)?t:y.drawerItem,element:"element"in _&&_.element?_.element:void 0}):(0,rR.jsx)(di,{Component:N,componentProps:M})})}})}),dm=(0,rv.forwardRef)(function({zone:e,allow:t,disallow:r,style:n,className:o,minEmptyHeight:i="128px",collisionAxis:a,as:l},s){let c=(0,rv.useContext)(um),u=(0,rL.jG)(),{areaId:d,depth:p=0,registerLocalZone:h,unregisterLocalZone:f}=null!=c?c:{},m=(0,rL.mm)(rq(e=>{var t;return d?null==(t=e.state.indexes.nodes[d])?void 0:t.path:null})),g=rw.i;d&&e!==rw.i&&(g=`${d}:${e}`);let v=g===rw.i||e===rw.i||"root"===d,b=cb(ug,e=>e.nextAreaDepthIndex[d||""]),_=(0,rL.mm)(rq(e=>{var t;return null==(t=e.state.indexes.zones[g])?void 0:t.contentIds})),x=(0,rL.mm)(rq(e=>{var t;return null==(t=e.state.indexes.zones[g])?void 0:t.type}));(0,rv.useEffect)(()=>{(!x||"dropzone"===x)&&(null==c?void 0:c.registerZone)&&(null==c||c.registerZone(g))},[x,u]),(0,rv.useEffect)(()=>{"dropzone"===x&&g!==rw.i&&console.warn("DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots")},[x]);let k=(0,rv.useMemo)(()=>_||[],[_]),y=(0,rv.useRef)(null),w=(0,rv.useCallback)(e=>uO(e,{allow:t,disallow:r}),[t,r]),j=cb(ug,e=>{var t;return w(null==(t=e.draggedItem)?void 0:t.data.componentType)}),z=b||v,S=cb(ug,e=>{var t;let r=!0;return(r=null!=(t=e.zoneDepthIndex[g])&&t)&&(r=j),r});(0,rv.useEffect)(()=>(h&&h(g,j||S),()=>{f&&f(g)}),[j,S,g]);let[I,E]=((e,t)=>{var r,n;let o,i=(0,rv.useContext)(ug),a=cb(ug,e=>e.previewIndex[t]),l=(0,rL.mm)(e=>e.state.ui.isDragging),[s,c]=(0,rv.useState)(e),[u,d]=(0,rv.useState)(a),p=(r=(e,t,r,n,o,i)=>{(!r||o)&&(t&&!t.linePlaceholder?c((0,r$.A)(e.filter(e=>e!==t.props.id),t.index,t.props.id)):c(o&&!i?e.filter(e=>e!==n):e),d(t))},n=[],o=lR(),(0,rv.useCallback)((...e)=>(0,rB._)(null,null,function*(){return yield null==o?void 0:o.renderer.rendering,r(...e)}),[...n,o]));return(0,rv.useEffect)(()=>{var t;let r=i.getState(),n=null==(t=r.draggedItem)?void 0:t.id,o=Object.values(r.previewIndex||{});p(e,a,l,n,o.length>0,o.some(e=>null==e?void 0:e.linePlaceholder))},[e,a,l]),[s,u]})(k,g),C=E&&!E.linePlaceholder?1:0,P=I.length===C,T=S&&P,A=(0,rv.useContext)(ug);(0,rv.useEffect)(()=>{let{enabledIndex:e}=A.getState();A.setState({enabledIndex:(0,rB.s)((0,rB.X)({},e),{[g]:S})})},[S,A,g]);let{ref:M}=l4({id:g,collisionPriority:S?p:0,disabled:!T,collisionDetector:cM,type:"dropzone",data:{areaId:d,depth:p,isDroppableTarget:j,path:m||[]}}),N=(0,rL.mm)(e=>(null==e?void 0:e.selectedItem)&&d===(null==e?void 0:e.selectedItem.props.id)),[O]=((e,t)=>{let r=(0,rL.mm)(e=>e.status),[n,o]=(0,rv.useState)(t||"y"),i=(0,rv.useCallback)(()=>{if(e.current){let t=window.getComputedStyle(e.current);"grid"===t.display?o("dynamic"):"flex"===t.display&&"row"===t.flexDirection?o("x"):o("y")}},[e.current]);return(0,rv.useEffect)(()=>{let e=()=>{i()};return window.addEventListener("viewportchange",e),()=>{window.removeEventListener("viewportchange",e)}},[]),(0,rv.useEffect)(i,[r,t]),[n,i]})(y,a),[D,L]=(({zoneCompound:e,userMinEmptyHeight:t,ref:r})=>{let n=(0,rL.jG)(),[o,i]=(0,rv.useState)(0),[a,l]=(0,rv.useState)(!1),{draggedItem:s,isZone:c}=cb(ug,t=>{var r,n;return{draggedItem:(null==(r=t.draggedItem)?void 0:r.data.zone)===e?t.draggedItem:null,isZone:(null==(n=t.draggedItem)?void 0:n.data.zone)===e}}),u=(0,rv.useRef)(0),d=u_(t=>{if(t){let t=u6(n,e);if(i(0),t||0===u.current)return void l(!1);let r=n.getState().selectedItem,o=n.getState().state.indexes.zones,a=n.getState().nodes;a.setOverlayVisible(null==r?void 0:r.props.id,!1),setTimeout(()=>{var t;let n=(null==(t=o[e])?void 0:t.contentIds)||[];a.syncNodes(n),r&&setTimeout(()=>{a.syncNode(r.props.id),a.setOverlayVisible(r.props.id,!0)},200),l(!1)},100)}},[n,o,e]);(0,rv.useEffect)(()=>{if(s&&r.current&&c){let t=r.current.getBoundingClientRect();return u.current=u6(n,e),i(t.height),l(!0),d()}},[r.current,s,d]);let p=isNaN(Number(t))?t:`${t}px`;return[o?`${o}px`:p,a]})({zoneCompound:g,userMinEmptyHeight:i,ref:y}),$=(0,rv.useCallback)(e=>{uC([y,M,s],e)},[M]),B=(0,rL.mm)(e=>e._experimentalVirtualization),R=(null!=d?d:rw.U)===rw.U&&0===p;return(0,rR.jsxs)(null!=l?l:"div",{className:`${dd({isRootZone:v,hoveringOverArea:z,isEnabled:S,isAreaSelected:N,hasChildren:k.length>0,isAnimating:L})}${o?` ${o}`:""}`,ref:$,"data-testid":`dropzone:${g}`,"data-puck-dropzone":g,style:(0,rB.s)((0,rB.X)({},n),{"--puck-slot-min-empty-height":D,backgroundColor:null==n?void 0:n.backgroundColor}),children:[B&&R?(0,rR.jsx)(dl,{contentIds:I,zoneCompound:g,renderItem:e=>(0,rR.jsx)(df,{zoneCompound:g,componentId:e.componentId,dragAxis:O,index:e.index,collisionAxis:a,inDroppableZone:j,itemRef:e.measureRef},e.componentId)}):I.map((e,t)=>(0,rR.jsx)(df,{zoneCompound:g,componentId:e,dragAxis:O,index:t,collisionAxis:a,inDroppableZone:j},e)),(null==E?void 0:E.linePlaceholder)&&(0,rR.jsx)(du,{zoneRef:y,contentIds:k,index:E.index})]})}),dg=({config:e,item:t,metadata:r})=>{let n=e.components[t.type],o=rI(e,t,t=>(0,rR.jsx)(rM,(0,rB.s)((0,rB.X)({},t),{config:e,metadata:r}))),i=(0,rv.useMemo)(()=>({areaId:o.id,depth:1}),[o]),a=rA(n.fields,o);return(0,rR.jsx)(ub,{value:i,children:(0,rR.jsx)(n.render,(0,rB.s)((0,rB.X)((0,rB.X)({},o),a),{puck:(0,rB.s)((0,rB.X)({},o.puck),{renderDropZone:dv,metadata:(0,rB.X)((0,rB.X)({},r),n.metadata)})}))},o.id)},dv=e=>(0,rR.jsx)(db,(0,rB.X)({},e)),db=(0,rv.forwardRef)(function({className:e,style:t,zone:r,as:n},o){let i=(0,rv.useContext)(um),{areaId:a="root"}=i||{},{config:l,data:s,metadata:c}=(0,rv.useContext)(dk),u=`${a}:${r}`,d=(null==s?void 0:s.content)||[];return((0,rv.useEffect)(()=>{!d&&(null==i?void 0:i.registerZone)&&(null==i||i.registerZone(u))},[d]),s&&l)?(u!==rw.i&&(d=(0,rw.I)(s,u).zones[u]),(0,rR.jsx)(null!=n?n:"div",{className:e,style:t,ref:o,children:d.map(e=>l.components[e.type]?(0,rR.jsx)(dg,{config:l,item:e,metadata:c},e.props.id):null)})):null}),d_=e=>(0,rR.jsx)(dx,(0,rB.X)({},e)),dx=(0,rv.forwardRef)(function(e,t){let r=(0,rv.useContext)(um);return(null==r?void 0:r.mode)==="edit"?(0,rR.jsx)(rR.Fragment,{children:(0,rR.jsx)(dm,(0,rB.s)((0,rB.X)({},e),{ref:t}))}):(0,rR.jsx)(rR.Fragment,{children:(0,rR.jsx)(db,(0,rB.s)((0,rB.X)({},e),{ref:t}))})}),dk=rv.default.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function dy({config:e,data:t,metadata:r={}}){var n,o;let i=(0,rB.s)((0,rB.X)({},t),{root:t.root||{},content:t.content||[]}),a="props"in i.root?i.root.props:i.root,l=(null==a?void 0:a.title)||"",s=(0,rB.s)((0,rB.X)({},a),{puck:{renderDropZone:d_,isEditing:!1,dragRef:null,metadata:r},title:l,editMode:!1,id:"puck-root"}),c=rI(e,{type:"root",props:s},t=>(0,rR.jsx)(rO,(0,rB.s)((0,rB.X)({},t),{config:e,metadata:r}))),u=rA(null==(n=e.root)?void 0:n.fields,s),d=(0,rv.useMemo)(()=>({mode:"render",depth:0}),[]);return(null==(o=e.root)?void 0:o.render)?(0,rR.jsx)(dk.Provider,{value:{config:e,data:i,metadata:r},children:(0,rR.jsx)(ub,{value:d,children:(0,rR.jsx)(e.root.render,(0,rB.s)((0,rB.X)((0,rB.X)({},c),u),{children:(0,rR.jsx)(dv,{zone:rw.D})}))})}):(0,rR.jsx)(dk.Provider,{value:{config:e,data:i,metadata:r},children:(0,rR.jsx)(ub,{value:d,children:(0,rR.jsx)(dv,{zone:rw.D})})})}(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var dw=(e,t)=>{let r={back:e.history.back,forward:e.history.forward,setHistories:e.history.setHistories,setHistoryIndex:e.history.setHistoryIndex,hasPast:e.history.hasPast(),hasFuture:e.history.hasFuture(),histories:e.history.histories,index:e.history.index},n={appState:(0,r$.J)(e.state),config:e.config,dispatch:e.dispatch,getPermissions:e.permissions.getPermissions,refreshPermissions:e.permissions.refreshPermissions,resolveDataById:(e,r)=>(function(e,t,r){return(0,rB._)(this,null,function*(){let n=t().state.indexes.nodes[e];n?yield uq(n.data,t,r):console.warn(`Warning: Could not find component with id "${e}" to resolve its data. Component may have been removed or the id is invalid.`)})})(e,t,r),resolveDataBySelector:(e,r)=>(function(e,t,r){return(0,rB._)(this,null,function*(){let n=(0,r$.n)(e,t().state);if(!n)return void console.warn(`Warning: Could not find component for selector "${JSON.stringify(e)}" to resolve its data. Component may have been removed or the selector is invalid.`);let o=(0,rw.f)(n);yield uq(o,t,r)})})(e,t,r),history:r,selectedItem:e.selectedItem||null,getItemBySelector:t=>(0,r$.n)(t,e.state),getItemById:t=>e.state.indexes.nodes[t].data,getSelectorForId:t=>uF(e.state,t),getParentById:t=>{let r=e.state.indexes.nodes[t].parentId;if(null===r)return;let n=e.state.indexes.nodes[r];if(n)return n.data},dictionary:e.dictionary};return n.__private={appState:e.state},n},dj=(0,rv.createContext)(null),dz=e=>({state:e.state,config:e.config,dispatch:e.dispatch,permissions:e.permissions,history:e.history,selectedItem:e.selectedItem,dictionary:e.dictionary});(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var dS=(0,ry.f)("ComponentList",{ComponentList:"_ComponentList_htktj_1","ComponentList--isExpanded":"_ComponentList--isExpanded_htktj_5","ComponentList-content":"_ComponentList-content_htktj_9","ComponentList-title":"_ComponentList-title_htktj_17","ComponentList-titleIcon":"_ComponentList-titleIcon_htktj_63"}),dI=({name:e,label:t})=>{var r;let n=(0,rL.mm)(e=>e.overrides),o=(0,rL.mm)(t=>t.permissions.getPermissions({type:e}).insert);return(0,rv.useEffect)(()=>{n.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[n]),(0,rR.jsx)(u3.Item,{label:t,name:e,isDragDisabled:!o,children:null!=(r=n.componentItem)?r:n.drawerItem})},dE=({children:e,title:t,id:r})=>{let n=(0,rL.mm)(e=>e.config),o=(0,rL.mm)(e=>e.setUi),i=(0,rL.mm)(e=>e.state.ui.componentList),{expanded:a=!0}=i[r]||{},l=`puck-drawer-category-${r}`,s=(0,rL.mP)("drawer-category-collapse",{title:null!=t?t:""}),c=(0,rL.mP)("drawer-category-expand",{title:null!=t?t:""});return(0,rR.jsxs)("div",{className:dS({isExpanded:a}),children:[t&&(0,rR.jsxs)("button",{type:"button",className:dS("title"),"aria-expanded":a,"aria-controls":l,onClick:()=>o({componentList:(0,rB.s)((0,rB.X)({},i),{[r]:(0,rB.s)((0,rB.X)({},i[r]),{expanded:!a})})}),title:a?s:c,children:[(0,rR.jsx)("div",{children:t}),(0,rR.jsx)("div",{className:dS("titleIcon"),children:a?(0,rR.jsx)(rL.Fh,{size:12}):(0,rR.jsx)(rL.N8,{size:12})})]}),(0,rR.jsx)("div",{className:dS("content"),id:l,children:(0,rR.jsx)(u3,{children:e||Object.keys(n.components).map(e=>{var t;return(0,rR.jsx)(dI,{label:null!=(t=n.components[e].label)?t:e,name:e},e)})})})]})};dE.Item=dI;var dC=()=>{let e=(0,rL.mm)(e=>e.overrides),t=(()=>{let[e,t]=(0,rv.useState)(),r=(0,rL.mm)(e=>e.config),n=(0,rL.mm)(e=>e.state.ui.componentList),o=(0,rL.mP)("drawer-category-other");return(0,rv.useEffect)(()=>{var e,i,a;if(Object.keys(n).length>0){let l,s=[];l=Object.entries(n).map(([e,t])=>{var n,o;return t.components?(t.components.forEach(e=>{s.push(e)}),!1===t.visible)?null:(0,rR.jsx)(dE,{id:e,title:(null==(o=null==(n=r.categories)?void 0:n[e])?void 0:o.title)||t.title||e,children:t.components.map((e,t)=>{var n;let o=r.components[e]||{};return(0,rR.jsx)(dE.Item,{label:null!=(n=o.label)?n:e,name:e,index:t},e)})},e):null});let c=Object.keys(r.components).filter(e=>-1===s.indexOf(e));!(c.length>0)||(null==(e=n.other)?void 0:e.components)||(null==(i=n.other)?void 0:i.visible)===!1||l.push((0,rR.jsx)(dE,{id:"other",title:(null==(a=n.other)?void 0:a.title)||o,children:c.map((e,t)=>{var n;let o=r.components[e]||{};return(0,rR.jsx)(dE.Item,{name:e,label:null!=(n=o.label)?n:e,index:t},e)})},"other")),t(l)}},[r.categories,r.components,n,o]),e})(),r=(0,rv.useMemo)(()=>(e.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),e.components||e.drawer||"div"),[e]);return(0,rR.jsx)(r,{children:t||(0,rR.jsx)(dE,{id:"all"})})};(0,rB.$)();var dP=(0,ry.f)("BlocksPlugin",{BlocksPlugin:"_BlocksPlugin_9af19_1"});(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var dT=(e,t,r)=>{var n;let[o,i]=e.split(":");if(!i)return;let a=null==(n=r[o])?void 0:n.data.type,l=a&&a!==rw.U?t.components[a]:t.root;return function(e,t){let r;if("string"!=typeof e)throw Error(`Can't get field definition for path (${e}): Path should be a string`);if(!t||"object"!=typeof t)return;let n=e.split(/\.|\[\d+\]/).filter(Boolean),o=t;for(let e=0;e<n.length;e++){if(r=o[n[e]],e===n.length-1)return r;if(!r||("object"!==r.type||!r.objectFields)&&("array"!==r.type||!r.arrayFields))return;"object"===r.type&&(o=r.objectFields),"array"===r.type&&(o=r.arrayFields)}}(i,null==l?void 0:l.fields)},dA={},dM="outline-item",dN=(e,t,r)=>{let n=e.get(t);if(void 0!==n)return n;let o=r();return e.set(t,o),o},dO=(e,t,r,n,o)=>dN(e,`zone:${t}`,()=>uO(r,((e,t,r)=>{var n;if((null==(n=r.zones[e])?void 0:n.type)!=="slot")return dA;let o=dT(e,t,r.nodes);return(null==o?void 0:o.type)!=="slot"?dA:{allow:o.allow,disallow:o.disallow}})(t,n,o))),dD=(e,t)=>r=>{let n,o,i,a;if(r.type!==dM)return!1;let l=r.data,s=e.outlineStore.getState().acceptCache,{config:c,state:u}=e.appStore.getState(),d=u.indexes,p="row"===t.kind?t.itemId:t.zoneCompound.split(":")[0];return n=l.itemId,o=d.nodes,!dN(s,`subtree:${p}`,()=>{var e;return p===n||((null==(e=o[p])?void 0:e.path)||[]).some(e=>e.split(":")[0]===n)})&&("zone"===t.kind?dO(s,t.zoneCompound,l.componentType,c,d):dO(s,t.zoneCompound,l.componentType,c,d)||(i=t.itemId,a=l.componentType,dN(s,`childZones:${i}`,()=>Object.keys(d.zones).some(e=>e.startsWith(`${i}:`)&&dO(s,e,a,c,d)))))};(0,rB.$)();var dL=()=>{let e=null,t=null,r=()=>{null!==e&&(clearTimeout(e),e=null),t=null};return(0,rW.f)((n,o)=>({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:e=>n({status:"dragging",draggedRow:e,acceptCache:new Map}),setTarget:(e,t)=>{var r,i,a,l;let s=o();((null==(r=s.indicator)?void 0:r.targetId)!==e.targetId||(null==(i=s.indicator)?void 0:i.position)!==e.position||(null==(a=s.drop)?void 0:a.zone)!==t.zone||(null==(l=s.drop)?void 0:l.index)!==t.index)&&n({indicator:e,drop:t})},clearTarget:()=>{(null!==o().indicator||null!==o().drop)&&n({indicator:null,drop:null})},scheduleExpand:(i,a)=>{t===i||o().tempExpandedIds.has(i)||(r(),t=i,n({expandCandidateId:i}),e=setTimeout(()=>{e=null,t=null,n(e=>({tempExpandedIds:new Set(e.tempExpandedIds).add(i),expandCandidateId:null})),a()},600))},cancelPendingExpand:()=>{r(),null!==o().expandCandidateId&&n({expandCandidateId:null})},endDrag:()=>{r(),n({status:"dropping",indicator:null,drop:null,expandCandidateId:null})},reset:()=>{r(),n({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},d$=(0,rv.createContext)(dL()),dB=()=>(0,rv.useContext)(d$),dR=({kind:e,zoneCompound:t})=>{let r=(0,rL.jG)(),n=dB(),o=`${e}:${t}`,{ref:i}=l4({id:o,type:"outline-zone",accept:(0,rv.useMemo)(()=>dD({appStore:r,outlineStore:n},{kind:"zone",zoneCompound:t}),[r,n,t]),collisionDetector:cM,data:{kind:"zone",zoneCompound:t}}),a=cb(d$,e=>{var t;return(null==(t=e.indicator)?void 0:t.targetId)===o});return(0,rv.useMemo)(()=>({isDropTarget:a,ref:i}),[a,i])};(0,rB.$)(),(0,rB.$)();var dF=(0,ry.f)("DropLine",{DropLine:"_DropLine_eyz3q_2","DropLine--top":"_DropLine--top_eyz3q_12","DropLine--bottom":"_DropLine--bottom_eyz3q_16","DropLine--outset":"_DropLine--outset_eyz3q_20"}),dq=({edge:e,outset:t})=>(0,rR.jsx)("div",{className:dF({top:"top"===e,bottom:"bottom"===e,outset:!!t})});(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var dW=(...e)=>[...e].filter(Boolean).join(" ");(0,rB.$)();var dH=(0,ry.f)("LayerTree",{"LayerTree-helper":"_LayerTree-helper_1m7e4_2","LayerTree-helperRoot":"_LayerTree-helperRoot_1m7e4_11"}),dV=({zoneCompound:e})=>{let{ref:t,isDropTarget:r}=dR({kind:"empty",zoneCompound:e}),n=(0,rL.mP)("outline-empty"),[o]=e.split(":"),i=o===rw.U;return(0,rR.jsxs)("li",{className:dW(dH("helper"),i?dH("helperRoot"):void 0),"data-puck-drop-target":r||void 0,ref:t,children:[n,r&&(0,rR.jsx)(dq,{edge:"top"})]})};(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var dX=(0,ry.f)("LayerActions",{LayerActions:"_LayerActions_d90t9_2","LayerActions--visible":"_LayerActions--visible_d90t9_18"}),dU=({node:e,visible:t})=>{let r=(0,rL.mm)(e=>e.dispatch),n=dB(),o=(0,rL.mm)(rq(t=>{let r=(0,r$.n)({index:e.index,zone:e.zoneCompound},t.state),n=t.permissions.getPermissions({item:r});return{delete:n.delete,duplicate:n.duplicate}})),i=(0,rL.mP)("outline-item-duplicate"),a=(0,rL.mP)("outline-item-delete"),l=(0,rv.useCallback)(t=>{t.stopPropagation(),"idle"===n.getState().status&&r({type:"remove",index:e.index,zone:e.zoneCompound})},[r,n,e]),s=(0,rv.useCallback)(t=>{t.stopPropagation(),"idle"===n.getState().status&&r({type:"duplicate",sourceIndex:e.index,sourceZone:e.zoneCompound})},[r,n,e.index,e.zoneCompound]);return o.delete||o.duplicate?(0,rR.jsxs)("div",{className:dX({visible:t}),children:[o.duplicate&&(0,rR.jsx)(rL.eu,{onClick:s,title:i,type:"button",children:(0,rR.jsx)(rL._0,{})}),o.delete&&(0,rR.jsx)(rL.eu,{onClick:l,title:a,type:"button",children:(0,rR.jsx)(rL.Me,{})})]}):null},dZ=(0,ry.f)("Layer",{Layer:"_Layer_onfgu_1","Layer-inner":"_Layer-inner_onfgu_8","Layer--isSortable":"_Layer--isSortable_onfgu_18","Layer-content":"_Layer-content_onfgu_22","Layer-clickable":"_Layer-clickable_onfgu_29","Layer-caret":"_Layer-caret_onfgu_57","Layer--containsZone":"_Layer--containsZone_onfgu_68","Layer-title":"_Layer-title_onfgu_76","Layer-name":"_Layer-name_onfgu_85","Layer-icon":"_Layer-icon_onfgu_91","Layer-zones":"_Layer-zones_onfgu_101","Layer--isExpanded":"_Layer--isExpanded_onfgu_106","Layer--isSelected":"_Layer--isSelected_onfgu_115","Layer--isExpandCandidate":"_Layer--isExpandCandidate_onfgu_138","Layer--isDragSource":"_Layer--isDragSource_onfgu_143"}),dG=(0,rv.forwardRef)(function({dataIndex:e,depth:t,isSelected:r,node:n,selectedId:o},i){let a=(0,rL.mm)(e=>e.dispatch),l=(0,rL.mm)(e=>{var t,r;return null!=(r=null==(t=e.state.ui.itemExpanded)?void 0:t[n.itemId])&&r}),s=cb(ug,e=>e.hoveringComponent===n.itemId),c=(0,rL.mm)(e=>{var t;let r=(0,r$.n)({index:n.index,zone:n.zoneCompound},e.state);return null==(t=e.permissions.getPermissions({item:r}))?void 0:t.drag}),{indicatorPosition:u,isDragSource:d,isExpandCandidate:p,isTempExpanded:h,rowRef:f}=(({componentType:e,index:t,itemId:r,zoneCompound:n})=>{let o=(0,rL.jG)(),i=dB(),a=(0,rv.useMemo)(()=>dD({appStore:o,outlineStore:i},{kind:"row",itemId:r,zoneCompound:n}),[o,i,r,n]),{handleRef:l,ref:s,isDragSource:c}=sH({id:r,index:t,group:n,type:dM,accept:a,data:{kind:"row",itemId:r,zoneCompound:n,index:t,componentType:e},collisionPriority:1,collisionDetector:(0,rv.useMemo)(()=>cD("y"),[]),transition:{duration:0},plugins:e=>[...e,aJ.configure({feedback:"clone",dropAnimation:null})]}),{indicatorPosition:u,isExpandCandidate:d,isTempExpanded:p}=cb(d$,e=>{var t;return{indicatorPosition:(null==(t=e.indicator)?void 0:t.targetId)===r?e.indicator.position:null,isExpandCandidate:e.expandCandidateId===r,isTempExpanded:e.tempExpandedIds.has(r)}});return{rowRef:(0,rv.useCallback)(e=>{s(e),l(e)},[s,l]),isDragSource:c,indicatorPosition:u,isExpandCandidate:d,isTempExpanded:p}})({componentType:n.componentType,index:n.index,itemId:n.itemId,zoneCompound:n.zoneCompound}),m=(0,rv.useContext)(ug),g=dB(),v=(0,rL.mP)("outline-item-collapse"),b=(0,rL.mP)("outline-item-expand"),_=n.childZones.length>0,x=(0,rv.useCallback)(e=>{a({type:"setUi",ui:{itemSelector:e}})},[a]),k=l||h,y=1!==n.childZones.length;return(0,rR.jsxs)("li",{ref:i,className:dZ({containsZone:_,isDragSource:d,isExpandCandidate:p,isExpanded:k,isHovering:s,isSelected:r,isSortable:c}),"data-index":e,"data-puck-layer-tree-id":n.itemId,children:[null!==u&&(0,rR.jsx)(dq,{edge:"before"===u?"top":"bottom",outset:!0}),(0,rR.jsxs)("div",{className:dZ("inner"),ref:f,onMouseEnter:e=>{e.stopPropagation(),"idle"===g.getState().status&&m.setState({hoveringComponent:n.itemId})},onMouseLeave:e=>{e.stopPropagation(),m.setState({hoveringComponent:null})},children:[(0,rR.jsx)("div",{className:dZ("caret"),children:(0,rR.jsx)(rL.eu,{onClick:e=>{e.stopPropagation(),"idle"===g.getState().status&&a({type:"setUi",ui:e=>{var t;let r=(0,rB.X)({},e.itemExpanded);return(null==(t=e.itemExpanded)?void 0:t[n.itemId])?delete r[n.itemId]:r[n.itemId]=!0,{itemExpanded:r}},recordHistory:!1})},title:l?v:b,type:"button",children:(0,rR.jsx)(rL.E4,{})})}),(0,rR.jsxs)("div",{className:dZ("content"),children:[(0,rR.jsx)("button",{type:"button",className:dZ("clickable"),onClick:()=>{"idle"===g.getState().status&&(x({index:n.index,zone:n.zoneCompound}),m.getState().scrollToComponent(n.itemId))},children:(0,rR.jsxs)("div",{className:dZ("title"),children:[(0,rR.jsx)("div",{className:dZ("icon"),children:"Text"===n.componentType||"Heading"===n.componentType?(0,rR.jsx)(rL.sn,{}):(0,rR.jsx)(rL.x3,{})}),(0,rR.jsx)("div",{className:dZ("name"),children:n.label})]})}),(0,rR.jsx)(dU,{node:n,visible:s&&!d})]})]}),_&&k&&n.childZones.map(e=>(0,rR.jsx)("div",{className:dZ("zones"),children:(0,rR.jsx)(d3,{depth:y?t+1:t,selectedId:o,tree:y?e:(0,rB.s)((0,rB.X)({},e),{label:void 0})})},e.zoneCompound))]})});(0,rB.$)();var dY={LayerTree:"_LayerTree_o5tyt_1","LayerTree--nested":"_LayerTree--nested_o5tyt_12"},dK=(0,ry.f)("LayerTree",dY),dJ=({depth:e,selectedId:t,tree:r})=>(0,rR.jsxs)("ul",{className:dK({nested:e>0}),children:[0===r.items.length&&(0,rR.jsx)(dV,{zoneCompound:r.zoneCompound}),r.items.map(r=>(0,rR.jsx)(dG,{depth:e,isSelected:t===r.itemId,node:r,selectedId:t},r.itemId))]});(0,rB.$)();var dQ=(0,ry.f)("LayerTree",dY),d0=new Map,d1=({depth:e,selectedId:t,tree:r})=>{let n=(0,rv.useRef)(null),o=cb(d$,e=>{var t;return(null==(t=e.draggedRow)?void 0:t.zoneCompound)===r.zoneCompound?e.draggedRow.index:null}),i=(0,rv.useCallback)(e=>{let t=s4(e);return null===o||t.includes(o)||(t.push(o),t.sort((e,t)=>e-t)),t},[o]),a=ca({count:r.items.length,estimateSize:e=>{var t,n;return t=r.items[e].itemId,null!=(n=d0.get(t))?n:32},getItemKey:e=>r.items[e].itemId,getScrollElement:()=>(e=>{var t;let r=null!=(t=null==e?void 0:e.parentElement)?t:null;for(;r;){let{overflow:e,overflowY:t}=getComputedStyle(r);if([e,t].some(e=>/auto|scroll/.test(e)))return r;r=r.parentElement}return null})(n.current),overscan:8,rangeExtractor:i,measureElement:e=>{let t=Math.ceil(e.getBoundingClientRect().height),r=e.dataset.puckLayerTreeId;return r&&(t<=0||d0.set(r,t)),t||32}}),l=a.getVirtualItems(),s=a.getTotalSize(),c=[],u=0,d=-1;l.forEach(n=>{let o=r.items[n.index],i=Math.max(n.start-u,0);i>0&&c.push((0,rR.jsx)("li",{"aria-hidden":"true",style:{height:`${i}px`}},`gap:${r.zoneCompound}:${d}:${n.index}`)),c.push((0,rR.jsx)(dG,{dataIndex:n.index,depth:e,isSelected:t===o.itemId,node:o,ref:a.measureElement,selectedId:t},o.itemId)),u=n.end,d=n.index});let p=Math.max(s-u,0);return p>0&&c.push((0,rR.jsx)("li",{"aria-hidden":"true",style:{height:`${p}px`}},`gap:${r.zoneCompound}:${d}:end`)),(0,rR.jsxs)("ul",{className:dQ({nested:e>0}),ref:n,children:[0===r.items.length&&(0,rR.jsx)(dV,{zoneCompound:r.zoneCompound}),c]})};(0,rB.$)();var d2=(0,ry.f)("LayerTree",{"LayerTree-zoneTitle":"_LayerTree-zoneTitle_fvhlh_2","LayerTree-zoneIcon":"_LayerTree-zoneIcon_fvhlh_19"}),d4=({label:e,zoneCompound:t})=>{let{ref:r,isDropTarget:n}=dR({kind:"label",zoneCompound:t});return(0,rR.jsxs)("div",{className:d2("zoneTitle"),"data-puck-drop-target":n||void 0,ref:r,children:[(0,rR.jsx)("div",{className:d2("zoneIcon"),children:(0,rR.jsx)(rL.DV,{})}),e,n&&(0,rR.jsx)(dq,{edge:"bottom"})]})},d3=({depth:e,selectedId:t,tree:r})=>{let n=0===e&&r.items.length>=25;return(0,rR.jsxs)(rR.Fragment,{children:[r.label&&(0,rR.jsx)(d4,{label:r.label,zoneCompound:r.zoneCompound}),n?(0,rR.jsx)(d1,{depth:e,selectedId:t,tree:r}):(0,rR.jsx)(dJ,{depth:e,selectedId:t,tree:r})]})};(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var d6=e=>{if("u"<typeof document)return;let t=document.getElementById("preview-frame");e?null==t||t.setAttribute("data-puck-outline-dragging","true"):null==t||t.removeAttribute("data-puck-outline-dragging")},d5=(e,t,r)=>{var n,o,i;let a=r.outlineDndStore.getState(),l=a.draggedRow;if(!l)return;let s=e.operation.target;if(!s){a.cancelPendingExpand(),a.clearTarget();return}let c=s.data;if("zone"===c.kind){a.cancelPendingExpand(),a.setTarget({targetId:s.id.toString(),position:"inside"},{zone:c.zoneCompound,index:0});return}let{config:u,state:d}=r.appStore.getState(),p=d.indexes;if(dO(a.acceptCache,c.zoneCompound,l.componentType,u,p)){let e=null==(n=t.collisionObserver.collisions[0])?void 0:n.data,r=cL(null==e?void 0:e.direction);a.setTarget({targetId:s.id.toString(),position:r},{zone:c.zoneCompound,index:c$({position:r,sourceIndex:l.index,targetIndex:c.index,isSameZone:c.zoneCompound===l.zoneCompound})})}else a.clearTarget();let h=!!(null==(o=d.ui.itemExpanded)?void 0:o[c.itemId])||a.tempExpandedIds.has(c.itemId),f=(i=c.itemId,Object.keys(p.zones).some(e=>e.startsWith(`${i}:`)));!h&&f?a.scheduleExpand(c.itemId,()=>{requestAnimationFrame(()=>t.collisionObserver.forceUpdate(!0))}):a.cancelPendingExpand()},d8=[],d7=({children:e})=>{let t=(0,rL.jG)(),r=(0,rv.useContext)(ug),[n]=(0,rv.useState)(()=>dL()),o=(0,rL.mm)(e=>{var t,r;return null!=(r=null==(t=e.dnd)?void 0:t.disableOutlineDrag)&&r}),i=cE({mouse:[new ll.Distance({value:5})]}),a=(0,rv.useMemo)(()=>({outlineDndStore:n,appStore:t,scrollToComponent:e=>r.getState().scrollToComponent(e)}),[n,t,r]);return(0,rR.jsx)(d$.Provider,{value:n,children:(0,rR.jsx)(lB,{sensors:o?d8:i,onBeforeDragStart:e=>{((e,t)=>{let r=e.operation.source,n=null==r?void 0:r.data;if(!r||!n)return;let o=t.appStore.getState(),i=(0,r$.n)({zone:n.zoneCompound,index:n.index},o.state);i&&o.permissions.getPermissions({item:i}).drag?(t.outlineDndStore.getState().startDrag({itemId:n.itemId,zoneCompound:n.zoneCompound,index:n.index,componentType:n.componentType}),d6(!0),o.dispatch({type:"setUi",ui:{isDragging:!0},recordHistory:!1})):e.preventDefault()})(e,a)},onDragOver:(e,t)=>{e.preventDefault(),d5(e,t,a)},onDragMove:(e,t)=>{d5(e,t,a)},onDragEnd:e=>{((e,t)=>{let{source:r}=e.operation,n=t.outlineDndStore.getState(),o=n.draggedRow,i=e.canceled?null:n.drop,a=t.appStore.getState().dispatch;if(d6(!1),o&&i){var l,s;let e,r,n,c;uW(o.itemId,{zone:o.zoneCompound,index:o.index},{zone:i.zone,index:i.index},t.appStore);let u=i.zone!==o.zoneCompound||i.index!==o.index;a({type:"setUi",ui:{itemSelector:{zone:i.zone,index:i.index},isDragging:!1},recordHistory:u}),l=o.itemId,s=t.scrollToComponent,r=0,n=0,c=()=>{var t;let o=null==(t=ux())?void 0:t.querySelector(`[data-puck-component="${l}"]`),i=o?o.getBoundingClientRect().top:null;(r=i===e?r+1:0,e=i,n+=1,r>=2||n>=60)?s(l):requestAnimationFrame(c)},requestAnimationFrame(c)}else a({type:"setUi",ui:{isDragging:!1},recordHistory:!1});n.endDrag();let c=()=>t.outlineDndStore.getState().reset();if(r&&"idle"!==r.status){let e=na(()=>{"idle"===r.status&&(c(),null==e||e())})}else c()})(e,a)},children:e})})};(0,rB.$)(),(0,rB.$)();var d9=e=>{let t={};return Object.keys(e).forEach(e=>{let[r]=e.split(":");r&&(t[r]||(t[r]=[]),t[r].push(e))}),t},pe=({config:e,label:t,nodes:r,zoneCompound:n,zones:o,zonesByParent:i=d9(o),componentFallbackLabel:a})=>{var l,s;return{items:(null!=(s=null==(l=o[n])?void 0:l.contentIds)?s:[]).map((t,a)=>(({config:e,itemId:t,index:r,nodes:n,zoneCompound:o,zones:i,zonesByParent:a,componentFallbackLabel:l})=>{var s,c,u,d;let p=n[t],h=null!=(c=null==(s=null==p?void 0:p.data.type)?void 0:s.toString())?c:l,f=null!=(d=null==(u=e.components[h])?void 0:u.label)?d:h;return{childZones:(a[t]||[]).map(t=>pe({config:e,nodes:n,zoneCompound:t,zones:i,zonesByParent:a})),componentType:h,index:r,itemId:t,label:f,zoneCompound:o}})({config:e,itemId:t,index:a,nodes:r,zoneCompound:n,zones:o,zonesByParent:i})),label:((e,t,r,n)=>{var o,i;if(void 0!==n)return n;let[,a]=e.split(":");if(a)return null!=(i=null==(o=dT(e,r,t))?void 0:o.label)?i:a})(n,r,e,t),zoneCompound:n}},pt=(0,ry.f)("LayerTreeRoot",{LayerTreeRoot:"_LayerTreeRoot_1qowl_1"}),pr=({selectedId:e,trees:t})=>{let r=(0,rL.mm)(e=>{var t,r;return null!=(r=null==(t=e.dnd)?void 0:t.disableOutlineDrag)&&r});return(0,rR.jsx)(d7,{children:(0,rR.jsx)("div",{className:pt(),"data-puck-dnd-disabled":r||void 0,children:t.map(t=>(0,rR.jsx)(d3,{depth:0,selectedId:e,tree:t},t.zoneCompound))})})};(0,rB.$)(),(0,rB.$)();var pn=(0,ry.f)("CollapseAll",{CollapseAll:"_CollapseAll_1r4cy_1","CollapseAll-icon":"_CollapseAll-icon_1r4cy_5","CollapseAll--visible":"_CollapseAll--visible_1r4cy_10"}),po=function({className:e}){let t=(0,rL.mm)(e=>{var t;return Object.keys(null!=(t=e.state.ui.itemExpanded)?t:{}).length>0}),r=(0,rL.mm)(e=>e.dispatch),n=(0,rL.mP)("outline-header-collapseall");return(0,rR.jsx)("div",{className:dW(pn({visible:t}),e),children:(0,rR.jsx)(rL.eu,{title:n,onClick:()=>{r({type:"setUi",ui:{itemExpanded:{}}})},children:(0,rR.jsx)(rL.VQ,{className:pn("icon")})})})};(0,rB.$)(),(0,rB.$)();var pi=(0,ry.f)("OutlineHeader",{OutlineHeader:"_OutlineHeader_ntv8r_1"}),pa=({children:e,title:t})=>{let r=(0,rL.mP)("outline-header-title");return(0,rR.jsxs)("div",{className:pi(),children:[(0,rR.jsx)(c3,{rank:"2",size:"xs",children:null!=r?r:t}),e]})};(0,rB.$)();var pl=(0,ry.f)("OutlineWrapper",{OutlineWrapper:"_OutlineWrapper_b9ln0_1","OutlineWrapper-collapseAll":"_OutlineWrapper-collapseAll_b9ln0_9","OutlineWrapper-layers":"_OutlineWrapper-layers_b9ln0_15"}),ps=({children:e})=>(0,rR.jsx)("div",{className:pl(),children:e}),pc=()=>{let e=(0,rL.mm)(e=>e.overrides.outline),t=(0,rL.mm)(e=>e.config),r=(0,rL.mm)(e=>e.state.indexes.nodes),n=(0,rL.mm)(e=>e.state.indexes.zones),o=(0,rL.mm)(e=>{var t;return(null==(t=e.selectedItem)?void 0:t.props.id)||null}),i=(0,rL.mP)("label-component"),a=(0,rL.mm)(rq(e=>Object.keys(e.state.indexes.zones).filter(e=>"root"===e.split(":")[0]))),l=(0,rv.useMemo)(()=>a.map(e=>pe({config:t,label:1===a.length?"":e.split(":")[1],nodes:r,zoneCompound:e,zones:n,componentFallbackLabel:i})),[t,r,a,n,i]),s=(0,rv.useMemo)(()=>e||ps,[e]);return(0,rR.jsxs)(s,{children:[(0,rR.jsx)(pa,{children:(0,rR.jsx)(po,{className:pl("collapseAll")})}),(0,rR.jsx)("div",{className:pl("layers"),children:(0,rR.jsx)(pr,{selectedId:o,trees:l})})]})};(0,rB.$)();var pu=(0,ry.f)("OutlinePlugin",{OutlinePlugin:"_OutlinePlugin_1ylsc_1"});(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var pd=(0,ry.f)("Breadcrumbs",{Breadcrumbs:"_Breadcrumbs_8c6w5_1","Breadcrumbs-breadcrumbLabel":"_Breadcrumbs-breadcrumbLabel_8c6w5_7","Breadcrumbs-breadcrumb":"_Breadcrumbs-breadcrumb_8c6w5_7"}),pp=({children:e,numParents:t=1})=>{let r,n,o,i,a,l,s=(0,rL.mm)(e=>e.setUi),c=(r=(0,rL.mm)(e=>{var t;return null==(t=e.selectedItem)?void 0:t.props.id}),n=(0,rL.mm)(e=>e.config),o=(0,rL.mm)(e=>{var t;return null==(t=e.state.indexes.nodes[r])?void 0:t.path}),i=(0,rL.jG)(),a=(0,rL.mP)("label-page"),l=(0,rL.mP)("label-component"),(0,rv.useMemo)(()=>{let e=(null==o?void 0:o.map(e=>{var t,r,o,s;let[c]=e.split(":");if("root"===c)return{label:(null==(t=null==n?void 0:n.root)?void 0:t.label)||a,selector:null};let u=i.getState().state.indexes.nodes[c],d=u.path[u.path.length-1],p=((null==(r=i.getState().state.indexes.zones[d])?void 0:r.contentIds)||[]).indexOf(c);return{label:u?null!=(s=null==(o=n.components[u.data.type])?void 0:o.label)?s:u.data.type:l,selector:u?{index:p,zone:u.path[u.path.length-1]}:null}}))||[];return t?e.slice(e.length-t):e},[o,t,a,l]));return(0,rR.jsxs)("div",{className:pd(),children:[c.map((e,t)=>(0,rR.jsxs)("div",{className:pd("breadcrumb"),children:[(0,rR.jsx)("button",{type:"button",className:pd("breadcrumbLabel"),onClick:()=>s({itemSelector:e.selector}),children:e.label}),(0,rR.jsx)(rL.E4,{size:16})]},t)),e]})};(0,rB.$)(),(0,rB.$)();var ph=(0,ry.f)("PuckFields",{PuckFields:"_PuckFields_wnj25_1","PuckFields--isLoading":"_PuckFields--isLoading_wnj25_6","PuckFields-loadingOverlay":"_PuckFields-loadingOverlay_wnj25_10","PuckFields-loadingOverlayInner":"_PuckFields-loadingOverlayInner_wnj25_25","PuckFields-field":"_PuckFields-field_wnj25_32","PuckFields--wrapFields":"_PuckFields--wrapFields_wnj25_36"}),pf=({children:e})=>(0,rR.jsx)(rR.Fragment,{children:e}),pm=({fieldName:e})=>{let t=(0,rL.mm)(t=>t.fields.fields[e]),r=(0,rL.mm)(t=>((t.selectedItem?t.selectedItem.readOnly:t.state.data.root.readOnly)||{})[e]),n=(0,rL.mm)(r=>t?r.selectedItem?`${r.selectedItem.props.id}_${t.type}_${e}`:`root_${t.type}_${e}`:null),o=(0,rL.mm)(rq(e=>{let{selectedItem:t,permissions:r}=e;return t?r.getPermissions({item:t}):r.getPermissions({root:!0})})),i=(0,rL.jG)(),a=(0,rv.useCallback)((t,r)=>(0,rB._)(null,null,function*(){let{dispatch:n,state:o,selectedItem:a,resolveComponentData:l}=i.getState(),{data:s,ui:c}=o,{itemSelector:u}=c,d=s.root.props||s.root,p=a?a.props:d,h=(0,rB.s)((0,rB.X)({},p),{[e]:t});if(a&&u){let e=yield l((0,rB.s)((0,rB.X)({},a),{props:h}),"replace"),t=uF(i.getState().state,a.props.id);if(!t)return;n({type:"replace",destinationIndex:t.index,destinationZone:t.zone||rw.i,data:e.node,ui:r});return}n(s.root.props?{type:"replaceRoot",root:(yield l((0,rB.s)((0,rB.X)({},s.root),{props:h}),"replace")).node,ui:(0,rB.X)((0,rB.X)({},c),r),recordHistory:!0}:{type:"setData",data:{root:h}})}),[e]),{visible:l=!0}=null!=t?t:{},s=(0,rv.useContext)(c_.ctx);return((0,rv.useEffect)(()=>i.subscribe(t=>{var r;return null==(r=t.getCurrentData().props)?void 0:r[e]},t=>{s.setState({[e]:t})}),[i,s]),t&&n&&l&&"slot"!==t.type)?(0,rR.jsx)("div",{className:ph("field"),children:(0,rR.jsx)(ud,{field:t,name:e,id:n,readOnly:!o.edit||r,onChange:a})},n):null},pg=(0,rv.memo)(({fieldName:e})=>{let t=(0,rL.jG)(),r=(0,rv.useMemo)(()=>{var r;let n=null==(r=t.getState().getCurrentData().props)?void 0:r[e];return{[e]:n}},[]);return(0,rR.jsx)(c_.Provider,{value:r,children:(0,rR.jsx)(pm,{fieldName:e})})}),pv=(0,rv.memo)(({wrapFields:e=!0})=>{let t=(0,rL.mm)(e=>e.overrides),r=(0,rL.mm)(e=>{var t,r;let n=e.selectedItem?null==(t=e.componentState[e.selectedItem.props.id])?void 0:t.loadingCount:null==(r=e.componentState.root)?void 0:r.loadingCount;return(null!=n?n:0)>0}),n=(0,rL.mm)(rq(e=>e.state.ui.itemSelector)),o=(0,rL.mm)(e=>{var t;return null==(t=e.selectedItem)?void 0:t.props.id}),i=(0,rL.jG)();(0,rL.Yy)(i,o);let a=(0,rL.mm)(e=>e.fields.loading),l=(0,rL.mm)(rq(e=>e.fields.id===o?Object.keys(e.fields.fields):[])),s=a||r,c=(0,rv.useMemo)(()=>t.fields||pf,[t]);return(0,rR.jsxs)("form",{className:ph({wrapFields:e}),onSubmit:e=>{e.preventDefault()},children:[(0,rR.jsx)(c,{isLoading:s,itemSelector:n,children:l.map(e=>(0,rR.jsx)(pg,{fieldName:e},e))}),s&&(0,rR.jsx)("div",{className:ph("loadingOverlay"),children:(0,rR.jsx)("div",{className:ph("loadingOverlayInner"),children:(0,rR.jsx)(rL.cD,{size:16})})})]})});(0,rB.$)();var pb=(0,ry.f)("FieldsPlugin",{FieldsPlugin:"_FieldsPlugin_18cj3_1","FieldsPlugin-header":"_FieldsPlugin-header_18cj3_7"}),p_=()=>{let e=(0,rL.mP)("label-page"),t=(0,rL.mm)(e=>{var t,r;let n=e.selectedItem;return n?null!=(r=null==(t=e.config.components[n.type])?void 0:t.label)?r:n.type:null});return null!=t?t:e};(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var px=`@import "https://rsms.me/inter/inter.css";

/* styles/color.css */
@layer puck-tokens {
  :root {
    --puck-color-rose-01: #4a001c;
    --puck-color-rose-02: #670833;
    --puck-color-rose-03: #87114c;
    --puck-color-rose-04: #a81a66;
    --puck-color-rose-05: #bc5089;
    --puck-color-rose-06: #cc7ca5;
    --puck-color-rose-07: #d89aba;
    --puck-color-rose-08: #e3b8cf;
    --puck-color-rose-09: #efd6e3;
    --puck-color-rose-10: #f6eaf1;
    --puck-color-rose-11: #faf4f8;
    --puck-color-rose-12: #fef8fc;
    --puck-color-azure-01: #00175d;
    --puck-color-azure-02: #002c77;
    --puck-color-azure-03: #014292;
    --puck-color-azure-04: #0158ad;
    --puck-color-azure-05: #3479be;
    --puck-color-azure-06: #6499cf;
    --puck-color-azure-07: #88b0da;
    --puck-color-azure-08: #abc7e5;
    --puck-color-azure-09: #cfdff0;
    --puck-color-azure-10: #e7eef7;
    --puck-color-azure-11: #f3f6fb;
    --puck-color-azure-12: #f7faff;
    --puck-color-green-01: #002000;
    --puck-color-green-02: #043604;
    --puck-color-green-03: #084e08;
    --puck-color-green-04: #0c680c;
    --puck-color-green-05: #1d882f;
    --puck-color-green-06: #2faa53;
    --puck-color-green-07: #56c16f;
    --puck-color-green-08: #7dd78b;
    --puck-color-green-09: #b8e8bf;
    --puck-color-green-10: #ddf3e0;
    --puck-color-green-11: #eff8f0;
    --puck-color-green-12: #f3fcf4;
    --puck-color-yellow-01: #211000;
    --puck-color-yellow-02: #362700;
    --puck-color-yellow-03: #4c4000;
    --puck-color-yellow-04: #645a00;
    --puck-color-yellow-05: #877614;
    --puck-color-yellow-06: #ab9429;
    --puck-color-yellow-07: #bfac4e;
    --puck-color-yellow-08: #d4c474;
    --puck-color-yellow-09: #e6deb1;
    --puck-color-yellow-10: #f3efd9;
    --puck-color-yellow-11: #f9f7ed;
    --puck-color-yellow-12: #fcfaf0;
    --puck-color-red-01: #4c0000;
    --puck-color-red-02: #6a0a10;
    --puck-color-red-03: #8a1422;
    --puck-color-red-04: #ac1f35;
    --puck-color-red-05: #bf5366;
    --puck-color-red-06: #ce7e8e;
    --puck-color-red-07: #d99ca8;
    --puck-color-red-08: #e4b9c2;
    --puck-color-red-09: #efd7db;
    --puck-color-red-10: #f6eaec;
    --puck-color-red-11: #faf4f5;
    --puck-color-red-12: #fff9fa;
    --puck-color-grey-01: #181818;
    --puck-color-grey-02: #292929;
    --puck-color-grey-03: #404040;
    --puck-color-grey-04: #5a5a5a;
    --puck-color-grey-05: #767676;
    --puck-color-grey-06: #949494;
    --puck-color-grey-07: #ababab;
    --puck-color-grey-08: #c3c3c3;
    --puck-color-grey-09: #dcdcdc;
    --puck-color-grey-10: #efefef;
    --puck-color-grey-11: #f5f5f5;
    --puck-color-grey-12: #fafafa;
    --puck-color-black: #000000;
    --puck-color-white: #ffffff;
  }
}

/* styles/tokens.css */
@layer puck-tokens {
  :root {
    --puck-color-surface: var(--puck-color-white);
    --puck-color-surface-muted: var(--puck-color-grey-11);
    --puck-color-surface-subtle: var(--puck-color-grey-12);
    --puck-color-surface-inverse: var(--puck-color-grey-01);
    --puck-color-border: var(--puck-color-grey-09);
    --puck-color-border-hover: var(--puck-color-grey-05);
    --puck-color-border-muted: var(--puck-color-grey-10);
    --puck-color-border-inverse: var(--puck-color-grey-05);
    --puck-color-text: var(--puck-color-black);
    --puck-color-text-secondary: var(--puck-color-grey-04);
    --puck-color-text-muted: var(--puck-color-grey-05);
    --puck-color-text-subtle: var(--puck-color-grey-07);
    --puck-color-text-inverse: var(--puck-color-white);
    --puck-opacity-text-inverse: 0.75;
    --puck-color-interactive: var(--puck-color-azure-04);
    --puck-color-interactive-hover: var(--puck-color-azure-03);
    --puck-color-interactive-active: var(--puck-color-azure-02);
    --puck-color-interactive-subtle: var(--puck-color-azure-10);
    --puck-color-interactive-soft: var(--puck-color-azure-11);
    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);
    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);
    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);
    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);
    --puck-color-focus-ring: var(--puck-color-azure-05);
    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );
    --puck-color-selection-border: var(--puck-color-azure-08);
    --puck-color-line-placeholder: var(--puck-color-azure-06);
    --puck-color-highlight: var(--puck-color-rose-07);
    --puck-color-bg-disabled: var(--puck-color-grey-07);
    --puck-color-text-disabled: var(--puck-color-grey-03);
    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );
    --puck-space-1: 4px;
    --puck-space-2: 8px;
    --puck-space-3: 12px;
    --puck-space-4: 16px;
    --puck-space-5: 24px;
    --puck-space-chrome-gutter: var(--puck-space-4);
    --puck-radius-none: 0;
    --puck-radius-xs: 2px;
    --puck-radius-s: 3px;
    --puck-radius-m: 4px;
    --puck-radius-l: 8px;
    --puck-radius-pill: 30px;
    --puck-radius-round: 100%;
    --puck-border-width-hairline: 0.5px;
    --puck-border-width-regular: 1px;
    --puck-border-width-focus: 2px;
    --puck-border-width-strong: 4px;
    --puck-duration-fast: 50ms;
    --puck-duration-medium: 150ms;
    --puck-duration-slow: 250ms;
    --puck-ease-exit: ease-in;
    --puck-ease-emphasized: ease-in-out;
    --puck-ease-entrance: ease-out;
    --puck-font-weight-regular: 400;
    --puck-font-weight-medium: 500;
    --puck-font-weight-semibold: 600;
    --puck-font-weight-bold: 700;
    --puck-font-weight-heavy: 800;
    --puck-letter-spacing-ui: 0.05ch;
    --puck-letter-spacing-heading: 0.08ch;
    --puck-icon-size-xs: 14px;
    --puck-icon-size-s: 16px;
    --puck-icon-size-m: 18px;
    --puck-icon-size-l: 24px;
    --puck-space-m-unitless: 24;
    --puck-user-sidebar-left-width: var(--puck-sidebar-width);
    --puck-user-sidebar-right-width: var(--puck-sidebar-width);
    --puck-slot-min-empty-height: 128px;
    --puck-line-placeholder-width: 2px;
  }
}

/* styles/typography.css */
@layer puck-tokens {
  :root {
    --puck-font-size-scale-base-unitless: 12;
    --puck-font-size-xxxs-unitless: 12;
    --puck-font-size-xxs-unitless: 14;
    --puck-font-size-xs-unitless: 16;
    --puck-font-size-s-unitless: 18;
    --puck-font-size-m-unitless: 21;
    --puck-font-size-l-unitless: 24;
    --puck-font-size-xl-unitless: 28;
    --puck-font-size-xxl-unitless: 36;
    --puck-font-size-xxxl-unitless: 48;
    --puck-font-size-xxxxl-unitless: 56;
    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );
    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);
    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);
    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);
    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);
    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);
    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);
    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);
    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );
    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );
    --puck-font-size-base: var(--puck-font-size-xs);
    --puck-line-height-reset: 1;
    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );
    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );
    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );
    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );
    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );
    --puck-line-height-base: var(--puck-line-height-m);
    --puck-fallback-font-stack:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica Neue,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol;
    --puck-font-family: Inter, var(--puck-fallback-font-stack);
    --puck-font-family-monospaced:
      ui-monospace,
      "Cascadia Code",
      "Source Code Pro",
      Menlo,
      Consolas,
      "DejaVu Sans Mono",
      monospace;
  }
  @supports (font-variation-settings: normal) {
    :root {
      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);
    }
  }
}

/* bundle/core.css */
:root {
  --_puck-styles-loaded: "true";
}
#frame-root {
  height: 1px;
  min-height: 100vh;
}
[data-puck-entry] {
  position: relative;
  z-index: 0;
}

/* bundle/index.css */

/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */
._ActionBar_5vdfr_1 {
  align-items: center;
  cursor: default;
  display: flex;
  width: auto;
  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));
  padding-inline-start: var(--puck-actionbar-space-x, 0);
  padding-inline-end: var(--puck-actionbar-space-x, 0);
  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));
  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));
  color: var(--puck-color-text-inverse);
  font-family: var(--puck-font-family);
  min-height: 26px;
}
._ActionBar-label_5vdfr_17 {
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  font-weight: var(--puck-font-weight-medium);
  padding-inline-start: var(--puck-space-2);
  padding-inline-end: var(--puck-space-2);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  text-overflow: ellipsis;
  white-space: nowrap;
}
._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {
  padding-inline-start: 0;
}
._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._ActionBar-group_5vdfr_38 {
  align-items: center;
  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));
  display: flex;
  height: 100%;
  padding-inline-start: var(--puck-space-1);
  padding-inline-end: var(--puck-space-1);
}
._ActionBar-group_5vdfr_38:first-of-type {
  border-inline-start: 0;
}
._ActionBar-group_5vdfr_38:empty {
  display: none;
}
._ActionBarAction_5vdfr_30 {
  background: transparent;
  border: none;
  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));
  cursor: pointer;
  padding: var(--puck-actionbar-action-space, 6px);
  margin-inline-start: var(--puck-space-1);
  margin-inline-end: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);
}
._ActionBarAction--disabled_5vdfr_74 {
  cursor: auto;
  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );
  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);
}
._ActionBarAction_5vdfr_30 svg {
  max-width: none !important;
}
._ActionBarAction_5vdfr_30:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {
    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );
    opacity: 1;
    transition: none;
  }
}
._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),
._ActionBarAction--active_5vdfr_104 {
  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );
  opacity: 1;
  transition: none;
}
._ActionBar-group_5vdfr_38 * {
  margin: 0;
}
._ActionBar-separator_5vdfr_117 {
  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );
  margin-inline: var(--puck-space-1);
  width: var( --puck-border-width-hairline );
  height: 100%;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/styles.module.css/#css-module-data */
._InputWrapper_qyenz_1 + ._InputWrapper_qyenz_1 {
  margin-top: var(--puck-space-3);
}
._Input-label_qyenz_5 {
  align-items: center;
  color: var(--puck-field-label-color-text, var(--puck-color-text-secondary));
  display: flex;
  padding-bottom: var(--puck-field-label-space-y, var(--puck-space-3));
  font-size: var(--puck-field-label-font-size, var(--puck-font-size-xxs));
  font-weight: var( --puck-field-label-font-weight, var(--puck-font-weight-semibold) );
}
._Input-labelIcon_qyenz_17 {
  color: var(--puck-field-label-color-icon, var(--puck-color-text-subtle));
  display: flex;
  margin-inline-end: var(--puck-space-1);
  padding-inline-start: var(--puck-space-1);
}
._Input-disabledIcon_qyenz_24 {
  color: var(--puck-color-text-muted);
  margin-inline-start: auto;
}
._Input-input_qyenz_29 {
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  color: var(--puck-field-color-text, var(--puck-color-text));
  font-family: inherit;
  font-size: var(--puck-font-size-xs);
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
}
@media (min-width: 458px) {
  ._Input-input_qyenz_29 {
    font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  }
}
._Input-select_qyenz_61 {
  position: relative;
  width: 100%;
}
select._Input-input_qyenz_29 {
  appearance: none;
  cursor: pointer;
}
._Input-selectIcon_qyenz_71 {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  fill: var(--puck-field-color-border, var(--puck-color-border));
  stroke-width: 0;
}
._Input-selectIcon_qyenz_71:dir(rtl) {
  right: auto;
  left: 12px;
}
@media (hover: hover) and (pointer: fine) {
  ._Input_qyenz_1:has(> input):hover ._Input-input_qyenz_29:not([readonly]),
  ._Input_qyenz_1:has(> textarea):hover ._Input-input_qyenz_29:not([readonly]) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:has(> ._Input-select_qyenz_61):hover ._Input-input_qyenz_29:not([disabled]) {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
  ._Input_qyenz_1:not(._Input--readOnly_qyenz_111):has(> ._Input-select_qyenz_61):hover ._Input-selectIcon_qyenz_71 {
    fill: var(--puck-field-color-border-hover, var(--puck-color-border-hover));
  }
}
._Input-input_qyenz_29:focus {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-input_qyenz_29,
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
  cursor: default;
  opacity: 1;
  outline: 0;
  transition: none;
}
._Input--readOnly_qyenz_111 > ._Input-select_qyenz_61 > select._Input-input_qyenz_29 ~ ._Input-selectIcon_qyenz_71 {
  fill: var(--puck-field-color-text-disabled, var(--puck-color-text-secondary));
}
._Input-radioGroupItems_qyenz_150 {
  --_puck-field-radio-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-radio-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-radio-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  display: flex;
  border: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  border-radius: var(--_puck-field-radio-radius);
  flex-wrap: wrap;
}
._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--_puck-field-radio-border-color);
  flex-grow: 1;
}
._Input-radio_qyenz_150:first-of-type {
  border-bottom-left-radius: var(--_puck-field-radio-radius);
  border-top-left-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:first-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-left-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radio_qyenz_150:last-of-type {
  border-bottom-right-radius: var(--_puck-field-radio-radius);
  border-inline-end: 0;
  border-top-right-radius: var(--_puck-field-radio-radius);
}
._Input-radio_qyenz_150:last-of-type ._Input-radioInner_qyenz_179 {
  border-bottom-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
  border-top-right-radius: calc(var(--_puck-field-radio-radius) - var(--_puck-field-radio-border-width));
}
._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-radio-border-width)) );
  text-align: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Input-radio_qyenz_150:has(:focus-visible) {
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._Input-radioInner_qyenz_179:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._Input--readOnly_qyenz_111 ._Input-radioGroupItems_qyenz_150 {
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._Input--readOnly_qyenz_111 ._Input-radioInner_qyenz_179 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text-secondary));
  cursor: default;
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150 {
  border-inline-end: var(--_puck-field-radio-border-width) solid var(--puck-field-color-border-disabled, var(--puck-color-border));
}
._Input--readOnly_qyenz_111 ._Input-radio_qyenz_150:last-of-type {
  border-inline-end: 0;
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-medium);
}
._Input--readOnly_qyenz_111 ._Input-radioInput_qyenz_261:checked ~ ._Input-radioInner_qyenz_179 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._Input-radio_qyenz_150 ._Input-radioInput_qyenz_261 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
textarea._Input-input_qyenz_29 {
  margin-bottom: calc(var(--puck-space-1) * -1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css/#css-module-data */
._ArrayField_62huh_5 {
  --_puck-field-array-border-color: var( --puck-field-color-border, var(--puck-color-border) );
  --_puck-field-array-border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  --_puck-field-array-radius: var(--puck-field-radius, var(--puck-radius-m));
  --_puck-field-array-radius-inner: calc( var(--_puck-field-array-radius) - var(--_puck-field-array-border-width) );
  display: flex;
  flex-direction: column;
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  border: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-radius: var(--_puck-field-array-radius);
}
._ArrayField--isDraggingFrom_62huh_30 {
  background-color: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  overflow: hidden;
}
._ArrayField-addButton_62huh_38 {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: none;
  border-radius: var(--_puck-field-array-radius-inner);
  display: flex;
  color: var(--puck-field-array-add-color-icon, var(--puck-color-interactive));
  justify-content: center;
  cursor: pointer;
  width: 100%;
  margin: 0;
  padding: calc(var(--puck-field-space-y, var(--puck-space-3)) + 2px) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  text-align: left;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayField--hasItems_62huh_58 > ._ArrayField-addButton_62huh_38 {
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayField-addButton_62huh_38:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayField_62huh_5:not(._ArrayField--isDraggingFrom_62huh_30) > ._ArrayField-addButton_62huh_38:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayField-inner_62huh_93 {
  margin-top: -1px;
}
._ArrayFieldItem_62huh_101 {
  display: block;
  position: relative;
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
}
._ArrayFieldItem--isDragging_62huh_110 {
  border-top: transparent;
}
._ArrayFieldItem--isExpanded_62huh_114::before {
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 {
  border-bottom: 0;
  outline-offset: 0px !important;
  outline: var(--_puck-field-array-border-width) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring)) !important;
  z-index: 2;
}
._ArrayFieldItem--isDragging_62huh_110 {
  outline: var(--puck-border-width-focus) var(--puck-field-color-border-dragging, var(--puck-color-selection-border)) solid !important;
}
._ArrayFieldItem--isDragging_62huh_110 ._ArrayFieldItem-summary_62huh_132:active {
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
}
._ArrayFieldItem_62huh_101 + ._ArrayFieldItem_62huh_101 {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
._ArrayFieldItem-summary_62huh_132 {
  --_puck-drag-icon-color: var(--puck-field-color-text, var(--puck-color-text));
  --_puck-drag-icon-color-hover: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  color: var(--puck-field-color-text, var(--puck-color-text));
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: space-between;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  list-style: none;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
  position: relative;
  overflow: hidden;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ArrayFieldItem--noFields_62huh_167 > ._ArrayFieldItem-summary_62huh_132 {
  cursor: grab;
}
._ArrayFieldItem_62huh_101:first-of-type > ._ArrayFieldItem-summary_62huh_132 {
  border-top-left-radius: var(--_puck-field-array-radius-inner);
  border-top-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem_62huh_101:last-of-type:not(._ArrayFieldItem--isExpanded_62huh_114) > ._ArrayFieldItem-summary_62huh_132 {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayField--addDisabled_62huh_176 > ._ArrayField-inner_62huh_93 > ._ArrayFieldItem--isExpanded_62huh_114:last-of-type {
  border-bottom-left-radius: var(--_puck-field-array-radius-inner);
  border-bottom-right-radius: var(--_puck-field-array-radius-inner);
}
._ArrayFieldItem-summary_62huh_132:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ArrayFieldItem-summary_62huh_132:hover {
    background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
    transition: none;
  }
}
._ArrayFieldItem-summary_62huh_132:active {
  background-color: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-summary_62huh_132 {
  background: var( --puck-field-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  font-weight: var(--puck-font-weight-semibold);
  transition: none;
}
._ArrayFieldItem-body_62huh_228 {
  background: var(--puck-field-color-surface, var(--puck-color-surface));
  display: none;
}
._ArrayFieldItem--isExpanded_62huh_114 > ._ArrayFieldItem-body_62huh_228 {
  display: block;
}
._ArrayFieldItem-fieldset_62huh_237 {
  border: none;
  border-top: var(--_puck-field-array-border-width) solid var(--_puck-field-array-border-color);
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc(var(--puck-space-4) - var(--_puck-field-array-border-width)) );
}
._ArrayFieldItem-rhs_62huh_250 {
  display: flex;
  gap: var(--puck-space-1);
  align-items: center;
}
._ArrayFieldItem-actions_62huh_256 {
  color: var(--puck-color-text-secondary);
  display: flex;
  gap: var(--puck-space-1);
  opacity: 0;
}
._ArrayFieldItem-summary_62huh_132:focus-within > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256,
._ArrayFieldItem-summary_62huh_132:hover > ._ArrayFieldItem-rhs_62huh_250 > ._ArrayFieldItem-actions_62huh_256 {
  opacity: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/IconButton/IconButton.module.css/#css-module-data */
._IconButton_1pxxt_1 {
  align-items: center;
  background: var(--puck-iconbutton-color-bg, transparent);
  border: none;
  border-radius: var(--puck-iconbutton-radius, var(--puck-radius-m));
  color: var(--puck-iconbutton-color-icon, currentColor);
  display: flex;
  font-family: var(--puck-font-family);
  justify-content: center;
  padding: var(--puck-iconbutton-space, var(--puck-space-1));
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._IconButton--active_1pxxt_15 {
  color: var( --puck-iconbutton-color-icon-active, var(--puck-color-interactive) );
}
._IconButton_1pxxt_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: calc(var(--puck-border-width-focus) * -1);
}
@media (hover: hover) and (pointer: fine) {
  ._IconButton_1pxxt_1:hover:not(._IconButton--disabled_1pxxt_28) {
    background: var( --_puck-iconbutton-color-bg-hover, var( --puck-iconbutton-color-bg-hover, var(--puck-color-interactive-neutral-hover) ) );
    color: var( --puck-iconbutton-color-icon-hover, var(--puck-color-interactive) );
    cursor: pointer;
    transition: none;
  }
}
._IconButton_1pxxt_1:active {
  background: var( --puck-iconbutton-color-bg-active, var(--puck-color-interactive-soft) );
  transition: none;
}
._IconButton--disabled_1pxxt_28 {
  color: var( --puck-iconbutton-color-icon-disabled, var(--puck-color-text-subtle) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */
@keyframes _loader-animation_1w5zn_1 {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
._Loader_1w5zn_13 {
  background: transparent;
  border-radius: var(--puck-radius-round);
  border: var(--puck-border-width-focus) solid currentColor;
  border-bottom-color: transparent;
  display: inline-block;
  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;
  animation-fill-mode: both;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DragIcon/styles.module.css/#css-module-data */
._DragIcon_5e515_1 {
  color: var(--_puck-drag-icon-color, var(--puck-color-text-muted));
  cursor: grab;
  padding: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
}
._DragIcon--disabled_5e515_10 {
  cursor: no-drop;
}
@media (hover: hover) and (pointer: fine) {
  ._DragIcon_5e515_1:not(._DragIcon--disabled_5e515_10):hover {
    color: var(--_puck-drag-icon-color-hover, var(--puck-color-focus-ring));
  }
}

/* components/Sortable/styles.css */
[data-dnd-placeholder]:not([data-puck-line-drag] *) * {
  opacity: 0 !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --_puck-field-array-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ExternalInput/styles.module.css/#css-module-data */
._ExternalInput-actions_143vl_1 {
  display: flex;
}
._ExternalInput-button_143vl_5 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  background-color: var(--puck-field-color-bg, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  color: var(--puck-field-color-text-active, var(--puck-color-interactive));
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  font-weight: var(--puck-font-weight-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  cursor: pointer;
}
._ExternalInput--dataSelected_143vl_34 ._ExternalInput-button_143vl_5 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  display: block;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
._ExternalInput--readOnly_143vl_41 ._ExternalInput-button_143vl_5 {
  background-color: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
}
._ExternalInput-detachButton_143vl_48 {
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-bottom-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  background-color: var( --puck-field-external-detach-color-bg, var(--puck-color-surface-subtle) );
  color: var( --puck-field-external-detach-color-text, var(--puck-color-text-muted) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  justify-content: center;
  padding: var(--puck-space-2) var(--puck-space-3);
  position: relative;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  margin-inline-start: -1px;
  cursor: pointer;
}
._ExternalInput-button_143vl_5:focus-visible,
._ExternalInput-detachButton_143vl_48:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  z-index: 1;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover,
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    transition: none;
  }
  ._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-external-detach-color-text, var(--puck-color-text-muted)) );
  }
  ._ExternalInput--dataSelected_143vl_34:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:hover {
    color: var( --puck-field-color-text-hover, var(--puck-field-color-text, var(--puck-color-text)) );
  }
}
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-button_143vl_5:active,
._ExternalInput_143vl_1:not(._ExternalInput--readOnly_143vl_41) ._ExternalInput-detachButton_143vl_48:active {
  background: var( --puck-field-color-bg-hover, var(--puck-color-interactive-soft-hover) );
  transition: none;
}
._ExternalInputModal_143vl_118 {
  color: var(--puck-color-text);
  display: grid;
  grid-template-rows: min-content minmax(128px, 100%) min-content;
  grid-template-columns: 100%;
  position: relative;
  min-height: 50dvh;
  max-height: 90dvh;
}
._ExternalInputModal-grid_143vl_128 {
  display: flex;
  flex-direction: column;
}
@media (min-width: 458px) {
  ._ExternalInputModal-grid_143vl_128 {
    display: grid;
    grid-template-columns: 100%;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-grid_143vl_128 {
    grid-template-columns: 25% 75%;
  }
}
._ExternalInputModal-filters_143vl_144 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}
._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
  display: none;
}
@media (min-width: 458px) {
  ._ExternalInputModal-filters_143vl_144 {
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
    display: none;
  }
  ._ExternalInputModal--filtersToggled_143vl_139 ._ExternalInputModal-filters_143vl_144 {
    display: block;
  }
}
._ExternalInputModal-masthead_143vl_164 {
  background-color: var(--puck-color-surface-subtle);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-5);
  padding: var(--puck-space-5);
}
._ExternalInputModal-tableWrapper_143vl_173 {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
}
._ExternalInputModal-table_143vl_173 {
  border-collapse: unset;
  border-spacing: 0px;
  color: var(--puck-color-text);
  position: relative;
  z-index: 0;
  min-width: 100%;
}
._ExternalInputModal-thead_143vl_189 {
  background-color: var(--puck-color-surface);
  position: sticky;
  top: 0;
  z-index: 1;
}
._ExternalInputModal-th_143vl_189 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-td_143vl_204 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  padding: var(--puck-space-4) var(--puck-space-5);
}
._ExternalInputModal-tr_143vl_210 ._ExternalInputModal-td_143vl_204:first-of-type {
  font-weight: var(--puck-font-weight-medium);
  width: 1%;
  white-space: nowrap;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover {
    background: var(--puck-color-interactive-soft-hover);
    color: var(--puck-color-interactive);
    cursor: pointer;
    position: relative;
    margin-inline-start: -5px;
  }
  ._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:hover ._ExternalInputModal-td_143vl_204:first-of-type {
    border-inline-start: var(--puck-border-width-strong) solid var(--puck-color-interactive);
    padding-inline-start: 20px;
  }
}
._ExternalInputModal-tbody_143vl_217 ._ExternalInputModal-tr_143vl_210:last-of-type ._ExternalInputModal-td_143vl_204 {
  border-bottom: none;
}
._ExternalInputModal-tableWrapper_143vl_173 {
  display: none;
}
._ExternalInputModal--hasData_143vl_244 ._ExternalInputModal-tableWrapper_143vl_173 {
  display: block;
}
._ExternalInputModal-loadingBanner_143vl_248 {
  display: none;
  background-color: color-mix(in srgb, var(--puck-color-surface) 90%, transparent);
  padding: 64px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
._ExternalInputModal--isLoading_143vl_265 ._ExternalInputModal-loadingBanner_143vl_248 {
  display: flex;
}
._ExternalInputModal-searchForm_143vl_269 {
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-3);
  flex-grow: 1;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchForm_143vl_269 {
    flex-wrap: nowrap;
  }
}
._ExternalInputModal-search_143vl_269 {
  display: flex;
  background: var(--puck-color-surface);
  border-width: var(--puck-border-width-regular);
  border-style: solid;
  border-color: var(--puck-color-border);
  border-radius: var(--puck-radius-m);
  flex-grow: 1;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within {
  border-color: var(--puck-color-border-hover);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover {
    border-color: var(--puck-color-border-hover);
    transition: none;
  }
}
._ExternalInputModal-searchIcon_143vl_306 {
  align-items: center;
  background: var(--puck-color-surface-subtle);
  border-bottom-left-radius: var(--puck-radius-m);
  border-top-left-radius: var(--puck-radius-m);
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-subtle);
  display: flex;
  justify-content: center;
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._ExternalInputModal-search_143vl_269:focus-within ._ExternalInputModal-searchIcon_143vl_306 {
  color: var(--puck-color-text-secondary);
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._ExternalInputModal-search_143vl_269:hover ._ExternalInputModal-searchIcon_143vl_306 {
    color: var(--puck-color-text-secondary);
    transition: none;
  }
}
._ExternalInputModal-searchIconText_143vl_333 {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
._ExternalInputModal-searchInput_143vl_343 {
  border: none;
  border-radius: var(--puck-radius-m);
  background: var(--puck-color-surface);
  font-family: inherit;
  font-size: var(--puck-font-size-xxs);
  padding: var(--puck-space-3) calc(var(--puck-space-4) - var(--puck-border-width-regular));
  width: 100%;
}
._ExternalInputModal-searchInput_143vl_343:focus {
  outline: 0;
}
._ExternalInputModal-searchActions_143vl_358 {
  display: flex;
  gap: var(--puck-space-2);
  height: 44px;
  width: 100%;
}
@media (min-width: 458px) {
  ._ExternalInputModal-searchActions_143vl_358 {
    width: auto;
  }
}
._ExternalInputModal-searchActionIcon_143vl_371 {
  align-self: center;
}
._ExternalInputModal-footerContainer_143vl_375 {
  background-color: var(--puck-color-surface-subtle);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
}
._ExternalInputModal-footer_143vl_375 {
  font-weight: var(--puck-font-weight-medium);
  font-size: var(--puck-font-size-xxs);
  text-align: right;
}
._ExternalInputModal-field_143vl_388 {
  color: var(--puck-color-text-secondary);
  margin: var(--puck-space-4);
  margin-bottom: var(--puck-space-3);
  display: block;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Modal/styles.module.css/#css-module-data */
._Modal_g5xob_1 {
  background: var(--puck-color-overlay-backdrop);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 32px;
}
._Modal--isOpen_g5xob_15 {
  display: flex;
}
._Modal-inner_g5xob_19 {
  width: 100%;
  max-width: 1024px;
  border-radius: var(--puck-radius-l);
  overflow: hidden;
  background: var(--puck-color-surface);
  display: flex;
  flex-direction: column;
  max-height: 90dvh;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Heading/styles.module.css/#css-module-data */
._Heading_97eh4_1 {
  display: block;
  color: var(--_puck-heading-color, var(--puck-color-text));
  font-weight: var(--puck-font-weight-bold);
  margin: 0;
}
._Heading_97eh4_1 b {
  font-weight: var(--puck-font-weight-bold);
}
._Heading--xxxxl_97eh4_12 {
  font-size: var(--puck-font-size-xxxxl);
  letter-spacing: var(--puck-letter-spacing-heading);
  font-weight: var(--puck-font-weight-heavy);
}
._Heading--xxxl_97eh4_18 {
  font-size: var(--puck-font-size-xxxl);
}
._Heading--xxl_97eh4_22 {
  font-size: var(--puck-font-size-xxl);
}
._Heading--xl_97eh4_26 {
  font-size: var(--puck-font-size-xl);
}
._Heading--l_97eh4_30 {
  font-size: var(--puck-font-size-l);
}
._Heading--m_97eh4_34 {
  font-size: var(--puck-font-size-m);
}
._Heading--s_97eh4_38 {
  font-size: var(--puck-font-size-s);
}
._Heading--xs_97eh4_42 {
  font-size: var(--puck-font-size-xs);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Button/Button.module.css/#css-module-data */
._Button_oe4qj_1 {
  --_puck-button-default-space-x: 20px;
  --_puck-button-default-font-size: var(--puck-font-size-xxs);
  --_puck-button-default-font-weight: var(--puck-font-weight-regular);
  --_puck-button-default-color-bg-disabled: var(--puck-color-bg-disabled);
  --_puck-button-default-color-text-disabled: var(--puck-color-text-disabled);
  appearance: none;
  background: none;
  border: var(--puck-border-width-regular) solid transparent;
  border-radius: var(--puck-button-radius, var(--puck-radius-m));
  color: var(--puck-color-text-inverse);
  display: inline-flex;
  align-items: center;
  gap: var(--puck-space-2);
  letter-spacing: var(--puck-letter-spacing-ui);
  font-family: var(--puck-font-family);
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
}
._Button_oe4qj_1:hover,
._Button_oe4qj_1:active {
  transition: none;
}
._Button--medium_oe4qj_34 {
  min-height: 34px;
  padding-bottom: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-medium-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-medium-space-y, calc(var(--puck-space-2) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-medium-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-medium-font-size, var(--_puck-button-default-font-size) );
}
._Button--large_oe4qj_62 {
  padding-bottom: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  padding-inline-start: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-inline-end: var( --puck-button-large-space-x, calc(var(--_puck-button-default-space-x) - var(--puck-border-width-regular)) );
  padding-top: var( --puck-button-large-space-y, calc(var(--puck-space-3) - var(--puck-border-width-regular)) );
  font-weight: var( --puck-button-large-font-weight, var(--_puck-button-default-font-weight) );
  font-size: var( --puck-button-large-font-size, var(--_puck-button-default-font-size) );
}
._Button-icon_oe4qj_89 {
  margin-top: 2px;
}
._Button--primary_oe4qj_93 {
  background: var( --puck-button-primary-color-bg, var(--puck-color-interactive) );
  border-color: var(--puck-button-primary-color-border, transparent);
  color: var(--puck-button-primary-color-text, var(--puck-color-text-inverse));
}
._Button_oe4qj_1:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--primary_oe4qj_93:hover {
    background-color: var( --puck-button-primary-color-bg-hover, var(--puck-color-interactive-hover) );
  }
}
._Button--primary_oe4qj_93:active {
  background-color: var( --puck-button-primary-color-bg-active, var(--puck-color-interactive-active) );
}
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123,
._Button--primary_oe4qj_93._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-primary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-primary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--secondary_oe4qj_135 {
  background: var(--puck-button-secondary-color-bg, transparent);
  border-color: var(--puck-button-secondary-color-border, currentColor);
  color: var(--puck-button-secondary-color-text, currentColor);
}
@media (hover: hover) and (pointer: fine) {
  ._Button--secondary_oe4qj_135:hover {
    background-color: var( --puck-button-secondary-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var(--puck-button-secondary-color-text, var(--puck-color-text));
  }
}
._Button--secondary_oe4qj_135:active {
  background-color: var( --puck-button-secondary-color-bg-active, var(--puck-color-interactive-soft) );
  color: var(--puck-button-secondary-color-text, var(--puck-color-text));
}
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123,
._Button--secondary_oe4qj_135._Button--disabled_oe4qj_123:hover {
  background-color: var( --puck-button-secondary-color-bg-disabled, var(--_puck-button-default-color-bg-disabled) );
  color: var( --puck-button-secondary-color-text-disabled, var(--_puck-button-default-color-text-disabled) );
}
._Button--flush_oe4qj_171 {
  border-radius: var(--puck-radius-none);
}
._Button--disabled_oe4qj_123:hover {
  cursor: not-allowed;
}
._Button--fullWidth_oe4qj_179 {
  justify-content: center;
  width: 100%;
}
._Button-spinner_oe4qj_184 {
  padding-inline-start: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */
._RichTextMenu_1ve2j_1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
._RichTextMenu--form_1ve2j_7 {
  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));
  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));
  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);
  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
._RichTextMenu-group_1ve2j_21 {
  display: flex;
  align-items: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-inline: 6px;
  gap: 2px;
  position: relative;
}
._RichTextMenu-group_1ve2j_21:first-of-type {
  padding-left: 0;
}
._RichTextMenu-group_1ve2j_21:last-of-type {
  padding-right: 0;
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {
  color: var(--puck-color-text-inverse);
  gap: 0px;
  flex-wrap: nowrap;
}
._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );
}
._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {
  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */
._Control_id4pm_1 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Control--inline_id4pm_6 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Select/styles.module.css/#css-module-data */
._Select_1n4iv_1 {
  position: relative;
  z-index: 1;
}
._Select-buttonInner_1n4iv_6 {
  align-items: center;
  display: flex;
}
._Select-buttonIcon_1n4iv_11 {
  align-items: center;
  display: flex;
  justify-content: center;
}
._Select--standalone_1n4iv_17 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._Select--actionBar_1n4iv_22 ._Select-buttonIcon_1n4iv_11 .lucide {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}
._Select-items_1n4iv_27 {
  background: var(--puck-color-surface);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-l);
  margin: 10px 8px;
  margin-left: 0;
  padding: var(--puck-space-1);
  z-index: 2;
  list-style: none;
}
._SelectItem_1n4iv_38 {
  background: transparent;
  border-radius: var(--puck-radius-m);
  border: none;
  color: var(--puck-color-text-secondary);
  cursor: pointer;
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  font-size: var(--puck-font-size-xxs);
  margin: 0;
  padding: var(--puck-space-2) var(--puck-space-3);
  width: 100%;
}
._SelectItem--isSelected_1n4iv_53 {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
  font-weight: var(--puck-font-weight-medium);
}
._SelectItem--isSelected_1n4iv_53 ._SelectItem-icon_1n4iv_59 {
  color: var(--puck-color-interactive);
}
._SelectItem_1n4iv_38:hover {
  background: var(--puck-color-interactive-soft);
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextEditor/styles.module.css/#css-module-data */
._RichTextEditor_5wzos_1 .ProseMirror {
  white-space: pre-wrap;
  word-wrap: break-word;
  cursor: text;
  outline: none;
  position: relative;
}
._RichTextEditor_5wzos_1 .rich-text * {
  white-space: pre-wrap;
  user-select: auto;
  -webkit-user-select: auto;
}
._RichTextEditor_5wzos_1 .rich-text blockquote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: var(--puck-border-width-strong) solid var(--puck-color-border);
}
._RichTextEditor_5wzos_1 .rich-text code {
  background-color: var(--puck-color-surface-muted);
  padding: var(--puck-space-1) var(--puck-space-2);
  border-radius: var(--puck-radius-m);
}
._RichTextEditor_5wzos_1 .rich-text p:empty::before {
  content: "\\a0";
}
._RichTextEditor_5wzos_1 .rich-text pre code {
  display: block;
  padding: var(--puck-space-2) var(--puck-space-3);
}
._RichTextEditor_5wzos_1 .rich-text > *:first-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:first-child,
._RichTextEditor_5wzos_1 .rich-text * p:first-of-type {
  margin-top: 0;
}
._RichTextEditor_5wzos_1 .rich-text > *:last-child,
._RichTextEditor_5wzos_1 .ProseMirror > *:last-child,
._RichTextEditor_5wzos_1 .rich-text * p:last-of-type {
  margin-bottom: 0;
}
._RichTextEditor--editor_5wzos_50 {
  color: var(--puck-field-color-text, var(--puck-color-text));
  background: var(--puck-field-color-bg, var(--puck-color-surface));
  border-width: var( --puck-field-border-width, var(--puck-border-width-regular) );
  border-style: solid;
  border-color: var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--puck-field-font-size, var(--puck-font-size-xxs));
  resize: vertical;
  text-align: initial;
  transition: border-color var(--puck-duration-fast) var(--puck-ease-exit);
  width: 100%;
  max-width: 100%;
  min-height: 128px;
}
._RichTextEditor--editor_5wzos_50 .rich-text {
  flex-grow: 1;
}
._RichTextEditor--editor_5wzos_50 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50 .rich-text .ProseMirror {
  height: 100%;
  padding: var(--puck-field-space-y, var(--puck-space-3)) var( --puck-field-space-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}
._RichTextEditor--editor_5wzos_50 .rich-text ul,
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  padding-left: var(--puck-space-5);
}
._RichTextEditor--editor_5wzos_50 .rich-text li {
  line-height: 1.5;
}
._RichTextEditor--editor_5wzos_50 .rich-text p {
  margin-block: var(--puck-space-3);
}
._RichTextEditor--editor_5wzos_50 .rich-text ul {
  list-style: disc;
}
._RichTextEditor--editor_5wzos_50 .rich-text ol {
  list-style: decimal;
}
._RichTextEditor--editor_5wzos_50:focus-within {
  border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
  outline: var(--puck-border-width-focus) solid var(--puck-field-color-border-focus, var(--puck-color-focus-ring));
  transition: none;
}
@media (hover: hover) and (pointer: fine) {
  ._RichTextEditor--editor_5wzos_50:hover:not(._RichTextEditor--disabled_5wzos_123) {
    border-color: var( --puck-field-color-border-hover, var(--puck-color-border-hover) );
    transition: none;
  }
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 {
  background: var( --puck-field-color-bg-disabled, var(--puck-color-surface-muted) );
  border-color: var( --puck-field-color-border-disabled, var(--puck-color-border) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text:not(:has(.ProseMirror)),
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .rich-text .ProseMirror {
  color: var( --puck-field-color-text-disabled, var(--puck-color-text-secondary) );
}
._RichTextEditor--editor_5wzos_50._RichTextEditor--disabled_5wzos_123 .ProseMirror[contenteditable=false] {
  cursor: default;
}
._RichTextEditor_5wzos_1:not(:focus-within):not(._RichTextEditor--isActive_5wzos_159) .ProseMirror ::selection {
  background-color: transparent;
}
._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border-muted);
  position: sticky;
  top: 0;
  z-index: 1;
}
._RichTextEditor--disabled_5wzos_123 ._RichTextEditor-menu_5wzos_165 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css/#css-module-data */
._ObjectField_c5reb_1 {
  display: flex;
  flex-direction: column;
  background-color: var(--puck-field-color-surface, var(--puck-color-surface));
  border: var(--puck-field-border-width, var(--puck-border-width-regular)) solid var(--puck-field-color-border, var(--puck-color-border));
  border-radius: var(--puck-field-radius, var(--puck-radius-m));
}
._ObjectField-fieldset_c5reb_10 {
  border: none;
  margin: 0;
  min-width: 0;
  padding: var(--puck-field-space-surface-y, var(--puck-space-4)) var( --puck-field-space-surface-x, calc( var(--puck-space-4) - var(--puck-field-border-width, var(--puck-border-width-regular)) ) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */
._Drawer_1n90m_1 {
  display: flex;
  flex-direction: column;
  font-family: var(--puck-font-family);
  gap: var(--puck-space-3);
}
._Drawer-draggable_1n90m_8 {
  position: relative;
}
._Drawer-draggableBg_1n90m_12 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
}
._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));
  color: var(--puck-drawer-item-color-text, var(--puck-color-text));
  cursor: grab;
  padding: var(--puck-drawer-item-space, var(--puck-space-3));
  display: flex;
  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;
  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));
  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));
  justify-content: space-between;
  align-items: center;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
}
._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {
  background: var(--puck-color-surface-muted);
  color: var(--puck-color-text-muted);
  cursor: not-allowed;
}
._DrawerItem_1n90m_22:focus-visible {
  outline: 0;
}
._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {
  border-radius: var(--puck-radius-m);
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {
    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );
    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._DrawerItem-name_1n90m_72 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */
._DraggableComponent_1627v_1 {
  position: absolute;
  pointer-events: none;
}
._DraggableComponent-overlayWrapper_1627v_6 {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
}
._DraggableComponent-overlay_1627v_6 {
  cursor: pointer;
  height: 100%;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {
  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);
}
._DraggableComponent-loadingOverlay_1627v_38 {
  background: var(--puck-color-surface);
  color: var(--puck-color-text);
  border-radius: var(--puck-radius-m);
  display: flex;
  padding: var(--puck-space-2);
  top: var(--puck-space-2);
  right: var(--puck-space-2);
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
  z-index: 1;
}
._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;
}
._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {
  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );
}
._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {
  display: none;
}
._DraggableComponent-actionsOverlay_1627v_89 {
  position: sticky;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}
._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {
  opacity: 1;
  pointer-events: auto;
}
._DraggableComponent-actions_1627v_89 {
  position: absolute;
  width: auto;
  cursor: grab;
  display: flex;
  box-sizing: border-box;
  transform-origin: right top;
  min-height: 36px;
}
._DraggableComponent-actionsAction_1627v_111 {
  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));
}

/* components/DraggableComponent/styles.css */
[data-puck-component] * {
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-component] {
  cursor: grab;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
}
[data-puck-dropzone] {
  pointer-events: auto !important;
}
[data-puck-disabled] {
  cursor: pointer;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;
  border: none !important;
  color: transparent !important;
  opacity: 0.3 !important;
  outline: none !important;
  transition: none !important;
}
[data-dnd-placeholder]:not([data-puck-line-drag] *) *,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,
[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {
  opacity: 0 !important;
}
[data-puck-line-drag] [data-dnd-placeholder] {
  opacity: 0.4 !important;
  outline: none !important;
  transition: none !important;
}
[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {
  opacity: 0.9 !important;
}
[data-dnd-dragging][data-puck-component] {
  pointer-events: none !important;
  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;
  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;
}
[data-dnd-dragging][data-puck-component] > :first-child {
  margin-top: 0 !important;
}
[data-dnd-dragging][data-puck-component] > :last-child {
  margin-bottom: 0 !important;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */
._DropZone_wc2ks_1 {
  position: relative;
  height: 100%;
  min-height: var(--puck-slot-min-empty-height);
  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);
  width: 100%;
}
._DropZone--hasChildren_wc2ks_11 {
  min-height: 0;
}
._DropZone_wc2ks_1:empty {
  min-height: var(--puck-slot-min-empty-height);
}
[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {
  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);
}
._DropZone--isAreaSelected_wc2ks_24,
._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1:empty {
  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone-item_wc2ks_39 {
  position: relative;
}
._DropZone-linePlaceholder_wc2ks_43 {
  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );
  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropZone-hitbox_wc2ks_55 {
  position: absolute;
  bottom: calc(var(--puck-space-3) * -1);
  height: var(--puck-space-5);
  width: 100%;
  z-index: 1;
}
[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {
  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));
}
._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {
  opacity: 0;
}
body:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {
  opacity: 0 !important;
}

/* lib/overlay-portal/styles.css */
[data-puck-overlay-portal],
[data-puck-overlay-portal] * {
  pointer-events: auto !important;
}
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],
[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {
  pointer-events: none !important;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {
  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;
  outline-offset: 2px;
}
[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {
  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;
  outline-offset: 2px;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */
._InlineTextField_104qp_1 {
  cursor: text;
  display: inline-block;
  white-space: pre-wrap;
  text-decoration: inherit;
}
[data-dnd-dragging] ._InlineTextField_104qp_1 {
  cursor: none;
  caret-color: transparent;
}
[data-dnd-dragging] ._InlineTextField_104qp_1::selection {
  display: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Fields/styles.module.css/#css-module-data */
._PuckFields_wnj25_1 {
  position: relative;
  font-family: var(--puck-font-family);
}
._PuckFields--isLoading_wnj25_6 {
  min-height: 48px;
}
._PuckFields-loadingOverlay_wnj25_10 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  top: 0px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}
._PuckFields-loadingOverlayInner_wnj25_25 {
  display: flex;
  padding: var(--puck-space-4);
  position: sticky;
  top: 0;
}
._PuckFields-field_wnj25_32 * {
  box-sizing: border-box;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 {
  color: var(--puck-color-text-secondary);
  padding: var(--puck-space-4);
  padding-bottom: var(--puck-space-3);
  display: block;
}
._PuckFields--wrapFields_wnj25_36 ._PuckFields-field_wnj25_32 + ._PuckFields-field_wnj25_32 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-top: var(--puck-space-2);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ComponentList/styles.module.css/#css-module-data */
._ComponentList_htktj_1 {
  max-width: 100%;
}
._ComponentList--isExpanded_htktj_5 + ._ComponentList_htktj_1 {
  margin-top: var(--puck-space-3);
}
._ComponentList-content_htktj_9 {
  display: none;
}
._ComponentList--isExpanded_htktj_5 > ._ComponentList-content_htktj_9 {
  display: block;
}
._ComponentList-title_htktj_17 {
  background-color: transparent;
  border: 0;
  color: var(--puck-drawer-category-color-text, var(--puck-color-text-muted));
  cursor: pointer;
  display: flex;
  font: inherit;
  font-size: var(--puck-drawer-category-font-size, var(--puck-font-size-xxxs));
  list-style: none;
  margin-bottom: 6px;
  padding: var(--puck-drawer-category-space, var(--puck-space-2));
  text-transform: uppercase;
  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);
  gap: var(--puck-space-1);
  border-radius: var(--puck-radius-m);
  width: 100%;
}
._ComponentList-title_htktj_17:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._ComponentList-title_htktj_17:hover {
    background-color: var( --puck-drawer-category-color-bg-hover, var(--puck-color-interactive-soft) );
    color: var( --puck-drawer-category-color-text-hover, var(--puck-color-interactive) );
    transition: none;
  }
}
._ComponentList-title_htktj_17:active {
  background-color: var( --puck-drawer-category-color-bg-active, var(--puck-color-interactive-subtle) );
  transition: none;
}
._ComponentList-titleIcon_htktj_63 {
  margin-inline-start: auto;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Preview/styles.module.css/#css-module-data */
._PuckPreview_zbic3_1 {
  position: relative;
  height: 100%;
}
._PuckPreview-frame_zbic3_6 {
  border: none;
  height: 100%;
  width: 100%;
}
._PuckPreview-frame_zbic3_6[data-puck-outline-dragging] {
  pointer-events: none;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/drop-line/styles.module.css/#css-module-data */
._DropLine_eyz3q_2 {
  background: var(--_puck-outline-color-drop-indicator);
  border-radius: calc(var(--_puck-outline-drop-indicator-size) / 2);
  height: var(--_puck-outline-drop-indicator-size);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}
._DropLine--top_eyz3q_12 {
  top: 0;
}
._DropLine--bottom_eyz3q_16 {
  bottom: 0;
}
._DropLine--top_eyz3q_12._DropLine--outset_eyz3q_20 {
  top: calc(-1 * var(--_puck-outline-drop-indicator-size));
}
._DropLine--bottom_eyz3q_16._DropLine--outset_eyz3q_20 {
  bottom: calc(-1 * var(--_puck-outline-drop-indicator-size));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/empty-zone-placeholder/styles.module.css/#css-module-data */
._LayerTree-helper_1m7e4_2 {
  color: var(--puck-outline-color-text-helper, var(--puck-color-text-subtle));
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-helperRoot_1m7e4_11 {
  padding-inline-start: var(--puck-space-3);
}
._LayerTree-helper_1m7e4_2[data-puck-drop-target] {
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer/styles.module.css/#css-module-data */
._Layer_onfgu_1 {
  position: relative;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
}
._Layer-inner_onfgu_8 {
  align-items: center;
  border: var(--_puck-outline-border-width) solid transparent;
  border-radius: var(--_puck-outline-radius);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Layer--isSortable_onfgu_18 > ._Layer-inner_onfgu_8 {
  cursor: grab;
}
._Layer-content_onfgu_22 {
  display: flex;
  gap: var(--puck-space-4);
  flex: 1 1 auto;
  min-width: 0;
}
._Layer-clickable_onfgu_29 {
  align-items: center;
  background: none;
  border: 0;
  border-radius: var(--_puck-outline-radius);
  color: inherit;
  cursor: inherit;
  display: flex;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 0;
}
[data-puck-dnd-disabled] ._Layer-inner_onfgu_8,
[data-puck-dnd-disabled] ._Layer-clickable_onfgu_29 {
  cursor: pointer;
}
._Layer-clickable_onfgu_29:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
  position: relative;
  z-index: 1;
}
._Layer-caret_onfgu_57 {
  visibility: hidden;
  display: flex;
  flex-shrink: 0;
}
._Layer-caret_onfgu_57 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-content_onfgu_22 {
  font-weight: var(--puck-font-weight-bold);
}
._Layer--containsZone_onfgu_68 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 {
  visibility: visible;
}
._Layer-title_onfgu_76 {
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  margin: var(--puck-space-1);
  cursor: pointer;
}
._Layer-name_onfgu_85 {
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
._Layer-icon_onfgu_91 {
  color: var(--puck-outline-color-icon, var(--puck-color-text-subtle));
  margin-top: var(--puck-space-1);
}
._Layer-icon_onfgu_91 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._Layer-zones_onfgu_101 {
  display: none;
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-4));
}
._Layer--isExpanded_onfgu_106 > ._Layer-zones_onfgu_101 {
  display: block;
}
._Layer--isExpanded_onfgu_106 > ._Layer-inner_onfgu_8 > ._Layer-caret_onfgu_57 svg {
  transform: rotate(90deg);
}
@media (hover: hover) and (pointer: fine) {
  ._Layer_onfgu_1:not(._Layer--isSelected_onfgu_115) > ._Layer-inner_onfgu_8:hover {
    --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-hover);
    border-color: var(--_puck-outline-color-border-hover);
    background: var(--_puck-outline-color-bg-hover);
    transition: none;
  }
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  border-color: var( --puck-outline-color-border-selected, var(--puck-color-selection-border) );
}
._Layer--isSelected_onfgu_115 > ._Layer-inner_onfgu_8 {
  --_puck-outline-actions-color-bg: var(--_puck-outline-color-bg-selected);
  background: var(--_puck-outline-color-bg-selected);
}
._Layer--isExpandCandidate_onfgu_138 > ._Layer-inner_onfgu_8 {
  border-color: var(--_puck-outline-color-border-hover);
  background: var(--_puck-outline-color-bg-hover);
}
._Layer--isDragSource_onfgu_143 > ._Layer-inner_onfgu_8 {
  color: var(--puck-color-text-muted);
  background: transparent;
}
._Layer--isDragSource_onfgu_143 > ._Layer-zones_onfgu_101 {
  opacity: 0.5;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-actions/styles.module.css/#css-module-data */
._LayerActions_d90t9_2 {
  position: sticky;
  inset-inline-end: calc(var(--puck-space-1) * -1);
  padding-inline: var(--puck-space-1);
  display: flex;
  visibility: hidden;
  flex-shrink: 0;
  color: var(--_puck-outline-color-text);
  background: var(--_puck-outline-actions-color-bg);
  border-top-right-radius: var(--_puck-outline-radius);
  border-bottom-right-radius: var(--_puck-outline-radius);
}
._LayerActions--visible_d90t9_18 {
  visibility: visible;
}
._LayerActions_d90t9_2 svg {
  height: var(--_puck-outline-caret-size);
  width: var(--_puck-outline-caret-size);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-items/styles.module.css/#css-module-data */
._LayerTree_o5tyt_1 {
  color: var(--_puck-outline-color-text);
  font-family: var(--puck-outline-font-family, var(--puck-font-family));
  font-size: var(--puck-outline-font-size, var(--puck-font-size-xxxs));
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0;
}
._LayerTree--nested_o5tyt_12 {
  margin-inline-start: var(--puck-outline-space-indent, var(--puck-space-3));
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/components/layer-tree-zone/styles.module.css/#css-module-data */
._LayerTree-zoneTitle_fvhlh_2 {
  color: var(--_puck-outline-zone-color-text);
  font-size: var( --puck-outline-zone-font-size, calc(var(--puck-font-size-xxxs) * 0.9) );
  display: flex;
  gap: var(--puck-space-2);
  align-items: center;
  overflow-x: hidden;
  padding-top: var(--puck-space-1);
  padding-bottom: var(--puck-space-1);
  padding-inline-start: var(--_puck-outline-label-indent);
  border: var(--_puck-outline-border-width) solid transparent;
}
._LayerTree-zoneIcon_fvhlh_19 {
  margin-top: var(--puck-space-1);
}
._LayerTree-zoneIcon_fvhlh_19 svg {
  height: var(--_puck-outline-icon-size);
  width: var(--_puck-outline-icon-size);
}
._LayerTree-zoneTitle_fvhlh_2[data-puck-drop-target] {
  color: var(--_puck-outline-color-text-hover);
  position: relative;
  overflow: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/LayerTree/styles.module.css/#css-module-data */
._LayerTreeRoot_1qowl_1 {
  min-width: max-content;
  --_puck-iconbutton-color-bg-hover: transparent;
  --_puck-outline-color-text: var( --puck-outline-color-text, var(--puck-color-text-primary) );
  --_puck-outline-border-width: var( --puck-outline-border-width, var(--puck-border-width-regular) );
  --_puck-outline-radius: var(--puck-outline-radius, var(--puck-radius-m));
  --_puck-outline-caret-size: var( --puck-outline-action-size, var(--puck-icon-size-s) );
  --_puck-outline-icon-size: var( --puck-outline-icon-size, var(--puck-icon-size-xs) );
  --_puck-outline-color-bg-selected: var( --puck-outline-color-bg-selected, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-bg-hover: var( --puck-outline-color-bg-hover, var(--puck-color-interactive-soft) );
  --_puck-outline-color-border-hover: var( --puck-outline-color-border-hover, var(--puck-color-interactive-subtle) );
  --_puck-outline-color-text-hover: var( --puck-outline-color-text-hover, var(--puck-color-interactive) );
  --_puck-outline-color-drop-indicator: var( --puck-outline-color-drop-indicator, var(--puck-color-line-placeholder) );
  --_puck-outline-drop-indicator-size: var(--puck-line-placeholder-width);
  --_puck-outline-zone-color-text: var( --puck-outline-zone-color-text, var(--puck-color-text-muted) );
  --_puck-outline-actions-color-bg: transparent;
  --_puck-outline-caret-slot: calc( var(--_puck-outline-caret-size) + var(--puck-iconbutton-space, var(--puck-space-1)) * 2 );
  --_puck-outline-label-indent: calc( var(--_puck-outline-caret-slot) + var(--puck-space-2) + var(--_puck-outline-border-width) );
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/collapse-all/styles.module.css/#css-module-data */
._CollapseAll_1r4cy_1 {
  visibility: hidden;
}
._CollapseAll-icon_1r4cy_5 {
  height: var(--puck-icon-size-m);
  width: var(--puck-icon-size-m);
}
._CollapseAll--visible_1r4cy_10 {
  visibility: visible;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/components/outline-header/styles.module.css/#css-module-data */
._OutlineHeader_ntv8r_1 {
  display: flex;
  align-items: center;
  width: 100%;
  gap: var(--puck-space-2);
  padding-block: var(--puck-space-3);
  padding-inline: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Outline/styles.module.css/#css-module-data */
._OutlineWrapper_b9ln0_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
}
._OutlineWrapper-collapseAll_b9ln0_9 {
  display: flex;
  align-items: center;
  margin-inline-start: auto;
}
._OutlineWrapper-layers_b9ln0_15 {
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  padding: var(--puck-space-1);
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Layout/styles.module.css/#css-module-data */
._Puck_tzaxg_19 {
  font-family: var(--puck-font-family);
  overflow-x: hidden;
  visibility: visible !important;
}
@media (min-width: 766px) {
  ._Puck_tzaxg_19 {
    overflow-x: auto;
  }
}
._Puck-portal_tzaxg_31 {
  position: relative;
  z-index: 2;
}
._PuckLayout_tzaxg_36 {
  height: 100dvh;
}
._PuckLayout-inner_tzaxg_40 {
  --puck-frame-width: auto;
  --puck-pluginbar-width: min-content;
  --puck-sidebar-width: 0px;
  --puck-sidebar-left-width: var( --puck-user-sidebar-left-width, var(--puck-sidebar-width) );
  --puck-sidebar-right-width: var( --puck-user-sidebar-right-width, var(--puck-sidebar-width) );
  background-color: var(--puck-color-surface-subtle);
  display: grid;
  grid-template-areas: "header" "editor" "left" "right" "sidenav";
  grid-template-columns: var(--puck-frame-width);
  grid-template-rows: min-content auto 0 0 var(--puck-pluginbar-width);
  height: 100%;
  position: relative;
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-exit);
  z-index: 0;
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 68px;
    grid-template-areas: "header header header header" "sidenav left editor right";
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) 0;
    grid-template-rows: min-content auto;
  }
  ._Puck--hidePlugins_tzaxg_73 ._PuckLayout-inner_tzaxg_40 {
    --puck-pluginbar-width: 0;
  }
}
._PuckLayout--mounted_tzaxg_78 ._PuckLayout-inner_tzaxg_40 {
  --puck-sidebar-width: 186px;
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 30% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto 55% 0 var(--puck-pluginbar-width);
  transition: grid-template-rows var(--puck-duration-medium) var(--puck-ease-entrance);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
  grid-template-rows: 0 auto min-content 0 var(--puck-pluginbar-width);
}
@media (min-width: 638px) {
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightToggle_tzaxg_82._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-inner_tzaxg_40,
  ._PuckLayout--mobilePanelHeightMinContent_tzaxg_110._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--isExpanded_tzaxg_90 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) 0;
    grid-template-rows: min-content auto;
  }
}
@media (min-width: 638px) {
  ._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) 0 var(--puck-frame-width) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82._PuckLayout--rightSideBarVisible_tzaxg_137 ._PuckLayout-inner_tzaxg_40 {
    grid-template-columns: var(--puck-pluginbar-width) var(--puck-sidebar-left-width) var( --puck-frame-width ) var(--puck-sidebar-right-width);
  }
}
@media (min-width: 458px) {
  ._PuckLayout-mounted_tzaxg_156 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: minmax(266px, auto);
  }
}
@media (min-width: 638px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: minmax(186px, 250px);
  }
}
@media (min-width: 766px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-frame-width: auto;
  }
}
@media (min-width: 990px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 256px;
  }
}
@media (min-width: 1198px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 274px;
  }
}
@media (min-width: 1398px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 290px;
  }
}
@media (min-width: 1598px) {
  ._PuckLayout_tzaxg_36 ._PuckLayout-inner_tzaxg_40 {
    --puck-sidebar-width: 320px;
  }
}
._PuckLayout-nav_tzaxg_197 {
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  background-color: var( --puck-pluginbar-color-bg, var(--puck-color-surface-subtle) );
  grid-area: sidenav;
  overflow: hidden;
  width: 100%;
}
@media (min-width: 638px) {
  ._PuckLayout-nav_tzaxg_197 {
    border-top: 0;
    border-right: var(--puck-border-width-regular) solid var(--puck-color-border);
    box-sizing: border-box;
  }
}
._PuckLayout-header_tzaxg_217 {
  grid-area: header;
}
._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
  overflow: hidden;
}
@media (min-width: 638px) {
  ._PuckLayout--leftSideBarVisible_tzaxg_82 ._PuckLayout-header_tzaxg_217 {
    overflow: auto;
  }
}
._PuckPluginTab_tzaxg_231 {
  display: none;
  flex-grow: 1;
  max-height: 100%;
}
._PuckPluginTab--visible_tzaxg_237 {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
._PuckPluginTab-body_tzaxg_243 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  min-height: 0;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/MenuBar/styles.module.css/#css-module-data */
._MenuBar_1hxnj_1 {
  background-color: var(--_puck-menu-bar-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  display: none;
  left: 0;
  margin-top: 1px;
  padding: var(--puck-space-2) var(--puck-space-4);
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 2;
}
._MenuBar--menuOpen_1hxnj_14 {
  display: block;
}
@media (min-width: 638px) {
  ._MenuBar_1hxnj_1 {
    border: none;
    display: block;
    margin-top: 0;
    overflow-y: visible;
    padding: 0;
    position: static;
  }
}
._MenuBar-inner_1hxnj_29 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--puck-space-2) var(--puck-space-4);
  justify-content: flex-end;
}
@media (min-width: 638px) {
  ._MenuBar-inner_1hxnj_29 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
._MenuBar-history_1hxnj_45 {
  display: flex;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Header/styles.module.css/#css-module-data */
._PuckHeader_c2nei_1 {
  --_puck-menu-bar-color-bg: var( --puck-header-color-bg, var(--puck-color-surface) );
  background: var(--puck-header-color-bg, var(--puck-color-surface));
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  color: var(--puck-header-color-text, var(--puck-color-text));
  --_puck-heading-color: var(--puck-header-color-text, var(--puck-color-text));
  grid-area: header;
  position: relative;
  max-width: 100vw;
}
@media (min-width: 638px) {
  ._PuckHeader_c2nei_1 {
    padding-left: 67px;
  }
  ._PuckHeader--hidePlugins_c2nei_21 {
    padding-left: 0;
  }
}
._PuckHeader-inner_c2nei_26 {
  align-items: end;
  display: grid;
  gap: var(--puck-space-chrome-gutter);
  grid-template-areas: "left middle right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: var(--puck-space-chrome-gutter);
}
@media (min-width: 638px) {
  ._PuckHeader-inner_c2nei_26 {
    border-left: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
  ._PuckHeader--hidePlugins_c2nei_21 ._PuckHeader-inner_c2nei_26 {
    border-left: none;
  }
}
._PuckHeader-toggle_c2nei_46 {
  display: flex;
  margin-inline-start: calc(var(--puck-space-1) * -1);
  padding-top: 2px;
}
._PuckHeader-rightSideBarToggle_c2nei_52,
._PuckHeader-leftSideBarToggle_c2nei_53 {
  display: none;
}
@media (min-width: 638px) {
  ._PuckHeader-rightSideBarToggle_c2nei_52,
  ._PuckHeader-leftSideBarToggle_c2nei_53 {
    display: block;
  }
}
._PuckHeader-title_c2nei_64 {
  align-self: center;
}
._PuckHeader-path_c2nei_68 {
  font-family: var(--puck-font-family-monospaced);
  font-size: var(--puck-font-size-xxs);
  font-weight: normal;
  word-break: break-all;
}
._PuckHeader-tools_c2nei_75 {
  display: flex;
  gap: var(--puck-space-4);
  justify-content: flex-end;
}
._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text-muted);
  margin-inline-start: calc(var(--puck-space-1) * -1);
}
._PuckHeader--menuOpen_c2nei_86 ._PuckHeader-menuButton_c2nei_81 {
  color: var(--puck-color-text);
}
@media (min-width: 638px) {
  ._PuckHeader-menuButton_c2nei_81 {
    display: none;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/SidebarSection/styles.module.css/#css-module-data */
._SidebarSection_1uv88_1 {
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--puck-color-text);
}
._SidebarSection_1uv88_1:last-of-type {
  flex-grow: 1;
}
._SidebarSection-title_1uv88_12 {
  background: var(--_puck-sidebar-section-color-bg, var(--puck-color-surface));
  padding: var(--puck-space-4);
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-top: var(--puck-border-width-regular) solid var(--puck-color-border);
  overflow-x: auto;
}
._SidebarSection--noBorderTop_1uv88_20 > ._SidebarSection-title_1uv88_12 {
  border-top: 0px;
}
._SidebarSection-content_1uv88_24:last-child {
  padding-bottom: var(--puck-space-1);
}
._SidebarSection_1uv88_1:last-of-type ._SidebarSection-content_1uv88_24 {
  border-bottom: none;
  flex-grow: 1;
}
._SidebarSection-breadcrumbLabel_1uv88_33 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._SidebarSection-breadcrumbLabel_1uv88_33:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._SidebarSection-breadcrumbLabel_1uv88_33:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._SidebarSection-breadcrumbLabel_1uv88_33:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._SidebarSection-breadcrumbs_1uv88_62 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-breadcrumb_1uv88_33 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._SidebarSection-heading_1uv88_74 {
  padding-inline-end: var(--puck-space-4);
}
._SidebarSection-loadingOverlay_1uv88_78 {
  background: var(--puck-color-surface);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  box-sizing: border-box;
  opacity: 0.8;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Breadcrumbs/styles.module.css/#css-module-data */
._Breadcrumbs_8c6w5_1 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7 {
  background: none;
  border: 0;
  border-radius: var(--puck-radius-xs);
  color: var(--puck-color-interactive);
  cursor: pointer;
  font: inherit;
  flex-shrink: 0;
  padding: 0;
  transition: color var(--puck-duration-fast) var(--puck-ease-exit);
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:focus-visible {
  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);
  outline-offset: var(--puck-border-width-focus);
}
@media (hover: hover) and (pointer: fine) {
  ._Breadcrumbs-breadcrumbLabel_8c6w5_7:hover {
    color: var(--puck-color-interactive-hover);
    transition: none;
  }
}
._Breadcrumbs-breadcrumbLabel_8c6w5_7:active {
  color: var(--puck-color-interactive-active);
  transition: none;
}
._Breadcrumbs-breadcrumb_8c6w5_7 {
  align-items: center;
  display: flex;
  gap: var(--puck-space-1);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/ViewportControls/styles.module.css/#css-module-data */
._ViewportControls_v26yb_1 {
  position: relative;
}
._ViewportControls--fullScreen_v26yb_5 {
  border-radius: 32px;
  display: flex;
  position: absolute;
  bottom: var(--puck-space-3);
  right: var(--puck-space-3);
  overflow: hidden;
}
._ViewportControls-toggleButton_v26yb_14 {
  display: none;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14 {
  align-items: center;
  background-color: var(--puck-color-surface-inverse);
  border: var(--puck-border-width-regular) solid var(--puck-color-border-inverse);
  border-radius: var(--puck-radius-pill);
  cursor: pointer;
  color: var(--puck-color-text-inverse);
  display: flex;
  justify-content: center;
  width: 42px;
  height: 42px;
  z-index: 1;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-toggleButton_v26yb_14:hover {
  color: var(--puck-color-interactive-inverse-hover);
  border: var(--puck-border-width-regular) solid var(--puck-color-interactive-inverse-hover);
}
._ViewportControls-actions_v26yb_39 {
  display: flex;
}
._ViewportControls-actionsInner_v26yb_43 {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  z-index: 0;
  overflow: hidden;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  background: var(--puck-color-surface-muted);
  border: var(--puck-border-width-regular) solid var(--puck-color-border);
  border-radius: var(--puck-radius-pill);
  margin-left: none;
  margin-right: none;
  padding-right: 42px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(100%);
  transition: transform var(--puck-duration-medium) var(--puck-ease-emphasized);
}
._ViewportControls--fullScreen_v26yb_5._ViewportControls--isExpanded_v26yb_67 ._ViewportControls-actionsInner_v26yb_43 {
  transform: translateX(42px);
}
._ViewportControls-divider_v26yb_72 {
  border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  margin-bottom: var(--puck-space-2);
  margin-top: var(--puck-space-2);
}
._ViewportControls-zoomSelect_v26yb_79 {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23c3c3c3'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat;
  background-size: 10px;
  color: currentColor;
  background-position: calc(100% - 12px) calc(50% + 3px);
  background-repeat: no-repeat;
  border: 0;
  font-size: var(--puck-font-size-xxxs);
  padding: 0;
  padding-left: var(--puck-space-2);
  width: 96px;
}
._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
  display: none;
}
@media (min-width: 638px) {
  ._ViewportControls-zoom_v26yb_79,
  ._ViewportControls--fullScreen_v26yb_5 ._ViewportControls-zoom_v26yb_79 {
    display: flex;
    justify-content: center;
  }
}
._ViewportControls-zoomSelect_v26yb_79:dir(rtl) {
  background-position: 12px calc(50% + 3px);
}
._ViewportButton-inner_v26yb_110 {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
}
._ViewportButton--isActive_v26yb_118 ._ViewportButton-inner_v26yb_110 {
  color: var(--puck-color-interactive);
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Canvas/styles.module.css/#css-module-data */
._PuckCanvas_zw9iy_1 {
  color: var(--puck-canvas-color-text, var(--puck-color-text));
  background: var(--puck-canvas-color-bg, var(--puck-color-surface-muted));
  display: flex;
  grid-area: editor;
  flex-direction: column;
  padding: var(--puck-space-chrome-gutter);
  position: relative;
  overflow: auto;
}
@media (min-width: 1198px) {
  ._PuckCanvas_zw9iy_1 {
    padding: calc(var(--puck-space-chrome-gutter) * 1.5);
    padding-top: calc(var(--puck-space-chrome-gutter) * 0.5);
  }
  ._PuckCanvas_zw9iy_1:not(._PuckCanvas_zw9iy_1:has(._PuckCanvas-controls_zw9iy_18)) {
    padding-top: calc(var(--puck-space-chrome-gutter) * 1.5);
  }
}
._PuckCanvas--fullScreen_zw9iy_23 {
  padding: 0;
  overflow: hidden;
}
@media (min-width: 1198px) {
  ._PuckCanvas--fullScreen_zw9iy_23 {
    padding: 0;
  }
}
._PuckCanvas-inner_zw9iy_34 {
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 288px;
  position: relative;
  width: 100%;
}
._PuckCanvas-root_zw9iy_43 {
  background: var(--puck-canvas-preview-color-bg, var(--puck-color-surface));
  outline: var(--puck-border-width-regular) solid var(--puck-color-border);
  box-sizing: content-box;
  min-width: 321px;
  position: absolute;
  pointer-events: none;
  transform-origin: top;
  top: 0;
  bottom: 0;
  opacity: 0;
}
@media (min-width: 1198px) {
  ._PuckCanvas-root_zw9iy_43 {
    min-width: unset;
  }
}
@media (prefers-reduced-motion: reduce) {
  ._PuckCanvas-root_zw9iy_43 {
    transition: none !important;
  }
}
._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-root_zw9iy_43 {
  pointer-events: unset;
  opacity: 1;
}
._PuckCanvas-loader_zw9iy_73 {
  align-items: center;
  color: var(--puck-color-text-subtle);
  display: flex;
  height: 100%;
  justify-content: center;
  transition: opacity var(--puck-duration-slow) var(--puck-ease-entrance);
  opacity: 0;
  pointer-events: none;
}
._PuckCanvas--showLoader_zw9iy_84 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 1;
}
._PuckCanvas--showLoader_zw9iy_84._PuckCanvas--ready_zw9iy_68 ._PuckCanvas-loader_zw9iy_73 {
  opacity: 0;
  height: 0;
  transition: none;
}
._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: calc(var(--puck-space-chrome-gutter) * 0.5);
}
._PuckCanvas--fullScreen_zw9iy_23 ._PuckCanvas-controls_zw9iy_18 {
  padding-bottom: 0;
  z-index: 1;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/ResizeHandle/styles.module.css/#css-module-data */
@media (min-width: 766px) {
  ._ResizeHandle_144bf_2 {
    position: absolute;
    width: 5px;
    height: 100%;
    cursor: col-resize;
    z-index: 10;
    background: transparent;
    top: 0;
  }
  ._ResizeHandle_144bf_2:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ._ResizeHandle--left_144bf_16 {
    right: -3px;
  }
  ._ResizeHandle--right_144bf_20 {
    left: -3px;
  }
}

/* components/Puck/components/ResizeHandle/styles.css */
[data-resize-overlay] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  cursor: col-resize;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Sidebar/styles.module.css/#css-module-data */
._Sidebar_16oed_1 {
  border-block-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  position: relative;
  display: none;
  flex-direction: column;
  overflow-y: auto;
}
._Sidebar--isVisible_16oed_10 {
  display: flex;
}
._Sidebar--left_16oed_14 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-left-color-bg, var(--puck-color-surface) );
  background: var( --puck-sidebar-left-color-bg, var(--puck-color-surface-subtle) );
  grid-area: left;
}
@media (min-width: 766px) {
  ._Sidebar--left_16oed_14 {
    border-block-start: 0;
    border-inline-end: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar--right_16oed_34 {
  --_puck-sidebar-section-color-bg: var( --puck-sidebar-right-color-bg, var(--puck-color-surface) );
  background: var(--puck-sidebar-right-color-bg, var(--puck-color-surface));
  grid-area: right;
}
@media (min-width: 766px) {
  ._Sidebar--right_16oed_34 {
    border-block-start: 0;
    border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
  }
}
._Sidebar-resizeHandle_16oed_51 {
  position: absolute;
  height: 100%;
}
._Sidebar--left_16oed_14 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: left;
  justify-self: end;
}
._Sidebar--right_16oed_34 + ._Sidebar-resizeHandle_16oed_51 {
  grid-area: right;
  justify-self: start;
}

/* css-module:/home/runner/work/puck/puck/packages/core/components/Puck/components/Nav/styles.module.css/#css-module-data */
._Nav_vll2r_1 {
  display: flex;
}
._Nav-list_vll2r_5 {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  gap: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._Nav-list_vll2r_5 {
    padding-top: 32px;
    flex-direction: column;
    gap: var(--puck-space-4);
    width: 100%;
  }
}
._Nav-mobileActions_vll2r_23 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-inline-start: auto;
  padding: var(--puck-space-1) var(--puck-space-4);
  border-inline-start: var(--puck-border-width-regular) solid var(--puck-color-border);
}
@media (min-width: 638px) {
  ._Nav-mobileActions_vll2r_23 {
    display: none;
  }
}
._NavItem-link_vll2r_39 {
  text-align: center;
  align-items: center;
  color: var(--puck-pluginbar-color-text, var(--puck-color-text-secondary));
  display: flex;
  gap: var(--puck-space-2);
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--puck-radius-m);
  padding: var(--puck-space-2) var(--puck-space-1);
  width: 64px;
  box-sizing: border-box;
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    width: auto;
  }
}
._NavItem_vll2r_39:first-of-type {
  padding-left: var(--puck-space-4);
}
._NavItem_vll2r_39:last-of-type {
  padding-right: var(--puck-space-4);
}
@media (min-width: 638px) {
  ._NavItem_vll2r_39:first-of-type,
  ._NavItem_vll2r_39:last-of-type {
    padding: 0;
  }
}
._NavItem-link_vll2r_39 {
  border-top: var(--puck-border-width-strong) solid transparent;
  border-bottom: var(--puck-border-width-strong) solid transparent;
  border-radius: var(--puck-radius-none);
  flex-direction: column;
  font-size: var(--puck-pluginbar-font-size, var(--puck-font-size-xxxs));
}
@media (min-width: 638px) {
  ._NavItem-link_vll2r_39 {
    border: 0;
    border-left: var(--puck-border-width-strong) solid transparent;
    border-right: var(--puck-border-width-strong) solid transparent;
  }
}
._NavItem-linkIcon_vll2r_90 {
  height: 2em;
  width: 2em;
}
._NavItem-linkIcon_vll2r_90 svg {
  height: 100%;
  width: 100%;
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: var(--puck-color-interactive-subtle);
  color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  font-weight: var(--puck-font-weight-semibold);
}
._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
  background-color: transparent;
  border-top-color: var(--puck-color-interactive);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-weight: var(--puck-font-weight-semibold);
}
@media (min-width: 638px) {
  ._NavItem--active_vll2r_100 > ._NavItem-link_vll2r_39 {
    border-top-color: transparent;
    border-right-color: var( --puck-pluginbar-color-text-selected, var(--puck-color-interactive) );
  }
}
._NavItem_vll2r_39:not(._NavItem--active_vll2r_100) > ._NavItem-link_vll2r_39:hover {
  background-color: var( --puck-pluginbar-color-bg-hover, var(--puck-color-interactive-soft) );
  color: var(--puck-pluginbar-color-text-hover, var(--puck-color-interactive));
}
@media (min-width: 638px) {
  ._NavItem--mobileOnly_vll2r_136 {
    display: none;
  }
}
._NavItem--desktopOnly_vll2r_141 {
  display: none;
}
@media (min-width: 638px) {
  ._NavItem--desktopOnly_vll2r_141 {
    display: block;
  }
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/blocks/styles.module.css/#css-module-data */
._BlocksPlugin_9af19_1 {
  padding: var(--puck-drawer-space, var(--puck-space-4));
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/outline/styles.module.css/#css-module-data */
._OutlinePlugin_1ylsc_1 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
}

/* css-module:/home/runner/work/puck/puck/packages/core/plugins/fields/styles.module.css/#css-module-data */
._FieldsPlugin_18cj3_1 {
  background: var(--puck-color-surface);
  height: 100%;
  overflow-y: auto;
}
._FieldsPlugin-header_18cj3_7 {
  border-bottom: var(--puck-border-width-regular) solid var(--puck-color-border);
  font-weight: var(--puck-font-weight-semibold);
  padding-bottom: var(--puck-space-2);
  padding-left: var(--puck-space-4);
  padding-right: var(--puck-space-4);
  padding-top: var(--puck-space-2);
}
@media (min-width: 638px) {
  ._FieldsPlugin-header_18cj3_7 {
    padding: var(--puck-space-4);
  }
}`,pk="data-puck-style-source",py="puck",pw=new WeakMap,pj=(e,t,r=!1)=>{let n=e.head;if(n){if(t.parentElement!==n)return void(r?n.prepend(t):n.append(t));r&&n.firstChild!==t&&n.prepend(t),r||n.lastChild===t||n.append(t)}},pz=e=>(null==e?void 0:e.getAttribute(pk))===py,pS=e=>{var t;let r=(t=null==e?void 0:e.document)?t:"u">typeof document?document:void 0;(0,rv.useInsertionEffect)(()=>{if(!e||!r)return;let t=(e=>{let t=pw.get(e);if(t)return t;let r=new Map;return pw.set(e,r),r})(r),n=t.get(e.id);if(n)n.count=n.count+1,n.el.textContent!==e.cssText&&(n.el.textContent=e.cssText),pj(r,n.el,e.prepend);else{let n=((e,t,r,n=!1)=>{let o=e.createElement("style");return o.setAttribute(pk,py),o.setAttribute("data-puck-style-id",t),o.textContent=r,pj(e,o,n),o})(r,e.id,e.cssText,e.prepend);t.set(e.id,{count:1,el:n})}return()=>{let r=t.get(e.id);r&&(r.count=r.count-1,r.count<=0&&(r.el.remove(),t.delete(e.id)))}},[null==e?void 0:e.cssText,null==e?void 0:e.id,null==e?void 0:e.prepend,null==e?void 0:e.document,r])},pI=null,pE='style, link[rel="stylesheet"]',pC="data-puck-style-mirror",pP=e=>!(!e.matches(pE)||pz(e))&&("STYLE"!==e.tagName||!!e.innerHTML.trim()),pT=e=>Array.from(document.styleSheets).find(t=>t.ownerNode.href===e.href),pA=(e,t)=>{let r=e.attributes;(null==r?void 0:r.length)>0&&Array.from(r).forEach(e=>{t.setAttribute(e.name,e.value)})},pM=({children:e,debug:t=!1,onStylesLoaded:r=()=>null,syncHostStyles:n=!0})=>{let{document:o,window:i}=pO();return pS(o?{cssText:'/* styles/color.css */\n@layer puck-tokens {\n  :root {\n    --puck-color-rose-01: #4a001c;\n    --puck-color-rose-02: #670833;\n    --puck-color-rose-03: #87114c;\n    --puck-color-rose-04: #a81a66;\n    --puck-color-rose-05: #bc5089;\n    --puck-color-rose-06: #cc7ca5;\n    --puck-color-rose-07: #d89aba;\n    --puck-color-rose-08: #e3b8cf;\n    --puck-color-rose-09: #efd6e3;\n    --puck-color-rose-10: #f6eaf1;\n    --puck-color-rose-11: #faf4f8;\n    --puck-color-rose-12: #fef8fc;\n    --puck-color-azure-01: #00175d;\n    --puck-color-azure-02: #002c77;\n    --puck-color-azure-03: #014292;\n    --puck-color-azure-04: #0158ad;\n    --puck-color-azure-05: #3479be;\n    --puck-color-azure-06: #6499cf;\n    --puck-color-azure-07: #88b0da;\n    --puck-color-azure-08: #abc7e5;\n    --puck-color-azure-09: #cfdff0;\n    --puck-color-azure-10: #e7eef7;\n    --puck-color-azure-11: #f3f6fb;\n    --puck-color-azure-12: #f7faff;\n    --puck-color-green-01: #002000;\n    --puck-color-green-02: #043604;\n    --puck-color-green-03: #084e08;\n    --puck-color-green-04: #0c680c;\n    --puck-color-green-05: #1d882f;\n    --puck-color-green-06: #2faa53;\n    --puck-color-green-07: #56c16f;\n    --puck-color-green-08: #7dd78b;\n    --puck-color-green-09: #b8e8bf;\n    --puck-color-green-10: #ddf3e0;\n    --puck-color-green-11: #eff8f0;\n    --puck-color-green-12: #f3fcf4;\n    --puck-color-yellow-01: #211000;\n    --puck-color-yellow-02: #362700;\n    --puck-color-yellow-03: #4c4000;\n    --puck-color-yellow-04: #645a00;\n    --puck-color-yellow-05: #877614;\n    --puck-color-yellow-06: #ab9429;\n    --puck-color-yellow-07: #bfac4e;\n    --puck-color-yellow-08: #d4c474;\n    --puck-color-yellow-09: #e6deb1;\n    --puck-color-yellow-10: #f3efd9;\n    --puck-color-yellow-11: #f9f7ed;\n    --puck-color-yellow-12: #fcfaf0;\n    --puck-color-red-01: #4c0000;\n    --puck-color-red-02: #6a0a10;\n    --puck-color-red-03: #8a1422;\n    --puck-color-red-04: #ac1f35;\n    --puck-color-red-05: #bf5366;\n    --puck-color-red-06: #ce7e8e;\n    --puck-color-red-07: #d99ca8;\n    --puck-color-red-08: #e4b9c2;\n    --puck-color-red-09: #efd7db;\n    --puck-color-red-10: #f6eaec;\n    --puck-color-red-11: #faf4f5;\n    --puck-color-red-12: #fff9fa;\n    --puck-color-grey-01: #181818;\n    --puck-color-grey-02: #292929;\n    --puck-color-grey-03: #404040;\n    --puck-color-grey-04: #5a5a5a;\n    --puck-color-grey-05: #767676;\n    --puck-color-grey-06: #949494;\n    --puck-color-grey-07: #ababab;\n    --puck-color-grey-08: #c3c3c3;\n    --puck-color-grey-09: #dcdcdc;\n    --puck-color-grey-10: #efefef;\n    --puck-color-grey-11: #f5f5f5;\n    --puck-color-grey-12: #fafafa;\n    --puck-color-black: #000000;\n    --puck-color-white: #ffffff;\n  }\n}\n\n/* styles/tokens.css */\n@layer puck-tokens {\n  :root {\n    --puck-color-surface: var(--puck-color-white);\n    --puck-color-surface-muted: var(--puck-color-grey-11);\n    --puck-color-surface-subtle: var(--puck-color-grey-12);\n    --puck-color-surface-inverse: var(--puck-color-grey-01);\n    --puck-color-border: var(--puck-color-grey-09);\n    --puck-color-border-hover: var(--puck-color-grey-05);\n    --puck-color-border-muted: var(--puck-color-grey-10);\n    --puck-color-border-inverse: var(--puck-color-grey-05);\n    --puck-color-text: var(--puck-color-black);\n    --puck-color-text-secondary: var(--puck-color-grey-04);\n    --puck-color-text-muted: var(--puck-color-grey-05);\n    --puck-color-text-subtle: var(--puck-color-grey-07);\n    --puck-color-text-inverse: var(--puck-color-white);\n    --puck-opacity-text-inverse: 0.75;\n    --puck-color-interactive: var(--puck-color-azure-04);\n    --puck-color-interactive-hover: var(--puck-color-azure-03);\n    --puck-color-interactive-active: var(--puck-color-azure-02);\n    --puck-color-interactive-subtle: var(--puck-color-azure-10);\n    --puck-color-interactive-soft: var(--puck-color-azure-11);\n    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);\n    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);\n    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);\n    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);\n    --puck-color-focus-ring: var(--puck-color-azure-05);\n    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );\n    --puck-color-selection-border: var(--puck-color-azure-08);\n    --puck-color-line-placeholder: var(--puck-color-azure-06);\n    --puck-color-highlight: var(--puck-color-rose-07);\n    --puck-color-bg-disabled: var(--puck-color-grey-07);\n    --puck-color-text-disabled: var(--puck-color-grey-03);\n    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );\n    --puck-space-1: 4px;\n    --puck-space-2: 8px;\n    --puck-space-3: 12px;\n    --puck-space-4: 16px;\n    --puck-space-5: 24px;\n    --puck-space-chrome-gutter: var(--puck-space-4);\n    --puck-radius-none: 0;\n    --puck-radius-xs: 2px;\n    --puck-radius-s: 3px;\n    --puck-radius-m: 4px;\n    --puck-radius-l: 8px;\n    --puck-radius-pill: 30px;\n    --puck-radius-round: 100%;\n    --puck-border-width-hairline: 0.5px;\n    --puck-border-width-regular: 1px;\n    --puck-border-width-focus: 2px;\n    --puck-border-width-strong: 4px;\n    --puck-duration-fast: 50ms;\n    --puck-duration-medium: 150ms;\n    --puck-duration-slow: 250ms;\n    --puck-ease-exit: ease-in;\n    --puck-ease-emphasized: ease-in-out;\n    --puck-ease-entrance: ease-out;\n    --puck-font-weight-regular: 400;\n    --puck-font-weight-medium: 500;\n    --puck-font-weight-semibold: 600;\n    --puck-font-weight-bold: 700;\n    --puck-font-weight-heavy: 800;\n    --puck-letter-spacing-ui: 0.05ch;\n    --puck-letter-spacing-heading: 0.08ch;\n    --puck-icon-size-xs: 14px;\n    --puck-icon-size-s: 16px;\n    --puck-icon-size-m: 18px;\n    --puck-icon-size-l: 24px;\n    --puck-space-m-unitless: 24;\n    --puck-user-sidebar-left-width: var(--puck-sidebar-width);\n    --puck-user-sidebar-right-width: var(--puck-sidebar-width);\n    --puck-slot-min-empty-height: 128px;\n    --puck-line-placeholder-width: 2px;\n  }\n}\n\n/* styles/typography.css */\n@layer puck-tokens {\n  :root {\n    --puck-font-size-scale-base-unitless: 12;\n    --puck-font-size-xxxs-unitless: 12;\n    --puck-font-size-xxs-unitless: 14;\n    --puck-font-size-xs-unitless: 16;\n    --puck-font-size-s-unitless: 18;\n    --puck-font-size-m-unitless: 21;\n    --puck-font-size-l-unitless: 24;\n    --puck-font-size-xl-unitless: 28;\n    --puck-font-size-xxl-unitless: 36;\n    --puck-font-size-xxxl-unitless: 48;\n    --puck-font-size-xxxxl-unitless: 56;\n    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );\n    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);\n    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);\n    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);\n    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);\n    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);\n    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);\n    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);\n    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );\n    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );\n    --puck-font-size-base: var(--puck-font-size-xs);\n    --puck-line-height-reset: 1;\n    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );\n    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );\n    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );\n    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );\n    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );\n    --puck-line-height-base: var(--puck-line-height-m);\n    --puck-fallback-font-stack:\n      -apple-system,\n      BlinkMacSystemFont,\n      Segoe UI,\n      Helvetica Neue,\n      sans-serif,\n      Apple Color Emoji,\n      Segoe UI Emoji,\n      Segoe UI Symbol;\n    --puck-font-family: Inter, var(--puck-fallback-font-stack);\n    --puck-font-family-monospaced:\n      ui-monospace,\n      "Cascadia Code",\n      "Source Code Pro",\n      Menlo,\n      Consolas,\n      "DejaVu Sans Mono",\n      monospace;\n  }\n  @supports (font-variation-settings: normal) {\n    :root {\n      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);\n    }\n  }\n}\n\n/* bundle/core.css */\n:root {\n  --_puck-styles-loaded: "true";\n}\n#frame-root {\n  height: 1px;\n  min-height: 100vh;\n}\n[data-puck-entry] {\n  position: relative;\n  z-index: 0;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */\n._ActionBar_5vdfr_1 {\n  align-items: center;\n  cursor: default;\n  display: flex;\n  width: auto;\n  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));\n  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));\n  padding-inline-start: var(--puck-actionbar-space-x, 0);\n  padding-inline-end: var(--puck-actionbar-space-x, 0);\n  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));\n  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));\n  color: var(--puck-color-text-inverse);\n  font-family: var(--puck-font-family);\n  min-height: 26px;\n}\n._ActionBar-label_5vdfr_17 {\n  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));\n  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));\n  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));\n  font-weight: var(--puck-font-weight-medium);\n  padding-inline-start: var(--puck-space-2);\n  padding-inline-end: var(--puck-space-2);\n  margin-inline-start: var(--puck-space-1);\n  margin-inline-end: var(--puck-space-1);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {\n  padding-inline-start: 0;\n}\n._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {\n  margin-inline-start: calc(var(--puck-space-1) * -1);\n}\n._ActionBar-group_5vdfr_38 {\n  align-items: center;\n  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));\n  display: flex;\n  height: 100%;\n  padding-inline-start: var(--puck-space-1);\n  padding-inline-end: var(--puck-space-1);\n}\n._ActionBar-group_5vdfr_38:first-of-type {\n  border-inline-start: 0;\n}\n._ActionBar-group_5vdfr_38:empty {\n  display: none;\n}\n._ActionBarAction_5vdfr_30 {\n  background: transparent;\n  border: none;\n  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));\n  cursor: pointer;\n  padding: var(--puck-actionbar-action-space, 6px);\n  margin-inline-start: var(--puck-space-1);\n  margin-inline-end: var(--puck-space-1);\n  border-radius: var(--puck-radius-m);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));\n  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);\n}\n._ActionBarAction--disabled_5vdfr_74 {\n  cursor: auto;\n  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );\n  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);\n}\n._ActionBarAction_5vdfr_30 svg {\n  max-width: none !important;\n}\n._ActionBarAction_5vdfr_30:focus-visible {\n  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);\n  outline-offset: calc(var(--puck-border-width-focus) * -1);\n}\n@media (hover: hover) and (pointer: fine) {\n  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {\n    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );\n    opacity: 1;\n    transition: none;\n  }\n}\n._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),\n._ActionBarAction--active_5vdfr_104 {\n  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );\n  opacity: 1;\n  transition: none;\n}\n._ActionBar-group_5vdfr_38 * {\n  margin: 0;\n}\n._ActionBar-separator_5vdfr_117 {\n  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );\n  margin-inline: var(--puck-space-1);\n  width: var( --puck-border-width-hairline );\n  height: 100%;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */\n._DraggableComponent_1627v_1 {\n  position: absolute;\n  pointer-events: none;\n}\n._DraggableComponent-overlayWrapper_1627v_6 {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  pointer-events: none;\n  box-sizing: border-box;\n  z-index: 1;\n}\n._DraggableComponent-overlay_1627v_6 {\n  cursor: pointer;\n  height: 100%;\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;\n  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);\n  width: 100%;\n}\n._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {\n  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);\n}\n._DraggableComponent-loadingOverlay_1627v_38 {\n  background: var(--puck-color-surface);\n  color: var(--puck-color-text);\n  border-radius: var(--puck-radius-m);\n  display: flex;\n  padding: var(--puck-space-2);\n  top: var(--puck-space-2);\n  right: var(--puck-space-2);\n  position: absolute;\n  z-index: 1;\n  pointer-events: all;\n  box-sizing: border-box;\n  opacity: 0.8;\n  z-index: 1;\n}\n._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {\n  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;\n}\n._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {\n  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );\n}\n._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {\n  display: none;\n}\n._DraggableComponent-actionsOverlay_1627v_89 {\n  position: sticky;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {\n  opacity: 1;\n  pointer-events: auto;\n}\n._DraggableComponent-actions_1627v_89 {\n  position: absolute;\n  width: auto;\n  cursor: grab;\n  display: flex;\n  box-sizing: border-box;\n  transform-origin: right top;\n  min-height: 36px;\n}\n._DraggableComponent-actionsAction_1627v_111 {\n  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */\n._Drawer_1n90m_1 {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--puck-font-family);\n  gap: var(--puck-space-3);\n}\n._Drawer-draggable_1n90m_8 {\n  position: relative;\n}\n._Drawer-draggableBg_1n90m_12 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n._DrawerItem-draggable_1n90m_22 {\n  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));\n  color: var(--puck-drawer-item-color-text, var(--puck-color-text));\n  cursor: grab;\n  padding: var(--puck-drawer-item-space, var(--puck-space-3));\n  display: flex;\n  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;\n  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));\n  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));\n  justify-content: space-between;\n  align-items: center;\n  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);\n}\n._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {\n  background: var(--puck-color-surface-muted);\n  color: var(--puck-color-text-muted);\n  cursor: not-allowed;\n}\n._DrawerItem_1n90m_22:focus-visible {\n  outline: 0;\n}\n._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {\n  border-radius: var(--puck-radius-m);\n  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);\n  outline-offset: var(--puck-border-width-focus);\n}\n@media (hover: hover) and (pointer: fine) {\n  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {\n    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );\n    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );\n    transition: none;\n  }\n}\n._DrawerItem-name_1n90m_72 {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */\n._DropZone_wc2ks_1 {\n  position: relative;\n  height: 100%;\n  min-height: var(--puck-slot-min-empty-height);\n  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);\n  width: 100%;\n}\n._DropZone--hasChildren_wc2ks_11 {\n  min-height: 0;\n}\n._DropZone_wc2ks_1:empty {\n  min-height: var(--puck-slot-min-empty-height);\n}\n[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {\n  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);\n}\n._DropZone--isAreaSelected_wc2ks_24,\n._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {\n  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone_wc2ks_1:empty {\n  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone-item_wc2ks_39 {\n  position: relative;\n}\n._DropZone-linePlaceholder_wc2ks_43 {\n  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );\n  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);\n  pointer-events: none;\n  position: absolute;\n  z-index: 1;\n}\n._DropZone-hitbox_wc2ks_55 {\n  position: absolute;\n  bottom: calc(var(--puck-space-3) * -1);\n  height: var(--puck-space-5);\n  width: 100%;\n  z-index: 1;\n}\n[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {\n  opacity: 0;\n}\nbody:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {\n  opacity: 0 !important;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */\n._InlineTextField_104qp_1 {\n  cursor: text;\n  display: inline-block;\n  white-space: pre-wrap;\n  text-decoration: inherit;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1 {\n  cursor: none;\n  caret-color: transparent;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1::selection {\n  display: none;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */\n@keyframes _loader-animation_1w5zn_1 {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(0.8);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n._Loader_1w5zn_13 {\n  background: transparent;\n  border-radius: var(--puck-radius-round);\n  border: var(--puck-border-width-focus) solid currentColor;\n  border-bottom-color: transparent;\n  display: inline-block;\n  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;\n  animation-fill-mode: both;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */\n._RichTextMenu_1ve2j_1 {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n._RichTextMenu--form_1ve2j_7 {\n  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));\n  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));\n  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);\n  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );\n  position: relative;\n  scrollbar-width: none;\n  overflow-x: auto;\n}\n._RichTextMenu-group_1ve2j_21 {\n  display: flex;\n  align-items: space-between;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding-inline: 6px;\n  gap: 2px;\n  position: relative;\n}\n._RichTextMenu-group_1ve2j_21:first-of-type {\n  padding-left: 0;\n}\n._RichTextMenu-group_1ve2j_21:last-of-type {\n  padding-right: 0;\n}\n._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {\n  color: var(--puck-color-text-inverse);\n  gap: 0px;\n  flex-wrap: nowrap;\n}\n._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {\n  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );\n}\n._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {\n  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */\n._Control_id4pm_1 .lucide {\n  height: var(--puck-icon-size-m);\n  width: var(--puck-icon-size-m);\n}\n._Control--inline_id4pm_6 .lucide {\n  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n}\n\n/* components/DraggableComponent/styles.css */\n[data-puck-component] * {\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-component] {\n  cursor: grab;\n  pointer-events: auto !important;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-dropzone] {\n  pointer-events: auto !important;\n}\n[data-puck-disabled] {\n  cursor: pointer;\n}\n[data-dnd-placeholder]:not([data-puck-line-drag] *) {\n  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;\n  border: none !important;\n  color: transparent !important;\n  opacity: 0.3 !important;\n  outline: none !important;\n  transition: none !important;\n}\n[data-dnd-placeholder]:not([data-puck-line-drag] *) *,\n[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,\n[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {\n  opacity: 0 !important;\n}\n[data-puck-line-drag] [data-dnd-placeholder] {\n  opacity: 0.4 !important;\n  outline: none !important;\n  transition: none !important;\n}\n[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {\n  opacity: 0.9 !important;\n}\n[data-dnd-dragging][data-puck-component] {\n  pointer-events: none !important;\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;\n  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;\n}\n[data-dnd-dragging][data-puck-component] > :first-child {\n  margin-top: 0 !important;\n}\n[data-dnd-dragging][data-puck-component] > :last-child {\n  margin-bottom: 0 !important;\n}\n\n/* lib/overlay-portal/styles.css */\n[data-puck-overlay-portal],\n[data-puck-overlay-portal] * {\n  pointer-events: auto !important;\n}\n[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],\n[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {\n  pointer-events: none !important;\n}\n[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {\n  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;\n  outline-offset: 2px;\n}\n[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {\n  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;\n  outline-offset: 2px;\n}',document:o,id:"iframe-styles"}:null),(0,rv.useEffect)(()=>{let e;if(!i||!o)return()=>{};let a=[],l={},s=()=>{a.forEach(({mirror:e})=>{e.remove()}),a=[],Array.from(o.head.querySelectorAll(`[${pC}="true"]`)).forEach(e=>{e.remove()}),Object.keys(l).forEach(e=>{delete l[e]})},c=e=>a.findIndex(t=>t.original===e),u=(e,r=!1)=>(0,rB._)(null,null,function*(){let n;if("LINK"===e.nodeName&&r){(n=document.createElement("style")).type="text/css";let r=pT(e);r||(yield new Promise(t=>{let r=()=>{t(),e.removeEventListener("load",r)};e.addEventListener("load",r)}),r=pT(e));let o=(e=>{if(e)try{return Array.from(e.cssRules).map(e=>e.cssText).join("")}catch(t){console.warn("Access to stylesheet %s is denied. Ignoring…",e.href)}return""})(r);if(!o){t&&console.warn("Tried to load styles for link element, but couldn't find them. Skipping...");return}n.innerHTML=o,n.setAttribute("data-href",e.getAttribute("href"))}else n=e.cloneNode(!0);return n.setAttribute(pC,"true"),n}),d=new MutationObserver(e=>{e.forEach(e=>{"childList"===e.type&&(e.addedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let r=e.nodeType===Node.TEXT_NODE?e.parentElement:e;r&&pP(r)&&setTimeout(()=>(0,rB._)(null,null,function*(){let e=c(r);if(e>-1){t&&console.log("Tried to add an element that was already mirrored. Updating instead..."),a[e].mirror.innerText=r.innerText;return}let n=yield u(r);if(!n)return;let i=(0,cl.default)(n.outerHTML);if(l[i]){t&&console.log("iframe already contains element that is being mirrored. Skipping...");return}l[i]=!0,o.head.append(n),a.push({original:r,mirror:n}),t&&console.log(`Added style node ${r.outerHTML}`)}),0)}}),e.removedNodes.forEach(e=>{if(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE){let r=e.nodeType===Node.TEXT_NODE?e.parentElement:e;r&&r.matches(pE)&&!pz(r)&&setTimeout(()=>(e=>{var r,n;let o=c(e);if(-1===o){t&&console.log("Tried to remove an element that did not exist. Skipping...");return}let i=(0,cl.default)(e.outerHTML);null==(n=null==(r=a[o])?void 0:r.mirror)||n.remove(),delete l[i],t&&console.log(`Removed style node ${e.outerHTML}`)})(r),0)}}))})});if(!n)return r(),()=>{d.disconnect(),s()};let p=i.parent.document,h=(e=[],p.querySelectorAll(pE).forEach(t=>{pP(t)&&e.push(t)}),e),f=[],m=0;return pA(p.getElementsByTagName("html")[0],o.documentElement),pA(p.getElementsByTagName("body")[0],o.body),Promise.all(h.map((e,t)=>(0,rB._)(null,null,function*(){if("LINK"===e.nodeName){let t=e.href;if(f.indexOf(t)>-1)return;f.push(t)}let t=yield u(e);if(t)return a.push({original:e,mirror:t}),t}))).then(e=>{let t=e.filter(e=>void 0!==e);t.forEach(e=>{e.onload=()=>{(m+=1)>=t.length&&r()},e.onerror=()=>{let n=e instanceof HTMLLinkElement?e.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${n?`: ${n}`:""}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),(m+=1)>=t.length&&r()}}),o.head.querySelectorAll(`[${pC}="true"]`).forEach(e=>{e.remove()}),o.head.append(...t),t.forEach(e=>{"STYLE"===e.nodeName&&(m+=1)}),m>=t.length&&r(),d.observe(p.head,{childList:!0,subtree:!0}),t.forEach(e=>{l[(0,cl.default)(e.outerHTML)]=!0})}),()=>{d.disconnect(),s()}},[n]),(0,rR.jsx)(rR.Fragment,{children:e})},pN=(0,rv.createContext)({}),pO=()=>(0,rv.useContext)(pN);function pD(e){var{children:t,className:r,debug:n,id:o,onReady:i=()=>{},onNotReady:a=()=>{},frameRef:l,syncHostStyles:s=!0}=e,c=(0,rB.H)(e,["children","className","debug","id","onReady","onNotReady","frameRef","syncHostStyles"]);let[u,d]=(0,rv.useState)(!1),[p,h]=(0,rv.useState)({}),[f,m]=(0,rv.useState)(),[g,v]=(0,rv.useState)(!1);return(0,rv.useEffect)(()=>{u&&v(!s)},[u,s]),(0,rv.useEffect)(()=>{var e;if(l.current){let t=l.current.contentDocument,r=l.current.contentWindow;h({document:t||void 0,window:r||void 0}),m(null==(e=l.current.contentDocument)?void 0:e.getElementById("frame-root")),t&&r&&g?i():a()}},[l,u,g]),(0,rR.jsx)("iframe",(0,rB.s)((0,rB.X)({},c),{className:r,id:o,srcDoc:'<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',ref:l,onLoad:()=>{d(!0)},children:(0,rR.jsx)(pN.Provider,{value:p,children:u&&f&&(0,rR.jsx)(pM,{debug:n,onStylesLoaded:()=>v(!0),syncHostStyles:s,children:(0,l_.createPortal)(t,f)})})}))}pD.displayName="AutoFrame",(0,rB.$)();var pL=rz(dh),p$=(0,rv.memo)(()=>{var e,t,r,n;let o=(0,rL.mm)(rq(e=>{var t;return null==(t=e.state.indexes.nodes.root)?void 0:t.flatData.props})),i=(0,rL.mm)(e=>e.config),a=(0,rL.mm)(e=>e.metadata),l=u8(i,(0,rv.useMemo)(()=>{let e=(0,rw.f)({props:null!=o?o:{}});return(0,rw.B)(e)},[o]),pL),s=(0,rv.useMemo)(()=>(0,rB.s)((0,rB.X)({},l),{children:(0,rR.jsx)(d_,{zone:rw.i}),puck:{renderDropZone:d_,isEditing:!0,dragRef:null,metadata:a},editMode:!0}),[l,a]),c=rA(null!=(t=null==(e=i.root)?void 0:e.fields)?t:{},s);return(null==(r=i.root)?void 0:r.render)?null==(n=i.root)?void 0:n.render((0,rB.s)((0,rB.X)((0,rB.X)({},s),c),{id:"puck-root"})):(0,rR.jsx)(rR.Fragment,{children:s.children})});p$.displayName="EditorPage",(0,rB.$)();var pB=(0,ry.f)("PuckPreview",{PuckPreview:"_PuckPreview_zbic3_1","PuckPreview-frame":"_PuckPreview-frame_zbic3_6"}),pR=({id:e="puck-preview"})=>{let t,r,n,o,i=(0,rL.mm)(e=>e.dispatch),a=(0,rL.mm)(e=>e.config),l=(0,rL.mm)(e=>e.setStatus),s=(0,rL.mm)(e=>e.iframe),c=(0,rL.mm)(e=>e.overrides),u=(0,rL.mm)(e=>e.metadata),d=(0,rL.mm)(e=>"edit"===e.state.ui.previewMode?null:e.state.data),p=(0,rv.useMemo)(()=>c.iframe,[c]),h=(0,rv.useRef)(null);t=(0,rL.mm)(e=>e.status),(0,rv.useEffect)(()=>{if(h.current&&"READY"===t){var e;let t=h.current,r=e=>{let r=new uB("pointermove",(0,rB.s)((0,rB.X)({},e),{bubbles:!0,cancelable:!1,clientX:e.clientX,clientY:e.clientY,pointerId:e.pointerId,pointerType:e.pointerType,isPrimary:e.isPrimary,originalTarget:e.target}));t.dispatchEvent(r)},n=()=>{var e;null==(e=t.contentDocument)||e.removeEventListener("pointermove",r)};return n(),null==(e=t.contentDocument)||e.addEventListener("pointermove",r,{capture:!0}),()=>{n()}}},[t]),r=(0,rL.mm)(e=>e.state.ui.previewMode),n=(0,rL.mm)(e=>e.status),o=(0,rL.mm)(e=>e.iframe.enabled),(0,rv.useEffect)(()=>{var e,t;let n=o?null==(t=null==(e=h.current)?void 0:e.contentDocument)?void 0:t.querySelector("[data-puck-entry]"):h.current;null==n||n.setAttribute("data-puck-preview-mode",r)},[r,n,o]);let f=d?(0,rR.jsx)(dy,{data:d,config:a,metadata:u}):(0,rR.jsx)(p$,{});return(0,rv.useEffect)(()=>{s.enabled||l("READY")},[s.enabled]),(0,rR.jsx)("div",{className:pB(),id:e,"data-puck-preview":!0,onClick:e=>{let t=e.target;t.hasAttribute("data-puck-component")||t.hasAttribute("data-puck-dropzone")||i({type:"setUi",ui:{itemSelector:null}})},children:s.enabled?(0,rR.jsx)(pD,{id:"preview-frame",className:pB("frame"),"data-rfd-iframe":!0,syncHostStyles:s.syncHostStyles,onReady:()=>{l("READY")},onNotReady:()=>{l("MOUNTED")},frameRef:h,children:(0,rR.jsx)(pN.Consumer,{children:({document:e})=>p?(0,rR.jsx)(p,{document:e,children:f}):f})}):(0,rR.jsx)("div",{id:"preview-frame",className:pB("frame"),ref:h,"data-puck-entry":!0,children:f})})};(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var pF={Puck:"_Puck_tzaxg_19","Puck-portal":"_Puck-portal_tzaxg_31",PuckLayout:"_PuckLayout_tzaxg_36","PuckLayout-inner":"_PuckLayout-inner_tzaxg_40","Puck--hidePlugins":"_Puck--hidePlugins_tzaxg_73","PuckLayout--mounted":"_PuckLayout--mounted_tzaxg_78","PuckLayout--mobilePanelHeightToggle":"_PuckLayout--mobilePanelHeightToggle_tzaxg_82","PuckLayout--leftSideBarVisible":"_PuckLayout--leftSideBarVisible_tzaxg_82","PuckLayout--isExpanded":"_PuckLayout--isExpanded_tzaxg_90","PuckLayout--mobilePanelHeightMinContent":"_PuckLayout--mobilePanelHeightMinContent_tzaxg_110","PuckLayout--rightSideBarVisible":"_PuckLayout--rightSideBarVisible_tzaxg_137","PuckLayout-mounted":"_PuckLayout-mounted_tzaxg_156","PuckLayout-nav":"_PuckLayout-nav_tzaxg_197","PuckLayout-header":"_PuckLayout-header_tzaxg_217",PuckPluginTab:"_PuckPluginTab_tzaxg_231","PuckPluginTab--visible":"_PuckPluginTab--visible_tzaxg_237","PuckPluginTab-body":"_PuckPluginTab-body_tzaxg_243"};(0,rB.$)();var pq=({children:e})=>(0,rR.jsx)(rR.Fragment,{children:e});(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var pW=(0,ry.f)("MenuBar",{MenuBar:"_MenuBar_1hxnj_1","MenuBar--menuOpen":"_MenuBar--menuOpen_1hxnj_14","MenuBar-inner":"_MenuBar-inner_1hxnj_29","MenuBar-history":"_MenuBar-history_1hxnj_45"});function pH({menuOpen:e=!1,renderHeaderActions:t,setMenuOpen:r}){let n=(0,rL.mm)(e=>e.history.back),o=(0,rL.mm)(e=>e.history.forward),i=(0,rL.mm)(e=>e.history.hasFuture()),a=(0,rL.mm)(e=>e.history.hasPast()),l=(0,rL.mP)("header-undo"),s=(0,rL.mP)("header-redo");return(0,rR.jsx)("div",{className:pW({menuOpen:e}),onClick:e=>{var t;let n=e.target;!window.matchMedia("(min-width: 638px)").matches&&"A"===n.tagName&&(null==(t=n.getAttribute("href"))?void 0:t.startsWith("#"))&&r(!1)},children:(0,rR.jsxs)("div",{className:pW("inner"),children:[(0,rR.jsxs)("div",{className:pW("history"),children:[(0,rR.jsx)(rL.eu,{type:"button",title:l,disabled:!a,onClick:n,children:(0,rR.jsx)(rL.Oo,{size:21})}),(0,rR.jsx)(rL.eu,{type:"button",title:s,disabled:!i,onClick:o,children:(0,rR.jsx)(rL.wj,{size:21})})]}),(0,rR.jsx)(rR.Fragment,{children:t&&t()})]})})}(0,rB.$)();var pV=(0,ry.f)("PuckHeader",{PuckHeader:"_PuckHeader_c2nei_1","PuckHeader--hidePlugins":"_PuckHeader--hidePlugins_c2nei_21","PuckHeader-inner":"_PuckHeader-inner_c2nei_26","PuckHeader-toggle":"_PuckHeader-toggle_c2nei_46","PuckHeader-rightSideBarToggle":"_PuckHeader-rightSideBarToggle_c2nei_52","PuckHeader-leftSideBarToggle":"_PuckHeader-leftSideBarToggle_c2nei_53","PuckHeader-title":"_PuckHeader-title_c2nei_64","PuckHeader-path":"_PuckHeader-path_c2nei_68","PuckHeader-tools":"_PuckHeader-tools_c2nei_75","PuckHeader-menuButton":"_PuckHeader-menuButton_c2nei_81","PuckHeader--menuOpen":"_PuckHeader--menuOpen_c2nei_86"}),pX=(0,rv.memo)(({hidePlugins:e})=>{let{onPublish:t,renderHeader:r,renderHeaderActions:n,headerTitle:o,headerPath:i,iframe:a}=hb(),l=(0,rL.mm)(e=>e.dispatch),s=(0,rL.jG)(),c=(0,rv.useMemo)(()=>r?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),e=>{var{actions:t}=e,n=(0,rB.H)(e,["actions"]);let o=(0,rL.mm)(e=>e.state);return(0,rR.jsx)(r,(0,rB.s)((0,rB.X)({},n),{dispatch:l,state:o,children:t}))}):pq,[r]),u=(0,rv.useMemo)(()=>n?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),e=>{let t=(0,rL.mm)(e=>e.state);return(0,rR.jsx)(n,(0,rB.s)((0,rB.X)({},e),{dispatch:l,state:t}))}):pq,[n]),d=(0,rL.mm)(e=>e.overrides.header||c),p=(0,rL.mm)(e=>e.overrides.headerActions||u),[h,f]=(0,rv.useState)(!1),m=(0,rL.mm)(e=>{var t,r;return null!=(r=(null==(t=e.state.indexes.nodes.root)?void 0:t.data).props.title)?r:""}),g=(0,rL.mm)(e=>e.state.ui.leftSideBarVisible),v=(0,rL.mm)(e=>e.state.ui.rightSideBarVisible),b=(0,rv.useCallback)(e=>{let t=window.matchMedia("(min-width: 638px)").matches,r="left"===e?g:v;l({type:"setUi",ui:(0,rB.X)({[`${e}SideBarVisible`]:!r},t?{}:{["left"===e?"rightSideBarVisible":"leftSideBarVisible"]:!1})})},[l,g,v]),_=(0,rL.mP)("header-publish"),x=(0,rL.mP)("label-page"),k=(0,rL.mP)("header-toggle-leftsidebar"),y=(0,rL.mP)("header-toggle-rightsidebar"),w=(0,rL.mP)("header-toggle-menubar");return(0,rR.jsx)(d,{actions:(0,rR.jsx)(rR.Fragment,{children:(0,rR.jsx)(p,{children:(0,rR.jsx)(cp,{onClick:()=>{let e=s.getState().state.data;t&&t(e)},icon:(0,rR.jsx)(rL.LG,{size:"14px"}),children:_})})}),children:(0,rR.jsx)("header",{className:pV({leftSideBarVisible:g,rightSideBarVisible:v,hidePlugins:e}),children:(0,rR.jsxs)("div",{className:pV("inner"),children:[(0,rR.jsxs)("div",{className:pV("toggle"),children:[(0,rR.jsx)("div",{className:pV("leftSideBarToggle"),children:(0,rR.jsx)(rL.eu,{type:"button",onClick:()=>{b("left")},title:k,children:(0,rR.jsx)(rL.hf,{focusable:"false"})})}),(0,rR.jsx)("div",{className:pV("rightSideBarToggle"),children:(0,rR.jsx)(rL.eu,{type:"button",onClick:()=>{b("right")},title:y,children:(0,rR.jsx)(rL.jv,{focusable:"false"})})})]}),(0,rR.jsx)("div",{className:pV("title"),children:(0,rR.jsxs)(c3,{rank:"2",size:"xs",children:[o||m||x,i&&(0,rR.jsxs)(rR.Fragment,{children:[" ",(0,rR.jsx)("code",{className:pV("path"),children:i})]})]})}),(0,rR.jsxs)("div",{className:pV("tools"),children:[(0,rR.jsx)("div",{className:pV("menuButton"),children:(0,rR.jsx)(rL.eu,{type:"button",onClick:()=>f(!h),title:w,children:h?(0,rR.jsx)(rL.Fh,{focusable:"false"}):(0,rR.jsx)(rL.N8,{focusable:"false"})})}),(0,rR.jsx)(pH,{dispatch:l,onPublish:t,menuOpen:h,renderHeaderActions:()=>(0,rR.jsx)(p,{children:(0,rR.jsx)(cp,{onClick:()=>{let e=s.getState().state.data;t&&t(e)},icon:(0,rR.jsx)(rL.LG,{size:"14px"}),children:_})}),setMenuOpen:f})]})]})})})});(0,rB.$)(),(0,rB.$)();var pU=(0,ry.f)("SidebarSection",{SidebarSection:"_SidebarSection_1uv88_1","SidebarSection-title":"_SidebarSection-title_1uv88_12","SidebarSection--noBorderTop":"_SidebarSection--noBorderTop_1uv88_20","SidebarSection-content":"_SidebarSection-content_1uv88_24","SidebarSection-breadcrumbLabel":"_SidebarSection-breadcrumbLabel_1uv88_33","SidebarSection-breadcrumbs":"_SidebarSection-breadcrumbs_1uv88_62","SidebarSection-breadcrumb":"_SidebarSection-breadcrumb_1uv88_33","SidebarSection-heading":"_SidebarSection-heading_1uv88_74","SidebarSection-loadingOverlay":"_SidebarSection-loadingOverlay_1uv88_78"}),pZ=({children:e,title:t,background:r,showBreadcrumbs:n,noBorderTop:o,isLoading:i})=>(0,rR.jsxs)("div",{className:pU({noBorderTop:o}),style:{background:r},children:[(0,rR.jsx)("div",{className:pU("title"),children:(0,rR.jsxs)("div",{className:pU("breadcrumbs"),children:[n&&(0,rR.jsx)(pp,{}),(0,rR.jsx)("div",{className:pU("heading"),children:(0,rR.jsx)(c3,{rank:"2",size:"xs",children:t})})]})}),(0,rR.jsx)("div",{className:pU("content"),children:e}),i&&(0,rR.jsx)("div",{className:pU("loadingOverlay"),children:(0,rR.jsx)(rL.cD,{size:32})})]});(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var pG={ViewportControls:"_ViewportControls_v26yb_1","ViewportControls--fullScreen":"_ViewportControls--fullScreen_v26yb_5","ViewportControls-toggleButton":"_ViewportControls-toggleButton_v26yb_14","ViewportControls-actions":"_ViewportControls-actions_v26yb_39","ViewportControls-actionsInner":"_ViewportControls-actionsInner_v26yb_43","ViewportControls--isExpanded":"_ViewportControls--isExpanded_v26yb_67","ViewportControls-divider":"_ViewportControls-divider_v26yb_72","ViewportControls-zoomSelect":"_ViewportControls-zoomSelect_v26yb_79","ViewportControls-zoom":"_ViewportControls-zoom_v26yb_79","ViewportButton-inner":"_ViewportButton-inner_v26yb_110","ViewportButton--isActive":"_ViewportButton--isActive_v26yb_118"},pY={Smartphone:(0,rR.jsx)(rL.Ik,{size:16}),Tablet:(0,rR.jsx)(rL.M2,{size:16}),Monitor:(0,rR.jsx)(rL.im,{size:16}),FullWidth:(0,rR.jsx)(rL.yk,{size:16})},pK=(0,ry.f)("ViewportControls",pG),pJ=(0,ry.f)("ViewportButton",pG),pQ=({children:e,title:t,onClick:r,isActive:n,disabled:o})=>(0,rR.jsx)("span",{className:pJ({isActive:n}),suppressHydrationWarning:!0,children:(0,rR.jsx)(rL.eu,{type:"button",title:t,disabled:o||n,onClick:r,suppressHydrationWarning:!0,children:(0,rR.jsx)("span",{className:pJ("inner"),children:e})})}),p0=[{label:"25%",value:.25},{label:"50%",value:.5},{label:"75%",value:.75},{label:"100%",value:1},{label:"125%",value:1.25},{label:"150%",value:1.5},{label:"200%",value:2}],p1=({viewport:e,isActive:t,onClick:r})=>{var n;let o=(0,rL.mP)("viewport-switch",{label:null!=(n=e.label)?n:""}),i=(0,rL.mP)("viewport-switch-default");return(0,rR.jsx)(pQ,{title:e.label?o:i,onClick:r,isActive:t,children:"string"==typeof e.icon?pY[e.icon]||e.icon:e.icon||pY.Smartphone})},p2=({autoZoom:e,zoom:t,onViewportChange:r,onZoom:n,fullScreen:o})=>{var i,a;let l=(0,rL.mm)(e=>e.viewports),s=(0,rL.mm)(e=>e.state.ui.viewports),c=p0.find(t=>t.value===e),u=(0,rL.mP)("viewport-zoom-auto",{zoom:(100*e).toFixed(0)}),d=(0,rv.useMemo)(()=>[...p0,...c?[]:[{value:e,label:u}]].filter(t=>t.value<=e).sort((e,t)=>e.value>t.value?1:-1),[e,u]),[p,h]=(0,rv.useState)(s.current.width);(0,rv.useEffect)(()=>{h(s.current.width)},[s.current]);let[f,m]=(0,rv.useState)(!1),g=(0,rL.mP)("viewport-zoom-out"),v=(0,rL.mP)("viewport-zoom-in"),b=(0,rL.mP)("viewport-toggle-menu");return(0,rR.jsxs)("div",{className:pK({isExpanded:f,fullScreen:o}),suppressHydrationWarning:!0,children:[(0,rR.jsx)("div",{className:pK("actions"),children:(0,rR.jsxs)("div",{className:pK("actionsInner"),children:[l.map((e,t)=>(0,rR.jsx)(p1,{viewport:e,onClick:()=>{h(e.width),r(e)},isActive:p===e.width},t)),(0,rR.jsx)("div",{className:pK("divider")}),(0,rR.jsx)(pQ,{title:g,disabled:t<=(null==(i=d[0])?void 0:i.value),onClick:e=>{e.stopPropagation(),n(d[Math.max(d.findIndex(e=>e.value===t)-1,0)].value)},children:(0,rR.jsx)(rL.v,{size:16})}),(0,rR.jsx)(pQ,{title:v,disabled:t>=(null==(a=d[d.length-1])?void 0:a.value),onClick:e=>{e.stopPropagation(),n(d[Math.min(d.findIndex(e=>e.value===t)+1,d.length-1)].value)},children:(0,rR.jsx)(rL.Em,{size:16})}),(0,rR.jsxs)("div",{className:pK("zoom"),children:[(0,rR.jsx)("div",{className:pK("divider")}),(0,rR.jsx)("select",{className:pK("zoomSelect"),value:t.toString(),onClick:e=>{e.stopPropagation()},onChange:e=>{n(parseFloat(e.currentTarget.value))},children:d.map(e=>(0,rR.jsx)("option",{value:e.value,label:e.label},e.label))})]})]})}),(0,rR.jsx)("button",{className:pK("toggleButton"),title:b,onClick:()=>m(e=>!e),children:f?(0,rR.jsx)(rL.X,{size:16}):(0,rR.jsx)(rL.im,{size:16})})]})};(0,rB.$)(),(0,rB.$)();var p4=(0,rv.createContext)(null),p3=({children:e})=>{let t=(0,rv.useRef)(null),r=(0,rv.useMemo)(()=>({frameRef:t}),[]);return(0,rR.jsx)(p4.Provider,{value:r,children:e})},p6=()=>{let e=(0,rv.useContext)(p4);if(null===e)throw Error("useCanvasFrame must be used within a FrameProvider");return e},p5=(0,ry.f)("PuckCanvas",{PuckCanvas:"_PuckCanvas_zw9iy_1","PuckCanvas-controls":"_PuckCanvas-controls_zw9iy_18","PuckCanvas--fullScreen":"_PuckCanvas--fullScreen_zw9iy_23","PuckCanvas-inner":"_PuckCanvas-inner_zw9iy_34","PuckCanvas-root":"_PuckCanvas-root_zw9iy_43","PuckCanvas--ready":"_PuckCanvas--ready_zw9iy_68","PuckCanvas-loader":"_PuckCanvas-loader_zw9iy_73","PuckCanvas--showLoader":"_PuckCanvas--showLoader_zw9iy_84"}),p8=()=>{var e;let{frameRef:t}=p6(),r=(0,rL.Hb)(t),{viewports:n=rk.U,ui:o}=hb(),{dispatch:i,overrides:a,setUi:l,zoomConfig:s,setZoomConfig:c,status:u,iframe:d,_experimentalFullScreenCanvas:p}=(0,rL.mm)(rq(e=>({dispatch:e.dispatch,overrides:e.overrides,setUi:e.setUi,zoomConfig:e.zoomConfig,setZoomConfig:e.setZoomConfig,status:e.status,iframe:e.iframe,_experimentalFullScreenCanvas:e._experimentalFullScreenCanvas}))),{leftSideBarVisible:h,rightSideBarVisible:f,leftSideBarWidth:m,rightSideBarWidth:g,viewports:v}=(0,rL.mm)(rq(e=>({leftSideBarVisible:e.state.ui.leftSideBarVisible,rightSideBarVisible:e.state.ui.rightSideBarVisible,leftSideBarWidth:e.state.ui.leftSideBarWidth,rightSideBarWidth:e.state.ui.rightSideBarWidth,viewports:e.state.ui.viewports}))),[b,_]=(0,rv.useState)(!1),x=(0,rv.useRef)(!1),k=(0,rv.useMemo)(()=>({children:e})=>(0,rR.jsx)(rR.Fragment,{children:e}),[]),y=(0,rv.useMemo)(()=>a.preview||k,[a]),w=(0,rv.useCallback)(()=>{if(t.current){let e=t.current,r=(0,rL.T4)(e);return{width:r.contentBox.width,height:r.contentBox.height}}return{width:0,height:0}},[t]);(0,rv.useEffect)(()=>{r()},[t,h,f,m,g,v]),(0,rv.useEffect)(()=>{let{height:e}=w();"auto"===v.current.height&&c((0,rB.s)((0,rB.X)({},s),{rootHeight:e/s.zoom}))},[s.zoom,w,c]),(0,rv.useEffect)(()=>{r()},[v.current.width,v]),(0,rv.useEffect)(()=>{if(!t.current)return;let e=new ResizeObserver(()=>{x.current||r()});return e.observe(t.current),()=>{e.disconnect()}},[t.current]);let[j,z]=(0,rv.useState)(!1);(0,rv.useEffect)(()=>{setTimeout(()=>{z(!0)},500)},[]);let S=(0,rL.jG)();return(0,rv.useEffect)(()=>{var e,r;if("u"<typeof window||(null==(e=null==o?void 0:o.viewports)?void 0:e.current))return;let i=window.innerWidth,a=null==(r=t.current)?void 0:r.getBoundingClientRect().width;if(!i||!a||0===n.length)return;let l=Object.values(n).find(e=>"100%"===e.width),s=Object.entries(n).filter(([e,t])=>"100%"!==t.width).map(([e,t])=>({key:e,diff:Math.abs(i-("string"==typeof t.width?i:t.width)),value:t})).sort((e,t)=>e.diff>t.diff?1:-1)[0].value;if(s.width<a&&l&&(s=l),d.enabled){let e=S.getState(),t={state:(0,rB.s)((0,rB.X)({},e.state),{ui:(0,rB.s)((0,rB.X)({},e.state.ui),{viewports:(0,rB.s)((0,rB.X)({},e.state.ui.viewports),{current:(0,rB.s)((0,rB.X)({},e.state.ui.viewports.current),{height:(null==s?void 0:s.height)||"auto",width:null==s?void 0:s.width})})})})},r=e.history;1===e.history.histories.length&&(r=(0,rB.s)((0,rB.X)({},r),{histories:[t]})),S.setState((0,rB.s)((0,rB.X)({},t),{history:r}))}},[n,t.current,d,S,null==(e=null==o?void 0:o.viewports)?void 0:e.current]),(0,rR.jsxs)("div",{className:p5({ready:"READY"===u||!d.enabled||!d.waitForStyles,showLoader:j,fullScreen:p}),onClick:e=>{let t=e.target;t.hasAttribute("data-puck-component")||t.hasAttribute("data-puck-dropzone")||i({type:"setUi",ui:{itemSelector:null},recordHistory:!1})},children:[v.controlsVisible&&d.enabled&&(0,rR.jsx)("div",{className:p5("controls"),children:(0,rR.jsx)(p2,{fullScreen:p,autoZoom:s.autoZoom,zoom:s.zoom,onViewportChange:e=>{_(!0),x.current=!0;let t=(0,rB.s)((0,rB.X)({},e),{height:e.height||"auto",zoom:s.zoom});l({viewports:(0,rB.s)((0,rB.X)({},v),{current:t})}),r({viewports:(0,rB.s)((0,rB.X)({},v),{current:t})})},onZoom:e=>{_(!0),x.current=!0,c((0,rB.s)((0,rB.X)({},s),{zoom:e}))}})}),(0,rR.jsxs)("div",{className:p5("inner"),ref:t,children:[(0,rR.jsx)("div",{className:p5("root"),style:{width:d.enabled?v.current.width:"100%",height:s.rootHeight,transform:d.enabled?`scale(${s.zoom})`:void 0,transition:b?"width 150ms ease-out, height 150ms ease-out, transform 150ms ease-out":"",overflow:d.enabled?void 0:"auto"},suppressHydrationWarning:!0,id:"puck-canvas-root",onTransitionEnd:()=>{_(!1),x.current=!1},children:(0,rR.jsx)(y,{children:(0,rR.jsx)(pR,{})})}),(0,rR.jsx)("div",{className:p5("loader"),children:(0,rR.jsx)(rL.cD,{size:24})})]})]})};function p7(e,t){let[r,n]=(0,rv.useState)(null),o=(0,rv.useRef)(null),i=(0,rL.mm)(t=>"left"===e?t.state.ui.leftSideBarWidth:t.state.ui.rightSideBarWidth);return(0,rv.useEffect)(()=>{if("u">typeof window&&!i)try{let r=localStorage.getItem("puck-sidebar-widths");if(r){let n=JSON.parse(r)[e],o="left"===e?"leftSideBarWidth":"rightSideBarWidth";n&&t({type:"setUi",ui:{[o]:n}})}}catch(t){console.error(`Failed to load ${e} sidebar width from localStorage`,t)}},[t,e,i]),(0,rv.useEffect)(()=>{void 0!==i&&n(i)},[i]),{width:r,setWidth:n,sidebarRef:o,handleResizeEnd:(0,rv.useCallback)(r=>{t({type:"setUi",ui:{["left"===e?"leftSideBarWidth":"rightSideBarWidth"]:r}});let n={};try{let e=localStorage.getItem("puck-sidebar-widths");n=e?JSON.parse(e):{}}catch(t){console.error(`Failed to save ${e} sidebar width to localStorage`,t)}finally{localStorage.setItem("puck-sidebar-widths",JSON.stringify((0,rB.s)((0,rB.X)({},n),{[e]:r})))}window.dispatchEvent(new CustomEvent("viewportchange",{bubbles:!0,cancelable:!1}))},[t,e])}}(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var p9=(0,ry.f)("ResizeHandle",{ResizeHandle:"_ResizeHandle_144bf_2","ResizeHandle--left":"_ResizeHandle--left_144bf_16","ResizeHandle--right":"_ResizeHandle--right_144bf_20"}),he=({position:e,sidebarRef:t,onResize:r,onResizeEnd:n})=>{let{frameRef:o}=p6(),i=(0,rL.Hb)(o),a=(0,rv.useRef)(null),l=(0,rv.useRef)(!1),s=(0,rv.useRef)(0),c=(0,rv.useRef)(0),u=(0,rv.useCallback)(t=>{if(!l.current)return;let n=t.clientX-s.current;r(Math.max(192,"left"===e?c.current+n:c.current-n)),t.preventDefault()},[r,e]),d=(0,rv.useCallback)(()=>{var e;if(!l.current)return;l.current=!1,document.body.style.cursor="",document.body.style.userSelect="";let r=document.getElementById("resize-overlay");r&&document.body.removeChild(r),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d),n((null==(e=t.current)?void 0:e.getBoundingClientRect().width)||0),i()},[n]),p=(0,rv.useCallback)(e=>{var r;l.current=!0,s.current=e.clientX,c.current=(null==(r=t.current)?void 0:r.getBoundingClientRect().width)||0,document.body.style.cursor="col-resize",document.body.style.userSelect="none";let n=document.createElement("div");n.id="resize-overlay",n.setAttribute("data-resize-overlay",""),document.body.appendChild(n),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),e.preventDefault()},[e,u,d]);return(0,rR.jsx)("div",{ref:a,className:p9({[e]:!0}),onMouseDown:p})};(0,rB.$)();var ht=(0,ry.f)("Sidebar",{Sidebar:"_Sidebar_16oed_1","Sidebar--isVisible":"_Sidebar--isVisible_16oed_10","Sidebar--left":"_Sidebar--left_16oed_14","Sidebar--right":"_Sidebar--right_16oed_34","Sidebar-resizeHandle":"_Sidebar-resizeHandle_16oed_51"}),hr=({position:e,sidebarRef:t,isVisible:r,onResize:n,onResizeEnd:o,children:i})=>(0,rR.jsxs)(rR.Fragment,{children:[(0,rR.jsx)("div",{ref:t,className:ht({[e]:!0,isVisible:r}),children:i}),(0,rR.jsx)("div",{className:`${ht("resizeHandle")}`,children:(0,rR.jsx)(he,{position:e,sidebarRef:t,onResize:n,onResizeEnd:o})})]});(0,rB.$)(),(0,rB.$)(),(0,rB.$)();var hn={Nav:"_Nav_vll2r_1","Nav-list":"_Nav-list_vll2r_5","Nav-mobileActions":"_Nav-mobileActions_vll2r_23","NavItem-link":"_NavItem-link_vll2r_39",NavItem:"_NavItem_vll2r_39","NavItem-linkIcon":"_NavItem-linkIcon_vll2r_90","NavItem--active":"_NavItem--active_vll2r_100","NavItem--mobileOnly":"_NavItem--mobileOnly_vll2r_136","NavItem--desktopOnly":"_NavItem--desktopOnly_vll2r_141"},ho=(0,ry.f)("Nav",hn),hi=(0,ry.f)("NavItem",hn),ha=({label:e,icon:t,onClick:r,isActive:n,mobileOnly:o,desktopOnly:i})=>(0,rR.jsx)("li",{className:hi({active:n,mobileOnly:o,desktopOnly:i}),children:r&&(0,rR.jsxs)("div",{className:hi("link"),onClick:r,children:[t&&(0,rR.jsx)("span",{className:hi("linkIcon"),children:t}),(0,rR.jsx)("span",{className:hi("linkLabel"),children:e})]})}),hl=({items:e,mobileActions:t})=>(0,rR.jsxs)("nav",{className:ho(),children:[(0,rR.jsx)("ul",{className:ho("list"),children:Object.entries(e).map(([e,t])=>(0,rR.jsx)(ha,(0,rB.X)({},t),e))}),t&&(0,rR.jsx)("div",{className:ho("mobileActions"),children:t})]});(0,rB.$)();var hs=e=>(0,rB.X)({enabled:!0,waitForStyles:!0,syncHostStyles:!0},e),hc=(0,ry.f)("Puck",pF),hu=(0,ry.f)("PuckLayout",pF),hd=(0,ry.f)("PuckPluginTab",pF),hp="u"<typeof window?rv.useEffect:rv.useLayoutEffect,hh=()=>{let e=(0,rL.mP)("label-page"),t=(0,rL.mm)(e=>{var t,r,n;return e.selectedItem?null!=(r=null==(t=e.config.components[e.selectedItem.type])?void 0:t.label)?r:e.selectedItem.type.toString():null==(n=e.config.root)?void 0:n.label});return(0,rR.jsx)(pZ,{noBorderTop:!0,showBreadcrumbs:!0,title:t||e,children:(0,rR.jsx)(pv,{})})},hf=({children:e,visible:t,mobileOnly:r})=>(0,rR.jsx)("div",{className:hd({visible:t,mobileOnly:r}),children:(0,rR.jsx)("div",{className:hd("body"),children:e})}),hm=({children:e})=>{var t,r;let n,o,i,a,{iframe:l,initialHistory:s,plugins:c,height:u}=hb(),d=(0,rL.mm)(e=>e.dnd),p=(0,rv.useMemo)(()=>hs(l),[l]);pS((null!==pI?pI:!("u"<typeof document)&&(pI=""!==getComputedStyle(document.documentElement).getPropertyValue("--_puck-styles-loaded").trim()))?null:{cssText:px,id:"ui-default",prepend:!0}),(0,rv.useEffect)(()=>{},[]);let h=(0,rL.mm)(e=>e.dispatch),f=(0,rL.mm)(e=>e.state.ui.leftSideBarVisible),m=(0,rL.mm)(e=>e.state.ui.rightSideBarVisible),g=(0,rL.mm)(e=>e.instanceId),{width:v,setWidth:b,sidebarRef:_,handleResizeEnd:x}=p7("left",h),{width:k,setWidth:y,sidebarRef:w,handleResizeEnd:j}=p7("right",h);(0,rv.useEffect)(()=>{window.matchMedia("(min-width: 638px)").matches||h({type:"setUi",ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});let e=()=>{window.matchMedia("(min-width: 638px)").matches||h({type:"setUi",ui:e=>(0,rB.X)((0,rB.X)({},e),e.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let z=(0,rL.mm)(e=>e.overrides),S=(0,rv.useMemo)(()=>z.puck||pq,[z]),[I,E]=(0,rv.useState)(!1);hp(()=>{E(!0)},[]);let C=(0,rL.mm)(e=>"READY"===e.status);(0,rL.Fk)(),(0,rv.useEffect)(()=>{if(C&&p.enabled){let e=ux();if(e)return(0,rL.RX)(e)}},[C,p.enabled]),n=(0,rL.jG)(),o=(0,rv.useCallback)(()=>{(0,n.getState().dispatch)({type:"setUi",ui:e=>({previewMode:"edit"===e.previewMode?"interactive":"edit"})})},[n]),(0,rL.uV)({meta:!0,i:!0},o),(0,rL.uV)({ctrl:!0,i:!0},o),i=(0,rL.jG)(),a=(0,rv.useCallback)(e=>{var t;if((e=>{var t;if(null==e?void 0:e.defaultPrevented)return!0;let r=(null==(t=null==e?void 0:e.composedPath)?void 0:t.call(e)[0])||(null==e?void 0:e.target)||document.activeElement;if(r instanceof HTMLElement){let e=r.tagName.toLowerCase();if("input"===e||"textarea"===e||"select"===e||r.isContentEditable)return!0;let t=r.getAttribute("role");if("textbox"===t||"combobox"===t||"searchbox"===t||"listbox"===t||"grid"===t)return!0}let n=document.querySelector('dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]');return!!(n&&(e=>{let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t);if("none"===e.display||"hidden"===e.visibility||"0"===e.opacity||"true"===t.getAttribute("aria-hidden")||t.hasAttribute("hidden"))return!1;t=t.parentElement}return!0})(n))})(e))return!1;let{state:r,dispatch:n,permissions:o,selectedItem:a}=i.getState(),l=null==(t=r.ui)?void 0:t.itemSelector;return null==l||!l.zone||!a||!o.getPermissions({item:a}).delete||(n({type:"remove",index:l.index,zone:l.zone}),!0)},[i]),(0,rL.uV)({delete:!0},a),(0,rL.uV)({backspace:!0},a);let P={};v&&(P["--puck-user-sidebar-left-width"]=`${v}px`),k&&(P["--puck-user-sidebar-right-width"]=`${k}px`);let T=(0,rL.mm)(e=>e.setUi),A=(0,rL.mm)(e=>{var t;return null==(t=e.state.ui.plugin)?void 0:t.current}),M=(0,rL.jG)(),N=(0,rv.useMemo)(()=>!!(null==c?void 0:c.find(e=>"legacy-side-bar"===e.name)),[c]),O=(0,rL.mP)("plugin-blocks"),D=(0,rL.mP)("plugin-outline"),L=(0,rL.mP)("plugin-fields"),$=(0,rv.useMemo)(()=>{let e={},t=[((e={})=>{var t,r;return{name:"blocks",label:null!=(t=e.label)?t:"Blocks",render:()=>(0,rR.jsx)("div",{className:dP(),children:(0,rR.jsx)(dC,{})}),icon:null!=(r=e.icon)?r:(0,rR.jsx)(rL.n0,{})}})({label:O}),((e={})=>{var t,r;return{name:"outline",label:null!=(t=e.label)?t:"Outline",render:()=>(0,rR.jsx)("div",{className:pu(),children:(0,rR.jsx)(pc,{})}),icon:null!=(r=e.icon)?r:(0,rR.jsx)(rL.DV,{})}})({label:D})],r=e=>"legacy-side-bar"===e.name?-1:0,n=[...t,...null!=c?c:[]].sort((e,t)=>r(e)-r(t));return(null==c?void 0:c.some(e=>"fields"===e.name))||n.push((({desktopSideBar:e="right",label:t,icon:r}={})=>({name:"fields",label:null!=t?t:"Fields",render:()=>(0,rR.jsxs)("div",{className:pb(),children:[(0,rR.jsx)("div",{className:pb("header"),children:(0,rR.jsx)(pp,{numParents:2,children:(0,rR.jsx)(p_,{})})}),(0,rR.jsx)(pv,{})]}),icon:null!=r?r:(0,rR.jsx)(rL.XH,{}),mobileOnly:"right"===e}))({label:L})),null==n||n.forEach(t=>{var r,n,o;t.name&&t.render&&(e[t.name]&&delete e[t.name],e[t.name]={label:null!=(r=t.label)?r:t.name,icon:null!=(n=t.icon)?n:(0,rR.jsx)(rL.Ei,{}),onClick:()=>{t.name===A?f?T({leftSideBarVisible:!1}):T({leftSideBarVisible:!0}):t.name&&T({plugin:{current:t.name},leftSideBarVisible:!0})},isActive:f&&A===t.name,render:t.render,mobilePanelHeight:null!=(o=t.mobilePanelHeight)?o:"toggle",mobileOnly:N||t.mobileOnly,desktopOnly:"legacy-side-bar"===t.name||t.desktopOnly})}),e},[c,A,M,f,O,D,L]),B=null!=A?A:Object.keys($)[0],R=null!=(r=null==(t=$[B])?void 0:t.mobilePanelHeight)?r:"toggle";(0,rv.useEffect)(()=>{A||T({plugin:{current:Object.keys($)[0]}})},[$,A]);let F=$.fields&&!1===$.fields.mobileOnly,q=(0,rL.mm)(e=>{var t;return null!=(t=e.state.ui.mobilePanelExpanded)&&t}),W=(0,rL.mP)("layout-maximize"),H=(0,rL.mP)("layout-minimize");return(0,rR.jsxs)("div",{className:`Puck ${hc({hidePlugins:N})}`,id:g,style:{height:u,visibility:"hidden"},children:[(0,rR.jsx)(uQ,{disableAutoScroll:null==d?void 0:d.disableAutoScroll,behavior:null==d?void 0:d.behavior,children:(0,rR.jsx)(S,{children:e||(0,rR.jsx)(p3,{children:(0,rR.jsx)("div",{className:hu({leftSideBarVisible:f,mounted:I,rightSideBarVisible:!F&&m,isExpanded:q,mobilePanelHeightToggle:"toggle"===R,mobilePanelHeightMinContent:"min-content"===R}),style:{height:u},children:(0,rR.jsxs)("div",{className:hu("inner"),style:P,children:[(0,rR.jsx)("div",{className:hu("header"),children:(0,rR.jsx)(pX,{hidePlugins:N})}),(0,rR.jsx)("div",{className:hu("nav"),children:(0,rR.jsx)(hl,{items:$,mobileActions:f&&"toggle"===R&&(0,rR.jsx)(rL.eu,{type:"button",title:q?H:W,onClick:()=>{T({mobilePanelExpanded:!q})},children:q?(0,rR.jsx)(rL.BJ,{size:21}):(0,rR.jsx)(rL.Xf,{size:21})})})}),(0,rR.jsx)(hr,{position:"left",sidebarRef:_,isVisible:f,onResize:b,onResizeEnd:x,children:Object.entries($).map(([e,{mobileOnly:t,render:r,label:n}])=>(0,rR.jsx)(hf,{visible:A===e,mobileOnly:t,children:(0,rR.jsx)(r,{})},e))}),(0,rR.jsx)(p8,{}),!F&&(0,rR.jsx)(hr,{position:"right",sidebarRef:w,isVisible:m,onResize:y,onResizeEnd:j,children:(0,rR.jsx)(hh,{})})]})})})})}),(0,rR.jsx)("div",{id:"puck-portal-root",className:hc("portal")})]})},hg=(0,rv.createContext)({});function hv(e){return(0,rR.jsx)(hg.Provider,{value:e,children:e.children})}var hb=()=>(0,rv.useContext)(hg);function h_({children:e}){let{config:t,data:r,ui:n,onChange:o,permissions:i={},plugins:a,overrides:l,viewports:s=rk.U,iframe:c,dnd:u,initialHistory:d,metadata:p,dictionary:h,onAction:f,fieldTransforms:m,_experimentalFullScreenCanvas:g,_experimentalVirtualization:v}=hb(),b=(0,rv.useMemo)(()=>hs(c),[c]),[_]=(0,rv.useState)(()=>{var e,o,i;let a=(0,rB.X)((0,rB.X)({},rk.T.ui),n);!(Object.keys((null==r?void 0:r.root)||{}).length>0)||(null==(e=null==r?void 0:r.root)?void 0:e.props)||console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");let l=(null==(o=null==r?void 0:r.root)?void 0:o.props)||(null==r?void 0:r.root)||{},s=(0,rB.X)((0,rB.X)({},null==(i=t.root)?void 0:i.defaultProps),l),c=(0,r$.l)((0,rw.f)((0,rB.s)((0,rB.X)({},null==r?void 0:r.root),{props:s})),t),u=(0,rB.s)((0,rB.X)({},rk.T),{data:(0,rB.s)((0,rB.X)({},r),{root:(0,rB.s)((0,rB.X)({},null==r?void 0:r.root),{props:c.props}),content:r.content||[]}),ui:(0,rB.s)((0,rB.X)((0,rB.X)({},a),{}),{componentList:t.categories?Object.entries(t.categories).reduce((e,[t,r])=>(0,rB.s)((0,rB.X)({},e),{[t]:{title:r.title,components:r.components,expanded:r.defaultExpanded,visible:r.visible}}),{}):{}})});return(0,rw.X)(u,t)}),{appendData:x=!0}=d||{},[k]=(0,rv.useState)([...(null==d?void 0:d.histories)||[],...x?[{state:_}]:[]].map(e=>{let r=(0,rB.X)((0,rB.X)({},_),e.state);return e.state.indexes||(r=(0,rw.X)(r,t)),(0,rB.s)((0,rB.X)({},e),{state:r})})),y=(0,rv.useMemo)(()=>(null==d?void 0:d.index)!==void 0&&(null==d?void 0:d.index)>=0&&(null==d?void 0:d.index)<k.length?null==d?void 0:d.index:k.length-1,[]),w=k[y].state,j=(({overrides:e,plugins:t})=>(0,rv.useMemo)(()=>(({overrides:e,plugins:t})=>{let r=(0,rB.X)({},e);return null==t||t.forEach(e=>{e.overrides&&Object.keys(e.overrides).forEach(t=>{var n;if(!(null==(n=e.overrides)?void 0:n[t]))return;if("fieldTypes"===t){let t=e.overrides.fieldTypes;Object.keys(t).forEach(e=>{r.fieldTypes=r.fieldTypes||{};let n=r.fieldTypes[e];r.fieldTypes[e]=r=>t[e]((0,rB.s)((0,rB.X)({},r),{children:n?n(r):r.children}))});return}let o=r[t];r[t]=r=>e.overrides[t]((0,rB.s)((0,rB.X)({},r),{children:o?o(r):r.children}))})}),r})({overrides:e,plugins:t}),[t,e]))({overrides:l,plugins:a}),z=(0,rv.useMemo)(()=>{let e=(a||[]).reduce((e,t)=>(0,rB.X)((0,rB.X)({},e),t.fieldTransforms),{});return(0,rB.X)((0,rB.X)({},e),m)},[m,a]),S=ua(),I=(0,rv.useCallback)(e=>({instanceId:S,state:e,config:t,plugins:a||[],overrides:j,viewports:s,iframe:b,_experimentalFullScreenCanvas:!!g,_experimentalVirtualization:!!v,onAction:f,metadata:p,dictionary:h||{},dnd:u,fieldTransforms:z}),[S,w,t,a,j,s,b,g,v,f,p,h,u,z]),[E]=(0,rv.useState)(()=>(0,rL.SC)(I(w)));(0,rv.useEffect)(()=>{},[E]),(0,rv.useEffect)(()=>{let e=E.getState().state;E.setState((0,rB.X)({},I(e)))},[I]),(0,rL.Aw)(E,{histories:k,index:y,initialAppState:w});let C=(0,rv.useRef)(null);(0,rv.useEffect)(()=>E.subscribe(e=>e.state.data,e=>{o&&((0,sU.f)(e,C.current)||(o(e),C.current=e))}),[o]),(0,rL.aD)(E,i);let P=(e=>{let[t]=(0,rv.useState)(()=>(0,rW.f)(()=>dw(dz(e.getState()),e.getState)));return(0,rv.useEffect)(()=>e.subscribe(e=>dz(e),r=>{t.setState(dw(r,e.getState))}),[]),t})(E);return(0,rv.useEffect)(()=>{let{resolveAndCommitData:e}=E.getState();setTimeout(()=>{e()},0)},[]),(0,rR.jsx)(rL.dt.Provider,{value:E,children:(0,rR.jsx)(dj.Provider,{value:P,children:e})})}function hx(e){return(0,rR.jsx)(hv,(0,rB.s)((0,rB.X)({},e),{children:(0,rR.jsx)(h_,(0,rB.s)((0,rB.X)({},e),{children:(0,rR.jsx)(hm,{children:e.children})}))}))}hx.Components=dC,hx.Fields=pv,hx.Layout=hm,hx.Outline=pc,hx.Preview=pR,(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),(0,rB.$)(),e.i(25760),e.i(49957),e.i(50354),(0,rj.$)();var hk=e.i(19707);let hy=(e,{editable:t=!0,placeholder:r}={})=>({type:"text",label:e,contentEditable:t,placeholder:r}),hw=(e,{editable:t=!0,placeholder:r}={})=>({type:"textarea",label:e,contentEditable:t,placeholder:r}),hj=e=>({type:"richtext",label:e,contentEditable:!0,options:{heading:!1,codeBlock:!1,code:!1,blockquote:!1,horizontalRule:!1,strike:!1,textAlign:!1}}),hz=(e,t,{radio:r=!1}={})=>({type:r?"radio":"select",label:e,options:t.map(([e,t])=>({value:e,label:t}))}),hS=(e,{min:t,max:r,step:n}={})=>({type:"number",label:e,min:t,max:r,step:n}),hI=(e,t,{resumen:r,nuevo:n,min:o,max:i}={})=>({type:"array",label:e,arrayFields:t,defaultItemProps:n,getItemSummary:r?(e,t)=>{let n="function"==typeof r?r(e,t):e[r];return"string"==typeof n&&n.trim()?n.replace(/<[^>]+>/g,"").slice(0,40):`Elemento ${(t??0)+1}`}:void 0,min:o,max:i}),hE=(e,t)=>({type:"object",label:e,objectFields:t}),hC=[["","Automático"],["azul","Azul Thinkion"],["violeta","Violeta"],["coral","Coral"],["texto","Negro"],["blanco","Blanco"]],hP=(e="Imagen")=>({type:"custom",label:e,render:hk.CampoImagen}),hT=(e="Lleva a")=>({type:"custom",label:e,render:hk.CampoLink}),hA=e=>({type:"custom",label:e,render:hk.CampoFecha}),hM=e=>({type:"custom",label:e,render:hk.CampoColor});var hN=e.i(41331);let hO=(0,hN.k)({label:"Portada (Home)",fields:{titulo:hw("Título",{editable:!1}),resaltado:hy("Palabra subrayada (tal cual está en el título)",{editable:!1}),bajada:hj("Bajada"),botonTexto:hy("Texto del botón"),botonLink:hT("El botón lleva a"),videoLink:hT("Video (YouTube, Vimeo o Drive)"),portada:hP("Imagen del video"),portadaAlt:hy("Descripción de la imagen",{editable:!1})},defaultProps:{titulo:"Crecé sin límites, simplificá tu negocio",resaltado:"Crecé",bajada:"<p>Un ecosistema que se adapta al tamaño de tu negocio.</p>",botonTexto:"Pedí tu demo",botonLink:"/demo",videoLink:"",portada:"/img/home/video-portada.webp",portadaAlt:""},render:({titulo:e,resaltado:t,bajada:r,botonTexto:n,botonLink:o,videoLink:i,portada:a,portadaAlt:l,puck:s})=>(0,rg.jsxs)("section",{className:"hero",ref:s.dragRef,children:[(0,rg.jsxs)("div",{className:"hero__texto",children:[(0,rg.jsx)("h1",{className:"hero__titulo",children:(0,hN.L)(e,t,"subrayado")}),(0,rg.jsx)("div",{className:"hero__bajada",children:r}),n&&(0,rg.jsx)("a",{className:"boton",href:(0,hN.U)(o),children:n})]}),(0,rg.jsxs)("div",{className:"hero__video-marco",children:[(0,rg.jsxs)("a",{className:"hero__video",href:(0,hN.U)(i),"aria-label":"Ver el video de Thinkion",children:[(0,rg.jsx)(hN.m,{src:a,alt:l,ancho:543,alto:335,prioridad:!0}),(0,rg.jsx)("img",{className:"hero__play",src:"/img/home/play.svg",alt:"",width:"37",height:"41"})]}),(0,rg.jsx)("img",{className:"hero__lineas",src:"/img/home/marco-video.svg",alt:"",width:"591",height:"386","aria-hidden":"true"})]})]})}),hD=(0,hN.k)({label:"Diferenciales (tres tarjetas)",fields:{titulo:hy("Título"),bajada:hw("Bajada"),pilares:hI("Tarjetas",{icono:hP("Ícono"),titulo:hy("Título"),texto:hw("Texto"),ajuste:hz("Ajuste del ícono",[["","Normal"],["lampara","Fundir con el fondo"],["suave","Más suave"]])},{resumen:"titulo",nuevo:{icono:"/img/home/icono-integracion.webp",titulo:"Nueva tarjeta",texto:"Texto de la tarjeta.",ajuste:""}})},defaultProps:{titulo:"Todo tu negocio conectado en un solo ecosistema",bajada:"Una plataforma que conecta todos los puntos de tu operación, sin importar la industria.",pilares:[]},render:({titulo:e,bajada:t,pilares:r=[],puck:n})=>(0,rg.jsxs)("section",{className:"diferenciales reveal",ref:n.dragRef,children:[(0,rg.jsxs)("div",{className:"diferenciales__encabezado",children:[(0,rg.jsx)("h2",{className:"diferenciales__titulo",children:(0,hN.Z)(e)}),(0,rg.jsx)("p",{className:"diferenciales__bajada",children:(0,hN.Z)(t)})]}),(0,rg.jsx)("ul",{className:"diferenciales__lista",children:r.map((e,t)=>(0,rg.jsxs)("li",{className:"pilar",children:[(0,rg.jsx)(hN.m,{src:e.icono,ancho:128,alto:128,className:e.ajuste?`pilar__icono-${e.ajuste}`:void 0}),(0,rg.jsx)("h3",{children:e.titulo}),(0,rg.jsx)("p",{children:(0,hN.Z)(e.texto)})]},t))})]})}),hL=[{x:374.21,y:84.12,tipo:"grande"},{x:235.24,y:279.12,tipo:"grande"},{x:510.24,y:279.12,tipo:"grande"},{x:149.51,y:112.77,tipo:"azul"},{x:59.77,y:254.76,tipo:"azul"},{x:92.77,y:392.75},{x:226.77,y:462.76},{x:372.72,y:410.76},{x:570.72,y:66.76},{x:658.51,y:172.76},{x:690.13,y:309.76},{x:626.6,y:425.77}],h$=(0,hN.k)({label:"Diagrama de soluciones",fields:{modulos:hI("Módulos (12, en el orden del dibujo)",{nombre:hy("Nombre",{editable:!1}),imagen:hP("Imagen"),opacidad:hS("Opacidad de la imagen (0 a 1)",{min:0,max:1,step:.1})},{resumen:"nombre",min:12,max:12}),titulo:hy("Título"),bajada:hw("Bajada"),botonTexto:hy("Texto del botón"),botonLink:hT("El botón lleva a")},defaultProps:{modulos:[],titulo:"Soluciones que se potencian entre sí",bajada:"",botonTexto:"Pedí tu demo",botonLink:"/demo"},render:({modulos:e=[],titulo:t,bajada:r,botonTexto:n,botonLink:o,puck:i})=>(0,rg.jsxs)("section",{className:"soluciones reveal",id:"soluciones",ref:i.dragRef,children:[(0,rg.jsxs)("svg",{className:"arcos","aria-hidden":"true",focusable:"false",children:[(0,rg.jsx)("path",{id:"arco-chico",d:"M -46.19 0 A 46.19 46.19 0 0 1 46.19 0"}),(0,rg.jsx)("path",{id:"arco-grande",d:"M -65.96 0 A 65.96 65.96 0 0 1 65.96 0"})]}),(0,rg.jsxs)("div",{className:"diagrama",children:[(0,rg.jsx)("img",{className:"diagrama__lineas",src:"/img/home/diagrama-lineas.svg",alt:"",width:"726",height:"505","aria-hidden":"true",loading:"lazy"}),hL.map((t,r)=>{let n=e[r]||{},o="grande"===t.tipo;return(0,rg.jsxs)("figure",{className:(0,hN.K)("modulo",o&&"modulo--grande","azul"===t.tipo&&"modulo--azul"),style:{"--x":t.x,"--y":t.y},children:[(0,rg.jsx)("svg",{className:"modulo__etiqueta",viewBox:o?"-84 -84 168 168":"-60 -60 120 120",children:(0,rg.jsx)("text",{children:(0,rg.jsx)("textPath",{href:o?"#arco-grande":"#arco-chico",startOffset:"50%",children:n.nombre})})}),(0,rg.jsx)("span",{className:"modulo__circulo",children:(0,rg.jsx)(hN.m,{src:n.imagen,ancho:o?122:85,alto:o?122:85,style:null!=n.opacidad&&""!==n.opacidad&&1!==Number(n.opacidad)?{opacity:Number(n.opacidad)}:void 0})})]},r)})]}),(0,rg.jsxs)("div",{className:"soluciones__texto",children:[(0,rg.jsx)("h2",{className:"titulo-seccion",children:(0,hN.Z)(t)}),(0,rg.jsx)("p",{className:"bajada-seccion soluciones__bajada",children:(0,hN.Z)(r)})]}),n&&(0,rg.jsx)("a",{className:"boton",href:(0,hN.U)(o),children:n})]})}),hB=(e="")=>String(e).normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"pestana",hR=(e="Pestaña abierta al cargar")=>hS(`${e} (1 = la primera)`,{min:1,max:12}),hF=(e,t)=>Math.min(Math.max((Number(e)||1)-1,0),Math.max(t-1,0)),hq=(0,hN.k)({label:"Industrias (pestañas)",fields:{pestanas:hI("Pestañas",{nombre:hy("Nombre de la pestaña",{editable:!1}),titulo:hy("Título"),texto:hj("Texto"),imagen:hP("Imagen"),imagenAlt:hy("Descripción de la imagen",{editable:!1})},{resumen:"nombre",nuevo:{nombre:"Nueva",titulo:"Título",texto:"<p>Texto</p>",imagen:"/img/home/tab-retail.webp",imagenAlt:""}}),abierta:hR()},defaultProps:{pestanas:[],abierta:1},render:({pestanas:e=[],abierta:t,id:r,puck:n})=>{let o=hF(t,e.length),i=`industrias-${r||"x"}`.replace(/[^a-z0-9-]/gi,"");return(0,rg.jsxs)("section",{className:"industrias reveal","data-tabs":!0,ref:n.dragRef,children:[(0,rg.jsx)("div",{className:"pestanas",role:"tablist","aria-label":"Industrias",children:e.map((e,t)=>(0,rg.jsx)("button",{className:(0,hN.K)("pestanas__boton",t===o&&"is-activa"),type:"button",role:"tab",id:`tab-${i}-${hB(e.nombre)}`,"aria-controls":`panel-${i}-${hB(e.nombre)}`,"aria-selected":t===o,"data-tab":hB(e.nombre),children:e.nombre},t))}),(0,rg.jsxs)("div",{className:"industrias__card",children:[(0,rg.jsx)("img",{className:"industrias__chevron",src:"/img/home/deco-chevron-tabs.svg",alt:"",width:"282",height:"536","aria-hidden":"true"}),e.map((e,t)=>(0,rg.jsxs)("div",{className:"industrias__panel",role:"tabpanel",id:`panel-${i}-${hB(e.nombre)}`,"aria-labelledby":`tab-${i}-${hB(e.nombre)}`,"data-panel":hB(e.nombre),hidden:t!==o,children:[(0,rg.jsxs)("div",{className:"industrias__texto",children:[(0,rg.jsx)("h2",{children:e.titulo}),e.texto]}),(0,rg.jsx)(hN.m,{src:e.imagen,alt:e.imagenAlt,ancho:377,alto:338})]},t))]})]})}}),hW=(0,hN.k)({label:"Carrusel de clientes",fields:{titulo:hy("Título"),clientes:hI("Clientes",{foto:hP("Foto (local o plato)"),fotoAlt:hy("Descripción de la foto",{editable:!1}),logo:hP("Logo"),nombre:hy("Nombre del cliente",{editable:!1}),rubro:hy("Rubro"),ajusteLogo:hz("Tamaño del logo",[["","Normal"],["ancho","Ancho"],["temple","Recortado (Temple)"],["mishka","Más chico (Mishka)"]])},{resumen:"nombre",nuevo:{foto:"",fotoAlt:"",logo:"",nombre:"Nuevo cliente",rubro:"Gastronomía",ajusteLogo:"ancho"}}),destacado:hS("Cliente destacado al cargar (1 = el primero)",{min:1,max:40}),cita:hw("Testimonio"),autor:hy("Autor del testimonio"),botonTexto:hy("Texto del botón"),botonLink:hT("El botón lleva a")},defaultProps:{titulo:"Ellos ya se sumaron al cambio",clientes:[],destacado:2,cita:"",autor:"",botonTexto:"Ver nuestros clientes",botonLink:"/clientes"},render:({titulo:e,clientes:t=[],destacado:r,cita:n,autor:o,botonTexto:i,botonLink:a,puck:l})=>(0,rg.jsxs)("section",{className:"clientes reveal",id:"clientes",ref:l.dragRef,children:[(0,rg.jsx)("h2",{className:"clientes__titulo",children:(0,hN.Z)(e)}),(0,rg.jsxs)("div",{className:"carrusel","data-carrusel":!0,tabIndex:0,role:"region","aria-roledescription":"carrusel","aria-label":"Clientes de Thinkion. Usá las flechas para ver más.",children:[(0,rg.jsx)("button",{className:"carrusel__costado carrusel__costado--anterior",type:"button","data-anterior":!0,"aria-label":"Ver clientes anteriores"}),(0,rg.jsx)("ul",{className:"carrusel__lista",children:t.map((e,t)=>(0,rg.jsxs)("li",{className:(0,hN.K)("cliente",t===(Number(r)||1)-1&&"cliente--activo"),children:[(0,rg.jsx)(hN.m,{className:"cliente__foto",src:e.foto,alt:e.fotoAlt,ancho:256,alto:363}),(0,rg.jsxs)("div",{className:"cliente__info",children:[(0,rg.jsx)(hN.m,{className:(0,hN.K)("cliente__logo",e.ajusteLogo&&`cliente__logo--${e.ajusteLogo}`),src:e.logo,alt:"string"==typeof e.nombre?e.nombre:"",ancho:122,alto:120}),(0,rg.jsx)("span",{className:"cliente__rubro",children:e.rubro})]})]},t))}),(0,rg.jsx)("button",{className:"carrusel__costado carrusel__costado--siguiente",type:"button","data-siguiente":!0,"aria-label":"Ver más clientes"})]}),n&&(0,rg.jsxs)("figure",{className:"testimonio",children:[(0,rg.jsx)("blockquote",{className:"testimonio__cita",children:(0,hN.Z)(n)}),o&&(0,rg.jsx)("figcaption",{className:"testimonio__autor",children:o})]}),i&&(0,rg.jsx)("a",{className:"boton boton--azul",href:(0,hN.U)(a),children:i})]})}),hH=(0,hN.k)({label:"Preguntas frecuentes",fields:{titulo:hy("Título"),bajada:hw("Bajada"),categorias:hI("Categorías",{nombre:hy("Nombre de la categoría",{editable:!1}),preguntas:hI("Preguntas",{pregunta:hy("Pregunta"),respuesta:hj("Respuesta")},{resumen:"pregunta",nuevo:{pregunta:"Nueva pregunta",respuesta:"<p>Respuesta</p>"}})},{resumen:"nombre",nuevo:{nombre:"Nueva categoría",preguntas:[]}}),abierta:hR("Categoría abierta al cargar")},defaultProps:{titulo:"Preguntas frecuentes",bajada:"",categorias:[],abierta:1},render:({titulo:e,bajada:t,categorias:r=[],abierta:n,id:o,puck:i})=>{let a=hF(n,r.length),l=`preguntas-${o||"x"}`.replace(/[^a-z0-9-]/gi,""),s=r.length>1;return(0,rg.jsxs)("section",{className:"faq reveal",id:"preguntas","data-tabs":!0,ref:i.dragRef,children:[(0,rg.jsxs)("div",{className:"faq__encabezado",children:[(0,rg.jsx)("h2",{className:"titulo-seccion faq__titulo",children:(0,hN.Z)(e)}),t&&(0,rg.jsx)("p",{className:"bajada-seccion faq__bajada",children:(0,hN.Z)(t)})]}),s&&(0,rg.jsx)("div",{className:"pestanas pestanas--faq",role:"tablist","aria-label":"Categorías de preguntas",children:r.map((e,t)=>(0,rg.jsx)("button",{className:(0,hN.K)("pestanas__boton",t===a&&"is-activa"),type:"button",role:"tab",id:`tab-${l}-${hB(e.nombre)}`,"aria-controls":`panel-${l}-${hB(e.nombre)}`,"aria-selected":t===a,"data-tab":hB(e.nombre),children:e.nombre},t))}),r.map((e,t)=>(0,rg.jsx)("div",{className:"faq__lista",role:s?"tabpanel":void 0,id:`panel-${l}-${hB(e.nombre)}`,"aria-labelledby":s?`tab-${l}-${hB(e.nombre)}`:void 0,"data-panel":hB(e.nombre),hidden:t!==a,children:(e.preguntas||[]).map((e,t)=>(0,rg.jsxs)("details",{className:"faq__item",open:0===t,children:[(0,rg.jsx)("summary",{children:e.pregunta}),e.respuesta]},t))},t))]})}}),hV=(0,hN.k)({label:"Línea separadora",fields:{},render:({puck:e})=>(0,rg.jsx)("hr",{className:"separador",ref:e.dragRef})}),hX=(0,hN.k)({label:"Llamado a la acción",fields:{titulo:hy("Título"),bajada:hw("Bajada"),botonTexto:hy("Texto del botón"),botonLink:hT("El botón lleva a"),separado:hz("Separación de arriba",[["","Normal"],["grande","Grande (páginas de producto)"]])},defaultProps:{titulo:"¿Querés ver cómo funciona en tu negocio?",bajada:"Hablemos y veamos cómo Thinkion puede adaptarse a tu negocio.",botonTexto:"Pedí tu demo",botonLink:"/demo",separado:""},render:({titulo:e,bajada:t,botonTexto:r,botonLink:n,separado:o,puck:i})=>(0,rg.jsxs)("section",{className:(0,hN.K)("cta","grande"===o&&"solucion__cta","reveal"),ref:i.dragRef,children:[(0,rg.jsx)("h2",{className:"cta__titulo",children:(0,hN.Z)(e)}),t&&(0,rg.jsx)("p",{className:"cta__bajada",children:(0,hN.Z)(t)}),r&&(0,rg.jsx)("a",{className:"boton",href:(0,hN.U)(n),children:r})]})});e.s(["ClientesCarrusel",0,hW,"DiagramaSoluciones",0,h$,"Diferenciales",0,hD,"HeroInicio",0,hO,"Industrias",0,hq,"LlamadoFinal",0,hX,"PreguntasFrecuentes",0,hH,"Separador",0,hV,"pestanaAbierta",0,hR],53291);var hU=e.i(53291);let hZ=(0,hN.k)({label:"Portada (producto)",fields:{titulo:hw("Título",{editable:!1}),resaltado:hy("Palabra subrayada (tal cual está en el título)",{editable:!1}),bajada:hw("Bajada"),botonTexto:hy("Texto del botón (vacío = sin botón)"),botonLink:hT("El botón lleva a"),estilo:hz("Estilo",[["producto","Producto"],["clientes","Clientes"]])},defaultProps:{titulo:"Título de la página",resaltado:"",bajada:"Bajada de la página.",botonTexto:"Pedí tu demo",botonLink:"/demo",estilo:"producto"},render:({titulo:e,resaltado:t,bajada:r,botonTexto:n,botonLink:o,estilo:i,puck:a})=>(0,rg.jsxs)("section",{className:"clientes"===i?"clientes-hero":"check-hero",ref:a.dragRef,children:[(0,rg.jsx)("h1",{children:(0,hN.L)(e,t,"subrayado-violeta")}),(0,rg.jsx)("p",{children:(0,hN.Z)(r)}),n&&(0,rg.jsx)("a",{className:"boton",href:(0,hN.U)(o),children:n})]})}),hG=(0,hN.k)({label:"Video o imagen grande",fields:{tipo:hz("Qué muestra",[["video","Video (se abre en una ventana)"],["imagen","Solo imagen"]],{radio:!0}),imagen:hP("Imagen"),imagenAlt:hy("Descripción de la imagen",{editable:!1}),videoLink:hT("Video (YouTube, Vimeo o Drive)")},defaultProps:{tipo:"video",imagen:"/img/check/video-portada.webp",imagenAlt:"",videoLink:""},render:({tipo:e,imagen:t,imagenAlt:r,videoLink:n,puck:o})=>"imagen"===e?(0,rg.jsx)("div",{className:"check-video check-video--imagen",ref:o.dragRef,children:(0,rg.jsx)(hN.m,{src:t,alt:r,ancho:1682,alto:932,prioridad:!0})}):(0,rg.jsxs)("a",{className:"check-video",href:(0,hN.U)(n),"aria-label":"Ver el video",ref:o.dragRef,children:[(0,rg.jsx)(hN.m,{src:t,alt:r,ancho:1093,alto:621,prioridad:!0}),(0,rg.jsx)("img",{className:"check-video__play",src:"/img/home/play.svg",alt:"",width:"131",height:"151"})]})}),hY=(0,hN.k)({label:"Ventajas (con íconos)",fields:{titulo:hw("Título"),texto:hw("Texto"),items:hI("Ítems",{icono:hP("Ícono"),titulo:hy("Título"),texto:hw("Texto")},{resumen:"titulo",nuevo:{icono:"/img/check/icono-app.webp",titulo:"Nuevo ítem",texto:"Texto"}})},defaultProps:{titulo:"Título",texto:"",items:[]},render:({titulo:e,texto:t,items:r=[],puck:n})=>(0,rg.jsxs)("section",{className:"check-dif reveal",ref:n.dragRef,children:[(0,rg.jsxs)("div",{className:"check-dif__encabezado",children:[(0,rg.jsx)("h2",{children:(0,hN.Z)(e)}),t&&(0,rg.jsx)("p",{children:(0,hN.Z)(t)})]}),(0,rg.jsx)("ul",{className:"check-dif__lista",children:r.map((e,t)=>(0,rg.jsxs)("li",{children:[(0,rg.jsx)(hN.m,{src:e.icono,ancho:128,alto:128}),(0,rg.jsx)("h3",{children:e.titulo}),(0,rg.jsx)("p",{children:(0,hN.Z)(e.texto)})]},t))})]})}),hK=(0,hN.k)({label:"Monitor y celular con datos",fields:{monitor:hP("Imagen del monitor"),monitorAlt:hy("Descripción del monitor",{editable:!1}),celular:hP("Imagen del celular"),celularAlt:hy("Descripción del celular",{editable:!1}),datos:hI("Datos destacados (3)",{texto:hy("Texto")},{resumen:"texto",min:3,max:3})},defaultProps:{monitor:"/img/check/mockup-monitor.webp",monitorAlt:"",celular:"/img/check/mockup-celular.webp",celularAlt:"",datos:[{texto:"Dato 1"},{texto:"Dato 2"},{texto:"Dato 3"}]},render:({monitor:e,monitorAlt:t,celular:r,celularAlt:n,datos:o=[],puck:i})=>(0,rg.jsxs)("section",{className:"check-mockup reveal",ref:i.dragRef,children:[(0,rg.jsx)(hN.m,{className:"check-mockup__monitor",src:e,alt:t,ancho:867,alto:717}),(0,rg.jsx)("div",{className:"celular",children:(0,rg.jsx)(hN.m,{src:r,alt:n,ancho:208,alto:452})}),o.slice(0,3).map((e,t)=>(0,rg.jsxs)("p",{className:`check-dato check-dato--${t+1}`,children:[(0,rg.jsx)("img",{src:"/img/check/icono-rayo.svg",alt:"",width:"28",height:"32"}),e.texto]},t))]})}),hJ={multiplicar:"logo-multiplicar",prune:"logo-prune",mishka:"logo-mishka"},hQ=(0,hN.k)({label:"Logos de clientes",fields:{estilo:hz("Estilo",[["producto","Producto (más separados)"],["industria","Industria"]]),logos:hI("Logos",{imagen:hP("Logo"),nombre:hy("Nombre del cliente",{editable:!1}),opacidad:hS("Opacidad (0 a 1, vacío = normal)",{min:0,max:1,step:.1}),ajuste:hz("Ajuste",[["","Normal"],["multiplicar","Fundir fondo blanco"],["prune","Bajo y fundido"],["mishka","Redondeado"]])},{resumen:"nombre",nuevo:{imagen:"",nombre:"Cliente",opacidad:"",ajuste:""}})},defaultProps:{estilo:"producto",logos:[]},render:({estilo:e,logos:t=[],puck:r})=>(0,rg.jsx)("section",{className:(0,hN.K)("industria"===e?"seg-logos":"check-logos","reveal"),"aria-label":"Algunos de nuestros clientes",ref:r.dragRef,children:t.map((e,t)=>(0,rg.jsx)(hN.m,{src:e.imagen,alt:e.nombre,ancho:122,alto:122,className:hJ[e.ajuste],style:""!==e.opacidad&&null!=e.opacidad?{opacity:Number(e.opacidad)}:void 0},t))})}),h0=e=>e.imagenMedidas?.src===e.imagen?[e.imagenMedidas.ancho,e.imagenMedidas.alto]:null,h1=(0,hN.k)({label:"Funciones (imagen y texto)",fields:{funciones:hI("Funciones",{imagen:hP("Imagen"),marco:hz("Cómo se muestra la imagen",[["","Imagen sola"],["visual","Dentro de una tarjeta"],["icono","Tarjeta con ícono chico"],["ilustracion","Tarjeta con ilustración"]]),etiqueta:hy("Etiqueta (arriba del título)"),titulo:hy("Título"),texto:hj("Texto"),ancla:hy("Nombre para linkear (ej.: beneficios → /check#beneficios)",{editable:!1})},{resumen:"titulo",nuevo:{imagen:"/img/check/checklist.webp",marco:"",etiqueta:"Etiqueta",titulo:"Nueva función",texto:"<p>Texto</p>",ancla:""}}),empezar:hz("Primera imagen",[["izquierda","A la izquierda"],["derecha","A la derecha"]],{radio:!0})},defaultProps:{funciones:[],empezar:"izquierda"},render:({funciones:e=[],empezar:t,puck:r})=>(0,rg.jsx)("section",{className:"check-funciones reveal",ref:r.dragRef,children:e.map((e,r)=>(0,rg.jsxs)("article",{className:(0,hN.K)("funcion",r%2==1!=("derecha"===t)&&"funcion--invertida"),id:(0,hN.M)(e.ancla),children:[e.marco?(0,rg.jsx)("div",{className:(0,hN.K)("funcion__visual","visual"!==e.marco&&`funcion__visual--${e.marco}`),children:(0,rg.jsx)(hN.m,{src:e.imagen,ancho:"icono"===e.marco?36:h0(e)?.[0],alto:"icono"===e.marco?36:h0(e)?.[1]})}):(0,rg.jsx)(hN.m,{src:e.imagen,ancho:544,alto:493}),(0,rg.jsxs)("div",{className:"funcion__texto",children:[e.etiqueta&&(0,rg.jsx)("span",{className:"etiqueta",children:e.etiqueta}),(0,rg.jsx)("h2",{children:e.titulo}),e.texto]})]},r))})}),h2=(0,hN.k)({label:"Integraciones (tarjetas chicas)",fields:{titulo:hy("Título"),texto:hw("Texto"),columnas:hz("Columnas",[["","Automático"],["tres","Tres por fila"]]),ancla:hy("Nombre para linkear (ej.: integraciones)",{editable:!1}),items:hI("Tarjetas",{logo:hP("Logo (opcional)"),logoAlt:hy("Nombre del logo",{editable:!1}),ajusteLogo:hz("Ajuste del logo",[["","Normal"],["relleno","Con margen"],["texto","Logo de texto (ancho)"]]),titulo:hy("Título"),texto:hw("Texto")},{resumen:"titulo",nuevo:{logo:"",logoAlt:"",ajusteLogo:"",titulo:"Nueva",texto:"Texto"}})},defaultProps:{titulo:"Integraciones",texto:"",columnas:"",ancla:"",items:[]},render:({titulo:e,texto:t,columnas:r,ancla:n,items:o=[],puck:i})=>(0,rg.jsxs)("section",{className:"integraciones reveal",id:(0,hN.M)(n),ref:i.dragRef,children:[(0,rg.jsxs)("div",{className:"integraciones__encabezado",children:[(0,rg.jsx)("h2",{className:"titulo-seccion-40",children:(0,hN.Z)(e)}),t&&(0,rg.jsx)("p",{children:(0,hN.Z)(t)})]}),(0,rg.jsx)("ul",{className:(0,hN.K)("integraciones__lista","tres"===r&&"integraciones__lista--tres"),children:o.map((e,t)=>(0,rg.jsxs)("li",{children:[e.logo&&(0,rg.jsx)(hN.m,{className:(0,hN.K)("integraciones__logo",e.ajusteLogo&&`integraciones__logo--${e.ajusteLogo}`),src:e.logo,alt:e.logoAlt,ancho:"texto"===e.ajusteLogo?74:56,alto:"texto"===e.ajusteLogo?28:56}),(0,rg.jsx)("h3",{children:e.titulo}),(0,rg.jsx)("p",{children:(0,hN.Z)(e.texto)})]},t))})]})}),h4=[["gastronomicas","Gastronómicas"],["retail","Retail"],["productividad","Productividad"]],h3=(0,hN.k)({label:"Grilla de clientes (con filtros)",fields:{textoTodos:hy('Botón "todos"',{editable:!1}),filtros:hI("Nombres de los filtros",{clave:hz("Industria",h4),nombre:hy("Texto del botón",{editable:!1})},{resumen:"nombre",min:1,max:3}),clientes:hI("Clientes",{foto:hP("Foto de fondo"),logo:hP("Logo"),nombre:hy("Nombre",{editable:!1}),rubro:hy("Rubro (texto de la tarjeta)"),industria:hz("Aparece en el filtro",h4),tambien:hz("También en",[["","—"],...h4]),logoClaro:hz("Logo",[[!1,"Normal"],[!0,"Claro (sobre foto oscura)"]],{radio:!0})},{resumen:"nombre",nuevo:{foto:"",logo:"",nombre:"Nuevo cliente",rubro:"Gastronómica",industria:"gastronomicas",tambien:"",logoClaro:!1}}),vacio:hw("Mensaje si un filtro no tiene clientes")},defaultProps:{textoTodos:"TODOS",filtros:[],clientes:[],vacio:"Muy pronto vas a ver acá a los clientes de esta industria."},render:({textoTodos:e,filtros:t=[],clientes:r=[],vacio:n,puck:o})=>(0,rg.jsxs)("section",{"data-filtros":!0,ref:o.dragRef,children:[(0,rg.jsxs)("div",{className:"filtros",role:"group","aria-label":"Filtrar clientes por industria",children:[(0,rg.jsx)("button",{className:"is-activa",type:"button","data-filtro":"todos","aria-pressed":"true",children:e}),t.map((e,t)=>(0,rg.jsx)("button",{type:"button","data-filtro":e.clave,"aria-pressed":"false",children:e.nombre},t))]}),(0,rg.jsxs)("div",{className:"grilla-clientes",children:[r.map((e,t)=>(0,rg.jsxs)("article",{className:"tarjeta-cliente","data-rubro":[e.industria,e.tambien].filter(Boolean).join(" "),children:[(0,rg.jsx)(hN.m,{className:"tarjeta-cliente__foto",src:e.foto,ancho:352,alto:139}),(0,rg.jsx)(hN.m,{className:(0,hN.K)("tarjeta-cliente__logo",e.logoClaro&&"tarjeta-cliente__logo--claro"),src:e.logo,alt:e.nombre,ancho:120,alto:120}),(0,rg.jsx)("span",{className:"tarjeta-cliente__rubro",children:e.rubro}),(0,rg.jsx)("span",{className:"tarjeta-cliente__nombre","aria-hidden":"true",children:e.nombre})]},t)),(0,rg.jsx)("p",{className:"grilla-clientes__vacio","data-vacio":!0,hidden:!0,children:n})]})]})}),h6=(0,hN.k)({label:"Botón flotante (esquina)",fields:{titulo:hy("Título"),texto:hw("Texto (se ve al pasar el mouse)"),botonTexto:hy("Texto del botón"),botonLink:hT("El botón lleva a")},defaultProps:{titulo:"¿Listo para usar Thinkion?",texto:"Unite a los líderes que confían en nosotros para impulsar su crecimiento",botonTexto:"PEDÍ TU DEMO",botonLink:"/demo"},render:({titulo:e,texto:t,botonTexto:r,botonLink:n,puck:o})=>(0,rg.jsxs)("aside",{className:"cta-flotante",tabIndex:0,"aria-label":"string"==typeof e?e:"Pedí tu demo",ref:o.dragRef,children:[(0,rg.jsx)("p",{className:"cta-flotante__titulo",children:e}),(0,rg.jsx)("p",{children:(0,hN.Z)(t)}),(0,rg.jsx)("a",{href:(0,hN.U)(n),children:r})]})});e.s(["BotonFlotante",0,h6,"Funciones",0,h1,"GrillaClientes",0,h3,"HeroProducto",0,hZ,"Integraciones",0,h2,"Logos",0,hQ,"MediaProducto",0,hG,"Mockup",0,hK,"Ventajas",0,hY],5925);var h5=e.i(5925);let h8=(e="")=>String(e).normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"pestana",h7=(e,t)=>Math.min(Math.max((Number(e)||1)-1,0),Math.max(t-1,0)),h9=(0,hN.k)({label:"Portada (industria)",fields:{titulo:hw("Título",{editable:!1}),resaltado:hy("Palabra subrayada (tal cual está en el título)",{editable:!1}),bajada:hw("Bajada"),botonTexto:hy("Texto del botón"),botonLink:hT("El botón lleva a"),videoLink:hT("Video (YouTube, Vimeo o Drive)"),portada:hP("Imagen del video"),portadaAlt:hy("Descripción de la imagen",{editable:!1})},defaultProps:{titulo:"Título",resaltado:"",bajada:"",botonTexto:"Pedí tu demo",botonLink:"/demo",videoLink:"",portada:"/img/segmentos/video-sistema.webp",portadaAlt:""},render:({titulo:e,resaltado:t,bajada:r,botonTexto:n,botonLink:o,videoLink:i,portada:a,portadaAlt:l,puck:s})=>(0,rg.jsxs)("section",{className:"seg-hero",ref:s.dragRef,children:[(0,rg.jsxs)("div",{className:"seg-hero__texto",children:[(0,rg.jsx)("h1",{className:"seg-hero__titulo",children:(0,hN.L)(e,t,"seg-hero__subrayado")}),(0,rg.jsx)("p",{className:"seg-hero__bajada",children:(0,hN.Z)(r)}),n&&(0,rg.jsx)("a",{className:"boton",href:(0,hN.U)(o),children:n})]}),(0,rg.jsxs)("div",{className:"seg-video",children:[(0,rg.jsxs)("a",{className:"seg-video__enlace",href:(0,hN.U)(i),"aria-label":"Ver el video de Thinkion",children:[(0,rg.jsx)(hN.m,{src:a,alt:l,ancho:1121,alto:621,prioridad:!0}),(0,rg.jsx)("img",{className:"seg-video__play",src:"/img/segmentos/play-grande.svg",alt:"",width:"92",height:"111"})]}),(0,rg.jsx)("img",{className:"seg-video__marco",src:"/img/segmentos/marco-video-grande.svg",alt:"",width:"1187",height:"702","aria-hidden":"true"})]})]})}),fe=(0,hN.k)({label:"Módulos en pestañas",fields:{ancla:hy("Nombre para linkear (ej.: punto-de-venta)",{editable:!1}),pestanas:hI("Pestañas",{nombre:hy("Nombre de la pestaña",{editable:!1}),titulo:hy("Título"),items:hI("Beneficios",{icono:hP("Ícono"),texto:hy("Texto")},{resumen:"texto",nuevo:{icono:"/img/segmentos/icono-rayo.svg",texto:"Beneficio"}}),disposicion:hz("Imágenes",[["celular","Notebook + celular (a la derecha)"],["tablet","Notebook + tablet (a la izquierda)"]]),imagenGrande:hP("Imagen grande (notebook)"),imagenGrandeAlt:hy("Descripción",{editable:!1}),imagenChica:hP("Imagen chica (celular o tablet)"),imagenChicaAlt:hy("Descripción",{editable:!1})},{resumen:"nombre",nuevo:{nombre:"Nueva",titulo:"Título",items:[],disposicion:"celular",imagenGrande:"",imagenGrandeAlt:"",imagenChica:"",imagenChicaAlt:""}}),abierta:hR()},defaultProps:{ancla:"",pestanas:[],abierta:1},render:({ancla:e,pestanas:t=[],abierta:r,id:n,puck:o})=>{let i=h7(r,t.length),a=`modulos-${n||"x"}`.replace(/[^a-z0-9-]/gi,"");return(0,rg.jsxs)("section",{className:"seg-card reveal",id:e||void 0,"data-tabs":!0,ref:o.dragRef,children:[(0,rg.jsx)("img",{className:"seg-card__chevron",src:"/img/home/deco-chevron-tabs.svg",alt:"",width:"258",height:"490","aria-hidden":"true"}),(0,rg.jsx)("div",{className:"pestanas pestanas--ancha",role:"tablist","aria-label":"Módulos",children:t.map((e,t)=>(0,rg.jsx)("button",{className:(0,hN.K)("pestanas__boton",t===i&&"is-activa"),type:"button",role:"tab",id:`tab-${a}-${h8(e.nombre)}`,"aria-controls":`panel-${a}-${h8(e.nombre)}`,"aria-selected":t===i,"data-tab":h8(e.nombre),children:e.nombre},t))}),t.map((e,t)=>{let r=(0,rg.jsxs)("div",{className:"seg-panel__texto",children:[(0,rg.jsx)("h2",{children:e.titulo}),(0,rg.jsx)("ul",{className:"seg-lista",children:(e.items||[]).map((e,t)=>(0,rg.jsxs)("li",{children:[(0,rg.jsx)(hN.m,{src:e.icono,ancho:24,alto:24,perezosa:!1}),e.texto]},t))})]}),n="tablet"===e.disposicion,o=n?(0,rg.jsxs)("div",{className:"seg-panel__imagen seg-panel__imagen--adm",children:[(0,rg.jsx)(hN.m,{src:e.imagenGrande,alt:e.imagenGrandeAlt,ancho:538,alto:364}),(0,rg.jsx)(hN.m,{className:"seg-panel__tablet",src:e.imagenChica,alt:e.imagenChicaAlt,ancho:222,alto:256})]}):(0,rg.jsxs)("div",{className:"seg-panel__imagen",children:[(0,rg.jsx)(hN.m,{className:"seg-panel__notebook",src:e.imagenGrande,alt:e.imagenGrandeAlt,ancho:577,alto:355}),(0,rg.jsx)(hN.m,{className:"seg-panel__celular",src:e.imagenChica,alt:e.imagenChicaAlt,ancho:148,alto:311})]});return(0,rg.jsx)("div",{className:"seg-panel",role:"tabpanel",id:`panel-${a}-${h8(e.nombre)}`,"aria-labelledby":`tab-${a}-${h8(e.nombre)}`,"data-panel":h8(e.nombre),hidden:t!==i,children:n?(0,rg.jsxs)(rg.Fragment,{children:[o,r]}):(0,rg.jsxs)(rg.Fragment,{children:[r,o]})},t)})]})}}),ft=["ruta__paso--activo","","","ruta__paso--grande","ruta__paso--ancho",""],fr=(0,hN.k)({label:"Hoja de ruta (6 pasos)",fields:{titulo:hw("Título"),pasos:hI("Pasos",{icono:hP("Ícono"),texto:hw("Texto")},{resumen:"texto",min:6,max:6})},defaultProps:{titulo:"La instalación más fácil",pasos:[]},render:({titulo:e,pasos:t=[],puck:r})=>(0,rg.jsxs)("section",{className:"seg-ruta reveal",ref:r.dragRef,children:[(0,rg.jsx)("h2",{className:"titulo-40",children:(0,hN.Z)(e)}),(0,rg.jsxs)("div",{className:"ruta",children:[(0,rg.jsx)("img",{className:"ruta__lineas",src:"/img/segmentos/hoja-de-ruta-lineas.svg",alt:"",width:"1120",height:"290","aria-hidden":"true"}),t.slice(0,6).map((e,t)=>(0,rg.jsxs)("div",{className:(0,hN.K)("ruta__paso",ft[t]),children:[(0,rg.jsx)("span",{className:"ruta__icono",children:(0,rg.jsx)(hN.m,{src:e.icono,ancho:100,alto:81})}),(0,rg.jsx)("p",{children:(0,hN.Z)(e.texto)})]},t))]})]})}),fn=(0,hN.k)({label:"Datos destacados (calidad)",fields:{titulo:hy("Título"),texto:hj("Texto"),datos:hI("Datos",{icono:hP("Ícono chico"),cifra:hy("Cifra (ej.: 94,5)",{editable:!1}),unidad:hy("Unidad (ej.: %, min)",{editable:!1}),texto:hw("Texto")},{resumen:e=>`${e.cifra||""}${e.unidad||""}`,nuevo:{icono:"/img/segmentos/dato-check.svg",cifra:"100",unidad:"%",texto:"Texto"}})},defaultProps:{titulo:"Garantizamos la mejor calidad de atención",texto:"",datos:[]},render:({titulo:e,texto:t,datos:r=[],puck:n})=>(0,rg.jsx)("section",{className:"seg-calidad reveal",ref:n.dragRef,children:(0,rg.jsxs)("div",{className:"seg-calidad__contenido",children:[(0,rg.jsxs)("div",{className:"seg-calidad__texto",children:[(0,rg.jsx)("h2",{children:e}),t]}),(0,rg.jsx)("div",{className:"seg-datos",children:r.map((e,t)=>(0,rg.jsxs)("div",{className:"dato",children:[(0,rg.jsxs)("p",{className:"dato__cifra",children:[(0,rg.jsx)("span",{className:"dato__icono",children:(0,rg.jsx)(hN.m,{src:e.icono,ancho:12,alto:12,perezosa:!1})}),e.cifra,(0,rg.jsx)("small",{children:e.unidad})]}),(0,rg.jsx)("p",{children:(0,hN.Z)(e.texto)})]},t))})]})})}),fo=(0,hN.k)({label:"Tarjetas con imagen (tecnología)",fields:{titulo:hw("Título"),tarjetas:hI("Tarjetas",{imagen:hP("Imagen"),titulo:hy("Título"),texto:hw("Texto")},{resumen:"titulo",nuevo:{imagen:"/img/segmentos/tec-ia.webp",titulo:"Nueva",texto:"Texto"}})},defaultProps:{titulo:"Tecnología de vanguardia",tarjetas:[]},render:({titulo:e,tarjetas:t=[],puck:r})=>(0,rg.jsxs)("section",{className:"seg-tecno reveal",ref:r.dragRef,children:[(0,rg.jsx)("h2",{className:"titulo-40",children:(0,hN.Z)(e)}),(0,rg.jsx)("div",{className:"tecno-grilla",children:t.map((e,t)=>(0,rg.jsxs)("article",{className:"tecno-card",children:[(0,rg.jsx)(hN.m,{src:e.imagen,alto:170}),(0,rg.jsx)("h3",{children:e.titulo}),(0,rg.jsx)("p",{children:(0,hN.Z)(e.texto)})]},t))})]})}),fi=(0,hN.k)({label:"Productos (lista con detalle)",fields:{productos:hI("Productos",{nombre:hy("Nombre",{editable:!1}),icono:hP("Ícono"),foto1:hP("Foto 1"),foto2:hP("Foto 2"),celular:hP("Pantalla en el celular"),celularAlt:hy("Descripción del celular",{editable:!1}),texto:hw("Texto"),linkTexto:hy("Texto del link"),link:hT("El link lleva a")},{resumen:"nombre",nuevo:{nombre:"Nuevo producto",icono:"",foto1:"",foto2:"",celular:"",celularAlt:"",texto:"Texto",linkTexto:"Conocer más",link:"/"}}),abierta:hR("Producto abierto al cargar")},defaultProps:{productos:[],abierta:1},render:({productos:e=[],abierta:t,id:r,puck:n})=>{let o=h7(t,e.length),i=`productos-${r||"x"}`.replace(/[^a-z0-9-]/gi,"");return(0,rg.jsxs)("section",{className:"seg-productos reveal","data-tabs":!0,ref:n.dragRef,children:[(0,rg.jsx)("div",{className:"productos-lista",role:"tablist","aria-label":"Productos",children:e.map((e,t)=>(0,rg.jsxs)("button",{className:(0,hN.K)("pestanas__boton",t===o&&"is-activa"),type:"button",role:"tab",id:`tab-${i}-${h8(e.nombre)}`,"aria-controls":`panel-${i}-${h8(e.nombre)}`,"aria-selected":t===o,"data-tab":h8(e.nombre),children:[(0,rg.jsx)(hN.m,{src:e.icono,ancho:36,alto:36,perezosa:!1}),e.nombre]},t))}),e.map((e,t)=>(0,rg.jsxs)("div",{className:"producto",role:"tabpanel",id:`panel-${i}-${h8(e.nombre)}`,"aria-labelledby":`tab-${i}-${h8(e.nombre)}`,"data-panel":h8(e.nombre),hidden:t!==o,children:[(0,rg.jsxs)("div",{className:"producto__fotos",children:[(0,rg.jsxs)("div",{className:"producto__columna",children:[(0,rg.jsx)(hN.m,{src:e.foto1,ancho:352,alto:274}),(0,rg.jsx)(hN.m,{src:e.foto2,ancho:352,alto:274})]}),(0,rg.jsx)("div",{className:"producto__celular",children:(0,rg.jsx)(hN.m,{src:e.celular,alt:e.celularAlt,ancho:299,alto:542})})]}),(0,rg.jsxs)("div",{className:"producto__pie",children:[(0,rg.jsx)("div",{className:"producto__barra",children:(0,rg.jsx)("span",{})}),(0,rg.jsxs)("div",{className:"producto__texto",children:[(0,rg.jsx)("p",{children:(0,hN.Z)(e.texto)}),e.linkTexto&&(0,rg.jsx)("a",{className:"boton-borde",href:(0,hN.U)(e.link),children:e.linkTexto})]})]})]},t))]})}});e.s(["Calidad",0,fn,"HeroIndustria",0,h9,"HojaDeRuta",0,fr,"ModulosPestanas",0,fe,"Productos",0,fi,"Tecnologia",0,fo],74452);var fa=e.i(74452);let fl=(0,hN.k)({label:"Portada (institucional)",fields:{titulo:hw("Título"),texto:hj("Texto"),imagen:hP("Imagen"),imagenAlt:hy("Descripción de la imagen",{editable:!1})},defaultProps:{titulo:"Título",texto:"<p>Texto</p>",imagen:"/img/nosotros/hero-ecosistema-544.webp",imagenAlt:""},render:({titulo:e,texto:t,imagen:r,imagenAlt:n,puck:o})=>{let i="/img/nosotros/hero-ecosistema-544.webp"===r;return(0,rg.jsxs)("section",{className:"nos-hero",ref:o.dragRef,children:[(0,rg.jsxs)("div",{className:"nos-hero__texto",children:[(0,rg.jsx)("h1",{children:(0,hN.Z)(e)}),t]}),r&&(0,rg.jsx)("img",{className:"nos-hero__imagen",src:r,alt:n,width:"544",height:"362",fetchPriority:"high",srcSet:i?"/img/nosotros/hero-ecosistema-544.webp 544w, /img/nosotros/hero-ecosistema-816.webp 816w, /img/nosotros/hero-ecosistema.webp 1088w":void 0,sizes:i?"(max-width: 576px) calc(100vw - 32px), 544px":void 0})]})}}),fs=(0,hN.k)({label:"Valores (tarjetas alternadas)",fields:{titulo:hy("Título"),texto:hj("Texto"),valores:hI("Valores",{imagen:hP("Imagen"),titulo:hy("Título"),texto:hj("Texto")},{resumen:"titulo",nuevo:{imagen:"/img/nosotros/valor-equipo.webp",titulo:"Nuevo valor",texto:"<p>Texto</p>"}})},defaultProps:{titulo:"Los valores que nos definen",texto:"",valores:[]},render:({titulo:e,texto:t,valores:r=[],puck:n})=>(0,rg.jsxs)("section",{className:"nos-valores reveal",ref:n.dragRef,children:[(0,rg.jsxs)("div",{className:"nos-valores__encabezado",children:[(0,rg.jsx)("h2",{className:"titulo-seccion-40",children:e}),t]}),(0,rg.jsx)("div",{className:"valores",children:r.map((e,t)=>{let r=t%2==0,n=(0,rg.jsxs)("div",{className:"valor__card",children:[(0,rg.jsx)("h3",{children:e.titulo}),e.texto]}),o=(0,rg.jsx)(hN.m,{src:e.imagen,ancho:230,alto:260});return(0,rg.jsx)("article",{className:(0,hN.K)("valor",r?"valor--izq":"valor--der"),children:r?(0,rg.jsxs)(rg.Fragment,{children:[o,n]}):(0,rg.jsxs)(rg.Fragment,{children:[n,o]})},t)})})]})}),fc=(0,hN.k)({label:"Línea de tiempo",fields:{titulo:hy("Título"),texto:hw("Texto"),hitos:hI("Años",{anio:hy("Año",{editable:!1}),titulo:hy("Título"),texto:hw("Texto")},{resumen:"anio",nuevo:{anio:"2026",titulo:"Título",texto:"Texto"}})},defaultProps:{titulo:"Nuestra evolución",texto:"",hitos:[]},render:({titulo:e,texto:t,hitos:r=[],puck:n})=>(0,rg.jsxs)("section",{className:"evolucion reveal","data-linea-tiempo":!0,ref:n.dragRef,children:[(0,rg.jsxs)("div",{className:"evolucion__encabezado",children:[(0,rg.jsx)("h2",{children:e}),(0,rg.jsx)("p",{children:(0,hN.Z)(t)})]}),(0,rg.jsx)("div",{className:"anios",children:(0,rg.jsx)("div",{className:"anios__lista",children:r.map((e,t)=>(0,rg.jsx)("button",{className:0===t?"is-activo":"",type:"button","data-anio":e.anio,"aria-label":`Ver ${e.anio}`,children:e.anio},t))})}),(0,rg.jsx)("div",{className:"anios__linea","aria-hidden":"true",children:(0,rg.jsx)("span",{className:"anios__punto"})}),(0,rg.jsxs)("div",{className:"evolucion__pie",children:[(0,rg.jsx)("div",{className:"evolucion__hitos",children:r.map((e,t)=>(0,rg.jsxs)("div",{className:"hito","data-hito":e.anio,hidden:0!==t,children:[(0,rg.jsx)("h3",{children:e.titulo}),(0,rg.jsx)("p",{children:(0,hN.Z)(e.texto)})]},t))}),(0,rg.jsxs)("div",{className:"evolucion__flechas",children:[(0,rg.jsx)("button",{type:"button","data-anterior":!0,"aria-label":"Año anterior",disabled:!0,children:(0,rg.jsx)("img",{src:"/img/nosotros/flecha-izquierda.svg",alt:"",width:"16",height:"12"})}),(0,rg.jsx)("button",{type:"button","data-siguiente":!0,"aria-label":"Año siguiente",children:(0,rg.jsx)("img",{src:"/img/nosotros/flecha-derecha.svg",alt:"",width:"16",height:"12"})})]})]})]})}),fu=(0,hN.k)({label:"Texto largo con título",fields:{titulo:hy("Título"),texto:hj("Texto")},defaultProps:{titulo:"Título",texto:"<p>Texto</p>"},render:({titulo:e,texto:t,puck:r})=>(0,rg.jsxs)("section",{className:"politica reveal",ref:r.dragRef,children:[(0,rg.jsx)("h2",{className:"titulo-seccion-40",children:e}),(0,rg.jsx)("div",{className:"politica__texto",children:t})]})}),fd=e=>hI(e,{opcion:hy("Opción",{editable:!1})},{resumen:"opcion",nuevo:{opcion:"Nueva opción"}}),fp=(e=[])=>e.map(e=>e.opcion).filter(Boolean),fh=(0,hN.k)({label:"Formulario: pedí tu demo",fields:{etiqueta:hy("Etiqueta"),titulo:hy("Título"),texto:hj("Texto"),pasos:hI("Pasos",{destacado:hy("En negrita"),texto:hy("Resto del texto")},{resumen:"destacado",nuevo:{destacado:"Paso",texto:"descripción."}}),tiposLocal:fd('Opciones de "Tipo de local"'),aviso:hy("Aviso debajo del formulario"),botonTexto:hy("Texto del botón"),destino:hT("Enviar a (dirección que recibe los datos)")},defaultProps:{etiqueta:"Demo personalizada",titulo:"Pedí tu demo",texto:"",pasos:[],tiposLocal:[],aviso:"",botonTexto:"Pedir mi demo",destino:""},render:({etiqueta:e,titulo:t,texto:r,pasos:n=[],tiposLocal:o,aviso:i,botonTexto:a,destino:l,puck:s})=>(0,rg.jsxs)("section",{className:"postulacion demo",ref:s.dragRef,children:[(0,rg.jsxs)("div",{className:"demo__info",children:[e&&(0,rg.jsx)("span",{className:"etiqueta",children:e}),(0,rg.jsx)("h1",{children:t}),r,(0,rg.jsx)("ol",{className:"demo__pasos",children:n.map((e,t)=>(0,rg.jsxs)("li",{children:[(0,rg.jsx)("b",{children:t+1}),(0,rg.jsxs)("span",{children:[(0,rg.jsx)("strong",{children:e.destacado})," ",e.texto]})]},t))})]}),(0,rg.jsxs)("form",{className:"formulario demo__formulario",action:(0,hN.U)(l),method:"post",children:[(0,rg.jsxs)("fieldset",{children:[(0,rg.jsx)("legend",{children:"Tus datos"}),(0,rg.jsxs)("div",{className:"formulario__grilla",children:[(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Nombre completo"}),(0,rg.jsx)("input",{type:"text",name:"nombre",placeholder:"Pepito Pérez",autoComplete:"name",required:!0})]}),(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Tel. de contacto"}),(0,rg.jsx)("input",{type:"tel",name:"telefono",placeholder:"+54 9 11 1234-5678",autoComplete:"tel",required:!0})]}),(0,rg.jsxs)("label",{className:"campo campo--ancho",children:[(0,rg.jsx)("span",{children:"Correo electrónico"}),(0,rg.jsx)("input",{type:"email",name:"email",placeholder:"ejemplo@email.com",autoComplete:"email",required:!0})]})]})]}),(0,rg.jsxs)("fieldset",{children:[(0,rg.jsx)("legend",{children:"Tu negocio"}),(0,rg.jsxs)("div",{className:"formulario__grilla",children:[(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Ubicación del local"}),(0,rg.jsx)("input",{type:"text",name:"ubicacion",placeholder:"Palermo, CABA",autoComplete:"address-level2",required:!0})]}),(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Tipo de local"}),(0,rg.jsxs)("select",{name:"tipo_local",required:!0,defaultValue:"",children:[(0,rg.jsx)("option",{value:"",disabled:!0,children:"Elegí una opción"}),fp(o).map(e=>(0,rg.jsx)("option",{children:e},e))]})]})]})]}),i&&(0,rg.jsx)("p",{className:"demo__aviso",children:i}),(0,rg.jsx)("button",{className:"boton formulario__enviar",type:"submit",children:a})]})]})}),ff=(0,hN.k)({label:"Formulario: trabajá con nosotros",fields:{titulo:hy("Título"),texto:hw("Texto"),ciudadInicial:hy('"Ciudad": texto antes de elegir',{editable:!1}),ciudades:fd('Opciones de "Ciudad"'),puestoInicial:hy('"Puesto": texto antes de elegir',{editable:!1}),puestos:fd('Opciones de "Puesto"'),nivelInicial:hy('"Nivel de experiencia": texto antes de elegir',{editable:!1}),niveles:fd('Opciones de "Nivel de experiencia"'),botonTexto:hy("Texto del botón"),destino:hT("Enviar a (dirección que recibe los datos)")},defaultProps:{titulo:"Unite a nuestro equipo",texto:"",ciudadInicial:"",ciudades:[],puestoInicial:"",puestos:[],nivelInicial:"",niveles:[],botonTexto:"Enviar postulación",destino:""},render:({titulo:e,texto:t,ciudadInicial:r,ciudades:n,puestoInicial:o,puestos:i,nivelInicial:a,niveles:l,botonTexto:s,destino:c,puck:u})=>{let d=(e,t,r)=>{let n=fp(t);return(0,rg.jsxs)("select",{name:e,required:!0,defaultValue:"",children:[(0,rg.jsx)("option",{value:"",disabled:!0,children:r||n[0]||"Elegí una opción"}),n.map(e=>(0,rg.jsx)("option",{children:e},e))]})};return(0,rg.jsxs)("section",{className:"postulacion",id:"trabaja-con-nosotros",ref:u.dragRef,children:[(0,rg.jsxs)("div",{className:"postulacion__encabezado",children:[(0,rg.jsx)("h1",{children:e}),(0,rg.jsx)("p",{children:(0,hN.Z)(t)})]}),(0,rg.jsxs)("form",{className:"formulario",action:(0,hN.U)(c),method:"post",encType:"multipart/form-data",children:[(0,rg.jsxs)("fieldset",{children:[(0,rg.jsx)("legend",{children:"Datos personales"}),(0,rg.jsxs)("div",{className:"formulario__grilla",children:[(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Nombre completo"}),(0,rg.jsx)("input",{type:"text",name:"nombre",placeholder:"Pepito Pérez",autoComplete:"name",required:!0})]}),(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Correo electrónico"}),(0,rg.jsx)("input",{type:"email",name:"email",placeholder:"ejemplo@email.com",autoComplete:"email",required:!0})]}),(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Tel. de contacto"}),(0,rg.jsx)("input",{type:"tel",name:"telefono",placeholder:"+54 9 11 1234-5678",autoComplete:"tel"})]}),(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Ciudad de residencia"}),d("ciudad",n,r)]})]})]}),(0,rg.jsxs)("fieldset",{children:[(0,rg.jsx)("legend",{children:"Perfil profesional"}),(0,rg.jsxs)("div",{className:"formulario__grilla",children:[(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Puesto laboral"}),d("puesto",i,o)]}),(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Nivel de experiencia"}),d("experiencia",l,a)]}),(0,rg.jsxs)("div",{className:"campo campo--archivo","data-archivo":!0,children:[(0,rg.jsx)("span",{children:"Adjuntar CV"}),(0,rg.jsxs)("label",{children:[(0,rg.jsx)("input",{type:"file",name:"cv",accept:".pdf,.doc,.docx"}),(0,rg.jsx)("img",{src:"/img/nosotros/icono-subir.svg",alt:"",width:"58",height:"41"}),(0,rg.jsxs)("small",{"data-archivo-texto":!0,children:["Arrastrá el archivo o",(0,rg.jsx)("br",{}),(0,rg.jsx)("b",{children:"seleccionalo desde aquí"})]})]})]}),(0,rg.jsxs)("label",{className:"campo",children:[(0,rg.jsx)("span",{children:"Carta de presentación (opcional)"}),(0,rg.jsx)("textarea",{name:"carta",placeholder:"Mensaje de presentación..."})]})]})]}),(0,rg.jsx)("button",{className:"boton formulario__enviar",type:"submit",children:s})]})]})}}),fm=(0,hN.k)({label:"Aviso: página en construcción",fields:{etiqueta:hy("Etiqueta"),titulo:hy("Título"),texto:hw("Texto"),links:hI("Otras páginas para visitar",{texto:hy("Texto"),link:hT("Lleva a")},{resumen:"texto",nuevo:{texto:"Página",link:"/"}})},defaultProps:{etiqueta:"Retail",titulo:"Estamos construyendo esta página",texto:"",links:[]},render:({etiqueta:e,titulo:t,texto:r,links:n=[],puck:o})=>(0,rg.jsxs)("section",{className:"construccion__card",ref:o.dragRef,children:[(0,rg.jsx)("span",{className:"construccion__icono","aria-hidden":"true",children:(0,rg.jsx)("svg",{viewBox:"0 0 24 24",width:"40",height:"40",children:(0,rg.jsx)("path",{fill:"currentColor",d:"M13.8 3.2a1 1 0 0 1 1.4 0l5.6 5.6a1 1 0 0 1 0 1.4l-1.4 1.4a1 1 0 0 1-1.4 0l-.7-.7-7.9 7.9a2.5 2.5 0 1 1-3.5-3.5l7.9-7.9-.7-.7a1 1 0 0 1 0-1.4l.7-.7zM5.3 17.3a.5.5 0 1 0 .7.7.5.5 0 0 0-.7-.7z"})})}),e&&(0,rg.jsx)("p",{className:"construccion__etiqueta",children:e}),(0,rg.jsx)("h1",{children:t}),(0,rg.jsx)("p",{className:"construccion__texto",children:(0,hN.Z)(r)}),(0,rg.jsxs)("div",{className:"construccion__botones",children:[(0,rg.jsx)("a",{className:"boton",href:"/",children:"Volver al inicio"}),(0,rg.jsx)("a",{className:"boton-borde construccion__atras",href:"/","data-volver":!0,children:"Volver atrás"})]}),n.length>0&&(0,rg.jsxs)("nav",{className:"construccion__links","aria-label":"Otras páginas",children:[(0,rg.jsx)("span",{children:"O visitá:"}),n.map((e,t)=>(0,rg.jsx)("a",{href:(0,hN.U)(e.link),children:e.texto},t))]})]})});e.s(["EnConstruccion",0,fm,"Evolucion",0,fc,"FormularioDemo",0,fh,"FormularioEmpleo",0,ff,"HeroNosotros",0,fl,"TextoLargo",0,fu,"Valores",0,fs],32585);var fg=e.i(32585);let fv=["Titulo","Texto","Imagen","Boton","Video","Carrusel","Espacio","Columnas"],fb=[["izquierda","Izquierda"],["centro","Centro"],["derecha","Derecha"]],f_={chico:"24px",mediano:"40px",grande:"72px",ninguno:"0px"},fx=(0,hN.k)({label:"Sección",fields:{contenido:{type:"slot",label:"Contenido",allow:fv},fondo:hz("Fondo",[["","Sin fondo"],["tarjeta","Tarjeta blanca"],["lila","Lila"],["azul","Azul"]]),ancho:hz("Ancho",[["contenido","Como el resto de la página"],["completa","Toda la pantalla"]]),alineacion:hz("Alinear contenido",[["","Izquierda"],["centro","Centro"]]),espacio:hz("Espacio arriba y abajo",[["chico","Chico"],["mediano","Mediano"],["grande","Grande"],["ninguno","Ninguno"]]),ancla:hy("Nombre para linkear (opcional, ej.: precios)",{editable:!1})},defaultProps:{contenido:[],fondo:"",ancho:"contenido",alineacion:"",espacio:"mediano",ancla:""},render:({contenido:e,fondo:t,ancho:r,alineacion:n,espacio:o,ancla:i,puck:a})=>(0,rg.jsx)("section",{ref:a.dragRef,id:i||void 0,className:(0,hN.K)("bloque-seccion","completa"===r&&"bloque-seccion--completa",t&&`bloque-seccion--${t}`,"centro"===n&&"bloque-seccion--centro"),style:{"--bloque-espacio":f_[o]||f_.mediano},children:(0,rg.jsx)(e,{className:"bloque-seccion__zona"})})}),fk={"1-1":["1fr 1fr",2],"1-2":["1fr 2fr",2],"2-1":["2fr 1fr",2],"1-1-1":["1fr 1fr 1fr",3],"1-1-1-1":["1fr 1fr 1fr 1fr",4]},fy=(0,hN.k)({label:"Columnas",fields:{proporcion:hz("Columnas",[["1-1","Dos iguales"],["1-2","Dos: angosta + ancha"],["2-1","Dos: ancha + angosta"],["1-1-1","Tres iguales"],["1-1-1-1","Cuatro iguales"]]),alinear:hz("Alinear verticalmente",[["start","Arriba"],["center","Centro"],["end","Abajo"]]),separacion:hz("Separación",[["16px","Chica"],["32px","Mediana"],["64px","Grande"]]),celular:hz("En el celular",[["","Una debajo de la otra"],["invertir","Una debajo de la otra, empezando por la última"]]),col1:{type:"slot",label:"Columna 1",allow:fv},col2:{type:"slot",label:"Columna 2",allow:fv},col3:{type:"slot",label:"Columna 3",allow:fv},col4:{type:"slot",label:"Columna 4",allow:fv}},defaultProps:{proporcion:"1-1",alinear:"start",separacion:"32px",celular:"",col1:[],col2:[],col3:[],col4:[]},render:({proporcion:e,alinear:t,separacion:r,celular:n,col1:o,col2:i,col3:a,col4:l,puck:s})=>{let[c,u]=fk[e]||fk["1-1"];return(0,rg.jsx)("div",{ref:s.dragRef,className:(0,hN.K)("bloque-columnas","invertir"===n&&"bloque-columnas--invertir"),style:{"--bloque-columnas":c,"--bloque-alinear":t,"--bloque-gap":r},children:[o,i,a,l].slice(0,u).map((e,t)=>(0,rg.jsx)(e,{className:"bloque-columnas__col"},t))})}}),fw=(0,hN.k)({label:"Título",fields:{texto:hw("Texto"),nivel:hz("Importancia (para Google)",[["h2","Título de sección"],["h3","Subtítulo"],["h1","Título principal de la página (uno solo)"]]),tamano:hz("Tamaño",[["grande","Grande"],["mediano","Mediano"],["chico","Chico"]]),alineacion:hz("Alineación",fb),color:((e="Color")=>hz(e,hC))()},defaultProps:{texto:"Nuevo título",nivel:"h2",tamano:"mediano",alineacion:"centro",color:""},render:({texto:e,nivel:t="h2",tamano:r,alineacion:n,color:o,puck:i})=>{let a=["h1","h2","h3"].includes(t)?t:"h2";return(0,rg.jsx)(a,{ref:i.dragRef,className:(0,hN.K)("bloque-titulo",`bloque-titulo--${r||"mediano"}`,`bloque--${n||"centro"}`,o&&`bloque-color--${o}`),children:(0,hN.Z)(e)})}}),fj=(0,hN.k)({label:"Texto",fields:{texto:hj("Texto"),alineacion:hz("Alineación",fb),color:((e="Color")=>hz(e,hC))(),ancho:hz("Ancho máximo",[["","Todo el espacio"],["720px","Mediano (más fácil de leer)"],["520px","Angosto"]])},defaultProps:{texto:"<p>Escribí acá el texto.</p>",alineacion:"izquierda",color:"",ancho:""},render:({texto:e,alineacion:t,color:r,ancho:n,puck:o})=>(0,rg.jsx)("div",{ref:o.dragRef,className:(0,hN.K)("bloque-texto",`bloque--${t||"izquierda"}`,r&&`bloque-color--${r}`),style:n?{maxWidth:n,marginLeft:"izquierda"===t?void 0:"auto",marginRight:"centro"===t?"auto":void 0}:void 0,children:e})}),fz=(0,hN.k)({label:"Imagen",fields:{imagen:hP("Imagen"),alt:hy("Descripción (para Google y lectores de pantalla)",{editable:!1}),ancho:hz("Ancho",[["100%","Todo el espacio"],["75%","Tres cuartos"],["50%","La mitad"],["320px","Chica"]]),alineacion:hz("Alineación",fb),redondeada:hz("Bordes",[[!1,"Rectos"],[!0,"Redondeados"]],{radio:!0}),epigrafe:hy("Epígrafe (opcional)"),link:hT("Al tocarla lleva a (opcional)")},defaultProps:{imagen:"/img/home/video-portada.webp",alt:"",ancho:"100%",alineacion:"centro",redondeada:!0,epigrafe:"",link:""},render:({imagen:e,alt:t,ancho:r,alineacion:n,redondeada:o,epigrafe:i,link:a,puck:l})=>{let s=(0,rg.jsx)(hN.m,{src:e,alt:t});return(0,rg.jsxs)("figure",{ref:l.dragRef,className:(0,hN.K)("bloque-imagen",`bloque-imagen--${n||"centro"}`,o&&"bloque-imagen--redondeada"),style:{"--bloque-ancho":r||"100%",flexDirection:"column",alignItems:"izquierda"===n?"flex-start":"derecha"===n?"flex-end":"center"},children:[a?(0,rg.jsx)("a",{href:(0,hN.U)(a),style:{display:"contents"},children:s}):s,i&&(0,rg.jsx)("figcaption",{children:i})]})}}),fS=(0,hN.k)({label:"Botón",fields:{texto:hy("Texto"),link:hT("Lleva a"),estilo:hz("Estilo",[["coral","Coral (principal)"],["azul","Azul"],["borde","Con borde"]]),alineacion:hz("Alineación",fb)},defaultProps:{texto:"Pedí tu demo",link:"/demo",estilo:"coral",alineacion:"centro"},render:({texto:e,link:t,estilo:r,alineacion:n,puck:o})=>(0,rg.jsx)("div",{ref:o.dragRef,className:(0,hN.K)("bloque-boton",`bloque-boton--${n||"centro"}`),children:(0,rg.jsx)("a",{className:"borde"===r?"boton-borde":(0,hN.K)("boton","azul"===r&&"boton--azul"),href:(0,hN.U)(t),children:e})})}),fI=(0,hN.k)({label:"Video",fields:{videoLink:hT("Video (YouTube, Vimeo, Google Drive o .mp4)"),portada:hP("Imagen de portada"),titulo:hy("Título del video (para lectores de pantalla)",{editable:!1}),ancho:hz("Ancho",[["100%","Todo el espacio"],["75%","Tres cuartos"],["50%","La mitad"]])},defaultProps:{videoLink:"",portada:"/img/home/video-portada.webp",titulo:"Ver el video",ancho:"100%"},render:({videoLink:e,portada:t,titulo:r,ancho:n,puck:o})=>(0,rg.jsxs)("a",{ref:o.dragRef,className:"bloque-video",href:(0,hN.U)(e),"aria-label":r||"Ver el video",style:{"--bloque-ancho":n||"100%"},children:[(0,rg.jsx)(hN.m,{src:t,alt:""}),(0,rg.jsx)("img",{className:"bloque-video__play",src:"/img/home/play.svg",alt:"",width:"64",height:"72"})]})}),fE=(0,hN.k)({label:"Carrusel",fields:{estilo:hz("Estilo",[["logos","Logos (en gris, se colorean al pasar)"],["imagenes","Imágenes"],["tarjetas","Tarjetas con texto"]]),items:hI("Elementos",{imagen:hP("Imagen"),alt:hy("Descripción de la imagen",{editable:!1}),titulo:hy("Título (tarjetas)"),texto:hw("Texto (tarjetas)"),link:hT("Al tocarlo lleva a (opcional)")},{resumen:e=>e.titulo||e.alt,nuevo:{imagen:"",alt:"",titulo:"",texto:"",link:""}}),porVista:hS("Cuántos se ven a la vez (escritorio)",{min:1,max:6}),porVistaMovil:hS("Cuántos se ven a la vez (celular)",{min:1,max:3}),automatico:hz("Pasa solo",[[!0,"Sí"],[!1,"No, solo con flechas"]],{radio:!0}),segundos:hS("Segundos entre cada paso",{min:2,max:15})},defaultProps:{estilo:"logos",items:[],porVista:5,porVistaMovil:2,automatico:!0,segundos:4},render:({estilo:e,items:t=[],porVista:r,porVistaMovil:n,automatico:o,segundos:i,puck:a})=>(0,rg.jsxs)("div",{ref:a.dragRef,className:(0,hN.K)("bloque-carrusel",`bloque-carrusel--${e||"logos"}`),"data-carrusel-generico":!0,"data-automatico":o?"si":"no","data-segundos":i||4,style:{"--por-vista":r||4,"--por-vista-movil":n||1},role:"region","aria-roledescription":"carrusel","aria-label":"Carrusel",children:[(0,rg.jsx)("button",{className:"bloque-carrusel__flecha bloque-carrusel__flecha--anterior",type:"button","data-anterior":!0,"aria-label":"Anterior",children:"‹"}),(0,rg.jsx)("div",{className:"bloque-carrusel__pista",children:t.map((t,r)=>{let n=(0,rg.jsxs)(rg.Fragment,{children:[(0,rg.jsx)(hN.m,{src:t.imagen,alt:t.alt}),"tarjetas"===e&&t.titulo&&(0,rg.jsx)("h3",{children:t.titulo}),"tarjetas"===e&&t.texto&&(0,rg.jsx)("p",{children:(0,hN.Z)(t.texto)})]});return t.link?(0,rg.jsx)("a",{className:"bloque-carrusel__item",href:(0,hN.U)(t.link),children:n},r):(0,rg.jsx)("div",{className:"bloque-carrusel__item",children:n},r)})}),(0,rg.jsx)("button",{className:"bloque-carrusel__flecha bloque-carrusel__flecha--siguiente",type:"button","data-siguiente":!0,"aria-label":"Siguiente",children:"›"})]})}),fC=(0,hN.k)({label:"Espacio",fields:{alto:hz("Alto",[["24px","Chico"],["56px","Mediano"],["96px","Grande"],["140px","Muy grande"]])},defaultProps:{alto:"56px"},render:({alto:e,puck:t})=>(0,rg.jsx)("div",{ref:t.dragRef,className:"bloque-espaciador",style:{"--bloque-alto":e||"56px"},"aria-hidden":"true"})});e.s(["BLOQUES_INTERNOS",0,fv,"Boton",0,fS,"Carrusel",0,fE,"Columnas",0,fy,"Espacio",0,fC,"Imagen",0,fz,"Seccion",0,fx,"Texto",0,fj,"Titulo",0,fw,"Video",0,fI],73255);var fP=e.i(73255),fT=e.i(26464);let{BLOQUES_INTERNOS:fA,...fM}=fP,{pestanaAbierta:fN,...fO}=hU,fD={categories:{armar:{title:"Armar secciones",components:["Seccion","Columnas","Titulo","Texto","Imagen","Boton","Video","Carrusel","Espacio"],defaultExpanded:!0},inicio:{title:"Secciones del Home",components:["HeroInicio","Diferenciales","DiagramaSoluciones","Industrias","ClientesCarrusel","PreguntasFrecuentes","Separador","LlamadoFinal"]},producto:{title:"Secciones de producto",components:["HeroProducto","MediaProducto","Ventajas","Mockup","Logos","Funciones","Integraciones"]},industria:{title:"Secciones de industria",components:["HeroIndustria","ModulosPestanas","HojaDeRuta","Calidad","Tecnologia","Productos"]},institucional:{title:"Institucional y formularios",components:["HeroNosotros","Valores","Evolucion","TextoLargo","GrillaClientes","BotonFlotante","FormularioDemo","FormularioEmpleo","EnConstruccion"]}},components:{...fM,...fO,...h5,...fa,...fg},root:{fields:{titulo:hy("Título (pestaña del navegador y Google, hasta 60 letras)",{editable:!1}),descripcion:hw("Descripción para Google y al compartir (70 a 160 letras)",{editable:!1}),plantilla:hz("Estilo de la página (fondo y colores)",Object.entries(fT.d).map(([e,t])=>[e,t.label])),indexar:hz("Que aparezca en Google y en las IAs",[[!0,"Sí"],[!1,"No (página en construcción o privada)"]],{radio:!0}),productoNombre:hy('Producto: nombre (opcional, para Google: "Thinkion POS & ERP")',{editable:!1}),productoDescripcion:hw("Producto: descripción corta (opcional)",{editable:!1})},defaultProps:{titulo:"Thinkion",descripcion:"",plantilla:"producto",indexar:!0,productoNombre:"",productoDescripcion:""},render:fT.U}};var fL=e.i(40609),f$=e.i(10343),fB=e.i(69427);let fR=hE("Menú",{items:hI("Opciones del menú",{tipo:hz("Tipo",[["link","Link"],["desplegable","Desplegable (con opciones)"]],{radio:!0}),texto:hy("Texto",{editable:!1}),link:hT("Lleva a (solo links)"),estilo:hz("Estilo del desplegable",[["soluciones","Con lista debajo (como Soluciones)"],["industrias","Con texto debajo (como Industrias)"]]),opciones:hI("Opciones del desplegable",{titulo:hy("Título",{editable:!1}),icono:hP("Ícono"),link:hT("Lleva a"),detalle:hw("Debajo: una línea por renglón (lista) o un texto",{editable:!1})},{resumen:"titulo",nuevo:{titulo:"Nueva opción",icono:"/img/home/menu-pos.svg",link:"/",detalle:""}})},{resumen:"texto",nuevo:{tipo:"link",texto:"Nuevo",link:"/",estilo:"soluciones",opciones:[]}}),botonTexto:hy("Botón de la derecha: texto (vacío = sin botón)",{editable:!1}),botonLink:hT("Botón de la derecha: lleva a")}),fF=hE("Pie de página (footer)",{logo:hP("Logo"),sellos:hP("Sellos / certificaciones"),sellosAlt:hy("Descripción de los sellos",{editable:!1}),columnas:hI("Columnas de links",{titulo:hy("Título",{editable:!1}),links:hI("Links",{texto:hy("Texto",{editable:!1}),link:hT("Lleva a")},{resumen:"texto",nuevo:{texto:"Nuevo link",link:"/"}})},{resumen:"titulo",nuevo:{titulo:"Columna",links:[]}}),contactoTitulo:hy("Título de contacto",{editable:!1}),email:hy("Mail de contacto",{editable:!1}),redes:hI("Redes sociales",{nombre:hy("Nombre (ej.: Instagram)",{editable:!1}),link:hT("Dirección"),icono:hP("Ícono")},{resumen:"nombre",nuevo:{nombre:"Red",link:"https://",icono:""}}),copyright:hy("Texto final (copyright)",{editable:!1})}),fq={components:{},root:{fields:{menu:fR,temporadas:hE("Temporadas (colores y banner de bienvenida)",{activa:hy("Forzar una temporada (escribí su nombre; vacío = automática por fechas)",{editable:!1}),lista:hI("Temporadas",{nombre:hy("Nombre (ej.: Navidad 2026)",{editable:!1}),desde:hA("Desde"),hasta:hA("Hasta"),colores:hE("Colores (vacío = los de siempre)",{botones:hM("Botones (coral)"),acento:hM("Acento (violeta)"),titulos:hM("Títulos (azul)"),fondo:hM("Fondo de las páginas")}),banner:hE("Banner al entrar a la web",{activo:hz("Mostrar banner",[[!0,"Sí"],[!1,"No"]],{radio:!0}),titulo:hy("Título",{editable:!1}),texto:hw("Texto",{editable:!1}),imagen:hP("Imagen (opcional)"),imagenAlt:hy("Descripción de la imagen",{editable:!1}),botonTexto:hy("Texto del botón (vacío = sin botón)",{editable:!1}),botonLink:hT("El botón lleva a"),colorFondo:hM("Color de fondo"),colorTexto:hM("Color de la letra"),colorBoton:hM("Color del botón"),frecuencia:hz("Cada cuánto se muestra",[["sesion","Una vez por visita"],["dia","Una vez por día"],["una-vez","Una sola vez"],["siempre","Siempre"]]),paginas:hz("Dónde",[["todas","En todas las páginas"],["home","Solo en la Home"]]),retraso:hS("Aparece a los (segundos)",{min:0,max:30})})},{resumen:"nombre",nuevo:{nombre:"Nueva temporada",desde:"",hasta:"",colores:{botones:"",acento:"",titulos:"",fondo:""},banner:{activo:!1,titulo:"",texto:"",imagen:"",imagenAlt:"",botonTexto:"Pedí tu demo",botonLink:"/demo",colorFondo:"#ffffff",colorTexto:"#1b1b1b",colorBoton:"#c9373d",frecuencia:"sesion",paginas:"todas",retraso:1}}})}),footer:fF,sitio:hE("Datos de la empresa (Google, IAs y al compartir)",{nombre:hy("Nombre",{editable:!1}),razonSocial:hy("Razón social",{editable:!1}),descripcion:hw("Qué es Thinkion (una o dos oraciones)",{editable:!1}),email:hy("Mail",{editable:!1}),dominio:hy("Dirección del sitio (ej.: https://www.thinkion.com.ar)",{editable:!1}),imagenCompartir:hP("Imagen al compartir el link (1200 × 630)"),redes:hI("Perfiles en redes",{nombre:hy("Red",{editable:!1}),link:hT("Dirección")},{resumen:"nombre",nuevo:{nombre:"Red",link:"https://"}})})},render:function({menu:e,footer:t,temporadas:r,puck:n}){let o=r?.lista||[],i=(0,fB.T)(r),a=o.find(e=>(0,fB.y)(e.nombre)===i),l=a?.banner;return(0,rg.jsxs)("div",{className:"pagina-home","data-temporada":i||void 0,children:[(0,rg.jsx)("style",{dangerouslySetInnerHTML:{__html:(0,fB.m)(r).replace(/html\[data-temporada=/g,"[data-temporada=")}}),(0,rg.jsx)("div",{className:"fondo-deco","aria-hidden":"true",children:(0,rg.jsx)("img",{className:"fondo-deco__hero",src:"/img/home/fondo-hero.svg",alt:"",width:"2065",height:"1564"})}),(0,rg.jsx)(fL.f,{menu:e,rutaActual:"",eventos:{onClickCapture:e=>{e.target.closest("a")&&e.preventDefault()}}}),(0,rg.jsxs)("main",{className:"home",style:{padding:"60px 16px 120px",display:"grid",gap:32,justifyItems:"center"},children:[(0,rg.jsxs)("div",{style:{color:"#fff",textAlign:"center",maxWidth:640},children:[(0,rg.jsx)("h1",{style:{fontSize:40,fontWeight:400},children:"Ajustes generales"}),(0,rg.jsxs)("p",{style:{fontSize:18,fontWeight:300},children:["Lo que cambies acá se aplica en ",(0,rg.jsx)("strong",{children:"todas las páginas"}),". Hoy está activa:"," ",(0,rg.jsx)("strong",{children:a?.nombre||"ninguna temporada"}),"."]}),(0,rg.jsx)("p",{style:{marginTop:16},children:(0,rg.jsx)("a",{className:"boton",href:"/demo",children:"Así se ve un botón"})})]}),l?.activo?(0,rg.jsxs)("div",{className:"banner-temporada",style:{position:"static",display:"block","--banner-fondo":l.colorFondo||"#fff","--banner-texto":l.colorTexto||"#1b1b1b","--banner-boton":l.colorBoton||"#c9373d"},children:[l.imagen&&(0,rg.jsx)("img",{className:"banner-temporada__imagen",src:l.imagen,alt:""}),(0,rg.jsxs)("div",{className:"banner-temporada__cuerpo",children:[l.titulo&&(0,rg.jsx)("h2",{children:l.titulo}),l.texto&&(0,rg.jsx)("p",{children:l.texto}),l.botonTexto&&(0,rg.jsx)("span",{className:"banner-temporada__boton",children:l.botonTexto})]})]}):(0,rg.jsxs)("p",{style:{background:"rgba(255,255,255,.85)",borderRadius:16,padding:"16px 24px",maxWidth:520,textAlign:"center"},children:["La temporada activa no tiene banner. Para mostrar uno: ",(0,rg.jsx)("strong",{children:"Temporadas → la temporada → Banner al entrar a la web → Mostrar banner: Sí"}),"."]})]}),(0,rg.jsx)(f$.f,{footer:t,eventos:{onClickCapture:e=>{e.target.closest("a")&&e.preventDefault()}}})]})}}};var fW=e.i(20637);let fH={"header-publish":"Publicar","header-undo":"Deshacer","header-redo":"Rehacer","header-toggle-leftsidebar":"Mostrar u ocultar bloques","header-toggle-rightsidebar":"Mostrar u ocultar campos","header-toggle-menubar":"Mostrar u ocultar menú","action-selectparent":"Elegir el bloque que lo contiene","action-duplicate":"Duplicar","action-delete":"Borrar","label-page":"Página","label-component":"Bloque","outline-empty":"Todavía no hay bloques","outline-item-collapse":"Contraer","outline-item-expand":"Expandir","outline-header-title":"Esquema","outline-header-collapseall":"Contraer todo","outline-item-duplicate":"Duplicar","outline-item-delete":"Borrar","drawer-category-collapse":"Contraer {title}","drawer-category-expand":"Expandir {title}","drawer-category-other":"Otros","canvas-noconfig":"Bloque desconocido: {type}","field-readonly":"Solo lectura","field-arrayitem-summary":"Elemento {index}","field-arrayitem-duplicate":"Duplicar","field-arrayitem-delete":"Borrar","field-external-selectdata":"Elegir","field-external-search":"Buscar","field-external-togglefilters":"Filtros","field-external-item":"Elemento","field-external-result-singular":"{count} resultado","field-external-result-plural":"{count} resultados","field-richtext-bold":"Negrita","field-richtext-italic":"Cursiva","field-richtext-underline":"Subrayado","field-richtext-strikethrough":"Tachado","field-richtext-blockquote":"Cita","field-richtext-code-inline":"Código","field-richtext-code-block":"Bloque de código","field-richtext-list-bullet":"Lista con viñetas","field-richtext-list-ordered":"Lista numerada","field-richtext-horizontalrule":"Línea","field-richtext-align-left":"Alinear a la izquierda","field-richtext-align-center":"Centrar","field-richtext-align-right":"Alinear a la derecha","field-richtext-align-justify":"Justificar","field-richtext-select":"Elegir","field-richtext-headingselect-1":"Título 1","field-richtext-headingselect-2":"Título 2","field-richtext-headingselect-3":"Título 3","field-richtext-headingselect-4":"Título 4","field-richtext-headingselect-5":"Título 5","field-richtext-headingselect-6":"Título 6","field-richtext-alignselect-left":"Izquierda","field-richtext-alignselect-center":"Centro","field-richtext-alignselect-right":"Derecha","field-richtext-alignselect-justify":"Justificado","field-richtext-listselect-bullet":"Viñetas","field-richtext-listselect-ordered":"Numerada","viewport-zoom-in":"Acercar","viewport-zoom-out":"Alejar","viewport-zoom-auto":"{zoom}% (automático)","viewport-toggle-menu":"Tamaños de pantalla","viewport-switch":"Ver en {label}","viewport-switch-default":"Cambiar tamaño","plugin-blocks":"Bloques","plugin-outline":"Esquema","plugin-fields":"Campos","plugin-components":"Bloques","layout-maximize":"Maximizar","layout-minimize":"Minimizar","loader-loading":"Cargando"},fV=[{width:390,height:"auto",label:"Celular",icon:"Smartphone"},{width:768,height:"auto",label:"Tablet",icon:"Tablet"},{width:1440,height:"auto",label:"Escritorio",icon:"Monitor"}],fX=e=>{e.target.closest?.("a[href]")&&e.preventDefault()},fU=e=>e.preventDefault();function fZ({children:e,document:t}){return(0,rv.useEffect)(()=>{if(t){if(!t.getElementById("estilos-sitio")){let e=t.createElement("link");e.id="estilos-sitio",e.rel="stylesheet",e.href="/estilos/sitio.css",t.head.append(e),t.documentElement.lang="es"}return t.addEventListener("click",fX,!0),t.addEventListener("submit",fU,!0),()=>{t.removeEventListener("click",fX,!0),t.removeEventListener("submit",fU,!0)}}},[t]),e}let fG=e=>`thk-borrador:${e}`,fY=e=>{try{return JSON.parse(localStorage.getItem(fG(e))||"null")}catch{return null}},fK=e=>{try{localStorage.removeItem(fG(e))}catch{}};function fJ(){let e=(0,rb.useSearchParams)().get("pagina")||"inicio",t="_ajustes"===e,[r,n]=(0,fW.t)(),[o,i]=(0,rv.useState)({cargando:!0}),[a,l]=(0,fW.d)(),s=(0,rv.useRef)("");(0,rv.useEffect)(()=>{r?.conectado&&(async()=>{try{let[{ajustes:r},{paginas:n},o]=await Promise.all([(0,fW.k)("ajustes"),(0,fW.k)("paginas"),t?Promise.resolve(null):(0,fW.k)(`paginas?nombre=${e}`)]),a=t?{root:{props:r},content:[],zones:{}}:o.datos;s.current=JSON.stringify(a);let l=fY(e);l&&JSON.stringify(l)!==s.current&&confirm("Hay cambios sin publicar de la última vez que editaste esta página en este navegador. ¿Recuperarlos?")?a=l:l&&fK(e),i({datos:a,ajustes:r,ruta:o?.ruta||"/",paginas:n})}catch(e){i({error:e.message})}})()},[r?.conectado,e,t]),(0,rv.useEffect)(()=>{let t=t=>{let r=fY(e);r&&JSON.stringify(r)!==s.current&&t.preventDefault()};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)},[e]);let c=(0,rv.useMemo)(()=>({iframe:fZ,headerActions:({children:e})=>(0,rg.jsxs)(rg.Fragment,{children:[(0,rg.jsx)("a",{className:"a-btn a-btn--chico",href:"/admin",children:"← Panel"}),!t&&(0,rg.jsx)("a",{className:"a-btn a-btn--chico",href:o.ruta||"/",target:"_blank",rel:"noopener",children:"Ver en la web ↗"}),e]})}),[t,o.ruta]);if(!r)return null;if(!r.conectado)return(0,rg.jsx)(fW.K,{alEntrar:n,error:r.error});if(o.error)return(0,rg.jsx)("main",{className:"a-centro",children:(0,rg.jsxs)("div",{className:"a-tarjeta",children:[(0,rg.jsx)("p",{className:"a-error",children:o.error}),(0,rg.jsx)("a",{className:"a-btn",href:"/admin",children:"Volver al panel"})]})});if(o.cargando)return(0,rg.jsx)("main",{className:"a-centro",children:(0,rg.jsx)("p",{className:"a-ayuda",children:"Cargando la página…"})});let u=async n=>{a("Publicando…",{duracion:3e4});try{t?await (0,fW.k)("ajustes",{metodo:"POST",cuerpo:{ajustes:n.root.props}}):await (0,fW.k)("paginas",{metodo:"POST",cuerpo:{nombre:e,datos:n}}),s.current=JSON.stringify(n),fK(e),a("github"===r.modo?"✅ Publicado. En 1 o 2 minutos se ve en la web (Vercel lo está armando).":"✅ Guardado en los archivos del proyecto.",{duracion:7e3})}catch(e){a(`No se pudo publicar: ${e.message}`,{error:!0,duracion:1e4})}},d=t?"Ajustes generales":o.paginas.find(t=>t.nombre===e)?.titulo||e;return(0,rg.jsxs)(rg.Fragment,{children:[(0,rg.jsx)(hk.ListaDePaginas,{paginas:o.paginas}),(0,rg.jsx)(hx,{config:t?fq:fD,data:o.datos,metadata:{ajustes:o.ajustes,ruta:o.ruta},onPublish:u,onChange:t=>((e,t)=>{try{localStorage.setItem(fG(e),JSON.stringify(t))}catch{}})(e,t),dictionary:fH,viewports:fV,overrides:c,ui:t?{leftSideBarVisible:!1}:void 0,headerTitle:d,headerPath:t?"Menú, footer, temporadas y banner":o.ruta}),l]})}e.s(["default",0,function(){return(0,rg.jsx)(rv.Suspense,{fallback:null,children:(0,rg.jsx)(fJ,{})})}],38022)},18566,(e,t,r)=>{t.exports=e.r(76562)},68971,(e,t,r)=>{t.exports=(function t(r,n,o){function i(l,s){if(!n[l]){if(!r[l]){var c=e.t;return!s&&c?c(l,!0):a(l,!0)}s=n[l]={exports:{}},r[l][0].call(s.exports,function(e){return i(r[l][1][e]||e)},s,s.exports,t,r,n,o)}return n[l].exports}for(var a=e.t,l=0;l<o.length;l++)i(o[l]);return i})({1:[function(e,t,r){(function(n,o,i,a,l,s,c,u,d){"use strict";var p=e("crypto");function h(e,t){var r;return void 0===(r="passthrough"!==(t=g(e,t)).algorithm?p.createHash(t.algorithm):new _).write&&(r.write=r.update,r.end=r.update),b(t,r).dispatch(e),r.update||r.end(""),r.digest?r.digest("buffer"===t.encoding?void 0:t.encoding):(e=r.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(r=t.exports=h).sha1=function(e){return h(e)},r.keys=function(e){return h(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(e){return h(e,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(e){return h(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var f=p.getHashes?p.getHashes().slice():["sha1","md5"],m=(f.push("passthrough"),["buffer","hex","binary","base64"]);function g(e,t){var r={};if(r.algorithm=(t=t||{}).algorithm||"sha1",r.encoding=t.encoding||"hex",r.excludeValues=!!t.excludeValues,r.algorithm=r.algorithm.toLowerCase(),r.encoding=r.encoding.toLowerCase(),r.ignoreUnknown=!0===t.ignoreUnknown,r.respectType=!1!==t.respectType,r.respectFunctionNames=!1!==t.respectFunctionNames,r.respectFunctionProperties=!1!==t.respectFunctionProperties,r.unorderedArrays=!0===t.unorderedArrays,r.unorderedSets=!1!==t.unorderedSets,r.unorderedObjects=!1!==t.unorderedObjects,r.replacer=t.replacer||void 0,r.excludeKeys=t.excludeKeys||void 0,void 0===e)throw Error("Object argument required.");for(var n=0;n<f.length;++n)f[n].toLowerCase()===r.algorithm.toLowerCase()&&(r.algorithm=f[n]);if(-1===f.indexOf(r.algorithm))throw Error('Algorithm "'+r.algorithm+'"  not supported. supported values: '+f.join(", "));if(-1===m.indexOf(r.encoding)&&"passthrough"!==r.algorithm)throw Error('Encoding "'+r.encoding+'"  not supported. supported values: '+m.join(", "));return r}function v(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function b(e,t,r){function n(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return r=r||[],{dispatch:function(t){return this["_"+(null===(t=e.replacer?e.replacer(t):t)?"null":typeof t)](t)},_object:function(t){var o,a=Object.prototype.toString.call(t),l=/\[object (.*)\]/i.exec(a);if(l=(l=l?l[1]:"unknown:["+a+"]").toLowerCase(),0<=(a=r.indexOf(t)))return this.dispatch("[CIRCULAR:"+a+"]");if(r.push(t),void 0!==i&&i.isBuffer&&i.isBuffer(t))return n("buffer:"),n(t);if("object"===l||"function"===l||"asyncfunction"===l)return a=Object.keys(t),e.unorderedObjects&&(a=a.sort()),!1===e.respectType||v(t)||a.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(a=a.filter(function(t){return!e.excludeKeys(t)})),n("object:"+a.length+":"),o=this,a.forEach(function(r){o.dispatch(r),n(":"),e.excludeValues||o.dispatch(t[r]),n(",")});if(!this["_"+l]){if(e.ignoreUnknown)return n("["+l+"]");throw Error('Unknown object type "'+l+'"')}this["_"+l](t)},_array:function(t,o){o=void 0!==o?o:!1!==e.unorderedArrays;var i=this;if(n("array:"+t.length+":"),!o||t.length<=1)return t.forEach(function(e){return i.dispatch(e)});var a=[],o=t.map(function(t){var n=new _,o=r.slice();return b(e,n,o).dispatch(t),a=a.concat(o.slice(r.length)),n.read().toString()});return r=r.concat(a),o.sort(),this._array(o,!1)},_date:function(e){return n("date:"+e.toJSON())},_symbol:function(e){return n("symbol:"+e.toString())},_error:function(e){return n("error:"+e.toString())},_boolean:function(e){return n("bool:"+e.toString())},_string:function(e){n("string:"+e.length+":"),n(e.toString())},_function:function(t){n("fn:"),v(t)?this.dispatch("[native]"):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return n("number:"+e.toString())},_xml:function(e){return n("xml:"+e.toString())},_null:function(){return n("Null")},_undefined:function(){return n("Undefined")},_regexp:function(e){return n("regex:"+e.toString())},_uint8array:function(e){return n("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return n("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return n("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return n("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return n("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return n("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return n("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return n("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return n("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return n("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return n("url:"+e.toString())},_map:function(t){return n("map:"),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_set:function(t){return n("set:"),t=Array.from(t),this._array(t,!1!==e.unorderedSets)},_file:function(e){return n("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(e.ignoreUnknown)return n("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return n("domwindow")},_bigint:function(e){return n("bigint:"+e.toString())},_process:function(){return n("process")},_timer:function(){return n("timer")},_pipe:function(){return n("pipe")},_tcp:function(){return n("tcp")},_udp:function(){return n("udp")},_tty:function(){return n("tty")},_statwatcher:function(){return n("statwatcher")},_securecontext:function(){return n("securecontext")},_connection:function(){return n("connection")},_zlib:function(){return n("zlib")},_context:function(){return n("context")},_nodescript:function(){return n("nodescript")},_httpparser:function(){return n("httpparser")},_dataview:function(){return n("dataview")},_signal:function(){return n("signal")},_fsevent:function(){return n("fsevent")},_tlswrap:function(){return n("tlswrap")}}}function _(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}r.writeToStream=function(e,t,r){return void 0===r&&(r=t,t={}),b(t=g(e,t),r).dispatch(e)}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,r){(function(e,t,n,o,i,a,l,s,c){!function(e){"use strict";var t="u">typeof Uint8Array?Uint8Array:Array;function r(e){return 43===(e=e.charCodeAt(0))||45===e?62:47===e||95===e?63:e<48?-1:e<58?e-48+26+26:e<91?e-65:e<123?e-97+26:void 0}e.toByteArray=function(e){if(0<e.length%4)throw Error("Invalid string. Length must be a multiple of 4");var n,o,i=e.length,i="="===e.charAt(i-2)?2:+("="===e.charAt(i-1)),a=new t(3*e.length/4-i),l=0<i?e.length-4:e.length,s=0;function c(e){a[s++]=e}for(n=0;n<l;n+=4)c((0xff0000&(o=r(e.charAt(n))<<18|r(e.charAt(n+1))<<12|r(e.charAt(n+2))<<6|r(e.charAt(n+3))))>>16),c((65280&o)>>8),c(255&o);return 2==i?c(255&(o=r(e.charAt(n))<<2|r(e.charAt(n+1))>>4)):1==i&&(c((o=r(e.charAt(n))<<10|r(e.charAt(n+1))<<4|r(e.charAt(n+2))>>2)>>8&255),c(255&o)),a},e.fromByteArray=function(e){var t,r,n,o,i=e.length%3,a="";function l(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,n=e.length-i;t<n;t+=3)a+=l((o=r=(e[t]<<16)+(e[t+1]<<8)+e[t+2])>>18&63)+l(o>>12&63)+l(o>>6&63)+l(63&o);switch(i){case 1:a=(a+=l((r=e[e.length-1])>>2))+l(r<<4&63)+"==";break;case 2:a=(a=(a+=l((r=(e[e.length-2]<<8)+e[e.length-1])>>10))+l(r>>4&63))+l(r<<2&63)+"="}return a}}(void 0===r?this.base64js={}:r)}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(e,t,r){(function(t,n,o,i,a,l,s,c,u){var d=e("base64-js"),p=e("ieee754");function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var n,i,a,l,s=typeof e;if("base64"===t&&"string"==s)for(e=(l=e).trim?l.trim():l.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==s)n=I(e);else if("string"==s)n=o.byteLength(e,t);else{if("object"!=s)throw Error("First argument needs to be a number, array or string.");n=I(e.length)}if(o._useTypedArrays?i=o._augment(new Uint8Array(n)):((i=this).length=n,i._isBuffer=!0),o._useTypedArrays&&"number"==typeof e.byteLength)i._set(e);else if(E(l=e)||o.isBuffer(l)||l&&"object"==typeof l&&"number"==typeof l.length)for(a=0;a<n;a++)o.isBuffer(e)?i[a]=e.readUInt8(a):i[a]=e[a];else if("string"==s)i.write(e,0,t);else if("number"==s&&!o._useTypedArrays&&!r)for(a=0;a<n;a++)i[a]=0;return i}function h(e,t,r,n){n||(L("boolean"==typeof r,"missing or invalid endian"),L(null!=t,"missing offset"),L(t+1<e.length,"Trying to read beyond buffer length"));var o,n=e.length;if(!(n<=t))return r?(o=e[t],t+1<n&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<n&&(o|=e[t+1])),o}function f(e,t,r,n){n||(L("boolean"==typeof r,"missing or invalid endian"),L(null!=t,"missing offset"),L(t+3<e.length,"Trying to read beyond buffer length"));var o,n=e.length;if(!(n<=t))return r?(t+2<n&&(o=e[t+2]<<16),t+1<n&&(o|=e[t+1]<<8),o|=e[t],t+3<n&&(o+=e[t+3]<<24>>>0)):(t+1<n&&(o=e[t+1]<<16),t+2<n&&(o|=e[t+2]<<8),t+3<n&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function m(e,t,r,n){if(n||(L("boolean"==typeof r,"missing or invalid endian"),L(null!=t,"missing offset"),L(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return 32768&(n=h(e,t,r,!0))?-1*(65535-n+1):n}function g(e,t,r,n){if(n||(L("boolean"==typeof r,"missing or invalid endian"),L(null!=t,"missing offset"),L(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return 0x80000000&(n=f(e,t,r,!0))?-1*(0xffffffff-n+1):n}function v(e,t,r,n){return n||(L("boolean"==typeof r,"missing or invalid endian"),L(t+3<e.length,"Trying to read beyond buffer length")),p.read(e,t,r,23,4)}function b(e,t,r,n){return n||(L("boolean"==typeof r,"missing or invalid endian"),L(t+7<e.length,"Trying to read beyond buffer length")),p.read(e,t,r,52,8)}function _(e,t,r,n,o){if(o||(L(null!=t,"missing value"),L("boolean"==typeof n,"missing or invalid endian"),L(null!=r,"missing offset"),L(r+1<e.length,"trying to write beyond buffer length"),N(t,65535)),!((o=e.length)<=r))for(var i=0,a=Math.min(o-r,2);i<a;i++)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function x(e,t,r,n,o){if(o||(L(null!=t,"missing value"),L("boolean"==typeof n,"missing or invalid endian"),L(null!=r,"missing offset"),L(r+3<e.length,"trying to write beyond buffer length"),N(t,0xffffffff)),!((o=e.length)<=r))for(var i=0,a=Math.min(o-r,4);i<a;i++)e[r+i]=t>>>8*(n?i:3-i)&255}function k(e,t,r,n,o){o||(L(null!=t,"missing value"),L("boolean"==typeof n,"missing or invalid endian"),L(null!=r,"missing offset"),L(r+1<e.length,"Trying to write beyond buffer length"),O(t,32767,-32768)),e.length<=r||_(e,0<=t?t:65535+t+1,r,n,o)}function y(e,t,r,n,o){o||(L(null!=t,"missing value"),L("boolean"==typeof n,"missing or invalid endian"),L(null!=r,"missing offset"),L(r+3<e.length,"Trying to write beyond buffer length"),O(t,0x7fffffff,-0x80000000)),e.length<=r||x(e,0<=t?t:0xffffffff+t+1,r,n,o)}function w(e,t,r,n,o){o||(L(null!=t,"missing value"),L("boolean"==typeof n,"missing or invalid endian"),L(null!=r,"missing offset"),L(r+3<e.length,"Trying to write beyond buffer length"),D(t,34028234663852886e22,-34028234663852886e22)),e.length<=r||p.write(e,t,r,n,23,4)}function j(e,t,r,n,o){o||(L(null!=t,"missing value"),L("boolean"==typeof n,"missing or invalid endian"),L(null!=r,"missing offset"),L(r+7<e.length,"Trying to write beyond buffer length"),D(t,17976931348623157e292,-17976931348623157e292)),e.length<=r||p.write(e,t,r,n,52,8)}r.Buffer=o,r.SlowBuffer=o,r.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null==e||!e._isBuffer)},o.byteLength=function(e,t){var r;switch(e+="",t||"utf8"){case"hex":r=e.length/2;break;case"utf8":case"utf-8":r=P(e).length;break;case"ascii":case"binary":case"raw":r=e.length;break;case"base64":r=T(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*e.length;break;default:throw Error("Unknown encoding")}return r},o.concat=function(e,t){if(L(E(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];if("number"!=typeof t)for(i=t=0;i<e.length;i++)t+=e[i].length;for(var r=new o(t),n=0,i=0;i<e.length;i++){var a=e[i];a.copy(r,n),n+=a.length}return r},o.prototype.write=function(e,t,r,n){isFinite(t)?isFinite(r)||(n=r,r=void 0):(h=n,n=t,t=r,r=h),t=Number(t)||0;var i,a,l,s,c,u,d,p,h=this.length-t;switch((!r||h<(r=Number(r)))&&(r=h),n=String(n||"utf8").toLowerCase()){case"hex":c=function(e,t,r,n){r=Number(r)||0;var i=e.length-r;(!n||i<(n=Number(n)))&&(n=i),L((i=t.length)%2==0,"Invalid hex string"),i/2<n&&(n=i/2);for(var a=0;a<n;a++){var l=parseInt(t.substr(2*a,2),16);L(!isNaN(l),"Invalid hex string"),e[r+a]=l}return o._charsWritten=2*a,a}(this,e,t,r);break;case"utf8":case"utf-8":u=this,d=t,p=r,c=o._charsWritten=A(P(e),u,d,p);break;case"ascii":case"binary":i=t,a=r,c=o._charsWritten=A(function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}(e),this,i,a);break;case"base64":u=this,d=t,p=r,c=o._charsWritten=A(T(e),u,d,p);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":l=t,s=r,c=o._charsWritten=A(function(e){for(var t,r,n=[],o=0;o<e.length;o++)t=(r=e.charCodeAt(o))>>8,n.push(r%=256),n.push(t);return n}(e),this,l,s);break;default:throw Error("Unknown encoding")}return c},o.prototype.toString=function(e,t,r){var n,o,i;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(r=void 0!==r?Number(r):this.length)===t)return"";switch(e){case"hex":n=function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||n<r)&&(r=n);for(var o="",i=t;i<r;i++)o+=C(e[i]);return o}(this,t,r);break;case"utf8":case"utf-8":n=function(e,t,r){var n="",o="";r=Math.min(e.length,r);for(var i=t;i<r;i++)e[i]<=127?(n+=M(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return n+M(o)}(this,t,r);break;case"ascii":case"binary":n=function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;o++)n+=String.fromCharCode(e[o]);return n}(this,t,r);break;case"base64":i=r,n=0===(o=t)&&i===this.length?d.fromByteArray(this):d.fromByteArray(this.slice(o,i));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=function(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,t,r);break;default:throw Error("Unknown encoding")}return n},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,r,n){if(t=t||0,(n=n||0===n?n:this.length)!==(r=r||0)&&0!==e.length&&0!==this.length){L(r<=n,"sourceEnd < sourceStart"),L(0<=t&&t<e.length,"targetStart out of bounds"),L(0<=r&&r<this.length,"sourceStart out of bounds"),L(0<=n&&n<=this.length,"sourceEnd out of bounds"),n>this.length&&(n=this.length);var i=(n=e.length-t<n-r?e.length-t+r:n)-r;if(i<100||!o._useTypedArrays)for(var a=0;a<i;a++)e[a+t]=this[a+r];else e._set(this.subarray(r,r+i),t)}},o.prototype.slice=function(e,t){var r=this.length;if(e=S(e,r,0),t=S(t,r,r),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var n=t-e,i=new o(n,void 0,!0),a=0;a<n;a++)i[a]=this[a+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(L(null!=e,"missing offset"),L(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return h(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return h(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return f(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return f(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(L(null!=e,"missing offset"),L(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},o.prototype.readInt16LE=function(e,t){return m(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return m(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return g(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return g(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return v(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return v(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return b(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return b(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,r){r||(L(null!=e,"missing value"),L(null!=t,"missing offset"),L(t<this.length,"trying to write beyond buffer length"),N(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,r){_(this,e,t,!0,r)},o.prototype.writeUInt16BE=function(e,t,r){_(this,e,t,!1,r)},o.prototype.writeUInt32LE=function(e,t,r){x(this,e,t,!0,r)},o.prototype.writeUInt32BE=function(e,t,r){x(this,e,t,!1,r)},o.prototype.writeInt8=function(e,t,r){r||(L(null!=e,"missing value"),L(null!=t,"missing offset"),L(t<this.length,"Trying to write beyond buffer length"),O(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,r):this.writeUInt8(255+e+1,t,r))},o.prototype.writeInt16LE=function(e,t,r){k(this,e,t,!0,r)},o.prototype.writeInt16BE=function(e,t,r){k(this,e,t,!1,r)},o.prototype.writeInt32LE=function(e,t,r){y(this,e,t,!0,r)},o.prototype.writeInt32BE=function(e,t,r){y(this,e,t,!1,r)},o.prototype.writeFloatLE=function(e,t,r){w(this,e,t,!0,r)},o.prototype.writeFloatBE=function(e,t,r){w(this,e,t,!1,r)},o.prototype.writeDoubleLE=function(e,t,r){j(this,e,t,!0,r)},o.prototype.writeDoubleBE=function(e,t,r){j(this,e,t,!1,r)},o.prototype.fill=function(e,t,r){if(t=t||0,r=r||this.length,L("number"==typeof(e="string"==typeof(e=e||0)?e.charCodeAt(0):e)&&!isNaN(e),"value is not a number"),L(t<=r,"end < start"),r!==t&&0!==this.length){L(0<=t&&t<this.length,"start out of bounds"),L(0<=r&&r<=this.length,"end out of bounds");for(var n=t;n<r;n++)this[n]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=C(this[n]),n===r.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("u"<typeof Uint8Array)throw Error("Buffer.toArrayBuffer not supported in this browser");if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,r=e.length;t<r;t+=1)e[t]=this[t];return e.buffer};var z=o.prototype;function S(e,t,r){return"number"!=typeof e?r:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function I(e){return(e=~~Math.ceil(+e))<0?0:e}function E(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function C(e){return e<16?"0"+e.toString(16):e.toString(16)}function P(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(e.charCodeAt(r));else for(var o=r,i=(55296<=n&&n<=57343&&r++,encodeURIComponent(e.slice(o,r+1)).substr(1).split("%")),a=0;a<i.length;a++)t.push(parseInt(i[a],16))}return t}function T(e){return d.toByteArray(e)}function A(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);o++)t[o+r]=e[o];return o}function M(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function N(e,t){L("number"==typeof e,"cannot write a non-number as a number"),L(0<=e,"specified a negative value for writing an unsigned value"),L(e<=t,"value is larger than maximum value for type"),L(Math.floor(e)===e,"value has a fractional component")}function O(e,t,r){L("number"==typeof e,"cannot write a non-number as a number"),L(e<=t,"value larger than maximum allowed value"),L(r<=e,"value smaller than minimum allowed value"),L(Math.floor(e)===e,"value has a fractional component")}function D(e,t,r){L("number"==typeof e,"cannot write a non-number as a number"),L(e<=t,"value larger than maximum allowed value"),L(r<=e,"value smaller than minimum allowed value")}function L(e,t){if(!e)throw Error(t||"Failed assertion")}o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=z.get,e.set=z.set,e.write=z.write,e.toString=z.toString,e.toLocaleString=z.toString,e.toJSON=z.toJSON,e.copy=z.copy,e.slice=z.slice,e.readUInt8=z.readUInt8,e.readUInt16LE=z.readUInt16LE,e.readUInt16BE=z.readUInt16BE,e.readUInt32LE=z.readUInt32LE,e.readUInt32BE=z.readUInt32BE,e.readInt8=z.readInt8,e.readInt16LE=z.readInt16LE,e.readInt16BE=z.readInt16BE,e.readInt32LE=z.readInt32LE,e.readInt32BE=z.readInt32BE,e.readFloatLE=z.readFloatLE,e.readFloatBE=z.readFloatBE,e.readDoubleLE=z.readDoubleLE,e.readDoubleBE=z.readDoubleBE,e.writeUInt8=z.writeUInt8,e.writeUInt16LE=z.writeUInt16LE,e.writeUInt16BE=z.writeUInt16BE,e.writeUInt32LE=z.writeUInt32LE,e.writeUInt32BE=z.writeUInt32BE,e.writeInt8=z.writeInt8,e.writeInt16LE=z.writeInt16LE,e.writeInt16BE=z.writeInt16BE,e.writeInt32LE=z.writeInt32LE,e.writeInt32BE=z.writeInt32BE,e.writeFloatLE=z.writeFloatLE,e.writeFloatBE=z.writeFloatBE,e.writeDoubleLE=z.writeDoubleLE,e.writeDoubleBE=z.writeDoubleBE,e.fill=z.fill,e.inspect=z.inspect,e.toArrayBuffer=z.toArrayBuffer,e}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(e,t,r){(function(r,n,o,i,a,l,s,c,u){var o=e("buffer").Buffer,d=new o(4);d.fill(0),t.exports={hash:function(e,t,r,n){for(var i=t(function(e,t){e.length%4!=0&&(r=e.length+(4-e.length%4),e=o.concat([e,d],r));for(var r,n=[],i=t?e.readInt32BE:e.readInt32LE,a=0;a<e.length;a+=4)n.push(i.call(e,a));return n}(e=o.isBuffer(e)?e:new o(e),n),8*e.length),t=n,a=new o(r),l=t?a.writeInt32BE:a.writeInt32LE,s=0;s<i.length;s++)l.call(a,i[s],4*s,!0);return a}}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(e,t,r){(function(t,n,o,i,a,l,s,c,u){var o=e("buffer").Buffer,d=e("./sha"),p=e("./sha256"),h=e("./rng"),f={sha1:d,sha256:p,md5:e("./md5")},m=new o(64);function g(e,t){var r=f[e=e||"sha1"],n=[];return r||v("algorithm:",e,"is not yet supported"),{update:function(e){return o.isBuffer(e)||(e=new o(e)),n.push(e),e.length,this},digest:function(e){var i=o.concat(n),i=t?function(e,t,r){o.isBuffer(t)||(t=new o(t)),o.isBuffer(r)||(r=new o(r)),t.length>64?t=e(t):t.length<64&&(t=o.concat([t,m],64));for(var n=new o(64),i=new o(64),a=0;a<64;a++)n[a]=54^t[a],i[a]=92^t[a];return r=e(o.concat([n,r])),e(o.concat([i,r]))}(r,t,i):r(i);return n=null,e?i.toString(e):i}}}function v(){var e=[].slice.call(arguments).join(" ");throw Error([e,"we accept pull requests\nhttp://github.com/dominictarr/crypto-browserify"].join("\n"))}m.fill(0),r.createHash=function(e){return g(e)},r.createHmac=g,r.randomBytes=function(e,t){if(!t||!t.call)return new o(h(e));try{t.call(this,void 0,new o(h(e)))}catch(e){t(e)}};var b,_=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],x=function(e){r[e]=function(){v("sorry,",e,"is not implemented yet")}};for(b in _)x(_[b])}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(e,t,r){(function(r,n,o,i,a,l,s,c,u){var d=e("./helpers");function p(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=0x67452301,n=-0x10325477,o=-0x67452302,i=0x10325476,a=0;a<e.length;a+=16){var l=r,s=n,c=o,u=i,r=f(r,n,o,i,e[a+0],7,-0x28955b88),i=f(i,r,n,o,e[a+1],12,-0x173848aa),o=f(o,i,r,n,e[a+2],17,0x242070db),n=f(n,o,i,r,e[a+3],22,-0x3e423112);r=f(r,n,o,i,e[a+4],7,-0xa83f051),i=f(i,r,n,o,e[a+5],12,0x4787c62a),o=f(o,i,r,n,e[a+6],17,-0x57cfb9ed),n=f(n,o,i,r,e[a+7],22,-0x2b96aff),r=f(r,n,o,i,e[a+8],7,0x698098d8),i=f(i,r,n,o,e[a+9],12,-0x74bb0851),o=f(o,i,r,n,e[a+10],17,-42063),n=f(n,o,i,r,e[a+11],22,-0x76a32842),r=f(r,n,o,i,e[a+12],7,0x6b901122),i=f(i,r,n,o,e[a+13],12,-0x2678e6d),o=f(o,i,r,n,e[a+14],17,-0x5986bc72),r=m(r,n=f(n,o,i,r,e[a+15],22,0x49b40821),o,i,e[a+1],5,-0x9e1da9e),i=m(i,r,n,o,e[a+6],9,-0x3fbf4cc0),o=m(o,i,r,n,e[a+11],14,0x265e5a51),n=m(n,o,i,r,e[a+0],20,-0x16493856),r=m(r,n,o,i,e[a+5],5,-0x29d0efa3),i=m(i,r,n,o,e[a+10],9,0x2441453),o=m(o,i,r,n,e[a+15],14,-0x275e197f),n=m(n,o,i,r,e[a+4],20,-0x182c0438),r=m(r,n,o,i,e[a+9],5,0x21e1cde6),i=m(i,r,n,o,e[a+14],9,-0x3cc8f82a),o=m(o,i,r,n,e[a+3],14,-0xb2af279),n=m(n,o,i,r,e[a+8],20,0x455a14ed),r=m(r,n,o,i,e[a+13],5,-0x561c16fb),i=m(i,r,n,o,e[a+2],9,-0x3105c08),o=m(o,i,r,n,e[a+7],14,0x676f02d9),r=g(r,n=m(n,o,i,r,e[a+12],20,-0x72d5b376),o,i,e[a+5],4,-378558),i=g(i,r,n,o,e[a+8],11,-0x788e097f),o=g(o,i,r,n,e[a+11],16,0x6d9d6122),n=g(n,o,i,r,e[a+14],23,-0x21ac7f4),r=g(r,n,o,i,e[a+1],4,-0x5b4115bc),i=g(i,r,n,o,e[a+4],11,0x4bdecfa9),o=g(o,i,r,n,e[a+7],16,-0x944b4a0),n=g(n,o,i,r,e[a+10],23,-0x41404390),r=g(r,n,o,i,e[a+13],4,0x289b7ec6),i=g(i,r,n,o,e[a+0],11,-0x155ed806),o=g(o,i,r,n,e[a+3],16,-0x2b10cf7b),n=g(n,o,i,r,e[a+6],23,0x4881d05),r=g(r,n,o,i,e[a+9],4,-0x262b2fc7),i=g(i,r,n,o,e[a+12],11,-0x1924661b),o=g(o,i,r,n,e[a+15],16,0x1fa27cf8),r=v(r,n=g(n,o,i,r,e[a+2],23,-0x3b53a99b),o,i,e[a+0],6,-0xbd6ddbc),i=v(i,r,n,o,e[a+7],10,0x432aff97),o=v(o,i,r,n,e[a+14],15,-0x546bdc59),n=v(n,o,i,r,e[a+5],21,-0x36c5fc7),r=v(r,n,o,i,e[a+12],6,0x655b59c3),i=v(i,r,n,o,e[a+3],10,-0x70f3336e),o=v(o,i,r,n,e[a+10],15,-1051523),n=v(n,o,i,r,e[a+1],21,-0x7a7ba22f),r=v(r,n,o,i,e[a+8],6,0x6fa87e4f),i=v(i,r,n,o,e[a+15],10,-0x1d31920),o=v(o,i,r,n,e[a+6],15,-0x5cfebcec),n=v(n,o,i,r,e[a+13],21,0x4e0811a1),r=v(r,n,o,i,e[a+4],6,-0x8ac817e),i=v(i,r,n,o,e[a+11],10,-0x42c50dcb),o=v(o,i,r,n,e[a+2],15,0x2ad7d2bb),n=v(n,o,i,r,e[a+9],21,-0x14792c6f),r=b(r,l),n=b(n,s),o=b(o,c),i=b(i,u)}return[r,n,o,i]}function h(e,t,r,n,o,i){return b((t=b(b(t,e),b(n,i)))<<o|t>>>32-o,r)}function f(e,t,r,n,o,i,a){return h(t&r|~t&n,e,t,o,i,a)}function m(e,t,r,n,o,i,a){return h(t&n|r&~n,e,t,o,i,a)}function g(e,t,r,n,o,i,a){return h(t^r^n,e,t,o,i,a)}function v(e,t,r,n,o,i,a){return h(r^(t|~n),e,t,o,i,a)}function b(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}t.exports=function(e){return d.hash(e,p,16)}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,t,r){(function(e,r,n,o,i,a,l,s,c){t.exports=function(e){for(var t,r=Array(e),n=0;n<e;n++)0==(3&n)&&(t=0x100000000*Math.random()),r[n]=t>>>((3&n)<<3)&255;return r}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(e,t,r){(function(r,n,o,i,a,l,s,c,u){var d=e("./helpers");function p(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var r,n,o,i=Array(80),a=0x67452301,l=-0x10325477,s=-0x67452302,c=0x10325476,u=-0x3c2d1e10,d=0;d<e.length;d+=16){for(var p=a,m=l,g=s,v=c,b=u,_=0;_<80;_++){i[_]=_<16?e[d+_]:f(i[_-3]^i[_-8]^i[_-14]^i[_-16],1);var x=h(h(f(a,5),(x=l,n=s,o=c,(r=_)<20?x&n|~x&o:!(r<40)&&r<60?x&n|x&o|n&o:x^n^o)),h(h(u,i[_]),(r=_)<20?0x5a827999:r<40?0x6ed9eba1:r<60?-0x70e44324:-0x359d3e2a)),u=c,c=s,s=f(l,30),l=a,a=x}a=h(a,p),l=h(l,m),s=h(s,g),c=h(c,v),u=h(u,b)}return[a,l,s,c,u]}function h(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(e,t){return e<<t|e>>>32-t}t.exports=function(e){return d.hash(e,p,20,!0)}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(e,t,r){(function(r,n,o,i,a,l,s,c,u){function d(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function p(e,t){var r,n=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2],o=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],i=Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var a,l,s=0;s<e.length;s+=16){for(var c=o[0],u=o[1],p=o[2],h=o[3],g=o[4],v=o[5],b=o[6],_=o[7],x=0;x<64;x++)i[x]=x<16?e[x+s]:d(d(d(f(l=i[x-2],17)^f(l,19)^m(l,10),i[x-7]),f(l=i[x-15],7)^f(l,18)^m(l,3)),i[x-16]),r=d(d(d(d(_,f(l=g,6)^f(l,11)^f(l,25)),g&v^~g&b),n[x]),i[x]),a=d(f(a=c,2)^f(a,13)^f(a,22),c&u^c&p^u&p),_=b,b=v,v=g,g=d(h,r),h=p,p=u,u=c,c=d(r,a);o[0]=d(c,o[0]),o[1]=d(u,o[1]),o[2]=d(p,o[2]),o[3]=d(h,o[3]),o[4]=d(g,o[4]),o[5]=d(v,o[5]),o[6]=d(b,o[6]),o[7]=d(_,o[7])}return o}var h=e("./helpers"),f=function(e,t){return e>>>t|e<<32-t},m=function(e,t){return e>>>t};t.exports=function(e){return h.hash(e,p,32,!0)}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,r){(function(e,t,n,o,i,a,l,s,c){r.read=function(e,t,r,n,o){var i,a,l=8*o-n-1,s=(1<<l)-1,c=s>>1,u=-7,d=r?o-1:0,p=r?-1:1,o=e[t+d];for(d+=p,i=o&(1<<-u)-1,o>>=-u,u+=l;0<u;i=256*i+e[t+d],d+=p,u-=8);for(a=i&(1<<-u)-1,i>>=-u,u+=n;0<u;a=256*a+e[t+d],d+=p,u-=8);if(0===i)i=1-c;else{if(i===s)return a?0/0:1/0*(o?-1:1);a+=Math.pow(2,n),i-=c}return(o?-1:1)*a*Math.pow(2,i-n)},r.write=function(e,t,r,n,o,i){var a,l,s=8*i-o-1,c=(1<<s)-1,u=c>>1,d=5960464477539062e-23*(23===o),p=n?0:i-1,h=n?1:-1,i=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||1/0===t?(l=+!!isNaN(t),a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-a))<1&&(a--,n*=2),2<=(t+=1<=a+u?d/n:d*Math.pow(2,1-u))*n&&(a++,n/=2),c<=a+u?(l=0,a=c):1<=a+u?(l=(t*n-1)*Math.pow(2,o),a+=u):(l=t*Math.pow(2,u-1)*Math.pow(2,o),a=0));8<=o;e[r+p]=255&l,p+=h,l/=256,o-=8);for(a=a<<o|l,s+=o;0<s;e[r+p]=255&a,p+=h,a/=256,s-=8);e[r+p-h]|=128*i}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(e,t,r){(function(e,r,n,o,i,a,l,s,c){var u,d,p;function h(){}(e=t.exports={}).nextTick=(d="u">typeof window&&window.setImmediate,p="u">typeof window&&window.postMessage&&window.addEventListener,d?function(e){return window.setImmediate(e)}:p?(u=[],window.addEventListener("message",function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<u.length&&u.shift()())},!0),function(e){u.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=h,e.addListener=h,e.once=h,e.off=h,e.removeListener=h,e.removeAllListeners=h,e.emit=h,e.binding=function(e){throw Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),"u">typeof self?self:"u">typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)}]);