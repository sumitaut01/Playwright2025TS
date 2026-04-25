
import { test, expect } from '@playwright/test';

test('extracting values', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForLoadState('networkidle');   
    


    const allCheck = await page.locator('.form-check').allTextContents();
    console.log(allCheck);



})



test('extracting input value and placeholder values', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForLoadState('networkidle');   
    


    const email=await page.getByRole('textbox', { name: 'Email' });
    const placeholder=await email.getAttribute('placeholder');
    expect(placeholder).toBe('Enter your email'); 
       console.log(placeholder);

    await email.fill('this is email');
    const value=await email.inputValue(); 
    console.log(value);

    


    

})