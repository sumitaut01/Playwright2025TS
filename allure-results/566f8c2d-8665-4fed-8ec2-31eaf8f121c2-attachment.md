# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\uielements\dadadrivingj3csv..spec.ts >> data driven testing with csv >> case1 sumit
- Location: tests\testing\uielements\dadadrivingj3csv..spec.ts:15:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[name="q"]')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import fs from 'fs';
  3  | import { parse } from 'csv-parse/sync';
  4  | 
  5  | const csvPath = 'tests/testing/uielements/testdata/csvdata.csv';
  6  | const fileData = fs.readFileSync(csvPath, 'utf-8');
  7  | 
  8  | const records: Record<string, string>[] = parse(fileData, {
  9  |   columns: true,
  10 |   skip_empty_lines: true,
  11 | });
  12 | 
  13 | test.describe('data driven testing with csv', () => {
  14 |   for (const row of records) {
  15 |     test(`case1 ${row.name}`, async ({ page }) => {
  16 |      //printing
  17 |      console.log(`case1 ${row.name} and ${row.name}` )
  18 | 
  19 |       await page.goto('https://www.google.com');
  20 |       const searchBox = page.locator('input[name="q"]');
> 21 |       await searchBox.fill(`${row.name}`);
     |                       ^ Error: locator.fill: Target page, context or browser has been closed
  22 |       await searchBox.press('Enter');
  23 | 
  24 |       // wait for results
  25 |       await expect(page).toHaveURL(/search/);
  26 |     });  // ← was missing
  27 |   }
  28 | });
```