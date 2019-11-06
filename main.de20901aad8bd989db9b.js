!function(e){var t={};function s(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);s(1);let n=document.createElement("div");n.className="wrapper";let a=document.createElement("h1");a.className="site_title",a.innerText="Virtual keyboard";let i=document.createElement("textarea");i.className="textarea",i.setAttribute("disabled",!0),document.body.append(n),n.append(a),a.after(i);const r={elements:{main:null,keysContainer:null,keys:{Backquote:["`","ё","~","Ё"],Digit1:["1","1","!","!"],Digit2:["2","2","@",'"'],Digit3:["3","3","#","№"],Digit4:["4","4","$",";"],Digit5:["5","5","%","%"],Digit6:["6","6","^",":"],Digit7:["7","7","&","?"],Digit8:["8","8","*","*"],Digit9:["9","9","(","("],Digit0:["0","0",")",")"],Minus:["-","-","_","_"],Equal:["=","=","+","+"],Backspace:["Backspace","Backspace","Backspace","Backspace"],Tab:["Tab","Tab","Tab","Tab"],KeyQ:["q","й","Q","Й"],KeyW:["w","ц","W","Ц"],KeyE:["e","у","E","У"],KeyR:["r","к","R","К"],KeyT:["t","е","T","Е"],KeyY:["y","н","Y","Н"],KeyU:["u","г","U","Г"],KeyI:["i","ш","I","Ш"],KeyO:["o","щ","O","Щ"],KeyP:["p","з","P","З"],BracketLeft:["[","х","{","Х"],BracketRight:["]","ъ","}","Ъ"],Backslash:["\\","\\","|","/"],CapsLock:["CapsLock","CapsLock","CapsLock","CapsLock"],KeyA:["a","ф","A","Ф"],KeyS:["s","ы","S","Ы"],KeyD:["d","в","D","В"],KeyF:["f","а","F","А"],KeyG:["g","п","G","П"],KeyH:["h","р","H","Р"],KeyJ:["j","о","J","О"],KeyK:["k","л","K","Л"],KeyL:["l","д","L","Д"],Semicolon:[";","ж",":","Ж"],Quote:["'","э",'"',"Э"],Enter:["Enter","Enter","Enter","Enter"],ShiftLeft:["Shift","Shift","Shift","Shift"],KeyZ:["z","я","Z","Я"],KeyX:["x","ч","X","Ч"],KeyC:["c","с","C","С"],KeyV:["v","м","V","М"],KeyB:["b","и","B","И"],KeyN:["n","т","N","Т"],KeyM:["m","ь","M","Ь"],Comma:[",","б","<","Б"],Period:[".","ю",">","Ю"],Slash:["/",".","?",","],ArrowUp:["↑","↑","↑","↑"],ShiftRight:["Shift","Shift","Shift","Shift"],ControlLeft:["Ctrl","Ctrl","Ctrl","Ctrl"],MetaLeft:["Win","Win","Win","Win"],AltLeft:["Alt","Alt","Alt","Alt"],Space:["___","___","___","___"],ChangeLang:["","","",""],AltRight:["Alt","Alt","Alt","Alt"],ArrowLeft:["←","←","←","←"],ArrowDown:["↓","↓","↓","↓"],ArrowRight:["→","→","→","→"],ControlRight:["Ctrl","Ctrl","Ctrl","Ctrl"]}},properties:{capsLock:!1,langEng:!1,isShifted:!1},init(){return this.elements.main=document.createElement("div"),this.elements.keysContainer=document.createElement("div"),this.elements.main.classList.add("kboard"),this.elements.keysContainer.classList.add("keys"),this.elements.main.append(this.elements.keysContainer),this.elements.keysContainer.append(this._createKeys()),this._createKeyboardListener(),this.elements.main},_createKeys(){const e=document.createDocumentFragment(),t=this.elements.keys;for(let s in t){const n=document.createElement("div"),a=`<span class='lang off'>\n                                  <span class='case off'>${t[s][2]}</span>\n                                  <span class='case'>${t[s][0]}</span>\n                                </span>\n                                <span class='lang'>\n                                  <span class='case off'>${t[s][3]}</span>\n                                  <span class='case'>${t[s][1]}</span>\n                                </span>`;switch(n.insertAdjacentHTML("beforeend",a),n.classList.add("key",s),n.addEventListener("click",()=>{n.classList.add("key-pressed"),setTimeout(()=>n.classList.remove("key-pressed"),100)}),s){case"Backspace":n.addEventListener("click",()=>{i.value=i.value.slice(0,-1)});break;case"Tab":n.addEventListener("click",()=>{i.value+="\t"});break;case"CapsLock":n.addEventListener("click",()=>{this._toggleCapsLock()});break;case"Enter":n.addEventListener("click",()=>{i.value+="\n"});break;case"Space":n.addEventListener("click",()=>{i.value+=" "});break;case"ShiftLeft":case"ShiftRight":break;case"AltLeft":n.addEventListener("click",e=>{e.ctrlKey&&this._toggleLang()});break;case"ChangeLang":n.addEventListener("click",e=>{this._toggleLang()});break;case"AltRight":n.addEventListener("click",e=>{e.ctrlKey&&this._toggleLang()});break;case"ControlLeft":case"ControlRight":n.addEventListener("click",e=>{e.altKey&&this._toggleLang()});break;case"MetaLeft":break;default:n.addEventListener("click",e=>{this.properties.langEng&&!this.properties.capsLock?e.shiftKey?i.value+=t[s][2]:i.value+=t[s][0]:this.properties.langEng||this.properties.capsLock?this.properties.langEng&&this.properties.capsLock?e.shiftKey?i.value+=t[s][0]:i.value+=t[s][2]:e.shiftKey?i.value+=t[s][1]:i.value+=t[s][3]:e.shiftKey?i.value+=t[s][3]:i.value+=t[s][1]})}e.append(n)}return window.addEventListener("keydown",e=>{this.elements.keysContainer.querySelectorAll(".key").forEach(t=>{t.classList.contains(e.code)&&t.classList.add("key-pressed")})}),window.addEventListener("keyup",e=>{this.elements.keysContainer.querySelectorAll(".key").forEach(t=>{t.classList.contains(e.code)&&t.classList.remove("key-pressed")})}),e},_createKeyboardListener(){window.addEventListener("keydown",e=>{if(!e.metaKey)switch(e.altKey&&e.ctrlKey&&this._toggleLang(),e.shiftKey&&(this.properties.isShifted||this.elements.keysContainer.querySelectorAll(".case").forEach(e=>e.classList.toggle("off")),!this.properties.isShifted&&(this.properties.isShifted=!0)),e.preventDefault(),e.code){case"Backspace":i.value=i.value.slice(0,-1);break;case"Tab":i.value+="\t";break;case"CapsLock":this._toggleCapsLock();break;case"Space":i.value+=" ";break;case"Enter":i.value+="\n";break;case"ShiftLeft":case"ShiftRight":case"AltLeft":case"AltRight":case"ControlLeft":case"ControlRight":break;default:this.properties.langEng&&!this.properties.capsLock?e.shiftKey?i.value+=this.elements.keys[e.code][2]:i.value+=this.elements.keys[e.code][0]:this.properties.langEng||this.properties.capsLock?this.properties.langEng&&this.properties.capsLock?e.shiftKey?i.value+=this.elements.keys[e.code][0]:i.value+=this.elements.keys[e.code][2]:e.shiftKey?i.value+=this.elements.keys[e.code][1]:i.value+=this.elements.keys[e.code][3]:e.shiftKey?i.value+=this.elements.keys[e.code][3]:i.value+=this.elements.keys[e.code][1]}}),window.addEventListener("keyup",e=>{e.shiftKey||"Shift"!==e.key||(this.properties.isShifted&&this.elements.keysContainer.querySelectorAll(".case").forEach(e=>e.classList.toggle("off")),this.properties.isShifted&&(this.properties.isShifted=!1))})},_toggleCapsLock(){!1===this.properties.capsLock?this.properties.capsLock=!0:this.properties.capsLock=!1,this.elements.keysContainer.querySelector(".CapsLock").classList.toggle("active"),this.elements.keysContainer.querySelectorAll(".case").forEach(e=>e.classList.toggle("off"))},_toggleLang(){!1===this.properties.langEng?this.properties.langEng=!0:this.properties.langEng=!1,this.elements.keysContainer.querySelectorAll(".lang").forEach(e=>e.classList.toggle("off")),this.elements.keysContainer.querySelector(".ChangeLang").classList.toggle("eng")}};window.addEventListener("DOMContentLoaded",()=>{n.append(r.init())})},function(e,t,s){var n=s(2);"string"==typeof n&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1};s(3)(n,a);n.locals&&(e.exports=n.locals)},function(e,t,s){},function(e,t,s){"use strict";var n,a={},i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}e[t]=s}return e[t]}}();function o(e,t){for(var s=[],n={},a=0;a<e.length;a++){var i=e[a],r=t.base?i[0]+t.base:i[0],o={css:i[1],media:i[2],sourceMap:i[3]};n[r]?n[r].parts.push(o):s.push(n[r]={id:r,parts:[o]})}return s}function l(e,t){for(var s=0;s<e.length;s++){var n=e[s],i=a[n.id],r=0;if(i){for(i.refs++;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(g(n.parts[r],t))}else{for(var o=[];r<n.parts.length;r++)o.push(g(n.parts[r],t));a[n.id]={id:n.id,refs:1,parts:o}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var n=s.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(s){t.setAttribute(s,e.attributes[s])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,s,n){var a=s?"":n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function f(e,t,s){var n=s.css,a=s.media,i=s.sourceMap;if(a&&e.setAttribute("media",a),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,y=0;function g(e,t){var s,n,a;if(t.singleton){var i=y++;s=h||(h=c(t)),n=u.bind(null,s,i,!1),a=u.bind(null,s,i,!0)}else s=c(t),n=f.bind(null,s,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(s)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var s=o(e,t);return l(s,t),function(e){for(var n=[],i=0;i<s.length;i++){var r=s[i],c=a[r.id];c&&(c.refs--,n.push(c))}e&&l(o(e,t),t);for(var p=0;p<n.length;p++){var d=n[p];if(0===d.refs){for(var u=0;u<d.parts.length;u++)d.parts[u]();delete a[d.id]}}}}}]);