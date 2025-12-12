/*


*/
import { test, expect } from '@playwright/test';
test('file upload test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await page.getByRole('link', { name: 'Computers' }).click();
  await page.getByRole('link', { name: 'Desktops' }).click();
  await page.getByRole('link', { name: 'Build your own computer' }).click();
    await page.getByLabel('Processor').selectOption('1');

    //setinput files
    const filePath= './tests/handleuielements/testdata/samplefile.txt';
    await page.setInputFiles('input#product_attribute_3_7',filePath);
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await expect(page.locator('div[class="bar-notification success"]')).toContainText('The product has been added to your shopping cart');

});