import { test, expect } from '@playwright/test';

//test.describe.configure({ mode: 'serial' }); // see 10_serialMode(retry+dependent).txt
test.describe.configure({ retries: 1 });

test('has title', async ({ page }) => { // if I don't do the serial mode, this will not be retry.
  await page.goto('https://playwright.dev/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev/');

  let expectName = 'X'; 

  if (testInfo.retry) { expectName = 'Get started' }; 

  // Click the get started link.
  await page.getByRole('link', { name: expectName }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
