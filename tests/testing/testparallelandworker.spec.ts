//workers are related to 1/2 number of cores, so we can test with 2 workers and 4 cores

//fully paralle by default true. Means it will try touse multi workers to run the tests in parallel. If set to false, it will run the tests sequentially in a single worker. This can be useful for debugging or when you have tests that are not compatible with parallel execution.

//worker is the number of workers to use for running the tests in parallel. By default, it is set to 1, which means that the tests will run sequentially in a single worker. If you set it to a higher number, it will use that many workers to run the tests in parallel. For example, if you set it to 4, it will use 4 workers to run the tests in parallel. This can speed up the test execution time, especially if you have a large number of tests and a multi-core CPU.


//at file level we can set the number of workers to use for that file. This allows us to control the level of parallelism for specific test files, which can be useful if some tests are more resource-intensive or if we want to isolate certain tests from running in parallel with others. By setting the worker count at the file level, we can optimize the test execution based on the specific needs of each test file.
//we can set to serial

import { test } from '@playwright/test';

test.describe('Parallel and Worker Tests', () => {
  test('Test 1', async () => {
    // Test code for Test 1
    console.log('Running Test 1');
  });
