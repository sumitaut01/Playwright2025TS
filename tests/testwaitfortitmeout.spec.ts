


import { test, expect } from '@playwright/test';

test('wait for timeout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('text=Swag Labs')).toBeVisible();
    page.waitForLoadState('networkidle');  // this will wait for the network to be idle, it will wait for all the network requests to be completed before moving to next step

    // wait for 5 seconds
    await page.waitForTimeout(5000);

    page.waitForURL('https://www.saucedemo.com/');  // this will wait for the url to be loaded, if the url is already loaded it will not wait and move to next step

    page.waitForSelector('text=Swag Labs');  // this will wait for the element to be visible, if the element is already visible it will not wait and move to next step

})