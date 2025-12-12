
import { test, expect, Page} from "@playwright/test";

let page:Page;

//below hooks will run once for all tests in this file
test.beforeAll(async({browser})=>{
    page=await browser.newPage();
    await page.goto('https://demo.nopcommerce.com/');
});


test('Tagging hooks test 1',async()=>{
    console.log('This is tagging hooks test 1');
});


test('Tagging hooks test 2',async()=>{
console.log('This is tagging hooks test 2');
});

// below will run after each test in this file
test.afterAll(async()=>{
    await page.close();
});



test.beforeEach(async()=>{
    console.log('This will run before each test in the file');
});

test.afterEach(async()=>{
    console.log('This will run after each test in the file');
});


// we can also tag hooks with test.only or test.skip    
// test.only('Tagging hooks test 3',async()=>{
//     console.log('This is tagging hooks test 3');
// }); 

// test.skip('Tagging hooks test 4',async()=>{
//     console.log('This is tagging hooks test 4');
// });

// test('Tagging hooks test 5',async()=>{
//     console.log('This is tagging hooks test 5');
// });









