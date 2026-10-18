// Colour pool for the pyjama photos. Real product photos from the Amazon UK storefront, no brand names.
// An inline script placed before the default pair writes a random plain + patterned pair and adds
// "pj-js" to the container; CSS (.pj-js > .pj-default {display:none}) hides the default pair, whose
// lazy images are then never fetched. Without JS the default pair (first plain + first patterned) shows.
// Every photo links to the storefront (href passed in, already HTML-escaped).
export const PYJAMA_DIR = "/img/blanks/";
export const PYJAMA_PLAIN = [["sage-white", "Plain sage green and white kids’ pyjamas with a white top"], ["mink-white", "Plain mink and white kids’ pyjamas with a white top"], ["pink-white", "Plain pink and white kids’ pyjamas with a white top"]];
export const PYJAMA_PATTERNED = [["red-stripe", "Red stripe kids’ pyjamas with a white top"], ["natural-stripe", "Natural cream stripe kids’ pyjamas with a white top"], ["blue-stars", "Blue star print kids’ pyjamas with a white top"], ["heart-print", "Pink and red heart print kids’ pyjamas with a white top"]];
const attr = (v) => String(v).replace(/&(?!amp;)/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const tag = (href, rel, [file, alt]) =>
  `<a class="pj-default" href="${href}" rel="${rel}"><img src="${PYJAMA_DIR}${file}.webp" width="600" height="800" alt="${attr(alt)}" loading="lazy" decoding="async"></a>`;

export function pyjamaPhotos(href, rel = "noopener noreferrer") {
  const js = (v) => JSON.stringify(v).replace(/</g, "\\u003c");
  const script = `<script>(function(s){var d=${js(PYJAMA_DIR)},h=${js(href)},r=${js(rel)},p=${js(PYJAMA_PLAIN)},t=${js(PYJAMA_PATTERNED)},g=function(a){return a[Math.random()*a.length|0]},o="";[g(p),g(t)].forEach(function(x){o+='<a href="'+h+'" rel="'+r+'"><img src="'+d+x[0]+'.webp" width="600" height="800" alt="'+x[1].replace(/"/g,"&quot;")+'" loading="lazy" decoding="async"></a>'});s.parentNode.classList.add("pj-js");s.insertAdjacentHTML("beforebegin",o)})(document.currentScript)</script>`;
  return script + tag(href, rel, PYJAMA_PLAIN[0]) + tag(href, rel, PYJAMA_PATTERNED[0]);
}
