//chalk logging  ..import it



import { test, expect } from '@playwright/test'

// we can also use testinfo to modify timeout



test('autowaiting is not available for everything. check below example',async({page},testInfo)=>{

 testInfo.setTimeout(testInfo.timeout + 30_000);//possible at hooks level also like beforeEach
    let url='http://uitestingplayground.com/ajax'
    const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
    await page.goto(url)
    await locator.click();
    
    const finalElement=page.getByText('Data loaded with AJAX get request.');
    // so whats happening below is alltextcontents is not able to find the element because it is not visible yet. So it will return an empty array and then it will check if the array contains 'AJAX' which is not there and then it will throw an error. This is because the element is not visible yet and the autowaiting is not working for this element. This is because the autowaiting is only working for certain actions like click, fill, etc. It is not working for all the actions like getting text content, getting attribute, etc. So we need to use explicit wait for these actions to wait for the element to be visible before performing any action on it.
    expect(await finalElement.allTextContents()).toContain('AJAX');

    /*

    Error: expect(received).toContain(expected) // indexOf

Expected value: "AJAX"
Received array: []

  18 |     
  19 |     const finalElement=page.getByText('Data loaded with AJAX get request.');
> 20 |     expect(await finalElement.allTextContents()).toContain('AJAX');
     |                                                  ^
  21 | });
  22 |

    */
});




test('test 1 fixed=> autowaiting is not available for everything. check below example',async({page},testInfo)=>{

 testInfo.setTimeout(testInfo.timeout + 30_000);//possible at hooks level also like beforeEach
    let url='http://uitestingplayground.com/ajax'
    const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
    await page.goto(url)
    await locator.click();
    
    const finalElement=page.getByText('Data loaded with AJAX get request.');

    await finalElement.waitFor({state:'attached'}); // 
  //   expect((await finalElement.allTextContents()).join(' '))
  // .toContain('AJAX');

  const all=await finalElement.allTextContents();
  expect(all).toContain('Data loaded with AJAX get request.');

});
