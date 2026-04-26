//chalk logging  ..import it



import test from '@playwright/test'



// globalTimeout: 3*1000, // this is global timeout. It will apply to all the tests in the project. We can also set timeout at test level or at element level. If we set timeout at test level, it will override the global timeout for that specific test. If we set timeout at element level, it will override the global timeout for that specific element.
// TIMEOUT: 3*1000, // this is test level timeout. It will override the global timeout for that specific test. If we set timeout at element level, it will override the global timeout for that specific element.

//navigationTimeout:30000 //.goto()
// actionTimeout: 3*1000, // this is action level timeout. It will override the global timeout for that specific action. If we set timeout at test level, it will override the global timeout for that specific test. If we set timeout at element level, it will override the global timeout for that specific element.

// expect:{

//     timeout: 3000
// }
// expectTimeout: 3*1000, // this is expect level timeout. It will override the global timeout for that specific expect. If we set timeout at test level, it will override the global timeout for that specific test. If we set timeout at element level, it will override the global timeout for that specific element.


test('handling timeouts at element level',async({page})=>{

    let url='http://uitestingplayground.com/ajax'
    const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
    await page.goto(url)
    await locator.click();

    //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
    const text=page.getByText('Data loaded with AJAX get request.');
    await text.waitFor({state:'visible',timeout:5000});// this is element level timeout. It will wait for the element to be visible for 5 seconds. If the element is not visible within 5 seconds, it will throw an error. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
    /*
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for getByText('Data loaded with AJAX get request.') to be visible


  14 |     //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
  15 |     const text=page.getByText('Data loaded with AJAX get request.');
> 16 |     await text.waitFor({state:'visible',timeout:5000});// this is element level timeout. It will wait for the element to be visible for 5 seconds. If the element is not visible within 5 seconds, it will throw an error. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
     |                ^
  17 | });
  18 |
  19 |
    at D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS\tests\testing\testtimeouts.spec.ts:16:16

    */
});




test('handling timeouts from config ',async({page})=>{

    //for this test we made below in main config timeout: 3* 1000, so this test will fail after 3 seconds because the element will be visible after 10 seconds. This is global level timeout. It will apply to all the tests in the project. We can also set timeout at test level or at element level. If we set timeout at test level, it will override the global timeout for that specific test. If we set timeout at element level, it will override the global timeout for that specific element.

    let url='http://uitestingplayground.com/ajax'
    const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
    await page.goto(url)
    await locator.click();

    //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
    const text=page.getByText('Data loaded with AJAX get request.');
    await text.click(); // this will throw error because the element is not visible yet. We can use the waitFor method to wait for the element to be visible before performing any action on it. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
    /*
est timeout of 3000ms exceeded.
Error: locator.click: Test timeout of 3000ms exceeded.
Call log:
  - waiting for getByText('Data loaded with AJAX get request.')


  47 |     //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
  48 |     const text=page.getByText('Data loaded with AJAX get request.');
> 49 |     await text.click(); // this will throw error because the element is not visible yet. We can use the waitFor method to wait for the element to be visible before performing any action on it. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
     |                ^
  50 |     /*
  51 | Error: locator.click: Test ended.
  52 | Call log:
    at D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS\tests\testing\testtimeouts.spec.ts:49:16

    */

});



test('waitforselector',async({page})=>{

    let url='http://uitestingplayground.com/ajax'
    const locator=page.getByRole('button',{name:'Button Triggering AJAX Request'});
    await page.goto(url)
    await locator.click();

    //so below comea fter 10 second on real webiste. atelement level we have given timeout of 5 sseconds
    const text=page.getByText('Data loaded with AJAX get request.');
     await page.waitForSelector('text=Data loaded with AJAX get request.',{state:'attached'});// this is element level timeout. It will wait for the element to be visible for 5 seconds. If the element is not visible within 5 seconds, it will throw an error. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.

     text.click(); // this will work because we have waited for the element to be attached to the DOM. We can use the waitForSelector method to wait for the element to be attached to the DOM before performing any action on it. This is useful when we want to wait for a specific element to be attached to the DOM before performing any action on it. We can also use this to wait for an element to be visible or hidden.
    /*



    */
});
