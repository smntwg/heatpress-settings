// Colour pool for the pyjama photos. Real product photos from the Amazon UK storefront, no brand names.
// The HTML carries the first plain + first patterned photo as the no-JS default; an inline script
// swaps in a random plain + patterned pair on each page load. Every photo links to the storefront.
export const PYJAMA_DIR = "/img/blanks/";
export const PYJAMA_PLAIN = [["sage-white", "Plain sage green and white kids’ pyjamas with a white top"], ["mink-white", "Plain mink and white kids’ pyjamas with a white top"], ["pink-white", "Plain pink and white kids’ pyjamas with a white top"]];
export const PYJAMA_PATTERNED = [["red-stripe", "Red stripe kids’ pyjamas with a white top"], ["natural-stripe", "Natural cream stripe kids’ pyjamas with a white top"], ["blue-stars", "Blue star print kids’ pyjamas with a white top"], ["heart-print", "Heart print kids’ pyjamas with a white top"]];
export function pyjamaSwapScript() {
  const p = JSON.stringify(PYJAMA_PLAIN).replace(/</g, "\\u003c");
  const t = JSON.stringify(PYJAMA_PATTERNED).replace(/</g, "\\u003c");
  return `<script>(function(s){var d=${JSON.stringify(PYJAMA_DIR)},p=${p},t=${t},g=function(a){return a[Math.random()*a.length|0]},x=[g(p),g(t)],m=s.parentNode.querySelectorAll("img");for(var i=0;i<m.length&&i<2;i++){m[i].src=d+x[i][0]+".webp";m[i].alt=x[i][1]}})(document.currentScript)</script>`;
}
