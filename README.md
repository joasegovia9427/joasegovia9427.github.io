# joasegovia9427.github.io

Joaquin Segovia's portfolio and personal profile web

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ⚡ Lighthouse & performance

- **Measure production, not dev.** Run `npm run build && npm run preview` and audit the preview URL (e.g. `http://localhost:4321`). Dev mode adds latency and no compression.
- **Compression:** The dev server does not gzip. Deployed sites (e.g. GitHub Pages) typically serve with gzip/brotli, which addresses “No compression applied” in production.
- **Redirects:** Use direct URLs (e.g. no trailing-slash redirects) where possible so the first request isn’t a redirect.
- **Critical path:** View Transitions (ClientRouter) were removed from the layout to shorten the network dependency chain and improve LCP; the initial page load still uses the same blur-fade CSS animation.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
