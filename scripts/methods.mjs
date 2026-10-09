export const methodPages = [
  {
    path: "/methods/standard-htv/",
    title: "Standard HTV heat press settings in Celsius",
    description: "Everyday heat transfer vinyl starting points: Siser EasyWeed at 150°C and Garment Films One Flex at 140°C, with time, pressure and peel.",
    kicker: "Method",
    h1: "Standard HTV settings",
    lede: "Everyday polyurethane heat transfer vinyl is the film most UK crafters mean by “HTV”. Two published charts sit close together, and they are not the same instruction.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/methods/standard-htv/", label: "Standard HTV" }
    ],
    schema: "howto",
    sources: [
      { label: "Siser EasyWeed", url: "https://www.siserna.com/easyweed/", note: "150°C / 305°F, medium, 10–15 seconds, hot or cold peel" },
      { label: "Garment Films HTV application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "One Flex, including 140°C for 8 seconds" },
      { label: "Siser EasyWeed Sub Block", url: "https://www.siserna.com/easyweed-sub-block/", note: "130°C blocker for dye migration" }
    ],
    related: [
      { href: "/fabrics/cotton/", label: "100% cotton" },
      { href: "/pyjamas/htv/", label: "HTV on kids' pyjamas" },
      { href: "/fabrics/polyester/", label: "Polyester and dye migration" },
      { href: "/fabrics/nylon/", label: "Nylon needs a different film" },
      { href: "/troubleshooting/vinyl-peeling/", label: "Vinyl peeling or lifting" },
      { href: "/methods/glitter-htv/", label: "Glitter HTV" }
    ],
    steps: [
      { name: "Cut mirrored and weed", text: "Mirror text and weed the excess film. A test cut tells you whether the blade is lifting the carrier." },
      { name: "Pre-press the shirt", text: "Siser say 2–3 seconds to warm the garment. Garment Films’ FAQ says 5–10 seconds when you need to clear wrinkles and moisture. Use a cover sheet on anything heat-sensitive." },
      { name: "Press the row for your film", text: "EasyWeed is 150°C for 10–15 seconds at medium pressure. One Flex’s standard line is 140°C for 8 seconds. Do not mix the time from one with the temperature from the other." },
      { name: "Peel the way that film says", text: "EasyWeed peels hot or cold. One Flex is listed as hot, warm or cool. If a corner lifts, Siser say to cover it and press again for 5–10 seconds." },
      { name: "Wait before washing", text: "Both makers say to wait 24 hours. Wash inside out, skip fabric conditioner, and follow the garment label." }
    ],
    faqs: [
      { q: "Why is there not one standard temperature?", a: "Because “standard HTV” is a shelf of products. Siser EasyWeed publishes 150°C for 10–15 seconds. Garment Films One Flex publishes 140°C for 8 seconds as the standard recommendation, with cooler and shorter alternatives on the same line." },
      { q: "I have a Cricut EasyPress. Do I add 30 degrees?", a: "Siser’s EasyWeed sheet says EasyPress users should add about 30°. It is written beside 305°F/150°C, and it is read as 30°F rather than an extra 30°C. That note is about the EasyPress, not every hobby press. Other machines need a scrap test, because the dial is often not the platen temperature." },
      { q: "Does ordinary EasyWeed work on nylon?", a: "The EasyWeed instruction sheet lists cotton, poly-cotton, polyester and leather, not nylon. EasyWeed Extra is the Siser film that lists nylon, at the same 150°C. Garment Films say the films on their chart are not suitable for nylon." }
    ],
    body: `
<p>Use this page for smooth, everyday colour films. <a href="/methods/glitter-htv/">Glitter</a>, <a href="/methods/flock-htv/">flock</a> and <a href="/methods/stretch-metallic-holographic-htv/">stretch, metallic and holographic</a> films have their own charts.</p>
<div class="table-wrap">
<table>
  <caption>Published everyday PU examples</caption>
  <thead><tr><th>Film</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Siser EasyWeed</td><td>150°C (305°F)</td><td>10–15 seconds</td><td>Medium</td><td>Hot or cold</td></tr>
    <tr><td>Garment Films One Flex, standard</td><td>140°C (284°F)</td><td>8 seconds</td><td>Not listed on the chart</td><td>Hot, warm or cool</td></tr>
    <tr><td>One Flex, cooler option</td><td>120°C (248°F)</td><td>15 seconds</td><td>Not listed on the chart</td><td>Hot, warm or cool</td></tr>
    <tr><td>Siser EasyWeed Sub Block</td><td>130°C (265°F)</td><td>10–15 seconds</td><td>Medium</td><td>Hot or cold</td></tr>
  </tbody>
</table>
</div>
<p>One Flex also lists 150°C for 5 seconds and 130°C for 10 seconds. Garment Films call 140°C for 8 seconds the standard recommendation for all applications of that film. Their chart does not print a pressure figure, so use the data sheet in the packet rather than guessing “medium”.</p>
<p>Siser print 305°F next to 150°C. A straight conversion of 150°C is 302°F. Use their pair when you are following their sheet. The <a href="/tools/temperature-converter/">converter</a> does the straight conversion and flags this 150°C quirk.</p>
<h2>Cotton, blends and polyester</h2>
<p>EasyWeed’s published list is 100% cotton, poly-cotton, 100% polyester and leather, all at the same heat. Garment Films’ chart covers cotton, polyester and polyester/cotton mixtures, and it says the films are not for nylon or coated fabrics. There is no separate “blend temperature” on either chart. Read the <a href="/fabrics/cotton/">cotton</a> and <a href="/fabrics/poly-cotton/">poly-cotton</a> notes before a first run.</p>
<p>Polyester is where ordinary vinyl misbehaves. Dye in the shirt can creep into the film after pressing, or even after washing. Siser tie that to high temperature and high pressure, and they publish EasyWeed Sub Block at 130°C (265°F) as a blocker you can layer under other colours. Details are on the <a href="/fabrics/polyester/">polyester</a> page.</p>
<h2>Children’s clothes and totes</h2>
<p>A plain cotton child’s T-shirt can use the cotton row if the care label can take it. For babywear and heat-sensitive polyester, Siser’s HI-5 is the film they describe as certified for baby clothing: 120°C for 5 seconds on textiles up to 150 g/m², or 150°C if the fabric is heavier, at high pressure. That lives on the <a href="/fabrics/childrens-clothing/">children’s clothing</a> page, with the One Flex 120°C option. Blank cotton pyjamas, and where a design sits on the chest, are on the <a href="/pyjamas/htv/">kids’ pyjama HTV</a> page. <a href="/fabrics/tote-bags/">Canvas totes</a> are not named separately; uncoated cotton canvas follows the cotton row after a proper pre-press.</p>
`
  },
  {
    path: "/methods/glitter-htv/",
    title: "Glitter HTV heat press settings in Celsius",
    description: "Glitter heat transfer vinyl settings from Siser and Garment Films: about 160–170°C, medium pressure, and a peel that is often warm rather than hot.",
    kicker: "Method",
    h1: "Glitter HTV settings",
    lede: "Glitter film is thicker than everyday PU and the charts sit hotter, usually at 160°C and sometimes up to 170°C. Peel too soon and the sparkle lifts in patches.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/methods/glitter-htv/", label: "Glitter HTV" }
    ],
    schema: "howto",
    sources: [
      { label: "Siser Glitter", url: "https://www.siserna.com/glitter/", note: "160°C / 320°F, medium, 15–20 seconds, warm peel" },
      { label: "Siser EU Glitter page", url: "https://www.siser.com/cad-cut/glitter/", note: "15 seconds, medium, hot or cold peel" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "Premium Glitter, 160–170°C for 15 seconds" }
    ],
    related: [
      { href: "/methods/standard-htv/", label: "Standard HTV" },
      { href: "/pyjamas/htv/", label: "Glitter on cotton pyjamas" },
      { href: "/troubleshooting/vinyl-peeling/", label: "If glitter lifts" },
      { href: "/fabrics/polyester/", label: "Polyester can scorch at this heat" },
      { href: "/fabrics/childrens-clothing/", label: "Children’s clothing" }
    ],
    steps: [
      { name: "Weed gently", text: "Glitter is thicker than everyday PU. Weed without stretching the design off the carrier." },
      { name: "Pre-press and cover", text: "Warm the shirt and cover the glitter so the platen does not polish a scorch into the fabric around it." },
      { name: "Press the matching row", text: "Siser North America publish 160°C for 15–20 seconds at medium pressure. Garment Films Premium Glitter is 160–170°C for 15 seconds." },
      { name: "Peel when the sheet says", text: "The North America page says warm, at least 15 seconds off the press. The EU page says hot or cold at 15 seconds. Follow the insert in your roll." },
      { name: "Leave it a day", text: "Siser and Garment Films both say to wait 24 hours before the first wash. Wash inside out and do not use fabric conditioner." }
    ],
    faqs: [
      { q: "Why do Siser’s own glitter times differ?", a: "The North America product page says 15–20 seconds and a warm peel. The EU product page says 15 seconds and a hot or cold peel. A compiled instruction sheet says 10–15 seconds and a warm peel. Same brand, different sheets. Use the one packed with the roll you bought." },
      { q: "Can I put glitter on nylon?", a: "Not from these charts. Siser list cotton, poly-cotton, polyester and leather. Garment Films say the films on their chart are not suitable for nylon. See the nylon page before you experiment." },
      { q: "Can glitter go on children’s polyester?", a: "These charts do not publish a children’s temperature. 160°C is hot enough to shine or scorch some polyester. Test an inside seam with a cover sheet, or choose a lower-temperature film from the children’s clothing page." }
    ],
    body: `
<div class="table-wrap">
<table>
  <caption>Published glitter examples</caption>
  <thead><tr><th>Film</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Siser Glitter, North America</td><td>160°C (320°F)</td><td>15–20 seconds</td><td>Medium</td><td>Warm, at least 15 seconds off the press</td></tr>
    <tr><td>Siser Glitter, EU page</td><td>160°C (320°F)</td><td>15 seconds</td><td>Medium (about 3–4 bar)</td><td>Hot or cold</td></tr>
    <tr><td>Garment Films Premium Glitter</td><td>160–170°C (320–338°F)</td><td>15 seconds</td><td>Not listed on the chart</td><td>Hot, warm or cool</td></tr>
  </tbody>
</table>
</div>
<p>The EU Siser page also says glitter is layerable only as a top layer. If you are stacking colours, put glitter last and press it to its own instructions, not to the <a href="/methods/standard-htv/">everyday PU</a> time underneath.</p>
<p>Garment Films’ Fahrenheit figures above are the usual conversion. They publish the chart in Celsius. Their Premium Glitter line is not the same product as printable glitter further down that PDF, which is listed at 160°C for 10–15 seconds with a warm peel. Read the row that matches the name on the roll.</p>
<p>On <a href="/fabrics/cotton/">cotton</a> this heat is normal. On <a href="/fabrics/polyester/">polyester</a> it is the top end of what many shirts will accept without a shiny box around the design. Cover the garment. If you see scorch marks, stop and read the <a href="/troubleshooting/scorch-marks/">scorch guide</a> rather than pressing again hotter. Cotton pyjamas can use this cotton row. Placement on the white chest is on the <a href="/pyjamas/htv/">pyjama HTV page</a>.</p>
`
  },
  {
    path: "/methods/flock-htv/",
    title: "Flock HTV heat press settings in Celsius",
    description: "Flock and StripFlock heat press settings: Siser at 155°C for 15 seconds, warm peel, and Garment Films flock at 150°C for 10 seconds, cool peel.",
    kicker: "Method",
    h1: "Flock HTV settings",
    lede: "Flock is the velvety film. On these charts the carrier comes off warm or cool. Peel it hot and the pile can lift or look bald in patches.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/methods/flock-htv/", label: "Flock HTV" }
    ],
    schema: "howto",
    sources: [
      { label: "Siser StripFlock Pro, North America", url: "https://www.siserna.com/stripflock-pro/", note: "155°C / 310°F, medium, 15 seconds, warm peel" },
      { label: "Siser StripFlock Pro, EU", url: "https://www.siser.com/cad-cut/stripflock-pro/", note: "155°C (311°F), medium, warm peel" },
      { label: "Siser, heat-sensitive textiles", url: "https://www.siser.com/news/how-to-prevent-discoloring-and-scorching-heat-sensitive-textiles/", note: "cooler, longer StripFlock alternative" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "Flock, 150°C for 10 seconds, cool peel" }
    ],
    related: [
      { href: "/troubleshooting/vinyl-peeling/", label: "Peeling and lifting" },
      { href: "/troubleshooting/scorch-marks/", label: "Scorch on polyester" },
      { href: "/methods/standard-htv/", label: "Standard HTV" },
      { href: "/fabrics/nylon/", label: "Nylon" }
    ],
    steps: [
      { name: "Weed without crushing the pile", text: "Flock is thick. Lift the excess rather than dragging a tool flat across the pile you want to keep." },
      { name: "Pre-press", text: "Siser say 2–3 seconds. A damp shirt is a common reason flock does not hold." },
      { name: "Press the row on your packet", text: "StripFlock Pro is 155°C for 15 seconds at medium pressure. Garment Films flock is 150°C for 10 seconds." },
      { name: "Peel warm or cool", text: "Siser North America: warm, at least 10 seconds off the press. Garment Films: cool. Do not treat flock as a hot-peel everyday vinyl." },
      { name: "Wash later", text: "Wait 24 hours. Wash inside out, no bleach and no fabric conditioner. Siser say warm or cold with mild detergent for StripFlock Pro." }
    ],
    faqs: [
      { q: "Can I layer StripFlock on itself?", a: "Siser’s pages disagree. The EU data sheet says StripFlock Pro cannot be layered on itself. The North America shop page talks about layering it. Follow the sheet in the box and test before a batch." },
      { q: "What if 155°C scorches the polyester?", a: "Siser’s heat-sensitive fabric article uses StripFlock Pro as the example: try 25–30 seconds and do not go below 140°C. That alternative is for this film, not a universal flock rule." },
      { q: "Is flock suitable for nylon?", a: "Not on these charts. Garment Films say their films are not suitable for nylon or coated fabrics. Siser’s StripFlock pages list cotton, polyester and blends, not nylon." }
    ],
    body: `
<div class="table-wrap">
<table>
  <caption>Published flock examples</caption>
  <thead><tr><th>Film</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Siser StripFlock Pro</td><td>155°C (310–311°F)</td><td>15 seconds</td><td>Medium</td><td>Warm</td></tr>
    <tr><td>StripFlock Pro, cooler trial</td><td>Not below 140°C (284°F)</td><td>25–30 seconds</td><td>As the article’s heat-sensitive method</td><td>Still a warm peel unless the sheet says otherwise</td></tr>
    <tr><td>Garment Films Flock</td><td>150°C (302°F)</td><td>10 seconds</td><td>Not listed on the chart</td><td>Cool</td></tr>
  </tbody>
</table>
</div>
<p>Siser’s EU page prints 155°C (311°F). The North America page prints 310°F / 155°C. That is rounding, not two different temperatures. Medium pressure on the EU page is given as about 2.5–3.5 bar on one data sheet and about 3–4 bar on the product page, so “medium” still needs a feel for your press.</p>
<p>If the flock lifts at the edges, the usual causes are on the <a href="/troubleshooting/vinyl-peeling/">peeling page</a>: too little time, the wrong peel, or a shirt that was still damp. Pressing flock a second time harder can crush the pile, so test that on a scrap rather than leaning on the platen.</p>
<p><a href="/fabrics/cotton/">Cotton</a> and <a href="/fabrics/poly-cotton/">poly-cotton</a> are the fabrics these charts name. Polyester is listed too, with the scorch risk that comes with 150°C-plus. The cooler StripFlock trial is the published way to back off, and it still stays at or above 140°C.</p>
`
  },
  {
    path: "/methods/stretch-metallic-holographic-htv/",
    title: "Stretch, metallic and holographic HTV settings (°C)",
    description: "Separate Celsius settings for stretch, metallic and holographic HTV from Siser and Garment Films, including EcoStretch at 120°C and holographic cold peels.",
    kicker: "Method",
    h1: "Stretch, metallic and holographic HTV",
    lede: "These films get lumped together in craft shops and they should not share one setting. Stretch alone runs from 120°C to 160°C depending on which roll you have.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/methods/stretch-metallic-holographic-htv/", label: "Stretch, metallic and holographic" }
    ],
    schema: "howto",
    sources: [
      { label: "Siser EasyWeed Stretch", url: "https://www.siserna.com/easyweed-stretch/", note: "160°C / 320°F, firm, 20 seconds" },
      { label: "Siser HTV application instructions (PDF)", url: "https://uscutter.com/content/PDFs/Siser-heat-transfer-vinyl-instructions-2024.pdf", note: "EcoStretch and Metal" },
      { label: "Siser, working with holographic", url: "https://www.siser.com/news/tips-tricks-for-working-with-holographic/", note: "160°C, 15–20 seconds, cold peel" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "Stretch Flex, Stretch Metallic, holographic lines" }
    ],
    related: [
      { href: "/fabrics/nylon/", label: "Which of these list nylon" },
      { href: "/pyjamas/htv/", label: "Stretch HTV on cotton pyjamas" },
      { href: "/fabrics/childrens-clothing/", label: "Lower-temperature options" },
      { href: "/troubleshooting/vinyl-peeling/", label: "Cold peel problems" },
      { href: "/methods/standard-htv/", label: "Everyday PU" }
    ],
    steps: [
      { name: "Read the name on the roll", text: "EasyWeed Stretch, EcoStretch, Stretch Flex, Metal and Holo PU Black are different rows. The colour family is not the instruction." },
      { name: "Pre-press and cover", text: "Metallic and holographic films show every scorch and every crease. Cover them." },
      { name: "Press that row only", text: "EcoStretch is 120°C for 10–15 seconds, medium, hot peel. EasyWeed Stretch is 160°C for 20 seconds, firm, hot or cold. Garment Films Stretch Flex is 150°C for 10 seconds, cool peel." },
      { name: "Peel cold when told", text: "Siser Metal and Siser Holographic are cold peels. Siser say to let holographic go cold, and that you can cool the carrier against a table or glass. Garment Films Holo PU Black is also a cold peel." },
      { name: "Test stretch on the real fabric", text: "A film can flex in your hand and still crack on elastane if it was under-pressed. Stretch a scrap after it has cooled." }
    ],
    faqs: [
      { q: "Which stretch film is the cool one?", a: "Siser EasyWeed EcoStretch: 120°C (250°F), medium pressure, 10–15 seconds, hot peel. EasyWeed Stretch is 160°C and firm for 20 seconds. They are both stretch films." },
      { q: "Can I use these on nylon?", a: "EasyWeed Stretch lists nylon. EcoStretch’s instruction sheet does not. Siser Metal does not. Garment Films say the films on their chart are not suitable for nylon, though they do mention Lycra for Stretch Metallic. Lycra and nylon are different fibres." },
      { q: "Why does holographic look different on a black shirt?", a: "Siser say the finish will not look the same on black as on white. That is the film, not a failed press." }
    ],
    body: `
<h2>Stretch</h2>
<div class="table-wrap">
<table>
  <caption>Published stretch examples</caption>
  <thead><tr><th>Film</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Siser EasyWeed EcoStretch</td><td>120°C (250°F)</td><td>10–15 seconds</td><td>Medium</td><td>Hot</td></tr>
    <tr><td>Garment Films Stretch Flex</td><td>150°C (302°F)</td><td>10 seconds</td><td>Not listed on the chart</td><td>Cool</td></tr>
    <tr><td>Siser EasyWeed Stretch</td><td>160°C (320°F)</td><td>20 seconds</td><td>Firm</td><td>Hot or cold</td></tr>
  </tbody>
</table>
</div>
<p>EcoStretch is listed for cotton, poly-cotton, polyester and Lycra or spandex. A Siser reference chart prints 121°C beside the same 250°F, while the instruction sheet prints 120°C. EasyWeed Stretch is the one that also lists nylon, at a much hotter firm press. If a stretchy <a href="/fabrics/polyester/">polyester</a> shirt shines, try the EcoStretch row only when that is the film you have. Cotton jersey pyjamas are a reason to look at a stretch film. The chest placement is on the <a href="/pyjamas/htv/">pyjama HTV page</a>.</p>
<h2>Metallic</h2>
<div class="table-wrap">
<table>
  <caption>Published metallic examples</caption>
  <thead><tr><th>Film</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Garment Films Stretch Metallic</td><td>140°C (284°F)</td><td>7–10 seconds</td><td>Not listed on the chart</td><td>Warm or cool</td></tr>
    <tr><td>Siser Metal</td><td>150°C (305°F)</td><td>10–15 seconds</td><td>Medium</td><td>Cold</td></tr>
    <tr><td>Garment Films Metallic and Holographic</td><td>140–150°C (284–302°F)</td><td>10–15 seconds</td><td>Not listed on the chart</td><td>Hot, warm or cool</td></tr>
  </tbody>
</table>
</div>
<p>Siser Metal’s instruction sheet lists cotton, poly-cotton and polyester. It does not list nylon. Leave a cold-peel carrier until it is actually cold. Warm is not cold.</p>
<h2>Holographic</h2>
<div class="table-wrap">
<table>
  <caption>Published holographic examples</caption>
  <thead><tr><th>Film</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Garment Films Holo PU Black</td><td>140°C (284°F)</td><td>8–10 seconds</td><td>Not listed on the chart</td><td>Cold</td></tr>
    <tr><td>Garment Films Metallic and Holographic</td><td>140–150°C (284–302°F)</td><td>10–15 seconds</td><td>Not listed on the chart</td><td>Hot, warm or cool</td></tr>
    <tr><td>Siser Holographic</td><td>160°C (320°F)</td><td>15–20 seconds</td><td>Medium to firm</td><td>Cold</td></tr>
  </tbody>
</table>
</div>
<p>Siser’s tips say to apply hot and peel cold, and that you can rub the garment on a table or a glass window to pull the heat out of the carrier. Their instruction sheet says medium to firm pressure for 15–20 seconds. The tips page says medium pressure for that same time. If the sheet in the box picks one, follow the box.</p>
<p>None of the Garment Films rows above are for nylon or coated fabrics. For babywear and cool-iron clothes, start on the <a href="/fabrics/childrens-clothing/">children’s clothing</a> page rather than at 160°C.</p>
`
  },
  {
    path: "/methods/sublimation-polyester/",
    title: "Sublimation on polyester: heat press settings in Celsius",
    description: "Polyester sublimation starting points from Sawgrass (205°C, 45 seconds) and Xpres (190°C, 60–70 seconds), plus why cotton will not work.",
    kicker: "Method",
    h1: "Sublimation on polyester fabric",
    lede: "Sublimation dye turns to gas and bonds with polyester. It does not sit on the shirt like vinyl. Sawgrass and Xpres publish different time and temperature pairs for that job.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/methods/sublimation-polyester/", label: "Sublimation on polyester" }
    ],
    schema: "howto",
    sources: [
      { label: "Sawgrass sublimation heat press settings", url: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings", note: "polyester fabric, 205°C / 400°F, 45 seconds, medium" },
      { label: "Sawgrass polo shirt walkthrough", url: "https://www.sawgrassink.com/blog/how-we-made-it-polo-shirt/", note: "400°F (204°C), 45 seconds, high pressure" },
      { label: "Xpres, how to sublimate T-shirts", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts", note: "190°C, 60–70 seconds, medium, peel hot" }
    ],
    related: [
      { href: "/fabrics/polyester/", label: "Polyester fabric" },
      { href: "/fabrics/poly-cotton/", label: "Why blends look pale" },
      { href: "/fabrics/cotton/", label: "Cotton will not sublimate" },
      { href: "/pyjamas/sublimation/", label: "Cotton pyjamas" },
      { href: "/troubleshooting/sublimation-ghosting/", label: "Ghosting and blur" },
      { href: "/troubleshooting/faded-sublimation/", label: "Faded prints" },
      { href: "/methods/sublimation-mugs/", label: "Mugs" }
    ],
    steps: [
      { name: "Print mirrored on sublimation paper", text: "Xpres say to mirror the artwork. Use sublimation ink and paper, not a normal inkjet print." },
      { name: "Use a light polyester blank", text: "Xpres say the process needs light-coloured polyester or a polymer coating. It will not work on cotton or on dark garments, because there is no white ink." },
      { name: "Tape the paper and cover it", text: "Xpres: tape the print face down, thread the shirt on the press, and cover it with a silicone sheet." },
      { name: "Press one published pair", text: "Sawgrass polyester fabric is 205°C (400°F) for 45 seconds at medium pressure. Xpres is 190°C for 60–70 seconds at medium pressure. Do not mix 205°C with a 70-second dwell unless a test shows you need it." },
      { name: "Peel hot, on the Xpres method", text: "Xpres say to remove the silicone sheet and peel while hot. Sawgrass’s polo note says to remove the shirt from the press and then remove the paper." }
    ],
    faqs: [
      { q: "Which polyester setting should I start with?", a: "If you use Sawgrass inks and TruePix-style paper, start from their chart: 205°C for 45 seconds, medium. If you are following Xpres’s UK T-shirt guide, start at 190°C for 60–70 seconds, medium. Then change one thing at a time on a spare shirt." },
      { q: "Why is my poly-cotton print speckled?", a: "Only polyester fibres take the dye. Cotton fibres stay the original colour, so a blend looks pale or heathered. There is no separate blend temperature on these charts." },
      { q: "The paper print looks dull. Is the press too cool?", a: "Not always. Xpres say sublimation ink often changes colour when it is heated and can look brighter on the shirt than on the paper. Press a test before you reprint the whole run." }
    ],
    body: `
<div class="table-wrap">
<table>
  <caption>Published polyester fabric examples</caption>
  <thead><tr><th>Source</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Sawgrass chart, polyester fabric</td><td>205°C (400°F)</td><td>45 seconds</td><td>Medium</td><td>Remove the paper after pressing</td></tr>
    <tr><td>Sawgrass polo walkthrough</td><td>204°C (400°F)</td><td>45 seconds</td><td>High</td><td>Remove the shirt, then the paper</td></tr>
    <tr><td>Xpres T-shirt guide</td><td>190°C (374°F)</td><td>60–70 seconds</td><td>Medium</td><td>Hot</td></tr>
  </tbody>
</table>
</div>
<p>Sawgrass call their chart a starting place and say the real result also depends on the blank, a calibrated press, colour management and practice. Their polo article prints 400°F (204°C) rather than 205°C, at high pressure rather than medium. Treat that as the same ballpark with a different pressure note, not as a third temperature you need to hit exactly.</p>
<p>374°F next to the Xpres figure is our conversion. Xpres publish 190°C only. 400°F is what Sawgrass print; a straight conversion of 205°C is 401°F.</p>
<h2>What will not sublimate</h2>
<p><a href="/fabrics/cotton/">Cotton</a>, dark shirts and ordinary <a href="/fabrics/tote-bags/">canvas totes</a> are out. So are <a href="/pyjamas/sublimation/">100% cotton pyjamas</a>, including a white chest. <a href="/fabrics/nylon/">Nylon</a> is not on these charts and it scorches at this heat. <a href="/fabrics/poly-cotton/">Poly-cotton</a> only takes dye in the polyester portion. For a full-colour design on cotton, use <a href="/methods/dtf/">DTF</a> or cut <a href="/methods/standard-htv/">HTV</a> instead.</p>
<p>If the image has a shadow or a double edge, that is <a href="/troubleshooting/sublimation-ghosting/">ghosting</a>: the paper moved, or the shirt shrank, while dye was still transferring. If the colour is weak, start with the <a href="/troubleshooting/faded-sublimation/">faded print</a> checks before you add time.</p>
<p>Hard goods are a different table. <a href="/methods/sublimation-mugs/">Mugs</a> need a mug press and a much longer time. <a href="/methods/sublimation-hard-blanks/">MDF, metal, slate and acrylic</a> each have their own Sawgrass row.</p>
`
  },
  {
    path: "/methods/sublimation-mugs/",
    title: "Sublimation mug heat press settings in Celsius",
    description: "Ceramic mug sublimation starting points from Sawgrass: 180–205°C for 150–300 seconds at medium pressure, in a mug press.",
    kicker: "Method",
    h1: "Sublimation on mugs",
    lede: "A mug is not a T-shirt pressed on its side. Sawgrass publish a wide ceramic range because the blank and the mug press both change the result.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/methods/sublimation-mugs/", label: "Sublimation on mugs" }
    ],
    schema: "howto",
    sources: [
      { label: "Sawgrass sublimation heat press settings", url: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings", note: "ceramic mug, 180–205°C, 150–300 seconds, medium" },
      { label: "Xpres, how to sublimate T-shirts", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts", note: "a mug needs a mug press" }
    ],
    related: [
      { href: "/methods/sublimation-polyester/", label: "Polyester fabric, a different chart" },
      { href: "/methods/sublimation-hard-blanks/", label: "MDF, metal and slate" },
      { href: "/troubleshooting/sublimation-ghosting/", label: "Ghosting from a shifted wrap" },
      { href: "/troubleshooting/faded-sublimation/", label: "Faded mugs" }
    ],
    steps: [
      { name: "Use a coated ceramic blank", text: "Ordinary glazed mugs from a supermarket are not sublimation blanks. The coating is what holds the dye." },
      { name: "Print mirrored and tape the wrap", text: "Tape the paper to the mug so it cannot slide. A loose wrap is the usual cause of a double image." },
      { name: "Use a mug press", text: "Xpres say a mug needs a mug press. A flat platen does not wrap the curve with even pressure." },
      { name: "Start inside the Sawgrass range", text: "180–205°C (350–400°F), 150–300 seconds, medium pressure. If the blank maker prints a narrower card, use that and stay inside it." },
      { name: "Unload with care", text: "The mug and the press are hot enough to burn. Follow the press manual for how to open it. Do not leave a hot mug where a child can pick it up." }
    ],
    faqs: [
      { q: "Why is the time so wide?", a: "Sawgrass print 150–300 seconds, which is two and a half to five minutes, across 180–205°C. Element mugs, convection mug presses and thick ceramics do not finish together. Their chart is a starting place, and they tell you to ask the blank maker when the substrate is not listed." },
      { q: "Can I press a mug at the polyester T-shirt time?", a: "No. Sawgrass polyester fabric is 45 seconds. Their ceramic mug line is 150–300 seconds. A 45-second mug will look faded." },
      { q: "The handle side is pale. What failed?", a: "Usually pressure or contact, not a secret extra temperature. The paper has to touch the coating all the way round. Tape it, and check that the mug press closes evenly." }
    ],
    body: `
<div class="table-wrap">
<table>
  <caption>Sawgrass ceramic mug example</caption>
  <thead><tr><th>Blank</th><th>Temperature</th><th>Time</th><th>Pressure</th></tr></thead>
  <tbody>
    <tr><td>Ceramic mug</td><td>180–205°C (350–400°F)</td><td>150–300 seconds</td><td>Medium</td></tr>
  </tbody>
</table>
</div>
<p>That is the whole published mug line from the Sawgrass chart this site uses. We are not filling the gap with a single “best” minute, because Sawgrass did not print one. A test mug, cut in half by time, tells you more than another blog average.</p>
<p>Colour on the paper is not the finished colour. The same Xpres note that applies to shirts applies here: sublimation ink often looks stronger after it is heated. Judge a pressed mug, not the printout.</p>
<p>Ghosting on a mug is a shifted wrap. Tape the edges, close the press smoothly, and open it without spinning the mug against the paper. The <a href="/troubleshooting/sublimation-ghosting/">ghosting guide</a> covers fabric and hard surfaces. A weak image is more often time, temperature or a missing coating, which is the <a href="/troubleshooting/faded-sublimation/">faded sublimation</a> list.</p>
<p>Stainless travel cups and latte glasses are different blanks. They are not this ceramic row. If Sawgrass do not list your blank, use the card that came with it.</p>
`
  },
  {
    path: "/methods/sublimation-hard-blanks/",
    title: "Sublimation settings for MDF, metal, slate and acrylic",
    description: "Sawgrass Celsius settings for coated hard blanks: MDF and metal at 205°C for 60 seconds, acrylic at 190°C, and slate for 7 minutes.",
    kicker: "Method",
    h1: "Sublimation on hard blanks",
    lede: "MDF, aluminium, slate and acrylic only sublimate when they are made for it. On the Sawgrass chart the times are not interchangeable: slate stays down for seven minutes, MDF for one.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/methods/sublimation-hard-blanks/", label: "Hard blanks" }
    ],
    schema: "howto",
    sources: [
      { label: "Sawgrass sublimation heat press settings", url: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings", note: "MDF, metal, slate and acrylic rows" }
    ],
    related: [
      { href: "/methods/sublimation-mugs/", label: "Ceramic mugs" },
      { href: "/methods/sublimation-polyester/", label: "Polyester fabric" },
      { href: "/troubleshooting/sublimation-ghosting/", label: "Tape the paper down" },
      { href: "/troubleshooting/faded-sublimation/", label: "Pale hard blanks" }
    ],
    steps: [
      { name: "Confirm the blank is coated", text: "Sawgrass list MDF, metal, slate and acrylic as sublimation blanks. Bare wood, bare aluminium and ordinary acrylic will not hold the dye, and some acrylic warps." },
      { name: "Tape the paper", text: "Hard surfaces ghost when the paper shifts as the press opens. Tape the edges. Do not cover the whole image with tape." },
      { name: "Use the row for that blank", text: "MDF and metal: 205°C for 60 seconds, medium. Acrylic: 190°C for 60 seconds, medium. Slate: 205°C for 420 seconds, medium." },
      { name: "Lift the paper straight up", text: "Sliding it off can drag a second image if dye is still moving." },
      { name: "Protect the press", text: "Use a blowout sheet or cover so ink does not stain the platen. A stained platen marks the next shirt." }
    ],
    faqs: [
      { q: "Can I press slate for the same minute as MDF?", a: "Not from this chart. Sawgrass list MDF at 60 seconds and slate at 420 seconds, both at 205°C and medium pressure. A one-minute slate is likely to look faded." },
      { q: "Is aluminium the same as their metal row?", a: "Sawgrass print the word metal, at 205°C for 60 seconds, medium. In craft use that means a coated metal panel, including the coated aluminium blanks sold for sublimation. Uncoated aluminium is not that row." },
      { q: "Why is acrylic cooler?", a: "Because that is the row Sawgrass print: 190°C (375°F) for 60 seconds, medium, against 205°C for MDF and metal. Follow it rather than “correcting” it upwards." }
    ],
    body: `
<div class="table-wrap">
<table>
  <caption>Sawgrass hard-blank examples</caption>
  <thead><tr><th>Blank</th><th>Temperature</th><th>Time</th><th>Pressure</th></tr></thead>
  <tbody>
    <tr><td>MDF board</td><td>205°C (400°F)</td><td>60 seconds</td><td>Medium</td></tr>
    <tr><td>Metal</td><td>205°C (400°F)</td><td>60 seconds</td><td>Medium</td></tr>
    <tr><td>Acrylic</td><td>190°C (375°F)</td><td>60 seconds</td><td>Medium</td></tr>
    <tr><td>Slate</td><td>205°C (400°F)</td><td>420 seconds (7 minutes)</td><td>Medium</td></tr>
  </tbody>
</table>
</div>
<p>Sawgrass also list glass and ceramic tiles at 205°C for 420 seconds, and neoprene with the polyester fabric row at 45 seconds. Those are on the same chart if you press them. They are not an excuse to reuse the slate time on a photo panel.</p>
<p>The chart text says it is only a starting place, and that you should ask the blank maker when your substrate is not listed. A dial that reads 205°C is not proof the platen is at 205°C. If every blank from one batch is pale, check the press before you blame the paper. The <a href="/troubleshooting/faded-sublimation/">faded print</a> page lists the other causes.</p>
<p>Fabric sublimation is hotter-and-shorter or cooler-and-longer depending on the brand. It is still a different craft from this table. Start at <a href="/methods/sublimation-polyester/">polyester fabric</a> for shirts, and <a href="/methods/sublimation-mugs/">mugs</a> for drinkware.</p>
`
  },
  {
    path: "/methods/dtf/",
    title: "DTF transfer heat press settings in Celsius",
    description: "DTF press settings from Xpres and Garment Films: about 140–160°C, cold peel on the Xpres sheets, plus a second press and a powder-safety note.",
    kicker: "Method",
    h1: "DTF transfer settings",
    lede: "Direct-to-film puts a full-colour design on cotton as well as polyester. The press temperature is not universal: published examples run from about 140°C to 160°C, and the powder cure is a separate step.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/methods/dtf/", label: "DTF transfers" }
    ],
    schema: "howto",
    sources: [
      { label: "Xpres DTF information sheet (PDF)", url: "https://www.xpres.co.uk/globalassets/xpres/downloads/xp2763/dtf-information-sheet.pdf", note: "160°C, 15 seconds, light to medium, cold peel, then repress" },
      { label: "Xpres, how to DTF", url: "https://www.xpres.co.uk/direct-to-film-how-to-guide", note: "150–160°C for 10–15 seconds, medium, cold peel" },
      { label: "Garment Films FAQ", url: "https://garmentfilms.com/pages/faqs", note: "basic DTF figure, 140–150°C for 8–10 seconds, medium" }
    ],
    related: [
      { href: "/fabrics/cotton/", label: "Cotton, where DTF earns its place" },
      { href: "/pyjamas/sublimation/", label: "Cotton pyjamas" },
      { href: "/fabrics/polyester/", label: "Polyester" },
      { href: "/fabrics/tote-bags/", label: "Canvas totes" },
      { href: "/troubleshooting/vinyl-peeling/", label: "If the film lifts" },
      { href: "/methods/sublimation-polyester/", label: "Sublimation instead, on polyester only" }
    ],
    steps: [
      { name: "Print, powder and cure before you press", text: "Xpres describe coating the wet ink with hot-melt powder and curing until it looks like orange peel. Their product sheet says 120°C for 3–5 minutes in their curing unit. Their later guide talks about 150–160°C for a few minutes. Use the sheet with your powder." },
      { name: "Pre-press the garment", text: "The Xpres guide says to pre-press so the fabric is dry and flat. Thread the shirt onto the platen when you can." },
      { name: "Press adhesive side down", text: "Xpres product sheet: 160°C for 15 seconds, light to medium pressure. Their general guide: 150–160°C for 10–15 seconds, medium. Garment Films’ FAQ: 140–150°C for 8–10 seconds, medium, and follow the film’s data sheet." },
      { name: "Peel cold, then repress", text: "On the Xpres sheet, take the garment off the hot platen, peel cold, cover with a silicone sheet and press again for 15 seconds. They say the second press gives a softer finish and helps it last." },
      { name: "Keep powder away from the printer", text: "Xpres say masks, gloves and eye protection are essential with hot-melt powder, that curing can give off hazardous fumes, and that powder should not be used on or near the printer." }
    ],
    faqs: [
      { q: "Why are there three DTF temperatures?", a: "They belong to different instructions. The Xpres product sheet is 160°C for 15 seconds. The Xpres general guide is 150–160°C for 10–15 seconds. Garment Films’ FAQ gives 140–150°C for 8–10 seconds and tells you to follow the technical data sheet. Use the sheet for the film you bought." },
      { q: "The powder looks grainy, or full of pinholes.", a: "Xpres say under-curing leaves a grainy finish and over-curing leaves pin pricks. Both can spoil the look and the wash. Fix the cure before you change the shirt press." },
      { q: "Will DTF work on a cotton tote?", a: "Xpres describe DTF on cotton, polyester and blends. They do not print a separate canvas row. Pre-press the panel and keep seams out of the platen. Ordinary cotton canvas will not sublimate; DTF is the full-colour route." }
    ],
    body: `
<div class="table-wrap">
<table>
  <caption>Published DTF press examples</caption>
  <thead><tr><th>Source</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Xpres DTF information sheet</td><td>160°C (320°F)</td><td>15 seconds, then 15 seconds again</td><td>Light to medium</td><td>Cold, off the platen</td></tr>
    <tr><td>Xpres how-to guide</td><td>150–160°C (302–320°F)</td><td>10–15 seconds</td><td>Medium</td><td>Cold</td></tr>
    <tr><td>Garment Films FAQ</td><td>140–150°C (284–302°F)</td><td>8–10 seconds</td><td>Medium</td><td>Follow the film’s data sheet</td></tr>
  </tbody>
</table>
</div>
<p>Fahrenheit here is the usual conversion, except the Garment Films FAQ, which prints 284–302°F itself. Xpres say heavier cotton may need a slightly higher temperature. They do not give the new number, so creep up on a spare rather than jumping past the sheet.</p>
<p>The cure and the shirt press are different heats. Do not cure powder at the shirt temperature just because both jobs use a heater. Under-cured powder feels grainy and lets go in the wash. That can look like a <a href="/troubleshooting/vinyl-peeling/">peeling</a> problem when the press was never the fault.</p>
<h2>Where DTF fits</h2>
<p>Choose DTF when the design is photographic or full colour and the shirt is <a href="/fabrics/cotton/">cotton</a>, <a href="/fabrics/poly-cotton/">poly-cotton</a> or <a href="/fabrics/polyester/">polyester</a>. <a href="/methods/sublimation-polyester/">Sublimation</a> is the better fabric dye on light polyester, and it cannot print cotton. Cut <a href="/methods/standard-htv/">HTV</a> is simpler for names and one-colour designs.</p>
<p><a href="/fabrics/nylon/">Nylon</a> is not given a DTF time in the Xpres guides. Do not borrow the cotton row. <a href="/fabrics/childrens-clothing/">Children’s polyester</a> may scorch at 160°C; the cooler published example is the Garment Films FAQ range, and it still needs a seam test. Keep poppers and zips off the platen. Cotton pyjamas are a DTF job rather than a sublimation job: see <a href="/pyjamas/sublimation/">can you sublimate cotton pyjamas?</a></p>
<p>Xpres also say room temperature, humidity, design size and ink load all change the result. A setting that worked in a dry room can shift on a damp British afternoon. Pre-press, and test the first shirt of the day.</p>
`
  }
];
