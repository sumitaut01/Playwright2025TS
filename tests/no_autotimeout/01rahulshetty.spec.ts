
import { test, expect } from '@playwright/test'

test('logging in ', async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.getByPlaceholder('email@example.com').fill('sumitraut01@gmail.com')
    await page.locator('[formcontrolname="userPassword"]').fill('Sumit1086#1')

    await page.getByRole('button', { name: 'Login' }).click()

    //.card-body b   prod title

    //below will return 0 mostly as there is no autowaiting
    const prodTitles = page.locator('.card-body b');
    console.log(await prodTitles.count());
    const data = await prodTitles.allTextContents()
    console.log(data)
    await page.pause();

})



test('logging in wait for url ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.getByPlaceholder('email@example.com').fill('sumitraut01@gmail.com')
    await page.locator('[formcontrolname="userPassword"]').fill('Sumit1086#1')

    await page.getByRole('button', { name: 'Login' }).click()
    //might give result
    await page.waitForURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

    //.card-body b   prod title
    const prodTitles = page.locator('.card-body b');
    console.log(await prodTitles.count());

    await test.step(`Count is await prodTitles.count()`, async () => {
        // actions
    });
    const data = await prodTitles.allTextContents()
    console.log(data)
    await page.pause();

})


test('logging in and then wait for call to get over ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.getByPlaceholder('email@example.com').fill('sumitraut01@gmail.com')
    await page.locator('[formcontrolname="userPassword"]').fill('Sumit1086#1')

    await page.getByRole('button', { name: 'Login' }).click()
    //might give result


    //   https://rahulshettyacademy.com/api/ecom/product/get-all-products

    // wait untill response comes back
    //.card-body b   prod title
    const prodTitles = page.locator('.card-body b');
    await page.waitForResponse('**/get-all-products');
    await test.step(`Count is ${await prodTitles.count()}`, async () => {
        // actions
    });
    console.log(await prodTitles.count());
    const data = await prodTitles.allTextContents()
    console.log(data)


})



test('logging in and then wait for response ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.getByPlaceholder('email@example.com').fill('sumitraut01@gmail.com')
    await page.locator('[formcontrolname="userPassword"]').fill('Sumit1086#1')

    await page.getByRole('button', { name: 'Login' }).click()
    //might give result


    //   https://rahulshettyacademy.com/api/ecom/product/get-all-products

    // wait untill response comes back
    //.card-body b   prod title
    const prodTitles = page.locator('.card-body b');
    const response = await page.waitForResponse(
        resp =>
            resp.url().includes('/get-all-products') &&
            resp.status() === 200
    );
    await test.step(`Count is ${await prodTitles.count()}`, async () => {
        // actions
    });
    console.log(await prodTitles.count());
    const data = await prodTitles.allTextContents()
    console.log(data)


})











test('logging in and then waitForLoadState', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.getByPlaceholder('email@example.com').fill('sumitraut01@gmail.com')
    await page.locator('[formcontrolname="userPassword"]').fill('Sumit1086#1')

    await page.getByRole('button', { name: 'Login' }).click()
    //might give result


    await page.waitForLoadState("networkidle");

    //.card-body b   prod title
    const prodTitles = page.locator('.card-body b');
    console.log(await prodTitles.count());
    const data = await prodTitles.allTextContents()
    console.log(data)
    await page.pause();

})