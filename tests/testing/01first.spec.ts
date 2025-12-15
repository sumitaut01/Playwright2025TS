
import { test,expect } from "@playwright/test";


//fixture page ,browser

test("01_first test",async({page})=>{

await page.goto("https://naveenautomationlabs.com/opencart/")
console.log('title is '+await page.title())
await expect(page).toHaveTitle('Your Store');

await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/');
await page.getByRole('link', { name: 'Desktops' }).hover()


});