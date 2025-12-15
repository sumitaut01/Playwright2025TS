import { test, expect, Locator } from "@playwright/test"
import { execPath } from "process";

test('tobeAssertions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const nameInput: Locator = page.getByPlaceholder('Enter Name');

    expect(await page.title()).toEqual('Automation Testing Practice');
    expect(await nameInput).toBeVisible();

    await nameInput.fill('sumit');


    //   const linkHome:Locator=page.getByRole('link', { name: 'Home' })//resolves to 3. strict mode error
    const linkHome: Locator = page.getByRole('link', { name: 'Home' }).nth(1);
    const homelink1 = await linkHome.innerText();
    const homelink2 = await linkHome.textContent();
    console.log(`innertext is ${homelink1} and textContent is ${homelink2}`);

    expect(homelink1).toBe('Home');
    expect(homelink2).toContain('ome');

    const text1 = await nameInput.inputValue();//input has inputvalue

    expect(text1).toBe('sumit');
    expect(text1).toContain('umit');

    console.log('prinnting inputValue');
    console.log(`innertext is ${text1}`);


    //radio button gender
    const radio_male: Locator = await page.locator('#male')
    expect(radio_male).toBeVisible();
    await radio_male.check();
    expect(radio_male).toBeChecked();
    expect(radio_male).toBeVisible()

    //checkbox
    const checkbox_sunday: Locator = await page.locator('#sunday')
    expect(checkbox_sunday).toBeVisible();
    await checkbox_sunday.click();


    //select
const country:Locator=page.locator('#country');



//header
const crosscol:Locator=page.locator('#crosscol');

const all=await crosscol.textContent();
console.log(all);


    await page.close();
});