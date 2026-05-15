# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertions\tes01Assertions.spec.ts >> tobeAssertions
- Location: tests\assertions\tes01Assertions.spec.ts:4:5

# Error details

```
Error: locator.check: Target page, context or browser has been closed
Call log:
  - waiting for locator('#male')
    - locator resolved to <input id="male" type="radio" value="male" name="gender" class="form-check-input"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import { test, expect, type Locator } from "@playwright/test"
  2  | import { execPath } from "process";
  3  | 
  4  | test('tobeAssertions', async ({ page }) => {
  5  | 
  6  |     await page.goto("https://testautomationpractice.blogspot.com/")
  7  | 
  8  |     const nameInput: Locator = page.getByPlaceholder('Enter Name');
  9  |    expect(await page.title()).toEqual('Automation Testing Practice');
  10 |     expect(await nameInput).toBeVisible();
  11 | 
  12 |     await nameInput.fill('sumit');
  13 | 
  14 | 
  15 |     //   const linkHome:Locator=page.getByRole('link', { name: 'Home' })//resolves to 3. strict mode error
  16 |     const linkHome: Locator = page.getByRole('link', { name: 'Home' }).nth(1);
  17 |     const homelink1 = await linkHome.innerText();
  18 |     const homelink2 = await linkHome.textContent();
  19 |     console.log(`innertext is ${homelink1} and textContent is ${homelink2}`);
  20 | 
  21 |     test.step(`innertext is ${homelink1} and textContent is ${homelink2}`,()=>{})
  22 | 
  23 |     expect(homelink1).toBe('Home');
  24 |     expect(homelink2).toContain('ome');
  25 | 
  26 |     const text1 = await nameInput.inputValue();//input has inputvalue
  27 | 
  28 |     expect(text1).toBe('sumit');
  29 |     expect(text1).toContain('umit');
  30 | 
  31 |     console.log('prinnting inputValue');
  32 |     console.log(`innertext is ${text1}`);
  33 | 
  34 | 
  35 |     //radio button gender
  36 |     const radio_male: Locator = await page.locator('#male')
  37 |     expect(radio_male).toBeVisible();
> 38 |     await radio_male.check();
     |                      ^ Error: locator.check: Target page, context or browser has been closed
  39 |     expect(radio_male).toBeChecked();
  40 |     expect(radio_male).toBeVisible()
  41 | 
  42 |     //checkbox
  43 |     const checkbox_sunday: Locator = await page.locator('#sunday')
  44 |     expect(checkbox_sunday).toBeVisible();
  45 |     await checkbox_sunday.click();
  46 | 
  47 | 
  48 |     //select
  49 | const country:Locator=page.locator('#country');
  50 | 
  51 | 
  52 | 
  53 | //header
  54 | const crosscol:Locator=page.locator('#crosscol');
  55 | 
  56 | const all=await crosscol.textContent();
  57 | console.log(all);
  58 | 
  59 | 
  60 |     await page.close();
  61 | });
```