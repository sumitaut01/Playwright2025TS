//keyboard is there in playwright and it is used to perform keyboard actions like type, press, down, up etc

import { test, expect } from "@playwright/test";    

test('keyboard actions test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const input = page.getByPlaceholder('Enter Name'); 
    await input.focus();
    await page.keyboard.insertText('dummy');

     await page.keyboard.down('control')
     await page.keyboard.press('A')
       await page.keyboard.up('control')

 await page.keyboard.press('tab')  //down and up combined
});



test('keyboard actions simpler', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const input = page.getByPlaceholder('Enter Name'); 
    await input.focus();
    await page.keyboard.insertText('dummy');

    //  await page.keyboard.down('control')
    //  await page.keyboard.press('A')
    //    await page.keyboard.up('control')

    await page.keyboard.press('control+A')//both in single

    await page.keyboard.press('control+Shift+A')

 await page.keyboard.press('tab')  //down and up combined
});