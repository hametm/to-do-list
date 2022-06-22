(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),c=n.n(i)()(r());c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Roboto:wght@400;700&display=swap);"]),c.push([e.id,"body {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    display: grid;\n    grid-template-rows: 1fr 6fr;\n    min-height: 100vh;\n    background-color: white;\n    margin: 0;\n}\n\nheader {\n    background-color: rgb(0, 119, 128);\n    display: flex;\n    padding-left: 2rem;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n#projects {\n    background-color: rgb(229, 229, 229);\n\n}\n\n#buttonContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    gap: 1rem;\n}\n\n#todos {\n    background-color: white;\n\n}\n\n#todoList {\n    display: flex;\n    flex-direction: column;\n}\n\nh1 {\n    font-family: 'Bungee Shade', cursive;\n    color: white;\n    font-size: 2.5rem;\n}\n\n.side {\n    display: flex;\n    flex-direction: column;\n}\n\n.list {\n    height: 70%;\n    overflow: auto;\n}\n\n.hidden {\n    display: none;\n}\n\nbutton {\n    background-color: rgb(205, 135, 191);\n    border: none;\n    box-shadow: -2px 2px 5px grey;\n    padding: 5px;\n    border-radius: 5px;\n    color: white;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 1rem;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: rgb(172, 110, 160);\n}\n\nbutton:active {\n    transform: translate(2px, 2px);\n}\n\n.projectContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: 0;\n    padding: 1rem;\n}\n\n.selectedContainer {\n    background-color: rgb(197, 197, 197);\n}\n\n.todoContainer {\n    background-color: rgb(229, 229, 229);\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    height: 50px;\n    border-bottom: 1px solid rgb(197, 197, 197);\n}\n\n.todoBtnContainer {\n    display: flex;\n    gap: 1rem;\n}\n\nfieldset {\n    border: none;\n    padding: 0px;\n}\n\nform {\n    padding: .5rem;\n    border-bottom: rgb(197, 197, 197);\n\n}\n\n.formSection {\n    padding: .5rem;\n}\n\nh3 {\n    margin-bottom: 0px;\n}\n\n.todoDetails {\n    background-color: rgb(229, 229, 229);\n    padding: 1rem;\n    border-bottom: rgb(197, 197, 197);\n}\n\nh5 {\n    font-size: 1.1rem;\n    padding: 1rem;\n}\n\n.editContainer {\n    background-color: rgb(229, 229, 229);\n    padding: 1rem;\n    border-bottom: rgb(197, 197, 197);\n}",""]);const a=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var d=e[a],l=o.base?d[0]+o.base:d[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var d=o(e,r),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),c=n.n(i),a=n(565),d=n.n(a),l=n(216),s=n.n(l),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=(e,t,n)=>({title:e,description:t,todoList:[],isSelected:n}),h=(e,t)=>{const n=e.todoList.indexOf(t);return e.todoList.splice(n,1),e.todoList},v=[],y=[];(()=>{const e=document.getElementById("projectBtn"),t=document.getElementById("projectForm"),n=document.getElementById("projectSubmitBtn"),o=document.getElementById("description"),r=document.getElementById("projectTitle"),i=document.getElementById("projectList"),c=document.getElementById("todoBtn"),a=document.getElementById("todoForm"),d=document.getElementById("todoSubmitBtn"),l=document.getElementById("title"),s=document.getElementById("dueDate");let u=document.getElementsByName("priority"),p="";const m=document.getElementById("projectSelect"),f=document.getElementById("todoList"),b=document.createElement("h5");function x(e){const t=document.createElement("div"),n=document.createElement("h3"),o=document.createElement("p"),r=document.createElement("option");y.length>1&&k(),e.isSelected=!0,B(e,t),function(e,t,n,o,r){t.classList.add("projectContainer"),r.textContent=`${e.title}`,m.appendChild(r),n.textContent=e.title,o.textContent=e.description,t.append(n,o),i.append(t)}(e,t,n,o,r),function(e,t){e.onclick=()=>{k(),L(t),function(e){e.isSelected=!0}(t),B(t,e)}}(t,e)}function E(e){e.todoList.length>0&&b.remove()}function C(e){0===e.todoList.length&&f.appendChild(b)}function L(e){for(let t=0;t<v.length;t++)if(v[t].project==e.title){const n=v[t],o=document.createElement("div"),r=document.createElement("p"),i=document.createElement("button"),c=document.createElement("button"),a=document.createElement("div");a.classList.add("todoBtnContainer"),i.textContent="Details",c.textContent="Delete",o.classList.add("todoContainer"),r.textContent=n.title,a.append(i,c),o.append(r,a),f.appendChild(o);const d=document.createElement("div"),l=document.createElement("p"),s=document.createElement("p"),u=document.createElement("p"),p=document.createElement("p"),m=document.createElement("p"),g=document.createElement("p"),y=document.createElement("p"),b=document.createElement("p"),x=document.createElement("div"),L=document.createElement("div"),j=document.createElement("div"),B=document.createElement("div");l.textContent="Title: ",s.textContent=n.title,u.textContent="Due Date: ",p.textContent=n.dueDate,m.textContent="Priority: ",g.textContent=n.priority,d.classList.add("todoDetails"),y.textContent="Project: ",b.textContent=n.project,x.append(l,s),L.append(u,p),j.append(m,g),B.append(y,b),S(d),E(e),i.onclick=()=>{d.classList.toggle("hidden"),d.append(x,L,j,B),o.after(d)},c.onclick=()=>{h(e,n);const t=v.indexOf(n);v.splice(t,1),o.remove(),d.remove(),C(e)}}}function j(e){y.push(e)}function B(e,t){!1===e.isSelected&&t.classList.remove("selectedContainer"),!0===e.isSelected&&t.classList.add("selectedContainer"),"Untitled"===e.title&&t.classList.add("defaultContainer")}function S(e){e.classList.add("hidden")}function k(){f.innerHTML="";for(let e=0;e<y.length;e++)y[e].isSelected=!1;document.querySelectorAll(".projectContainer").forEach((e=>{e.classList.remove("selectedContainer")}))}function w(e,t){!function(e,t){""===e.value&&(t.disabled=!0)}(e,t),function(e,t){e.oninput=()=>{""!==e.value&&(t.disabled=!1)}}(e,t)}b.textContent="No to-dos for this project yet!",f.appendChild(b),function(){const e=g("Untitled","",!0);j(e),x(e)}(),w(r,n),w(l,d),c.onclick=()=>{a.classList.toggle("hidden"),S(t)},d.onclick=()=>{!function(){for(let e=0;e<u.length;e++)u[e].checked&&(p=u[e])}();const e=((e,t,n,o)=>({title:e,dueDate:t,priority:n,project:o}))(l.value,s.value,p.value,m.value);!function(e){v.push(e)}(e),S(a),a.reset(),f.innerHTML="",function(e){for(let t=0;t<y.length;t++){const n=y[t];!0===n.isSelected&&(L(n),n.todoList.push(e))}}(e)},e.onclick=()=>{t.classList.toggle("hidden"),S(a)},n.onclick=()=>{const e=g(r.value,o.value);j(e),k(),document.querySelector(".defaultContainer").classList.remove("selectedContainer"),x(e),S(t),t.reset()}})()})()})();