//fail skip fixme only


import { test, expect } from '@playwright/test';

test.describe('My Test Suite', {annotation:[{type: 'description', description: 'This is a test annotation at describe level'}]}, () => {
    test('should have the correct title',{annotation:[{type: 'description', description: 'This is a test annotation'}]}, async ({ page }) => {
        await page.goto('https://www.google.com');
        await expect(page).toHaveTitle('Google');
    });
});

