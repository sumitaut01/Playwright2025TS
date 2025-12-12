

import { test, expect } from '@playwright/test';

test('hard and soft assertions test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
    const searchBox = page.locator('input[id="small-searchterms"]');
    await searchBox.fill('Apple MacBook Pro 13-inch');

    // Hard Assertion
    await expect(searchBox).toBeVisible();  // if this fails, test stops here   
    console.log('Hard Assertion passed: Search box is visible.');

     
    searchBox.fill('some data'); 

     expect.soft(searchBox).toHaveValue('some dat'); // soft assertion
    
    // Clearing the search box
});