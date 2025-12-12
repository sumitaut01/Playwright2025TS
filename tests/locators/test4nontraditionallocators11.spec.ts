import { test, Locator, expect } from "@playwright/test";

test("myfunction", async ({page}) => {

// navigate
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");


// button data-test-id="something"
// customizable  ,tomorrow if dev changes to data-qa-id also it will work


// in use: section of config, we have to add testIdAttribute: 'data-qa-id', 
  const loc:Locator=page.getByTestId("First name:") //Does not return promise.await is not required here as we are not doing anything on locator
  await expect(loc).toBeVisible(); //we are checking


  await loc.fill("Sumitra");
  await page.waitForTimeout(3000);
  
});
