

import {test ,expect, type Locator} from "@playwright/test"
import { optional } from "zod";

test(' drop down 1',{},async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //drop down was of select
    await page.getByLabel('Country').selectOption('India'); // text which is visible
    await page.getByLabel('Country').selectOption({'value':'canada'});  //value attribute if present
    await page.getByLabel('Country').selectOption({'label':'France'});  //innertext

    //index
    await page.getByLabel('Country').selectOption({index:1}); //0 based



// count
     const options:Locator =page.locator('#country option')
     await expect(options).toHaveCount(10);

     //Error: expect(locator).toHaveCount(expected) failed

// Locator:  locator('#country option')
// Expected: 4
// Received: 10
// Timeout:  5000ms



//3 presence of option in drop down

const optionsTexts=await page.locator('#country option').allTextContents();
console.log(optionsTexts)


const newMap:string[]=optionsTexts.map(m=>m.trim())
console.log(newMap)

expect(newMap).toContain('India'); // just checking if india present or not


for(const m of newMap) {
    console.log(m);
}

});





test('drop down multi select',{},async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //drop down was of select
    await page.locator('#colors').selectOption(['Red','Blue','Green']); //

    //value
    //  label works similar  {label::'Green'},{label::'Red'},
    //index works similar  {index::0},{index::1},
});