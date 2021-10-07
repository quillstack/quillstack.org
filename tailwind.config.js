module.exports = {
    darkMode: 'class',
    mode: 'jit',
    purge: [
        './docs/*.html',
        './pages/*.{js,jsx,ts,tsx,vue}',
        './components/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                'transparent': 'rgba(255, 255, 255, 0.75)',
                'dark-transparent': 'rgba(0, 0, 0, 0.75)'
            },
            backgroundImage: {
                'image-di': "url('@/assets/images/di.jpg')",
                'image-dark-di': "url('@/assets/images/dark-di.jpg')",
                'image-headers': "url('@/assets/images/headers.jpg')",
                'image-dark-headers': "url('@/assets/images/dark-headers.jpg')",
                'image-index': "url('@/assets/images/index.jpg')",
                'image-dark-index': "url('@/assets/images/dark-index.jpg')",
                'image-dotenv': "url('@/assets/images/dotenv.jpg')",
                'image-dark-dotenv': "url('@/assets/images/dark-dotenv.jpg')",
                'image-storage': "url('@/assets/images/storage.jpg')",
                'image-dark-storage': "url('@/assets/images/dark-storage.jpg')",
                'image-logo': "url('@/static/favicon.svg')",
                'image-dark-logo': "url('@/static/dark-favicon.svg')",
                'image-night-mode': "url('@/static/night-mode.svg')"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
