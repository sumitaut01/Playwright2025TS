# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test2.spec.ts >> myfunction
- Location: tests\test2.spec.ts:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.facebook.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, chromium, expect } from "@playwright/test";
  2  | 
  3  | test("myfunction", async ({page}) => {
  4  | 
  5  | // navigate
> 6  |   await page.goto("https://www.facebook.com");
     |              ^ Error: page.goto: Target page, context or browser has been closed
  7  | 
  8  |   // example: check title contains "Facebook"
  9  |   await expect(page).toHaveTitle(/Facebook/);
  10 | 
  11 | 
  12 | });
  13 | 
```