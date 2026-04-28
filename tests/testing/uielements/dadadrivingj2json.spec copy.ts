import { test, expect } from '@playwright/test';
import fs from 'fs';


//reading json from json file
//
const jsonPath = 'tests/testing/uielements/testdata/data.json';
const jsondata = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

test.describe('data driven testing with json', () => {    
for (const { name } of jsondata) {
  test(`case1 ${name}`, async ({ page }) => {
    await page.goto("https://www.google.com");
    const searchBox = page.locator('input[name="q"]');
    await searchBox.fill(name);
    await searchBox.press('Enter');

    // wait for results
    await expect(page).toHaveURL(/search/);
  
})
}
});
