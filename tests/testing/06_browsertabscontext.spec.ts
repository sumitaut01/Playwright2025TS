import {test, expect, chromium, webkit } from "@playwright/test";



//look into projects array
test("browser",async({browser})=>{
const context= await browser.newContext();
  const page=context.newPage();
 (await page).goto("https://demowebshop.tricentis.com/")
console.log("done");
})




//launches chrome
test("browser chromium",async ()=>{
const chrome=await chromium.launch();
const context= await chrome.newContext();
  const page=context.newPage();
 (await page).goto("https://demowebshop.tricentis.com/")
console.log("done");
})



test("browser wbekit",async ()=>{
const chrome=await webkit.launch();
const context= await chrome.newContext();
  const page=context.newPage();
 (await page).goto("https://demowebshop.tricentis.com/")
console.log("done");
})