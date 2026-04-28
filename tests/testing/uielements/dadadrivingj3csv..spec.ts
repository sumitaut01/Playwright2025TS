import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

const csvPath = 'tests/testing/uielements/testdata/csvdata.csv';
const fileData = fs.readFileSync(csvPath, 'utf-8');

const records: Record<string, string>[] = parse(fileData, {
  columns: true,
  skip_empty_lines: true,
});

test.describe('data driven testing with csv', () => {
  for (const row of records) {
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