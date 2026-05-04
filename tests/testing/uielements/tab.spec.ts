

// Promise.all is used to run multiple asynchronous operations in parallel and wait for all of them to 
// complete before proceeding. In the context of testing UI elements, it can be used to perform multiple actions 
// or assertions simultaneously, such as clicking on different tabs and verifying their content.

// Here's an example of how to use Promise.all in a test for handling multiple tabs:
import { test, expect } from '@playwright/test';

test('handling multiple tabs', async ({ page }) => {
    await page.goto('https://example.com'); 

    // Open multiple tabs
    const [tab1, tab2] = await Promise.all([
        page.waitForEvent('popup'), // Wait for the first tab to open
        page.waitForEvent('popup')  // Wait for the second tab to open
    ]);

    // Perform actions in the first tab
    await tab1.goto('https://example.com/tab1');
    const tab1Title = await tab1.title();
    expect(tab1Title).toBe('Tab 1 Title');
    // Perform actions in the second tab
    await tab2.goto('https://example.com/tab2');
    const tab2Title = await tab2.title();
    expect(tab2Title).toBe('Tab 2 Title');  

    // Close the tabs
    await Promise.all([
        tab1.close(),
        tab2.close()
    ]);
});

// In this example, we use Promise.all to wait for both tabs to open before proceeding with the actions
//  in each tab. We then perform actions and assertions in each tab independently, and finally, 
//  we close both tabs simultaneously using Promise.all again.


