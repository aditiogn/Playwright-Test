import { test, expect } from '@playwright/test';

test('Direct to dashboard', async ({ page }) => {
  await page.goto('https://brifine-uat.dev.bri.co.id/auth/login');
  await expect(page.getByText('Modul Kepesertaan')).toBeVisible({timeout: 10000});
});
