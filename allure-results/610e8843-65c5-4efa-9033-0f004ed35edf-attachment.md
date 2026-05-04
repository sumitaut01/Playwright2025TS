# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\uielements\01input.spec.ts >> handling input
- Location: tests\testing\uielements\01input.spec.ts:5:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | 
  3  | import {test,expect} from '@playwright/test'
  4  | 
  5  | test('handling input',async({page})=>{
  6  | 
> 7  | await page.goto('https://testautomationpractice.blogspot.com/')
     |            ^ Error: page.goto: Target page, context or browser has been closed
  8  | await page.waitForLoadState('networkidle'); //this is not required in most cases as this is automatically handled by playwright. But in some cases where there are lot of network calls, we can use this to make sure that all the network calls are completed before we interact with the page. This is a good practice to avoid flaky tests.
  9  | 
  10 | const inputvalue="this is it";
  11 | await page.getByRole('textbox',{name:'Enter Name'}).fill(inputvalue);
  12 | 
  13 | const enteredText=await page.getByRole('textbox',{name:'Enter Name'}).inputValue();
  14 | console.log(`Entered Text: ${enteredText}`);
  15 | 
  16 | //locator assertions
  17 | expect(enteredText).toBe(inputvalue);
  18 | expect(enteredText).toContain(inputvalue); //paertial match 
  19 | 
  20 | await page.getByRole('textbox',{name:'Enter Name'}).clear();
  21 | //
  22 | //Entered Text: this is it
  23 | 
  24 | 
  25 | await page.getByRole('textbox',{name:'Enter name'}).fill('this is it');//made n smaller
  26 | 
  27 | await page.getByRole('textbox',{name:'Enter Name'}).clear();
  28 | 
  29 | await page.getByPlaceholder('Enter email').fill('s@s.com');// text is lowercase
  30 | 
  31 | await page.getByPlaceholder('Enter email').clear();
  32 | 
  33 | await page.getByPlaceholder('Enter email').pressSequentially('typing slow',{delay:1000});
  34 | await page.getByRole('textbox',{name:'Enter Name'}).clear();
  35 | 
  36 | 
  37 | 
  38 | // locator has space in between text. It failed. Case changing worked but space in between text did not work. So we need to be careful while using locator. We can also use regex for this.
  39 | //#1 learning  1.. test timeout came into picture
  40 | //Error: locator.pressSequentially: Test timeout of 30000ms exceeded.
  41 | // Call log:
  42 | //   - waiting for getByPlaceholder('Enter      email')-- 
  43 | //notice below we have added extra space. small 'email' works
  44 | // await page.getByPlaceholder('Enter      email').pressSequentially('typing slow',{delay:1000});
  45 | // await page.getByRole('textbox',{name:'Enter Name'}).clear();
  46 | 
  47 | })
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | test('handling input when input does not exists',async({page})=>{
  54 | 
  55 |     //element level timeout..try
  56 | await page.goto('https://testautomationpractice.blogspot.com/')
  57 | await page.waitForLoadState('networkidle');
  58 | await page.getByRole('textbox',{name:'Enter Na' }).fill('this is it');
  59 | 
  60 | 
  61 | })
  62 | 
  63 | 
  64 | 
  65 | 
  66 | 
```