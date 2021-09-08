<template>
    <main>
        <logo/>
        <div class="center">
            <h1>
                Dependency Injection Container
            </h1>

            <p>
                QuillStack DI is the dependency injection container based on PSR-11: Container interface. The library
                was built with the main goal: to be fast!
            </p>

            <div class="toc">
                <ul>
                    <li>
                        What is a DI Container?
                        <ol>
                            <li>The Repository-Service Pattern</li>
                            <li>MVC Pattern</li>
                        </ol>
                    </li>
                    <li>
                        Installation
                    </li>
                    <li>
                        Usage
                        <ol>
                            <li>Simple usage</li>
                            <li>Dependencies based on interfaces</li>
                            <li>Dependencies with parameters</li>
                        </ol>
                    </li>
                </ul>
            </div>

            <h2>
                What is the DI Container?
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

            <h2>
                The Repository-Service Pattern
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
    </main>
</template>

<script>
import Logo from "../components/Logo";
import CodePhp from "../components/CodePhp";
export default {
    components: {CodePhp, Logo},
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
                "$media = $container->get(MediaController::class);"
            ],
            simpleUsage: [
                "<?php",
                "    ",
                "use QuillStack\\DI\\Container;",
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
            ]
        }
    }
}
</script>
