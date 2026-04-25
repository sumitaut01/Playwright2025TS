
import { test, expect } from '@playwright/test';

test('extracting values', async ({ page }) => {
  

  const data=3;
  const name='Sumit';

  expect(data).toBe(3);
  expect(data).toBeGreaterThan(1);
  expect.soft(data).toBeLessThan(1);

expect(name).toBe('Sumit');
expect.soft(name).toBe('sumit');
expect.soft(name).toContain('mit');

})


