import {test,expect} from '@playwright/test'

test.describe('common page level assertions',()=>{
    test('toBeVisible assertion',async({page})=>{       

  await expect(page).toHaveURL('https://app.x4v.com/dashboard');
await expect(page).toHaveURL(/dashboard/);               // regex
await expect(page).toHaveURL(url => url.includes('dash')); // predicate
await expect(page).toHaveTitle('X4V Unite · Dashboard');

// Visual regression
await expect(page).toHaveScreenshot('dashboard.png');
await expect(page.getByTestId('chart')).toHaveScreenshot();

// Soft assertions — all collected, test continues after each
await expect.soft(page).toHaveURL(/dashboard/);
await expect.soft(page.getByRole('heading')).toHaveText('Dashboard');
await expect.soft(page.getByTestId('user-name')).toHaveText('Sumit');
// 👆 all 3 checked regardless of individual pass/fail

    });
