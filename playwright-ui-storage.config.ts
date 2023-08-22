import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

export default defineConfig({
  use: {
    baseURL: 'https://trello.com',
  },
  projects: [
    {
      name: 'setup',
      testMatch: 'login.setup.ts',
    },
    {
      name: 'Chrome',
      testMatch: 'tests/*.ui.spec.ts',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE,
      },
    },
    {
      name: 'Firefox',
      testMatch: 'tests/*.ui.spec.ts',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Firefox'],
        storageState: STORAGE_STATE,
      },
    },
    {
      name: 'WebKit',
      testMatch: 'tests/*.ui.spec.ts',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Safari'],
        storageState: STORAGE_STATE,
      },
    },
  ],
});
