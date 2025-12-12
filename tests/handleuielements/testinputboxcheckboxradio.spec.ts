import {test,expect} from '@playwright/test';

test('inputs', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const inputBox= page.locator('#name');

    expect (inputBox).toBeVisible();
    expect (inputBox).toBeEnabled();


 expect (inputBox).toHaveAttribute('maxlength');
    const maxLength=inputBox.getAttribute('maxlength');
    expect (maxLength).toBe('15');

    page.waitForTimeout(2000);
    await inputBox.fill('Sumitra');
    expect (inputBox).toHaveValue('Sumitra');
    inputBox.clear();
    expect (inputBox).toHaveValue('');
    page.waitForTimeout(2000);


});





test.only('radio buttons', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const cricketCheckbox= page.locator('input[value="Cricket"]');
    const moviesCheckbox= page.locator('input[value="Movies"]');
    const hockeyCheckbox= page.locator('input[value="Hockey"]');    




});


test('checkboxes ', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // select one or more checkboxes
    //verify if they are selected
    //use mapping to select multiple checkboxes
    //last 3 checkboxes with slice  
    //check uncheck tobechecked .NOT.TOBEchecked

    const cricketCheckbox= page.locator('input[value="Cricket"]');
    const moviesCheckbox= page.locator('input[value="Movies"]');
    const hockeyCheckbox= page.locator('input[value="Hockey"]');    


    //also try if it was already checked then unchecked and reverify

    //also click by labels
  

});