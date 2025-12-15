import { test, expect } from '@playwright/test';

const data = [
  'https://playwright.dev',
  'https://github.com'
];

for (const item of data) {
  test(`Data driving - ${item}`, async ({ page }) => {
    await page.goto(item);

    // get title properly
    const title = await page.title();
    console.log(title);

    // validate something - for demo we just check title is not empty

    expect(page).toHaveTitle(item);

  });
}
