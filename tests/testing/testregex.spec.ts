

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

