import { test, expect } from '@playwright/test';

test('BigBasket menu test', async ({ page }) => {
  await page.goto('https://www.bigbasket.com/');


  await page.waitForLoadState('networkidle');

//const closedMenu = page.getByRole('button', { name: 'Shop by Category' }).filter({ has: page.locator('[aria-expanded="false"]')})
const closedMenu = page.locator('#');
console.log(await closedMenu.count());
 await closedMenu.click();

 const parentMenu = page.getByRole('button', { name: 'Shop by Category' }).filter({ has: page.locator('[aria-expanded="true"]')});
 console.log(await parentMenu.count()); 
 // Click on the "Shop by Category" button (stable locator)
  

  // Hover the main category
  await parentMenu.getByRole('link', { name: 'Fruits & Vegetables' }).hover();
  await parentMenu.getByRole('link', { name: 'Fresh Vegetables' }).hover();

  // Click it
  await parentMenu.getByRole('link', { name: 'Mango' }).click();
  await page.waitForTimeout(3000);
});
