
import {test,expect} from '@playwright/test'

test('handling input',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.waitForLoadState('networkidle');

// await page.getByLabel('Male').check({force:true})
// await page.pause()
// const result=await expect(page.getByLabel('Male')).toBeChecked()

//   Error: locator.check: Error: strict mode violation: getByLabel('Male') resolved to 2 elements:
//         1) <input id="male" type="radio" value="male" name="gender" class="form-check-input"/> aka getByRole('radio', { name: 'Male', exact: true })
//         2) <input id="female" type="radio" name="gender" value="female" class="form-check-input"/> aka getByRole('radio', { name: 'Female' })


await page.getByText('Male', { exact: true }).check()
await expect(page.getByText('Male', { exact: true })).toBeChecked()

await page.getByLabel('Female',{exact:true}).check();
console.log(await page.getByLabel('Female',{exact:true}).isChecked());

expect(await page.getByLabel('Female',{exact:true})).toBeChecked();


await page.getByRole('radio', { name: 'Male', exact: true }).check()
await expect(page.getByRole('radio', { name: 'Male', exact: true })).toBeChecked()


await expect(await page.getByRole('radio', { name: 'Female', exact: true }).isChecked()).toBeFalsy();

await expect(await page.getByRole('radio', { name: 'Male', exact: true }).isChecked()).toBeTruthy();

});