import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
// Read from default ".env" file.
dotenv.config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({

  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  // Give failing tests 3 retry attempts
  retries: 3,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',  //<- open: 'on-failure' is default
  // reporter: [ // when I set up like this:
  //   ['list', { printSteps: true }],
  //   ['json', {  outputFile: 'test-results.json' }],
  //   ['html', { open: 'always', outputFolder: 'my-report' }], //open: 'on-failure' is default
  //   // can even set it to upload somewhere by 'attachmentsBaseURL'
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'retain-on-failure', //there will be a 'test-results' file to contain all fail trying videos. 
  },

  /* Configure projects for major browsers */
  projects: [

    // Setup project (execute before all test)
    //{ name: 'setup', testMatch: /.*\.setup\.ts/ }, //<- release this when play auth 

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Use prepared auth state.
        //storageState: 'playwright/.auth/user.json',  //<- release this when play auth
      },
      //dependencies: ['setup'],  //<- release this when play auth
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        // Use prepared auth state.
        //storageState: 'playwright/.auth/user.json', //<- release this when play auth
      },
      //dependencies: ['setup'],  //<- release this when play auth

    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        // Use prepared auth state.
        //storageState: 'playwright/.auth/user.json',  //<- release this when play auth
      },
      //dependencies: ['setup'],  //<- release this when play auth
    },

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
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
