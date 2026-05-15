import { test, expect } from '@playwright/test';

test('Playwright pseudo selector example', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Locator using :visible pseudo selector
  const courseLink = page.locator(
    "li a[href*='lifetime-access']:visible"
  );

  // Count matching visible elements
  console.log(await courseLink.count());

  // Click visible matching element
  await courseLink.click();

});
// ✅ More Examples
// :visible
// await page.locator('button:visible').click();
// :has-text()
// await page.locator('button:has-text("Login")').click();
// :has()
// await page.locator('div:has(button)').click();
// Combined Example
// await page.locator(
//   "tr:has(td:has-text('Sumit')) button:visible"
// ).click();

// Meaning:

// Find row containing "Sumit"
// then click visible button inside it