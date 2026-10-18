// Colour pool for the pyjama photos. Real product photos from the Amazon UK storefront, no brand names.
// An inline script picks a random plain + patterned pair and writes the <img> tags before anything loads,
// so no default image is fetched and then swapped. <noscript> carries the first plain + first patterned
// photo for no-JS visitors. Every photo links to the storefront (href passed in, already HTML-escaped).
export const PYJAMA_DIR = "/img/blanks/";
export const PYJAMA_PLAIN = [["sage-white", "Plain sage green and white kids’ pyjamas with a white top"], ["mink-white", "Plain mink and white kids’ pyjamas with a white top"], ["pink-white", "Plain pink and white kids’ pyjamas with a white top"]];
export const PYJAMA_PATTERNED = [["red-stripe", "Red stripe kids’ pyjamas with a white top"], ["natural-stripe", "Natural cream stripe kids’ pyjamas with a white top"], ["blue-stars", "Blue star print kids’ pyjamas with a white top"], ["heart-print", "Pink and red heart print kids’ pyjamas with a white top"]];
const attr = (v) => String(v).replace(/&(?!amp;)/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const tag = (href, rel, [file, alt]) =>
  `<a href="${href}" rel="${rel}"><img src="${PYJAMA_DIR}${file}.webp" width="600" height="800" alt="${attr(alt)}" loading="lazy" decoding="async"></a>`;

export function pyjamaPhotos(href, rel = "noopener noreferrer") {
  const js = (v) => JSON.stringify(v).replace(/</g, "\\u003c");
  const script = `<script>(function(s){var d=${js(PYJAMA_DIR)},h=${js(href)},r=${js(rel)},p=${js(PYJAMA_PLAIN)},t=${js(PYJAMA_PATTERNED)},g=function(a){return a[Math.random()*a.length|0]},o="";[g(p),g(t)].forEach(function(x){o+='<a href="'+h+'" rel="'+r+'"><img src="'+d+x[0]+'.webp" width="600" height="800" alt="'+x[1].replace(/"/g,"&quot;")+'" loading="lazy" decoding="async"></a>'});s.insertAdjacentHTML("beforebegin",o)})(document.currentScript)</script>`;
  return `${script}<noscript>${tag(href, rel, PYJAMA_PLAIN[0])}${tag(href, rel, PYJAMA_PATTERNED[0])}</noscript>`;
}
