import test, { expect } from '@playwright/test';

test('frames url handling test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');
    //main page has frames  
    //page.frame
     const  framecount=page.frames().length;

     //framecount.fill(0);

     //3 aporoaches to handle frames

          
});

test('frames locator handling test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');

  //page.frameLocator
 

          
});


test('frames within frame test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');
   

          
});


test('frames handling test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');
   
  //frameElement.childframes();

          
});