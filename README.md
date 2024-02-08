# Lab Exercise: Create a PWA App of a Default React App Using Vite

## 🎯 Objectives

- Equip learners with the skills to transform a default React app created by Vite into a Progressive Web Application (PWA).
- Emphasize hands-on practice in employing modern web capabilities to build a high-quality, offline-first user experience.

## 📚 Prerequisites

- Basic understanding of React and familiarity with the Vite build tool.

## 🛠 Steps

1. **Set Up Your React App**: Use Vite to create a new React app. Run `npm create vite@latest` in your terminal.
2. **Install PWA Dependencies**: Add PWA plugins to your project by running `npm install workbox-core workbox-routing workbox-strategies workbox-webpack-plugin`.
3. **Configure Vite for PWA**: Integrate PWA support in `vite.config.js` using the `VitePWA` plugin. Update the config to include PWA options.
4. **Update Manifest**: Modify `public/manifest.json` to include icons, theme color, and start URL. Ensure it reflects your app's identity.
5. **Test Your PWA**: Use Lighthouse in Chrome DevTools to audit your app. Ensure it meets PWA criteria: installable, fast, reliable, and network independent.
6. **Deploy**: Choose a static site host like Netlify, Vercel, or GitHub Pages for deployment. Follow their process to get your PWA live.
7. **Register Service Worker**:(optional) Create a `service-worker.js` in your project root. Use Workbox to define caching strategies and precache assets.

## 🎉 Outcome

- A fully functional PWA based on a React app, ready to deliver an engaging, offline-capable user experience.
