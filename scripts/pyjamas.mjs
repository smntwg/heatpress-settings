function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const photos = {
  B0C24KD4J6: { w: 600, h: 803, alt: "Blue and white kids pyjamas with white top" },
  B0BSR58NC9: { w: 600, h: 799, alt: "Blue stripe kids pyjamas with white top" },
  B0BRT24PH2: { w: 600, h: 1035, alt: "Blue cloud print kids pyjamas with white top" },
  B0BT21ML1J: { w: 600, h: 1016, alt: "Blue stars kids pyjamas with white top" },
  B0C28TCKL6: { w: 600, h: 801, alt: "Pink and white kids pyjamas with white top" },
  B0BXB676WT: { w: 600, h: 801, alt: "Pink stripe kids pyjamas with white top" },
  B0BRY4S423: { w: 600, h: 1016, alt: "Pink cloud print kids pyjamas with white top" },
  B0BXB21ZZ3: { w: 600, h: 1005, alt: "Pink stars kids pyjamas with white top" },
  B0GMRKRZ7K: { w: 600, h: 1026, alt: "Sage and white kids pyjamas with white top" },
  B0F88C6VRC: { w: 600, h: 1012, alt: "Pastel sage stripe kids pyjamas with white top" },
  B0GYSQPXHR: { w: 600, h: 923, alt: "Red stripe kids pyjamas with white top" },
  B0GMRFXVZX: { w: 600, h: 1009, alt: "Mink and white kids pyjamas with white top" },
  B0GYSLPRQN: { w: 600, h: 1011, alt: "Natural stripe kids pyjamas with white top" },
  B0GMQZY2WZ: { w: 600, h: 1011, alt: "Pastel purple and white kids pyjamas with white top" },
  B0FCSH6JLZ: { w: 600, h: 1015, alt: "Pastel purple stripe kids pyjamas with white top" },
  B0BTZ7T4RJ: { w: 600, h: 991, alt: "Blank dinosaur kids pyjamas with white top" },
  B0GWJNXWLG: { w: 600, h: 1028, alt: "Digger print kids pyjamas with white top" },
  B0BWK4XZRT: { w: 600, h: 1062, alt: "Unicorn kids pyjamas with white top" },
  B0GWJKDQGJ: { w: 600, h: 1025, alt: "Fairy princess kids pyjamas with white top" },
  B0C1949NZT: { w: 600, h: 1043, alt: "Heart print kids pyjamas with white top" },
  B0BSC9D8DG: { w: 600, h: 1015, alt: "Ballerina kids pyjamas with white top" },
  B0GWJD7YT7: { w: 600, h: 1012, alt: "Teddy bear kids pyjamas with white top" },
  B0FQPF13NZ: { w: 600, h: 1004, alt: "Bunny print kids pyjamas with white top" },
  B0CHK512ZJ: { w: 600, h: 965, alt: "White blank baby pyjamas" },
  B0GH2368W1: { w: 600, h: 954, alt: "Light blue blank baby pyjamas" },
  B0GH2MG9X5: { w: 600, h: 966, alt: "Pink blank baby pyjamas" }
};

function card(product) {
  const photo = photos[product.asin];
  if (!photo) throw new Error(`No photo for ${product.asin}`);
  const href = `https://www.amazon.co.uk/dp/${product.asin}`;
  return `<li class="blank-card"><img src="/img/blanks/${product.asin}.webp" width="${photo.w}" height="${photo.h}" alt="${esc(photo.alt)}" loading="lazy" decoding="async"><h3>${esc(product.title)}</h3><p>${esc(product.line)}</p><a class="btn" href="${href}" rel="noopener noreferrer">View on Amazon</a></li>`;
}

function grid(products, wide) {
  return `<ul class="blank-grid${wide ? " wide" : ""}">${products.map(card).join("")}</ul>`;
}

function grouped(products) {
  const groups = [];
  for (const product of products) {
    let group = groups.find((item) => item.name === product.group);
    if (!group) {
      group = { name: product.group, items: [] };
      groups.push(group);
    }
    group.items.push(product);
  }
  return groups.map((group) => `<h3 class="blank-group">${esc(group.name)}</h3>${grid(group.items, true)}`).join("");
}

function blanks(inner) {
  return `<aside class="blanks">
  <h2>Blanks we use</h2>
  <p>Cotton And Twigg is our own brand of blanks. These are plain Amazon links, with no affiliate tag.</p>
  ${inner}
</aside>`;
}

const plain = [
  {
    asin: "B0C24KD4J6",
    title: "Blue & White Blank Pyjamas",
    line: "White top, blue sleeves and bottoms."
  },
  {
    asin: "B0C28TCKL6",
    title: "Pink & White Blank Pyjamas",
    line: "White top, pink sleeves and bottoms."
  },
  {
    asin: "B0GMRKRZ7K",
    title: "Sage & White Blank Pyjamas",
    line: "White top, sage sleeves and bottoms."
  },
  {
    asin: "B0GMRFXVZX",
    title: "Mink & White Blank Pyjamas",
    line: "White top, mink sleeves and bottoms."
  },
  {
    asin: "B0GMQZY2WZ",
    title: "Pastel Purple & White Blank Pyjamas",
    line: "White top, pastel purple sleeves and bottoms."
  }
];

const kidsMeasure = [
  { chart: "6/12mths", age: "6–12 months", a: "26.5", b: "35", c: "21", d: "29", e: "41", design: "8–10 cm" },
  { chart: "1/2y", age: "1–2 years", a: "28.5", b: "37.5", c: "22", d: "30.5", e: "44.5", design: "9–11 cm" },
  { chart: "2/3y", age: "2–3 years", a: "30", b: "41", c: "23", d: "32", e: "50.5", design: "10–12 cm" },
  { chart: "3/4y", age: "3–4 years", a: "32", b: "45", c: "24", d: "33", e: "57", design: "11–13 cm" },
  { chart: "4/5y", age: "4–5 years", a: "33.5", b: "49", c: "25", d: "35", e: "63.5", design: "12–14 cm" },
  { chart: "5/6y", age: "5–6 years", a: "34.5", b: "51", c: "26", d: "36", e: "70", design: "13–15 cm" }
];

const babyTop = [
  { age: "0–3 months", height: "30 cm", width: "26 cm", design: "6–8 cm" },
  { age: "3–6 months", height: "33 cm", width: "27 cm", design: "7–9 cm" },
  { age: "6–12 months", height: "35 cm", width: "29 cm", design: "7–9 cm" },
  { age: "1–2 years", height: "37 cm", width: "29 cm", design: "8–10 cm" }
];

const babyBottom = [
  { age: "0–3 months", width: "18 cm", length: "38 cm" },
  { age: "3–6 months", width: "19 cm", length: "39 cm" },
  { age: "6–12 months", width: "21 cm", length: "40 cm" },
  { age: "1–2 years", width: "22 cm", length: "42.5 cm" }
];

function designTable() {
  const rows = kidsMeasure.map((row) =>
    `<tr><td>${esc(row.age)}</td><td>${esc(row.a)} cm</td><td>${esc(row.design)}</td></tr>`
  ).join("");
  return `<div class="guidance">
  <h2>Suggested design width</h2>
  <p>General guidance for a name or a small motif on the white chest. This is not a print area supplied with the garment. Column A is the flat chest width, so the front of the top is about that wide. Stay inside the range and keep the design off the raglan seams and the neckband. A two-line name is better than a line that runs into the sleeve.</p>
  <div class="table-wrap">
  <table class="compact">
    <caption>General guidance only, set against the flat chest</caption>
    <thead><tr><th>Age</th><th>Flat chest (A)</th><th>Suggested design width</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  </div>
</div>`;
}

function measureFigure() {
  return `<figure class="measure-fig">
  <img src="/img/pyjama-measures.svg" width="720" height="340" alt="Schematic of a raglan top and trousers. A is chest width, B is top length, C is the relaxed waist, D is the hips, and E is the outside leg.">
  <figcaption>Where the letters sit. The drawing is not to scale. Use the centimetres in the table, and remember they are flat measurements, not the distance around the body.</figcaption>
</figure>`;
}

const kidsCatalogue = [
  { group: "Blue", asin: "B0C24KD4J6", title: "Blue & White Blank Pyjamas", line: "White top, blue sleeves and bottoms." },
  { group: "Blue", asin: "B0BSR58NC9", title: "Blue Stripe Blank Pyjamas", line: "White top, blue stripe on the sleeves and bottoms." },
  { group: "Blue", asin: "B0BRT24PH2", title: "Blue Cloud Blank Pyjamas", line: "White top, cloud print on the sleeves and bottoms." },
  { group: "Blue", asin: "B0BT21ML1J", title: "Blue Stars Blank Pyjamas", line: "White top, stars print on the sleeves and bottoms." },
  { group: "Pink", asin: "B0C28TCKL6", title: "Pink & White Blank Pyjamas", line: "White top, pink sleeves and bottoms." },
  { group: "Pink", asin: "B0BXB676WT", title: "Pink Stripe Blank Pyjamas", line: "White top, pink stripe on the sleeves and bottoms." },
  { group: "Pink", asin: "B0BRY4S423", title: "Pink Cloud Blank Pyjamas", line: "White top, cloud print on the sleeves and bottoms." },
  { group: "Pink", asin: "B0BXB21ZZ3", title: "Pink Stars Blank Pyjamas", line: "White top, stars print on the sleeves and bottoms." },
  { group: "Sage", asin: "B0GMRKRZ7K", title: "Sage & White Blank Pyjamas", line: "White top, sage sleeves and bottoms." },
  { group: "Sage", asin: "B0F88C6VRC", title: "Pastel Sage Stripe Blank Pyjamas", line: "White top, pastel sage stripe on the sleeves and bottoms." },
  { group: "Red", asin: "B0GYSQPXHR", title: "Red Stripe Blank Pyjamas", line: "White top, red stripe on the sleeves and bottoms." },
  { group: "Neutrals", asin: "B0GMRFXVZX", title: "Mink & White Blank Pyjamas", line: "White top, mink sleeves and bottoms." },
  { group: "Neutrals", asin: "B0GYSLPRQN", title: "Natural Stripe Blank Pyjamas", line: "White top, natural stripe on the sleeves and bottoms." },
  { group: "Purple", asin: "B0GMQZY2WZ", title: "Pastel Purple & White Blank Pyjamas", line: "White top, pastel purple sleeves and bottoms." },
  { group: "Purple", asin: "B0FCSH6JLZ", title: "Pastel Purple Stripe Blank Pyjamas", line: "White top, pastel purple stripe on the sleeves and bottoms." },
  { group: "Prints", asin: "B0BTZ7T4RJ", title: "Blank Dinosaur Pyjamas", line: "White top, dinosaur print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0GWJNXWLG", title: "Digger Print Blank Pyjamas", line: "White top, digger print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0BWK4XZRT", title: "Unicorn Blank Pyjamas", line: "White top, unicorn print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0GWJKDQGJ", title: "Blank Fairy Princess Pyjamas", line: "White top, fairy print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0C1949NZT", title: "Heart Print Blank Pyjamas", line: "White top, heart print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0BSC9D8DG", title: "Ballerina Blank Pyjamas", line: "White top, ballerina print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0GWJD7YT7", title: "Teddy Bear Blank Pyjamas", line: "White top, teddy print on the sleeves and bottoms." },
  { group: "Prints", asin: "B0FQPF13NZ", title: "Bunny Print Blank Pyjamas", line: "White top, bunny print on the sleeves and bottoms." }
];

const babyProducts = [
  {
    asin: "B0CHK512ZJ",
    title: "White Blank Baby Pyjamas",
    line: "Long-sleeve baby set in white. 100% cotton, from 0–3 months to 1–2 years."
  },
  {
    asin: "B0GH2368W1",
    title: "Light Blue Blank Baby Pyjamas",
    line: "Long-sleeve baby set in light blue. 100% cotton, from 0–3 months to 1–2 years."
  },
  {
    asin: "B0GH2MG9X5",
    title: "Pink Blank Baby Pyjamas",
    line: "Long-sleeve baby set in pink. 100% cotton, from 0–3 months to 1–2 years."
  }
];

const christmasProducts = [
  {
    asin: "B0GYSQPXHR",
    title: "Red Stripe Blank Pyjamas",
    line: "White top, red stripe on the sleeves and bottoms."
  },
  {
    asin: "B0C1949NZT",
    title: "Heart Print Blank Pyjamas",
    line: "White top, heart print on the sleeves and bottoms."
  },
  {
    asin: "B0GWJD7YT7",
    title: "Teddy Bear Blank Pyjamas",
    line: "White top, teddy print on the sleeves and bottoms."
  },
  {
    asin: "B0FQPF13NZ",
    title: "Bunny Print Blank Pyjamas",
    line: "White top, bunny print on the sleeves and bottoms."
  }
];

const sublimationProducts = [
  plain[0],
  {
    asin: "B0BSR58NC9",
    title: "Blue Stripe Blank Pyjamas",
    line: "White top, blue stripe on the sleeves and bottoms. The chest is still cotton."
  },
  {
    asin: "B0BWK4XZRT",
    title: "Unicorn Blank Pyjamas",
    line: "White top, unicorn print on the sleeves and bottoms. The chest is still cotton."
  },
  {
    asin: "B0BRY4S423",
    title: "Pink Cloud Blank Pyjamas",
    line: "White top, cloud print on the sleeves and bottoms. The chest is still cotton."
  }
];

const sharedFacts = "The kids’ sets are 100% cotton, about 200 gsm, with a long raglan sleeve. The top body is white. The sleeves and bottoms are coloured, striped or printed. There is no brand label in the neck.";

const crumbs = (label, href) => [
  { href: "/", label: "Home" },
  { href, label }
];

const htvPage = {
  path: "/pyjamas/htv/",
  title: "HTV on kids' cotton pyjamas: temperature, time and placement",
  description: "How to heat press HTV on 100% cotton kids' pyjamas: standard PU, stretch and glitter charts in Celsius, chest placement, and a general design size by age.",
  kicker: "Pyjamas",
  h1: "HTV on kids' pyjamas",
  lede: "These are cotton jersey tops with a white chest. Everyday PU, stretch vinyl and glitter all have a published cotton row. Use the row for the roll in your hand, and keep the design on the white body.",
  crumbs: crumbs("HTV on pyjamas", "/pyjamas/htv/"),
  schema: "howto",
  totalTime: "PT15M",
  notice: "Temperatures below are the film charts already published on this site. They are starting points. Test on a spare top. These pyjamas are about 200 gsm, so use the heavier-fabric row when a film prints one.",
  sources: [
    { label: "Siser EasyWeed", url: "https://www.siserna.com/easyweed/", note: "150°C, 10–15 seconds, medium, hot or cold peel, including 100% cotton" },
    { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "One Flex, Stretch Flex and Premium Glitter" },
    { label: "Siser HI-5", url: "https://www.siser.com/cad-cut/hi-5/", note: "150°C for 5 seconds when the textile is heavier than 150 g/m²" },
    { label: "Siser EasyWeed Stretch", url: "https://www.siserna.com/easyweed-stretch/", note: "160°C, firm, 20 seconds" },
    { label: "Siser HTV application instructions (PDF)", url: "https://uscutter.com/content/PDFs/Siser-heat-transfer-vinyl-instructions-2024.pdf", note: "EcoStretch at 120°C" },
    { label: "Siser Glitter", url: "https://www.siserna.com/glitter/", note: "160°C, warm peel on the North America page" },
    { label: "Siser, heat-sensitive textiles", url: "https://www.siser.com/news/how-to-prevent-discoloring-and-scorching-heat-sensitive-textiles/", note: "cover sheet" }
  ],
  related: [
    { href: "/methods/standard-htv/", label: "Standard HTV charts" },
    { href: "/methods/stretch-metallic-holographic-htv/", label: "Stretch films" },
    { href: "/methods/glitter-htv/", label: "Glitter HTV" },
    { href: "/pyjamas/size-guide/", label: "Pyjama size guide" },
    { href: "/pyjamas/christmas/", label: "Christmas names and slogans" },
    { href: "/fabrics/childrens-clothing/", label: "Children's clothing" }
  ],
  steps: [
    { name: "Cut it mirrored", text: "Mirror text and weed the film. Keep a name or small motif inside the suggested widths on this page, with a gap before the raglan seams." },
    { name: "Pre-press the white chest", text: "Siser say 2–3 seconds. Garment Films’ FAQ says 5–10 seconds when you need to clear wrinkles and moisture. Cotton holds both. Pre-press the chest you are about to decorate." },
    { name: "Place and cover", text: "Centre the design on the white body, clear of the neckband and the raglan seams. Cover it with a heat-transfer sheet, parchment, or the shiny side of multipurpose paper." },
    { name: "Press that film's row", text: "EasyWeed is 150°C for 10–15 seconds at medium pressure. One Flex’s standard line is 140°C for 8 seconds. Stretch and glitter films use their own rows. Do not mix a temperature from one with a time from another." },
    { name: "Peel as the sheet says", text: "EasyWeed peels hot or cold. Glitter on the Siser North America page peels warm. EcoStretch peels hot. If a corner of EasyWeed lifts, cover it and press again for 5–10 seconds." },
    { name: "Wait a day", text: "Siser and Garment Films say to wait 24 hours before the first wash. Wash inside out, skip fabric conditioner, and skip bleach. Follow the garment’s own care label as well." }
  ],
  faqs: [
    { q: "Will ordinary EasyWeed crack on pyjama jersey?", a: "EasyWeed lists 100% cotton at 150°C for 10–15 seconds, medium pressure, hot or cold peel. These tops are a knit, so the chest stretches when a child pulls them on. If the design sits where the fabric will be pulled, a stretch film that lists cotton is the published match. Test a spare either way." },
    { q: "Can I use the 120°C HI-5 setting because they are children’s pyjamas?", a: "Only if the fabric is up to 150 g/m². Siser’s 120°C, 5-second press is for that lighter textile. These pyjamas are about 200 gsm, so the HI-5 row that matches the weight is 150°C for 5 seconds at high pressure. The 120°C line is the wrong row for this cloth." },
    { q: "Is glitter suitable?", a: "The glitter charts on this site list cotton and start at 160°C. That is a normal cotton temperature, and it is still hot. Cover the top, peel the way your roll says, and test a spare. Siser’s North America page wants a warm peel. Their EU page says hot or cold. The insert in the box wins." }
  ],
  body: `
<p>${sharedFacts} The white chest is the part to press. A design that crosses a raglan seam sits on a ridge, and the platen does not meet the film evenly. Printed or striped sleeves are a poor second choice: the print is already there, and the seam is in the way.</p>
<h2>Films that list 100% cotton</h2>
<p>Pick the family, then the brand row. <a href="/methods/standard-htv/">Standard PU</a> is the simple film for a name. <a href="/methods/stretch-metallic-holographic-htv/">Stretch</a> is the one published for fabric that moves. <a href="/methods/glitter-htv/">Glitter</a> is the sparkle film, at a higher heat. Metallic and holographic films are on that stretch page too if you want them. They are not a better default for nightwear.</p>
<div class="table-wrap">
<table>
  <caption>Published cotton rows for the films most people use on these tops</caption>
  <thead><tr><th>Film</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Siser EasyWeed</td><td>150°C (305°F)</td><td>10–15 seconds</td><td>Medium</td><td>Hot or cold</td></tr>
    <tr><td>Garment Films One Flex, standard</td><td>140°C (284°F)</td><td>8 seconds</td><td>Not listed on the chart</td><td>Hot, warm or cool</td></tr>
    <tr><td>One Flex, cooler option</td><td>120°C (248°F)</td><td>15 seconds</td><td>Not listed on the chart</td><td>Hot, warm or cool</td></tr>
    <tr><td>Siser HI-5, textile over 150 g/m²</td><td>150°C (302°F)</td><td>5 seconds</td><td>High (about 4–5 bar)</td><td>Hot or cold</td></tr>
    <tr><td>Siser EasyWeed EcoStretch</td><td>120°C (250°F)</td><td>10–15 seconds</td><td>Medium</td><td>Hot</td></tr>
    <tr><td>Garment Films Stretch Flex</td><td>150°C (302°F)</td><td>10 seconds</td><td>Not listed on the chart</td><td>Cool</td></tr>
    <tr><td>Siser EasyWeed Stretch</td><td>160°C (320°F)</td><td>20 seconds</td><td>Firm</td><td>Hot or cold</td></tr>
    <tr><td>Siser Glitter, North America</td><td>160°C (320°F)</td><td>15–20 seconds</td><td>Medium</td><td>Warm</td></tr>
    <tr><td>Garment Films Premium Glitter</td><td>160–170°C (320–338°F)</td><td>15 seconds</td><td>Not listed on the chart</td><td>Hot, warm or cool</td></tr>
  </tbody>
</table>
</div>
<p>EasyWeed’s 305°F is the figure Siser print beside 150°C. One Flex also lists 150°C for 5 seconds and 130°C for 10 seconds. Garment Films call 140°C for 8 seconds the standard recommendation. Their chart does not print a pressure, so use the sheet in the packet rather than guessing “medium”.</p>
<p>HI-5 is the film Siser describe as certified for baby clothing, and the product is OEKO-TEX Standard 100 Class I. That statement is about the film. On the product page, 120°C for 5 seconds is for textiles up to 150 g/m². Heavier cloth is 150°C for 5 seconds at high pressure. About 200 gsm is the heavier row. Do not drop to 120°C on HI-5 just because the top is small.</p>
<p>EcoStretch is the cooler stretch film: 120°C (250°F), medium, 10–15 seconds, hot peel, listed for cotton. The instruction sheet we use does not split that film by fabric weight. EasyWeed Stretch is much hotter and firmer, at 160°C for 20 seconds, and it does list cotton. If a spare shines or the cotton yellows, stop. The <a href="/troubleshooting/scorch-marks/">scorch page</a> is why a second, hotter press will not help.</p>
<p>Glitter’s North America time is 15–20 seconds with a warm peel, at least 15 seconds off the press. The EU glitter page says 15 seconds and a hot or cold peel. Same brand, different sheets. Cover the garment. Glitter is thicker than everyday PU and it does not stretch with a knit the way EcoStretch does, so a large glitter name on a chest that gets pulled on is a spare-top test, not a batch.</p>
<h2>Placement</h2>
<p>Lay the top flat, front up, sleeves out to the sides. The design sits in the middle of the white chest, below the neckband, with plain cotton around it. Measure the gap from the neckband on a test top so the next one matches. Keep the carrier off the raglan seam. If the platen also covers a printed sleeve, that print takes the same heat. Slide the top so the platen meets the white chest and as little of the print as you can manage.</p>
<p>There is no brand label to work around. Keep any poppers or zips off the platen. They mark, and that is not a vinyl fault. Baby sets are a different cut, with their own measurements on the <a href="/pyjamas/size-guide/">size guide</a>. The same cotton film rows apply. The design needs to be smaller.</p>
${designTable()}
<p>Full garment measurements, from 6–12 months to 5–6 years, are on the <a href="/pyjamas/size-guide/">size guide</a>. Baby widths are there too. Embroidery uses the same chest, with a smaller ceiling for dense stitching, on the <a href="/pyjamas/embroidery/">embroidery page</a>.</p>
<h2>Pre-press, cover, then wait</h2>
<p>Pre-press before the film goes down. Siser’s short pre-press is 2–3 seconds. Garment Films’ FAQ allows 5–10 seconds to clear moisture and wrinkles. A pyjama folded in a packet usually wants the longer end. Press the chest, not a slogan, and let the steam escape before you position the vinyl.</p>
<p>Cover the design. Siser’s heat-sensitive article names a heat-transfer cover sheet, and parchment or the shiny side of multipurpose paper as a stand-in. The cover stops the platen polishing a rectangle into the cotton around the design. It matters more at glitter’s 160°C than at EcoStretch’s 120°C. Use it for both.</p>
<p>After peeling, leave the top for 24 hours before it is washed. Wash inside out. Skip fabric conditioner. Siser also say to skip bleach. These film notes do not print a wash temperature for the pyjamas, so follow the care label in the garment. A hot tumble on the day you pressed is a different test from the one they published. If an edge lifts later, the checks are on the <a href="/troubleshooting/vinyl-peeling/">peeling page</a>.</p>
<p>If you sell children’s nightwear in the UK, a name on the chest does not remove the labelling rules. The <a href="/fabrics/childrens-clothing/">children’s clothing page</a> points at the trading-standards summary. This site is not legal advice.</p>
`,
  closing: blanks(`<p>Plain colour-and-white sets. The white chest is the pressing area. The same cotton applies to the stripes and prints on the <a href="/pyjamas/size-guide/">size guide</a>.</p>${grid(plain)}`)
};

const embroideryPage = {
  path: "/pyjamas/embroidery/",
  title: "Embroidery on blank kids' cotton pyjamas",
  description: "How to embroider 200 gsm cotton jersey pyjamas: cut-away stabiliser, hooping a small raglan, design size, and how to avoid puckering.",
  kicker: "Pyjamas",
  h1: "Embroidery on blank pyjamas",
  lede: "A cotton jersey top will take a name or a small motif if the stabiliser stays with the stitches and the fabric was not stretched in the hoop. A dense fill across the chest is how these tops pucker.",
  crumbs: crumbs("Embroidery", "/pyjamas/embroidery/"),
  schema: "howto",
  totalTime: "PT45M",
  tools: ["Embroidery hoop", "Cut-away stabiliser"],
  notice: "This is general practice for cotton jersey of about 200 gsm. It is not a heat-press temperature, and it is not a setting from an embroidery brand. Test a spare top before a batch.",
  related: [
    { href: "/pyjamas/size-guide/", label: "Size guide and design widths" },
    { href: "/pyjamas/htv/", label: "HTV if you would rather press a name" },
    { href: "/pyjamas/christmas/", label: "Christmas pyjamas" },
    { href: "/fabrics/cotton/", label: "100% cotton" },
    { href: "/fabrics/childrens-clothing/", label: "Children's clothing" }
  ],
  steps: [
    { name: "Choose a modest design", text: "A name in satin stitch, or a small motif with open areas, suits jersey. A solid fill across the suggested width is more likely to pucker. Stay at or under the widths on this page." },
    { name: "Back it with cut-away", text: "Use a light cut-away or a no-show mesh for a name. Keep a heavier cut-away for a dense design, and expect it to feel firmer against the skin. Put a water-soluble topping on the front so satin stitches sit on the knit instead of sinking into it." },
    { name: "Hoop without stretching", text: "Use the smallest hoop that leaves a margin of fabric around the design. Smooth the jersey. Do not pull it drum-tight. On a small raglan, hoop the stabiliser and float the top on it if the neck and sleeves will not sit in the hoop." },
    { name: "Keep seams and the back out", text: "Roll the sleeves and the back away. Check you are not stitching the front to the back. Keep the design on the white chest, off the raglan seams and the neckband." },
    { name: "Stitch, then trim", text: "Use a ballpoint or jersey needle so the point slips between the knit loops. When you finish, trim cut-away to a small border. Do not rip it out. Press from the back with a cloth only once the stitches are cool, and follow the garment label." }
  ],
  faqs: [
    { q: "Tear-away or cut-away?", a: "Cut-away, or a soft cut-away mesh, for cotton jersey that will be washed. Tear-away on its own lets the knit relax after you pull it off, and the stitches pucker. A topping on the front is an extra, not a substitute for the backing." },
    { q: "How big can the design be?", a: "Use the suggested widths on this page as a ceiling for a name. They are general guidance, not a marked embroidery area. A filled shape should sit at the smaller end or under it. If the design reaches the raglan seam, it is too wide." },
    { q: "The stitches sank into the fabric. What failed?", a: "Usually the front of the jersey had no topping, or the design was too dense for a knit. A water-soluble topping gives satin stitches something to sit on. It does not hold the garment. The cut-away underneath does that." }
  ],
  body: `
<p>${sharedFacts} Embroidery sits on that white chest, same as vinyl. The knit is the part that needs planning. Jersey moves, and a design that looks flat in the hoop can pucker the moment you unhoop it.</p>
<h2>Stabiliser for this weight</h2>
<p>About 200 gsm is a mid-weight cotton jersey, not a woven shirt and not a fleece. It needs a stabiliser that remains after the stitching. A light cut-away, sometimes sold as no-show mesh, is the usual backing for a name: enough support to stop the knit relaxing, soft enough that pyjamas are still comfortable against skin. Trim it close once you have checked the front. Leave a small border of stabiliser. Cutting into the stitches unpicks the edge.</p>
<p>A heavier cut-away is for a dense design. It also makes a patch you can feel. On nightwear, that is a reason to simplify the design rather than to add more backing. Tear-away alone is the common miss. It holds the fabric during stitching and then leaves. The jersey returns to shape and the stitches stay where they were, which is a pucker.</p>
<p>A water-soluble topping, the clear film on the front, stops satin stitches burying themselves between the knit loops. Use it on lettering. It washes away later. It is not the stabiliser.</p>
<h2>Hooping a small top</h2>
<p>A 6–12 month chest is a small target, and a raglan sleeve fights a large hoop. Use the smallest hoop the design fits in, with bare fabric between the stitches and the hoop ring. The ring should not sit on the raglan seam. A seam under the ring, or under the design, will not lie flat, and the stitches pile up on the ridge.</p>
<p>Do not stretch the jersey while you hoop it. Woven cloth is often hooped taut. Jersey should be smooth and unwrinkled, not pulled wider than it sits on a table. If you stretched it, the design shrinks the chest when the hoop comes off.</p>
<p>Two ways work on a small raglan. Hoop the stabiliser and the front together, gently, with the sleeves and the back rolled out of the way. Or hoop only the stabiliser, then float the top on it with a temporary adhesive or a few pins outside the stitch area. Floating is often easier, because the neckband and the sleeves never have to enter the ring. Either way, look inside the top before you start. Stitching the front to the back is a ruined set.</p>
<p>Use a ballpoint or jersey needle. A sharp needle can cut the cotton loops and start a ladder that looks like a hole beside the design. Match the needle size to the thread the design was digitised for. There is no brand label in the neck to stitch around.</p>
<h2>Puckering</h2>
<p>Work through it in this order if a test top comes out wrinkled:</p>
<ol>
  <li><strong>The fabric was stretched in the hoop.</strong> Re-hoop a spare smoothly. This is the usual cause on jersey.</li>
  <li><strong>The backing came away.</strong> Move to a cut-away and leave it in the garment.</li>
  <li><strong>The design is too dense.</strong> Large fills and very small satin lettering both stress a knit. Open the spacing, or stitch a simpler name.</li>
  <li><strong>A seam is in the design.</strong> Move the motif down or in until it sits on plain chest.</li>
  <li><strong>The back of the stitching is a row of tight knots.</strong> The tension is pulling the knit in. Sort the tension on a scrap of the same jersey before you restitch a good top.</li>
</ol>
<p>An underlay in the design, a line of stitching under the satin, gives the letters a foundation. If your file has no underlay, a knit will show it. That is a digitising choice, not a hotter needle.</p>
${designTable()}
<p>For embroidery, treat the right-hand column as a ceiling. A filled motif should be smaller than a name in satin stitch at the same age. Baby sets use a different garment and a shorter list of widths, on the <a href="/pyjamas/size-guide/">size guide</a>. The same stabiliser advice applies. The hoop just gets smaller.</p>
<p>If you would rather press a name than stitch it, the cotton film charts and the chest placement are on the <a href="/pyjamas/htv/">HTV page</a>. Heat from an iron is a different job from those charts. Do not slide a hot iron across finished embroidery. If the top needs flattening, press from the back with a cloth after the stitches have cooled, and follow the care label. These pages do not print an iron temperature for that.</p>
`,
  closing: blanks(`<p>Colour-and-white sets. Embroidery wants the plain white chest, with the colour kept to the sleeves and bottoms.</p>${grid(plain)}`)
};

const sublimationPage = {
  path: "/pyjamas/sublimation/",
  title: "Can you sublimate cotton pyjamas?",
  description: "No. These kids' pyjamas are 100% cotton, so sublimation dye will not bond. What to use instead: HTV, DTF, or a coated transfer, plus what EasyWeed Sub Block is actually for.",
  kicker: "Pyjamas",
  h1: "Can you sublimate cotton pyjamas?",
  lede: "No. These blank pyjamas are 100% cotton. Sublimation dye bonds with polyester, or with a polymer coating made for it. A white chest does not change the fibre, and a longer press does not either.",
  crumbs: crumbs("Sublimation", "/pyjamas/sublimation/"),
  schema: "article",
  notice: "Do not use a polyester sublimation temperature on these tops in the hope the dye will take. Sawgrass list polyester fabric at 205°C and Xpres use 190°C. Those pairs are for polyester. They are not a cotton setting.",
  sources: [
    { label: "Xpres, how to sublimate T-shirts", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts", note: "needs light-coloured polyester or a polymer coating, and will not work on cotton" },
    { label: "Sawgrass sublimation heat press settings", url: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings", note: "polyester fabric, 205°C for 45 seconds" },
    { label: "Siser EasyWeed Sub Block", url: "https://www.siserna.com/easyweed-sub-block/", note: "130°C blocker under HTV, not a cotton sublimation coating" },
    { label: "Xpres, how to DTF", url: "https://www.xpres.co.uk/direct-to-film-how-to-guide", note: "DTF on cotton" },
    { label: "Siser EasyWeed", url: "https://www.siserna.com/easyweed/", note: "HTV route for 100% cotton" }
  ],
  related: [
    { href: "/methods/sublimation-polyester/", label: "Sublimation, when the shirt is polyester" },
    { href: "/methods/dtf/", label: "DTF on cotton" },
    { href: "/methods/standard-htv/", label: "Standard HTV and Sub Block" },
    { href: "/pyjamas/htv/", label: "HTV on these pyjamas" },
    { href: "/fabrics/cotton/", label: "100% cotton" },
    { href: "/troubleshooting/faded-sublimation/", label: "Faded sublimation" }
  ],
  faqs: [
    { q: "What if I press for longer, or press twice?", a: "A second press can move dye that is still in the paper when the blank is polyester. On cotton there is nothing for that dye to bond with. Xpres say sublimation will not work on cotton. More time adds heat, not polyester." },
    { q: "The chest is white. Does that help?", a: "It helps vinyl and DTF, because you can see the design. It does not help sublimation. The white body is 100% cotton as well. White polyester is a different blank." },
    { q: "Is EasyWeed Sub Block the coating people mean?", a: "No. Sub Block is a vinyl blocker at 130°C (265°F) for 10–15 seconds, medium pressure, hot or cold peel. Siser publish it so dye in polyester does not creep into ordinary HTV. This site does not describe pressing sublimation paper onto Sub Block, and it does not turn these pyjamas into a sublimation blank." }
  ],
  body: `
<p>${sharedFacts} People ask about sublimation because the chest is white and looks like a blank. The chemistry does not care that it is white. It cares that the fibre is cotton.</p>
<h2>Why cotton stays blank</h2>
<p>Xpres state that sublimation needs light-coloured polyester or a polymer coating, and will not work on cotton or on dark garments. The dye turns to a gas and bonds with polyester. Cotton fibres do not take it. There is no white ink in the process either, which is a separate limit, and it is not the one that stops these tops. These tops fail the fibre test before colour even matters.</p>
<p>The <a href="/methods/sublimation-polyester/">polyester page</a> is where those presses live. Sawgrass list polyester fabric at 205°C (400°F) for 45 seconds, medium pressure. Xpres press polyester T-shirts at 190°C for 60–70 seconds, medium, and peel hot. Using either pair on a cotton pyjama risks scorching a top that still will not show a print. If a test looks pale, the <a href="/troubleshooting/faded-sublimation/">faded sublimation</a> page already names cotton as the first cause. More tape, more time and a second press are for polyester that almost worked.</p>
<p>A stripe or a character print does not make a secret polyester panel. The white chest on those sets is the same cotton as a plain colour-and-white set.</p>
<h2>What to do instead</h2>
<h3>Heat transfer vinyl</h3>
<p>A name or a short slogan is an <a href="/methods/standard-htv/">HTV</a> job. Siser EasyWeed, which lists 100% cotton, is 150°C (305°F) for 10–15 seconds, medium, hot or cold peel. Garment Films One Flex uses 140°C for 8 seconds as the standard recommendation. Placement on the chest, stretch and glitter rows, and a general design width by age are on the <a href="/pyjamas/htv/">pyjama HTV page</a>.</p>
<h3>DTF</h3>
<p>A photograph or a full-colour design wants <a href="/methods/dtf/">DTF</a>. Xpres describe it for cotton as well as polyester and blends. Their product sheet presses at 160°C for 15 seconds, light to medium, cold peel, then a second 15-second press. Their general guide says 150–160°C for 10–15 seconds. Garment Films’ FAQ lists a basic range of 140–150°C for 8–10 seconds. Use the sheet for the film you bought. DTF is a transfer you press on. It is not sublimation dye entering the cotton.</p>
<h3>A sublimation transfer made for cotton</h3>
<p>Some films are sold so you sublimate onto the film, then press that film onto cotton. The dye is bonding to a coating on the film. It is not bonding to the pyjama the way it would on polyester. Xpres already include “polymer coating” in the list of things that work. An ordinary cotton pyjama is not that coated item.</p>
<p>This site does not publish a temperature for those films. Do not borrow 190°C or 205°C from the polyester shirt charts and assume the film uses them. Read the sheet packed with the film, press a spare, and keep the design on the white chest the same way you would for HTV. If the packet has no cotton instruction, it is not a cotton method.</p>
<h3>EasyWeed Sub Block</h3>
<p><a href="/methods/standard-htv/">Sub Block</a> is easy to confuse with those coated films because of the name. On this site it is a blocker for polyester that bleeds dye into ordinary HTV, including many sublimated shirts. The published press is 130°C (265°F), medium pressure, 10–15 seconds, hot or cold peel. You can layer other HTV colours on top of it.</p>
<p>That is a vinyl-on-polyester problem. These pyjamas are cotton, so dye migration from the garment is not the problem you have. This site does not give a method for sublimating onto Sub Block, and pressing sublimation paper onto the cotton, with or without a layer of Sub Block underneath, is not a workaround the Sub Block page describes.</p>
<p>Christmas wording and which blank suits a seasonal set are on the <a href="/pyjamas/christmas/">Christmas pyjama page</a>. None of that is a sublimation job on these tops.</p>
`,
  closing: blanks(`<p>Plain, stripe and print. Each of these has a white cotton chest. Sublimation does not bond to it. HTV and DTF can.</p>${grid(sublimationProducts)}`)
};

const christmasPage = {
  path: "/pyjamas/christmas/",
  title: "Blank Christmas pyjamas: names, colours and when to order",
  description: "A light guide to personalising blank kids' pyjamas for Christmas: which method suits a name or slogan, red stripe and festive prints, and why to order before December.",
  kicker: "Pyjamas",
  h1: "Blank Christmas pyjamas",
  lede: "A named pair is a simple thing to put in a Christmas Eve box. The tops are white on the chest, so a name has somewhere to sit. Order the size before December, then press or stitch with time to spare.",
  crumbs: crumbs("Christmas", "/pyjamas/christmas/"),
  schema: "article",
  notice: "This page is about planning the set. Press temperatures live on the HTV and DTF pages. Nothing here is a new number.",
  related: [
    { href: "/pyjamas/htv/", label: "HTV for names and slogans" },
    { href: "/pyjamas/embroidery/", label: "A stitched name" },
    { href: "/methods/dtf/", label: "DTF for a full-colour design" },
    { href: "/pyjamas/sublimation/", label: "Why not sublimation" },
    { href: "/pyjamas/size-guide/", label: "Sizes from 6–12 months to 5–6 years" }
  ],
  faqs: [
    { q: "Which method should I use for a name?", a: "Heat transfer vinyl, for a flat name in one or two colours. Embroidery if you want stitches. DTF if the design is a full-colour picture. These tops are 100% cotton, so sublimation is the one to skip." },
    { q: "Do Christmas designs need a different temperature?", a: "No. A name in green vinyl uses the same cotton row as a name in March. Follow the film. EasyWeed is 150°C for 10–15 seconds. One Flex’s standard line is 140°C for 8 seconds. Glitter stays on the glitter chart, from 160°C." },
    { q: "When should I wash them before wrapping?", a: "The film charts say wait 24 hours after pressing, then wash inside out without fabric conditioner if you want them washed before they are worn. Build that day into the plan. A top pressed on Christmas Eve is not ready for a hot wash that night." }
  ],
  body: `
<p>${sharedFacts} The kids’ sets linked here run from 6–12 months to 5–6 years. Check the <a href="/pyjamas/size-guide/">size guide</a> before you guess from age. Baby sets are a separate, smaller range.</p>
<h2>Christmas Eve boxes</h2>
<p>Pyjamas earn their place in a Christmas Eve box because they are the thing a child puts on that night. A first name on the chest is enough. Around them, people often tuck a book, a sachet of hot chocolate, and a small toy or decoration. The box does not need a theme for every item. One personalised pair carries it.</p>
<p>Order earlier than the week of Christmas. A size that is easy to find in October is the size other people are also packing. Personalising takes a press or a stitch-out, and vinyl then wants 24 hours before a first wash. Leave yourself that day, plus a spare top if you are trying a film you have not used on jersey before.</p>
<h2>Names and slogans</h2>
<p>A first name, or a short line such as a nickname, is <a href="/pyjamas/htv/">HTV</a>. Standard PU is the everyday film. EcoStretch, at 120°C, is the cooler stretch film if the chest will be pulled when the top goes on. Keep the wording inside the suggested widths on the HTV page. “Merry Christmas” is long. On a 6–12 month top it usually needs two lines, or you drop it and stitch or press the name only. Widening a slogan until it touches the raglan seam is how the ends peel.</p>
<p>Glitter is the festive film people reach for. It is also 160°C on the charts here, and thicker than everyday PU. Fine on cotton if you cover the top and test a spare. It is a poor choice for a long sentence. A glitter initial, or a short name, is the kinder use.</p>
<p>A stitched name feels quieter on nightwear. Stabiliser and hoop notes are on the <a href="/pyjamas/embroidery/">embroidery page</a>. A full-colour scene, a character you have drawn, a photo, is <a href="/methods/dtf/">DTF</a>, not sublimation. These sets are cotton. The honest version of that question is on the <a href="/pyjamas/sublimation/">sublimation page</a>.</p>
<h2>Colours and patterns</h2>
<p>Red stripe is the Christmas classic in this range: a white chest, with a red stripe on the sleeves and bottoms. It is a stripe, not a solid red suit. A name in green, cream or white stays readable on the white body. Red vinyl can disappear at a glance once the eye hits the red sleeve, so keep the film on the chest and off the stripe.</p>
<p>Heart, teddy and bunny prints are the softer sets. The pattern stays on the sleeves and bottoms. The chest is still plain white, which is what you want if the name is doing the seasonal work. Stars, unicorns, clouds and the fairy print are the same idea. They are grouped on the <a href="/pyjamas/size-guide/">size guide</a> if red feels too loud for the child.</p>
<p>A colour-and-white set, blue, pink, sage or mink, is the right pick when the design should be the only pattern. Navy or black vinyl on a mink or sage sleeve-colour still belongs on the white chest, where you can see the edges.</p>
<p>If you are selling the finished nightwear, UK labelling rules still apply. A Christmas name does not change them. See the <a href="/fabrics/childrens-clothing/">children’s clothing page</a>. This site is not legal advice.</p>
`,
  closing: blanks(`<p>Red stripe, then three prints that still leave a white chest for a name. More colours and patterns are on the <a href="/pyjamas/size-guide/">size guide</a>.</p>${grid(christmasProducts)}`)
};

function kidsTable() {
  const rows = kidsMeasure.map((row) =>
    `<tr><td>${esc(row.chart)}</td><td>${esc(row.age)}</td><td>${esc(row.a)}</td><td>${esc(row.b)}</td><td>${esc(row.c)}</td><td>${esc(row.d)}</td><td>${esc(row.e)}</td></tr>`
  ).join("");
  return `<div class="table-wrap">
<table>
  <caption>Flat garment measurements in centimetres, for the raglan sets. Approximate.</caption>
  <thead><tr><th>Chart size</th><th>Age</th><th>A Chest</th><th>B Length</th><th>C Waist</th><th>D Hips</th><th>E Outside leg</th></tr></thead>
  <tbody>${rows}</tbody>
</table>
</div>`;
}

function babyDesignTable() {
  const rows = babyTop.map((row) =>
    `<tr><td>${esc(row.age)}</td><td>${esc(row.design)}</td></tr>`
  ).join("");
  return `<div class="guidance">
  <h2>Suggested design width for baby sets</h2>
  <p>General guidance only, and deliberately smaller than the raglan list. The baby chart does not say how “width” was measured, so do not treat these as a calculated print area. Keep a name well inside the chest, clear of seams and the neck.</p>
  <div class="table-wrap">
  <table class="compact">
    <caption>General guidance only, for the baby sets</caption>
    <thead><tr><th>Age</th><th>Suggested design width</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  </div>
</div>`;
}

const sizePage = {
  path: "/pyjamas/size-guide/",
  title: "Kids' pyjama size guide: 6–12 months to 5–6 years",
  description: "Flat measurements for blank kids' pyjamas from 6–12 months to 5–6 years, a separate baby chart, and suggested design widths labelled as general guidance.",
  kicker: "Pyjamas",
  h1: "Size guide for kids' pyjamas",
  lede: "Flat measurements for the raglan sets, from 6–12 months to 5–6 years, plus a separate chart for the baby sets. The numbers are approximate. Age on the label is not a chest measurement.",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "/pyjamas/size-guide/", label: "Pyjama size guide" }
  ],
  schema: "article",
  notice: "These are approximate flat garment measurements, not the child’s height or a circular chest size. Compare them with a pair that already fits if you can. A design width later on this page is general guidance, not part of the garment chart.",
  related: [
    { href: "/pyjamas/htv/", label: "Where to place a design" },
    { href: "/pyjamas/embroidery/", label: "Embroidery" },
    { href: "/pyjamas/christmas/", label: "Christmas pyjamas" },
    { href: "/fabrics/childrens-clothing/", label: "Children's clothing" }
  ],
  faqs: [
    { q: "Do these come in 7–8 or 9–10 years?", a: "The kids’ sets linked on this page are sold from 6–12 months up to 5–6 years. Use the 5–6 year row as the largest of this range, and check the flat chest rather than stretching an older child into it." },
    { q: "Is the chest measurement all the way around?", a: "No. The chart these raglan figures come from says the measurements are flat, not circular. A is the chest width laid flat, taken 2.5 cm below the armhole. Twice that number is closer to a circumference, and even that is only a rough reading of a soft jersey." },
    { q: "Can I use the baby chart for a 6–12 month raglan?", a: "No. They are different garments. A 6–12 month raglan uses the 6/12mths row in the first table. A 6–12 month baby set uses the baby table. The chest figures are not the same." }
  ],
  body: `
<p>${sharedFacts} The listings on this page stop at 5–6 years. Baby sets, further down, are a different long-sleeve pyjama and run from 0–3 months to 1–2 years.</p>
${measureFigure()}
<ul>
  <li><strong>A, chest.</strong> Flat width, 2.5 cm below the armhole. This is the front-to-back measurement of the top laid flat, not the distance around the child.</li>
  <li><strong>B, length.</strong> From the side neck point (SNP) to the hem. On a raglan, that is the length of the body from the neck, not the length of the sleeve.</li>
  <li><strong>C, waist.</strong> Relaxed waist of the bottoms. The waistband is elasticated, so a tape pulled tight will not match this column.</li>
  <li><strong>D, hips.</strong> The widest flat width of the bottoms.</li>
  <li><strong>E, outside leg.</strong> The outside leg including the waistband.</li>
</ul>
<p>The chart labels the rows 6/12mths, 1/2y, 2/3y, 3/4y, 4/5y and 5/6y. Those are the six sizes these kids’ sets are sold in. Garment measurements are flat, not circular, and they are approximate. Nothing here says the sets run large or small. If you can lay a pair that already fits next to a tape, columns A to E will tell you more than the age on the label. Children in the same age band are not the same shape, and a tape around a child is not the same thing as the garment laid flat.</p>
${kidsTable()}
${designTable()}
<p>Those widths are for a name or a small motif in <a href="/pyjamas/htv/">HTV</a> or <a href="/pyjamas/embroidery/">embroidery</a>. A filled embroidery design should sit at the smaller end. A long Christmas slogan often needs two lines rather than a wider one. Placement, on the white chest and off the raglan seams, is on the HTV page.</p>
<h2>Baby sets</h2>
<p>The baby pyjamas are a separate set: long sleeves, 100% cotton, about 200 gsm, no brand label. They are not described as raglan. The size table is different, and it does not say whether “height” and “width” are taken the same way as A and B above. Read them as the figures printed for this set, still approximate.</p>
<div class="table-wrap">
<table class="compact">
  <caption>Baby top. The original table headers are height and width. Approximate.</caption>
  <thead><tr><th>Size</th><th>Height</th><th>Width</th></tr></thead>
  <tbody>${babyTop.map((row) => `<tr><td>${esc(row.age)}</td><td>${esc(row.height)}</td><td>${esc(row.width)}</td></tr>`).join("")}</tbody>
</table>
</div>
<div class="table-wrap">
<table class="compact">
  <caption>Baby bottoms. Approximate.</caption>
  <thead><tr><th>Size</th><th>Width</th><th>Length</th></tr></thead>
  <tbody>${babyBottom.map((row) => `<tr><td>${esc(row.age)}</td><td>${esc(row.width)}</td><td>${esc(row.length)}</td></tr>`).join("")}</tbody>
</table>
</div>
${babyDesignTable()}
<p>White, light blue and pink baby sets are at the bottom of this page. A 6–12 month baby and a 6–12 month raglan can both be in the house at once. Use the chart that matches the garment, not the age alone.</p>
`,
  closing: blanks(`<p>Kids’ raglan sets, from 6–12 months to 5–6 years, grouped by colour and print. Baby sets follow, on their own chart above.</p>${grouped(kidsCatalogue)}<h3 class="blank-group">Baby sets</h3><p>A different long-sleeve set, not the raglan measurements. These are 100% cotton.</p>${grid(babyProducts)}`)
};

export const pyjamaPages = [htvPage, embroideryPage, sublimationPage, christmasPage, sizePage];
