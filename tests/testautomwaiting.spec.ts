
//Assertions for waiting mechanisms in Playwright


//Actions timeout   {force:true,timeout:5000}  //default 30 seconds

//can be set in playwright.config.ts also and will be applicable globally
//also in test it can be set as  test.use({actionTimeout:10000});  //10 seconds

//Element handle timeout  elementHandle.click({timeout:5000})  //default 30 seconds


//not all assertions have auto waiting mechanisms
//Assertions that have auto waiting mechanisms
//toBeVisible
//toBeHidden            
//toHaveText           



import { test,expect } from "@playwright/test"; 
test('auto waiting assertions test',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    const searchBox=page.locator('input[id="small-searchterms"]');
    await searchBox.fill('Apple MacBook Pro 13-inch');

    expect(searchBox).toBeVisible();  // auto waiting assertion 

   const data= searchBox.innerText

   expect(data).toBe(''); // non retrying assertion
    const searchButton=page.locator('button[type="submit"]');
    await searchButton.click();    
    
    

})