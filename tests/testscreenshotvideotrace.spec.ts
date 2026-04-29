//test.fail

//test.skip


import { test, expect } from '@playwright/test';

test('screenshot, video and trace', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');  
    await expect(page.locator('text=Swag Labs')).toBeVisible();
    await page.screenshot({ path: 'screenshot.png' });
});


test.use    ({ screenshot: 'only-on-failure'}); 
test('screenshot', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');  
    await expect(page.locator('text=Swag Labs')).toBeVisible();
    await expect(page.locator('text=Swag LabsX')).toBeVisible();
    await page.screenshot({ path: 'screenshot.png' });
});


test.use    ({ trace: 'on' });   // this will enable trace for this test only, it will override the global setting in playwright.config.ts
test('trace', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');  

    await expect(page.locator('text=Swag Labs')).toBeVisible();
    await page.screenshot({ path: 'screenshot.png' });

    //fasse condtion to fail the test and generate trace file
    await expect(page.locator('text=Swag Labs1')).toBeVisible();
});

