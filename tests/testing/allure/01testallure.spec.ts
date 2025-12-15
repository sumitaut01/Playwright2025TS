//steps https://www.npmjs.com/package/allure-playwright

// npm install -D allure-playwright

//add allure entry

// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   reporter: [ ["allure-playwright"]],
// });

//after tests executed
//allure generate ./allure-results -o ./allure-report


//open report
//allure open ./allure-report

// npm install -g allure-commandline




import { test,expect } from "@playwright/test";

test('first test with allure', async ({page})=>{
await page.goto("http://www.rediff.com")
expect(await page.title()).toContain("Rediff");
await page.screenshot({path: 'screenshot.png'});
 await page.close();
});