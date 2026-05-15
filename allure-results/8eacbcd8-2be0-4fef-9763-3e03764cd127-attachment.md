# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertions\test02genericassertions.spec.ts >> generic assertions
- Location: tests\assertions\test02genericassertions.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "sumit"
Received: "Sumit Raut"
```

# Test source

```ts
  1  | 
  2  | import {test,expect}  from '@playwright/test'
  3  | 
  4  | test('generic assertions',()=>{
  5  | 
  6  | 
  7  | const name='Sumit Raut'
  8  | 
  9  | const age=38
  10 | const subjects:string[]=['it','cs','qa']
  11 | 
  12 | const isAlive:boolean=true;
  13 | 
  14 | 
> 15 | expect(name).toBe('sumit');
     |              ^ Error: expect(received).toBe(expected) // Object.is equality
  16 | 
  17 | expect(name).toContain('it')
  18 | 
  19 | expect.soft(name).toContain('/IT/')
  20 | 
  21 | expect(subjects).toBe(['it','cs','qa'])
  22 | 
  23 | expect(subjects).toContain('qa')
  24 | 
  25 | expect(isAlive).toBeTruthy();
  26 | 
  27 | expect(isAlive).not.toBeFalsy();
  28 | 
  29 | expect(isAlive).toBeInstanceOf(Boolean)
  30 | expect(age).toBeGreaterThan(1)
  31 | expect(age).toBeLessThan(39)
  32 | 
  33 | })
```