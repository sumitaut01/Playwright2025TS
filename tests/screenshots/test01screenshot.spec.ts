
import { test, expect } from "@playwright/test";


test.describe("Screenshot Testsuite", () => {

test(
  "my first sc test", 
  async ({ page }) => {
    
    await page.goto('https://demo.nopcommerce.com/');

    await expect(page.getByPlaceholder('Search store')).toBeVisible();

    await page.getByPlaceholder('Search store')
              .fill('Apple MacBook Pro 13-inch');

    await page.screenshot({path: 'screenshots/nopcommercehome.png',fullPage: true});
});



test.fixme(
  "my first sc test2", 
  async ({ page }) => {
    
    await page.goto('https://demo.nopcommerce.com/');

    await expect(page.getByPlaceholder('Search store')).toBeVisible();

    await page.getByPlaceholder('Search store')
              .fill('Apple MacBook Pro 13-inch');

    await page.screenshot({
      path: 'screenshots/nopcommercehome.png',
      fullPage: true
    });
});


});
