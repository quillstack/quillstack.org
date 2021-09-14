<template>
    <footer>
        <a href="/">
            &copy; 2021 <em>Quillstack</em>
        </a>

        <div v-if="photoByUrl">
            Photo by <a :href="photoByUrl" target="_blank">{{ photoByName }}</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: "PageFooter",
    props: {
        photoByUrl: {
            type: String,
            default: null
        },
        photoByName: {
            type: String,
            default: null
        }
    }
}
</script>
