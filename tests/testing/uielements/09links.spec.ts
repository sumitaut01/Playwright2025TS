import {test,expect} from '@playwright/test'

test('handling links',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForLoadState('networkidle');



//
const allLinks=page.getByRole("link");

const all=await allLinks.count()
console.log(all);


const homeLink=page.getByRole("link",{name:'Home'});
console.log(await homeLink.innerText);
expect(await homeLink.innerText()).toBe('Home');
await homeLink.click();




});