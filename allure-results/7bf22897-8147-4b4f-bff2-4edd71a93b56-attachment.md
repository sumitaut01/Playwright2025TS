# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: no_autotimeout\01rahulshetty.spec.ts >> logging in 
- Location: tests\no_autotimeout\01rahulshetty.spec.ts:4:5

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation to "https://rahulshettyacademy.com/client/#/dashboard/dash" until "load"
============================================================
```

# Test source

```ts
  1  | 
  2  | import {test,expect} from '@playwright/test'
  3  | 
  4  | test('logging in ',async({page})=>{
  5  | 
  6  | 
  7  |     await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
  8  |     await page.getByPlaceholder('email@example.com').fill('sumitraut01@gmail.com')
  9  |     await page.locator('[formcontrolname="userPassword"]').fill('testing1234')
  10 | 
  11 |     await page.getByRole('button',{ name:'Login'}).click()
> 12 |     await page.waitForURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
     |                ^ Error: page.waitForURL: Target page, context or browser has been closed
  13 | 
  14 |     //.card-body b   prod title
  15 | 
  16 |      const prodTitles=page.locator('.card-body b');
  17 | 
  18 |      console.log(await prodTitles.count());
  19 | 
  20 |       const data=await prodTitles.allTextContents()
  21 | 
  22 |       console.log(data)
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 | })
```