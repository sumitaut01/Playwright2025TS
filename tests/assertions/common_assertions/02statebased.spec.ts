import {test,expect} from '@playwright/test'

test.describe('common state based assertions',()=>{
    test('toBeVisible assertion',async({page})=>{       

        await page.goto('https://www.saucedemo.com/')

          
        const logo = page.locator('.login_logo')
          await expect(logo).toBeFocused() // this assertion will pass if the element is focused on the page.
          //  If the element is not focused, the assertion will fail and an error message will be displayed.

        await expect(logo).toBeEditable()  // this assertion will pass if the element is editable on the page. 
        // If the element is not editable, the assertion will fail and an error message will be displayed.

         await expect(logo).toBeEnabled() //this assertion will pass if the element is enabled on the page. 
         // If the element is disabled, the assertion will fail and an error message will be displayed.


         await expect(logo).not.toBeDisabled() ;//this assertion will pass if the element is not disabled on 
         // the page. If the element is disabled, the assertion will fail and an error message will be displayed.  

          await expect(logo).not.toBeChecked() ;// this assertion will pass if the element is not checked on
          //  the page. If the element is checked, the assertion will fail and an error message will be 
          // displayed.



    });
  });
