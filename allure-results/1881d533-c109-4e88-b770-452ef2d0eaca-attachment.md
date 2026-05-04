# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: traces.spec.ts >> test with traces
- Location: tests\testing\traces.spec.ts:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Swag Labs1')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Swag Labs1')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | 
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('test with traces', async ({ page }) => {
  6  |     await page.goto('https://www.saucedemo.com/');
  7  |     await expect(page.locator('text=Swag Labs')).toBeVisible();
  8  |     await page.screenshot({ path: 'screenshot.png' });
> 9  |     await expect(page.locator('text=Swag Labs1')).toBeVisible();
     |                                                   ^ Error: expect(locator).toBeVisible() failed
  10 | });
  11 | 
  12 | //npx playwright test tests\testing\traces.spec.ts --trace on
  13 | 
```