
//1 await page.locator('#country').selectoption('India)

//2 selectoption({value:uk})  // if value is there

//3 selectoption({label:United Kingdom})
//4 selectoption({index:3})  // 0 based index


import { test, expect } from '@playwright/test';

test('multi handle dropdown test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  expect(page.title()).toBe('Automation Testing Practice');

  //page.locator('#country').selectOption('Canada', {timeout:10000}); //
page.locator('#country').selectOption(['Canada','India']); //chnaage selector
  page.waitForTimeout(500);

const loc=page.locator('#country >option');
const data:string[]=await loc.allTextContents();
console.log(data);


/// print if it contains india

//loop all options


//multi select posssible or not

})
