import {test,expect} from '@playwright/test'

test('handling links',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForLoadState('networkidle');

const homeLink=page.getByRole("link",{name:'Home'});

console.log(await homeLink.innerText);
await homeLink.click();

});