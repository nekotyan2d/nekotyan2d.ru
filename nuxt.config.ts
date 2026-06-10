export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },

    modules: ["@nuxtjs/color-mode", "@nuxt/icon", "@nuxt/fonts"],

    colorMode: {
        dataValue: "theme",
        preference: "system",
        fallback: "dark",
    },

    fonts: {
        families: [{ name: "Inter", provider: "google", weights: [400, 500, 600] }],
    },

    css: ["~/assets/scss/main.scss"],

    app: {
        head: {
            htmlAttrs: {
                lang: "ru",
            },
            title: "Дмитрий Рычажков | Fullstack Developer",
            meta: [
                {
                    name: "description",
                    content:
                        "Fullstack-разработчик. Строю веб-интерфейсы и сервисы за ними — от UI до схемы базы. Проекты на Nuxt, Fastify, PostgreSQL и Go.",
                },
                { property: "og:type", content: "website" },
                { property: "og:url", content: "https://nekotyan2d.ru" },
                {
                    property: "og:title",
                    content: "Дмитрий Рычажков | Fullstack Developer",
                },
                {
                    property: "og:description",
                    content: "Строю веб-интерфейсы и сервисы за ними — от UI до схемы базы.",
                },
            ],
        },
    },
});
