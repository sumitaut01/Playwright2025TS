import { test, expect } from '@playwright/test';

test('CRUD Operations with Playwright', async ({ request }) => {
  const baseUrl = '[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)';
  // 

  // 1. GET - Retrieve data
  const getResponse = await request.get(`${baseUrl}/1`);
  expect(getResponse.ok()).toBeTruthy();
  const getBody = await getResponse.json();
  console.log('GET Result:', getBody.title);

  // 2. POST - Create data
  const postResponse = await request.post(baseUrl, {
    data: {
      title: 'Learning Playwright',
      body: 'API testing is powerful',
      userId: 1,
    }
  });
  expect(postResponse.status()).toBe(201);

  // 3. PUT - Update (Full Replace)
  const putResponse = await request.put(`${baseUrl}/1`, {
    data: { title: 'Updated Title' }
  });
  expect(putResponse.status()).toBe(200);

  // 4. PATCH - Update (Partial)
  const patchResponse = await request.patch(`${baseUrl}/1`, {
    data: { title: 'Partially Updated' }
  });
  expect(patchResponse.status()).toBe(200);

  // 5. DELETE - Remove data
  const deleteResponse = await request.delete(`${baseUrl}/1`);
  expect(deleteResponse.status()).toBe(200);
});
