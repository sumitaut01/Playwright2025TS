// Destructuring = “Pick what you need from an object/array”

import { test } from '@playwright/test'

test('promise all + destructuring', async ({ page }) => {
  await page.goto('https://example.com')

  // Example 1: Multiple results from Promise.all
  const [response, download] = await Promise.all([
    page.waitForResponse('**/file'),
    page.waitForEvent('download'),
    page.click('#btn')   // trigger action
  ])

  console.log(response.status())
  console.log(download.suggestedFilename())

  // Example 2: Single value destructuring
  const [download2] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#downloadBtn')
  ])

  console.log(download2.suggestedFilename())
})


/*
Mapping is by position (order)
Array position	Promise	Variable
1st	page.waitForResponse()	response
2nd	page.waitForEvent('download')	download

So:

response  → result of waitForResponse
download  → result of waitForEvent('download')
*/