import ElementPlus from 'unplugin-element-plus/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/style/index.css"],
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
            severProtocol: process.env.NUXT_PUBLIC_SEVER_PROTOCOL,
            severDomain: process.env.NUXT_PUBLIC_SEVER_DOMAIN,
            severPort: process.env.NUXT_PUBLIC_SEVER_PORT
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
