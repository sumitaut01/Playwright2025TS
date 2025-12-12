
// only
//fixme
//skip
//slow
//fail

import { test, expect} from "@playwright/test";

test('Normal Test 1',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/');
    console.log('This is annotations test');
});

test.skip('Annotations test 2 skip at header level',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    console.log('This is annotations test 2');
});


test.skip('Annotations test 2 skip inside test  ',async({page})=>{

    // like we can check some condition here and based on that we can skip the test
    // if chrome browser then skip the test 
    test.skip( process.env.BROWSER ==='chrome','Skipping test on chrome browser');
    await page.goto('https://demo.nopcommerce.com/');
    console.log('This is annotations test 2');
});


test.only('Annotations test 3 only',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    console.log('This is annotations test 3');
});
test.fixme('Annotations test 4 fix me',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    console.log('This is annotations test 4');
    //fix me also skips the test but marks it as needing attention
});     

test('Annotations test 5 with slow',async({page})=>{
    test.slow();  // marks the test as slow and increases the timeout   
    await page.goto('https://demo.nopcommerce.com/');
    console.log('This is annotations test 5');
});

test.fail('Annotations test 6 fail',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    console.log('This is annotations test 6');
}); 