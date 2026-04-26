# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\testtimeouts.spec.ts >> handling timeouts from condig 
- Location: tests\testing\testtimeouts.spec.ts:38:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('Data loaded with AJAX get request.')

```

# Test source

```ts
  1  | //chalk logging  ..import it
  2  | 
  3  | 
  4  | 
  5  | import test from '@playwright/test'
  6  | 
  7  | test('handling timeouts at element level',async({page})=>{
  8  | 
  9  |     let url='http://uitestingplayground.com/ajax'
  10 |     const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
  11 |     await page.goto(url)
  12 |     await locator.click();
  13 | 
  14 |     //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
  15 |     const text=page.getByText('Data loaded with AJAX get request.');
  16 |     await text.waitFor({state:'visible',timeout:5000});// this is element level timeout. It will wait for the element to be visible for 5 seconds. If the element is not visible within 5 seconds, it will throw an error. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
  17 |     /*
  18 | TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  19 | Call log:
  20 |   - waiting for getByText('Data loaded with AJAX get request.') to be visible
  21 | 
  22 | 
  23 |   14 |     //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
  24 |   15 |     const text=page.getByText('Data loaded with AJAX get request.');
  25 | > 16 |     await text.waitFor({state:'visible',timeout:5000});// this is element level timeout. It will wait for the element to be visible for 5 seconds. If the element is not visible within 5 seconds, it will throw an error. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
  26 |      |                ^
  27 |   17 | });
  28 |   18 |
  29 |   19 |
  30 |     at D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS\tests\testing\testtimeouts.spec.ts:16:16
  31 | 
  32 |     */
  33 | });
  34 | 
  35 | 
  36 | 
  37 | 
  38 | test('handling timeouts from condig ',async({page})=>{
  39 | 
  40 |     //for this test we made below in main config timeout: 3* 1000, so this test will fail after 3 seconds because the element will be visible after 10 seconds. This is global level timeout. It will apply to all the tests in the project. We can also set timeout at test level or at element level. If we set timeout at test level, it will override the global timeout for that specific test. If we set timeout at element level, it will override the global timeout for that specific element.
  41 | 
  42 |     let url='http://uitestingplayground.com/ajax'
  43 |     const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
  44 |     await page.goto(url)
  45 |     await locator.click();
  46 | 
  47 |     //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
  48 |     const text=page.getByText('Data loaded with AJAX get request.');
> 49 |     text.click(); // this will throw error because the element is not visible yet. We can use the waitFor method to wait for the element to be visible before performing any action on it. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
     |          ^ Error: locator.click: Test ended.
  50 |     /*
  51 | 
  52 | 
  53 |     */
  54 | 
  55 | });
```