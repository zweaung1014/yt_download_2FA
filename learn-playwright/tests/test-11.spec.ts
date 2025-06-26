import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/watch?v=7wAPNShPycc');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('achardwarestreams.downloader@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('m8oJSFHX7grW');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Get a verification code from' }).click();
  await page.getByRole('textbox', { name: 'Enter code' }).fill('354718');
  await page.getByRole('textbox', { name: 'Enter code' }).press('Enter');
  await page.getByRole('button', { name: 'Account menu' }).click();
  await page.getByRole('link', { name: 'Switch account' }).click();
  await page.getByRole('option', { name: 'AC Hardware Streams @ac-' }).locator('#channel-title').click();
  await page.getByRole('button', { name: 'Got it' }).click();
  await page.getByRole('button', { name: 'Guide' }).click();
  await page.waitForTimeout(2000); // Wait 2 seconds
  const page1Promise = page.waitForEvent('popup');
  //await page.getByTitle('AC Hardware Streams').getByRole('link').click();
  await page.getByText('AC Hardware', { exact: false }).click();
  const page1 = await page1Promise;
  await page1.getByRole('cell', { name: 'Select 8Bot usage picking' }).locator('#checkbox-container').click();
  await page1.locator('ytcp-dropdown-trigger').filter({ hasText: 'More actions' }).getByRole('button').click();
  const page2Promise = page1.waitForEvent('popup');
  const downloadPromise = page1.waitForEvent('download');
  await page1.getByText('Download').click();
  const page2 = await page2Promise;
  const download = await downloadPromise;
  const filePath = `C:/Users/zwemi/Downloads/youtube_video_.mp4`;
  await download.saveAs(filePath);
  console.log(`Downloaded: ${filePath}`);
});