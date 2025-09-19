
import { test,expect } from "@playwright/test";


//fixture page ,browser

test("01_first test",async({page})=>{

await page.goto("https://naveenautomationlabs.com/opencart/")
await expect(page).toHaveTitle('Your Store');

await expect(page).toHaveURL('/labS/');
await page.getByRole('link', { name: 'Desktops' }).hover()
//await page.getByRole('link', { name: 'Desktops' }).hover()//works as well

await page.getByText("PC (0)").click()

});