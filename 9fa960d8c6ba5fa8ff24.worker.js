!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";r.r(t),t.default=["Habitital_Planet","Rocky","Gas"]},function(e,t,r){"use strict";r.r(t),t.default=["1","2","3","4"]},function(e,t,r){"use strict";r.r(t),t.default={resources:{H3:[500,3e3]},size:[15,20],zone:[4,20],chance:80,name:1}},function(e,t,r){"use strict";r.r(t),t.default={resources:{H3:[500,3e3]},size:[15,20],zone:[10,20],chance:20,name:2}},function(e,t,r){"use strict";r.r(t),t.default={resources:{H3:[500,3e3]},size:[13,20],zone:[10,40],chance:10,name:3}},function(e,t,r){"use strict";r.r(t),t.default={resources:{H3:[500,3e3]},size:[7,10],zone:[1,10],chance:45,name:4}},function(e,t,r){"use strict";r.r(t),t.default={size:[50,95],chance:95,zone:[700,5e3],resources:{xlkcvhsLKdgh:[89,78]},numberOfTextures:1,name:"Gas"}},function(e,t,r){"use strict";r.r(t),t.default={size:[25,50],chance:10,zone:[300,500],resources:{wood:[100,200],rock:[100,200],food:[100,200],water:[100,200]},numberOfTextures:3,name:"Habitital_Planet"}},function(e,t,r){"use strict";r.r(t),t.default={size:[20,50],chance:90,zone:[1,1e3],resources:{wood:[0,1],rock:[1e3,2e3],food:[0,5],water:[0,10]},numberOfTextures:1,name:"Rocky"}},function(e,t,r){var n={"./1":2,"./1.js":2,"./2":3,"./2.js":3,"./3":4,"./3.js":4,"./4":5,"./4.js":5,"./_types":1,"./_types.js":1};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=9},function(e,t,r){var n={"./Gas":6,"./Gas.js":6,"./Habitital_Planet":7,"./Habitital_Planet.js":7,"./Rocky":8,"./Rocky.js":8,"./_types":0,"./_types.js":0};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=10},function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1);class o{constructor(e){this.path=e}genResources(){for(let e=0;e<this.type.resources.length;e++){const t=this.type.resources[e];this.resources.push(Math.random()*(t[1]-t[0])+t[0])}}}class a extends o{constructor(e){var t,r;super(e),r={},(t="resources")in this?Object.defineProperty(this,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[t]=r,this.degrees=360*Math.random(),this.genType(),this.genResources(),this.size=Math.random()*(this.type.size[1]-this.type.size[0])+this.type.size[0]}genType(){const e=[];s.default.forEach(t=>{const n=r(9)("./".concat(t)).default;n.zone[0]<this.path&&n.zone[1]>this.path&&e.push(n)}),this.type=e[Math.floor(Math.random()*e.length)]||{resources:{H3:[500,3e3]},size:[2,3],zone:[4,20],chance:80,name:"1"}}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=5,c=10;class f extends o{constructor(e){super(e),i(this,"resources",{}),i(this,"moons",[]),this.degrees=360*Math.random(),this.genType(),this.genResources(),this.size=Math.random()*(this.type.size[1]-this.type.size[0])+this.type.size[0],this.r=this.size+(35*Math.random()+5);let t=this.size;for(;t<this.r;)this.moons.push(new a(t)),t=Math.floor(Math.random()*(c-u))+u+t}genType(){const e=[];n.default.forEach(t=>{const n=r(10)("./".concat(t)).default;n.zone[0]<this.path&&n.zone[1]>this.path&&e.push(n)}),this.type=e[Math.floor(Math.random()*e.length)]}}onmessage=e=>{const t=Math.floor(500*Math.random())+100,r=[],n={sunSize:t,...e.data};let s=t;for(;s<e.data.r;)r.push(new f(s)),s=Math.floor(100*Math.random())+100+s;n.planets=r,postMessage(n)}}]);