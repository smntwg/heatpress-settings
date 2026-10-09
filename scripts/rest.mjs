const chip = (c) => `<button type="button" data-c="${c}">${c}°C</button>`;

export const restPages = [
  {
    path: "/troubleshooting/vinyl-peeling/",
    title: "Vinyl peeling or lifting after heat pressing",
    description: "Why HTV and DTF lift: time, pressure, the wrong peel, moisture, washing too soon, and the re-press Siser actually publish.",
    kicker: "Troubleshooting",
    h1: "Vinyl peeling or lifting",
    lede: "If the design lifts at the edges, the film usually did not bond. Pressing it hotter than the sheet is the fix people try first, and it is often the wrong one.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/troubleshooting/vinyl-peeling/", label: "Vinyl peeling" }
    ],
    schema: "article",
    sources: [
      { label: "Siser EasyWeed", url: "https://www.siserna.com/easyweed/", note: "if it lifts, cover and press 5–10 seconds" },
      { label: "Siser HTV application instructions (PDF)", url: "https://uscutter.com/content/PDFs/Siser-heat-transfer-vinyl-instructions-2024.pdf", note: "peel type and a 24-hour wait" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf", note: "wait 24 hours, no fabric conditioner" },
      { label: "Garment Films FAQ", url: "https://garmentfilms.com/pages/faqs", note: "pre-press 5–10 seconds for moisture" },
      { label: "Xpres DTF information sheet (PDF)", url: "https://www.xpres.co.uk/globalassets/xpres/downloads/xp2763/dtf-information-sheet.pdf", note: "cold peel, second press, powder cure" }
    ],
    related: [
      { href: "/methods/standard-htv/", label: "Standard HTV" },
      { href: "/methods/flock-htv/", label: "Flock peels warm or cool" },
      { href: "/methods/dtf/", label: "DTF peel and cure" },
      { href: "/fabrics/nylon/", label: "Nylon that was never on the chart" },
      { href: "/pyjamas/htv/", label: "HTV on cotton pyjamas" }
    ],
    faqs: [
      { q: "Can I iron it back on?", a: "Siser’s published rescue is a cover sheet and another 5–10 seconds on the press, for areas that lift after application. A sliding iron is a poor substitute. If the carrier was peeled at the wrong moment, a second press may not put the pile or the glitter back." },
      { q: "It survived the press and failed in the wash.", a: "Siser and Garment Films both say to wait 24 hours. Garment Films also say to wash inside out and not to use fabric conditioner. A hot tumble on the day you pressed it is a different test from the one they published." },
      { q: "DTF cracks off after one wash.", a: "Check the powder cure before the shirt temperature. Xpres say under-curing looks grainy and over-curing leaves pin pricks, and both hurt durability. Their sheet also wants a cold peel and a second press under a silicone sheet." }
    ],
    body: `
<h2>Work through it in this order</h2>
<ol>
  <li><strong>Was this film meant for this fabric?</strong> Garment Films’ chart says those films are not for nylon or coated fabrics. Standard EasyWeed’s instruction list does not include nylon. A film that never bonded will always peel. See <a href="/fabrics/nylon/">nylon</a>.</li>
  <li><strong>Was the shirt dry?</strong> Siser preheat for 2–3 seconds. Garment Films’ FAQ says 5–10 seconds when you need to clear wrinkles and moisture. Damp cotton and damp canvas let go later.</li>
  <li><strong>Did you use that film’s time, not a neighbour’s?</strong> EasyWeed is 10–15 seconds at 150°C. One Flex’s standard is 8 seconds at 140°C. Glitter and flock are different again. Mixing them is how edges lift.</li>
  <li><strong>Did you peel when the sheet said?</strong> Hot, warm and cold are not moods. <a href="/methods/flock-htv/">Flock</a> on these charts is warm or cool. <a href="/methods/stretch-metallic-holographic-htv/">Siser Metal and holographic</a> are cold peels. Siser Glitter’s North America page says warm, at least 15 seconds off the press.</li>
  <li><strong>Was the pressure even?</strong> Seams, zips and tote handles hold the platen off the film. Press the flat area. A design that only fails on one side was not heated evenly.</li>
  <li><strong>Was it washed too soon, or with conditioner?</strong> Wait 24 hours. Wash inside out. Skip fabric conditioner. Siser also say to skip bleach.</li>
</ol>
<p>The dial is the last check, not the first. If a trusted chart suddenly fails on a press that used to work, the platen may not be at the temperature on the screen. Siser’s EasyWeed sheet tells EasyPress users to add about 30°, written beside 305°F/150°C and read as 30°F rather than 30°C. Other machines need a scrap, not a guessed offset.</p>
<p>If the fabric itself has gone shiny, that is <a href="/troubleshooting/scorch-marks/">scorch</a>. More time will make it worse. Cotton pyjamas use the same film rules. Placement on the chest is on the <a href="/pyjamas/htv/">pyjama HTV page</a>.</p>
`
  },
  {
    path: "/troubleshooting/scorch-marks/",
    title: "Scorch marks and shiny boxes from a heat press",
    description: "Why a heat press leaves scorch or shine on polyester and nylon, and the lower-temperature options Siser and Garment Films actually publish.",
    kicker: "Troubleshooting",
    h1: "Scorch marks and shiny fabric",
    lede: "A shiny rectangle is the fabric, not a failed design. Polyester and nylon do it first. You cannot wash it out, so the next press has to be cooler or covered.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/troubleshooting/scorch-marks/", label: "Scorch marks" }
    ],
    schema: "article",
    sources: [
      { label: "Siser, heat-sensitive textiles", url: "https://www.siser.com/news/how-to-prevent-discoloring-and-scorching-heat-sensitive-textiles/" },
      { label: "Siser HI-5", url: "https://www.siser.com/cad-cut/hi-5/" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf" }
    ],
    related: [
      { href: "/fabrics/polyester/", label: "Polyester" },
      { href: "/fabrics/nylon/", label: "Nylon" },
      { href: "/fabrics/childrens-clothing/", label: "Children’s clothes" },
      { href: "/methods/sublimation-polyester/", label: "Sublimation heat is higher still" }
    ],
    faqs: [
      { q: "Will the shiny box wash out?", a: "Sometimes discolouration is temporary and sometimes it is permanent. Siser say so directly, and they tell you to have a spare if the care label says cool iron or do not iron. Do not promise a customer you can wash it out." },
      { q: "Should I turn every film down to 120°C?", a: "Only if that film publishes a low-temperature press. HI-5 does: 120°C for 5 seconds on lighter fabrics. One Flex lists 120°C for 15 seconds as a sensitive-garment option. Siser’s StripFlock example is different: longer time, and not below 140°C. Glitter charts on this site stay at 160°C." }
    ],
    body: `
<p>Siser’s heat-sensitive article is the clearest maker’s note we have. They name polyester, and also rayon, silk and anything you are unsure about. Their advice, in their order, is:</p>
<ol>
  <li>Do not press a “do not iron” or “cool iron” garment unless you can spare it. Test an inside seam if you must.</li>
  <li>Use a heat press rather than an iron. An iron cycles through a range. A press is steadier, though its dial can still be wrong.</li>
  <li>For polyester-based fabric, they point at HI-5: 120°C for 5 seconds, which they say avoids shine and fibre damage. On the product page that 120°C is for textiles up to 150 g/m². Heavier cloth is 150°C, still for 5 seconds, at high pressure.</li>
  <li>If you do not have HI-5, they say you can lower the temperature and raise the time. The worked example is StripFlock Pro: 25–30 seconds, and do not go below 140°C. That example is not permission to rewrite every chart.</li>
  <li>Use a heat-transfer cover sheet. Parchment, or the shiny side of multipurpose paper, is their stand-in.</li>
</ol>
<p>Garment Films build the same idea into One Flex. The standard press is 140°C for 8 seconds. The chart also lists 130°C for 10 seconds and 120°C for 15 seconds, and the note says the lower temperature is for more sensitive garments.</p>
<p>Sublimation is hotter than any of this. Sawgrass polyester fabric is 205°C and Xpres use 190°C for a minute or more. A light scorch around a sublimation print means the shirt cannot take that dwell, or the platen is hotter than the dial. Dropping time and temperature together, without a spare, is how you get a <a href="/troubleshooting/faded-sublimation/">faded print</a> and a scorch on the same shirt. Change one thing.</p>
<p><a href="/fabrics/nylon/">Nylon</a> and <a href="/fabrics/childrens-clothing/">children’s polyester</a> are the pieces most often ruined by a cotton habit. Cover them, test them, and keep plastic poppers off the platen.</p>
`
  },
  {
    path: "/troubleshooting/sublimation-ghosting/",
    title: "Sublimation ghosting and blurred prints",
    description: "Why sublimation ghosts or blurs: the paper shifts, the shirt shrinks, or moisture moves the dye. How makers say to tape, pre-press and peel.",
    kicker: "Troubleshooting",
    h1: "Sublimation ghosting and blur",
    lede: "A ghost is a second, fainter copy of the design. A blur is a soft edge. Both happen while the dye is still moving, which is during the press and in the moment you open it.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/troubleshooting/sublimation-ghosting/", label: "Sublimation ghosting" }
    ],
    schema: "article",
    sources: [
      { label: "Heat Press Nation, sublimation ghosting and shrinkage (PDF)", url: "https://heatpress.net/pdf/Sublimation%20Ghosting%20&%20Shrinkage.pdf" },
      { label: "Xpres, how to sublimate T-shirts", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts", note: "tape the paper" },
      { label: "Sawgrass polo walkthrough", url: "https://www.sawgrassink.com/blog/how-we-made-it-polo-shirt/", note: "paper-edge marks and even pressure" }
    ],
    related: [
      { href: "/methods/sublimation-polyester/", label: "Polyester settings" },
      { href: "/methods/sublimation-mugs/", label: "Mugs" },
      { href: "/methods/sublimation-hard-blanks/", label: "Hard blanks" },
      { href: "/troubleshooting/faded-sublimation/", label: "Faded colour, a different fault" }
    ],
    faqs: [
      { q: "What is the difference between a ghost and a scorch?", a: "A ghost repeats the picture, sharp or soft, slightly offset. A scorch is a shiny or brown mark in the shape of the platen or the paper, without a second copy of the design. Scorch is covered on its own page." },
      { q: "Should I press harder to stop ghosting?", a: "Pressure that lets the paper shift is too low, but more pressure does not fix a shirt that shrinks as the press opens. Heat Press Nation’s note says the double image happens at the end of the cycle, when paper or fabric moves while dye is still transferring." }
    ],
    body: `
<p>Heat Press Nation’s ghosting note describes the usual end-of-press failure. The press opens, the shirt shrinks or the paper shifts, and dye that is still leaving the paper lands in a new place. They see it more on short presses, because the paper has not given up its ink yet. Their suggestions are a longer press (they mention trying 70 seconds and comparing), a pre-press between cover sheets to dry and pre-shrink the shirt, and tacky sublimation paper so the shirt and the sheet move together.</p>
<p>They also say that if you lengthen the time, you should drop the temperature by 20–30 degrees so you do not scorch the fabric. The PDF is written around Fahrenheit charts, so that is about 11–17°C, not 20–30°C. It is a troubleshooting suggestion from that PDF, not a new Sawgrass or Xpres standard. If you are already on the Xpres shirt guide at 190°C for 60–70 seconds, you are near the longer time they describe. Do not add another 30 seconds on top without a spare.</p>
<p>Xpres, in the ordinary successful method, already tell you to tape the paper. Tape the edges, not a sheet of tape across the image. Open the press without a jerk. On a mug, tape the wrap so it cannot spin. On <a href="/methods/sublimation-hard-blanks/">hard blanks</a>, lift the paper straight up.</p>
<p>Sawgrass’s polo walkthrough mentions a different mark: a line where the edge of the paper sat. They suggest tearing the paper edge so it feathers, and using a pressing pillow when collars and buttons stop the shirt lying flat. That line is not always a ghost, but an uneven shirt moves, and movement is how ghosts start.</p>
<p>Moisture makes the soft version. Steam blows dye sideways, so the shadow is fuzzy rather than a crisp offset. Pre-press polyester before you lay the paper on, the same way you pre-press for <a href="/methods/dtf/">DTF</a>. Store sublimation paper sealed. A curled, damp sheet will not sit still.</p>
<p>If there is no second image and the colour is simply weak, use the <a href="/troubleshooting/faded-sublimation/">faded sublimation</a> page. More tape will not fix a cotton shirt.</p>
`
  },
  {
    path: "/troubleshooting/faded-sublimation/",
    title: "Faded sublimation: pale shirts, mugs and blanks",
    description: "Why sublimation looks faded: cotton or blends, dark fabric, short time, low polyester, moisture, and colour that only appears after pressing.",
    kicker: "Troubleshooting",
    h1: "Faded sublimation",
    lede: "A pale sublimation print is usually the blank, the time, or the heat. It is rarely bad luck. These are the causes the manufacturer guides actually name.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/troubleshooting/faded-sublimation/", label: "Faded sublimation" }
    ],
    schema: "article",
    sources: [
      { label: "Xpres, how to sublimate T-shirts", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts" },
      { label: "Sawgrass sublimation heat press settings", url: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings" },
      { label: "Heat Press Nation, sublimation ghosting and shrinkage (PDF)", url: "https://heatpress.net/pdf/Sublimation%20Ghosting%20&%20Shrinkage.pdf", note: "moisture and pre-press" }
    ],
    related: [
      { href: "/methods/sublimation-polyester/", label: "Polyester time and temperature" },
      { href: "/fabrics/poly-cotton/", label: "Blends look pale on purpose" },
      { href: "/methods/sublimation-mugs/", label: "Mug times" },
      { href: "/methods/sublimation-hard-blanks/", label: "Slate needs minutes" },
      { href: "/troubleshooting/sublimation-ghosting/", label: "Ghosting" },
      { href: "/pyjamas/sublimation/", label: "Cotton pyjamas will not sublimate" }
    ],
    faqs: [
      { q: "The paper looks brighter than the shirt. Is the press too cool?", a: "Check the paper the other way round first. Xpres say the ink often looks duller on the paper and brighter after it is heated. Judge a pressed test, not the printout. If the pressed shirt is still pale, then look at time, temperature and fibre." },
      { q: "Can I sublimate darker by pressing twice?", a: "A second press can move dye that is still in the paper, which is also how you ghost an image. If the first press was far too short, a careful second press on a taped sheet can add colour. If the blank is cotton, a second press adds nothing." }
    ],
    body: `
<ol>
  <li><strong>The fabric is not polyester enough.</strong> Xpres say sublimation needs light-coloured polyester or a polymer coating, and will not work on cotton or dark garments. There is no white ink, so a navy shirt cannot show a pastel. A <a href="/fabrics/poly-cotton/">poly-cotton blend</a> only dyes in the polyester fibres, so it looks speckled or washed out.</li>
  <li><strong>The time belongs to a different blank.</strong> Sawgrass polyester fabric is 45 seconds. Their ceramic mug is 150–300 seconds. Their slate is 420 seconds. A slate pressed for a minute looks faded and the press was “right” for a photo panel. Use the <a href="/methods/sublimation-hard-blanks/">hard blank table</a> and the <a href="/methods/sublimation-mugs/">mug range</a>.</li>
  <li><strong>The two polyester charts were mixed.</strong> Sawgrass is 205°C for 45 seconds. Xpres is 190°C for 60–70 seconds. 190°C for 45 seconds is neither instruction. Pick one pair and test.</li>
  <li><strong>The paper was the wrong way up, or not sublimation paper.</strong> The coated face carries the ink. A mirrored design on ordinary paper will not sublimate, however long you press it.</li>
  <li><strong>The blank was not coated.</strong> Mugs, metal and MDF from a general shop are often bare. The Sawgrass rows assume sublimation blanks. A pale, dusty image on “aluminium” is usually missing polymer.</li>
  <li><strong>Moisture diluted the dye.</strong> Pre-press the shirt. Heat Press Nation describe moisture flashing to steam and pushing dye about, which fades and blurs at the same time. Keep paper sealed.</li>
  <li><strong>The platen is cooler than the dial.</strong> If every blank from a known-good batch is pale, measure or compare the press instead of adding a minute forever. Sawgrass say a calibrated press is part of getting their chart to work.</li>
</ol>
<p>Colour management matters too. Sawgrass put it in the same sentence as the chart: suitable substrates, a calibrated press, smart colour management, testing and practice. A printer driver on “plain paper” will look weak even when the press is perfect. That is a printer setting, and it is outside a heat-press number.</p>
<p>When the image is strong but doubled, switch to <a href="/troubleshooting/sublimation-ghosting/">ghosting</a>. When the shirt is brown at the edges, switch to <a href="/troubleshooting/scorch-marks/">scorch</a>.</p>
`
  },
  {
    path: "/tools/temperature-converter/",
    title: "Celsius to Fahrenheit converter for heat presses",
    description: "Convert heat press temperatures between Celsius and Fahrenheit, with the figures UK crafters actually see on Siser, Sawgrass and Garment Films charts.",
    kicker: "Tool",
    h1: "Celsius to Fahrenheit",
    lede: "Type either side. The other side updates. The buttons are temperatures that appear on the charts in this guide.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/tools/temperature-converter/", label: "Temperature converter" }
    ],
    schema: "tool",
    ogType: "website",
    scripts: ["/js/converter.js"],
    sources: [
      { label: "Siser EasyWeed", url: "https://www.siserna.com/easyweed/", note: "prints 305°F beside 150°C" },
      { label: "Sawgrass sublimation heat press settings", url: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings", note: "prints 400°F beside 205°C" }
    ],
    related: [
      { href: "/", label: "Settings lookup" },
      { href: "/methods/standard-htv/", label: "Why 150°C is sometimes 305°F" }
    ],
    body: `
<form id="converter" class="tool-card" style="display:block;color:inherit;text-decoration:none">
  <div class="calc-grid">
    <div>
      <label for="celsius">Celsius</label>
      <input id="celsius" name="celsius" type="number" inputmode="decimal" step="0.1" value="150">
    </div>
    <div>
      <label for="fahrenheit">Fahrenheit</label>
      <input id="fahrenheit" name="fahrenheit" type="number" inputmode="decimal" step="0.1" value="302">
    </div>
  </div>
  <div class="chips" role="group" aria-label="Temperatures used on these charts">
    ${[120, 130, 140, 150, 155, 160, 170, 180, 190, 205].map(chip).join("")}
  </div>
  <p id="converter-note" class="hint"></p>
</form>
<p>The formula is the ordinary one: Fahrenheit = Celsius × 9/5 + 32. Makers do not always use it. Siser print 305°F next to 150°C on EasyWeed, and 305°F is a rounded 152°C if you convert backwards. Sawgrass print 400°F next to 205°C, while 205°C is 401°F if you are strict. When a sheet prints both, trust the pair on the sheet.</p>
<p>Siser’s EasyWeed sheet tells EasyPress users to add about 30°. It is written beside 305°F/150°C and is read as 30°F, not an extra 30°C. That is an EasyPress note, not a reason to add 30 degrees on a clamshell press. If your dial and your results disagree, test a scrap before you build a private offset into every job.</p>
`
  },
  {
    path: "/tools/cost-calculator/",
    title: "Heat press cost per shirt calculator",
    description: "Work out a UK cost per shirt from the blank, the vinyl or transfer, press electricity and your time. Change the pence per kWh to your own tariff.",
    kicker: "Tool",
    h1: "Cost per shirt",
    lede: "Add the blank, the vinyl or transfer, the press, and your time. Electricity is usually pennies. Your hours are not.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/tools/cost-calculator/", label: "Cost per shirt" }
    ],
    schema: "tool",
    ogType: "website",
    scripts: ["/js/calculator.js"],
    related: [
      { href: "/", label: "Settings lookup" },
      { href: "/methods/standard-htv/", label: "HTV press times" },
      { href: "/methods/dtf/", label: "DTF press times" }
    ],
    faqs: [
      { q: "What should I put for the unit rate?", a: "Use the pence per kilowatt hour on your bill. The 25p in the form is an example so the sums are visible. It is not a quote of the current price cap." },
      { q: "Why is the electricity so small?", a: "A 1.5 kW press running for 15 seconds uses a fraction of a penny. A ten-minute warm-up shared across a batch is still small beside a £4 blank. The calculator shows the pence so it does not disappear into a £0.00." }
    ],
    body: `
<form id="cost-form">
  <div class="calc-grid">
    <div>
      <label for="blank">Blank cost (£)</label>
      <input id="blank" name="blank" type="number" inputmode="decimal" min="0" step="0.01" value="3.50">
    </div>
    <div>
      <label for="transfer">Vinyl or transfer cost (£)</label>
      <input id="transfer" name="transfer" type="number" inputmode="decimal" min="0" step="0.01" value="0.80">
    </div>
    <div>
      <label for="watts">Heat press power (watts)</label>
      <input id="watts" name="watts" type="number" inputmode="decimal" min="0" step="1" value="1500">
    </div>
    <div>
      <label for="seconds">Press time per shirt (seconds)</label>
      <input id="seconds" name="seconds" type="number" inputmode="decimal" min="0" step="1" value="15">
    </div>
    <div>
      <label for="warmup">Warm-up for the batch (minutes)</label>
      <input id="warmup" name="warmup" type="number" inputmode="decimal" min="0" step="1" value="10">
    </div>
    <div>
      <label for="batch">Shirts in the batch</label>
      <input id="batch" name="batch" type="number" inputmode="numeric" min="1" step="1" value="12">
    </div>
    <div>
      <label for="unit">Electricity unit rate (pence per kWh)</label>
      <input id="unit" name="unit" type="number" inputmode="decimal" min="0" step="0.1" value="25">
    </div>
    <div>
      <label for="minutes">Your hands-on minutes per shirt</label>
      <input id="minutes" name="minutes" type="number" inputmode="decimal" min="0" step="1" value="8">
    </div>
    <div>
      <label for="rate">Your hourly rate (£)</label>
      <input id="rate" name="rate" type="number" inputmode="decimal" min="0" step="0.5" value="15">
    </div>
    <div>
      <label for="sell">Selling price, if you have one (£)</label>
      <input id="sell" name="sell" type="number" inputmode="decimal" min="0" step="0.01" placeholder="Optional">
    </div>
  </div>
  <p><button class="btn" type="submit">Update cost</button></p>
</form>
<div id="cost-result" aria-live="polite"></div>
<p>Warm-up is split across the batch. Press time is counted for every shirt. Hands-on minutes are your cutting, weeding and pressing time, priced at the hourly rate. Use 0 if you are making something for yourself and do not want to cost your time. VAT is not added. The wattage on the press label is a nameplate figure, not a meter reading.</p>
`
  },
  {
    path: "/about/",
    title: "About this heat press settings guide",
    description: "How heatpress-settings.co.uk chooses Celsius heat press figures, which manufacturer charts it uses, and what it will not invent.",
    kicker: "About",
    h1: "About this guide",
    lede: "A UK reference for hobby and small-batch pressing. Celsius first, Fahrenheit in brackets, and a named source on every setting.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/about/", label: "About" }
    ],
    schema: "about",
    sources: [
      { label: "Siser EasyWeed", url: "https://www.siserna.com/easyweed/" },
      { label: "Siser heat-sensitive textiles", url: "https://www.siser.com/news/how-to-prevent-discoloring-and-scorching-heat-sensitive-textiles/" },
      { label: "Garment Films application guidelines (PDF)", url: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf" },
      { label: "Xpres sublimation and DTF guides", url: "https://www.xpres.co.uk/how-to-sublimate-t-shirts" },
      { label: "Sawgrass sublimation heat press settings", url: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings" }
    ],
    related: [
      { href: "/", label: "Settings lookup" },
      { href: "/privacy/", label: "Privacy and affiliates" },
      { href: "/contact/", label: "Contact" }
    ],
    body: `
<p>Heat press settings are easy to copy and hard to trust. A single “best” temperature usually hides a blend of three brands. This site shows the published examples separately, in Celsius, for people in the UK pressing HTV, sublimation and DTF on shirts, children’s clothes, totes, mugs and hard blanks.</p>
<h2>Where the numbers come from</h2>
<p>The lookup and the method pages use charts and instructions from Siser (EasyWeed and the speciality films), Garment Films’ UK application guidelines, Xpres sublimation and DTF guides, and Sawgrass’s sublimation press chart. Troubleshooting pages add Siser’s heat-sensitive fabric article and a Heat Press Nation note on ghosting. Each page lists the links.</p>
<p>Where two official pages disagree, both are shown. Siser’s glitter time is the obvious case: 15–20 seconds and a warm peel on the North America page, 15 seconds and a hot or cold peel on the EU page. The instruction in your box wins.</p>
<h2>What we will not do</h2>
<p>We do not invent a brand setting we cannot point at. If a film does not list nylon, the lookup says so instead of offering the cotton number with a shrug. If a chart has no pressure, the card says the pressure is not listed.</p>
<p>Nothing here is a promise that your press will match. Dials lie by enough degrees to matter. Siser’s published example is the EasyPress note on EasyWeed: add about 30°, written beside 305°F/150°C and read as 30°F rather than 30°C. Test on a scrap or a spare blank.</p>
<p>The guides were checked against those sources on 7 October 2026. Makers revise sheets. If a product page and this site diverge, believe the product page, and <a href="/contact/">tell us</a>.</p>
`
  },
  {
    path: "/privacy/",
    title: "Privacy policy, cookies and affiliate disclosure",
    description: "UK GDPR privacy notice for heatpress-settings.co.uk: what the site collects, cookies, advertising and links to individual Amazon UK product listings.",
    kicker: "Privacy",
    h1: "Privacy policy",
    lede: "This notice explains what heatpress-settings.co.uk does with personal information. It was updated on 9 October 2026.",
    modified: "2026-10-09",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/privacy/", label: "Privacy" }
    ],
    schema: "privacy",
    related: [
      { href: "/about/", label: "About the guide" },
      { href: "/contact/", label: "Contact" }
    ],
    body: `
<h2>Who we are</h2>
<p>The site is operated as heatpress-settings.co.uk. For privacy questions, email <a href="mailto:contact@heatpress-settings.co.uk">contact@heatpress-settings.co.uk</a>. There is no account system and no shop on this site.</p>
<h2>What we collect</h2>
<p>If you email that address, we receive whatever you put in the message: your email address, your name if you include it, and the details of your question. We use that only to reply. The lawful basis is our legitimate interest in answering people who write to us. We do not run a mailing list from those messages.</p>
<p>The site is hosted on Cloudflare Pages. Delivering a web page involves connection data such as your IP address. That processing is done by the host so the site can be shown. Cloudflare’s own privacy notice describes their logs: <a href="https://www.cloudflare.com/privacypolicy/" rel="noopener noreferrer">cloudflare.com/privacypolicy</a>.</p>
<p>We do not ask for an account, we do not run a contact form with a database behind it, and we do not use the site to profile you.</p>
<h2>Cookies</h2>
<p>This version of the site does not set its own cookies. It does not load analytics, and it does not load advertising scripts. If that changes, this policy will be updated first, and any non-essential cookies will wait for a proper choice under the Privacy and Electronic Communications Regulations and UK GDPR.</p>
<h2>Advertising and affiliate links</h2>
<p>You may see a marked box that says the space is reserved for a future advert. Nothing is loaded in that box. There is no AdSense code and no ads.txt file yet.</p>
<p>The cotton page, the children’s clothing page and the pyjama guides link to individual Amazon UK product listings. Those addresses are plain Amazon links, with nothing added to track a commission. If we later add affiliate links or adverts, they will be labelled as such before they go live.</p>
<h2>How long we keep email</h2>
<p>We keep correspondence for as long as we need it to handle your question and any follow-up, and then delete it. Hosting logs are kept on the host’s schedule, not ours.</p>
<h2>Your rights</h2>
<p>Under UK GDPR you can ask for a copy of the personal data we hold about you, ask us to correct it, ask us to delete it, ask us to restrict or stop certain uses, and ask for a portable copy where that right applies. You can also complain to the Information Commissioner’s Office at <a href="https://ico.org.uk/make-a-complaint/" rel="noopener noreferrer">ico.org.uk/make-a-complaint</a>. We would like the chance to put a problem right first, via the contact address above.</p>
<h2>Children</h2>
<p>The guides talk about pressing children’s clothes. The site itself is written for adult crafters. We do not knowingly collect information from children.</p>
`
  },
  {
    path: "/contact/",
    title: "Contact heatpress-settings.co.uk",
    description: "Email contact@heatpress-settings.co.uk about a chart, a correction or a broken source link. There is no contact form.",
    kicker: "Contact",
    h1: "Contact",
    lede: "There is no form and no inbox inside the site. Email is the whole of it.",
    crumbs: [
      { href: "/", label: "Home" },
      { href: "/contact/", label: "Contact" }
    ],
    schema: "contact",
    ad: false,
    related: [
      { href: "/about/", label: "How the numbers are chosen" },
      { href: "/", label: "Settings lookup" }
    ],
    body: `
<p><a href="mailto:contact@heatpress-settings.co.uk">contact@heatpress-settings.co.uk</a></p>
<p>Useful mail is a correction: the film name, the page you were on, and the manufacturer link that disagrees with us. We cannot set the dial for every press and every own-brand vinyl. If the packet in your hand has a temperature, that packet wins.</p>
<p>Please do not send passwords, payment card numbers or anything else you would not want in an ordinary email. The <a href="/privacy/">privacy notice</a> explains what happens to messages.</p>
`
  }
];
