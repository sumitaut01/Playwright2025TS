    import { test, expect } from '@playwright/test';
    
    test('post api test', async ({ request }) => {
      const postData = {
        title: 'foo'};
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', {                             

            data: postData,                                 
        });
      expect(response.status()).toBe(201);
      const responseBody = JSON.parse(await response.text());
      expect(responseBody.title).toBe('foo');
      expect(responseBody.id).toBe(101); 
    });     