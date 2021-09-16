<template>
    <footer>
        <a href="#" :class="scrollToClass" class="transition duration-500 ease-in-out shadow border text-2xl border-green-700 flex flex-wrap content-center bg-green-800 rounded-full fixed bottom-10 right-10 w-12 h-12 text-center text-white" v-scroll-to="'#toc'">
            <div class="mx-auto mb-1 text-green-300">&#8593;</div>
        </a>

        <nuxt-link to="/">
            &copy; 2021 <em>Quillstack</em>
        </nuxt-link>

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
    },
    data() {
        return {
            scrollToClass: 'opacity-0'
        };
    },
    methods: {
        handleScroll() {
            if (process.client) {
                if (window.scrollY > 500) {
                    this.scrollToClass = 'opacity-100';
                } else {
                    this.scrollToClass = 'opacity-0';
                }
            }
        }
    },
    mounted() {
        this.scrollToClass = 'opacity-0';

        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed() {
        if (process.client) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
}
</script>
