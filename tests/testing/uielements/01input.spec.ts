

import {test,expect} from '@playwright/test'

test('handling input',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForLoadState('networkidle');

const inputvalue="this is it";
await page.getByRole('textbox',{name:'Enter Name'}).fill(inputvalue);

const enteredText=await page.getByRole('textbox',{name:'Enter Name'}).inputValue();
console.log(`Entered Text: ${enteredText}`);

//locator assertions
expect(enteredText).toBe(inputvalue);
expect(enteredText).toContain(inputvalue); //paertial match 

await page.getByRole('textbox',{name:'Enter Name'}).clear();
//
//Entered Text: this is it


await page.getByRole('textbox',{name:'Enter name'}).fill('this is it');//made n smaller

await page.getByRole('textbox',{name:'Enter Name'}).clear();

await page.getByPlaceholder('Enter email').fill('s@s.com');// text is lowercase

await page.getByPlaceholder('Enter email').clear();

await page.getByPlaceholder('Enter email').pressSequentially('typing slow',{delay:1000});
await page.getByRole('textbox',{name:'Enter Name'}).clear();



// locator has space in between text. It failed. Case changing worked but space in between text did not work. So we need to be careful while using locator. We can also use regex for this.
//#1 learning  1.. test timeout came into picture
//Error: locator.pressSequentially: Test timeout of 30000ms exceeded.
// Call log:
//   - waiting for getByPlaceholder('Enter      email')-- 
//notice below we have added extra space. small 'email' works
// await page.getByPlaceholder('Enter      email').pressSequentially('typing slow',{delay:1000});
// await page.getByRole('textbox',{name:'Enter Name'}).clear();

})





test('handling input when input does not exists',async({page})=>{

    //element level timeout..try
await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForLoadState('networkidle');
await page.getByRole('textbox',{name:'Enter Na' }).fill('this is it');


})




