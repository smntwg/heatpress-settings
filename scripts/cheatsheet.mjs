// Builds downloads/heat-press-settings-cheat-sheet.pdf from data/settings.js.
// Every figure comes from the published examples in the lookup data.
// Usage: node scripts/cheatsheet.mjs  (needs google-chrome or chromium on PATH)
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(root, "data/settings.js"), "utf8");
const sandbox = {};
new Function("globalThis", "window", src)(sandbox, sandbox);
const data = sandbox.HP_SETTINGS;

const esc = (v) => String(v ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const sections = data.methods.map((m) => {
  const seen = new Map();
  for (const r of data.records.filter((r) => r.method === m.id)) {
    for (const e of r.examples || []) if (!seen.has(e.name)) seen.set(e.name, e);
  }
  return { label: m.label, rows: [...seen.values()] };
});

const tempCell = (e) => `${esc(e.tempC)}°C${e.tempF ? ` <span class="f">(${esc(e.tempF)}°F)</span>` : ""}`;
const table = (s) => `<section><h2>${esc(s.label)}</h2>
<table><thead><tr><th>Product / blank</th><th>Temp</th><th>Time</th><th>Pressure</th><th>Peel</th><th>Source</th></tr></thead><tbody>
${s.rows.map((e) => `<tr><td class="n">${esc(e.name)}</td><td class="t">${tempCell(e)}</td><td>${esc(e.time)}</td><td>${esc(e.pressure)}</td><td>${esc(e.peel)}</td><td class="s">${esc(e.sourceLabel)}</td></tr>`).join("\n")}
</tbody></table></section>`;

const html = `<!DOCTYPE html><html lang="en-GB"><head><meta charset="utf-8"><title>Heat Press Settings Cheat Sheet</title>
<style>
@page { size: A4; margin: 11mm 10mm 12mm; }
body { font-family: Arial, Helvetica, sans-serif; color: #1c1b19; font-size: 8.6pt; margin: 0; }
header { background: #242220; color: #f7f4ef; padding: 9px 12px; display: flex; justify-content: space-between; align-items: baseline; border-bottom: 4px solid #f0a04a; }
header h1 { font-family: Georgia, serif; font-size: 17pt; margin: 0; font-weight: normal; }
header span { font-size: 8.5pt; color: #f0a04a; }
.note { background: #fff6e8; color: #6b3d08; border-left: 3px solid #f0a04a; padding: 5px 8px; margin: 7px 0; }
h2 { font-family: Georgia, serif; font-size: 12pt; color: #9a4e08; margin: 9px 0 4px; }
section { break-inside: avoid; }
table { width: 100%; border-collapse: collapse; }
th { background: #34312e; color: #f7f4ef; text-align: left; padding: 3px 5px; font-size: 8pt; }
td { padding: 3px 5px; border-bottom: 1px solid #d5d8db; vertical-align: top; }
tr:nth-child(even) td { background: #f4f6f7; }
td.n { font-weight: bold; width: 22%; } td.t { white-space: nowrap; font-weight: bold; } .f { font-weight: normal; color: #4e4b47; }
td.s { color: #4e4b47; font-size: 7.6pt; width: 17%; }
footer { margin-top: 8px; font-size: 7.6pt; color: #4e4b47; border-top: 1px solid #d5d8db; padding-top: 4px; }
</style></head><body>
<header><h1>Heat Press Settings Cheat Sheet</h1><span>heatpress-settings.co.uk · Celsius for UK crafters</span></header>
<p class="note">These are published starting points from the manufacturer charts named in each row, checked ${esc(data.reviewed || "")}. Follow the instructions for the product in your hand and test on a scrap or spare blank first. The number on a heat press dial is often not the true platen temperature.</p>
${sections.map(table).join("\n")}
<footer>Fahrenheit in brackets is the manufacturer's figure where they print one, otherwise the usual conversion. Full notes, cautions and links to each source chart: heatpress-settings.co.uk</footer>
</body></html>`;

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cheatsheet-"));
const htmlPath = path.join(tmp, "cheatsheet.html");
fs.writeFileSync(htmlPath, html);
const out = path.join(root, "downloads/heat-press-settings-cheat-sheet.pdf");
fs.mkdirSync(path.dirname(out), { recursive: true });
const chrome = ["google-chrome", "chromium", "chromium-browser"].find((b) => { try { execFileSync("which", [b]); return true; } catch { return false; } });
execFileSync(chrome, ["--headless", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${out}`, htmlPath], { stdio: "ignore" });
console.log(`Wrote ${out} (${sections.map((s) => `${s.label}: ${s.rows.length}`).join(", ")})`);
