

import {test,expect} from "@playwright/test";

test("Rough 11",async({page})=>{

// ── Object spread ───────────────────────────────────────────────
const base = { timeout: 30000, headless: true };
const override = { headless: false, slowMo: 200 };

const merged = { ...base, ...override };
// → { timeout: 30000, headless: false, slowMo: 200 }
//   ↑ base props copied    ↑ override wins on 'headless'

console.log(merged);
console.log(JSON.stringify(merged));

// ── Shallow clone (no mutation) ──────────────────────────────────
const original = { user: 'sumit', role: 'qa' };
const clone = { ...original };        // new object, same values
clone.role = 'admin';               // original.role is still 'qa'

// ── Add/override single property ────────────────────────────────
const withExtra = { ...original, role: 'admin', verified: true };
// → { user: 'sumit', role: 'admin', verified: true }

// ── Array spread ─────────────────────────────────────────────────
const browsers = ['chromium', 'firefox'];
const all = [...browsers, 'webkit'];   // ['chromium', 'firefox', 'webkit']

// ── Rest (collecting remaining props) ───────────────────────────
const config = { baseURL: 'http://localhost', timeout: 5000, headless: true };
const { baseURL, ...rest } = config;
// baseURL = 'http://localhost'
// rest    = { timeout: 5000, headless: true }



});

