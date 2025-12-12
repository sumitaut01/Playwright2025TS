
import { test, expect ,chromium} from '@playwright/test';
test('BigBasket menu test', async ({ browser }) => {
//browser taken from config 
    const context = await browser.newContext();
    const page = await context.newPage();               
  await page.goto('https://testautomationpractice.blogspot.com//');

  
  //we need to run both simultaneouly ,using promise.all . they both return promises

  context.waitForEvent('page');// important before opening new tab
  page.locator("button:has-text('New Tab')").click();


  const [childpage]=await Promise.all([context.waitForEvent('page'), page.locator("button:has-text('New Tab')").click()]);
    

  //switching between pages

  console.log(context.pages.length);

  const pagearray=context.pages();


  console.log(await pagearray[0].title);
  console.log(await pagearray[1].title);


  

});

