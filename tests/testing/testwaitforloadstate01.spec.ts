import {expect,test} from '@playwright/test'

test('01', async ({page})=>{

page.goto("http://www.rediff.com")

page.waitForLoadState('networkidle'); // all network calls done// discouraged as per documents


page.waitForLoadState('domcontentloaded'); // domcontentloaded


page.waitForLoadState('load'); // load event fired

})



test('02', async ({page})=>{

page.goto("http://www.rediff.com")

page.locator('').first().waitFor();

page.locator('').last().waitFor();

})