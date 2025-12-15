
import {test,expect} from "@playwright/test"

test('browserName fixture', async ({browserName})=>{

 if(browserName==='chromium'){
    console.log('chromemium')
 }
 else{
console.log(browserName.toString())
 }
});




test('browse fixture', async ({browser})=>{

const context=await browser.newContext();

const page=   await context.newPage();


page.goto("rediff.com")

});




test('context fixture', async ({context})=>{

const page=   await context.newPage();
page.goto("wwe.com")

});




test('page fixture', async ({page})=>{
page.goto("wcw.com")

});




