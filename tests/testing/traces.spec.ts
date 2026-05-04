

import { test, expect } from '@playwright/test';

test('test with traces', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('text=Swag Labs')).toBeVisible();
    await page.screenshot({ path: 'screenshot.png' });
    await expect(page.locator('text=Swag Labs1')).toBeVisible();
});

//npx playwright test tests\testing\traces.spec.ts --trace on
