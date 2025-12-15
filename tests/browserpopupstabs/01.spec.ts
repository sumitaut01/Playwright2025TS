
// tab window pop are considered as pages


//browser context page

import { test, expect ,chromium} from '@playwright/test';
test('BigBasket menu test', async ({ browser }) => {
//browser taken from config 
    const context = await browser.newContext();
    const page = await context.newPage();               
  await page.goto('https://www.bigbasket.com/');
    await page.waitForLoadState('networkidle');

});




test('Own Browser', async ({ browser }) => {
//browser taken from config 

    browser= await chromium.launch({ headless:false });
    const context = await browser.newContext();
    const page = await context.newPage();               
  await page.goto('https://www.bigbasket.com/');
    await page.waitForLoadState('networkidle');

});



test('Own Browser nothing in fixture', async ({ }) => {
//browser taken from config 

   const  browser= await chromium.launch({ headless:false });
    const context = await browser.newContext();
    const page = await context.newPage();               
  await page.goto('https://www.bigbasket.com/');
    await page.waitForLoadState('networkidle');

});




test('from context menu test', async ({context }) => {

   //browser taken from config 
   const page= await context.newPage(); 
  await page.goto('https://www.wwe.com/');

});


test('multiple pages from context menu test', async ({context }) => {

   //browser taken from config 
   const page1= await context.newPage(); 
   const page2= await context.newPage();
  await page1.goto('https://www.wwe.com/');
  await page1.goto('https://www.rediff.com/');


  console.log(context.pages().length); //to see how many pages are opened in the context

});



//check the output
test('browser with page directly', async ({browser }) => {

   //browser taken from config 
   const page1= await browser.newPage(); 
   const page2= await browser.newPage(); 

  await page1.goto('https://www.wwe.com/');
  await page1.goto('https://www.rediff.com/');


  console.log(browser.contexts().length); //

});





test('from page', async ({ page }) => {
  await page.goto('https://www.bigbasket.com/');

});