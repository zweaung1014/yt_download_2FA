import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/watch?v=7wAPNShPycc');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('achardwarestreams.downloader@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('m8oJSFHX7grW');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Get a verification code from' }).click();
  await page.getByRole('textbox', { name: 'Enter code' }).fill('562159');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Account menu' }).click();
  await page.getByRole('link', { name: 'Switch account' }).click();
  await page.getByRole('option', { name: 'AC Hardware Streams @ac-' }).locator('#img').click();
  await page.getByRole('button', { name: 'Got it' }).click();
  await page.getByRole('button', { name: 'Account menu' }).click();
  await page.getByRole('link', { name: 'YouTube Studio' }).click();
  await page.getByRole('button', { name: 'Content' }).click();
  await page.getByRole('link', { name: '8Bot usage picking something' }).click();
  await page.getByRole('button', { name: 'Options' }).click();
  await page.getByRole('link', { name: 'Download' }).click();
});