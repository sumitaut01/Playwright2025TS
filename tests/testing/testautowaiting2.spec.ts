

//npx playwright test --grep 'regexdata' --headed
import {test,expect} from '@playwright/test';
import { json } from 'zod';

test('this is name with regexdata',async({page},testinfo)=>{
await page.goto('http://www.rediff.com');
console.log(page.title);

console.log('this is warning message');
console.log(testinfo)
await page.pause();
});



//npx playwright test --grep 'regexdata' --headed



test('this is reqeest waiting',async({page},testinfo)=>{
await page.goto('http://www.rediff.com');
console.log(page.title);


await page.waitForResponse('https://www.rediff.com/');// this actually waits for this call to be made and 
// then it will continue with the next steps. This is useful when we want to wait for a specific API call 
// to be made before we continue with the next steps in our test. We can also use waitForRequest 
// if we want to wait for a specific API call to be made before we continue with the next steps in our test.
//  This is useful when we want to wait for a specific API call to be made before we continue with the next steps in our test. We can also use waitForLoadState if we want to wait for a specific load state to be reached before we continue with the next steps in our test. This is useful when we want to wait for a specific load state to be reached before we continue with the next steps in our test.
});





