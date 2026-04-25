


import { test, expect } from '@playwright/test';

test('wait for timeout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('text=Swag Labs')).toBeVisible();
   await  page.waitForLoadState('networkidle');  // this will wait for the network to be idle, it will wait for all the network requests to be completed before moving to next step



})