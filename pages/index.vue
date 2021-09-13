<template>
    <main>
        <logo/>
        <div class="center">
            <h1>
                The API Framework
            </h1>

            <p class="before-code">
                Quillstack is a group of components you can use separately or combine them into the framework.
                The main goal was to create the packages which will be fast and simple without any magic features.
            </p>
            <ul class="list-disc mt-5 px-10">
                <li><a href="/di/">Dependency Injection Container</a></li>
            </ul>
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
