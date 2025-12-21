test('02', async ({page})=>{

page.goto("http://www.rediff.com")

const dataentered=await page.locator('').fill('sumit').inputValue();//

const textbetweentags=await page.locator('').textContent();// text between tags

const innertext=await page.locator('').innerText();// text between tags ??

})