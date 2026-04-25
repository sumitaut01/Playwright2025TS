
//check()
//uncheck()


//click always does the action
//chk unc wont do action if already in desired state


import {test,expect} from '@playwright/test'

test('working with checkboxes',async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')

    //page.waitForSelector()

    const chkSunday=page.getByRole('checkbox',{'name':'Sunday'});

    await chkSunday.check();

    expect(chkSunday.isChecked()).toBeTruthy();
    await chkSunday.check();
    expect(await chkSunday.isChecked()).toBeTruthy();// even if we click secons time, state wont change

    //click will have different behaviour though

    await chkSunday.uncheck();
   expect(await chkSunday.isChecked()).not.toBeTruthy();

   console.log(await chkSunday.textContent);





   // clicking all the checkboxes
   // array of locator
const allCheck= await page.getByRole('radio').all();

for(const one of allCheck){
    
    await one.check();
}


})