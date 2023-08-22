import { test as setup } from '@playwright/test';
import { STORAGE_STATE } from './playwright-ui-storage.config';

setup('login', async ({ page }) => {
  await page.goto(`http://trello.com/login`);
  await page.locator('#user').fill(process.env.TRELLO_EMAIL!);
  await page.locator('#login').click();
  await page.locator('#password').fill(process.env.TRELLO_PASSWORD!);
  await page.locator('#login-submit').click();
  await page.waitForURL('https://trello.com/u/**');

  await page.context().storageState({ path: STORAGE_STATE });
});
