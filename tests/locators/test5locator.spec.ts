import { test, chromium, expect } from "@playwright/test";

test("myfunction", async ({page}) => {

// navigate
  await page.goto("https://www.facebook.com");

  // example: check title contains "Facebook"
  await expect(page).toHaveTitle(/Facebook/);


});
