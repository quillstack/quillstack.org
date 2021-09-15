<template>
    <headroom>
        <nuxt-link to="/" class="logo">
            <div class="center flex">
                <img src="@/static/favicon.svg" class="w-[30px] block" width="30px" height="30px">
                <div class="quillstack">Quillstack</div>
            </div>
        </nuxt-link>
    </headroom>
</template>

<script>
import { headroom } from 'vue-headroom';
export default {
    name: "Logo",
    components: {
        headroom
    }
}
</script>
