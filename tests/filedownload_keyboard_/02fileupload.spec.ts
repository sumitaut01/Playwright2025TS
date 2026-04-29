
import {test,expect} from '@playwright/test'

test('single file setInputFiles', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('').setInputFiles('pathof file with extensions also');

    expect(await page.locator('status locator').textContent()).toBe('Successful')
    
});

test('multi files file', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator('').setInputFiles(['pathof file with extensions also','file 2']);
    
});