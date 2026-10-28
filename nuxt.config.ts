import tailwindcss from '@tailwindcss/vite'

const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || process.env.CF_PAGES_URL || 'http://localhost:3000').replace(/\/$/, '')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: { preset: 'static' },

  modules: ['@nuxtjs/i18n', '@nuxt/fonts'],

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext', 'cyrillic'],
    },
    families: [
      { name: 'Outfit', provider: 'google', global: true },
      { name: 'Onest', provider: 'google', global: true },
    ],
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
      meta: [{ name: 'theme-color', content: '#12324A' }],
    },
  },

  i18n: {
    baseUrl: siteUrl,
    defaultLocale: 'me',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'me', language: 'sr-Latn-ME', name: 'Crnogorski', file: 'me.json' },
      { code: 'ru', language: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'en', language: 'en', name: 'English', file: 'en.json' },
    ],
  },

  runtimeConfig: {
    public: {
      siteUrl,
      indexable: false,
      supabaseUrl: '',
      supabaseKey: '',
    },
  },
})
