import { test } from "@playwright/test";


test('handling popups',async({page})=>{
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')
    await page.waitForLoadState('networkidle')

    await page.waitForTimeout(2000)

    page.on('dialog',async dialog=>{
        console.log(dialog.message())
        await dialog.accept()
    })

    await page.waitForTimeout(2000)
    await page.locator('.signin-btn').click()

    


});