import {test,expect} from '@playwright/test'
import fs from 'fs';

test('download file', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('').setInputFiles('pathof file with extensions also');


    //(method) PromiseConstructor.all<[Download, void]>(values: [Download, void]): Promise<[Download, void]> 

    //start waiting before download.. 
    const [download]=await Promise.all(

    [await page.waitForEvent("download"),   //download
    await page.locator('downloadlink').click()]  //gives void
    )
    

    //download path

    const path= 'somepath';
    download.saveAs(path)

//validate file downloaded.. use fs modules

expect(await fs.existsSync(path)).toBeTruthy();


//clean downloaded file
fs.unlinkSync(path)
    
});