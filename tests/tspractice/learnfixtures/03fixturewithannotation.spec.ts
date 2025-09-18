

import { test, expect } from '@playwright/test';

test('basic test', {
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, async ({ page }) => {
  await page.goto('https://playwright.dev/');

});

// Test annotations are displayed in the test report, and are available to a custom reporter via TestCase.annotations property.

// You can also add annotations during runtime by manipulating testInfo.annotations.


