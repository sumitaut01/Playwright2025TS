import { expect ,test,Locator} from "@playwright/test";




test('01_getbyRole',async({page})=>{
//role is defined on 
await page.goto('https://demowebshop.tricentis.com/')
await page.getByRole("textbox",{name:'Search store'}).fill('some data');


});


test('02_getbyAltText',async({page,
})=>{

await page.goto('https://demowebshop.tricentis.com/');
const logo:Locator=page.getByAltText('Tricentis Demo Web Shop');//alt text for image
//notice we imported Locator. await is not needed as its not a promise
await expect(logo).toBeVisible();
});


test('03_getByText',async({page})=>{

await page.goto('https://demowebshop.tricentis.com/');
const txtLoc:Locator=page.getByText('Welcome to our store');//<>xxx </
await expect(txtLoc).toBeVisible();
console.log(txtLoc.textContent);
//page.getByText('Welcome to our')  --works
page.getByText('WELCOME to our/i').click();

});


test('04_getBylabel',async({page})=>{

await page.goto('https://demowebshop.tricentis.com/login');
await page.getByLabel('Email:').fill('something');

console.log("hi");
});


test('05_getByPlaceholder',async({page})=>{

await page.goto('https://demowebshop.tricentis.com/login');
await page.getByPlaceholder('Email:').fill('something');

console.log("hi");
});


test('06_getByTitle',async({page})=>{

await page.goto('https://demowebshop.tricentis.com/login');
await page.getByTitle('Email:').fill('something');

console.log("hi");
});


//data-testid attribute need... its customiziable==data-id='something'
// we can chage testidattribute in config file to  some-id , now it will work with some-id='something'
test('07_getByTestId',async({page})=>{

await page.goto('https://demowebshop.tricentis.com/login');
await page.getByTestId('something').fill('something');

console.log("hi");
});