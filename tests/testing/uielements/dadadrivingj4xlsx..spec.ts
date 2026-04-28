import { test, expect } from '@playwright/test';
import fs from 'fs';
import * as xlsx from 'xlsx';

//file workbook sheet row column



const workbook = xlsx.readFile('tests/testing/uielements/testdata/data.xlsx');

const sheetName = workbook.SheetNames[0];

const workSheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(workSheet);

////npm install xlsx
// so xlsx can be directly converted into json and then can be used as json like

test.describe('data driven testing with csv', () => {
  for (const row of jsondata) {
    test(`case1 ${row.name}`, async ({ page }) => {
     //printing
     console.log(`case1 ${row.name} and ${row.name}` )

      await page.goto('https://www.google.com');
      const searchBox = page.locator('input[name="q"]');
      await searchBox.fill(`${row.name}`);
      await searchBox.press('Enter');

      // wait for results
      await expect(page).toHaveURL(/search/);
    });  // ← was missing
  }
});