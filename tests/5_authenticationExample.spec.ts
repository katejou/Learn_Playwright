import { test, expect } from '@playwright/test';

// remove .skip when play auth
// remove .fail when play auth
test.skip('authentication', async ({ page }) => {
  test.slow(); // Easy way to "triple" the default timeout
  test.fail(true,'this test is failing because I did not open the auth settings.');
  await page.goto('https://github.com/');
  await expect(page.getByRole('heading', { name: 'Latest changes' })).toBeVisible();
});