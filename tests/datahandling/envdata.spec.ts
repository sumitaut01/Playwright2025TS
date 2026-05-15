

import {test, expect } from "@playwright/test";


test('using env variable',()=>{

console.log( "process.env.CI=2 npx playwright test")

})