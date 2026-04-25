

//npx playwright test --grep 'regexdata' --headed
import { test } from '../testzzmyextravariableinconfig';

test('this is name with regexdata',async({page,myExtraVariable},testinfo
)=>{
console.log(myExtraVariable);
    
await page.goto('http://www.rediff.com');
console.log(page.title);

console.log('this is warning message');
console.log(testinfo)
await page.pause();
});

