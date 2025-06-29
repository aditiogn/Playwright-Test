import { test, expect } from '@playwright/test';

test('Reporting_Individu_On Demand_Iuran', async ({ page }) => {
  await page.goto('https://brifine-uat.dev.bri.co.id/kepesertaan/apps/dashboard');
  await page.pause();
})