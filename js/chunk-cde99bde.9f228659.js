(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cde99bde"],{"3b35":function(t,e,s){"use strict";e["a"]={props:{datos:{type:Array,default:function(){return[]}}},data:function(){return{mainId:Math.floor(1e7*Math.random()),selected:"0"}},methods:{getId:function(t){return t<0?null:"sl-"+this.mainId+t+1}}}},"40c4":function(t,e,s){"use strict";s("6d0c")},"6d0c":function(t,e,s){},a965:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[s("div",{staticClass:"horizontal-scroll",style:{transform:"translate("+t.scrollVal+"px,0px)"}},[t._t("default")],2)])},i=[],a=(s("7db0"),s("b64b"),s("caad"),s("2532"),s("d81d"),{name:"HorizontalScroll",props:{selectedId:{type:String,default:""}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t=this,e=this.ids.find((function(e){return e.id===t.selectedId})).id,s=document.getElementById(e);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==s){var n=!(navigator.userAgent.includes("Chrome/")||navigator.userAgent.includes("Firefox/")),i=this.$refs.hContainer,a=s.offsetWidth*this.ids.length,l=n?s.offsetLeft-i.offsetLeft:s.offsetLeft,o=i.offsetWidth/s.offsetWidth;o>1&&a-l<i.offsetWidth&&(l=a-i.offsetWidth),this.scrollVal=1===this.ids.length?0:-l}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),l=a,o=(s("40c4"),s("2877")),r=Object(o["a"])(l,n,i,!1,null,"8e18821a",null);e["a"]=r.exports},aae4:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slyder-b"},[t.datos.length?s("ScrollHorizontal",{attrs:{selectedId:t.selected}},t._l(t.datos,(function(e,n){return s("div",{key:"key-"+t.getId(n),staticClass:"slyder-b__slyde",attrs:{id:t.getId(n)}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 order-lg-2 mb-4 mb-lg-0"},[s("figure",{staticClass:"slyder-b__img"},[s("img",{attrs:{src:e.imagen,alt:e.leyendaImagen}}),e.leyendaImagen?s("figcaption",[t._v(t._s(e.leyendaImagen))]):t._e()])]),s("div",{staticClass:"col-lg-4 order-lg-1"},[s("div",{staticClass:"h3"},[t._v(t._s(e.titulo))]),s("p",{staticClass:"mb-3",domProps:{innerHTML:t._s(e.texto)}}),s("div",{staticClass:"slyder__action"},[s("div",{staticClass:"slyder__pagination"},[t._v(t._s(n+1)+"/"+t._s(t.datos.length))]),n-1>=0?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(n-1)}}},[s("i",{staticClass:"fas fa-angle-left"})]):t._e(),n+1!=t.datos.length-1?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(n+1)}}},[s("i",{staticClass:"fas fa-angle-right"})]):t._e()])])])])})),0):t._e()],1)},i=[],a=s("3b35"),l=s("a965"),o={name:"SlyderB",components:{ScrollHorizontal:l["a"]},mixins:[a["a"]]},r=o,d=s("2877"),c=Object(d["a"])(r,n,i,!1,null,"2cce42bf",null);e["default"]=c.exports},b64b:function(t,e,s){var n=s("23e7"),i=s("7b0b"),a=s("df75"),l=s("d039"),o=l((function(){a(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return a(i(t))}})}}]);
//# sourceMappingURL=chunk-cde99bde.9f228659.js.map