<template>
    <main>
        <logo/>
        <div class="bg-image-index dark:bg-image-dark-index hero bg-center">
            <div class="center">
                <h1 class="dark:bg-green-800 bg-red-300">
                    The API Framework
                </h1>

                <div class="intro" id="intro">
                    <p>
                        Quillstack is a group of components you can use separately or combine them into the framework.
                        The main goal was to create the packages which will be fast and simple without any magic features.
                        <span id="toc"></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="toc list" ref="toc">
                <ul>
                    <li><nuxt-link to="/di/">Dependency Injection Container</nuxt-link></li>
                    <li><nuxt-link to="/dotenv/">Dotenv</nuxt-link></li>
                    <li><nuxt-link to="/storage/">Storage</nuxt-link></li>
                </ul>
            </div>
        </div>
        <page-footer :photo-by-url="photoUrl" :photo-by-name="photoName"/>
    </main>
</template>

<script>
import Logo from "../components/Logo";
import PageFooter from "../components/PageFooter";

export default {
    components: {PageFooter, Logo},
    head() {
        return {
            htmlAttrs: {
                class: this.darkMode ? 'dark' : ''
            },
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
            return this.$store.state.mode.dark;
        },
        photoUrl () {
            return this.darkMode ? "https://unsplash.com/@sseeker" : "https://unsplash.com/@lauraadaiphoto";
        },
        photoName () {
            return this.darkMode ? "Stormseeker" : "laura adai";
        }
    }
}
</script>
