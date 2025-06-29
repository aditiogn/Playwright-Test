import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'brave',
      use: {
        browserName: 'chromium',
        executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
        headless: false,
        slowMo: 2000,
        storageState: 'auth.json',
      },
    },
  ],
});

