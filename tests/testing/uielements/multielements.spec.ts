

import {test,expect, type Locator} from "@playwright/test";

test('this is my first test',async({page})=>{
const url='https://testautomationpractice.blogspot.com/';
await page.goto(url)
 
const txtBoxes:Locator=page.locator(`.form-group input[type='text']`) // matches 3 textboxes

console.log(`"printting result" ${await txtBoxes.count()}`)


await txtBoxes.nth(2).fill('test')
await txtBoxes.first().fill('first');


  const array= await txtBoxes.all()
 const x=0;
  for(const x of array){

    await x.fill(`first' + (x+1)`);

  }

page.pause();



});


