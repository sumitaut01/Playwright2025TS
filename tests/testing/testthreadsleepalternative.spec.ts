

import test from '@playwright/test'


test('waitfortimeout()',async({page})=>{

    await page.goto("https:/www.google.com")
    await page.waitForTimeout(5000);
     await page.goto("https:/www.rediff.com")

})

