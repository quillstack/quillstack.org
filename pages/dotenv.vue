<template>
    <main>
        <logo/>
        <div class="bg-image-dotenv hero bg-top md:bg-center">
            <div class="center">
                <h1 class="bg-yellow-800">
                    Dotenv
                </h1>

                <div class="intro" id="intro">
                    <p>
                        The library for using .env files.
                        <span id="toc"></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="toc list" ref="toc">
                <ul>
                    <li>
                        <a href="#" v-scroll-to="'#when-to-use-dotenv'">
                            When to use Dotenv?
                        </a>
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
                    </li>
                </ul>
            </div>
        </div>
        <div class="center">
            <h2 id="when-to-use-dotenv">
                When to use Dotenv?
                <a class="anchor" href="#" v-scroll-to="'#when-to-use-dotenv'">¶</a>
            </h2>
            <p>
                The .env should be used for sensitive information like passwords, hosts, keys, credentials, and all
                other values that can be changed depending on the environment, e.g., debug mode settings or logs level.
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
            <p class="before-code">
                You can use Quillstack Dotenv package when you want to use .env files in your project. If you created
                the .env file in the root directory of your project:
            </p>
        </div>
        <code-php :colors="false" :lines="env"/>
        <div class="center">
            <p class="before-code">
                You can load this .env file in your application:
            </p>
        </div>
        <code-php :lines="dotenv"/>
        <div class="center">
            <p class="before-code">
                Every time you need to know if your application works in debug mode, you can check it using this
                helper function:
            </p>
        </div>
        <code-php :lines="debug"/>
        <div class="center">
            <p class="before-code">
                You can also define a default value depending on the context:
            </p>
        </div>
        <code-php :lines="debugDefault"/>
        <page-footer photo-by-name="Claire Brear" photo-by-url="https://unsplash.com/@_bearista1"/>
    </main>
</template>

<script>
import Logo from "../components/Logo";
import CodePhp from "../components/CodePhp";
import PageFooter from "../components/PageFooter";
export default {
    components: {PageFooter, CodePhp, Logo},
    head: {
        title: 'Dotenv - Quillstack'
    },
    data() {
        return {
            composer: [
                "composer require quillstack/dotenv",
            ],
            env: [
                "APP_DEBUG=true",
            ],
            dotenv: [
                "$dotenv = new Dotenv('.env');",
                "$dotenv->load();"
            ],
            debug: [
                "if (env('APP_DEBUG')) {",
                "    echo 'Debug mode';",
                "}",
            ],
            debugDefault: [
                "if (env('APP_DEBUG', false)) {",
                "    echo 'Debug mode';",
                "}",
            ]
        }
    }
}
</script>
