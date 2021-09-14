<template>
    <main>
        <logo/>
        <div class="bg-image-di hero">
            <div class="center">
                <h1>
                    The API Framework
                </h1>

                <div class="intro">
                    <p>
                        Quillstack is a group of components you can use separately or combine them into the framework.
                        The main goal was to create the packages which will be fast and simple without any magic features.
                    </p>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="toc list">
                <ul>
                    <li>
                        <a href="/di/">Dependency Injection Container</a>
                    </li>
                </ul>
            </div>
        </div>
        <page-footer/>
    </main>
</template>

<script>
import Logo from "../components/Logo";
import PageFooter from "../components/PageFooter";
export default {
    components: {PageFooter, Logo}
}
</script>
