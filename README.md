# Lab Exercise: Convert a Vite+React Starter Project into a PWA

## 🎯 Objectives
- Guide learners through transforming a React starter project created with Vite into a Progressive Web Application (PWA).
- Focus on practical steps to enhance web applications with offline capabilities, app-like experiences, and installability.

## 📚 Prerequisites
- Familiarity with React, Vite, and basic command line operations.

## 🛠 Steps

1. **Install Vite PWA Plugin**: Add the PWA plugin to your project for integrating service workers and manifest files with `npm i vite-plugin-pwa -D`.

2. **Install PWA Assets Generator Plugin**: Generate PWA assets like icons and splash screens using `npm i @vite-pwa/assets-generator -D`.

3. **Configure Vite PWA Plugin**: Modify your `vite.config.js` or `vite.config.ts` to include the Vite PWA plugin configuration. Ensure the plugins array includes the PWA plugin settings with appropriate options for registration type, assets, and manifest configuration.

4. **Add NPM Script for Generating PWA Assets**: In `package.json`, add a script `"generate-pwa-assets": "pwa-assets-generator --preset minimal public/logo.svg"` to facilitate the assets generation process.

5. **Arrange Logo SVG Source File**: Use an SVG file, such as the Vite logo, as the source for generating PWA assets. Ensure you have a suitable logo.svg in your project's public directory.

6. **Generate PWA Assets**: Execute `npm run generate-pwa-assets` to populate your `public` directory with PWA assets, including icons and the web manifest file.

7. **Update index.html**: Add necessary `<link>` and `<meta>` tags in the `index.html` file to reference the new PWA assets, ensuring proper display and functionality across devices.

8. **Build App**: Bundle your app with `npm run build` and then preview it locally using `npm run preview` to see your PWA in action, complete with an install button in supported browsers.

9. **Validate with Lighthouse**: Use Chrome DevTools' Lighthouse to audit your app, confirming it meets PWA criteria. Adjust based on feedback until your app passes with flying colors.

## 🎉 Outcome
- Successfully transformed a Vite+React starter project into a PWA, making it installable, offline-ready, and app-like.
