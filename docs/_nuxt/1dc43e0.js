(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{226:function(t,o,e){"use strict";e.r(o);var l={name:"PageFooter",props:{photoByUrl:{type:String,default:null},photoByName:{type:String,default:null}},data:function(){return{scrollToClass:"opacity-0"}},methods:{handleScroll:function(){window.scrollY>500?this.scrollToClass="opacity-100":this.scrollToClass="opacity-0"}},mounted:function(){this.scrollToClass="opacity-0",window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},r=e(35),component=Object(r.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("footer",[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#scroll-top",expression:"'#scroll-top'"}],staticClass:"transition duration-500 ease-in-out shadow border text-2xl border-green-700 flex flex-wrap content-center bg-green-800 rounded-full fixed bottom-10 right-10 w-12 h-12 text-center text-white",class:t.scrollToClass,attrs:{href:"#"}},[e("div",{staticClass:"mx-auto mb-1 text-green-300"},[t._v("↑")])]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[t._v("\n        © 2021 "),e("em",[t._v("Quillstack")])]),t._v(" "),t.photoByUrl?e("div",[t._v("\n        Photo by "),e("a",{attrs:{href:t.photoByUrl,target:"_blank"}},[t._v(t._s(t.photoByName))])]):t._e()],1)}),[],!1,null,null,null);o.default=component.exports}}]);