import { defineConfig, devices } from '@playwright/test';

import type {myConfig } from './tests/testzzmyextravariableinconfig.ts';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 import dotenv from 'dotenv';
 import path from 'path';
 //dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
//export default defineConfig<myConfig>({
  export default defineConfig({   //original code without extra variable in config

   
    globalSetup: "./global-setup.ts",
	  globalTeardown: './global-teardown.ts',
	
  //testDir: './tests/testing',
    testDir: './tests',

    // grep: /@smoke/,  indicates that run only smoke tests
    // grepInvert: /@smoke/,  indicates that run all except smoke tests
    
  /* Maximum time one test can run for. */
  timeout: 30* 1000,
  //  grep: /@smoke/,
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['allure-playwright'],
    [ 'html',{open:'always'}] ,
    ['list'] ,['line'] ,
    ['json',{outputfile:'result.json'}],
     ['junit',{outoutputfileputfile:'result.json'}],
     ['dot']],


//outputfolder is also there         ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    myExtraVariable: 'This is my extra variable in config',
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

     //baseURL: process.env.BASE_URL,   // using dotenv

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false,

    //actionTimeout: 3*1000, // this is action level timeout. It will override the global timeout for that specific action. If we set timeout at test level, it will override the global timeout for that specific test. If we set timeout at element level, it will override the global timeout for that specific element.
    // navigationTimeout:30000 //.goto()
    // expect:{   
    //   timeout: 3000
    // }
    // expectTimeout: 3*1000, // this is expect level timeout. It will override the global timeout for that specific expect. If we set timeout at test level, it will override the global timeout for that specific test. If we set timeout at element level, it will override the global timeout for that specific element.


  },

  /* Configure projects for major browsers */
  projects: [
    {
      //fullyParallel: true,    this means tests will run in parallel mode for chromium only
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['dependencychromium'],  // this will run the dependencychromium project before running the chromium project. This is useful when we have some setup or teardown steps that need to be run before or after the tests in the chromium project. For example, we can use the dependencychromium project to set up a test environment or to perform some actions that are required for the tests in the chromium project. By defining dependencies between projects, we can ensure that the necessary setup and teardown steps are executed in the correct order, which can help to improve the reliability and maintainability of our test suite.
    }
    ,
    {
      
      name: 'api-tests',
        testDir: 'tests/testing/apitesting',
      use: {
      baseURL: 'https://billpay-api.gauravkhurana-practice-api.workers.dev',
    
        }
      
    },

     {
      //fullyParallel: true,    this means tests will run in parallel mode for chromium only
      name: 'dependencychromium',
      testMatch: 'tests/testing/testdependencyspec.spec.ts',
    }
    // ,

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    ,{
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
