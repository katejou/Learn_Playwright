import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
//   await page.goto('https://github.com/login');
//   await page.getByLabel('Username or email address').fill('katejou02@gmail.com');
//   await page.getByLabel('Password').fill('qetq27155');
//   await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://github.com/login');
  await page.getByLabel('Username or email address').fill('<yours>');
  await page.getByLabel('Password').fill('<yours>>');
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
