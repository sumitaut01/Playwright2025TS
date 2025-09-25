import { test, expect } from '../pages/myFixtures';

test('user can login and see dashboard', async ({ loginPage, dashboardPage }) => {
  await loginPage.login('sumit', 'secret123');

  const header = await dashboardPage.getHeaderText();
  expect(header).toBe('Dashboard');
});
