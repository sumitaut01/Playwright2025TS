# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\uielements\01input.spec.ts >> handling input
- Location: tests\testing\uielements\01input.spec.ts:5:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByRole('textbox', { name: 'Enter Name' })

```

# Test source

```ts
  1  | 
  2  | 
  3  | import {test,expect} from '@playwright/test'
  4  | 
  5  | test('handling input',async({page})=>{
  6  | 
  7  | await page.goto('https://testautomationpractice.blogspot.com/')
  8  | await page.waitForLoadState('networkidle');
  9  | 
> 10 | page.getByRole('textbox',{name:'Enter Name'}).fill('this is it');
     |                                               ^ Error: locator.fill: Test ended.
  11 | page.getByRole('textbox',{name:'Enter Name'}).clear();
  12 | 
  13 | 
  14 | page.getByRole('textbox',{name:'Enter name'}).fill('this is it');//made n smaller
  15 | page.getByRole('textbox',{name:'Enter Name'}).clear();
  16 | 
  17 | page.pause();
  18 | 
  19 | 
  20 | 
  21 | })
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
```