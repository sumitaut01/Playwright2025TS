# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\testtimeouts2.spec.ts >> test 1 fixed=> autowaiting is not available for everything. check below example
- Location: tests\testing\testtimeouts2.spec.ts:43:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: "AJAX"
Received array: ["Data loaded with AJAX get request."]
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
    - text: 
    - paragraph [ref=e21]: Data loaded with AJAX get request.
  - contentinfo [ref=e23]:
    - generic [ref=e24]:
      - generic [ref=e27]:
        - link "Fork the website on GitHub" [ref=e28] [cursor=pointer]:
          - /url: https://github.com/inflectra/ui-test-automation-playground
        - text: .
      - generic [ref=e29]:
        - text: Supported by
        - link "Rapise" [ref=e30] [cursor=pointer]:
          - /url: https://www.inflectra.com/Rapise/
        - text: test automation team. Copyright © 2020 - 2026
        - link "Inflectra Corporation" [ref=e31] [cursor=pointer]:
          - /url: https://www.inflectra.com/
        - text: .
    - generic [ref=e32]:
      - text: This work is licensed under the
      - link "Apache License 2.0" [ref=e33] [cursor=pointer]:
        - /url: https://www.apache.org/licenses/LICENSE-2.0
      - text: .
```

# Test source

```ts
  1  | //chalk logging  ..import it
  2  | 
  3  | 
  4  | 
  5  | import { test, expect } from '@playwright/test'
  6  | 
  7  | // we can also use testinfo to modify timeout
  8  | 
  9  | 
  10 | 
  11 | test('autowaiting is not available for everything. check below example',async({page},testInfo)=>{
  12 | 
  13 |  testInfo.setTimeout(testInfo.timeout + 30_000);//possible at hooks level also like beforeEach
  14 |     let url='http://uitestingplayground.com/ajax'
  15 |     const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
  16 |     await page.goto(url)
  17 |     await locator.click();
  18 |     
  19 |     const finalElement=page.getByText('Data loaded with AJAX get request.');
  20 |     // so whats happening below is alltextcontents is not able to find the element because it is not visible yet. So it will return an empty array and then it will check if the array contains 'AJAX' which is not there and then it will throw an error. This is because the element is not visible yet and the autowaiting is not working for this element. This is because the autowaiting is only working for certain actions like click, fill, etc. It is not working for all the actions like getting text content, getting attribute, etc. So we need to use explicit wait for these actions to wait for the element to be visible before performing any action on it.
  21 |     expect(await finalElement.allTextContents()).toContain('AJAX');
  22 | 
  23 |     /*
  24 | 
  25 |     Error: expect(received).toContain(expected) // indexOf
  26 | 
  27 | Expected value: "AJAX"
  28 | Received array: []
  29 | 
  30 |   18 |     
  31 |   19 |     const finalElement=page.getByText('Data loaded with AJAX get request.');
  32 | > 20 |     expect(await finalElement.allTextContents()).toContain('AJAX');
  33 |      |                                                  ^
  34 |   21 | });
  35 |   22 |
  36 | 
  37 |     */
  38 | });
  39 | 
  40 | 
  41 | 
  42 | 
  43 | test('test 1 fixed=> autowaiting is not available for everything. check below example',async({page},testInfo)=>{
  44 | 
  45 |  testInfo.setTimeout(testInfo.timeout + 30_000);//possible at hooks level also like beforeEach
  46 |     let url='http://uitestingplayground.com/ajax'
  47 |     const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
  48 |     await page.goto(url)
  49 |     await locator.click();
  50 |     
  51 |     const finalElement=page.getByText('Data loaded with AJAX get request.');
  52 | 
  53 |     await finalElement.waitFor({state:'attached'}); // 
  54 |   //   expect((await finalElement.allTextContents()).join(' '))
  55 |   // .toContain('AJAX');
  56 | 
  57 |   const all=await finalElement.allTextContents();
> 58 |   expect(all).toContain('AJAX');
     |               ^ Error: expect(received).toContain(expected) // indexOf
  59 | 
  60 | });
  61 | 
```