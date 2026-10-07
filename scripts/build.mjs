import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { pages } from "./pages.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const origin = "https://heatpress-settings.co.uk";
const reviewed = "7 October 2026";

const context = { window: {}, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data/settings.js"), "utf8"), context);
const settings = context.window.HP_SETTINGS;

const nav = [
  {
    label: "Methods",
    links: [
      ["Standard HTV", "/methods/standard-htv/"],
      ["Glitter HTV", "/methods/glitter-htv/"],
      ["Flock HTV", "/methods/flock-htv/"],
      ["Stretch, metallic and holographic", "/methods/stretch-metallic-holographic-htv/"],
      ["Sublimation on polyester", "/methods/sublimation-polyester/"],
      ["Sublimation on mugs", "/methods/sublimation-mugs/"],
      ["Sublimation on hard blanks", "/methods/sublimation-hard-blanks/"],
      ["DTF transfers", "/methods/dtf/"]
    ]
  },
  {
    label: "Fabrics",
    links: [
      ["100% cotton", "/fabrics/cotton/"],
      ["Polyester", "/fabrics/polyester/"],
      ["Poly-cotton blends", "/fabrics/poly-cotton/"],
      ["Nylon", "/fabrics/nylon/"],
      ["Children's clothing and pyjamas", "/fabrics/childrens-clothing/"],
      ["Tote bags and canvas", "/fabrics/tote-bags/"]
    ]
  },
  {
    label: "Fixes",
    links: [
      ["Vinyl peeling or lifting", "/troubleshooting/vinyl-peeling/"],
      ["Scorch marks", "/troubleshooting/scorch-marks/"],
      ["Sublimation ghosting", "/troubleshooting/sublimation-ghosting/"],
      ["Faded sublimation", "/troubleshooting/faded-sublimation/"]
    ]
  },
  {
    label: "Tools",
    links: [
      ["Celsius to Fahrenheit", "/tools/temperature-converter/"],
      ["Cost per shirt", "/tools/cost-calculator/"],
      ["About", "/about/"],
      ["Privacy", "/privacy/"],
      ["Contact", "/contact/"]
    ]
  }
];

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

function current(href, here) {
  return href === here ? ' aria-current="page"' : "";
}

function header(here) {
  const drops = nav.map((group) => {
    const items = group.links.map(([label, href]) =>
      `<li><a href="${href}"${current(href, here)}>${esc(label)}</a></li>`
    ).join("");
    return `<details class="nav-drop"><summary>${esc(group.label)}</summary><ul>${items}</ul></details>`;
  }).join("");
  return `<a class="skip" href="#content">Skip to content</a>
<header class="site-header">
  <div class="wrap header-bar">
    <a class="brand" href="/">
      <svg class="mark" viewBox="0 0 48 48" aria-hidden="true">
        <rect x="6" y="7" width="36" height="13" rx="1.5" fill="currentColor"></rect>
        <rect x="9" y="27" width="30" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="2.4"></rect>
        <path d="M16 20v7M24 20v7M32 20v7" stroke="#1b3a34" stroke-width="2"></path>
      </svg>
      <span>
        <span class="brand-name">Heat press settings</span>
        <span class="brand-tag">Celsius for UK crafters</span>
      </span>
    </a>
    <details class="menu" id="site-menu">
      <summary class="menu-button">Menu</summary>
      <nav class="menu-panel" aria-label="Primary">
        <a class="home-link" href="/"${current("/", here)}>Home</a>
        ${drops}
      </nav>
    </details>
  </div>
</header>`;
}

function footer() {
  const cols = nav.slice(0, 3).map((group) => {
    const items = group.links.map(([label, href]) => `<li><a href="${href}">${esc(label)}</a></li>`).join("");
    return `<div><h2>${esc(group.label)}</h2><ul>${items}</ul></div>`;
  }).join("");
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <h2>About these numbers</h2>
      <p class="fine">Starting points from named manufacturer charts, checked ${reviewed}. Test on a scrap. The dial on a hobby press is often not the platen temperature.</p>
      <p class="fine"><a href="/about/">About</a> · <a href="/privacy/">Privacy</a> · <a href="mailto:contact@heatpress-settings.co.uk">contact@heatpress-settings.co.uk</a></p>
    </div>
    ${cols}
  </div>
</footer>`;
}

function crumbs(items) {
  const html = items.map((item, index) => {
    if (index === items.length - 1) return `<li>${esc(item.label)}</li>`;
    return `<li><a href="${item.href}">${esc(item.label)}</a></li>`;
  }).join("");
  return `<nav aria-label="Breadcrumb"><ol class="crumbs">${html}</ol></nav>`;
}

function breadcrumbLd(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: origin + (item.href === "/" ? "/" : item.href)
    }))
  };
}

function adSlot() {
  return `<aside class="ad-slot" aria-label="Reserved advertisement space">
  <p class="ad-kicker">Advertisement</p>
  <p>This space is reserved for a future advert. Nothing is loaded here, and there is no advertising script on the site yet.</p>
</aside>`;
}

function related(links) {
  if (!links || !links.length) return "";
  const items = links.map((link) => `<li><a href="${link.href}">${esc(link.label)}</a></li>`).join("");
  return `<aside class="related"><h2>Related guides</h2><ul>${items}</ul></aside>`;
}

function sources(list) {
  if (!list || !list.length) return "";
  const items = list.map((source) =>
    `<li><a href="${esc(source.url)}" rel="noopener noreferrer">${esc(source.label)}</a>${source.note ? ` — ${esc(source.note)}` : ""}</li>`
  ).join("");
  return `<h2>Sources</h2><ul class="sources">${items}</ul>`;
}

function stepsHtml(steps) {
  if (!steps || !steps.length) return "";
  const items = steps.map((step) => `<li><strong>${esc(step.name)}.</strong> ${esc(step.text)}</li>`).join("");
  return `<h2>How to press it</h2><ol class="steps">${items}</ol>`;
}

function faqHtml(faqs) {
  if (!faqs || !faqs.length) return "";
  const items = faqs.map((faq) =>
    `<details><summary>${esc(faq.q)}</summary><p>${esc(faq.a)}</p></details>`
  ).join("");
  return `<h2>Common questions</h2><div class="faq">${items}</div>`;
}

function graphFor(page, canonical) {
  const graph = [breadcrumbLd(page.crumbs)];
  if (page.schema === "home") {
    graph.push({
      "@type": "WebSite",
      name: "Heat press settings",
      url: origin + "/",
      description: page.description,
      inLanguage: "en-GB"
    });
  }
  if (page.schema === "howto" || page.steps) {
    graph.push({
      "@type": "HowTo",
      name: page.h1,
      description: page.description,
      inLanguage: "en-GB",
      totalTime: page.totalTime || "PT2M",
      tool: [{ "@type": "HowToTool", name: "Heat press" }],
      step: (page.steps || []).map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text
      }))
    });
  }
  if (page.faqs && page.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    });
  }
  if (page.schema === "article" || page.schema === "howto" || page.schema === "about") {
    graph.push({
      "@type": page.schema === "about" ? "AboutPage" : "Article",
      headline: page.h1,
      description: page.description,
      dateModified: "2026-10-07",
      inLanguage: "en-GB",
      mainEntityOfPage: canonical,
      author: { "@type": "Organization", name: "Heat press settings" }
    });
  }
  if (page.schema === "tool") {
    graph.push({
      "@type": "WebApplication",
      name: page.h1,
      description: page.description,
      url: canonical,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
      inLanguage: "en-GB"
    });
  }
  if (page.schema === "contact") {
    graph.push({
      "@type": "ContactPage",
      name: page.h1,
      url: canonical,
      description: page.description,
      inLanguage: "en-GB"
    });
  }
  if (page.schema === "privacy") {
    graph.push({
      "@type": "WebPage",
      name: page.h1,
      url: canonical,
      description: page.description,
      inLanguage: "en-GB",
      dateModified: "2026-10-07"
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function documentHtml(page) {
  const here = page.path;
  const canonical = origin + here;
  const robots = page.robots ? `<meta name="robots" content="${esc(page.robots)}">` : "";
  const scripts = (page.scripts || []).map((src) => `<script src="${src}" defer></script>`).join("");
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical}">
  ${robots}
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:type" content="${page.ogType || "article"}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="en_GB">
  <meta property="og:site_name" content="Heat press settings">
  <meta name="twitter:card" content="summary">
  <meta name="theme-color" content="#1b3a34">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/css/site.css">
  ${jsonLd(graphFor(page, canonical))}
</head>
<body>
  ${header(here)}
  <main id="content" class="page">
    <div class="wrap">
      ${crumbs(page.crumbs)}
      <header class="page-intro">
        <p class="kicker">${esc(page.kicker)}</p>
        <h1>${esc(page.h1)}</h1>
        <p class="lede">${esc(page.lede)}</p>
      </header>
      <div class="prose">
        <aside class="notice"><p>${esc(page.notice || "These are starting points from the charts named below. Read the instructions for the product you are pressing, then test on a scrap or a spare blank. The number on a heat press dial is often not the true platen temperature.")}</p></aside>
        ${page.body || ""}
        ${stepsHtml(page.steps)}
        ${faqHtml(page.faqs)}
        ${sources(page.sources)}
      </div>
      ${related(page.related)}
      ${page.ad === false ? "" : adSlot()}
    </div>
  </main>
  ${footer()}
  <script src="/js/nav.js" defer></script>
  ${scripts}
</body>
</html>
`;
}

function selectOptions(list, selected) {
  return list.map((item) =>
    `<option value="${esc(item.id)}"${item.id === selected ? " selected" : ""}>${esc(item.label)}</option>`
  ).join("");
}

function homePage() {
  const description = "Look up UK heat press temperature, time, pressure and peel for HTV, sublimation and DTF. Celsius first, with each manufacturer chart named.";
  const faqs = [
    {
      q: "Are these the exact settings for my press?",
      a: "No. They are published starting points. Presses, platens and blanks differ, and the dial is often not the real platen temperature. Use the chart for the product in your hand, then test on a scrap."
    },
    {
      q: "Why do the charts disagree?",
      a: "They are for different films and inks. Siser EasyWeed is 150°C for 10–15 seconds. Garment Films One Flex is 140°C for 8 seconds. Sawgrass polyester sublimation is 205°C for 45 seconds, while Xpres publish 190°C for 60–70 seconds. The lookup shows those examples separately instead of blending them."
    },
    {
      q: "Can I sublimate a cotton T-shirt?",
      a: "No. Xpres state that sublimation needs light-coloured polyester or a polymer coating, and will not work on cotton or dark garments. Use heat transfer vinyl or a DTF transfer on cotton."
    }
  ];
  const page = {
    path: "/",
    title: "Heat press settings in Celsius for UK crafters",
    description,
    kicker: "UK guide",
    h1: "Heat press settings you can start from",
    lede: "Pick a method and a fabric. You get temperature in Celsius, with Fahrenheit in brackets, plus time, pressure and peel. Each card is a published manufacturer example, not a number we averaged.",
    crumbs: [{ href: "/", label: "Home" }],
    schema: "home",
    ogType: "website",
    faqs,
    scripts: ["/data/settings.js", "/js/lookup.js"],
    ad: false,
    notice: "Starting points only. Check the product instructions and test on a scrap. A press dial often disagrees with the platen."
  };
  const methodCards = [
    ["/methods/standard-htv/", "Standard HTV", "Everyday PU, including Siser EasyWeed at 150°C and Garment Films One Flex at 140°C."],
    ["/methods/glitter-htv/", "Glitter HTV", "Sparkle films that usually want around 160°C and a warm peel."],
    ["/methods/flock-htv/", "Flock HTV", "The velvety films. Peel warm or cool, not hot."],
    ["/methods/stretch-metallic-holographic-htv/", "Stretch, metallic, holographic", "Three families with different heats and peels, from 120°C EcoStretch to 160°C holographic."],
    ["/methods/sublimation-polyester/", "Sublimation on polyester", "Sawgrass at 205°C for 45 seconds, Xpres at 190°C for 60–70 seconds."],
    ["/methods/sublimation-mugs/", "Sublimation on mugs", "Sawgrass ceramic mugs: 180–205°C for 150–300 seconds in a mug press."],
    ["/methods/sublimation-hard-blanks/", "Hard blanks", "Coated MDF, metal, slate and acrylic. Slate is minutes, not seconds."],
    ["/methods/dtf/", "DTF transfers", "Full colour on cotton. Published press ranges run from about 140°C to 160°C."]
  ].map(([href, title, text]) =>
    `<a class="guide-card" href="${href}"><h3>${esc(title)}</h3><p>${esc(text)}</p></a>`
  ).join("");

  const fabricLinks = [
    ["/fabrics/cotton/", "100% cotton"],
    ["/fabrics/polyester/", "Polyester"],
    ["/fabrics/poly-cotton/", "Poly-cotton"],
    ["/fabrics/nylon/", "Nylon"],
    ["/fabrics/childrens-clothing/", "Children's clothing"],
    ["/fabrics/tote-bags/", "Tote bags"]
  ].map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`).join("");

  const fixLinks = [
    ["/troubleshooting/vinyl-peeling/", "Vinyl peeling or lifting"],
    ["/troubleshooting/scorch-marks/", "Scorch marks"],
    ["/troubleshooting/sublimation-ghosting/", "Sublimation ghosting"],
    ["/troubleshooting/faded-sublimation/", "Faded sublimation"]
  ].map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`).join("");

  const materials = settings.materials.filter((item) => item.methods.includes("htv"));
  const body = `
<section class="lookup" aria-labelledby="lookup-title">
  <div class="lookup-head">
    <h2 id="lookup-title">Settings lookup</h2>
    <p>Charts checked ${esc(settings.reviewed)}.</p>
  </div>
  <form id="lookup-form">
    <div class="fields">
      <div>
        <label for="method">Method</label>
        <select id="method" name="method">${selectOptions(settings.methods, "htv")}</select>
      </div>
      <div id="vinyl-field">
        <label for="vinyl">Vinyl type</label>
        <select id="vinyl" name="vinyl">${selectOptions(settings.vinylTypes, "standard")}</select>
      </div>
      <div>
        <label for="material">Material or fabric</label>
        <select id="material" name="material">${selectOptions(materials, "cotton")}</select>
      </div>
    </div>
  </form>
  <div id="lookup-result" aria-live="polite">
    <p>Loading the published examples for this combination.</p>
  </div>
  <noscript><p>The lookup uses JavaScript. The same charts are written out on the <a href="/methods/standard-htv/">method pages</a>.</p></noscript>
</section>
${adSlot()}
<section class="section">
  <h2>Methods</h2>
  <div class="grid guides">${methodCards}</div>
</section>
<section class="section">
  <h2>Fabrics and blanks</h2>
  <ul>${fabricLinks}</ul>
  <h2>When it goes wrong</h2>
  <ul>${fixLinks}</ul>
</section>
<section class="section">
  <h2>Tools</h2>
  <div class="grid tools">
    <a class="tool-card" href="/tools/temperature-converter/"><h3>°C to °F converter</h3><p>Including the temperatures these charts actually use.</p></a>
    <a class="tool-card" href="/tools/cost-calculator/"><h3>Cost per shirt</h3><p>Blank, vinyl, electricity and your time, in pounds.</p></a>
  </div>
</section>
`;
  const html = documentHtml({ ...page, body, related: [] });
  return html.replace("<div class=\"prose\">", "<div class=\"prose\" style=\"background:transparent;border:0;padding:0\">");
}

function notFound() {
  return documentHtml({
    path: "/404.html",
    title: "Page not found | Heat press settings",
    description: "That page is not on heatpress-settings.co.uk. Try the settings lookup or the method guides.",
    kicker: "404",
    h1: "That page is not here",
    lede: "The link may be out of date. The settings lookup and the method guides are on the home page.",
    crumbs: [{ href: "/", label: "Home" }, { href: "/404.html", label: "Page not found" }],
    schema: "article",
    robots: "noindex",
    ad: false,
    body: `<p><a href="/">Back to the settings lookup</a></p>
<ul>
  <li><a href="/methods/standard-htv/">Standard HTV</a></li>
  <li><a href="/methods/sublimation-polyester/">Sublimation on polyester</a></li>
  <li><a href="/methods/dtf/">DTF transfers</a></li>
  <li><a href="/tools/temperature-converter/">Temperature converter</a></li>
</ul>`,
    related: []
  });
}

function write(rel, html) {
  const dest = rel === "/" ? path.join(root, "index.html") : path.join(root, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
}

const urls = [];
for (const page of pages) {
  const rel = page.path.replace(/^\//, "") + "index.html";
  write(rel, documentHtml(page));
  if (!page.robots) urls.push(origin + page.path);
}
write("index.html", homePage());
urls.unshift(origin + "/");
write("404.html", notFound());

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc><lastmod>2026-10-07</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

console.log(`Wrote ${urls.length} public URLs plus 404.html`);
