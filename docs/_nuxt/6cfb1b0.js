/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4,5],{237:function(e,t,n){"use strict";n.r(t);n(38),n(29),n(37),n(62),n(34),n(63);var r=n(30),o=n(239),l=n(52);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={name:"Logo",components:{headroom:o.headroom},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({toggle:"mode/toggle"})),computed:{mode:function(){return this.$store.state.mode.dark}}},h=n(36),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("headroom",[n("nuxt-link",{staticClass:"logo",attrs:{to:"/",id:"logo"}},[n("div",{staticClass:"center flex"},[n("div",{staticClass:"bg-image-logo dark:bg-image-dark-logo bg-no-repeat bg-center w-[30px] block",attrs:{width:"30px",height:"30px"}}),e._v(" "),n("div",{staticClass:"quillstack"},[e._v("Quillstack")])])]),e._v(" "),n("div",{staticClass:"switch",on:{click:function(t){return e.toggle()}}},[e.mode?n("span",[e._v("☀️")]):n("span",[e._v("🌙️")])])],1)}),[],!1,null,null,null);t.default=component.exports},238:function(e,t,n){"use strict";n.r(t);var r={name:"PageFooter",props:{photoByUrl:{type:String,default:null},photoByName:{type:String,default:null}},data:function(){return{scrollToClass:"opacity-0"}},methods:{handleScroll:function(){window.scrollY>500?this.scrollToClass="opacity-100":this.scrollToClass="opacity-0"}},mounted:function(){this.scrollToClass="opacity-0",window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},o=n(36),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#toc",expression:"'#toc'"}],staticClass:"transition duration-500 ease-in-out shadow border text-2xl border-green-700 flex flex-wrap content-center bg-green-800 rounded-full fixed bottom-10 right-10 w-12 h-12 text-center text-white",class:e.scrollToClass,attrs:{href:"#"}},[n("div",{staticClass:"mx-auto mb-1 text-green-300"},[e._v("↑")])]),e._v(" "),n("nuxt-link",{attrs:{to:"/"}},[e._v("\n        © 2021 "),n("em",[e._v("Quillstack")])]),e._v(" "),e.photoByUrl?n("div",[e._v("\n        Photo by "),n("a",{attrs:{href:e.photoByUrl,target:"_blank"}},[e._v(e._s(e.photoByName))])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},239:function(e,t,n){(function(t,n){var r;r=function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}for(var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},o=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){(function(){var t,r,o,l,c,d;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=n&&n.hrtime?(e.exports=function(){return(t()-c)/1e6},r=n.hrtime,l=(t=function(){var hr;return 1e9*(hr=r())[0]+hr[1]})(),d=1e9*n.uptime(),c=l-d):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(r)})),l="undefined"==typeof window?r:window,c=["moz","webkit"],d="AnimationFrame",h=l["request"+d],f=l["cancel"+d]||l["cancelRequest"+d],i=0;!h&&i<c.length;i++)h=l[c[i]+"Request"+d],f=l[c[i]+"Cancel"+d]||l[c[i]+"CancelRequest"+d];if(!h||!f){var m=0,v=0,_=[];h=function(e){if(0===_.length){var t=o(),n=Math.max(0,16.666666666666668-(t-m));m=n+t,setTimeout((function(){var e=_.slice(0);_.length=0;for(var i=0;i<e.length;i++)if(!e[i].cancelled)try{e[i].callback(m)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return _.push({handle:++v,callback:e,cancelled:!1}),v},f=function(e){for(var i=0;i<_.length;i++)_[i].handle===e&&(_[i].cancelled=!0)}}var w=function(e){return h.call(l,e)};w.cancel=function(){f.apply(l,arguments)},w.polyfill=function(object){object||(object=l),object.requestAnimationFrame=h,object.cancelAnimationFrame=f};var y={pinned:"headroom--pinned",unpinned:"headroom--unpinned",unfixed:"headroom--unfixed",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"},k=function(template,style,script,e,t,n,r,o,l,c){"boolean"!=typeof r&&(l=o,o=r,r=!1);var d,h="function"==typeof script?script.options:script;if(template&&template.render&&(h.render=template.render,h.staticRenderFns=template.staticRenderFns,h._compiled=!0,t&&(h.functional=!0)),e&&(h._scopeId=e),n?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),style&&style.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(n)},h._ssrRegister=d):style&&(d=r?function(){style.call(this,c(this.$root.$options.shadowRoot))}:function(e){style.call(this,o(e))}),d)if(h.functional){var f=h.render;h.render=function(e,t){return d.call(t),f(e,t)}}else{var m=h.beforeCreate;h.beforeCreate=m?[].concat(m,d):[d]}return script}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{height:e.height+"px"}},[n("div",{class:e.cls,style:e.style},[e._t("default")],2)])},staticRenderFns:[]},void 0,{name:"vueHeadroom",data:function(){return{isTop:!1,isNotTop:!1,isBottom:!1,isNotBottom:!1,isPinned:!1,isUnpinned:!1,currentScrollY:0,lastScrollY:void 0,state:"unfixed",translate:0,height:"",animation:!0,isSupport3d:!1}},props:{scroller:{type:Function,default:function(){return window}},disabled:{type:Boolean,default:!1},upTolerance:{type:Number,default:5},downTolerance:{type:Number,default:0},speed:{type:Number,default:250},easing:{type:String,default:"ease-in-out"},zIndex:{type:Number,default:9999},offset:{type:Number,default:0},classes:{type:Object,default:function(){return y}},footroom:{type:Boolean,default:!1}},watch:{disabled:function(e){e?this.scroller().removeEventListener("scroll",this._handleScroll):this.scroller().addEventListener("scroll",this._handleScroll)}},mounted:function(){this.isSupport3d=function(){for(var div=document.createElement("div"),e=!1,t=["perspectiveProperty","WebkitPerspective"],i=t.length-1;i>=0;i--)e=e||void 0!==div.style[t[i]];if(e){var n=document.createElement("style");n.textContent="#modernizr{width:0;height:0} @media (transform-3d),(-webkit-transform-3d){#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",document.getElementsByTagName("head")[0].appendChild(n),div.id="modernizr",document.body.appendChild(div),e=7===div.offsetWidth&&18===div.offsetHeight,n.parentNode.removeChild(n),div.parentNode.removeChild(div)}return e}(),this._setHeightOffset(),this.disabled||this.scroller().addEventListener("scroll",this._handleScroll),this._handleScroll()},updated:function(){this.$nextTick((function(){this._setHeightOffset()}))},beforeDestroy:function(){this.scroller().removeEventListener("scroll",this._handleScroll)},computed:{style:function(){var e={position:this.disabled||"unfixed"===this.state?"relative":"fixed",top:"0",left:"0",right:"0","z-index":this.zIndex};return this.footroom&&(e=Object.assign({},e,{top:"unset",bottom:"0"})),this.$isServer||(e.transform=this.isSupport3d&&!this.$isServer?"translate3d(0, ".concat(this.translate,", 0)"):"translateY(".concat(this.translate,")"),this.animation&&(e.transition="all ".concat(this.speed,"ms ").concat(this.easing))),e},clsOpts:function(){return Object.assign({},y,this.classes)},cls:function(){var t,n=this.clsOpts;return this.disabled?{}:(e(t={},n.top,this.isTop),e(t,n.notTop,this.isNotTop),e(t,n.bottom,this.isBottom),e(t,n.notBottom,this.isNotBottom),e(t,n.pinned,this.isPinned),e(t,n.unpinned,this.isUnpinned),e(t,n.initial,!0),t)}},methods:{_getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},_getElementPhysicalHeight:function(e){return Math.max(e.offsetHeight,e.clientHeight)},_getDocumentHeight:function(){var body=document.body,e=document.documentElement;return Math.max(body.scrollHeight,e.scrollHeight,body.offsetHeight,e.offsetHeight,body.clientHeight,e.clientHeight)},_getElementHeight:function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},_getScrollerPhysicalHeight:function(){var e=this.scroller();return e===window||e===document.body?this._getViewportHeight():this._getElementPhysicalHeight(e)},_getScrollerHeight:function(){var e=this.scroller();return e===window||e===document.body?this._getDocumentHeight():this._getElementHeight(e)},_isOutOfBound:function(e){var t=e<0,n=this._getScrollerPhysicalHeight(),r=this._getScrollerHeight();return t||e+n>r},_handleScroll:function(){w(this.update)},_setHeightOffset:function(){this.height=this.$slots.default?this.$slots.default[0].elm&&this.$slots.default[0].elm.offsetHeight:""},_getScrollY:function(){return void 0!==this.scroller().pageYOffset?this.scroller().pageYOffset:void 0!==this.scroller().scrollTop?this.scroller().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},update:function(){if(this.currentScrollY=this._getScrollY(),!this._isOutOfBound(this.currentScrollY)){this.currentScrollY<=this.offset?this.top():this.notTop(),this.currentScrollY+this._getViewportHeight()>=this._getScrollerHeight()?this.bottom():this.notBottom();var e,t,n,r,o=(t=(e=this).currentScrollY>=e.lastScrollY?"down":"up",n=Math.abs(e.currentScrollY-e.lastScrollY),r=void 0===e.lastScrollY,e.currentScrollY>e.height+e.offset&&"unfixed"===e.state&&r?"pin":e.currentScrollY<=e.offset&&"unfixed"!==e.state?"unfix":e.currentScrollY<=e.height&&"down"===t&&"unfixed"===e.state?"none":e.currentScrollY>e.height+e.offset&&"down"===t&&"unfixed"===e.state&&!r?"unpin-snap":"down"===t&&["pinned","unfixed"].indexOf(e.state)>=0&&e.currentScrollY>e.height+e.offset&&n>e.downTolerance?"unpin":"up"===t&&n>e.upTolerance&&["pinned","unfixed"].indexOf(e.state)<0||"up"===t&&e.currentScrollY<=e.height&&["pinned","unfixed"].indexOf(e.state)<0?"pin":"none");"pin"===o?this.pin():"unpin-snap"===o?this.unpinSnap():"unpin"===o?this.unpin():"unfix"===o&&this.unfix(),this.lastScrollY=this.currentScrollY}},top:function(){this.isTop=!0,this.isNotTop=!1,this.$emit("top")},notTop:function(){this.isTop=!1,this.isNotTop=!0,this.$emit("not-top")},bottom:function(){this.isBottom=!0,this.isNotBottom=!1,this.$emit("bottom")},notBottom:function(){this.isNotBottom=!0,this.isBottom=!1,this.$emit("not-bottom")},pin:function(){var e=this;this.isPinned=!0,this.isUnpinned=!1,this.animation=!0,this.$emit("pin"),this.translate=0,this.$nextTick((function(){e.state="pinned"}))},unpin:function(){var e=this;this.isUnpinned=!0,this.isPinned=!1,this.animation=!0,this.$emit("unpin"),this.translate=this.footroom?"100%":"-100%",this.$nextTick((function(){e.state="unpinned"}))},unpinSnap:function(){var e=this;this.isUnpinned=!0,this.isPinned=!1,this.animation=!1,this.$emit("unpin"),this.translate=this.footroom?"100%":"-100%",this.$nextTick((function(){e.state="unpinned"}))},unfix:function(){var e=this;this.translate=0,this.animation=!1,this.$emit("unfix"),this.$nextTick((function(){e.state="unfixed"}))}}},void 0,!1,void 0,void 0,void 0),x=function e(t){e.installed||t.component(k.name,k)};return"undefined"!=typeof window&&window.Vue&&x(window.Vue),{headroom:k,install:x}},e.exports=r()}).call(this,n(28),n(165))},240:function(e,t,n){"use strict";n.r(t);n(35),n(121),n(40),n(120),n(39),n(51),n(41),n(166),n(88),n(87);var r=n(241),o=n.n(r),l={name:"CodePhp",props:{lines:{type:Array,required:!0},colors:{type:Boolean,default:!0}},data:function(){return{markers:{class:"💥",variable:"💧",string:"💣",keyword:"⚽",char:"✅",method:"🔮"},keywords:["new","class","require","<?php","use","if","echo","public","function","private","protected"],const:["__DIR__"],chars:["(",")",";","=",",",":","-",">","<","?",".","[","]"]}},methods:{markClassNames:function(line){var e=this,t=!1;return line.split(" ").map((function(n){return t?(t=!1,e.markers.class+n+e.markers.class):("new"===n&&(t=!0),n)})).join(" ")},markStrings:function(line){var e=this,t=!1,n="'";return line.includes('"')&&(n='"'),line.split(/(?='|")/).map((function(r){var o=r.charAt(0),l=r.replace(n,"");return t?(t=!1,l):'"'===o||"'"===o?(t=!0,e.markers.string+n+l+n+e.markers.string):l})).join("")},markVariablesAndKeywords:function(line){var e=this;return line.split(" ").map((function(t){return"$"===t.charAt(0)||e.const.includes(t)?e.markers.variable+t+e.markers.variable:e.keywords.includes(t)?e.markers.keyword+t+e.markers.keyword:t})).join(" ")},markSpecialCharacters:function(line){var e=this;if(this.keywords.includes(line))return line;var t=!1;return line.includes('"')&&'"',line.split("").map((function(n){return'"'!==n&&"'"!==n||(t=!t),t?n:e.chars.includes(n)?e.markers.char+n+e.markers.char:n})).join("")},markMethodCall:function(line){var e=new RegExp("->(.+)\\(","g"),marker=this.markers.method;return o.a.replace(line,e,marker+"->$1("+marker)},markImports:function(line){var marker=this.markers.class;return o.a.replace(line,/use (.*?);/g,"use "+marker+"$1"+marker+";")},markClassNameStatic:function(line){var marker=this.markers.class,e=this.markers.keyword;return o.a.replace(line,/([_a-zA-Z]+)::class/g,marker+"$1::"+marker+e+"class"+e)},getMarkerToRegexp:function(marker){return"".concat(marker,"([^").concat(marker,"]*)").concat(marker)},getMarkerToClassRegexp:function(marker){return"".concat(marker,"(.*?)").concat(marker)},convertMethodCallsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.method),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="method">$1</span>')},convertVariablesAndKeywordToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.variable),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="variable">$1</span>')},convertClassNamesToHtml:function(line){var e=this.getMarkerToClassRegexp(this.markers.class),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="class">$1</span>')},convertCharsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.char),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="char">$1</span>')},convertKeywordsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.keyword),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="keyword">$1</span>')},convertStringsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.string),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="string">$1</span>')},escapeHtml:function(line){return line.replace("<","&lt;")}},computed:{getLines:function(){var e=this;return this.colors?this.lines.map((function(line){return e.markClassNameStatic(line)})).map((function(line){return e.markClassNames(line)})).map((function(line){return e.markImports(line)})).map((function(line){return e.markMethodCall(line)})).map((function(line){return e.markStrings(line)})).map((function(line){return e.markSpecialCharacters(line)})).map((function(line){return e.markVariablesAndKeywords(line)})).map((function(line){return e.escapeHtml(line)})).map((function(line){return e.convertClassNamesToHtml(line)})).map((function(line){return e.convertCharsToHtml(line)})).map((function(line){return e.convertKeywordsToHtml(line)})).map((function(line){return e.convertStringsToHtml(line)})).map((function(line){return e.convertMethodCallsToHtml(line)})).map((function(line){return e.convertVariablesAndKeywordToHtml(line)})):this.lines}}},c=n(36),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code"},[n("ul",{staticClass:"center"},e._l(e.getLines,(function(line,t){return n("li",{key:t},[n("span",[n("pre",{staticClass:"inline-block ml-2 mr-6",domProps:{innerHTML:e._s(line)}})])])})),0)])}),[],!1,null,null,null);t.default=component.exports},244:function(e,t,n){"use strict";n.r(t);var r=n(237),o=n(240),l={components:{PageFooter:n(238).default,CodePhp:o.default,Logo:r.default},head:function(){return{title:"Dotenv - Quillstack",htmlAttrs:{class:this.$store.state.mode.dark?"dark":""}}},data:function(){return{composer:["composer require quillstack/dotenv"],env:["APP_DEBUG=true"],dotenv:["$dotenv = new Dotenv('.env');","$dotenv->load();"],debug:["if (env('APP_DEBUG')) {","    echo 'Debug mode';","}"],debugDefault:["if (env('APP_DEBUG', false)) {","    echo 'Debug mode';","}"],required:["$dbHost = required('DATABASE_HOST');"],requiredException:["DotenvValueNotSetException:","Value not set for key: DATABASE_HOST"],multiLine:['PRIVATE_KEY="line1\\nline2\\nline3"']}}},c=n(36),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("logo"),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"center"},[n("div",{ref:"toc",staticClass:"toc list"},[n("ul",[n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#when-to-use-dotenv",expression:"'#when-to-use-dotenv'"}],attrs:{href:"#"}},[e._v("\n                        When to use Dotenv?\n                    ")])]),e._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#installation",expression:"'#installation'"}],attrs:{href:"#"}},[e._v("\n                        Installation\n                    ")])]),e._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#usage",expression:"'#usage'"}],attrs:{href:"#"}},[e._v("\n                        Usage\n                    ")]),e._v(" "),n("ol",[n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#required-keys",expression:"'#required-keys'"}],attrs:{href:"#"}},[e._v("\n                                Required keys\n                            ")])]),e._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#multi-line",expression:"'#multi-line'"}],attrs:{href:"#"}},[e._v("\n                                Multi-line values\n                            ")])])])])])])]),e._v(" "),n("div",{staticClass:"center"},[n("h2",{attrs:{id:"when-to-use-dotenv"}},[e._v("\n            When to use Dotenv?\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#when-to-use-dotenv",expression:"'#when-to-use-dotenv'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",[e._v("\n            The .env should be used for sensitive information like passwords, hosts, keys, credentials, and all\n            other values that can be changed depending on the environment, e.g., debug mode settings or logs level.\n        ")])]),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"center"},[n("h2",{attrs:{id:"installation"}},[e._v("\n            Installation\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#installation",expression:"'#installation'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),e._m(1)]),e._v(" "),n("code-php",{attrs:{colors:!1,lines:e.composer}}),e._v(" "),e._m(2),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"center"},[n("h2",{attrs:{id:"usage"}},[e._v("\n            Usage\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#usage",expression:"'#usage'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            You can use Quillstack Dotenv package when you want to use .env files in your project. If you created\n            the .env file in the root directory of your project:\n        ")])]),e._v(" "),n("code-php",{attrs:{colors:!1,lines:e.env}}),e._v(" "),e._m(3),e._v(" "),n("code-php",{attrs:{lines:e.dotenv}}),e._v(" "),e._m(4),e._v(" "),n("code-php",{attrs:{lines:e.debug}}),e._v(" "),e._m(5),e._v(" "),n("code-php",{attrs:{lines:e.debugDefault}}),e._v(" "),n("div",{staticClass:"center"},[n("h3",{attrs:{id:"required-keys"}},[e._v("\n            Required keys\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#required-keys",expression:"'#required-keys'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            You can use another helper method for required keys. If required key is not found an exception will be thrown:\n        ")])]),e._v(" "),n("code-php",{attrs:{lines:e.required}}),e._v(" "),e._m(6),e._v(" "),n("code-php",{attrs:{colors:!1,lines:e.requiredException}}),e._v(" "),n("div",{staticClass:"center"},[n("h3",{attrs:{id:"multi-line"}},[e._v("\n            Multi-line values\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#multi-line",expression:"'#multi-line'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            You can define multi-line values in your .env file by using \\n separator instead of new lines for example:\n        ")])]),e._v(" "),n("code-php",{attrs:{colors:!1,lines:e.multiLine}}),e._v(" "),n("page-footer",{attrs:{"photo-by-name":"Claire Brear","photo-by-url":"https://unsplash.com/@_bearista1"}})],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-image-dotenv hero bg-top md:bg-center"},[n("div",{staticClass:"center"},[n("h1",{staticClass:"bg-yellow-800"},[e._v("\n                Dotenv\n            ")]),e._v(" "),n("div",{staticClass:"intro",attrs:{id:"intro"}},[n("p",[e._v("\n                    The library for using .env files.\n                    "),n("span",{attrs:{id:"toc"}})])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"before-code"},[e._v("\n            To install this package, run the standard command using "),n("em",[e._v("Composer")]),e._v(":\n        ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",[e._v("\n            The package will be ready to use after that.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",{staticClass:"before-code"},[e._v("\n            You can load this .env file in your application:\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",{staticClass:"before-code"},[e._v("\n            Every time you need to know if your application works in debug mode, you can check it using this\n            helper function:\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",{staticClass:"before-code"},[e._v("\n            You can also define a default value depending on the context:\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",{staticClass:"before-code"},[e._v("\n            The result if the key DATABASE_HOST is not set in the .env file:\n        ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Logo:n(237).default,CodePhp:n(240).default,PageFooter:n(238).default})}}]);