// login.setup.ts
import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false }); // bisa lihat proses login
  const page = await browser.newPage();

  // Ganti dengan URL login aplikasi kamu
  await page.goto('https://brifine-uat.dev.bri.co.id/auth/login');

  // Isi email & password - sesuaikan dengan field name aplikasi kamu
  await page.fill('#pernr', 'isiqa03');
  await page.fill('#password', 'P@ssw0rd');

  // Klik tombol login
  await page.click('button[type="button"]');

  // Tunggu redirect ke dashboard atau halaman tujuan setelah login
  await page.waitForURL('https://brifine-uat.dev.bri.co.id/apps/dashboard');
  await page.click('text=Kepesertaan dan Transaksi Finansial')

  // Simpan session login (cookie + localStorage) ke auth.json
  await page.context().storageState({ path: 'auth.json' });

  console.log('✅ auth.json berhasil dibuat!');
  await browser.close();
})();
