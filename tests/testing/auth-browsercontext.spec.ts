

import { test, expect } from '@playwright/test';

// test("handling authentication",async({page})=>{
//     await page.goto('https://the-internet.herokuapp.com/basic_auth',{
//         auth:{
//             username:'admin',
//             password:'admin'
//         }
//     })
// });



test("handling authentication with browser context",async({browser})=>{
    const context=await browser.newContext({
        httpCredentials:{
            username:'admin',   
            password:'admin'
        }
    })
    const page=await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth')

    await page.title().then(title=>{
        console.log(`the title is ${title}`)
    
    })
});