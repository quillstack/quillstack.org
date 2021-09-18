<template>
    <headroom>
        <div class="logo-bg">
            <nuxt-link to="/" class="logo" id="logo">
                <div class="center flex">
                    <div class="bg-image-logo dark:bg-image-dark-logo bg-no-repeat bg-center w-[30px] block"
                         width="30px"
                         height="30px">
                    </div>
                    <div class="quillstack">Quillstack</div>
                </div>
            </nuxt-link>
            <div class="switch select-none" @click="switchColor()">
                <span v-if="darkMode">☀️</span>
                <span v-else>🌙️</span>
            </div>
        </div>
    </headroom>
</template>

<script>
import { headroom } from 'vue-headroom';

export default {
    name: "Logo",
    components: {
        headroom
    },
    methods: {
        switchColor () {
            this.$colorMode.preference = this.darkMode ? 'light' : 'dark';
        }
    },
    computed: {
        darkMode () {
            return this.$colorMode.preference === 'dark';
        }
    }
}
</script>
