# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\uielements\frames.spec.ts >> handling frames
- Location: tests\testing\uielements\frames.spec.ts:5:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit", waiting until "load"

```

# Test source

```ts
  1  | //
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('handling frames',async({page})=>{
> 6  |     await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit')
     |                ^ Error: page.goto: Target page, context or browser has been closed
  7  | 
  8  |     await page.waitForTimeout(2000)
  9  |     const frame=page.frameLocator('#iframeResult')
  10 |     await frame.locator('#fname').fill('s')
  11 |     await page.waitForTimeout(2000)
  12 |     
  13 |    //if we wish to click item on page, we can still do via page object, we just need to use frame locator
  14 | 
  15 | });
  16 | 
  17 | 
  18 | test('handling frames via framearray',async({page})=>{
  19 |     await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit')
  20 |     await page.waitForLoadState('networkidle')
  21 | 
  22 |     await page.waitForTimeout(2000)
  23 | 
  24 |     // const frame=page.frames('[1]') // we can also use frame array to access frame, here 1 is index of frame
  25 |     // await frame.getByLabel('First name:').fill('')
  26 |     //   await frame.getByLabel('First name:').fill('sagar')
  27 |     // await page.waitForTimeout(2000)
  28 |     
  29 |    //if we wish to click item on page, we can still do via page object, we just need to use frame locator
  30 | 
  31 | });
```