import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bigbasket.com/');
  await page.locator('[id="headlessui-menu-button-:Ramkj6:"]').click();
  await page.locator('[id="headlessui-menu-items-:Rimkj6:"]').getByRole('link', { name: 'Fruits & Vegetables' }).click();
  await page.locator('[id="headlessui-menu-items-:Rimkj6:"]').getByRole('link', { name: 'Fresh Fruits' }).click();
  await page.locator('[id="headlessui-menu-button-:Ramkj6:"]').click();
  await page.getByRole('link', { name: 'Mangoes' }).click();
  await page.locator('[id="headlessui-menu-items-:Rimkj6:"]').getByRole('link', { name: 'Fresh Fruits' }).click();


});