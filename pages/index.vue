<template>
    <main>
        <logo/>
        <div class="bg-image-index hero">
            <div class="center">
                <h1 class="bg-green-800">
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
                    <li>
                        <nuxt-link to="/di/">Dependency Injection Container</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <page-footer photo-by-url="https://unsplash.com/@sseeker" photo-by-name="Stormseeker"/>
    </main>
</template>

<script>
import Logo from "../components/Logo";
import PageFooter from "../components/PageFooter";
export default {
    components: {PageFooter, Logo}
}
</script>
