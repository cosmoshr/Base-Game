!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){e.exports=function(){return new Worker(r.p+"9fa960d8c6ba5fa8ff24.worker.js")}},function(e,t){!function(){var e={},t={newWorker:function(t){var r=new Worker(t.data.path);r.addEventListener("message",function(e){var r={_from:t.data.id,message:e.data};t.target.postMessage(r)}),e[t.data.id]=r},terminate:function(t){e[t.data.id].terminate()},passMessage:function(t){e[t.data.id].postMessage(t.data.message,t.data.transfer)}},r=function(e){e.data._subworker&&t[e.data.cmd](e)},n=Worker;Worker=function(e){if(this.constructor!==Worker)throw new TypeError("Failed to construct 'Worker': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");var t=e.indexOf("blob:");-1!==t&&0!==t&&(e=e.substring(t));var o=new n(e);return o.addEventListener("message",r),o}}()},function(e,t){Math.radians=e=>e*Math.PI/180,Math.degrees=e=>180*e/Math.PI,Math.circleIntersect=(e,t,r,n)=>{const o=t+n,a=r.r+n;return!(e.x-o>r.x+a||r.x-a>e.x+o||e.y+o<r.y-a||r.y+a<e.y-o)},Math.genPosOnCircle=(e,t,r,n)=>({x:e+r*Math.sin(n),y:t+r*Math.cos(n)})},function(e,t,r){"use strict";r.r(t),r(1);var n=r(0),o=r.n(n);r(2);const a=[],s={width:5e4,height:5e4};onmessage=e=>{const t=((e,t,r,n)=>{const o=Math.floor(e.width*e.height/2704e4)**1.5;for(let t=0;t<o;t++){const t=Math.floor(4e3*Math.random())+1e3,r={x:Math.floor(Math.random()*e.width),y:Math.floor(e.height*Math.random())};let n=!0;for(let e=0;e<a.length;e++)if(Math.circleIntersect(r,t,a[e],200)){n=!1;break}n&&(a[a.length]={x:r.x,y:r.y,r:t})}return a})(s);let r=0;const n=[];t.forEach((e,t)=>{r++;const a=new o.a;a.postMessage(e),a.onmessage=e=>{n[t]=e.data,0==--r&&postMessage(n)}})}}]);