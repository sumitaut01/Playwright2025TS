import { test, Locator, expect } from "@playwright/test";

test("myfunction", async ({page}) => {

// navigate
  await page.goto("https://www.facebook.com");

  // example: check title contains "Facebook"
  // alttext availbale on images
  const loc:Locator=page.getByAltText("Facebook") //Does not return promise.await is not required here as we are not doing anything on locator
  await expect(loc).toBeVisible(); //we are checking


  
});
