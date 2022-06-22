(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Roboto:wght@400;700&display=swap);"]),a.push([e.id,"body {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    display: grid;\n    place-items: center;\n    grid-template-rows: 1fr 6fr;\n    min-height: 100vh;\n    background-image: linear-gradient(pink, aqua);\n    margin: 0;\n}\n\nmain {\n    width: 80%;\n    height: 80%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color: whitesmoke;\n    margin-bottom: 40px;\n    padding: 2rem;\n}\n\nh1 {\n    font-family: 'Bungee Shade', cursive;\n\n}\n\n.side {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.list {\n    border: solid black;\n    height: 70%;\n    overflow: auto;\n}\n\n.hidden {\n    display: none;\n}\n\n.buttonContainer {\n    display: flex;\n    align-items: center;\n}\n\nbutton {\n    background-color: rgb(200, 200, 200);\n    border: none;\n    box-shadow: -2px 2px 5px grey;\n    padding: 5px;\n    border-radius: 5px;\n    color: white;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: rgb(167, 167, 167);\n}\n\n.projectContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    border-bottom: 1px solid grey;\n    margin: 0;\n}\n\n.selectedContainer {\n    background-color: rgb(197, 197, 197);\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=o(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),d=n.n(c),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=(e,t)=>({title:e,description:t,todoList:[]}),v=[];(()=>{const e=document.getElementById("projectBtn"),t=document.getElementById("projectForm"),n=document.getElementById("projectSubmitBtn"),o=document.getElementById("description"),r=document.getElementById("projectTitle"),i=document.getElementById("projectList"),a=document.getElementById("todoBtn"),c=document.getElementById("todoForm"),d=document.getElementById("todoSubmitBtn"),s=document.getElementById("title"),l=document.getElementById("dueDate"),u=document.querySelector('input[name="priority"]'),p=document.getElementById("projectSelect"),m=document.getElementById("todoList");function f(e){const t=document.createElement("div"),n=document.createElement("h3"),o=document.createElement("p"),r=document.createElement("option");"Untitled"===e.title&&t.classList.add("selectedContainer"),t.classList.add("projectContainer"),r.textContent=`${e.title}`,p.appendChild(r),n.textContent=e.title,o.textContent=e.description,t.append(n,o),i.append(t),function(e,t){e.onclick=()=>{m.innerHTML="",document.querySelectorAll(".projectContainer").forEach((e=>{e.classList.remove("selectedContainer")})),function(e){for(let t=0;t<v.length;t++)if(v[t].project==e.title){const e=v[t],n=document.createElement("div"),o=document.createElement("p"),r=document.createElement("button");r.textContent="Details",o.textContent=e.title,n.append(o,r),m.appendChild(n),r.onclick=()=>{const t=document.createElement("div"),o=document.createElement("p"),r=document.createElement("p");o.textContent=e.dueDate,r.textContent=e.priority,t.append(o,r),n.appendChild(t)}}}(t),e.classList.add("selectedContainer")}}(t,e)}f(h("Untitled")),a.onclick=()=>{c.classList.remove("hidden")},d.onclick=()=>{const e=((e,t,n,o)=>({title:e,dueDate:t,priority:n,project:o}))(s.value,l.value,u.checked,p.value);!function(e){const t=document.createElement("div"),n=document.createElement("h4"),o=document.createElement("p");t.classList.add("todoContainer"),n.textContent=e.title,o.textContent=e.dueDate,t.append(n,o),t.classList.add(`todo${e.project}`)}(e),v.push(e),c.classList.add("hidden"),c.reset()},e.onclick=()=>{t.classList.remove("hidden")},n.onclick=()=>{f(h(r.value,o.value)),t.classList.add("hidden"),t.reset()}})()})()})();