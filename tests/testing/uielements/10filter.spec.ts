
import {test,expect} from '@playwright/test'

test('handling input',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForLoadState('networkidle')

const checkboxFirst=page.getByRole('checkbox').first();//sunday
await checkboxFirst.check();
console.log(await checkboxFirst.textContent())


await page.getByRole('checkbox').nth(1).check();//second 

await page.getByRole('checkbox').nth(-1).check();//last 

await page.pause();

})



test('handling filter',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForLoadState('networkidle')

await page.locator('input[type="checkbox"]').filter({ hasText: 'Saturday' }).check();
await page.pause();

})