# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testzzrough.spec.ts >> wait for timeout
- Location: tests\testzzrough.spec.ts:6:5

# Error details

```
Error: page.waitForLoadState: Test ended.
```

# Test source

```ts
  1  | 
  2  | 
  3  | 
  4  | import { test, expect } from '@playwright/test';
  5  | 
  6  | test('wait for timeout', async ({ page }) => {
  7  |     await page.goto('https://www.saucedemo.com/');
  8  |     await expect(page.locator('text=Swag Labs')).toBeVisible();
> 9  |     page.waitForLoadState('networkidle');  // this will wait for the network to be idle, it will wait for all the network requests to be completed before moving to next step
     |          ^ Error: page.waitForLoadState: Test ended.
  10 | 
  11 | 
  12 | 
  13 | })
```