# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testuseattestlevel.spec.ts >> name of the test
- Location: tests\testing\testuseattestlevel.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://www.google.com/", waiting until "load"

```

# Test source

```ts
  1 | 
  2 | import {test,expect} from "@playwright/test"
  3 | 
  4 | test('name of the test',({page})=>{
  5 | 
> 6 | page.goto("http://www.google.com")
    |      ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  7 | page.pause();
  8 | 
  9 | });
```