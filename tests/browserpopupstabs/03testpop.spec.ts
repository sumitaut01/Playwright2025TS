
import { test, expect ,chromium} from '@playwright/test';
test('pop up test', async ({ browser }) => {
//browser taken from config 
    const context = await browser.newContext();
    const page = await context.newPage();               
  await page.goto('https://testautomationpractice.blogspot.com//');

  
  //we need to run both simultaneouly ,using promise.all . they both return promises

//   context.waitForEvent('page');// important before opening new tab
//   page.locator("#Popup").click();


//crockcheck below if event is pop up
  await Promise.all([context.waitForEvent('page'), page.locator("#Popup").click()]);
    

  const allPages=context.pages();

  for(const pop of allPages){
 console.log(pop.title())
 pop.close();
  }




  

});