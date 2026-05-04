# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertions\tes01Assertions.spec.ts >> tobeAssertions
- Location: tests\assertions\tes01Assertions.spec.ts:4:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#sunday')
    - locator resolved to <input id="sunday" value="sunday" type="checkbox" class="form-check-input"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | import { test, expect, Locator } from "@playwright/test"
  2  | import { execPath } from "process";
  3  | 
  4  | test('tobeAssertions', async ({ page }) => {
  5  | 
  6  |     await page.goto("https://testautomationpractice.blogspot.com/")
  7  | 
  8  |     const nameInput: Locator = page.getByPlaceholder('Enter Name');
  9  | 
  10 |     expect(await page.title()).toEqual('Automation Testing Practice');
  11 |     expect(await nameInput).toBeVisible();
  12 | 
  13 |     await nameInput.fill('sumit');
  14 | 
  15 | 
  16 |     //   const linkHome:Locator=page.getByRole('link', { name: 'Home' })//resolves to 3. strict mode error
  17 |     const linkHome: Locator = page.getByRole('link', { name: 'Home' }).nth(1);
  18 |     const homelink1 = await linkHome.innerText();
  19 |     const homelink2 = await linkHome.textContent();
  20 |     console.log(`innertext is ${homelink1} and textContent is ${homelink2}`);
  21 | 
  22 |     expect(homelink1).toBe('Home');
  23 |     expect(homelink2).toContain('ome');
  24 | 
  25 |     const text1 = await nameInput.inputValue();//input has inputvalue
  26 | 
  27 |     expect(text1).toBe('sumit');
  28 |     expect(text1).toContain('umit');
  29 | 
  30 |     console.log('prinnting inputValue');
  31 |     console.log(`innertext is ${text1}`);
  32 | 
  33 | 
  34 |     //radio button gender
  35 |     const radio_male: Locator = await page.locator('#male')
  36 |     expect(radio_male).toBeVisible();
  37 |     await radio_male.check();
  38 |     expect(radio_male).toBeChecked();
  39 |     expect(radio_male).toBeVisible()
  40 | 
  41 |     //checkbox
  42 |     const checkbox_sunday: Locator = await page.locator('#sunday')
  43 |     expect(checkbox_sunday).toBeVisible();
> 44 |     await checkbox_sunday.click();
     |                           ^ Error: locator.click: Target page, context or browser has been closed
  45 | 
  46 | 
  47 |     //select
  48 | const country:Locator=page.locator('#country');
  49 | 
  50 | 
  51 | 
  52 | //header
  53 | const crosscol:Locator=page.locator('#crosscol');
  54 | 
  55 | const all=await crosscol.textContent();
  56 | console.log(all);
  57 | 
  58 | 
  59 |     await page.close();
  60 | });
```