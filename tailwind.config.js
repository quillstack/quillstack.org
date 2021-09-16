module.exports = {
    mode: 'jit',
    purge: [
        './docs/*.html',
        './pages/*.{js,jsx,ts,tsx,vue}',
        './components/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'image-di': "url('@/assets/images/di.jpg')",
                'image-index': "url('@/assets/images/index.jpg')",
                'image-dotenv': "url('@/assets/images/dotenv.jpg')"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
