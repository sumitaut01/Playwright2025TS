import { test, chromium, expect } from "@playwright/test";

test("myfunction", async () => {
  // launch browser
  const browser = await chromium.launch();

  // create context
  const context = await browser.newContext();

  // create page
  const page = await context.newPage();

  // navigate
  await page.goto("https://www.google.com");

  // example: check title contains "Google"
  await expect(page).toHaveTitle(/Google/);

  // close resources
  await page.close();
  await context.close();
  await browser.close();
});
