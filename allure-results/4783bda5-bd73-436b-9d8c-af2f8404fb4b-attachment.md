# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\apitesting\01getcallheaderbody.spec.ts >> getcallwithheaders
- Location: tests\testing\apitesting\01getcallheaderbody.spec.ts:9:5

# Error details

```
TypeError: apiRequestContext.get: Invalid URL
```

# Test source

```ts
  1  | 
  2  | 
  3  | import {test,expect} from '@playwright/test'
  4  | import { request } from 'http'
  5  | 
  6  | 
  7  | 
  8  | //test.use({ baseURL: 'https://billpay-api.gauravkhurana-practice-api.workers.dev' });  // this will set the baseURL for all the tests in this file, we can also set it at the project level in the playwright.config.ts file. If we set it at both the levels then the one at the test level will override the one at the project level. This allows us to have a common baseURL for all tests while still being able to customize it for specific test files when necessary.
  9  | test('getcallwithheaders', {tag:[] ,annotation:[ ]}, async ({request})=>{
  10 | 
  11 | 
> 12 | const res=await request.get('/health');
     |                         ^ TypeError: apiRequestContext.get: Invalid URL
  13 | const resx=await res.json();
  14 | 
  15 | const rcode=res.status()
  16 | console.log(rcode);
  17 | 
  18 | const headers=res.headers()
  19 | console.log(typeof(headers));
  20 | console.log('----separator-----')
  21 | console.log(headers['content-type']);
  22 | 
  23 | 
  24 | 
  25 | 
  26 | })
  27 | 
  28 | 
  29 | 
  30 | 
```