import { expect,test } from "@playwright/test";


test('01_basic test with tags', {tag: '@smoke'}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle("/play/i")

});



test('02_basic test without tags', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

//You can also filter tests by their tags during test execution:

// in the command line;
// in the config with testConfig.grep and testProject.grep;
// Learn more about tagging.















