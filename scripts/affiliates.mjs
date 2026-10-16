// Awin affiliate links (publisher 3125874). Craft Buddy Shop = advertiser 45747.
const awin = (dest) =>
  `https://www.awin1.com/cread.php?awinmid=45747&awinaffid=3125874&clickref=heatpress&ued=${encodeURIComponent(dest)}`;

export const craftBuddyMotifs = awin("https://www.craftbuddyshop.com/products/iom-20mx-craft-buddy-set-of-20-assorted-iron-on-motifs");

export function craftBuddyNote(before, linkText, after = "") {
  return `<p>${before}<a href="${craftBuddyMotifs.replace(/&/g, "&amp;")}" rel="sponsored nofollow noopener" target="_blank">${linkText}</a>${after}</p>
<p class="affiliate-note">Affiliate link: if you buy through it, this site may earn a small commission at no extra cost to you.</p>`;
}
