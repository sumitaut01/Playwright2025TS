//waitfortimeout() this will wait for the specified time in milliseconds before executing the next step. It is a static wait and is not recommended for dynamic web applications as it can lead to unnecessary delays or insufficient wait times.

//waitforurl() this will wait for the specified url to be loaded before executing the next step. It is a dynamic wait and is recommended for dynamic web applications as it will wait for the url to be loaded before moving to the next step.

//waitforselector() this will wait for the specified selector to be visible before executing the next step. It is a dynamic wait and is recommended for dynamic web applications as it will wait for the element to be visible before moving to the next step.

//waitforloadstate() this will wait for the specified load state to be reached before executing the next step. It is a dynamic wait and is recommended for dynamic web applications as it will wait for the load state to be reached before moving to the next step.
// possible load states are 'load', 'domcontentloaded', 'networkidle', 'commit' etc.


//   wait time in configurations...
import { test, expect } from '@playwright/test';

test('wait for timeout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('text=Swag Labs')).toBeVisible();
    page.waitForLoadState('networkidle');  // this will wait for the network to be idle, it will wait for all the network requests to be completed before moving to next step

    // wait for 5 seconds
    await page.waitForTimeout(5000);        
    page.waitForURL('https://www.saucedemo.com/');  // this will wait for the url to be loaded, if the url is already loaded it will not wait and move to next step

    page.waitForSelector('text=Swag Labs');  // this will wait for the element to be visible, if the element is already visible it will not wait and move to next step  
})          ;
