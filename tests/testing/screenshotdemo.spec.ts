import {test,expect} from '@playwright/test'


test('using evaluate',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.reload();


    //full page screenshit
await page.screenshot({path:'zz_pageshot.png', fullPage:true})

    await page.getByPlaceholder('Enter Name').evaluate(ele=>{
        ele.style.backgroundColor='red';
    })

    await page.getByPlaceholder('Enter Name').screenshot({path:'zz_elemetentshot.png'})
    await page.pause();
    })