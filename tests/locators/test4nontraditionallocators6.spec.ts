import { test, Locator, expect } from "@playwright/test";

test("myfunction", async ({page}) => {

// navigate
  await page.goto("https://www.facebook.com");


// role based on element type button , link ,checkbox ,textbox
//
  const loc:Locator=page.getByRole("button",{name:"Log In/i"}) //Does not return promise.await is not required here as we are not doing anything on locator
  await expect(loc).toBeVisible(); //we are checking


  // implicit role  example button has button role
  //explicit role
  
});
