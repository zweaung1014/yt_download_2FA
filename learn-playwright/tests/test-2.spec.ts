import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('achardwarestreams.downloader@gmail.com');
  await page.getByRole('textbox', { name: 'Email or phone' }).press('Enter');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('m8oJSFHX7grW');
  await page.getByRole('textbox', { name: 'Enter your password' }).press('Enter');
  await page.getByRole('button', { name: 'Not now' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.locator('#create-channel-button').getByRole('button', { name: 'Create' }).click();
  await page.locator('#start #guide-button').click();
  await page.locator('#scrim').click();
  await page.getByRole('button', { name: 'Account menu' }).click();
  await page.getByRole('link', { name: 'Switch account' }).click();
  await page.getByRole('link', { name: 'View all channels' }).click();
  await page.getByRole('link', { name: 'YouTube Home' }).click();
  await page.getByRole('button', { name: 'Account menu' }).click();
  await page.getByRole('button', { name: 'Guide' }).click();
  await page.locator('#scrim').click();
});