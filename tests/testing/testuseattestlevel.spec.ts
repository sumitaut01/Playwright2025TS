
import {test,expect} from "@playwright/test"

test.use(

    {baseURL:"https://www.google.com"}

)

test('name of the test',async( {page})=>{
   // await page.goto('https://www.google.com');
   await page.goto('https://store.google.com/');
    await page.pause();


});