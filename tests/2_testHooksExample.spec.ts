import { test, expect } from '@playwright/test';

test.describe('navigation', () => { // Learn to use describe

  test.beforeEach(async ({ page }) => { // Learn to use before each
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });

  test.describe.configure({ retries: 1 }); //< -- don't put it in individual test

  // .only can focus, and only run this test
  // .fixme and .skip can jump this test
  test('has title @sth', async ({ page }, testInfo) => {

    let pattern: RegExp = /X/; // it can not be string, because string is equal, and regexp is contain.

    if (testInfo.retry) { pattern = /Playwright/ }; //

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(pattern);
  });

  // if you unlock the next line, 
  //test.fail();
  test('get started link @sthElse', async ({ page }) => {

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});




