

import { test, expect } from '@playwright/test';

test('test with tags and annotations',
     { tag: ['smoke', 'regression'],
         annotation: [{ type: 'anno1 type', description: 'anno 1 description' }, { type: 'anno1 type', description: 'anno 2 description' }] }, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('text=Swag Labs')).toBeVisible();
            
         });