import { test, expect } from '@playwright/test';


test('dialog handling test', async ({ page }) => {
    //dialogs are automatically handled
    //u can profile dialog handling also using page.on('dialog')        
   // before dialog appears
  await page.goto('https://testautomationpractice.blogspot.com/');  

    page.on('dialog', async(dialog)=>{

        dialog.accept();
        
        //'yes i agree'); // to accept with text

        dialog.accept('yes i agree'); // to accept with text

        //dialog.dismiss(); // to cancel

        const msg:string=dialog.message();

        dialog.defaultValue

        dialog.type(); //alert,confirm,prompt, beforeunload

        console.log('dialog message is:',msg);


});

//now click the button to trigger the dialog

await page.locator('button[onclick="myFunction()"]').click();
await page.waitForTimeout(3000);

});




test('frames handling test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');  




});