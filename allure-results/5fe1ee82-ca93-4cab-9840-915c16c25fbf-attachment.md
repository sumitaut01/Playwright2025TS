# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\testtimeouts.spec.ts >> waitforselector
- Location: tests\testing\testtimeouts.spec.ts:72:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: page.waitForSelector: Test timeout of 3000ms exceeded.
Call log:
  - waiting for locator('text=Data loaded with AJAX get request.')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - link "UITAP" [ref=e3] [cursor=pointer]:
      - /url: /
    - list [ref=e5]:
      - listitem [ref=e6]:
        - link "Home" [ref=e7] [cursor=pointer]:
          - /url: /home
      - listitem [ref=e8]:
        - link "Resources" [ref=e9] [cursor=pointer]:
          - /url: /resources
  - generic [ref=e11]:
    - heading "AJAX Data" [level=3] [ref=e12]
    - paragraph [ref=e13]: An element may appaear on a page after processing of an AJAX request to a web server. A test should be able to wait for an element to show up.
    - heading "Scenario" [level=4] [ref=e14]
    - list [ref=e15]:
      - listitem [ref=e16]: Record the following steps. Press the button below and wait for data to appear (15 seconds), click on text of the loaded label.
      - listitem [ref=e17]: Then execute your test to make sure it waits for label text to appear.
    - heading "Playground" [level=4] [ref=e18]
    - button "Button Triggering AJAX Request" [active] [ref=e19] [cursor=pointer]
    - generic [ref=e20]: 
  - contentinfo [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e26]:
        - link "Fork the website on GitHub" [ref=e27] [cursor=pointer]:
          - /url: https://github.com/inflectra/ui-test-automation-playground
        - text: .
      - generic [ref=e28]:
        - text: Supported by
        - link "Rapise" [ref=e29] [cursor=pointer]:
          - /url: https://www.inflectra.com/Rapise/
        - text: test automation team. Copyright © 2020 - 2026
        - link "Inflectra Corporation" [ref=e30] [cursor=pointer]:
          - /url: https://www.inflectra.com/
        - text: .
    - generic [ref=e31]:
      - text: This work is licensed under the
      - link "Apache License 2.0" [ref=e32] [cursor=pointer]:
        - /url: https://www.apache.org/licenses/LICENSE-2.0
      - text: .
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
  38 | test('handling timeouts from config ',async({page})=>{
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
  49 |     await text.click(); // this will throw error because the element is not visible yet. We can use the waitFor method to wait for the element to be visible before performing any action on it. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
  50 |     /*
  51 | est timeout of 3000ms exceeded.
  52 | Error: locator.click: Test timeout of 3000ms exceeded.
  53 | Call log:
  54 |   - waiting for getByText('Data loaded with AJAX get request.')
  55 | 
  56 | 
  57 |   47 |     //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
  58 |   48 |     const text=page.getByText('Data loaded with AJAX get request.');
  59 | > 49 |     await text.click(); // this will throw error because the element is not visible yet. We can use the waitFor method to wait for the element to be visible before performing any action on it. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
  60 |      |                ^
  61 |   50 |     /*
  62 |   51 | Error: locator.click: Test ended.
  63 |   52 | Call log:
  64 |     at D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS\tests\testing\testtimeouts.spec.ts:49:16
  65 | 
  66 |     */
  67 | 
  68 | });
  69 | 
  70 | 
  71 | 
  72 | test('waitforselector',async({page})=>{
  73 | 
  74 |     let url='http://uitestingplayground.com/ajax'
  75 |     const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
  76 |     await page.goto(url)
  77 |     await locator.click();
  78 | 
  79 |     //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
  80 |     const text=page.getByText('Data loaded with AJAX get request.');
> 81 |      await page.waitForSelector('text=Data loaded with AJAX get request.',{state:'attached'});// this is element level timeout. It will wait for the element to be visible for 5 seconds. If the element is not visible within 5 seconds, it will throw an error. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
     |                 ^ Error: page.waitForSelector: Test timeout of 3000ms exceeded.
  82 | 
  83 |      text.click(); // this will work because we have waited for the element to be attached to the DOM. We can use the waitForSelector method to wait for the element to be attached to the DOM before performing any action on it. This is useful when we want to wait for a specific element to be attached to the DOM before performing any action on it. We can also use this to wait for an element to be visible or hidden.
  84 |     /*
  85 | 
  86 | 
  87 | 
  88 |     */
  89 | });
  90 | 
```