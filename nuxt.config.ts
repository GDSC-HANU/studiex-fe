import ElementPlus from 'unplugin-element-plus/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore']
            }
        ]
    ],
    runtimeConfig: {
        public: {
            severProtocol: '',
            severDomain: '',
            severPort: ''
        }
    },
    build: {
        transpile: ['element-plus/es'],
    },
    vite: {
        plugins: [ElementPlus()],
    },
    components: true,
})
