// Awin affiliate links (publisher 3125874). Craft Buddy Shop = advertiser 45747.
const awin = (dest) =>
  `https://www.awin1.com/cread.php?awinmid=45747&awinaffid=3125874&clickref=heatpress&ued=${encodeURIComponent(dest)}`;

export const craftBuddyMotifs = awin("https://www.craftbuddyshop.com/products/iom-20mx-craft-buddy-set-of-20-assorted-iron-on-motifs");

/** One page-top disclosure for pages that carry affiliate links. */
export function affiliatePageLine() {
  return `<p class="affiliate-note">This page contains affiliate links.</p>`;
}

/** Contextual Craft Buddy sentence with tracking link; no per-link note. */
export function craftBuddyNote(before, linkText, after = "") {
  return `<p>${before}<a href="${craftBuddyMotifs.replace(/&/g, "&amp;")}" rel="sponsored nofollow noopener" target="_blank">${linkText}</a>${after}</p>`;
}
