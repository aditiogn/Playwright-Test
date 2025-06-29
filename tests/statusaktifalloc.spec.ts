import { test, expect } from '@playwright/test';

test('Status Aktif Allocated', async ({ page }) => {
  await page.goto('https://brifine-uat.dev.bri.co.id/kepesertaan/apps/dashboard');
  await page.click('#cif_account');
  await page.getByRole('menuitem', { name: 'Account DPLK ' }).click();
  await page.getByRole('menuitem', { name: 'List Account Kerjasama Allocated' }).click();
  await page.locator('.async-select-widget.z-auto > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').click();
  await page.getByRole('option', { name: 'A - Aktif' }).click();
  await page.getByRole('button', { name: 'Tampilkan' }).click();
  await page.waitForSelector('tr:nth-child(2) > td:nth-child(10)');
  await expect(page.locator('tr:nth-child(2) > td:nth-child(10)')).toHaveText('Aktif');
  await page.pause();
})