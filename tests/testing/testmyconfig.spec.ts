//npx playwright test  --config='playwrightmine.config.ts' tests\testing\testmyconfig.spec.ts --ui

import {test} from "@playwright/test"

test('',async({page})=>{

    await page.goto("http://www.rediff.com")

    const title=await page.title();


});

