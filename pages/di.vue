<template>
    <main>
        <logo/>
        <div class="bg-image-di dark:bg-image-dark-di hero bg-center">
            <div class="center">
                <h1 class="dark:bg-pink-900 bg-green-500">
                    Dependency Injection Container
                </h1>

                <div class="intro" id="intro">
                    <p>
                        Quillstack DI is the dependency injection container based on PSR-11: Container interface. The library
                        was built with the main goal: to be fast!
                        <span id="toc"></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="toc list" ref="toc">
                <ul>
                    <li>
                        <a href="#" v-scroll-to="'#what-is-a-di-container'">
                            What is a DI Container?
                        </a>
                        <ol>
                            <li>
                                <a href="#" v-scroll-to="'#repository-service-pattern'">
                                    The Repository-Service Pattern
                                </a>
                            </li>
                            <li>
                                <a href="#" v-scroll-to="'#mvc-pattern'">
                                    MVC Pattern
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <a href="#" v-scroll-to="'#installation'">
                            Installation
                        </a>
                    </li>
                    <li>
                        <a href="#" v-scroll-to="'#usage'">
                            Usage
                        </a>
                        <ol>
                            <li>
                                <a href="#" v-scroll-to="'#simple-usage'">
                                    Simple usage
                                </a>
                            </li>
                            <li>
                                <a href="#" v-scroll-to="'#dependencies-based-on-interfaces'">
                                    Dependencies based on interfaces
                                </a>
                            </li>
                            <li>
                                <a href="#" v-scroll-to="'#dependencies-with-parameters'">
                                    Dependencies with parameters
                                </a>
                            </li>
                            <li>
                                <a href="#" v-scroll-to="'#dependencies-as-objects'">
                                    Dependencies as objects
                                </a>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
        <div class="center">
            <h2 id="what-is-a-di-container">
                What is the DI Container?
                <a class="anchor" href="#" v-scroll-to="'#what-is-a-di-container'">¶</a>
            </h2>
            <p class="before-code">
                Every time you need a create a new instance of some class, you use the keyword <em>new</em>, like here:
            </p>

        </div>
        <code-php :lines="newDog"/>
        <div class="center">
            <p>
                In our example the string parameter <em>Alfie</em>, which is a lovely name for a dog, is a dependency
                we need to know when we're creating a new <em>Dog</em> object.
            </p>
            <p>
                Of course our example is very simple. Life brings us more difficult problems to solve.
            </p>

        </div>
        <hr/>
        <div class="center">
            <h2 id="repository-service-pattern">
                The Repository-Service Pattern
                <a class="anchor" href="#" v-scroll-to="'#repository-service-pattern'">¶</a>
            </h2>

            <p>
                One of the most popular design patterns is the Repository-Service pattern. More complex systems requires layers of abstraction, to keep the code maintainable and easy to understand, learn, and extend. This pattern is a good example of the usage for containers.
            </p>
            <p>
                The Repository-Service pattern allows you to separate two layers from the rest of you application.
            </p>
            <p>
                Services provide some business logic and can be used e.g. in Controllers or other Services.
            </p>
            <p>
                Repositories are the data access layer and can connect e.g. to the database, and should be used only in Services.
            </p>
            <p class="before-code">
                In that way we can end up with a lot of dependencies, usually injected via constructors:
            </p>
        </div>
        <code-php :lines="lotOfDependencies"/>
        <div class="center">
            <p>
                Do we want to remember all these classes when we need to have an instance of the Media Service? No!
            </p>
            <p class="before-code">
                This is a moment when a container helps us to sort it out and change it to this:
            </p>
        </div>
        <code-php :lines="mediaService"/>
        <div class="center">
            <p>
                So much better! And there's no magic. The dependency injection container checks every parameter
                of the given class and create a new instance of required objects. If these classes are dependent
                on other objects, the DI Container also creates them.
            </p>
            <p>
                The implementation of this kind of library is very often based on recursion.
            </p>
        </div>
        <hr/>
        <div class="center">
            <h2 id="mvc-pattern">
                MVC Pattern
                <a class="anchor" href="#" v-scroll-to="'#mvc-pattern'">¶</a>
            </h2>
            <p class="before-code">
                Containers are often used in MVC frameworks. The first initialized class is a Controller,
                where we can inject some dependencies, usually services:
            </p>
        </div>
        <code-php :lines="mvcDependencies"/>
        <div class="center">
            <p class="before-code">
                Without a DI Container our life is hard. We can easily improve it:
            </p>
        </div>
        <code-php :lines="mvcContainer"/>
        <div class="center">
            <p>
                All of this work is done by framework for us, so we don't have to worry about it.
            </p>
        </div>
        <hr/>
        <div class="center">
            <h2 id="installation">
                Installation
                <a class="anchor" href="#" v-scroll-to="'#installation'">¶</a>
            </h2>
            <p class="before-code">
                To install this package, run the standard command using <em>Composer</em>:
            </p>
        </div>
        <code-php :colors="false" :lines="composer"/>
        <div class="center">
            <p>
                The package will be ready to use after that.
            </p>
        </div>
        <hr/>
        <div class="center">
            <h2 id="usage">
                Usage
                <a class="anchor" href="#" v-scroll-to="'#usage'">¶</a>
            </h2>
            <p>
                You can use Quillstack DI when you want:
            </p>
            <div class="list">
                <ol>
                    <li>To have a simple and fast DI container.</li>
                    <li>To define dependencies based on interfaces.</li>
                    <li>Define parameters e.g. credentials for a database in Database class.</li>
                </ol>
            </div>
            <h3 id="simple-usage">
                Simple usage
                <a class="anchor" href="#" v-scroll-to="'#simple-usage'">¶</a>
            </h3>
            <p class="before-code">
                You can easily start using a DI Container:
            </p>
        </div>
        <code-php :lines="simpleUsage"/>
        <div class="center">
            <p>
                This code creates an instance of the container class. The container creates every class
                with get method, in our case it will be ExampleController.
            </p>
            <h3 id="dependencies-based-on-interfaces">
                Dependencies based on interfaces
                <a class="anchor" href="#" v-scroll-to="'#dependencies-based-on-interfaces'">¶</a>
            </h3>
            <p class="before-code">
                If you want to define which class should be loaded based on an interface, you can easily do that:
            </p>
        </div>
        <code-php :lines="interfaces"/>
        <div class="center">
            <p>
                When you create a new container, you can define a configuration of interfaces and class
                which should be use when these interfaces are called.
            </p>
            <p>
                In this example everytime when LoggerInterface will be used as a dependency, an object of
                Logger class will be injected.
            </p>
            <p>
                It's very useful when you want to use an implementation of some interface, but you want to
                keep your code open to changes of this implementation in the future. If you decide to do that,
                you'll have to change just one line.
            </p>
            <h3 id="dependencies-with-parameters">
                Dependencies with parameters
                <a class="anchor" href="#" v-scroll-to="'#dependencies-with-parameters'">¶</a>
            </h3>
            <p class="before-code">
                If some of your classes require parameters, define them as an array passed on the second
                parameter to the container:
            </p>
        </div>
        <code-php :lines="parameters"/>
        <div class="center">
            <p>
                Of course you can take the value of the hostname from the configuration files.
            </p>
        </div>
        <div class="center">
            <h3 id="dependencies-as-objects">
                Dependencies as objects
                <a class="anchor" href="#" v-scroll-to="'#dependencies-as-objects'">¶</a>
            </h3>
            <p class="before-code">
                In this example whenever new class of LoggerInterface will be required as a dependency, a previously
                defined object will be used. This object can be created once in a bootstrap file, and used in the
                entire application:
            </p>
        </div>
        <code-php :lines="objects"/>
        <page-footer :photo-by-name="photoName" :photo-by-url="photoUrl"/>
    </main>
</template>

<script>
import Logo from "../components/Logo";
import CodePhp from "../components/CodePhp";
import PageFooter from "../components/PageFooter";
export default {
    components: {PageFooter, CodePhp, Logo},
    head() {
        return {
            title: 'Dependency Injection - Quillstack',
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: this.darkMode ? '/dark-favicon.svg' : '/favicon.svg'
                },
            ]
        }
    },
    computed: {
        darkMode () {
            return this.$colorMode.preference === 'dark';
        },
        photoUrl () {
            return this.darkMode ? "https://unsplash.com/@hosseiin" : "https://unsplash.com/@amyjoyhumphries";
        },
        photoName () {
            return this.darkMode ? "Hossein Hosseini" : "Amy Humphries";
        }
    },
    data() {
        return {
            newDog: [
                "$dog = new Dog('Alfie');"
            ],
            lotOfDependencies: [
                "$media = new MediaService(",
                "    new Logger(), new MediaRepository(",
                "        new Database(), new Logger()",
                "    )",
                ");"
            ],
            mediaService: [
                "$media = $container->get(MediaService::class);"
            ],
            mvcDependencies: [
                "new MediaController(",
                "    new MediaService(",
                "        new Logger(), new MediaRepository(",
                "            new Database(), new Logger()",
                "        )",
                "    )",
                ");"
            ],
            mvcContainer: [
                "$controller = $container->get(MediaController::class);"
            ],
            composer: [
                "composer require quillstack/di"
            ],
            simpleUsage: [
                "<?php",
                "    ",
                "use Quillstack\\DI\\Container;",
                "    ",
                "require __DIR__ . '/../vendor/autoload.php';",
                "    ",
                "$container = new Container();",
                "$controller = $container->get(ExampleController::class);"
            ],
            interfaces: [
                "$container = new Container([",
                "    LoggerInterface::class => Logger::class,",
                "]);"
            ],
            parameters: [
                "$container = new Container([",
                "    Database::class => [",
                "        'hostname' => 'localhost',",
                "    ],",
                "]);"
            ],
            objects: [
                "$handler = new StreamHandler('var/app.log');",
                "$logger = new Logger('name');",
                "$logger->pushHandler($handler);",
                "",
                "$container = new Container([",
                "    LoggerInterface::class => $logger,",
                "]);"
            ]
        }
    }
}
</script>
