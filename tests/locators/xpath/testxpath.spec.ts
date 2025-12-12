
import {test,expect,Locator} from "@playwright/test";

test("myfunction", async ({page}) => {
page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    const loc:Locator=page.locator("//a");//

 console.log(  await loc.count);

//loc.nth(i)
for(let i=0;i<await loc.count();i++){
    console.log(  await loc.nth(i).innerText());
    console.log(  await loc.nth(i).textContent());
}


console.log(  '------Separator');
console.log(  await loc.allTextContents);

});




//loc.first()
//loc.last()
//loc.filter()
//loc.locator() - chaining of locators
