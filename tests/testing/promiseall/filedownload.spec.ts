
import {test, expect} from '@playwright/test'
import fs from 'fs'
import path from 'path/win32'

test('promise all + file download', async ({ page }) => {
  await page.goto('https://www.selenium.dev/downloads/')    

    // Wait for both the response and the download to complete  
    const [response, download] = await Promise.all([    
        page.waitForResponse('**/selenium-java*.zip'),  // Wait for the specific file response   
        page.waitForEvent('download'),    // Wait for the download event to occur
        page.click('xpath=/html/body/div/main/div[3]/div[3]/div/div[2]/p[2]/a')        // Trigger the download action
    ])


    const pathname=path.join(__dirname, 'downloads', download.suggestedFilename())// Construct the file path for saving the downloaded file

    if(!fs.existsSync(pathname)){ // Check if the file already exists
        fs.mkdirSync(path.dirname(pathname), { recursive: true }) // Create the directory if it doesn't exist
    }


    await download.saveAs(pathname) // Save the downloaded file to the specified path

    // Verify the file was downloaded successfully
    expect(fs.existsSync(pathname)).toBeTruthy() // Check if the file exists at the specified path
})