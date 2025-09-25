import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByText('Remember me?').click();
  await page.getByText('Remember me? Forgot password?').click();
  await page.getByText('Remember me? Forgot password?').uncheck();
  await page.getByRole('checkbox', { name: 'Remember me?' }).uncheck();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('By creating an account on our').click();
  await page.getByRole('link', { name: 'Notebooks' }).click();
  await page.locator('#products-viewmode').selectOption('https://demowebshop.tricentis.com/notebooks?viewmode=list');
  await page.goto('https://demowebshop.tricentis.com/notebooks?viewmode=list');
  await page.locator('#newsletter-email').click();
  await page.locator('#newsletter-email').fill('dd');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Tricentis' }).click();
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('some');
  await page.locator('#small-searchterms').press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('checkbox', { name: 'Advanced search' }).check();
  await page.getByText('Advanced search').click();
  await expect(page.locator('#small-searchterms')).toBeVisible();
  await expect(page.locator('#small-searchterms')).toHaveValue('Search store');
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - link "Books":
          - /url: /books
      - listitem:
        - link "Computers":
          - /url: /computers
      - listitem:
        - link "Electronics":
          - /url: /electronics
      - listitem:
        - link "Apparel & Shoes":
          - /url: /apparel-shoes
      - listitem:
        - link "Digital downloads":
          - /url: /digital-downloads
      - listitem:
        - link "Jewelry":
          - /url: /jewelry
      - listitem:
        - link "Gift Cards":
          - /url: /gift-cards
    `);
});