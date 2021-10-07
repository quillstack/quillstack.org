<template>
    <main>
        <logo/>
        <div class="dark:bg-image-dark-headers bg-image-headers hero bg-center">
            <div class="center">
                <h1 class="dark:bg-green-700 bg-green-100">
                    Headers
                </h1>

                <div class="intro" id="intro">
                    <p>
                        A simple solution to use headers according to PSR-7. You can install this library, if you need to
                        use headers in your project. This implementation can be used in HTTP requests and responses.
                        <span id="toc"></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="toc list" ref="toc">
                <ul>
                    <li>
                        <a href="#" v-scroll-to="'#installation'">
                            Installation
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="center">
            <h2 id="installation">
                Installation
                <a class="anchor" href="#" v-scroll-to="'#installation'">¶</a>
            </h2>
            <p class="before-code">
                To install Quillstack Headers package, run the standard command using <em>Composer</em>:
            </p>
        </div>
        <code-php :colors="false" :lines="installation"/>
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
            title: 'Headers - Quillstack',
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
            return this.darkMode ? "https://unsplash.com/@nahilnaseer" : "https://unsplash.com/@chuttersnap";
        },
        photoName () {
            return this.darkMode ? "Nahil Naseer" : "CHUTTERSNAP";
        }
    },
    data() {
        return {
            installation: [
                "composer require quillstack/header-bag",
            ]
        }
    }
}
</script>
