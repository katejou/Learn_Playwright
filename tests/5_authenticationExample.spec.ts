import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await expect(page.getByRole('heading', { name: 'Latest changes' })).toBeVisible();
});