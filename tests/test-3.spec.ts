import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bigbasket.com/');
  await page.locator('[id="headlessui-menu-button-:Ramkj6:"]').click();
  await expect(page.locator('[id="headlessui-menu-items-:Rimkj6:"]').getByRole('link', { name: 'Fruits & Vegetables' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Fresh Vegetables' })).toBeVisible();
  await page.getByRole('link', { name: 'Fresh Vegetables' }).click();
});