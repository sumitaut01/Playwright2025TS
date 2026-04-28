import { test, expect } from '@playwright/test';

const arr = ['selenium', 'playwright', 'cypress'];

arr.forEach((item) => {
  test(`case1 ${item}`, async ({ page }) => {
    await page.goto("https://www.google.com");

    const searchBox = page.locator('input[name="q"]');
    await searchBox.fill(item);
    await searchBox.press('Enter');

    // wait for results
    await expect(page).toHaveURL(/search/);
  });
});