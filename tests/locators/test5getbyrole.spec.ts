import { test, chromium, expect } from "@playwright/test";

test("getbyrole", async ({page}) => {

// navigate
  await page.goto("https://www.google.com");

  // example: check title contains "Facebook"
  await expect(page).toHaveTitle(/google/i);

await page.getByRole("textbox", { name: "Search"}).fill("test");


});
