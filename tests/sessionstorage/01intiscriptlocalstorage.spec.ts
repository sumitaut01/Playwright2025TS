

import {test,expect} from '@playwright/test'

test('',async({browser})=>{


    //

    const context=await browser.newContext();

    const page=await context.newPage();

    await page.goto('someurl')

    //login


    //save session state
    context.storageState({path: 'somefile.json'})



    //open new browser
   const context2= browser.newContext({storageState: 'somefile.json'})




})