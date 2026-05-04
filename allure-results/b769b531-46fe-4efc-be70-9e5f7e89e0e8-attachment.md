# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\uielements\frames.spec.ts >> handling frames
- Location: tests\testing\uielements\frames.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic:
  - generic [ref=e2]:
    - link "" [ref=e3] [cursor=pointer]:
      - /url: https://www.w3schools.com
    - link "" [ref=e4] [cursor=pointer]:
      - /url: javascript:void(0);
    - link "" [ref=e5] [cursor=pointer]:
      - /url: javascript:void(0);
    - link "" [ref=e6] [cursor=pointer]:
      - /url: javascript:void(0);
    - link "" [ref=e7] [cursor=pointer]:
      - /url: javascript:void(0);
    - button "Run ❯" [ref=e8] [cursor=pointer]
    - link "Get your own website" [ref=e9] [cursor=pointer]:
      - /url: https://www.w3schools.com/spaces/
    - generic [ref=e11]: "Result Size: 492 x 665"
  - link [ref=e12]:
    - /url: javascript:void(0)
  - generic [ref=e13]:
    - text:   
    - generic [ref=e17]:
      - textbox [ref=e18]
      - generic [ref=e24]:
        - generic [ref=e26]: <!DOCTYPE html>
        - generic [ref=e28]: <html>
        - generic [ref=e30]: <body>
        - generic [ref=e34]: <h2>HTML Forms</h2>
        - generic [ref=e38]: <form action="/action_page.php">
        - generic [ref=e40]: <label for="fname">First name:</label><br>
        - generic [ref=e42]: <input type="text" id="fname" name="fname" value="John"><br>
        - generic [ref=e44]: <label for="lname">Last name:</label><br>
        - generic [ref=e46]: <input type="text" id="lname" name="lname" value="Doe"><br><br>
        - generic [ref=e48]: <input type="submit" value="Submit">
        - generic [ref=e50]: </form>
        - generic [ref=e54]: <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
        - generic [ref=e58]: </body>
        - generic [ref=e60]: </html>
    - iframe [active] [ref=e69]:
      - generic [ref=f1e1]:
        - heading "HTML Forms" [level=2] [ref=f1e2]
        - generic [ref=f1e3]:
          - text: "First name:"
          - textbox "First name:" [active] [ref=f1e4]: sagar
          - text: "Last name:"
          - textbox "Last name:" [ref=f1e5]: Doe
          - button "Submit" [ref=f1e6]
        - paragraph [ref=f1e7]: If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".
  - generic [ref=e70]:
    - iframe [ref=e73]:
      - generic [active] [ref=f22e1]:
        - generic:
          - generic [ref=f22e3]:
            - img [ref=f22e5]
            - generic "Python - Assign Multiple Values to Variables - W3Schools.com" [ref=f22e6]
          - generic [ref=f22e11]:
            - generic [ref=f22e14]: "-01:14"
            - link [ref=f22e21] [cursor=pointer]:
              - /url: https://www.viously.com
    - generic [ref=e75]:
      - iframe [ref=e77]:
        - generic [ref=f30e2]:
          - generic [ref=f30e4]:
            - iframe [ref=f30e7]:
              - generic [active] [ref=f68e1]:
                - link:
                  - /url: clickTag
                - generic [ref=f68e3] [cursor=pointer]:
                  - img [ref=f68e11]
                  - img [ref=f68e16]
                  - img [ref=f68e24]
                  - img [ref=f68e29]
            - generic [ref=f30e8]:
              - generic:
                - img [ref=f30e12] [cursor=pointer]
                - button [ref=f30e14] [cursor=pointer]:
                  - img [ref=f30e15]
          - generic:
            - iframe
          - img
      - paragraph [ref=e78]:
        - link "REMOVE ADS" [ref=e79] [cursor=pointer]:
          - /url: https://order.w3schools.com/plans
  - generic [ref=e80] [cursor=pointer]: ×
```

# Test source

```ts
  1  | //
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('handling frames',async({page})=>{
  6  |     await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit')
  7  |     await page.waitForLoadState('networkidle')
  8  | 
  9  |     await page.waitForTimeout(2000)
  10 | 
  11 |     const frame=page.frameLocator('#iframeResult')
  12 |     await frame.getByLabel('First name:').fill('')
  13 |       await frame.getByLabel('First name:').fill('sagar')
> 14 |     await page.waitForTimeout(2000)
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  15 |     
  16 |    //if we wish to click item on page, we can still do via page object, we just need to use frame locator
  17 | 
  18 | });
  19 | 
  20 | 
  21 | test('handling frames via framearray',async({page})=>{
  22 |     await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit')
  23 |     await page.waitForLoadState('networkidle')
  24 | 
  25 |     await page.waitForTimeout(2000)
  26 | 
  27 |     const frame=page.frames('[1]') // we can also use frame array to access frame, here 1 is index of frame
  28 |     await frame.getByLabel('First name:').fill('')
  29 |       await frame.getByLabel('First name:').fill('sagar')
  30 |     await page.waitForTimeout(2000)
  31 |     
  32 |    //if we wish to click item on page, we can still do via page object, we just need to use frame locator
  33 | 
  34 | });
```