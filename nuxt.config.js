import webpack from 'webpack';

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Quillstack, The API Framework',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.svg'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.scss'
    ],

    redirect: [
        {
            // eslint-disable-next-line
            from: '^.*(?<!\/)$',
            to: (from, req) => req.url + '/',
            statusCode: 301
        },
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        'plugins/vue-scroll.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/svg',
    ],

    colorMode: {
        classSuffix: ""
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    generate: {
        dir: 'docs'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
