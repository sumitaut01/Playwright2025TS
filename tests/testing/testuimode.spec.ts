//npx playwright test  tests\testing\testuimode.spec.ts --ui

import {expect, test} from "@playwright/test"

test('first ',async({page})=>{

    await page.goto("http://www.rediff.com")
    const title=await page.title();


    expect(title).toBe("Rediff.com: News | Rediffmail | Stock Quotes | Shopping");
    expect(title).toContain("Rediff");




});


test('Action timeout',async({page})=>{

    await page.goto("http://www.rediff.com")
    const loc=page.locator("a[title='Rediff Home']");

    //below is the action timeout
    await loc.click({timeout:5000});// this will wait for the element to be visible for 5 seconds. If the element is not visible within 5 seconds, it will throw an error. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
});



test('Action timeout with test.slow',async({page})=>{
    test.slow()// makes  timeout*3

    await page.goto("http://www.rediff.com")
    const loc=page.locator("a[title='Rediff Home']");

    //below is the action timeout
    await loc.click({timeout:5000});// this will wait for the element to be visible for 5 seconds. If the element is not visible within 5 seconds, it will throw an error. This is useful when we want to wait for a specific element to be visible before performing any action on it. We can also use this to wait for an element to be hidden or detached from the DOM.
});

