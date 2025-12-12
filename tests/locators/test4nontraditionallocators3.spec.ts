import { test, Locator, expect } from "@playwright/test";

test("myfunction", async ({page}) => {

// navigate
  await page.goto("https://www.facebook.com");


  // <p>example: check title contains "Facebook"</p>
  //use on no intreactive elememt like text etc

  //works on full string substring
  const loc:Locator=page.getByText("Facebook") //Does not return promise.await is not required here as we are not doing anything on locator

  //we can use regular expression also
  //  FaceBook Welcome  /i case insensitive
  //const loc:Locator=page.getByText("/Facebook\sWelcome/i) //Does not return promise.await is not required here as we are not doing anything on locator
  await expect(loc).toBeVisible(); //we are checking
  
});
