/* Published heat-press examples for the lookup.
   Add a record to `records` to expose a new combination.
   Temperatures are the figures printed by the source named on each example.
   Fahrenheit in brackets is the manufacturer's figure when they print one,
   otherwise the usual conversion (C × 9/5 + 32). */
(function (root) {
  "use strict";

  var easyweed = {
    name: "Siser EasyWeed",
    tempC: "150",
    tempF: "305",
    tempNote: "Siser prints 305°F beside 150°C. The usual conversion of 150°C is 302°F.",
    time: "10–15 seconds",
    pressure: "Medium",
    peel: "Hot or cold",
    detail: "Preheat the garment for 2–3 seconds and cover the design. If a section lifts, cover it and press again for 5–10 seconds. Siser say EasyPress users should add about 30°. The note sits beside 305°F/150°C and is read as 30°F, not an extra 30°C. It applies to the EasyPress, not to every machine.",
    sourceLabel: "Siser EasyWeed",
    sourceUrl: "https://www.siserna.com/easyweed/"
  };

  var oneFlex = {
    name: "Garment Films One Flex",
    tempC: "140",
    tempF: "284",
    tempNote: "284°F is the usual conversion. Garment Films publish this chart in Celsius.",
    time: "8 seconds",
    pressure: "Not listed on this chart",
    peel: "Hot, warm or cool",
    detail: "Garment Films call 140°C for 8 seconds their standard recommendation. The same line also lists 150°C for 5 seconds, 130°C for 10 seconds and 120°C for 15 seconds. Their chart says these films are not suitable for nylon or coated fabrics.",
    sourceLabel: "Garment Films application guidelines",
    sourceUrl: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf"
  };

  var oneFlexCool = {
    name: "Garment Films One Flex, cooler press",
    tempC: "120",
    tempF: "248",
    tempNote: "248°F is the usual conversion.",
    time: "15 seconds",
    pressure: "Not listed on this chart",
    peel: "Hot, warm or cool",
    detail: "The lower-temperature option on the One Flex line, for more sensitive garments. 130°C for 10 seconds is the step between this and the 140°C standard.",
    sourceLabel: "Garment Films application guidelines",
    sourceUrl: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf"
  };

  var hi5 = {
    name: "Siser HI-5",
    tempC: "120",
    tempF: "248",
    tempNote: "Use 150°C (302°F) instead when the textile is heavier than 150 g/m². 248°F is the usual conversion of 120°C.",
    time: "5 seconds",
    pressure: "High (about 4–5 bar)",
    peel: "Hot or cold",
    detail: "Low-temperature PU for polyester, cotton, blends and elastane. Siser states it is OEKO-TEX Standard 100 Class I and describes it as certified for baby clothing. Not a substitute for a hotter film's instructions.",
    sourceLabel: "Siser HI-5",
    sourceUrl: "https://www.siser.com/cad-cut/hi-5/"
  };

  var subBlock = {
    name: "Siser EasyWeed Sub Block",
    tempC: "130",
    tempF: "265",
    tempNote: "Siser prints 265°F / 130°C.",
    time: "10–15 seconds",
    pressure: "Medium",
    peel: "Hot or cold",
    detail: "A blocker for polyester that bleeds dye into ordinary HTV, including many sublimated shirts. Siser links dye migration to high temperature and high pressure. Lay other colours on top of Sub Block if you need them.",
    sourceLabel: "Siser EasyWeed Sub Block",
    sourceUrl: "https://www.siserna.com/easyweed-sub-block/"
  };

  var easyweedExtra = {
    name: "Siser EasyWeed Extra",
    tempC: "150",
    tempF: "305",
    tempNote: "Siser prints 305°F beside 150°C.",
    time: "10–15 seconds",
    pressure: "Medium",
    peel: "Hot or cold",
    detail: "The EasyWeed instruction sheet lists nylon for EasyWeed Extra, not for standard EasyWeed. A Siser reference chart describes the pressure as light to medium. Preheat 2–3 seconds. Wash cold, inside out, after 24 hours.",
    sourceLabel: "Siser HTV application instructions",
    sourceUrl: "https://uscutter.com/content/PDFs/Siser-heat-transfer-vinyl-instructions-2024.pdf"
  };

  var glitterSiser = {
    name: "Siser Glitter",
    tempC: "160",
    tempF: "320",
    tempNote: "Siser prints 320°F / 160°C.",
    time: "15–20 seconds",
    pressure: "Medium",
    peel: "Warm",
    detail: "Siser North America: medium pressure, 15–20 seconds, peel warm and wait at least 15 seconds off the press. The EU glitter page prints 15 seconds and a hot or cold peel. A compiled Siser instruction sheet says 10–15 seconds and a warm peel. Use the sheet in the box. Listed for cotton, poly-cotton, polyester and leather.",
    sourceLabel: "Siser Glitter",
    sourceUrl: "https://www.siserna.com/glitter/"
  };

  var glitterGf = {
    name: "Garment Films Premium Glitter",
    tempC: "160–170",
    tempF: "320–338",
    tempNote: "Fahrenheit is the usual conversion. The chart is in Celsius.",
    time: "15 seconds",
    pressure: "Not listed on this chart",
    peel: "Hot, warm or cool",
    detail: "The Garment Films chart says these films are not suitable for nylon or coated fabrics. Wait 24 hours before washing, wash inside out, and skip fabric conditioner.",
    sourceLabel: "Garment Films application guidelines",
    sourceUrl: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf"
  };

  var flockSiser = {
    name: "Siser StripFlock Pro",
    tempC: "155",
    tempF: "310–311",
    tempNote: "The EU page prints 155°C (311°F). The North America page prints 310°F / 155°C.",
    time: "15 seconds",
    pressure: "Medium",
    peel: "Warm",
    detail: "North America: peel warm, at least 10 seconds off the press. Siser's own pages disagree about layering this film on itself, so follow the sheet in the box and test. For a cooler press, Siser's heat-sensitive fabric article says you can try 25–30 seconds and not go below 140°C.",
    sourceLabel: "Siser StripFlock Pro",
    sourceUrl: "https://www.siserna.com/stripflock-pro/"
  };

  var flockGf = {
    name: "Garment Films Flock",
    tempC: "150",
    tempF: "302",
    tempNote: "302°F is the usual conversion.",
    time: "10 seconds",
    pressure: "Not listed on this chart",
    peel: "Cool",
    detail: "Not suitable for nylon or coated fabrics, according to the same Garment Films chart.",
    sourceLabel: "Garment Films application guidelines",
    sourceUrl: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf"
  };

  var stretchSiser = {
    name: "Siser EasyWeed Stretch",
    tempC: "160",
    tempF: "320",
    tempNote: "Siser prints 320°F / 160°C.",
    time: "20 seconds",
    pressure: "Firm",
    peel: "Hot or cold",
    detail: "Listed for cotton, poly-cotton, polyester and nylon. Preheat 2–3 seconds. If an area lifts, cover and press for 5–10 seconds. Wash cold, inside out, after 24 hours, and dry on low.",
    sourceLabel: "Siser EasyWeed Stretch",
    sourceUrl: "https://www.siserna.com/easyweed-stretch/"
  };

  var ecoStretch = {
    name: "Siser EasyWeed EcoStretch",
    tempC: "120",
    tempF: "250",
    tempNote: "The instruction sheet prints 250°F / 120°C. A Siser reference chart prints 121°C for the same 250°F.",
    time: "10–15 seconds",
    pressure: "Medium",
    peel: "Hot",
    detail: "A lower-temperature stretch film. Listed for cotton, poly-cotton, polyester and Lycra or spandex. The instruction sheet does not list nylon.",
    sourceLabel: "Siser HTV application instructions",
    sourceUrl: "https://uscutter.com/content/PDFs/Siser-heat-transfer-vinyl-instructions-2024.pdf"
  };

  var stretchGf = {
    name: "Garment Films Stretch Flex",
    tempC: "150",
    tempF: "302",
    tempNote: "302°F is the usual conversion.",
    time: "10 seconds",
    pressure: "Not listed on this chart",
    peel: "Cool",
    detail: "The chart's general note says these films are not suitable for nylon or coated fabrics.",
    sourceLabel: "Garment Films application guidelines",
    sourceUrl: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf"
  };

  var metalSiser = {
    name: "Siser Metal",
    tempC: "150",
    tempF: "305",
    tempNote: "Siser prints 305°F / 150°C.",
    time: "10–15 seconds",
    pressure: "Medium",
    peel: "Cold",
    detail: "Listed for cotton, poly-cotton and polyester. The instruction sheet does not list nylon. Peel when the carrier is cold.",
    sourceLabel: "Siser HTV application instructions",
    sourceUrl: "https://uscutter.com/content/PDFs/Siser-heat-transfer-vinyl-instructions-2024.pdf"
  };

  var metalGf = {
    name: "Garment Films Stretch Metallic",
    tempC: "140",
    tempF: "284",
    tempNote: "284°F is the usual conversion.",
    time: "7–10 seconds",
    pressure: "Not listed on this chart",
    peel: "Warm or cool",
    detail: "Garment Films also list a combined Metallic and Holographic line at 140–150°C for 10–15 seconds. Stretch Metallic is the line they also describe for Lycra. The chart still says the films are not suitable for nylon.",
    sourceLabel: "Garment Films application guidelines",
    sourceUrl: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf"
  };

  var holoSiser = {
    name: "Siser Holographic",
    tempC: "160",
    tempF: "320",
    tempNote: "Siser prints 320°F / 160°C.",
    time: "15–20 seconds",
    pressure: "Medium to firm",
    peel: "Cold",
    detail: "Preheat 2–3 seconds. Siser's holographic tips say to apply hot and peel only once the carrier is cold. The finish changes with the shirt colour. Listed for cotton, poly-cotton, polyester and leather.",
    sourceLabel: "Siser, working with holographic",
    sourceUrl: "https://www.siser.com/news/tips-tricks-for-working-with-holographic/"
  };

  var holoBlack = {
    name: "Garment Films Holo PU Black",
    tempC: "140",
    tempF: "284",
    tempNote: "284°F is the usual conversion.",
    time: "8–10 seconds",
    pressure: "Not listed on this chart",
    peel: "Cold",
    detail: "A separate line from their mixed Metallic and Holographic film. Not suitable for nylon or coated fabrics.",
    sourceLabel: "Garment Films application guidelines",
    sourceUrl: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf"
  };

  var holoMix = {
    name: "Garment Films Metallic and Holographic",
    tempC: "140–150",
    tempF: "284–302",
    tempNote: "Fahrenheit is the usual conversion.",
    time: "10–15 seconds",
    pressure: "Not listed on this chart",
    peel: "Hot, warm or cool",
    detail: "One chart line covers both finishes. Not suitable for nylon or coated fabrics.",
    sourceLabel: "Garment Films application guidelines",
    sourceUrl: "https://www.garmentfilms.co.uk/downloads/645cf2144e810192Application_Guidelines_new.pdf"
  };

  var sawgrassPoly = {
    name: "Sawgrass, polyester fabric",
    tempC: "205",
    tempF: "400",
    tempNote: "Sawgrass prints 400°F / 205°C. The usual conversion of 205°C is 401°F.",
    time: "45 seconds",
    pressure: "Medium",
    peel: "Remove the paper when the press opens",
    detail: "Sawgrass calls the whole chart a starting place and says to follow the blank maker if the substrate is not listed. A Sawgrass polo walkthrough uses 400°F (204°C) for 45 seconds at high pressure, so pressure is not identical in every Sawgrass note.",
    sourceLabel: "Sawgrass sublimation heat press settings",
    sourceUrl: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings"
  };

  var xpresPoly = {
    name: "Xpres, polyester T-shirt",
    tempC: "190",
    tempF: "374",
    tempNote: "374°F is the usual conversion. Xpres publish this guide in Celsius.",
    time: "60–70 seconds",
    pressure: "Medium",
    peel: "Hot",
    detail: "Mirror the print, tape it face down, cover with a silicone sheet, then peel while hot. Xpres say sublimation needs light-coloured polyester or a polymer coating, and will not work on cotton or dark garments.",
    sourceLabel: "Xpres, how to sublimate T-shirts",
    sourceUrl: "https://www.xpres.co.uk/how-to-sublimate-t-shirts"
  };

  var sawgrassMug = {
    name: "Sawgrass, ceramic mug",
    tempC: "180–205",
    tempF: "350–400",
    tempNote: "Sawgrass prints 350–400°F / 180–205°C.",
    time: "150–300 seconds",
    pressure: "Medium",
    peel: "Take the paper off as the mug press instructions say",
    detail: "This is a wide range because mugs and mug presses differ. Xpres say a mug needs a mug press, not a flat platen. Start from the blank maker's card if you have one, inside this range.",
    sourceLabel: "Sawgrass sublimation heat press settings",
    sourceUrl: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings"
  };

  var sawgrassMdf = {
    name: "Sawgrass, MDF board",
    tempC: "205",
    tempF: "400",
    tempNote: "Sawgrass prints 400°F / 205°C.",
    time: "60 seconds",
    pressure: "Medium",
    peel: "Lift the paper straight off after pressing",
    detail: "For a sublimation-coated MDF blank. Uncoated MDF will not take the dye.",
    sourceLabel: "Sawgrass sublimation heat press settings",
    sourceUrl: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings"
  };

  var sawgrassMetal = {
    name: "Sawgrass, metal",
    tempC: "205",
    tempF: "400",
    tempNote: "Sawgrass prints 400°F / 205°C.",
    time: "60 seconds",
    pressure: "Medium",
    peel: "Lift the paper straight off after pressing",
    detail: "Sawgrass list “metal”, which in practice means a sublimation-coated aluminium or steel panel. Bare metal will not hold the image.",
    sourceLabel: "Sawgrass sublimation heat press settings",
    sourceUrl: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings"
  };

  var sawgrassSlate = {
    name: "Sawgrass, slate",
    tempC: "205",
    tempF: "400",
    tempNote: "Sawgrass prints 400°F / 205°C.",
    time: "420 seconds (7 minutes)",
    pressure: "Medium",
    peel: "Lift the paper straight off after pressing",
    detail: "Much longer than MDF or metal on the same Sawgrass chart. Do not swap the times between hard blanks.",
    sourceLabel: "Sawgrass sublimation heat press settings",
    sourceUrl: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings"
  };

  var sawgrassAcrylic = {
    name: "Sawgrass, acrylic",
    tempC: "190",
    tempF: "375",
    tempNote: "Sawgrass prints 375°F / 190°C.",
    time: "60 seconds",
    pressure: "Medium",
    peel: "Lift the paper straight off after pressing",
    detail: "Only for sublimation-coated acrylic. This is cooler than Sawgrass's MDF and metal line.",
    sourceLabel: "Sawgrass sublimation heat press settings",
    sourceUrl: "https://care.sawgrassink.com/hc/en-us/articles/10587333978011-Sublimation-Heat-Press-Settings"
  };

  var dtfSheet = {
    name: "Xpres DTF information sheet",
    tempC: "160",
    tempF: "320",
    tempNote: "320°F is the usual conversion. The sheet is in Celsius.",
    time: "15 seconds, then repress 15 seconds",
    pressure: "Light to medium",
    peel: "Cold",
    detail: "Adhesive side down. Take the garment off the platen, peel cold, then cover with a silicone sheet and repress for 15 seconds. The same sheet tells you to cure their hot-melt powder at 120°C for 3–5 minutes until it looks like orange peel. Xpres call this a guideline.",
    sourceLabel: "Xpres DTF information sheet",
    sourceUrl: "https://www.xpres.co.uk/globalassets/xpres/downloads/xp2763/dtf-information-sheet.pdf"
  };

  var dtfGuide = {
    name: "Xpres DTF how-to guide",
    tempC: "150–160",
    tempF: "302–320",
    tempNote: "Fahrenheit is the usual conversion.",
    time: "10–15 seconds",
    pressure: "Medium",
    peel: "Cold",
    detail: "Xpres say to raise the temperature slightly for heavier cotton, without giving a new number. Cure the powder until it looks like orange peel; the guide mentions both a few minutes at 150–160°C and a 120°C cure on the older product sheet. Follow the sheet supplied with your powder.",
    sourceLabel: "Xpres, how to DTF",
    sourceUrl: "https://www.xpres.co.uk/direct-to-film-how-to-guide"
  };

  var dtfFaq = {
    name: "Garment Films, basic DTF figure",
    tempC: "140–150",
    tempF: "284–302",
    tempNote: "The FAQ prints 284–302°F (140–150°C).",
    time: "8–10 seconds",
    pressure: "Medium",
    peel: "Follow the film's data sheet",
    detail: "This is the company's general FAQ, and it tells you to follow the technical data sheet for the film in front of you. The same FAQ gives two different general HTV figures, so treat this DTF line as a rough house range, not a named film.",
    sourceLabel: "Garment Films FAQ",
    sourceUrl: "https://garmentfilms.com/pages/faqs"
  };

  var guides = {
    standard: "/methods/standard-htv/",
    glitter: "/methods/glitter-htv/",
    flock: "/methods/flock-htv/",
    special: "/methods/stretch-metallic-holographic-htv/",
    poly: "/methods/sublimation-polyester/",
    mug: "/methods/sublimation-mugs/",
    hard: "/methods/sublimation-hard-blanks/",
    dtf: "/methods/dtf/",
    cotton: "/fabrics/cotton/",
    polyester: "/fabrics/polyester/",
    blend: "/fabrics/poly-cotton/",
    nylon: "/fabrics/nylon/",
    kids: "/fabrics/childrens-clothing/",
    tote: "/fabrics/tote-bags/",
    peel: "/troubleshooting/vinyl-peeling/",
    scorch: "/troubleshooting/scorch-marks/",
    ghost: "/troubleshooting/sublimation-ghosting/",
    fade: "/troubleshooting/faded-sublimation/"
  };

  function links() {
    var list = [];
    for (var i = 0; i < arguments.length; i++) list.push(arguments[i]);
    return list;
  }

  function rec(fields) {
    return fields;
  }

  root.HP_SETTINGS = {
    reviewed: "7 October 2026",
    methods: [
      { id: "htv", label: "Heat transfer vinyl" },
      { id: "sublimation", label: "Sublimation" },
      { id: "dtf", label: "DTF transfer" }
    ],
    vinylTypes: [
      { id: "standard", label: "Standard everyday PU" },
      { id: "glitter", label: "Glitter" },
      { id: "flock", label: "Flock" },
      { id: "stretch", label: "Stretch" },
      { id: "metallic", label: "Metallic" },
      { id: "holographic", label: "Holographic" }
    ],
    materials: [
      { id: "cotton", label: "100% cotton", methods: ["htv", "sublimation", "dtf"] },
      { id: "polycotton", label: "Poly-cotton blend", methods: ["htv", "sublimation", "dtf"] },
      { id: "polyester", label: "100% polyester", methods: ["htv", "sublimation", "dtf"] },
      { id: "nylon", label: "Nylon", methods: ["htv", "sublimation", "dtf"] },
      { id: "canvas", label: "Tote bag or canvas", methods: ["htv", "sublimation", "dtf"] },
      { id: "childrens", label: "Children's clothing or pyjamas", methods: ["htv", "sublimation", "dtf"] },
      { id: "mug", label: "Ceramic mug", methods: ["sublimation"] },
      { id: "mdf", label: "MDF blank", methods: ["sublimation"] },
      { id: "metal", label: "Aluminium or metal panel", methods: ["sublimation"] },
      { id: "slate", label: "Slate", methods: ["sublimation"] },
      { id: "acrylic", label: "Acrylic blank", methods: ["sublimation"] }
    ],
    records: [
      rec({
        method: "htv", vinyl: "standard", material: "cotton",
        summary: "Everyday PU films cluster around 140–150°C, but the time and peel are not the same product to product.",
        examples: [easyweed, oneFlex],
        guide: guides.standard,
        links: links(
          { href: guides.cotton, label: "Cotton fabric notes" },
          { href: guides.peel, label: "If the vinyl lifts" },
          { href: guides.scorch, label: "Scorch marks" }
        )
      }),
      rec({
        method: "htv", vinyl: "standard", material: "polycotton",
        summary: "Siser and Garment Films both list poly-cotton blends for everyday PU. They do not publish a separate blend temperature.",
        examples: [easyweed, oneFlex],
        caution: "The polyester in a blend can still bleed dye into the vinyl. If the shirt colour creeps into the design, look at a blocker film rather than pressing hotter.",
        guide: guides.standard,
        links: links(
          { href: guides.blend, label: "Poly-cotton blends" },
          { href: guides.polyester, label: "Polyester and dye migration" }
        )
      }),
      rec({
        method: "htv", vinyl: "standard", material: "polyester",
        summary: "Standard EasyWeed uses the same heat on polyester as on cotton. Dye migration is the extra problem, not a different everyday temperature.",
        examples: [easyweed, oneFlex, subBlock],
        caution: "Polyester can scorch, shine or bleed dye. Siser's heat-sensitive fabric advice is to test an inside seam and to use a cover sheet. Sub Block is the film they publish at 130°C for dye migration.",
        guide: guides.polyester,
        links: links(
          { href: guides.scorch, label: "Scorch and shine" },
          { href: guides.standard, label: "Standard HTV guide" }
        )
      }),
      rec({
        method: "htv", vinyl: "standard", material: "nylon",
        summary: "Standard EasyWeed's instruction sheet does not list nylon. EasyWeed Extra does. Garment Films' chart says their films are not suitable for nylon.",
        examples: [easyweedExtra],
        caution: "Nylon marks and can melt. Test an inside seam with a cover sheet before you press the outside. Do not use a film whose sheet excludes nylon.",
        guide: guides.nylon,
        links: links(
          { href: guides.scorch, label: "Heat-sensitive fabrics" },
          { href: guides.standard, label: "Standard HTV guide" }
        )
      }),
      rec({
        method: "htv", vinyl: "standard", material: "canvas",
        summary: "Canvas totes are not given their own line on these charts. Uncoated cotton canvas follows the cotton HTV figures. Pre-press longer so the panel is dry and flat.",
        examples: [easyweed, oneFlex],
        caution: "Seams, handles and pockets stop the platen sitting flat. Press the plain panel. Sawgrass, writing about uneven shirts, suggest a pressing pillow so the surface is even. The same idea helps a bulky tote.",
        guide: guides.tote,
        links: links(
          { href: guides.cotton, label: "Cotton settings" },
          { href: guides.dtf, label: "DTF on cotton canvas" }
        )
      }),
      rec({
        method: "htv", vinyl: "standard", material: "childrens",
        summary: "Match the film to the care label. Ordinary cotton can use an everyday chart. Heat-sensitive and babywear have lower published options.",
        examples: [hi5, oneFlexCool, easyweed],
        caution: "Keep plastic poppers, zips and existing prints off the platen. If you sell children's nightwear in the UK, flammability labelling rules still apply. This page is not a compliance guide.",
        guide: guides.kids,
        links: links(
          { href: guides.kids, label: "Children's clothing and pyjamas" },
          { href: guides.scorch, label: "Scorch marks" },
          { href: guides.cotton, label: "Cotton" }
        )
      }),
      rec({
        method: "htv", vinyl: "glitter", material: "cotton",
        summary: "Glitter films on these charts sit at 160°C, sometimes up to 170°C, and they often want a warm peel rather than a hot one.",
        examples: [glitterSiser, glitterGf],
        guide: guides.glitter,
        links: links(
          { href: guides.peel, label: "Peeling too soon" },
          { href: guides.cotton, label: "Cotton" }
        )
      }),
      rec({
        method: "htv", vinyl: "glitter", material: "polycotton",
        summary: "Both of these glitter charts include poly-cotton. They do not publish a lower blend temperature.",
        examples: [glitterSiser, glitterGf],
        caution: "A dyed polyester content can still migrate. Glitter is a poor candidate for pressing hotter to “fix” a colour bleed.",
        guide: guides.glitter,
        links: links({ href: guides.blend, label: "Poly-cotton blends" })
      }),
      rec({
        method: "htv", vinyl: "glitter", material: "polyester",
        summary: "Siser lists polyester for glitter at the same 160°C as cotton. That heat can shine or scorch some polyester.",
        examples: [glitterSiser, glitterGf],
        caution: "Test an inside seam and use a cover sheet. There is no lower glitter temperature on these two charts.",
        guide: guides.glitter,
        links: links(
          { href: guides.scorch, label: "Scorch marks" },
          { href: guides.polyester, label: "Polyester" }
        )
      }),
      rec({
        method: "htv", vinyl: "glitter", material: "nylon",
        unsuitable: true,
        summary: "Neither Siser Glitter nor Garment Films Premium Glitter publishes a nylon setting. Garment Films say the films on that chart are not suitable for nylon.",
        caution: "Do not borrow the 160°C cotton figure for nylon. Use a film whose data sheet names nylon, and test.",
        examples: [],
        guide: guides.nylon,
        links: links({ href: guides.nylon, label: "Nylon" })
      }),
      rec({
        method: "htv", vinyl: "glitter", material: "canvas",
        summary: "No separate canvas line. Use the cotton glitter chart on uncoated cotton canvas, and test a corner. Thick canvas may need the full published time rather than the short end.",
        examples: [glitterSiser, glitterGf],
        guide: guides.tote,
        links: links({ href: guides.glitter, label: "Glitter HTV" })
      }),
      rec({
        method: "htv", vinyl: "glitter", material: "childrens",
        summary: "These glitter charts start at 160°C. That is a lot of heat for many children's polyester garments.",
        examples: [glitterSiser, glitterGf],
        caution: "If the care label says cool iron, do not assume glitter will survive a test. Press an inside seam with a cover sheet first. These sources do not publish a children's glitter temperature.",
        guide: guides.kids,
        links: links(
          { href: guides.kids, label: "Children's clothing" },
          { href: guides.scorch, label: "Scorch marks" }
        )
      }),
      rec({
        method: "htv", vinyl: "flock", material: "cotton",
        summary: "Flock wants a warm or cool peel on these charts. Pulling the carrier hot is a common reason the pile looks patchy.",
        examples: [flockSiser, flockGf],
        guide: guides.flock,
        links: links({ href: guides.peel, label: "Vinyl peeling or lifting" })
      }),
      rec({
        method: "htv", vinyl: "flock", material: "polycotton",
        summary: "Both flock charts include poly-cotton at the same settings as cotton.",
        examples: [flockSiser, flockGf],
        guide: guides.flock,
        links: links({ href: guides.blend, label: "Poly-cotton blends" })
      }),
      rec({
        method: "htv", vinyl: "flock", material: "polyester",
        summary: "Siser lists polyester for StripFlock Pro at 155°C. Their heat-sensitive article also offers a cooler, longer press for this film.",
        examples: [flockSiser, flockGf],
        caution: "Siser's alternative for StripFlock Pro on a sensitive fabric is 25–30 seconds and not below 140°C. Test it. Do not drop every flock film to that figure.",
        guide: guides.flock,
        links: links({ href: guides.scorch, label: "Scorch marks" })
      }),
      rec({
        method: "htv", vinyl: "flock", material: "nylon",
        unsuitable: true,
        summary: "These flock charts do not list nylon. Garment Films say the films on their chart are not suitable for nylon.",
        examples: [],
        guide: guides.nylon,
        links: links({ href: guides.nylon, label: "Nylon" })
      }),
      rec({
        method: "htv", vinyl: "flock", material: "canvas",
        summary: "Cotton canvas can use the cotton flock charts. Flock is thick, so pre-press the panel flat and keep the pressure even.",
        examples: [flockSiser, flockGf],
        guide: guides.tote,
        links: links({ href: guides.flock, label: "Flock HTV" })
      }),
      rec({
        method: "htv", vinyl: "flock", material: "childrens",
        summary: "StripFlock Pro's published alternative for sensitive fabric stays at or above 140°C and uses a longer time.",
        examples: [flockSiser],
        caution: "Siser's cooler StripFlock trial is 25–30 seconds, not below 140°C. It is still hot for some children's polyester. Test a seam.",
        guide: guides.kids,
        links: links(
          { href: guides.flock, label: "Flock HTV" },
          { href: guides.kids, label: "Children's clothing" }
        )
      }),
      rec({
        method: "htv", vinyl: "stretch", material: "cotton",
        summary: "Stretch films on these charts are not one setting. EcoStretch is a full 40°C cooler than EasyWeed Stretch.",
        examples: [ecoStretch, stretchGf, stretchSiser],
        guide: guides.special,
        links: links({ href: guides.cotton, label: "Cotton" })
      }),
      rec({
        method: "htv", vinyl: "stretch", material: "polycotton",
        summary: "All three stretch examples list poly-cotton or blends. Pick the row that matches the film name on the roll.",
        examples: [ecoStretch, stretchGf, stretchSiser],
        guide: guides.special,
        links: links({ href: guides.blend, label: "Poly-cotton blends" })
      }),
      rec({
        method: "htv", vinyl: "stretch", material: "polyester",
        summary: "On polyester, the lower EcoStretch figure is the one to try first if the shirt shines at 160°C.",
        examples: [ecoStretch, stretchGf, stretchSiser],
        caution: "EasyWeed Stretch at 160°C and firm pressure is published for polyester, and it is also enough to scorch some of it. Test.",
        guide: guides.special,
        links: links({ href: guides.scorch, label: "Scorch marks" })
      }),
      rec({
        method: "htv", vinyl: "stretch", material: "nylon",
        summary: "Of these three, only EasyWeed Stretch lists nylon. EcoStretch does not, and Garment Films exclude nylon.",
        examples: [stretchSiser],
        caution: "160°C and firm pressure can mark nylon even when the film lists it. Cover the test, press an inside seam, and stop if the fibre shines or stiffens.",
        guide: guides.nylon,
        links: links({ href: guides.nylon, label: "Nylon" })
      }),
      rec({
        method: "htv", vinyl: "stretch", material: "canvas",
        summary: "A tote rarely needs a stretch film. If you are pressing stretch vinyl onto cotton canvas, use the cotton row for that film.",
        examples: [ecoStretch, stretchGf, stretchSiser],
        guide: guides.tote,
        links: links({ href: guides.special, label: "Stretch, metallic and holographic" })
      }),
      rec({
        method: "htv", vinyl: "stretch", material: "childrens",
        summary: "For stretchy children's clothes, EcoStretch's 120°C setting is the lower published stretch figure. HI-5 is the film Siser ties to baby clothing, and it is not a stretch-branded roll.",
        examples: [ecoStretch, hi5, stretchSiser],
        caution: "Do not start children's polyester at EasyWeed Stretch's 160°C firm press. Use that row only if the film in your hand is EasyWeed Stretch and a seam test survives it.",
        guide: guides.kids,
        links: links({ href: guides.kids, label: "Children's clothing" })
      }),
      rec({
        method: "htv", vinyl: "metallic", material: "cotton",
        summary: "Metallic films on these charts are cooler than holographic Siser film, and Siser Metal is a cold peel.",
        examples: [metalSiser, metalGf],
        guide: guides.special,
        links: links({ href: guides.peel, label: "Peel problems" })
      }),
      rec({
        method: "htv", vinyl: "metallic", material: "polycotton",
        summary: "Both metallic examples include blends. Peel cold for Siser Metal.",
        examples: [metalSiser, metalGf],
        guide: guides.special,
        links: links({ href: guides.blend, label: "Poly-cotton blends" })
      }),
      rec({
        method: "htv", vinyl: "metallic", material: "polyester",
        summary: "Siser Metal lists polyester at 150°C. Cover the press so the shirt does not shine.",
        examples: [metalSiser, metalGf],
        caution: "Metallic films show scorch and shine more readily than matte PU. Test a seam.",
        guide: guides.special,
        links: links({ href: guides.scorch, label: "Scorch marks" })
      }),
      rec({
        method: "htv", vinyl: "metallic", material: "nylon",
        unsuitable: true,
        summary: "Siser Metal's instruction sheet does not list nylon. Garment Films say their chart is not suitable for nylon. Stretch Metallic is listed for Lycra, which is not the same fibre.",
        examples: [],
        guide: guides.nylon,
        links: links({ href: guides.nylon, label: "Nylon" })
      }),
      rec({
        method: "htv", vinyl: "metallic", material: "canvas",
        summary: "Use the cotton metallic chart on uncoated cotton canvas. Cold-peel films still need a cold peel on a tote.",
        examples: [metalSiser, metalGf],
        guide: guides.tote,
        links: links({ href: guides.special, label: "Metallic HTV" })
      }),
      rec({
        method: "htv", vinyl: "metallic", material: "childrens",
        summary: "Garment Films Stretch Metallic at 140°C is the cooler of these two metallic charts. Neither source publishes a babywear metallic setting.",
        examples: [metalGf, metalSiser],
        caution: "Test the care label. Metallic film at 150°C can shine a polyester pyjama top.",
        guide: guides.kids,
        links: links({ href: guides.kids, label: "Children's clothing" })
      }),
      rec({
        method: "htv", vinyl: "holographic", material: "cotton",
        summary: "Siser holographic is a cold peel at 160°C. Garment Films publish cooler holographic lines. They are different products.",
        examples: [holoSiser, holoBlack, holoMix],
        guide: guides.special,
        links: links({ href: guides.peel, label: "Cold peel" })
      }),
      rec({
        method: "htv", vinyl: "holographic", material: "polycotton",
        summary: "These holographic charts include blends at the same settings as cotton.",
        examples: [holoSiser, holoBlack, holoMix],
        guide: guides.special,
        links: links({ href: guides.blend, label: "Poly-cotton blends" })
      }),
      rec({
        method: "htv", vinyl: "holographic", material: "polyester",
        summary: "Siser's 160°C cold peel is published for polyester. The Garment Films lines are cooler if your roll is one of those.",
        examples: [holoBlack, holoMix, holoSiser],
        caution: "Holographic film shows every scorch. Cover the garment and test a seam before a full design.",
        guide: guides.special,
        links: links({ href: guides.scorch, label: "Scorch marks" })
      }),
      rec({
        method: "htv", vinyl: "holographic", material: "nylon",
        unsuitable: true,
        summary: "None of these holographic charts list nylon. Garment Films exclude nylon.",
        examples: [],
        guide: guides.nylon,
        links: links({ href: guides.nylon, label: "Nylon" })
      }),
      rec({
        method: "htv", vinyl: "holographic", material: "canvas",
        summary: "Cotton canvas uses the cotton holographic chart for the film you actually have. Cold-peel carriers must go fully cold.",
        examples: [holoSiser, holoBlack, holoMix],
        guide: guides.tote,
        links: links({ href: guides.special, label: "Holographic HTV" })
      }),
      rec({
        method: "htv", vinyl: "holographic", material: "childrens",
        summary: "The cooler published holographic figures here are the Garment Films lines at 140°C. Siser holographic is 160°C.",
        examples: [holoBlack, holoMix, holoSiser],
        caution: "160°C is a poor first test on children's polyester. Match the card to the brand on the roll, and test a seam.",
        guide: guides.kids,
        links: links({ href: guides.kids, label: "Children's clothing" })
      }),
      rec({
        method: "sublimation", material: "polyester",
        summary: "Sawgrass and Xpres both publish polyester-fabric settings, and they do not match. Use the one that fits your paper and blank, then test.",
        examples: [sawgrassPoly, xpresPoly],
        caution: "Sublimation needs light-coloured polyester or a polymer coating. It will not print on cotton or on dark fabric, because there is no white ink.",
        guide: guides.poly,
        links: links(
          { href: guides.ghost, label: "Ghosting and blur" },
          { href: guides.fade, label: "Faded sublimation" },
          { href: guides.polyester, label: "Polyester fabric" }
        )
      }),
      rec({
        method: "sublimation", material: "polycotton",
        summary: "There is no separate blend temperature on these charts. Only the polyester fibres take the dye, so a 50/50 shirt looks pale and speckled if it works at all.",
        examples: [sawgrassPoly, xpresPoly],
        caution: "Xpres say sublimation will not work on cotton. A blend is a partial version of that problem, not a third process. Prefer a high-polyester blank sold for sublimation.",
        guide: guides.blend,
        links: links(
          { href: guides.fade, label: "Faded prints" },
          { href: guides.poly, label: "Sublimation on polyester" }
        )
      }),
      rec({
        method: "sublimation", material: "cotton",
        unsuitable: true,
        summary: "Cotton does not take sublimation dye.",
        caution: "Xpres state that sublimation only works on light-coloured polyester or polymer-coated items, and will not work on cotton. Use HTV or DTF for a cotton shirt.",
        examples: [],
        guide: guides.cotton,
        links: links(
          { href: guides.cotton, label: "Cotton: use HTV or DTF" },
          { href: guides.dtf, label: "DTF transfers" },
          { href: guides.standard, label: "Standard HTV" }
        )
      }),
      rec({
        method: "sublimation", material: "nylon",
        unsuitable: true,
        summary: "These sublimation charts do not list nylon.",
        caution: "Sawgrass and Xpres publish polyester and coated blanks, not nylon. Nylon also scorches at sublimation heat. Only press nylon if the blank maker gives you a setting.",
        examples: [],
        guide: guides.nylon,
        links: links({ href: guides.nylon, label: "Nylon" })
      }),
      rec({
        method: "sublimation", material: "canvas",
        unsuitable: true,
        summary: "Ordinary cotton canvas will not sublimate.",
        caution: "A tote needs a polyester or polymer-coated face. If the bag is sold as a sublimation blank, use that maker's card. Otherwise use HTV or DTF.",
        examples: [],
        guide: guides.tote,
        links: links(
          { href: guides.tote, label: "Tote bags and canvas" },
          { href: guides.dtf, label: "DTF" }
        )
      }),
      rec({
        method: "sublimation", material: "childrens",
        summary: "Only a light-coloured polyester children's garment can take sublimation. These figures are for polyester fabric in general, not for nightwear.",
        examples: [xpresPoly, sawgrassPoly],
        caution: "190–205°C can scorch or shine polyester. Test a spare. Children's nightwear sold in the UK also has flammability labelling rules that a heat press does not change.",
        guide: guides.kids,
        links: links(
          { href: guides.kids, label: "Children's clothing" },
          { href: guides.scorch, label: "Scorch marks" }
        )
      }),
      rec({
        method: "sublimation", material: "mug",
        summary: "Sawgrass publish a wide mug range because the blank and the mug press both change the result.",
        examples: [sawgrassMug],
        caution: "Use a mug press. Tape the paper so it cannot shift, or you will get a ghost image. Do not leave a hot mug where a child can pick it up.",
        guide: guides.mug,
        links: links(
          { href: guides.ghost, label: "Ghosting" },
          { href: guides.fade, label: "Faded mugs" }
        )
      }),
      rec({
        method: "sublimation", material: "mdf",
        summary: "Coated MDF on the Sawgrass chart is a one-minute press, not the long slate time.",
        examples: [sawgrassMdf],
        guide: guides.hard,
        links: links(
          { href: guides.hard, label: "Hard sublimation blanks" },
          { href: guides.ghost, label: "Ghosting" }
        )
      }),
      rec({
        method: "sublimation", material: "metal",
        summary: "Sawgrass list coated metal at the same heat and time as MDF. Bare aluminium will not hold a print.",
        examples: [sawgrassMetal],
        guide: guides.hard,
        links: links({ href: guides.hard, label: "Hard blanks" })
      }),
      rec({
        method: "sublimation", material: "slate",
        summary: "Slate stays under the press far longer than MDF on the same Sawgrass chart.",
        examples: [sawgrassSlate],
        caution: "420 seconds is seven minutes. Pulling a slate at the 60-second MDF time leaves a weak image.",
        guide: guides.hard,
        links: links({ href: guides.fade, label: "Faded sublimation" })
      }),
      rec({
        method: "sublimation", material: "acrylic",
        summary: "Coated acrylic is the cooler hard-blank line on the Sawgrass chart.",
        examples: [sawgrassAcrylic],
        caution: "Uncoated acrylic can warp. Use a blank sold for sublimation.",
        guide: guides.hard,
        links: links({ href: guides.hard, label: "Hard blanks" })
      }),
      rec({
        method: "dtf", material: "cotton",
        summary: "DTF is one of the ways to put a full-colour design on cotton. The press numbers depend on the film, not on a single industry setting.",
        examples: [dtfSheet, dtfGuide, dtfFaq],
        caution: "Xpres say heavier cotton may want a slightly higher temperature. They do not print a new number. Test.",
        guide: guides.dtf,
        links: links(
          { href: guides.cotton, label: "Cotton" },
          { href: guides.peel, label: "If the transfer lifts" }
        )
      }),
      rec({
        method: "dtf", material: "polycotton",
        summary: "Xpres describe DTF as suitable for cotton, polyester and blends. These press examples are not blend-specific.",
        examples: [dtfSheet, dtfGuide, dtfFaq],
        guide: guides.dtf,
        links: links({ href: guides.blend, label: "Poly-cotton blends" })
      }),
      rec({
        method: "dtf", material: "polyester",
        summary: "The same DTF press examples are what these sources give for polyester garments. Dye in the shirt can still move.",
        examples: [dtfSheet, dtfGuide, dtfFaq],
        caution: "Polyester can shine at 160°C. Pre-press lightly, use the silicone sheet Xpres mention, and test a spare.",
        guide: guides.dtf,
        links: links(
          { href: guides.polyester, label: "Polyester" },
          { href: guides.scorch, label: "Scorch marks" }
        )
      }),
      rec({
        method: "dtf", material: "nylon",
        unsuitable: true,
        summary: "Xpres name cotton, polyester and blends for DTF. They do not publish a nylon time and temperature.",
        caution: "Nylon scorches before many DTF films are happy. Press it only if your film's data sheet lists nylon.",
        examples: [],
        guide: guides.nylon,
        links: links({ href: guides.nylon, label: "Nylon" })
      }),
      rec({
        method: "dtf", material: "canvas",
        summary: "A cotton tote is in the cotton family these DTF guides already cover. They do not print a separate canvas row.",
        examples: [dtfSheet, dtfGuide],
        caution: "Pre-press the panel. Keep seams and handles out of the platen so the film is not pressed on a ridge.",
        guide: guides.tote,
        links: links({ href: guides.tote, label: "Tote bags and canvas" })
      }),
      rec({
        method: "dtf", material: "childrens",
        summary: "DTF can go on children's cotton or polyester if the fabric can take the heat. These are general garment figures, not nightwear figures.",
        examples: [dtfFaq, dtfGuide, dtfSheet],
        caution: "The cooler end of the published range is the Garment Films FAQ at 140–150°C, and even that needs a seam test on polyester. Keep poppers and zips off the platen.",
        guide: guides.kids,
        links: links({ href: guides.kids, label: "Children's clothing and pyjamas" })
      })
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
