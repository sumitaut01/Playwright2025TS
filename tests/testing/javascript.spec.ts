

import {test,expect} from '@playwright/test'


test('using evaluate',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.reload();
    await page.getByPlaceholder('Enter Name').evaluate(ele=>{
        ele.style.backgroundColor='red';
    })
    await page.pause();
    })
