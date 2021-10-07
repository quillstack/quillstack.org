(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5],{236:function(e,t,r){"use strict";r.r(t);var n={name:"PageFooter",props:{photoByUrl:{type:String,default:null},photoByName:{type:String,default:null}},data:function(){return{scrollToClass:"opacity-0"}},methods:{handleScroll:function(){window.scrollY>500?this.scrollToClass="opacity-100":this.scrollToClass="opacity-0"}},mounted:function(){this.scrollToClass="opacity-0",window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},o=r(37),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#toc",expression:"'#toc'"}],staticClass:"transition duration-500 ease-in-out shadow border text-2xl border-green-700 flex flex-wrap content-center bg-green-800 rounded-full fixed bottom-10 right-10 w-12 h-12 text-center text-white",class:e.scrollToClass,attrs:{href:"#"}},[r("div",{staticClass:"mx-auto mb-1 text-green-300"},[e._v("↑")])]),e._v(" "),r("nuxt-link",{attrs:{to:"/"}},[e._v("\n        © 2021 "),r("em",[e._v("Quillstack")])]),e._v(" "),e.photoByUrl?r("div",[e._v("\n        Photo by "),r("a",{attrs:{href:e.photoByUrl,target:"_blank"}},[e._v(e._s(e.photoByName))])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},237:function(e,t,r){"use strict";r.r(t);r(39),r(163),r(38),r(117),r(45),r(46),r(47),r(162),r(86),r(85);var n=r(239),o=r.n(n),l={name:"CodePhp",props:{lines:{type:Array,required:!0},colors:{type:Boolean,default:!0}},data:function(){return{markers:{class:"💥",variable:"💧",string:"💣",keyword:"⚽",char:"✅",method:"🔮"},keywords:["new","class","require","<?php","use","if","echo","public","function","private","protected"],const:["__DIR__"],chars:["(",")",";","=",",",":","-",">","<","?",".","[","]"]}},methods:{markClassNames:function(line){var e=this,t=!1;return line.split(" ").map((function(r){return t?(t=!1,e.markers.class+r+e.markers.class):("new"===r&&(t=!0),r)})).join(" ")},markStrings:function(line){var e=this,t=!1,r="'";return line.includes('"')&&(r='"'),line.split(/(?='|")/).map((function(n){var o=n.charAt(0),l=n.replace(r,"");return t?(t=!1,l):'"'===o||"'"===o?(t=!0,e.markers.string+r+l+r+e.markers.string):l})).join("")},markVariablesAndKeywords:function(line){var e=this;return line.split(" ").map((function(t){return"$"===t.charAt(0)||e.const.includes(t)?e.markers.variable+t+e.markers.variable:e.keywords.includes(t)?e.markers.keyword+t+e.markers.keyword:t})).join(" ")},markSpecialCharacters:function(line){var e=this;if(this.keywords.includes(line))return line;var t=!1;return line.includes('"')&&'"',line.split("").map((function(r){return'"'!==r&&"'"!==r||(t=!t),t?r:e.chars.includes(r)?e.markers.char+r+e.markers.char:r})).join("")},markMethodCall:function(line){var e=new RegExp("->(.+)\\(","g"),marker=this.markers.method;return o.a.replace(line,e,marker+"->$1("+marker)},markImports:function(line){var marker=this.markers.class;return o.a.replace(line,/use (.*?);/g,"use "+marker+"$1"+marker+";")},markClassNameStatic:function(line){var marker=this.markers.class,e=this.markers.keyword;return o.a.replace(line,/([_a-zA-Z]+)::class/g,marker+"$1::"+marker+e+"class"+e)},getMarkerToRegexp:function(marker){return"".concat(marker,"([^").concat(marker,"]*)").concat(marker)},getMarkerToClassRegexp:function(marker){return"".concat(marker,"(.*?)").concat(marker)},convertMethodCallsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.method),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="method">$1</span>')},convertVariablesAndKeywordToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.variable),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="variable">$1</span>')},convertClassNamesToHtml:function(line){var e=this.getMarkerToClassRegexp(this.markers.class),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="class">$1</span>')},convertCharsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.char),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="char">$1</span>')},convertKeywordsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.keyword),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="keyword">$1</span>')},convertStringsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.string),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="string">$1</span>')},escapeHtml:function(line){return line.replace("<","&lt;")}},computed:{getLines:function(){var e=this;return this.colors?this.lines.map((function(line){return e.markClassNameStatic(line)})).map((function(line){return e.markClassNames(line)})).map((function(line){return e.markImports(line)})).map((function(line){return e.markMethodCall(line)})).map((function(line){return e.markStrings(line)})).map((function(line){return e.markSpecialCharacters(line)})).map((function(line){return e.markVariablesAndKeywords(line)})).map((function(line){return e.escapeHtml(line)})).map((function(line){return e.convertClassNamesToHtml(line)})).map((function(line){return e.convertCharsToHtml(line)})).map((function(line){return e.convertKeywordsToHtml(line)})).map((function(line){return e.convertStringsToHtml(line)})).map((function(line){return e.convertMethodCallsToHtml(line)})).map((function(line){return e.convertVariablesAndKeywordToHtml(line)})):this.lines}}},c=r(37),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"code"},[r("ul",{staticClass:"center"},e._l(e.getLines,(function(line,t){return r("li",{key:t},[r("span",[r("pre",{staticClass:"inline-block ml-2 mr-6",domProps:{innerHTML:e._s(line)}})])])})),0)])}),[],!1,null,null,null);t.default=component.exports},249:function(e,t,r){"use strict";r.r(t);var n=r(238),o=r(237),l={components:{PageFooter:r(236).default,CodePhp:o.default,Logo:n.default},head:function(){return{title:"Headers - Quillstack",link:[{rel:"icon",type:"image/x-icon",href:this.darkMode?"/dark-favicon.svg":"/favicon.svg"}]}},computed:{darkMode:function(){return"dark"===this.$colorMode.preference},photoUrl:function(){return this.darkMode?"https://unsplash.com/@nahilnaseer":"https://unsplash.com/@chuttersnap"},photoName:function(){return this.darkMode?"Nahil Naseer":"CHUTTERSNAP"}},data:function(){return{installation:["composer require quillstack/header-bag"]}}},c=r(37),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("logo"),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"center"},[r("div",{ref:"toc",staticClass:"toc list"},[r("ul",[r("li",[r("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#installation",expression:"'#installation'"}],attrs:{href:"#"}},[e._v("\n                        Installation\n                    ")])])])])]),e._v(" "),r("div",{staticClass:"center"},[r("h2",{attrs:{id:"installation"}},[e._v("\n            Installation\n            "),r("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#installation",expression:"'#installation'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),e._m(1)]),e._v(" "),r("code-php",{attrs:{colors:!1,lines:e.installation}}),e._v(" "),r("page-footer",{attrs:{"photo-by-name":e.photoName,"photo-by-url":e.photoUrl}})],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dark:bg-image-dark-headers bg-image-headers hero bg-center"},[r("div",{staticClass:"center"},[r("h1",{staticClass:"dark:bg-green-700 bg-green-100"},[e._v("\n                Headers\n            ")]),e._v(" "),r("div",{staticClass:"intro",attrs:{id:"intro"}},[r("p",[e._v("\n                    A simple solution to use headers according to PSR-7. You can install this library, if you need to\n                    use headers in your project. This implementation can be used in HTTP requests and responses.\n                    "),r("span",{attrs:{id:"toc"}})])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"before-code"},[e._v("\n            To install Quillstack Headers package, run the standard command using "),r("em",[e._v("Composer")]),e._v(":\n        ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Logo:r(238).default,CodePhp:r(237).default,PageFooter:r(236).default})}}]);