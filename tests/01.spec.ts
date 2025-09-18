
import { expect,test,Browser,Page } from "@playwright/test";
import { webkit,chromium,firefox } from "@playwright/test";



test('first',async()=>{

const browser:Browser= await chromium.launch({headless:false})
const page:Page=await browser.newPage()
await page.goto("https://www.google.com");
await expect(page).toHaveTitle("Google");
await page.close();
await browser.close
});
