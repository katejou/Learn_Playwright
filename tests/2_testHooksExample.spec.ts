import { test, expect } from '@playwright/test';

test.describe('navigation', () => { // Learn to use describe

  test.beforeEach(async ({ page }) => { // Learn to use before each
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });

  // .only can focus, and only run this test
  // .fixme and .skip can jump this test
  test('has title @sth', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
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




