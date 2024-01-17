import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';
 //const yourGithubUserName = '<fill in yours>';
 //const yourGithubPassword = '<fill in yours>';
const yourGithubUserName = process.env.NAME === undefined? '' : process.env.NAME
const yourGithubPassword = process.env.PASSWORD === undefined? '' : process.env.PASSWORD

// when you want to start the auth, remember to delete '.skip' of the next line.
setup('authenticate', async ({ page }) => {

  console.log(yourGithubUserName);
  console.log(yourGithubPassword);

  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').fill(yourGithubUserName);
  await page.getByLabel('Password').fill(yourGithubPassword);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://github.com/');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.getByRole('heading', { name: 'Home', exact: true })).toBeVisible();

  // End of authentication steps.
  await page.context().storageState({ path: authFile }); //<-- remember to save it up
});



