

import {test,expect} from '@playwright/test'


const names:string[]=['sumit','neha'];

for( const item in names){
test(`data within loop ${item}` , async ({page}) => {
await page.goto("http://google.com")

console.log(item +" iteration")
});
}



names.forEach(item=>{
test(`data within loop=> ${item}` , async ({page}) => {
await page.goto("http://rediff.com")

console.log(item +" iteration")
});
});


test.describe("looping group ", ()=>{
names.forEach(item=>{
test(`data within loop with descirbe group=> ${item}` , async ({page}) => {
await page.goto("http://rediff.com")

console.log(item +" iteration")
});
});

});