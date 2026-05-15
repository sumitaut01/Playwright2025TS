



import {test} from "\dataficture.ts"

// Usage
test('login with test user', async ({ page, testUser }) => {
  await page.goto('/login');
  await page.fill('#username', testUser.username);
  await page.fill('#password', testUser.password);
  await page.click('#loginBtn');
});