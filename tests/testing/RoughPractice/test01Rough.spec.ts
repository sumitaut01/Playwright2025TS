
import { test, expect } from "@playwright/test";
test('this is sample work', { tag: '@first', annotation: {description: 'descrption',type: 'type'}}, async({page})=>{


const url='https://testautomationpractice.blogspot.com/';
await page.goto(url)
await page.reload()
await page.waitForURL(url);








})


test('this is dummy ', { tag: '@first', annotation: {
    description: 'descrption',
    type: 'type'
}}, async({page})=>{

console.log('this is second test')
const url='https://testautomationpractice.blogspot.com/';
await page.goto(url)
await page.reload()
await page.waitForURL(url);

});