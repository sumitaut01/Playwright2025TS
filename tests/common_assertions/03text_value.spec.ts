import {test,expect} from '@playwright/test'

test.describe('common state based assertions',()=>{
    test('toBeVisible assertion',async({page})=>{       

        await page.goto('https://www.saucedemo.com/')
        const logo = page.locator('.login_logo')
        await expect(logo).toHaveText('Swag Labs')  // this assertion will pass if the element has the text 'Swag Labs'. If the element does not have the text 'Swag Labs', the assertion will fail and an error message will be displayed.

         await expect(logo).toHaveText('/Swag Labs/i')  // this assertion will pass if the element has the text 'Swag Labs' (case insensitive). If the element does not have the text 'Swag Labs', the assertion will fail and an error message will be displayed.


         await expect(logo).toContainText('Swag')  // this assertion will pass if the element contains the text 'Swag'. If the element does not contain the text 'Swag', the assertion will fail and an error message will be displayed.

            await expect(logo).toContainText('/Swag/i')  // this assertion will pass if the element contains the text 'Swag' (case insensitive). If the element does not contain the text 'Swag', the assertion will fail and an error message will be displayed.


            await expect(logo).toHaveValue('Swag Labs')  // this assertion will pass if the element has the value 'Swag Labs'. If the element does not have the value 'Swag Labs', the assertion will fail and an error message will be displayed.


    await expect(logo).toHaveValues(['Swag Labs'])  // this assertion will pass if the element has the value 'Swag Labs'. If the element does not have the value 'Swag Labs', the assertion will fail and an error message will be displayed.



    // Match all list items at once (order matters!)
await expect(page.getByRole('listitem')).toHaveText([
  'Rule A', 'Rule B', 'Rule C'])

// Match all list items at once (order does not matter!)
await expect(page.getByRole('listitem')).toHaveText(
  ['Rule A', 'Rule B', 'Rule C'],
  { ignoreOrder: true }))


  await expect(page.getByLabel('Password')).toHaveInputType('password');


]);


    })  
    });

