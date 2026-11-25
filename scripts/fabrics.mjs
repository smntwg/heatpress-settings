import { blankMention } from "./pyjamas.mjs";


const likedBlanks = blankMention("For a kids’ set, ", "plain 100% cotton pyjamas like these", " are available on Amazon UK.");

export const fabricPages = [
  {
    path: "/fabrics/cotton/",
    title: "Heat press settings for 100% cotton",
    description: "What works on 100% cotton: everyday HTV around 140–150°C, DTF from about 140–160°C, and why sublimation will not print.",
    kicker: "Fabric",
    h1: "100% cotton",
    lede: "Cotton is the friendly fabric for cut vinyl and for DTF. It does not take sublimation dye, however light the shirt is.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/fabrics/cotton/", label: "100% cotton" }
    ],
    schema: "article",
    sources: [
      { label: "Siser EasyWeed", url: "https://siserstore.com/pages/easyweed", note: "lists 100% cotton at 150°C" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "cotton is on the suitable-fabric list" },
      { label: "Xpres, how to sublimate T-shirts", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts", note: "sublimation will not work on cotton" },
      { label: "Xpres, how to DTF", url: "https://www.xpres.co.uk/direct-to-film-how-to-guide", note: "DTF on cotton" }
    ],
    related: [
      { href: "/methods/standard-htv/", label: "Standard HTV settings" },
      { href: "/methods/dtf/", label: "DTF on cotton" },
      { href: "/pyjamas/htv/", label: "HTV on kids' pyjamas" },
      { href: "/pyjamas/sublimation/", label: "Why cotton pyjamas will not sublimate" },
      { href: "/fabrics/childrens-clothing/", label: "Children’s cotton clothes" },
      { href: "/troubleshooting/vinyl-peeling/", label: "If the design lifts" },
      { href: "/fabrics/hoodies/", label: "Hoodies and sweatshirts" }
    ],
    faqs: [
      { q: "Can I sublimate a white cotton shirt?", a: "No. Xpres state that sublimation only works on light-coloured polyester or polymer-coated items, and will not work on cotton. White cotton stays blank because the dye has nothing polyester to bond with." },
      { q: "Is cotton hotter than polyester for HTV?", a: "Not on the Siser EasyWeed sheet. Cotton, poly-cotton and polyester share 150°C for 10–15 seconds. Polyester is more likely to shine or bleed dye at that heat, which is a different problem." }
    ],
    body: `
<p>For names, numbers and one-colour designs, start with <a href="/methods/standard-htv/">standard HTV</a>. Siser EasyWeed, which lists 100% cotton, is 150°C (305°F) for 10–15 seconds, medium pressure, hot or cold peel. Garment Films One Flex, whose chart includes cotton, uses 140°C for 8 seconds as the standard recommendation. Glitter, flock and the speciality films have their own pages.</p>
<p>For a photograph or a full-colour design, use <a href="/methods/dtf/">DTF</a>. Xpres describe it for cotton as well as polyester and blends. Their product sheet presses at 160°C for 15 seconds, light to medium, cold peel, then a second 15-second press. Their general guide says 150–160°C for 10–15 seconds and mentions raising the temperature slightly for heavier cotton, without a new number. Garment Films’ FAQ lists a basic DTF range of 140–150°C for 8–10 seconds.</p>
<p>Pre-press cotton. It holds moisture, and a damp patch is a common reason vinyl lifts after a wash that looked fine in the press. Siser’s lift fix, if you do need one, is to cover the design and press again for 5–10 seconds. Wait 24 hours before the first wash, turn the shirt inside out, and skip fabric conditioner. Both Siser and Garment Films say that.</p>
${likedBlanks}
<p>Kids’ cotton vests and pyjamas are still cotton, with extra care around prints, poppers and nightwear rules. That sits on the <a href="/fabrics/childrens-clothing/">children’s clothing</a> page. For blank pyjama sets, see <a href="/pyjamas/htv/">HTV on the white chest</a>, <a href="/pyjamas/embroidery/">embroidery</a> and <a href="/pyjamas/sublimation/">why these cotton sets will not sublimate</a>. Thick cotton canvas is on the <a href="/fabrics/tote-bags/">tote bag</a> page.</p>
`
  },
  {
    path: "/fabrics/polyester/",
    title: "Heat press polyester: settings by transfer type",
    description: "Heat press polyester in Celsius by transfer: Siser EasyWeed at 150°C, Xpres DTF at 150–160°C, Sawgrass sublimation at 205°C and Xpres at 190°C, plus scorch and dye migration.",
    kicker: "Fabric",
    h1: "Heat pressing polyester",
    lede: "Polyester does not have one heat press temperature. Everyday HTV, DTF and sublimation are published at different heats, and this is the fabric most likely to shine or bleed dye.",
    modified: "2026-11-25",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/fabrics/polyester/", label: "Polyester" }
    ],
    schema: "article",
    sources: [
      { label: "Siser P.S. Film EasyWeed", url: "https://www.siser.com/cad-cut/p-s-film/", note: "100% polyester, 150°C, 15 seconds, medium (3/4 bar), hot or cold" },
      { label: "Siser HI-5", url: "https://www.siser.com/cad-cut/hi-5/", note: "120°C under 150 g/m², 150°C above, 5 seconds, high pressure" },
      { label: "Siser, heat-sensitive textiles", url: "https://www.siser.com/news/how-to-prevent-discoloring-and-scorching-heat-sensitive-textiles/", note: "HI-5 at 120°C for 5 seconds; StripFlock Pro not below 140°C" },
      { label: "Siser, stopping dye migration", url: "https://www.siserna.com/siser-stops-dye-migration/", note: "265°F / 130°C, medium; no time on that page" },
      { label: "Siser P.S. Subli LT EasyWeed Sub Block", url: "https://www.siser.com/cad-cut/p-s-subli-lt/", note: "135°C, 15 seconds, medium (3/4 bar), dye-sublimated polyester" },
      { label: "Xpres, how to DTF", url: "https://www.xpres.co.uk/direct-to-film-how-to-guide", note: "cotton, polyester and blends, 150–160°C, 10–15 seconds, medium, cold peel" },
      { label: "Xpres DTF information sheet (PDF)", url: "https://www.xpres.co.uk/globalassets/xpres/downloads/xp2763/dtf-information-sheet.pdf", note: "160°C, 15 seconds, light to medium, cold peel, then 15 seconds again" },
      { label: "Sawgrass sublimation heat press settings", url: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings", note: "polyester fabric, 205°C / 400°F, 45 seconds, medium" },
      { label: "Xpres, how to sublimate T-shirts", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts", note: "190°C, 60–70 seconds, medium, peel hot" }
    ],
    related: [
      { href: "/methods/sublimation-polyester/", label: "Sublimation on polyester fabric" },
      { href: "/methods/dtf/", label: "DTF settings" },
      { href: "/methods/standard-htv/", label: "Standard HTV" },
      { href: "/troubleshooting/scorch-marks/", label: "Scorch and shine" },
      { href: "/fabrics/poly-cotton/", label: "Poly-cotton blends" }
    ],
    faqs: [
      { q: "What temperature do you heat press polyester at?", a: "It depends on the transfer. Siser EasyWeed, which lists 100% polyester, is 150°C for 15 seconds at medium pressure. Xpres press DTF, which they describe for cotton, poly and blends, at 150–160°C for 10–15 seconds. Sublimation is hotter: Sawgrass list polyester fabric at 205°C (400°F) for 45 seconds, and Xpres press polyester T-shirts at 190°C for 60–70 seconds." },
      { q: "Why is there a shiny box around the design?", a: "The polyester has glazed. Siser’s heat-sensitive advice is a cover sheet, a test press on a hidden area, such as inside the back, and HI-5 at 120°C for 5 seconds on textiles under 150 g/m², or 150°C for 5 seconds when the textile is heavier. Their article says the shine is sometimes temporary and sometimes permanent." },
      { q: "Why did the white vinyl change colour?", a: "That is dye migration. Siser say high temperature and high pressure make dye in polyester move into the film. Their Sub Block product page is 135°C for 15 seconds at medium pressure. A North America Siser note prints 265°F / 130°C at medium pressure and does not state a time." }
    ],
    body: `
<h2>Quick answer</h2>
<div class="table-wrap">
<table>
  <caption>Polyester heat press settings by transfer. Each row is one published example.</caption>
  <thead><tr><th>Transfer</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>HTV, Siser P.S. Film EasyWeed (lists 100% polyester)</td><td>150°C</td><td>15 seconds</td><td>Medium (3–4 bar)</td><td>Hot or cold</td></tr>
    <tr><td>DTF, Xpres how-to (cotton, poly and blends)</td><td>150–160°C</td><td>10–15 seconds, then a second press</td><td>Medium</td><td>Cold</td></tr>
    <tr><td>Sublimation, Sawgrass polyester fabric chart</td><td>205°C (400°F)</td><td>45 seconds</td><td>Medium</td><td>Not listed on the chart</td></tr>
    <tr><td>Sublimation, Xpres polyester T-shirt guide</td><td>190°C</td><td>60–70 seconds</td><td>Medium</td><td>Hot</td></tr>
  </tbody>
</table>
</div>
<p>Sawgrass print both 400°F and 205°C. Siser’s EasyWeed page and the Xpres guides print Celsius only. Siser print the EasyWeed pressure as 3/4 bar. This site reads that as about 3–4 bar, the same way it reads their 4/5 bar as about 4–5 bar. The usual conversion is 302°F for 150°C, 302–320°F for 150–160°C, and 374°F for 190°C. A straight conversion of 205°C is 401°F, so use the 400°F Sawgrass print beside 205°C.</p>
<p>Use the row that matches the transfer in your hand. A film box or a blank card that prints its own figures replaces the row. Percentage, white fabric and a ghost image on sublimation paper are on the <a href="/methods/sublimation-polyester/">sublimation on polyester</a> page.</p>
<h2>Heat transfer vinyl</h2>
<p>Siser’s P.S. Film EasyWeed page lists 100% polyester with 100% cotton and poly/cotton blends, all at 150°C for 15 seconds, medium pressure, carrier off hot or cold. The blend line adds “not for dye sublimated fabrics.” Other films publish other heats. Match the roll on the <a href="/methods/standard-htv/">standard HTV</a> page, and keep a hotter film on the heat that film publishes.</p>
<h2>Scorch and shiny marks</h2>
<p>A shiny rectangle is the polyester. Siser’s heat-sensitive article names 100% polyester, and also rayon, silk and anything you are unsure about. They say discolouration is sometimes temporary and sometimes permanent, and they tell you to test press a hidden area, such as the inside of the back when the care label says cool iron or do not iron. Their cover is a heat-transfer cover sheet, or parchment, or the shiny side of multipurpose paper.</p>
<p>The lower temperature they publish for this problem is HI-5. The article gives 120°C for 5 seconds, and says that avoids shine and fibre damage on the most common polyester-based fabric. The HI-5 product page splits it by weight: textiles under 150 g/m² at 120°C, heavier textiles at 150°C, both for 5 seconds at high pressure (4/5 bar on the page, about 4–5 bar), carrier off hot or cold.</p>
<p>When the film is something else, Siser say you can lower the temperature and raise the time. The only worked example on that page is StripFlock Pro: normally 15 seconds at 155°C, or 25–30 seconds and not below 140°C. That alternative belongs to StripFlock Pro. The <a href="/troubleshooting/scorch-marks/">scorch marks</a> page has the same notes.</p>
<h2>Dye migration</h2>
<p>Light vinyl on a dark or sublimated polyester can shift colour after the press. Siser’s dye-migration note says the dye in the shirt moves when it is heated. They see it most on sublimated polyester, and also on ordinary polyester. High temperature and high pressure are a major cause. The shift shows on light film. Siser say it only shows when light-coloured vinyl goes on a darker polyester.</p>
<p>The current Siser product page for P.S. Subli LT (EasyWeed Sub Block) is the blocker chart: 135°C for 15 seconds, medium pressure (3/4 bar), carrier off hot or cold, for dye-sublimated polyester. Their North America note still prints 265°F / 130°C at medium pressure, and that page does not give a time. Follow the sheet in the box when the two disagree. Everyday vinyl settings stay on the <a href="/methods/standard-htv/">standard HTV</a> page.</p>
<h2>DTF</h2>
<p>Xpres describe DTF for cotton, poly and blends, and they do not print a separate polyester temperature. Their how-to presses at 150–160°C for 10–15 seconds, medium pressure, peel cold, then a second press under a silicone sheet. They say heavier cotton may need a slightly higher temperature, and they do not give that new number. Their information sheet, which also does not split fabrics, is 160°C for 15 seconds, light to medium, cold peel off the platen, then another 15 seconds. Use the sheet that came with the film. A shiny halo around the design is the scorch described above. Cover the shirt. The full steps are on the <a href="/methods/dtf/">DTF page</a>.</p>
<h2>Sublimation</h2>
<p>Light polyester is the fabric this process is for. The two published pairs are in the table: Sawgrass polyester fabric at 205°C (400°F) for 45 seconds, medium, and Xpres polyester T-shirts at 190°C for 60–70 seconds, medium, peel hot. Dark polyester has no white ink to cover it. How much polyester the shirt needs, why the fabric should be light, and how to stop a ghost on the paper are on the <a href="/methods/sublimation-polyester/">sublimation on polyester</a> page.</p>
`
  },
  {
    path: "/fabrics/poly-cotton/",
    title: "Heat press settings for poly-cotton blends",
    description: "Poly-cotton heat press guidance: HTV at the cotton chart, a dye-migration warning, and why sublimation on a blend looks pale.",
    kicker: "Fabric",
    h1: "Poly-cotton blends",
    lede: "A 50/50 or 65/35 shirt is not halfway between two crafts. Vinyl makers list blends on the cotton row. Sublimation only dyes the polyester half.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/fabrics/poly-cotton/", label: "Poly-cotton blends" }
    ],
    schema: "article",
    sources: [
      { label: "Siser EasyWeed", url: "https://siserstore.com/pages/easyweed", note: "lists poly-cotton at the cotton settings" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "polyester/cotton mixtures" },
      { label: "Xpres, how to sublimate T-shirts", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts", note: "polyester or a polymer coating, not cotton" },
      { label: "Xpres, how to DTF", url: "https://www.xpres.co.uk/direct-to-film-how-to-guide", note: "DTF on blends" }
    ],
    related: [
      { href: "/methods/standard-htv/", label: "Standard HTV" },
      { href: "/fabrics/polyester/", label: "Dye migration" },
      { href: "/methods/dtf/", label: "DTF on blends" },
      { href: "/troubleshooting/faded-sublimation/", label: "Pale sublimation" },
      { href: "/fabrics/hoodies/", label: "Blend hoodies and sweatshirts" }
    ],
    faqs: [
      { q: "Should I average the cotton and polyester temperatures?", a: "No. The HTV charts already include blends at the cotton figure. Inventing a midpoint is less accurate than following the film." },
      { q: "Why does sublimation look speckled on a blend?", a: "Cotton fibres do not take the dye. Xpres say sublimation will not work on cotton. In a blend, only the polyester portion colours, so the print looks light or heathered." }
    ],
    body: `
<p>Check the label before you pick a method. “Cotton rich” can be anything from a touch of polyester to a 65% polyester workwear shirt. The vinyl charts care that a blend is listed. The sublimation chemistry cares about the polyester share, and these sources do not print a minimum percentage.</p>
<h2>HTV</h2>
<p>Siser EasyWeed lists poly/cotton blends with cotton and polyester: 150°C (305°F), 10–15 seconds, medium, hot or cold peel. Garment Films’ chart includes mixtures of polyester and cotton on the same product rows as cotton, and it tells you to test. Use the <a href="/methods/standard-htv/">standard</a>, <a href="/methods/glitter-htv/">glitter</a> or <a href="/methods/flock-htv/">flock</a> page for the film you have.</p>
<p>The polyester in the blend can still migrate into white or pale vinyl, especially if the shirt was dyed with disperse dyes or was itself sublimated. If a pale film shifts colour, treat it as <a href="/fabrics/polyester/">polyester dye migration</a> and look at a blocker, rather than pressing hotter.</p>
<h2>DTF and sublimation</h2>
<p><a href="/methods/dtf/">DTF</a> is the full-colour method these UK guides actually name for blends. Xpres list cotton, polyester and blends together, with press examples from 150–160°C and a separate Garment Films FAQ range of 140–150°C.</p>
<p>Sublimation on a blend is a compromise. You can use the <a href="/methods/sublimation-polyester/">polyester time and temperature</a> on a high-polyester shirt sold for the process, and you should expect a lighter result than on 100% polyester. A cotton-rich blend is the wrong blank. Buy a polyester shirt instead of fighting the chemistry.</p>
`
  },
  {
    path: "/fabrics/nylon/",
    title: "Heat press settings for nylon",
    description: "Which heat transfer films actually list nylon, at what Celsius setting, and why most sublimation and DTF charts do not.",
    kicker: "Fabric",
    h1: "Nylon",
    lede: "Nylon marks, shines and can melt. Most of the charts on this site either skip it or say the film is not suitable. Only press a roll that names nylon.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/fabrics/nylon/", label: "Nylon" }
    ],
    schema: "article",
    sources: [
      { label: "Siser HTV application instructions (PDF)", url: "https://uscutter.com/content/PDFs/Siser-heat-transfer-vinyl-instructions-2024.pdf", note: "EasyWeed Extra and EasyWeed Stretch list nylon" },
      { label: "Siser EasyWeed Stretch", url: "https://www.siserna.com/easyweed-stretch/" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "not suitable for nylon or coated fabrics" },
      { label: "Siser, heat-sensitive textiles", url: "https://www.siser.com/news/how-to-prevent-discoloring-and-scorching-heat-sensitive-textiles/" }
    ],
    related: [
      { href: "/methods/standard-htv/", label: "Why standard EasyWeed is not the nylon row" },
      { href: "/methods/stretch-metallic-holographic-htv/", label: "Stretch films" },
      { href: "/troubleshooting/scorch-marks/", label: "Scorch and shine" },
      { href: "/fabrics/polyester/", label: "Polyester, a different sensitive fabric" }
    ],
    faqs: [
      { q: "Can I use Garment Films One Flex on a nylon bag?", a: "Their application guidelines say the films on that chart are not suitable for nylon or coated fabrics. That includes the everyday, glitter, flock, metallic and holographic rows." },
      { q: "Is 160°C safe because EasyWeed Stretch lists nylon?", a: "It is the published setting, not a guarantee. Siser still say to test, and their heat-sensitive article warns that some fabrics discolour permanently. Press an inside seam with a cover sheet and stop if the nylon shines or stiffens." }
    ],
    body: `
<div class="table-wrap">
<table>
  <caption>Siser films that list nylon</caption>
  <thead><tr><th>Film</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>EasyWeed Extra</td><td>150°C (305°F)</td><td>10–15 seconds</td><td>Medium on the instruction sheet; light to medium on a Siser reference chart</td><td>Hot or cold</td></tr>
    <tr><td>EasyWeed Stretch</td><td>160°C (320°F)</td><td>20 seconds</td><td>Firm</td><td>Hot or cold</td></tr>
  </tbody>
</table>
</div>
<p>Standard EasyWeed’s “for use on” list in that same instruction sheet is cotton, poly-cotton, polyester and leather. It does not say nylon. Do not borrow the Extra row for a standard roll, or the other way round.</p>
<p>EcoStretch lists Lycra or spandex, not nylon, at 120°C. Siser Metal, Glitter, Holographic and StripFlock Pro do not list nylon on their published pages. Garment Films are explicit: not suitable for nylon or coated fabrics.</p>
<h2>Sublimation and DTF</h2>
<p>The Sawgrass chart cited here does not list nylon. Xpres describe sublimation for polyester and polymer coatings, and DTF for cotton, polyester and blends. There is no nylon time on those pages worth repeating. A coated item sold as a sublimation blank is a different product: use the blank maker’s card.</p>
<p>Siser’s practical test, from their heat-sensitive article, is an inconspicuous press with a cover sheet, and a spare item if the piece matters. A shiny patch on nylon does not wash out. Read <a href="/troubleshooting/scorch-marks/">scorch marks</a> before a second attempt.</p>
`
  },
  {
    path: "/fabrics/childrens-clothing/",
    title: "Heat press settings for children's clothing and pyjamas",
    description: "Lower-temperature HTV options for children's clothes, including Siser HI-5 at 120°C, plus care-label, popper and UK nightwear notes.",
    kicker: "Fabric",
    h1: "Children's clothing and pyjamas",
    lede: "Press the fabric that is actually in the garment, then respect the care label. Babywear and cool-iron polyester are not a normal cotton T-shirt.",
    modified: "2026-11-25",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/fabrics/childrens-clothing/", label: "Children's clothing" }
    ],
    schema: "article",
    sources: [
      { label: "Siser HI-5", url: "https://www.siser.com/cad-cut/hi-5/", note: "120°C or 150°C, 5 seconds, high pressure" },
      { label: "Siser, heat-sensitive textiles", url: "https://www.siser.com/news/how-to-prevent-discoloring-and-scorching-heat-sensitive-textiles/", note: "HI-5 described as certified for baby clothing" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "One Flex at 120°C for 15 seconds" },
      { label: "Business Companion, nightwear", url: "https://www.businesscompanion.info/en/quick-guides/product-safety/new-nightwear", note: "UK nightwear labelling and flammability" }
    ],
    related: [
      { href: "/fabrics/cotton/", label: "Cotton" },
      { href: "/pyjamas/htv/", label: "HTV on kids' pyjamas" },
      { href: "/pyjamas/embroidery/", label: "Embroidery on pyjamas" },
      { href: "/pyjamas/size-guide/", label: "Pyjama size guide" },
      { href: "/methods/standard-htv/", label: "Everyday HTV" },
      { href: "/troubleshooting/scorch-marks/", label: "Scorch marks" }
    ],
    faqs: [
      { q: "Can I put glitter on pyjamas?", a: "The glitter charts on this site start at 160°C. That is a poor first test on polyester nightwear. These sources do not publish a children’s glitter temperature. Test a seam only if you are willing to scrap the top." },
      { q: "Does pressing a design change nightwear safety labels?", a: "No. If you sell children’s nightwear in the UK, the Nightwear (Safety) Regulations 1985 and later product-safety guidance still apply, including labelling such as “KEEP AWAY FROM FIRE” where it is required. Business Companion summarises the current trading-standards position. This site is not legal advice." }
    ],
    body: `
<p>Read the fibre and the care label first. A cotton school T-shirt can use the <a href="/fabrics/cotton/">cotton</a> HTV row when the label allows a hot press. A polyester football shirt or a printed pyjama top often will not.</p>
<p>Blank kids’ pyjamas in 100% cotton, about 200 gsm, have their own notes: <a href="/pyjamas/htv/">HTV on the chest</a>, <a href="/pyjamas/embroidery/">embroidery</a>, <a href="/pyjamas/sublimation/">sublimation (it will not bond)</a>, <a href="/pyjamas/christmas/">Christmas sets</a> and a <a href="/pyjamas/size-guide/">size guide</a> from 6–12 months to 5–6 years. At about 200 gsm, HI-5’s heavier row is the 150°C press in the table below, not the 120°C line.</p>
<div class="table-wrap">
<table>
  <caption>Lower-temperature films with a published sensitive-fabric or babywear note</caption>
  <thead><tr><th>Film</th><th>Temperature</th><th>Time</th><th>Pressure</th><th>Peel</th></tr></thead>
  <tbody>
    <tr><td>Siser HI-5, textile up to 150 g/m²</td><td>120°C (248°F)</td><td>5 seconds</td><td>High (about 4–5 bar)</td><td>Hot or cold</td></tr>
    <tr><td>Siser HI-5, heavier textile</td><td>150°C (302°F)</td><td>5 seconds</td><td>High (about 4–5 bar)</td><td>Hot or cold</td></tr>
    <tr><td>Garment Films One Flex, cooler option</td><td>120°C (248°F)</td><td>15 seconds</td><td>Not listed on the chart</td><td>Hot, warm or cool</td></tr>
    <tr><td>Siser EasyWeed EcoStretch</td><td>120°C (250°F)</td><td>10–15 seconds</td><td>Medium</td><td>Hot</td></tr>
  </tbody>
</table>
</div>
<p>Siser’s heat-sensitive article says HI-5 is laboratory tested and certified for baby clothing, and the product is OEKO-TEX Standard 100 Class I. That is a statement about the film, not a certificate for your finished pyjamas. EcoStretch is the low-temperature stretch film; it is listed for cotton, polyester and elastane, and the instruction sheet does not call it a babywear product.</p>
<p>Everyday EasyWeed at 150°C remains the cotton chart if the garment can take it. Say so on a test seam before you press a name across the chest. Keep plastic poppers, zips and existing prints off the platen. They melt or mark, and that is not a vinyl fault.</p>
<p><a href="/methods/sublimation-polyester/">Sublimation</a> only works on light polyester, at 190–205°C on the charts cited here. That is hot for a child’s top. Test a spare. <a href="/methods/dtf/">DTF</a> examples start around 140°C and go to 160°C. The cooler end is kinder, and it is still not a promise.</p>
${likedBlanks}
<p>If a press leaves a shiny box, stop. The <a href="/troubleshooting/scorch-marks/">scorch page</a> explains why pressing again hotter will not fix it.</p>
`
  },
  {
    path: "/fabrics/tote-bags/",
    title: "Heat press settings for tote bags and canvas",
    description: "How to heat press a cotton canvas tote: use the cotton HTV or DTF chart, pre-press the panel, and why plain canvas will not sublimate.",
    kicker: "Fabric",
    h1: "Tote bags and canvas",
    lede: "A cotton tote is a thick cotton panel with seams in the way. These charts do not give canvas its own temperature. They do tell you how to press cotton.",
    modified: "2026-11-25",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/fabrics/tote-bags/", label: "Tote bags and canvas" }
    ],
    schema: "article",
    sources: [
      { label: "Siser EasyWeed", url: "https://siserstore.com/pages/easyweed", note: "cotton settings used for uncoated cotton canvas" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "suitable for cotton; not for coated fabrics" },
      { label: "Xpres, how to sublimate T-shirts", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts", note: "cotton will not sublimate" },
      { label: "Xpres DTF information sheet (PDF)", url: "https://www.xpres.co.uk/globalassets/xpres/downloads/xp2763/dtf-information-sheet.pdf", note: "thread the item on the press where you can" },
      { label: "Sawgrass polo walkthrough", url: "https://www.sawgrassink.com/blog/how-we-made-it-polo-shirt/", note: "a pressing pillow for an uneven surface" }
    ],
    related: [
      { href: "/fabrics/cotton/", label: "Cotton settings" },
      { href: "/methods/dtf/", label: "DTF for a full-colour tote" },
      { href: "/methods/standard-htv/", label: "HTV for names and logos" },
      { href: "/troubleshooting/vinyl-peeling/", label: "Lifting on thick canvas" }
    ],
    faqs: [
      { q: "Do I add 10 degrees because canvas is thick?", a: "Not from these charts. They do not print a canvas surcharge. Pre-press so the panel is dry and flat, use the cotton row for your film, and give it the full published time rather than the short end if a test looks under-pressed." },
      { q: "Can I sublimate a natural canvas shopper?", a: "Only if it is polyester or has a polymer coating sold for sublimation. Ordinary cotton canvas will not take the dye. Xpres are clear that cotton does not work." }
    ],
    body: `
<p>For a name or a logo, use <a href="/methods/standard-htv/">standard HTV</a> at the cotton figures: Siser EasyWeed at 150°C (305°F) for 10–15 seconds, medium, hot or cold peel, or Garment Films One Flex at 140°C for 8 seconds if that is your film. Glitter and flock can go on cotton canvas too, at their own charts, as long as the film’s sheet does not exclude the fabric.</p>
<p>For a full-colour print, use <a href="/methods/dtf/">DTF</a>. Xpres include cotton in the DTF method. Their sheet says to thread a garment onto the press when you can, so heat is not wasted on a folded layer. A tote is awkward to thread. Press one flat panel and keep the other side, the handles and the base seam off the platen.</p>
<p>Pre-press longer than you would a thin T-shirt. Canvas holds water from the washing it had at the mill, and it holds creases. Siser’s short pre-press is 2–3 seconds for garments; Garment Films’ FAQ allows 5–10 seconds to clear moisture and wrinkles. A tote often needs the longer end. Test.</p>
<p>Uneven pressure is the other miss. Sawgrass, writing about a polo with buttons and a collar, say the surface needs to be even and suggest a pressing pillow inside the shirt. A tote with a pocket or a hem in the design area has the same problem. Move the design onto the plain panel, or build the low side up so the platen meets the film everywhere.</p>
<p>Coated canvas and leatherette bags are a different material. Garment Films say their HTV chart is not for coated fabrics. Use the bag maker’s instructions rather than the cotton row.</p>
`
  }
  ,
  {
    path: "/fabrics/hoodies/",
    title: "Heat press settings for hoodies and sweatshirts",
    description: "Pressing HTV, DTF and sublimation on hoodies: the film's own chart, a pillow for the pocket seams, lower pressure, and Xpres hoodie figures in Celsius.",
    kicker: "Fabric",
    h1: "Hoodies and sweatshirts",
    lede: "A hoodie does not need its own temperature for vinyl. It needs the right film for its fabric, a dry print area, and a way past the pocket, the seams and the hood.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/fabrics/hoodies/", label: "Hoodies and sweatshirts" }
    ],
    schema: "article",
    sources: [
      { label: "Siser, how to heat press a hoodie", url: "https://www.siserna.com/heat-press-hoodie/", note: "pillow under the front, seams off the platen, pressure turned down" },
      { label: "Siser, heat transfer pillows", url: "https://www.siser.com/all-about-siser-heat-transfer-pillows/", note: "for seams, pockets, zips and drawstrings" },
      { label: "Siser EasyWeed", url: "https://siserstore.com/pages/easyweed", note: "150°C (305°F), 10–15 seconds" },
      { label: "Xpres, how to sublimate hoodies", url: "https://www.xpres.co.uk/how-to-sublimate-hoodies", note: "195°C for 60–70 seconds, hot peel" },
      { label: "Xpres Vanilla raglan hoodie (VAN201)", url: "https://www.xpres.co.uk/vanilla-raglan-sublimation-hoodie", note: "65/35, 180°C for 90 seconds, light/medium" },
      { label: "Xpres technical support, flock on fleeces", url: "https://www.xprestechnical.co.uk/support/solutions/articles/154000151254-how-do-i-apply-flock-to-fleeces-", note: "170°C for 25 seconds under a scrap of fleece" },
      { label: "Xpres, how to DTF", url: "https://www.xpres.co.uk/direct-to-film-how-to-guide", note: "150–160°C for 10–15 seconds, medium" }
    ],
    related: [
      { href: "/fabrics/poly-cotton/", label: "Poly-cotton blends" },
      { href: "/fabrics/polyester/", label: "Dye migration on polyester" },
      { href: "/methods/stretch-metallic-holographic-htv/", label: "Stretch HTV" },
      { href: "/methods/dtf/", label: "DTF settings" },
      { href: "/methods/sublimation-polyester/", label: "Sublimation on polyester" },
      { href: "/troubleshooting/vinyl-peeling/", label: "If the design lifts" }
    ],
    faqs: [
      { q: "Do hoodies need a higher temperature than T-shirts?", a: "Not for vinyl, on Siser’s advice. Their reply to a 50/50 hoodie question is that the regular settings for the type of HTV are fine. What changes is pressure: with a pillow inside, Siser turn the press pressure down so it still closes." },
      { q: "Why did white vinyl go grey on a black sweatshirt?", a: "Siser’s answer to that exact question is dye migration from the polyester content, and their fix is EasyWeed Sub Block, which has a dye blocker. Pressing hotter than the sheet makes migration more likely, not less." },
      { q: "How far below the neckline should the design go?", a: "Siser suggest about two to three fingers below the neckline for a front design. For a back print, place it low enough that the hood does not cover it when it is down." }
    ],
    body: `
<p>Start with the label, not the word hoodie. Most are cotton, polyester or a blend, and the vinyl charts already cover those. Siser EasyWeed lists cotton, polyester and poly-cotton at 150°C (305°F) for 10–15 seconds, medium pressure, hot or cold peel. Asked about 50/50 hoodies, Siser say the regular settings for the HTV you are using are fine. Use the <a href="/fabrics/cotton/">cotton</a>, <a href="/fabrics/poly-cotton/">poly-cotton</a> or <a href="/fabrics/polyester/">polyester</a> page for your film.</p>
<h2>Get past the seams</h2>
<p>The kangaroo pocket is the usual reason a hoodie print lifts. Its stitched edges hold the top platen off the film, so the middle of the design never gets full pressure. Siser’s walkthrough puts a heat transfer pillow inside the hoodie for the front, so the print area sits higher than the pocket seams, and hangs the shoulder seams off the lower platen. With the pillow in, they turn the pressure down, or the press may not close.</p>
<p>For the pocket itself, Siser slide the hoodie on until only the pocket is on the platen and put the pillow inside the pocket. Stacked mouse mats are their stand-in if you have no pillow. Their pillow guide lists zips, drawstrings, seams and pockets as the jobs pillows are for.</p>
<p>The back has the fewest seams and usually needs no pillow. Keep the bottom hem off the platen for a lower-back print. Sleeves and the hood need a narrow pillow or pad, with the rest of the garment hanging off the press.</p>
<h2>Thick fleece</h2>
<p>Sweatshirt fleece and French terry hold more water than a thin tee. Pre-press the print area before you place the film, and lift the press to let any steam go. A <a href="/troubleshooting/vinyl-peeling/">lifting design</a> after the first wash is often moisture or pressure, not temperature.</p>
<p>Flock on a fleece is a special case. Xpres technical support say to cover the whole pressed area with a scrap of fleece or a thin towel and press at 170°C for 25 seconds, light to medium. If the pile flattens, they brush it back up and say it looks normal after a wash. That is their flock transfer, not Siser StripFlock Pro, which has its own <a href="/methods/flock-htv/">155°C chart</a>.</p>
<h2>Stretch and dye migration</h2>
<p>A fitted hoodie stretches across the chest. Siser suggest EasyWeed Stretch rather than a stiffer flock when a design cracks along a line after a few washes. The <a href="/methods/stretch-metallic-holographic-htv/">stretch film page</a> has its settings.</p>
<p>Dark polyester-rich hoodies can stain white or pale vinyl from underneath. Siser call that dye migration and point to EasyWeed Sub Block at 130°C (265°F). The <a href="/fabrics/polyester/">polyester page</a> explains it.</p>
<h2>DTF and sublimation</h2>
<p>For full colour on a cotton or dark hoodie, use <a href="/methods/dtf/">DTF</a>. Xpres give 150–160°C for 10–15 seconds at medium pressure, peel cold, then re-press. Check the sheet that came with your transfers. Hoodie-specific DTF notes, including the peel and second press, are on <a href="https://dtfsettings.co.uk/fabrics/hoodies/">DTF settings</a>.</p>
<p>Sublimation only works on a light hoodie with enough polyester. Xpres press hoodies at 195°C for 60–70 seconds under a silicone sheet, with a Teflon pillow because of the front pocket, and peel the paper hot. Their 65% polyester Vanilla raglan hoodie lists 180°C for 90 seconds at light to medium pressure, which shows why the blank’s own label beats a general figure. Xpres say there is no white sublimation ink, so a dark hoodie will not work. More on the <a href="/methods/sublimation-polyester/">polyester sublimation page</a>.</p>
<p>Need a temperature in Fahrenheit for an American sheet? Use the <a href="/tools/temperature-converter/">converter</a>.</p>
`
  }
];
