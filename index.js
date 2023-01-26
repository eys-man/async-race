(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,"* {\n    box-sizing: border-box;\n}\nhtml {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    /* max-width: 1920px; */\n    min-width: 500px;\n    margin: auto;\n    font-family: sans-serif;\n    /* justify-content: space-between; */\n    padding: 0;\n    /* overflow: hidden; */\n}\n\n.header {\n    background-color: aqua;\n    max-height: 64px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    margin: 0;\n}\n\n.garage, \n.winners {\n    width: 100%;\n    /* max-width: 1920px; */\n    min-width: 500px;\n    /* flex-grow: 1; */\n    display: flex;\n    flex-direction: column;\n    background: #aaaaaa;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    overflow-y: auto;\n}\n",""]);const o=i},34:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".car-controls {\n    display: flex;\n    flex-direction: column;\n    width: 120px;\n    padding: 4px;\n    /* border: 1px solid black; */\n}\n\n.car-controls button {\n    width: 100%;\n}\n\n.track {\n    height: 100%;\n    flex-grow: 1;\n    /* border: 1px solid black; */\n    border-bottom: 4px dashed black;\n    position: relative;\n}\n\n.car-image {\n    height: 100%;\n    width: 100px;\n    overflow-wrap: normal;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    /* border: 1px solid green; */\n    padding-bottom: 4px;\n}\n\n.car-image p {\n    font-size: 14px;\n}\n\n.flag {\n    font-size: 36px;\n    position: absolute;\n    right: 64px;\n    bottom: 0;\n    z-index: 2;\n}\n",""]);const o=i},980:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".car-card {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n}\n",""]);const o=i},864:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".car-name,\n.car-color {\n    margin: 0\n}\n\n.car-name {\n    size: 10;\n}",""]);const o=i},76:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".garage-creator,\n.garage-info,\n.garage-controls {\n    /* border: 1px solid blue; */\n}\n\n.garage-info,\n.garage-creator {\n    display: flex;\n    flex-direction: column;\n}\n\n.car-create button,\n.car-update button {\n    width: 100px;\n}\n\n.garage-info {\n    align-items: center;\n}\n\n.car-create,\n.car-update {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.start,\n.reset {\n    margin: 4px;\n}\n\n.garage-controls {\n    display: flex;\n    /* flex-direction: row; */\n    flex-direction: column;\n    padding: 8px;\n}\n",""]);const o=i},184:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".h3 {\n    margin: 0;\n    padding: 0;\n    font-size: 18px;\n    font-weight: normal;\n    text-decoration: none;\n}\n\n.name {\n    font-size: 28px !important;\n    color: red;\n    margin: 0;\n    padding: 0 !important; \n}\n\n.page-selector {\n    padding-top: 4px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n}",""]);const o=i},476:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".h1 {\n    margin: 0;\n    padding: 8px 0;\n    font-size: 32px;\n    font-weight: 800;\n    text-decoration: none;\n}\n\n.buttons {\n    display: flex;\n    flex-direction: row;\n    /* height: 100%; */\n}\n\n.garage-header {\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    /* border: 1px solid red; */\n}\n\n@media screen and (max-width: 640px) {\n    .garage-header {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n.car-list {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    overflow-y: auto;\n    padding: 0;\n    margin: 0;\n}\n",""]);const o=i},140:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".h1 {\n    margin: 0;\n    padding: 8px 0;\n    font-size: 36px;\n    font-weight: 600;\n    text-decoration: none;\n}\n\n.buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n.garage-view,\n.winners-view {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n",""]);const o=i},872:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".decrease,\n.increase {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n\np {\n    font-size: 18px;\n    margin-block-start: 0;\n    margin-block-end: 0;\n}\n\n.cur-page {\n    margin-block-start: 0;\n    margin-block-end: 0;\n}",""]);const o=i},372:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".decrease,\n.increase {\n    margin-left: 4px;\n    margin-right: 4px;\n}\n\np {\n    font-size: 18px;\n    margin-block-start: 0;\n    margin-block-end: 0;\n}\n\n.cur-page {\n    margin-block-start: 0;\n    margin-block-end: 0;\n}",""]);const o=i},713:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".winners-info {\n    display: flex;\n    flex-direction: column;\n}\n\n.winners-info {\n    align-items: center;\n}\n",""]);const o=i},731:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".h3 {\n    margin: 0;\n    padding: 0;\n    font-size: 18px;\n    font-weight: normal;\n    text-decoration: none;\n}\n\n.name {\n    font-size: 28px !important;\n    color: red;\n    margin: 0;\n    padding: 0 !important; \n    /* padding-top: 0 !important;\n    padding-bottom: 8px !important; */\n}\n\n.page-winners-selector {\n    padding-top: 4px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n}",""]);const o=i},405:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".winners-table {\n    table-layout: fixed;\n    box-sizing: border-box;\n    width: 500px;\n    border-collapse: collapse;\n    border: 1px solid black;\n    text-align: center;\n}\n\n.winners-table button {\n    width: 100%;\n}\n\nthead th:nth-child(1) {\n    width: 8%;\n}\n\nthead th:nth-child(2) {\n    width: 25%;\n}\n\nthead th:nth-child(3) {\n    width: 35%;\n}\n\nthead th:nth-child(4) {\n    width: 12%;\n}\nthead th:nth-child(5) {\n    width: 20%;\n}\n\nth, td {\n    border: 1px solid black;\n}\n\nthead {\n    display: table-header-group;\n    vertical-align: middle;\n    border-color: inherit;\n}\n\ntr {\n    display: table-row;\n    vertical-align: inherit;\n    border-color: inherit;\n}\n\nth {\n    padding: 0;\n    margin: 0;\n}",""]);const o=i},963:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,".h1 {\n    margin: 0;\n    padding: 8px 0;\n    font-size: 36px;\n    font-weight: 800;\n    text-decoration: none;\n}\n\n.buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n.winners-header {\n    box-sizing: border-box;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    /* border: 1px solid red; */\n}\n\n@media screen and (max-width: 640px) {\n    .garage-header {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n.winners-list {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    overflow-y: auto;\n    padding: 0;\n    margin: 0;\n    align-items: center;\n}\n",""]);const o=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var r,i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function a(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],i=0;i<n.length;i++){var s=n[i],c=e.base?s[0]+e.base:s[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=a(l),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(h)):o.push({identifier:l,updater:m(h,e),references:1}),r.push(l)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function h(n,e,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,f=0;function m(n,e){var t,r,i;if(e.singleton){var o=f++;t=p||(p=c(e)),r=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=c(e),r=h.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var c=s(n,e),d=0;d<t.length;d++){var l=a(t[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=c}}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(424);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const i=class{constructor(n,e){this.container=document.createElement(n),this.container.className=e}render(){return this.container}};var o=t(34);function a(n){const e=n.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}function s(n,e){const t=a(n),r=a(e);return Math.hypot(t.x-r.x,t.y-r.y)}function c(n,e,t){let r=0;const i={id:NaN};return i.id=window.requestAnimationFrame((function o(a){r||(r=a);const s=a-r,c=Math.round(s*(e/t));n.style.transform=`translateX(${Math.min(c,e)}px)`,c<e&&(i.id=window.requestAnimationFrame(o))})),i}function d(){let n="#";for(let e=0;e<6;e+=1)n+="0123456789ABCDEF".at(16*Math.random());return n}e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const l=["Opel","Peugeot","Renault","Mersedes","Toyota","Nissan","Mazda","BMW","Ferrari","Fiat"],u=["GTS","CLK","Turbo","SW","Combi","TD","Max","HDi","CDi","SLX","4x4"];var h=function(n,e,t,r){return new(t||(t=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}))};function p(n){return`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="96" height="72" viewBox="0 0 96 72" xml:space="preserve">\n        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1 1) scale(1 1)" >\n            <circle cx="70.735" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${n}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>\n            <circle cx="19.765" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill:  ${n}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>\n            <path d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${n}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />\n        </g>\n    </svg>`}class f extends i{constructor(n,e,t){super(n,e),this.id=t.id,this.name=t.name,this.color=t.color,this.updateCar=document.createElement("button"),this.updateCar.className="update-car",this.updateCar.textContent="update car",this.removeCar=document.createElement("button"),this.removeCar.className="delete-car",this.removeCar.textContent="delete car",this.startCar=document.createElement("button"),this.startCar.className="start-car",this.startCar.textContent="start car",this.stopCar=document.createElement("button"),this.stopCar.className="stop-car",this.stopCar.textContent="stop car",this.stopCar.disabled=!0,this.track=document.createElement("div"),this.track.className="track",this.carImage=document.createElement("div"),this.carImage.className="car-image",this.carImage.id=`car-${this.id}`;let r="";r+=`<p>${this.name}</p><p>id=${this.id}</p>`,this.carImage.innerHTML=r+p(this.color),this.flag=document.createElement("p"),this.flag.className="flag",this.flag.innerText="🏁"}render(){const n=document.createElement("div");return n.className="car-controls",n.append(this.updateCar),n.append(this.removeCar),n.append(this.startCar),n.append(this.stopCar),this.container.append(n),this.track.append(this.carImage),this.track.append(this.flag),this.container.append(this.track),this.updateCar.addEventListener("click",(()=>h(this,void 0,void 0,(function*(){const n=document.querySelector(".car-update");n.id=`id-${this.id}`;for(let e of n.childNodes)"car-name"===e.className&&(e.disabled=!1,e.value=this.name),"car-color"===e.className&&(e.disabled=!1,e.value=this.color),null!==e&&(e.disabled=!1);yield O()})))),this.removeCar.addEventListener("click",(()=>h(this,void 0,void 0,(function*(){yield function(n){return A(this,void 0,void 0,(function*(){try{const e=yield fetch(`${z}/${n}`,{method:"DELETE"});if(200===e.status)return J.totalCars-=1,0===J.totalCars?J.totalPages=1:J.totalPages=Math.floor((J.totalCars-1)/7)+1,J.curPage>J.totalPages&&(J.curPage-=1),yield e.json();throw new Error(`Ошибка в deleteCar! Status: ${e.status}`)}catch(n){return console.log("deleteCar error: "+n),"error deleteCar"}}))}(this.id),yield function(n){return A(this,void 0,void 0,(function*(){try{const e=yield fetch(`${H}/${n}`,{method:"DELETE"});if(200===e.status)return console.log(`машина id=${n} удалена из победителей`),J.totalWinners-=1,0===J.totalWinners&&(J.totalWinPages=1),J.totalWinPages=Math.floor((J.totalWinners-1)/L)+1,yield e.json();throw new Error(`Ошибка в deleteWinner! Status: ${e.status}`)}catch(n){return console.log("deleteWinner error: "+n),"error deleteWinner"}}))}(this.id),yield O(),yield X()})))),this.startCar.addEventListener("click",(()=>h(this,void 0,void 0,(function*(){const n=yield G(this.id);if("string"!=typeof n&&null!==n){this.startCar.disabled=!0;const e=Math.floor(s(this.carImage,this.flag))+32,t=c(this.carImage,e,n.distance/n.velocity);this.stopCar.disabled=!1,"string"==typeof(yield B(this.id))&&window.cancelAnimationFrame(t.id)}})))),this.stopCar.addEventListener("click",(()=>h(this,void 0,void 0,(function*(){const n=yield R(this.id);if("string"!=typeof n&&null!==n){this.stopCar.disabled=!0,this.startCar.disabled=!1;const n=new f("div","car-card",{id:this.id,color:this.color,name:this.name});this.container.replaceWith(n.render())}})))),this.container}}const m=f;var g=t(980);e()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;const v=class extends i{constructor(n,e){super(n,e)}render(){return J.cars.forEach((n=>{const e=new m("div","car-card",n);this.container.append(e.render())})),this.container}};var y=t(872);e()(y.Z,{insert:"head",singleton:!1}),y.Z.locals;var w=function(n,e,t,r){return new(t||(t=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}))};class x extends i{constructor(n,e){super(n,e),this.curPageIndex=J.curPage,this.pagesAmount=J.totalPages}render(){const n=document.createElement("button");n.className="decrease",n.textContent="<",this.container.append(n);const e=document.createElement("p");e.className="cur-page",e.innerText=`Page: ${this.curPageIndex} of ${this.pagesAmount}`,this.container.append(e);const t=document.createElement("button");return t.className="increase",t.textContent=">",this.container.append(t),1===this.curPageIndex?n.disabled=!0:n.disabled=!1,this.curPageIndex===this.pagesAmount?t.disabled=!0:t.disabled=!1,t.addEventListener("click",(()=>w(this,void 0,void 0,(function*(){J.curPage+=1,yield _(J.curPage,7);const n=new v("div","car-list");document.querySelector(".car-list").replaceWith(n.render()),document.querySelector(".total-cars").innerText=`Total Cars: ${J.totalCars}`;const e=new x("div","page-selector");document.querySelector(".page-selector").replaceWith(e.render())})))),n.addEventListener("click",(()=>w(this,void 0,void 0,(function*(){J.curPage-=1,yield _(J.curPage,7);const n=new v("div","car-list");document.querySelector(".car-list").replaceWith(n.render()),document.querySelector(".total-cars").innerText=`Total Cars: ${J.totalCars}`;const e=new x("div","page-selector");document.querySelector(".page-selector").replaceWith(e.render())})))),this.container}}const b=x;var C=t(405);e()(C.Z,{insert:"head",singleton:!1}),C.Z.locals;const E=class extends i{constructor(n,e){super(n,e)}render(){const n=document.createElement("table");n.className="winners-table";const e=document.createElement("thead");e.className="winners-table-head",n.append(e);const t=document.createElement("tr");t.innerHTML="<th><button id='sort-num'>id</button></th>\n                        <th><button id='sort-car'>Car</button></th>\n                        <th><button id='sort-name'>Name</button></th>\n                        <th><button id='sort-win'>Wins</button></th>\n                        <th><button id='sort-time'>Best Time</button></th>",e.appendChild(t),n.appendChild(e),J.winners.forEach((e=>{return t=this,r=void 0,o=function*(){const t=yield function(n){return A(this,void 0,void 0,(function*(){try{const e=yield fetch(`${z}/${n}`,{method:"GET"});if(200===e.status)return yield e.json();throw new Error(`Ошибка в getCar! Status: ${e.status}`)}catch(n){return console.log("error getCar такая: "+n),"error 404"}}))}(e.id),r=document.createElement("tr");r.innerHTML=`<td>${e.id}</td>\n                            <td>${p(t.color)}</td>\n                            <td>${t.name}</td>\n                            <td>${e.wins}</td>\n                            <td>${e.time.toFixed(3)}</td>`,n.appendChild(r)},new((i=void 0)||(i=Promise))((function(n,e){function a(n){try{c(o.next(n))}catch(n){e(n)}}function s(n){try{c(o.throw(n))}catch(n){e(n)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(n){n(t)}))).then(a,s)}c((o=o.apply(t,r||[])).next())}));var t,r,i,o}));const r=document.createElement("tbody");return n.append(r),this.container.append(n),this.container}};var $=t(372);e()($.Z,{insert:"head",singleton:!1}),$.Z.locals;var N=function(n,e,t,r){return new(t||(t=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}))};class k extends i{constructor(n,e){super(n,e),this.curPageIndex=J.curWinPage,this.pagesAmount=J.totalWinPages}render(){const n=document.createElement("button");n.className="decrease",n.textContent="<",this.container.append(n);const e=document.createElement("p");e.className="cur-page",e.innerText=`Page: ${this.curPageIndex} of ${this.pagesAmount}`,this.container.append(e);const t=document.createElement("button");return t.className="increase",t.textContent=">",this.container.append(t),1===this.curPageIndex?n.disabled=!0:n.disabled=!1,this.curPageIndex===this.pagesAmount?t.disabled=!0:t.disabled=!1,t.addEventListener("click",(()=>N(this,void 0,void 0,(function*(){J.curWinPage+=1,yield D(J.curWinPage,L,J.sort,J.order);const n=new E("div","winners-list");document.querySelector(".winners-list").replaceWith(n.render()),document.querySelector(".total-winners").innerText=`Total Winners: ${J.totalWinners}`;const e=new k("div","page-winners-selector");document.querySelector(".page-winners-selector").replaceWith(e.render())})))),n.addEventListener("click",(()=>N(this,void 0,void 0,(function*(){J.curWinPage-=1,yield D(J.curWinPage,7,J.sort,J.order);const n=new v("div","winners-list");document.querySelector(".winners-list").replaceWith(n.render()),document.querySelector(".total-winners").innerText=`Total Winners: ${J.totalWinners}`;const e=new k("div","page-winners-selector");document.querySelector(".page-winners-selector").replaceWith(e.render())})))),this.container}}const P=k;var S=t(731);e()(S.Z,{insert:"head",singleton:!1}),S.Z.locals;const T=class extends i{constructor(n,e){super(n,e)}render(){this.container.innerHTML="";const n=document.createElement("h1");n.className="h1 name",n.innerText="Winners",this.container.append(n);const e=document.createElement("h3");e.className="h3 total-winners",e.innerText=`Total Winners: ${J.totalWinners}`,this.container.append(e);const t=new P("div","page-winners-selector");return this.container.append(t.render()),this.container}};var W=t(713);e()(W.Z,{insert:"head",singleton:!1}),W.Z.locals;const M=class extends i{constructor(n,e){super(n,e)}render(){const n=new T("div","winners-info");return this.container.append(n.render()),this.container}};var Z=t(963);e()(Z.Z,{insert:"head",singleton:!1}),Z.Z.locals;const j=class extends i{constructor(n,e){super(n,e)}render(){this.container.innerHTML="";const n=new M("div","winners-header");this.container.append(n.render());const e=new E("div","winners-list");return this.container.append(e.render()),"winners"===J.pageView?this.container.style.display="flex":this.container.style.display="none",this.container}};var A=function(n,e,t,r){return new(t||(t=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}))};const L=10,q="http://127.0.0.1:3000",z=`${q}/garage`,I=`${q}/engine`,H=`${q}/winners`;function _(n,e=7){return A(this,void 0,void 0,(function*(){try{const t=yield fetch(`${z}?_page=${n}&_limit=${e}`,{method:"GET"});if(200===t.status)return J.cars=yield t.json(),J.totalCars=Number(t.headers.get("X-Total-Count")),0===J.totalCars?J.totalPages=1:J.totalPages=Math.floor((J.totalCars-1)/7)+1,J.numCars=J.cars.length,J.curPage=n,J.cars;throw new Error(`Ошибка в getCars! Status: ${t.status}`)}catch(n){return console.log("сработал catch в getCars. Ошибка такая: "+n),J.numCars=0,J.totalCars=0,J.totalPages=1,J.curPage=1,"error getCars"}}))}function F(n){return A(this,void 0,void 0,(function*(){try{const e=yield fetch(z,{method:"POST",body:JSON.stringify({name:n.name,color:n.color}),headers:{"Content-Type":"application/json"}});if(201===e.status)return J.totalCars+=1,0===J.totalCars?J.totalPages=1:J.totalPages=Math.floor((J.totalCars-1)/7)+1,yield e.json();throw new Error(`Ошибка в createCar! Status: ${e.status}`)}catch(n){return console.log("createCar error: "+n),"error createCar"}}))}function O(){return A(this,void 0,void 0,(function*(){yield _(J.curPage,7);const n=new v("div","car-list");document.querySelector(".car-list").replaceWith(n.render()),document.querySelector(".total-cars").innerText=`Total Cars: ${J.totalCars}`;const e=new b("div","page-selector");document.querySelector(".page-selector").replaceWith(e.render())}))}function G(n){return A(this,void 0,void 0,(function*(){try{const e=yield fetch(`${I}/?id=${n}&status=started`,{method:"PATCH"});if(200===e.status)return console.log(`машина id=${n} завелась`),yield e.json();throw new Error(`Ошибка в startEngine! Status: ${e.status}`)}catch(n){return console.log("startEngine error: "+n),`${n}`}}))}function R(n){return A(this,void 0,void 0,(function*(){try{const e=yield fetch(`${I}/?id=${n}&status=stopped`,{method:"PATCH"});if(200===e.status)return console.log(`машина id=${n} остановлена`),yield e.json();throw new Error(`Ошибка в stopEngine! Status: ${e.status}`)}catch(n){return console.log("stopEngine error: "+n),`${n}`}}))}function B(n){return A(this,void 0,void 0,(function*(){try{const e=yield fetch(`${I}/?id=${n}&status=drive`,{method:"PATCH"});if(200===e.status)return console.log(`машина id=${n} поехала`),yield e.json();throw 400===e.status?new Error('"id" should be any positive number, "status" should be "started", "stopped" or "drive"'):404===e.status?new Error('Engine parameters for car with such id was not found in the garage. Have you tried to set engine status to "started" before?'):429===e.status?new Error("Drive already in progress. You can't run drive for the same car twice while it's not stopped."):500===e.status?new Error(`Car id=${n} has been stopped suddenly. It's engine was broken down.`):new Error("Хз что за ошибка")}catch(n){return console.log("stopEngine error: "+n),`${n}`}}))}function D(n,e=10,t,r){return A(this,void 0,void 0,(function*(){try{const i=yield fetch(`${H}?_page=${n}&_limit=${e}${function(n,e){return n&&e?`&_sort=${n}&_order=${e}`:""}(t,r)}`);if(200===i.status)return J.winners=yield i.json(),J.totalWinners=Number(i.headers.get("X-Total-Count")),0===J.totalWinners?J.totalWinPages=1:J.totalWinPages=Math.floor((J.totalWinners-1)/L)+1,J.numWinners=J.winners.length,J.curWinPage=n,J.winners;throw new Error(`Ошибка в getWinners! Status: ${i.status}`)}catch(n){return console.log("сработал catch в getWinners. Ошибка такая: "+n),J.numWinners=0,J.totalWinners=0,J.totalWinPages=1,J.curWinPage=1,"error getWinners"}}))}function X(){return A(this,void 0,void 0,(function*(){J.winners=yield D(1,7,"wins","ASC");const n=document.querySelector(".winners"),e=new j("div","winners");n.replaceWith(e.render())}))}class V{constructor(){V.pageView="garage",V.numCars=0,V.curPage=1,V.totalPages=1}static getData(){return n=this,e=void 0,r=function*(){V.cars=yield _(1,7),V.winners=yield D(1,7,"wins","ASC")},new((t=void 0)||(t=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,t,r}}V.pageView="garage",V.numCars=0,V.cars=[],V.winners=[],V.time=[];const J=V;var U=t(140);e()(U.Z,{insert:"head",singleton:!1}),U.Z.locals;const K=class extends i{constructor(n,e){super(n,e)}render(){const n=document.createElement("h1");n.className="h1",n.innerText="Async Race",this.container.append(n);const e=document.createElement("div");e.className="buttons";const t=document.createElement("button");t.className="garage-view",t.textContent="Garage",e.append(t);const r=document.createElement("button");return r.className="winners-view",r.textContent="Winners",e.append(r),"garage"===J.pageView?t.disabled=!0:r.disabled=!0,this.container.append(e),this.container.addEventListener("click",(n=>{const e=document.querySelector(".garage"),i=document.querySelector(".winners");"garage-view"===n.target.className?(e.style.display="flex",i.style.display="none",t.disabled=!0,r.disabled=!1,J.pageView="garage"):"winners-view"===n.target.className&&(e.style.display="none",i.style.display="flex",t.disabled=!1,r.disabled=!0,J.pageView="winners")})),this.container}};var Y=function(n,e,t,r){return new(t||(t=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}))};class Q extends m{constructor(n,e,t){super(n,e,t)}drive(){return Y(this,void 0,void 0,(function*(){const n=yield G(this.id);"string"!=typeof n&&null!==n?(this.startCar.disabled=!0,this.stopCar.disabled=!1,"string"==typeof(yield B(this.id))?(J.time.push(Number.MAX_SAFE_INTEGER),console.log(`машинка ${this.id} остановилась`)):J.time.push(n.distance/n.velocity)):(J.time.push(Number.MAX_SAFE_INTEGER),console.log("что-то не так с анимацией машины "+this.id))}))}stop(){return Y(this,void 0,void 0,(function*(){console.log("stop");const n=yield R(this.id);if("string"!=typeof n&&null!==n){this.stopCar.disabled=!0,this.startCar.disabled=!1;const n=new Q("div","car-card",{id:this.id,color:this.color,name:this.name});this.container.replaceWith(n.render())}}))}startEngine(){return Y(this,void 0,void 0,(function*(){return console.log("startEngine"),yield G(this.id)}))}stopEngine(){return Y(this,void 0,void 0,(function*(){return console.log("stopEngine"),yield R(this.id)}))}}const nn=Q;var en=t(864);e()(en.Z,{insert:"head",singleton:!1}),en.Z.locals;const tn=class extends i{constructor(n,e,t){super(n,e),this.name="",this.color="#ffffff",this.buttonName=t}render(){const n=document.createElement("input");n.className="car-name",n.type="text",n.setAttribute("size","16"),n.placeholder="car name",this.container.append(n);const e=document.createElement("input");e.className="car-color",e.type="color",e.value=this.color,this.container.append(e);const t=document.createElement("button");return t.textContent=`${this.buttonName}`,this.container.append(t),"car-update"===this.container.className&&(n.disabled=!0,e.disabled=!0,t.disabled=!0),n.addEventListener("change",(()=>{this.name=n.value})),e.addEventListener("change",(()=>{this.color=e.value})),t.addEventListener("click",(()=>{return r=this,i=void 0,a=function*(){if("car-create"===this.container.className){if(""===this.name)return void alert("Enter car name");const t=yield F({name:this.name,color:this.color,id:0});this.name="",n.value="",this.color="#ffffff",e.value="#ffffff",null!==t&&(console.log("создана машина id = "+t.id+", color = "+t.color+", name = "+t.name),yield O())}else if("car-update"===this.container.className){this.name=n.value,this.color=e.value;const r=Number(this.container.id.slice(3)),i=yield function(n,e){return A(this,void 0,void 0,(function*(){try{const t=yield fetch(`${z}/${n}`,{method:"PUT",body:JSON.stringify({name:e.name,color:e.color}),headers:{"Content-Type":"application/json"}});if(200===t.status)return yield t.json();throw new Error(`Ошибка в updateCar! Status: ${t.status}`)}catch(n){return console.log("updateCar error: "+n),"error 404"}}))}(r,{name:this.name,color:this.color,id:0});this.name="",n.value="",this.color="#ffffff",e.value="#ffffff",n.disabled=!0,e.disabled=!0,t.disabled=!0,null!==i&&(console.log("апгрейчена машина id = "+i.id+", color = "+i.color+", name = "+i.name),yield O())}},new((o=void 0)||(o=Promise))((function(n,e){function t(n){try{c(a.next(n))}catch(n){e(n)}}function s(n){try{c(a.throw(n))}catch(n){e(n)}}function c(e){var r;e.done?n(e.value):(r=e.value,r instanceof o?r:new o((function(n){n(r)}))).then(t,s)}c((a=a.apply(r,i||[])).next())}));var r,i,o,a})),this.container}};var rn=t(184);e()(rn.Z,{insert:"head",singleton:!1}),rn.Z.locals;const on=class extends i{constructor(n,e){super(n,e)}render(){this.container.innerHTML="";const n=document.createElement("h1");n.className="h1 name",n.innerText="Garage",this.container.append(n);const e=document.createElement("h3");e.className="h3 total-cars",e.innerText=`Total Cars: ${J.totalCars}`,this.container.append(e);const t=new b("div","page-selector");return this.container.append(t.render()),this.container}};var an=t(76);e()(an.Z,{insert:"head",singleton:!1}),an.Z.locals;var sn=function(n,e,t,r){return new(t||(t=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}))};const cn=class extends i{constructor(n,e){super(n,e)}render(){const n=document.createElement("div");n.className="garage-creator";const e=new tn("div","car-create","create car");n.append(e.render());const t=new tn("div","car-update","update car");n.append(t.render());const r=document.createElement("button");r.className="generate",r.textContent="Generate 100 random cars",n.append(r),this.container.append(n);const i=new on("div","garage-info");this.container.append(i.render());const o=document.createElement("div");o.className="garage-controls";const a=document.createElement("button");a.className="start",a.textContent="Start race",o.append(a);const h=document.createElement("button");return h.className="reset",h.textContent="Reset",h.disabled=!0,o.append(h),this.container.append(o),r.addEventListener("click",(()=>sn(this,void 0,void 0,(function*(){for(let n=0;n<100;n+=1){const n=`${l[Math.floor(Math.random()*l.length)]} ${u[Math.floor(Math.random()*u.length)]}`,e=d();yield F({name:n,color:e,id:0})}yield O()})))),a.addEventListener("click",(()=>sn(this,void 0,void 0,(function*(){if(0===J.numCars)return;a.disabled=!0,h.disabled=!1;const n=[];J.cars.forEach((e=>{const t=new nn("div","car-card",e);n.push(t.drive())})),yield Promise.allSettled(n);let e=Number.MAX_SAFE_INTEGER,t=-1;for(let n=0;n<J.cars.length;n+=1)J.time[n]<e&&(e=J.time[n],t=J.cars[n].id);for(let n=0;n<J.cars.length;n+=1){const e=document.getElementById(`car-${J.cars[n].id}`),t=e.nextElementSibling,r=Math.floor(s(e,t))+32;J.time[n]<Number.MAX_SAFE_INTEGER&&c(e,r,J.time[n])}console.log("выиграла машина id="+t+", время = "+e),J.time=[];for(let n=0;n<J.time.length;n+=1)console.log(`время ${J.cars[n].id} = ${J.time[n]}`);if(yield function(n){return A(this,void 0,void 0,(function*(){try{if(!0===(yield fetch(`${H}/${n}`,{method:"GET"})).ok)return!0;throw!1}catch(n){return console.log("error getWinnerStatus такая: "+n),!1}}))}(t)){console.log("update winner");const n=yield function(n){return A(this,void 0,void 0,(function*(){try{const e=yield fetch(`${H}/${n}`,{method:"GET"});if(200===e.status)return yield e.json();throw new Error(`Ошибка в getWinner! Status: ${e.status}`)}catch(n){return console.log("error getWinner такая: "+n),"error 404"}}))}(t);yield function(n,e){return A(this,void 0,void 0,(function*(){try{const t=yield fetch(`${H}/${n}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return yield t.json()}catch(n){return console.log("updateWinner error: "+n),"error updateWinner"}}))}(t,{id:t,wins:n.wins+1,time:n.time<e?n.time:e}),yield X()}else{const n=yield function(n){return A(this,void 0,void 0,(function*(){try{const e=yield fetch(H,{method:"POST",body:JSON.stringify({id:n.id,wins:n.wins,time:n.time}),headers:{"Content-Type":"application/json"}});if(201===e.status)return J.totalWinners+=1,J.totalWinPages=Math.floor((J.totalWinners-1)/L)+1,yield e.json();throw new Error(`Ошибка в createWinner! Status: ${e.status}`)}catch(n){return console.log("createWinner error: "+n),"error createWinner"}}))}({id:t,wins:1,time:e/1e3});console.log("новый победитель в таблицу: id="+n.id+", wins="+n.wins+", time="+n.time),yield X()}})))),h.addEventListener("click",(()=>{J.cars.forEach((n=>sn(this,void 0,void 0,(function*(){yield R(n.id)})))),a.disabled=!1,h.disabled=!0,document.querySelectorAll(".car-card").forEach((n=>sn(this,void 0,void 0,(function*(){n.querySelector(".update-car").disabled=!1,n.querySelector(".delete-car").disabled=!1,n.querySelector(".start-car").disabled=!1})))),O()})),this.container}};var dn=t(476);e()(dn.Z,{insert:"head",singleton:!1}),dn.Z.locals;const ln=class extends i{constructor(n,e){super(n,e)}render(){this.container.innerHTML="";const n=new cn("div","garage-header");this.container.append(n.render());const e=new v("div","car-list");return this.container.append(e.render()),"garage"===J.pageView?this.container.style.display="flex":this.container.style.display="none",this.container}};class un{static render(){un.container.innerHTML="";const n=new K("nav","header");un.container.append(n.render());const e=new ln("div","garage");un.container.append(e.render());const t=new j("div","winners");un.container.append(t.render())}constructor(){}run(){return n=this,e=void 0,r=function*(){yield _(1,7),yield D(1,L,"time","ASC"),un.render()},new((t=void 0)||(t=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(n){o(n)}}function s(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}c((r=r.apply(n,e||[])).next())}));var n,e,t,r}}un.container=document.querySelector("body"),(new un).run()})()})();