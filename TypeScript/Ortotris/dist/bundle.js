!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Greeter=class{constructor(e){this.element=e,this.element.innerHTML+="The time is: ",this.span=document.createElement("span"),this.element.appendChild(this.span),this.span.innerText=(new Date).toUTCString()}start(){this.timerToken=setInterval(()=>this.span.innerHTML=(new Date).toUTCString(),500)}stop(){clearTimeout(this.timerToken)}};t.Hafn=class{constructor(e){this.list=["miecz","zbroja","wlocznia"],this.element=e;let t=Math.floor(3*Math.random()),o=this.list[t];this.element.innerHTML+="Wybieram z tablicy: "+o+". ",this.element.innerHTML+="Losuje jakas wartosc od 0 do 100: "+Math.floor(100*Math.random()),this.span=document.createElement("span"),this.element.appendChild(this.span)}start(){this.timerToken=setInterval(()=>this.span.innerHTML=(new Date).toUTCString(),500)}stop(){clearTimeout(this.timerToken)}};let a=[{opis:"nic",prawdo:40,rodzaj:[1],sila:7},{opis:"oblesny gnom",prawdo:10,rodzaj:[1],sila:2},{opis:"wielki smok",prawdo:5,rodzaj:[1],sila:7},{opis:"straszny troll",prawdo:10,rodzaj:[1],sila:3},{opis:"zlodzieja",prawdo:1,rodzaj:[2],sila:1},{opis:"czarodzieja",prawdo:6,rodzaj:[2],sila:1},{opis:"dobrego duszka",prawdo:5,rodzaj:[2],sila:1},{opis:"zlego ducha",prawdo:5,rodzaj:[2],sila:1},{opis:"miecz",prawdo:2,rodzaj:[3],sila:1},{opis:"zbroje",prawdo:2,rodzaj:[3],sila:1},{opis:"magiczny eliksir",prawdo:4,rodzaj:[3],sila:1},{opis:"sztuke miesa",prawdo:4,rodzaj:[3],sila:1},{opis:"zloto",prawdo:5,rodzaj:[3],sila:1},{opis:"trucizne",prawdo:3,rodzaj:[3],sila:1}];t.Bohater=class{constructor(e,t,o,a,n){this.element=e,this.wytrzymalosc=t,this.sila=o,this.bagaz=a,this.zloto=n}opiszBohatera(){this.element.innerHTML+="Bohater: wytrzymalosc:"+this.wytrzymalosc+" , bagaz: "+this.bagaz+" , zloto: "+this.zloto,this.span=document.createElement("span"),this.element.appendChild(this.span)}};t.Zdarzenie=class{constructor(e){this.element=e,document.getElementById("fight").addEventListener("click",e=>this.fight()),document.getElementById("flee").addEventListener("click",e=>this.flee()),document.getElementById("talk").addEventListener("click",e=>this.talk())}spotkajWroga(e){this.element.innerHTML+="Spotkales: "+a[e].opis+" , rodzaj: "+a[e].rodzaj+" , sila: "+a[e].sila,this.span=document.createElement("span"),this.element.appendChild(this.span)}spotkajNieznajomego(e){}znajdzPrzedmiot(e){}fight(){alert("fight")}flee(){alert("flee")}talk(){alert("talk")}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=o(0),n=o(0);window.onload=(()=>{var e=document.getElementById("content");new a.Greeter(e).start();var t=document.getElementById("tablica"),o=(new n.Hafn(t),document.getElementById("ekran")),r=document.getElementById("stat");new n.Bohater(r,1,1,[1],1).opiszBohatera();var i=new n.Zdarzenie(o),s=Math.floor(14*Math.random());i.spotkajWroga(s)})}]);
//# sourceMappingURL=bundle.js.map