import { test,expect } from "@playwright/test";



test('xpath',async({page})=>{

await page.goto('https://demowebshop.tricentis.com/login');

 page.locator("somexpath");
});