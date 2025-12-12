

import { test, expect } from '@playwright/test';

test('mouse actions hover test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
//.hover


});

test('mouse actions right click test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');

  //right click

  //click({button: 'right'})

});


test('mouse actions dbl click test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');

  //right dblCLick

  //click({button: 'right'})

});


test('dragandrop  test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');

// chaining of actions



//2

// ele1.dragTo(ele2)
  

  

});


test('mouse actions scroll test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
// scrolling is done by default in playwright



// scroll and see record case wee have to handle for scrolling..dymanic scrlling 
  

});


test('infinite/dyanic scroll test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');




// scroll and see record case wee have to handle for scrolling..dymanic scrlling 
  

//window.scrollTo(0, document.body.scrollHeight);


// page.evaluate(() => {
//     window.scrollTo(0, document.body.scrollHeight);


//     }); 
//     await page.waitForTimeout(3000); //wait for 3 seconds to see the scroll effect

// });
});