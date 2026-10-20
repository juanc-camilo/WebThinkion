module.exports=[[94637,a=>{let b,c,d,e,f,g,h,i,j,k;var l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a$,a_,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b$,b_,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct=a.i(87924),cu=a.i(72131),cv=a.i(50944),cw=a.i(18419),cx=a.i(47394),cy=a.i(87302),cz=a.i(37317),cA=a.i(1369),cB=a.i(21521);(0,cB.$)(),(0,cB.$)(),(0,cB.$)(),(0,cB.$)(),(0,cB.$)(),(0,cB.$)();var cC=(a,b=a)=>({slot:({value:c,propName:d,field:e,isReadOnly:f})=>{let g=f?b:a;return a=>g((0,cB.s)((0,cB.X)({allow:(null==e?void 0:e.type)==="slot"?e.allow:[],disallow:(null==e?void 0:e.type)==="slot"?e.disallow:[]},a),{zone:d,content:c}))}});function cD(a,b,c){let d={};return Object.keys(a).forEach(e=>{d[e]=d=>{var{parentId:f}=d,g=(0,cB.H)(d,["parentId"]);let h=g.propPath.replace(/\[\d+\]/g,"[*]"),i=(null==b?void 0:b[g.propPath])||(null==b?void 0:b[h])||c||!1,j=a[e];return null==j?void 0:j((0,cB.s)((0,cB.X)({},g),{field:g.field,isReadOnly:i,componentId:f}))}}),d}function cE(a,b,c,d=c,e,f){var g;let h,i;return g=cC(c,d),h=(0,cu.useMemo)(()=>cD(g,e,f),[g,e,f]),i=(0,cu.useMemo)(()=>(0,cA.t)(b,h,a).props,[a,b,h]),(0,cu.useMemo)(()=>(0,cB.X)((0,cB.X)({},b.props),i),[b.props,i])}(0,cB.$)(),(0,cB.$)(),(0,cB.$)(),(0,cB.$)(),(0,cB.$)();var cF=(0,cz.f)("RichTextEditor",cx.f);function cG({content:a}){return(0,ct.jsx)("div",{className:cF(),children:(0,ct.jsx)("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:a}})})}(0,cB.$)();var cH=(a,b,c)=>{if(!a)return null;if(0===b.length)return c(a);let[d,...e]=b;return Array.isArray(a)?a.map(a=>cH(a,b,c)):(0,cB.s)((0,cB.X)({},a),{[d]:cH(a[d],e,c)})},cI=(0,cu.lazy)(()=>a.A(27201).then(a=>({default:a.RichTextRender})));function cJ(a,b){let c=(a,b=[])=>{if(!a)return[];let d=[];for(let[e,f]of Object.entries(a)){let a=[...b,e];"richtext"===f.type&&d.push({path:a,field:f}),"array"===f.type&&"arrayFields"in f&&d.push(...c(f.arrayFields,a)),"object"===f.type&&"objectFields"in f&&d.push(...c(f.objectFields,a))}return d},d=(0,cu.useMemo)(()=>c(a),[a]);return(0,cu.useMemo)(()=>{if(!(null==d?void 0:d.length))return{};let a=(0,cB.X)({},b);for(let{path:b,field:c}of d)a=cH(a,b,a=>(0,ct.jsx)(cu.Suspense,{fallback:(0,ct.jsx)(cG,{content:a}),children:(0,ct.jsx)(cI,{content:a,field:c})},b.join(".")));return a},[d,b,a])}(0,cB.$)();var cK=a=>(0,ct.jsx)(cM,(0,cB.X)({},a)),cL=({config:a,item:b,metadata:c})=>{let d=a.components[b.type],e=cE(a,b,b=>(0,ct.jsx)(cK,(0,cB.s)((0,cB.X)({},b),{config:a,metadata:c}))),f=cJ(d.fields,e);return(0,ct.jsx)(d.render,(0,cB.s)((0,cB.X)((0,cB.X)({},e),f),{puck:(0,cB.s)((0,cB.X)({},e.puck),{metadata:c||{}})}))},cM=(0,cu.forwardRef)(function({className:a,style:b,content:c,config:d,metadata:e,as:f},g){return(0,ct.jsx)(null!=f?f:"div",{className:a,style:b,ref:g,children:c.map(a=>d.components[a.type]?(0,ct.jsx)(cL,{config:d,item:a,metadata:e},a.props.id):null)})}),cN=a.i(35899),cO=a.i(64537),cP=a.i(10324),cQ=cB,cR=ct;let cS=(a,b)=>{let c=a instanceof Map?a:new Map(a.entries()),d=b instanceof Map?b:new Map(b.entries());if(c.size!==d.size)return!1;for(let[a,b]of c)if(!d.has(a)||!Object.is(b,d.get(a)))return!1;return!0};function cT(a){let b=cu.default.useRef(void 0);return c=>{let d=a(c);return!function(a,b){if(Object.is(a,b))return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b||Object.getPrototypeOf(a)!==Object.getPrototypeOf(b))return!1;if(Symbol.iterator in a&&Symbol.iterator in b){if("entries"in a&&"entries"in b)return cS(a,b);let c=a[Symbol.iterator](),d=b[Symbol.iterator](),e=c.next(),f=d.next();for(;!e.done&&!f.done;){if(!Object.is(e.value,f.value))return!1;e=c.next(),f=d.next()}return!!e.done&&!!f.done}return cS({entries:()=>Object.entries(a)},{entries:()=>Object.entries(b)})}(b.current,d)?b.current=d:b.current}}var cU=a.i(12903),cV=a.i(20226),cW=a.i(62435);let cX=Symbol.for("preact-signals");function cY(){if(c0>1)return void c0--;let a,b=!1,c=c_;for(c_=void 0;void 0!==c;){let a=c.S;if(a.v===c.v)for(let b=a.t;void 0!==b;b=b.x)b.i===c.i&&(b.i=a.i);c=c.o}for(;void 0!==d;){let c=d;for(d=void 0,c1++;void 0!==c;){let d=c.u;if(c.u=void 0,c.f&=-3,!(8&c.f)&&c8(c))try{c.c()}catch(c){b||(a=c,b=!0)}c=d}}if(c1=0,c0--,b)throw a}function cZ(a){if(c0>0)return a();c3=++c2,c0++;try{return a()}finally{cY()}}function c$(a){let d=b,e=c;b=void 0,c=void 0;try{return a()}finally{b=d,c=e}}let c_,c0=0,c1=0,c2=0,c3=0,c4=0;function c5(a){if(void 0===b)return;let c=a.n;return void 0===c||c.t!==b?(c={i:0,S:a,p:b.s,n:void 0,t:b,e:void 0,x:void 0,r:c},void 0!==b.s&&(b.s.n=c),b.s=c,a.n=c,32&b.f&&a.S(c),c):-1===c.i?(c.i=0,void 0!==c.n&&(c.n.p=c.p,void 0!==c.p&&(c.p.n=c.n),c.p=b.s,c.n=void 0,b.s.n=c,b.s=c),c):void 0}function c6(a,b){this.v=a,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=null==b?void 0:b.watched,this.Z=null==b?void 0:b.unwatched,this.name=null==b?void 0:b.name}function c7(a,b){return new c6(a,b)}function c8(a){for(let b=a.s;void 0!==b;b=b.n)if(b.S.i!==b.i||!b.S.h()||b.S.i!==b.i)return!0;return!1}function c9(a){for(let b=a.s;void 0!==b;b=b.n){let c=b.S.n;if(void 0!==c&&(b.r=c),b.S.n=b,b.i=-1,void 0===b.n){a.s=b;break}}}function da(a){let b,c=a.s;for(;void 0!==c;){let a=c.p;-1===c.i?(c.S.U(c),void 0!==a&&(a.n=c.n),void 0!==c.n&&(c.n.p=a)):b=c,c.S.n=c.r,void 0!==c.r&&(c.r=void 0),c=a}a.s=b}function db(a,b){c6.call(this,void 0,b),this.x=a,this.s=void 0,this.g=c4-1,this.f=4}function dc(a){let c=a.m;if(a.m=void 0,"function"==typeof c){c0++;let d=b;b=void 0;try{c()}catch(b){throw a.f&=-2,a.f|=8,dd(a),b}finally{b=d,cY()}}}function dd(a){for(let b=a.s;void 0!==b;b=b.n)b.S.U(b);a.x=void 0,a.s=void 0,dc(a)}function de(a){if(b!==this)throw Error("Out-of-order effect");da(this),b=a,this.f&=-2,8&this.f&&dd(this),cY()}function df(a,b){this.x=a,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=null==b?void 0:b.name,c&&c.push(this)}function dg(a,b){let c=new df(a,b);try{c.c()}catch(a){throw c.d(),a}let d=c.d.bind(c);return d[Symbol.dispose]=d,d}c6.prototype.brand=cX,c6.prototype.h=function(){return!0},c6.prototype.S=function(a){let b=this.t;b!==a&&void 0===a.e&&(a.x=b,this.t=a,void 0!==b?b.e=a:c$(()=>{var a;null==(a=this.W)||a.call(this)}))},c6.prototype.U=function(a){if(void 0!==this.t){let b=a.e,c=a.x;void 0!==b&&(b.x=c,a.e=void 0),void 0!==c&&(c.e=b,a.x=void 0),a===this.t&&(this.t=c,void 0===c&&c$(()=>{var a;null==(a=this.Z)||a.call(this)}))}},c6.prototype.subscribe=function(a){return dg(()=>{let b=this.value;c$(()=>a(b))},{name:"sub"})},c6.prototype.valueOf=function(){return this.value},c6.prototype.toString=function(){return this.value+""},c6.prototype.toJSON=function(){return this.value},c6.prototype.peek=function(){return c$(()=>this.value)},Object.defineProperty(c6.prototype,"value",{get(){let a=c5(this);return void 0!==a&&(a.i=this.i),this.v},set(a){if(a!==this.v){if(c1>100)throw Error("Cycle detected");0!==c0&&0===c1&&this.l!==c3&&(this.l=c3,c_={S:this,v:this.v,i:this.i,o:c_}),this.v=a,this.i++,c4++,c0++;try{for(let a=this.t;void 0!==a;a=a.x)a.t.N()}finally{cY()}}}}),db.prototype=new c6,db.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===c4))return!0;if(this.g=c4,this.f|=1,this.i>0&&!c8(this))return this.f&=-2,!0;let a=b;try{c9(this),b=this;let a=this.x();(16&this.f||this.v!==a||0===this.i)&&(this.v=a,this.f&=-17,this.i++)}catch(a){this.v=a,this.f|=16,this.i++}return b=a,da(this),this.f&=-2,!0},db.prototype.S=function(a){if(void 0===this.t){this.f|=36;for(let a=this.s;void 0!==a;a=a.n)a.S.S(a)}c6.prototype.S.call(this,a)},db.prototype.U=function(a){if(void 0!==this.t&&(c6.prototype.U.call(this,a),void 0===this.t)){this.f&=-33;for(let a=this.s;void 0!==a;a=a.n)a.S.U(a)}},db.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(let a=this.t;void 0!==a;a=a.x)a.t.N()}},Object.defineProperty(db.prototype,"value",{get(){if(1&this.f)throw Error("Cycle detected");let a=c5(this);if(this.h(),void 0!==a&&(a.i=this.i),16&this.f)throw this.v;return this.v}}),df.prototype.c=function(){let a=this.S();try{if(8&this.f||void 0===this.x)return;let a=this.x();"function"==typeof a&&(this.m=a)}finally{a()}},df.prototype.S=function(){if(1&this.f)throw Error("Cycle detected");this.f|=1,this.f&=-9,dc(this),c9(this),c0++;let a=b;return b=this,de.bind(this,a)},df.prototype.N=function(){2&this.f||(this.f|=2,this.u=d,d=this)},df.prototype.d=function(){this.f|=8,1&this.f||dd(this)},df.prototype.dispose=function(){this.d()};var dh=Object.create,di=Object.defineProperty,dj=Object.defineProperties,dk=Object.getOwnPropertyDescriptor,dl=Object.getOwnPropertyDescriptors,dm=Object.getOwnPropertySymbols,dn=Object.prototype.hasOwnProperty,dp=Object.prototype.propertyIsEnumerable,dq=a=>{throw TypeError(a)},dr=(a,b,c)=>b in a?di(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,ds=(a,b)=>di(a,"name",{value:b,configurable:!0}),dt=["class","method","getter","setter","accessor","field","value","get","set"],du=a=>void 0!==a&&"function"!=typeof a?dq("Function expected"):a,dv=(a,b,c,d,e)=>({kind:dt[a],name:b,metadata:d,addInitializer:a=>c._?dq("Already initialized"):e.push(du(a||null))}),dw=(a,b)=>{let c,d;return dr(b,(c="metadata",(d=Symbol[c])?d:Symbol.for("Symbol."+c)),a[3])},dx=(a,b,c,d)=>{for(var e=0,f=a[b>>1],g=f&&f.length;e<g;e++)1&b?f[e].call(c):d=f[e].call(c,d);return d},dy=(a,b,c,d,e,f)=>{var g,h,i,j,k,l=7&b,m=!!(8&b),n=!!(16&b),o=l>3?a.length+1:l?m?1:2:0,p=dt[l+5],q=l>3&&(a[o-1]=[]),r=a[o]||(a[o]=[]),s=l&&(n||m||(e=e.prototype),l<5&&(l>3||!n)&&dk(l<4?e:{get[c](){return dB(this,f)},set[c](a){return dD(this,f,a)}},c));l?n&&l<4&&ds(f,(l>2?"set ":l>1?"get ":"")+c):ds(e,c);for(var t=d.length-1;t>=0;t--)j=dv(l,c,i={},a[3],r),l&&(j.static=m,j.private=n,k=j.access={has:n?a=>dA(e,a):a=>c in a},3^l&&(k.get=n?a=>(1^l?dB:dE)(a,e,4^l?f:s.get):a=>a[c]),l>2&&(k.set=n?(a,b)=>dD(a,e,b,4^l?f:s.set):(a,b)=>a[c]=b)),h=(0,d[t])(l?l<4?n?f:s[p]:l>4?void 0:{get:s.get,set:s.set}:e,j),i._=1,4^l||void 0===h?du(h)&&(l>4?q.unshift(h):l?n?f=h:s[p]=h:e=h):"object"!=typeof h||null===h?dq("Object expected"):(du(g=h.get)&&(s.get=g),du(g=h.set)&&(s.set=g),du(g=h.init)&&q.unshift(g));return l||dw(a,e),s&&di(e,c,s),n?4^l?f:s:e},dz=(a,b,c)=>b.has(a)||dq("Cannot "+c),dA=(a,b)=>Object(b)!==b?dq('Cannot use the "in" operator on this value'):a.has(b),dB=(a,b,c)=>(dz(a,b,"read from private field"),c?c.call(a):b.get(a)),dC=(a,b,c)=>b.has(a)?dq("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),dD=(a,b,c,d)=>(dz(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),dE=(a,b,c)=>(dz(a,b,"access private method"),c);function dF(a,b){if(b){let c;return new db(()=>{let d=a();return d&&c&&b(c,d)?c:(c=d,d)},void 0)}return new db(a,void 0)}function dG(a,b){if(Object.is(a,b))return!0;if(null===a||null===b)return!1;if("function"==typeof a&&"function"==typeof b)return a===b;if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(let c of a)if(!b.has(c))return!1;return!0}if(Array.isArray(a))return!!Array.isArray(b)&&a.length===b.length&&!a.some((a,c)=>!dG(a,b[c]));if("object"==typeof a&&"object"==typeof b){let c=Object.keys(a),d=Object.keys(b);return c.length===d.length&&!c.some(c=>!dG(a[c],b[c]))}return!1}function dH({get:a},b){return{init:a=>c7(a),get(){return a.call(this).value},set(b){let c=a.call(this);c.peek()!==b&&(c.value=b)}}}function dI(a,b){let c=new WeakMap;return function(){let b=c.get(this);return b||(b=dF(a.bind(this)),c.set(this,b)),b.value}}function dJ(a=!0){return function(b,c){c.addInitializer(function(){let b="field"===c.kind||c.static?this:Object.getPrototypeOf(this),d=Object.getOwnPropertyDescriptor(b,c.name);d&&Object.defineProperty(b,c.name,dj(((a,b)=>{for(var c in b||(b={}))dn.call(b,c)&&dr(a,c,b[c]);if(dm)for(var c of dm(b))dp.call(b,c)&&dr(a,c,b[c]);return a})({},d),dl({enumerable:a})))})}}function dK(...a){let b=a.map(a=>dg(a));return()=>b.forEach(a=>a())}A=[dH],z=[dH],y=[dH],x=[dJ()],w=[dJ()],v=[dJ()];var dL=class{constructor(a,b=Object.is){this.defaultValue=a,this.equals=b,dx(B,5,this),dC(this,G),dC(this,C,dx(B,8,this)),dx(B,11,this),dC(this,H,dx(B,12,this)),dx(B,15,this),dC(this,L,dx(B,16,this)),dx(B,19,this),this.reset=this.reset.bind(this),this.reset()}get current(){return dB(this,G,N)}get initial(){return dB(this,G,E)}get previous(){return dB(this,G,J)}set current(a){let b=c$(()=>dB(this,G,N));a&&b&&this.equals(b,a)||cZ(()=>{dB(this,G,E)||dD(this,G,a,F),dD(this,G,b,K),dD(this,G,a,O)})}reset(a=this.defaultValue){cZ(()=>{dD(this,G,void 0,K),dD(this,G,a,F),dD(this,G,a,O)})}};function dM(a){return c$(()=>{let b={};for(let c in a)b[c]=a[c];return b})}B=[,,,dh(null)],C=new WeakMap,G=new WeakSet,H=new WeakMap,L=new WeakMap,E=(D=dy(B,20,"#initial",A,G,C)).get,F=D.set,J=(I=dy(B,20,"#previous",z,G,H)).get,K=I.set,N=(M=dy(B,20,"#current",y,G,L)).get,O=M.set,dy(B,2,"current",x,dL),dy(B,2,"initial",w,dL),dy(B,2,"previous",v,dL),dw(B,dL);var dN=class{constructor(){dC(this,P,new WeakMap)}get(a,b){var c;return a?null==(c=dB(this,P).get(a))?void 0:c.get(b):void 0}set(a,b,c){var d;if(a)return dB(this,P).has(a)||dB(this,P).set(a,new Map),null==(d=dB(this,P).get(a))?void 0:d.set(b,c)}clear(a){var b;return a?null==(b=dB(this,P).get(a))?void 0:b.clear():void 0}};P=new WeakMap;var dO=Object.create,dP=Object.defineProperty,dQ=Object.getOwnPropertyDescriptor,dR=Object.getOwnPropertySymbols,dS=Object.prototype.hasOwnProperty,dT=Object.prototype.propertyIsEnumerable,dU=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a),dV=a=>{throw TypeError(a)},dW=Math.pow,dX=(a,b,c)=>b in a?dP(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,dY=(a,b)=>dP(a,"name",{value:b,configurable:!0}),dZ=["class","method","getter","setter","accessor","field","value","get","set"],d$=a=>void 0!==a&&"function"!=typeof a?dV("Function expected"):a,d_=(a,b,c,d,e)=>({kind:dZ[a],name:b,metadata:d,addInitializer:a=>c._?dV("Already initialized"):e.push(d$(a||null))}),d0=(a,b)=>dX(b,dU("metadata"),a[3]),d1=(a,b,c,d,e,f)=>{var g,h,i,j,k,l=7&b,m=!!(8&b),n=!!(16&b),o=l>3?a.length+1:l?m?1:2:0,p=dZ[l+5],q=l>3&&(a[o-1]=[]),r=a[o]||(a[o]=[]),s=l&&(n||m||(e=e.prototype),l<5&&(l>3||!n)&&dQ(l<4?e:{get[c](){return d4(this,f)},set[c](a){return d5(this,f,a)}},c));l?n&&l<4&&dY(f,(l>2?"set ":l>1?"get ":"")+c):dY(e,c);for(var t=d.length-1;t>=0;t--)j=d_(l,c,i={},a[3],r),l&&(j.static=m,j.private=n,k=j.access={has:n?a=>d3(e,a):a=>c in a},3^l&&(k.get=n?a=>(1^l?d4:d6)(a,e,4^l?f:s.get):a=>a[c]),l>2&&(k.set=n?(a,b)=>d5(a,e,b,4^l?f:s.set):(a,b)=>a[c]=b)),h=(0,d[t])(l?l<4?n?f:s[p]:l>4?void 0:{get:s.get,set:s.set}:e,j),i._=1,4^l||void 0===h?d$(h)&&(l>4?q.unshift(h):l?n?f=h:s[p]=h:e=h):"object"!=typeof h||null===h?dV("Object expected"):(d$(g=h.get)&&(s.get=g),d$(g=h.set)&&(s.set=g),d$(g=h.init)&&q.unshift(g));return l||d0(a,e),s&&dP(e,c,s),n?4^l?f:s:e},d2=(a,b,c)=>b.has(a)||dV("Cannot "+c),d3=(a,b)=>Object(b)!==b?dV('Cannot use the "in" operator on this value'):a.has(b),d4=(a,b,c)=>(d2(a,b,"read from private field"),c?c.call(a):b.get(a)),d5=(a,b,c,d)=>(d2(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),d6=(a,b,c)=>(d2(a,b,"access private method"),c),d7=class a{constructor(a,b){this.x=a,this.y=b}static delta(b,c){return new a(b.x-c.x,b.y-c.y)}static distance(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}static equals(a,b){return a.x===b.x&&a.y===b.y}static from({x:b,y:c}){return new a(b,c)}},d8=class a{constructor(a,b,c,d){this.left=a,this.top=b,this.width=c,this.height=d,this.scale={x:1,y:1}}get inverseScale(){return{x:1/this.scale.x,y:1/this.scale.y}}translate(b,c){let{top:d,left:e,width:f,height:g,scale:h}=this,i=new a(e+b,d+c,f,g);return i.scale=((a,b)=>{for(var c in b||(b={}))dS.call(b,c)&&dX(a,c,b[c]);if(dR)for(var c of dR(b))dT.call(b,c)&&dX(a,c,b[c]);return a})({},h),i}get boundingRectangle(){let{width:a,height:b,left:c,top:d,right:e,bottom:f}=this;return{width:a,height:b,left:c,top:d,right:e,bottom:f}}get center(){let{left:a,top:b,right:c,bottom:d}=this;return new d7((a+c)/2,(b+d)/2)}get area(){let{width:a,height:b}=this;return a*b}equals(b){if(!(b instanceof a))return!1;let{left:c,top:d,width:e,height:f}=this;return c===b.left&&d===b.top&&e===b.width&&f===b.height}containsPoint(a){let{top:b,left:c,bottom:d,right:e}=this;return b<=a.y&&a.y<=d&&c<=a.x&&a.x<=e}intersectionArea(b){var c,d;let e,f,g,h;return b instanceof a?(c=this,e=Math.max((d=b).top,c.top),f=Math.max(d.left,c.left),g=Math.min(d.left+d.width,c.left+c.width),h=Math.min(d.top+d.height,c.top+c.height),f<g&&e<h?(g-f)*(h-e):0):0}intersectionRatio(a){let{area:b}=this,c=this.intersectionArea(a);return c/(a.area+b-c)}get bottom(){let{top:a,height:b}=this;return a+b}get right(){let{left:a,width:b}=this;return a+b}get aspectRatio(){let{width:a,height:b}=this;return a/b}get corners(){return[{x:this.left,y:this.top},{x:this.right,y:this.top},{x:this.left,y:this.bottom},{x:this.right,y:this.bottom}]}static from({top:b,left:c,width:d,height:e}){return new a(c,b,d,e)}static delta(a,b,c={x:"center",y:"center"}){let d=(a,b)=>{let d=c[b],e="x"===b?a.left:a.top,f="x"===b?a.width:a.height;return"start"==d?e:"end"==d?e+f:e+f/2};return d7.delta({x:d(a,"x"),y:d(a,"y")},{x:d(b,"x"),y:d(b,"y")})}static intersectionRatio(b,c){return a.from(b).intersectionRatio(a.from(c))}},d9=class extends(S=dL,R=[dI],Q=[dI],S){constructor(a){let b;super(d7.from(a),(a,b)=>d7.equals(a,b)),((a,b)=>{for(var c=0,d=a[2],e=d&&d.length;c<e;c++)d[c].call(b)})(U,this),(b=T).has(this)?dV("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(this):b.set(this,0),this.velocity={x:0,y:0}}get delta(){return d7.delta(this.current,this.initial)}get direction(){let{current:a,previous:b}=this;if(!b)return null;let c={x:a.x-b.x,y:a.y-b.y};return c.x||c.y?Math.abs(c.x)>Math.abs(c.y)?c.x>0?"right":"left":c.y>0?"down":"up":null}get current(){return super.current}set current(a){let{current:b}=this,c=d7.from(a),d={x:c.x-b.x,y:c.y-b.y},e=Date.now(),f=e-d4(this,T),g=a=>Math.round(a/f*100);cZ(()=>{d5(this,T,e),this.velocity={x:g(d.x),y:g(d.y)},super.current=c})}reset(a=this.defaultValue){super.reset(d7.from(a)),this.velocity={x:0,y:0}}};function ea({x:a,y:b},c){let d=Math.abs(a),e=Math.abs(b);return"number"==typeof c?Math.sqrt(dW(d,2)+dW(e,2))>c:"x"in c&&"y"in c?d>c.x&&e>c.y:"x"in c?d>c.x:"y"in c&&e>c.y}U=[,,,dO(null!=(l=null==S?void 0:S[dU("metadata")])?l:null)],T=new WeakMap,d1(U,2,"delta",R,d9),d1(U,2,"direction",Q,d9),d0(U,d9);var eb=((m=eb||{}).Horizontal="x",m.Vertical="y",m),ec=Object.values(eb),ed=Object.create,ee=Object.defineProperty,ef=Object.defineProperties,eg=Object.getOwnPropertyDescriptor,eh=Object.getOwnPropertyDescriptors,ei=Object.getOwnPropertySymbols,ej=Object.prototype.hasOwnProperty,ek=Object.prototype.propertyIsEnumerable,el=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a),em=a=>{throw TypeError(a)},en=(a,b,c)=>b in a?ee(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,eo=(a,b)=>{for(var c in b||(b={}))ej.call(b,c)&&en(a,c,b[c]);if(ei)for(var c of ei(b))ek.call(b,c)&&en(a,c,b[c]);return a},ep=(a,b)=>ef(a,eh(b)),eq=(a,b)=>ee(a,"name",{value:b,configurable:!0}),er=(a,b)=>{var c={};for(var d in a)ej.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&ei)for(var d of ei(a))0>b.indexOf(d)&&ek.call(a,d)&&(c[d]=a[d]);return c},es=a=>{var b;return[,,,ed(null!=(b=null==a?void 0:a[el("metadata")])?b:null)]},et=["class","method","getter","setter","accessor","field","value","get","set"],eu=a=>void 0!==a&&"function"!=typeof a?em("Function expected"):a,ev=(a,b,c,d,e)=>({kind:et[a],name:b,metadata:d,addInitializer:a=>c._?em("Already initialized"):e.push(eu(a||null))}),ew=(a,b)=>en(b,el("metadata"),a[3]),ex=(a,b,c,d)=>{for(var e=0,f=a[b>>1],g=f&&f.length;e<g;e++)1&b?f[e].call(c):d=f[e].call(c,d);return d},ey=(a,b,c,d,e,f)=>{var g,h,i,j,k,l=7&b,m=!!(8&b),n=!!(16&b),o=l>3?a.length+1:l?m?1:2:0,p=et[l+5],q=l>3&&(a[o-1]=[]),r=a[o]||(a[o]=[]),s=l&&(n||m||(e=e.prototype),l<5&&(l>3||!n)&&eg(l<4?e:{get[c](){return eB(this,f)},set[c](a){return eD(this,f,a)}},c));l?n&&l<4&&eq(f,(l>2?"set ":l>1?"get ":"")+c):eq(e,c);for(var t=d.length-1;t>=0;t--)j=ev(l,c,i={},a[3],r),l&&(j.static=m,j.private=n,k=j.access={has:n?a=>eA(e,a):a=>c in a},3^l&&(k.get=n?a=>(1^l?eB:eE)(a,e,4^l?f:s.get):a=>a[c]),l>2&&(k.set=n?(a,b)=>eD(a,e,b,4^l?f:s.set):(a,b)=>a[c]=b)),h=(0,d[t])(l?l<4?n?f:s[p]:l>4?void 0:{get:s.get,set:s.set}:e,j),i._=1,4^l||void 0===h?eu(h)&&(l>4?q.unshift(h):l?n?f=h:s[p]=h:e=h):"object"!=typeof h||null===h?em("Object expected"):(eu(g=h.get)&&(s.get=g),eu(g=h.set)&&(s.set=g),eu(g=h.init)&&q.unshift(g));return l||ew(a,e),s&&ee(e,c,s),n?4^l?f:s:e},ez=(a,b,c)=>b.has(a)||em("Cannot "+c),eA=(a,b)=>Object(b)!==b?em('Cannot use the "in" operator on this value'):a.has(b),eB=(a,b,c)=>(ez(a,b,"read from private field"),c?c.call(a):b.get(a)),eC=(a,b,c)=>b.has(a)?em("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),eD=(a,b,c,d)=>(ez(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),eE=(a,b,c)=>(ez(a,b,"access private method"),c);function eF(a,b){return{plugin:a,options:b}}function eG(a){return b=>eF(a,b)}function eH(a){return"function"==typeof a?{plugin:a,options:void 0}:a}V=[dH];var eI=class{constructor(a,b){this.manager=a,this.options=b,eC(this,X,ex(W,8,this,!1)),ex(W,11,this),eC(this,Y,new Set)}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return c$(()=>this.disabled)}configure(a){this.options=a}registerEffect(a){let b=dg(a.bind(this));return eB(this,Y).add(b),b}destroy(){eB(this,Y).forEach(a=>a())}static configure(a){return eF(this,a)}};W=es(null),X=new WeakMap,Y=new WeakMap,ey(W,4,"disabled",V,eI,X),ew(W,eI);var eJ=class extends eI{},eK=class{constructor(a){this.manager=a,this.instances=new Map,eC(this,Z,[])}get values(){return Array.from(this.instances.values())}set values(a){let b=a.map(eH).reduce((a,b)=>{let c=a.find(({plugin:a})=>a===b.plugin);return c?(c.options=b.options,a):[...a,b]},[]),c=b.map(({plugin:a})=>a);for(let a of eB(this,Z))if(!c.includes(a)){if(a.prototype instanceof eJ)continue;this.unregister(a)}for(let{plugin:a,options:c}of b)this.register(a,c);eD(this,Z,c)}get(a){return this.instances.get(a)}register(a,b){let c=this.instances.get(a);if(c)return c.options!==b&&(c.options=b),c;let d=new a(this.manager,b);return this.instances.set(a,d),d}unregister(a){let b=this.instances.get(a);b&&(b.destroy(),this.instances.delete(a))}destroy(){for(let a of this.instances.values())a.destroy();this.instances.clear()}};function eL(a,b){return a.priority===b.priority?a.type===b.type?b.value-a.value:b.type-a.type:b.priority-a.priority}Z=new WeakMap;var eM=[],eN=class extends eI{constructor(a){super(a),eC(this,$),eC(this,_),this.computeCollisions=this.computeCollisions.bind(this),eD(this,_,c7(eM)),this.destroy=dK(()=>{let a=this.computeCollisions(),b=c$(()=>this.manager.dragOperation.position.current);if(a!==eM){let a=eB(this,$);if(eD(this,$,b),a&&b.x==a.x&&b.y==a.y)return}else eD(this,$,void 0);eB(this,_).value=a},()=>{let{dragOperation:a}=this.manager;a.status.initialized&&this.forceUpdate()})}forceUpdate(a=!0){c$(()=>{a?eB(this,_).value=this.computeCollisions():eD(this,$,void 0)})}computeCollisions(a,b){let{registry:c,dragOperation:d}=this.manager,{source:e,shape:f,status:g}=d;if(!g.initialized||!f)return eM;let h=[],i=[];for(let f of null!=a?a:c.droppables){if(f.disabled||e&&!f.accepts(e))continue;let a=null!=b?b:f.collisionDetector;if(!a)continue;i.push(f),f.shape;let c=c$(()=>a({droppable:f,dragOperation:d}));c&&(null!=f.collisionPriority&&(c.priority=f.collisionPriority),h.push(c))}return 0===i.length?eM:(h.sort(eL),h)}get collisions(){return eB(this,_).value}};$=new WeakMap,_=new WeakMap,ac=[dH],ab=[dH],aa=[dH];var eO=class a{constructor(a,b){eC(this,ag,ex(af,8,this)),ex(af,11,this),eC(this,ah),eC(this,ai,ex(af,12,this)),ex(af,15,this),eC(this,aj,ex(af,16,this)),ex(af,19,this);let{effects:c,id:d,data:e={},disabled:f=!1,register:g=!0}=a,h=d;eD(this,ah,c7(d)),this.manager=b,this.data=e,this.disabled=f,this.effects=()=>{var a;return[()=>{let{id:a,manager:b}=this;if(a!==h)return h=a,null==b||b.registry.register(this),()=>null==b?void 0:b.registry.unregister(this)},...null!=(a=null==c?void 0:c())?a:[]]},this.register=this.register.bind(this),this.unregister=this.unregister.bind(this),this.destroy=this.destroy.bind(this),b&&g&&queueMicrotask(this.register)}get id(){var b,c;let d=eB(this,ah).value;return null!=(c=null==(b=a.pendingIdChanges)?void 0:b.get(this))?c:d}set id(b){var c,d;b!==(null!=(d=null==(c=a.pendingIdChanges)?void 0:c.get(this))?d:eB(this,ah).peek())&&(a.pendingIdChanges||(a.pendingIdChanges=new Map,queueMicrotask(()=>eE(a,ad,ae).call(a))),a.pendingIdChanges.set(this,b))}register(){var a;return null==(a=this.manager)?void 0:a.registry.register(this)}unregister(){var a;null==(a=this.manager)||a.registry.unregister(this)}destroy(){var a;null==(a=this.manager)||a.registry.unregister(this)}};af=es(null),ad=new WeakSet,ae=function(){let a=eO.pendingIdChanges;eO.pendingIdChanges=null,a&&cZ(()=>{for(let[b,c]of a)eB(b,ah).value=c})},ag=new WeakMap,ah=new WeakMap,ai=new WeakMap,aj=new WeakMap,ey(af,4,"manager",ac,eO,ag),ey(af,4,"data",ab,eO,ai),ey(af,4,"disabled",aa,eO,aj),eC(eO,ad),ew(af,eO),eO.pendingIdChanges=null;var eP=eO,eQ=class{constructor(){this.map=c7(new Map),this.cleanupFunctions=new WeakMap,this.register=(a,b)=>{let c=this.map.peek(),d=c.get(a),e=()=>this.unregister(a,b);if(d===b)return e;if(d&&d.id===a){let a=this.cleanupFunctions.get(d);null==a||a(),this.cleanupFunctions.delete(d)}let f=new Map(c);for(let[d,e]of c)if(e===b&&d!==a){f.delete(d);break}f.set(a,b),this.map.value=f;let g=dK(...b.effects());return this.cleanupFunctions.set(b,g),e},this.unregister=(a,b)=>{let c=this.map.peek();if(c.get(a)!==b)return;let d=this.cleanupFunctions.get(b);null==d||d(),this.cleanupFunctions.delete(b);let e=new Map(c);e.delete(a),this.map.value=e}}[Symbol.iterator](){return this.map.peek().values()}get value(){return this.map.value.values()}has(a){return this.map.value.has(a)}get(a){return this.map.value.get(a)}destroy(){for(let a of this){let b=this.cleanupFunctions.get(a);null==b||b(),a.destroy()}this.map.value=new Map}},eR=class extends(aq=eP,ap=[dH],ao=[dH],an=[dH],am=[dI],al=[dI],ak=[dI],aq){constructor(a,b){var{modifiers:c,type:d,sensors:e,plugins:f,effects:g}=a,h=er(a,["modifiers","type","sensors","plugins","effects"]);super(ep(eo({},h),{effects:()=>{var a;return[...null!=(a=null==g?void 0:g())?a:[],()=>{let{manager:a,plugins:b}=this;if(a&&b)for(let c of b){let{plugin:b}=eH(c);a.registry.plugins.register(b)}}]}}),b),ex(ar,5,this),eC(this,as,ex(ar,8,this)),ex(ar,11,this),eC(this,at,ex(ar,12,this)),ex(ar,15,this),eC(this,au,ex(ar,16,this,this.isDragSource?"dragging":"idle")),ex(ar,19,this),this.type=d,this.sensors=e,this.modifiers=c,this.alignment=h.alignment,this.plugins=f}pluginConfig(a){if(this.plugins)for(let b of this.plugins){let c=eH(b);if(c.plugin===a)return c.options}}get isDropping(){return"dropping"===this.status&&this.isDragSource}get isDragging(){return"dragging"===this.status&&this.isDragSource}get isDragSource(){var a,b;return(null==(b=null==(a=this.manager)?void 0:a.dragOperation.source)?void 0:b.id)===this.id}};ar=es(aq),as=new WeakMap,at=new WeakMap,au=new WeakMap,ey(ar,4,"type",ap,eR,as),ey(ar,4,"modifiers",ao,eR,at),ey(ar,4,"status",an,eR,au),ey(ar,2,"isDropping",am,eR),ey(ar,2,"isDragging",al,eR),ey(ar,2,"isDragSource",ak,eR),ew(ar,eR);var eS=class extends(aB=eP,aA=[dH],az=[dH],ay=[dH],ax=[dH],aw=[dH],av=[dI],aB){constructor(a,b){var{accept:c,collisionDetector:d,collisionPriority:e,type:f}=a;super(er(a,["accept","collisionDetector","collisionPriority","type"]),b),ex(aC,5,this),eC(this,aD,ex(aC,8,this)),ex(aC,11,this),eC(this,aE,ex(aC,12,this)),ex(aC,15,this),eC(this,aF,ex(aC,16,this)),ex(aC,19,this),eC(this,aG,ex(aC,20,this)),ex(aC,23,this),eC(this,aH,ex(aC,24,this)),ex(aC,27,this),this.accept=c,this.collisionDetector=d,this.collisionPriority=e,this.type=f}accepts(a){let{accept:b}=this;return!b||("function"==typeof b?b(a):!!a.type&&(Array.isArray(b)?b.includes(a.type):a.type===b))}get isDropTarget(){var a,b;return(null==(b=null==(a=this.manager)?void 0:a.dragOperation.target)?void 0:b.id)===this.id}};aC=es(aB),aD=new WeakMap,aE=new WeakMap,aF=new WeakMap,aG=new WeakMap,aH=new WeakMap,ey(aC,4,"accept",aA,eS,aD),ey(aC,4,"type",az,eS,aE),ey(aC,4,"collisionDetector",ay,eS,aF),ey(aC,4,"collisionPriority",ax,eS,aG),ey(aC,4,"shape",aw,eS,aH),ey(aC,2,"isDropTarget",av,eS),ew(aC,eS);var eT=class{constructor(){this.registry=new Map}addEventListener(a,b){let{registry:c}=this,d=new Set(c.get(a));return d.add(b),c.set(a,d),()=>this.removeEventListener(a,b)}removeEventListener(a,b){let{registry:c}=this,d=new Set(c.get(a));d.delete(b),c.set(a,d)}dispatch(a,...b){let{registry:c}=this,d=c.get(a);if(d)for(let a of d)a(...b)}},eU=class extends eT{constructor(a){super(),this.manager=a}dispatch(a,b){let c=[b,this.manager];super.dispatch(a,...c)}};function eV(a,b=!0){let c=!1;return ep(eo({},a),{cancelable:b,get defaultPrevented(){return c},preventDefault(){b&&(c=!0)}})}var eW=class extends eJ{constructor(a){super(a);let b=[];this.destroy=dK(()=>{let{dragOperation:c,collisionObserver:d}=a;c.status.initializing&&(b=[],d.enable())},()=>{let c,{collisionObserver:d,monitor:e}=a,{collisions:f}=d;if(d.isDisabled()||eP.pendingIdChanges)return;let g=eV({collisions:f});if(e.dispatch("collision",g),g.defaultPrevented||(c=b,f.map(({id:a})=>a).join("")===c.map(({id:a})=>a).join("")))return;b=f;let[h]=f;c$(()=>{var b;(null==h?void 0:h.id)!==(null==(b=a.dragOperation.target)?void 0:b.id)&&(d.disable(),a.actions.setDropTarget(null==h?void 0:h.id).then(()=>{d.enable()}))})})}},eX=((n=eX||{})[n.Lowest=0]="Lowest",n[n.Low=1]="Low",n[n.Normal=2]="Normal",n[n.High=3]="High",n[n.Highest=4]="Highest",n),eY=((o=eY||{})[o.Collision=0]="Collision",o[o.ShapeIntersection=1]="ShapeIntersection",o[o.PointerIntersection=2]="PointerIntersection",o);aO=[dH],aN=[dI],aM=[dI],aL=[dI],aK=[dI],aJ=[dI],aI=[dI];var eZ=class{constructor(){ex(aP,5,this),eC(this,aQ,ex(aP,8,this,"idle")),ex(aP,11,this)}get current(){return this.value}get idle(){return"idle"===this.value}get initializing(){return"initializing"===this.value}get initialized(){let{value:a}=this;return"idle"!==a&&"initialization-pending"!==a}get dragging(){return"dragging"===this.value}get dropped(){return"dropped"===this.value}set(a){this.value=a}};aP=es(null),aQ=new WeakMap,ey(aP,4,"value",aO,eZ,aQ),ey(aP,2,"current",aN,eZ),ey(aP,2,"idle",aM,eZ),ey(aP,2,"initializing",aL,eZ),ey(aP,2,"initialized",aK,eZ),ey(aP,2,"dragging",aJ,eZ),ey(aP,2,"dropped",aI,eZ),ew(aP,eZ);var e$=class{constructor(a){this.manager=a}setDragSource(a){let{dragOperation:b}=this.manager;b.sourceIdentifier="string"==typeof a||"number"==typeof a?a:a.id}setDropTarget(a){return c$(()=>{let{dragOperation:b}=this.manager,c=null!=a?a:null;if(b.targetIdentifier===c)return Promise.resolve(!1);b.targetIdentifier=c;let d=eV({operation:b.snapshot()});return b.status.dragging&&this.manager.monitor.dispatch("dragover",d),this.manager.renderer.rendering.then(()=>d.defaultPrevented)})}start(a){return c$(()=>{let{dragOperation:b}=this.manager;if(null!=a.source&&this.setDragSource(a.source),!b.source)throw Error("Cannot start a drag operation without a drag source");if(!b.status.idle)throw Error("Cannot start a drag operation while another is active");let c=new AbortController,{event:d,coordinates:e}=a;cZ(()=>{b.status.set("initialization-pending"),b.shape=null,b.canceled=!1,b.activatorEvent=null!=d?d:null,b.position.reset(e)});let f=eV({operation:b.snapshot()});return(this.manager.monitor.dispatch("beforedragstart",f),f.defaultPrevented)?(b.reset(),c.abort()):(b.status.set("initializing"),b.controller=c,this.manager.renderer.rendering.then(()=>{if(c.signal.aborted)return;let{status:a}=b;"initializing"===a.current&&cZ(()=>{b.status.set("dragging"),this.manager.monitor.dispatch("dragstart",{nativeEvent:d,operation:b.snapshot(),cancelable:!1})})})),c})}move(a){return c$(()=>{var b,c;let{dragOperation:d}=this.manager,{status:e,controller:f}=d;if(!e.dragging||!f||f.signal.aborted)return;let g=eV({nativeEvent:a.event,operation:d.snapshot(),by:a.by,to:a.to},null==(b=a.cancelable)||b);(null==(c=a.propagate)||c)&&this.manager.monitor.dispatch("dragmove",g),queueMicrotask(()=>{var b,c,e,f,h;if(g.defaultPrevented)return;let i=null!=(h=a.to)?h:{x:d.position.current.x+(null!=(c=null==(b=a.by)?void 0:b.x)?c:0),y:d.position.current.y+(null!=(f=null==(e=a.by)?void 0:e.y)?f:0)};d.position.current=i})})}stop(a={}){return c$(()=>{var b,c;let d,{dragOperation:e}=this.manager,{controller:f}=e;if(!f||f.signal.aborted)return;f.abort();let g=()=>{this.manager.renderer.rendering.then(()=>{e.status.set("dropped");let a=c$(()=>{var a;return(null==(a=e.source)?void 0:a.status)==="dropping"}),b=()=>{e.controller===f&&(e.controller=void 0),e.reset()};if(a){let{source:a}=e,c=dg(()=>{(null==a?void 0:a.status)==="idle"&&(c(),b())})}else this.manager.renderer.rendering.then(b)})};e.canceled=null!=(b=a.canceled)&&b,this.manager.monitor.dispatch("dragend",{nativeEvent:a.event,operation:e.snapshot(),canceled:null!=(c=a.canceled)&&c,suspend:()=>{let a={resume:()=>{},abort:()=>{}};return d=new Promise((b,c)=>{a.resume=b,a.abort=c}),a}}),d?d.then(g).catch(()=>e.reset()):g()})}},e_=class extends eI{constructor(a,b){super(a,b),this.manager=a,this.options=b}},e0=class extends AbortController{constructor(a,b){for(let c of(super(),this.constraints=a,this.onActivate=b,this.activated=!1,null!=a?a:[]))c.controller=this}onEvent(a){var b;if(!this.activated)if(null==(b=this.constraints)?void 0:b.length)for(let b of this.constraints)b.onEvent(a);else this.activate(a)}activate(a){this.activated||(this.activated=!0,this.onActivate(a))}abort(a){this.activated=!1,super.abort(a)}},e1=class{constructor(a){this.options=a,eC(this,aR)}set controller(a){eD(this,aR,a),a.signal.addEventListener("abort",()=>this.abort())}activate(a){var b;null==(b=eB(this,aR))||b.activate(a)}};aR=new WeakMap;var e2=class extends eI{constructor(a,b){super(a,b),this.manager=a,this.options=b}apply(a){return a.transform}},e3=class{constructor(a){this.draggables=new eQ,this.droppables=new eQ,this.plugins=new eK(a),this.sensors=new eK(a),this.modifiers=new eK(a)}register(a,b){if(a instanceof eR)return this.draggables.register(a.id,a);if(a instanceof eS)return this.droppables.register(a.id,a);if(a.prototype instanceof e2)return this.modifiers.register(a,b);if(a.prototype instanceof e_)return this.sensors.register(a,b);if(a.prototype instanceof eI)return this.plugins.register(a,b);throw Error("Invalid instance type")}unregister(a){if(a instanceof eP)return a instanceof eR?this.draggables.unregister(a.id,a):a instanceof eS?this.droppables.unregister(a.id,a):()=>{};if(a.prototype instanceof e2)return this.modifiers.unregister(a);if(a.prototype instanceof e_)return this.sensors.unregister(a);if(a.prototype instanceof eI)return this.plugins.unregister(a);throw Error("Invalid instance type")}destroy(){this.draggables.destroy(),this.droppables.destroy(),this.plugins.destroy(),this.sensors.destroy(),this.modifiers.destroy()}};a$=[dI],aZ=[dH],aY=[dH],aX=[dH],aW=[dH],aV=[dH],aU=[dI],aT=[dI],aS=[dI];var e4=class{constructor(a){ex(a2,5,this),eC(this,a_),eC(this,a0),eC(this,a1,new dL(void 0,(a,b)=>a&&b?a.equals(b):a===b)),this.status=new eZ,eC(this,a3,ex(a2,8,this,!1)),ex(a2,11,this),eC(this,a4,ex(a2,12,this,null)),ex(a2,15,this),eC(this,a5,ex(a2,16,this,null)),ex(a2,19,this),eC(this,a6,ex(a2,20,this,null)),ex(a2,23,this),eC(this,a7,ex(a2,24,this,[])),ex(a2,27,this),this.position=new d9({x:0,y:0}),eC(this,a8,{x:0,y:0}),eD(this,a_,a)}get shape(){let{current:a,initial:b,previous:c}=eB(this,a1);return a&&b?{current:a,initial:b,previous:c}:null}set shape(a){a?eB(this,a1).current=a:eB(this,a1).reset()}get source(){var a;let b=this.sourceIdentifier;if(null==b)return null;let c=eB(this,a_).registry.draggables.get(b);return c&&eD(this,a0,c),null!=(a=null!=c?c:eB(this,a0))?a:null}get target(){var a;let b=this.targetIdentifier;return null!=b&&null!=(a=eB(this,a_).registry.droppables.get(b))?a:null}get transform(){let{x:a,y:b}=this.position.delta,c={x:a,y:b};for(let a of this.modifiers)c=a.apply(ep(eo({},this.snapshot()),{transform:c}));return eD(this,a8,c),c}snapshot(){return c$(()=>({source:this.source,target:this.target,activatorEvent:this.activatorEvent,transform:eB(this,a8),shape:this.shape?dM(this.shape):null,position:dM(this.position),status:dM(this.status),canceled:this.canceled}))}reset(){cZ(()=>{this.status.set("idle"),this.sourceIdentifier=null,this.targetIdentifier=null,eB(this,a1).reset(),this.position.reset({x:0,y:0}),eD(this,a8,{x:0,y:0}),this.modifiers=[]})}};a2=es(null),a_=new WeakMap,a0=new WeakMap,a1=new WeakMap,a3=new WeakMap,a4=new WeakMap,a5=new WeakMap,a6=new WeakMap,a7=new WeakMap,a8=new WeakMap,ey(a2,2,"shape",a$,e4),ey(a2,4,"canceled",aZ,e4,a3),ey(a2,4,"activatorEvent",aY,e4,a4),ey(a2,4,"sourceIdentifier",aX,e4,a5),ey(a2,4,"targetIdentifier",aW,e4,a6),ey(a2,4,"modifiers",aV,e4,a7),ey(a2,2,"source",aU,e4),ey(a2,2,"target",aT,e4),ey(a2,2,"transform",aS,e4),ew(a2,e4);var e5={get rendering(){return Promise.resolve()}};function e6(a,b){return"function"==typeof a?a(b):null!=a?a:b}var e7=class{constructor(a){var b;this.destroy=()=>{this.dragOperation.status.idle||this.actions.stop({canceled:!0}),this.dragOperation.modifiers.forEach(a=>a.destroy()),this.registry.destroy(),this.collisionObserver.destroy()};let c=null!=a?a:{},d=e6(c.plugins,[]),e=e6(c.sensors,[]),f=e6(c.modifiers,[]),g=null!=(b=c.renderer)?b:e5,h=new eU(this),i=new e3(this);this.registry=i,this.monitor=h,this.renderer=g,this.actions=new e$(this),this.dragOperation=new e4(this),this.collisionObserver=new eN(this),this.plugins=[eW,...d],this.modifiers=f,this.sensors=e;let{destroy:j}=this,k=dK(()=>{var a,b,c;let d=c$(()=>this.dragOperation.modifiers),e=this.modifiers;for(let a of d)e.includes(a)||a.destroy();this.dragOperation.modifiers=null!=(c=null==(b=null==(a=this.dragOperation.source)?void 0:a.modifiers)?void 0:b.map(a=>{let{plugin:b,options:c}=eH(a);return new b(this,c)}))?c:e});this.destroy=()=>{k(),j()}}get plugins(){return this.registry.plugins.values}set plugins(a){this.registry.plugins.values=a}get modifiers(){return this.registry.modifiers.values}set modifiers(a){this.registry.modifiers.values=a}get sensors(){return this.registry.sensors.values}set sensors(a){this.registry.sensors.values=a}},e8=a=>{throw TypeError(a)},e9=(a,b,c)=>b.has(a)||e8("Cannot "+c),fa=(a,b,c)=>(e9(a,b,"read from private field"),b.get(a)),fb=(a,b,c)=>b.has(a)?e8("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),fc=(a,b,c,d)=>(e9(a,b,"write to private field"),b.set(a,c),c),fd=(a,b,c)=>(e9(a,b,"access private method"),c);function fe(a){return!!a&&(a instanceof KeyframeEffect||"getKeyframes"in a&&"function"==typeof a.getKeyframes)}function ff(a,b){let c=a.getAnimations(),d=null;for(let a of c){if("running"!==a.playState)continue;let{effect:c}=a,e=(fe(c)?c.getKeyframes():[]).filter(b);e.length>0&&(d=[e[e.length-1],a])}return d}function fg(a){let{width:b,height:c,top:d,left:e,bottom:f,right:g}=a.getBoundingClientRect();return{width:b,height:c,top:d,left:e,bottom:f,right:g}}function fh(a){let b=Object.prototype.toString.call(a);return"[object Window]"===b||"[object global]"===b}function fi(a){return"nodeType"in a}function fj(a){var b,c,d;return a?fh(a)?a:fi(a)?"defaultView"in a?null!=(b=a.defaultView)?b:window:null!=(d=null==(c=a.ownerDocument)?void 0:c.defaultView)?d:window:window:window}function fk(a){let{Document:b}=fj(a);return a instanceof b||"nodeType"in a&&a.nodeType===Node.DOCUMENT_NODE}function fl(a){return!(!a||fh(a))&&(a instanceof fj(a).HTMLElement||"namespaceURI"in a&&"string"==typeof a.namespaceURI&&a.namespaceURI.endsWith("html"))}function fm(a){return a instanceof fj(a).SVGElement||"namespaceURI"in a&&"string"==typeof a.namespaceURI&&a.namespaceURI.endsWith("svg")}function fn(a){return a?fh(a)?a.document:fi(a)?fk(a)?a:fl(a)||fm(a)?a.ownerDocument:document:document:document}function fo(a,b=a.getBoundingClientRect(),c=0){var d,e,f,g,h;let i=b,{ownerDocument:j}=a,k=null!=(d=j.defaultView)?d:window,l=a.parentElement;for(;l&&l!==j.documentElement;){if(!function(a){if("DETAILS"===a.tagName&&!1===a.open)return!1;let{overflow:b,overflowX:c,overflowY:d}=getComputedStyle(a);return"visible"===b&&"visible"===c&&"visible"===d}(l)){let a=l.getBoundingClientRect(),b=c*(a.bottom-a.top),d=c*(a.right-a.left),e=c*(a.bottom-a.top),f=c*(a.right-a.left);(i={top:Math.max(i.top,a.top-b),right:Math.min(i.right,a.right+d),bottom:Math.min(i.bottom,a.bottom+e),left:Math.max(i.left,a.left-f),width:0,height:0}).width=i.right-i.left,i.height=i.bottom-i.top}l=l.parentElement}let m=k.visualViewport,n=null!=(e=null==m?void 0:m.offsetTop)?e:0,o=null!=(f=null==m?void 0:m.offsetLeft)?f:0,p=null!=(g=null==m?void 0:m.width)?g:k.innerWidth,q=null!=(h=null==m?void 0:m.height)?h:k.innerHeight,r=c*q,s=c*p;return(i={top:Math.max(i.top,n-r),right:Math.min(i.right,o+p+s),bottom:Math.min(i.bottom,n+q+r),left:Math.max(i.left,o-s),width:0,height:0}).width=i.right-i.left,i.height=i.bottom-i.top,i.width<0&&(i.width=0),i.height<0&&(i.height=0),i}function fp(a){return{x:a.clientX,y:a.clientY}}function fq(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function fr(){var a,b;let c=fq()?window.visualViewport:null;return{x:null!=(a=null==c?void 0:c.offsetLeft)?a:0,y:null!=(b=null==c?void 0:c.offsetTop)?b:0}}function fs(a){return!!a&&!!fi(a)&&a instanceof fj(a).ShadowRoot}function ft(a){if(a&&fi(a)){let b=a.getRootNode();if(fs(b)||b instanceof Document)return b}return fn(a)}function fu(a){return a.matchMedia("(prefers-reduced-motion: reduce)").matches}function fv(a){return"value"in a}function fw(a){return"CANVAS"===a.tagName}var fx=new WeakMap,fy=class{constructor(){this.entries=new Set,this.clear=()=>{for(let a of this.entries){let[b,{type:c,listener:d,options:e}]=a;b.removeEventListener(c,d,e)}this.entries.clear()}}bind(a,b){let c=Array.isArray(a)?a:[a],d=Array.isArray(b)?b:[b],e=[];for(let a of c)for(let b of d){let{type:c,listener:d,options:f}=b,g=[a,b];a.addEventListener(c,d,f),this.entries.add(g),e.push(g)}let f=this.entries;return function(){for(let a of e){let[b,{type:c,listener:d,options:e}]=a;b.removeEventListener(c,d,e),f.delete(a)}}}};function fz(a){let b=null==a?void 0:a.ownerDocument.defaultView;if(b&&b.self!==b.parent)return b.frameElement}function fA(a,b){let c,d;return function(...e){let f=this;if(d){let g;null==c||c(),g=setTimeout(()=>{a.apply(f,e),d=performance.now()},b-(performance.now()-d)),c=()=>clearTimeout(g)}else a.apply(f,e),d=performance.now()}}var fB=class{observe(){}unobserve(){}disconnect(){}},fC=class extends fB{constructor(a){super(b=>{fa(this,a9)?a(b,this):fc(this,a9,!0)}),fb(this,a9,!1)}};a9=new WeakMap;var fD=Array.from({length:100},(a,b)=>b/100),fE=class{constructor(a,b,c={debug:!1,skipInitial:!1}){this.element=a,this.callback=b,fb(this,bi),this.disconnect=()=>{var a,b,c;fc(this,bg,!0),null==(a=fa(this,bc))||a.disconnect(),null==(b=fa(this,bd))||b.disconnect(),fa(this,be).disconnect(),null==(c=fa(this,bf))||c.remove()},fb(this,ba,!0),fb(this,bb),fb(this,bc),fb(this,bd),fb(this,be),fb(this,bf),fb(this,bg,!1),fb(this,bh,fA(()=>{var a,b,c;let{element:d}=this;if(null==(a=fa(this,bd))||a.disconnect(),fa(this,bg)||!fa(this,ba)||!d.isConnected)return;let e=null!=(b=d.ownerDocument)?b:document,{innerHeight:f,innerWidth:g}=null!=(c=e.defaultView)?c:window,h=d.getBoundingClientRect(),{top:i,left:j,bottom:k,right:l}=fo(d,h),m=-Math.floor(i),n=-Math.floor(j),o=-Math.floor(g-l),p=-Math.floor(f-k),q=`${m}px ${o}px ${p}px ${n}px`;this.boundingClientRect=h,fc(this,bd,new IntersectionObserver(a=>{let[b]=a,{intersectionRect:c}=b;1!==(1!==b.intersectionRatio?b.intersectionRatio:d8.intersectionRatio(c,fo(d)))&&fa(this,bh).call(this)},{threshold:fD,rootMargin:q,root:e})),fa(this,bd).observe(d),fd(this,bi,bj).call(this)},75)),this.boundingClientRect=a.getBoundingClientRect(),fc(this,ba,function(a,b=a.getBoundingClientRect()){let{width:c,height:d}=fo(a,b);return c>0&&d>0}(a,this.boundingClientRect));let d=!0;this.callback=a=>{d&&(d=!1,c.skipInitial)||b(a)};let e=a.ownerDocument;(null==c?void 0:c.debug)&&(fc(this,bf,document.createElement("div")),fa(this,bf).style.background="rgba(0,0,0,0.15)",fa(this,bf).style.position="fixed",fa(this,bf).style.pointerEvents="none",e.body.appendChild(fa(this,bf))),fc(this,be,new IntersectionObserver(b=>{var c,d;let{boundingClientRect:e,isIntersecting:f}=b[b.length-1],{width:g,height:h}=e,i=fa(this,ba);fc(this,ba,f),(g||h)&&(i&&!f?(null==(c=fa(this,bd))||c.disconnect(),this.callback(null),null==(d=fa(this,bc))||d.disconnect(),fc(this,bc,void 0),fa(this,bf)&&(fa(this,bf).style.visibility="hidden")):fa(this,bh).call(this),f&&!fa(this,bc)&&(fc(this,bc,new fC(fa(this,bh))),fa(this,bc).observe(a)))},{threshold:fD,root:e})),fa(this,ba)&&!c.skipInitial&&this.callback(this.boundingClientRect),fa(this,be).observe(a)}};ba=new WeakMap,bb=new WeakMap,bc=new WeakMap,bd=new WeakMap,be=new WeakMap,bf=new WeakMap,bg=new WeakMap,bh=new WeakMap,bi=new WeakSet,bj=function(){var a,b;!fa(this,bg)&&(fd(this,bi,bk).call(this),(a=this.boundingClientRect)===(b=fa(this,bb))||a&&b&&a.top==b.top&&a.left==b.left&&a.right==b.right&&a.bottom==b.bottom||(this.callback(this.boundingClientRect),fc(this,bb,this.boundingClientRect)))},bk=function(){if(fa(this,bf)){let{top:a,left:b,width:c,height:d}=fo(this.element);fa(this,bf).style.overflow="hidden",fa(this,bf).style.visibility="visible",fa(this,bf).style.top=`${Math.floor(a)}px`,fa(this,bf).style.left=`${Math.floor(b)}px`,fa(this,bf).style.width=`${Math.floor(c)}px`,fa(this,bf).style.height=`${Math.floor(d)}px`}};var fF=new WeakMap,fG=new WeakMap,fH=class{constructor(a,b,c){this.callback=b,fb(this,bl),fb(this,bm,!1),fb(this,bn),fb(this,bo,fA(a=>{if(!fa(this,bm)&&a.target&&"contains"in a.target&&"function"==typeof a.target.contains){for(let b of fa(this,bn))if(a.target.contains(b)){this.callback(fa(this,bl).boundingClientRect);break}}},75));let d=function(a){let b=new Set,c=fz(a);for(;c;)b.add(c),c=fz(c);return b}(a),e=function(a,b){let c=new Set;for(let d of a){let a=function(a,b){let c=fF.get(a);return c||(c={disconnect:new fE(a,b=>{let c=fF.get(a);c&&c.callbacks.forEach(a=>a(b))},{skipInitial:!0}).disconnect,callbacks:new Set}),c.callbacks.add(b),fF.set(a,c),()=>{c.callbacks.delete(b),0===c.callbacks.size&&(fF.delete(a),c.disconnect())}}(d,b);c.add(a)}return()=>c.forEach(a=>a())}(d,b),f=function(a,b){var c;let d=a.ownerDocument;if(!fG.has(d)){let a=new AbortController,b=new Set;document.addEventListener("scroll",a=>b.forEach(b=>b(a)),{capture:!0,passive:!0,signal:a.signal}),fG.set(d,{disconnect:()=>a.abort(),listeners:b})}let{listeners:e,disconnect:f}=null!=(c=fG.get(d))?c:{};return e&&f?(e.add(b),()=>{e.delete(b),0===e.size&&(f(),fG.delete(d))}):()=>{}}(a,fa(this,bo));fc(this,bn,d),fc(this,bl,new fE(a,b,c)),this.disconnect=()=>{fa(this,bm)||(fc(this,bm,!0),e(),f(),fa(this,bl).disconnect())}}};function fI(a){return"showPopover"in a&&"hidePopover"in a&&"function"==typeof a.showPopover&&"function"==typeof a.hidePopover}function fJ(a){try{fI(a)&&a.isConnected&&a.hasAttribute("popover")&&!a.matches(":popover-open")&&a.showPopover()}catch(a){}}function fK(a){let b=fj(a),c=fg(a),d=(b.visualViewport,{height:a.clientHeight,width:a.clientWidth}),e={current:{x:a.scrollLeft,y:a.scrollTop},max:{x:a.scrollWidth-d.width,y:a.scrollHeight-d.height}},f=e.current.y<=0,g=e.current.x<=0,h=e.current.y>=e.max.y,i=e.current.x>=e.max.x;return{rect:c,position:e,isTop:f,isLeft:g,isBottom:h,isRight:i}}bl=new WeakMap,bm=new WeakMap,bn=new WeakMap,bo=new WeakMap;var fL=class{constructor(a){this.scheduler=a,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:a,resolvers:b}=this;for(let b of(this.pending=!1,this.tasks=new Set,this.resolvers=new Set,a))b();for(let a of b)a()}}schedule(a){return this.tasks.add(a),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(a=>this.resolvers.add(a))}},fM=new fL(a=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(a):a()}),fN=new fL(a=>setTimeout(a,50)),fO=new Map,fP=fO.clear.bind(fO);function fQ(a,b=!1){if(!b)return fR(a);let c=fO.get(a);return c||(c=fR(a),fO.set(a,c),fN.schedule(fP)),c}function fR(a){return fj(a).getComputedStyle(a)}var fS={excludeElement:!0,escapeShadowDOM:!0};function fT(a,b=fS){let{limit:c,excludeElement:d,escapeShadowDOM:e}=b,f=new Set;return a?function b(g){if(null!=c&&f.size>=c||!g)return f;if(fk(g)&&null!=g.scrollingElement&&!f.has(g.scrollingElement))return f.add(g.scrollingElement),f;if(e&&fs(g))return b(g.host);if(!fl(g))return fm(g)?b(g.parentElement):f;if(f.has(g))return f;let h=fQ(g,!0);if(d&&g===a||function(a,b=fQ(a,!0)){let c=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{let d=b[a];return"string"==typeof d&&c.test(d)})}(g,h)&&f.add(g),function(a,b=fQ(a,!0)){return"fixed"===b.position||"sticky"===b.position}(g,h)){let{scrollingElement:a}=g.ownerDocument;return a&&f.add(a),f}return b(g.parentNode)}(a):f}function fU(a,b=window.frameElement){let c={x:0,y:0,scaleX:1,scaleY:1};if(!a)return c;let d=fz(a);for(;d&&d!==b;){let a=fg(d),{x:b,y:e}=function(a,b=fg(a)){let c=Math.round(b.width),d=Math.round(b.height);if(fl(a))return{x:c/a.offsetWidth,y:d/a.offsetHeight};let e=fQ(a,!0);return{x:(parseFloat(e.width)||c)/c,y:(parseFloat(e.height)||d)/d}}(d,a);c.x=c.x+a.left,c.y=c.y+a.top,c.scaleX=c.scaleX*b,c.scaleY=c.scaleY*e,d=fz(d)}return c}function fV(a){if("none"===a)return null;let[b,c,d="0"]=a.split(" "),e={x:parseFloat(b),y:parseFloat(c),z:parseInt(d,10)};return isNaN(e.x)&&isNaN(e.y)?null:{x:isNaN(e.x)?0:e.x,y:isNaN(e.y)?0:e.y,z:isNaN(e.z)?0:e.z}}function fW(a){var b,c,d,e,f,g,h,i,j;let{scale:k,transform:l,translate:m}=a,n=function(a){if("none"===a)return null;let b=a.split(" "),c=parseFloat(b[0]),d=parseFloat(b[1]);return isNaN(c)&&isNaN(d)?null:{x:isNaN(c)?d:c,y:isNaN(d)?c:d}}(k),o=fV(m),p=function(a){if(a.startsWith("matrix3d(")){let b=a.slice(9,-1).split(/, /);return{x:+b[12],y:+b[13],scaleX:+b[0],scaleY:+b[5]}}if(a.startsWith("matrix(")){let b=a.slice(7,-1).split(/, /);return{x:+b[4],y:+b[5],scaleX:+b[0],scaleY:+b[3]}}return null}(l);if(!p&&!n&&!o)return null;let q={x:null!=(b=null==n?void 0:n.x)?b:1,y:null!=(c=null==n?void 0:n.y)?c:1},r={x:null!=(d=null==o?void 0:o.x)?d:0,y:null!=(e=null==o?void 0:o.y)?e:0},s={x:null!=(f=null==p?void 0:p.x)?f:0,y:null!=(g=null==p?void 0:p.y)?g:0,scaleX:null!=(h=null==p?void 0:p.scaleX)?h:1,scaleY:null!=(i=null==p?void 0:p.scaleY)?i:1};return{x:r.x+s.x,y:r.y+s.y,z:null!=(j=null==o?void 0:o.z)?j:0,scaleX:q.x*s.scaleX,scaleY:q.y*s.scaleY}}var fX=((p=fX||{})[p.Idle=0]="Idle",p[p.Forward=1]="Forward",p[p.Reverse=-1]="Reverse",p),fY={x:.2,y:.2},fZ={x:10,y:10};function f$(a,{block:b="nearest",inline:c="nearest"}={}){if(!fl(a))return;let d=fT(a),e=[];for(let f of d){if(!fl(f))continue;let{top:d,left:g}=function(a,b){let c=f_(a),d=f_(b);return{top:c.top-d.top-b.clientTop,left:c.left-d.left-b.clientLeft}}(a,f),h=d,i=g;for(let a of e)h-=a.scrollTop,i-=a.scrollLeft;if("none"!==b){let c=h<f.scrollTop;c!==h+a.offsetHeight>f.scrollTop+f.clientHeight&&("center"===b?f.scrollTop=h-f.clientHeight/2+a.offsetHeight/2:c?f.scrollTop=h:f.scrollTop=h+a.offsetHeight-f.clientHeight)}if("none"!==c){let b=i<f.scrollLeft;b!==i+a.offsetWidth>f.scrollLeft+f.clientWidth&&("center"===c?f.scrollLeft=i-f.clientWidth/2+a.offsetWidth/2:b?f.scrollLeft=i:f.scrollLeft=i+a.offsetWidth-f.clientWidth)}e.push(f)}}function f_(a){let b=0,c=0,d=a;for(;d;){b+=d.offsetTop,c+=d.offsetLeft;let a=d.offsetParent;if(!fl(a))break;b+=a.clientTop,c+=a.clientLeft,d=a}return{top:b,left:c}}function f0({element:a,keyframes:b,options:c}){return a.animate(b,c).finished}function f1(a,b=fQ(a).translate,c=!0){if(c){let b=ff(a,a=>"translate"in a);if(b){let{translate:a=""}=b[0];if("string"==typeof a){let b=fV(a);if(b)return b}}}if(b){let a=fV(b);if(a)return a}return{x:0,y:0,z:0}}var f2=new fL(a=>setTimeout(a,0)),f3=new Map,f4=f3.clear.bind(f3),f5=class extends d8{constructor(a,b={}){var c,d,e,f;let g,{frameTransform:h=fU(a),ignoreTransforms:i,getBoundingClientRect:j=fg}=b,k=function(a,b){let c=(function(a){let b=a.ownerDocument,c=f3.get(b);if(c)return c;c=b.getAnimations(),f3.set(b,c),f2.schedule(f4);let d=c.filter(b=>fe(b.effect)&&b.effect.target===a);return f3.set(a,d),c})(a).filter(a=>{var c,d;if(fe(a.effect)){let{target:e}=a.effect;if(null==(d=e&&(null==(c=b.isValidTarget)?void 0:c.call(b,e)))||d)return a.effect.getKeyframes().some(a=>{for(let c of b.properties)if(a[c])return!0})}}).map(a=>{let{effect:b,currentTime:c}=a,d=null==b?void 0:b.getComputedTiming().duration;if(!a.pending&&"finished"!==a.playState&&"number"==typeof d&&"number"==typeof c&&c<d)return a.currentTime=d,()=>{a.currentTime=c}});if(c.length>0)return()=>c.forEach(a=>null==a?void 0:a())}(a,{properties:["transform","translate","scale","width","height"],isValidTarget:b=>(b!==a||fq())&&b.contains(a)}),l=j(a),{top:m,left:n,width:o,height:p}=l,q=fQ(a),r=fW(q),s={x:null!=(c=null==r?void 0:r.scaleX)?c:1,y:null!=(d=null==r?void 0:r.scaleY)?d:1},t=function(a,b){let c,d,e,f=a.getAnimations();if(!f.length)return null;let g=!1;for(let a of f){if("running"!==a.playState)continue;let b=fe(a.effect)?a.effect.getKeyframes():[],f=b[b.length-1];if(!f)continue;let{transform:h,translate:i,scale:j}=f;"string"==typeof h&&h&&(c=h,g=!0),"string"==typeof i&&i&&(d=i,g=!0),"string"==typeof j&&j&&(e=j,g=!0)}return g?fW({transform:null!=c?c:b.transform,translate:null!=d?d:b.translate,scale:null!=e?e:b.scale}):null}(a,q);null==k||k(),r&&(g=function(a,b,c){let{scaleX:d,scaleY:e,x:f,y:g}=b,h=a.left-f-(1-d)*parseFloat(c),i=a.top-g-(1-e)*parseFloat(c.slice(c.indexOf(" ")+1)),j=d?a.width/d:a.width,k=e?a.height/e:a.height;return{width:j,height:k,top:i,right:h+j,bottom:i+k,left:h}}(l,r,q.transformOrigin),(i||t)&&(m=g.top,n=g.left,o=g.width,p=g.height));let u={width:null!=(e=null==g?void 0:g.width)?e:o,height:null!=(f=null==g?void 0:g.height)?f:p};if(t&&!i&&g){let a=function(a,b,c){let{scaleX:d,scaleY:e,x:f,y:g}=b,h=a.left+f+(1-d)*parseFloat(c),i=a.top+g+(1-e)*parseFloat(c.slice(c.indexOf(" ")+1)),j=d?a.width*d:a.width,k=e?a.height*e:a.height;return{width:j,height:k,top:i,right:h+j,bottom:i+k,left:h}}(g,t,q.transformOrigin);m=a.top,n=a.left,o=a.width,p=a.height,s.x=t.scaleX,s.y=t.scaleY}h&&(i||(n*=h.scaleX,o*=h.scaleX,m*=h.scaleY,p*=h.scaleY),n+=h.x,m+=h.y),super(n,m,o,p),this.scale=s,this.intrinsicWidth=u.width,this.intrinsicHeight=u.height}};function f6(a){return"style"in a&&"object"==typeof a.style&&null!==a.style&&"setProperty"in a.style&&"removeProperty"in a.style&&"function"==typeof a.style.setProperty&&"function"==typeof a.style.removeProperty}var f7=class{constructor(a){this.element=a,this.initial=new Map}set(a,b=""){let{element:c}=this;if(f6(c))for(let[d,e]of Object.entries(a)){let a=`${b}${d}`;this.initial.has(a)||this.initial.set(a,c.style.getPropertyValue(a)),c.style.setProperty(a,"string"==typeof e?e:`${e}px`)}}remove(a,b=""){let{element:c}=this;if(f6(c))for(let d of a){let a=`${b}${d}`;c.style.removeProperty(a)}}reset(){let{element:a}=this;if(f6(a)){for(let[b,c]of this.initial)a.style.setProperty(b,c);""===a.getAttribute("style")&&a.removeAttribute("style")}}};function f8(a){return!!a&&(a instanceof fj(a).Element||fi(a)&&a.nodeType===Node.ELEMENT_NODE)}function f9(a){if(!a)return!1;let{KeyboardEvent:b}=fj(a.target);return a instanceof b}var ga={};function gb(a){let b=null==ga[a]?0:ga[a]+1;return ga[a]=b,`${a}-${b}`}var gc=a=>{var b;return null!=(b=(({dragOperation:a,droppable:b})=>{let c=a.position.current;if(!c)return null;let{id:d}=b;return b.shape&&b.shape.containsPoint(c)?{id:d,value:1/d7.distance(b.shape.center,c),type:eY.PointerIntersection,priority:eX.High}:null})(a))?b:(({dragOperation:a,droppable:b})=>{let{shape:c}=a;if(!b.shape||!(null==c?void 0:c.current))return null;let d=c.current.intersectionArea(b.shape);if(d){let{position:e}=a,f=d7.distance(b.shape.center,e.current),g=d/(c.current.area+b.shape.area-d);return{id:b.id,value:g/f,type:eY.ShapeIntersection,priority:eX.Normal}}return null})(a)},gd=a=>{let{dragOperation:b,droppable:c}=a,{shape:d,position:e}=b;if(!c.shape)return null;let f=d?d8.from(d.current.boundingRectangle).corners:void 0,g=d8.from(c.shape.boundingRectangle).corners.reduce((a,b,c)=>{var d;return a+d7.distance(d7.from(b),null!=(d=null==f?void 0:f[c])?d:e.current)},0);return{id:c.id,value:1/(g/4),type:eY.Collision,priority:eX.Normal}},ge=Object.create,gf=Object.defineProperty,gg=Object.defineProperties,gh=Object.getOwnPropertyDescriptor,gi=Object.getOwnPropertyDescriptors,gj=Object.getOwnPropertySymbols,gk=Object.prototype.hasOwnProperty,gl=Object.prototype.propertyIsEnumerable,gm=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a),gn=a=>{throw TypeError(a)},go=(a,b,c)=>b in a?gf(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,gp=(a,b)=>{for(var c in b||(b={}))gk.call(b,c)&&go(a,c,b[c]);if(gj)for(var c of gj(b))gl.call(b,c)&&go(a,c,b[c]);return a},gq=(a,b)=>gf(a,"name",{value:b,configurable:!0}),gr=(a,b)=>{var c={};for(var d in a)gk.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&gj)for(var d of gj(a))0>b.indexOf(d)&&gl.call(a,d)&&(c[d]=a[d]);return c},gs=a=>{var b;return[,,,ge(null!=(b=null==a?void 0:a[gm("metadata")])?b:null)]},gt=["class","method","getter","setter","accessor","field","value","get","set"],gu=a=>void 0!==a&&"function"!=typeof a?gn("Function expected"):a,gv=(a,b,c,d,e)=>({kind:gt[a],name:b,metadata:d,addInitializer:a=>c._?gn("Already initialized"):e.push(gu(a||null))}),gw=(a,b)=>go(b,gm("metadata"),a[3]),gx=(a,b,c,d)=>{for(var e=0,f=a[b>>1],g=f&&f.length;e<g;e++)1&b?f[e].call(c):d=f[e].call(c,d);return d},gy=(a,b,c,d,e,f)=>{var g,h,i,j,k,l=7&b,m=!!(8&b),n=!!(16&b),o=l>3?a.length+1:l?m?1:2:0,p=gt[l+5],q=l>3&&(a[o-1]=[]),r=a[o]||(a[o]=[]),s=l&&(n||m||(e=e.prototype),l<5&&(l>3||!n)&&gh(l<4?e:{get[c](){return gB(this,f)},set[c](a){return gD(this,f,a)}},c));l?n&&l<4&&gq(f,(l>2?"set ":l>1?"get ":"")+c):gq(e,c);for(var t=d.length-1;t>=0;t--)j=gv(l,c,i={},a[3],r),l&&(j.static=m,j.private=n,k=j.access={has:n?a=>gA(e,a):a=>c in a},3^l&&(k.get=n?a=>(1^l?gB:gE)(a,e,4^l?f:s.get):a=>a[c]),l>2&&(k.set=n?(a,b)=>gD(a,e,b,4^l?f:s.set):(a,b)=>a[c]=b)),h=(0,d[t])(l?l<4?n?f:s[p]:l>4?void 0:{get:s.get,set:s.set}:e,j),i._=1,4^l||void 0===h?gu(h)&&(l>4?q.unshift(h):l?n?f=h:s[p]=h:e=h):"object"!=typeof h||null===h?gn("Object expected"):(gu(g=h.get)&&(s.get=g),gu(g=h.set)&&(s.set=g),gu(g=h.init)&&q.unshift(g));return l||gw(a,e),s&&gf(e,c,s),n?4^l?f:s:e},gz=(a,b,c)=>b.has(a)||gn("Cannot "+c),gA=(a,b)=>Object(b)!==b?gn('Cannot use the "in" operator on this value'):a.has(b),gB=(a,b,c)=>(gz(a,b,"read from private field"),c?c.call(a):b.get(a)),gC=(a,b,c)=>b.has(a)?gn("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),gD=(a,b,c,d)=>(gz(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),gE=(a,b,c)=>(gz(a,b,"access private method"),c),gF={draggable:"To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel."},gG={dragstart({operation:{source:a}}){if(a)return`Picked up draggable item ${a.id}.`},dragover({operation:{source:a,target:b}}){if(a&&a.id!==(null==b?void 0:b.id))return b?`Draggable item ${a.id} was moved over droppable target ${b.id}.`:`Draggable item ${a.id} is no longer over a droppable target.`},dragend({operation:{source:a,target:b},canceled:c}){if(a)return c?`Dragging was cancelled. Draggable item ${a.id} was dropped.`:b?`Draggable item ${a.id} was dropped over droppable target ${b.id}`:`Draggable item ${a.id} was dropped.`}},gH=["dragover","dragmove"],gI=class extends eI{constructor(a,b){var c,d;let e,f,g,h,i,j;super(a);let{id:k,idPrefix:{description:l="dnd-kit-description",announcement:m="dnd-kit-announcement"}={},announcements:n=gG,screenReaderInstructions:o=gF,debounce:p=500}=null!=b?b:{},q=k?`${l}-${k}`:gb(l),r=k?`${m}-${k}`:gb(m),s=(a=h)=>{g&&a&&(null==g?void 0:g.nodeValue)!==a&&(g.nodeValue=a)},t=()=>fM.schedule(s),u=(c=t,d=p,(j=()=>{clearTimeout(i),i=setTimeout(c,d)}).cancel=()=>clearTimeout(i),j),v=Object.entries(n).map(([a,b])=>this.manager.monitor.addEventListener(a,(c,d)=>{let e=g;if(!e)return;let f=null==b?void 0:b(c,d);f&&e.nodeValue!==f&&(h=f,gH.includes(a)?u():(t(),u.cancel()))})),w=()=>{var a;let b=[];if(!(null==e?void 0:e.isConnected)){let c;a=o.draggable,(c=document.createElement("div")).id=q,c.style.setProperty("display","none"),c.textContent=a,e=c,b.push(e)}if(!(null==f?void 0:f.isConnected)){let a;(a=document.createElement("div")).id=r,a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),a.setAttribute("aria-atomic","true"),a.style.setProperty("position","fixed"),a.style.setProperty("width","1px"),a.style.setProperty("height","1px"),a.style.setProperty("margin","-1px"),a.style.setProperty("border","0"),a.style.setProperty("padding","0"),a.style.setProperty("overflow","hidden"),a.style.setProperty("clip","rect(0 0 0 0)"),a.style.setProperty("clip-path","inset(100%)"),a.style.setProperty("white-space","nowrap"),f=a,g=document.createTextNode(""),f.appendChild(g),b.push(f)}b.length>0&&document.body.append(...b)},x=new Set;function y(){for(let a of x)a()}this.registerEffect(()=>{var a;for(let b of(x.clear(),this.manager.registry.draggables.value)){let c=null!=(a=b.handle)?a:b.element;if(c){for(let a of(e&&f||x.add(w),(!["input","select","textarea","a","button"].includes(c.tagName.toLowerCase())||fq())&&!c.hasAttribute("tabindex")&&x.add(()=>c.setAttribute("tabindex","0")),c.hasAttribute("role")||"button"===c.tagName.toLowerCase()||x.add(()=>c.setAttribute("role","button")),c.hasAttribute("aria-roledescription")||x.add(()=>c.setAttribute("aria-roledescription","draggable")),c.hasAttribute("aria-describedby")||x.add(()=>c.setAttribute("aria-describedby",q)),["aria-pressed","aria-grabbed"])){let d=String(b.isDragging);c.getAttribute(a)!==d&&x.add(()=>c.setAttribute(a,d))}let a=String(b.disabled);c.getAttribute("aria-disabled")!==a&&x.add(()=>c.setAttribute("aria-disabled",a))}}x.size>0&&fM.schedule(y)}),this.destroy=()=>{super.destroy(),null==e||e.remove(),null==f||f.remove(),v.forEach(a=>a())}}},gJ=new Map,gK=class extends(bt=eJ,bs=[dH],br=[dI],bq=[dI],bp=[dI],bt){constructor(a,b){super(a,b),gx(bv,5,this),gC(this,bx),gC(this,bu,new Set),gC(this,bw,gx(bv,8,this,new Set)),gx(bv,11,this),this.registerEffect(gE(this,bx,by))}register(a){return gB(this,bu).add(a),()=>{gB(this,bu).delete(a)}}addRoot(a){return c$(()=>{let b=new Set(this.additionalRoots);b.add(a),this.additionalRoots=b}),()=>{c$(()=>{let b=new Set(this.additionalRoots);b.delete(a),this.additionalRoots=b})}}get sourceRoot(){var a;let{source:b}=this.manager.dragOperation;return ft(null!=(a=null==b?void 0:b.element)?a:null)}get targetRoot(){var a;let{target:b}=this.manager.dragOperation;return ft(null!=(a=null==b?void 0:b.element)?a:null)}get roots(){let{status:a}=this.manager.dragOperation;return a.initializing||a.initialized?new Set([...[this.sourceRoot,this.targetRoot].filter(a=>null!=a),...this.additionalRoots]):new Set}};bv=gs(bt),bu=new WeakMap,bw=new WeakMap,bx=new WeakSet,by=function(){let{roots:a}=this,b=[];for(let c of a)for(let a of gB(this,bu))b.push(gE(this,bx,bz).call(this,c,a));return()=>{for(let a of b)a()}},bz=function(a,b){let c=gJ.get(a);c||(c=new Map,gJ.set(a,c));let d=c.get(b);if(!d){let e=fk(a)?gE(this,bx,bA).call(this,a,c,b):gE(this,bx,bB).call(this,a,c,b);if(!e)return()=>{};d=e,c.set(b,d)}d.refCount++;let e=!1;return()=>{e||(e=!0,d.refCount--,0===d.refCount&&d.cleanup())}},bA=function(a,b,c){var d;let e=a.createElement("style"),{nonce:f}=null!=(d=this.options)?d:{};f&&e.setAttribute("nonce",f),e.textContent=c,a.head.prepend(e);let g=new MutationObserver(b=>{for(let c of b)for(let b of Array.from(c.removedNodes))if(b===e)return void a.head.prepend(e)});return g.observe(a.head,{childList:!0}),{refCount:0,cleanup:()=>{g.disconnect(),e.remove(),b.delete(c),0===b.size&&gJ.delete(a)}}},bB=function(a,b,c){"adoptedStyleSheets"in a&&Array.isArray(a.adoptedStyleSheets);let d=a.ownerDocument.defaultView,{CSSStyleSheet:e}=null!=d?d:{};if(!e)return null;let f=new e;return f.replaceSync(c),a.adoptedStyleSheets.push(f),{refCount:0,cleanup:()=>{var d;if(fs(a)&&(null==(d=a.host)?void 0:d.isConnected)){let b=a.adoptedStyleSheets.indexOf(f);-1!==b&&a.adoptedStyleSheets.splice(b,1)}b.delete(c),0===b.size&&gJ.delete(a)}}},gy(bv,4,"additionalRoots",bs,gK,bw),gy(bv,2,"sourceRoot",br,gK),gy(bv,2,"targetRoot",bq,gK),gy(bv,2,"roots",bp,gK),gw(bv,gK),gK.configure=eG(gK);var gL=class extends eI{constructor(a,b){super(a,b),this.manager=a;let{cursor:c="grabbing"}=null!=b?b:{},d=a.registry.plugins.get(gK),e=null==d?void 0:d.register(`* { cursor: ${c} !important; }`);if(e){let a=this.destroy.bind(this);this.destroy=()=>{e(),a()}}}},gM="data-dnd-",gN=`${gM}dropping`,gO="--dnd-",gP=`${gM}dragging`,gQ=`${gM}placeholder`,gR=[gP,gQ,"popover","aria-pressed","aria-grabbing"],gS=["view-transition-name"],gT=`
  :is(:root,:host) [${gP}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${gO}top, 0px) !important;
    left: var(${gO}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${gO}width, auto);
    max-width: var(${gO}width, auto);
    height: var(${gO}height, auto);
    max-height: var(${gO}height, auto);
    transform: var(${gO}transform, none) !important;
    transition: var(${gO}transition) !important;
  }

  :is(:root,:host) [${gQ}] {
    transition: none;
  }

  :is(:root,:host) [${gQ}='hidden'] {
    visibility: hidden;
  }

  [${gP}] * {
    pointer-events: none !important;
  }

  [${gP}]:not([${gN}]) {
    translate: var(${gO}translate) !important;
  }

  [${gP}][style*='${gO}scale'] {
    scale: var(${gO}scale) !important;
    transform-origin: var(${gO}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${gP}][popover]) {
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
  [${gP}]::backdrop, [${gM}overlay]:not([${gP}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g," ").replace(/\s+/g," ").trim();function gU(a,b){return a===b||fz(a)===fz(b)}function gV(a){let{target:b}=a;"newState"in a&&"closed"===a.newState&&f8(b)&&b.hasAttribute("popover")&&requestAnimationFrame(()=>fJ(b))}function gW(a){return"TR"===a.tagName}var gX=class extends(bD=eI,bC=[dH],bD){constructor(a,b){super(a,b),gC(this,bG),gC(this,bF,gx(bE,8,this)),gx(bE,11,this),this.state={initial:{},current:{}};let c=a.registry.plugins.get(gK),d=null==c?void 0:c.register(gT);if(d){let a=this.destroy.bind(this);this.destroy=()=>{d(),a()}}this.registerEffect(gE(this,bG,bH).bind(this,c)),this.registerEffect(gE(this,bG,bI))}};bE=gs(bD),bF=new WeakMap,bG=new WeakSet,bH=function(a){let{overlay:b}=this;if(!b||!a)return;let c=ft(b);if(c)return a.addRoot(c)},bI=function(){var a,b,c,d,e,f,g,h;let i,j,k,{state:l,manager:m,options:n}=this,{dragOperation:o}=m,{position:p,source:q,status:r}=o;if(r.idle){l.current={},l.initial={};return}if(!q)return;let{element:s}=q,t=q.pluginConfig(gX),u=null!=(b=null!=(a=null==t?void 0:t.feedback)?a:null==n?void 0:n.feedback)?b:"default",v="function"==typeof u?u(q,m):u;if(!s||"none"===v||!r.initialized||r.initializing)return;let{initial:w}=l,x=null!=(c=this.overlay)?c:s,y=fU(x),z=fU(s),A=!gU(s,x),B=new f5(s,{frameTransform:A?z:null,ignoreTransforms:!A}),C={x:z.scaleX/y.scaleX,y:z.scaleY/y.scaleY},{width:D,height:E,top:F,left:G}=B;A&&(D/=C.x,E/=C.y);let H=new f7(x),I=fQ(s),{transition:J,translate:K,boxSizing:L,paddingBlockStart:M,paddingBlockEnd:N,paddingInlineStart:O,paddingInlineEnd:P,borderInlineStartWidth:Q,borderInlineEndWidth:R,borderBlockStartWidth:S,borderBlockEndWidth:T}=I,U=J.split(",").filter(a=>!/^\s*(transform|translate|scale)\b/.test(a)).join(","),V=fW(I),W=I.transform,X="clone"===v,Y="content-box"===L,Z=Y?parseInt(O)+parseInt(P)+parseInt(Q)+parseInt(R):0,$=Y?parseInt(M)+parseInt(N)+parseInt(S)+parseInt(T):0,_="move"===v||this.overlay?null:function(a,b="hidden"){return c$(()=>{let c,d,e,{element:f,manager:g}=a;if(!f||!g)return;let h=function(a,b){let c=new Map;for(let d of b)if(d.element&&(a===d.element||a.contains(d.element))){let a=`${gM}${gb("dom-id")}`;d.element.setAttribute(a,""),c.set(d,a)}return c}(f,g.registry.droppables),i=[],j=(c="input, textarea, select, canvas, [contenteditable]",d=f.cloneNode(!0),e=Array.from(f.querySelectorAll(c)),Array.from(d.querySelectorAll(c)).forEach((a,b)=>{let c=e[b];if(fv(a)&&fv(c)&&("file"!==a.type&&(a.value=c.value),"radio"===a.type&&a.name&&(a.name=`Cloned__${a.name}`)),fw(a)&&fw(c)&&c.width>0&&c.height>0){let b=a.getContext("2d");null==b||b.drawImage(c,0,0)}}),d),{remove:k}=j;return function(a,b,c){for(let[d,e]of a){if(!d.element)continue;let a=`[${e}]`,f=b.matches(a)?b:b.querySelector(a);if(d.element.removeAttribute(e),!f)continue;let g=d.element;d.proxy=f,f.removeAttribute(e),fx.set(g,f),c.push(()=>{fx.delete(g),d.proxy=void 0})}}(h,j,i),function(a,b="hidden"){a.setAttribute("inert","true"),a.setAttribute("tab-index","-1"),a.setAttribute("aria-hidden","true"),a.setAttribute(gQ,b)}(j,b),j.remove=()=>{i.forEach(a=>a()),k.call(j)},j})}(q,X?"clone":"hidden"),aa=c$(()=>f9(m.dragOperation.activatorEvent));if(!w.translate){if(this.overlay&&V)w.translate={x:V.x,y:V.y};else if("none"!==K){let a=fV(K);a&&(w.translate=a)}}if(!w.transformOrigin){let a=c$(()=>p.current),b=G+(null!=(d=null==V?void 0:V.x)?d:0),c=F+(null!=(e=null==V?void 0:V.y)?e:0);w.transformOrigin={x:(a.x-b*y.scaleX-y.x)/(D*y.scaleX),y:(a.y-c*y.scaleY-y.y)/(E*y.scaleY)}}let{transformOrigin:ab}=w,ac=F*y.scaleY+y.y,ad=G*y.scaleX+y.x;if(!w.coordinates&&(w.coordinates={x:ad,y:ac},1!==C.x||1!==C.y)){let{scaleX:a,scaleY:b}=z,{x:c,y:d}=ab;w.coordinates.x+=(D*a-D)*c,w.coordinates.y+=(E*b-E)*d}w.dimensions||(w.dimensions={width:D,height:E}),w.frameTransform||(w.frameTransform=y);let ae={x:w.coordinates.x-ad,y:w.coordinates.y-ac},af={width:(w.dimensions.width*w.frameTransform.scaleX-D*y.scaleX)*ab.x,height:(w.dimensions.height*w.frameTransform.scaleY-E*y.scaleY)*ab.y},ag={x:ae.x/y.scaleX+af.width,y:ae.y/y.scaleY+af.height},ah={left:G+ag.x,top:F+ag.y};x.setAttribute(gP,"true");let ai=c$(()=>o.transform),aj=null!=(f=w.translate)?f:{x:0,y:0},ak=ai.x*y.scaleX+aj.x,al=ai.y*y.scaleY+aj.y,am=fr();H.set({width:D-Z,height:E-$,top:ah.top+am.y,left:ah.left+am.x,translate:`${ak}px ${al}px 0`,transform:this.overlay?"none":W,transition:U?`${U}, translate 0ms linear`:"translate 0ms linear",scale:A?`${C.x} ${C.y}`:"","transform-origin":`${100*ab.x}% ${100*ab.y}%`},gO),_&&(s.insertAdjacentElement("afterend",_),(null==n?void 0:n.rootElement)&&("function"==typeof n.rootElement?n.rootElement(q):n.rootElement).appendChild(s)),fI(x)&&(x.hasAttribute("popover")||x.setAttribute("popover","manual"),fJ(x),x.addEventListener("beforetoggle",gV));let an=(h={placeholder:_,element:s,feedbackElement:x,frameTransform:y,transformOrigin:ab,width:D,height:E,top:F,left:G,widthOffset:Z,heightOffset:$,delta:ag,styles:H,dragOperation:o,getTranslate:()=>l.current.translate,getElementMutationObserver:()=>i,getSavedCellWidths:()=>k,setSavedCellWidths:a=>{k=a}},new ResizeObserver(()=>{var a,b,c;let d=new f5(h.placeholder,{frameTransform:h.frameTransform,ignoreTransforms:!0}),e=null!=(a=h.transformOrigin)?a:{x:1,y:1},f=(h.width-d.width)*e.x+h.delta.x,g=(h.height-d.height)*e.y+h.delta.y,i=fr();if(h.styles.set({width:d.width-h.widthOffset,height:d.height-h.heightOffset,top:h.top+g+i.y,left:h.left+f+i.x},gO),null==(b=h.getElementMutationObserver())||b.takeRecords(),gW(h.element)&&gW(h.placeholder)){let a=Array.from(h.element.cells),b=Array.from(h.placeholder.cells);for(let[c,d]of(h.getSavedCellWidths()||h.setSavedCellWidths(a.map(a=>a.style.width)),a.entries())){let a=b[c];d.style.width=`${a.getBoundingClientRect().width}px`}}let j=null!=(c=h.getTranslate())?c:{x:0,y:0},k=h.left+f+i.x+j.x,l=h.top+g+i.y+j.y,m=d.width-h.widthOffset,n=d.height-h.heightOffset,o=h.frameTransform;h.dragOperation.shape=new d8(k*o.scaleX+o.x,l*o.scaleY+o.y,m*o.scaleX,n*o.scaleY)})),ao=new f5(x);c$(()=>o.shape=ao);let ap=fj(x),aq=a=>{this.manager.actions.stop({event:a})},ar=fu(ap);if(aa&&ap.addEventListener("resize",aq),"idle"===c$(()=>q.status)&&requestAnimationFrame(()=>q.status="dragging"),_){let a,b;an.observe(_),(a=new MutationObserver(a=>{let b=!1;for(let c of a){if(c.target!==s){b=!0;continue}if("attributes"!==c.type)continue;let a=c.attributeName;if(a.startsWith("aria-")||gR.includes(a))continue;let d=s.getAttribute(a);if("style"===a){if(f6(s)&&f6(_)){let a=s.style;for(let b of Array.from(_.style))""===a.getPropertyValue(b)&&_.style.removeProperty(b);for(let b of Array.from(a)){if(gS.includes(b)||b.startsWith(gO))continue;let c=a.getPropertyValue(b);_.style.setProperty(b,c)}}}else null!==d?_.setAttribute(a,d):_.removeAttribute(a)}b&&X&&_.replaceChildren(...s.cloneNode(!0).childNodes)})).observe(s,{attributes:!0,subtree:!0,childList:!0}),i=a,(b=new MutationObserver(a=>{for(let b of a)if(0!==b.addedNodes.length)for(let a of Array.from(b.addedNodes)){if(a.contains(s)&&s.nextElementSibling!==_){s.insertAdjacentElement("afterend",_),fJ(x);return}if(a.contains(_)&&_.previousElementSibling!==s){_.insertAdjacentElement("beforebegin",s),fJ(x);return}}s.isConnected&&_.isConnected&&s.nextElementSibling!==_&&(s.insertAdjacentElement("afterend",_),fJ(x))})).observe(s.ownerDocument.body,{childList:!0,subtree:!0}),j=b}let as=null==(g=m.dragOperation.source)?void 0:g.id,at=()=>{var a;if(!aa||null==as)return;let b=m.registry.draggables.get(as),c=null!=(a=null==b?void 0:b.handle)?a:null==b?void 0:b.element;fl(c)&&c.focus()},au=()=>{var a;if(null==i||i.disconnect(),null==j||j.disconnect(),an.disconnect(),ap.removeEventListener("resize",aq),fI(x)&&(x.removeEventListener("beforetoggle",gV),x.removeAttribute("popover")),x.removeAttribute(gP),H.reset(),k&&gW(s))for(let[b,c]of Array.from(s.cells).entries())c.style.width=null!=(a=k[b])?a:"";q.status="idle";let b=null!=l.current.translate,c=o.status.dragging;_&&(!c&&b||_.parentElement!==x.parentElement)&&x.isConnected&&_.replaceWith(x),null==_||_.remove()},av=null==n?void 0:n.dropAnimation,aw=this,ax=dK(()=>{var a,b,c;let{transform:d,status:e}=o;if((d.x||d.y||l.current.translate)&&e.dragging){let e=null!=(a=w.translate)?a:{x:0,y:0},f={x:d.x/y.scaleX+e.x,y:d.y/y.scaleY+e.y},g=l.current.translate,h=c$(()=>o.modifiers),j=c$(()=>{var a;return null==(a=o.shape)?void 0:a.current}),k=null==n?void 0:n.keyboardTransition,m=aa&&!ar&&null!==k?`${null!=(b=null==k?void 0:k.duration)?b:250}ms ${null!=(c=null==k?void 0:k.easing)?c:"cubic-bezier(0.25, 1, 0.5, 1)"}`:"0ms linear";if(H.set({transition:U?`${U}, translate ${m}`:`translate ${m}`,translate:`${f.x}px ${f.y}px 0`},gO),null==i||i.takeRecords(),j&&j!==ao&&g&&!h.length){let a=d7.delta(f,g);o.shape=d8.from(j.boundingRectangle).translate(a.x*y.scaleX,a.y*y.scaleY)}else o.shape=new f5(x);l.current.translate=f}},function(){if(o.status.dropped){this.dispose(),q.status="dropping";let a=(null==t?void 0:t.dropAnimation)!==void 0?t.dropAnimation:void 0!==aw.dropAnimation?aw.dropAnimation:av,b=l.current.translate,c=null!=b;if(b||s===x||(b={x:0,y:0}),!b||null===a)return void au();m.renderer.rendering.then(()=>{!function(a){var b,c,d,e;let{animation:f}=a;if("function"==typeof f)return Promise.resolve(f({source:a.source,element:a.element,feedbackElement:a.feedbackElement,placeholder:a.placeholder,translate:a.translate,moved:a.moved})).then(()=>{a.cleanup(),requestAnimationFrame(a.restoreFocus)});let{duration:g=250,easing:h="ease"}=null!=f?f:{};fJ(a.feedbackElement);let[,i]=null!=(b=ff(a.feedbackElement,a=>"translate"in a))?b:[];null==i||i.pause();let j=null!=(c=a.placeholder)?c:a.element,k={frameTransform:gU(a.feedbackElement,j)?null:void 0},l=new f5(a.feedbackElement,k),m=null!=(d=fV(fQ(a.feedbackElement).translate))?d:a.translate,n=new f5(j,k),o=d8.delta(l,n,a.alignment),p={x:m.x-o.x,y:m.y-o.y},q=Math.round(l.intrinsicHeight)!==Math.round(n.intrinsicHeight)?{minHeight:[`${l.intrinsicHeight}px`,`${n.intrinsicHeight}px`],maxHeight:[`${l.intrinsicHeight}px`,`${n.intrinsicHeight}px`]}:{},r=Math.round(l.intrinsicWidth)!==Math.round(n.intrinsicWidth)?{minWidth:[`${l.intrinsicWidth}px`,`${n.intrinsicWidth}px`],maxWidth:[`${l.intrinsicWidth}px`,`${n.intrinsicWidth}px`]}:{};a.styles.set({transition:a.transition},gO),a.feedbackElement.setAttribute(gN,""),null==(e=a.getElementMutationObserver())||e.takeRecords(),f0({element:a.feedbackElement,keyframes:gg(gp(gp({},q),r),gi({translate:[`${m.x}px ${m.y}px 0`,`${p.x}px ${p.y}px 0`]})),options:{duration:fu(fj(a.feedbackElement))?0:a.moved||a.feedbackElement!==a.element?g:0,easing:h}}).then(()=>{a.feedbackElement.removeAttribute(gN),null==i||i.finish(),a.cleanup(),requestAnimationFrame(a.restoreFocus)})}({source:q,element:s,feedbackElement:x,placeholder:_,translate:b,moved:c,transition:J,alignment:q.alignment,styles:H,animation:null!=a?a:void 0,getElementMutationObserver:()=>i,cleanup:au,restoreFocus:at})})}});return()=>{au(),ax()}},gy(bE,4,"overlay",bC,gX,bF),gw(bE,gX),gX.configure=eG(gX),bL=[dH],bM=fX.Forward,bJ=[dH],bK=fX.Reverse;var gY=class{constructor(){gC(this,bO,gx(bN,8,this,!0)),gx(bN,11,this),gC(this,bP,gx(bN,12,this,!0)),gx(bN,15,this)}isLocked(a){return a!==fX.Idle&&(null==a?!0===this[fX.Forward]&&!0===this[fX.Reverse]:!0===this[a])}unlock(a){a!==fX.Idle&&(this[a]=!1)}};bN=gs(null),bO=new WeakMap,bP=new WeakMap,gy(bN,4,bM,bL,gY,bO),gy(bN,4,bK,bJ,gY,bP),gw(bN,gY);var gZ=[fX.Forward,fX.Reverse],g$=class{constructor(){this.x=new gY,this.y=new gY}isLocked(){return this.x.isLocked()&&this.y.isLocked()}},g_=class extends eI{constructor(a){super(a);let b=c7(new g$),c=null;this.signal=b,dg(()=>{let{status:d}=a.dragOperation;if(!d.initialized){c=null,b.value=new g$;return}let{delta:e}=a.dragOperation.position;if(c){let a={x:g0(e.x,c.x),y:g0(e.y,c.y)},d=b.peek();cZ(()=>{for(let b of ec)for(let c of gZ)a[b]===c&&d[b].unlock(c);b.value=d})}c=e})}get current(){return this.signal.peek()}};function g0(a,b){return Math.sign(a-b)}var g1=class extends(bR=eJ,bQ=[dH],bR){constructor(a){super(a),gC(this,bT,gx(bS,8,this,!1)),gx(bS,11,this),gC(this,bU),gC(this,bV,()=>{if(!gB(this,bU))return;let{element:a,by:b}=gB(this,bU);b.y&&(a.scrollTop+=b.y),b.x&&(a.scrollLeft+=b.x)}),this.scroll=(a,b)=>{var c;if(this.disabled)return!1;let d=this.getScrollableElements();if(!d)return gD(this,bU,void 0),!1;let{position:e}=this.manager.dragOperation,f=null==e?void 0:e.current;if(f){let{by:e}=null!=a?a:{},g=e?{x:g2(e.x),y:g2(e.y)}:void 0,h=g?void 0:this.scrollIntentTracker.current;if(null==h?void 0:h.isLocked())return!1;for(let a of d){let d=function(a,b){let{isTop:c,isBottom:d,isLeft:e,isRight:f,position:g}=fK(a),{x:h,y:i}=null!=b?b:{x:0,y:0},j=!c&&g.current.y+i>0,k=!d&&g.current.y+i<g.max.y,l=!e&&g.current.x+h>0,m=!f&&g.current.x+h<g.max.x;return{top:j,bottom:k,left:l,right:m,x:l||m,y:j||k}}(a,e);if(d.x||d.y){let{speed:d,direction:i}=function(a,b,c,d=25,e=fY,f=fZ){let{x:g,y:h}=b,{rect:i,isTop:j,isBottom:k,isLeft:l,isRight:m}=fK(a),n=fU(a),o=fW(fQ(a,!0)),p=null!==o&&(null==o?void 0:o.scaleX)<0,q=null!==o&&(null==o?void 0:o.scaleY)<0,r=new d8(i.left*n.scaleX+n.x,i.top*n.scaleY+n.y,i.width*n.scaleX,i.height*n.scaleY),s={x:0,y:0},t={x:0,y:0},u={height:r.height*e.y,width:r.width*e.x};return u.height>0&&(!j||q&&!k)&&h<=r.top+u.height&&(null==c?void 0:c.y)!==1&&g>=r.left-f.x&&g<=r.right+f.x?(s.y=q?1:-1,t.y=d*Math.abs((r.top+u.height-h)/u.height)):u.height>0&&(!k||q&&!j)&&h>=r.bottom-u.height&&(null==c?void 0:c.y)!==-1&&g>=r.left-f.x&&g<=r.right+f.x&&(s.y=q?-1:1,t.y=d*Math.abs((r.bottom-u.height-h)/u.height)),u.width>0&&(!m||p&&!l)&&g>=r.right-u.width&&(null==c?void 0:c.x)!==-1&&h>=r.top-f.y&&h<=r.bottom+f.y?(s.x=p?-1:1,t.x=d*Math.abs((r.right-u.width-g)/u.width)):u.width>0&&(!l||p&&!m)&&g<=r.left+u.width&&(null==c?void 0:c.x)!==1&&h>=r.top-f.y&&h<=r.bottom+f.y&&(s.x=p?1:-1,t.x=d*Math.abs((r.left+u.width-g)/u.width)),{direction:s,speed:t}}(a,f,g,null==b?void 0:b.acceleration,null==b?void 0:b.threshold);if(h)for(let a of ec)h[a].isLocked(i[a])&&(d[a]=0,i[a]=0);if(i.x||i.y){let{x:b,y:f}=null!=e?e:i,g=b*d.x,h=f*d.y;if(g||h){let b=null==(c=gB(this,bU))?void 0:c.by;if(this.autoScrolling&&b&&(b.x&&!g||b.y&&!h))continue;return gD(this,bU,{element:a,by:{x:g,y:h}}),fM.schedule(gB(this,bV)),!0}}}}}return gD(this,bU,void 0),!1};let b=null,c=null,d=dF(()=>{let{position:c,source:d}=a.dragOperation;if(!c)return null;let e=function a(b,{x:c,y:d}){var e;let f=b.elementFromPoint(c,d);if((null==(e=f)?void 0:e.tagName)==="IFRAME"){let{contentDocument:b}=f;if(b){let{left:e,top:g}=f.getBoundingClientRect();return a(b,{x:c-e,y:d-g})}}return f}(ft(null==d?void 0:d.element),c.current);return e&&(b=e),null!=e?e:b}),e=dF(()=>{let b=d.value,{documentElement:e}=fn(b);if(!b||b===e){let{target:b}=a.dragOperation,d=null==b?void 0:b.element;if(d){let a=fT(d,{excludeElement:!1});return c=a,a}}if(b){let a=fT(b,{excludeElement:!1});return this.autoScrolling&&c&&a.size<(null==c?void 0:c.size)?c:(c=a,a)}return c=null,null},dG);this.getScrollableElements=()=>e.value,this.scrollIntentTracker=new g_(a),this.destroy=a.monitor.addEventListener("dragmove",b=>{!this.disabled&&!b.defaultPrevented&&f9(a.dragOperation.activatorEvent)&&b.by&&this.scroll({by:b.by})&&b.preventDefault()})}};function g2(a){return a>0?fX.Forward:a<0?fX.Reverse:fX.Idle}bS=gs(bR),bT=new WeakMap,bU=new WeakMap,bV=new WeakMap,gy(bS,4,"autoScrolling",bQ,g1,bT),gw(bS,g1);var g3=new class{constructor(a){this.scheduler=a,this.pending=!1,this.tasks=new Set,this.resolvers=new Set,this.flush=()=>{let{tasks:a,resolvers:b}=this;for(let b of(this.pending=!1,this.tasks=new Set,this.resolvers=new Set,a))b();for(let a of b)a()}}schedule(a){return this.tasks.add(a),this.pending||(this.pending=!0,this.scheduler(this.flush)),new Promise(a=>this.resolvers.add(a))}}(a=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(a):a()}),g4=class extends eI{constructor(a,b){super(a,b);let c=a.registry.plugins.get(g1);if(!c)throw Error("AutoScroller plugin depends on Scroller plugin");this.destroy=dg(()=>{var b,d,e;if(this.disabled)return;let{position:f,status:g}=a.dragOperation;if(g.dragging){let a={acceleration:null==(b=this.options)?void 0:b.acceleration,threshold:"number"==typeof(null==(d=this.options)?void 0:d.threshold)?{x:this.options.threshold,y:this.options.threshold}:null==(e=this.options)?void 0:e.threshold};if(c.scroll(void 0,a)){c.autoScrolling=!0;let b=setInterval(()=>g3.schedule(()=>c.scroll(void 0,a)),10);return()=>{clearInterval(b)}}c.autoScrolling=!1}})}};g4.configure=eG(g4);var g5={capture:!0,passive:!0},g6=class extends eJ{constructor(a){super(a),gC(this,bW),this.handleScroll=()=>{null==gB(this,bW)&&gD(this,bW,setTimeout(()=>{this.manager.collisionObserver.forceUpdate(!1),gD(this,bW,void 0)},50))};let{dragOperation:b}=this.manager;this.destroy=dg(()=>{var a,c,d;if(b.status.dragging){let e=null!=(d=null==(c=null==(a=b.source)?void 0:a.element)?void 0:c.ownerDocument)?d:document;return e.addEventListener("scroll",this.handleScroll,g5),()=>{e.removeEventListener("scroll",this.handleScroll,g5)}}})}};bW=new WeakMap;var g7=class extends eI{constructor(a){super(a),this.manager=a;let b=a.registry.plugins.get(gK),c=null==b?void 0:b.register("* { user-select: none !important; -webkit-user-select: none !important; }");if(this.destroy=dg(()=>{let{dragOperation:a}=this.manager;if(a.status.initialized)return g8(),document.addEventListener("selectionchange",g8,{capture:!0}),()=>{document.removeEventListener("selectionchange",g8,{capture:!0})}}),c){let a=this.destroy.bind(this);this.destroy=()=>{c(),a()}}}};function g8(){var a;null==(a=document.getSelection())||a.removeAllRanges()}var g9=Object.freeze({offset:10,keyboardCodes:{start:["Space","Enter"],cancel:["Escape"],end:["Space","Enter","Tab"],up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"]},preventActivation(a,b){var c;let d=null!=(c=b.handle)?c:b.element;return a.target!==d}}),ha=class extends e_{constructor(a,b){super(a),this.manager=a,this.options=b,gC(this,bX,[]),this.listeners=new fy,this.handleSourceKeyDown=(a,b,c)=>{if(this.disabled||a.defaultPrevented||!f8(a.target)||b.disabled)return;let{keyboardCodes:d=g9.keyboardCodes,preventActivation:e=g9.preventActivation}=null!=c?c:{};!d.start.includes(a.code)||!this.manager.dragOperation.status.idle||null!=e&&e(a,b)||this.handleStart(a,b,c)}}bind(a,b=this.options){return dg(()=>{var c;let d=null!=(c=a.handle)?c:a.element,e=c=>{f9(c)&&this.handleSourceKeyDown(c,a,b)};if(d)return d.addEventListener("keydown",e),()=>{d.removeEventListener("keydown",e)}})}handleStart(a,b,c){let{element:d}=b;if(!d)throw Error("Source draggable does not have an associated element");a.preventDefault(),a.stopImmediatePropagation(),f$(d);let{center:e}=new f5(d);if(this.manager.actions.start({event:a,coordinates:{x:e.x,y:e.y},source:b}).signal.aborted)return this.cleanup();this.sideEffects();let f=fn(d),g=[this.listeners.bind(f,[{type:"keydown",listener:a=>this.handleKeyDown(a,b,c),options:{capture:!0}}])];gB(this,bX).push(...g)}handleKeyDown(a,b,c){let{keyboardCodes:d=g9.keyboardCodes}=null!=c?c:{};if(hb(a,[...d.end,...d.cancel])){a.preventDefault();let b=hb(a,d.cancel);this.handleEnd(a,b);return}hb(a,d.up)?this.handleMove("up",a):hb(a,d.down)&&this.handleMove("down",a),hb(a,d.left)?this.handleMove("left",a):hb(a,d.right)&&this.handleMove("right",a)}handleEnd(a,b){this.manager.actions.stop({event:a,canceled:b}),this.cleanup()}handleMove(a,b){var c,d;let{shape:e}=this.manager.dragOperation,f=b.shiftKey?5:1,g={x:0,y:0},h=null!=(d=null==(c=this.options)?void 0:c.offset)?d:g9.offset;if("number"==typeof h&&(h={x:h,y:h}),e){switch(a){case"up":g={x:0,y:-h.y*f};break;case"down":g={x:0,y:h.y*f};break;case"left":g={x:-h.x*f,y:0};break;case"right":g={x:h.x*f,y:0}}(g.x||g.y)&&(b.preventDefault(),this.manager.actions.move({event:b,by:g}))}}sideEffects(){let a=this.manager.registry.plugins.get(g4);(null==a?void 0:a.disabled)===!1&&(a.disable(),gB(this,bX).push(()=>{a.enable()}))}cleanup(){gB(this,bX).forEach(a=>a()),gD(this,bX,[])}destroy(){this.cleanup(),this.listeners.clear()}};function hb(a,b){return b.includes(a.code)}bX=new WeakMap,ha.configure=eG(ha),ha.defaults=g9;var hc=class extends e1{constructor(){super(...arguments),gC(this,bY)}onEvent(a){switch(a.type){case"pointerdown":gD(this,bY,fp(a));break;case"pointermove":if(!gB(this,bY))return;let{x:b,y:c}=fp(a),d={x:b-gB(this,bY).x,y:c-gB(this,bY).y},{tolerance:e}=this.options;if(e&&ea(d,e))return void this.abort();ea(d,this.options.value)&&this.activate(a);break;case"pointerup":this.abort()}}abort(){gD(this,bY,void 0)}};bY=new WeakMap;var hd=class extends e1{constructor(){super(...arguments),gC(this,bZ),gC(this,b$)}onEvent(a){switch(a.type){case"pointerdown":gD(this,b$,fp(a)),gD(this,bZ,setTimeout(()=>this.activate(a),this.options.value));break;case"pointermove":if(!gB(this,b$))return;let{x:b,y:c}=fp(a);ea({x:b-gB(this,b$).x,y:c-gB(this,b$).y},this.options.tolerance)&&this.abort();break;case"pointerup":this.abort()}}abort(){gB(this,bZ)&&(clearTimeout(gB(this,bZ)),gD(this,b$,void 0),gD(this,bZ,void 0))}};bZ=new WeakMap,b$=new WeakMap;var he=class{};he.Delay=hd,he.Distance=hc;var hf=Object.freeze({activationConstraints(a,b){var c;let{pointerType:d,target:e}=a;if(!("mouse"===d&&f8(e)&&(b.handle===e||(null==(c=b.handle)?void 0:c.contains(e)))))return"touch"===d?[new he.Delay({value:250,tolerance:5})]:function(a){var b;if(!f8(a))return!1;let{tagName:c}=a;return"INPUT"===c||"TEXTAREA"===c||(b=a).hasAttribute("contenteditable")&&"false"!==b.getAttribute("contenteditable")}(e)&&!a.defaultPrevented?[new he.Delay({value:200,tolerance:0})]:[new he.Delay({value:200,tolerance:10}),new he.Distance({value:5})]},preventActivation(a,b){var c;let{target:d}=a;return!(d===b.element||d===b.handle||!f8(d)||(null==(c=b.handle)?void 0:c.contains(d)))&&!!d.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `)}}),hg=class extends e_{constructor(a,b){super(a),this.manager=a,this.options=b,gC(this,b_,new Set),this.listeners=new fy,this.latest={event:void 0,coordinates:void 0},this.handleMove=()=>{let{event:a,coordinates:b}=this.latest;a&&b&&this.manager.actions.move({event:a,to:b})},this.handleCancel=this.handleCancel.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activationConstraints(a,b,c=this.options){let{activationConstraints:d=hf.activationConstraints}=null!=c?c:{};return"function"==typeof d?d(a,b):d}bind(a,b=this.options){return dg(()=>{var c,d;let e=new AbortController,{signal:f}=e,g=c=>{(function(a){if(!a)return!1;let{PointerEvent:b}=fj(a.target);return a instanceof b})(c)&&this.handlePointerDown(c,a,b)},h=[null!=(c=a.handle)?c:a.element];for(let c of((null==b?void 0:b.activatorElements)&&(h=Array.isArray(b.activatorElements)?b.activatorElements:b.activatorElements(a)),h)){c&&(!(d=c.ownerDocument.defaultView)||hj.has(d)||(d.addEventListener("touchmove",hi,{capture:!1,passive:!1}),hj.add(d)),c.addEventListener("pointerdown",g,{signal:f}))}return()=>e.abort()})}handlePointerDown(a,b,c){if(this.disabled||!a.isPrimary||0!==a.button||!f8(a.target)||b.disabled||"sensor"in a||!this.manager.dragOperation.status.idle)return;let{preventActivation:d=hf.preventActivation}=null!=c?c:{};if(null==d?void 0:d(a,b))return;let{target:e}=a,f=fl(e)&&e.draggable&&"true"===e.getAttribute("draggable"),g=fU(b.element),{x:h,y:i}=fp(a);this.initialCoordinates={x:h*g.scaleX+g.x,y:i*g.scaleY+g.y};let j=this.activationConstraints(a,b,c);a.sensor=this;let k=new e0(j,a=>this.handleStart(b,a));k.signal.onabort=()=>this.handleCancel(a),k.onEvent(a),this.controller=k;let l=function a(b=document,c=new Set){if(c.has(b))return[];c.add(b);let d=[b];for(let e of Array.from(b.querySelectorAll("iframe, frame")))try{let b=e.contentDocument;b&&!c.has(b)&&d.push(...a(b,c))}catch(a){}try{let e=b.defaultView;if(e&&e!==window.top){let f=e.parent;f&&f.document&&f.document!==b&&d.push(...a(f.document,c))}}catch(a){}return d}(),m=this.listeners.bind(l,[{type:"pointermove",listener:a=>this.handlePointerMove(a,b)},{type:"pointerup",listener:this.handlePointerUp,options:{capture:!0}},{type:"pointercancel",listener:this.handleCancel},{type:"dragstart",listener:f?this.handleCancel:hh,options:{capture:!0}}]),n=()=>{m(),this.initialCoordinates=void 0};gB(this,b_).add(n)}handlePointerMove(a,b){var c,d;if((null==(c=this.controller)?void 0:c.activated)===!1){null==(d=this.controller)||d.onEvent(a);return}if(this.manager.dragOperation.status.dragging){let c=fp(a),d=fU(b.element);c.x=c.x*d.scaleX+d.x,c.y=c.y*d.scaleY+d.y,a.preventDefault(),a.stopPropagation(),this.latest.event=a,this.latest.coordinates=c,fM.schedule(this.handleMove)}}handlePointerUp(a){let{status:b}=this.manager.dragOperation;if(!b.idle){a.preventDefault(),a.stopPropagation();let c=!b.initialized;this.manager.actions.stop({event:a,canceled:c})}this.cleanup()}handleKeyDown(a){"Escape"===a.key&&(a.preventDefault(),this.handleCancel(a))}handleStart(a,b){let{manager:c,initialCoordinates:d}=this;if(!d||!c.dragOperation.status.idle||b.defaultPrevented)return;if(c.actions.start({coordinates:d,event:b,source:a}).signal.aborted)return this.cleanup();b.preventDefault();let e=fn(b.target).body;try{e.setPointerCapture(b.pointerId)}catch(a){this.handleCancel(b);return}let f=f8(b.target)?[b.target,e]:e,g=this.listeners.bind(f,[{type:"touchmove",listener:hh,options:{passive:!1}},{type:"click",listener:hh},{type:"contextmenu",listener:hh},{type:"keydown",listener:this.handleKeyDown}]);gB(this,b_).add(g)}handleCancel(a){let{dragOperation:b}=this.manager;b.status.initialized&&this.manager.actions.stop({event:a,canceled:!0}),this.cleanup()}cleanup(){let{controller:a}=this;this.controller=void 0,a&&!a.signal.aborted&&a.abort(),this.latest={event:void 0,coordinates:void 0},gB(this,b_).forEach(a=>a()),gB(this,b_).clear()}destroy(){this.cleanup(),this.listeners.clear()}};function hh(a){a.preventDefault()}function hi(){}b_=new WeakMap,hg.configure=eG(hg),hg.defaults=hf;var hj=new WeakSet,hk=[],hl=[gI,g4,gL,gX,g7],hm=[hg,ha],hn=class extends e7{constructor(a={}){let b=e6(a.plugins,hl),c=e6(a.sensors,hm),d=e6(a.modifiers,hk);super(gg(gp({},a),gi({plugins:[g6,g1,gK,...b],sensors:c,modifiers:d})))}},ho=class extends(b2=eR,b1=[dH],b0=[dH],b2){constructor(a,b){var{element:c,effects:d=()=>[],handle:e}=a;super(gp({effects:()=>[...d(),()=>{var a,b;let{manager:c}=this;if(!c)return;let d=(null!=(b=null==(a=this.sensors)?void 0:a.map(eH))?b:[...c.sensors]).map(a=>{let b=a instanceof e_?a:c.registry.register(a.plugin),d=a instanceof e_?void 0:a.options;return b.bind(this,d)});return function(){d.forEach(a=>a())}}]},gr(a,["element","effects","handle"])),b),gC(this,b4,gx(b3,8,this)),gx(b3,11,this),gC(this,b5,gx(b3,12,this)),gx(b3,15,this),this.element=c,this.handle=e}};b3=gs(b2),b4=new WeakMap,b5=new WeakMap,gy(b3,4,"handle",b1,ho,b4),gy(b3,4,"element",b0,ho,b5),gw(b3,ho);var hp=class extends(b8=eS,b7=[dH],b6=[dH],b8){constructor(a,b){var{element:c,effects:d=()=>[]}=a,e=gr(a,["element","effects"]);let{collisionDetector:f=gc}=e,g=a=>{let{manager:b,element:c}=this;if(!c||null===a){this.shape=void 0;return}if(!b)return;let d=new f5(c),e=c$(()=>this.shape);return d&&(null==e?void 0:e.equals(d))?e:(this.shape=d,d)},h=c7(!1);super(gg(gp({},e),gi({collisionDetector:f,effects:()=>[...d(),()=>{let{element:a,manager:b}=this;if(!b)return;let{dragOperation:c}=b,{source:d}=c;h.value=!!(d&&c.status.initialized&&a&&!this.disabled&&this.accepts(d))},()=>{let{element:a}=this;if(h.value&&a){let b=new fH(a,g);return()=>{b.disconnect(),this.shape=void 0}}},()=>{var a;if(null==(a=this.manager)?void 0:a.dragOperation.status.initialized)return()=>{this.shape=void 0}}]})),b),gC(this,ce),gC(this,ca,gx(b9,8,this)),gx(b9,11,this),gC(this,cf,gx(b9,12,this)),gx(b9,15,this),this.element=c,this.refreshShape=()=>g()}set element(a){gD(this,ce,a,cd)}get element(){var a;return null!=(a=this.proxy)?a:gB(this,ce,cc)}};b9=gs(b8),ca=new WeakMap,ce=new WeakSet,cf=new WeakMap,cc=(cb=gy(b9,20,"#element",b7,ce,ca)).get,cd=cb.set,gy(b9,4,"proxy",b6,hp,cf),gw(b9,hp);var hq=a.i(35112);function hr(a){var b;if(null!=a)return null!=a&&"object"==typeof a&&"current"in a?null!=(b=a.current)?b:void 0:a}var hs=cu.useEffect;function ht(a,b){let c,d=(0,cu.useRef)(new Map),e=(c=(0,cu.useState)(0)[1],(0,cu.useCallback)(()=>{c(a=>a+1)},[c]));return hs(()=>a?dg(()=>{var c;let f=!1,g=!1;for(let e of d.current){let[h]=e,i=c$(()=>e[1]),j=a[h];i!==j&&(f=!0,d.current.set(h,j),g=null!=(c=null==b?void 0:b(h,i,j))&&c)}f&&(g?queueMicrotask(()=>(0,hq.flushSync)(e)):e())}):void d.current.clear(),[a]),(0,cu.useMemo)(()=>a?new Proxy(a,{get(a,b){let c=a[b];return d.current.set(b,c),c}}):a,[a])}function hu(a,b){a()}function hv(a){let b=(0,cu.useRef)(a);return hs(()=>{b.current=a},[a]),b}function hw(a,b,c=cu.useEffect,d=Object.is){let e=(0,cu.useRef)(a);c(()=>{let c=e.current;d(a,c)||(e.current=a,b(a,c))},[b,a])}function hx(a,b){let c=(0,cu.useRef)(hr(a));hs(()=>{let d=hr(a);d!==c.current&&(c.current=d,b(d))})}var hy=Object.defineProperty,hz=Object.defineProperties,hA=Object.getOwnPropertyDescriptors,hB=Object.getOwnPropertySymbols,hC=Object.prototype.hasOwnProperty,hD=Object.prototype.propertyIsEnumerable,hE=(a,b,c)=>b in a?hy(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,hF=(a,b)=>{for(var c in b||(b={}))hC.call(b,c)&&hE(a,c,b[c]);if(hB)for(var c of hB(b))hD.call(b,c)&&hE(a,c,b[c]);return a},hG=new hn,hH=(0,cu.createContext)(hG),hI=(0,cu.memo)((0,cu.forwardRef)(({children:a},b)=>{let[c,d]=(0,cu.useState)(0),e=(0,cu.useRef)(null),f=(0,cu.useRef)(null),g=(0,cu.useMemo)(()=>({renderer:{get rendering(){var a;return null!=(a=e.current)?a:Promise.resolve()}},trackRendering(a){e.current||(e.current=new Promise(a=>{f.current=a})),(0,cu.startTransition)(()=>{a(),d(a=>a+1)})}}),[]);return hs(()=>{var a;null==(a=f.current)||a.call(f),e.current=null},[a,c]),(0,cu.useImperativeHandle)(b,()=>g),null})),hJ=[void 0,dG];function hK(a){let b;var c,{children:d,onCollision:e,onBeforeDragStart:f,onDragStart:g,onDragMove:h,onDragOver:i,onDragEnd:j}=a,k=((a,b)=>{var c={};for(var d in a)hC.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&hB)for(var d of hB(a))0>b.indexOf(d)&&hD.call(a,d)&&(c[d]=a[d]);return c})(a,["children","onCollision","onBeforeDragStart","onDragStart","onDragMove","onDragOver","onDragEnd"]);let l=(0,cu.useRef)(null),{plugins:m,modifiers:n,sensors:o}=k,p=e6(m,hl),q=e6(o,hm),r=e6(n,hk),s=hv(f),t=hv(g),u=hv(i),v=hv(h),w=hv(j),x=hv(e),y=(c=()=>{var a;return null!=(a=k.manager)?a:new hn(k)},(b=(0,cu.useRef)(null)).current||(b.current=c()),(0,cu.useInsertionEffect)(()=>()=>{var a;return null==(a=b.current)?void 0:a.destroy()},[]),b.current);return(0,cu.useEffect)(()=>{if(!l.current)throw Error("Renderer not found");let{renderer:a,trackRendering:b}=l.current,{monitor:c}=y;y.renderer=a;let d=[c.addEventListener("beforedragstart",a=>{let c=s.current;c&&b(()=>c(a,y))}),c.addEventListener("dragstart",a=>{var b;return null==(b=t.current)?void 0:b.call(t,a,y)}),c.addEventListener("dragover",a=>{let c=u.current;c&&b(()=>c(a,y))}),c.addEventListener("dragmove",a=>{let c=v.current;c&&b(()=>c(a,y))}),c.addEventListener("dragend",a=>{let c=w.current;c&&b(()=>c(a,y))}),c.addEventListener("collision",a=>{var b;return null==(b=x.current)?void 0:b.call(x,a,y)})];return()=>d.forEach(a=>a())},[y]),hw(p,()=>y&&(y.plugins=p),...hJ),hw(q,()=>y&&(y.sensors=q),...hJ),hw(r,()=>y&&(y.modifiers=r),...hJ),(0,ct.jsxs)(hH.Provider,{value:y,children:[(0,ct.jsx)(hI,{ref:l,children:d}),d]})}function hL(){return(0,cu.useContext)(hH)}function hM(a){var b;let c=null!=(b=hL())?b:void 0,[d]=(0,cu.useState)(()=>a(c));return d.manager!==c&&(d.manager=c),hs(d.register,[c,d]),d}function hN(a,b,c){return"isDragSource"===a&&!c&&!!b}var hO=Object.create,hP=Object.defineProperty,hQ=Object.getOwnPropertyDescriptor,hR=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a),hS=a=>{throw TypeError(a)},hT=["class","method","getter","setter","accessor","field","value","get","set"],hU=a=>void 0!==a&&"function"!=typeof a?hS("Function expected"):a,hV=(a,b,c,d,e)=>({kind:hT[a],name:b,metadata:d,addInitializer:a=>c._?hS("Already initialized"):e.push(hU(a||null))}),hW=(a,b,c,d,e,f)=>{for(var g,h,i,j=7&b,k=hT[j+5],l=a[2]||(a[2]=[]),m=hQ(e=e.prototype,c),n=d.length-1;n>=0;n--)(i=hV(j,c,h={},a[3],l)).static=!1,i.private=!1,(i.access={has:a=>c in a}).get=a=>a[c],g=(0,d[n])(m[k],i),h._=1,hU(g)&&(m[k]=g);return m&&hP(e,c,m),e},hX=(a,b,c)=>b.has(a)||hS("Cannot "+c),hY=class a{constructor(a,b){this.x=a,this.y=b}static delta(b,c){return new a(b.x-c.x,b.y-c.y)}static distance(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}static equals(a,b){return a.x===b.x&&a.y===b.y}static from({x:b,y:c}){return new a(b,c)}},hZ=class extends(ci=dL,ch=[dI],cg=[dI],ci){constructor(a){let b;super(hY.from(a),(a,b)=>hY.equals(a,b)),((a,b)=>{for(var c=0,d=a[2],e=d&&d.length;c<e;c++)d[c].call(b)})(ck,this),(b=cj).has(this)?hS("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(this):b.set(this,0),this.velocity={x:0,y:0}}get delta(){return hY.delta(this.current,this.initial)}get direction(){let{current:a,previous:b}=this;if(!b)return null;let c={x:a.x-b.x,y:a.y-b.y};return c.x||c.y?Math.abs(c.x)>Math.abs(c.y)?c.x>0?"right":"left":c.y>0?"down":"up":null}get current(){return super.current}set current(a){let b,{current:c}=this,d=hY.from(a),e={x:d.x-c.x,y:d.y-c.y},f=Date.now(),g=f-(hX(this,b=cj,"read from private field"),b.get(this)),h=a=>Math.round(a/g*100);cZ(()=>{let a;hX(this,a=cj,"write to private field"),a.set(this,f),this.velocity={x:h(e.x),y:h(e.y)},super.current=d})}reset(a=this.defaultValue){super.reset(hY.from(a)),this.velocity={x:0,y:0}}};ck=[,,,hO(null!=(q=null==ci?void 0:ci[hR("metadata")])?q:null)],cj=new WeakMap,hW(ck,2,"delta",ch,hZ),hW(ck,2,"direction",cg,hZ),r=ck,g=hR("metadata"),h=r[3],g in hZ?hP(hZ,g,{enumerable:!0,configurable:!0,writable:!0,value:h}):hZ[g]=h;var h$=((s=h$||{}).Horizontal="x",s.Vertical="y",s);Object.values(h$);var h_=a=>{var b;return null!=(b=(({dragOperation:a,droppable:b})=>{let c=a.position.current;if(!c)return null;let{id:d}=b;return b.shape&&b.shape.containsPoint(c)?{id:d,value:1/hY.distance(b.shape.center,c),type:eY.PointerIntersection,priority:eX.High}:null})(a))?b:(({dragOperation:a,droppable:b})=>{let{shape:c}=a;if(!b.shape||!(null==c?void 0:c.current))return null;let d=c.current.intersectionArea(b.shape);if(d){let{position:e}=a,f=hY.distance(b.shape.center,e.current),g=d/(c.current.area+b.shape.area-d);return{id:b.id,value:g/f,type:eY.ShapeIntersection,priority:eX.Normal}}return null})(a)};function h0(a){let{collisionDetector:b,data:c,disabled:d,element:e,id:f,accept:g,type:h}=a,i=hM(b=>new hp(hz(hF({},a),hA({register:!1,element:hr(e)})),b)),j=ht(i);return hw(f,()=>i.id=f),hx(e,a=>i.element=a),hw(g,()=>i.accept=g,void 0,dG),hw(b,()=>i.collisionDetector=null!=b?b:h_),hw(c,()=>c&&(i.data=c)),hw(d,()=>i.disabled=!0===d),hw(h,()=>i.type=h),{droppable:j,get isDropTarget(){return j.isDropTarget},ref:(0,cu.useCallback)(a=>{var b,c;(a||null==(b=i.element)||!b.isConnected||(null==(c=i.manager)?void 0:c.dragOperation.status.idle))&&(i.element=null!=a?a:void 0)},[i])}}var h1=Object.create,h2=Object.defineProperty,h3=Object.defineProperties,h4=Object.getOwnPropertyDescriptor,h5=Object.getOwnPropertyDescriptors,h6=Object.getOwnPropertySymbols,h7=Object.prototype.hasOwnProperty,h8=Object.prototype.propertyIsEnumerable,h9=a=>{throw TypeError(a)},ia=(a,b,c)=>b in a?h2(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,ib=(a,b)=>{for(var c in b||(b={}))h7.call(b,c)&&ia(a,c,b[c]);if(h6)for(var c of h6(b))h8.call(b,c)&&ia(a,c,b[c]);return a},ic=["class","method","getter","setter","accessor","field","value","get","set"],id=a=>void 0!==a&&"function"!=typeof a?h9("Function expected"):a,ie=(a,b,c,d,e)=>({kind:ic[a],name:b,metadata:d,addInitializer:a=>c._?h9("Already initialized"):e.push(id(a||null))}),ig=(a,b,c,d)=>{for(var e=0,f=a[b>>1],g=f&&f.length;e<g;e++)1&b?f[e].call(c):d=f[e].call(c,d);return d},ih=(a,b,c,d,e,f)=>{for(var g,h,i,j,k,l=7&b,m=a.length+1,n=ic[l+5],o=a[m-1]=[],p=a[m]||(a[m]=[]),q=(e=e.prototype,h4({get[c](){return ij(this,f)},set[c](a){return il(this,f,a)}},c)),r=d.length-1;r>=0;r--)(j=ie(l,c,i={},a[3],p)).static=!1,j.private=!1,(k=j.access={has:a=>c in a}).get=a=>a[c],k.set=(a,b)=>a[c]=b,h=(0,d[r])({get:q.get,set:q.set},j),i._=1,void 0===h?id(h)&&(q[n]=h):"object"!=typeof h||null===h?h9("Object expected"):(id(g=h.get)&&(q.get=g),id(g=h.set)&&(q.set=g),id(g=h.init)&&o.unshift(g));return q&&h2(e,c,q),e},ii=(a,b,c)=>b.has(a)||h9("Cannot "+c),ij=(a,b,c)=>(ii(a,b,"read from private field"),b.get(a)),ik=(a,b,c)=>b.has(a)?h9("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),il=(a,b,c,d)=>(ii(a,b,"write to private field"),b.set(a,c),c);function im(a){return a instanceof iI||a instanceof iH}var io=class extends eI{constructor(a){super(a);let b=dg(()=>{let{dragOperation:b}=a;if(f9(b.activatorEvent)&&im(b.source)&&b.status.initialized){let b=a.registry.plugins.get(g1);if(b)return b.disable(),()=>b.enable()}}),c=a.monitor.addEventListener("dragmove",(a,b)=>{queueMicrotask(()=>{if(this.disabled||a.defaultPrevented||!a.nativeEvent)return;let{dragOperation:c}=b;if(!f9(a.nativeEvent)||!im(c.source)||!c.shape)return;let{actions:d,collisionObserver:e,registry:f}=b,{by:g}=a;if(!g)return;let h=function(a){let{x:b,y:c}=a;return b>0?"right":b<0?"left":c>0?"down":c<0?"up":void 0}(g),{source:i,target:j}=c,{center:k}=c.shape.current,l=[],m=[];cZ(()=>{for(let a of f.droppables){let{id:b}=a;if(!a.accepts(i)||b===(null==j?void 0:j.id)&&im(a)||!a.element)continue;let c=a.shape,d=new f5(a.element,{getBoundingClientRect:a=>fo(a,void 0,.2)});d.height&&d.width&&("down"==h&&k.y+10<d.center.y||"up"==h&&k.y-10>d.center.y||"left"==h&&k.x-10>d.center.x||"right"==h&&k.x+10<d.center.x)&&(l.push(a),a.shape=d,m.push(()=>a.shape=c))}}),a.preventDefault(),e.disable();let n=e.computeCollisions(l,gd);cZ(()=>m.forEach(a=>a()));let[o]=n;if(!o)return;let{id:p}=o,{index:q,group:r}=i.sortable;d.setDropTarget(p).then(()=>{let{source:a,target:b,shape:f}=c;if(!a||!im(a)||!f)return;let{index:g,group:h,target:i}=a.sortable,j=q!==g||r!==h,k=j?i:null==b?void 0:b.element;if(!k)return;f$(k);let l=new f5(k);if(!l)return;let m=d8.delta(l,d8.from(f.current.boundingRectangle),a.alignment);d.move({by:m}),j?d.setDropTarget(a.id).then(()=>e.enable()):e.enable()})})});this.destroy=()=>{c(),b()}}},ip=Object.defineProperty,iq=Object.defineProperties,ir=Object.getOwnPropertyDescriptors,is=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,iu=Object.prototype.propertyIsEnumerable,iv=(a,b,c)=>b in a?ip(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,iw=(a,b)=>{for(var c in b||(b={}))it.call(b,c)&&iv(a,c,b[c]);if(is)for(var c of is(b))iu.call(b,c)&&iv(a,c,b[c]);return a};function ix(a,b,c){if(b===c)return a;let d=a.slice();return d.splice(c,0,d.splice(b,1)[0]),d}function iy(a){return"initialIndex"in a&&"number"==typeof a.initialIndex&&"index"in a&&"number"==typeof a.index}var iz="__default__";function iA(a,b,c,d){c.insertAdjacentElement(d<b?"afterend":"beforebegin",a)}function iB(a,b){return a.index-b.index}function iC(a){return Array.from(a).sort(iB)}var iD=[io,class extends eI{constructor(a){super(a);let b=()=>{let b=new Map;for(let c of a.registry.droppables)if(c instanceof iI){let{sortable:a}=c,{group:d}=a,e=b.get(d);e||(e=new Set,b.set(d,e)),e.add(a)}for(let[a,c]of b)b.set(a,new Set(iC(c)));return b},c=[a.monitor.addEventListener("dragover",(a,c)=>{if(this.disabled)return;let{dragOperation:d}=c,{source:e,target:f}=d;if(!im(e)||!im(f)||e.sortable===f.sortable)return;let g=b(),h=e.sortable.group===f.sortable.group,i=g.get(e.sortable.group),j=h?i:g.get(f.sortable.group);i&&j&&queueMicrotask(()=>{a.defaultPrevented||c.renderer.rendering.then(()=>{var d,k,l;let m=b();for(let[a,b]of g.entries())for(let[c,e]of Array.from(b).entries())if(e.index!==c||e.group!==a||!(null==(d=m.get(a))?void 0:d.has(e)))return;let n=e.sortable.element,o=f.sortable.element;if(!o||!n||!h&&f.id===e.sortable.group)return;let p=iC(i),q=h?p:iC(j),r=null!=(k=e.sortable.group)?k:iz,s=null!=(l=f.sortable.group)?l:iz,t={[r]:p,[s]:q},u=function(a,b,c){var d,e,f;let g,h,{source:i,target:j,canceled:k}=b.operation;if(!i||!j||k)return"preventDefault"in b&&b.preventDefault(),a;let l=(a,b)=>a===b||"object"==typeof a&&"id"in a&&a.id===b;if(Array.isArray(a)){let d=a.findIndex(a=>l(a,i.id)),e=a.findIndex(a=>l(a,j.id));if(-1===d||-1===e){if(iy(i)){let d=i.initialIndex,e=i.index;return d===e||d<0||d>=a.length?("preventDefault"in b&&b.preventDefault(),a):c(a,d,e)}return a}if(!k&&"index"in i&&"number"==typeof i.index){let b=i.index;if(b!==d)return c(a,d,b)}return c(a,d,e)}let m=Object.entries(a),n=-1,o=-1;for(let[a,b]of m)if(-1===n&&-1!==(n=b.findIndex(a=>l(a,i.id)))&&(g=a),-1===o&&-1!==(o=b.findIndex(a=>l(a,j.id)))&&(h=a),-1!==n&&-1!==o)break;if(-1===n&&iy(i)){let d=i.initialGroup,e=i.initialIndex,f=i.group,g=i.index;if(null==d||null==f||!(d in a)||!(f in a)||d===f&&e===g)return"preventDefault"in b&&b.preventDefault(),a;if(d===f)return iq(iw({},a),ir({[d]:c(a[d],e,g)}));let h=a[d][e];return iq(iw({},a),ir({[d]:[...a[d].slice(0,e),...a[d].slice(e+1)],[f]:[...a[f].slice(0,g),h,...a[f].slice(g)]}))}if(!i.manager)return a;let{dragOperation:p}=i.manager,q=null!=(e=null==(d=p.shape)?void 0:d.current.center)?e:p.position.current;if(null==h&&j.id in a){let b=j.shape&&q.y>j.shape.center.y?a[j.id].length:0;h=j.id,o=b}if(null==g||null==h||g===h&&n===o){if(null!=g&&g===h&&n===o&&iy(i)){let b=null!=i.group&&i.group!==g,d=i.index!==n;if(b||d){let b=null!=(f=i.group)?f:g;if(b in a){if(g===b)return iq(iw({},a),ir({[g]:c(a[g],n,i.index)}));let d=a[g][n];return iq(iw({},a),ir({[g]:[...a[g].slice(0,n),...a[g].slice(n+1)],[b]:[...a[b].slice(0,i.index),d,...a[b].slice(i.index)]}))}}}return"preventDefault"in b&&b.preventDefault(),a}if(g===h)return iq(iw({},a),ir({[g]:c(a[g],n,o)}));let r=+!!(j.shape&&Math.round(q.y)>Math.round(j.shape.center.y)),s=a[g][n];return iq(iw({},a),ir({[g]:[...a[g].slice(0,n),...a[g].slice(n+1)],[h]:[...a[h].slice(0,o+r),s,...a[h].slice(o+r)]}))}(t,a,ix);if(t===u)return;let v=u[s].indexOf(e.sortable),w=u[s].indexOf(f.sortable);c.collisionObserver.disable(),iA(n,v,o,w),cZ(()=>{for(let[a,b]of u[r].entries())b.index=a;if(!h)for(let[a,b]of u[s].entries())b.group=f.sortable.group,b.index=a}),c.actions.setDropTarget(e.id).then(()=>c.collisionObserver.enable())})})}),a.monitor.addEventListener("dragend",(a,c)=>{if(!a.canceled)return;let{dragOperation:d}=c,{source:e}=d;im(e)&&(e.sortable.initialIndex!==e.sortable.index||e.sortable.initialGroup!==e.sortable.group)&&queueMicrotask(()=>{let a=b(),d=a.get(e.sortable.initialGroup);d&&c.renderer.rendering.then(()=>{for(let[b,c]of a.entries())for(let[a,d]of Array.from(c).entries())if(d.index!==a||d.group!==b)return;let b=iC(d),c=e.sortable.element,f=b[e.sortable.initialIndex],g=null==f?void 0:f.element;f&&g&&c&&(iA(c,f.index,g,e.index),cZ(()=>{for(let[b,c]of a.entries())for(let a of Array.from(c).values())a.index=a.initialIndex,a.group=a.initialGroup}))})})})];this.destroy=()=>{for(let a of c)a()}}}],iE={duration:250,easing:"cubic-bezier(0.25, 1, 0.5, 1)",idle:!1},iF=new dN;cm=[dH],cl=[dH];var iG=class{constructor(a,b){ik(this,co,ig(cn,8,this)),ig(cn,11,this),ik(this,cp),ik(this,cq),ik(this,cr,ig(cn,12,this)),ig(cn,15,this),ik(this,cs),this.register=()=>(cZ(()=>{var a,b;null==(a=this.manager)||a.registry.register(this.droppable),null==(b=this.manager)||b.registry.register(this.draggable)}),()=>this.unregister()),this.unregister=()=>{cZ(()=>{var a,b;null==(a=this.manager)||a.registry.unregister(this.droppable),null==(b=this.manager)||b.registry.unregister(this.draggable)})},this.destroy=()=>{cZ(()=>{this.droppable.destroy(),this.draggable.destroy()})};var{effects:c=()=>[],group:d,index:e,sensors:f,type:g,transition:h=iE,plugins:i}=a,j=((a,b)=>{var c={};for(var d in a)h7.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&h6)for(var d of h6(a))0>b.indexOf(d)&&h8.call(a,d)&&(c[d]=a[d]);return c})(a,["effects","group","index","sensors","type","transition","plugins"]);let k=e6(i,iD);this.droppable=new iI(j,b,this),this.draggable=new iH(h3(ib({},j),h5({plugins:k,effects:()=>[()=>{var a,b,c;let d=null==(a=this.manager)?void 0:a.dragOperation.status;(null==d?void 0:d.initializing)&&this.id===(null==(c=null==(b=this.manager)?void 0:b.dragOperation.source)?void 0:c.id)&&iF.clear(this.manager),(null==d?void 0:d.dragging)&&iF.set(this.manager,this.id,c$(()=>({initialIndex:this.index,initialGroup:this.group})))},()=>{let{index:a,group:b,manager:c}=this,d=ij(this,cq),e=ij(this,cp);(a!==d||b!==e)&&(il(this,cq,a),il(this,cp,b),this.animate())},()=>{var a,b;let{target:c}=this,{isDragSource:d}=this.draggable;"move"===(null!=(b=null==(a=this.draggable.pluginConfig(gX))?void 0:a.feedback)?b:"default")&&d&&(this.droppable.disabled=!c)},...c()],type:g,sensors:f})),b,this),il(this,cs,j.element),this.manager=b,this.index=e,il(this,cq,e),this.group=d,il(this,cp,d),this.type=g,this.transition=h}get initialIndex(){var a,b;return null!=(b=null==(a=iF.get(this.manager,this.id))?void 0:a.initialIndex)?b:this.index}get initialGroup(){var a,b;return null!=(b=null==(a=iF.get(this.manager,this.id))?void 0:a.initialGroup)?b:this.group}animate(){c$(()=>{let{manager:a,transition:b}=this,{shape:c}=this.droppable;if(!a)return;let{idle:d}=a.dragOperation.status;c&&b&&(!d||b.idle)&&a.renderer.rendering.then(()=>{let{element:d}=this;if(!d)return;for(let a of d.getAnimations())"transitionProperty"in a&&("transform"===a.transitionProperty||"translate"===a.transitionProperty||"scale"===a.transitionProperty)&&a.cancel();let e=this.refreshShape();if(!e)return;let f={x:c.boundingRectangle.left-e.boundingRectangle.left,y:c.boundingRectangle.top-e.boundingRectangle.top},{translate:g}=fQ(d),h=f1(d,g,!1),i=f1(d,g);if(f.x||f.y){let c=fu(fj(d))?h3(ib({},b),h5({duration:0})):b;f0({element:d,keyframes:{translate:[`${h.x+f.x}px ${h.y+f.y}px ${h.z}`,`${i.x}px ${i.y}px ${i.z}`]},options:c}).then(()=>{a.dragOperation.status.dragging||(this.droppable.shape=void 0)})}})})}get manager(){return this.draggable.manager}set manager(a){cZ(()=>{this.draggable.manager=a,this.droppable.manager=a})}set element(a){cZ(()=>{let b=ij(this,cs),c=this.droppable.element,d=this.draggable.element;c&&c!==b||(this.droppable.element=a),d&&d!==b||(this.draggable.element=a),il(this,cs,a)})}get element(){var a,b;let c=ij(this,cs);if(c)return null!=(b=null!=(a=fx.get(c))?a:c)?b:this.droppable.element}set target(a){this.droppable.element=a}get target(){return this.droppable.element}set source(a){this.draggable.element=a}get source(){return this.draggable.element}get disabled(){return this.draggable.disabled&&this.droppable.disabled}set plugins(a){this.draggable.plugins=e6(a,iD)}set disabled(a){cZ(()=>{this.droppable.disabled=a,this.draggable.disabled=a})}set data(a){cZ(()=>{this.droppable.data=a,this.draggable.data=a})}set handle(a){this.draggable.handle=a}set id(a){this.droppable.id=a,this.draggable.id=a}get id(){return this.droppable.id}set sensors(a){this.draggable.sensors=a}set modifiers(a){this.draggable.modifiers=a}set collisionPriority(a){this.droppable.collisionPriority=a}set collisionDetector(a){this.droppable.collisionDetector=null!=a?a:gc}set alignment(a){this.draggable.alignment=a}get alignment(){return this.draggable.alignment}set type(a){cZ(()=>{this.droppable.type=a,this.draggable.type=a})}get type(){return this.draggable.type}set accept(a){this.droppable.accept=a}get accept(){return this.droppable.accept}get isDropTarget(){return this.droppable.isDropTarget}get isDragSource(){return this.draggable.isDragSource}get isDragging(){return this.draggable.isDragging}get isDropping(){return this.draggable.isDropping}get status(){return this.draggable.status}refreshShape(){return this.droppable.refreshShape()}accepts(a){return this.droppable.accepts(a)}};cn=[,,,h1(null)],co=new WeakMap,cp=new WeakMap,cq=new WeakMap,cr=new WeakMap,cs=new WeakMap,ih(cn,4,"index",cm,iG,co),ih(cn,4,"group",cl,iG,cr),t=cn,ia(iG,(i="metadata",(j=Symbol[i])?j:Symbol.for("Symbol."+i)),t[3]);var iH=class extends ho{constructor(a,b,c){super(a,b),this.sortable=c}get index(){return this.sortable.index}get initialIndex(){return this.sortable.initialIndex}get group(){return this.sortable.group}get initialGroup(){return this.sortable.initialGroup}},iI=class extends hp{constructor(a,b,c){super(a,b),this.sortable=c}get index(){return this.sortable.index}get group(){return this.sortable.group}},iJ=Object.defineProperty,iK=Object.defineProperties,iL=Object.getOwnPropertyDescriptors,iM=Object.getOwnPropertySymbols,iN=Object.prototype.hasOwnProperty,iO=Object.prototype.propertyIsEnumerable,iP=(a,b,c)=>b in a?iJ(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,iQ=(a,b)=>{for(var c in b||(b={}))iN.call(b,c)&&iP(a,c,b[c]);if(iM)for(var c of iM(b))iO.call(b,c)&&iP(a,c,b[c]);return a};function iR(a){let{accept:b,collisionDetector:c,collisionPriority:d,id:e,data:f,element:g,handle:h,index:i,group:j,disabled:k,modifiers:l,sensors:m,target:n,type:o,plugins:p}=a,q=iQ(iQ({},iE),a.transition),r=hM(b=>new iG(iK(iQ({},a),iL({transition:q,register:!1,handle:hr(h),element:hr(g),target:hr(n)})),b)),s=ht(r,iS);return hw(e,()=>r.id=e),hs(()=>{cZ(()=>{r.group=j,r.index=i})},[r,j,i]),hw(o,()=>r.type=o),hw(b,()=>r.accept=b,void 0,dG),hw(f,()=>f&&(r.data=f)),hw(i,()=>{var a;(null==(a=r.manager)?void 0:a.dragOperation.status.idle)&&(null==q?void 0:q.idle)&&r.refreshShape()},hu),hx(h,a=>r.handle=a),hx(g,a=>r.element=a),hx(n,a=>r.target=a),hw(k,()=>r.disabled=!0===k),hw(m,()=>r.sensors=m),hw(c,()=>r.collisionDetector=c),hw(d,()=>r.collisionPriority=d),hw(p,()=>r.plugins=p,void 0,dG),hw(q,()=>r.transition=q,void 0,dG),hw(l,()=>r.modifiers=l,void 0,dG),hw(a.alignment,()=>r.alignment=a.alignment),{sortable:s,get isDragging(){return s.isDragging},get isDropping(){return s.isDropping},get isDragSource(){return s.isDragSource},get isDropTarget(){return s.isDropTarget},handleRef:(0,cu.useCallback)(a=>{r.handle=null!=a?a:void 0},[r]),ref:(0,cu.useCallback)(a=>{var b,c;(a||null==(b=r.element)||!b.isConnected||(null==(c=r.manager)?void 0:c.dragOperation.status.idle))&&(r.element=null!=a?a:void 0)},[r]),sourceRef:(0,cu.useCallback)(a=>{var b,c;(a||null==(b=r.source)||!b.isConnected||(null==(c=r.manager)?void 0:c.dragOperation.status.idle))&&(r.source=null!=a?a:void 0)},[r]),targetRef:(0,cu.useCallback)(a=>{var b,c;(a||null==(b=r.target)||!b.isConnected||(null==(c=r.manager)?void 0:c.dragOperation.status.idle))&&(r.target=null!=a?a:void 0)},[r])}}function iS(a,b,c){return"isDragSource"===a&&!c&&!!b}var iT=a.i(90173),iU=a.i(87923);function iV(a,b,c){let d,e=c.initialDeps??[],f=!0;function g(){let g=a();return(g.length!==e.length||g.some((a,b)=>e[b]!==a))&&(e=g,d=b(...g),(null==c?void 0:c.onChange)&&!(f&&c.skipInitialOnChange)&&c.onChange(d),f=!1),d}return g.updateDeps=a=>{e=a},g}function iW(a,b){if(void 0!==a)return a;throw Error(`Unexpected undefined${b?`: ${b}`:""}`)}let iX=(a,b)=>1.01>Math.abs(a-b),iY=()=>{if(void 0!==e)return e;if("u"<typeof navigator)return e=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return e=!0;let a=navigator.maxTouchPoints;return e="MacIntel"===navigator.platform&&void 0!==a&&a>0},iZ={capture:!0,passive:!0};class i${constructor(a){this.host=a,this._touch=null,this.inMotion=()=>null!==this._touch&&"lateFling"!==this._touch.phase,this.dragging=()=>{var a;return(null==(a=this._touch)?void 0:a.phase)==="down"&&this._touch.moved},this.tail=()=>{var a;return(null==(a=this._touch)?void 0:a.phase)==="tail"?this._touch.moved?"fling":"tap":null},this.onScroll=({isScrolling:a,ownReadBack:b,moved:c,external:d})=>{var e,f,g;return a&&(null==(e=this._touch)?void 0:e.phase)==="tail"?this._openTail(this._touch.moved||!b,!1):(null==(f=this._touch)?void 0:f.phase)==="lateFling"&&(this.host.now()>this._touch.until?this._touch=null:d&&a&&c&&this._openTail(!0,!1)),!b&&!!a&&!!c&&(null==(g=this._touch)?void 0:g.phase)==="down"&&(this._touch.moved=!0,!0)},this.touchStart=()=>{this.end(),this._touch={phase:"down",moved:!1}},this.touchEnd=()=>{var a;let b=(null==(a=this._touch)?void 0:a.phase)==="down"&&this._touch.moved;this.end(),this._openTail(b,b)},this.end=()=>{var a;let b=this.host.getWindow();(null==(a=this._touch)?void 0:a.phase)==="tail"&&null!=b&&b.clearTimeout(this._touch.timerId),this._touch=null},this.listen=a=>{let b=()=>this.touchStart(),c=()=>this.touchEnd();return a.addEventListener("touchstart",b,iZ),a.addEventListener("touchend",c,iZ),a.addEventListener("touchcancel",c,iZ),()=>{a.removeEventListener("touchstart",b,iZ),a.removeEventListener("touchend",c,iZ),a.removeEventListener("touchcancel",c,iZ),this.end()}},this._openTail=(a,b)=>{let c=this.host.getWindow();if(!iY()||null==c)return;this.end();let d={phase:"tail",moved:a,awaitingFling:b,timerId:c.setTimeout(()=>{this.host.tailStillMoving()?this._openTail(d.moved,d.awaitingFling):(this._touch=d.awaitingFling?{phase:"lateFling",until:this.host.now()+1e3}:null,this.host.onTailClosed())},150)};this._touch=d}}get touch(){return this._touch}}let i_=a=>{let{clientWidth:b,clientHeight:c}=a;return{width:b,height:c}},i0=a=>{let b=new Set;return{schedule:c=>{let d=a.requestAnimationFrame(()=>{b.delete(d),c()});b.add(d)},cancel:()=>{b.forEach(b=>a.cancelAnimationFrame(b)),b.clear()}}},i1=a=>a,i2=a=>{let b=a.overscan*Math.max(a.lanes??1,1),c=Math.max(a.startIndex-b,0),d=Math.min(a.endIndex+b,a.count-1)-c+1,e=Array(d);for(let a=0;a<d;a++)e[a]=c+a;return e},i3=(a,b)=>{let c=a.scrollElement;if(!c)return;let d=a.targetWindow;if(!d)return;let e=a=>{let{width:c,height:d}=a;b({width:Math.round(c),height:Math.round(d)})};if(e(i_(c)),!d.ResizeObserver)return()=>{};let f=i0(d),g=new d.ResizeObserver(()=>{let b=()=>{e(i_(c))};a.options.useAnimationFrameWithResizeObserver?f.schedule(b):b()});return g.observe(c,{box:"content-box"}),()=>{g.unobserve(c),f.cancel()}},i4={passive:!0},i5=(a,b,c)=>{var d,e;let f,g=a.scrollElement;if(!g)return;let h=a.targetWindow;if(!h)return;let i=a.options.useScrollendEvent&&!0,j=0,k=i?null:(d=()=>b(c(g),!1),e=a.options.isScrollingResetDelay,Object.assign(function(...a){h.clearTimeout(f),f=h.setTimeout(()=>d.apply(this,a),e)},{cancel:()=>{h.clearTimeout(f)}})),l=a=>()=>{j=c(g),null==k||k(),b(j,a)},m=l(!0),n=l(!1);return g.addEventListener("scroll",m,i4),i&&g.addEventListener("scrollend",n,i4),()=>{g.removeEventListener("scroll",m),i&&g.removeEventListener("scrollend",n),null==k||k.cancel()}},i6=(a,b)=>i5(a,b,b=>{let{horizontal:c,isRtl:d}=a.options;return c?b.scrollLeft*(d&&-1||1):b.scrollTop}),i7=(a,b,c)=>{if(c.options.useCachedMeasurements){let b=c.indexFromElement(a),d=c.options.getItemKey(b);return c.itemSizeCache.get(d)??c.options.estimateSize(b)}if(null==b?void 0:b.borderBoxSize){let a=b.borderBoxSize[0];if(a)return Math.round(a[c.options.horizontal?"inlineSize":"blockSize"])}if(!b){let b=c.indexFromElement(a),d=c.options.getItemKey(b),e=c.itemSizeCache.get(d);if(void 0!==e)return e}return a[c.options.horizontal?"offsetWidth":"offsetHeight"]},i8=(a,{adjustments:b=0,behavior:c},d)=>{var e,f;null==(f=null==(e=d.scrollElement)?void 0:e.scrollTo)||f.call(e,{[d.options.horizontal?"left":"top"]:a+b,behavior:c})},i9=(a,b)=>"smooth"===a?b?"smoothLanded":"smooth":"instant",ja=a=>(null==a?void 0:a.phase)==="smooth"||(null==a?void 0:a.phase)==="smoothLanded";class jb{constructor(a){let b,c,d,e;this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this._holdOffset=0,this._reportedOverscroll=!1,this._iosGesture=new i$({getWindow:()=>this.targetWindow,now:()=>this.now(),tailStillMoving:()=>{let a=this.scrollState;if((null==a?void 0:a.phase)!=="queued"||null!==this.pendingWrite)return!1;let b=this._readElementOffset();return!(null===b||null===this._lastElementOffset||1>Math.abs(b-this._lastElementOffset))&&(this._lastElementOffset=b,a.samples=[...a.samples??[],{t:this.now(),offset:b}],!0)},onTailClosed:()=>{let a=this.scrollState;(null==a?void 0:a.phase)==="queued"&&function(a){let b=a[a.length-1];if(void 0===b)return!1;let c=a.length-2;for(;c>=0&&b.t-a[c].t<40;)c--;if(c<0)return!1;let d=a[c];return Math.abs(b.offset-d.offset)/(b.t-d.t)>=.05}(a.samples??[])&&(this.scrollState=null),this._flushHoldIfReady(!0),this._writeAwaitingCommand()}}),this._lastElementOffset=null,this.pendingWrite=null,this._clampedAdjustment=null,this.elementsCache=new Map,this._resizeBatch=null,this.now=()=>{var a,b,c;return(null==(c=null==(b=null==(a=this.targetWindow)?void 0:a.performance)?void 0:b.now)?void 0:c.call(b))??Date.now()},this.observer=(b=null,c=null,d=()=>{if(b)return b;let a=this.targetWindow;if(!a||!a.ResizeObserver)return null;let d=c=i0(a);return b=new a.ResizeObserver(a=>{let b=()=>{let b={sync:!1};this._resizeBatch=b;try{a.forEach(e)}finally{this._resizeBatch=null,b.notify&&(this.notify(b.sync),this._noteClampMax(),this._flushHoldIfReady(!0),this._retryClampedAdjustment())}};this.options.useAnimationFrameWithResizeObserver?d.schedule(b):b()})},e=a=>{let b=a.target,c=this.indexFromElement(b);if(!b.isConnected){for(let[a,c]of(this.observer.unobserve(b),this.elementsCache))if(c===b){this.elementsCache.delete(a);break}return}this.isIndexInRange(c)&&this.shouldMeasureDuringScroll(c)&&this.resizeItem(c,this.options.measureElement(b,a,this))},{disconnect:()=>{var a;null==(a=d())||a.disconnect(),null==c||c.cancel(),b=null,c=null},observe:a=>{var b;return null==(b=d())?void 0:b.observe(a,{box:"border-box"})},unobserve:a=>{var b;return null==(b=d())?void 0:b.unobserve(a)}}),this.range=null,this.setOptions=a=>{var b;let c={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:i1,rangeExtractor:i2,onChange:()=>{},measureElement:i7,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let b in a){let d=a[b];void 0!==d&&(c[b]=d)}let d=this.options,e=null,f=null,g=!1;if(void 0!==d&&d.enabled&&c.enabled&&"end"===c.anchorTo&&null!==this.scrollElement){let a=d.count,h=c.count,i=this.getMeasurements(),j=(null==(b=this._singleLaneMeasurements)?void 0:b.items)??i,k=a=>{var b;return"object"==typeof(b=j[a])?b.key:b},l=a>0?k(0):null,m=a>0?k(a-1):null;if(h!==a||a>0&&h>0&&(c.getItemKey(0)!==l||c.getItemKey(h-1)!==m)){g=!0;let b=a>0?this.getVirtualItemForOffset(this.getScrollOffset())??i[0]:null;b&&(e=[b.key,this.getScrollOffset()-b.start]);let j=!0===c.followOnAppend?"auto":c.followOnAppend||null;j&&h>0&&this.isAtEnd(d.scrollEndThreshold)&&(0===a||c.getItemKey(h-1)!==m)&&(h>a||function(a,b,c,d){if(0===b)return!1;let e=d(0),f=new Set,g=0;for(;g<a;){let a=c(g);if(a===e)break;f.add(a),g++}let h=a-g;if(0===h||h>=b)return!1;for(let a=0;a<h;a++)if(d(a)!==c(g+a))return!1;for(let a=h;a<b;a++)if(f.has(d(a)))return!1;return!0}(a,h,k,c.getItemKey))&&(f=j)}}this.options=c,g&&(this.pendingMin=0,this.itemSizeCacheVersion++);let h=null;if(e&&null!==this.scrollOffset&&!this._awaitingCommandReadBack()){let[a,b]=e,c=this.getMeasurements(),{count:d,getItemKey:g}=this.options,i=0;for(;i<d&&g(i)!==a;)i++;if(i<d){let a=c[i];if(a){let c=Math.max(0,a.start+b);f||c===this.scrollOffset||(h=c-this.scrollOffset,this.scrollOffset=c)}}}f?this.pendingScrollAnchor={kind:"follow",behavior:f}:null!==h&&(this._canWriteScroll()?this.pendingScrollAnchor={kind:"anchor",delta:h}:(this._holdOffset+=h,this._followOffsetTarget(h)))},this.notify=a=>{var b,c;null==(c=(b=this.options).onChange)||c.call(b,this,a)},this.maybeNotify=iV(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),a=>{this.notify(a)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{var a;this.unsubs.filter(Boolean).forEach(a=>a()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,null==(a=this._momentumStop)||a.restore(),this._momentumStop=null,this.isScrolling=!1,this.scrollDirection=null,this._holdOffset=0,this._reportedOverscroll=!1,this._clampedAdjustment=null,this.pendingWrite=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var a;let b=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==b){if(this.cleanup(),!b)return void this.maybeNotify();this.scrollElement=b,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(a=this.scrollElement)?void 0:a.window)??null,this.elementsCache.forEach(a=>{this.observer.observe(a)}),this.unsubs.push(this.options.observeElementRect(this,a=>{this.scrollRect=a,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(a,b)=>{var c,d,e,f;let g=b?this._elementMaxScrollOffset():null,h=this._reportedOverscroll;this._reportedOverscroll=a<0||null!==g&&a>g+1;let i=a;this._lastElementOffset=i,a=this._toLayoutOffset(a);let j=this._classifyScrollEvent(a,b,g);if("spurious"===j)return;"readBack"===j?a=this.pendingWrite.target:"clampedReadBack"===j&&(null==(c=this.scrollState)?void 0:c.index)!=null&&a<this.getMaxScrollOffset()-1.5?this.scrollState.lastTargetOffset=a:function({kind:a,offset:b,command:c,target:d}){let e;return"spurious"!==a&&"readBack"!==a&&"clampedReadBack"!==a&&(null==c?void 0:c.index)!=null&&"queued"!==c.phase&&"smooth"!==(e=c.phase)&&"smoothFinishing"!==e&&!iX(b,c.lastTargetOffset)&&!iX(b,d())&&"clampedEcho"!==a}({kind:j,offset:a,command:this.scrollState,target:()=>this.getScrollStateTarget(this.scrollState)})&&(this.scrollState=null),this.pendingWrite=null,null!==this._clampedAdjustment&&Math.abs(a-this._clampedAdjustment.maxAtWrite)>=1.5&&(this._clampedAdjustment=null);let k=this.getScrollOffset(),l=this.scrollDirection;this.scrollDirection=b?k===a?this.scrollDirection:k<a?"forward":"backward":null,this.scrollOffset=a,this.isScrolling=b;let m=this.scrollState;if((null==m?void 0:m.phase)==="queued"&&"external"===j&&b)if(h||this._reportedOverscroll)m.samples=[];else{let a=this.now();m.samples=[...(m.samples??[]).filter(b=>a-b.t<=200),{t:a,offset:i}],(null!==l&&this.scrollDirection!==l||function(a){let b=a[a.length-1];if(void 0===b)return!1;let c=a.length-2;for(;c>=0&&b.t-a[c].t<40;)c--;if(c<0)return!1;let d=a[c],e=c-1;for(;e>=0&&d.t-a[e].t<40;)e--;if(e<0)return!1;let f=a[e],g=(b.offset-d.offset)/(b.t-d.t),h=(d.offset-f.offset)/(d.t-f.t);return g*h>=0&&Math.abs(g)>=2*Math.abs(h)&&Math.abs(g)-Math.abs(h)>=.8}(m.samples))&&(this.scrollState=null)}this._iosGesture.onScroll({isScrolling:b,ownReadBack:"readBack"===j,moved:a!==k,external:"external"===j&&(null==(d=this.scrollState)?void 0:d.phase)!=="smooth"&&(null==(e=this.scrollState)?void 0:e.phase)!=="smoothFinishing"})&&(null==(f=this.scrollState)?void 0:f.phase)==="queued"&&(this.scrollState=null),this._flushHoldIfReady(!0),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement&&this.unsubs.push(this._iosGesture.listen(this.scrollElement)),this._scrollToOffset(this.getScrollOffset())}this._noteClampMax();let c=this.pendingScrollAnchor;this.pendingScrollAnchor=null,c&&this.scrollElement&&this.options.enabled&&("anchor"===c.kind?this._canWriteScroll()?ja(this.scrollState)&&!iX(this.getScrollOffset()-c.delta,this.scrollState.lastTargetOffset)||(this._followOffsetTarget(c.delta),this._scrollToOffset(this.getScrollOffset())):(this._holdOffset+=c.delta,this._followOffsetTarget(c.delta),this.notify(!1)):this.scrollToEnd({behavior:c.behavior})),this._flushHoldIfReady(!1),this._retryClampedAdjustment()},this._classifyScrollEvent=(a,b,c)=>{var d;return function({offset:a,isScrolling:b,elementMax:c,holdOffset:d,scrollOffset:e,pendingWrite:f,clampedMaxAtWrite:g}){var h;return b&&null===f&&a===e?"spurious":null!==f&&1.5>Math.abs(a-f.target)?"readBack":null!==f&&!f.smooth&&null!==c&&f.target>c+d+.5&&1.5>Math.abs(a-(c+d))||null!==f&&!f.smooth&&(null==(h=f.lowMaxes)?void 0:h.some(b=>1.5>Math.abs(a-b)))?"clampedReadBack":null!==g&&1.5>Math.abs(a-g)?"clampedEcho":"external"}({offset:a,isScrolling:b,elementMax:c,holdOffset:this._holdOffset,scrollOffset:this.scrollOffset,pendingWrite:this.pendingWrite,clampedMaxAtWrite:(null==(d=this._clampedAdjustment)?void 0:d.maxAtWrite)??null})},this._retryClampedAdjustment=()=>{if(null===this._clampedAdjustment||!this.scrollElement||!this.options.enabled)return;let{target:a,maxAtWrite:b}=this._clampedAdjustment,c=this.getMaxScrollOffset();c>b+.5&&(this._clampedAdjustment=a>c+.5?{target:a,maxAtWrite:c}:null,this._scrollToOffset(a))},this._writeAwaitingCommand=()=>{let a=this.scrollState;if(null===a||"queued"!==a.phase)return;let{behavior:b}=a;this.getMeasurements();let c=this.getScrollStateTarget(a);a.lastTargetOffset=c,this._clampedAdjustment=null,a.phase=i9(b,null!=a.index&&iX(c,this.getScrollOffset())),this._scrollToOffset(c,{behavior:b}),this.scheduleScrollReconcile()},this._readElementOffset=()=>{let a=this.scrollElement;if(null==a)return null;let{horizontal:b,isRtl:c}=this.options;return"number"==typeof a.scrollTop?b?a.scrollLeft*(c&&-1||1):a.scrollTop:"number"==typeof a.scrollY?b?a.scrollX:a.scrollY:null},this._canWriteScroll=()=>!(iY()&&this._iosGesture.inMotion())&&!this._reportedOverscroll,this._flushHoldIfReady=a=>{var b;if(0===this._holdOffset||!this.scrollElement||!this.options.enabled||!this._canWriteScroll()||(null==(b=this.scrollState)?void 0:b.phase)==="smooth")return;this._holdOffset=0,null!==this.scrollOffset&&this.scrollOffset<0&&(this.scrollOffset=0),this.notify(a);let c=this.getCommandWrittenOffset()??this.getScrollOffset();this._clampedAdjustment=this._clampedBy(c),this._scrollToOffset(c)},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getMeasurementOptions=iV(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode,this.options.gap],(a,b,c,d,e,f,g,h)=>(void 0!==this.prevLanes&&this.prevLanes!==f&&(this.lanesChangedFlag=!0),this.prevLanes=f,this.pendingMin=null,{count:a,paddingStart:b,scrollMargin:c,getItemKey:d,enabled:e,lanes:f,laneAssignmentMode:g,gap:h}),{key:!1}),this.isIndexInRange=a=>a>=0&&a<this.options.count,this.getMeasurements=iV(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:a,paddingStart:b,scrollMargin:c,getItemKey:d,enabled:e,lanes:f,laneAssignmentMode:g,gap:h},i)=>{var j,k;let l=this.itemSizeCache;if(!e)return this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>a)for(let b of this.laneAssignments.keys())b>=a&&this.laneAssignments.delete(b);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this._singleLaneMeasurements=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(a=>{this.itemSizeCache.set(a.key,a.size)}));let m=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===a&&(this.lanesSettling=!1),1===f){let e,f,g=2*a,i=null==(j=this._singleLaneMeasurements)?void 0:j.flat;if(!i||i.length<g){let a=new Float64Array(g);i&&m>0&&a.set(i.subarray(0,2*m)),i=a}let n=0===m?Array(a):this._singleLaneMeasurements.items.slice();if(0===m)e=b+c;else{let a=m-1;e=i[2*a]+i[2*a+1]+h}for(let b=m;b<a;b++){let a=d(b);n[b]=a;let c=l.get(a),f="number"==typeof c?c:this.options.estimateSize(b);i[2*b]=e,i[2*b+1]=f,e+=f+h}this._singleLaneMeasurements={flat:i,items:n};let o=(k=i,f=n.length,new Proxy(n,{get(a,b,c){if("string"==typeof b){let c=b.charCodeAt(0);if(c>=48&&c<=57){let c=+b;if(Number.isInteger(c)&&c>=0&&c<f){let b=a[c];if("object"!=typeof b){let d=k[2*c];b=a[c]={index:c,key:b,start:d,size:k[2*c+1],end:d+k[2*c+1],lane:0}}return b}}if("length"===b)return f}return Reflect.get(a,b,c)}}));return this.measurementsCache=o,o}let n=this.measurementsCache.slice(0,m),o=Array(f).fill(void 0),p=new Float64Array(f),q=0;for(let a=0;a<m;a++){let b=n[a];b&&(void 0===o[b.lane]&&q++,o[b.lane]=a,p[b.lane]=b.end)}for(let e=m;e<a;e++){let a,i,j=d(e),k=this.laneAssignments.get(e),m="estimate"===g||l.has(j);if(void 0!==k&&this.options.lanes>1){let d=o[a=k],e=void 0!==d?n[d]:void 0;i=e?e.end+h:b+c}else if(q===f){let b=0,c=p[0],d=o[0];for(let a=1;a<f;a++){let e=p[a];(e<c||e===c&&o[a]<d)&&(b=a,c=e,d=o[a])}a=b,i=c+h,m&&this.laneAssignments.set(e,a)}else a=e%this.options.lanes,i=b+c,m&&this.laneAssignments.set(e,a);let r=l.get(j),s="number"==typeof r?r:this.options.estimateSize(e),t=i+s;n[e]={index:e,start:i,size:s,end:t,key:j,lane:a},void 0===o[a]&&q++,o[a]=e,p[a]=t}return this.measurementsCache=n,n},{key:!1,debug:()=>this.options.debug}),this.calculateRange=iV(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(a,b,c,d)=>0===a.length||0===b?(this.range=null,null):(this.range=function(a,b,c,d,e){let f=a.length-1;if(a.length<=d)return{startIndex:0,endIndex:f};if(1===d&&null!==e){let a=function(a,b,c){let d=0;for(;d<=b;){let e=(d+b)/2|0,f=a[2*e];if(f<c)d=e+1;else{if(!(f>c))return e;b=e-1}}return d>0?d-1:0}(e,f,c),d=a,g=c+b;for(;d<f&&e[2*d]+e[2*d+1]<g;)d++;return{startIndex:a,endIndex:d}}let g=jc(0,f,b=>a[b].start,c),h=g;if(1===d)for(;h<f&&a[h].end<c+b;)h++;else if(d>1){let e=Array(d).fill(0);for(;h<f&&e.some(a=>a<c+b);){let b=a[h];e[b.lane]=b.end,h++}let i=Array(d).fill(c+b);for(;g>=0&&i.some(a=>a>=c);){let b=a[g];i[b.lane]=b.start,g--}g=Math.max(0,g-g%d),h=Math.min(f,h+(d-1-h%d))}return{startIndex:g,endIndex:h}}(a,b,c,d,1===d&&null!==this._singleLaneMeasurements?this._singleLaneMeasurements.flat:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=iV(()=>{let a=null,b=null,c=this.calculateRange();return c&&(a=c.startIndex,b=c.endIndex),this.maybeNotify.updateDeps([this.isScrolling,a,b]),[this.options.rangeExtractor,this.options.overscan,this.options.count,a,b,this.options.lanes]},(a,b,c,d,e,f)=>null===d||null===e?[]:a({startIndex:d,endIndex:e,overscan:b,count:c,lanes:f}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=a=>{let b=this.options.indexAttribute,c=a.getAttribute(b);return c?parseInt(c,10):(console.warn(`Missing attribute name '${b}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=a=>{var b;if(!ja(this.scrollState))return!0;let c=this.scrollState.index??(null==(b=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:b.index);if(void 0!==c&&this.range){let b=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),d=Math.max(0,c-b),e=Math.min(this.options.count-1,c+b);return a>=d&&a<=e}return!0},this.measureElement=a=>{if(!a)return void this.elementsCache.forEach((a,b)=>{a.isConnected||(this.observer.unobserve(a),this.elementsCache.delete(b))});let b=this.indexFromElement(a);if(!this.isIndexInRange(b))return;let c=this.options.getItemKey(b),d=this.elementsCache.get(c);d!==a&&(d&&this.observer.unobserve(d),this.observer.observe(a),this.elementsCache.set(c,a)),a.isConnected&&(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(b)&&this.resizeItem(b,this.options.measureElement(a,void 0,this))},this.resizeItem=(a,b)=>{var c,d,e;let f,g,h;if(!this.isIndexInRange(a))return;(null==(c=this._resizeBatch)?void 0:c.sync)&&this.getMeasurements();let i=null==(d=this._singleLaneMeasurements)?void 0:d.flat;if(1===this.options.lanes&&null!=i)h=this.options.getItemKey(a),g=i[2*a],f=i[2*a+1];else{let b=this.measurementsCache[a];if(!b)return;h=b.key,g=b.start,f=b.size}let j=this.itemSizeCache.get(h)??f,k=b-j;if(0!==k){let c="end"===this.options.anchorTo&&!ja(this.scrollState)&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,d=c?this._getLayoutTotalSize():0,i=this.getScrollOffset(),l=this.itemSizeCache.has(h)?g+j<=i&&"backward"!==this.scrollDirection:g<i,m=!ja(this.scrollState)&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[a]??{index:a,key:h,start:g,size:f,end:g+f,lane:0},k,this):l);(null===this.pendingMin||a<this.pendingMin)&&(this.pendingMin=a),this.itemSizeCache.set(h,b),this.itemSizeCacheVersion++;let n=!1;if(!this._awaitingCommandReadBack()&&(c?n=this.applyScrollAdjustment(this._getLayoutTotalSize()-d):m&&(n=this.applyScrollAdjustment(k))),this._resizeBatch){this._resizeBatch.notify=!0,(e=this._resizeBatch).sync||(e.sync=n);return}this.notify(n),this._noteClampMax(),this._flushHoldIfReady(!0),this._retryClampedAdjustment()}},this.getVirtualItems=iV(()=>[this.getVirtualIndexes(),this.getMeasurements(),this._holdOffset],(a,b,c)=>{let d=[];for(let e=0,f=a.length;e<f;e++){let f=b[a[e]];d.push(0===c?f:{...f,start:f.start-c,end:f.end-c})}return d},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=a=>{var b;let c=this.getMeasurements();if(0===c.length)return;let d=null==(b=this._singleLaneMeasurements)?void 0:b.flat,e=1===this.options.lanes&&null!=d,f=jc(0,c.length-1,e?a=>d[2*a]:a=>iW(c[a]).start,a);return iW(c[f])},this._noteClampMax=()=>{if(!this._awaitingCommandReadBack())return;let a=this._elementMaxScrollOffset();if(null===a)return;let b=this.pendingWrite,c=Math.max(a,0)+this._holdOffset;if(c>=b.target)return;let d=b.lowMaxes??(b.lowMaxes=[]);d[d.length-1]!==c&&d.push(c)},this.getMaxScrollOffset=()=>(this._elementMaxScrollOffset()??0)+this._holdOffset,this._toLayoutOffset=a=>{var b;let c=a+this._holdOffset;return(null==(b=this.pendingScrollAnchor)?void 0:b.kind)==="anchor"&&(c+=this.pendingScrollAnchor.delta),c},this._elementMaxScrollOffset=()=>{let a=this.scrollElement;if(null===a)return null;if("scrollHeight"in a)return this.options.horizontal?a.scrollWidth-a.clientWidth:a.scrollHeight-a.clientHeight;if("document"in a){let b=a.document.documentElement;return this.options.horizontal?b.scrollWidth-a.innerWidth:b.scrollHeight-a.innerHeight}return null},this._momentumStop=null,this._stopMomentum=a=>{let b=this.scrollElement,c=this.targetWindow;if(null===b||null===c)return;let d="document"in b?b.document.scrollingElement:b;if(!(null==d?void 0:d.style))return;if(this._momentumStop){this._momentumStop.done=a;return}let{style:e}=d,f=this.options.horizontal?"overflow-x":"overflow-y",g=e.getPropertyValue(f),h=e.getPropertyPriority(f);e.setProperty(f,"hidden","important");let i={restore:()=>"hidden"===e.getPropertyValue(f)&&"important"===e.getPropertyPriority(f)&&(e.setProperty(f,g,h),!0),done:a};this._momentumStop=i,c.requestAnimationFrame(()=>c.requestAnimationFrame(()=>{this._momentumStop===i&&(this._momentumStop=null,i.restore()&&i.done())}))},this._clampedBy=a=>{let b=this._elementMaxScrollOffset();if(null===b)return null;let c=b+this._holdOffset;return a>c+.5?{target:a,maxAtWrite:c}:null},this.getVirtualDistanceFromEnd=()=>Math.max(this._getLayoutTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(a=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=a,this.getOffsetForAlignment=(a,b,c=0)=>{if(!this.scrollElement)return 0;let d=this.getSize(),e=this.getScrollOffset();return"auto"===b&&(b=a>=e+d?"end":"start"),"center"===b?a+=(c-d)/2:"end"===b&&(a-=d),Math.max(Math.min(this.getMaxScrollOffset(),a),0)},this.getOffsetForIndex=(a,b="auto")=>{a=Math.max(0,Math.min(a,this.options.count-1));let c=this.getSize(),d=this.getScrollOffset(),e=this.measurementsCache[a];if(!e)return;if("auto"===b)if(e.end>=d+c-this.options.scrollPaddingEnd)b="end";else{if(!(e.start<=d+this.options.scrollPaddingStart))return[d,b];b="start"}if("end"===b&&a===this.options.count-1){let a=this.getMaxScrollOffset();return[Math.max(Math.min(a-this.options.paddingEnd+this.options.scrollPaddingEnd,a),0),b]}let f="end"===b?e.end+this.options.scrollPaddingEnd:e.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(f,b,e.size),b]},this.scrollToOffset=(a,{align:b="start",behavior:c="auto"}={})=>{this._startScroll({index:null,align:b},this.getOffsetForAlignment(a,b),c,"absolute")},this.scrollToIndex=(a,{align:b="auto",behavior:c="auto"}={})=>{a=Math.max(0,Math.min(a,this.options.count-1));let d=this.getOffsetForIndex(a,b);if(!d)return;let[e,f]=d;this._startScroll({index:a,align:f},e,c,"absolute")},this.scrollBy=(a,{behavior:b="auto"}={})=>{let c=this.getOffsetForAlignment((this.getCommandWrittenOffset()??this.getScrollOffset())+a,"start");this._startScroll({index:null,align:"start"},c,b,"relative")},this.scrollToEnd=({behavior:a="auto"}={})=>{this.options.count>0?this._startScroll({index:this.options.count-1,align:"end",toEnd:!0},Math.max(this.getMaxScrollOffset(),0),a,"absolute"):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:a})},this.cancelScroll=()=>{null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null},this.getTotalSize=()=>Math.max(this._getLayoutTotalSize()-this._holdOffset,0),this._getLayoutTotalSize=()=>{var a,b;let c,d=this.getMeasurements();if(0===d.length)c=this.options.paddingStart;else if(1===this.options.lanes){let e=d.length-1,f=null==(a=this._singleLaneMeasurements)?void 0:a.flat;c=null!=f?f[2*e]+f[2*e+1]:(null==(b=d[e])?void 0:b.end)??0}else{let a=Array(this.options.lanes).fill(null),b=d.length-1;for(;b>=0&&a.some(a=>null===a);){let c=d[b];null===a[c.lane]&&(a[c.lane]=c.end),b--}c=Math.max(...a.filter(a=>null!==a))}return Math.max(c-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let a=[];if(0===this.itemSizeCache.size)return a;for(let b of this.getMeasurements())b&&this.itemSizeCache.has(b.key)&&a.push({index:b.index,key:b.key,start:b.start,size:b.size,end:b.end,lane:b.lane});return a},this._scrollToOffset=(a,{adjustments:b,behavior:c}={})=>{let d={target:a+(b??0),smooth:"smooth"===c};return this.pendingWrite=d,this.options.scrollToFn(a-this._holdOffset,{behavior:c,adjustments:b},this),d},this.getCommandWrittenOffset=()=>null===this.scrollState||null===this.pendingWrite||this.pendingWrite.smooth?null:this.pendingWrite.target,this._awaitingCommandReadBack=()=>{let a=this.getCommandWrittenOffset();return!(iY()&&this._iosGesture.dragging())&&null!==a&&!iX(a,this.getScrollOffset())},this._followOffsetTarget=a=>{null!==this.scrollState&&null==this.scrollState.index&&(this.scrollState.lastTargetOffset+=a)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(a)}get scrollAdjustments(){return 0}applyScrollAdjustment(a,b){if(0===a)return!1;if(this._followOffsetTarget(a),!this._canWriteScroll())return this._holdOffset+=a,null!==this.scrollOffset&&(this.scrollOffset+=a),!0;{let c=this.getScrollOffset();this._clampedAdjustment=this._clampedBy(c+a);let d=this._scrollToOffset(c,{adjustments:a,behavior:b});return null!==this.scrollOffset&&(this.pendingWrite===d&&(this.scrollOffset+=a),this.scrollOffset<0&&(this.scrollOffset=0)),!0}}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}getScrollStateTarget(a){let b=a.toEnd?[Math.max(this.getMaxScrollOffset(),0)]:null!=a.index?this.getOffsetForIndex(a.index,a.align):void 0;return b?b[0]:a.lastTargetOffset}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}if("queued"===this.scrollState.phase)return void this.scheduleScrollReconcile();this.getMeasurements();let a=this.getScrollStateTarget(this.scrollState),b=null==this.scrollState.index?1:this.options.useAnimationFrameWithResizeObserver?3:2,c=a!==this.scrollState.lastTargetOffset;if(!c&&iX(a,this.getScrollOffset())){if("smooth"===this.scrollState.phase?this.scrollState.phase="smoothLanded":"smoothFinishing"===this.scrollState.phase&&(this.scrollState.phase="instant"),this.scrollState.stableFrames++,this.scrollState.stableFrames>=b){this.getScrollOffset()!==a&&this._scrollToOffset(a,{behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,c){let b=this.getSize()||600,c=Math.abs(a-this.getScrollOffset()),d=ja(this.scrollState)&&c>b;this.scrollState.lastTargetOffset=a,d?this.scrollState.phase="smooth":"smooth"===this.scrollState.phase?this.scrollState.phase="smoothFinishing":"smoothLanded"===this.scrollState.phase&&(this.scrollState.phase="instant"),this._scrollToOffset(a,{behavior:d?"smooth":"auto"})}this.scheduleScrollReconcile()}_startScroll(a,b,c,d){let e=this._iosGesture.tail();if("absolute"===d&&null!==e){if("fling"===e&&(void 0!==f?f:f=iY()&&"u">typeof CSS&&"function"==typeof CSS.supports&&CSS.supports("overflow-anchor: auto"))){this._stopMomentum(()=>{let a=this.scrollState;(null==a?void 0:a.phase)!=="queued"||"fling"!==this._iosGesture.tail()||this._reportedOverscroll||(this._iosGesture.end(),this._flushHoldIfReady(!0),this._writeAwaitingCommand())}),this.scrollState={...a,startedAt:this.now(),lastTargetOffset:b,stableFrames:0,phase:"queued",behavior:c,samples:[]},this.scheduleScrollReconcile();return}this._iosGesture.end()}this.scrollState={...a,startedAt:this.now(),lastTargetOffset:b,stableFrames:0,behavior:c,phase:i9(c,null!=a.index&&iX(b,this.getScrollOffset()))},this._scrollToOffset(b,{behavior:c}),this.scheduleScrollReconcile()}}let jc=(a,b,c,d)=>{for(;a<=b;){let e=(a+b)/2|0,f=c(e);if(f<d)a=e+1;else{if(!(f>d))return e;b=e-1}}return a>0?a-1:0},jd="u">typeof document?cu.useLayoutEffect:cu.useEffect;function je(a){return function({useFlushSync:a=!0,directDomUpdates:b=!1,directDomUpdatesMode:c="transform",...d}){let e=cu.useReducer(a=>a+1,0)[1],f=cu.useRef({enabled:b,mode:c,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});f.current.enabled=b,f.current.mode=c;let g=cu.useRef(!1),h=a=>{let b=f.current;if(!b.enabled||!b.container)return;let c=a.getTotalSize();if(c!==b.lastSize){b.lastSize=c;let d=a.options.horizontal?"width":"height";b.container.style[d]=`${c}px`}},i=(a,b,c)=>{let d=f.current,e=!!a.options.horizontal,g=b.start-a.options.scrollMargin;d.lastPositions.get(c)!==g&&(d.lastPositions.set(c,g),"transform"===d.mode?c.style.transform=e?`translate3d(${g}px, 0, 0)`:`translate3d(0, ${g}px, 0)`:c.style[e?"left":"top"]=`${g}px`)},j=a=>{let b=f.current;if(b.enabled&&b.container)for(let b of(h(a),a.getVirtualItems())){let c=a.elementsCache.get(b.key);c&&i(a,b,c)}},k={...d,onChange:(b,c)=>{var h;let i=f.current,k=!0;if(i.enabled){j(b);let a=b.range,c=i.prevRange;(k=!c||c.isScrolling!==b.isScrolling||c.startIndex!==(null==a?void 0:a.startIndex)||c.endIndex!==(null==a?void 0:a.endIndex))&&(i.prevRange=a?{startIndex:a.startIndex,endIndex:a.endIndex,isScrolling:b.isScrolling}:null)}k&&(a&&c&&!g.current?(0,hq.flushSync)(e):e()),null==(h=d.onChange)||h.call(d,b,c)}},[l]=cu.useState(()=>{let a=new jb(k),b=a.measureElement;return a.measureElement=c=>{g.current=!0;try{b(c)}finally{g.current=!1}let d=f.current;if(null!==c&&d.enabled&&d.container){let b=a.measurementsCache[a.indexFromElement(c)];b&&i(a,b,c)}},Object.assign(a,{containerRef:b=>{let c=f.current;c.container=b,c.lastSize=null,null!==b&&j(a)}})});return l.setOptions(k),jd(()=>l._didMount(),[]),jd(()=>(h(l),l._willUpdate())),jd(()=>{j(l)}),l}({observeElementRect:i3,observeElementOffset:i6,scrollToFn:i8,...a})}var jf=a.i(91023);(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var jg=a=>Array.isArray(a)?[...a]:(a=>{if("object"!=typeof a||null===a)return!1;let b=Object.getPrototypeOf(a);return b===Object.prototype||null===b})(a)?(0,cQ.X)({},a):{};function jh(a,b,c){let d=b.split("."),e=(0,cQ.X)({},a),f=e;for(let a=0;a<d.length;a++){let[b,e]=d[a].replace("]","").split("["),g=a===d.length-1;if(void 0!==e){f[b]=Array.isArray(f[b])?[...f[b]]:[];let a=Number(e);if(g){f[b][a]=c;continue}f[b][a]=jg(f[b][a]),f=f[b][a];continue}if(g){f[b]=c;continue}f[b]=jg(f[b]),f=f[b]}return e}(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var ji=/^(data-.*)$/,jj=(0,cz.f)("Button",{Button:"_Button_oe4qj_1","Button--medium":"_Button--medium_oe4qj_34","Button--large":"_Button--large_oe4qj_62","Button-icon":"_Button-icon_oe4qj_89","Button--primary":"_Button--primary_oe4qj_93","Button--disabled":"_Button--disabled_oe4qj_123","Button--secondary":"_Button--secondary_oe4qj_135","Button--flush":"_Button--flush_oe4qj_171","Button--fullWidth":"_Button--fullWidth_oe4qj_179","Button-spinner":"_Button-spinner_oe4qj_184"}),jk=a=>{var{children:b,href:c,onClick:d,variant:e="primary",type:f,disabled:g,tabIndex:h,newTab:i,fullWidth:j,icon:k,size:l="medium",loading:m=!1}=a,n=(0,cQ.H)(a,["children","href","onClick","variant","type","disabled","tabIndex","newTab","fullWidth","icon","size","loading"]);let[o,p]=(0,cu.useState)(m);(0,cu.useEffect)(()=>p(m),[m]);let q=(a=>{let b={};for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&ji.test(c)&&(b[c]=a[c]);return b})(n);return(0,cR.jsxs)(c?"a":f?"button":"span",(0,cQ.s)((0,cQ.X)({className:jj({primary:"primary"===e,secondary:"secondary"===e,disabled:g,fullWidth:j,[l]:!0}),onClick:a=>{d&&(p(!0),Promise.resolve(d(a)).then(()=>{p(!1)}))},type:f,disabled:g||o,tabIndex:h,target:i?"_blank":void 0,rel:i?"noreferrer":void 0,href:c},q),{children:[k&&(0,cR.jsx)("div",{className:jj("icon"),children:k}),b,o&&(0,cR.jsx)("div",{className:jj("spinner"),children:(0,cR.jsx)(cO.cD,{size:14})})]}))};(0,cQ.$)(),(0,cQ.$)();var jl={InputWrapper:"_InputWrapper_qyenz_1","Input-label":"_Input-label_qyenz_5","Input-labelIcon":"_Input-labelIcon_qyenz_17","Input-disabledIcon":"_Input-disabledIcon_qyenz_24","Input-input":"_Input-input_qyenz_29","Input-select":"_Input-select_qyenz_61","Input-selectIcon":"_Input-selectIcon_qyenz_71",Input:"_Input_qyenz_1","Input--readOnly":"_Input--readOnly_qyenz_111","Input-radioGroupItems":"_Input-radioGroupItems_qyenz_150","Input-radio":"_Input-radio_qyenz_150","Input-radioInner":"_Input-radioInner_qyenz_179","Input-radioInput":"_Input-radioInput_qyenz_261"},jm=(0,cz.f)("Input",jl),jn=({children:a,icon:b,label:c,el:d="label",readOnly:e,className:f})=>{let g=(0,cO.mP)("field-readonly");return(0,cR.jsxs)(d,{className:f,children:[(0,cR.jsxs)("div",{className:jm("label"),children:[b?(0,cR.jsx)("div",{className:jm("labelIcon"),children:b}):(0,cR.jsx)(cR.Fragment,{}),c,e&&(0,cR.jsx)("div",{className:jm("disabledIcon"),title:g,children:(0,cR.jsx)(cO.uM,{size:"12"})})]}),a]})},jo=({children:a,icon:b,label:c,el:d="label",readOnly:e})=>{let f=(0,cO.mm)(a=>a.overrides),g=(0,cu.useMemo)(()=>f.fieldLabel||jn,[f]);return c?(0,cR.jsx)(g,{label:c,icon:b,className:jm({readOnly:e}),readOnly:e,el:d,children:a}):(0,cR.jsx)(cR.Fragment,{children:a})};(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var jp={ArrayField:"_ArrayField_62huh_5","ArrayField--isDraggingFrom":"_ArrayField--isDraggingFrom_62huh_30","ArrayField-addButton":"_ArrayField-addButton_62huh_38","ArrayField--hasItems":"_ArrayField--hasItems_62huh_58","ArrayField-inner":"_ArrayField-inner_62huh_93",ArrayFieldItem:"_ArrayFieldItem_62huh_101","ArrayFieldItem--isDragging":"_ArrayFieldItem--isDragging_62huh_110","ArrayFieldItem--isExpanded":"_ArrayFieldItem--isExpanded_62huh_114","ArrayFieldItem-summary":"_ArrayFieldItem-summary_62huh_132","ArrayFieldItem--noFields":"_ArrayFieldItem--noFields_62huh_167","ArrayField--addDisabled":"_ArrayField--addDisabled_62huh_176","ArrayFieldItem-body":"_ArrayFieldItem-body_62huh_228","ArrayFieldItem-fieldset":"_ArrayFieldItem-fieldset_62huh_237","ArrayFieldItem-rhs":"_ArrayFieldItem-rhs_62huh_250","ArrayFieldItem-actions":"_ArrayFieldItem-actions_62huh_256"};function jq(a,b){let c=(0,cu.useContext)(a);if(!c)throw Error("useContextStore must be used inside context");return(0,cV.f)(c,cT(b))}(0,cQ.$)(),(0,cQ.$)();var jr=(u={},{ctx:k=(0,cu.createContext)((0,cU.f)((0,cW.f)(()=>u))),Provider:({children:a,value:b})=>{let[c]=(0,cu.useState)(()=>(0,cU.f)(()=>b));return(0,cR.jsx)(k.Provider,{value:c,children:a})}}),js=()=>(0,cu.useContext)(jr.ctx);function jt(a){let b=(0,cu.useContext)(jr.ctx);if(!b)throw Error("useContextStore must be used inside context");return(0,cV.f)(b,cT(a))}(0,cQ.$)(),(0,cQ.$)();var ju=(0,cz.f)("DragIcon",{DragIcon:"_DragIcon_5e515_1","DragIcon--disabled":"_DragIcon--disabled_5e515_10"}),jv=({isDragDisabled:a})=>(0,cR.jsx)("div",{className:ju({disabled:a}),children:(0,cR.jsx)("svg",{viewBox:"0 0 20 20",width:"12",fill:"currentColor",children:(0,cR.jsx)("path",{d:"M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"})})});(0,cQ.$)(),(0,cQ.$)();var{Delay:jw,Distance:jx}=he,jy=[new jw({value:200,tolerance:10})],jz=[new jw({value:200,tolerance:10}),new jx({value:5})],jA=({other:a=jz,mouse:b,touch:c=jy}={touch:jy,other:jz})=>{let[d]=(0,cu.useState)(()=>[hg.configure({activationConstraints(d,e){var f;let{pointerType:g,target:h}=d;return"mouse"===g&&f8(h)&&(e.handle===h||(null==(f=e.handle)?void 0:f.contains(h)))?b:"touch"===g?c:a}})]);return d};(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var jB=(a,b,c,d,e)=>{},jC="increasing";(0,cQ.$)();var jD=(a,b)=>{if("dynamic"===a){if(!(Math.abs(b.y)>Math.abs(b.x)))return 0===b.x?null:b.x>0?"right":"left"}else if("x"===a)return 0===b.x?null:b.x>0?"right":"left";return 0===b.y?null:b.y>0?"down":"up"};(0,cQ.$)(),(0,cQ.$)();var jE={current:{x:0,y:0},delta:{x:0,y:0},previous:{x:0,y:0},direction:null};(0,cQ.$)();var jF=({dragOperation:a,droppable:b})=>{let c=a.position.current;if(!c)return null;let{id:d}=b;return b.shape&&b.shape.containsPoint(c)?{id:d,value:1/d7.distance(b.shape.center,c),type:eY.PointerIntersection,priority:eX.High}:null};(0,cQ.$)();var jG=(0,cU.f)(()=>({fallbackEnabled:!1})),jH="",jI=(a,b=.05)=>c=>{var d,e,f,g,h;let{dragOperation:i,droppable:j}=c,{position:k}=i,l=null==(d=i.shape)?void 0:d.current,{shape:m}=j;if(!l||!m)return null;let{center:n}=l,{fallbackEnabled:o}=jG.getState(),p=((a,b="dynamic")=>(jE.current=a,jE.delta={x:a.x-jE.previous.x,y:a.y-jE.previous.y},jE.direction=jD(b,jE.delta)||jE.direction,(Math.abs(jE.delta.x)>10||Math.abs(jE.delta.y)>10)&&(jE.previous=d7.from(a)),jE))(k.current,a),q={direction:p.direction},{center:r}=m,s=((a,b,c,d=0)=>{let e=a.boundingRectangle,f=b.center;if("down"===c){let a=d*b.boundingRectangle.height;return e.bottom>=f.y+a}if("up"===c){let a=d*b.boundingRectangle.height;return e.top<f.y-a}if("left"===c){let a=d*b.boundingRectangle.width;return f.x-a>=e.left}let g=d*b.boundingRectangle.width;return e.right-g>=f.x})(l,m,p.direction,b);if((null==(e=i.source)?void 0:e.id)===j.id){let a=((a,b)=>{var c;let{dragOperation:d,droppable:e}=a,{shape:f}=e,{position:g}=d,h=null==(c=d.shape)?void 0:c.current;if(!h||!f)return null;let i=f.center,j=Math.sqrt(Math.pow(i.x-b.x,2)+Math.pow(i.y-b.y,2)),k=Math.sqrt(Math.pow(i.x-g.current.x,2)+Math.pow(i.y-g.current.y,2));return(jC=k===j?jC:k<j?"decreasing":"increasing",jB(h.center,i,e.id.toString(),"rebeccapurple"),"decreasing"===jC)?{id:e.id,value:1,type:eY.Collision}:null})(c,p.previous);if(jB(n,r,j.id.toString(),"yellow"),a)return(0,cQ.s)((0,cQ.X)({},a),{priority:eX.Highest,data:q})}let t=l.intersectionArea(m),u=t/m.area;if(t&&s){jB(n,r,j.id.toString(),"green",p.direction);let a={id:j.id,value:u,priority:eX.High,type:eY.Collision},b=jH===j.id;return jH="",(0,cQ.s)((0,cQ.X)({},a),{id:b?"flush":a.id,data:q})}if(o&&(null==(f=i.source)?void 0:f.id)!==j.id){let b=m.boundingRectangle.right>l.boundingRectangle.left&&m.boundingRectangle.left<l.boundingRectangle.right,d=m.boundingRectangle.bottom>l.boundingRectangle.top&&m.boundingRectangle.top<l.boundingRectangle.bottom;if("y"===a&&b||d){let b=(a=>{let{dragOperation:b,droppable:c}=a,{shape:d,position:e}=b;if(!c.shape)return null;let f=d?d8.from(d.current.boundingRectangle).corners:void 0,g=d8.from(c.shape.boundingRectangle).corners.reduce((a,b,c)=>{var d;return a+d7.distance(d7.from(b),null!=(d=null==f?void 0:f[c])?d:e.current)},0);return{id:c.id,value:1/(g/4),type:eY.Collision,priority:eX.Normal}})(c);if(b){let c=jD(a,{x:l.center.x-((null==(g=j.shape)?void 0:g.center.x)||0),y:l.center.y-((null==(h=j.shape)?void 0:h.center.y)||0)});return(q.direction=c,t)?(jB(n,r,j.id.toString(),"red",c||""),jH=j.id,(0,cQ.s)((0,cQ.X)({},b),{priority:eX.Low,data:q})):(jB(n,r,j.id.toString(),"orange",c||""),(0,cQ.s)((0,cQ.X)({},b),{priority:eX.Lowest,data:q}))}}}return jB(n,r,j.id.toString(),"hotpink"),null};(0,cQ.$)();var jJ=(a,b="ltr")=>"up"===a||"ltr"===b&&"left"===a||"rtl"===b&&"right"===a?"before":"after",jK=({position:a,sourceIndex:b,targetIndex:c,isSameZone:d})=>{let e=c;return d&&e>=b&&(e-=1),"after"===a&&(e+=1),e},jL=({children:a,onDragStart:b,onDragEnd:c,onMove:d})=>{let e=jA({mouse:[new he.Distance({value:5})]});return(0,cR.jsx)(hK,{sensors:e,onDragStart:a=>{var c,d;return b(null!=(d=null==(c=a.operation.source)?void 0:c.id.toString())?d:"")},onDragOver:(a,b)=>{var c;a.preventDefault();let{operation:e}=a,{source:f,target:g}=e;if(!f||!g)return;let h=f.data.index,i=g.data.index,j=null==(c=b.collisionObserver.collisions[0])?void 0:c.data;h!==i&&f.id!==g.id&&d({source:h,target:jK({position:jJ(null==j?void 0:j.direction),sourceIndex:h,targetIndex:i,isSameZone:!0})})},onDragEnd:()=>{setTimeout(()=>{c()},250)},children:a})},jM=({id:a,index:b,disabled:c,children:d,type:e="item"})=>{let{ref:f,isDragging:g,isDropping:h,handleRef:i}=iR({id:a,type:e,index:b,disabled:c,data:{index:b},collisionDetector:jI("y")});return d({isDragging:g,isDropping:h,ref:f,handleRef:i})};(0,cQ.$)();var jN=(0,cu.createContext)({}),jO=()=>{let a=(0,cu.useContext)(jN);return(0,cQ.s)((0,cQ.X)({},a),{readOnlyFields:a.readOnlyFields||{}})},jP=({children:a,name:b,subName:c,wildcardName:d=b,readOnlyFields:e})=>{let f=`${b}.${c}`,g=`${d}.${c}`,h=(0,cu.useMemo)(()=>Object.keys(e).reduce((a,c)=>{if(c.indexOf(f)>-1||c.indexOf(g)>-1){let f=new RegExp(`^(${b}|${d}).`.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\./g,"\\.").replace(/\*/g,"\\*")),g=c.replace(f,"");return(0,cQ.s)((0,cQ.X)({},a),{[g]:e[c]})}return a},{}),[b,c,d,e]);return(0,cR.jsx)(jN.Provider,{value:{readOnlyFields:h,localName:c},children:a})};(0,cQ.$)();var jQ=(a,b)=>b.split(".").reduce((a,b)=>{if(!a)return;let[c,d]=b.replace("]","").split("["),e=a[c];return d&&e?e[parseInt(d)]:e},a);(0,cQ.$)();var jR=(0,cu.memo)(({field:a,id:b,index:c,name:d,subName:e,localName:f,onChange:g,forceReadOnly:h})=>{let i=void 0!==c?`${d}[${c}]`:d,j=d?`${i}.${e}`:e,k=void 0!==c?`${f}[${c}]`:null!=f?f:e,l=void 0!==c?`${f}[*]`:f,m=`${k}.${e}`,n=`${l}.${e}`,{readOnlyFields:o}=jO(),p=h||(void 0!==o[j]?o[m]:o[n]),q=a.label||e;return(0,cR.jsx)(jP,{name:k,wildcardName:l,subName:e,readOnlyFields:o,children:(0,cR.jsx)(kj,{name:j,label:q,id:b,readOnly:p,field:(0,cQ.s)((0,cQ.X)({},a),{label:q}),onChange:(a,b)=>{g(a,b,e)}})})}),jS=(0,cz.f)("ArrayField",jp),jT=(0,cz.f)("ArrayFieldItem",jp),jU=(0,cu.memo)(({index:a,originalIndex:b,field:c,name:d})=>{let e=jt(b=>jQ(b,`${[d]}[${a}]`)),f=(0,cO.mP)("field-arrayitem-summary",{index:b});return(0,cu.useMemo)(()=>e&&c.getItemSummary?c.getItemSummary(e,a):f,[e,c,b,a,f])}),jV=(0,cu.memo)(({id:a,arrayId:b,index:c,dragIndex:d,originalIndex:e,field:f,onChange:g,onToggleExpand:h,readOnly:i,actions:j,name:k,localName:l})=>{let m=(0,cO.mm)(c=>{var d;return(null==(d=c.state.ui.arrayState[b])?void 0:d.openId)===a}),n=(0,cO.mm)(a=>a.permissions.getPermissions({item:a.selectedItem}).edit),o=(0,cu.useMemo)(()=>!!f.arrayFields&&Object.values(f.arrayFields).some(a=>"slot"!==a.type&&!1!==a.visible),[f.arrayFields]);return(0,cR.jsx)(jM,{id:a,index:d,disabled:i,children:({isDragging:b,ref:d,handleRef:p})=>(0,cR.jsxs)("div",{ref:d,className:jT({isExpanded:m&&o,isDragging:b,noFields:!o}),children:[(0,cR.jsxs)("div",{ref:p,onClick:c=>{b||(c.preventDefault(),c.stopPropagation(),o&&h(a,m))},className:jT("summary"),children:[(0,cR.jsx)(jU,{index:c,originalIndex:e,field:f,name:k}),(0,cR.jsxs)("div",{className:jT("rhs"),children:[!i&&(0,cR.jsx)("div",{className:jT("actions"),children:j}),(0,cR.jsx)("div",{children:(0,cR.jsx)(jv,{})})]})]}),(0,cR.jsx)("div",{className:jT("body"),children:m&&o&&(0,cR.jsx)("fieldset",{className:jT("fieldset"),children:Object.keys(f.arrayFields).map(b=>{let d=f.arrayFields[b];return(0,cR.jsx)(jR,{id:`${a}_${b}`,name:k,index:c,subName:b,localName:l,field:d,onChange:g,forceReadOnly:!n},`${a}_${b}_${c}`)})})})]})})});(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var jW=(a,b=!0)=>jt(c=>b?jQ(c,a):void 0);(0,cQ.$)();var jX=(a,b,{tracked:c=!0,fallback:d}={})=>{let e=jW(a,c),f=(0,cO.mm)(b=>b.state.ui.field.focus===a),[g,h]=(0,cu.useState)(e),i=(0,cu.useCallback)((a,...c)=>{h(a),b(a,...c)},[b]);return((0,cu.useEffect)(()=>{c&&(f||h(e))},[c,f,e]),c)?[void 0!==d&&null==g?d:g,i]:[void 0,b]},jY=(0,cz.f)("Input",jl),jZ=({field:a,onChange:b,readOnly:c,id:d,name:e=d,label:f,labelIcon:g,Label:h})=>{let[i,j]=jX(e,b,{fallback:""});return(0,cR.jsx)(h,{label:f||e,icon:g||(0,cR.jsxs)(cR.Fragment,{children:["text"===a.type&&(0,cR.jsx)(cO.sn,{size:16}),"number"===a.type&&(0,cR.jsx)(cO.e5,{size:16})]}),readOnly:c,children:(0,cR.jsx)("input",{className:jY("input"),autoComplete:"off",type:a.type,title:f||e,name:e,value:i,onChange:b=>{if("number"===a.type){let c=Number(b.currentTarget.value);(void 0===a.min||!(c<a.min))&&(void 0!==a.max&&c>a.max||j(c))}else j(b.currentTarget.value)},readOnly:c,tabIndex:c?-1:void 0,id:d,min:"number"===a.type?a.min:void 0,max:"number"===a.type?a.max:void 0,placeholder:"text"===a.type||"number"===a.type?a.placeholder:void 0,step:"number"===a.type?a.step:void 0})})};(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var j$={"ExternalInput-actions":"_ExternalInput-actions_143vl_1","ExternalInput-button":"_ExternalInput-button_143vl_5","ExternalInput--dataSelected":"_ExternalInput--dataSelected_143vl_34","ExternalInput--readOnly":"_ExternalInput--readOnly_143vl_41","ExternalInput-detachButton":"_ExternalInput-detachButton_143vl_48",ExternalInput:"_ExternalInput_143vl_1",ExternalInputModal:"_ExternalInputModal_143vl_118","ExternalInputModal-grid":"_ExternalInputModal-grid_143vl_128","ExternalInputModal--filtersToggled":"_ExternalInputModal--filtersToggled_143vl_139","ExternalInputModal-filters":"_ExternalInputModal-filters_143vl_144","ExternalInputModal-masthead":"_ExternalInputModal-masthead_143vl_164","ExternalInputModal-tableWrapper":"_ExternalInputModal-tableWrapper_143vl_173","ExternalInputModal-table":"_ExternalInputModal-table_143vl_173","ExternalInputModal-thead":"_ExternalInputModal-thead_143vl_189","ExternalInputModal-th":"_ExternalInputModal-th_143vl_189","ExternalInputModal-td":"_ExternalInputModal-td_143vl_204","ExternalInputModal-tr":"_ExternalInputModal-tr_143vl_210","ExternalInputModal-tbody":"_ExternalInputModal-tbody_143vl_217","ExternalInputModal--hasData":"_ExternalInputModal--hasData_143vl_244","ExternalInputModal-loadingBanner":"_ExternalInputModal-loadingBanner_143vl_248","ExternalInputModal--isLoading":"_ExternalInputModal--isLoading_143vl_265","ExternalInputModal-searchForm":"_ExternalInputModal-searchForm_143vl_269","ExternalInputModal-search":"_ExternalInputModal-search_143vl_269","ExternalInputModal-searchIcon":"_ExternalInputModal-searchIcon_143vl_306","ExternalInputModal-searchIconText":"_ExternalInputModal-searchIconText_143vl_333","ExternalInputModal-searchInput":"_ExternalInputModal-searchInput_143vl_343","ExternalInputModal-searchActions":"_ExternalInputModal-searchActions_143vl_358","ExternalInputModal-searchActionIcon":"_ExternalInputModal-searchActionIcon_143vl_371","ExternalInputModal-footerContainer":"_ExternalInputModal-footerContainer_143vl_375","ExternalInputModal-footer":"_ExternalInputModal-footer_143vl_375","ExternalInputModal-field":"_ExternalInputModal-field_143vl_388"};(0,cQ.$)(),(0,cQ.$)();var j_=(0,cz.f)("Modal",{Modal:"_Modal_g5xob_1","Modal--isOpen":"_Modal--isOpen_g5xob_15","Modal-inner":"_Modal-inner_g5xob_19"}),j0=({children:a,onClose:b,isOpen:c})=>{let[d,e]=(0,cu.useState)(null);return((0,cu.useEffect)(()=>{e(document.getElementById("puck-portal-root"))},[]),d)?(0,hq.createPortal)((0,cR.jsx)("div",{className:j_({isOpen:c}),onClick:b,children:(0,cR.jsx)("div",{className:j_("inner"),onClick:a=>a.stopPropagation(),children:a})}),d):(0,cR.jsx)("div",{})};(0,cQ.$)(),(0,cQ.$)();var j1=(0,cz.f)("Heading",{Heading:"_Heading_97eh4_1","Heading--xxxxl":"_Heading--xxxxl_97eh4_12","Heading--xxxl":"_Heading--xxxl_97eh4_18","Heading--xxl":"_Heading--xxl_97eh4_22","Heading--xl":"_Heading--xl_97eh4_26","Heading--l":"_Heading--l_97eh4_30","Heading--m":"_Heading--m_97eh4_34","Heading--s":"_Heading--s_97eh4_38","Heading--xs":"_Heading--xs_97eh4_42"}),j2=({children:a,rank:b,size:c="m"})=>{let d=b?`h${b}`:"span";return(0,cR.jsx)(d,{className:j1({[c]:!0}),children:a})};(0,cQ.$)();var j3=(0,cz.f)("ExternalInput",j$),j4=(0,cz.f)("ExternalInputModal",j$),j5=({count:a})=>{let b=(0,cO.mP)("field-external-result-singular",{count:a}),c=(0,cO.mP)("field-external-result-plural",{count:a});return(0,cR.jsx)("span",{className:j4("footer"),children:1===a?b:c})},j6={},j7=({field:a,onChange:b,value:c=null,name:d,id:e,readOnly:f})=>{var g;let{mapProp:h=a=>a,mapRow:i=a=>a,filterFields:j}=a||{},{enabled:k}=null!=(g=a.cache)?g:{enabled:!0},[l,m]=(0,cu.useState)([]),[n,o]=(0,cu.useState)(!1),[p,q]=(0,cu.useState)(!0),r=!!j,[s,t]=(0,cu.useState)(a.initialFilters||{}),[u,v]=(0,cu.useState)(r),w=(0,cu.useMemo)(()=>l.map(i),[l]),x=(0,cu.useMemo)(()=>{let a=new Set;for(let b of w)for(let c of Object.keys(b))("string"==typeof b[c]||"number"==typeof b[c]||(0,cu.isValidElement)(b[c]))&&a.add(c);return Array.from(a)},[w]),[y,z]=(0,cu.useState)(a.initialQuery||""),A=(0,cu.useCallback)((b,c)=>(0,cQ._)(null,null,function*(){let d;q(!0);let f=`${e}-${b}-${JSON.stringify(c)}`;(d=k&&j6[f]?j6[f]:yield a.fetchList({query:b,filters:c}))&&(m(d),q(!1),k&&(j6[f]=d))}),[e,a]),B=(0,cu.useCallback)(b=>a.renderFooter?a.renderFooter(b):(0,cR.jsx)(j5,{count:b.items.length}),[a.renderFooter]);(0,cu.useEffect)(()=>{A(y,s)},[]);let C=(0,cO.mP)("field-external-item"),D=(0,cO.mP)("field-external-search"),E=(0,cO.mP)("field-external-togglefilters"),F=(0,cO.mP)("field-external-selectdata");return(0,cR.jsxs)("div",{className:j3({dataSelected:!!c,modalVisible:n,readOnly:f}),id:e,children:[(0,cR.jsxs)("div",{className:j3("actions"),children:[(0,cR.jsx)("button",{type:"button",onClick:()=>o(!0),className:j3("button"),disabled:f,children:c?a.getItemSummary?a.getItemSummary(c):C:(0,cR.jsxs)(cR.Fragment,{children:[(0,cR.jsx)(cO.at,{size:"16"}),(0,cR.jsx)("span",{children:a.placeholder})]})}),c&&(0,cR.jsx)("button",{type:"button",className:j3("detachButton"),onClick:()=>{b(null)},disabled:f,children:(0,cR.jsx)(cO.XI,{size:16})})]}),(0,cR.jsx)(j0,{onClose:()=>o(!1),isOpen:n,children:(0,cR.jsxs)("form",{className:j4({isLoading:p,loaded:!p,hasData:w.length>0,filtersToggled:u}),onSubmit:a=>{a.preventDefault(),a.stopPropagation(),A(y,s)},children:[(0,cR.jsx)("div",{className:j4("masthead"),children:a.showSearch?(0,cR.jsxs)("div",{className:j4("searchForm"),children:[(0,cR.jsxs)("label",{className:j4("search"),children:[(0,cR.jsx)("span",{className:j4("searchIconText"),children:D}),(0,cR.jsx)("div",{className:j4("searchIcon"),children:(0,cR.jsx)(cO.BH,{size:"18"})}),(0,cR.jsx)("input",{className:j4("searchInput"),name:"q",type:"search",placeholder:a.placeholder,onChange:a=>{z(a.currentTarget.value)},autoComplete:"off",value:y})]}),(0,cR.jsxs)("div",{className:j4("searchActions"),children:[(0,cR.jsx)(jk,{type:"submit",loading:p,fullWidth:!0,children:D}),r&&(0,cR.jsx)("div",{className:j4("searchActionIcon"),children:(0,cR.jsx)(cO.eu,{type:"button",title:E,onClick:a=>{a.preventDefault(),a.stopPropagation(),v(!u)},children:(0,cR.jsx)(cO.KH,{size:20})})})]})]}):(0,cR.jsx)(j2,{rank:"2",size:"xs",children:a.placeholder||F})}),(0,cR.jsxs)("div",{className:j4("grid"),children:[r&&(0,cR.jsx)("div",{className:j4("filters"),children:r&&Object.keys(j).map(a=>{let b=j[a];return(0,cR.jsx)("div",{className:j4("field"),children:(0,cR.jsx)(jn,{label:b.label||a,children:(0,cR.jsx)(kl,{field:b,id:`external_field_${a}_filter`,value:s[a],onChange:b=>{t(c=>{let d=(0,cQ.s)((0,cQ.X)({},c),{[a]:b});return A(y,d),d})}})})},a)})}),(0,cR.jsxs)("div",{className:j4("tableWrapper"),children:[(0,cR.jsxs)("table",{className:j4("table"),children:[(0,cR.jsx)("thead",{className:j4("thead"),children:(0,cR.jsx)("tr",{className:j4("tr"),children:x.map(a=>(0,cR.jsx)("th",{className:j4("th"),style:{textAlign:"left"},children:a},a))})}),(0,cR.jsx)("tbody",{className:j4("tbody"),children:w.map((a,c)=>(0,cR.jsx)("tr",{style:{whiteSpace:"nowrap"},className:j4("tr"),onClick:()=>{b(h(l[c])),o(!1)},children:x.map(b=>(0,cR.jsx)("td",{className:j4("td"),children:a[b]},b))},c))})]}),(0,cR.jsx)("div",{className:j4("loadingBanner"),children:(0,cR.jsx)(cO.cD,{size:24})})]})]}),(0,cR.jsx)("div",{className:j4("footerContainer"),children:(0,cR.jsx)(B,{items:w})})]})})]})};(0,cQ.$)();var j8=(0,cz.f)("Input",jl);(0,cQ.$)();var j9=(0,cz.f)("Input",jl);(0,cQ.$)();var ka=(0,cz.f)("Input",jl);(0,cQ.$)(),(0,cQ.$)();var kb=(0,cu.memo)(a=>{var b;return(0,cR.jsx)(cw.x,(0,cQ.s)((0,cQ.X)({},a),{editor:null,menu:(0,cR.jsx)(cN.h,{field:a.field,editor:null,editorState:null,readOnly:null!=(b=a.readOnly)&&b}),children:(0,cR.jsx)("div",{className:"rich-text",dangerouslySetInnerHTML:{__html:a.content},contentEditable:!0})}))});kb.displayName="EditorFallback";var kc=(0,cu.lazy)(()=>a.A(72383).then(a=>({default:a.Editor})));(0,cQ.$)(),(0,cQ.$)();var kd=(0,cz.f)("ObjectField",{ObjectField:"_ObjectField_c5reb_1","ObjectField-fieldset":"_ObjectField-fieldset_c5reb_10"});(0,cQ.$)();var ke=()=>{if(void 0!==cu.default.useId)return cu.default.useId();let[a]=(0,cu.useState)((0,cP.$)());return a},kf=(0,cz.f)("Input",jl),kg=(0,cz.f)("InputWrapper",jl),kh={array:({field:a,onChange:b,id:c,name:d=c,label:e,labelIcon:f,readOnly:g,Label:h=a=>(0,cR.jsx)("div",(0,cQ.X)({},a))})=>{let i=(0,cO.mm)(a=>a.setUi),j=(0,cO.jG)(),k=js(),{localName:l=d}=jO(),m=()=>{var a;return null!=(a=jQ(k.getState(),d))?a:[]},n=(0,cu.useCallback)(()=>{var a;let{state:b}=j.getState(),d=b.ui.arrayState[c];return(null==(a=null==d?void 0:d.items)?void 0:a.length)?d:{items:Array.from(m()||[]).map((a,b)=>({_originalIndex:b,_currentIndex:b,_arrayId:`${c}-${b}`})),openId:""}},[j,c,m,d]),o=jt(()=>m().length),p=(0,cu.useMemo)(n,[n]),q=(0,cO.mm)(a=>{let b=a.state.ui.arrayState[c];return null!=b?b:p}),r=(0,cO.jG)(),s=(0,cu.useCallback)(a=>{let b=r.getState().state;return{arrayState:(0,cQ.s)((0,cQ.X)({},b.ui.arrayState),{[c]:(0,cQ.X)((0,cQ.X)({},n()),a)})}},[r]),t=(0,cu.useCallback)(()=>n().items.reduce((a,b)=>b._originalIndex>a?b._originalIndex:a,-1),[]),u=(0,cu.useCallback)(a=>{let b=t(),d=n(),e=Array.from(a||[]).map((a,e)=>{var f,g,h;let i=d.items[e],j={_originalIndex:null!=(f=null==i?void 0:i._originalIndex)?f:b+1,_currentIndex:null!=(g=null==i?void 0:i._currentIndex)?g:e,_arrayId:(null==(h=d.items[e])?void 0:h._arrayId)||`${c}-${b+1}`};return j._originalIndex>b&&(b=j._originalIndex),j});return(0,cQ.s)((0,cQ.X)({},d),{items:e})},[]),[v,w]=(0,cu.useState)(""),x=!!v,y=(0,cu.useRef)([]);(0,cu.useEffect)(()=>{y.current=m()},[]);let z=(0,cu.useCallback)(b=>{if("array"!==a.type||!a.arrayFields)return;let c=r.getState().config;return(0,cA.h)({value:b,fields:a.arrayFields,mappers:{slot:({value:a})=>a.map(a=>(0,cP.l)(a,c,!0))},config:c})},[r,a]),A=(0,cu.useCallback)(()=>{let a=n(),b=a.items.map((a,b)=>(0,cQ.s)((0,cQ.X)({},a),{_currentIndex:b})),d=r.getState().state;i({arrayState:(0,cQ.s)((0,cQ.X)({},d.ui.arrayState),{[c]:(0,cQ.s)((0,cQ.X)({},a),{items:b})})},!1)},[]),B=(0,cu.useCallback)(a=>{i(s(u(a)),!1),b(a)},[u,i,s,b]);(0,cu.useEffect)(()=>{i(s(u(m())),!1)},[o]);let C=(0,cO.mP)("field-arrayitem-duplicate"),D=(0,cO.mP)("field-arrayitem-delete");if("array"!==a.type||!a.arrayFields)return null;let E=void 0!==a.max&&(null==q?void 0:q.items.length)>=a.max||g;return(0,cR.jsx)(h,{label:e||d,icon:f||(0,cR.jsx)(cO.IQ,{size:16}),el:"div",readOnly:g,children:(0,cR.jsx)(jL,{onDragStart:a=>{y.current=m(),w(a),A()},onDragEnd:()=>{w(""),b(y.current);let a=k.getState();k.setState(jh(a,d,y.current)),A()},onMove:a=>{let b=n();if(b.items[a.source]._arrayId!==v)return;let d=(0,cO.wL)(y.current,a.source,a.target),e=(0,cO.wL)(b.items,a.source,a.target),f=r.getState().state;i({arrayState:(0,cQ.s)((0,cQ.X)({},f.ui.arrayState),{[c]:(0,cQ.s)((0,cQ.X)({},b),{items:e})})},!1),y.current=d},children:(0,cR.jsxs)("div",{className:jS({hasItems:o>0,addDisabled:E}),children:[q.items.length>0&&(0,cR.jsx)("div",{className:jS("inner"),"data-dnd-container":!0,children:q.items.map((e,f)=>{let{_arrayId:h=`${c}-${f}`,_originalIndex:j=f,_currentIndex:k=f}=e;return(0,cR.jsx)(jV,{index:k,dragIndex:f,originalIndex:j,arrayId:c,id:h,readOnly:g,field:a,name:d,localName:l,onChange:(a,c,d)=>{let e=m(),g=Array.from(e||[])[f]||{};b((0,cO.H)(e,f,(0,cQ.s)((0,cQ.X)({},g),{[d]:a})),c)},onToggleExpand:(a,b)=>{b?i(s({openId:""})):i(s({openId:a}))},actions:(0,cR.jsxs)(cR.Fragment,{children:[(0,cR.jsx)("div",{className:jT("action"),children:(0,cR.jsx)(cO.eu,{type:"button",disabled:!!E,onClick:a=>{a.stopPropagation();let b=[...m()||[]],c=z(b[f]);b.splice(f,0,c),B(b)},title:C,children:(0,cR.jsx)(cO._0,{size:16})})}),(0,cR.jsx)("div",{className:jT("action"),children:(0,cR.jsx)(cO.eu,{type:"button",disabled:void 0!==a.min&&a.min>=q.items.length,onClick:a=>{a.stopPropagation();let b=[...m()||[]];b.splice(f,1),B(b)},title:D,children:(0,cR.jsx)(cO.Me,{size:16})})})]})},h)})}),!E&&(0,cR.jsx)("button",{type:"button",className:jS("addButton"),onClick:()=>{var b;if(x)return;let c=m()||[],d="function"==typeof a.defaultItemProps?a.defaultItemProps(c.length):null!=(b=a.defaultItemProps)?b:{};B([...c,(0,cA.g)(z(d),a.arrayFields)])},children:(0,cR.jsx)(cO.r3,{size:21})})]})})})},external:({field:a,onChange:b,id:c,name:d=c,label:e,labelIcon:f,Label:g,readOnly:h})=>{var i,j,k;let l=jW(d),m=(0,cO.mP)("field-external-selectdata");return((0,cu.useEffect)(()=>{a.adaptor&&console.error("Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release.")},[]),"external"!==a.type)?null:(0,cR.jsx)(g,{label:e||d,icon:f||(0,cR.jsx)(cO.at,{size:16}),el:"div",children:(0,cR.jsx)(j7,{name:d,field:(0,cQ.s)((0,cQ.X)({},a),{placeholder:(null==(i=a.adaptor)?void 0:i.name)?`Select from ${a.adaptor.name}`:a.placeholder||m,mapProp:(null==(j=a.adaptor)?void 0:j.mapProp)||a.mapProp,mapRow:a.mapRow,fetchList:(null==(k=a.adaptor)?void 0:k.fetchList)?()=>(0,cQ._)(null,null,function*(){return yield a.adaptor.fetchList(a.adaptorParams)}):a.fetchList}),onChange:b,value:l,id:c,readOnly:h})})},object:({field:a,onChange:b,id:c,name:d=c,label:e,labelIcon:f,Label:g,readOnly:h})=>{let{localName:i=d}=jO(),j=js(),k=(0,cO.mm)(a=>a.permissions.getPermissions({item:a.selectedItem}).edit);return"object"===a.type&&a.objectFields?(0,cR.jsx)(g,{label:e||d,icon:f||(0,cR.jsx)(cO.WP,{size:16}),el:"div",readOnly:h,children:(0,cR.jsx)("div",{className:kd(),children:(0,cR.jsx)("fieldset",{className:kd("fieldset"),children:Object.keys(a.objectFields).map(e=>{let f=a.objectFields[e],g=`${i}.${e}`;return(0,cR.jsx)(jR,{id:`${c}_${e}`,name:d,subName:e,localName:i,field:f,forceReadOnly:!k,onChange:(a,c,e)=>{var f;let g=null!=(f=jQ(j.getState(),d))?f:{};g[e]!==a&&b((0,cQ.s)((0,cQ.X)({},g),{[e]:a}),c)}},g)})})})}):null},select:({field:a,onChange:b,label:c,labelIcon:d,Label:e,id:f,name:g=f,readOnly:h})=>{let i=jW(g);return"select"===a.type&&a.options?(0,cR.jsx)(e,{label:c||g,icon:d||(0,cR.jsx)(cO.N8,{size:16}),readOnly:h,children:(0,cR.jsxs)("div",{className:j9("select"),children:[(0,cR.jsx)("select",{id:f,title:c||g,className:j9("input"),disabled:h,onChange:a=>{b(JSON.parse(a.target.value).value)},value:JSON.stringify({value:i}),children:a.options.map(a=>(0,cR.jsx)("option",{label:a.label,value:JSON.stringify({value:a.value})},a.label+JSON.stringify(a.value)))}),(0,cR.jsx)(cO.N8,{size:18,className:j9("selectIcon")})]})}):null},textarea:({field:a,onChange:b,readOnly:c,id:d,name:e=d,label:f,labelIcon:g,Label:h})=>{let[i,j]=jX(e,b,{fallback:""});return(0,cR.jsx)(h,{label:f||e,icon:g||(0,cR.jsx)(cO.sn,{size:16}),readOnly:c,children:(0,cR.jsx)("textarea",{id:d,className:ka("input"),autoComplete:"off",name:e,value:i,onChange:a=>j(a.currentTarget.value),readOnly:c,tabIndex:c?-1:void 0,rows:5,placeholder:"textarea"===a.type?a.placeholder:void 0})})},radio:({field:a,onChange:b,readOnly:c,id:d,name:e=d,label:f,labelIcon:g,Label:h})=>{let i=jW(e);return"radio"===a.type&&a.options?(0,cR.jsx)(h,{icon:g||(0,cR.jsx)(cO.i2,{size:16}),label:f||e,readOnly:c,el:"div",children:(0,cR.jsx)("div",{className:j8("radioGroupItems"),id:d,children:a.options.map(a=>{var d;return(0,cR.jsxs)("label",{className:j8("radio"),children:[(0,cR.jsx)("input",{type:"radio",className:j8("radioInput"),value:JSON.stringify({value:a.value}),name:e,onChange:a=>{b(JSON.parse(a.target.value).value)},disabled:c,checked:i===a.value}),(0,cR.jsx)("div",{className:j8("radioInner"),children:a.label||(null==(d=a.value)?void 0:d.toString())})]},a.label+a.value)})})}):null},text:jZ,number:jZ,richtext:({onChange:a,readOnly:b=!1,id:c,name:d=c,label:e,labelIcon:f,Label:g,field:h})=>{let i={onChange:a,content:jW(d),readOnly:b,field:h,id:c,name:d};return(0,cR.jsx)(cR.Fragment,{children:(0,cR.jsx)(g,{label:e||d,icon:f||(0,cR.jsx)(cO.sn,{size:16}),readOnly:b,el:"div",children:(0,cR.jsx)(cu.Suspense,{fallback:(0,cR.jsx)(kb,(0,cQ.X)({},i)),children:(0,cR.jsx)(kc,(0,cQ.X)({},i))})})})}};function ki(a){var b,c,d;let e=(0,cO.mm)(a=>a.dispatch),f=(0,cO.mm)(a=>a.overrides),g=(0,cO.mm)(cT(a=>{var b;return null==(b=a.selectedItem)?void 0:b.readOnly})),h=(0,cu.useContext)(jN),{id:i,Label:j=jo}=a,k=a.field,l=k.label,m=k.labelIcon,n=ke(),o=i||n,p=(0,cu.useMemo)(()=>{var a,b,c,d,e,g,h,i,j,k;return(0,cQ.s)((0,cQ.X)({},f.fieldTypes),{custom:null==(a=f.fieldTypes)?void 0:a.custom,array:(null==(b=f.fieldTypes)?void 0:b.array)||kh.array,external:(null==(c=f.fieldTypes)?void 0:c.external)||kh.external,object:(null==(d=f.fieldTypes)?void 0:d.object)||kh.object,select:(null==(e=f.fieldTypes)?void 0:e.select)||kh.select,textarea:(null==(g=f.fieldTypes)?void 0:g.textarea)||kh.textarea,radio:(null==(h=f.fieldTypes)?void 0:h.radio)||kh.radio,text:(null==(i=f.fieldTypes)?void 0:i.text)||kh.text,number:(null==(j=f.fieldTypes)?void 0:j.number)||kh.number,richtext:(null==(k=f.fieldTypes)?void 0:k.richtext)||kh.richtext})},[f]),q="custom"===k.type||!!(null==(b=f.fieldTypes)?void 0:b[k.type]),r=null!=(c=a.name)?c:o,s=js(),t=(0,cu.useMemo)(()=>q?(b,c)=>{var d;null==(d=a.onChange)||d.call(a,b,c),s.setState(jh(s.getState(),r,b))}:a.onChange,[q,a.onChange,r,s]),[u,v]=jX(r,t,{tracked:q}),w=(0,cu.useMemo)(()=>(0,cQ.s)((0,cQ.X)({},a),{field:k,label:l,labelIcon:m,Label:j,id:o,value:u,onChange:v}),[a,k,l,m,j,o,u,v]),x=(0,cu.useCallback)(a=>{w.name&&("INPUT"===a.target.nodeName||"TEXTAREA"===a.target.nodeName)&&(a.stopPropagation(),e({type:"setUi",ui:{field:{focus:w.name}}}))},[w.name]),y=(0,cu.useCallback)(a=>{"name"in a.target&&e({type:"setUi",ui:{field:{focus:null}}})},[]),z=(0,cu.useMemo)(()=>"custom"!==k.type&&"slot"!==k.type?kh[k.type]:a=>null,[k.type]),A="custom"===k.type?k.key:void 0,B=(0,cu.useMemo)(()=>"custom"!==k.type||p[k.type]?"slot"!==k.type?p[k.type]:void 0:k.render?k.render:null,[k.type,A,p]),{visible:C=!0}=a.field;if(!C||"slot"===k.type)return null;if(!B)throw Error(`Field type for ${k.type} did not exist.`);return(0,cR.jsx)(jN.Provider,{value:{readOnlyFields:h.readOnlyFields||g||{},localName:null!=(d=h.localName)?d:w.name},children:(0,cR.jsx)("div",{className:kg(),onFocus:x,onBlur:y,onClick:a=>{a.stopPropagation()},children:(0,cR.jsx)(B,(0,cQ.s)((0,cQ.X)({},w),{children:(0,cR.jsx)(z,(0,cQ.X)({},w))}))})})}function kj(a){return(0,cR.jsx)(ki,(0,cQ.X)({},a))}function kk(a){var{value:b}=a,c=(0,cQ.H)(a,["value"]);let d=(0,cu.useMemo)(()=>a=>(0,cR.jsx)("div",(0,cQ.s)((0,cQ.X)({},a),{className:kf({readOnly:c.readOnly})})),[c.readOnly]),e=js(),f=(0,cu.useCallback)(a=>{c.id&&(e.setState({[c.id]:a}),c.onChange(a))},[e,c.onChange,c.id]);return(0,cu.useEffect)(()=>{c.id&&e.setState({[c.id]:b})},[c.id,b,e]),(0,cR.jsx)(ki,(0,cQ.s)((0,cQ.X)({},c),{onChange:f,Label:d}))}function kl(a){let b=ke();return"slot"===a.field.type?null:(0,cR.jsx)(jr.Provider,{value:{[b]:a.value},children:(0,cR.jsx)(kk,(0,cQ.s)((0,cQ.X)({},a),{id:b}))})}function km(a){let b={x:0,y:0},c=a;for(;c&&c!==document.documentElement;){let a=c.parentElement;a&&(b.x+=a.scrollLeft,b.y+=a.scrollTop),c=a}return b}(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var kn=(0,cu.createContext)(null),ko=(0,cu.createContext)((0,cU.f)(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:()=>{},unregisterRootVirtualizer:()=>{},scrollToComponent:()=>!1}))),kp=({children:a,store:b})=>(0,cR.jsx)(ko.Provider,{value:b,children:a}),kq=({children:a,value:b})=>{let c=(0,cO.mm)(a=>a.dispatch),d=(0,cu.useCallback)(a=>{c({type:"registerZone",zone:a})},[c]),e=(0,cu.useMemo)(()=>(0,cQ.X)({registerZone:d},b),[b]);return(0,cR.jsx)(cR.Fragment,{children:e&&(0,cR.jsx)(kn.Provider,{value:e,children:a})})};(0,cQ.$)();var kr=(a,b=[])=>{let c=(0,cO.jG)();return(0,cu.useCallback)(()=>{let b=()=>{},d=c=>{c?a(!1):(setTimeout(()=>{a(!0)},0),b&&b())},e=c.getState().state.ui.isDragging;return d(e),e&&(b=c.subscribe(a=>a.state.ui.isDragging,a=>{d(a)})),b},[c,...b])};(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var ks=()=>{};(0,cQ.$)(),(0,cQ.$)();var kt=a=>"u">typeof CSS&&"function"==typeof CSS.escape?CSS.escape(a):a,ku=a=>`[data-puck-component="${kt(a)}"]`,kv=a=>`[data-puck-dropzone="${kt(a)}"]`,kw={duration:250,easing:"ease"},kx=a=>{var b,c;return null!=(c=null==(b=a.defaultView)?void 0:b.matchMedia("(prefers-reduced-motion: reduce)").matches)&&c},ky=(a,{zones:b,itemId:c,targetZone:d,getExpectedOrder:e,initialExpectedOrder:f=[]},g)=>{let h=new Set(f),i=0,j=()=>{var f;let k=a.querySelector(kv(d)),l=e(),m=null!=c?c:l.find(a=>!h.has(a)),n=m&&null!=(f=null==k?void 0:k.querySelector(`:scope > ${ku(m)}:not([data-dnd-dragging]):not([data-dnd-placeholder])`))?f:null,o=k?Array.from(k.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(a=>a.getAttribute("data-puck-component")):[],p=new Set(o),q=l.filter(a=>p.has(a)),r=o.length===q.length&&o.every((a,b)=>a===q[b]),s=b.every(b=>b===d||!m||!a.querySelector(`${kv(b)} > ${ku(m)}`));if((!n||!r||!s)&&i<10){i++,requestAnimationFrame(j);return}g(n)};requestAnimationFrame(j)};(0,cQ.$)();var kz=(a,b)=>{var c,d;return null!=(d=null==(c=a.indexes.zones[b])?void 0:c.contentIds)?d:[]},kA=(a,b)=>{let c=(0,cO.jG)();return(0,cu.useCallback)(d=>{var e,f,g,h,i;let j,k=Object.values(null!=(e=a.getState().previewIndex)?e:{}),l=b?k.find(a=>(null==a?void 0:a.props.id)===b&&!a.ghost):k.find(a=>(null==a?void 0:a.type)==="insert"),m=b?(null==l?void 0:l.linePlaceholder)||(null==l?void 0:l.type)==="insert":!!l;return f=l&&m?{itemId:"move"===l.type?b:void 0,targetZone:l.zone,getExpectedOrder:()=>kz(c.getState().state,l.zone)}:void 0,!(null!=(h=null==(j=null==(g=d.source.manager)?void 0:g.dragOperation)?void 0:j.canceled)&&h||(null==(i=null==j?void 0:j.target)?void 0:i.type)==="void")&&f?void(({feedbackElement:a,itemId:b,targetZone:c,getExpectedOrder:d})=>{var e;let f=a.ownerDocument,g=null!=(e=ks())?e:f;if(kx(f))return;let h=a.getBoundingClientRect(),i=d(),j=a.cloneNode(!0);j.removeAttribute("id"),j.removeAttribute("popover"),j.removeAttribute("data-puck-component"),j.removeAttribute("data-puck-dnd"),j.removeAttribute("data-dnd-dragging"),j.setAttribute("inert","true"),Object.assign(j.style,{position:"fixed",left:`${h.left}px`,top:`${h.top}px`,width:`${h.width}px`,height:`${h.height}px`,margin:"0",overflow:"hidden",pointerEvents:"none",transform:"none",transition:"none",translate:"none",zIndex:"2147483647"});let k=g.createElement("style");k.textContent=`
    ${b?`${ku(b)} { visibility: hidden !important; }`:""}
    [data-puck-overlay] { opacity: 0 !important; }
  `,g.head.appendChild(k),f.body.appendChild(j);let l=()=>{j.remove(),k.remove()};ky(g,{zones:[c],itemId:b,targetZone:c,getExpectedOrder:d,initialExpectedOrder:i},a=>{if(!a)return void l();let c=a.getAttribute("data-puck-component");!b&&c&&(k.textContent+=`
          ${ku(c)} { visibility: hidden !important; }
        `);let d=((a,b)=>{var c,d;let e=a.getBoundingClientRect();if(a.ownerDocument===b)return e;let f=((a,b)=>{var c,d;let e={x:0,y:0,scaleX:1,scaleY:1},f=null==(c=a.ownerDocument.defaultView)?void 0:c.frameElement;for(;f&&f!==b;){let a=f.getBoundingClientRect(),b=f.offsetWidth?a.width/f.offsetWidth:1,c=f.offsetHeight?a.height/f.offsetHeight:1;e.x+=a.left,e.y+=a.top,e.scaleX*=b,e.scaleY*=c,f=null==(d=f.ownerDocument.defaultView)?void 0:d.frameElement}return e})(a,null!=(d=null==(c=b.defaultView)?void 0:c.frameElement)?d:null);return{left:e.left*f.scaleX+f.x,top:e.top*f.scaleY+f.y,width:e.width*f.scaleX,height:e.height*f.scaleY}})(a,f);j.animate({left:[`${h.left}px`,`${d.left}px`],top:[`${h.top}px`,`${d.top}px`],width:[`${h.width}px`,`${d.width}px`],height:[`${h.height}px`,`${d.height}px`]},(0,cQ.s)((0,cQ.X)({},kw),{fill:"forwards"})).finished.catch(()=>void 0).then(l)})})((0,cQ.s)((0,cQ.X)({},f),{feedbackElement:d.feedbackElement})):(({element:a,feedbackElement:b,placeholder:c,translate:d})=>{var e;if(kx(b.ownerDocument))return;let f=null!=c?c:a,g={frameTransform:b.ownerDocument===f.ownerDocument?null:void 0},h=new f5(b,g),i=new f5(f,g),j=null!=(e=fV(fQ(b).translate))?e:d,k={x:j.x-(h.center.x-i.center.x),y:j.y-(h.center.y-i.center.y)};return b.setAttribute("data-dnd-dropping",""),b.animate({translate:[`${j.x}px ${j.y}px 0`,`${k.x}px ${k.y}px 0`]},kw).finished.catch(()=>void 0).then(()=>{b.removeAttribute("data-dnd-dropping")})})(d)},[c,a,b])};function kB(a,b){a.forEach(a=>{"function"==typeof a?a(b):a&&"object"==typeof a&&"current"in a&&(a.current=b)})}(0,cQ.$)();var kC=(0,cz.f)("DraggableComponent",{DraggableComponent:"_DraggableComponent_1627v_1","DraggableComponent-overlayWrapper":"_DraggableComponent-overlayWrapper_1627v_6","DraggableComponent-overlay":"_DraggableComponent-overlay_1627v_6","DraggableComponent-loadingOverlay":"_DraggableComponent-loadingOverlay_1627v_38","DraggableComponent--hover":"_DraggableComponent--hover_1627v_54","DraggableComponent--isSelected":"_DraggableComponent--isSelected_1627v_72","DraggableComponent-actionsOverlay":"_DraggableComponent-actionsOverlay_1627v_89","DraggableComponent-actions":"_DraggableComponent-actions_1627v_89","DraggableComponent-actionsAction":"_DraggableComponent-actionsAction_1627v_111"}),kD=({label:a,children:b,parentAction:c})=>(0,cR.jsxs)(cO.iu,{children:[(0,cR.jsxs)(cO.iu.Group,{children:[c,a&&(0,cR.jsx)(cO.iu.Label,{label:a})]}),(0,cR.jsx)(cO.iu.Group,{children:b})]}),kE=({children:a})=>(0,cR.jsx)(cR.Fragment,{children:a}),kF=({children:a,depth:b,componentType:c,id:d,index:e,zoneCompound:f,isLoading:g=!1,isSelected:h=!1,debug:i,label:j,autoDragAxis:k,userDragAxis:l,inDroppableZone:m=!0,itemRef:n})=>{let o=(0,cO.mm)(a=>{var b;return(null==(b=a.selectedItem)?void 0:b.props.id)===d?a.zoomConfig.zoom:1}),p=(0,cO.mm)(a=>a._experimentalFullScreenCanvas),q=(0,cO.mm)(a=>a.overrides),r=(0,cO.mm)(a=>a.dispatch),s=(0,cO.mm)(a=>a.iframe),t=(0,cu.useRef)(0),u=(0,cu.useContext)(kn),[v,w]=(0,cu.useState)({}),x=(0,cu.useCallback)((a,b)=>{var c;null==(c=null==u?void 0:u.registerLocalZone)||c.call(u,a,b),w(c=>(0,cQ.s)((0,cQ.X)({},c),{[a]:b}))},[w]),y=(0,cu.useCallback)(a=>{var b;null==(b=null==u?void 0:u.unregisterLocalZone)||b.call(u,a),w(b=>{let c=(0,cQ.X)({},b);return delete c[a],c})},[w]),z=Object.values(v).filter(Boolean).length>0,A=(0,cO.mm)(cT(a=>{var b;return null==(b=a.state.indexes.nodes[d])?void 0:b.path})),B=(0,cO.mm)(cT(a=>{let b=(0,cP.n)({index:e,zone:f},a.state);return a.permissions.getPermissions({item:b})})),C=(0,cu.useContext)(ko),D=(0,cO.jG)(),[E,F]=(0,cu.useState)(l||k),G=(0,cu.useMemo)(()=>jI(E),[E]),H=kA(C,d),{ref:I,isDragging:J,sortable:K}=iR({id:d,index:e,group:f,type:"component",data:{areaId:null==u?void 0:u.areaId,zone:f,index:e,componentType:c,containsActiveZone:z,depth:b,path:A||[],inDroppableZone:m},collisionPriority:b,collisionDetector:G,transition:{duration:200,easing:"cubic-bezier(0.2, 0, 0, 1)"},plugins:a=>[...a,gX.configure({feedback:"clone",dropAnimation:H})]});(0,cu.useEffect)(()=>{let a=C.getState().enabledIndex[f];K.droppable.disabled=!a,K.draggable.disabled=!B.drag;let b=C.subscribe(a=>{K.droppable.disabled=!a.enabledIndex[f]});return M.current&&!B.drag?(M.current.setAttribute("data-puck-disabled",""),()=>{var a;null==(a=M.current)||a.removeAttribute("data-puck-disabled"),b()}):b},[B.drag,f]);let[,L]=(0,cu.useState)(0),M=(0,cu.useRef)(null),N=(0,cu.useCallback)(a=>{I(a),M.current!==a&&(M.current=a,L(a=>a+1),n&&kB([n],a))},[n,I]),[O,P]=(0,cu.useState)();(0,cu.useEffect)(()=>{var a,b,c;P(s.enabled?null==(a=M.current)?void 0:a.ownerDocument.body:null!=(c=null==(b=M.current)?void 0:b.closest("[data-puck-preview]"))?c:document.body)},[s.enabled]);let Q=(0,cu.useCallback)(()=>{var a,b;if(!M.current)return;let c=M.current,d=c.getBoundingClientRect(),e=s.enabled?null:c.closest("[data-puck-preview]"),f=(()=>{let a=c;for(;a&&a!==document.documentElement;){if("fixed"===getComputedStyle(a).position)return!0;a=a.parentElement}return!1})(),g=null==e?void 0:e.getBoundingClientRect(),h=e?km(e):{x:0,y:0},i=f?{x:0,y:0}:km(c),j=f?{x:0,y:0}:{x:i.x-h.x-(null!=(a=null==g?void 0:g.left)?a:0),y:i.y-h.y-(null!=(b=null==g?void 0:g.top)?b:0)};return{left:`${d.left+j.x}px`,top:`${d.top+j.y}px`,height:`${d.height}px`,width:`${d.width}px`,position:f?"fixed":void 0}},[s.enabled]),[R,S]=(0,cu.useState)(),T=(0,cu.useRef)(null),U=(0,cu.useRef)(null),V=(0,cu.useCallback)(()=>{S(Q()),n&&kB([n],M.current)},[Q,n]),W=(0,cu.useCallback)(()=>{null==U.current&&(U.current=requestAnimationFrame(()=>{U.current=null,V()}))},[V]);(0,cu.useEffect)(()=>()=>{null!=U.current&&(cancelAnimationFrame(U.current),U.current=null)},[]),(0,cu.useEffect)(()=>{if(M.current){let a=new ResizeObserver(()=>{W()});return a.observe(M.current),()=>{a.disconnect()}}},[W,n]);let X=(0,cO.mm)(a=>a.nodes.registerNode),Y=(0,cO.mm)(a=>a.nodes.unregisterNode),Z=(0,cu.useCallback)(()=>{ak(!1)},[]),$=(0,cu.useCallback)(()=>{ak(!0)},[]),_=(0,cu.useRef)({sync:()=>null,hideOverlay:()=>null,showOverlay:()=>null});(0,cu.useLayoutEffect)(()=>{_.current.sync=V,_.current.hideOverlay=Z,_.current.showOverlay=$},[Z,$,V]),(0,cu.useEffect)(()=>(X(d,_.current),()=>{Y(d)}),[d,X,Y]);let aa=(0,cu.useMemo)(()=>q.actionBar||kD,[q.actionBar]),ab=(0,cu.useMemo)(()=>q.componentOverlay||kE,[q.componentOverlay]),ac=(0,cu.useCallback)(a=>{C.getState().draggedItem||(a.target.closest("[data-puck-overlay-portal]")||a.stopPropagation(),p?r({type:"setUi",ui:{itemSelector:h?null:{index:e,zone:f}}}):r({type:"setUi",ui:{itemSelector:{index:e,zone:f}}}))},[e,f,d,h,p]),ad=(0,cu.useCallback)(()=>{let{nodes:a,zones:b}=D.getState().state.indexes,c=a[d],e=(null==c?void 0:c.parentId)?a[null==c?void 0:c.parentId]:null;if(!e||!c.parentId)return;let f=`${e.parentId}:${e.zone}`,g=b[f].contentIds.indexOf(c.parentId);r({type:"setUi",ui:{itemSelector:{zone:f,index:g}}})},[u,A]),ae=(0,cu.useCallback)(()=>{r({type:"duplicate",sourceIndex:e,sourceZone:f})},[e,f]),af=(0,cu.useCallback)(()=>{r({type:"remove",index:e,zone:f})},[e,f]),[ag,ah]=(0,cu.useState)(!1),ai=jq(ko,a=>a.hoveringComponent===d);(0,cu.useEffect)(()=>{if(!M.current)return;let a=M.current,b=a=>{C.getState().draggedItem?J?ah(!0):ah(!1):ah(!0),a.stopPropagation()},c=a=>{a.stopPropagation(),ah(!1)};return a.setAttribute("data-puck-component",d),a.setAttribute("data-puck-dnd",d),a.style.position="relative",a.addEventListener("click",ac),a.addEventListener("mouseover",b),a.addEventListener("mouseout",c),()=>{a.removeAttribute("data-puck-component"),a.removeAttribute("data-puck-dnd"),a.removeEventListener("click",ac),a.removeEventListener("mouseover",b),a.removeEventListener("mouseout",c)}},[M.current,ac,z,f,d,J,m]);let[aj,ak]=(0,cu.useState)(!1),[al,am]=(0,cu.useState)(!0),[an,ao]=(0,cu.useTransition)();(0,cu.useEffect)(()=>{ao(()=>{ag||ai||h?(W(),ak(!0),aq(!1)):ak(!1)})},[ag,ai,h,s]);let[ap,aq]=(0,cu.useState)(!1),ar=kr(a=>{a?ao(()=>{V(),am(!0)}):am(!1)});(0,cu.useEffect)(()=>{J&&aq(!0)},[J]),(0,cu.useEffect)(()=>{if(ap)return ar()},[ap,ar]),(0,cu.useEffect)(()=>{if(!al||!(h||J))return;let a=M.current;if(!a)return;let b=a.ownerDocument,c=b.defaultView;if(!c)return;t.current=0,W();let d=()=>W(),e=()=>W();b.addEventListener("scroll",d,!0),c.addEventListener("resize",e);let f=0,g=a=>{if(a-t.current>=100){t.current=a;let b=M.current;if(b){let a=b.getBoundingClientRect(),c=T.current;(!c||Math.abs(a.x-c.x)>.5||Math.abs(a.y-c.y)>.5||Math.abs(a.width-c.width)>.5||Math.abs(a.height-c.height)>.5)&&(T.current=a,W())}}f=requestAnimationFrame(g)};return f=requestAnimationFrame(g),()=>{b.removeEventListener("scroll",d,!0),c.removeEventListener("resize",e),cancelAnimationFrame(f)}},[al,h,J,W]);let as=(0,cu.useCallback)(a=>{if(a&&a.ownerDocument.defaultView){let b=a.getBoundingClientRect(),c=b.x<0,d=b.y;c&&(a.style.transformOrigin="left top",a.style.left="0px"),d<0&&(a.style.top="12px",c||(a.style.transformOrigin="right top"))}},[o]),at=(0,cu.useRef)(null);(0,cu.useEffect)(()=>{as(at.current)},[at.current,as]),(0,cu.useEffect)(()=>{if(l)return void F(l);if(M.current){let a=window.getComputedStyle(M.current);if("inline"===a.display||"inline-block"===a.display)return void F("x")}F(k)},[M,l,k]);let au=(0,cO.mP)("action-selectparent"),av=(0,cO.mP)("action-duplicate"),aw=(0,cO.mP)("action-delete"),ax=(0,cu.useMemo)(()=>(null==u?void 0:u.areaId)&&(null==u?void 0:u.areaId)!=="root"&&(0,cR.jsx)(cO.iu.Action,{onClick:ad,label:au,children:(0,cR.jsx)(cO.X0,{size:16})}),[null==u?void 0:u.areaId,au]),ay=(0,cu.useMemo)(()=>(0,cQ.s)((0,cQ.X)({},u),{areaId:d,zoneCompound:f,index:e,depth:b+1,registerLocalZone:x,unregisterLocalZone:y}),[u,d,f,e,b,x,y]),az=(0,cO.mm)(a=>{var b;return(null==(b=a.currentRichText)?void 0:b.inlineComponentId)===d?a.currentRichText:null}),aA=B.duplicate||B.delete;return(0,cR.jsxs)(kq,{value:ay,children:[al&&aj&&(0,hq.createPortal)((0,cR.jsxs)("div",{className:kC({isSelected:h,isDragging:J,hover:ag||ai}),style:(0,cQ.X)({},R),"data-puck-overlay":!0,children:[i,g&&(0,cR.jsx)("div",{className:kC("loadingOverlay"),children:(0,cR.jsx)(cO.cD,{})}),(0,cR.jsx)("div",{className:kC("actionsOverlay"),style:{top:52/o},children:(0,cR.jsx)("div",{className:kC("actions"),style:{transform:`scale(${1/o}`,top:-44/o,right:0,paddingLeft:8,paddingRight:8},ref:at,children:(0,cR.jsxs)(aa,{parentAction:ax,label:j,children:[az&&(0,cR.jsxs)(cR.Fragment,{children:[(0,cR.jsx)(cw.S,{editor:az.editor,field:az.field,inline:!0,readOnly:!1}),aA&&(0,cR.jsx)(cO.iu.Separator,{})]}),B.duplicate&&(0,cR.jsx)(cO.iu.Action,{onClick:ae,label:av,children:(0,cR.jsx)(cO._0,{className:kC("actionsAction")})}),B.delete&&(0,cR.jsx)(cO.iu.Action,{onClick:af,label:aw,children:(0,cR.jsx)(cO.Me,{className:kC("actionsAction")})})]})})}),(0,cR.jsx)("div",{className:kC("overlayWrapper"),children:(0,cR.jsx)(ab,{componentId:d,componentType:c,hover:ag,isSelected:h,children:(0,cR.jsx)("div",{className:kC("overlay")})})})]}),O||document.body),a(N)]})};(0,cQ.$)();var kG={DropZone:"_DropZone_wc2ks_1","DropZone--hasChildren":"_DropZone--hasChildren_wc2ks_11","DropZone--isAreaSelected":"_DropZone--isAreaSelected_wc2ks_24","DropZone--hoveringOverArea":"_DropZone--hoveringOverArea_wc2ks_25","DropZone--isRootZone":"_DropZone--isRootZone_wc2ks_25","DropZone-item":"_DropZone-item_wc2ks_39","DropZone-linePlaceholder":"_DropZone-linePlaceholder_wc2ks_43","DropZone-hitbox":"_DropZone-hitbox_wc2ks_55","DropZone--isEnabled":"_DropZone--isEnabled_wc2ks_63","DropZone--isAnimating":"_DropZone--isAnimating_wc2ks_74"};(0,cQ.$)();var kH=(a,{allow:b,disallow:c})=>{if(!a)return!0;let d=new Set(b),e=new Set(c);return c?(e.has(a)&&d.has(a)&&e.delete(a),!e.has(a)):!b||d.has(a)};(0,cQ.$)(),(0,cQ.$)();var kI={Drawer:"_Drawer_1n90m_1","Drawer-draggable":"_Drawer-draggable_1n90m_8","Drawer-draggableBg":"_Drawer-draggableBg_1n90m_12","DrawerItem-draggable":"_DrawerItem-draggable_1n90m_22","DrawerItem--disabled":"_DrawerItem--disabled_1n90m_38",DrawerItem:"_DrawerItem_1n90m_22","Drawer--isDraggingFrom":"_Drawer--isDraggingFrom_1n90m_48","DrawerItem-name":"_DrawerItem-name_1n90m_72"};(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var kJ="u">typeof PointerEvent?PointerEvent:Event,kK=class extends kJ{constructor(a,b){super(a,b),this._originalTarget=null,this.originalTarget=b.originalTarget}set originalTarget(a){this._originalTarget=a}get originalTarget(){return this._originalTarget}};(0,cQ.$)(),(0,cQ.$)();var kL=(a,{isDraggingBetweenSlots:b=!1,isNewComponent:c=!1}={})=>"auto"===a?b||c?"static":"fluid":a;(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var kM=(a,b)=>{let c=a.indexes.nodes[b];if(!c)return;let d=`${c.parentId}:${c.zone}`,e=a.indexes.zones[d].contentIds.indexOf(b);return{zone:d,index:e}};function kN(a,b,c="force",d=!1,e){return(0,cQ._)(this,null,function*(){let f=yield b().resolveComponentData(a,c);if(!f.didChange&&!d)return;let g=kM(b().state,f.node.props.id);g?b().dispatch({type:"replace",data:(0,cA.f)(f.node),destinationIndex:g.index,destinationZone:g.zone,ui:e}):console.warn(`Warning: Could not find component with id "${a.props.id}" to resolve its data. Component may have been removed or the id is invalid.`)})}(0,cQ.$)();var kO=(a,b,c,d)=>(0,cQ._)(null,null,function*(){var e,f,g;(0,d.getState().dispatch)({type:"move",sourceIndex:b.index,sourceZone:null!=(e=b.zone)?e:cA.i,destinationIndex:c.index,destinationZone:null!=(f=c.zone)?f:cA.i,recordHistory:!1});let h=null==(g=d.getState().state.indexes.nodes[a])?void 0:g.data;h&&(yield kN(h,d.getState,"move"))});function kP(a){return a?function a(b){return b?b.getAttribute("dir")||a(b.parentElement):"ltr"}(a):"ltr"}(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var kQ=(a,b,c)=>Math.max(b,Math.min(c,a)),kR=(a,b)=>{let c=kQ(a.x,Math.min(b.x1,b.x2),Math.max(b.x1,b.x2)),d=kQ(a.y,Math.min(b.y1,b.y2),Math.max(b.y1,b.y2));return Math.hypot(a.x-c,a.y-d)};(0,cQ.$)();var kS=(a,b,c=b.getComputedStyle(a))=>{let d=c.display,e="rtl"===kP(a);if("flex"===d||"inline-flex"===d){let a=c.flexDirection;if(a.startsWith("row")){let b="row-reverse"===a;return{axis:"x",reversed:e?!b:b}}return{axis:"y",reversed:"column-reverse"===a}}if("grid"===d||"inline-grid"===d){let a;return c.gridAutoFlow.startsWith("column")||((a=c.gridTemplateColumns.replace(/\[[^\]]*\]/g," ").trim())&&"none"!==a?a.split(/\s+/).length:0)>1?{axis:"x",reversed:e}:{axis:"y",reversed:!1}}return{axis:"y",reversed:!1}},kT=({axis:a,reversed:b})=>{let c="x"===a,d=b?-1:1;return{horizontal:c,reversed:b,forward:d,start:a=>c?b?a.right:a.left:b?a.bottom:a.top,end:a=>c?b?a.left:a.right:b?a.top:a.bottom,isBefore:(a,b)=>d>0?a<=b:a>=b}},kU=(a,b,c)=>{var d,e;let f=a.ownerDocument.defaultView;if(!f)return null;let g=new Map(c.map((a,b)=>[a,b])),h=Array.from(a.querySelectorAll(":scope > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])")).map(a=>{var b,c;return{index:null!=(c=g.get(null!=(b=a.getAttribute("data-puck-component"))?b:""))?c:-1,el:a}}).filter(a=>-1!==a.index).sort((a,b)=>a.index-b.index).map(({index:a,el:b})=>({index:a,rect:b.getBoundingClientRect()}));if(0===h.length)return 0;let{horizontal:i,reversed:j,start:k,end:l}=kT(kS(a,f)),m=(a,b,c,d=[c])=>{let e=1/0,f=-1/0;for(let a of d)e=Math.min(e,i?a.top:a.left),f=Math.max(f,i?a.bottom:a.right);return i?{index:a,x1:b,x2:b,y1:c.top,y2:c.bottom,laneStart:e,laneEnd:f}:{index:a,x1:c.left,x2:c.right,y1:b,y2:b,laneStart:e,laneEnd:f}},n=[],o=(a,b,c)=>m(a,"before"===c?k(b):l(b),b);for(let a=0;a<=h.length;a++){let b=h[a-1],c=h[a];if(c)if(b)if(c.index-b.index>1)n.push(o(b.index+1,b.rect,"after")),n.push(o(c.index,c.rect,"before"));else if(j?l(b.rect)<k(c.rect):l(b.rect)>k(c.rect))n.push(o(c.index,c.rect,"before")),n.push(o(c.index,b.rect,"after"));else{let a=(l(b.rect)+k(c.rect))/2;n.push(m(c.index,a,c.rect,[b.rect,c.rect]))}else n.push(o(c.index,c.rect,"before"));else n.push(o(b.index+1,b.rect,"after"))}let p=i?b.y:b.x,q=null,r=1/0,s=null,t=1/0;for(let a of n){let c=kR(b,a);c<r&&(r=c,q=a),p>=a.laneStart&&p<=a.laneEnd&&c<t&&(t=c,s=a)}return null!=(e=null==(d=null!=s?s:q)?void 0:d.index)?e:null};(0,cQ.$)();var kV=(a,b)=>{var c;let d=document.querySelector("iframe#preview-frame");if(!d||a.ownerDocument!==d.contentDocument)return b;let e=d.getBoundingClientRect(),f=e.width/((null==(c=d.contentWindow)?void 0:c.innerWidth)||1);return f>0?{x:(b.x-e.left)/f,y:(b.y-e.top)/f}:b},kW=(0,cu.createContext)({dragListeners:{}}),kX=({children:a,disableAutoScroll:b,behavior:c="auto"})=>{let d,e,f,g,h,i,j,k,l=(0,cO.mm)(a=>a.dispatch),m=((0,cO.mm)(a=>a.instanceId),(0,cO.jG)()),n=(0,cu.useRef)(null),o=(d=(0,cu.useRef)(null),(0,cu.useCallback)(a=>{jG.setState({fallbackEnabled:!1});let b=(0,cP.$)();d.current=b,setTimeout(()=>{d.current===b&&(jG.setState({fallbackEnabled:!0}),a.collisionObserver.forceUpdate(!0))},100)},[])),[p]=(0,cu.useState)(()=>{let a=new Map;return(0,cU.f)(()=>({zoneDepthIndex:{},nextZoneDepthIndex:{},areaDepthIndex:{},nextAreaDepthIndex:{},draggedItem:null,previewIndex:{},enabledIndex:{},hoveringComponent:null,registerRootVirtualizer:(b,c)=>{a.set(b,c)},unregisterRootVirtualizer:b=>{a.delete(b)},scrollToComponent:b=>{let c=Array.from(a.values());if(c.length>0)for(let a of c){let c=a.resolveIndex(b);c<0||a.virtualizer.scrollToIndex(c,{behavior:"auto",align:"auto"})}else{let a=ks(),c=null==a?void 0:a.querySelector(ku(b));null==c||c.scrollIntoView({behavior:"smooth"})}}}))}),q=(0,cu.useCallback)(a=>{let{zoneDepthIndex:b={},areaDepthIndex:c={}}=p.getState()||{},d=Object.keys(b).length>0,e=Object.keys(c).length>0,f=!1,g=!1;return a.zone&&!b[a.zone]?f=!0:!a.zone&&d&&(f=!0),a.area&&!c[a.area]?g=!0:!a.area&&e&&(g=!0),{zoneChanged:f,areaChanged:g}},[p]),r=(0,cu.useCallback)((a,b)=>{let{zoneChanged:c,areaChanged:d}=q(a);(c||d)&&(p.setState({zoneDepthIndex:a.zone?{[a.zone]:!0}:{},areaDepthIndex:a.area?{[a.area]:!0}:{}}),o(b),setTimeout(()=>{b.collisionObserver.forceUpdate(!0)},50),n.current=null)},[p]),s=(0,iT.s)(r,100),t=()=>{s.cancel(),n.current=null};(0,cu.useEffect)(()=>{},[]);let[u]=(0,cu.useState)(()=>[...b?hl.filter(a=>a!==g4):hl,(({onChange:a})=>class extends eI{constructor(a,b){super(a);return}})({onChange:(a,b)=>{let c=p.getState(),{zoneChanged:d,areaChanged:e}=q(a),f=b.dragOperation.status.dragging;if(e||d){let b={},c={};a.zone&&(b={[a.zone]:!0}),a.area&&(c={[a.area]:!0}),p.setState({nextZoneDepthIndex:b,nextAreaDepthIndex:c})}if("void"!==a.zone&&(null==c?void 0:c.zoneDepthIndex.void))return void r(a,b);if(e){if(f){let c=n.current;c&&c.area===a.area&&c.zone===a.zone||(t(),s(a,b),n.current=a)}else t(),r(a,b);return}d&&r(a,b),t()}})]),v=jA(),[w,x]=(0,cu.useState)({}),y=(0,cu.useRef)(null),z=(0,cu.useRef)(void 0),{getTargetIndex:A,setActive:B,startScrollTracking:C,stopScrollTracking:D,update:E}=(e=(0,cO.jG)(),f=(0,cu.useRef)(null),g=(0,cu.useCallback)(a=>{var b;let c=null==(b=ks())?void 0:b.querySelector("[data-puck-entry]");a?null==c||c.setAttribute("data-puck-line-drag","true"):null==c||c.removeAttribute("data-puck-line-drag")},[]),h=(0,cu.useCallback)((a,b)=>{var c;let d=null==(c=ks())?void 0:c.querySelector(kv(a));if(!d)return null;let f=kV(d,b.dragOperation.position.current);return kU(d,f,kz(e.getState().state,a))},[e]),i=(0,cu.useCallback)(a=>{var b;let{previewIndex:c={}}=p.getState(),d=Object.values(c).find(a=>null==a?void 0:a.linePlaceholder);if(!d)return;let f=null==(b=ks())?void 0:b.querySelector(kv(d.zone));if(!f)return;let g=kV(f,a.dragOperation.position.current),h=f.getBoundingClientRect();if(!(g.x>=h.left&&g.x<=h.right&&g.y>=h.top&&g.y<=h.bottom))return;let i=kU(f,g,kz(e.getState().state,d.zone));null!==i&&i!==d.index&&p.setState({previewIndex:(0,cQ.s)((0,cQ.X)({},c),{[d.zone]:(0,cQ.s)((0,cQ.X)({},d),{index:i})})})},[e,p]),j=(0,cu.useCallback)(()=>{var a;null==(a=f.current)||a.call(f),f.current=null},[]),k=(0,cu.useCallback)(a=>{j();let b=ks();if(!b)return;let c=null,d=()=>{null===c&&(c=requestAnimationFrame(()=>{c=null,i(a)}))};b.addEventListener("scroll",d,{capture:!0,passive:!0}),f.current=()=>{null!==c&&cancelAnimationFrame(c),b.removeEventListener("scroll",d,{capture:!0})}},[j,i]),(0,cu.useEffect)(()=>j,[j]),{getTargetIndex:h,setActive:g,startScrollTracking:k,stopScrollTracking:j,update:i}),F=(0,cu.useMemo)(()=>({mode:"edit",areaId:"root",depth:0}),[]);return(0,cR.jsx)(kW.Provider,{value:{dragListeners:w,setDragListeners:x},children:(0,cR.jsx)(hK,{plugins:u,sensors:v,onDragEnd:(a,b)=>{var c,d;let e;D();let f=null==(c=ks())?void 0:c.querySelector("[data-puck-entry]");null==f||f.removeAttribute("data-puck-dragging");let{source:g,target:h}=a.operation;if(!g){B(!1),p.setState({draggedItem:null});return}let{zone:i,index:j}=g.data,{previewIndex:k={}}=p.getState()||{},n=null!=(d=Object.values(k).find(a=>(null==a?void 0:a.props.id)===g.id&&!a.ghost))?d:null,o=!a.canceled&&(null==h?void 0:h.type)!=="void"&&(null==n?void 0:n.linePlaceholder)?(({zones:a,itemId:b,targetZone:c,getExpectedOrder:d})=>{let e=ks();if(!e||kx(e))return()=>{};let f=Array.from(new Set(a)).map(a=>`${kv(a)} > [data-puck-component]:not([data-dnd-dragging]):not([data-dnd-placeholder])`).join(", "),g=()=>{let a=new Map;return e.querySelectorAll(f).forEach(c=>{let d=c.getAttribute("data-puck-component");d&&d!==b&&a.set(d,{el:c,rect:c.getBoundingClientRect()})}),a},h=g(),i=d();return()=>{ky(e,{zones:a,itemId:b,targetZone:c,getExpectedOrder:d,initialExpectedOrder:i},()=>{g().forEach(({el:a,rect:b},c)=>{var d;let e=null==(d=h.get(c))?void 0:d.rect;if(!e)return;let f=e.x-b.x,g=e.y-b.y;1>Math.abs(f)&&1>Math.abs(g)||a.animate({translate:[`${f}px ${g}px 0`,"0px 0px 0"]},kw)})})}})({zones:z.current?[z.current.zone,n.zone]:[n.zone],itemId:"move"===n.type?n.props.id:void 0,targetZone:n.zone,getExpectedOrder:()=>kz(m.getState().state,n.zone)}):null;e=dg(()=>{"idle"===g.status&&((()=>{var c,d,e,f,g;if(B(!1),p.setState({draggedItem:null}),a.canceled||(null==h?void 0:h.type)==="void"){p.setState({previewIndex:{}}),null==(c=w.dragend)||c.forEach(c=>{c(a,b)}),l({type:"setUi",ui:{itemSelector:null,isDragging:!1}});return}let k=n&&n.linePlaceholder&&z.current&&n.zone===z.current.zone&&n.index>z.current.index?n.index-1:null!=(d=null==n?void 0:n.index)?d:j;if(n){if(p.setState({previewIndex:{}}),"insert"===n.type){let a,b,c;a=n.componentType,b=n.zone,c=n.index,(0,cQ._)(null,null,function*(){let{getState:d}=m,e=(0,cP.$)(a),f={type:"insert",componentType:a,destinationIndex:c,destinationZone:b,id:e},g=d().state,h=(0,cP.q)(g,f,d()),i=d().dispatch;i((0,cQ.s)((0,cQ.X)({},f),{recordHistory:!0}));let j={index:c,zone:b};i({type:"setUi",ui:{itemSelector:j}});let k=(0,cP.n)(j,h);k&&(yield kN(k,d,"insert"))})}else z.current&&kO(n.props.id,z.current,(0,cQ.s)((0,cQ.X)({},n),{index:k}),m);null==o||o()}let q=(null==(e=z.current)?void 0:e.zone)!==(null==n?void 0:n.zone)||(null==(f=z.current)?void 0:f.index)!==k;l({type:"setUi",ui:{itemSelector:n?{index:k,zone:n.zone}:{index:j,zone:i},isDragging:!1},recordHistory:q}),null==(g=w.dragend)||g.forEach(c=>{c(a,b)})})(),null==e||e())})},onDragMove:(a,b)=>{var c;E(b),null==(c=w.dragmove)||c.forEach(c=>{c(a,b)})},onDragOver:(a,b)=>{var d,e,f,g,h,i;if(a.preventDefault(),!(null==(d=p.getState())?void 0:d.draggedItem))return;t();let{source:j,target:k}=a.operation;if(!k||!j||"void"===k.type)return;let[l]=j.id.split(":"),[n]=k.id.split(":"),o=j.data,q=o.zone,r=o.index,s="",u=0;if("component"===k.type){let a=k.data;s=a.zone;let c=null==(e=b.collisionObserver.collisions[0])?void 0:e.data;u=jK({position:jJ(null==c?void 0:c.direction,kP(k.element)),sourceIndex:r,targetIndex:a.index,isSameZone:q===s})}else s=k.id.toString(),u=0;let v=(null==(f=m.getState().state.indexes.nodes[k.id])?void 0:f.path)||[];if(!(n===l||v.find(a=>{let[b]=a.split(":");return b===l}))){if("new"===y.current){let a="static"===kL(c,{isNewComponent:!0});a&&(u=null!=(g=A(s,b))?g:u),B(a),p.setState({previewIndex:{[s]:{componentType:o.componentType,type:"insert",index:u,zone:s,element:j.element,props:{id:j.id.toString()},linePlaceholder:a}}})}else{z.current||(z.current={zone:o.zone,index:o.index});let a=(0,cP.n)(z.current,m.getState().state);if(a){let d=z.current.zone,e=d!==s,f="static"===kL(c,{isDraggingBetweenSlots:e});f&&(u=null!=(h=A(s,b))?h:u),B(f);let g={[s]:{componentType:o.componentType,type:"move",index:u,zone:s,props:a.props,element:j.element,linePlaceholder:f}};if(f&&e){let b=p.getState().previewIndex[d],c=z.current.index;b&&!b.linePlaceholder&&(c=b.index),g[d]={componentType:o.componentType,type:"move",index:c,zone:d,props:a.props,element:j.element,ghost:!0}}p.setState({previewIndex:g})}}null==(i=w.dragover)||i.forEach(c=>{c(a,b)})}},onDragStart:(a,b)=>{var d;"fluid"!==c&&C(b);let{source:e}=a.operation;if((null==e?void 0:e.type)==="component"){let a=e.data,b={zone:a.zone,index:a.index};z.current=b;let d=(0,cP.n)(b,m.getState().state);if(d){let b="static"===kL(c);B(b),p.setState({previewIndex:{[a.zone]:{componentType:a.componentType,type:"move",index:a.index,zone:a.zone,props:d.props,element:e.element,linePlaceholder:b}}})}}null==(d=w.dragstart)||d.forEach(c=>{c(a,b)})},onBeforeDragStart:a=>{var b,c,d,e;y.current=(null==(b=a.operation.source)?void 0:b.type)==="drawer"?"new":"existing",z.current=void 0,p.setState({draggedItem:a.operation.source}),(null==(c=m.getState().selectedItem)?void 0:c.props.id)!==(null==(d=a.operation.source)?void 0:d.id)?l({type:"setUi",ui:{itemSelector:null,isDragging:!0},recordHistory:!1}):l({type:"setUi",ui:{isDragging:!0},recordHistory:!1});let f=null==(e=ks())?void 0:e.querySelector("[data-puck-entry]");null==f||f.setAttribute("data-puck-dragging","true"),B(!1)},children:(0,cR.jsx)(kp,{store:p,children:(0,cR.jsx)(kq,{value:F,children:a})})})})},kY=({children:a,disableAutoScroll:b,behavior:c})=>"LOADING"===(0,cO.mm)(a=>a.status)?a:(0,cR.jsx)(kX,{disableAutoScroll:b,behavior:c,children:a}),kZ=(0,cz.f)("Drawer",kI),k$=(0,cz.f)("DrawerItem",kI),k_=({children:a,name:b,label:c,dragRef:d,isDragDisabled:e})=>{let f=(0,cu.useMemo)(()=>a||(({children:a})=>(0,cR.jsx)("div",{className:k$("default"),children:a})),[a]);return(0,cR.jsx)("div",{className:k$({disabled:e}),ref:d,onMouseDown:a=>a.preventDefault(),"data-testid":d?`drawer-item:${b}`:"","data-puck-drawer-item":!0,children:(0,cR.jsx)(f,{name:b,children:(0,cR.jsx)("div",{className:k$("draggableWrapper"),children:(0,cR.jsxs)("div",{className:k$("draggable"),children:[(0,cR.jsx)("div",{className:k$("name"),children:null!=c?c:b}),(0,cR.jsx)("div",{className:k$("icon"),children:(0,cR.jsx)(jv,{})})]})})})})},k0=({children:a,name:b,label:c,id:d,isDragDisabled:e})=>{let f=kA((0,cu.useContext)(ko)),{ref:g}=function(a){let{disabled:b,data:c,element:d,handle:e,id:f,modifiers:g,sensors:h,plugins:i}=a,j=hM(b=>new ho(hz(hF({},a),hA({register:!1,handle:hr(e),element:hr(d)})),b)),k=ht(j,hN);return hw(f,()=>j.id=f),hx(e,a=>j.handle=a),hx(d,a=>j.element=a),hw(c,()=>c&&(j.data=c)),hw(b,()=>j.disabled=!0===b),hw(h,()=>j.sensors=h),hw(g,()=>j.modifiers=g,void 0,dG),hw(i,()=>j.plugins=i,void 0,dG),hw(a.alignment,()=>j.alignment=a.alignment),{draggable:k,get isDragging(){return k.isDragging},get isDropping(){return k.isDropping},get isDragSource(){return k.isDragSource},handleRef:(0,cu.useCallback)(a=>{j.handle=null!=a?a:void 0},[j]),ref:(0,cu.useCallback)(a=>{var b,c;(a||null==(b=j.element)||!b.isConnected||(null==(c=j.manager)?void 0:c.dragOperation.status.idle))&&(j.element=null!=a?a:void 0)},[j])}}({id:d,data:{componentType:b},disabled:e,type:"drawer",plugins:[gX.configure({dropAnimation:f})]});return(0,cR.jsxs)("div",{className:kZ("draggable"),children:[(0,cR.jsx)("div",{className:kZ("draggableBg"),children:(0,cR.jsx)(k_,{name:b,label:c,children:a})}),(0,cR.jsx)("div",{className:kZ("draggableFg"),children:(0,cR.jsx)(k_,{name:b,label:c,dragRef:g,isDragDisabled:e,children:a})})]})},k1=({children:a,droppableId:b,direction:c})=>{b&&console.error("Warning: The `droppableId` prop on Drawer is deprecated and no longer required."),c&&console.error("Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging.");let d=ke(),{ref:e}=h0({id:d,type:"void",collisionPriority:0});return(0,cR.jsx)("div",{className:kZ(),ref:e,"data-puck-dnd":d,"data-puck-drawer":!0,"data-puck-dnd-void":!0,children:a})};k1.Item=({name:a,children:b,id:c,label:d,index:e,isDragDisabled:f})=>{let g=c||a,[h,i]=(0,cu.useState)((0,cP.$)(g));return void 0!==e&&console.error("Warning: The `index` prop on Drawer.Item is deprecated and no longer required."),!function(a,b,c=[]){let{setDragListeners:d}=(0,cu.useContext)(kW);(0,cu.useEffect)(()=>{d&&d(c=>(0,cQ.s)((0,cQ.X)({},c),{[a]:[...c[a]||[],b]}))},c)}("dragend",()=>{i((0,cP.$)(g))},[g]),(0,cR.jsx)("div",{children:(0,cR.jsx)(k0,{name:a,label:d,id:h,isDragDisabled:f,children:b})},h)},(0,cQ.$)();var k2=(a,b)=>a.getState().state.indexes.zones[b].contentIds.length;(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var k3=({componentId:a,zone:b})=>{let c=(0,cO.mm)(a=>a.config),d=(0,cO.mm)(a=>a.metadata),e=(0,cO.mm)(cT(c=>{var d,e;let f=c.state.indexes;return(null!=(e=null==(d=f.zones[`${a}:${b}`])?void 0:d.contentIds)?e:[]).map(a=>f.nodes[a].flatData)}));return(0,cR.jsx)(cK,{content:e,zone:b,config:c,metadata:d})};function k4(a,b,c,d,e){let f=(0,cu.useRef)(null),g=(0,cu.useRef)(null),h=(0,cu.useRef)(b.props),i=(0,cu.useMemo)(()=>cD(c,d,e),[c,d,e]),j=(0,cu.useMemo)(()=>{var c,d,e,j;let k,l="root"===b.type?a.root:null==(c=a.components)?void 0:c[b.type],m=null!=(d=null==l?void 0:l.fields)?d:{},n=f.current!==i,o=!1;if(!g.current||n)for(let a in b.props)(null==(e=m[a])?void 0:e.type)==="slot"&&(o=!0);else for(let a of(k=["id"],new Set([...Object.keys(b.props),...Object.keys(g.current)])))b.props[a]!==g.current[a]&&(k.push(a),(null==(j=m[a])?void 0:j.type)==="slot"&&(o=!0));let p=(0,cA.t)(b,i,a,!1,o,k).props;return g.current=b.props,f.current=i,h.current=k?(0,cQ.X)((0,cQ.X)({},h.current),p):p,h.current},[a,b,i]);return(0,cu.useMemo)(()=>(0,cQ.X)((0,cQ.X)({},b.props),j),[b.props,j])}(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var k5=(a,b={})=>{if(!a)return;let{disableDrag:c=!1,disableDragOnFocus:d=!0}=b,e=a=>{a.stopPropagation()};a.addEventListener("mouseover",e,{capture:!0});let f=()=>{setTimeout(()=>{a.addEventListener("pointerdown",e,{capture:!0})},200)},g=()=>{a.removeEventListener("pointerdown",e,{capture:!0})};return c?a.addEventListener("pointerdown",e,{capture:!0}):d&&(a.addEventListener("focus",f,{capture:!0}),a.addEventListener("blur",g,{capture:!0})),a.setAttribute("data-puck-overlay-portal","true"),()=>{a.removeEventListener("mouseover",e,{capture:!0}),c?a.removeEventListener("pointerdown",e,{capture:!0}):d&&(a.removeEventListener("focus",f,{capture:!0}),a.removeEventListener("blur",g,{capture:!0})),a.removeAttribute("data-puck-overlay-portal")}};(0,cQ.$)();var k6=(0,cz.f)("InlineTextField",{InlineTextField:"_InlineTextField_104qp_1"}),k7=(0,cu.memo)(({propPath:a,componentId:b,value:c,isReadOnly:d,opts:e={}})=>{var f;let g=(0,cu.useRef)(null),h=(0,cO.jG)(),i=null!=(f=e.disableLineBreaks)&&f;(0,cu.useEffect)(()=>{let d=h.getState(),e=d.state.indexes.nodes[b].data;if(!d.getComponentConfig(e.type))throw Error(`InlineTextField Error: No config defined for ${e.type}`);if(g.current){let d=null!=c?c:"";d!==g.current.innerText&&g.current.replaceChildren(d);let e=k5(g.current),f=c=>(0,cQ._)(null,null,function*(){let d=h.getState().state.indexes.nodes[b],e=c.target.innerText;i&&(e=e.replaceAll(/\n/gm,""));let f=jh(d.data.props,a,e);yield kN((0,cQ.s)((0,cQ.X)({},d.data),{props:f}),h.getState,"replace",!0)});return g.current.addEventListener("input",f),()=>{var a;null==(a=g.current)||a.removeEventListener("input",f),null==e||e()}}},[h,g.current,c,i]);let[j,k]=(0,cu.useState)(!1),[l,m]=(0,cu.useState)(!1);return(0,cR.jsx)("span",{className:k6(),ref:g,contentEditable:j||l?"plaintext-only":"false",onClick:a=>{a.preventDefault(),a.stopPropagation()},onClickCapture:a=>{a.preventDefault(),a.stopPropagation();let c=kM(h.getState().state,b);h.getState().setUi({itemSelector:c})},onKeyDown:a=>{a.stopPropagation(),(i&&"Enter"===a.key||d)&&a.preventDefault()},onKeyUp:a=>{a.stopPropagation(),a.preventDefault()},onMouseOverCapture:()=>k(!0),onMouseOutCapture:()=>k(!1),onFocus:()=>m(!0),onBlur:()=>m(!1)})});(0,cQ.$)();var k8=(0,cu.lazy)(()=>a.A(72383).then(a=>({default:a.Editor}))),k9=(0,cu.lazy)(()=>a.A(27201).then(a=>({default:a.RichTextRender}))),la=(0,cu.memo)(({value:a,componentId:b,propPath:c,field:d,id:e})=>{let f=(0,cu.useRef)(null),g=(0,cO.jG)();(0,cu.useEffect)(()=>{if(!f.current)return;let a=k5(f.current,{disableDragOnFocus:!0});return()=>null==a?void 0:a()},[f.current]);let h=(0,cu.useCallback)((a,d)=>(0,cQ._)(null,null,function*(){let e=g.getState().state.indexes.nodes[b],f=jh(e.data.props,c,a);yield kN((0,cQ.s)((0,cQ.X)({},e.data),{props:f}),g.getState,"replace",!0,d)}),[g,b,c]),i=(0,cu.useCallback)(a=>{g.setState({currentRichText:{inlineComponentId:b,inline:!0,field:d,editor:a,id:e}})},[d,b]);if(!d.contentEditable)return(0,cR.jsx)(cu.Suspense,{fallback:(0,cR.jsx)(cG,{content:a}),children:(0,cR.jsx)(k9,{content:a,field:d})});let j={content:a,onChange:h,field:d,inline:!0,onFocus:i,id:e,name:c};return(0,cR.jsx)("div",{ref:f,onClick:a=>{a.preventDefault(),a.stopPropagation()},onClickCapture:a=>{a.preventDefault(),a.stopPropagation();let c=kM(g.getState().state,b);g.getState().setUi({itemSelector:c})},children:(0,cR.jsx)(cu.Suspense,{fallback:(0,cR.jsx)(kb,(0,cQ.X)({},j)),children:(0,cR.jsx)(k8,(0,cQ.X)({},j))})})});la.displayName="InlineEditorWrapper",(0,cQ.$)(),(0,cQ.$)();var lb=(0,cu.memo)(({Component:a,componentProps:b})=>(0,cR.jsx)(a,(0,cQ.X)({},b)),(a,b)=>{let c=!0;return"puck"in a.componentProps&&"puck"in b.componentProps&&(c=(0,iU.f)(a.componentProps.puck,b.componentProps.puck)),a.Component===b.Component&&function(a,b,c=[]){if(Object.is(a,b))return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b||Object.getPrototypeOf(a)!==Object.getPrototypeOf(b))return!1;let d=new Set(c),e=Object.keys(a).filter(a=>!d.has(a)),f=Object.keys(b).filter(a=>!d.has(a));if(e.length!==f.length)return!1;for(let c=0;c<e.length;c++){let d=e[c];if(!Object.prototype.hasOwnProperty.call(b,d)||!Object.is(a[d],b[d]))return!1}return!0}(a.componentProps,b.componentProps,["puck"])&&c});(0,cQ.$)();var lc=new Map,ld=({contentIds:a,zoneCompound:b,renderItem:c})=>{let d=(0,cO.mm)(a=>{var b,c;return null!=(c=null==(b=a.selectedItem)?void 0:b.props.id)?c:null}),e=ks(),f=(0,cu.useContext)(ko),g=jq(ko,a=>{var b;let c=null==(b=a.draggedItem)?void 0:b.id;return c?String(c):null}),h=jq(ko,a=>{var b,c,d;if(null==(b=a.draggedItem)?void 0:b.id){let[b]=null!=(d=Object.entries(null!=(c=a.previewIndex)?c:{}).find(([,a])=>!(null==a?void 0:a.ghost)))?d:[];return null==b?void 0:b.split(":")[0]}return null}),i=null==e?void 0:e.defaultView,j=(0,cu.useRef)(new Map),k=(0,cO.jG)(),l=(0,cu.useCallback)(b=>{var c,d,e,f;if(!b||"root"===b)return -1;let g=a.indexOf(b);if(g>-1)return g;let h=null!=(e=null==(d=null==(c=k.getState().state.indexes.nodes)?void 0:c[b])?void 0:d.path)?e:[];for(let b=h.length-1;b>=0;b-=1){let c=null==(f=h[b])?void 0:f.split(":")[0];if(!c||"root"===c)continue;let d=a.indexOf(c);if(d>-1)return d}return -1},[k,a]),m=(0,cu.useMemo)(()=>{let a=new Set;return[d,g,h].forEach(b=>{let c=l(b);c>-1&&a.add(c)}),Array.from(a).sort((a,b)=>a-b)},[h,g,l,d]),n=(0,cu.useCallback)(a=>{let b=i2(a);return m.forEach(a=>{b.includes(a)||b.push(a)}),b.sort((a,b)=>a-b),b},[m]),o=je({count:a.length,getItemKey:b=>a[b],estimateSize:b=>{var c,d;return c=a[b],null!=(d=lc.get(c))?d:320},getScrollElement:()=>null!=i?i:null,overscan:5,observeElementRect:(a,b)=>i?((a,b)=>{let c=a.scrollElement;if(!c)return;let d=()=>{b({width:c.innerWidth,height:c.innerHeight})};return d(),c.addEventListener("resize",d,i4),()=>{c.removeEventListener("resize",d)}})(a,b):i3(a,b),observeElementOffset:(a,b)=>i?i5(a,b,b=>a.options.horizontal?b.scrollX:b.scrollY):i6(a,b),scrollToFn:(a,b,c)=>i8(a,b,c),rangeExtractor:n,initialOffset:()=>i?i.scrollY:0});(0,cu.useEffect)(()=>(f.getState().registerRootVirtualizer(b,{resolveIndex:a=>l(a),virtualizer:o}),()=>{f.getState().unregisterRootVirtualizer(b)}),[l,o,b,f]);let p=(0,cu.useCallback)(a=>{let b=j.current.get(a);if(b)return b;let c=b=>{if(!b)return;let c=Math.ceil(b.getBoundingClientRect().height)||320;"number"==typeof c&&c>0&&(c<=0||lc.set(a,c))};return j.current.set(a,c),c},[]);(0,cu.useEffect)(()=>{let b=new Set(a);Array.from(j.current.keys()).forEach(a=>{b.has(a)||j.current.delete(a)})},[a]);let q=o.getVirtualItems(),r=o.getTotalSize(),s=(0,cu.useMemo)(()=>{let b=[],d=0,e=-1;q.forEach(f=>{if(!f)return;let g=a[f.index],h=Math.max(f.start-d,0);h>0&&b.push((0,cR.jsx)("div",{style:{height:`${h}px`}},`gap:${e}:${f.index}`)),b.push(c({componentId:g,index:f.index,measureRef:p(g)})),d=f.end,e=f.index});let f=Math.max(r-d,0);return f>0&&b.push((0,cR.jsx)("div",{style:{height:`${f}px`}},`gap:${e}:end`)),b},[r,q,p]);return(0,cR.jsx)(cR.Fragment,{children:s})};(0,cQ.$)();var le=(0,cz.f)("DropZone",kG),lf="var(--puck-line-placeholder-width, 2px)",lg=({zoneRef:a,contentIds:b,index:c})=>{let[d,e]=(0,cu.useState)();return((0,cu.useLayoutEffect)(()=>{var d,f,g,h;let i,j=a.current,k=null==j?void 0:j.ownerDocument.defaultView;if(!j||!k)return;let l=a=>parseFloat(null!=a?a:"")||0,m=a=>{let c=b[a];if(void 0===c)return;let d=j.querySelector(`:scope > ${ku(c)}:not([data-dnd-dragging])`);if(d)return{el:d,rect:d.getBoundingClientRect()}},n=j.getBoundingClientRect(),o=k.getComputedStyle(j),p=m(c-1),q=m(c),r=null!=q?q:p,{horizontal:s,reversed:t,forward:u,start:v,end:w,isBefore:x}=kT(kS(j,k,o)),y=l(s?o.columnGap:o.rowGap),z=(a,b)=>{var c;return l(null==(c=a?k.getComputedStyle(a):void 0)?void 0:c["start"===b==!t?s?"marginLeft":"marginTop":s?"marginRight":"marginBottom"])},A=l(o.borderLeftWidth),B=l(o.borderTopWidth),C=l(o.borderRightWidth),D=l(o.borderBottomWidth);i=q?p&&x(w(p.rect),v(q.rect))?(w(p.rect)+v(q.rect))/2:v(q.rect)-u*(Math.max(z(q.el,"start"),y)/2):p?w(p.rect)+u*(Math.max(z(p.el,"end"),y)/2):s?t?n.right-C-l(o.paddingRight):n.left+A+l(o.paddingLeft):t?n.bottom-D-l(o.paddingBottom):n.top+B+l(o.paddingTop),s?e({top:(null!=(d=null==r?void 0:r.rect.top)?d:n.top+B+l(o.paddingTop))-n.top+j.scrollTop-B,height:null!=(f=null==r?void 0:r.rect.height)?f:n.height-B-D-l(o.paddingTop)-l(o.paddingBottom),left:kQ(i-n.left+j.scrollLeft-A,0,j.scrollWidth),width:lf,transform:"translateX(-50%)"}):e({left:(null!=(g=null==r?void 0:r.rect.left)?g:n.left+A+l(o.paddingLeft))-n.left+j.scrollLeft-A,width:null!=(h=null==r?void 0:r.rect.width)?h:n.width-A-C-l(o.paddingLeft)-l(o.paddingRight),top:kQ(i-n.top+j.scrollTop-B,0,j.scrollHeight),height:lf,transform:"translateY(-50%)"})},[a,b,c]),d)?(0,cR.jsx)("div",{className:le("linePlaceholder"),style:d,"data-puck-line-placeholder":!0}):null},lh=(0,cz.f)("DropZone",kG),li=({element:a,label:b,override:c})=>a?(0,cR.jsx)("div",{dangerouslySetInnerHTML:{__html:a.outerHTML}}):(0,cR.jsx)(k_,{name:b,children:c}),lj=a=>(0,cR.jsx)(ll,(0,cQ.X)({},a)),lk=(0,cu.memo)(({zoneCompound:a,componentId:b,index:c,dragAxis:d,collisionAxis:e,inDroppableZone:f,itemRef:g})=>{var h,i,j,k;let l=(0,cO.mm)(a=>a.metadata),m=(0,cu.useContext)(kn),{depth:n=1}=null!=m?m:{},o=(0,cu.useContext)(ko),p=(0,cO.mm)(cT(a=>{var c;return null==(c=a.state.indexes.nodes[b])?void 0:c.flatData.props})),q=(0,cO.mm)(a=>{var c;return null==(c=a.state.indexes.nodes[b])?void 0:c.data.type}),r=(0,cO.mm)(cT(a=>{var c;return null==(c=a.state.indexes.nodes[b])?void 0:c.data.readOnly})),s=(0,cO.jG)(),t=(0,cu.useMemo)(()=>{if(p)return(0,cA.B)({type:q,props:p});let c=o.getState().previewIndex[a];return b===(null==c?void 0:c.props.id)?{type:c.componentType,props:c.props,previewType:c.type,element:c.element}:null},[s,b,a,q,p]),u=(0,cO.mm)(a=>(null==t?void 0:t.type)?a.config.components[t.type]:null),v=(0,cu.useMemo)(()=>({renderDropZone:lj,isEditing:!0,dragRef:null,metadata:(0,cQ.X)((0,cQ.X)({},l),null==u?void 0:u.metadata)}),[l,null==u?void 0:u.metadata]),w=(0,cO.mm)(a=>a.overrides),x=(0,cO.mm)(a=>{var c;return(null==(c=a.componentState[b])?void 0:c.loadingCount)>0}),y=(0,cO.mm)(a=>{var c;return(null==(c=a.selectedItem)?void 0:c.props.id)===b}),z=(0,cO.mP)("label-component"),A=(0,cO.mP)("canvas-noconfig",{type:null!=(i=null==(h=null==t?void 0:t.type)?void 0:h.toString())?i:""}),B=null!=(k=null!=(j=null==u?void 0:u.label)?j:null==t?void 0:t.type.toString())?k:z,C=(0,cu.useMemo)(()=>(0,cQ.s)((0,cQ.X)((0,cQ.X)({},null==u?void 0:u.defaultProps),null==t?void 0:t.props),{puck:v,editMode:!0}),[null==u?void 0:u.defaultProps,null==t?void 0:t.props,v]),D=(0,cu.useMemo)(()=>{var a;return{type:null!=(a=null==t?void 0:t.type)?a:q,props:C}},[null==t?void 0:t.type,q,C]),E=(0,cO.mm)(a=>a.config),F=(0,cO.mm)(a=>a.plugins),G=(0,cO.mm)(a=>a.fieldTransforms),H=k4(E,D,(0,cu.useMemo)(()=>(0,cQ.X)((0,cQ.X)((0,cQ.X)((0,cQ.X)((0,cQ.X)({},cC(lj,a=>(0,cR.jsx)(k3,{componentId:b,zone:a.zone}))),{text:({value:a,componentId:b,field:c,propPath:d,isReadOnly:e})=>c.contentEditable?(0,cR.jsx)(k7,{propPath:d,componentId:b,value:a,opts:{disableLineBreaks:!0},isReadOnly:e}):a,textarea:({value:a,componentId:b,field:c,propPath:d,isReadOnly:e})=>c.contentEditable?(0,cR.jsx)(k7,{propPath:d,componentId:b,value:a,isReadOnly:e}):a,custom:({value:a,componentId:b,field:c,propPath:d,isReadOnly:e})=>c.contentEditable&&"string"==typeof a?(0,cR.jsx)(k7,{propPath:d,componentId:b,value:a,isReadOnly:e}):a}),{richtext:({value:a,componentId:b,field:c,propPath:d,isReadOnly:e})=>{let{contentEditable:f=!0,tiptap:g}=c;if(!1===f||e)return(0,cR.jsx)(k9,{content:a,field:c});let h=`${b}_${c.type}_${d}`;return(0,cR.jsx)(la,{value:a,componentId:b,propPath:d,field:c,id:h},h)}}),F.reduce((a,b)=>(0,cQ.X)((0,cQ.X)({},a),b.fieldTransforms),{})),G),[F,G]),r,x);if(!t)return;let I=u?u.render:()=>(0,cR.jsx)("div",{style:{padding:48,textAlign:"center"},children:A}),J=t.type,K="previewType"in t&&"insert"===t.previewType;return(0,cR.jsx)(kF,{id:b,componentType:J,zoneCompound:a,depth:n+1,index:c,isLoading:x,isSelected:y,label:B,autoDragAxis:d,userDragAxis:e,inDroppableZone:f,itemRef:g,children:a=>{var b;return(null==u?void 0:u.inline)&&!K?(0,cR.jsx)(lb,{Component:I,componentProps:(0,cQ.s)((0,cQ.X)({},H),{puck:(0,cQ.s)((0,cQ.X)({},H.puck),{dragRef:a})})}):(0,cR.jsx)("div",{ref:a,children:K?(0,cR.jsx)(li,{label:B,override:null!=(b=w.componentItem)?b:w.drawerItem,element:"element"in t&&t.element?t.element:void 0}):(0,cR.jsx)(lb,{Component:I,componentProps:H})})}})}),ll=(0,cu.forwardRef)(function({zone:a,allow:b,disallow:c,style:d,className:e,minEmptyHeight:f="128px",collisionAxis:g,as:h},i){let j=(0,cu.useContext)(kn),k=(0,cO.jG)(),{areaId:l,depth:m=0,registerLocalZone:n,unregisterLocalZone:o}=null!=j?j:{},p=(0,cO.mm)(cT(a=>{var b;return l?null==(b=a.state.indexes.nodes[l])?void 0:b.path:null})),q=cA.i;l&&a!==cA.i&&(q=`${l}:${a}`);let r=q===cA.i||a===cA.i||"root"===l,s=jq(ko,a=>a.nextAreaDepthIndex[l||""]),t=(0,cO.mm)(cT(a=>{var b;return null==(b=a.state.indexes.zones[q])?void 0:b.contentIds})),u=(0,cO.mm)(cT(a=>{var b;return null==(b=a.state.indexes.zones[q])?void 0:b.type}));(0,cu.useEffect)(()=>{(!u||"dropzone"===u)&&(null==j?void 0:j.registerZone)&&(null==j||j.registerZone(q))},[u,k]),(0,cu.useEffect)(()=>{"dropzone"===u&&q!==cA.i&&console.warn("DropZones have been deprecated in favor of slot fields and will be removed in a future version of Puck. Please see the migration guide: https://www.puckeditor.com/docs/guides/migrations/dropzones-to-slots")},[u]);let v=(0,cu.useMemo)(()=>t||[],[t]),w=(0,cu.useRef)(null),x=(0,cu.useCallback)(a=>kH(a,{allow:b,disallow:c}),[b,c]),y=jq(ko,a=>{var b;return x(null==(b=a.draggedItem)?void 0:b.data.componentType)}),z=s||r,A=jq(ko,a=>{var b;let c=!0;return(c=null!=(b=a.zoneDepthIndex[q])&&b)&&(c=y),c});(0,cu.useEffect)(()=>(n&&n(q,y||A),()=>{o&&o(q)}),[y,A,q]);let[B,C]=((a,b)=>{var c,d;let e,f=(0,cu.useContext)(ko),g=jq(ko,a=>a.previewIndex[b]),h=(0,cO.mm)(a=>a.state.ui.isDragging),[i,j]=(0,cu.useState)(a),[k,l]=(0,cu.useState)(g),m=(c=(a,b,c,d,e,f)=>{(!c||e)&&(b&&!b.linePlaceholder?j((0,cP.A)(a.filter(a=>a!==b.props.id),b.index,b.props.id)):j(e&&!f?a.filter(a=>a!==d):a),l(b))},d=[],e=hL(),(0,cu.useCallback)((...a)=>(0,cQ._)(null,null,function*(){return yield null==e?void 0:e.renderer.rendering,c(...a)}),[...d,e]));return(0,cu.useEffect)(()=>{var b;let c=f.getState(),d=null==(b=c.draggedItem)?void 0:b.id,e=Object.values(c.previewIndex||{});m(a,g,h,d,e.length>0,e.some(a=>null==a?void 0:a.linePlaceholder))},[a,g,h]),[i,k]})(v,q),D=C&&!C.linePlaceholder?1:0,E=B.length===D,F=A&&E,G=(0,cu.useContext)(ko);(0,cu.useEffect)(()=>{let{enabledIndex:a}=G.getState();G.setState({enabledIndex:(0,cQ.s)((0,cQ.X)({},a),{[q]:A})})},[A,G,q]);let{ref:H}=h0({id:q,collisionPriority:A?m:0,disabled:!F,collisionDetector:jF,type:"dropzone",data:{areaId:l,depth:m,isDroppableTarget:y,path:p||[]}}),I=(0,cO.mm)(a=>(null==a?void 0:a.selectedItem)&&l===(null==a?void 0:a.selectedItem.props.id)),[J]=((a,b)=>{let c=(0,cO.mm)(a=>a.status),[d,e]=(0,cu.useState)(b||"y"),f=(0,cu.useCallback)(()=>{if(a.current){let b=window.getComputedStyle(a.current);"grid"===b.display?e("dynamic"):"flex"===b.display&&"row"===b.flexDirection?e("x"):e("y")}},[a.current]);return(0,cu.useEffect)(()=>{let a=()=>{f()};return window.addEventListener("viewportchange",a),()=>{window.removeEventListener("viewportchange",a)}},[]),(0,cu.useEffect)(f,[c,b]),[d,f]})(w,g),[K,L]=(({zoneCompound:a,userMinEmptyHeight:b,ref:c})=>{let d=(0,cO.jG)(),[e,f]=(0,cu.useState)(0),[g,h]=(0,cu.useState)(!1),{draggedItem:i,isZone:j}=jq(ko,b=>{var c,d;return{draggedItem:(null==(c=b.draggedItem)?void 0:c.data.zone)===a?b.draggedItem:null,isZone:(null==(d=b.draggedItem)?void 0:d.data.zone)===a}}),k=(0,cu.useRef)(0),l=kr(b=>{if(b){let b=k2(d,a);if(f(0),b||0===k.current)return void h(!1);let c=d.getState().selectedItem,e=d.getState().state.indexes.zones,g=d.getState().nodes;g.setOverlayVisible(null==c?void 0:c.props.id,!1),setTimeout(()=>{var b;let d=(null==(b=e[a])?void 0:b.contentIds)||[];g.syncNodes(d),c&&setTimeout(()=>{g.syncNode(c.props.id),g.setOverlayVisible(c.props.id,!0)},200),h(!1)},100)}},[d,e,a]);(0,cu.useEffect)(()=>{if(i&&c.current&&j){let b=c.current.getBoundingClientRect();return k.current=k2(d,a),f(b.height),h(!0),l()}},[c.current,i,l]);let m=isNaN(Number(b))?b:`${b}px`;return[e?`${e}px`:m,g]})({zoneCompound:q,userMinEmptyHeight:f,ref:w}),M=(0,cu.useCallback)(a=>{kB([w,H,i],a)},[H]),N=(0,cO.mm)(a=>a._experimentalVirtualization),O=(null!=l?l:cA.U)===cA.U&&0===m;return(0,cR.jsxs)(null!=h?h:"div",{className:`${lh({isRootZone:r,hoveringOverArea:z,isEnabled:A,isAreaSelected:I,hasChildren:v.length>0,isAnimating:L})}${e?` ${e}`:""}`,ref:M,"data-testid":`dropzone:${q}`,"data-puck-dropzone":q,style:(0,cQ.s)((0,cQ.X)({},d),{"--puck-slot-min-empty-height":K,backgroundColor:null==d?void 0:d.backgroundColor}),children:[N&&O?(0,cR.jsx)(ld,{contentIds:B,zoneCompound:q,renderItem:a=>(0,cR.jsx)(lk,{zoneCompound:q,componentId:a.componentId,dragAxis:J,index:a.index,collisionAxis:g,inDroppableZone:y,itemRef:a.measureRef},a.componentId)}):B.map((a,b)=>(0,cR.jsx)(lk,{zoneCompound:q,componentId:a,dragAxis:J,index:b,collisionAxis:g,inDroppableZone:y},a)),(null==C?void 0:C.linePlaceholder)&&(0,cR.jsx)(lg,{zoneRef:w,contentIds:v,index:C.index})]})}),lm=({config:a,item:b,metadata:c})=>{let d=a.components[b.type],e=cE(a,b,b=>(0,cR.jsx)(cK,(0,cQ.s)((0,cQ.X)({},b),{config:a,metadata:c}))),f=(0,cu.useMemo)(()=>({areaId:e.id,depth:1}),[e]),g=cJ(d.fields,e);return(0,cR.jsx)(kq,{value:f,children:(0,cR.jsx)(d.render,(0,cQ.s)((0,cQ.X)((0,cQ.X)({},e),g),{puck:(0,cQ.s)((0,cQ.X)({},e.puck),{renderDropZone:ln,metadata:(0,cQ.X)((0,cQ.X)({},c),d.metadata)})}))},e.id)},ln=a=>(0,cR.jsx)(lo,(0,cQ.X)({},a)),lo=(0,cu.forwardRef)(function({className:a,style:b,zone:c,as:d},e){let f=(0,cu.useContext)(kn),{areaId:g="root"}=f||{},{config:h,data:i,metadata:j}=(0,cu.useContext)(lr),k=`${g}:${c}`,l=(null==i?void 0:i.content)||[];return((0,cu.useEffect)(()=>{!l&&(null==f?void 0:f.registerZone)&&(null==f||f.registerZone(k))},[l]),i&&h)?(k!==cA.i&&(l=(0,cA.I)(i,k).zones[k]),(0,cR.jsx)(null!=d?d:"div",{className:a,style:b,ref:e,children:l.map(a=>h.components[a.type]?(0,cR.jsx)(lm,{config:h,item:a,metadata:j},a.props.id):null)})):null}),lp=a=>(0,cR.jsx)(lq,(0,cQ.X)({},a)),lq=(0,cu.forwardRef)(function(a,b){let c=(0,cu.useContext)(kn);return(null==c?void 0:c.mode)==="edit"?(0,cR.jsx)(cR.Fragment,{children:(0,cR.jsx)(ll,(0,cQ.s)((0,cQ.X)({},a),{ref:b}))}):(0,cR.jsx)(cR.Fragment,{children:(0,cR.jsx)(lo,(0,cQ.s)((0,cQ.X)({},a),{ref:b}))})}),lr=cu.default.createContext({config:{components:{}},data:{root:{},content:[]},metadata:{}});function ls({config:a,data:b,metadata:c={}}){var d,e;let f=(0,cQ.s)((0,cQ.X)({},b),{root:b.root||{},content:b.content||[]}),g="props"in f.root?f.root.props:f.root,h=(null==g?void 0:g.title)||"",i=(0,cQ.s)((0,cQ.X)({},g),{puck:{renderDropZone:lp,isEditing:!1,dragRef:null,metadata:c},title:h,editMode:!1,id:"puck-root"}),j=cE(a,{type:"root",props:i},b=>(0,cR.jsx)(cM,(0,cQ.s)((0,cQ.X)({},b),{config:a,metadata:c}))),k=cJ(null==(d=a.root)?void 0:d.fields,i),l=(0,cu.useMemo)(()=>({mode:"render",depth:0}),[]);return(null==(e=a.root)?void 0:e.render)?(0,cR.jsx)(lr.Provider,{value:{config:a,data:f,metadata:c},children:(0,cR.jsx)(kq,{value:l,children:(0,cR.jsx)(a.root.render,(0,cQ.s)((0,cQ.X)((0,cQ.X)({},j),k),{children:(0,cR.jsx)(ln,{zone:cA.D})}))})}):(0,cR.jsx)(lr.Provider,{value:{config:a,data:f,metadata:c},children:(0,cR.jsx)(kq,{value:l,children:(0,cR.jsx)(ln,{zone:cA.D})})})}(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var lt=(a,b)=>{let c={back:a.history.back,forward:a.history.forward,setHistories:a.history.setHistories,setHistoryIndex:a.history.setHistoryIndex,hasPast:a.history.hasPast(),hasFuture:a.history.hasFuture(),histories:a.history.histories,index:a.history.index},d={appState:(0,cP.J)(a.state),config:a.config,dispatch:a.dispatch,getPermissions:a.permissions.getPermissions,refreshPermissions:a.permissions.refreshPermissions,resolveDataById:(a,c)=>(function(a,b,c){return(0,cQ._)(this,null,function*(){let d=b().state.indexes.nodes[a];d?yield kN(d.data,b,c):console.warn(`Warning: Could not find component with id "${a}" to resolve its data. Component may have been removed or the id is invalid.`)})})(a,b,c),resolveDataBySelector:(a,c)=>(function(a,b,c){return(0,cQ._)(this,null,function*(){let d=(0,cP.n)(a,b().state);if(!d)return void console.warn(`Warning: Could not find component for selector "${JSON.stringify(a)}" to resolve its data. Component may have been removed or the selector is invalid.`);let e=(0,cA.f)(d);yield kN(e,b,c)})})(a,b,c),history:c,selectedItem:a.selectedItem||null,getItemBySelector:b=>(0,cP.n)(b,a.state),getItemById:b=>a.state.indexes.nodes[b].data,getSelectorForId:b=>kM(a.state,b),getParentById:b=>{let c=a.state.indexes.nodes[b].parentId;if(null===c)return;let d=a.state.indexes.nodes[c];if(d)return d.data},dictionary:a.dictionary};return d.__private={appState:a.state},d},lu=(0,cu.createContext)(null),lv=a=>({state:a.state,config:a.config,dispatch:a.dispatch,permissions:a.permissions,history:a.history,selectedItem:a.selectedItem,dictionary:a.dictionary});(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var lw=(0,cz.f)("ComponentList",{ComponentList:"_ComponentList_htktj_1","ComponentList--isExpanded":"_ComponentList--isExpanded_htktj_5","ComponentList-content":"_ComponentList-content_htktj_9","ComponentList-title":"_ComponentList-title_htktj_17","ComponentList-titleIcon":"_ComponentList-titleIcon_htktj_63"}),lx=({name:a,label:b})=>{var c;let d=(0,cO.mm)(a=>a.overrides),e=(0,cO.mm)(b=>b.permissions.getPermissions({type:a}).insert);return(0,cu.useEffect)(()=>{d.componentItem&&console.warn("The `componentItem` override has been deprecated and renamed to `drawerItem`")},[d]),(0,cR.jsx)(k1.Item,{label:b,name:a,isDragDisabled:!e,children:null!=(c=d.componentItem)?c:d.drawerItem})},ly=({children:a,title:b,id:c})=>{let d=(0,cO.mm)(a=>a.config),e=(0,cO.mm)(a=>a.setUi),f=(0,cO.mm)(a=>a.state.ui.componentList),{expanded:g=!0}=f[c]||{},h=`puck-drawer-category-${c}`,i=(0,cO.mP)("drawer-category-collapse",{title:null!=b?b:""}),j=(0,cO.mP)("drawer-category-expand",{title:null!=b?b:""});return(0,cR.jsxs)("div",{className:lw({isExpanded:g}),children:[b&&(0,cR.jsxs)("button",{type:"button",className:lw("title"),"aria-expanded":g,"aria-controls":h,onClick:()=>e({componentList:(0,cQ.s)((0,cQ.X)({},f),{[c]:(0,cQ.s)((0,cQ.X)({},f[c]),{expanded:!g})})}),title:g?i:j,children:[(0,cR.jsx)("div",{children:b}),(0,cR.jsx)("div",{className:lw("titleIcon"),children:g?(0,cR.jsx)(cO.Fh,{size:12}):(0,cR.jsx)(cO.N8,{size:12})})]}),(0,cR.jsx)("div",{className:lw("content"),id:h,children:(0,cR.jsx)(k1,{children:a||Object.keys(d.components).map(a=>{var b;return(0,cR.jsx)(lx,{label:null!=(b=d.components[a].label)?b:a,name:a},a)})})})]})};ly.Item=lx;var lz=()=>{let a=(0,cO.mm)(a=>a.overrides),b=(()=>{let[a,b]=(0,cu.useState)(),c=(0,cO.mm)(a=>a.config),d=(0,cO.mm)(a=>a.state.ui.componentList),e=(0,cO.mP)("drawer-category-other");return(0,cu.useEffect)(()=>{var a,f,g;if(Object.keys(d).length>0){let h,i=[];h=Object.entries(d).map(([a,b])=>{var d,e;return b.components?(b.components.forEach(a=>{i.push(a)}),!1===b.visible)?null:(0,cR.jsx)(ly,{id:a,title:(null==(e=null==(d=c.categories)?void 0:d[a])?void 0:e.title)||b.title||a,children:b.components.map((a,b)=>{var d;let e=c.components[a]||{};return(0,cR.jsx)(ly.Item,{label:null!=(d=e.label)?d:a,name:a,index:b},a)})},a):null});let j=Object.keys(c.components).filter(a=>-1===i.indexOf(a));!(j.length>0)||(null==(a=d.other)?void 0:a.components)||(null==(f=d.other)?void 0:f.visible)===!1||h.push((0,cR.jsx)(ly,{id:"other",title:(null==(g=d.other)?void 0:g.title)||e,children:j.map((a,b)=>{var d;let e=c.components[a]||{};return(0,cR.jsx)(ly.Item,{name:a,label:null!=(d=e.label)?d:a,index:b},a)})},"other")),b(h)}},[c.categories,c.components,d,e]),a})(),c=(0,cu.useMemo)(()=>(a.components&&console.warn("The `components` override has been deprecated and renamed to `drawer`"),a.components||a.drawer||"div"),[a]);return(0,cR.jsx)(c,{children:b||(0,cR.jsx)(ly,{id:"all"})})};(0,cQ.$)();var lA=(0,cz.f)("BlocksPlugin",{BlocksPlugin:"_BlocksPlugin_9af19_1"});(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var lB=(a,b,c)=>{var d;let[e,f]=a.split(":");if(!f)return;let g=null==(d=c[e])?void 0:d.data.type,h=g&&g!==cA.U?b.components[g]:b.root;return function(a,b){let c;if("string"!=typeof a)throw Error(`Can't get field definition for path (${a}): Path should be a string`);if(!b||"object"!=typeof b)return;let d=a.split(/\.|\[\d+\]/).filter(Boolean),e=b;for(let a=0;a<d.length;a++){if(c=e[d[a]],a===d.length-1)return c;if(!c||("object"!==c.type||!c.objectFields)&&("array"!==c.type||!c.arrayFields))return;"object"===c.type&&(e=c.objectFields),"array"===c.type&&(e=c.arrayFields)}}(f,null==h?void 0:h.fields)},lC={},lD="outline-item",lE=(a,b,c)=>{let d=a.get(b);if(void 0!==d)return d;let e=c();return a.set(b,e),e},lF=(a,b,c,d,e)=>lE(a,`zone:${b}`,()=>kH(c,((a,b,c)=>{var d;if((null==(d=c.zones[a])?void 0:d.type)!=="slot")return lC;let e=lB(a,b,c.nodes);return(null==e?void 0:e.type)!=="slot"?lC:{allow:e.allow,disallow:e.disallow}})(b,d,e))),lG=(a,b)=>c=>{let d,e,f,g;if(c.type!==lD)return!1;let h=c.data,i=a.outlineStore.getState().acceptCache,{config:j,state:k}=a.appStore.getState(),l=k.indexes,m="row"===b.kind?b.itemId:b.zoneCompound.split(":")[0];return d=h.itemId,e=l.nodes,!lE(i,`subtree:${m}`,()=>{var a;return m===d||((null==(a=e[m])?void 0:a.path)||[]).some(a=>a.split(":")[0]===d)})&&("zone"===b.kind?lF(i,b.zoneCompound,h.componentType,j,l):lF(i,b.zoneCompound,h.componentType,j,l)||(f=b.itemId,g=h.componentType,lE(i,`childZones:${f}`,()=>Object.keys(l.zones).some(a=>a.startsWith(`${f}:`)&&lF(i,a,g,j,l)))))};(0,cQ.$)();var lH=()=>{let a=null,b=null,c=()=>{null!==a&&(clearTimeout(a),a=null),b=null};return(0,cU.f)((d,e)=>({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map,startDrag:a=>d({status:"dragging",draggedRow:a,acceptCache:new Map}),setTarget:(a,b)=>{var c,f,g,h;let i=e();((null==(c=i.indicator)?void 0:c.targetId)!==a.targetId||(null==(f=i.indicator)?void 0:f.position)!==a.position||(null==(g=i.drop)?void 0:g.zone)!==b.zone||(null==(h=i.drop)?void 0:h.index)!==b.index)&&d({indicator:a,drop:b})},clearTarget:()=>{(null!==e().indicator||null!==e().drop)&&d({indicator:null,drop:null})},scheduleExpand:(f,g)=>{b===f||e().tempExpandedIds.has(f)||(c(),b=f,d({expandCandidateId:f}),a=setTimeout(()=>{a=null,b=null,d(a=>({tempExpandedIds:new Set(a.tempExpandedIds).add(f),expandCandidateId:null})),g()},600))},cancelPendingExpand:()=>{c(),null!==e().expandCandidateId&&d({expandCandidateId:null})},endDrag:()=>{c(),d({status:"dropping",indicator:null,drop:null,expandCandidateId:null})},reset:()=>{c(),d({status:"idle",draggedRow:null,tempExpandedIds:new Set,expandCandidateId:null,indicator:null,drop:null,acceptCache:new Map})}}))},lI=(0,cu.createContext)(lH()),lJ=()=>(0,cu.useContext)(lI),lK=({kind:a,zoneCompound:b})=>{let c=(0,cO.jG)(),d=lJ(),e=`${a}:${b}`,{ref:f}=h0({id:e,type:"outline-zone",accept:(0,cu.useMemo)(()=>lG({appStore:c,outlineStore:d},{kind:"zone",zoneCompound:b}),[c,d,b]),collisionDetector:jF,data:{kind:"zone",zoneCompound:b}}),g=jq(lI,a=>{var b;return(null==(b=a.indicator)?void 0:b.targetId)===e});return(0,cu.useMemo)(()=>({isDropTarget:g,ref:f}),[g,f])};(0,cQ.$)(),(0,cQ.$)();var lL=(0,cz.f)("DropLine",{DropLine:"_DropLine_eyz3q_2","DropLine--top":"_DropLine--top_eyz3q_12","DropLine--bottom":"_DropLine--bottom_eyz3q_16","DropLine--outset":"_DropLine--outset_eyz3q_20"}),lM=({edge:a,outset:b})=>(0,cR.jsx)("div",{className:lL({top:"top"===a,bottom:"bottom"===a,outset:!!b})});(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var lN=(...a)=>[...a].filter(Boolean).join(" ");(0,cQ.$)();var lO=(0,cz.f)("LayerTree",{"LayerTree-helper":"_LayerTree-helper_1m7e4_2","LayerTree-helperRoot":"_LayerTree-helperRoot_1m7e4_11"}),lP=({zoneCompound:a})=>{let{ref:b,isDropTarget:c}=lK({kind:"empty",zoneCompound:a}),d=(0,cO.mP)("outline-empty"),[e]=a.split(":"),f=e===cA.U;return(0,cR.jsxs)("li",{className:lN(lO("helper"),f?lO("helperRoot"):void 0),"data-puck-drop-target":c||void 0,ref:b,children:[d,c&&(0,cR.jsx)(lM,{edge:"top"})]})};(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var lQ=(0,cz.f)("LayerActions",{LayerActions:"_LayerActions_d90t9_2","LayerActions--visible":"_LayerActions--visible_d90t9_18"}),lR=({node:a,visible:b})=>{let c=(0,cO.mm)(a=>a.dispatch),d=lJ(),e=(0,cO.mm)(cT(b=>{let c=(0,cP.n)({index:a.index,zone:a.zoneCompound},b.state),d=b.permissions.getPermissions({item:c});return{delete:d.delete,duplicate:d.duplicate}})),f=(0,cO.mP)("outline-item-duplicate"),g=(0,cO.mP)("outline-item-delete"),h=(0,cu.useCallback)(b=>{b.stopPropagation(),"idle"===d.getState().status&&c({type:"remove",index:a.index,zone:a.zoneCompound})},[c,d,a]),i=(0,cu.useCallback)(b=>{b.stopPropagation(),"idle"===d.getState().status&&c({type:"duplicate",sourceIndex:a.index,sourceZone:a.zoneCompound})},[c,d,a.index,a.zoneCompound]);return e.delete||e.duplicate?(0,cR.jsxs)("div",{className:lQ({visible:b}),children:[e.duplicate&&(0,cR.jsx)(cO.eu,{onClick:i,title:f,type:"button",children:(0,cR.jsx)(cO._0,{})}),e.delete&&(0,cR.jsx)(cO.eu,{onClick:h,title:g,type:"button",children:(0,cR.jsx)(cO.Me,{})})]}):null},lS=(0,cz.f)("Layer",{Layer:"_Layer_onfgu_1","Layer-inner":"_Layer-inner_onfgu_8","Layer--isSortable":"_Layer--isSortable_onfgu_18","Layer-content":"_Layer-content_onfgu_22","Layer-clickable":"_Layer-clickable_onfgu_29","Layer-caret":"_Layer-caret_onfgu_57","Layer--containsZone":"_Layer--containsZone_onfgu_68","Layer-title":"_Layer-title_onfgu_76","Layer-name":"_Layer-name_onfgu_85","Layer-icon":"_Layer-icon_onfgu_91","Layer-zones":"_Layer-zones_onfgu_101","Layer--isExpanded":"_Layer--isExpanded_onfgu_106","Layer--isSelected":"_Layer--isSelected_onfgu_115","Layer--isExpandCandidate":"_Layer--isExpandCandidate_onfgu_138","Layer--isDragSource":"_Layer--isDragSource_onfgu_143"}),lT=(0,cu.forwardRef)(function({dataIndex:a,depth:b,isSelected:c,node:d,selectedId:e},f){let g=(0,cO.mm)(a=>a.dispatch),h=(0,cO.mm)(a=>{var b,c;return null!=(c=null==(b=a.state.ui.itemExpanded)?void 0:b[d.itemId])&&c}),i=jq(ko,a=>a.hoveringComponent===d.itemId),j=(0,cO.mm)(a=>{var b;let c=(0,cP.n)({index:d.index,zone:d.zoneCompound},a.state);return null==(b=a.permissions.getPermissions({item:c}))?void 0:b.drag}),{indicatorPosition:k,isDragSource:l,isExpandCandidate:m,isTempExpanded:n,rowRef:o}=(({componentType:a,index:b,itemId:c,zoneCompound:d})=>{let e=(0,cO.jG)(),f=lJ(),g=(0,cu.useMemo)(()=>lG({appStore:e,outlineStore:f},{kind:"row",itemId:c,zoneCompound:d}),[e,f,c,d]),{handleRef:h,ref:i,isDragSource:j}=iR({id:c,index:b,group:d,type:lD,accept:g,data:{kind:"row",itemId:c,zoneCompound:d,index:b,componentType:a},collisionPriority:1,collisionDetector:(0,cu.useMemo)(()=>jI("y"),[]),transition:{duration:0},plugins:a=>[...a,gX.configure({feedback:"clone",dropAnimation:null})]}),{indicatorPosition:k,isExpandCandidate:l,isTempExpanded:m}=jq(lI,a=>{var b;return{indicatorPosition:(null==(b=a.indicator)?void 0:b.targetId)===c?a.indicator.position:null,isExpandCandidate:a.expandCandidateId===c,isTempExpanded:a.tempExpandedIds.has(c)}});return{rowRef:(0,cu.useCallback)(a=>{i(a),h(a)},[i,h]),isDragSource:j,indicatorPosition:k,isExpandCandidate:l,isTempExpanded:m}})({componentType:d.componentType,index:d.index,itemId:d.itemId,zoneCompound:d.zoneCompound}),p=(0,cu.useContext)(ko),q=lJ(),r=(0,cO.mP)("outline-item-collapse"),s=(0,cO.mP)("outline-item-expand"),t=d.childZones.length>0,u=(0,cu.useCallback)(a=>{g({type:"setUi",ui:{itemSelector:a}})},[g]),v=h||n,w=1!==d.childZones.length;return(0,cR.jsxs)("li",{ref:f,className:lS({containsZone:t,isDragSource:l,isExpandCandidate:m,isExpanded:v,isHovering:i,isSelected:c,isSortable:j}),"data-index":a,"data-puck-layer-tree-id":d.itemId,children:[null!==k&&(0,cR.jsx)(lM,{edge:"before"===k?"top":"bottom",outset:!0}),(0,cR.jsxs)("div",{className:lS("inner"),ref:o,onMouseEnter:a=>{a.stopPropagation(),"idle"===q.getState().status&&p.setState({hoveringComponent:d.itemId})},onMouseLeave:a=>{a.stopPropagation(),p.setState({hoveringComponent:null})},children:[(0,cR.jsx)("div",{className:lS("caret"),children:(0,cR.jsx)(cO.eu,{onClick:a=>{a.stopPropagation(),"idle"===q.getState().status&&g({type:"setUi",ui:a=>{var b;let c=(0,cQ.X)({},a.itemExpanded);return(null==(b=a.itemExpanded)?void 0:b[d.itemId])?delete c[d.itemId]:c[d.itemId]=!0,{itemExpanded:c}},recordHistory:!1})},title:h?r:s,type:"button",children:(0,cR.jsx)(cO.E4,{})})}),(0,cR.jsxs)("div",{className:lS("content"),children:[(0,cR.jsx)("button",{type:"button",className:lS("clickable"),onClick:()=>{"idle"===q.getState().status&&(u({index:d.index,zone:d.zoneCompound}),p.getState().scrollToComponent(d.itemId))},children:(0,cR.jsxs)("div",{className:lS("title"),children:[(0,cR.jsx)("div",{className:lS("icon"),children:"Text"===d.componentType||"Heading"===d.componentType?(0,cR.jsx)(cO.sn,{}):(0,cR.jsx)(cO.x3,{})}),(0,cR.jsx)("div",{className:lS("name"),children:d.label})]})}),(0,cR.jsx)(lR,{node:d,visible:i&&!l})]})]}),t&&v&&d.childZones.map(a=>(0,cR.jsx)("div",{className:lS("zones"),children:(0,cR.jsx)(l0,{depth:w?b+1:b,selectedId:e,tree:w?a:(0,cQ.s)((0,cQ.X)({},a),{label:void 0})})},a.zoneCompound))]})});(0,cQ.$)();var lU={LayerTree:"_LayerTree_o5tyt_1","LayerTree--nested":"_LayerTree--nested_o5tyt_12"},lV=(0,cz.f)("LayerTree",lU),lW=({depth:a,selectedId:b,tree:c})=>(0,cR.jsxs)("ul",{className:lV({nested:a>0}),children:[0===c.items.length&&(0,cR.jsx)(lP,{zoneCompound:c.zoneCompound}),c.items.map(c=>(0,cR.jsx)(lT,{depth:a,isSelected:b===c.itemId,node:c,selectedId:b},c.itemId))]});(0,cQ.$)();var lX=(0,cz.f)("LayerTree",lU),lY=new Map,lZ=({depth:a,selectedId:b,tree:c})=>{let d=(0,cu.useRef)(null),e=jq(lI,a=>{var b;return(null==(b=a.draggedRow)?void 0:b.zoneCompound)===c.zoneCompound?a.draggedRow.index:null}),f=(0,cu.useCallback)(a=>{let b=i2(a);return null===e||b.includes(e)||(b.push(e),b.sort((a,b)=>a-b)),b},[e]),g=je({count:c.items.length,estimateSize:a=>{var b,d;return b=c.items[a].itemId,null!=(d=lY.get(b))?d:32},getItemKey:a=>c.items[a].itemId,getScrollElement:()=>(a=>{var b;let c=null!=(b=null==a?void 0:a.parentElement)?b:null;for(;c;){let{overflow:a,overflowY:b}=getComputedStyle(c);if([a,b].some(a=>/auto|scroll/.test(a)))return c;c=c.parentElement}return null})(d.current),overscan:8,rangeExtractor:f,measureElement:a=>{let b=Math.ceil(a.getBoundingClientRect().height),c=a.dataset.puckLayerTreeId;return c&&(b<=0||lY.set(c,b)),b||32}}),h=g.getVirtualItems(),i=g.getTotalSize(),j=[],k=0,l=-1;h.forEach(d=>{let e=c.items[d.index],f=Math.max(d.start-k,0);f>0&&j.push((0,cR.jsx)("li",{"aria-hidden":"true",style:{height:`${f}px`}},`gap:${c.zoneCompound}:${l}:${d.index}`)),j.push((0,cR.jsx)(lT,{dataIndex:d.index,depth:a,isSelected:b===e.itemId,node:e,ref:g.measureElement,selectedId:b},e.itemId)),k=d.end,l=d.index});let m=Math.max(i-k,0);return m>0&&j.push((0,cR.jsx)("li",{"aria-hidden":"true",style:{height:`${m}px`}},`gap:${c.zoneCompound}:${l}:end`)),(0,cR.jsxs)("ul",{className:lX({nested:a>0}),ref:d,children:[0===c.items.length&&(0,cR.jsx)(lP,{zoneCompound:c.zoneCompound}),j]})};(0,cQ.$)();var l$=(0,cz.f)("LayerTree",{"LayerTree-zoneTitle":"_LayerTree-zoneTitle_fvhlh_2","LayerTree-zoneIcon":"_LayerTree-zoneIcon_fvhlh_19"}),l_=({label:a,zoneCompound:b})=>{let{ref:c,isDropTarget:d}=lK({kind:"label",zoneCompound:b});return(0,cR.jsxs)("div",{className:l$("zoneTitle"),"data-puck-drop-target":d||void 0,ref:c,children:[(0,cR.jsx)("div",{className:l$("zoneIcon"),children:(0,cR.jsx)(cO.DV,{})}),a,d&&(0,cR.jsx)(lM,{edge:"bottom"})]})},l0=({depth:a,selectedId:b,tree:c})=>{let d=0===a&&c.items.length>=25;return(0,cR.jsxs)(cR.Fragment,{children:[c.label&&(0,cR.jsx)(l_,{label:c.label,zoneCompound:c.zoneCompound}),d?(0,cR.jsx)(lZ,{depth:a,selectedId:b,tree:c}):(0,cR.jsx)(lW,{depth:a,selectedId:b,tree:c})]})};(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var l1=a=>{if("u"<typeof document)return;let b=document.getElementById("preview-frame");a?null==b||b.setAttribute("data-puck-outline-dragging","true"):null==b||b.removeAttribute("data-puck-outline-dragging")},l2=(a,b,c)=>{var d,e,f;let g=c.outlineDndStore.getState(),h=g.draggedRow;if(!h)return;let i=a.operation.target;if(!i){g.cancelPendingExpand(),g.clearTarget();return}let j=i.data;if("zone"===j.kind){g.cancelPendingExpand(),g.setTarget({targetId:i.id.toString(),position:"inside"},{zone:j.zoneCompound,index:0});return}let{config:k,state:l}=c.appStore.getState(),m=l.indexes;if(lF(g.acceptCache,j.zoneCompound,h.componentType,k,m)){let a=null==(d=b.collisionObserver.collisions[0])?void 0:d.data,c=jJ(null==a?void 0:a.direction);g.setTarget({targetId:i.id.toString(),position:c},{zone:j.zoneCompound,index:jK({position:c,sourceIndex:h.index,targetIndex:j.index,isSameZone:j.zoneCompound===h.zoneCompound})})}else g.clearTarget();let n=!!(null==(e=l.ui.itemExpanded)?void 0:e[j.itemId])||g.tempExpandedIds.has(j.itemId),o=(f=j.itemId,Object.keys(m.zones).some(a=>a.startsWith(`${f}:`)));!n&&o?g.scheduleExpand(j.itemId,()=>{requestAnimationFrame(()=>b.collisionObserver.forceUpdate(!0))}):g.cancelPendingExpand()},l3=[],l4=({children:a})=>{let b=(0,cO.jG)(),c=(0,cu.useContext)(ko),[d]=(0,cu.useState)(()=>lH()),e=(0,cO.mm)(a=>{var b,c;return null!=(c=null==(b=a.dnd)?void 0:b.disableOutlineDrag)&&c}),f=jA({mouse:[new he.Distance({value:5})]}),g=(0,cu.useMemo)(()=>({outlineDndStore:d,appStore:b,scrollToComponent:a=>c.getState().scrollToComponent(a)}),[d,b,c]);return(0,cR.jsx)(lI.Provider,{value:d,children:(0,cR.jsx)(hK,{sensors:e?l3:f,onBeforeDragStart:a=>{((a,b)=>{let c=a.operation.source,d=null==c?void 0:c.data;if(!c||!d)return;let e=b.appStore.getState(),f=(0,cP.n)({zone:d.zoneCompound,index:d.index},e.state);f&&e.permissions.getPermissions({item:f}).drag?(b.outlineDndStore.getState().startDrag({itemId:d.itemId,zoneCompound:d.zoneCompound,index:d.index,componentType:d.componentType}),l1(!0),e.dispatch({type:"setUi",ui:{isDragging:!0},recordHistory:!1})):a.preventDefault()})(a,g)},onDragOver:(a,b)=>{a.preventDefault(),l2(a,b,g)},onDragMove:(a,b)=>{l2(a,b,g)},onDragEnd:a=>{((a,b)=>{let{source:c}=a.operation,d=b.outlineDndStore.getState(),e=d.draggedRow,f=a.canceled?null:d.drop,g=b.appStore.getState().dispatch;if(l1(!1),e&&f){var h,i;let a,c,d,j;kO(e.itemId,{zone:e.zoneCompound,index:e.index},{zone:f.zone,index:f.index},b.appStore);let k=f.zone!==e.zoneCompound||f.index!==e.index;g({type:"setUi",ui:{itemSelector:{zone:f.zone,index:f.index},isDragging:!1},recordHistory:k}),h=e.itemId,i=b.scrollToComponent,c=0,d=0,j=()=>{var b;let e=null==(b=ks())?void 0:b.querySelector(`[data-puck-component="${h}"]`),f=e?e.getBoundingClientRect().top:null;(c=f===a?c+1:0,a=f,d+=1,c>=2||d>=60)?i(h):requestAnimationFrame(j)},requestAnimationFrame(j)}else g({type:"setUi",ui:{isDragging:!1},recordHistory:!1});d.endDrag();let j=()=>b.outlineDndStore.getState().reset();if(c&&"idle"!==c.status){let a=dg(()=>{"idle"===c.status&&(j(),null==a||a())})}else j()})(a,g)},children:a})})};(0,cQ.$)(),(0,cQ.$)();var l5=a=>{let b={};return Object.keys(a).forEach(a=>{let[c]=a.split(":");c&&(b[c]||(b[c]=[]),b[c].push(a))}),b},l6=({config:a,label:b,nodes:c,zoneCompound:d,zones:e,zonesByParent:f=l5(e),componentFallbackLabel:g})=>{var h,i;return{items:(null!=(i=null==(h=e[d])?void 0:h.contentIds)?i:[]).map((b,g)=>(({config:a,itemId:b,index:c,nodes:d,zoneCompound:e,zones:f,zonesByParent:g,componentFallbackLabel:h})=>{var i,j,k,l;let m=d[b],n=null!=(j=null==(i=null==m?void 0:m.data.type)?void 0:i.toString())?j:h,o=null!=(l=null==(k=a.components[n])?void 0:k.label)?l:n;return{childZones:(g[b]||[]).map(b=>l6({config:a,nodes:d,zoneCompound:b,zones:f,zonesByParent:g})),componentType:n,index:c,itemId:b,label:o,zoneCompound:e}})({config:a,itemId:b,index:g,nodes:c,zoneCompound:d,zones:e,zonesByParent:f})),label:((a,b,c,d)=>{var e,f;if(void 0!==d)return d;let[,g]=a.split(":");if(g)return null!=(f=null==(e=lB(a,c,b))?void 0:e.label)?f:g})(d,c,a,b),zoneCompound:d}},l7=(0,cz.f)("LayerTreeRoot",{LayerTreeRoot:"_LayerTreeRoot_1qowl_1"}),l8=({selectedId:a,trees:b})=>{let c=(0,cO.mm)(a=>{var b,c;return null!=(c=null==(b=a.dnd)?void 0:b.disableOutlineDrag)&&c});return(0,cR.jsx)(l4,{children:(0,cR.jsx)("div",{className:l7(),"data-puck-dnd-disabled":c||void 0,children:b.map(b=>(0,cR.jsx)(l0,{depth:0,selectedId:a,tree:b},b.zoneCompound))})})};(0,cQ.$)(),(0,cQ.$)();var l9=(0,cz.f)("CollapseAll",{CollapseAll:"_CollapseAll_1r4cy_1","CollapseAll-icon":"_CollapseAll-icon_1r4cy_5","CollapseAll--visible":"_CollapseAll--visible_1r4cy_10"}),ma=function({className:a}){let b=(0,cO.mm)(a=>{var b;return Object.keys(null!=(b=a.state.ui.itemExpanded)?b:{}).length>0}),c=(0,cO.mm)(a=>a.dispatch),d=(0,cO.mP)("outline-header-collapseall");return(0,cR.jsx)("div",{className:lN(l9({visible:b}),a),children:(0,cR.jsx)(cO.eu,{title:d,onClick:()=>{c({type:"setUi",ui:{itemExpanded:{}}})},children:(0,cR.jsx)(cO.VQ,{className:l9("icon")})})})};(0,cQ.$)(),(0,cQ.$)();var mb=(0,cz.f)("OutlineHeader",{OutlineHeader:"_OutlineHeader_ntv8r_1"}),mc=({children:a,title:b})=>{let c=(0,cO.mP)("outline-header-title");return(0,cR.jsxs)("div",{className:mb(),children:[(0,cR.jsx)(j2,{rank:"2",size:"xs",children:null!=c?c:b}),a]})};(0,cQ.$)();var md=(0,cz.f)("OutlineWrapper",{OutlineWrapper:"_OutlineWrapper_b9ln0_1","OutlineWrapper-collapseAll":"_OutlineWrapper-collapseAll_b9ln0_9","OutlineWrapper-layers":"_OutlineWrapper-layers_b9ln0_15"}),me=({children:a})=>(0,cR.jsx)("div",{className:md(),children:a}),mf=()=>{let a=(0,cO.mm)(a=>a.overrides.outline),b=(0,cO.mm)(a=>a.config),c=(0,cO.mm)(a=>a.state.indexes.nodes),d=(0,cO.mm)(a=>a.state.indexes.zones),e=(0,cO.mm)(a=>{var b;return(null==(b=a.selectedItem)?void 0:b.props.id)||null}),f=(0,cO.mP)("label-component"),g=(0,cO.mm)(cT(a=>Object.keys(a.state.indexes.zones).filter(a=>"root"===a.split(":")[0]))),h=(0,cu.useMemo)(()=>g.map(a=>l6({config:b,label:1===g.length?"":a.split(":")[1],nodes:c,zoneCompound:a,zones:d,componentFallbackLabel:f})),[b,c,g,d,f]),i=(0,cu.useMemo)(()=>a||me,[a]);return(0,cR.jsxs)(i,{children:[(0,cR.jsx)(mc,{children:(0,cR.jsx)(ma,{className:md("collapseAll")})}),(0,cR.jsx)("div",{className:md("layers"),children:(0,cR.jsx)(l8,{selectedId:e,trees:h})})]})};(0,cQ.$)();var mg=(0,cz.f)("OutlinePlugin",{OutlinePlugin:"_OutlinePlugin_1ylsc_1"});(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var mh=(0,cz.f)("Breadcrumbs",{Breadcrumbs:"_Breadcrumbs_8c6w5_1","Breadcrumbs-breadcrumbLabel":"_Breadcrumbs-breadcrumbLabel_8c6w5_7","Breadcrumbs-breadcrumb":"_Breadcrumbs-breadcrumb_8c6w5_7"}),mi=({children:a,numParents:b=1})=>{let c,d,e,f,g,h,i=(0,cO.mm)(a=>a.setUi),j=(c=(0,cO.mm)(a=>{var b;return null==(b=a.selectedItem)?void 0:b.props.id}),d=(0,cO.mm)(a=>a.config),e=(0,cO.mm)(a=>{var b;return null==(b=a.state.indexes.nodes[c])?void 0:b.path}),f=(0,cO.jG)(),g=(0,cO.mP)("label-page"),h=(0,cO.mP)("label-component"),(0,cu.useMemo)(()=>{let a=(null==e?void 0:e.map(a=>{var b,c,e,i;let[j]=a.split(":");if("root"===j)return{label:(null==(b=null==d?void 0:d.root)?void 0:b.label)||g,selector:null};let k=f.getState().state.indexes.nodes[j],l=k.path[k.path.length-1],m=((null==(c=f.getState().state.indexes.zones[l])?void 0:c.contentIds)||[]).indexOf(j);return{label:k?null!=(i=null==(e=d.components[k.data.type])?void 0:e.label)?i:k.data.type:h,selector:k?{index:m,zone:k.path[k.path.length-1]}:null}}))||[];return b?a.slice(a.length-b):a},[e,b,g,h]));return(0,cR.jsxs)("div",{className:mh(),children:[j.map((a,b)=>(0,cR.jsxs)("div",{className:mh("breadcrumb"),children:[(0,cR.jsx)("button",{type:"button",className:mh("breadcrumbLabel"),onClick:()=>i({itemSelector:a.selector}),children:a.label}),(0,cR.jsx)(cO.E4,{size:16})]},b)),a]})};(0,cQ.$)(),(0,cQ.$)();var mj=(0,cz.f)("PuckFields",{PuckFields:"_PuckFields_wnj25_1","PuckFields--isLoading":"_PuckFields--isLoading_wnj25_6","PuckFields-loadingOverlay":"_PuckFields-loadingOverlay_wnj25_10","PuckFields-loadingOverlayInner":"_PuckFields-loadingOverlayInner_wnj25_25","PuckFields-field":"_PuckFields-field_wnj25_32","PuckFields--wrapFields":"_PuckFields--wrapFields_wnj25_36"}),mk=({children:a})=>(0,cR.jsx)(cR.Fragment,{children:a}),ml=({fieldName:a})=>{let b=(0,cO.mm)(b=>b.fields.fields[a]),c=(0,cO.mm)(b=>((b.selectedItem?b.selectedItem.readOnly:b.state.data.root.readOnly)||{})[a]),d=(0,cO.mm)(c=>b?c.selectedItem?`${c.selectedItem.props.id}_${b.type}_${a}`:`root_${b.type}_${a}`:null),e=(0,cO.mm)(cT(a=>{let{selectedItem:b,permissions:c}=a;return b?c.getPermissions({item:b}):c.getPermissions({root:!0})})),f=(0,cO.jG)(),g=(0,cu.useCallback)((b,c)=>(0,cQ._)(null,null,function*(){let{dispatch:d,state:e,selectedItem:g,resolveComponentData:h}=f.getState(),{data:i,ui:j}=e,{itemSelector:k}=j,l=i.root.props||i.root,m=g?g.props:l,n=(0,cQ.s)((0,cQ.X)({},m),{[a]:b});if(g&&k){let a=yield h((0,cQ.s)((0,cQ.X)({},g),{props:n}),"replace"),b=kM(f.getState().state,g.props.id);if(!b)return;d({type:"replace",destinationIndex:b.index,destinationZone:b.zone||cA.i,data:a.node,ui:c});return}d(i.root.props?{type:"replaceRoot",root:(yield h((0,cQ.s)((0,cQ.X)({},i.root),{props:n}),"replace")).node,ui:(0,cQ.X)((0,cQ.X)({},j),c),recordHistory:!0}:{type:"setData",data:{root:n}})}),[a]),{visible:h=!0}=null!=b?b:{},i=(0,cu.useContext)(jr.ctx);return((0,cu.useEffect)(()=>f.subscribe(b=>{var c;return null==(c=b.getCurrentData().props)?void 0:c[a]},b=>{i.setState({[a]:b})}),[f,i]),b&&d&&h&&"slot"!==b.type)?(0,cR.jsx)("div",{className:mj("field"),children:(0,cR.jsx)(kj,{field:b,name:a,id:d,readOnly:!e.edit||c,onChange:g})},d):null},mm=(0,cu.memo)(({fieldName:a})=>{let b=(0,cO.jG)(),c=(0,cu.useMemo)(()=>{var c;let d=null==(c=b.getState().getCurrentData().props)?void 0:c[a];return{[a]:d}},[]);return(0,cR.jsx)(jr.Provider,{value:c,children:(0,cR.jsx)(ml,{fieldName:a})})}),mn=(0,cu.memo)(({wrapFields:a=!0})=>{let b=(0,cO.mm)(a=>a.overrides),c=(0,cO.mm)(a=>{var b,c;let d=a.selectedItem?null==(b=a.componentState[a.selectedItem.props.id])?void 0:b.loadingCount:null==(c=a.componentState.root)?void 0:c.loadingCount;return(null!=d?d:0)>0}),d=(0,cO.mm)(cT(a=>a.state.ui.itemSelector)),e=(0,cO.mm)(a=>{var b;return null==(b=a.selectedItem)?void 0:b.props.id}),f=(0,cO.jG)();(0,cO.Yy)(f,e);let g=(0,cO.mm)(a=>a.fields.loading),h=(0,cO.mm)(cT(a=>a.fields.id===e?Object.keys(a.fields.fields):[])),i=g||c,j=(0,cu.useMemo)(()=>b.fields||mk,[b]);return(0,cR.jsxs)("form",{className:mj({wrapFields:a}),onSubmit:a=>{a.preventDefault()},children:[(0,cR.jsx)(j,{isLoading:i,itemSelector:d,children:h.map(a=>(0,cR.jsx)(mm,{fieldName:a},a))}),i&&(0,cR.jsx)("div",{className:mj("loadingOverlay"),children:(0,cR.jsx)("div",{className:mj("loadingOverlayInner"),children:(0,cR.jsx)(cO.cD,{size:16})})})]})});(0,cQ.$)();var mo=(0,cz.f)("FieldsPlugin",{FieldsPlugin:"_FieldsPlugin_18cj3_1","FieldsPlugin-header":"_FieldsPlugin-header_18cj3_7"}),mp=()=>{let a=(0,cO.mP)("label-page"),b=(0,cO.mm)(a=>{var b,c;let d=a.selectedItem;return d?null!=(c=null==(b=a.config.components[d.type])?void 0:b.label)?c:d.type:null});return null!=b?b:a};(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var mq=`@import "https://rsms.me/inter/inter.css";

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
}`,mr="data-puck-style-source",ms="puck",mt=new WeakMap,mu=(a,b,c=!1)=>{let d=a.head;if(d){if(b.parentElement!==d)return void(c?d.prepend(b):d.append(b));c&&d.firstChild!==b&&d.prepend(b),c||d.lastChild===b||d.append(b)}},mv=a=>(null==a?void 0:a.getAttribute(mr))===ms,mw=a=>{var b;let c=(b=null==a?void 0:a.document)?b:"u">typeof document?document:void 0;(0,cu.useInsertionEffect)(()=>{if(!a||!c)return;let b=(a=>{let b=mt.get(a);if(b)return b;let c=new Map;return mt.set(a,c),c})(c),d=b.get(a.id);if(d)d.count=d.count+1,d.el.textContent!==a.cssText&&(d.el.textContent=a.cssText),mu(c,d.el,a.prepend);else{let d=((a,b,c,d=!1)=>{let e=a.createElement("style");return e.setAttribute(mr,ms),e.setAttribute("data-puck-style-id",b),e.textContent=c,mu(a,e,d),e})(c,a.id,a.cssText,a.prepend);b.set(a.id,{count:1,el:d})}return()=>{let c=b.get(a.id);c&&(c.count=c.count-1,c.count<=0&&(c.el.remove(),b.delete(a.id)))}},[null==a?void 0:a.cssText,null==a?void 0:a.id,null==a?void 0:a.prepend,null==a?void 0:a.document,c])},mx=null,my='style, link[rel="stylesheet"]',mz="data-puck-style-mirror",mA=a=>!(!a.matches(my)||mv(a))&&("STYLE"!==a.tagName||!!a.innerHTML.trim()),mB=a=>Array.from(document.styleSheets).find(b=>b.ownerNode.href===a.href),mC=(a,b)=>{let c=a.attributes;(null==c?void 0:c.length)>0&&Array.from(c).forEach(a=>{b.setAttribute(a.name,a.value)})},mD=({children:a,debug:b=!1,onStylesLoaded:c=()=>null,syncHostStyles:d=!0})=>{let{document:e,window:f}=mF();return mw(e?{cssText:'/* styles/color.css */\n@layer puck-tokens {\n  :root {\n    --puck-color-rose-01: #4a001c;\n    --puck-color-rose-02: #670833;\n    --puck-color-rose-03: #87114c;\n    --puck-color-rose-04: #a81a66;\n    --puck-color-rose-05: #bc5089;\n    --puck-color-rose-06: #cc7ca5;\n    --puck-color-rose-07: #d89aba;\n    --puck-color-rose-08: #e3b8cf;\n    --puck-color-rose-09: #efd6e3;\n    --puck-color-rose-10: #f6eaf1;\n    --puck-color-rose-11: #faf4f8;\n    --puck-color-rose-12: #fef8fc;\n    --puck-color-azure-01: #00175d;\n    --puck-color-azure-02: #002c77;\n    --puck-color-azure-03: #014292;\n    --puck-color-azure-04: #0158ad;\n    --puck-color-azure-05: #3479be;\n    --puck-color-azure-06: #6499cf;\n    --puck-color-azure-07: #88b0da;\n    --puck-color-azure-08: #abc7e5;\n    --puck-color-azure-09: #cfdff0;\n    --puck-color-azure-10: #e7eef7;\n    --puck-color-azure-11: #f3f6fb;\n    --puck-color-azure-12: #f7faff;\n    --puck-color-green-01: #002000;\n    --puck-color-green-02: #043604;\n    --puck-color-green-03: #084e08;\n    --puck-color-green-04: #0c680c;\n    --puck-color-green-05: #1d882f;\n    --puck-color-green-06: #2faa53;\n    --puck-color-green-07: #56c16f;\n    --puck-color-green-08: #7dd78b;\n    --puck-color-green-09: #b8e8bf;\n    --puck-color-green-10: #ddf3e0;\n    --puck-color-green-11: #eff8f0;\n    --puck-color-green-12: #f3fcf4;\n    --puck-color-yellow-01: #211000;\n    --puck-color-yellow-02: #362700;\n    --puck-color-yellow-03: #4c4000;\n    --puck-color-yellow-04: #645a00;\n    --puck-color-yellow-05: #877614;\n    --puck-color-yellow-06: #ab9429;\n    --puck-color-yellow-07: #bfac4e;\n    --puck-color-yellow-08: #d4c474;\n    --puck-color-yellow-09: #e6deb1;\n    --puck-color-yellow-10: #f3efd9;\n    --puck-color-yellow-11: #f9f7ed;\n    --puck-color-yellow-12: #fcfaf0;\n    --puck-color-red-01: #4c0000;\n    --puck-color-red-02: #6a0a10;\n    --puck-color-red-03: #8a1422;\n    --puck-color-red-04: #ac1f35;\n    --puck-color-red-05: #bf5366;\n    --puck-color-red-06: #ce7e8e;\n    --puck-color-red-07: #d99ca8;\n    --puck-color-red-08: #e4b9c2;\n    --puck-color-red-09: #efd7db;\n    --puck-color-red-10: #f6eaec;\n    --puck-color-red-11: #faf4f5;\n    --puck-color-red-12: #fff9fa;\n    --puck-color-grey-01: #181818;\n    --puck-color-grey-02: #292929;\n    --puck-color-grey-03: #404040;\n    --puck-color-grey-04: #5a5a5a;\n    --puck-color-grey-05: #767676;\n    --puck-color-grey-06: #949494;\n    --puck-color-grey-07: #ababab;\n    --puck-color-grey-08: #c3c3c3;\n    --puck-color-grey-09: #dcdcdc;\n    --puck-color-grey-10: #efefef;\n    --puck-color-grey-11: #f5f5f5;\n    --puck-color-grey-12: #fafafa;\n    --puck-color-black: #000000;\n    --puck-color-white: #ffffff;\n  }\n}\n\n/* styles/tokens.css */\n@layer puck-tokens {\n  :root {\n    --puck-color-surface: var(--puck-color-white);\n    --puck-color-surface-muted: var(--puck-color-grey-11);\n    --puck-color-surface-subtle: var(--puck-color-grey-12);\n    --puck-color-surface-inverse: var(--puck-color-grey-01);\n    --puck-color-border: var(--puck-color-grey-09);\n    --puck-color-border-hover: var(--puck-color-grey-05);\n    --puck-color-border-muted: var(--puck-color-grey-10);\n    --puck-color-border-inverse: var(--puck-color-grey-05);\n    --puck-color-text: var(--puck-color-black);\n    --puck-color-text-secondary: var(--puck-color-grey-04);\n    --puck-color-text-muted: var(--puck-color-grey-05);\n    --puck-color-text-subtle: var(--puck-color-grey-07);\n    --puck-color-text-inverse: var(--puck-color-white);\n    --puck-opacity-text-inverse: 0.75;\n    --puck-color-interactive: var(--puck-color-azure-04);\n    --puck-color-interactive-hover: var(--puck-color-azure-03);\n    --puck-color-interactive-active: var(--puck-color-azure-02);\n    --puck-color-interactive-subtle: var(--puck-color-azure-10);\n    --puck-color-interactive-soft: var(--puck-color-azure-11);\n    --puck-color-interactive-soft-hover: var(--puck-color-azure-12);\n    --puck-color-interactive-neutral-hover: var(--puck-color-grey-10);\n    --puck-color-interactive-inverse-hover: var(--puck-color-azure-06);\n    --puck-color-interactive-inverse-active: var(--puck-color-azure-07);\n    --puck-color-focus-ring: var(--puck-color-azure-05);\n    --puck-color-selection-bg: color-mix( in srgb, var(--puck-color-azure-09) 30%, transparent );\n    --puck-color-selection-border: var(--puck-color-azure-08);\n    --puck-color-line-placeholder: var(--puck-color-azure-06);\n    --puck-color-highlight: var(--puck-color-rose-07);\n    --puck-color-bg-disabled: var(--puck-color-grey-07);\n    --puck-color-text-disabled: var(--puck-color-grey-03);\n    --puck-color-overlay-backdrop: color-mix( in srgb, var(--puck-color-black) 75%, transparent );\n    --puck-space-1: 4px;\n    --puck-space-2: 8px;\n    --puck-space-3: 12px;\n    --puck-space-4: 16px;\n    --puck-space-5: 24px;\n    --puck-space-chrome-gutter: var(--puck-space-4);\n    --puck-radius-none: 0;\n    --puck-radius-xs: 2px;\n    --puck-radius-s: 3px;\n    --puck-radius-m: 4px;\n    --puck-radius-l: 8px;\n    --puck-radius-pill: 30px;\n    --puck-radius-round: 100%;\n    --puck-border-width-hairline: 0.5px;\n    --puck-border-width-regular: 1px;\n    --puck-border-width-focus: 2px;\n    --puck-border-width-strong: 4px;\n    --puck-duration-fast: 50ms;\n    --puck-duration-medium: 150ms;\n    --puck-duration-slow: 250ms;\n    --puck-ease-exit: ease-in;\n    --puck-ease-emphasized: ease-in-out;\n    --puck-ease-entrance: ease-out;\n    --puck-font-weight-regular: 400;\n    --puck-font-weight-medium: 500;\n    --puck-font-weight-semibold: 600;\n    --puck-font-weight-bold: 700;\n    --puck-font-weight-heavy: 800;\n    --puck-letter-spacing-ui: 0.05ch;\n    --puck-letter-spacing-heading: 0.08ch;\n    --puck-icon-size-xs: 14px;\n    --puck-icon-size-s: 16px;\n    --puck-icon-size-m: 18px;\n    --puck-icon-size-l: 24px;\n    --puck-space-m-unitless: 24;\n    --puck-user-sidebar-left-width: var(--puck-sidebar-width);\n    --puck-user-sidebar-right-width: var(--puck-sidebar-width);\n    --puck-slot-min-empty-height: 128px;\n    --puck-line-placeholder-width: 2px;\n  }\n}\n\n/* styles/typography.css */\n@layer puck-tokens {\n  :root {\n    --puck-font-size-scale-base-unitless: 12;\n    --puck-font-size-xxxs-unitless: 12;\n    --puck-font-size-xxs-unitless: 14;\n    --puck-font-size-xs-unitless: 16;\n    --puck-font-size-s-unitless: 18;\n    --puck-font-size-m-unitless: 21;\n    --puck-font-size-l-unitless: 24;\n    --puck-font-size-xl-unitless: 28;\n    --puck-font-size-xxl-unitless: 36;\n    --puck-font-size-xxxl-unitless: 48;\n    --puck-font-size-xxxxl-unitless: 56;\n    --puck-font-size-xxxs: calc( 1rem * var(--puck-font-size-xxxs-unitless) / 16 );\n    --puck-font-size-xxs: calc(1rem * var(--puck-font-size-xxs-unitless) / 16);\n    --puck-font-size-xs: calc(1rem * var(--puck-font-size-xs-unitless) / 16);\n    --puck-font-size-s: calc(1rem * var(--puck-font-size-s-unitless) / 16);\n    --puck-font-size-m: calc(1rem * var(--puck-font-size-m-unitless) / 16);\n    --puck-font-size-l: calc(1rem * var(--puck-font-size-l-unitless) / 16);\n    --puck-font-size-xl: calc(1rem * var(--puck-font-size-xl-unitless) / 16);\n    --puck-font-size-xxl: calc(1rem * var(--puck-font-size-xxl-unitless) / 16);\n    --puck-font-size-xxxl: calc( 1rem * var(--puck-font-size-xxxl-unitless) / 16 );\n    --puck-font-size-xxxxl: calc( 1rem * var(--puck-font-size-xxxxl-unitless) / 16 );\n    --puck-font-size-base: var(--puck-font-size-xs);\n    --puck-line-height-reset: 1;\n    --puck-line-height-xs: calc( var(--puck-space-m-unitless) / var(--puck-font-size-m-unitless) );\n    --puck-line-height-s: calc( var(--puck-space-m-unitless) / var(--puck-font-size-s-unitless) );\n    --puck-line-height-m: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xs-unitless) );\n    --puck-line-height-l: calc( var(--puck-space-m-unitless) / var(--puck-font-size-xxs-unitless) );\n    --puck-line-height-xl: calc( var(--puck-space-m-unitless) / var(--puck-font-size-scale-base-unitless) );\n    --puck-line-height-base: var(--puck-line-height-m);\n    --puck-fallback-font-stack:\n      -apple-system,\n      BlinkMacSystemFont,\n      Segoe UI,\n      Helvetica Neue,\n      sans-serif,\n      Apple Color Emoji,\n      Segoe UI Emoji,\n      Segoe UI Symbol;\n    --puck-font-family: Inter, var(--puck-fallback-font-stack);\n    --puck-font-family-monospaced:\n      ui-monospace,\n      "Cascadia Code",\n      "Source Code Pro",\n      Menlo,\n      Consolas,\n      "DejaVu Sans Mono",\n      monospace;\n  }\n  @supports (font-variation-settings: normal) {\n    :root {\n      --puck-font-family: InterVariable, var(--puck-fallback-font-stack);\n    }\n  }\n}\n\n/* bundle/core.css */\n:root {\n  --_puck-styles-loaded: "true";\n}\n#frame-root {\n  height: 1px;\n  min-height: 100vh;\n}\n[data-puck-entry] {\n  position: relative;\n  z-index: 0;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/ActionBar/styles.module.css/#css-module-data */\n._ActionBar_5vdfr_1 {\n  align-items: center;\n  cursor: default;\n  display: flex;\n  width: auto;\n  padding-top: var(--puck-actionbar-space-y, var(--puck-space-1));\n  padding-bottom: var(--puck-actionbar-space-y, var(--puck-space-1));\n  padding-inline-start: var(--puck-actionbar-space-x, 0);\n  padding-inline-end: var(--puck-actionbar-space-x, 0);\n  border-radius: var(--puck-actionbar-radius, var(--puck-radius-l));\n  background: var(--puck-actionbar-color-bg, var(--puck-color-surface-inverse));\n  color: var(--puck-color-text-inverse);\n  font-family: var(--puck-font-family);\n  min-height: 26px;\n}\n._ActionBar-label_5vdfr_17 {\n  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));\n  font-size: var(--puck-actionbar-font-size, var(--puck-font-size-xxxs));\n  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));\n  font-weight: var(--puck-font-weight-medium);\n  padding-inline-start: var(--puck-space-2);\n  padding-inline-end: var(--puck-space-2);\n  margin-inline-start: var(--puck-space-1);\n  margin-inline-end: var(--puck-space-1);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n._ActionBarAction_5vdfr_30 + ._ActionBar-label_5vdfr_17 {\n  padding-inline-start: 0;\n}\n._ActionBar-label_5vdfr_17 + ._ActionBarAction_5vdfr_30 {\n  margin-inline-start: calc(var(--puck-space-1) * -1);\n}\n._ActionBar-group_5vdfr_38 {\n  align-items: center;\n  border-inline-start: var(--puck-border-width-hairline) solid var(--puck-actionbar-color-separator, var(--puck-color-border-inverse));\n  display: flex;\n  height: 100%;\n  padding-inline-start: var(--puck-space-1);\n  padding-inline-end: var(--puck-space-1);\n}\n._ActionBar-group_5vdfr_38:first-of-type {\n  border-inline-start: 0;\n}\n._ActionBar-group_5vdfr_38:empty {\n  display: none;\n}\n._ActionBarAction_5vdfr_30 {\n  background: transparent;\n  border: none;\n  color: var(--puck-actionbar-color-text, var(--puck-color-text-inverse));\n  cursor: pointer;\n  padding: var(--puck-actionbar-action-space, 6px);\n  margin-inline-start: var(--puck-space-1);\n  margin-inline-end: var(--puck-space-1);\n  border-radius: var(--puck-radius-m);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: var(--puck-actionbar-opacity-text, var(--puck-opacity-text-inverse));\n  transition: color var(--puck-duration-fast) var(--puck-ease-exit), opacity var(--puck-duration-fast) var(--puck-ease-exit);\n}\n._ActionBarAction--disabled_5vdfr_74 {\n  cursor: auto;\n  color: var( --puck-actionbar-color-action-disabled, var(--puck-color-text-inverse) );\n  opacity: var(--puck-actionbar-opacity-action-disabled, 0.54);\n}\n._ActionBarAction_5vdfr_30 svg {\n  max-width: none !important;\n}\n._ActionBarAction_5vdfr_30:focus-visible {\n  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);\n  outline-offset: calc(var(--puck-border-width-focus) * -1);\n}\n@media (hover: hover) and (pointer: fine) {\n  ._ActionBarAction_5vdfr_30:hover:not(._ActionBarAction--disabled_5vdfr_74) {\n    color: var( --puck-actionbar-color-action-hover, var(--puck-color-interactive-inverse-hover) );\n    opacity: 1;\n    transition: none;\n  }\n}\n._ActionBarAction_5vdfr_30:active:not(._ActionBarAction--disabled_5vdfr_74),\n._ActionBarAction--active_5vdfr_104 {\n  color: var( --puck-actionbar-color-action-active, var(--puck-color-interactive-inverse-active) );\n  opacity: 1;\n  transition: none;\n}\n._ActionBar-group_5vdfr_38 * {\n  margin: 0;\n}\n._ActionBar-separator_5vdfr_117 {\n  background: var( --puck-actionbar-color-separator, var(--puck-color-border-inverse) );\n  margin-inline: var(--puck-space-1);\n  width: var( --puck-border-width-hairline );\n  height: 100%;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/DraggableComponent/styles.module.css/#css-module-data */\n._DraggableComponent_1627v_1 {\n  position: absolute;\n  pointer-events: none;\n}\n._DraggableComponent-overlayWrapper_1627v_6 {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  pointer-events: none;\n  box-sizing: border-box;\n  z-index: 1;\n}\n._DraggableComponent-overlay_1627v_6 {\n  cursor: pointer;\n  height: 100%;\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;\n  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1);\n  width: 100%;\n}\n._DraggableComponent_1627v_1:focus-visible > ._DraggableComponent-overlayWrapper_1627v_6 {\n  outline: var(--puck-border-width-regular) solid var(--puck-color-focus-ring);\n}\n._DraggableComponent-loadingOverlay_1627v_38 {\n  background: var(--puck-color-surface);\n  color: var(--puck-color-text);\n  border-radius: var(--puck-radius-m);\n  display: flex;\n  padding: var(--puck-space-2);\n  top: var(--puck-space-2);\n  right: var(--puck-space-2);\n  position: absolute;\n  z-index: 1;\n  pointer-events: all;\n  box-sizing: border-box;\n  opacity: 0.8;\n  z-index: 1;\n}\n._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {\n  background: var( --puck-slot-component-color-overlay, var(--puck-color-selection-bg) );\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var( --puck-slot-component-color-overlay-border, var(--puck-color-selection-border) ) solid;\n}\n._DraggableComponent--isSelected_1627v_72 > ._DraggableComponent-overlayWrapper_1627v_6 > ._DraggableComponent-overlay_1627v_6 {\n  outline-color: var( --puck-slot-component-color-border-selected, var(--puck-color-selection-border) );\n}\n._DraggableComponent_1627v_1:has(._DraggableComponent--hover_1627v_54 > ._DraggableComponent-overlayWrapper_1627v_6) > ._DraggableComponent-overlayWrapper_1627v_6 {\n  display: none;\n}\n._DraggableComponent-actionsOverlay_1627v_89 {\n  position: sticky;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 2;\n}\n._DraggableComponent--isSelected_1627v_72 ._DraggableComponent-actionsOverlay_1627v_89 {\n  opacity: 1;\n  pointer-events: auto;\n}\n._DraggableComponent-actions_1627v_89 {\n  position: absolute;\n  width: auto;\n  cursor: grab;\n  display: flex;\n  box-sizing: border-box;\n  transform-origin: right top;\n  min-height: 36px;\n}\n._DraggableComponent-actionsAction_1627v_111 {\n  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/Drawer/styles.module.css/#css-module-data */\n._Drawer_1n90m_1 {\n  display: flex;\n  flex-direction: column;\n  font-family: var(--puck-font-family);\n  gap: var(--puck-space-3);\n}\n._Drawer-draggable_1n90m_8 {\n  position: relative;\n}\n._Drawer-draggableBg_1n90m_12 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n._DrawerItem-draggable_1n90m_22 {\n  background: var(--puck-drawer-item-color-bg, var(--puck-color-surface));\n  color: var(--puck-drawer-item-color-text, var(--puck-color-text));\n  cursor: grab;\n  padding: var(--puck-drawer-item-space, var(--puck-space-3));\n  display: flex;\n  border: var(--puck-drawer-item-border-width, var(--puck-border-width-regular)) var(--puck-drawer-item-color-border, var(--puck-color-border)) solid;\n  border-radius: var(--puck-drawer-item-radius, var(--puck-radius-m));\n  font-size: var(--puck-drawer-item-font-size, var(--puck-font-size-xxs));\n  justify-content: space-between;\n  align-items: center;\n  transition: background-color var(--puck-duration-fast) var(--puck-ease-exit), color var(--puck-duration-fast) var(--puck-ease-exit);\n}\n._DrawerItem--disabled_1n90m_38 ._DrawerItem-draggable_1n90m_22 {\n  background: var(--puck-color-surface-muted);\n  color: var(--puck-color-text-muted);\n  cursor: not-allowed;\n}\n._DrawerItem_1n90m_22:focus-visible {\n  outline: 0;\n}\n._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:focus-visible ._DrawerItem-draggable_1n90m_22 {\n  border-radius: var(--puck-radius-m);\n  outline: var(--puck-border-width-focus) solid var(--puck-color-focus-ring);\n  outline-offset: var(--puck-border-width-focus);\n}\n@media (hover: hover) and (pointer: fine) {\n  ._Drawer_1n90m_1:not(._Drawer--isDraggingFrom_1n90m_48) ._DrawerItem_1n90m_22:not(._DrawerItem--disabled_1n90m_38) ._DrawerItem-draggable_1n90m_22:hover {\n    background-color: var( --puck-drawer-item-color-bg-hover, var(--puck-color-interactive-soft-hover) );\n    color: var( --puck-drawer-item-color-text-hover, var(--puck-color-interactive) );\n    transition: none;\n  }\n}\n._DrawerItem-name_1n90m_72 {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/DropZone/styles.module.css/#css-module-data */\n._DropZone_wc2ks_1 {\n  position: relative;\n  height: 100%;\n  min-height: var(--puck-slot-min-empty-height);\n  outline-offset: calc(var(--puck-slot-border-width, var(--puck-border-width-focus)) * -1);\n  width: 100%;\n}\n._DropZone--hasChildren_wc2ks_11 {\n  min-height: 0;\n}\n._DropZone_wc2ks_1:empty {\n  min-height: var(--puck-slot-min-empty-height);\n}\n[data-puck-entry]:not([data-puck-dragging]) ._DropZone_wc2ks_1 {\n  transition: min-height var(--puck-duration-medium) var(--puck-ease-exit);\n}\n._DropZone--isAreaSelected_wc2ks_24,\n._DropZone--hoveringOverArea_wc2ks_25:not(._DropZone--isRootZone_wc2ks_25) {\n  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone_wc2ks_1:empty {\n  background: var(--puck-slot-color-bg, var(--puck-color-selection-bg));\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone-item_wc2ks_39 {\n  position: relative;\n}\n._DropZone-linePlaceholder_wc2ks_43 {\n  background: var( --puck-slot-component-color-placeholder, var(--puck-color-line-placeholder) );\n  border-radius: calc(var(--puck-line-placeholder-width, 2px) / 2);\n  pointer-events: none;\n  position: absolute;\n  z-index: 1;\n}\n._DropZone-hitbox_wc2ks_55 {\n  position: absolute;\n  bottom: calc(var(--puck-space-3) * -1);\n  height: var(--puck-space-5);\n  width: 100%;\n  z-index: 1;\n}\n[data-puck-dragging] ._DropZone--isEnabled_wc2ks_63 {\n  outline: var(--puck-slot-border-width, var(--puck-border-width-focus)) var(--puck-slot-border-style, dashed) var(--puck-slot-color-border, var(--puck-color-selection-border));\n}\n._DropZone_wc2ks_1 > *:not([data-puck-component]):not([data-puck-line-placeholder]) {\n  opacity: 0;\n}\nbody:has(._DropZone--isAnimating_wc2ks_74:empty) [data-puck-overlay] {\n  opacity: 0 !important;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/InlineTextField/styles.module.css/#css-module-data */\n._InlineTextField_104qp_1 {\n  cursor: text;\n  display: inline-block;\n  white-space: pre-wrap;\n  text-decoration: inherit;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1 {\n  cursor: none;\n  caret-color: transparent;\n}\n[data-dnd-dragging] ._InlineTextField_104qp_1::selection {\n  display: none;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/Loader/styles.module.css/#css-module-data */\n@keyframes _loader-animation_1w5zn_1 {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(0.8);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n._Loader_1w5zn_13 {\n  background: transparent;\n  border-radius: var(--puck-radius-round);\n  border: var(--puck-border-width-focus) solid currentColor;\n  border-bottom-color: transparent;\n  display: inline-block;\n  animation: _loader-animation_1w5zn_1 1s 0s infinite linear;\n  animation-fill-mode: both;\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/styles.module.css/#css-module-data */\n._RichTextMenu_1ve2j_1 {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n._RichTextMenu--form_1ve2j_7 {\n  border-top-left-radius: var(--puck-field-radius, var(--puck-radius-m));\n  border-top-right-radius: var(--puck-field-radius, var(--puck-radius-m));\n  padding: var(--puck-field-richtext-menu-space-y, 6px) var(--puck-field-richtext-menu-space-x, 6px);\n  background-color: var( --puck-field-richtext-menu-color-bg, var(--puck-color-surface-subtle) );\n  position: relative;\n  scrollbar-width: none;\n  overflow-x: auto;\n}\n._RichTextMenu-group_1ve2j_21 {\n  display: flex;\n  align-items: space-between;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding-inline: 6px;\n  gap: 2px;\n  position: relative;\n}\n._RichTextMenu-group_1ve2j_21:first-of-type {\n  padding-left: 0;\n}\n._RichTextMenu-group_1ve2j_21:last-of-type {\n  padding-right: 0;\n}\n._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 {\n  color: var(--puck-color-text-inverse);\n  gap: 0px;\n  flex-wrap: nowrap;\n}\n._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {\n  border-left: var(--puck-border-width-regular) solid var( --puck-field-richtext-menu-color-separator, var(--puck-color-border-muted) );\n}\n._RichTextMenu--inline_1ve2j_39 ._RichTextMenu-group_1ve2j_21 + ._RichTextMenu-group_1ve2j_21 {\n  border-left: var(--puck-border-width-hairline) solid var(--puck-color-border-inverse);\n}\n\n/* css-module:/home/runner/work/puck/puck/packages/core/components/RichTextMenu/components/Control/styles.module.css/#css-module-data */\n._Control_id4pm_1 .lucide {\n  height: var(--puck-icon-size-m);\n  width: var(--puck-icon-size-m);\n}\n._Control--inline_id4pm_6 .lucide {\n  height: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n  width: var(--puck-actionbar-action-size, var(--puck-icon-size-s));\n}\n\n/* components/DraggableComponent/styles.css */\n[data-puck-component] * {\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-component] {\n  cursor: grab;\n  pointer-events: auto !important;\n  user-select: none;\n  -webkit-user-select: none;\n}\n[data-puck-dropzone] {\n  pointer-events: auto !important;\n}\n[data-puck-disabled] {\n  cursor: pointer;\n}\n[data-dnd-placeholder]:not([data-puck-line-drag] *) {\n  background: var( --puck-slot-component-color-placeholder, var(--puck-color-azure-06) ) !important;\n  border: none !important;\n  color: transparent !important;\n  opacity: 0.3 !important;\n  outline: none !important;\n  transition: none !important;\n}\n[data-dnd-placeholder]:not([data-puck-line-drag] *) *,\n[data-dnd-placeholder]:not([data-puck-line-drag] *)::after,\n[data-dnd-placeholder]:not([data-puck-line-drag] *)::before {\n  opacity: 0 !important;\n}\n[data-puck-line-drag] [data-dnd-placeholder] {\n  opacity: 0.4 !important;\n  outline: none !important;\n  transition: none !important;\n}\n[data-puck-line-drag] [data-dnd-dragging][data-puck-component] {\n  opacity: 0.9 !important;\n}\n[data-dnd-dragging][data-puck-component] {\n  pointer-events: none !important;\n  outline: var( --puck-slot-component-border-width, var(--puck-border-width-focus) ) var(--puck-slot-component-color-border-dragging, var(--puck-color-azure-09)) solid !important;\n  outline-offset: calc(var(--puck-slot-component-border-width, var(--puck-border-width-focus)) * -1) !important;\n}\n[data-dnd-dragging][data-puck-component] > :first-child {\n  margin-top: 0 !important;\n}\n[data-dnd-dragging][data-puck-component] > :last-child {\n  margin-bottom: 0 !important;\n}\n\n/* lib/overlay-portal/styles.css */\n[data-puck-overlay-portal],\n[data-puck-overlay-portal] * {\n  pointer-events: auto !important;\n}\n[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal],\n[data-puck-entry][data-puck-dragging] [data-puck-overlay-portal] * {\n  pointer-events: none !important;\n}\n[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:hover {\n  outline: 2px var(--puck-color-azure-09, #cfdff0) dashed;\n  outline-offset: 2px;\n}\n[data-puck-entry][data-puck-preview-mode=edit] [data-puck-overlay-portal]:focus-within {\n  outline: 2px var(--puck-color-azure-07, #88b0da) dashed;\n  outline-offset: 2px;\n}',document:e,id:"iframe-styles"}:null),(0,cu.useEffect)(()=>{let a;if(!f||!e)return()=>{};let g=[],h={},i=()=>{g.forEach(({mirror:a})=>{a.remove()}),g=[],Array.from(e.head.querySelectorAll(`[${mz}="true"]`)).forEach(a=>{a.remove()}),Object.keys(h).forEach(a=>{delete h[a]})},j=a=>g.findIndex(b=>b.original===a),k=(a,c=!1)=>(0,cQ._)(null,null,function*(){let d;if("LINK"===a.nodeName&&c){(d=document.createElement("style")).type="text/css";let c=mB(a);c||(yield new Promise(b=>{let c=()=>{b(),a.removeEventListener("load",c)};a.addEventListener("load",c)}),c=mB(a));let e=(a=>{if(a)try{return Array.from(a.cssRules).map(a=>a.cssText).join("")}catch(b){console.warn("Access to stylesheet %s is denied. Ignoring…",a.href)}return""})(c);if(!e){b&&console.warn("Tried to load styles for link element, but couldn't find them. Skipping...");return}d.innerHTML=e,d.setAttribute("data-href",a.getAttribute("href"))}else d=a.cloneNode(!0);return d.setAttribute(mz,"true"),d}),l=new MutationObserver(a=>{a.forEach(a=>{"childList"===a.type&&(a.addedNodes.forEach(a=>{if(a.nodeType===Node.TEXT_NODE||a.nodeType===Node.ELEMENT_NODE){let c=a.nodeType===Node.TEXT_NODE?a.parentElement:a;c&&mA(c)&&setTimeout(()=>(0,cQ._)(null,null,function*(){let a=j(c);if(a>-1){b&&console.log("Tried to add an element that was already mirrored. Updating instead..."),g[a].mirror.innerText=c.innerText;return}let d=yield k(c);if(!d)return;let f=(0,jf.default)(d.outerHTML);if(h[f]){b&&console.log("iframe already contains element that is being mirrored. Skipping...");return}h[f]=!0,e.head.append(d),g.push({original:c,mirror:d}),b&&console.log(`Added style node ${c.outerHTML}`)}),0)}}),a.removedNodes.forEach(a=>{if(a.nodeType===Node.TEXT_NODE||a.nodeType===Node.ELEMENT_NODE){let c=a.nodeType===Node.TEXT_NODE?a.parentElement:a;c&&c.matches(my)&&!mv(c)&&setTimeout(()=>(a=>{var c,d;let e=j(a);if(-1===e){b&&console.log("Tried to remove an element that did not exist. Skipping...");return}let f=(0,jf.default)(a.outerHTML);null==(d=null==(c=g[e])?void 0:c.mirror)||d.remove(),delete h[f],b&&console.log(`Removed style node ${a.outerHTML}`)})(c),0)}}))})});if(!d)return c(),()=>{l.disconnect(),i()};let m=f.parent.document,n=(a=[],m.querySelectorAll(my).forEach(b=>{mA(b)&&a.push(b)}),a),o=[],p=0;return mC(m.getElementsByTagName("html")[0],e.documentElement),mC(m.getElementsByTagName("body")[0],e.body),Promise.all(n.map((a,b)=>(0,cQ._)(null,null,function*(){if("LINK"===a.nodeName){let b=a.href;if(o.indexOf(b)>-1)return;o.push(b)}let b=yield k(a);if(b)return g.push({original:a,mirror:b}),b}))).then(a=>{let b=a.filter(a=>void 0!==a);b.forEach(a=>{a.onload=()=>{(p+=1)>=b.length&&c()},a.onerror=()=>{let d=a instanceof HTMLLinkElement?a.href:void 0;console.warn(`AutoFrame couldn't load a stylesheet${d?`: ${d}`:""}. This can happen if the parent document's stylesheet is blocked by the iframe's CSP, returns a non-2xx status, or fails to reach the network.`),(p+=1)>=b.length&&c()}}),e.head.querySelectorAll(`[${mz}="true"]`).forEach(a=>{a.remove()}),e.head.append(...b),b.forEach(a=>{"STYLE"===a.nodeName&&(p+=1)}),p>=b.length&&c(),l.observe(m.head,{childList:!0,subtree:!0}),b.forEach(a=>{h[(0,jf.default)(a.outerHTML)]=!0})}),()=>{l.disconnect(),i()}},[d]),(0,cR.jsx)(cR.Fragment,{children:a})},mE=(0,cu.createContext)({}),mF=()=>(0,cu.useContext)(mE);function mG(a){var{children:b,className:c,debug:d,id:e,onReady:f=()=>{},onNotReady:g=()=>{},frameRef:h,syncHostStyles:i=!0}=a,j=(0,cQ.H)(a,["children","className","debug","id","onReady","onNotReady","frameRef","syncHostStyles"]);let[k,l]=(0,cu.useState)(!1),[m,n]=(0,cu.useState)({}),[o,p]=(0,cu.useState)(),[q,r]=(0,cu.useState)(!1);return(0,cu.useEffect)(()=>{k&&r(!i)},[k,i]),(0,cu.useEffect)(()=>{var a;if(h.current){let b=h.current.contentDocument,c=h.current.contentWindow;n({document:b||void 0,window:c||void 0}),p(null==(a=h.current.contentDocument)?void 0:a.getElementById("frame-root")),b&&c&&q?f():g()}},[h,k,q]),(0,cR.jsx)("iframe",(0,cQ.s)((0,cQ.X)({},j),{className:c,id:e,srcDoc:'<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',ref:h,onLoad:()=>{l(!0)},children:(0,cR.jsx)(mE.Provider,{value:m,children:k&&o&&(0,cR.jsx)(mD,{debug:d,onStylesLoaded:()=>r(!0),syncHostStyles:i,children:(0,hq.createPortal)(b,o)})})}))}mG.displayName="AutoFrame",(0,cQ.$)();var mH=cC(lj),mI=(0,cu.memo)(()=>{var a,b,c,d;let e=(0,cO.mm)(cT(a=>{var b;return null==(b=a.state.indexes.nodes.root)?void 0:b.flatData.props})),f=(0,cO.mm)(a=>a.config),g=(0,cO.mm)(a=>a.metadata),h=k4(f,(0,cu.useMemo)(()=>{let a=(0,cA.f)({props:null!=e?e:{}});return(0,cA.B)(a)},[e]),mH),i=(0,cu.useMemo)(()=>(0,cQ.s)((0,cQ.X)({},h),{children:(0,cR.jsx)(lp,{zone:cA.i}),puck:{renderDropZone:lp,isEditing:!0,dragRef:null,metadata:g},editMode:!0}),[h,g]),j=cJ(null!=(b=null==(a=f.root)?void 0:a.fields)?b:{},i);return(null==(c=f.root)?void 0:c.render)?null==(d=f.root)?void 0:d.render((0,cQ.s)((0,cQ.X)((0,cQ.X)({},i),j),{id:"puck-root"})):(0,cR.jsx)(cR.Fragment,{children:i.children})});mI.displayName="EditorPage",(0,cQ.$)();var mJ=(0,cz.f)("PuckPreview",{PuckPreview:"_PuckPreview_zbic3_1","PuckPreview-frame":"_PuckPreview-frame_zbic3_6"}),mK=({id:a="puck-preview"})=>{let b,c,d,e,f=(0,cO.mm)(a=>a.dispatch),g=(0,cO.mm)(a=>a.config),h=(0,cO.mm)(a=>a.setStatus),i=(0,cO.mm)(a=>a.iframe),j=(0,cO.mm)(a=>a.overrides),k=(0,cO.mm)(a=>a.metadata),l=(0,cO.mm)(a=>"edit"===a.state.ui.previewMode?null:a.state.data),m=(0,cu.useMemo)(()=>j.iframe,[j]),n=(0,cu.useRef)(null);b=(0,cO.mm)(a=>a.status),(0,cu.useEffect)(()=>{if(n.current&&"READY"===b){var a;let b=n.current,c=a=>{let c=new kK("pointermove",(0,cQ.s)((0,cQ.X)({},a),{bubbles:!0,cancelable:!1,clientX:a.clientX,clientY:a.clientY,pointerId:a.pointerId,pointerType:a.pointerType,isPrimary:a.isPrimary,originalTarget:a.target}));b.dispatchEvent(c)},d=()=>{var a;null==(a=b.contentDocument)||a.removeEventListener("pointermove",c)};return d(),null==(a=b.contentDocument)||a.addEventListener("pointermove",c,{capture:!0}),()=>{d()}}},[b]),c=(0,cO.mm)(a=>a.state.ui.previewMode),d=(0,cO.mm)(a=>a.status),e=(0,cO.mm)(a=>a.iframe.enabled),(0,cu.useEffect)(()=>{var a,b;let d=e?null==(b=null==(a=n.current)?void 0:a.contentDocument)?void 0:b.querySelector("[data-puck-entry]"):n.current;null==d||d.setAttribute("data-puck-preview-mode",c)},[c,d,e]);let o=l?(0,cR.jsx)(ls,{data:l,config:g,metadata:k}):(0,cR.jsx)(mI,{});return(0,cu.useEffect)(()=>{i.enabled||h("READY")},[i.enabled]),(0,cR.jsx)("div",{className:mJ(),id:a,"data-puck-preview":!0,onClick:a=>{let b=a.target;b.hasAttribute("data-puck-component")||b.hasAttribute("data-puck-dropzone")||f({type:"setUi",ui:{itemSelector:null}})},children:i.enabled?(0,cR.jsx)(mG,{id:"preview-frame",className:mJ("frame"),"data-rfd-iframe":!0,syncHostStyles:i.syncHostStyles,onReady:()=>{h("READY")},onNotReady:()=>{h("MOUNTED")},frameRef:n,children:(0,cR.jsx)(mE.Consumer,{children:({document:a})=>m?(0,cR.jsx)(m,{document:a,children:o}):o})}):(0,cR.jsx)("div",{id:"preview-frame",className:mJ("frame"),ref:n,"data-puck-entry":!0,children:o})})};(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var mL={Puck:"_Puck_tzaxg_19","Puck-portal":"_Puck-portal_tzaxg_31",PuckLayout:"_PuckLayout_tzaxg_36","PuckLayout-inner":"_PuckLayout-inner_tzaxg_40","Puck--hidePlugins":"_Puck--hidePlugins_tzaxg_73","PuckLayout--mounted":"_PuckLayout--mounted_tzaxg_78","PuckLayout--mobilePanelHeightToggle":"_PuckLayout--mobilePanelHeightToggle_tzaxg_82","PuckLayout--leftSideBarVisible":"_PuckLayout--leftSideBarVisible_tzaxg_82","PuckLayout--isExpanded":"_PuckLayout--isExpanded_tzaxg_90","PuckLayout--mobilePanelHeightMinContent":"_PuckLayout--mobilePanelHeightMinContent_tzaxg_110","PuckLayout--rightSideBarVisible":"_PuckLayout--rightSideBarVisible_tzaxg_137","PuckLayout-mounted":"_PuckLayout-mounted_tzaxg_156","PuckLayout-nav":"_PuckLayout-nav_tzaxg_197","PuckLayout-header":"_PuckLayout-header_tzaxg_217",PuckPluginTab:"_PuckPluginTab_tzaxg_231","PuckPluginTab--visible":"_PuckPluginTab--visible_tzaxg_237","PuckPluginTab-body":"_PuckPluginTab-body_tzaxg_243"};(0,cQ.$)();var mM=({children:a})=>(0,cR.jsx)(cR.Fragment,{children:a});(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var mN=(0,cz.f)("MenuBar",{MenuBar:"_MenuBar_1hxnj_1","MenuBar--menuOpen":"_MenuBar--menuOpen_1hxnj_14","MenuBar-inner":"_MenuBar-inner_1hxnj_29","MenuBar-history":"_MenuBar-history_1hxnj_45"});function mO({menuOpen:a=!1,renderHeaderActions:b,setMenuOpen:c}){let d=(0,cO.mm)(a=>a.history.back),e=(0,cO.mm)(a=>a.history.forward),f=(0,cO.mm)(a=>a.history.hasFuture()),g=(0,cO.mm)(a=>a.history.hasPast()),h=(0,cO.mP)("header-undo"),i=(0,cO.mP)("header-redo");return(0,cR.jsx)("div",{className:mN({menuOpen:a}),onClick:a=>{var b;let d=a.target;!window.matchMedia("(min-width: 638px)").matches&&"A"===d.tagName&&(null==(b=d.getAttribute("href"))?void 0:b.startsWith("#"))&&c(!1)},children:(0,cR.jsxs)("div",{className:mN("inner"),children:[(0,cR.jsxs)("div",{className:mN("history"),children:[(0,cR.jsx)(cO.eu,{type:"button",title:h,disabled:!g,onClick:d,children:(0,cR.jsx)(cO.Oo,{size:21})}),(0,cR.jsx)(cO.eu,{type:"button",title:i,disabled:!f,onClick:e,children:(0,cR.jsx)(cO.wj,{size:21})})]}),(0,cR.jsx)(cR.Fragment,{children:b&&b()})]})})}(0,cQ.$)();var mP=(0,cz.f)("PuckHeader",{PuckHeader:"_PuckHeader_c2nei_1","PuckHeader--hidePlugins":"_PuckHeader--hidePlugins_c2nei_21","PuckHeader-inner":"_PuckHeader-inner_c2nei_26","PuckHeader-toggle":"_PuckHeader-toggle_c2nei_46","PuckHeader-rightSideBarToggle":"_PuckHeader-rightSideBarToggle_c2nei_52","PuckHeader-leftSideBarToggle":"_PuckHeader-leftSideBarToggle_c2nei_53","PuckHeader-title":"_PuckHeader-title_c2nei_64","PuckHeader-path":"_PuckHeader-path_c2nei_68","PuckHeader-tools":"_PuckHeader-tools_c2nei_75","PuckHeader-menuButton":"_PuckHeader-menuButton_c2nei_81","PuckHeader--menuOpen":"_PuckHeader--menuOpen_c2nei_86"}),mQ=(0,cu.memo)(({hidePlugins:a})=>{let{onPublish:b,renderHeader:c,renderHeaderActions:d,headerTitle:e,headerPath:f,iframe:g}=no(),h=(0,cO.mm)(a=>a.dispatch),i=(0,cO.jG)(),j=(0,cu.useMemo)(()=>c?(console.warn("`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"),a=>{var{actions:b}=a,d=(0,cQ.H)(a,["actions"]);let e=(0,cO.mm)(a=>a.state);return(0,cR.jsx)(c,(0,cQ.s)((0,cQ.X)({},d),{dispatch:h,state:e,children:b}))}):mM,[c]),k=(0,cu.useMemo)(()=>d?(console.warn("`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."),a=>{let b=(0,cO.mm)(a=>a.state);return(0,cR.jsx)(d,(0,cQ.s)((0,cQ.X)({},a),{dispatch:h,state:b}))}):mM,[d]),l=(0,cO.mm)(a=>a.overrides.header||j),m=(0,cO.mm)(a=>a.overrides.headerActions||k),[n,o]=(0,cu.useState)(!1),p=(0,cO.mm)(a=>{var b,c;return null!=(c=(null==(b=a.state.indexes.nodes.root)?void 0:b.data).props.title)?c:""}),q=(0,cO.mm)(a=>a.state.ui.leftSideBarVisible),r=(0,cO.mm)(a=>a.state.ui.rightSideBarVisible),s=(0,cu.useCallback)(a=>{let b=window.matchMedia("(min-width: 638px)").matches,c="left"===a?q:r;h({type:"setUi",ui:(0,cQ.X)({[`${a}SideBarVisible`]:!c},b?{}:{["left"===a?"rightSideBarVisible":"leftSideBarVisible"]:!1})})},[h,q,r]),t=(0,cO.mP)("header-publish"),u=(0,cO.mP)("label-page"),v=(0,cO.mP)("header-toggle-leftsidebar"),w=(0,cO.mP)("header-toggle-rightsidebar"),x=(0,cO.mP)("header-toggle-menubar");return(0,cR.jsx)(l,{actions:(0,cR.jsx)(cR.Fragment,{children:(0,cR.jsx)(m,{children:(0,cR.jsx)(jk,{onClick:()=>{let a=i.getState().state.data;b&&b(a)},icon:(0,cR.jsx)(cO.LG,{size:"14px"}),children:t})})}),children:(0,cR.jsx)("header",{className:mP({leftSideBarVisible:q,rightSideBarVisible:r,hidePlugins:a}),children:(0,cR.jsxs)("div",{className:mP("inner"),children:[(0,cR.jsxs)("div",{className:mP("toggle"),children:[(0,cR.jsx)("div",{className:mP("leftSideBarToggle"),children:(0,cR.jsx)(cO.eu,{type:"button",onClick:()=>{s("left")},title:v,children:(0,cR.jsx)(cO.hf,{focusable:"false"})})}),(0,cR.jsx)("div",{className:mP("rightSideBarToggle"),children:(0,cR.jsx)(cO.eu,{type:"button",onClick:()=>{s("right")},title:w,children:(0,cR.jsx)(cO.jv,{focusable:"false"})})})]}),(0,cR.jsx)("div",{className:mP("title"),children:(0,cR.jsxs)(j2,{rank:"2",size:"xs",children:[e||p||u,f&&(0,cR.jsxs)(cR.Fragment,{children:[" ",(0,cR.jsx)("code",{className:mP("path"),children:f})]})]})}),(0,cR.jsxs)("div",{className:mP("tools"),children:[(0,cR.jsx)("div",{className:mP("menuButton"),children:(0,cR.jsx)(cO.eu,{type:"button",onClick:()=>o(!n),title:x,children:n?(0,cR.jsx)(cO.Fh,{focusable:"false"}):(0,cR.jsx)(cO.N8,{focusable:"false"})})}),(0,cR.jsx)(mO,{dispatch:h,onPublish:b,menuOpen:n,renderHeaderActions:()=>(0,cR.jsx)(m,{children:(0,cR.jsx)(jk,{onClick:()=>{let a=i.getState().state.data;b&&b(a)},icon:(0,cR.jsx)(cO.LG,{size:"14px"}),children:t})}),setMenuOpen:o})]})]})})})});(0,cQ.$)(),(0,cQ.$)();var mR=(0,cz.f)("SidebarSection",{SidebarSection:"_SidebarSection_1uv88_1","SidebarSection-title":"_SidebarSection-title_1uv88_12","SidebarSection--noBorderTop":"_SidebarSection--noBorderTop_1uv88_20","SidebarSection-content":"_SidebarSection-content_1uv88_24","SidebarSection-breadcrumbLabel":"_SidebarSection-breadcrumbLabel_1uv88_33","SidebarSection-breadcrumbs":"_SidebarSection-breadcrumbs_1uv88_62","SidebarSection-breadcrumb":"_SidebarSection-breadcrumb_1uv88_33","SidebarSection-heading":"_SidebarSection-heading_1uv88_74","SidebarSection-loadingOverlay":"_SidebarSection-loadingOverlay_1uv88_78"}),mS=({children:a,title:b,background:c,showBreadcrumbs:d,noBorderTop:e,isLoading:f})=>(0,cR.jsxs)("div",{className:mR({noBorderTop:e}),style:{background:c},children:[(0,cR.jsx)("div",{className:mR("title"),children:(0,cR.jsxs)("div",{className:mR("breadcrumbs"),children:[d&&(0,cR.jsx)(mi,{}),(0,cR.jsx)("div",{className:mR("heading"),children:(0,cR.jsx)(j2,{rank:"2",size:"xs",children:b})})]})}),(0,cR.jsx)("div",{className:mR("content"),children:a}),f&&(0,cR.jsx)("div",{className:mR("loadingOverlay"),children:(0,cR.jsx)(cO.cD,{size:32})})]});(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var mT={ViewportControls:"_ViewportControls_v26yb_1","ViewportControls--fullScreen":"_ViewportControls--fullScreen_v26yb_5","ViewportControls-toggleButton":"_ViewportControls-toggleButton_v26yb_14","ViewportControls-actions":"_ViewportControls-actions_v26yb_39","ViewportControls-actionsInner":"_ViewportControls-actionsInner_v26yb_43","ViewportControls--isExpanded":"_ViewportControls--isExpanded_v26yb_67","ViewportControls-divider":"_ViewportControls-divider_v26yb_72","ViewportControls-zoomSelect":"_ViewportControls-zoomSelect_v26yb_79","ViewportControls-zoom":"_ViewportControls-zoom_v26yb_79","ViewportButton-inner":"_ViewportButton-inner_v26yb_110","ViewportButton--isActive":"_ViewportButton--isActive_v26yb_118"},mU={Smartphone:(0,cR.jsx)(cO.Ik,{size:16}),Tablet:(0,cR.jsx)(cO.M2,{size:16}),Monitor:(0,cR.jsx)(cO.im,{size:16}),FullWidth:(0,cR.jsx)(cO.yk,{size:16})},mV=(0,cz.f)("ViewportControls",mT),mW=(0,cz.f)("ViewportButton",mT),mX=({children:a,title:b,onClick:c,isActive:d,disabled:e})=>(0,cR.jsx)("span",{className:mW({isActive:d}),suppressHydrationWarning:!0,children:(0,cR.jsx)(cO.eu,{type:"button",title:b,disabled:e||d,onClick:c,suppressHydrationWarning:!0,children:(0,cR.jsx)("span",{className:mW("inner"),children:a})})}),mY=[{label:"25%",value:.25},{label:"50%",value:.5},{label:"75%",value:.75},{label:"100%",value:1},{label:"125%",value:1.25},{label:"150%",value:1.5},{label:"200%",value:2}],mZ=({viewport:a,isActive:b,onClick:c})=>{var d;let e=(0,cO.mP)("viewport-switch",{label:null!=(d=a.label)?d:""}),f=(0,cO.mP)("viewport-switch-default");return(0,cR.jsx)(mX,{title:a.label?e:f,onClick:c,isActive:b,children:"string"==typeof a.icon?mU[a.icon]||a.icon:a.icon||mU.Smartphone})},m$=({autoZoom:a,zoom:b,onViewportChange:c,onZoom:d,fullScreen:e})=>{var f,g;let h=(0,cO.mm)(a=>a.viewports),i=(0,cO.mm)(a=>a.state.ui.viewports),j=mY.find(b=>b.value===a),k=(0,cO.mP)("viewport-zoom-auto",{zoom:(100*a).toFixed(0)}),l=(0,cu.useMemo)(()=>[...mY,...j?[]:[{value:a,label:k}]].filter(b=>b.value<=a).sort((a,b)=>a.value>b.value?1:-1),[a,k]),[m,n]=(0,cu.useState)(i.current.width);(0,cu.useEffect)(()=>{n(i.current.width)},[i.current]);let[o,p]=(0,cu.useState)(!1),q=(0,cO.mP)("viewport-zoom-out"),r=(0,cO.mP)("viewport-zoom-in"),s=(0,cO.mP)("viewport-toggle-menu");return(0,cR.jsxs)("div",{className:mV({isExpanded:o,fullScreen:e}),suppressHydrationWarning:!0,children:[(0,cR.jsx)("div",{className:mV("actions"),children:(0,cR.jsxs)("div",{className:mV("actionsInner"),children:[h.map((a,b)=>(0,cR.jsx)(mZ,{viewport:a,onClick:()=>{n(a.width),c(a)},isActive:m===a.width},b)),(0,cR.jsx)("div",{className:mV("divider")}),(0,cR.jsx)(mX,{title:q,disabled:b<=(null==(f=l[0])?void 0:f.value),onClick:a=>{a.stopPropagation(),d(l[Math.max(l.findIndex(a=>a.value===b)-1,0)].value)},children:(0,cR.jsx)(cO.v,{size:16})}),(0,cR.jsx)(mX,{title:r,disabled:b>=(null==(g=l[l.length-1])?void 0:g.value),onClick:a=>{a.stopPropagation(),d(l[Math.min(l.findIndex(a=>a.value===b)+1,l.length-1)].value)},children:(0,cR.jsx)(cO.Em,{size:16})}),(0,cR.jsxs)("div",{className:mV("zoom"),children:[(0,cR.jsx)("div",{className:mV("divider")}),(0,cR.jsx)("select",{className:mV("zoomSelect"),value:b.toString(),onClick:a=>{a.stopPropagation()},onChange:a=>{d(parseFloat(a.currentTarget.value))},children:l.map(a=>(0,cR.jsx)("option",{value:a.value,label:a.label},a.label))})]})]})}),(0,cR.jsx)("button",{className:mV("toggleButton"),title:s,onClick:()=>p(a=>!a),children:o?(0,cR.jsx)(cO.X,{size:16}):(0,cR.jsx)(cO.im,{size:16})})]})};(0,cQ.$)(),(0,cQ.$)();var m_=(0,cu.createContext)(null),m0=({children:a})=>{let b=(0,cu.useRef)(null),c=(0,cu.useMemo)(()=>({frameRef:b}),[]);return(0,cR.jsx)(m_.Provider,{value:c,children:a})},m1=()=>{let a=(0,cu.useContext)(m_);if(null===a)throw Error("useCanvasFrame must be used within a FrameProvider");return a},m2=(0,cz.f)("PuckCanvas",{PuckCanvas:"_PuckCanvas_zw9iy_1","PuckCanvas-controls":"_PuckCanvas-controls_zw9iy_18","PuckCanvas--fullScreen":"_PuckCanvas--fullScreen_zw9iy_23","PuckCanvas-inner":"_PuckCanvas-inner_zw9iy_34","PuckCanvas-root":"_PuckCanvas-root_zw9iy_43","PuckCanvas--ready":"_PuckCanvas--ready_zw9iy_68","PuckCanvas-loader":"_PuckCanvas-loader_zw9iy_73","PuckCanvas--showLoader":"_PuckCanvas--showLoader_zw9iy_84"}),m3=()=>{var a;let{frameRef:b}=m1(),c=(0,cO.Hb)(b),{viewports:d=cy.U,ui:e}=no(),{dispatch:f,overrides:g,setUi:h,zoomConfig:i,setZoomConfig:j,status:k,iframe:l,_experimentalFullScreenCanvas:m}=(0,cO.mm)(cT(a=>({dispatch:a.dispatch,overrides:a.overrides,setUi:a.setUi,zoomConfig:a.zoomConfig,setZoomConfig:a.setZoomConfig,status:a.status,iframe:a.iframe,_experimentalFullScreenCanvas:a._experimentalFullScreenCanvas}))),{leftSideBarVisible:n,rightSideBarVisible:o,leftSideBarWidth:p,rightSideBarWidth:q,viewports:r}=(0,cO.mm)(cT(a=>({leftSideBarVisible:a.state.ui.leftSideBarVisible,rightSideBarVisible:a.state.ui.rightSideBarVisible,leftSideBarWidth:a.state.ui.leftSideBarWidth,rightSideBarWidth:a.state.ui.rightSideBarWidth,viewports:a.state.ui.viewports}))),[s,t]=(0,cu.useState)(!1),u=(0,cu.useRef)(!1),v=(0,cu.useMemo)(()=>({children:a})=>(0,cR.jsx)(cR.Fragment,{children:a}),[]),w=(0,cu.useMemo)(()=>g.preview||v,[g]),x=(0,cu.useCallback)(()=>{if(b.current){let a=b.current,c=(0,cO.T4)(a);return{width:c.contentBox.width,height:c.contentBox.height}}return{width:0,height:0}},[b]);(0,cu.useEffect)(()=>{c()},[b,n,o,p,q,r]),(0,cu.useEffect)(()=>{let{height:a}=x();"auto"===r.current.height&&j((0,cQ.s)((0,cQ.X)({},i),{rootHeight:a/i.zoom}))},[i.zoom,x,j]),(0,cu.useEffect)(()=>{c()},[r.current.width,r]),(0,cu.useEffect)(()=>{if(!b.current)return;let a=new ResizeObserver(()=>{u.current||c()});return a.observe(b.current),()=>{a.disconnect()}},[b.current]);let[y,z]=(0,cu.useState)(!1);(0,cu.useEffect)(()=>{setTimeout(()=>{z(!0)},500)},[]);let A=(0,cO.jG)();return(0,cu.useEffect)(()=>{},[d,b.current,l,A,null==(a=null==e?void 0:e.viewports)?void 0:a.current]),(0,cR.jsxs)("div",{className:m2({ready:"READY"===k||!l.enabled||!l.waitForStyles,showLoader:y,fullScreen:m}),onClick:a=>{let b=a.target;b.hasAttribute("data-puck-component")||b.hasAttribute("data-puck-dropzone")||f({type:"setUi",ui:{itemSelector:null},recordHistory:!1})},children:[r.controlsVisible&&l.enabled&&(0,cR.jsx)("div",{className:m2("controls"),children:(0,cR.jsx)(m$,{fullScreen:m,autoZoom:i.autoZoom,zoom:i.zoom,onViewportChange:a=>{t(!0),u.current=!0;let b=(0,cQ.s)((0,cQ.X)({},a),{height:a.height||"auto",zoom:i.zoom});h({viewports:(0,cQ.s)((0,cQ.X)({},r),{current:b})}),c({viewports:(0,cQ.s)((0,cQ.X)({},r),{current:b})})},onZoom:a=>{t(!0),u.current=!0,j((0,cQ.s)((0,cQ.X)({},i),{zoom:a}))}})}),(0,cR.jsxs)("div",{className:m2("inner"),ref:b,children:[(0,cR.jsx)("div",{className:m2("root"),style:{width:l.enabled?r.current.width:"100%",height:i.rootHeight,transform:l.enabled?`scale(${i.zoom})`:void 0,transition:s?"width 150ms ease-out, height 150ms ease-out, transform 150ms ease-out":"",overflow:l.enabled?void 0:"auto"},suppressHydrationWarning:!0,id:"puck-canvas-root",onTransitionEnd:()=>{t(!1),u.current=!1},children:(0,cR.jsx)(w,{children:(0,cR.jsx)(mK,{})})}),(0,cR.jsx)("div",{className:m2("loader"),children:(0,cR.jsx)(cO.cD,{size:24})})]})]})};function m4(a,b){let[c,d]=(0,cu.useState)(null),e=(0,cu.useRef)(null),f=(0,cO.mm)(b=>"left"===a?b.state.ui.leftSideBarWidth:b.state.ui.rightSideBarWidth);return(0,cu.useEffect)(()=>{},[b,a,f]),(0,cu.useEffect)(()=>{void 0!==f&&d(f)},[f]),{width:c,setWidth:d,sidebarRef:e,handleResizeEnd:(0,cu.useCallback)(c=>{b({type:"setUi",ui:{["left"===a?"leftSideBarWidth":"rightSideBarWidth"]:c}});let d={};try{let a=localStorage.getItem("puck-sidebar-widths");d=a?JSON.parse(a):{}}catch(b){console.error(`Failed to save ${a} sidebar width to localStorage`,b)}finally{localStorage.setItem("puck-sidebar-widths",JSON.stringify((0,cQ.s)((0,cQ.X)({},d),{[a]:c})))}window.dispatchEvent(new CustomEvent("viewportchange",{bubbles:!0,cancelable:!1}))},[b,a])}}(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var m5=(0,cz.f)("ResizeHandle",{ResizeHandle:"_ResizeHandle_144bf_2","ResizeHandle--left":"_ResizeHandle--left_144bf_16","ResizeHandle--right":"_ResizeHandle--right_144bf_20"}),m6=({position:a,sidebarRef:b,onResize:c,onResizeEnd:d})=>{let{frameRef:e}=m1(),f=(0,cO.Hb)(e),g=(0,cu.useRef)(null),h=(0,cu.useRef)(!1),i=(0,cu.useRef)(0),j=(0,cu.useRef)(0),k=(0,cu.useCallback)(b=>{if(!h.current)return;let d=b.clientX-i.current;c(Math.max(192,"left"===a?j.current+d:j.current-d)),b.preventDefault()},[c,a]),l=(0,cu.useCallback)(()=>{var a;if(!h.current)return;h.current=!1,document.body.style.cursor="",document.body.style.userSelect="";let c=document.getElementById("resize-overlay");c&&document.body.removeChild(c),document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",l),d((null==(a=b.current)?void 0:a.getBoundingClientRect().width)||0),f()},[d]),m=(0,cu.useCallback)(a=>{var c;h.current=!0,i.current=a.clientX,j.current=(null==(c=b.current)?void 0:c.getBoundingClientRect().width)||0,document.body.style.cursor="col-resize",document.body.style.userSelect="none";let d=document.createElement("div");d.id="resize-overlay",d.setAttribute("data-resize-overlay",""),document.body.appendChild(d),document.addEventListener("mousemove",k),document.addEventListener("mouseup",l),a.preventDefault()},[a,k,l]);return(0,cR.jsx)("div",{ref:g,className:m5({[a]:!0}),onMouseDown:m})};(0,cQ.$)();var m7=(0,cz.f)("Sidebar",{Sidebar:"_Sidebar_16oed_1","Sidebar--isVisible":"_Sidebar--isVisible_16oed_10","Sidebar--left":"_Sidebar--left_16oed_14","Sidebar--right":"_Sidebar--right_16oed_34","Sidebar-resizeHandle":"_Sidebar-resizeHandle_16oed_51"}),m8=({position:a,sidebarRef:b,isVisible:c,onResize:d,onResizeEnd:e,children:f})=>(0,cR.jsxs)(cR.Fragment,{children:[(0,cR.jsx)("div",{ref:b,className:m7({[a]:!0,isVisible:c}),children:f}),(0,cR.jsx)("div",{className:`${m7("resizeHandle")}`,children:(0,cR.jsx)(m6,{position:a,sidebarRef:b,onResize:d,onResizeEnd:e})})]});(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)();var m9={Nav:"_Nav_vll2r_1","Nav-list":"_Nav-list_vll2r_5","Nav-mobileActions":"_Nav-mobileActions_vll2r_23","NavItem-link":"_NavItem-link_vll2r_39",NavItem:"_NavItem_vll2r_39","NavItem-linkIcon":"_NavItem-linkIcon_vll2r_90","NavItem--active":"_NavItem--active_vll2r_100","NavItem--mobileOnly":"_NavItem--mobileOnly_vll2r_136","NavItem--desktopOnly":"_NavItem--desktopOnly_vll2r_141"},na=(0,cz.f)("Nav",m9),nb=(0,cz.f)("NavItem",m9),nc=({label:a,icon:b,onClick:c,isActive:d,mobileOnly:e,desktopOnly:f})=>(0,cR.jsx)("li",{className:nb({active:d,mobileOnly:e,desktopOnly:f}),children:c&&(0,cR.jsxs)("div",{className:nb("link"),onClick:c,children:[b&&(0,cR.jsx)("span",{className:nb("linkIcon"),children:b}),(0,cR.jsx)("span",{className:nb("linkLabel"),children:a})]})}),nd=({items:a,mobileActions:b})=>(0,cR.jsxs)("nav",{className:na(),children:[(0,cR.jsx)("ul",{className:na("list"),children:Object.entries(a).map(([a,b])=>(0,cR.jsx)(nc,(0,cQ.X)({},b),a))}),b&&(0,cR.jsx)("div",{className:na("mobileActions"),children:b})]});(0,cQ.$)();var ne=a=>(0,cQ.X)({enabled:!0,waitForStyles:!0,syncHostStyles:!0},a),nf=(0,cz.f)("Puck",mL),ng=(0,cz.f)("PuckLayout",mL),nh=(0,cz.f)("PuckPluginTab",mL),ni=cu.useEffect,nj=()=>{let a=(0,cO.mP)("label-page"),b=(0,cO.mm)(a=>{var b,c,d;return a.selectedItem?null!=(c=null==(b=a.config.components[a.selectedItem.type])?void 0:b.label)?c:a.selectedItem.type.toString():null==(d=a.config.root)?void 0:d.label});return(0,cR.jsx)(mS,{noBorderTop:!0,showBreadcrumbs:!0,title:b||a,children:(0,cR.jsx)(mn,{})})},nk=({children:a,visible:b,mobileOnly:c})=>(0,cR.jsx)("div",{className:nh({visible:b,mobileOnly:c}),children:(0,cR.jsx)("div",{className:nh("body"),children:a})}),nl=({children:a})=>{var b,c;let d,e,f,g,{iframe:h,initialHistory:i,plugins:j,height:k}=no(),l=(0,cO.mm)(a=>a.dnd),m=(0,cu.useMemo)(()=>ne(h),[h]);mw((null!==mx?mx:!("u"<typeof document)&&(mx=""!==getComputedStyle(document.documentElement).getPropertyValue("--_puck-styles-loaded").trim()))?null:{cssText:mq,id:"ui-default",prepend:!0}),(0,cu.useEffect)(()=>{},[]);let n=(0,cO.mm)(a=>a.dispatch),o=(0,cO.mm)(a=>a.state.ui.leftSideBarVisible),p=(0,cO.mm)(a=>a.state.ui.rightSideBarVisible),q=(0,cO.mm)(a=>a.instanceId),{width:r,setWidth:s,sidebarRef:t,handleResizeEnd:u}=m4("left",n),{width:v,setWidth:w,sidebarRef:x,handleResizeEnd:y}=m4("right",n);(0,cu.useEffect)(()=>{window.matchMedia("(min-width: 638px)").matches||n({type:"setUi",ui:{leftSideBarVisible:!1,rightSideBarVisible:!1}});let a=()=>{window.matchMedia("(min-width: 638px)").matches||n({type:"setUi",ui:a=>(0,cQ.X)((0,cQ.X)({},a),a.rightSideBarVisible?{leftSideBarVisible:!1}:{})})};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]);let z=(0,cO.mm)(a=>a.overrides),A=(0,cu.useMemo)(()=>z.puck||mM,[z]),[B,C]=(0,cu.useState)(!1);ni(()=>{C(!0)},[]);let D=(0,cO.mm)(a=>"READY"===a.status);(0,cO.Fk)(),(0,cu.useEffect)(()=>{if(D&&m.enabled){let a=ks();if(a)return(0,cO.RX)(a)}},[D,m.enabled]),d=(0,cO.jG)(),e=(0,cu.useCallback)(()=>{(0,d.getState().dispatch)({type:"setUi",ui:a=>({previewMode:"edit"===a.previewMode?"interactive":"edit"})})},[d]),(0,cO.uV)({meta:!0,i:!0},e),(0,cO.uV)({ctrl:!0,i:!0},e),f=(0,cO.jG)(),g=(0,cu.useCallback)(a=>{var b;if((a=>{var b;if(null==a?void 0:a.defaultPrevented)return!0;let c=(null==(b=null==a?void 0:a.composedPath)?void 0:b.call(a)[0])||(null==a?void 0:a.target)||document.activeElement;if(c instanceof HTMLElement){let a=c.tagName.toLowerCase();if("input"===a||"textarea"===a||"select"===a||c.isContentEditable)return!0;let b=c.getAttribute("role");if("textbox"===b||"combobox"===b||"searchbox"===b||"listbox"===b||"grid"===b)return!0}let d=document.querySelector('dialog[open], [aria-modal="true"], [role="dialog"], [role="alertdialog"]');return!!(d&&(a=>{let b=a;for(;b&&b!==document.body;){let a=window.getComputedStyle(b);if("none"===a.display||"hidden"===a.visibility||"0"===a.opacity||"true"===b.getAttribute("aria-hidden")||b.hasAttribute("hidden"))return!1;b=b.parentElement}return!0})(d))})(a))return!1;let{state:c,dispatch:d,permissions:e,selectedItem:g}=f.getState(),h=null==(b=c.ui)?void 0:b.itemSelector;return null==h||!h.zone||!g||!e.getPermissions({item:g}).delete||(d({type:"remove",index:h.index,zone:h.zone}),!0)},[f]),(0,cO.uV)({delete:!0},g),(0,cO.uV)({backspace:!0},g);let E={};r&&(E["--puck-user-sidebar-left-width"]=`${r}px`),v&&(E["--puck-user-sidebar-right-width"]=`${v}px`);let F=(0,cO.mm)(a=>a.setUi),G=(0,cO.mm)(a=>{var b;return null==(b=a.state.ui.plugin)?void 0:b.current}),H=(0,cO.jG)(),I=(0,cu.useMemo)(()=>!!(null==j?void 0:j.find(a=>"legacy-side-bar"===a.name)),[j]),J=(0,cO.mP)("plugin-blocks"),K=(0,cO.mP)("plugin-outline"),L=(0,cO.mP)("plugin-fields"),M=(0,cu.useMemo)(()=>{let a={},b=[((a={})=>{var b,c;return{name:"blocks",label:null!=(b=a.label)?b:"Blocks",render:()=>(0,cR.jsx)("div",{className:lA(),children:(0,cR.jsx)(lz,{})}),icon:null!=(c=a.icon)?c:(0,cR.jsx)(cO.n0,{})}})({label:J}),((a={})=>{var b,c;return{name:"outline",label:null!=(b=a.label)?b:"Outline",render:()=>(0,cR.jsx)("div",{className:mg(),children:(0,cR.jsx)(mf,{})}),icon:null!=(c=a.icon)?c:(0,cR.jsx)(cO.DV,{})}})({label:K})],c=a=>"legacy-side-bar"===a.name?-1:0,d=[...b,...null!=j?j:[]].sort((a,b)=>c(a)-c(b));return(null==j?void 0:j.some(a=>"fields"===a.name))||d.push((({desktopSideBar:a="right",label:b,icon:c}={})=>({name:"fields",label:null!=b?b:"Fields",render:()=>(0,cR.jsxs)("div",{className:mo(),children:[(0,cR.jsx)("div",{className:mo("header"),children:(0,cR.jsx)(mi,{numParents:2,children:(0,cR.jsx)(mp,{})})}),(0,cR.jsx)(mn,{})]}),icon:null!=c?c:(0,cR.jsx)(cO.XH,{}),mobileOnly:"right"===a}))({label:L})),null==d||d.forEach(b=>{var c,d,e;b.name&&b.render&&(a[b.name]&&delete a[b.name],a[b.name]={label:null!=(c=b.label)?c:b.name,icon:null!=(d=b.icon)?d:(0,cR.jsx)(cO.Ei,{}),onClick:()=>{b.name===G?o?F({leftSideBarVisible:!1}):F({leftSideBarVisible:!0}):b.name&&F({plugin:{current:b.name},leftSideBarVisible:!0})},isActive:o&&G===b.name,render:b.render,mobilePanelHeight:null!=(e=b.mobilePanelHeight)?e:"toggle",mobileOnly:I||b.mobileOnly,desktopOnly:"legacy-side-bar"===b.name||b.desktopOnly})}),a},[j,G,H,o,J,K,L]),N=null!=G?G:Object.keys(M)[0],O=null!=(c=null==(b=M[N])?void 0:b.mobilePanelHeight)?c:"toggle";(0,cu.useEffect)(()=>{G||F({plugin:{current:Object.keys(M)[0]}})},[M,G]);let P=M.fields&&!1===M.fields.mobileOnly,Q=(0,cO.mm)(a=>{var b;return null!=(b=a.state.ui.mobilePanelExpanded)&&b}),R=(0,cO.mP)("layout-maximize"),S=(0,cO.mP)("layout-minimize");return(0,cR.jsxs)("div",{className:`Puck ${nf({hidePlugins:I})}`,id:q,style:{height:k,visibility:"hidden"},children:[(0,cR.jsx)(kY,{disableAutoScroll:null==l?void 0:l.disableAutoScroll,behavior:null==l?void 0:l.behavior,children:(0,cR.jsx)(A,{children:a||(0,cR.jsx)(m0,{children:(0,cR.jsx)("div",{className:ng({leftSideBarVisible:o,mounted:B,rightSideBarVisible:!P&&p,isExpanded:Q,mobilePanelHeightToggle:"toggle"===O,mobilePanelHeightMinContent:"min-content"===O}),style:{height:k},children:(0,cR.jsxs)("div",{className:ng("inner"),style:E,children:[(0,cR.jsx)("div",{className:ng("header"),children:(0,cR.jsx)(mQ,{hidePlugins:I})}),(0,cR.jsx)("div",{className:ng("nav"),children:(0,cR.jsx)(nd,{items:M,mobileActions:o&&"toggle"===O&&(0,cR.jsx)(cO.eu,{type:"button",title:Q?S:R,onClick:()=>{F({mobilePanelExpanded:!Q})},children:Q?(0,cR.jsx)(cO.BJ,{size:21}):(0,cR.jsx)(cO.Xf,{size:21})})})}),(0,cR.jsx)(m8,{position:"left",sidebarRef:t,isVisible:o,onResize:s,onResizeEnd:u,children:Object.entries(M).map(([a,{mobileOnly:b,render:c,label:d}])=>(0,cR.jsx)(nk,{visible:G===a,mobileOnly:b,children:(0,cR.jsx)(c,{})},a))}),(0,cR.jsx)(m3,{}),!P&&(0,cR.jsx)(m8,{position:"right",sidebarRef:x,isVisible:p,onResize:w,onResizeEnd:y,children:(0,cR.jsx)(nj,{})})]})})})})}),(0,cR.jsx)("div",{id:"puck-portal-root",className:nf("portal")})]})},nm=(0,cu.createContext)({});function nn(a){return(0,cR.jsx)(nm.Provider,{value:a,children:a.children})}var no=()=>(0,cu.useContext)(nm);function np({children:a}){let{config:b,data:c,ui:d,onChange:e,permissions:f={},plugins:g,overrides:h,viewports:i=cy.U,iframe:j,dnd:k,initialHistory:l,metadata:m,dictionary:n,onAction:o,fieldTransforms:p,_experimentalFullScreenCanvas:q,_experimentalVirtualization:r}=no(),s=(0,cu.useMemo)(()=>ne(j),[j]),[t]=(0,cu.useState)(()=>{var a,e,f;let g=(0,cQ.X)((0,cQ.X)({},cy.T.ui),d);!(Object.keys((null==c?void 0:c.root)||{}).length>0)||(null==(a=null==c?void 0:c.root)?void 0:a.props)||console.warn("Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically.");let h=(null==(e=null==c?void 0:c.root)?void 0:e.props)||(null==c?void 0:c.root)||{},i=(0,cQ.X)((0,cQ.X)({},null==(f=b.root)?void 0:f.defaultProps),h),j=(0,cP.l)((0,cA.f)((0,cQ.s)((0,cQ.X)({},null==c?void 0:c.root),{props:i})),b),k=(0,cQ.s)((0,cQ.X)({},cy.T),{data:(0,cQ.s)((0,cQ.X)({},c),{root:(0,cQ.s)((0,cQ.X)({},null==c?void 0:c.root),{props:j.props}),content:c.content||[]}),ui:(0,cQ.s)((0,cQ.X)((0,cQ.X)({},g),{}),{componentList:b.categories?Object.entries(b.categories).reduce((a,[b,c])=>(0,cQ.s)((0,cQ.X)({},a),{[b]:{title:c.title,components:c.components,expanded:c.defaultExpanded,visible:c.visible}}),{}):{}})});return(0,cA.X)(k,b)}),{appendData:u=!0}=l||{},[v]=(0,cu.useState)([...(null==l?void 0:l.histories)||[],...u?[{state:t}]:[]].map(a=>{let c=(0,cQ.X)((0,cQ.X)({},t),a.state);return a.state.indexes||(c=(0,cA.X)(c,b)),(0,cQ.s)((0,cQ.X)({},a),{state:c})})),w=(0,cu.useMemo)(()=>(null==l?void 0:l.index)!==void 0&&(null==l?void 0:l.index)>=0&&(null==l?void 0:l.index)<v.length?null==l?void 0:l.index:v.length-1,[]),x=v[w].state,y=(({overrides:a,plugins:b})=>(0,cu.useMemo)(()=>(({overrides:a,plugins:b})=>{let c=(0,cQ.X)({},a);return null==b||b.forEach(a=>{a.overrides&&Object.keys(a.overrides).forEach(b=>{var d;if(!(null==(d=a.overrides)?void 0:d[b]))return;if("fieldTypes"===b){let b=a.overrides.fieldTypes;Object.keys(b).forEach(a=>{c.fieldTypes=c.fieldTypes||{};let d=c.fieldTypes[a];c.fieldTypes[a]=c=>b[a]((0,cQ.s)((0,cQ.X)({},c),{children:d?d(c):c.children}))});return}let e=c[b];c[b]=c=>a.overrides[b]((0,cQ.s)((0,cQ.X)({},c),{children:e?e(c):c.children}))})}),c})({overrides:a,plugins:b}),[b,a]))({overrides:h,plugins:g}),z=(0,cu.useMemo)(()=>{let a=(g||[]).reduce((a,b)=>(0,cQ.X)((0,cQ.X)({},a),b.fieldTransforms),{});return(0,cQ.X)((0,cQ.X)({},a),p)},[p,g]),A=ke(),B=(0,cu.useCallback)(a=>({instanceId:A,state:a,config:b,plugins:g||[],overrides:y,viewports:i,iframe:s,_experimentalFullScreenCanvas:!!q,_experimentalVirtualization:!!r,onAction:o,metadata:m,dictionary:n||{},dnd:k,fieldTransforms:z}),[A,x,b,g,y,i,s,q,r,o,m,n,k,z]),[C]=(0,cu.useState)(()=>(0,cO.SC)(B(x)));(0,cu.useEffect)(()=>{},[C]),(0,cu.useEffect)(()=>{let a=C.getState().state;C.setState((0,cQ.X)({},B(a)))},[B]),(0,cO.Aw)(C,{histories:v,index:w,initialAppState:x});let D=(0,cu.useRef)(null);(0,cu.useEffect)(()=>C.subscribe(a=>a.state.data,a=>{e&&((0,iU.f)(a,D.current)||(e(a),D.current=a))}),[e]),(0,cO.aD)(C,f);let E=(a=>{let[b]=(0,cu.useState)(()=>(0,cU.f)(()=>lt(lv(a.getState()),a.getState)));return(0,cu.useEffect)(()=>a.subscribe(a=>lv(a),c=>{b.setState(lt(c,a.getState))}),[]),b})(C);return(0,cu.useEffect)(()=>{let{resolveAndCommitData:a}=C.getState();setTimeout(()=>{a()},0)},[]),(0,cR.jsx)(cO.dt.Provider,{value:C,children:(0,cR.jsx)(lu.Provider,{value:E,children:a})})}function nq(a){return(0,cR.jsx)(nn,(0,cQ.s)((0,cQ.X)({},a),{children:(0,cR.jsx)(np,(0,cQ.s)((0,cQ.X)({},a),{children:(0,cR.jsx)(nl,{children:a.children})}))}))}nq.Components=lz,nq.Fields=mn,nq.Layout=nl,nq.Outline=mf,nq.Preview=mK,(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),(0,cQ.$)(),a.i(27250),a.i(37692),a.i(4228),(0,cB.$)();var nr=a.i(2512);let ns=(a,{editable:b=!0,placeholder:c}={})=>({type:"text",label:a,contentEditable:b,placeholder:c}),nt=(a,{editable:b=!0,placeholder:c}={})=>({type:"textarea",label:a,contentEditable:b,placeholder:c}),nu=a=>({type:"richtext",label:a,contentEditable:!0,options:{heading:!1,codeBlock:!1,code:!1,blockquote:!1,horizontalRule:!1,strike:!1,textAlign:!1}}),nv=(a,b,{radio:c=!1}={})=>({type:c?"radio":"select",label:a,options:b.map(([a,b])=>({value:a,label:b}))}),nw=(a,{min:b,max:c,step:d}={})=>({type:"number",label:a,min:b,max:c,step:d}),nx=(a,b,{resumen:c,nuevo:d,min:e,max:f}={})=>({type:"array",label:a,arrayFields:b,defaultItemProps:d,getItemSummary:c?(a,b)=>{let d="function"==typeof c?c(a,b):a[c];return"string"==typeof d&&d.trim()?d.replace(/<[^>]+>/g,"").slice(0,40):`Elemento ${(b??0)+1}`}:void 0,min:e,max:f}),ny=(a,b)=>({type:"object",label:a,objectFields:b}),nz=[["","Automático"],["azul","Azul Thinkion"],["violeta","Violeta"],["coral","Coral"],["texto","Negro"],["blanco","Blanco"]],nA=(a="Imagen")=>({type:"custom",label:a,render:nr.CampoImagen}),nB=(a="Lleva a")=>({type:"custom",label:a,render:nr.CampoLink}),nC=a=>({type:"custom",label:a,render:nr.CampoFecha}),nD=a=>({type:"custom",label:a,render:nr.CampoColor});var nE=a.i(22311);let nF=(0,nE.k)({label:"Portada (Home)",fields:{titulo:nt("Título",{editable:!1}),resaltado:ns("Palabra subrayada (tal cual está en el título)",{editable:!1}),bajada:nu("Bajada"),botonTexto:ns("Texto del botón"),botonLink:nB("El botón lleva a"),videoLink:nB("Video (YouTube, Vimeo o Drive)"),portada:nA("Imagen del video"),portadaAlt:ns("Descripción de la imagen",{editable:!1})},defaultProps:{titulo:"Crecé sin límites, simplificá tu negocio",resaltado:"Crecé",bajada:"<p>Un ecosistema que se adapta al tamaño de tu negocio.</p>",botonTexto:"Pedí tu demo",botonLink:"/demo",videoLink:"",portada:"/img/home/video-portada.webp",portadaAlt:""},render:({titulo:a,resaltado:b,bajada:c,botonTexto:d,botonLink:e,videoLink:f,portada:g,portadaAlt:h,puck:i})=>(0,ct.jsxs)("section",{className:"hero",ref:i.dragRef,children:[(0,ct.jsxs)("div",{className:"hero__texto",children:[(0,ct.jsx)("h1",{className:"hero__titulo",children:(0,nE.L)(a,b,"subrayado")}),(0,ct.jsx)("div",{className:"hero__bajada",children:c}),d&&(0,ct.jsx)("a",{className:"boton",href:(0,nE.U)(e),children:d})]}),(0,ct.jsxs)("div",{className:"hero__video-marco",children:[(0,ct.jsxs)("a",{className:"hero__video",href:(0,nE.U)(f),"aria-label":"Ver el video de Thinkion",children:[(0,ct.jsx)(nE.m,{src:g,alt:h,ancho:543,alto:335,prioridad:!0}),(0,ct.jsx)("img",{className:"hero__play",src:"/img/home/play.svg",alt:"",width:"37",height:"41"})]}),(0,ct.jsx)("img",{className:"hero__lineas",src:"/img/home/marco-video.svg",alt:"",width:"591",height:"386","aria-hidden":"true"})]})]})}),nG=(0,nE.k)({label:"Diferenciales (tres tarjetas)",fields:{titulo:ns("Título"),bajada:nt("Bajada"),pilares:nx("Tarjetas",{icono:nA("Ícono"),titulo:ns("Título"),texto:nt("Texto"),ajuste:nv("Ajuste del ícono",[["","Normal"],["lampara","Fundir con el fondo"],["suave","Más suave"]])},{resumen:"titulo",nuevo:{icono:"/img/home/icono-integracion.webp",titulo:"Nueva tarjeta",texto:"Texto de la tarjeta.",ajuste:""}})},defaultProps:{titulo:"Todo tu negocio conectado en un solo ecosistema",bajada:"Una plataforma que conecta todos los puntos de tu operación, sin importar la industria.",pilares:[]},render:({titulo:a,bajada:b,pilares:c=[],puck:d})=>(0,ct.jsxs)("section",{className:"diferenciales reveal",ref:d.dragRef,children:[(0,ct.jsxs)("div",{className:"diferenciales__encabezado",children:[(0,ct.jsx)("h2",{className:"diferenciales__titulo",children:(0,nE.Z)(a)}),(0,ct.jsx)("p",{className:"diferenciales__bajada",children:(0,nE.Z)(b)})]}),(0,ct.jsx)("ul",{className:"diferenciales__lista",children:c.map((a,b)=>(0,ct.jsxs)("li",{className:"pilar",children:[(0,ct.jsx)(nE.m,{src:a.icono,ancho:128,alto:128,className:a.ajuste?`pilar__icono-${a.ajuste}`:void 0}),(0,ct.jsx)("h3",{children:a.titulo}),(0,ct.jsx)("p",{children:(0,nE.Z)(a.texto)})]},b))})]})}),nH=[{x:374.21,y:84.12,tipo:"grande"},{x:235.24,y:279.12,tipo:"grande"},{x:510.24,y:279.12,tipo:"grande"},{x:149.51,y:112.77,tipo:"azul"},{x:59.77,y:254.76,tipo:"azul"},{x:92.77,y:392.75},{x:226.77,y:462.76},{x:372.72,y:410.76},{x:570.72,y:66.76},{x:658.51,y:172.76},{x:690.13,y:309.76},{x:626.6,y:425.77}],nI=(0,nE.k)({label:"Diagrama de soluciones",fields:{modulos:nx("Módulos (12, en el orden del dibujo)",{nombre:ns("Nombre",{editable:!1}),imagen:nA("Imagen"),opacidad:nw("Opacidad de la imagen (0 a 1)",{min:0,max:1,step:.1})},{resumen:"nombre",min:12,max:12}),titulo:ns("Título"),bajada:nt("Bajada"),botonTexto:ns("Texto del botón"),botonLink:nB("El botón lleva a")},defaultProps:{modulos:[],titulo:"Soluciones que se potencian entre sí",bajada:"",botonTexto:"Pedí tu demo",botonLink:"/demo"},render:({modulos:a=[],titulo:b,bajada:c,botonTexto:d,botonLink:e,puck:f})=>(0,ct.jsxs)("section",{className:"soluciones reveal",id:"soluciones",ref:f.dragRef,children:[(0,ct.jsxs)("svg",{className:"arcos","aria-hidden":"true",focusable:"false",children:[(0,ct.jsx)("path",{id:"arco-chico",d:"M -46.19 0 A 46.19 46.19 0 0 1 46.19 0"}),(0,ct.jsx)("path",{id:"arco-grande",d:"M -65.96 0 A 65.96 65.96 0 0 1 65.96 0"})]}),(0,ct.jsxs)("div",{className:"diagrama",children:[(0,ct.jsx)("img",{className:"diagrama__lineas",src:"/img/home/diagrama-lineas.svg",alt:"",width:"726",height:"505","aria-hidden":"true",loading:"lazy"}),nH.map((b,c)=>{let d=a[c]||{},e="grande"===b.tipo;return(0,ct.jsxs)("figure",{className:(0,nE.K)("modulo",e&&"modulo--grande","azul"===b.tipo&&"modulo--azul"),style:{"--x":b.x,"--y":b.y},children:[(0,ct.jsx)("svg",{className:"modulo__etiqueta",viewBox:e?"-84 -84 168 168":"-60 -60 120 120",children:(0,ct.jsx)("text",{children:(0,ct.jsx)("textPath",{href:e?"#arco-grande":"#arco-chico",startOffset:"50%",children:d.nombre})})}),(0,ct.jsx)("span",{className:"modulo__circulo",children:(0,ct.jsx)(nE.m,{src:d.imagen,ancho:e?122:85,alto:e?122:85,style:null!=d.opacidad&&""!==d.opacidad&&1!==Number(d.opacidad)?{opacity:Number(d.opacidad)}:void 0})})]},c)})]}),(0,ct.jsxs)("div",{className:"soluciones__texto",children:[(0,ct.jsx)("h2",{className:"titulo-seccion",children:(0,nE.Z)(b)}),(0,ct.jsx)("p",{className:"bajada-seccion soluciones__bajada",children:(0,nE.Z)(c)})]}),d&&(0,ct.jsx)("a",{className:"boton",href:(0,nE.U)(e),children:d})]})}),nJ=(a="")=>String(a).normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"pestana",nK=(a="Pestaña abierta al cargar")=>nw(`${a} (1 = la primera)`,{min:1,max:12}),nL=(a,b)=>Math.min(Math.max((Number(a)||1)-1,0),Math.max(b-1,0)),nM=(0,nE.k)({label:"Industrias (pestañas)",fields:{pestanas:nx("Pestañas",{nombre:ns("Nombre de la pestaña",{editable:!1}),titulo:ns("Título"),texto:nu("Texto"),imagen:nA("Imagen"),imagenAlt:ns("Descripción de la imagen",{editable:!1})},{resumen:"nombre",nuevo:{nombre:"Nueva",titulo:"Título",texto:"<p>Texto</p>",imagen:"/img/home/tab-retail.webp",imagenAlt:""}}),abierta:nK()},defaultProps:{pestanas:[],abierta:1},render:({pestanas:a=[],abierta:b,id:c,puck:d})=>{let e=nL(b,a.length),f=`industrias-${c||"x"}`.replace(/[^a-z0-9-]/gi,"");return(0,ct.jsxs)("section",{className:"industrias reveal","data-tabs":!0,ref:d.dragRef,children:[(0,ct.jsx)("div",{className:"pestanas",role:"tablist","aria-label":"Industrias",children:a.map((a,b)=>(0,ct.jsx)("button",{className:(0,nE.K)("pestanas__boton",b===e&&"is-activa"),type:"button",role:"tab",id:`tab-${f}-${nJ(a.nombre)}`,"aria-controls":`panel-${f}-${nJ(a.nombre)}`,"aria-selected":b===e,"data-tab":nJ(a.nombre),children:a.nombre},b))}),(0,ct.jsxs)("div",{className:"industrias__card",children:[(0,ct.jsx)("img",{className:"industrias__chevron",src:"/img/home/deco-chevron-tabs.svg",alt:"",width:"282",height:"536","aria-hidden":"true"}),a.map((a,b)=>(0,ct.jsxs)("div",{className:"industrias__panel",role:"tabpanel",id:`panel-${f}-${nJ(a.nombre)}`,"aria-labelledby":`tab-${f}-${nJ(a.nombre)}`,"data-panel":nJ(a.nombre),hidden:b!==e,children:[(0,ct.jsxs)("div",{className:"industrias__texto",children:[(0,ct.jsx)("h2",{children:a.titulo}),a.texto]}),(0,ct.jsx)(nE.m,{src:a.imagen,alt:a.imagenAlt,ancho:377,alto:338})]},b))]})]})}}),nN=(0,nE.k)({label:"Carrusel de clientes",fields:{titulo:ns("Título"),clientes:nx("Clientes",{foto:nA("Foto (local o plato)"),fotoAlt:ns("Descripción de la foto",{editable:!1}),logo:nA("Logo"),nombre:ns("Nombre del cliente",{editable:!1}),rubro:ns("Rubro"),ajusteLogo:nv("Tamaño del logo",[["","Normal"],["ancho","Ancho"],["temple","Recortado (Temple)"],["mishka","Más chico (Mishka)"]])},{resumen:"nombre",nuevo:{foto:"",fotoAlt:"",logo:"",nombre:"Nuevo cliente",rubro:"Gastronomía",ajusteLogo:"ancho"}}),destacado:nw("Cliente destacado al cargar (1 = el primero)",{min:1,max:40}),cita:nt("Testimonio"),autor:ns("Autor del testimonio"),botonTexto:ns("Texto del botón"),botonLink:nB("El botón lleva a")},defaultProps:{titulo:"Ellos ya se sumaron al cambio",clientes:[],destacado:2,cita:"",autor:"",botonTexto:"Ver nuestros clientes",botonLink:"/clientes"},render:({titulo:a,clientes:b=[],destacado:c,cita:d,autor:e,botonTexto:f,botonLink:g,puck:h})=>(0,ct.jsxs)("section",{className:"clientes reveal",id:"clientes",ref:h.dragRef,children:[(0,ct.jsx)("h2",{className:"clientes__titulo",children:(0,nE.Z)(a)}),(0,ct.jsxs)("div",{className:"carrusel","data-carrusel":!0,tabIndex:0,role:"region","aria-roledescription":"carrusel","aria-label":"Clientes de Thinkion. Usá las flechas para ver más.",children:[(0,ct.jsx)("button",{className:"carrusel__costado carrusel__costado--anterior",type:"button","data-anterior":!0,"aria-label":"Ver clientes anteriores"}),(0,ct.jsx)("ul",{className:"carrusel__lista",children:b.map((a,b)=>(0,ct.jsxs)("li",{className:(0,nE.K)("cliente",b===(Number(c)||1)-1&&"cliente--activo"),children:[(0,ct.jsx)(nE.m,{className:"cliente__foto",src:a.foto,alt:a.fotoAlt,ancho:256,alto:363}),(0,ct.jsxs)("div",{className:"cliente__info",children:[(0,ct.jsx)(nE.m,{className:(0,nE.K)("cliente__logo",a.ajusteLogo&&`cliente__logo--${a.ajusteLogo}`),src:a.logo,alt:"string"==typeof a.nombre?a.nombre:"",ancho:122,alto:120}),(0,ct.jsx)("span",{className:"cliente__rubro",children:a.rubro})]})]},b))}),(0,ct.jsx)("button",{className:"carrusel__costado carrusel__costado--siguiente",type:"button","data-siguiente":!0,"aria-label":"Ver más clientes"})]}),d&&(0,ct.jsxs)("figure",{className:"testimonio",children:[(0,ct.jsx)("blockquote",{className:"testimonio__cita",children:(0,nE.Z)(d)}),e&&(0,ct.jsx)("figcaption",{className:"testimonio__autor",children:e})]}),f&&(0,ct.jsx)("a",{className:"boton boton--azul",href:(0,nE.U)(g),children:f})]})}),nO=(0,nE.k)({label:"Preguntas frecuentes",fields:{titulo:ns("Título"),bajada:nt("Bajada"),categorias:nx("Categorías",{nombre:ns("Nombre de la categoría",{editable:!1}),preguntas:nx("Preguntas",{pregunta:ns("Pregunta"),respuesta:nu("Respuesta")},{resumen:"pregunta",nuevo:{pregunta:"Nueva pregunta",respuesta:"<p>Respuesta</p>"}})},{resumen:"nombre",nuevo:{nombre:"Nueva categoría",preguntas:[]}}),abierta:nK("Categoría abierta al cargar")},defaultProps:{titulo:"Preguntas frecuentes",bajada:"",categorias:[],abierta:1},render:({titulo:a,bajada:b,categorias:c=[],abierta:d,id:e,puck:f})=>{let g=nL(d,c.length),h=`preguntas-${e||"x"}`.replace(/[^a-z0-9-]/gi,""),i=c.length>1;return(0,ct.jsxs)("section",{className:"faq reveal",id:"preguntas","data-tabs":!0,ref:f.dragRef,children:[(0,ct.jsxs)("div",{className:"faq__encabezado",children:[(0,ct.jsx)("h2",{className:"titulo-seccion faq__titulo",children:(0,nE.Z)(a)}),b&&(0,ct.jsx)("p",{className:"bajada-seccion faq__bajada",children:(0,nE.Z)(b)})]}),i&&(0,ct.jsx)("div",{className:"pestanas pestanas--faq",role:"tablist","aria-label":"Categorías de preguntas",children:c.map((a,b)=>(0,ct.jsx)("button",{className:(0,nE.K)("pestanas__boton",b===g&&"is-activa"),type:"button",role:"tab",id:`tab-${h}-${nJ(a.nombre)}`,"aria-controls":`panel-${h}-${nJ(a.nombre)}`,"aria-selected":b===g,"data-tab":nJ(a.nombre),children:a.nombre},b))}),c.map((a,b)=>(0,ct.jsx)("div",{className:"faq__lista",role:i?"tabpanel":void 0,id:`panel-${h}-${nJ(a.nombre)}`,"aria-labelledby":i?`tab-${h}-${nJ(a.nombre)}`:void 0,"data-panel":nJ(a.nombre),hidden:b!==g,children:(a.preguntas||[]).map((a,b)=>(0,ct.jsxs)("details",{className:"faq__item",open:0===b,children:[(0,ct.jsx)("summary",{children:a.pregunta}),a.respuesta]},b))},b))]})}}),nP=(0,nE.k)({label:"Línea separadora",fields:{},render:({puck:a})=>(0,ct.jsx)("hr",{className:"separador",ref:a.dragRef})}),nQ=(0,nE.k)({label:"Llamado a la acción",fields:{titulo:ns("Título"),bajada:nt("Bajada"),botonTexto:ns("Texto del botón"),botonLink:nB("El botón lleva a"),separado:nv("Separación de arriba",[["","Normal"],["grande","Grande (páginas de producto)"]])},defaultProps:{titulo:"¿Querés ver cómo funciona en tu negocio?",bajada:"Hablemos y veamos cómo Thinkion puede adaptarse a tu negocio.",botonTexto:"Pedí tu demo",botonLink:"/demo",separado:""},render:({titulo:a,bajada:b,botonTexto:c,botonLink:d,separado:e,puck:f})=>(0,ct.jsxs)("section",{className:(0,nE.K)("cta","grande"===e&&"solucion__cta","reveal"),ref:f.dragRef,children:[(0,ct.jsx)("h2",{className:"cta__titulo",children:(0,nE.Z)(a)}),b&&(0,ct.jsx)("p",{className:"cta__bajada",children:(0,nE.Z)(b)}),c&&(0,ct.jsx)("a",{className:"boton",href:(0,nE.U)(d),children:c})]})});a.s(["ClientesCarrusel",0,nN,"DiagramaSoluciones",0,nI,"Diferenciales",0,nG,"HeroInicio",0,nF,"Industrias",0,nM,"LlamadoFinal",0,nQ,"PreguntasFrecuentes",0,nO,"Separador",0,nP,"pestanaAbierta",0,nK],45049);var nR=a.i(45049);let nS=(0,nE.k)({label:"Portada (producto)",fields:{titulo:nt("Título",{editable:!1}),resaltado:ns("Palabra subrayada (tal cual está en el título)",{editable:!1}),bajada:nt("Bajada"),botonTexto:ns("Texto del botón (vacío = sin botón)"),botonLink:nB("El botón lleva a"),estilo:nv("Estilo",[["producto","Producto"],["clientes","Clientes"]])},defaultProps:{titulo:"Título de la página",resaltado:"",bajada:"Bajada de la página.",botonTexto:"Pedí tu demo",botonLink:"/demo",estilo:"producto"},render:({titulo:a,resaltado:b,bajada:c,botonTexto:d,botonLink:e,estilo:f,puck:g})=>(0,ct.jsxs)("section",{className:"clientes"===f?"clientes-hero":"check-hero",ref:g.dragRef,children:[(0,ct.jsx)("h1",{children:(0,nE.L)(a,b,"subrayado-violeta")}),(0,ct.jsx)("p",{children:(0,nE.Z)(c)}),d&&(0,ct.jsx)("a",{className:"boton",href:(0,nE.U)(e),children:d})]})}),nT=(0,nE.k)({label:"Video o imagen grande",fields:{tipo:nv("Qué muestra",[["video","Video (se abre en una ventana)"],["imagen","Solo imagen"]],{radio:!0}),imagen:nA("Imagen"),imagenAlt:ns("Descripción de la imagen",{editable:!1}),videoLink:nB("Video (YouTube, Vimeo o Drive)")},defaultProps:{tipo:"video",imagen:"/img/check/video-portada.webp",imagenAlt:"",videoLink:""},render:({tipo:a,imagen:b,imagenAlt:c,videoLink:d,puck:e})=>"imagen"===a?(0,ct.jsx)("div",{className:"check-video check-video--imagen",ref:e.dragRef,children:(0,ct.jsx)(nE.m,{src:b,alt:c,ancho:1682,alto:932,prioridad:!0})}):(0,ct.jsxs)("a",{className:"check-video",href:(0,nE.U)(d),"aria-label":"Ver el video",ref:e.dragRef,children:[(0,ct.jsx)(nE.m,{src:b,alt:c,ancho:1093,alto:621,prioridad:!0}),(0,ct.jsx)("img",{className:"check-video__play",src:"/img/home/play.svg",alt:"",width:"131",height:"151"})]})}),nU=(0,nE.k)({label:"Ventajas (con íconos)",fields:{titulo:nt("Título"),texto:nt("Texto"),items:nx("Ítems",{icono:nA("Ícono"),titulo:ns("Título"),texto:nt("Texto")},{resumen:"titulo",nuevo:{icono:"/img/check/icono-app.webp",titulo:"Nuevo ítem",texto:"Texto"}})},defaultProps:{titulo:"Título",texto:"",items:[]},render:({titulo:a,texto:b,items:c=[],puck:d})=>(0,ct.jsxs)("section",{className:"check-dif reveal",ref:d.dragRef,children:[(0,ct.jsxs)("div",{className:"check-dif__encabezado",children:[(0,ct.jsx)("h2",{children:(0,nE.Z)(a)}),b&&(0,ct.jsx)("p",{children:(0,nE.Z)(b)})]}),(0,ct.jsx)("ul",{className:"check-dif__lista",children:c.map((a,b)=>(0,ct.jsxs)("li",{children:[(0,ct.jsx)(nE.m,{src:a.icono,ancho:128,alto:128}),(0,ct.jsx)("h3",{children:a.titulo}),(0,ct.jsx)("p",{children:(0,nE.Z)(a.texto)})]},b))})]})}),nV=(0,nE.k)({label:"Monitor y celular con datos",fields:{monitor:nA("Imagen del monitor"),monitorAlt:ns("Descripción del monitor",{editable:!1}),celular:nA("Imagen del celular"),celularAlt:ns("Descripción del celular",{editable:!1}),datos:nx("Datos destacados (3)",{texto:ns("Texto")},{resumen:"texto",min:3,max:3})},defaultProps:{monitor:"/img/check/mockup-monitor.webp",monitorAlt:"",celular:"/img/check/mockup-celular.webp",celularAlt:"",datos:[{texto:"Dato 1"},{texto:"Dato 2"},{texto:"Dato 3"}]},render:({monitor:a,monitorAlt:b,celular:c,celularAlt:d,datos:e=[],puck:f})=>(0,ct.jsxs)("section",{className:"check-mockup reveal",ref:f.dragRef,children:[(0,ct.jsx)(nE.m,{className:"check-mockup__monitor",src:a,alt:b,ancho:867,alto:717}),(0,ct.jsx)("div",{className:"celular",children:(0,ct.jsx)(nE.m,{src:c,alt:d,ancho:208,alto:452})}),e.slice(0,3).map((a,b)=>(0,ct.jsxs)("p",{className:`check-dato check-dato--${b+1}`,children:[(0,ct.jsx)("img",{src:"/img/check/icono-rayo.svg",alt:"",width:"28",height:"32"}),a.texto]},b))]})}),nW={multiplicar:"logo-multiplicar",prune:"logo-prune",mishka:"logo-mishka"},nX=(0,nE.k)({label:"Logos de clientes",fields:{estilo:nv("Estilo",[["producto","Producto (más separados)"],["industria","Industria"]]),logos:nx("Logos",{imagen:nA("Logo"),nombre:ns("Nombre del cliente",{editable:!1}),opacidad:nw("Opacidad (0 a 1, vacío = normal)",{min:0,max:1,step:.1}),ajuste:nv("Ajuste",[["","Normal"],["multiplicar","Fundir fondo blanco"],["prune","Bajo y fundido"],["mishka","Redondeado"]])},{resumen:"nombre",nuevo:{imagen:"",nombre:"Cliente",opacidad:"",ajuste:""}})},defaultProps:{estilo:"producto",logos:[]},render:({estilo:a,logos:b=[],puck:c})=>(0,ct.jsx)("section",{className:(0,nE.K)("industria"===a?"seg-logos":"check-logos","reveal"),"aria-label":"Algunos de nuestros clientes",ref:c.dragRef,children:b.map((a,b)=>(0,ct.jsx)(nE.m,{src:a.imagen,alt:a.nombre,ancho:122,alto:122,className:nW[a.ajuste],style:""!==a.opacidad&&null!=a.opacidad?{opacity:Number(a.opacidad)}:void 0},b))})}),nY=a=>a.imagenMedidas?.src===a.imagen?[a.imagenMedidas.ancho,a.imagenMedidas.alto]:null,nZ=(0,nE.k)({label:"Funciones (imagen y texto)",fields:{funciones:nx("Funciones",{imagen:nA("Imagen"),marco:nv("Cómo se muestra la imagen",[["","Imagen sola"],["visual","Dentro de una tarjeta"],["icono","Tarjeta con ícono chico"],["ilustracion","Tarjeta con ilustración"]]),etiqueta:ns("Etiqueta (arriba del título)"),titulo:ns("Título"),texto:nu("Texto"),ancla:ns("Nombre para linkear (ej.: beneficios → /check#beneficios)",{editable:!1})},{resumen:"titulo",nuevo:{imagen:"/img/check/checklist.webp",marco:"",etiqueta:"Etiqueta",titulo:"Nueva función",texto:"<p>Texto</p>",ancla:""}}),empezar:nv("Primera imagen",[["izquierda","A la izquierda"],["derecha","A la derecha"]],{radio:!0})},defaultProps:{funciones:[],empezar:"izquierda"},render:({funciones:a=[],empezar:b,puck:c})=>(0,ct.jsx)("section",{className:"check-funciones reveal",ref:c.dragRef,children:a.map((a,c)=>(0,ct.jsxs)("article",{className:(0,nE.K)("funcion",c%2==1!=("derecha"===b)&&"funcion--invertida"),id:(0,nE.M)(a.ancla),children:[a.marco?(0,ct.jsx)("div",{className:(0,nE.K)("funcion__visual","visual"!==a.marco&&`funcion__visual--${a.marco}`),children:(0,ct.jsx)(nE.m,{src:a.imagen,ancho:"icono"===a.marco?36:nY(a)?.[0],alto:"icono"===a.marco?36:nY(a)?.[1]})}):(0,ct.jsx)(nE.m,{src:a.imagen,ancho:544,alto:493}),(0,ct.jsxs)("div",{className:"funcion__texto",children:[a.etiqueta&&(0,ct.jsx)("span",{className:"etiqueta",children:a.etiqueta}),(0,ct.jsx)("h2",{children:a.titulo}),a.texto]})]},c))})}),n$=(0,nE.k)({label:"Integraciones (tarjetas chicas)",fields:{titulo:ns("Título"),texto:nt("Texto"),columnas:nv("Columnas",[["","Automático"],["tres","Tres por fila"]]),ancla:ns("Nombre para linkear (ej.: integraciones)",{editable:!1}),items:nx("Tarjetas",{logo:nA("Logo (opcional)"),logoAlt:ns("Nombre del logo",{editable:!1}),ajusteLogo:nv("Ajuste del logo",[["","Normal"],["relleno","Con margen"],["texto","Logo de texto (ancho)"]]),titulo:ns("Título"),texto:nt("Texto")},{resumen:"titulo",nuevo:{logo:"",logoAlt:"",ajusteLogo:"",titulo:"Nueva",texto:"Texto"}})},defaultProps:{titulo:"Integraciones",texto:"",columnas:"",ancla:"",items:[]},render:({titulo:a,texto:b,columnas:c,ancla:d,items:e=[],puck:f})=>(0,ct.jsxs)("section",{className:"integraciones reveal",id:(0,nE.M)(d),ref:f.dragRef,children:[(0,ct.jsxs)("div",{className:"integraciones__encabezado",children:[(0,ct.jsx)("h2",{className:"titulo-seccion-40",children:(0,nE.Z)(a)}),b&&(0,ct.jsx)("p",{children:(0,nE.Z)(b)})]}),(0,ct.jsx)("ul",{className:(0,nE.K)("integraciones__lista","tres"===c&&"integraciones__lista--tres"),children:e.map((a,b)=>(0,ct.jsxs)("li",{children:[a.logo&&(0,ct.jsx)(nE.m,{className:(0,nE.K)("integraciones__logo",a.ajusteLogo&&`integraciones__logo--${a.ajusteLogo}`),src:a.logo,alt:a.logoAlt,ancho:"texto"===a.ajusteLogo?74:56,alto:"texto"===a.ajusteLogo?28:56}),(0,ct.jsx)("h3",{children:a.titulo}),(0,ct.jsx)("p",{children:(0,nE.Z)(a.texto)})]},b))})]})}),n_=[["gastronomicas","Gastronómicas"],["retail","Retail"],["productividad","Productividad"]],n0=(0,nE.k)({label:"Grilla de clientes (con filtros)",fields:{textoTodos:ns('Botón "todos"',{editable:!1}),filtros:nx("Nombres de los filtros",{clave:nv("Industria",n_),nombre:ns("Texto del botón",{editable:!1})},{resumen:"nombre",min:1,max:3}),clientes:nx("Clientes",{foto:nA("Foto de fondo"),logo:nA("Logo"),nombre:ns("Nombre",{editable:!1}),rubro:ns("Rubro (texto de la tarjeta)"),industria:nv("Aparece en el filtro",n_),tambien:nv("También en",[["","—"],...n_]),logoClaro:nv("Logo",[[!1,"Normal"],[!0,"Claro (sobre foto oscura)"]],{radio:!0})},{resumen:"nombre",nuevo:{foto:"",logo:"",nombre:"Nuevo cliente",rubro:"Gastronómica",industria:"gastronomicas",tambien:"",logoClaro:!1}}),vacio:nt("Mensaje si un filtro no tiene clientes")},defaultProps:{textoTodos:"TODOS",filtros:[],clientes:[],vacio:"Muy pronto vas a ver acá a los clientes de esta industria."},render:({textoTodos:a,filtros:b=[],clientes:c=[],vacio:d,puck:e})=>(0,ct.jsxs)("section",{"data-filtros":!0,ref:e.dragRef,children:[(0,ct.jsxs)("div",{className:"filtros",role:"group","aria-label":"Filtrar clientes por industria",children:[(0,ct.jsx)("button",{className:"is-activa",type:"button","data-filtro":"todos","aria-pressed":"true",children:a}),b.map((a,b)=>(0,ct.jsx)("button",{type:"button","data-filtro":a.clave,"aria-pressed":"false",children:a.nombre},b))]}),(0,ct.jsxs)("div",{className:"grilla-clientes",children:[c.map((a,b)=>(0,ct.jsxs)("article",{className:"tarjeta-cliente","data-rubro":[a.industria,a.tambien].filter(Boolean).join(" "),children:[(0,ct.jsx)(nE.m,{className:"tarjeta-cliente__foto",src:a.foto,ancho:352,alto:139}),(0,ct.jsx)(nE.m,{className:(0,nE.K)("tarjeta-cliente__logo",a.logoClaro&&"tarjeta-cliente__logo--claro"),src:a.logo,alt:a.nombre,ancho:120,alto:120}),(0,ct.jsx)("span",{className:"tarjeta-cliente__rubro",children:a.rubro}),(0,ct.jsx)("span",{className:"tarjeta-cliente__nombre","aria-hidden":"true",children:a.nombre})]},b)),(0,ct.jsx)("p",{className:"grilla-clientes__vacio","data-vacio":!0,hidden:!0,children:d})]})]})}),n1=(0,nE.k)({label:"Botón flotante (esquina)",fields:{titulo:ns("Título"),texto:nt("Texto (se ve al pasar el mouse)"),botonTexto:ns("Texto del botón"),botonLink:nB("El botón lleva a")},defaultProps:{titulo:"¿Listo para usar Thinkion?",texto:"Unite a los líderes que confían en nosotros para impulsar su crecimiento",botonTexto:"PEDÍ TU DEMO",botonLink:"/demo"},render:({titulo:a,texto:b,botonTexto:c,botonLink:d,puck:e})=>(0,ct.jsxs)("aside",{className:"cta-flotante",tabIndex:0,"aria-label":"string"==typeof a?a:"Pedí tu demo",ref:e.dragRef,children:[(0,ct.jsx)("p",{className:"cta-flotante__titulo",children:a}),(0,ct.jsx)("p",{children:(0,nE.Z)(b)}),(0,ct.jsx)("a",{href:(0,nE.U)(d),children:c})]})});a.s(["BotonFlotante",0,n1,"Funciones",0,nZ,"GrillaClientes",0,n0,"HeroProducto",0,nS,"Integraciones",0,n$,"Logos",0,nX,"MediaProducto",0,nT,"Mockup",0,nV,"Ventajas",0,nU],95471);var n2=a.i(95471);let n3=(a="")=>String(a).normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"pestana",n4=(a,b)=>Math.min(Math.max((Number(a)||1)-1,0),Math.max(b-1,0)),n5=(0,nE.k)({label:"Portada (industria)",fields:{titulo:nt("Título",{editable:!1}),resaltado:ns("Palabra subrayada (tal cual está en el título)",{editable:!1}),bajada:nt("Bajada"),botonTexto:ns("Texto del botón"),botonLink:nB("El botón lleva a"),videoLink:nB("Video (YouTube, Vimeo o Drive)"),portada:nA("Imagen del video"),portadaAlt:ns("Descripción de la imagen",{editable:!1})},defaultProps:{titulo:"Título",resaltado:"",bajada:"",botonTexto:"Pedí tu demo",botonLink:"/demo",videoLink:"",portada:"/img/segmentos/video-sistema.webp",portadaAlt:""},render:({titulo:a,resaltado:b,bajada:c,botonTexto:d,botonLink:e,videoLink:f,portada:g,portadaAlt:h,puck:i})=>(0,ct.jsxs)("section",{className:"seg-hero",ref:i.dragRef,children:[(0,ct.jsxs)("div",{className:"seg-hero__texto",children:[(0,ct.jsx)("h1",{className:"seg-hero__titulo",children:(0,nE.L)(a,b,"seg-hero__subrayado")}),(0,ct.jsx)("p",{className:"seg-hero__bajada",children:(0,nE.Z)(c)}),d&&(0,ct.jsx)("a",{className:"boton",href:(0,nE.U)(e),children:d})]}),(0,ct.jsxs)("div",{className:"seg-video",children:[(0,ct.jsxs)("a",{className:"seg-video__enlace",href:(0,nE.U)(f),"aria-label":"Ver el video de Thinkion",children:[(0,ct.jsx)(nE.m,{src:g,alt:h,ancho:1121,alto:621,prioridad:!0}),(0,ct.jsx)("img",{className:"seg-video__play",src:"/img/segmentos/play-grande.svg",alt:"",width:"92",height:"111"})]}),(0,ct.jsx)("img",{className:"seg-video__marco",src:"/img/segmentos/marco-video-grande.svg",alt:"",width:"1187",height:"702","aria-hidden":"true"})]})]})}),n6=(0,nE.k)({label:"Módulos en pestañas",fields:{ancla:ns("Nombre para linkear (ej.: punto-de-venta)",{editable:!1}),pestanas:nx("Pestañas",{nombre:ns("Nombre de la pestaña",{editable:!1}),titulo:ns("Título"),items:nx("Beneficios",{icono:nA("Ícono"),texto:ns("Texto")},{resumen:"texto",nuevo:{icono:"/img/segmentos/icono-rayo.svg",texto:"Beneficio"}}),disposicion:nv("Imágenes",[["celular","Notebook + celular (a la derecha)"],["tablet","Notebook + tablet (a la izquierda)"]]),imagenGrande:nA("Imagen grande (notebook)"),imagenGrandeAlt:ns("Descripción",{editable:!1}),imagenChica:nA("Imagen chica (celular o tablet)"),imagenChicaAlt:ns("Descripción",{editable:!1})},{resumen:"nombre",nuevo:{nombre:"Nueva",titulo:"Título",items:[],disposicion:"celular",imagenGrande:"",imagenGrandeAlt:"",imagenChica:"",imagenChicaAlt:""}}),abierta:nK()},defaultProps:{ancla:"",pestanas:[],abierta:1},render:({ancla:a,pestanas:b=[],abierta:c,id:d,puck:e})=>{let f=n4(c,b.length),g=`modulos-${d||"x"}`.replace(/[^a-z0-9-]/gi,"");return(0,ct.jsxs)("section",{className:"seg-card reveal",id:a||void 0,"data-tabs":!0,ref:e.dragRef,children:[(0,ct.jsx)("img",{className:"seg-card__chevron",src:"/img/home/deco-chevron-tabs.svg",alt:"",width:"258",height:"490","aria-hidden":"true"}),(0,ct.jsx)("div",{className:"pestanas pestanas--ancha",role:"tablist","aria-label":"Módulos",children:b.map((a,b)=>(0,ct.jsx)("button",{className:(0,nE.K)("pestanas__boton",b===f&&"is-activa"),type:"button",role:"tab",id:`tab-${g}-${n3(a.nombre)}`,"aria-controls":`panel-${g}-${n3(a.nombre)}`,"aria-selected":b===f,"data-tab":n3(a.nombre),children:a.nombre},b))}),b.map((a,b)=>{let c=(0,ct.jsxs)("div",{className:"seg-panel__texto",children:[(0,ct.jsx)("h2",{children:a.titulo}),(0,ct.jsx)("ul",{className:"seg-lista",children:(a.items||[]).map((a,b)=>(0,ct.jsxs)("li",{children:[(0,ct.jsx)(nE.m,{src:a.icono,ancho:24,alto:24,perezosa:!1}),a.texto]},b))})]}),d="tablet"===a.disposicion,e=d?(0,ct.jsxs)("div",{className:"seg-panel__imagen seg-panel__imagen--adm",children:[(0,ct.jsx)(nE.m,{src:a.imagenGrande,alt:a.imagenGrandeAlt,ancho:538,alto:364}),(0,ct.jsx)(nE.m,{className:"seg-panel__tablet",src:a.imagenChica,alt:a.imagenChicaAlt,ancho:222,alto:256})]}):(0,ct.jsxs)("div",{className:"seg-panel__imagen",children:[(0,ct.jsx)(nE.m,{className:"seg-panel__notebook",src:a.imagenGrande,alt:a.imagenGrandeAlt,ancho:577,alto:355}),(0,ct.jsx)(nE.m,{className:"seg-panel__celular",src:a.imagenChica,alt:a.imagenChicaAlt,ancho:148,alto:311})]});return(0,ct.jsx)("div",{className:"seg-panel",role:"tabpanel",id:`panel-${g}-${n3(a.nombre)}`,"aria-labelledby":`tab-${g}-${n3(a.nombre)}`,"data-panel":n3(a.nombre),hidden:b!==f,children:d?(0,ct.jsxs)(ct.Fragment,{children:[e,c]}):(0,ct.jsxs)(ct.Fragment,{children:[c,e]})},b)})]})}}),n7=["ruta__paso--activo","","","ruta__paso--grande","ruta__paso--ancho",""],n8=(0,nE.k)({label:"Hoja de ruta (6 pasos)",fields:{titulo:nt("Título"),pasos:nx("Pasos",{icono:nA("Ícono"),texto:nt("Texto")},{resumen:"texto",min:6,max:6})},defaultProps:{titulo:"La instalación más fácil",pasos:[]},render:({titulo:a,pasos:b=[],puck:c})=>(0,ct.jsxs)("section",{className:"seg-ruta reveal",ref:c.dragRef,children:[(0,ct.jsx)("h2",{className:"titulo-40",children:(0,nE.Z)(a)}),(0,ct.jsxs)("div",{className:"ruta",children:[(0,ct.jsx)("img",{className:"ruta__lineas",src:"/img/segmentos/hoja-de-ruta-lineas.svg",alt:"",width:"1120",height:"290","aria-hidden":"true"}),b.slice(0,6).map((a,b)=>(0,ct.jsxs)("div",{className:(0,nE.K)("ruta__paso",n7[b]),children:[(0,ct.jsx)("span",{className:"ruta__icono",children:(0,ct.jsx)(nE.m,{src:a.icono,ancho:100,alto:81})}),(0,ct.jsx)("p",{children:(0,nE.Z)(a.texto)})]},b))]})]})}),n9=(0,nE.k)({label:"Datos destacados (calidad)",fields:{titulo:ns("Título"),texto:nu("Texto"),datos:nx("Datos",{icono:nA("Ícono chico"),cifra:ns("Cifra (ej.: 94,5)",{editable:!1}),unidad:ns("Unidad (ej.: %, min)",{editable:!1}),texto:nt("Texto")},{resumen:a=>`${a.cifra||""}${a.unidad||""}`,nuevo:{icono:"/img/segmentos/dato-check.svg",cifra:"100",unidad:"%",texto:"Texto"}})},defaultProps:{titulo:"Garantizamos la mejor calidad de atención",texto:"",datos:[]},render:({titulo:a,texto:b,datos:c=[],puck:d})=>(0,ct.jsx)("section",{className:"seg-calidad reveal",ref:d.dragRef,children:(0,ct.jsxs)("div",{className:"seg-calidad__contenido",children:[(0,ct.jsxs)("div",{className:"seg-calidad__texto",children:[(0,ct.jsx)("h2",{children:a}),b]}),(0,ct.jsx)("div",{className:"seg-datos",children:c.map((a,b)=>(0,ct.jsxs)("div",{className:"dato",children:[(0,ct.jsxs)("p",{className:"dato__cifra",children:[(0,ct.jsx)("span",{className:"dato__icono",children:(0,ct.jsx)(nE.m,{src:a.icono,ancho:12,alto:12,perezosa:!1})}),a.cifra,(0,ct.jsx)("small",{children:a.unidad})]}),(0,ct.jsx)("p",{children:(0,nE.Z)(a.texto)})]},b))})]})})}),oa=(0,nE.k)({label:"Tarjetas con imagen (tecnología)",fields:{titulo:nt("Título"),tarjetas:nx("Tarjetas",{imagen:nA("Imagen"),titulo:ns("Título"),texto:nt("Texto")},{resumen:"titulo",nuevo:{imagen:"/img/segmentos/tec-ia.webp",titulo:"Nueva",texto:"Texto"}})},defaultProps:{titulo:"Tecnología de vanguardia",tarjetas:[]},render:({titulo:a,tarjetas:b=[],puck:c})=>(0,ct.jsxs)("section",{className:"seg-tecno reveal",ref:c.dragRef,children:[(0,ct.jsx)("h2",{className:"titulo-40",children:(0,nE.Z)(a)}),(0,ct.jsx)("div",{className:"tecno-grilla",children:b.map((a,b)=>(0,ct.jsxs)("article",{className:"tecno-card",children:[(0,ct.jsx)(nE.m,{src:a.imagen,alto:170}),(0,ct.jsx)("h3",{children:a.titulo}),(0,ct.jsx)("p",{children:(0,nE.Z)(a.texto)})]},b))})]})}),ob=(0,nE.k)({label:"Productos (lista con detalle)",fields:{productos:nx("Productos",{nombre:ns("Nombre",{editable:!1}),icono:nA("Ícono"),foto1:nA("Foto 1"),foto2:nA("Foto 2"),celular:nA("Pantalla en el celular"),celularAlt:ns("Descripción del celular",{editable:!1}),texto:nt("Texto"),linkTexto:ns("Texto del link"),link:nB("El link lleva a")},{resumen:"nombre",nuevo:{nombre:"Nuevo producto",icono:"",foto1:"",foto2:"",celular:"",celularAlt:"",texto:"Texto",linkTexto:"Conocer más",link:"/"}}),abierta:nK("Producto abierto al cargar")},defaultProps:{productos:[],abierta:1},render:({productos:a=[],abierta:b,id:c,puck:d})=>{let e=n4(b,a.length),f=`productos-${c||"x"}`.replace(/[^a-z0-9-]/gi,"");return(0,ct.jsxs)("section",{className:"seg-productos reveal","data-tabs":!0,ref:d.dragRef,children:[(0,ct.jsx)("div",{className:"productos-lista",role:"tablist","aria-label":"Productos",children:a.map((a,b)=>(0,ct.jsxs)("button",{className:(0,nE.K)("pestanas__boton",b===e&&"is-activa"),type:"button",role:"tab",id:`tab-${f}-${n3(a.nombre)}`,"aria-controls":`panel-${f}-${n3(a.nombre)}`,"aria-selected":b===e,"data-tab":n3(a.nombre),children:[(0,ct.jsx)(nE.m,{src:a.icono,ancho:36,alto:36,perezosa:!1}),a.nombre]},b))}),a.map((a,b)=>(0,ct.jsxs)("div",{className:"producto",role:"tabpanel",id:`panel-${f}-${n3(a.nombre)}`,"aria-labelledby":`tab-${f}-${n3(a.nombre)}`,"data-panel":n3(a.nombre),hidden:b!==e,children:[(0,ct.jsxs)("div",{className:"producto__fotos",children:[(0,ct.jsxs)("div",{className:"producto__columna",children:[(0,ct.jsx)(nE.m,{src:a.foto1,ancho:352,alto:274}),(0,ct.jsx)(nE.m,{src:a.foto2,ancho:352,alto:274})]}),(0,ct.jsx)("div",{className:"producto__celular",children:(0,ct.jsx)(nE.m,{src:a.celular,alt:a.celularAlt,ancho:299,alto:542})})]}),(0,ct.jsxs)("div",{className:"producto__pie",children:[(0,ct.jsx)("div",{className:"producto__barra",children:(0,ct.jsx)("span",{})}),(0,ct.jsxs)("div",{className:"producto__texto",children:[(0,ct.jsx)("p",{children:(0,nE.Z)(a.texto)}),a.linkTexto&&(0,ct.jsx)("a",{className:"boton-borde",href:(0,nE.U)(a.link),children:a.linkTexto})]})]})]},b))]})}});a.s(["Calidad",0,n9,"HeroIndustria",0,n5,"HojaDeRuta",0,n8,"ModulosPestanas",0,n6,"Productos",0,ob,"Tecnologia",0,oa],71729);var oc=a.i(71729);let od=(0,nE.k)({label:"Portada (institucional)",fields:{titulo:nt("Título"),texto:nu("Texto"),imagen:nA("Imagen"),imagenAlt:ns("Descripción de la imagen",{editable:!1})},defaultProps:{titulo:"Título",texto:"<p>Texto</p>",imagen:"/img/nosotros/hero-ecosistema-544.webp",imagenAlt:""},render:({titulo:a,texto:b,imagen:c,imagenAlt:d,puck:e})=>{let f="/img/nosotros/hero-ecosistema-544.webp"===c;return(0,ct.jsxs)("section",{className:"nos-hero",ref:e.dragRef,children:[(0,ct.jsxs)("div",{className:"nos-hero__texto",children:[(0,ct.jsx)("h1",{children:(0,nE.Z)(a)}),b]}),c&&(0,ct.jsx)("img",{className:"nos-hero__imagen",src:c,alt:d,width:"544",height:"362",fetchPriority:"high",srcSet:f?"/img/nosotros/hero-ecosistema-544.webp 544w, /img/nosotros/hero-ecosistema-816.webp 816w, /img/nosotros/hero-ecosistema.webp 1088w":void 0,sizes:f?"(max-width: 576px) calc(100vw - 32px), 544px":void 0})]})}}),oe=(0,nE.k)({label:"Valores (tarjetas alternadas)",fields:{titulo:ns("Título"),texto:nu("Texto"),valores:nx("Valores",{imagen:nA("Imagen"),titulo:ns("Título"),texto:nu("Texto")},{resumen:"titulo",nuevo:{imagen:"/img/nosotros/valor-equipo.webp",titulo:"Nuevo valor",texto:"<p>Texto</p>"}})},defaultProps:{titulo:"Los valores que nos definen",texto:"",valores:[]},render:({titulo:a,texto:b,valores:c=[],puck:d})=>(0,ct.jsxs)("section",{className:"nos-valores reveal",ref:d.dragRef,children:[(0,ct.jsxs)("div",{className:"nos-valores__encabezado",children:[(0,ct.jsx)("h2",{className:"titulo-seccion-40",children:a}),b]}),(0,ct.jsx)("div",{className:"valores",children:c.map((a,b)=>{let c=b%2==0,d=(0,ct.jsxs)("div",{className:"valor__card",children:[(0,ct.jsx)("h3",{children:a.titulo}),a.texto]}),e=(0,ct.jsx)(nE.m,{src:a.imagen,ancho:230,alto:260});return(0,ct.jsx)("article",{className:(0,nE.K)("valor",c?"valor--izq":"valor--der"),children:c?(0,ct.jsxs)(ct.Fragment,{children:[e,d]}):(0,ct.jsxs)(ct.Fragment,{children:[d,e]})},b)})})]})}),of=(0,nE.k)({label:"Línea de tiempo",fields:{titulo:ns("Título"),texto:nt("Texto"),hitos:nx("Años",{anio:ns("Año",{editable:!1}),titulo:ns("Título"),texto:nt("Texto")},{resumen:"anio",nuevo:{anio:"2026",titulo:"Título",texto:"Texto"}})},defaultProps:{titulo:"Nuestra evolución",texto:"",hitos:[]},render:({titulo:a,texto:b,hitos:c=[],puck:d})=>(0,ct.jsxs)("section",{className:"evolucion reveal","data-linea-tiempo":!0,ref:d.dragRef,children:[(0,ct.jsxs)("div",{className:"evolucion__encabezado",children:[(0,ct.jsx)("h2",{children:a}),(0,ct.jsx)("p",{children:(0,nE.Z)(b)})]}),(0,ct.jsx)("div",{className:"anios",children:(0,ct.jsx)("div",{className:"anios__lista",children:c.map((a,b)=>(0,ct.jsx)("button",{className:0===b?"is-activo":"",type:"button","data-anio":a.anio,"aria-label":`Ver ${a.anio}`,children:a.anio},b))})}),(0,ct.jsx)("div",{className:"anios__linea","aria-hidden":"true",children:(0,ct.jsx)("span",{className:"anios__punto"})}),(0,ct.jsxs)("div",{className:"evolucion__pie",children:[(0,ct.jsx)("div",{className:"evolucion__hitos",children:c.map((a,b)=>(0,ct.jsxs)("div",{className:"hito","data-hito":a.anio,hidden:0!==b,children:[(0,ct.jsx)("h3",{children:a.titulo}),(0,ct.jsx)("p",{children:(0,nE.Z)(a.texto)})]},b))}),(0,ct.jsxs)("div",{className:"evolucion__flechas",children:[(0,ct.jsx)("button",{type:"button","data-anterior":!0,"aria-label":"Año anterior",disabled:!0,children:(0,ct.jsx)("img",{src:"/img/nosotros/flecha-izquierda.svg",alt:"",width:"16",height:"12"})}),(0,ct.jsx)("button",{type:"button","data-siguiente":!0,"aria-label":"Año siguiente",children:(0,ct.jsx)("img",{src:"/img/nosotros/flecha-derecha.svg",alt:"",width:"16",height:"12"})})]})]})]})}),og=(0,nE.k)({label:"Texto largo con título",fields:{titulo:ns("Título"),texto:nu("Texto")},defaultProps:{titulo:"Título",texto:"<p>Texto</p>"},render:({titulo:a,texto:b,puck:c})=>(0,ct.jsxs)("section",{className:"politica reveal",ref:c.dragRef,children:[(0,ct.jsx)("h2",{className:"titulo-seccion-40",children:a}),(0,ct.jsx)("div",{className:"politica__texto",children:b})]})}),oh=a=>nx(a,{opcion:ns("Opción",{editable:!1})},{resumen:"opcion",nuevo:{opcion:"Nueva opción"}}),oi=(a=[])=>a.map(a=>a.opcion).filter(Boolean),oj=(0,nE.k)({label:"Formulario: pedí tu demo",fields:{etiqueta:ns("Etiqueta"),titulo:ns("Título"),texto:nu("Texto"),pasos:nx("Pasos",{destacado:ns("En negrita"),texto:ns("Resto del texto")},{resumen:"destacado",nuevo:{destacado:"Paso",texto:"descripción."}}),tiposLocal:oh('Opciones de "Tipo de local"'),aviso:ns("Aviso debajo del formulario"),botonTexto:ns("Texto del botón"),destino:nB("Enviar a (dirección que recibe los datos)")},defaultProps:{etiqueta:"Demo personalizada",titulo:"Pedí tu demo",texto:"",pasos:[],tiposLocal:[],aviso:"",botonTexto:"Pedir mi demo",destino:""},render:({etiqueta:a,titulo:b,texto:c,pasos:d=[],tiposLocal:e,aviso:f,botonTexto:g,destino:h,puck:i})=>(0,ct.jsxs)("section",{className:"postulacion demo",ref:i.dragRef,children:[(0,ct.jsxs)("div",{className:"demo__info",children:[a&&(0,ct.jsx)("span",{className:"etiqueta",children:a}),(0,ct.jsx)("h1",{children:b}),c,(0,ct.jsx)("ol",{className:"demo__pasos",children:d.map((a,b)=>(0,ct.jsxs)("li",{children:[(0,ct.jsx)("b",{children:b+1}),(0,ct.jsxs)("span",{children:[(0,ct.jsx)("strong",{children:a.destacado})," ",a.texto]})]},b))})]}),(0,ct.jsxs)("form",{className:"formulario demo__formulario",action:(0,nE.U)(h),method:"post",children:[(0,ct.jsxs)("fieldset",{children:[(0,ct.jsx)("legend",{children:"Tus datos"}),(0,ct.jsxs)("div",{className:"formulario__grilla",children:[(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Nombre completo"}),(0,ct.jsx)("input",{type:"text",name:"nombre",placeholder:"Pepito Pérez",autoComplete:"name",required:!0})]}),(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Tel. de contacto"}),(0,ct.jsx)("input",{type:"tel",name:"telefono",placeholder:"+54 9 11 1234-5678",autoComplete:"tel",required:!0})]}),(0,ct.jsxs)("label",{className:"campo campo--ancho",children:[(0,ct.jsx)("span",{children:"Correo electrónico"}),(0,ct.jsx)("input",{type:"email",name:"email",placeholder:"ejemplo@email.com",autoComplete:"email",required:!0})]})]})]}),(0,ct.jsxs)("fieldset",{children:[(0,ct.jsx)("legend",{children:"Tu negocio"}),(0,ct.jsxs)("div",{className:"formulario__grilla",children:[(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Ubicación del local"}),(0,ct.jsx)("input",{type:"text",name:"ubicacion",placeholder:"Palermo, CABA",autoComplete:"address-level2",required:!0})]}),(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Tipo de local"}),(0,ct.jsxs)("select",{name:"tipo_local",required:!0,defaultValue:"",children:[(0,ct.jsx)("option",{value:"",disabled:!0,children:"Elegí una opción"}),oi(e).map(a=>(0,ct.jsx)("option",{children:a},a))]})]})]})]}),f&&(0,ct.jsx)("p",{className:"demo__aviso",children:f}),(0,ct.jsx)("button",{className:"boton formulario__enviar",type:"submit",children:g})]})]})}),ok=(0,nE.k)({label:"Formulario: trabajá con nosotros",fields:{titulo:ns("Título"),texto:nt("Texto"),ciudadInicial:ns('"Ciudad": texto antes de elegir',{editable:!1}),ciudades:oh('Opciones de "Ciudad"'),puestoInicial:ns('"Puesto": texto antes de elegir',{editable:!1}),puestos:oh('Opciones de "Puesto"'),nivelInicial:ns('"Nivel de experiencia": texto antes de elegir',{editable:!1}),niveles:oh('Opciones de "Nivel de experiencia"'),botonTexto:ns("Texto del botón"),destino:nB("Enviar a (dirección que recibe los datos)")},defaultProps:{titulo:"Unite a nuestro equipo",texto:"",ciudadInicial:"",ciudades:[],puestoInicial:"",puestos:[],nivelInicial:"",niveles:[],botonTexto:"Enviar postulación",destino:""},render:({titulo:a,texto:b,ciudadInicial:c,ciudades:d,puestoInicial:e,puestos:f,nivelInicial:g,niveles:h,botonTexto:i,destino:j,puck:k})=>{let l=(a,b,c)=>{let d=oi(b);return(0,ct.jsxs)("select",{name:a,required:!0,defaultValue:"",children:[(0,ct.jsx)("option",{value:"",disabled:!0,children:c||d[0]||"Elegí una opción"}),d.map(a=>(0,ct.jsx)("option",{children:a},a))]})};return(0,ct.jsxs)("section",{className:"postulacion",id:"trabaja-con-nosotros",ref:k.dragRef,children:[(0,ct.jsxs)("div",{className:"postulacion__encabezado",children:[(0,ct.jsx)("h1",{children:a}),(0,ct.jsx)("p",{children:(0,nE.Z)(b)})]}),(0,ct.jsxs)("form",{className:"formulario",action:(0,nE.U)(j),method:"post",encType:"multipart/form-data",children:[(0,ct.jsxs)("fieldset",{children:[(0,ct.jsx)("legend",{children:"Datos personales"}),(0,ct.jsxs)("div",{className:"formulario__grilla",children:[(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Nombre completo"}),(0,ct.jsx)("input",{type:"text",name:"nombre",placeholder:"Pepito Pérez",autoComplete:"name",required:!0})]}),(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Correo electrónico"}),(0,ct.jsx)("input",{type:"email",name:"email",placeholder:"ejemplo@email.com",autoComplete:"email",required:!0})]}),(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Tel. de contacto"}),(0,ct.jsx)("input",{type:"tel",name:"telefono",placeholder:"+54 9 11 1234-5678",autoComplete:"tel"})]}),(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Ciudad de residencia"}),l("ciudad",d,c)]})]})]}),(0,ct.jsxs)("fieldset",{children:[(0,ct.jsx)("legend",{children:"Perfil profesional"}),(0,ct.jsxs)("div",{className:"formulario__grilla",children:[(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Puesto laboral"}),l("puesto",f,e)]}),(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Nivel de experiencia"}),l("experiencia",h,g)]}),(0,ct.jsxs)("div",{className:"campo campo--archivo","data-archivo":!0,children:[(0,ct.jsx)("span",{children:"Adjuntar CV"}),(0,ct.jsxs)("label",{children:[(0,ct.jsx)("input",{type:"file",name:"cv",accept:".pdf,.doc,.docx"}),(0,ct.jsx)("img",{src:"/img/nosotros/icono-subir.svg",alt:"",width:"58",height:"41"}),(0,ct.jsxs)("small",{"data-archivo-texto":!0,children:["Arrastrá el archivo o",(0,ct.jsx)("br",{}),(0,ct.jsx)("b",{children:"seleccionalo desde aquí"})]})]})]}),(0,ct.jsxs)("label",{className:"campo",children:[(0,ct.jsx)("span",{children:"Carta de presentación (opcional)"}),(0,ct.jsx)("textarea",{name:"carta",placeholder:"Mensaje de presentación..."})]})]})]}),(0,ct.jsx)("button",{className:"boton formulario__enviar",type:"submit",children:i})]})]})}}),ol=(0,nE.k)({label:"Aviso: página en construcción",fields:{etiqueta:ns("Etiqueta"),titulo:ns("Título"),texto:nt("Texto"),links:nx("Otras páginas para visitar",{texto:ns("Texto"),link:nB("Lleva a")},{resumen:"texto",nuevo:{texto:"Página",link:"/"}})},defaultProps:{etiqueta:"Retail",titulo:"Estamos construyendo esta página",texto:"",links:[]},render:({etiqueta:a,titulo:b,texto:c,links:d=[],puck:e})=>(0,ct.jsxs)("section",{className:"construccion__card",ref:e.dragRef,children:[(0,ct.jsx)("span",{className:"construccion__icono","aria-hidden":"true",children:(0,ct.jsx)("svg",{viewBox:"0 0 24 24",width:"40",height:"40",children:(0,ct.jsx)("path",{fill:"currentColor",d:"M13.8 3.2a1 1 0 0 1 1.4 0l5.6 5.6a1 1 0 0 1 0 1.4l-1.4 1.4a1 1 0 0 1-1.4 0l-.7-.7-7.9 7.9a2.5 2.5 0 1 1-3.5-3.5l7.9-7.9-.7-.7a1 1 0 0 1 0-1.4l.7-.7zM5.3 17.3a.5.5 0 1 0 .7.7.5.5 0 0 0-.7-.7z"})})}),a&&(0,ct.jsx)("p",{className:"construccion__etiqueta",children:a}),(0,ct.jsx)("h1",{children:b}),(0,ct.jsx)("p",{className:"construccion__texto",children:(0,nE.Z)(c)}),(0,ct.jsxs)("div",{className:"construccion__botones",children:[(0,ct.jsx)("a",{className:"boton",href:"/",children:"Volver al inicio"}),(0,ct.jsx)("a",{className:"boton-borde construccion__atras",href:"/","data-volver":!0,children:"Volver atrás"})]}),d.length>0&&(0,ct.jsxs)("nav",{className:"construccion__links","aria-label":"Otras páginas",children:[(0,ct.jsx)("span",{children:"O visitá:"}),d.map((a,b)=>(0,ct.jsx)("a",{href:(0,nE.U)(a.link),children:a.texto},b))]})]})});a.s(["EnConstruccion",0,ol,"Evolucion",0,of,"FormularioDemo",0,oj,"FormularioEmpleo",0,ok,"HeroNosotros",0,od,"TextoLargo",0,og,"Valores",0,oe],28124);var om=a.i(28124);let on=["Titulo","Texto","Imagen","Boton","Video","Carrusel","Espacio","Columnas"],oo=[["izquierda","Izquierda"],["centro","Centro"],["derecha","Derecha"]],op={chico:"24px",mediano:"40px",grande:"72px",ninguno:"0px"},oq=(0,nE.k)({label:"Sección",fields:{contenido:{type:"slot",label:"Contenido",allow:on},fondo:nv("Fondo",[["","Sin fondo"],["tarjeta","Tarjeta blanca"],["lila","Lila"],["azul","Azul"]]),ancho:nv("Ancho",[["contenido","Como el resto de la página"],["completa","Toda la pantalla"]]),alineacion:nv("Alinear contenido",[["","Izquierda"],["centro","Centro"]]),espacio:nv("Espacio arriba y abajo",[["chico","Chico"],["mediano","Mediano"],["grande","Grande"],["ninguno","Ninguno"]]),ancla:ns("Nombre para linkear (opcional, ej.: precios)",{editable:!1})},defaultProps:{contenido:[],fondo:"",ancho:"contenido",alineacion:"",espacio:"mediano",ancla:""},render:({contenido:a,fondo:b,ancho:c,alineacion:d,espacio:e,ancla:f,puck:g})=>(0,ct.jsx)("section",{ref:g.dragRef,id:f||void 0,className:(0,nE.K)("bloque-seccion","completa"===c&&"bloque-seccion--completa",b&&`bloque-seccion--${b}`,"centro"===d&&"bloque-seccion--centro"),style:{"--bloque-espacio":op[e]||op.mediano},children:(0,ct.jsx)(a,{className:"bloque-seccion__zona"})})}),or={"1-1":["1fr 1fr",2],"1-2":["1fr 2fr",2],"2-1":["2fr 1fr",2],"1-1-1":["1fr 1fr 1fr",3],"1-1-1-1":["1fr 1fr 1fr 1fr",4]},os=(0,nE.k)({label:"Columnas",fields:{proporcion:nv("Columnas",[["1-1","Dos iguales"],["1-2","Dos: angosta + ancha"],["2-1","Dos: ancha + angosta"],["1-1-1","Tres iguales"],["1-1-1-1","Cuatro iguales"]]),alinear:nv("Alinear verticalmente",[["start","Arriba"],["center","Centro"],["end","Abajo"]]),separacion:nv("Separación",[["16px","Chica"],["32px","Mediana"],["64px","Grande"]]),celular:nv("En el celular",[["","Una debajo de la otra"],["invertir","Una debajo de la otra, empezando por la última"]]),col1:{type:"slot",label:"Columna 1",allow:on},col2:{type:"slot",label:"Columna 2",allow:on},col3:{type:"slot",label:"Columna 3",allow:on},col4:{type:"slot",label:"Columna 4",allow:on}},defaultProps:{proporcion:"1-1",alinear:"start",separacion:"32px",celular:"",col1:[],col2:[],col3:[],col4:[]},render:({proporcion:a,alinear:b,separacion:c,celular:d,col1:e,col2:f,col3:g,col4:h,puck:i})=>{let[j,k]=or[a]||or["1-1"];return(0,ct.jsx)("div",{ref:i.dragRef,className:(0,nE.K)("bloque-columnas","invertir"===d&&"bloque-columnas--invertir"),style:{"--bloque-columnas":j,"--bloque-alinear":b,"--bloque-gap":c},children:[e,f,g,h].slice(0,k).map((a,b)=>(0,ct.jsx)(a,{className:"bloque-columnas__col"},b))})}}),ot=(0,nE.k)({label:"Título",fields:{texto:nt("Texto"),nivel:nv("Importancia (para Google)",[["h2","Título de sección"],["h3","Subtítulo"],["h1","Título principal de la página (uno solo)"]]),tamano:nv("Tamaño",[["grande","Grande"],["mediano","Mediano"],["chico","Chico"]]),alineacion:nv("Alineación",oo),color:((a="Color")=>nv(a,nz))()},defaultProps:{texto:"Nuevo título",nivel:"h2",tamano:"mediano",alineacion:"centro",color:""},render:({texto:a,nivel:b="h2",tamano:c,alineacion:d,color:e,puck:f})=>{let g=["h1","h2","h3"].includes(b)?b:"h2";return(0,ct.jsx)(g,{ref:f.dragRef,className:(0,nE.K)("bloque-titulo",`bloque-titulo--${c||"mediano"}`,`bloque--${d||"centro"}`,e&&`bloque-color--${e}`),children:(0,nE.Z)(a)})}}),ou=(0,nE.k)({label:"Texto",fields:{texto:nu("Texto"),alineacion:nv("Alineación",oo),color:((a="Color")=>nv(a,nz))(),ancho:nv("Ancho máximo",[["","Todo el espacio"],["720px","Mediano (más fácil de leer)"],["520px","Angosto"]])},defaultProps:{texto:"<p>Escribí acá el texto.</p>",alineacion:"izquierda",color:"",ancho:""},render:({texto:a,alineacion:b,color:c,ancho:d,puck:e})=>(0,ct.jsx)("div",{ref:e.dragRef,className:(0,nE.K)("bloque-texto",`bloque--${b||"izquierda"}`,c&&`bloque-color--${c}`),style:d?{maxWidth:d,marginLeft:"izquierda"===b?void 0:"auto",marginRight:"centro"===b?"auto":void 0}:void 0,children:a})}),ov=(0,nE.k)({label:"Imagen",fields:{imagen:nA("Imagen"),alt:ns("Descripción (para Google y lectores de pantalla)",{editable:!1}),ancho:nv("Ancho",[["100%","Todo el espacio"],["75%","Tres cuartos"],["50%","La mitad"],["320px","Chica"]]),alineacion:nv("Alineación",oo),redondeada:nv("Bordes",[[!1,"Rectos"],[!0,"Redondeados"]],{radio:!0}),epigrafe:ns("Epígrafe (opcional)"),link:nB("Al tocarla lleva a (opcional)")},defaultProps:{imagen:"/img/home/video-portada.webp",alt:"",ancho:"100%",alineacion:"centro",redondeada:!0,epigrafe:"",link:""},render:({imagen:a,alt:b,ancho:c,alineacion:d,redondeada:e,epigrafe:f,link:g,puck:h})=>{let i=(0,ct.jsx)(nE.m,{src:a,alt:b});return(0,ct.jsxs)("figure",{ref:h.dragRef,className:(0,nE.K)("bloque-imagen",`bloque-imagen--${d||"centro"}`,e&&"bloque-imagen--redondeada"),style:{"--bloque-ancho":c||"100%",flexDirection:"column",alignItems:"izquierda"===d?"flex-start":"derecha"===d?"flex-end":"center"},children:[g?(0,ct.jsx)("a",{href:(0,nE.U)(g),style:{display:"contents"},children:i}):i,f&&(0,ct.jsx)("figcaption",{children:f})]})}}),ow=(0,nE.k)({label:"Botón",fields:{texto:ns("Texto"),link:nB("Lleva a"),estilo:nv("Estilo",[["coral","Coral (principal)"],["azul","Azul"],["borde","Con borde"]]),alineacion:nv("Alineación",oo)},defaultProps:{texto:"Pedí tu demo",link:"/demo",estilo:"coral",alineacion:"centro"},render:({texto:a,link:b,estilo:c,alineacion:d,puck:e})=>(0,ct.jsx)("div",{ref:e.dragRef,className:(0,nE.K)("bloque-boton",`bloque-boton--${d||"centro"}`),children:(0,ct.jsx)("a",{className:"borde"===c?"boton-borde":(0,nE.K)("boton","azul"===c&&"boton--azul"),href:(0,nE.U)(b),children:a})})}),ox=(0,nE.k)({label:"Video",fields:{videoLink:nB("Video (YouTube, Vimeo, Google Drive o .mp4)"),portada:nA("Imagen de portada"),titulo:ns("Título del video (para lectores de pantalla)",{editable:!1}),ancho:nv("Ancho",[["100%","Todo el espacio"],["75%","Tres cuartos"],["50%","La mitad"]])},defaultProps:{videoLink:"",portada:"/img/home/video-portada.webp",titulo:"Ver el video",ancho:"100%"},render:({videoLink:a,portada:b,titulo:c,ancho:d,puck:e})=>(0,ct.jsxs)("a",{ref:e.dragRef,className:"bloque-video",href:(0,nE.U)(a),"aria-label":c||"Ver el video",style:{"--bloque-ancho":d||"100%"},children:[(0,ct.jsx)(nE.m,{src:b,alt:""}),(0,ct.jsx)("img",{className:"bloque-video__play",src:"/img/home/play.svg",alt:"",width:"64",height:"72"})]})}),oy=(0,nE.k)({label:"Carrusel",fields:{estilo:nv("Estilo",[["logos","Logos (en gris, se colorean al pasar)"],["imagenes","Imágenes"],["tarjetas","Tarjetas con texto"]]),items:nx("Elementos",{imagen:nA("Imagen"),alt:ns("Descripción de la imagen",{editable:!1}),titulo:ns("Título (tarjetas)"),texto:nt("Texto (tarjetas)"),link:nB("Al tocarlo lleva a (opcional)")},{resumen:a=>a.titulo||a.alt,nuevo:{imagen:"",alt:"",titulo:"",texto:"",link:""}}),porVista:nw("Cuántos se ven a la vez (escritorio)",{min:1,max:6}),porVistaMovil:nw("Cuántos se ven a la vez (celular)",{min:1,max:3}),automatico:nv("Pasa solo",[[!0,"Sí"],[!1,"No, solo con flechas"]],{radio:!0}),segundos:nw("Segundos entre cada paso",{min:2,max:15})},defaultProps:{estilo:"logos",items:[],porVista:5,porVistaMovil:2,automatico:!0,segundos:4},render:({estilo:a,items:b=[],porVista:c,porVistaMovil:d,automatico:e,segundos:f,puck:g})=>(0,ct.jsxs)("div",{ref:g.dragRef,className:(0,nE.K)("bloque-carrusel",`bloque-carrusel--${a||"logos"}`),"data-carrusel-generico":!0,"data-automatico":e?"si":"no","data-segundos":f||4,style:{"--por-vista":c||4,"--por-vista-movil":d||1},role:"region","aria-roledescription":"carrusel","aria-label":"Carrusel",children:[(0,ct.jsx)("button",{className:"bloque-carrusel__flecha bloque-carrusel__flecha--anterior",type:"button","data-anterior":!0,"aria-label":"Anterior",children:"‹"}),(0,ct.jsx)("div",{className:"bloque-carrusel__pista",children:b.map((b,c)=>{let d=(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)(nE.m,{src:b.imagen,alt:b.alt}),"tarjetas"===a&&b.titulo&&(0,ct.jsx)("h3",{children:b.titulo}),"tarjetas"===a&&b.texto&&(0,ct.jsx)("p",{children:(0,nE.Z)(b.texto)})]});return b.link?(0,ct.jsx)("a",{className:"bloque-carrusel__item",href:(0,nE.U)(b.link),children:d},c):(0,ct.jsx)("div",{className:"bloque-carrusel__item",children:d},c)})}),(0,ct.jsx)("button",{className:"bloque-carrusel__flecha bloque-carrusel__flecha--siguiente",type:"button","data-siguiente":!0,"aria-label":"Siguiente",children:"›"})]})}),oz=(0,nE.k)({label:"Espacio",fields:{alto:nv("Alto",[["24px","Chico"],["56px","Mediano"],["96px","Grande"],["140px","Muy grande"]])},defaultProps:{alto:"56px"},render:({alto:a,puck:b})=>(0,ct.jsx)("div",{ref:b.dragRef,className:"bloque-espaciador",style:{"--bloque-alto":a||"56px"},"aria-hidden":"true"})});a.s(["BLOQUES_INTERNOS",0,on,"Boton",0,ow,"Carrusel",0,oy,"Columnas",0,os,"Espacio",0,oz,"Imagen",0,ov,"Seccion",0,oq,"Texto",0,ou,"Titulo",0,ot,"Video",0,ox],12367);var oA=a.i(12367),oB=a.i(21659);let{BLOQUES_INTERNOS:oC,...oD}=oA,{pestanaAbierta:oE,...oF}=nR,oG={categories:{armar:{title:"Armar secciones",components:["Seccion","Columnas","Titulo","Texto","Imagen","Boton","Video","Carrusel","Espacio"],defaultExpanded:!0},inicio:{title:"Secciones del Home",components:["HeroInicio","Diferenciales","DiagramaSoluciones","Industrias","ClientesCarrusel","PreguntasFrecuentes","Separador","LlamadoFinal"]},producto:{title:"Secciones de producto",components:["HeroProducto","MediaProducto","Ventajas","Mockup","Logos","Funciones","Integraciones"]},industria:{title:"Secciones de industria",components:["HeroIndustria","ModulosPestanas","HojaDeRuta","Calidad","Tecnologia","Productos"]},institucional:{title:"Institucional y formularios",components:["HeroNosotros","Valores","Evolucion","TextoLargo","GrillaClientes","BotonFlotante","FormularioDemo","FormularioEmpleo","EnConstruccion"]}},components:{...oD,...oF,...n2,...oc,...om},root:{fields:{titulo:ns("Título (pestaña del navegador y Google, hasta 60 letras)",{editable:!1}),descripcion:nt("Descripción para Google y al compartir (70 a 160 letras)",{editable:!1}),plantilla:nv("Estilo de la página (fondo y colores)",Object.entries(oB.d).map(([a,b])=>[a,b.label])),indexar:nv("Que aparezca en Google y en las IAs",[[!0,"Sí"],[!1,"No (página en construcción o privada)"]],{radio:!0}),productoNombre:ns('Producto: nombre (opcional, para Google: "Thinkion POS & ERP")',{editable:!1}),productoDescripcion:nt("Producto: descripción corta (opcional)",{editable:!1})},defaultProps:{titulo:"Thinkion",descripcion:"",plantilla:"producto",indexar:!0,productoNombre:"",productoDescripcion:""},render:oB.U}};var oH=a.i(91328),oI=a.i(1159),oJ=a.i(53783);let oK=ny("Menú",{items:nx("Opciones del menú",{tipo:nv("Tipo",[["link","Link"],["desplegable","Desplegable (con opciones)"]],{radio:!0}),texto:ns("Texto",{editable:!1}),link:nB("Lleva a (solo links)"),estilo:nv("Estilo del desplegable",[["soluciones","Con lista debajo (como Soluciones)"],["industrias","Con texto debajo (como Industrias)"]]),opciones:nx("Opciones del desplegable",{titulo:ns("Título",{editable:!1}),icono:nA("Ícono"),link:nB("Lleva a"),detalle:nt("Debajo: una línea por renglón (lista) o un texto",{editable:!1})},{resumen:"titulo",nuevo:{titulo:"Nueva opción",icono:"/img/home/menu-pos.svg",link:"/",detalle:""}})},{resumen:"texto",nuevo:{tipo:"link",texto:"Nuevo",link:"/",estilo:"soluciones",opciones:[]}}),botonTexto:ns("Botón de la derecha: texto (vacío = sin botón)",{editable:!1}),botonLink:nB("Botón de la derecha: lleva a")}),oL=ny("Pie de página (footer)",{logo:nA("Logo"),sellos:nA("Sellos / certificaciones"),sellosAlt:ns("Descripción de los sellos",{editable:!1}),columnas:nx("Columnas de links",{titulo:ns("Título",{editable:!1}),links:nx("Links",{texto:ns("Texto",{editable:!1}),link:nB("Lleva a")},{resumen:"texto",nuevo:{texto:"Nuevo link",link:"/"}})},{resumen:"titulo",nuevo:{titulo:"Columna",links:[]}}),contactoTitulo:ns("Título de contacto",{editable:!1}),email:ns("Mail de contacto",{editable:!1}),redes:nx("Redes sociales",{nombre:ns("Nombre (ej.: Instagram)",{editable:!1}),link:nB("Dirección"),icono:nA("Ícono")},{resumen:"nombre",nuevo:{nombre:"Red",link:"https://",icono:""}}),copyright:ns("Texto final (copyright)",{editable:!1})}),oM={components:{},root:{fields:{menu:oK,temporadas:ny("Temporadas (colores y banner de bienvenida)",{activa:ns("Forzar una temporada (escribí su nombre; vacío = automática por fechas)",{editable:!1}),lista:nx("Temporadas",{nombre:ns("Nombre (ej.: Navidad 2026)",{editable:!1}),desde:nC("Desde"),hasta:nC("Hasta"),colores:ny("Colores (vacío = los de siempre)",{botones:nD("Botones (coral)"),acento:nD("Acento (violeta)"),titulos:nD("Títulos (azul)"),fondo:nD("Fondo de las páginas")}),banner:ny("Banner al entrar a la web",{activo:nv("Mostrar banner",[[!0,"Sí"],[!1,"No"]],{radio:!0}),titulo:ns("Título",{editable:!1}),texto:nt("Texto",{editable:!1}),imagen:nA("Imagen (opcional)"),imagenAlt:ns("Descripción de la imagen",{editable:!1}),botonTexto:ns("Texto del botón (vacío = sin botón)",{editable:!1}),botonLink:nB("El botón lleva a"),colorFondo:nD("Color de fondo"),colorTexto:nD("Color de la letra"),colorBoton:nD("Color del botón"),frecuencia:nv("Cada cuánto se muestra",[["sesion","Una vez por visita"],["dia","Una vez por día"],["una-vez","Una sola vez"],["siempre","Siempre"]]),paginas:nv("Dónde",[["todas","En todas las páginas"],["home","Solo en la Home"]]),retraso:nw("Aparece a los (segundos)",{min:0,max:30})})},{resumen:"nombre",nuevo:{nombre:"Nueva temporada",desde:"",hasta:"",colores:{botones:"",acento:"",titulos:"",fondo:""},banner:{activo:!1,titulo:"",texto:"",imagen:"",imagenAlt:"",botonTexto:"Pedí tu demo",botonLink:"/demo",colorFondo:"#ffffff",colorTexto:"#1b1b1b",colorBoton:"#c9373d",frecuencia:"sesion",paginas:"todas",retraso:1}}})}),footer:oL,sitio:ny("Datos de la empresa (Google, IAs y al compartir)",{nombre:ns("Nombre",{editable:!1}),razonSocial:ns("Razón social",{editable:!1}),descripcion:nt("Qué es Thinkion (una o dos oraciones)",{editable:!1}),email:ns("Mail",{editable:!1}),dominio:ns("Dirección del sitio (ej.: https://www.thinkion.com.ar)",{editable:!1}),imagenCompartir:nA("Imagen al compartir el link (1200 × 630)"),redes:nx("Perfiles en redes",{nombre:ns("Red",{editable:!1}),link:nB("Dirección")},{resumen:"nombre",nuevo:{nombre:"Red",link:"https://"}})})},render:function({menu:a,footer:b,temporadas:c,puck:d}){let e=c?.lista||[],f=(0,oJ.T)(c),g=e.find(a=>(0,oJ.y)(a.nombre)===f),h=g?.banner;return(0,ct.jsxs)("div",{className:"pagina-home","data-temporada":f||void 0,children:[(0,ct.jsx)("style",{dangerouslySetInnerHTML:{__html:(0,oJ.m)(c).replace(/html\[data-temporada=/g,"[data-temporada=")}}),(0,ct.jsx)("div",{className:"fondo-deco","aria-hidden":"true",children:(0,ct.jsx)("img",{className:"fondo-deco__hero",src:"/img/home/fondo-hero.svg",alt:"",width:"2065",height:"1564"})}),(0,ct.jsx)(oH.f,{menu:a,rutaActual:"",eventos:{onClickCapture:a=>{a.target.closest("a")&&a.preventDefault()}}}),(0,ct.jsxs)("main",{className:"home",style:{padding:"60px 16px 120px",display:"grid",gap:32,justifyItems:"center"},children:[(0,ct.jsxs)("div",{style:{color:"#fff",textAlign:"center",maxWidth:640},children:[(0,ct.jsx)("h1",{style:{fontSize:40,fontWeight:400},children:"Ajustes generales"}),(0,ct.jsxs)("p",{style:{fontSize:18,fontWeight:300},children:["Lo que cambies acá se aplica en ",(0,ct.jsx)("strong",{children:"todas las páginas"}),". Hoy está activa:"," ",(0,ct.jsx)("strong",{children:g?.nombre||"ninguna temporada"}),"."]}),(0,ct.jsx)("p",{style:{marginTop:16},children:(0,ct.jsx)("a",{className:"boton",href:"/demo",children:"Así se ve un botón"})})]}),h?.activo?(0,ct.jsxs)("div",{className:"banner-temporada",style:{position:"static",display:"block","--banner-fondo":h.colorFondo||"#fff","--banner-texto":h.colorTexto||"#1b1b1b","--banner-boton":h.colorBoton||"#c9373d"},children:[h.imagen&&(0,ct.jsx)("img",{className:"banner-temporada__imagen",src:h.imagen,alt:""}),(0,ct.jsxs)("div",{className:"banner-temporada__cuerpo",children:[h.titulo&&(0,ct.jsx)("h2",{children:h.titulo}),h.texto&&(0,ct.jsx)("p",{children:h.texto}),h.botonTexto&&(0,ct.jsx)("span",{className:"banner-temporada__boton",children:h.botonTexto})]})]}):(0,ct.jsxs)("p",{style:{background:"rgba(255,255,255,.85)",borderRadius:16,padding:"16px 24px",maxWidth:520,textAlign:"center"},children:["La temporada activa no tiene banner. Para mostrar uno: ",(0,ct.jsx)("strong",{children:"Temporadas → la temporada → Banner al entrar a la web → Mostrar banner: Sí"}),"."]})]}),(0,ct.jsx)(oI.f,{footer:b,eventos:{onClickCapture:a=>{a.target.closest("a")&&a.preventDefault()}}})]})}}};var oN=a.i(3640);let oO={"header-publish":"Publicar","header-undo":"Deshacer","header-redo":"Rehacer","header-toggle-leftsidebar":"Mostrar u ocultar bloques","header-toggle-rightsidebar":"Mostrar u ocultar campos","header-toggle-menubar":"Mostrar u ocultar menú","action-selectparent":"Elegir el bloque que lo contiene","action-duplicate":"Duplicar","action-delete":"Borrar","label-page":"Página","label-component":"Bloque","outline-empty":"Todavía no hay bloques","outline-item-collapse":"Contraer","outline-item-expand":"Expandir","outline-header-title":"Esquema","outline-header-collapseall":"Contraer todo","outline-item-duplicate":"Duplicar","outline-item-delete":"Borrar","drawer-category-collapse":"Contraer {title}","drawer-category-expand":"Expandir {title}","drawer-category-other":"Otros","canvas-noconfig":"Bloque desconocido: {type}","field-readonly":"Solo lectura","field-arrayitem-summary":"Elemento {index}","field-arrayitem-duplicate":"Duplicar","field-arrayitem-delete":"Borrar","field-external-selectdata":"Elegir","field-external-search":"Buscar","field-external-togglefilters":"Filtros","field-external-item":"Elemento","field-external-result-singular":"{count} resultado","field-external-result-plural":"{count} resultados","field-richtext-bold":"Negrita","field-richtext-italic":"Cursiva","field-richtext-underline":"Subrayado","field-richtext-strikethrough":"Tachado","field-richtext-blockquote":"Cita","field-richtext-code-inline":"Código","field-richtext-code-block":"Bloque de código","field-richtext-list-bullet":"Lista con viñetas","field-richtext-list-ordered":"Lista numerada","field-richtext-horizontalrule":"Línea","field-richtext-align-left":"Alinear a la izquierda","field-richtext-align-center":"Centrar","field-richtext-align-right":"Alinear a la derecha","field-richtext-align-justify":"Justificar","field-richtext-select":"Elegir","field-richtext-headingselect-1":"Título 1","field-richtext-headingselect-2":"Título 2","field-richtext-headingselect-3":"Título 3","field-richtext-headingselect-4":"Título 4","field-richtext-headingselect-5":"Título 5","field-richtext-headingselect-6":"Título 6","field-richtext-alignselect-left":"Izquierda","field-richtext-alignselect-center":"Centro","field-richtext-alignselect-right":"Derecha","field-richtext-alignselect-justify":"Justificado","field-richtext-listselect-bullet":"Viñetas","field-richtext-listselect-ordered":"Numerada","viewport-zoom-in":"Acercar","viewport-zoom-out":"Alejar","viewport-zoom-auto":"{zoom}% (automático)","viewport-toggle-menu":"Tamaños de pantalla","viewport-switch":"Ver en {label}","viewport-switch-default":"Cambiar tamaño","plugin-blocks":"Bloques","plugin-outline":"Esquema","plugin-fields":"Campos","plugin-components":"Bloques","layout-maximize":"Maximizar","layout-minimize":"Minimizar","loader-loading":"Cargando"},oP=[{width:390,height:"auto",label:"Celular",icon:"Smartphone"},{width:768,height:"auto",label:"Tablet",icon:"Tablet"},{width:1440,height:"auto",label:"Escritorio",icon:"Monitor"}],oQ=a=>{a.target.closest?.("a[href]")&&a.preventDefault()},oR=a=>a.preventDefault();function oS({children:a,document:b}){return(0,cu.useEffect)(()=>{if(b){if(!b.getElementById("estilos-sitio")){let a=b.createElement("link");a.id="estilos-sitio",a.rel="stylesheet",a.href="/estilos/sitio.css",b.head.append(a),b.documentElement.lang="es"}return b.addEventListener("click",oQ,!0),b.addEventListener("submit",oR,!0),()=>{b.removeEventListener("click",oQ,!0),b.removeEventListener("submit",oR,!0)}}},[b]),a}let oT=a=>`thk-borrador:${a}`,oU=a=>{try{return JSON.parse(localStorage.getItem(oT(a))||"null")}catch{return null}},oV=a=>{try{localStorage.removeItem(oT(a))}catch{}};function oW(){let a=(0,cv.useSearchParams)().get("pagina")||"inicio",b="_ajustes"===a,[c,d]=(0,oN.t)(),[e,f]=(0,cu.useState)({cargando:!0}),[g,h]=(0,oN.d)(),i=(0,cu.useRef)("");(0,cu.useEffect)(()=>{c?.conectado&&(async()=>{try{let[{ajustes:c},{paginas:d},e]=await Promise.all([(0,oN.k)("ajustes"),(0,oN.k)("paginas"),b?Promise.resolve(null):(0,oN.k)(`paginas?nombre=${a}`)]),g=b?{root:{props:c},content:[],zones:{}}:e.datos;i.current=JSON.stringify(g);let h=oU(a);h&&JSON.stringify(h)!==i.current&&confirm("Hay cambios sin publicar de la última vez que editaste esta página en este navegador. ¿Recuperarlos?")?g=h:h&&oV(a),f({datos:g,ajustes:c,ruta:e?.ruta||"/",paginas:d})}catch(a){f({error:a.message})}})()},[c?.conectado,a,b]),(0,cu.useEffect)(()=>{let b=b=>{let c=oU(a);c&&JSON.stringify(c)!==i.current&&b.preventDefault()};return window.addEventListener("beforeunload",b),()=>window.removeEventListener("beforeunload",b)},[a]);let j=(0,cu.useMemo)(()=>({iframe:oS,headerActions:({children:a})=>(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)("a",{className:"a-btn a-btn--chico",href:"/admin",children:"← Panel"}),!b&&(0,ct.jsx)("a",{className:"a-btn a-btn--chico",href:e.ruta||"/",target:"_blank",rel:"noopener",children:"Ver en la web ↗"}),a]})}),[b,e.ruta]);if(!c)return null;if(!c.conectado)return(0,ct.jsx)(oN.K,{alEntrar:d,error:c.error});if(e.error)return(0,ct.jsx)("main",{className:"a-centro",children:(0,ct.jsxs)("div",{className:"a-tarjeta",children:[(0,ct.jsx)("p",{className:"a-error",children:e.error}),(0,ct.jsx)("a",{className:"a-btn",href:"/admin",children:"Volver al panel"})]})});if(e.cargando)return(0,ct.jsx)("main",{className:"a-centro",children:(0,ct.jsx)("p",{className:"a-ayuda",children:"Cargando la página…"})});let k=async d=>{g("Publicando…",{duracion:3e4});try{b?await (0,oN.k)("ajustes",{metodo:"POST",cuerpo:{ajustes:d.root.props}}):await (0,oN.k)("paginas",{metodo:"POST",cuerpo:{nombre:a,datos:d}}),i.current=JSON.stringify(d),oV(a),g("github"===c.modo?"✅ Publicado. En 1 o 2 minutos se ve en la web (Vercel lo está armando).":"✅ Guardado en los archivos del proyecto.",{duracion:7e3})}catch(a){g(`No se pudo publicar: ${a.message}`,{error:!0,duracion:1e4})}},l=b?"Ajustes generales":e.paginas.find(b=>b.nombre===a)?.titulo||a;return(0,ct.jsxs)(ct.Fragment,{children:[(0,ct.jsx)(nr.ListaDePaginas,{paginas:e.paginas}),(0,ct.jsx)(nq,{config:b?oM:oG,data:e.datos,metadata:{ajustes:e.ajustes,ruta:e.ruta},onPublish:k,onChange:b=>((a,b)=>{try{localStorage.setItem(oT(a),JSON.stringify(b))}catch{}})(a,b),dictionary:oO,viewports:oP,overrides:j,ui:b?{leftSideBarVisible:!1}:void 0,headerTitle:l,headerPath:b?"Menú, footer, temporadas y banner":e.ruta}),h]})}a.s(["default",0,function(){return(0,ct.jsx)(cu.Suspense,{fallback:null,children:(0,ct.jsx)(oW,{})})}],94637)},46058,(a,b,c)=>{function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},64177,(a,b,c)=>{function d(){throw Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled.")}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"forbidden",{enumerable:!0,get:function(){return d}}),a.r(8535).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},3326,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={DynamicServerError:function(){return g},isDynamicServerError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="DYNAMIC_SERVER_USAGE";class g extends Error{constructor(a){super(`Dynamic server usage: ${a}`),this.description=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&"string"==typeof a.digest&&a.digest===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},8535,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={HTTPAccessErrorStatus:function(){return f},HTTP_ERROR_FALLBACK_ERROR_CODE:function(){return h},getAccessFallbackErrorTypeByStatus:function(){return k},getAccessFallbackHTTPStatus:function(){return j},isHTTPAccessFallbackError:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f={NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:401},g=new Set(Object.values(f)),h="NEXT_HTTP_ERROR_FALLBACK";function i(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let[b,c]=a.digest.split(";");return b===h&&g.has(Number(c))}function j(a){return Number(a.digest.split(";")[1])}function k(a){switch(a){case 401:return"unauthorized";case 403:return"forbidden";case 404:return"not-found";default:return}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},77747,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isNextRouterError",{enumerable:!0,get:function(){return f}});let d=a.r(8535),e=a.r(11026);function f(a){return(0,e.isRedirectError)(a)||(0,d.isHTTPAccessFallbackError)(a)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},49842,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={useDynamicRouteParams:function(){return f.useDynamicRouteParams},useDynamicSearchParams:function(){return f.useDynamicSearchParams}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(1018);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},74137,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={ReadonlyURLSearchParams:function(){return h.ReadonlyURLSearchParams},RedirectType:function(){return m.RedirectType},ServerInsertedHTMLContext:function(){return k.ServerInsertedHTMLContext},forbidden:function(){return m.forbidden},notFound:function(){return m.notFound},permanentRedirect:function(){return m.permanentRedirect},redirect:function(){return m.redirect},unauthorized:function(){return m.unauthorized},unstable_isUnrecognizedActionError:function(){return l.unstable_isUnrecognizedActionError},unstable_rethrow:function(){return m.unstable_rethrow},useParams:function(){return t},usePathname:function(){return r},useRouter:function(){return s},useSearchParams:function(){return q},useSelectedLayoutSegment:function(){return v},useSelectedLayoutSegments:function(){return u},useServerInsertedHTML:function(){return k.useServerInsertedHTML}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(46058)._(a.r(72131)),g=a.r(9270),h=a.r(36313),i=a.r(39118),j=a.r(49842),k=a.r(18341),l=a.r(57997),m=a.r(21066),{instrumentParamsForClientValidation:n,instrumentSearchParamsForClientValidation:o,expectCompleteParamsInClientValidation:p}={};function q(){j.useDynamicSearchParams?.("useSearchParams()");let a=(0,f.useContext)(h.SearchParamsContext);return(0,f.useMemo)(()=>a?new h.ReadonlyURLSearchParams(a):null,[a])}function r(){return j.useDynamicRouteParams?.("usePathname()"),(0,f.useContext)(h.PathnameContext)}function s(){let a=(0,f.useContext)(g.AppRouterContext);if(null===a)throw Error("invariant expected app router to be mounted");let b=(0,f.useContext)(g.LayoutRouterContext),c=b?.parentRenderTree.data.bfcacheId??0;return(0,f.useMemo)(()=>({back:a.back,forward:a.forward,refresh:a.refresh,hmrRefresh:a.hmrRefresh,push:a.push,replace:a.replace,prefetch:a.prefetch,experimental_gesturePush:a.experimental_gesturePush,bfcacheId:"_b_"+c+"_"}),[a,c])}function t(){return j.useDynamicRouteParams?.("useParams()"),(0,f.useContext)(h.PathParamsContext)}function u(a="children"){j.useDynamicRouteParams?.("useSelectedLayoutSegments()");let b=(0,f.useContext)(g.LayoutRouterContext);return b?(0,i.getSelectedLayoutSegmentPath)(b.parentTree,a):null}function v(a="children"){j.useDynamicRouteParams?.("useSelectedLayoutSegment()"),(0,f.useContext)(h.NavigationPromisesContext);let b=u(a);return(0,i.computeSelectedLayoutSegment)(b,a)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},21066,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={ReadonlyURLSearchParams:function(){return f.ReadonlyURLSearchParams},RedirectType:function(){return m},forbidden:function(){return i.forbidden},notFound:function(){return h.notFound},permanentRedirect:function(){return g.permanentRedirect},redirect:function(){return g.redirect},unauthorized:function(){return j.unauthorized},unstable_isUnrecognizedActionError:function(){return l},unstable_rethrow:function(){return k.unstable_rethrow}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(75718),g=a.r(22099),h=a.r(28102),i=a.r(64177),j=a.r(88213),k=a.r(47083);function l(){throw Error("`unstable_isUnrecognizedActionError` can only be used on the client.")}let m={push:"push",replace:"replace"};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},28102,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"notFound",{enumerable:!0,get:function(){return f}});let d=a.r(8535),e=`${d.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;function f(){let a=Error(e);throw a.digest=e,a}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},75718,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ReadonlyURLSearchParams",{enumerable:!0,get:function(){return e}});class d extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class e extends URLSearchParams{append(){throw new d}delete(){throw new d}set(){throw new d}sort(){throw new d}}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},11026,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={REDIRECT_ERROR_CODE:function(){return g},isRedirectError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(15128),g="NEXT_REDIRECT";function h(a){if("object"!=typeof a||null===a||!("digest"in a)||"string"!=typeof a.digest)return!1;let b=a.digest.split(";"),[c,d]=b,e=b.slice(2,-2).join(";"),h=Number(b.at(-2));return c===g&&("replace"===d||"push"===d)&&"string"==typeof e&&!isNaN(h)&&h in f.RedirectStatusCode}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},15128,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"RedirectStatusCode",{enumerable:!0,get:function(){return e}});var d,e=((d={})[d.SeeOther=303]="SeeOther",d[d.TemporaryRedirect=307]="TemporaryRedirect",d[d.PermanentRedirect=308]="PermanentRedirect",d);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},22099,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return n},getRedirectTypeFromError:function(){return m},getURLFromRedirectError:function(){return l},permanentRedirect:function(){return k},redirect:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(15128),g=a.r(11026),h=a.r(69789);function i(a,b,c=f.RedirectStatusCode.TemporaryRedirect){let d=Error(g.REDIRECT_ERROR_CODE);return d.digest=`${g.REDIRECT_ERROR_CODE};${b};${a};${c};`,d}function j(a,b){throw i(a,b??=h.actionAsyncStorage?.getStore()?.isAction?"push":"replace",f.RedirectStatusCode.TemporaryRedirect)}function k(a,b="replace"){throw i(a,b,f.RedirectStatusCode.PermanentRedirect)}function l(a){return(0,g.isRedirectError)(a)?a.digest.split(";").slice(2,-2).join(";"):null}function m(a){if(!(0,g.isRedirectError)(a))throw Error("Not a redirect error");return a.digest.split(";",2)[1]}function n(a){if(!(0,g.isRedirectError)(a))throw Error("Not a redirect error");return Number(a.digest.split(";").at(-2))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},99392,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={StaticGenBailoutError:function(){return g},isStaticGenBailoutError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="NEXT_STATIC_GEN_BAILOUT";class g extends Error{constructor(...a){super(...a),this.code=f}}function h(a){return"object"==typeof a&&null!==a&&"code"in a&&a.code===f}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},88213,(a,b,c)=>{function d(){throw Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled.")}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unauthorized",{enumerable:!0,get:function(){return d}}),a.r(8535).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},57997,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={UnrecognizedActionError:function(){return f},unstable_isUnrecognizedActionError:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});class f extends Error{constructor(...a){super(...a),this.name="UnrecognizedActionError"}}function g(a){return!!(a&&"object"==typeof a&&a instanceof f)}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},47083,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"unstable_rethrow",{enumerable:!0,get:function(){return function a(b){if((0,f.isNextRouterError)(b)||(0,e.isBailoutToCSRError)(b)||(0,h.isDynamicServerError)(b)||(0,d.isHangingPromiseRejectionError)(b)||(0,g.isPrerenderInterruptedError)(b))throw b;b instanceof Error&&"cause"in b&&a(b.cause)}}});let d=a.r(35710),e=a.r(41997),f=a.r(77747),g=a.r(54110),h=a.r(3326);("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},83590,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={METADATA_BOUNDARY_NAME:function(){return f},OUTLET_BOUNDARY_NAME:function(){return h},ROOT_LAYOUT_BOUNDARY_NAME:function(){return i},VIEWPORT_BOUNDARY_NAME:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="__next_metadata_boundary__",g="__next_viewport_boundary__",h="__next_outlet_boundary__",i="__next_root_layout_boundary__"},76383,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={atLeastOneTask:function(){return h},scheduleImmediate:function(){return g},scheduleOnNextTick:function(){return f},waitAtLeastOneReactRenderTask:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a=>{Promise.resolve().then(()=>{process.nextTick(a)})},g=a=>{setImmediate(a)};function h(){return new Promise(a=>g(a))}function i(){return new Promise(a=>setImmediate(a))}},8117,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={createDynamicBodyError:function(){return g},createDynamicBodyErrorInNavigation:function(){return l},createDynamicBodyErrorInStaticRoute:function(){return A},createDynamicMetadataError:function(){return r},createDynamicMetadataErrorInStaticRoute:function(){return D},createDynamicOrRuntimeBodyError:function(){return m},createDynamicOrRuntimeMetadataError:function(){return y},createDynamicOrRuntimeViewportError:function(){return x},createDynamicViewportError:function(){return w},createDynamicViewportErrorInStaticRoute:function(){return G},createLinkBodyErrorInNavigation:function(){return i},createLinkMetadataError:function(){return n},createLinkViewportError:function(){return s},createNavigationBodyErrorInNavigation:function(){return j},createNavigationMetadataError:function(){return p},createNavigationViewportError:function(){return u},createNonPrerenderableBodyErrorInStaticRoute:function(){return B},createNonPrerenderableMetadataErrorInStaticRoute:function(){return E},createNonPrerenderableViewportErrorInStaticRoute:function(){return H},createPrefetchBodyErrorInNavigation:function(){return k},createPrefetchMetadataError:function(){return q},createPrefetchViewportError:function(){return v},createRuntimeBodyError:function(){return f},createRuntimeBodyErrorInNavigation:function(){return h},createRuntimeBodyErrorInStaticRoute:function(){return z},createRuntimeMetadataError:function(){return o},createRuntimeMetadataErrorInStaticRoute:function(){return C},createRuntimeViewportError:function(){return t},createRuntimeViewportErrorInStaticRoute:function(){return F},logBuildDebugHint:function(){return I}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return Error(`Route "${a}": Next.js encountered runtime data during prerendering.

\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-runtime`)}function g(a){return Error(`Route "${a}": Next.js encountered uncached data during prerendering.

\`fetch(...)\` or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`)}function h(a){return Error(`Route "${a}": Next.js encountered runtime data during prerendering or a navigation.

\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed outside of \`<Suspense>\` prevents the route from being prerendered or the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-runtime`)}function i(a){return Error(`Route "${a}": Next.js encountered URL data during prerendering or a navigation.

\`params\` or \`searchParams\` accessed outside of \`<Suspense>\` may prevent the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/instant-shell-url-data`)}function j(a){return Error(`Route "${a}": Next.js encountered \`navigation()\` during prerendering or a navigation.

\`navigation()\` called outside of \`<Suspense>\` may prevent the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the component that calls \`navigation()\`
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/instant-navigation-stage`)}function k(a){return Error(`Route "${a}": Next.js encountered \`prefetch()\` during prerendering or a navigation.

\`prefetch()\` called outside of \`<Suspense>\` may prevent the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the component that calls \`prefetch()\`
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/instant-navigation-stage`)}function l(a){return Error(`Route "${a}": Next.js encountered uncached data during prerendering or a navigation.

\`fetch(...)\` or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered or the navigation from being instant, leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`)}function m(a){return Error(`Route "${a}": Next.js encountered uncached or runtime data during prerendering.

\`fetch(...)\`, \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or \`connection()\` accessed outside of \`<Suspense>\` prevents the route from being prerendered, blocking the page load and leading to a slower user experience.

Ways to fix this:
  - [stream] Provide a placeholder with \`<Suspense fallback={...}>\` around the data access
  - [cache] For uncached data (\`fetch\`, database calls): cache the access with \`"use cache"\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-dynamic`)}function n(a){return Error(`Route "${a}": Next.js encountered URL data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prefetched. \`params\` or \`searchParams\` accessed in \`generateMetadata()\` prevent it from being prefetched.

Ways to fix this:
  - [static] Use a static metadata export instead of \`generateMetadata()\`
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`)}function o(a){return Error(`Route "${a}": Next.js encountered runtime data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prerendered. \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` accessed in \`generateMetadata()\` cause it to run dynamically.

Ways to fix this:
  - [static] Use a static metadata export instead of \`generateMetadata()\`
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`)}function p(a){return Error(`Route "${a}": Next.js encountered \`navigation()\` in \`generateMetadata()\`.

Metadata can already stream without blocking the route's UI, so delaying it until navigation may be unintentional.

Ways to fix this:
  - [remove] Remove \`navigation()\` from \`generateMetadata()\`
  - [mark] Render a marker component that calls \`await navigation()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/instant-navigation-stage-metadata`)}function q(a){return Error(`Route "${a}": Next.js encountered \`prefetch()\` in \`generateMetadata()\`.

Metadata can already stream without blocking the route's UI, so delaying it until a per-link prefetch or navigation may be unintentional.

Ways to fix this:
  - [remove] Remove \`prefetch()\` from \`generateMetadata()\`
  - [mark] Render a marker component that calls \`await prefetch()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/instant-navigation-stage-metadata`)}function r(a){return Error(`Route "${a}": Next.js encountered uncached data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prerendered. \`fetch(...)\` or \`connection()\` accessed in \`generateMetadata()\` cause it to run dynamically.

Ways to fix this:
  - [cache] Cache the metadata with \`"use cache"\` in \`generateMetadata()\` (does not apply to \`connection()\`)
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-dynamic`)}function s(a){return Error(`Route "${a}": Next.js encountered URL data in \`generateViewport()\`.

\`params\` or \`searchParams\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.

Ways to fix this:
  - [static] Use a static viewport export instead of \`generateViewport()\`
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`)}function t(a){return Error(`Route "${a}": Next.js encountered runtime data in \`generateViewport()\`.

\`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.

Ways to fix this:
  - [static] Use a static viewport export instead of \`generateViewport()\`
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`)}function u(a){return Error(`Route "${a}": Next.js encountered \`navigation()\` in \`generateViewport()\`.

This prevents Next.js from creating the App Shell, leading to a slower user experience.

Ways to fix this:
  - [remove] Remove \`navigation()\` from \`generateViewport()\`
  - [ignore] Set \`export const instant = false\` to disable validation for this segment

Learn more: https://nextjs.org/docs/messages/instant-navigation-stage-viewport`)}function v(a){return Error(`Route "${a}": Next.js encountered \`prefetch()\` in \`generateViewport()\`.

This prevents Next.js from creating the App Shell, leading to a slower user experience.

Ways to fix this:
  - [remove] Remove \`prefetch()\` from \`generateViewport()\`
  - [ignore] Set \`export const instant = false\` to disable validation for this segment

Learn more: https://nextjs.org/docs/messages/instant-navigation-stage-viewport`)}function w(a){return Error(`Route "${a}": Next.js encountered uncached data in \`generateViewport()\`.

\`fetch(...)\` or \`connection()\` in \`generateViewport()\` prevents the page from being prerendered, leading to a slower user experience.

Ways to fix this:
  - [cache] Cache the viewport data with \`"use cache"\` in \`generateViewport()\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-dynamic`)}function x(a){return Error(`Route "${a}": Next.js encountered uncached or runtime data in \`generateViewport()\`.

This prevents the page from being prerendered, leading to a slower user experience. Unlike metadata, viewport cannot be streamed behind \`<Suspense>\` because it affects the initial page load.

Ways to fix this:
  - [static] Use a static viewport export instead of \`generateViewport()\`
  - [cache] For uncached data (\`fetch\`, database calls): cache the viewport with \`"use cache"\` in \`generateViewport()\` (does not apply to \`connection()\`)
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-viewport-runtime`)}function y(a){return Error(`Route "${a}": Next.js encountered uncached or runtime data in \`generateMetadata()\`.

This route's metadata is blocked, but the rest of its content can be prerendered.

Ways to fix this:
  - [static] Use a static metadata export instead of \`generateMetadata()\`
  - [cache] Cache the metadata with \`"use cache"\` in \`generateMetadata()\` (does not apply to \`connection()\`)
  - [dynamic] Render a marker component that calls \`await connection()\` inside \`<Suspense>\` on the page

Learn more: https://nextjs.org/docs/messages/blocking-prerender-metadata-runtime`)}function z(a){return Error(`Route "${a}": Next.js encountered runtime data on a route that must be fully static.

This route is configured to be fully static, but runtime data from \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or a short-lived cache requires rendering at request time.

Ways to fix this:
  - [remove] Remove the data access
  - [client] Read the data on the client

Learn more: https://nextjs.org/docs/messages/static-route-runtime`)}function A(a){return Error(`Route "${a}": Next.js encountered uncached data on a route that must be fully static.

This route is configured to be fully static, but an uncached \`fetch(...)\`, database call, or \`connection()\` requires rendering at request time.

Ways to fix this:
  - [cache] Cache the data access with \`"use cache"\` (does not apply to \`connection()\`)
  - [remove] Remove the data access
  - [client] Read the data on the client

Learn more: https://nextjs.org/docs/messages/static-route-dynamic`)}function B(a){return Error(`Route "${a}": Next.js encountered uncached or runtime data on a route that must be fully static.

This route is configured to be fully static, but some data requires rendering at request time.

Ways to fix this:
  - [cache] For uncached data (\`fetch\`, database calls): cache the access with \`"use cache"\` (does not apply to \`connection()\`)
  - [remove] Remove the data access
  - [client] Read the data on the client

Learn more: https://nextjs.org/docs/messages/static-route-dynamic`)}function C(a){return Error(`Route "${a}": Next.js encountered runtime data in \`generateMetadata()\` on a route that must be fully static.

This route is configured to be fully static, but runtime data from \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or a short-lived cache requires rendering at request time.

Ways to fix this:
  - [static] Replace the dynamic data used by \`generateMetadata()\` with static data

Learn more: https://nextjs.org/docs/messages/static-metadata-runtime`)}function D(a){return Error(`Route "${a}": Next.js encountered uncached data in \`generateMetadata()\` on a route that must be fully static.

This route is configured to be fully static, but an uncached \`fetch(...)\`, database call, or \`connection()\` requires rendering at request time.

Ways to fix this:
  - [cache] Cache the data used by \`generateMetadata()\` with \`"use cache"\` (does not apply to \`connection()\`)
  - [static] Replace the dynamic data used by \`generateMetadata()\` with static data

Learn more: https://nextjs.org/docs/messages/static-metadata-dynamic`)}function E(a){return Error(`Route "${a}": Next.js encountered uncached or runtime data in \`generateMetadata()\` on a route that must be fully static.

This route is configured to be fully static, but some data requires rendering at request time.

Ways to fix this:
  - [cache] For uncached data: cache the data used by \`generateMetadata()\` with \`"use cache"\` (does not apply to \`connection()\`)
  - [static] Replace the dynamic data used by \`generateMetadata()\` with static data

Learn more: https://nextjs.org/docs/messages/static-metadata-dynamic`)}function F(a){return Error(`Route "${a}": Next.js encountered runtime data in \`generateViewport()\` on a route that must be fully static.

This route is configured to be fully static, but runtime data from \`cookies()\`, \`headers()\`, \`params\`, \`searchParams\`, or a short-lived cache requires rendering at request time.

Ways to fix this:
  - [static] Replace the dynamic data used by \`generateViewport()\` with static data

Learn more: https://nextjs.org/docs/messages/static-viewport-runtime`)}function G(a){return Error(`Route "${a}": Next.js encountered uncached data in \`generateViewport()\` on a route that must be fully static.

This route is configured to be fully static, but an uncached \`fetch(...)\`, database call, or \`connection()\` requires rendering at request time.

Ways to fix this:
  - [cache] Cache the data used by \`generateViewport()\` with \`"use cache"\` (does not apply to \`connection()\`)
  - [static] Replace the dynamic data used by \`generateViewport()\` with static data

Learn more: https://nextjs.org/docs/messages/static-viewport-dynamic`)}function H(a){return Error(`Route "${a}": Next.js encountered uncached or runtime data in \`generateViewport()\` on a route that must be fully static.

This route is configured to be fully static, but some data requires rendering at request time.

Ways to fix this:
  - [cache] For uncached data: cache the data used by \`generateViewport()\` with \`"use cache"\` (does not apply to \`connection()\`)
  - [static] Replace the dynamic data used by \`generateViewport()\` with static data

Learn more: https://nextjs.org/docs/messages/static-viewport-dynamic`)}function I(a){console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${a}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`)}},1018,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d,e={useDynamicRouteParams:function(){return n},useDynamicSearchParams:function(){return o}};for(var f in e)Object.defineProperty(c,f,{enumerable:!0,get:e[f]});let g=(d=a.r(72131))&&d.__esModule?d:{default:d},h=a.r(35112),i=a.r(32319),j=a.r(56704),k=a.r(35710),l=a.r(88644);a.r(41997);let m=a.r(82794).createReactBrowserBailoutReason.bind(null,"useSearchParams()");function n(a){let b=j.workAsyncStorage.getStore(),c=i.workUnitAsyncStorage.getStore();if(b&&c)switch(c.type){case"prerender-client":{let d=c.fallbackRouteParams;d&&d.size>0&&g.default.use((0,k.makeClientHookHangingPromise)(c.renderSignal,new k.ClientHookDynamicError(b.route,a)));break}case"prerender":throw new l.InvariantError(`\`${a}\` was called from a Server Component. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`);case"validation-client":case"prerender-legacy":case"request":case"unstable-cache":break;case"prerender-runtime":throw new l.InvariantError(`\`${a}\` was called during a runtime prerender. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`);case"cache":case"private-cache":throw new l.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`);case"build-time-generator":throw new l.InvariantError(`\`${a}\` was called in \`${c.functionName}\`. Next.js should be preventing ${a} from being included in server component files statically, but did not in this case.`)}}function o(a){let b=j.workAsyncStorage.getStore(),c=i.workUnitAsyncStorage.getStore();if(b)switch(!c&&(0,i.throwForMissingRequestStore)(a),c.type){case"validation-client":case"request":return;case"prerender-client":g.default.use((0,k.makeClientHookHangingPromise)(c.renderSignal,new k.ClientHookDynamicError(b.route,a)));break;case"prerender-legacy":if(b.forceStatic)return;return void g.default.use((0,h.browser)(m));case"prerender":case"prerender-runtime":throw new l.InvariantError(`\`${a}\` was called from a Server Component. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`);case"cache":case"unstable-cache":case"private-cache":throw new l.InvariantError(`\`${a}\` was called inside a cache scope. Next.js should be preventing ${a} from being included in server components statically, but did not in this case.`);case"build-time-generator":throw new l.InvariantError(`\`${a}\` was called in \`${c.functionName}\`. Next.js should be preventing ${a} from being included in server component files statically, but did not in this case.`)}}},54110,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d,e,f={DynamicHoleKind:function(){return X},PreludeState:function(){return af},abortAndThrowOnSynchronousRequestDataAccess:function(){return D},abortOnSynchronousPlatformIOAccess:function(){return C},accessedDynamicData:function(){return H},annotateDynamicAccess:function(){return M},consumeDynamicAccess:function(){return I},createDynamicTrackingState:function(){return t},createDynamicValidationState:function(){return u},createHangingInputAbortSignal:function(){return K},createInstantValidationState:function(){return Y},formatDynamicAPIAccesses:function(){return J},getDisallowedReasonsInStaticRoute:function(){return ak},getFirstDynamicReason:function(){return w},getNavigationDisallowedDynamicReasons:function(){return am},getStaticShellDisallowedDynamicReasons:function(){return al},isPrerenderInterruptedError:function(){return G},logDisallowedDynamicError:function(){return ag},markCurrentScopeAsDynamic:function(){return x},throwIfDisallowedDynamic:function(){return ai},throwIfDisallowedDynamicInStaticRoute:function(){return aj},throwIfSyncIOUsed:function(){return ah},throwToInterruptStaticGeneration:function(){return y},trackAllowedDynamicAccess:function(){return W},trackDynamicAccessInStaticRoute:function(){return V},trackDynamicDataInDynamicRender:function(){return z},trackDynamicHoleInNavigation:function(){return Z},trackDynamicHoleInStaticShell:function(){return ad},trackThrownErrorInNavigation:function(){return ac}};for(var g in f)Object.defineProperty(c,g,{enumerable:!0,get:f[g]});a.r(72131);let h=a.r(3326),i=a.r(99392),j=a.r(32319),k=a.r(35710),l=a.r(83590),m=a.r(76383),n=a.r(8117),o=a.r(88644),p=a.r(21177),q=a.r(83521),r=a.r(14827),s=a.r(82794);function t(a){return{isDebugDynamicAccesses:a,dynamicAccesses:[],syncDynamicErrorWithStack:null,syncDynamicErrorWithStackPostMicrotask:!1}}function u(){return{hasSuspenseAboveBody:!1,hasDynamicMetadata:!1,dynamicMetadata:null,hasDynamicViewport:!1,hasAllowedDynamic:!1,dynamicErrors:[]}}function v(a){return a.syncDynamicErrorWithStackPostMicrotask?null:a.syncDynamicErrorWithStack}function w(a){var b;return null==(b=a.dynamicAccesses[0])?void 0:b.expression}function x(a,b,c){if(b)switch(b.type){case"cache":case"unstable-cache":case"private-cache":return}if(!a.forceDynamic&&!a.forceStatic){if(a.dynamicShouldError)throw new i.StaticGenBailoutError(`Route ${a.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${c}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);if(b)switch(b.type){case"prerender-legacy":b.revalidate=0;let d=new h.DynamicServerError(`Route ${a.route} couldn't be rendered statically because it used ${c}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw a.dynamicUsageDescription=c,a.dynamicUsageStack=d.stack,d;case"request":A(b)}}}function y(a,b,c){let d=new h.DynamicServerError(`Route ${b.route} couldn't be rendered statically because it used \`${a}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw c.revalidate=0,b.dynamicUsageDescription=a,b.dynamicUsageStack=d.stack,d}function z(a){switch(a.type){case"cache":case"unstable-cache":case"private-cache":return;case"prerender":case"prerender-runtime":case"prerender-legacy":case"prerender-client":case"validation-client":case"build-time-generator":break;case"request":A(a)}}function A(a){}function B(a,b,c){let d=F(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`);c.controller.abort(d);let e=c.dynamicTracking;e&&e.dynamicAccesses.push({stack:e.isDebugDynamicAccesses?Error().stack:void 0,expression:b})}function C(a,b,c,d){let e=d.dynamicTracking;e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c,queueMicrotask(()=>{e.syncDynamicErrorWithStackPostMicrotask=!0})),B(a,b,d)}function D(a,b,c,d){if(!1===d.controller.signal.aborted){B(a,b,d);let e=d.dynamicTracking;e&&null===e.syncDynamicErrorWithStack&&(e.syncDynamicErrorWithStack=c)}throw F(`Route ${a} needs to bail out of prerendering at this point because it used ${b}.`)}let E="NEXT_PRERENDER_INTERRUPTED";function F(a){let b=Error(a);return b.digest=E,b}function G(a){return"object"==typeof a&&null!==a&&a.digest===E&&"name"in a&&"message"in a&&a instanceof Error}function H(a){return a.length>0}function I(a,b){return a.dynamicAccesses.push(...b.dynamicAccesses),a.dynamicAccesses}function J(a){return a.filter(a=>"string"==typeof a.stack&&a.stack.length>0).map(({expression:a,stack:b})=>(b=b.split("\n").slice(4).filter(a=>!(a.includes("node_modules/next/")||a.includes(" (<anonymous>)")||a.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${a}:
${b}`))}function K(a){switch(a.type){case"prerender":case"prerender-runtime":let b=new AbortController;if(a.cacheSignal)a.cacheSignal.inputReady().then(()=>{b.abort()});else{let c=(0,j.getStagedRenderingController)(a);c&&null!==c.finalStage?c.waitForStage(c.finalStage).then(()=>(0,m.scheduleOnNextTick)(()=>b.abort()),L):(0,m.scheduleOnNextTick)(()=>b.abort())}return b.signal;case"prerender-client":case"validation-client":case"prerender-legacy":case"request":case"cache":case"private-cache":case"unstable-cache":case"build-time-generator":return}}function L(){}function M(a,b){let c=b.dynamicTracking;c&&c.dynamicAccesses.push({stack:c.isDebugDynamicAccesses?Error().stack:void 0,expression:a})}let N=/\n\s+at Suspense \(<anonymous>\)/,O=RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${l.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),P=RegExp(`\\n\\s+at ${l.METADATA_BOUNDARY_NAME}[\\n\\s]`),Q=RegExp(`\\n\\s+at ${l.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),R=RegExp(`\\n\\s+at ${l.OUTLET_BOUNDARY_NAME}[\\n\\s]`),S=RegExp(`\\n\\s+at ${p.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`),T=RegExp(`\\n\\s+at ${p.INSTANT_SLOT_MARKER_PREFIX}(\\d+)${p.INSTANT_SLOT_MARKER_SUFFIX}[\\n\\s]`);function U(a,b){O.test(a)&&(b.hasSuspenseAboveBody=!0)}function V(a,b,c,d,e,f,g){let h=v(e);if(R.test(c))return void U(c,d);if(P.test(c))return void d.dynamicErrors.push(ae(function(a,b){switch(a){case 1:return(0,n.createRuntimeMetadataErrorInStaticRoute)(b);case 5:return(0,n.createDynamicMetadataErrorInStaticRoute)(b);case 6:return(0,n.createNonPrerenderableMetadataErrorInStaticRoute)(b)}}(g,b.route),c,null));if(Q.test(c))return void d.dynamicErrors.push(ae(function(a,b){switch(a){case 1:return(0,n.createRuntimeViewportErrorInStaticRoute)(b);case 5:return(0,n.createDynamicViewportErrorInStaticRoute)(b);case 6:return(0,n.createNonPrerenderableViewportErrorInStaticRoute)(b)}}(g,b.route),c,null));let i=!1;if(O.test(c)?(d.hasSuspenseAboveBody=!0,i=!0):N.test(c)&&(i=!0),i){if(!f||h||(0,k.isClientHookDynamicError)(a)){d.hasAllowedDynamic=!0;return}d.dynamicErrors.push(ae(ab(g,b.route),c,null));return}if(h)return void d.dynamicErrors.push(h);if((0,k.isClientHookDynamicError)(a))return void d.dynamicErrors.push(ae(a,c,null));let j=ae(f?ab(g,b.route):$(g,b.route),c,null);d.dynamicErrors.push(j)}function W(a,b,c,d,e){let f=v(e);if(R.test(c))return void U(c,d);if(P.test(c)){d.hasDynamicMetadata=!0;return}if(Q.test(c)){d.hasDynamicViewport=!0;return}if(O.test(c)){d.hasAllowedDynamic=!0,d.hasSuspenseAboveBody=!0;return}if(N.test(c)){d.hasAllowedDynamic=!0;return}else if(f)return void d.dynamicErrors.push(f);if((0,k.isClientHookDynamicError)(a))return void d.dynamicErrors.push(ae(a,c,null));let g=ae($(6,b.route),c,null);d.dynamicErrors.push(g)}var X=((d={})[d.Runtime=1]="Runtime",d[d.Link=2]="Link",d[d.Navigation=3]="Navigation",d[d.Prefetch=4]="Prefetch",d[d.Dynamic=5]="Dynamic",d[d.RuntimeOrDynamic=6]="RuntimeOrDynamic",d);function Y(a){return{hasDynamicMetadata:!1,hasAllowedClientDynamicAboveBoundary:!1,dynamicMetadata:null,hasDynamicViewport:!1,hasAllowedDynamic:!1,dynamicErrors:[],validationPreventingErrors:[],thrownErrorsOutsideBoundary:[],slotStacks:a}}function Z(a,b,c,d,e,f,g){let h=v(e);if(R.test(c))return;let i=function(a,b){let{slotStacks:c}=b;if(c.length>1){let b=T.exec(a);if(b){let a=c[parseInt(b[1],10)+1];if(null!=a)return a}}return c[0]??null}(c,d);if(P.test(c)){d.dynamicMetadata=ae(_(f,b.route),c,i);return}if(Q.test(c)){let a=ae(aa(f,b.route),c,i);d.dynamicErrors.push(a);return}let j=S.exec(c);if(j){let a=N.exec(c);if(a&&a.index<j.index){d.hasAllowedDynamic=!0;return}}else if((0,q.allRequiredBoundariesRendered)(g)){d.hasAllowedClientDynamicAboveBoundary=!0,d.hasAllowedDynamic=!0;return}else{let a=ae(Error(`Route "${b.route}": Could not validate \`instant\` because a Client Component in a parent segment prevented the page from rendering.`),c,i);d.validationPreventingErrors.push(a);return}if(h){null!==i&&void 0===h.cause&&(h.cause=i()),d.dynamicErrors.push(h);return}if((0,k.isClientHookDynamicError)(a))return void d.dynamicErrors.push(ae(a,c,i));let l=ae(function(a,b){switch(a){case 1:return(0,n.createRuntimeBodyErrorInNavigation)(b);case 2:return(0,n.createLinkBodyErrorInNavigation)(b);case 3:return(0,n.createNavigationBodyErrorInNavigation)(b);case 4:return(0,n.createPrefetchBodyErrorInNavigation)(b);case 5:return(0,n.createDynamicBodyErrorInNavigation)(b)}}(f,b.route),c,i);d.dynamicErrors.push(l)}function $(a,b){switch(a){case 1:return(0,n.createRuntimeBodyError)(b);case 5:return(0,n.createDynamicBodyError)(b);case 6:return(0,n.createDynamicOrRuntimeBodyError)(b)}}function _(a,b){switch(a){case 1:return(0,n.createRuntimeMetadataError)(b);case 2:return(0,n.createLinkMetadataError)(b);case 3:return(0,n.createNavigationMetadataError)(b);case 4:return(0,n.createPrefetchMetadataError)(b);case 5:return(0,n.createDynamicMetadataError)(b);case 6:return(0,n.createDynamicOrRuntimeMetadataError)(b)}}function aa(a,b){switch(a){case 1:return(0,n.createRuntimeViewportError)(b);case 2:return(0,n.createLinkViewportError)(b);case 3:return(0,n.createNavigationViewportError)(b);case 4:return(0,n.createPrefetchViewportError)(b);case 5:return(0,n.createDynamicViewportError)(b);case 6:return(0,n.createDynamicOrRuntimeViewportError)(b)}}function ab(a,b){switch(a){case 1:return(0,n.createRuntimeBodyErrorInStaticRoute)(b);case 5:return(0,n.createDynamicBodyErrorInStaticRoute)(b);case 6:return(0,n.createNonPrerenderableBodyErrorInStaticRoute)(b)}}function ac(a,b,c,d,e){let f=S.exec(d);if(f){let g=N.exec(d);if(g&&g.index<f.index)return;if(e){let a=(0,s.getReactBrowserBailoutReason)(c);void 0!==a&&(c.cause=a)}let h=ae(Error(`Route "${a.route}": Could not validate \`instant\` because an error prevented the target segment from rendering.`,{cause:c}),d,null);b.validationPreventingErrors.push(h)}else{if(e){let a=(0,s.getReactBrowserBailoutReason)(c);void 0!==a&&(c.cause=a)}let a=ae(Error("An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.",{cause:c}),d,null);b.thrownErrorsOutsideBoundary.push(a)}}function ad(a,b,c,d,e,f){let g=v(e);if(R.test(c))return void U(c,d);if(P.test(c)){d.dynamicMetadata=ae(_(f,b.route),c,null);return}if(Q.test(c)){let a=ae(aa(f,b.route),c,null);d.dynamicErrors.push(a);return}if(O.test(c)){d.hasAllowedDynamic=!0,d.hasSuspenseAboveBody=!0;return}if(N.test(c)){d.hasAllowedDynamic=!0;return}else if(g)return void d.dynamicErrors.push(g);if((0,k.isClientHookDynamicError)(a))return void d.dynamicErrors.push(ae(a,c,null));let h=ae(1===f?(0,n.createRuntimeBodyError)(b.route):(0,n.createDynamicBodyError)(b.route),c,null);d.dynamicErrors.push(h)}function ae(a,b,c){return null!==c&&(a.cause=c()),a.stack=a.name+": "+a.message+b,a}var af=((e={})[e.Full=0]="Full",e[e.Empty=1]="Empty",e[e.Errored=2]="Errored",e);function ag(a,b){console.error(b),(0,n.logBuildDebugHint)(a.route)}function ah(a,b){if(b.syncDynamicErrorWithStack)throw ag(a,b.syncDynamicErrorWithStack),new i.StaticGenBailoutError}function ai(a,b,c,d,e){if(ah(a,d),0===b&&!1===c.hasAllowedDynamic&&c.hasDynamicMetadata)throw console.error(_(6,a.route).message),new i.StaticGenBailoutError;if(!e&&!c.hasSuspenseAboveBody&&0!==b){let d=c.dynamicErrors;if(d.length>0){for(let b=0;b<d.length;b++)ag(a,d[b]);throw new i.StaticGenBailoutError}if(c.hasDynamicViewport)throw console.error(aa(6,a.route).message),new i.StaticGenBailoutError;if(1===b)throw console.error(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`),new i.StaticGenBailoutError}}function aj(a,b,c,d,e,f,g){let h=ak(a,b,c,d,e,f,g);if(h.length>0){for(let b of h)ag(a,b);throw new i.StaticGenBailoutError}}function ak(a,b,c,d,e,f,g){if(d&&d.syncDynamicErrorWithStack)return[d.syncDynamicErrorWithStack];if(e||!g&&(f||c.hasSuspenseAboveBody))return[];let{dynamicErrors:h}=c;return h.length>0?h:g?[Error(`Route "${a.route}": Next.js encountered data that is not available during a static prerender, but is unable to provide a location.`)]:1===b||2===b?[new o.InvariantError(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason.`)]:[]}function al(a,b,c,d){if(0===b&&!1===c.hasAllowedDynamic&&0===c.dynamicErrors.length&&c.dynamicMetadata)return[c.dynamicMetadata];if(d||c.hasSuspenseAboveBody)return[];if(0!==b){let d=c.dynamicErrors;if(d.length>0)return d;if(1===b)return[new o.InvariantError(`Route "${a.route}" did not produce a static shell and Next.js was unable to determine a reason.`)]}return[]}function am(a,b,c,d,e,f){if(d){let{missingSampleErrors:a}=d;if(a.length>0)return a}let{validationPreventingErrors:g}=c;if(g.length>0)return g;if(0!==b){let d=c.dynamicErrors;if(d.length>0)return d;if(1===b&&!c.hasAllowedClientDynamicAboveBoundary&&(0,q.allRequiredBoundariesRendered)(e))return new o.InvariantError(`Route "${a.route}" failed to render during instant validation and Next.js was unable to determine a reason.`)}else{let a=c.dynamicErrors;if(a.length>0)return a;if(!1===c.hasAllowedDynamic&&c.dynamicMetadata)return[c.dynamicMetadata]}if(!(0,q.allRequiredBoundariesRendered)(e)){let{thrownErrorsOutsideBoundary:b}=c,d=c.slotStacks[0];if(0===b.length){let b=[];for(let[a,c]of e.requiredIds)if(!e.renderedIds.has(a))for(let a of c){let c=a.replace(/^\[project\][\\/]?/,"").replace(process.cwd()+"/","").replace(process.cwd()+"\\","");b.push(c)}return b.sort(),(0,r.createUnrenderedSegmentError)(a.route,b)}if(1===b.length){let c=`Route "${a.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to the following error.`,e=null!==d?d():Error();return e.name="Error",e.message=c,AggregateError([e,b[0]])}{let c=`Route "${a.route}": Could not validate \`instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`,e=null!==d?d():Error();return e.name="Error",e.message=c,AggregateError([e,...b])}}return[]}},21177,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={INSTANT_SLOT_MARKER_PREFIX:function(){return g},INSTANT_SLOT_MARKER_SUFFIX:function(){return h},INSTANT_VALIDATION_BOUNDARY_NAME:function(){return f}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="__next_instant_validation_boundary__",g="__next_instant_slot_",h="__"},83521,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={allRequiredBoundariesRendered:function(){return g},createValidationBoundaryTracking:function(){return f}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return{requiredIds:a?new Map(a.requiredIds):new Map,renderedIds:new Set}}function g(a){for(let b of a.requiredIds.keys())if(!a.renderedIds.has(b))return!1;return!0}},73543,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d,e,f={EnsureStaticLevel:function(){return j},resolveEnsureStaticConfig:function(){return l},resolveEnsureStaticLevel:function(){return k}};for(var g in f)Object.defineProperty(c,g,{enumerable:!0,get:f[g]});let h=a.r(4560),i=a.r(13925);var j=((d={})[d.None=0]="None",d[d.Shell=1]="Shell",d[d.Prefetch=2]="Prefetch",d[d.Navigation=3]="Navigation",d);async function k(a,b){switch(await l(a,b)){case"auto":case!1:return 0;case"shell":return 1;case"prefetch":return 2;case"navigation":return 3}}async function l(a,b){let{config:c,filePath:d}=await m(a);if(!b)switch(c){case"auto":c="prefetch";break;case!1:case"shell":{let a=c;c="prefetch",console.warn(`${o(a)} has no effect unless the route is using Partial Prefetching.
  (from: ${d})`)}}return!1===c?"auto":c}async function m(a){var b;let{mod:c,filePath:d}=await (0,i.getLayoutOrPageModule)(a),e={config:((b=c)?b.ensureStatic:void 0)??"auto",filePath:d??null},f=null,g=null,{parallelRoutes:j}=(0,h.parseLoaderTree)(a);for(let a in j){let b=j[a],c=await m(b);if(f)switch(r(c.config,f.config)){case 2:"auto"===f.config&&"auto"!==c.config&&(f=c,g=a);break;case 4:case 1:case 3:throw Error(`Parallel slots cannot have incompatible \`ensureStatic\`.
  ${n(g)}: 
    ${o(f.config)}
    (from: ${f.filePath})

  ${n(a)}: 
    ${o(c.config)}
    (from: ${c.filePath})

 Possible fixes:
 - Remove one of the \`ensureStatic\` exports
 - Change one of the  \`ensureStatic\` exports to match the other`)}else f=c,g=a}if(!f)return e;{let a=r(f.config,e.config);switch(a){case 2:if("auto"===e.config&&"auto"!==f.config)return f;return e;case 3:return f;case 1:case 4:throw Error((1===a?"A child segment cannot override a parent segment with a less-constrained `ensureStatic`.":"A child segment cannot override a parent segment with an incompatible `ensureStatic`.")+`
  Parent has: `+`
    ${o(e.config)}`+`
    (from: ${e.filePath})`+`
  Child has: `+`
    ${o(f.config)}`+`
    (from: ${f.filePath})`+`
`+`
 Possible fixes:`+"\n - Remove one of the `ensureStatic` exports\n - Change one of the  `ensureStatic` exports to match the other")}}}function n(a){return"children"===a?a:`@${a}`}function o(a){return`export const ensureStatic = ${JSON.stringify(a)}`}var p=((e=p||{})[e.LessConstrained=1]="LessConstrained",e[e.Compatible=2]="Compatible",e[e.MoreConstrained=3]="MoreConstrained",e[e.Incompatible=4]="Incompatible",e);let q=["shell","prefetch","navigation"];function r(a,b){if("auto"===a||"auto"===b||!1===a&&!1===b)return 2;if(!1===a||!1===b)return 4;let c=q.indexOf(a),d=q.indexOf(b);return c<d?1:c===d?2:3}},40656,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d,e,f={RENDER_STAGE_ADVANCE_ORDER:function(){return k},RenderStage:function(){return j},StagedRenderingController:function(){return o},SyncIOMode:function(){return n},getNextStage:function(){return l},isAdvanceableRenderStage:function(){return m}};for(var g in f)Object.defineProperty(c,g,{enumerable:!0,get:f[g]});let h=a.r(88644),i=a.r(54427);var j=((d={})[d.Before=1]="Before",d[d.ShellStatic=10]="ShellStatic",d[d.PrefetchStatic_prefetchApi=11]="PrefetchStatic_prefetchApi",d[d.PrefetchStatic=12]="PrefetchStatic",d[d.NavigationStatic=13]="NavigationStatic",d[d.Static=14]="Static",d[d.ShellRuntime=20]="ShellRuntime",d[d.PrefetchRuntime_prefetchApi=21]="PrefetchRuntime_prefetchApi",d[d.PrefetchRuntime=22]="PrefetchRuntime",d[d.NavigationRuntime=23]="NavigationRuntime",d[d.Dynamic=30]="Dynamic",d[d.Abandoned=40]="Abandoned",d);let k=[10,11,12,13,14,20,21,22,23,30];function l(a){return k[k.indexOf(a)+1]}function m(a){return 1<a&&a<=30}var n=((e={})[e.Untracked=1]="Untracked",e[e.AllowedInRuntimeOrDynamic=2]="AllowedInRuntimeOrDynamic",e[e.AllowedInDynamic=3]="AllowedInDynamic",e);class o{constructor({abortSignal:a,abandonController:b,syncIO:c,finalStage:d}){this.currentStage=1,this.syncInterruptReason=null,this.triggers=function(){let a={};for(let b of k)a[b]=function(){let{promise:a,resolve:b,reject:c}=(0,i.createPromiseWithResolvers)();return{state:"pending",triggeredAt:null,promise:a,_listeners:[],_resolvePromise:b,_rejectPromise:c}}();return a}(),this.abortSignal=a,this.abandonController=b,this.syncIOMode=c,this.finalStage=d,a&&a.addEventListener("abort",()=>{let{reason:b}=a;for(let a of Object.values(this.triggers)){var c,d;c=a,d=b,"pending"===c.state&&(c.state="cancelled",c._listeners.length=0,c.promise.catch(p),c._rejectPromise(d))}},{once:!0}),b&&b.signal.addEventListener("abort",()=>{this.abandonRender()},{once:!0})}onStage(a,b){var c,d;c=this.triggers[a],d=b,"pending"===c.state?c._listeners.push(d):d()}shouldTrackSyncInterrupt(){let{syncIOMode:a,currentStage:b}=this;switch(a){case 1:return!1;case 2:return b>1&&b<=14;case 3:return b>1&&b<30}}syncInterruptCurrentStageWithReason(a){let{currentStage:b}=this;if(1!==b&&30!==b&&40!==b){if(this.abandonController)return void this.abandonController.abort();if(this.abortSignal){this.syncInterruptReason=a,this.currentStage=40;return}this.syncInterruptReason=a,this.advanceStage(30)}}getSyncInterruptReason(){return this.syncInterruptReason}getStageEndTime(a){return this.triggers[l(a)].triggeredAt??1/0}abandonRender(){let{currentStage:a}=this;if(1===a)throw new h.InvariantError("A render that hasn't started yet cannot be abandoned");if(30===a||40===a)return;let b=k.indexOf(a)+1,c=k.indexOf(30);for(let a=b;a<c;a++)this.resolveStage(k[a]);this.currentStage=40}advanceStage(a){if(null!==this.finalStage&&a>this.finalStage)throw new h.InvariantError(`Attempted to advance to stage ${j[a]} but the render is limited to ${j[this.finalStage]}`);let{currentStage:b}=this;if(30===b||40===b||a<=b)return;this.currentStage=a;let c=1===b?0:k.indexOf(b)+1,d=k.indexOf(a);for(let a=c;a<=d;a++)this.resolveStage(k[a])}resolveStage(a){var b=this.triggers[a];if("pending"===b.state){b.state="triggered",b.triggeredAt=performance.now()+performance.timeOrigin;try{let{_listeners:a}=b;for(let b=0;b<a.length;b++)a[b]();a.length=0}finally{b._resolvePromise()}}}getStagePromise(a){return this.triggers[a].promise}waitForStage(a){return this.getStagePromise(a)}delayUntilStage(a,b,c){let d=this.getStagePromise(a).then(()=>c);return this.abortSignal&&d.catch(p),d}}function p(){}},35710,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={ClientHookDynamicError:function(){return o},RENDER_STAGES_BY_DATA_KIND:function(){return P},applyOwnerStack:function(){return Q},createPrerenderDataTracking:function(){return y},finishPrerenderDataTracking:function(){return z},isClientHookDynamicError:function(){return p},isHangingPromiseRejectionError:function(){return k},makeClientHookHangingPromise:function(){return I},makeDevtoolsIOAwarePromise:function(){return M},makeDynamicHangingPromise:function(){return r},makeFallbackParamsHangingPromise:function(){return x},makePrefetchHangingPromise:function(){return w},makePromiseFromTrigger:function(){return L},makeSessionDataHangingPromise:function(){return t},makeURLDataHangingPromise:function(){return u},makeUnknownRuntimeDataHangingPromise:function(){return v},makeUntrackedHangingPromise:function(){return s},trackFallbackParamsAccessed:function(){return C},trackIncompatibleShellContent:function(){return H},trackPromiseUsed:function(){return N},trackURLDataAccessed:function(){return B}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(88644),g=a.r(54427),h=a.r(73543),i=a.r(40656),j=a.r(56704);function k(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===l}a.r(32319),a.r(59043);let l="HANGING_PROMISE_REJECTION";class m extends Error{constructor(a,b){super(`During prerendering, ${b} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${b} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${a}".`),this.route=a,this.expression=b,this.digest=l}}let n="CLIENT_HOOK_DYNAMIC";class o extends Error{constructor(a,b){super(`Route "${a}": Next.js encountered URL data \`${b}\` in a Client Component outside of \`<Suspense>\`.

This blocks prerendering because the value is only available at runtime.

Ways to fix this:
  - [stream] Wrap the component in \`<Suspense fallback={...}>\` so the hook value streams in after prerendering
  - [block] Set \`export const instant = false\` to allow a blocking route

Learn more: https://nextjs.org/docs/messages/blocking-prerender-client-hook`),this.digest=n}}function p(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===n}let q=new WeakMap;function r(a,b,c){return J(a,new m(b,c))}function s(a,b,c){return J(a,new m(b,c))}function t(a,b,c,d){return N(J(a,new m(b,c)),A.bind(null,d,c))}function u(a,b,c,d){let e=J(a,new m(b,c));return null===d?e:N(e,B.bind(null,d,c))}function v(a,b,c,d){return t(a,b,c,d)}function w(a,b,c){return s(a,b,c)}function x(a,b,c,d){let e=J(a,new m(b,c));return null===d?e:N(e,C.bind(null,d,c))}function y(){return{runtimeDataAccessed:(0,g.createPromiseWithResolvers)(),shouldAttemptStaticShell:!0,shouldAttemptStaticPrefetch:!0}}function z(a){a.runtimeDataAccessed.resolve(!1)}function A(a,b){D(a,1,b)}function B(a,b){D(a,2,b)}function C(a,b){D(a,3,b)}function D(a,b,c){if("prerender"===a.type){let{prerenderDataTracking:d,stagedRendering:e}=a;if(!d||!e)return;let{currentStage:g}=e;if(g===i.RenderStage.Before)return void console.error(new f.InvariantError("Unexpected trackRuntimeDataAccessed in the Before stage."));if(g>=i.RenderStage.NavigationStatic)return;let j=a.ensureStaticLevel??h.EnsureStaticLevel.None;switch(b){case 1:{let a=null;g<=i.RenderStage.ShellStatic&&j<h.EnsureStaticLevel.Shell&&(d.shouldAttemptStaticShell=!1,a??=i.RenderStage.ShellStatic,null==F||F(c,"shell")),g<=i.RenderStage.PrefetchStatic&&j<h.EnsureStaticLevel.Prefetch&&(d.shouldAttemptStaticPrefetch=!1,a??=i.RenderStage.PrefetchStatic,null==F||F(c,"prefetch")),null!==a&&E(d,e,a);break}case 3:if(a.isFallbackUpgradeable){j<h.EnsureStaticLevel.Prefetch&&(E(d,e,i.RenderStage.PrefetchStatic),null==G||G());break}case 2:g<=i.RenderStage.PrefetchStatic&&j<h.EnsureStaticLevel.Prefetch&&(d.shouldAttemptStaticPrefetch=!1,null==F||F(c,"prefetch"),E(d,e,i.RenderStage.PrefetchStatic))}}}function E(a,b,c){let{runtimeDataAccessed:d}=a;b.currentStage>=c?d.resolve(!0):b.onStage(c,d.resolve.bind(null,!0))}let F=process.env.NEXT_PRIVATE_DEBUG_RUNTIME_DATA?(a,b)=>{let{route:c}=j.workAsyncStorage.getStore();console.log(`Route '${c}': deopting to a runtime ${b} because it used ${a}`)}:void 0,G=process.env.NEXT_PRIVATE_DEBUG_RUNTIME_DATA?()=>{let{route:a}=j.workAsyncStorage.getStore();console.log(`Route '${a}': marking upgradeable fallback as runtime prefetchable`)}:void 0;function H(a,b){let{stagedRendering:c}=a;if(!c)return;let{currentStage:d}=c;if(d!==i.RenderStage.Dynamic&&d!==i.RenderStage.Abandoned){if(process.env.NEXT_PRIVATE_DEBUG_VALIDATION){let a=j.workAsyncStorage.getStore();console.log(`Route ${a.route}: Incompatible shell content: ${b}`)}a.hasIncompatibleShellContent=!0}}function I(a,b){return J(a,b)}function J(a,b){if(a.aborted)return Promise.reject(b);{let c=new Promise((c,d)=>{let e=d.bind(null,b),f=q.get(a);if(f)f.push(e);else{let b=[e];q.set(a,b),a.addEventListener("abort",()=>{for(let a=0;a<b.length;a++)b[a]()},{once:!0})}});return c.catch(K),c}}function K(){}function L(a,b){let c=a.then(()=>b);return c.catch(K),c}function M(a,b,c){return b.stagedRendering?b.stagedRendering.delayUntilStage(c,void 0,a):new Promise(b=>{setTimeout(()=>{b(a)},0)})}function N(a,b){return O.from(a,b)}class O extends Promise{#a;static get[Symbol.species](){return Promise}static from(a,b){let c=new O(a.then.bind(a));return c.#a=b,Promise.prototype.then.call(c,void 0,K),c}then(a,b){let c=this.#a;if(c)try{c()}catch(a){console.error(a)}return Promise.prototype.then.call(this,a,b)}constructor(...a){super(...a),this.#a=null}}let P={sessionData:i.RenderStage.ShellRuntime,staticUrlData:{prefetchApi:{static:i.RenderStage.PrefetchStatic_prefetchApi,runtime:i.RenderStage.PrefetchRuntime_prefetchApi},static:i.RenderStage.PrefetchStatic,runtime:i.RenderStage.PrefetchRuntime},runtimeUrlData:i.RenderStage.PrefetchRuntime};function Q(a){return a}},13925,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={getComponentTypeModule:function(){return h},getLayoutOrPageModule:function(){return g}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(39118);async function g(a){let b,c,d,{layout:e,page:g,defaultPage:h}=a[2],i=void 0!==e,j=void 0!==g,k=void 0!==h&&a[0]===f.DEFAULT_SEGMENT_KEY;return i?(b=await e[0](),c="layout",d=e[1]):j?(b=await g[0](),c="page",d=g[1]):k&&(b=await h[0](),c="page",d=h[1]),{mod:b,modType:c,filePath:d}}async function h(a,b){let{[b]:c}=a[2];if(void 0!==c)return await c[0]()}},14827,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={createLinkPrefetchPartialError:function(){return g},createUnrenderedSegmentError:function(){return f}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a,b){let c=`Route "${a}": Could not validate that a segment in your UI has instant navigation.`;if(b.length>0){let a=1===b.length?"Dropped segment":"Dropped segments";c+=`

This segment was dropped from rendering. Issues that would prevent instant navigation will go undetected.

${a}:
${b.map(a=>`  ${a}`).join("\n")}

Ways to fix this:
  - [render] Render the dropped segment
  - [ignore] Set \`export const instant = false\` to opt the dropped segment out of instant-navigation validation

Learn more: https://nextjs.org/docs/messages/instant-unrendered-segment`}return Error(c)}function g(a){return Error(`Next.js encountered dynamic data during prefetching for "${a}".

This will lead to slower, more expensive prefetches.

Ways to fix this:
  - [upgrade] Opt into Partial Prefetching by exporting \`const prefetch = 'partial'\` from the page or layout, or by setting \`partialPrefetching: true\` in next.config to opt the whole app in
  - [disable] Remove \`prefetch={true}\` from the <Link> to use the default prefetch
  - [ignore] Set \`export const instant = false\` to opt the route out of instant-navigation validation

Learn more: https://nextjs.org/docs/messages/instant-link-prefetch-partial`)}},88644,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"InvariantError",{enumerable:!0,get:function(){return d}});class d extends Error{constructor(a,b){super(`Invariant: ${a.endsWith(".")?a:a+"."} This is a bug in Next.js.`,b),this.name="InvariantError"}}},41997,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={BailoutToCSRError:function(){return g},isBailoutToCSRError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="BAILOUT_TO_CLIENT_SIDE_RENDERING";class g extends Error{constructor(a){super(`Bail out to client-side rendering: ${a}`),this.reason=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===f}},82794,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={createReactBrowserBailoutReason:function(){return g},getReactBrowserBailoutReason:function(){return h},isNextBrowserBailoutError:function(){return i}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=Symbol.for("next.browser-bailout-reason");function g(a){return{$$typeof:f,reason:a}}function h(a){let b=a?.cause;return b?.$$typeof===f?b.reason:void 0}function i(a){return void 0!==h(a)}},54427,(a,b,c)=>{function d(){let a,b,c=new Promise((c,d)=>{a=c,b=d});return{resolve:a,reject:b,promise:c}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createPromiseWithResolvers",{enumerable:!0,get:function(){return d}})},4560,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"parseLoaderTree",{enumerable:!0,get:function(){return e}});let d=a.r(39118);function e(a){let[b,c,e,f]=a,{layout:g,template:h}=e,{page:i}=e;i=b===d.DEFAULT_SEGMENT_KEY?e.defaultPage:i;let j=g?.[1]||h?.[1]||i?.[1];return{page:i,segment:b,modules:e,conventionPath:j,parallelRoutes:c,staticSiblings:f}}},39118,(a,b,c)=>{Object.defineProperty(c,"__esModule",{value:!0});var d={DEFAULT_SEGMENT_KEY:function(){return k},NOT_FOUND_SEGMENT_KEY:function(){return l},PAGE_SEGMENT_KEY:function(){return j},computeSelectedLayoutSegment:function(){return i},getSegmentValue:function(){return f},getSelectedLayoutSegmentPath:function(){return function a(b,c,d=!0,e=[]){let g;if(d)g=b[1][c];else{let a=b[1];g=a.children??Object.values(a)[0]}if(!g)return e;let h=f(g[0]);return h&&h!==j?(e.push(h),a(g,c,!1,e)):e}},isGroupSegment:function(){return g},isParallelRouteSegment:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return Array.isArray(a)?a[1]:a}function g(a){return"("===a[0]&&a.endsWith(")")}function h(a){return a.startsWith("@")&&"@children"!==a}function i(a,b){if(!a||0===a.length)return null;let c="children"===b?a[0]:a[a.length-1];return c===k?null:c}let j="__PAGE__",k="__DEFAULT__",l="/_not-found"},91023,(a,b,c)=>{var d=a.r(54799);function e(a,b){return b=h(a,b),function(a,b){if(void 0===(c="passthrough"!==b.algorithm?d.createHash(b.algorithm):new k).write&&(c.write=c.update,c.end=c.update),j(b,c).dispatch(a),c.update||c.end(""),c.digest)return c.digest("buffer"===b.encoding?void 0:b.encoding);var c,e=c.read();return"buffer"===b.encoding?e:e.toString(b.encoding)}(a,b)}(c=b.exports=e).sha1=function(a){return e(a)},c.keys=function(a){return e(a,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},c.MD5=function(a){return e(a,{algorithm:"md5",encoding:"hex"})},c.keysMD5=function(a){return e(a,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var f=d.getHashes?d.getHashes().slice():["sha1","md5"];f.push("passthrough");var g=["buffer","hex","binary","base64"];function h(a,b){var c={};if(c.algorithm=(b=b||{}).algorithm||"sha1",c.encoding=b.encoding||"hex",c.excludeValues=!!b.excludeValues,c.algorithm=c.algorithm.toLowerCase(),c.encoding=c.encoding.toLowerCase(),c.ignoreUnknown=!0===b.ignoreUnknown,c.respectType=!1!==b.respectType,c.respectFunctionNames=!1!==b.respectFunctionNames,c.respectFunctionProperties=!1!==b.respectFunctionProperties,c.unorderedArrays=!0===b.unorderedArrays,c.unorderedSets=!1!==b.unorderedSets,c.unorderedObjects=!1!==b.unorderedObjects,c.replacer=b.replacer||void 0,c.excludeKeys=b.excludeKeys||void 0,void 0===a)throw Error("Object argument required.");for(var d=0;d<f.length;++d)f[d].toLowerCase()===c.algorithm.toLowerCase()&&(c.algorithm=f[d]);if(-1===f.indexOf(c.algorithm))throw Error('Algorithm "'+c.algorithm+'"  not supported. supported values: '+f.join(", "));if(-1===g.indexOf(c.encoding)&&"passthrough"!==c.algorithm)throw Error('Encoding "'+c.encoding+'"  not supported. supported values: '+g.join(", "));return c}function i(a){return"function"==typeof a&&null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(a))}function j(a,b,c){c=c||[];var d=function(a){return b.update?b.update(a,"utf8"):b.write(a,"utf8")};return{dispatch:function(b){a.replacer&&(b=a.replacer(b));var c=typeof b;return null===b&&(c="null"),this["_"+c](b)},_object:function(b){var e=Object.prototype.toString.call(b),f=/\[object (.*)\]/i.exec(e);f=(f=f?f[1]:"unknown:["+e+"]").toLowerCase();var g=null;if((g=c.indexOf(b))>=0)return this.dispatch("[CIRCULAR:"+g+"]");if(c.push(b),"u">typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(b))return d("buffer:"),d(b);if("object"!==f&&"function"!==f&&"asyncfunction"!==f)if(this["_"+f])this["_"+f](b);else if(a.ignoreUnknown)return d("["+f+"]");else throw Error('Unknown object type "'+f+'"');else{var h=Object.keys(b);a.unorderedObjects&&(h=h.sort()),!1===a.respectType||i(b)||h.splice(0,0,"prototype","__proto__","constructor"),a.excludeKeys&&(h=h.filter(function(b){return!a.excludeKeys(b)})),d("object:"+h.length+":");var j=this;return h.forEach(function(c){j.dispatch(c),d(":"),a.excludeValues||j.dispatch(b[c]),d(",")})}},_array:function(b,e){e=void 0!==e?e:!1!==a.unorderedArrays;var f=this;if(d("array:"+b.length+":"),!e||b.length<=1)return b.forEach(function(a){return f.dispatch(a)});var g=[],h=b.map(function(b){var d=new k,e=c.slice();return j(a,d,e).dispatch(b),g=g.concat(e.slice(c.length)),d.read().toString()});return c=c.concat(g),h.sort(),this._array(h,!1)},_date:function(a){return d("date:"+a.toJSON())},_symbol:function(a){return d("symbol:"+a.toString())},_error:function(a){return d("error:"+a.toString())},_boolean:function(a){return d("bool:"+a.toString())},_string:function(a){d("string:"+a.length+":"),d(a.toString())},_function:function(b){d("fn:"),i(b)?this.dispatch("[native]"):this.dispatch(b.toString()),!1!==a.respectFunctionNames&&this.dispatch("function-name:"+String(b.name)),a.respectFunctionProperties&&this._object(b)},_number:function(a){return d("number:"+a.toString())},_xml:function(a){return d("xml:"+a.toString())},_null:function(){return d("Null")},_undefined:function(){return d("Undefined")},_regexp:function(a){return d("regex:"+a.toString())},_uint8array:function(a){return d("uint8array:"),this.dispatch(Array.prototype.slice.call(a))},_uint8clampedarray:function(a){return d("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(a))},_int8array:function(a){return d("int8array:"),this.dispatch(Array.prototype.slice.call(a))},_uint16array:function(a){return d("uint16array:"),this.dispatch(Array.prototype.slice.call(a))},_int16array:function(a){return d("int16array:"),this.dispatch(Array.prototype.slice.call(a))},_uint32array:function(a){return d("uint32array:"),this.dispatch(Array.prototype.slice.call(a))},_int32array:function(a){return d("int32array:"),this.dispatch(Array.prototype.slice.call(a))},_float32array:function(a){return d("float32array:"),this.dispatch(Array.prototype.slice.call(a))},_float64array:function(a){return d("float64array:"),this.dispatch(Array.prototype.slice.call(a))},_arraybuffer:function(a){return d("arraybuffer:"),this.dispatch(new Uint8Array(a))},_url:function(a){return d("url:"+a.toString())},_map:function(b){d("map:");var c=Array.from(b);return this._array(c,!1!==a.unorderedSets)},_set:function(b){d("set:");var c=Array.from(b);return this._array(c,!1!==a.unorderedSets)},_file:function(a){return d("file:"),this.dispatch([a.name,a.size,a.type,a.lastModfied])},_blob:function(){if(a.ignoreUnknown)return d("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return d("domwindow")},_bigint:function(a){return d("bigint:"+a.toString())},_process:function(){return d("process")},_timer:function(){return d("timer")},_pipe:function(){return d("pipe")},_tcp:function(){return d("tcp")},_udp:function(){return d("udp")},_tty:function(){return d("tty")},_statwatcher:function(){return d("statwatcher")},_securecontext:function(){return d("securecontext")},_connection:function(){return d("connection")},_zlib:function(){return d("zlib")},_context:function(){return d("context")},_nodescript:function(){return d("nodescript")},_httpparser:function(){return d("httpparser")},_dataview:function(){return d("dataview")},_signal:function(){return d("signal")},_fsevent:function(){return d("fsevent")},_tlswrap:function(){return d("tlswrap")}}}function k(){return{buf:"",write:function(a){this.buf+=a},end:function(a){this.buf+=a},read:function(){return this.buf}}}c.writeToStream=function(a,b,c){return void 0===c&&(c=b,b={}),j(b=h(a,b),c).dispatch(a)}}],50944,(a,b,c)=>{b.exports=a.r(74137)}];

//# sourceMappingURL=_0rije740mfvmo._.js.map