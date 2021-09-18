/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5],{241:function(t,e,n){"use strict";n.r(e);var o={name:"Logo",components:{headroom:n(243).headroom},methods:{switchColor:function(){this.$colorMode.preference=this.darkMode?"light":"dark"}},computed:{darkMode:function(){return"dark"===this.$colorMode.preference}}},r=n(38),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("headroom",[n("div",{staticClass:"logo-bg"},[n("nuxt-link",{staticClass:"logo",attrs:{to:"/",id:"logo"}},[n("div",{staticClass:"center flex"},[n("div",{staticClass:"bg-image-logo dark:bg-image-dark-logo bg-no-repeat bg-center w-[30px] block",attrs:{width:"30px",height:"30px"}}),t._v(" "),n("div",{staticClass:"quillstack"},[t._v("Quillstack")])])]),t._v(" "),n("div",{staticClass:"switch select-none",on:{click:function(e){return t.switchColor()}}},[t.darkMode?n("span",[t._v("☀️")]):n("span",[t._v("🌙️")])])],1)])}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,n){"use strict";n.r(e);var o={name:"PageFooter",props:{photoByUrl:{type:String,default:null},photoByName:{type:String,default:null}},data:function(){return{scrollToClass:"opacity-0"}},methods:{handleScroll:function(){window.scrollY>500?this.scrollToClass="opacity-100":this.scrollToClass="opacity-0"}},mounted:function(){this.scrollToClass="opacity-0",window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},r=n(38),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#toc",expression:"'#toc'"}],staticClass:"transition duration-500 ease-in-out shadow border text-2xl border-green-700 flex flex-wrap content-center bg-green-800 rounded-full fixed bottom-10 right-10 w-12 h-12 text-center text-white",class:t.scrollToClass,attrs:{href:"#"}},[n("div",{staticClass:"mx-auto mb-1 text-green-300"},[t._v("↑")])]),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[t._v("\n        © 2021 "),n("em",[t._v("Quillstack")])]),t._v(" "),t.photoByUrl?n("div",[t._v("\n        Photo by "),n("a",{attrs:{href:t.photoByUrl,target:"_blank"}},[t._v(t._s(t.photoByName))])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},243:function(t,e,n){(function(e,n){var o;o=function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}for(var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},r=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){(function(){var e,o,r,l,c,d;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=n&&n.hrtime?(t.exports=function(){return(e()-c)/1e6},o=n.hrtime,l=(e=function(){var hr;return 1e9*(hr=o())[0]+hr[1]})(),d=1e9*n.uptime(),c=l-d):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(o)})),l="undefined"==typeof window?o:window,c=["moz","webkit"],d="AnimationFrame",h=l["request"+d],f=l["cancel"+d]||l["cancelRequest"+d],i=0;!h&&i<c.length;i++)h=l[c[i]+"Request"+d],f=l[c[i]+"Cancel"+d]||l[c[i]+"CancelRequest"+d];if(!h||!f){var m=0,v=0,_=[];h=function(t){if(0===_.length){var e=r(),n=Math.max(0,16.666666666666668-(e-m));m=n+e,setTimeout((function(){var t=_.slice(0);_.length=0;for(var i=0;i<t.length;i++)if(!t[i].cancelled)try{t[i].callback(m)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return _.push({handle:++v,callback:t,cancelled:!1}),v},f=function(t){for(var i=0;i<_.length;i++)_[i].handle===t&&(_[i].cancelled=!0)}}var w=function(t){return h.call(l,t)};w.cancel=function(){f.apply(l,arguments)},w.polyfill=function(object){object||(object=l),object.requestAnimationFrame=h,object.cancelAnimationFrame=f};var x={pinned:"headroom--pinned",unpinned:"headroom--unpinned",unfixed:"headroom--unfixed",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"},y=function(template,style,script,t,e,n,o,r,l,c){"boolean"!=typeof o&&(l=r,r=o,o=!1);var d,h="function"==typeof script?script.options:script;if(template&&template.render&&(h.render=template.render,h.staticRenderFns=template.staticRenderFns,h._compiled=!0,e&&(h.functional=!0)),t&&(h._scopeId=t),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},h._ssrRegister=d):style&&(d=o?function(){style.call(this,c(this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),d)if(h.functional){var f=h.render;h.render=function(t,e){return d.call(e),f(t,e)}}else{var m=h.beforeCreate;h.beforeCreate=m?[].concat(m,d):[d]}return script}({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{height:t.height+"px"}},[n("div",{class:t.cls,style:t.style},[t._t("default")],2)])},staticRenderFns:[]},void 0,{name:"vueHeadroom",data:function(){return{isTop:!1,isNotTop:!1,isBottom:!1,isNotBottom:!1,isPinned:!1,isUnpinned:!1,currentScrollY:0,lastScrollY:void 0,state:"unfixed",translate:0,height:"",animation:!0,isSupport3d:!1}},props:{scroller:{type:Function,default:function(){return window}},disabled:{type:Boolean,default:!1},upTolerance:{type:Number,default:5},downTolerance:{type:Number,default:0},speed:{type:Number,default:250},easing:{type:String,default:"ease-in-out"},zIndex:{type:Number,default:9999},offset:{type:Number,default:0},classes:{type:Object,default:function(){return x}},footroom:{type:Boolean,default:!1}},watch:{disabled:function(t){t?this.scroller().removeEventListener("scroll",this._handleScroll):this.scroller().addEventListener("scroll",this._handleScroll)}},mounted:function(){this.isSupport3d=function(){for(var div=document.createElement("div"),t=!1,e=["perspectiveProperty","WebkitPerspective"],i=e.length-1;i>=0;i--)t=t||void 0!==div.style[e[i]];if(t){var n=document.createElement("style");n.textContent="#modernizr{width:0;height:0} @media (transform-3d),(-webkit-transform-3d){#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",document.getElementsByTagName("head")[0].appendChild(n),div.id="modernizr",document.body.appendChild(div),t=7===div.offsetWidth&&18===div.offsetHeight,n.parentNode.removeChild(n),div.parentNode.removeChild(div)}return t}(),this._setHeightOffset(),this.disabled||this.scroller().addEventListener("scroll",this._handleScroll),this._handleScroll()},updated:function(){this.$nextTick((function(){this._setHeightOffset()}))},beforeDestroy:function(){this.scroller().removeEventListener("scroll",this._handleScroll)},computed:{style:function(){var t={position:this.disabled||"unfixed"===this.state?"relative":"fixed",top:"0",left:"0",right:"0","z-index":this.zIndex};return this.footroom&&(t=Object.assign({},t,{top:"unset",bottom:"0"})),this.$isServer||(t.transform=this.isSupport3d&&!this.$isServer?"translate3d(0, ".concat(this.translate,", 0)"):"translateY(".concat(this.translate,")"),this.animation&&(t.transition="all ".concat(this.speed,"ms ").concat(this.easing))),t},clsOpts:function(){return Object.assign({},x,this.classes)},cls:function(){var e,n=this.clsOpts;return this.disabled?{}:(t(e={},n.top,this.isTop),t(e,n.notTop,this.isNotTop),t(e,n.bottom,this.isBottom),t(e,n.notBottom,this.isNotBottom),t(e,n.pinned,this.isPinned),t(e,n.unpinned,this.isUnpinned),t(e,n.initial,!0),e)}},methods:{_getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},_getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},_getDocumentHeight:function(){var body=document.body,t=document.documentElement;return Math.max(body.scrollHeight,t.scrollHeight,body.offsetHeight,t.offsetHeight,body.clientHeight,t.clientHeight)},_getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},_getScrollerPhysicalHeight:function(){var t=this.scroller();return t===window||t===document.body?this._getViewportHeight():this._getElementPhysicalHeight(t)},_getScrollerHeight:function(){var t=this.scroller();return t===window||t===document.body?this._getDocumentHeight():this._getElementHeight(t)},_isOutOfBound:function(t){var e=t<0,n=this._getScrollerPhysicalHeight(),o=this._getScrollerHeight();return e||t+n>o},_handleScroll:function(){w(this.update)},_setHeightOffset:function(){this.height=this.$slots.default?this.$slots.default[0].elm&&this.$slots.default[0].elm.offsetHeight:""},_getScrollY:function(){return void 0!==this.scroller().pageYOffset?this.scroller().pageYOffset:void 0!==this.scroller().scrollTop?this.scroller().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},update:function(){if(this.currentScrollY=this._getScrollY(),!this._isOutOfBound(this.currentScrollY)){this.currentScrollY<=this.offset?this.top():this.notTop(),this.currentScrollY+this._getViewportHeight()>=this._getScrollerHeight()?this.bottom():this.notBottom();var t,e,n,o,r=(e=(t=this).currentScrollY>=t.lastScrollY?"down":"up",n=Math.abs(t.currentScrollY-t.lastScrollY),o=void 0===t.lastScrollY,t.currentScrollY>t.height+t.offset&&"unfixed"===t.state&&o?"pin":t.currentScrollY<=t.offset&&"unfixed"!==t.state?"unfix":t.currentScrollY<=t.height&&"down"===e&&"unfixed"===t.state?"none":t.currentScrollY>t.height+t.offset&&"down"===e&&"unfixed"===t.state&&!o?"unpin-snap":"down"===e&&["pinned","unfixed"].indexOf(t.state)>=0&&t.currentScrollY>t.height+t.offset&&n>t.downTolerance?"unpin":"up"===e&&n>t.upTolerance&&["pinned","unfixed"].indexOf(t.state)<0||"up"===e&&t.currentScrollY<=t.height&&["pinned","unfixed"].indexOf(t.state)<0?"pin":"none");"pin"===r?this.pin():"unpin-snap"===r?this.unpinSnap():"unpin"===r?this.unpin():"unfix"===r&&this.unfix(),this.lastScrollY=this.currentScrollY}},top:function(){this.isTop=!0,this.isNotTop=!1,this.$emit("top")},notTop:function(){this.isTop=!1,this.isNotTop=!0,this.$emit("not-top")},bottom:function(){this.isBottom=!0,this.isNotBottom=!1,this.$emit("bottom")},notBottom:function(){this.isNotBottom=!0,this.isBottom=!1,this.$emit("not-bottom")},pin:function(){var t=this;this.isPinned=!0,this.isUnpinned=!1,this.animation=!0,this.$emit("pin"),this.translate=0,this.$nextTick((function(){t.state="pinned"}))},unpin:function(){var t=this;this.isUnpinned=!0,this.isPinned=!1,this.animation=!0,this.$emit("unpin"),this.translate=this.footroom?"100%":"-100%",this.$nextTick((function(){t.state="unpinned"}))},unpinSnap:function(){var t=this;this.isUnpinned=!0,this.isPinned=!1,this.animation=!1,this.$emit("unpin"),this.translate=this.footroom?"100%":"-100%",this.$nextTick((function(){t.state="unpinned"}))},unfix:function(){var t=this;this.translate=0,this.animation=!1,this.$emit("unfix"),this.$nextTick((function(){t.state="unfixed"}))}}},void 0,!1,void 0,void 0,void 0),S=function t(e){t.installed||e.component(y.name,y)};return"undefined"!=typeof window&&window.Vue&&S(window.Vue),{headroom:y,install:S}},t.exports=o()}).call(this,n(30),n(167))},250:function(t,e,n){"use strict";n.r(e);var o=n(241),r={components:{PageFooter:n(242).default,Logo:o.default},head:function(){return{link:[{rel:"icon",type:"image/x-icon",href:this.darkMode?"/dark-favicon.svg":"/favicon.svg"}]}},computed:{darkMode:function(){return"dark"===this.$colorMode.preference},photoUrl:function(){return this.darkMode?"https://unsplash.com/@sseeker":"https://unsplash.com/@lauraadaiphoto"},photoName:function(){return this.darkMode?"Stormseeker":"laura adai"}}},l=n(38),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("logo"),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"center"},[n("div",{ref:"toc",staticClass:"toc list"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/di/"}},[t._v("Dependency Injection Container")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/dotenv/"}},[t._v("Dotenv")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/storage/"}},[t._v("Storage")])],1)])])]),t._v(" "),n("page-footer",{attrs:{"photo-by-url":t.photoUrl,"photo-by-name":t.photoName}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-image-index dark:bg-image-dark-index hero bg-center"},[n("div",{staticClass:"center"},[n("h1",{staticClass:"dark:bg-green-800 bg-red-300"},[t._v("\n                The API Framework\n            ")]),t._v(" "),n("div",{staticClass:"intro",attrs:{id:"intro"}},[n("p",[t._v("\n                    Quillstack is a group of components you can use separately or combine them into the framework.\n                    The main goal was to create the packages which will be fast and simple without any magic features.\n                    "),n("span",{attrs:{id:"toc"}})])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(241).default,PageFooter:n(242).default})}}]);