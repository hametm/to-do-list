(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Roboto:wght@400;700&display=swap);"]),a.push([n.id,":root {\n    --light-grey: rgb(229, 229, 229);\n    --dark-grey: rgb(197, 197, 197);\n    --blue: rgba(47,201,226,1);\n}\n\nbody {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    display: grid;\n    grid-template-rows: 1fr 6fr;\n    min-height: 100vh;\n    background-color: white;\n    margin: 0;\n}\n\nheader {\n    background-color: rgb(0, 119, 128);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\nh1 {\n    font-family: 'Bungee Shade', cursive;\n    color: white;\n    font-size: 2.6rem;\n    margin-left: 30px;\n}\n\n.rainbow {\n    height: 10px;\n    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, \n    rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, \n    rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%);\n    border-top: 2px solid grey;\n    border-bottom: 2px solid grey;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n#projects {\n    background-color: var(--light-grey);\n    display: flex;\n    flex-direction: column;\n\n}\n\n.formSelector p {\n    font-size: 1.15rem;\n}\n\n#projects h2 {\n    margin-left: 1rem;\n    margin-top: 2rem;\n}\n\n#todos {\n    background-color: white;\n    padding-left: 1rem;\n    padding-right: 1rem;\n\n}\n\n#todoList {\n    display: flex;\n    flex-direction: column;\n    padding: 1rem 1rem 0rem 1rem;\n}\n\n#todoList h5 {\n    margin-bottom: 0px;\n}\n\n#todoForm {\n    margin: .5rem 2rem;\n    border-radius: 8px;\n}\n\n.side {\n    display: flex;\n    flex-direction: column;\n}\n\n.list {\n    overflow: auto;\n}\n\n.hidden {\n    display: none;\n}\n\ninput[type=button] {\n    border: none;\n    box-shadow: -2px 2px 5px grey;\n    padding: 8px;\n    border-radius: 5px;\n    color: white;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 1rem;\n}\n\ninput[type=button]:hover {\n    cursor: pointer;\n}\n\ninput[type=button]:active {\n    transform: translate(2px, 2px);\n}\n\ninput[type=button]:disabled:active {\n    transform: none;\n}\n\n.detailsBtn {\n    border: none;\n    background-color: var(--light-grey);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1rem;\n}\n\n.detailsBtn:hover {\n    color: grey;\n    cursor: pointer;\n}\n\n.cancelBtn {\n    background-color: rgba(255,0,0,1);\n    margin-left: .5rem;\n    border: none;\n    box-shadow: -2px 2px 5px grey;\n    padding: 8px;\n    border-radius: 5px;\n    color: white;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 1rem;\n}\n\n.cancelBtn:hover {\n    background-color: rgb(177, 16, 16);\n    cursor: pointer;\n}\n\n.submitBtn {\n    background-color: rgba(79,220,74,1);\n    border: none;\n    box-shadow: -2px 2px 5px grey;\n    padding: 8px;\n    border-radius: 5px;\n    color: white;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 1rem;}\n\n.submitBtn:disabled:hover {\n    background-color: rgba(79,220,74,1);\n    cursor: default;\n}\n\n.submitBtn:hover {\n    background-color: rgb(30, 162, 30);\n    cursor: pointer;\n}\n\n.projectContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: .75rem;\n    padding-left: 1.5rem;\n    border-radius: 8px;\n}\n\n.projectContainer:hover {\n    cursor: pointer;\n    background-color: var(--dark-grey);\n}\n\n.selectedContainer {\n    background-color: var(--dark-grey);\n}\n\n.todoContainer {\n    background-color: var(--light-grey);\n    padding: 1rem 2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 30px;\n    margin: .5rem 1rem;\n    border-radius: 8px;\n    border-left: 8px solid var(--blue);\n}\n\n.todoBtnContainer {\n    display: flex;\n    gap: 1rem;\n}\n\nfieldset {\n    border: none;\n    padding: 0px;\n}\n\nform {\n    padding: 1rem;\n    background-color: var(--light-grey);\n    padding: 1rem;\n    background-color: var(--light-grey);\n}\n\nselect, option {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: .9rem;\n}\n\ninput[type=text], input[type=date] {\n    border-radius: 8px;\n    border: 1px solid var(--light-grey);\n    height: 20px;\n    margin-left: .5rem;\n    padding: 3px;\n}\n\n.formSelector {\n    margin-left: 2rem;\n    margin-top: 1rem;\n}\n\n.formSelector p {\n    margin: 0;\n}\n\n#todoBtn p {\n    margin-left: 1rem;\n}\n\n.formSelector:hover {\n    cursor: pointer;\n    color: rgb(119, 119, 119);\n}\n\n.formSection {\n    padding: .5rem;\n}\n\nh3 {\n    margin-bottom: 0px;\n}\n\n@keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n}\n\n.todoDetails {\n    background-color: var(--light-grey);\n    position: fixed;\n    top: 50vh;\n    left: 50vw;\n    transform: translate(-50%, -50%);\n    height: 30%;\n    width: 30%;\n    animation: .1s linear fadein;\n    background-color: var(--light-grey);\n    font-size: 1.1rem;\n    box-shadow: -2px 2px 5px grey;\n}\n\n.todoDetails p {\n    margin-top: 0px;\n}\n\nh5 {\n    font-size: 1.1rem;\n    padding: 1rem;\n}\n\n.editContainer {\n    background-color: var(--light-grey);\n    padding: 1rem;\n    border-bottom: var(--dark-grey);\n}\n\n.deleteBtn {\n    background-color: var(--light-grey);\n    border: none;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: .9rem;\n}\n\n.deleteBtn:hover {\n    color: grey;\n    cursor: pointer;\n}\n\n.detailsDiv {\n    display: flex;\n    gap: .5rem;\n    padding-left: 1rem;\n}\n\n.cancelDiv {\n    display: flex;\n    justify-content: flex-end;\n    background-color: var(--blue);\n    margin-bottom: 20px;\n    padding: .5rem;\n}\n\n.todoCancelBtn {\n    box-shadow: none;\n    height: 30px;\n    width: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--blue);\n    font-family:Arial, Helvetica, sans-serif;\n    color: black;\n    padding: none;\n    border: none;\n    font-size: 1rem;\n}\n\n.todoCancelBtn:hover {\n    color: grey;\n    cursor: pointer;\n}",""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],l=o.base?c[0]+o.base:c[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var c=o(n,r),l=0;l<i.length;l++){var s=t(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),d=t(565),c=t.n(d),l=t(216),s=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=(n,e,t)=>({title:n,description:e,todoList:[],isSelected:t}),v=(n,e)=>{const t=n.todoList.indexOf(e);return n.todoList.splice(t,1),n.todoList},b=(()=>{const n=[];return{addTodo:e=>n.push(e),removeTodo:e=>{const t=n.indexOf(e);n.splice(t,1)},todoList:n}})(),h=(()=>{const n=[];return{addProject:e=>n.push(e),removeProject:e=>{const t=n.indexOf(e);n.splice(t,1)},projectList:n}})();(()=>{const n=document.getElementById("projectBtn"),e=document.getElementById("projectForm"),t=document.getElementById("projectSubmitBtn"),o=document.getElementById("description"),r=document.getElementById("projectTitle"),i=document.getElementById("projectList"),a=document.getElementById("projectCancelBtn"),d=document.getElementById("todoBtn"),c=document.getElementById("todoForm"),l=document.getElementById("todoSubmitBtn"),s=document.getElementById("title"),p=document.getElementById("dueDate");let u=document.getElementsByName("priority"),m="";const f=document.getElementById("projectSelect"),y=document.getElementById("todoList"),x=document.getElementById("todoCancelBtn");function C(n){const e=document.createElement("div"),t=document.createElement("h3"),o=document.createElement("p"),r=document.createElement("option");h.projectList.length>1&&B(),j(n),k(n,e),function(n,e,t,o,r){e.classList.add("projectContainer"),r.textContent=`${n.title}`,f.appendChild(r),t.textContent=n.title,o.textContent=n.description,e.append(t,o),i.append(e)}(n,e,t,o,r),function(n,e){n.onclick=()=>{B(),E(e),j(e),k(e,n)}}(e,n)}function E(n){for(let e=0;e<b.todoList.length;e++)if(b.todoList[e].project===n.title){const t=b.todoList[e],o=document.createElement("div"),r=document.createElement("p"),i=document.createElement("button"),a=document.createElement("button"),d=document.createElement("div");d.classList.add("todoBtnContainer"),i.textContent="ⓘ",i.classList.add("detailsBtn"),a.textContent="X",a.classList.add("deleteBtn"),o.classList.add("todoContainer"),r.textContent=t.title,d.append(i,a),o.append(r,d),y.appendChild(o);const c=document.createElement("div"),l=document.createElement("p"),s=document.createElement("p"),p=document.createElement("p"),u=document.createElement("p"),m=document.createElement("p"),f=document.createElement("p"),g=document.createElement("p"),h=document.createElement("p"),x=document.createElement("div"),C=document.createElement("div"),E=document.createElement("div"),k=document.createElement("div"),B=document.createElement("button"),j=document.createElement("div");l.textContent="Title:",s.textContent=t.title,p.textContent="Due date:",u.textContent=t.dueDate,m.textContent="Priority:",f.textContent=t.priority,c.classList.add("todoDetails"),g.textContent="Project:",h.textContent=t.project,B.textContent="X",B.classList.add("todoCancelBtn"),x.classList.add("detailsDiv"),C.classList.add("detailsDiv"),E.classList.add("detailsDiv"),k.classList.add("detailsDiv"),j.classList.add("cancelDiv"),x.append(l,s),t.dueDate&&C.append(p,u),t.priority&&E.append(m,f),k.append(g,h),j.append(B),L(c),i.onclick=()=>{S(c),c.append(j,x,C,E,k),o.appendChild(c)},a.onclick=()=>{v(n,t),b.removeTodo(t),o.remove(),c.remove()},B.onclick=()=>{S(c)}}}function k(n,e){!1===n.isSelected&&e.classList.remove("selectedContainer"),!0===n.isSelected&&e.classList.add("selectedContainer"),"Untitled"===n.title&&e.classList.add("defaultContainer")}function L(n){n.classList.add("hidden")}function B(){y.innerHTML="";for(let n=0;n<h.projectList.length;n++)h.projectList[n].isSelected=!1;document.querySelectorAll(".projectContainer").forEach((n=>{n.classList.remove("selectedContainer")}))}function j(n){n.isSelected=!0}function w(n,e){!function(n,e){""===n.value&&(e.disabled=!0)}(n,e),function(n,e){n.oninput=()=>{""!==n.value&&(e.disabled=!1)}}(n,e)}function S(n){n.classList.toggle("hidden")}!function(){const n=g("Untitled","",!0);h.addProject(n),C(n)}(),d.onclick=()=>{S(c),S(d),w(s,l),function(){for(let n=0;n<h.projectList.length;n++){const e=h.projectList[n];!0===e.isSelected&&(f.value=e.title)}}()},l.onclick=()=>{!function(){for(let n=0;n<u.length;n++)u[n].checked&&(m=u[n])}();const n=((n,e,t,o)=>({title:n,dueDate:e,priority:t,project:o}))(s.value,p.value,m.value,f.value);b.addTodo(n),L(c),c.reset(),y.innerHTML="",function(n){for(let e=0;e<h.projectList.length;e++){const t=h.projectList[e];!0===t.isSelected&&(E(t),t.todoList.push(n))}}(n),S(d)},n.onclick=()=>{S(e),S(n),w(r,t)},t.onclick=()=>{const t=g(r.value,o.value);h.addProject(t),B(),document.querySelector(".defaultContainer").classList.remove("selectedContainer"),C(t),L(e),e.reset(),S(n)},x.onclick=()=>{S(c),S(d)},a.onclick=()=>{S(e),S(n)}})()})()})();