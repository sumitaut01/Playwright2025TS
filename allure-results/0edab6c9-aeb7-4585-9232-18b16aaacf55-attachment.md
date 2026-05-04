# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02webkit_chromium_firefox.spec.ts >> this is my first test suite >> third
- Location: tests\02webkit_chromium_firefox.spec.ts:32:5

# Error details

```
Error: browserType.launch: Unsupported webkit channel "msedge"
```

# Test source

```ts
  1  | 
  2  | import { expect,test, type Browser, type Page} from "@playwright/test";
  3  | import { webkit,chromium,firefox } from "@playwright/test";
  4  | 
  5  | 
  6  | 
  7  | test.describe('this is my first test suite',()=>{
  8  | 
  9  | test('first',async()=>{
  10 | 
  11 | const browser:Browser= await chromium.launch({headless:false}) // notice type Browser  in import
  12 | const page:Page=await browser.newPage()
  13 | await page.goto("https://www.google.com");
  14 | await expect(page).toHaveTitle("Google");
  15 | await page.close();
  16 | await browser.close
  17 | });
  18 | 
  19 | 
  20 | test('second',async()=>{
  21 | 
  22 | const browser:Browser= await firefox.launch({headless:false})
  23 | const page:Page=await browser.newPage()
  24 | await page.goto("https://www.google.com");
  25 | await expect(page).toHaveTitle("Google");
  26 | await page.close();
  27 | await browser.close
  28 | });
  29 | 
  30 | 
  31 | 
  32 | test('third',async()=>{
  33 | 
> 34 | const browser:Browser= await webkit.launch({headless:false})
     |                                     ^ Error: browserType.launch: Unsupported webkit channel "msedge"
  35 | const page:Page=await browser.newPage()
  36 | await page.goto("https://www.google.com");
  37 | await expect(page).toHaveTitle("Google");
  38 | await page.close();
  39 | await browser.close
  40 | });
  41 | 
  42 | 
  43 | //group ends
  44 | });
  45 | 
```