import { test, expect } from '@playwright/test';

// remove .skip when play auth
test('authentication', async ({ page }) => {
  test.slow();
  test.fail(true,'this test is failing because I did not open the auth settings.');
  await page.goto('https://github.com/');
  await expect(page.getByRole('heading', { name: 'Latest changes' })).toBeVisible();
});