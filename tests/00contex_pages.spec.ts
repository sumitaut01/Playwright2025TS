import { test, expect } from '@playwright/test';

test('context.pages example', async ({ browser }) => {

  // Create isolated browser context
  const context = await browser.newContext();

  // Open first tab
  const page1 = await context.newPage();
  await page1.goto('https://google.com');

  // Open second tab
  const page2 = await context.newPage();
  await page2.goto('https://playwright.dev');

  // Get all open pages/tabs
  const pages = context.pages();

  console.log(`Total pages: ${pages.length}`);

  // Loop through all pages
  for (const page of pages) {
    console.log(await page.title());
  }

  // Access specific page
  const secondPage = pages[1];

  console.log(await secondPage.url());

  await context.close();
});