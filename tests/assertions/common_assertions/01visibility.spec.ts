
import {test,expect} from '@playwright/test'

test.describe('common visibility assertions',()=>{
    test('toBeVisible assertion',async({page})=>{       

        await page.goto('https://www.saucedemo.com/')
        const logo = page.locator('.login_logo')
        await expect(logo).toBeVisible()  // this assertion will pass if the element is visible on the page. If the element is not visible, the assertion will fail and an error message will be displayed.



         await expect(logo).toBeHidden() // this assertion will pass if the element is hidden on the page. If the element is visible, the assertion will fail and an error message will be displayed.

          await expect(logo).toBeInViewport(); // this asse 
          //    rtion will pass if the element is in the viewport. If the element is not in the viewport, the assertion will fail and an error message will be displayed.


        await expect(logo).toHaveCount(1) // this assertion will pass if the element is present in the DOM and has a count of 1. If the element is not present in the DOM or has a count of 0, the assertion will fail and an error message will be displayed.

    })