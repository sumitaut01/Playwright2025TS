import {test as base} from '@playwright/test'

type DataFixtures = {
  testUser: { username: string; password: string };
};

export const test = base.extend<DataFixtures>({
  testUser: async ({}, use) => {
    await use({ username: 'sumit', password: 'secret123' });
  },
});