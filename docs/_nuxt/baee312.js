(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4,5],{222:function(e,n,t){"use strict";t.r(n);var r=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("a",{staticClass:"logo",attrs:{href:"/"}},[r("div",{staticClass:"center flex"},[r("img",{staticClass:"w-[30px] block",attrs:{src:t(224),width:"30px",height:"30px"}}),e._v(" "),r("div",{staticClass:"quillstack"},[e._v("Quillstack")])])])}],o={name:"Logo"},c=t(35),component=Object(c.a)(o,(function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)}),r,!1,null,null,null);n.default=component.exports},223:function(e,n,t){"use strict";t.r(n);var r={name:"PageFooter"},o=t(35),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",[t("a",{attrs:{href:"/"}},[e._v("\n        © 2021 "),t("em",[e._v("Quillstack")]),t("br"),e._v("\n        Photo by "),t("a",{attrs:{href:"https://unsplash.com/@hosseiin",target:"_blank"}},[e._v("Hossein Hosseini")])])])}],!1,null,null,null);n.default=component.exports},224:function(e,n,t){e.exports=t.p+"img/favicon.1f57192.svg"},225:function(e,n,t){"use strict";t.r(n);t(46),t(160),t(36),t(116),t(44),t(45),t(60),t(159),t(86),t(85);var r=t(226),o=t.n(r),c={name:"CodePhp",props:{lines:{type:Array,required:!0},noColors:{type:Boolean,default:!1}},data:function(){return{markers:{class:"💥",variable:"💧",string:"💣",keyword:"⚽",char:"✅",method:"🔮"},keywords:["new","class","require","<?php","use"],const:["__DIR__"],chars:["(",")",";","=",",",":","-",">","<","?",".","[","]"]}},methods:{markClassNames:function(line){var e=this,n=!1;return line.split(" ").map((function(t){return n?(n=!1,e.markers.class+t+e.markers.class):("new"===t&&(n=!0),t)})).join(" ")},markStrings:function(line){var e=this,n=!1,t="'";return line.includes('"')&&(t='"'),line.split(/(?='|")/).map((function(r){var o=r.charAt(0),c=r.replace(t,"");return n?(n=!1,c):'"'===o||"'"===o?(n=!0,e.markers.string+t+c+t+e.markers.string):c})).join("")},markVariablesAndKeywords:function(line){var e=this;return line.split(" ").map((function(n){return"$"===n.charAt(0)||e.const.includes(n)?e.markers.variable+n+e.markers.variable:e.keywords.includes(n)?e.markers.keyword+n+e.markers.keyword:n})).join(" ")},markSpecialCharacters:function(line){var e=this;if(this.keywords.includes(line))return line;var n=!1;return line.includes('"')&&'"',line.split("").map((function(t){return'"'!==t&&"'"!==t||(n=!n),n?t:e.chars.includes(t)?e.markers.char+t+e.markers.char:t})).join("")},markMethodCall:function(line){var e=new RegExp("->(.+)\\(","g"),marker=this.markers.method;return o.a.replace(line,e,marker+"->$1("+marker)},markImports:function(line){var marker=this.markers.class;return o.a.replace(line,/use (.*?);/g,"use "+marker+"$1"+marker+";")},markClassNameStatic:function(line){var marker=this.markers.class,e=this.markers.keyword;return o.a.replace(line,/([_a-zA-Z]+)::class/g,marker+"$1::"+marker+e+"class"+e)},getMarkerToRegexp:function(marker){return"".concat(marker,"([^").concat(marker,"]*)").concat(marker)},getMarkerToClassRegexp:function(marker){return"".concat(marker,"(.*?)").concat(marker)},convertMethodCallsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.method),n=new RegExp(e,"g");return o.a.replace(line,n,'<span class="method">$1</span>')},convertVariablesAndKeywordToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.variable),n=new RegExp(e,"g");return o.a.replace(line,n,'<span class="variable">$1</span>')},convertClassNamesToHtml:function(line){var e=this.getMarkerToClassRegexp(this.markers.class),n=new RegExp(e,"g");return o.a.replace(line,n,'<span class="class">$1</span>')},convertCharsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.char),n=new RegExp(e,"g");return o.a.replace(line,n,'<span class="char">$1</span>')},convertKeywordsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.keyword),n=new RegExp(e,"g");return o.a.replace(line,n,'<span class="keyword">$1</span>')},convertStringsToHtml:function(line){var e=this.getMarkerToRegexp(this.markers.string),n=new RegExp(e,"g");return o.a.replace(line,n,'<span class="string">$1</span>')},escapeHtml:function(line){return line.replace("<","&lt;")}},computed:{getLines:function(){var e=this;return this.noColors?this.lines:this.lines.map((function(line){return e.markClassNameStatic(line)})).map((function(line){return e.markClassNames(line)})).map((function(line){return e.markImports(line)})).map((function(line){return e.markMethodCall(line)})).map((function(line){return e.markStrings(line)})).map((function(line){return e.markSpecialCharacters(line)})).map((function(line){return e.markVariablesAndKeywords(line)})).map((function(line){return e.escapeHtml(line)})).map((function(line){return e.convertClassNamesToHtml(line)})).map((function(line){return e.convertCharsToHtml(line)})).map((function(line){return e.convertKeywordsToHtml(line)})).map((function(line){return e.convertStringsToHtml(line)})).map((function(line){return e.convertMethodCallsToHtml(line)})).map((function(line){return e.convertVariablesAndKeywordToHtml(line)}))}}},l=t(35),component=Object(l.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"code"},[t("ul",{staticClass:"center"},e._l(e.getLines,(function(line,n){return t("li",{key:n},[t("span",[t("pre",{staticClass:"inline-block ml-2 mr-6",domProps:{innerHTML:e._s(line)}})])])})),0)])}),[],!1,null,null,null);n.default=component.exports},228:function(e,n,t){"use strict";t.r(n);var r=t(222),o=t(225),c={components:{PageFooter:t(223).default,CodePhp:o.default,Logo:r.default},data:function(){return{newDog:["$dog = new Dog('Alfie');"],lotOfDependencies:["$media = new MediaService(","    new Logger(), new MediaRepository(","        new Database(), new Logger()","    )",");"],mediaService:["$media = $container->get(MediaService::class);"],mvcDependencies:["new MediaController(","    new MediaService(","        new Logger(), new MediaRepository(","            new Database(), new Logger()","        )","    )",");"],mvcContainer:["$controller = $container->get(MediaController::class);"],composer:["composer require quillstack/di"],simpleUsage:["<?php","    ","use QuillStack\\DI\\Container;","    ","require __DIR__ . '/../vendor/autoload.php';","    ","$container = new Container();","$controller = $container->get(ExampleController::class);"],interfaces:["$container = new Container([","    LoggerInterface::class => Logger::class,","]);"],parameters:["$container = new Container([","    Database::class => [","        'hostname' => 'localhost',","    ],","]);"],objects:["$handler = new StreamHandler('var/app.log');","$logger = new Logger('name');","$logger->pushHandler($handler);","","$container = new Container([","    LoggerInterface::class => $logger,","]);"]}}},l=t(35),component=Object(l.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",[t("logo"),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),t("code-php",{attrs:{lines:e.newDog}}),e._v(" "),e._m(3),e._v(" "),t("hr"),e._v(" "),e._m(4),e._v(" "),t("code-php",{attrs:{lines:e.lotOfDependencies}}),e._v(" "),e._m(5),e._v(" "),t("code-php",{attrs:{lines:e.mediaService}}),e._v(" "),e._m(6),e._v(" "),t("hr"),e._v(" "),e._m(7),e._v(" "),t("code-php",{attrs:{lines:e.mvcDependencies}}),e._v(" "),e._m(8),e._v(" "),t("code-php",{attrs:{lines:e.mvcContainer}}),e._v(" "),e._m(9),e._v(" "),t("hr"),e._v(" "),e._m(10),e._v(" "),t("code-php",{attrs:{"no-colors":!0,lines:e.composer}}),e._v(" "),e._m(11),e._v(" "),t("hr"),e._v(" "),e._m(12),e._v(" "),t("code-php",{attrs:{lines:e.simpleUsage}}),e._v(" "),e._m(13),e._v(" "),t("code-php",{attrs:{lines:e.interfaces}}),e._v(" "),e._m(14),e._v(" "),t("code-php",{attrs:{lines:e.parameters}}),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),t("code-php",{attrs:{lines:e.objects}}),e._v(" "),t("page-footer")],1)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"bg-image-di hero"},[t("div",{staticClass:"center"},[t("h1",[e._v("\n                Dependency Injection Container\n            ")]),e._v(" "),t("div",{staticClass:"intro"},[t("p",[e._v("\n                    Quillstack DI is the dependency injection container based on PSR-11: Container interface. The library\n                    was built with the main goal: to be fast!\n                ")])])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("div",{staticClass:"toc list"},[t("ul",[t("li",[e._v("\n                    What is a DI Container?\n                    "),t("ol",[t("li",[e._v("The Repository-Service Pattern")]),e._v(" "),t("li",[e._v("MVC Pattern")])])]),e._v(" "),t("li",[e._v("\n                    Installation\n                ")]),e._v(" "),t("li",[e._v("\n                    Usage\n                    "),t("ol",[t("li",[e._v("Simple usage")]),e._v(" "),t("li",[e._v("Dependencies based on interfaces")]),e._v(" "),t("li",[e._v("Dependencies with parameters")]),e._v(" "),t("li",[e._v("Dependencies as objects")])])])])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("h2",[e._v("\n            What is the DI Container?\n        ")]),e._v(" "),t("p",{staticClass:"before-code"},[e._v("\n            Every time you need a create a new instance of some class, you use the keyword "),t("em",[e._v("new")]),e._v(", like here:\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("p",[e._v("\n            In our example the string parameter "),t("em",[e._v("Alfie")]),e._v(", which is a lovely name for a dog, is a dependency\n            we need to know when we're creating a new "),t("em",[e._v("Dog")]),e._v(" object.\n        ")]),e._v(" "),t("p",[e._v("\n            Of course our example is very simple. Life brings us more difficult problems to solve.\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("h2",[e._v("\n            The Repository-Service Pattern\n        ")]),e._v(" "),t("p",[e._v("\n            One of the most popular design patterns is the Repository-Service pattern. More complex systems requires layers of abstraction, to keep the code maintainable and easy to understand, learn, and extend. This pattern is a good example of the usage for containers.\n        ")]),e._v(" "),t("p",[e._v("\n            The Repository-Service pattern allows you to separate two layers from the rest of you application.\n        ")]),e._v(" "),t("p",[e._v("\n            Services provide some business logic and can be used e.g. in Controllers or other Services.\n        ")]),e._v(" "),t("p",[e._v("\n            Repositories are the data access layer and can connect e.g. to the database, and should be used only in Services.\n        ")]),e._v(" "),t("p",{staticClass:"before-code"},[e._v("\n            In that way we can end up with a lot of dependencies, usually injected via constructors:\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("p",[e._v("\n            Do we want to remember all these classes when we need to have an instance of the Media Service? No!\n        ")]),e._v(" "),t("p",{staticClass:"before-code"},[e._v("\n            This is a moment when a container helps us to sort it out and change it to this:\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("p",[e._v("\n            So much better! And there's no magic. The dependency injection container checks every parameter\n            of the given class and create a new instance of required objects. If these classes are dependent\n            on other objects, the DI Container also creates them.\n        ")]),e._v(" "),t("p",[e._v("\n            The implementation of this kind of library is very often based on recursion.\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("h2",[e._v("\n            MVC Pattern\n        ")]),e._v(" "),t("p",{staticClass:"before-code"},[e._v("\n            Containers are often used in MVC frameworks. The first initialized class is a Controller,\n            where we can inject some dependencies, usually services:\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("p",{staticClass:"before-code"},[e._v("\n            Without a DI Container our life is hard. We can easily improve it:\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("p",[e._v("\n            All of this work is done by framework for us, so we don't have to worry about it.\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("h2",[e._v("Installation")]),e._v(" "),t("p",{staticClass:"before-code"},[e._v("\n            To install this package, run the standard command using Composer:\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("p",[e._v("\n            The package will be ready to use after that.\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("h2",[e._v("Usage")]),e._v(" "),t("p",[e._v("\n            You can use QuillStack DI when you want:\n        ")]),e._v(" "),t("div",{staticClass:"list"},[t("ol",[t("li",[e._v("To have a simple and fast DI container.")]),e._v(" "),t("li",[e._v("To define dependencies based on interfaces.")]),e._v(" "),t("li",[e._v("Define parameters e.g. credentials for a database in Database class.")])])]),e._v(" "),t("h3",[e._v("Simple usage")]),e._v(" "),t("p",{staticClass:"before-code"},[e._v("\n            You can easily start using a DI Container:\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("p",[e._v("\n            This code creates an instance of the container class. The container creates every class\n            with get method, in our case it will be ExampleController.\n        ")]),e._v(" "),t("h3",[e._v("\n            Dependencies based on interfaces\n        ")]),e._v(" "),t("p",{staticClass:"before-code"},[e._v("\n            If you want to define which class should be loaded based on an interface, you can easily do that:\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("p",[e._v("\n            When you create a new container, you can define a configuration of interfaces and class\n            which should be use when these interfaces are called.\n        ")]),e._v(" "),t("p",[e._v("\n            In this example everytime when LoggerInterface will be used as a dependency, an object of\n            Logger class will be injected.\n        ")]),e._v(" "),t("p",[e._v("\n            It's very useful when you want to use an implementation of some interface, but you want to\n            keep your code open to changes of this implementation in the future. If you decide to do that,\n            you'll have to change just one line.\n        ")]),e._v(" "),t("h3",[e._v("\n            Dependencies with parameters\n        ")]),e._v(" "),t("p",{staticClass:"before-code"},[e._v("\n            If some of your classes require parameters, define them as an array passed on the second\n            parameter to the container:\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("p",[e._v("\n            Of course you can take the value of the hostname from the configuration files.\n        ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"center"},[t("h3",[e._v("\n            Dependencies as objects\n        ")]),e._v(" "),t("p",{staticClass:"before-code"},[e._v("\n            In this example whenever new class of LoggerInterface will be required as a dependency, a previously\n            defined object will be used. This object can be created once in a bootstrap file, and used in the\n            entire application:\n        ")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Logo:t(222).default,CodePhp:t(225).default,PageFooter:t(223).default})}}]);