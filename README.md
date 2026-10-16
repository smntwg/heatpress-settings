# heatpress-settings.co.uk

UK heat press settings for hobby and small-batch crafters. Celsius first, Fahrenheit in brackets. Plain static HTML, CSS and JavaScript. Cloudflare Pages can publish the repository root with no build command.

Free cheat sheet: `node scripts/cheatsheet.mjs` rebuilds `downloads/heat-press-settings-cheat-sheet.pdf` from the lookup data. The signup box posts to `functions/api/subscribe.js`, which needs the Cloudflare Pages secret `RESEND_API_KEY`.

The lookup data lives in `data/settings.js`. Guides are generated into folders of `index.html` by `node scripts/build.mjs` (Node, no packages). Commit the generated HTML with the source so the deploy does not need a build.

Settings are starting points from named manufacturer charts, including Siser, Garment Films, Xpres and Sawgrass. They are not a substitute for the instructions packed with a film or blank.
