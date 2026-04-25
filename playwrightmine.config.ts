import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
 import path from 'path';


  export default defineConfig({   //original code without extra variable in config
    globalSetup: "./global-setup.ts",
	  globalTeardown: './global-teardown.ts',
	
  
    testDir: './tests',

    // grep: /@smoke/,  indicates that run only smoke tests
    // grepInvert: /@smoke/,  indicates that run all except smoke tests
    
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
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

    trace: 'on-first-retry',
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      //fullyParallel: true,    this means tests will run in parallel mode for chromium only
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      
    }],
    
   
});
