(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4,5],{225:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"logo",attrs:{href:"/"}},[r("div",{staticClass:"center flex"},[r("img",{staticClass:"w-[30px] block",attrs:{src:n(227),width:"30px",height:"30px"}}),e._v(" "),r("div",{staticClass:"quillstack"},[e._v("Quillstack")])])])}],o={name:"Logo"},c=n(35),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),r,!1,null,null,null);t.default=component.exports},226:function(e,t,n){"use strict";n.r(t);var r={name:"PageFooter",props:{photoByUrl:{type:String,default:null},photoByName:{type:String,default:null}}},o=n(35),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[e._m(0),e._v(" "),e.photoByUrl?n("div",[e._v("\n        Photo by "),n("a",{attrs:{href:e.photoByUrl,target:"_blank"}},[e._v(e._s(e.photoByName))])]):e._e()])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"/"}},[e._v("\n        © 2021 "),n("em",[e._v("Quillstack")])])}],!1,null,null,null);t.default=component.exports},227:function(e,t,n){e.exports=n.p+"img/favicon.1f57192.svg"},228:function(e,t,n){"use strict";n.r(t);n(37),n(162),n(36),n(117),n(45),n(46),n(47),n(161),n(86),n(85);var r=n(229),o=n.n(r),c={name:"CodePhp",props:{lines:{type:Array,required:!0},noColors:{type:Boolean,default:!1}},data:function(){return{markers:{class:"💥",variable:"💧",string:"💣",keyword:"⚽",char:"✅",method:"🔮"},keywords:["new","class","require","<?php","use"],const:["__DIR__"],chars:["(",")",";","=",",",":","-",">","<","?",".","[","]"]}},methods:{markClassNames:function(line){var e=this,t=!1;return line.split(" ").map((function(n){return t?(t=!1,e.markers.class+n+e.markers.class):("new"===n&&(t=!0),n)})).join(" ")},markStrings:function(line){var e=this,t=!1,n="'";return line.includes('"')&&(n='"'),line.split(/(?='|")/).map((function(r){var o=r.charAt(0),c=r.replace(n,"");return t?(t=!1,c):'"'===o||"'"===o?(t=!0,e.markers.string+n+c+n+e.markers.string):c})).join("")},markVariablesAndKeywords:function(line){var e=this;return line.split(" ").map((function(t){return"$"===t.charAt(0)||e.const.includes(t)?e.markers.variable+t+e.markers.variable:e.keywords.includes(t)?e.markers.keyword+t+e.markers.keyword:t})).join(" ")},markSpecialCharacters:function(line){var e=this;if(this.keywords.includes(line))return line;var t=!1;return line.includes('"')&&'"',line.split("").map((function(n){return'"'!==n&&"'"!==n||(t=!t),t?n:e.chars.includes(n)?e.markers.char+n+e.markers.char:n})).join("")},markMethodCall:function(line){var e=new RegExp("->(.+)\\(","g"),marker=this.markers.method;return o.a.replace(line,e,marker+"->$1("+marker)},markImports:function(line){var marker=this.markers.class;return o.a.replace(line,/use (.*?);/g,"use "+marker+"$1"+marker+";")},markClassNameStatic:function(line){var marker=this.markers.class,e=this.markers.keyword;return o.a.replace(line,/([_a-zA-Z]+)::class/g,marker+"$1::"+marker+e+"class"+e)},getMarkerToRegexp:function(marker){return"".concat(marker,"([^").concat(marker,"]*)").concat(marker)},getMarkerToClassRegexp:function(marker){return"".concat(marker,"(.*?)").concat(marker)},convertMethodCallsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.method),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="method">$1</span>')},convertVariablesAndKeywordToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.variable),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="variable">$1</span>')},convertClassNamesToHtml:function(line){var e=this.getMarkerToClassRegexp(this.markers.class),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="class">$1</span>')},convertCharsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.char),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="char">$1</span>')},convertKeywordsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.keyword),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="keyword">$1</span>')},convertStringsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.string),t=new RegExp(e,"g");return o.a.replace(line,t,'<span class="string">$1</span>')},escapeHtml:function(line){return line.replace("<","&lt;")}},computed:{getLines:function(){var e=this;return this.noColors?this.lines:this.lines.map((function(line){return e.markClassNameStatic(line)})).map((function(line){return e.markClassNames(line)})).map((function(line){return e.markImports(line)})).map((function(line){return e.markMethodCall(line)})).map((function(line){return e.markStrings(line)})).map((function(line){return e.markSpecialCharacters(line)})).map((function(line){return e.markVariablesAndKeywords(line)})).map((function(line){return e.escapeHtml(line)})).map((function(line){return e.convertClassNamesToHtml(line)})).map((function(line){return e.convertCharsToHtml(line)})).map((function(line){return e.convertKeywordsToHtml(line)})).map((function(line){return e.convertStringsToHtml(line)})).map((function(line){return e.convertMethodCallsToHtml(line)})).map((function(line){return e.convertVariablesAndKeywordToHtml(line)}))}}},l=n(35),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code"},[n("ul",{staticClass:"center"},e._l(e.getLines,(function(line,t){return n("li",{key:t},[n("span",[n("pre",{staticClass:"inline-block ml-2 mr-6",domProps:{innerHTML:e._s(line)}})])])})),0)])}),[],!1,null,null,null);t.default=component.exports},231:function(e,t,n){"use strict";n.r(t);var r=n(225),o=n(228),c={components:{PageFooter:n(226).default,CodePhp:o.default,Logo:r.default},head:{title:"Dependency Injection - Quillstack"},data:function(){return{newDog:["$dog = new Dog('Alfie');"],lotOfDependencies:["$media = new MediaService(","    new Logger(), new MediaRepository(","        new Database(), new Logger()","    )",");"],mediaService:["$media = $container->get(MediaService::class);"],mvcDependencies:["new MediaController(","    new MediaService(","        new Logger(), new MediaRepository(","            new Database(), new Logger()","        )","    )",");"],mvcContainer:["$controller = $container->get(MediaController::class);"],composer:["composer require quillstack/di"],simpleUsage:["<?php","    ","use Quillstack\\DI\\Container;","    ","require __DIR__ . '/../vendor/autoload.php';","    ","$container = new Container();","$controller = $container->get(ExampleController::class);"],interfaces:["$container = new Container([","    LoggerInterface::class => Logger::class,","]);"],parameters:["$container = new Container([","    Database::class => [","        'hostname' => 'localhost',","    ],","]);"],objects:["$handler = new StreamHandler('var/app.log');","$logger = new Logger('name');","$logger->pushHandler($handler);","","$container = new Container([","    LoggerInterface::class => $logger,","]);"]}}},l=n(35),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("logo"),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"center"},[n("div",{staticClass:"toc list"},[n("ul",[n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#what-is-a-di-container",expression:"'#what-is-a-di-container'"}],attrs:{href:"#"}},[e._v("\n                        What is a DI Container?\n                    ")]),e._v(" "),n("ol",[n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#repository-service-pattern",expression:"'#repository-service-pattern'"}],attrs:{href:"#"}},[e._v("\n                                The Repository-Service Pattern\n                            ")])]),e._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#mvc-pattern",expression:"'#mvc-pattern'"}],attrs:{href:"#"}},[e._v("\n                                MVC Pattern\n                            ")])])])]),e._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#installation",expression:"'#installation'"}],attrs:{href:"#"}},[e._v("\n                        Installation\n                    ")])]),e._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#usage",expression:"'#usage'"}],attrs:{href:"#"}},[e._v("\n                        Usage\n                    ")]),e._v(" "),n("ol",[n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#simple-usage",expression:"'#simple-usage'"}],attrs:{href:"#"}},[e._v("\n                                Simple usage\n                            ")])]),e._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#dependencies-based-on-interfaces",expression:"'#dependencies-based-on-interfaces'"}],attrs:{href:"#"}},[e._v("\n                                Dependencies based on interfaces\n                            ")])]),e._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#dependencies-with-parameters",expression:"'#dependencies-with-parameters'"}],attrs:{href:"#"}},[e._v("\n                                Dependencies with parameters\n                            ")])]),e._v(" "),n("li",[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#dependencies-as-objects",expression:"'#dependencies-as-objects'"}],attrs:{href:"#"}},[e._v("\n                                Dependencies as objects\n                            ")])])])])])])]),e._v(" "),n("div",{staticClass:"center"},[n("h2",{attrs:{id:"what-is-a-di-container"}},[e._v("\n            What is the DI Container?\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#what-is-a-di-container",expression:"'#what-is-a-di-container'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),e._m(1)]),e._v(" "),n("code-php",{attrs:{lines:e.newDog}}),e._v(" "),e._m(2),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"center"},[n("h2",{attrs:{id:"repository-service-pattern"}},[e._v("\n            The Repository-Service Pattern\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#repository-service-pattern",expression:"'#repository-service-pattern'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",[e._v("\n            One of the most popular design patterns is the Repository-Service pattern. More complex systems requires layers of abstraction, to keep the code maintainable and easy to understand, learn, and extend. This pattern is a good example of the usage for containers.\n        ")]),e._v(" "),n("p",[e._v("\n            The Repository-Service pattern allows you to separate two layers from the rest of you application.\n        ")]),e._v(" "),n("p",[e._v("\n            Services provide some business logic and can be used e.g. in Controllers or other Services.\n        ")]),e._v(" "),n("p",[e._v("\n            Repositories are the data access layer and can connect e.g. to the database, and should be used only in Services.\n        ")]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            In that way we can end up with a lot of dependencies, usually injected via constructors:\n        ")])]),e._v(" "),n("code-php",{attrs:{lines:e.lotOfDependencies}}),e._v(" "),e._m(3),e._v(" "),n("code-php",{attrs:{lines:e.mediaService}}),e._v(" "),e._m(4),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"center"},[n("h2",{attrs:{id:"mvc-pattern"}},[e._v("\n            MVC Pattern\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#mvc-pattern",expression:"'#mvc-pattern'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            Containers are often used in MVC frameworks. The first initialized class is a Controller,\n            where we can inject some dependencies, usually services:\n        ")])]),e._v(" "),n("code-php",{attrs:{lines:e.mvcDependencies}}),e._v(" "),e._m(5),e._v(" "),n("code-php",{attrs:{lines:e.mvcContainer}}),e._v(" "),e._m(6),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"center"},[n("h2",{attrs:{id:"installation"}},[e._v("\n            Installation\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#installation",expression:"'#installation'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            To install this package, run the standard command using Composer:\n        ")])]),e._v(" "),n("code-php",{attrs:{"no-colors":!0,lines:e.composer}}),e._v(" "),e._m(7),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"center"},[n("h2",{attrs:{id:"usage"}},[e._v("\n            Usage\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#usage",expression:"'#usage'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",[e._v("\n            You can use Quillstack DI when you want:\n        ")]),e._v(" "),e._m(8),e._v(" "),n("h3",{attrs:{id:"simple-usage"}},[e._v("\n            Simple usage\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#simple-usage",expression:"'#simple-usage'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            You can easily start using a DI Container:\n        ")])]),e._v(" "),n("code-php",{attrs:{lines:e.simpleUsage}}),e._v(" "),n("div",{staticClass:"center"},[n("p",[e._v("\n            This code creates an instance of the container class. The container creates every class\n            with get method, in our case it will be ExampleController.\n        ")]),e._v(" "),n("h3",{attrs:{id:"dependencies-based-on-interfaces"}},[e._v("\n            Dependencies based on interfaces\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#dependencies-based-on-interfaces",expression:"'#dependencies-based-on-interfaces'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            If you want to define which class should be loaded based on an interface, you can easily do that:\n        ")])]),e._v(" "),n("code-php",{attrs:{lines:e.interfaces}}),e._v(" "),n("div",{staticClass:"center"},[n("p",[e._v("\n            When you create a new container, you can define a configuration of interfaces and class\n            which should be use when these interfaces are called.\n        ")]),e._v(" "),n("p",[e._v("\n            In this example everytime when LoggerInterface will be used as a dependency, an object of\n            Logger class will be injected.\n        ")]),e._v(" "),n("p",[e._v("\n            It's very useful when you want to use an implementation of some interface, but you want to\n            keep your code open to changes of this implementation in the future. If you decide to do that,\n            you'll have to change just one line.\n        ")]),e._v(" "),n("h3",{attrs:{id:"dependencies-with-parameters"}},[e._v("\n            Dependencies with parameters\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#dependencies-with-parameters",expression:"'#dependencies-with-parameters'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            If some of your classes require parameters, define them as an array passed on the second\n            parameter to the container:\n        ")])]),e._v(" "),n("code-php",{attrs:{lines:e.parameters}}),e._v(" "),e._m(9),e._v(" "),n("div",{staticClass:"center"},[n("h3",{attrs:{id:"dependencies-as-objects"}},[e._v("\n            Dependencies as objects\n            "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#dependencies-as-objects",expression:"'#dependencies-as-objects'"}],staticClass:"anchor",attrs:{href:"#"}},[e._v("¶")])]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            In this example whenever new class of LoggerInterface will be required as a dependency, a previously\n            defined object will be used. This object can be created once in a bootstrap file, and used in the\n            entire application:\n        ")])]),e._v(" "),n("code-php",{attrs:{lines:e.objects}}),e._v(" "),n("page-footer",{attrs:{"photo-by-name":"Hossein Hosseini","photo-by-url":"https://unsplash.com/@hosseiin"}})],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-image-di hero"},[n("div",{staticClass:"center"},[n("h1",{staticClass:"bg-pink-900"},[e._v("\n                Dependency Injection Container\n            ")]),e._v(" "),n("div",{staticClass:"intro"},[n("p",[e._v("\n                    Quillstack DI is the dependency injection container based on PSR-11: Container interface. The library\n                    was built with the main goal: to be fast!\n                ")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"before-code"},[e._v("\n            Every time you need a create a new instance of some class, you use the keyword "),n("em",[e._v("new")]),e._v(", like here:\n        ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",[e._v("\n            In our example the string parameter "),n("em",[e._v("Alfie")]),e._v(", which is a lovely name for a dog, is a dependency\n            we need to know when we're creating a new "),n("em",[e._v("Dog")]),e._v(" object.\n        ")]),e._v(" "),n("p",[e._v("\n            Of course our example is very simple. Life brings us more difficult problems to solve.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",[e._v("\n            Do we want to remember all these classes when we need to have an instance of the Media Service? No!\n        ")]),e._v(" "),n("p",{staticClass:"before-code"},[e._v("\n            This is a moment when a container helps us to sort it out and change it to this:\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",[e._v("\n            So much better! And there's no magic. The dependency injection container checks every parameter\n            of the given class and create a new instance of required objects. If these classes are dependent\n            on other objects, the DI Container also creates them.\n        ")]),e._v(" "),n("p",[e._v("\n            The implementation of this kind of library is very often based on recursion.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",{staticClass:"before-code"},[e._v("\n            Without a DI Container our life is hard. We can easily improve it:\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",[e._v("\n            All of this work is done by framework for us, so we don't have to worry about it.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",[e._v("\n            The package will be ready to use after that.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},[n("ol",[n("li",[e._v("To have a simple and fast DI container.")]),e._v(" "),n("li",[e._v("To define dependencies based on interfaces.")]),e._v(" "),n("li",[e._v("Define parameters e.g. credentials for a database in Database class.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[n("p",[e._v("\n            Of course you can take the value of the hostname from the configuration files.\n        ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Logo:n(225).default,CodePhp:n(228).default,PageFooter:n(226).default})}}]);