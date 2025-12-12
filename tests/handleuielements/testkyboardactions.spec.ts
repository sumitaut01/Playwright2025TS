/*
insertText
type
up
down
focus
*/

import { test,expect } from "@playwright/test";

test('keyboard actions test',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    const searchBox=page.locator('input[id="small-searchterms"]');
    await searchBox.focus();
    await page.keyboard.type('Apple MacBook Pro 13-inch');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+v');
    await page.keyboard.press('Enter');

    await page.keyboard.down('Shift');
    await page.keyboard.down('capslock');
    await page.keyboard.type('hello world');
    await page.keyboard.up('Shift');
    await page.keyboard.up('capslock'); 

});