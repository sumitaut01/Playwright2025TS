

import { test, expect } from '@playwright/test';


// file level conrol of parallel or serial execution of tests
//even though by default tests run in parallel mode
// to run in serial mode use below line

//test.describe.configure({ mode: 'serial' });
test.describe.configure({ mode: 'parallel' });

test('Parallel Test 1', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  console.log('This is parallel test 1');
});

test('Parallel Test 2', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  console.log('This is parallel test 2');
});


test('Parallel Test 3', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  console.log('This is parallel test 3');
});

test('Parallel Test 4', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  console.log('This is parallel test 4');
});

test('Parallel Test 5', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  console.log('This is parallel test 5');
});


// fullyparalle set to true in config file to run tests in parallel mode

/*
Running 5 tests using 1 worker
[chromium] › tests\testing\parallel\test01parallel.spec.ts:13:5 › Parallel Test 1
This is parallel test 1
[chromium] › tests\testing\parallel\test01parallel.spec.ts:18:5 › Parallel Test 2
This is parallel test 2
[chromium] › tests\testing\parallel\test01parallel.spec.ts:24:5 › Parallel Test 3
This is parallel test 3
[chromium] › tests\testing\parallel\test01parallel.spec.ts:29:5 › Parallel Test 4
This is parallel test 4
[chromium] › tests\testing\parallel\test01parallel.spec.ts:34:5 › Parallel Test 5
This is parallel test 5
  5 passed (11.6s)

To open last HTML report run:

  npx playwright show-report

PS D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS> npx playwright show-report

  Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.
^C
PS D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS> npx playwright test "test01parallel.spec.ts" 

Running 5 tests using 4 workers
[chromium] › tests\testing\parallel\test01parallel.spec.ts:18:5 › Parallel Test 2
This is parallel test 2
[chromium] › tests\testing\parallel\test01parallel.spec.ts:24:5 › Parallel Test 3                                  
This is parallel test 3
[chromium] › tests\testing\parallel\test01parallel.spec.ts:13:5 › Parallel Test 1                                  
This is parallel test 1
[chromium] › tests\testing\parallel\test01parallel.spec.ts:29:5 › Parallel Test 4                                  
This is parallel test 4
[chromium] › tests\testing\parallel\test01parallel.spec.ts:34:5 › Parallel Test 5
This is parallel test 5
  5 passed (4.7s)

*/



/*
test.describe.configure({ mode: 'serial' });

Running 5 tests using 1 worker
[chromium] › tests\testing\parallel\test01parallel.spec.ts:13:5 › Parallel Test 1
This is parallel test 1
[chromium] › tests\testing\parallel\test01parallel.spec.ts:18:5 › Parallel Test 2
This is parallel test 2
[chromium] › tests\testing\parallel\test01parallel.spec.ts:24:5 › Parallel Test 3
This is parallel test 3
[chromium] › tests\testing\parallel\test01parallel.spec.ts:29:5 › Parallel Test 4
This is parallel test 4
[chromium] › tests\testing\parallel\test01parallel.spec.ts:34:5 › Parallel Test 5
This is parallel test 5
  5 passed (10.0s)
*/



/*

// fullyparalle set to false
// test.describe.configure({ mode: 'parallel' })


PS D:\SeleniumFrameWorks\GitHubSumitraut01\Playright2025TS> npx playwright test "test01parallel.spec.ts" 

Running 5 tests using 4 workers
[chromium] › tests\testing\parallel\test01parallel.spec.ts:13:5 › Parallel Test 1
This is parallel test 1
[chromium] › tests\testing\parallel\test01parallel.spec.ts:29:5 › Parallel Test 4                                  
This is parallel test 4
[chromium] › tests\testing\parallel\test01parallel.spec.ts:18:5 › Parallel Test 2                                  
This is parallel test 2
[chromium] › tests\testing\parallel\test01parallel.spec.ts:24:5 › Parallel Test 3
This is parallel test 3
[chromium] › tests\testing\parallel\test01parallel.spec.ts:34:5 › Parallel Test 5
This is parallel test 5
  5 passed (4.9s)

*/


