
import { chromium } from '@playwright/test';

async function run() {
  const browser = await chromium.launch({
    headless: false
  });

  const page = await browser.newPage();


  

  await page.goto('https://example.com');

  await browser.close();
}

run();


async function runEdge() {
  const browser = await chromium.launch({
    channel: 'msedge',  //notice this
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://example.com');

  await browser.close();
}

runEdge()



import { firefox } from '@playwright/test';

async function runFirefox() {
  const browser = await firefox.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://mozilla.org');

  await browser.close();
}

runFirefox();



import { webkit } from '@playwright/test';

async function runWebKit_ConsideredSimilarToSafari() {
  const browser = await webkit.launch({
    headless: false
  });

  const page = await browser.newPage();
  await page.goto('https://apple.com');
  await browser.close();
}

runWebKit_ConsideredSimilarToSafari();



/*
A common interview question:

❓ Difference between Chromium and Chrome in Playwright?

Answer:

chromium.launch() launches Playwright’s bundled Chromium browser.
chromium.launch({ channel: 'chrome' }) launches the locally installed Google Chrome browser.

*/