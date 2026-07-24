# metalpromet.rs

## Tehnološki stek

### Frontend

-   Nuxt 4.2 (SSR)
-   Vue 3
-   Vuetify 3
-   Tailwind CSS
-   SCSS
-   Pinia
-   VueUse
-   Vue Router

### SEO

-   @nuxtjs/seo
-   Sitemap
-   Robots
-   Canonical URL
-   Nuxt Image
-   Nuxt Fonts
-   i18n (SR Latinica, SR Ćirilica, EN)

### Bezbednost

-   nuxt-security
-   Security HTTP zaglavlja
-   SRI/CSP podrška

### Ostalo

-   GraphQL
-   Firebase
-   Chart.js
-   PhotoSwipe
-   Plyr
-   RxJS

------------------------------------------------------------------------

## Render metoda

**Glavna metoda:** Server-Side Rendering (SSR)

Konfiguracija: - `ssr: true` - Nitro preset: `static` - Prerender
produkcionih ruta - Statički eksport (`nuxt generate`) - Payload
extraction - Kompresovani statički resursi - Automatski SEO metapodaci

### Build strategija

-   SSR + prerender
-   Static deployment (Nitro Static)
-   SEO optimizovan HTML
-   Cache za statičke assete
-   Manual code splitting (Firebase, Vuetify)

------------------------------------------------------------------------

## Razvoj

``` bash
npm install
npm run dev
```

## Produkcija

``` bash
npm run build
npm run generate
npm run preview
```

------------------------------------------------------------------------

## Node.js

-   Node.js \>= 22

------------------------------------------------------------------------

## Glavne karakteristike

-   ✅ SSR
-   ✅ Static prerender
-   ✅ SEO optimizacija
-   ✅ Višejezičnost
-   ✅ Vuetify UI
-   ✅ Tailwind CSS
-   ✅ TypeScript
-   ✅ Responsive dizajn
-   ✅ Security headers
