(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario"],{"13d5":function(t,n,r){"use strict";var a=r("23e7"),e=r("d58f").left,o=r("a640"),i=r("2d00"),c=r("605d"),s=o("reduce"),u=!c&&i>79&&i<83;a({target:"Array",proto:!0,forced:!s||u},{reduce:function(t){return e(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,n,r){var a=r("da84"),e=r("fdbc"),o=r("17c2"),i=r("9112");for(var c in e){var s=a[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,n,r){"use strict";var a=r("b727").forEach,e=r("a640"),o=e("forEach");t.exports=o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"25f0":function(t,n,r){"use strict";var a=r("6eeb"),e=r("825a"),o=r("d039"),i=r("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=c;(l||f)&&a(RegExp.prototype,c,(function(){var t=e(this),n=String(t.source),r=t.flags,a=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?i.call(t):r);return"/"+n+"/"+a}),{unsafe:!0})},"2d68":function(t,n,r){},"3cd8":function(t,n,r){"use strict";var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container-fluid banner-interno"},[r("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),r("div",{staticClass:"container"},[r("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?r("div",{staticClass:"banner-interno__titulo__icono me-3"},[r("i",{class:t.icono})]):t._e(),r("h1",{staticClass:"h3 mb-0"},[t._v(t._s(t.titulo))])])])])},e=[],o=r("cdd9"),i={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{globalData:o["c"]}}},c=i,s=(r("d75e"),r("2877")),u=Object(s["a"])(c,a,e,!1,null,"3f7f20c1",null);n["a"]=u.exports},"57e4":function(t,n,r){},"85b4":function(t,n,r){"use strict";r("57e4")},a15b:function(t,n,r){"use strict";var a=r("23e7"),e=r("44ad"),o=r("fc6a"),i=r("a640"),c=[].join,s=e!=Object,u=i("join",",");a({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(o(this),void 0===t?",":t)}})},a640:function(t,n,r){"use strict";var a=r("d039");t.exports=function(t,n){var r=[][t];return!!r&&a((function(){r.call(null,n||function(){throw 1},1)}))}},b64b:function(t,n,r){var a=r("23e7"),e=r("7b0b"),o=r("df75"),i=r("d039"),c=i((function(){o(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return o(e(t))}})},c92c:function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"curso-main-container glosario"},[r("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return r("div",{key:"letra-"+n.letra,staticClass:"glosario__letra-item mb-2"},[r("div",{staticClass:"glosario__letra-item__letra me-4"},[r("div",{staticClass:"glosario__letra-item__letra__icono"},[r("span",[t._v(t._s(n.letra))])])]),r("div",{staticClass:"glosario__letra-item__texto"},t._l(n.terminos,(function(n){return r("p",{staticClass:"mb-3"},[r("strong",[t._v("• "+t._s(n.termino)+": ")]),r("span",{domProps:{innerHTML:t._s(n.significado)}})])})),0)])})),0)],1)},e=[],o=r("2909"),i=(r("13d5"),r("b64b"),r("159b"),r("d81d"),r("7db0"),r("d3b7"),r("25f0"),r("a15b"),r("1276"),r("ac1f"),r("3cd8")),c=r("cdd9"),s={name:"Glosario",components:{BannerInterno:i["a"]},data:function(){return{glosarioData:c["d"]}},computed:{orderedData:function(){var t=this,n=Object(o["a"])(this.glosarioData).reduce((function(n,r){var a=t.quitarAcentos(r.termino[0].toLowerCase());return n[a]?n[a].terminos.push(r):n[a]={letra:a,terminos:[r]},n}),{}),r=Object.keys(n).sort(),a=[];return r.forEach((function(t){var r=n[t],e=r.terminos;if(e.length>1){var o=[],i=r.terminos.map((function(t){return t.termino})).sort();i.forEach((function(t){o.push(e.find((function(n){return n.termino===t})))})),e=o}a.push({letra:r.letra.toUpperCase(),terminos:e})})),a}},methods:{quitarAcentos:function(t){var n={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return t.split("").map((function(t){return n[t]||t})).join("").toString()}}},u=s,l=(r("85b4"),r("2877")),f=Object(l["a"])(u,a,e,!1,null,"54188872",null);n["default"]=f.exports},d58f:function(t,n,r){var a=r("1c0b"),e=r("7b0b"),o=r("44ad"),i=r("50c4"),c=function(t){return function(n,r,c,s){a(r);var u=e(n),l=o(u),f=i(u.length),d=t?f-1:0,p=t?-1:1;if(c<2)while(1){if(d in l){s=l[d],d+=p;break}if(d+=p,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=p)d in l&&(s=r(s,l[d],d,u));return s}};t.exports={left:c(!1),right:c(!0)}},d75e:function(t,n,r){"use strict";r("2d68")}}]);
//# sourceMappingURL=glosario.4411655c.js.map