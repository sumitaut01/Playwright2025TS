//

import { test, expect } from '@playwright/test';

test('handling frames',async({page})=>{
    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit')

    await page.waitForTimeout(2000)
    const frame=page.frameLocator('#iframeResult')
    await frame.locator('#fname').fill('sumit')
    await page.waitForTimeout(2000)
    
   //if we wish to click item on page, we can still do via page object, we just need to use frame locator

});


test('handling frames via framearray',async({page})=>{
    await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit')

    await page.waitForTimeout(2000)
    const frame = page.frames()[1];
    if (!frame) {
        throw new Error('Frame not found');
    }
    await frame.locator('#fname').fill('sumit')
    await page.waitForTimeout(2000)
    
   //if we wish to click item on page, we can still do via page object, we just need to use frame locator


});