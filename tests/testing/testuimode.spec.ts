//npx playwright test  tests\testing\testuimode.spec.ts --ui

import {test} from "@playwright/test"

test('',async({page})=>{

    await page.goto("http://www.rediff.com")

    const title=await page.title();


});

