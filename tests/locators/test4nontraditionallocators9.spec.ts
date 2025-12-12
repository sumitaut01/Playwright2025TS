import { test, Locator, expect } from "@playwright/test";

test("myfunction", async ({page}) => {

// navigate
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");


// used in form controls
//
  const loc:Locator=page.getByPlaceholder("First name:") //Does not return promise.await is not required here as we are not doing anything on locator
  await expect(loc).toBeVisible(); //we are checking


  await loc.fill("Sumitra");
  await page.waitForTimeout(3000);
  
});
