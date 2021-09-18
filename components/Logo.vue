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
                <div v-if="darkMode" class="text-white"><IconLight width="16px" height="16px"/>️</div>
                <div v-else class="text-gray-100"><IconDark width="16px" height="16px"/></div>
            </div>
        </div>
    </headroom>
</template>

<script>
import { headroom } from 'vue-headroom';
import IconLight from '@/assets/icons/light.svg?inline';
import IconDark from '@/assets/icons/dark.svg?inline';

export default {
    name: "Logo",
    components: {
        headroom,
        IconLight,
        IconDark,
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
