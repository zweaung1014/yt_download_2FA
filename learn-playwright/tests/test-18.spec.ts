import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/watch?v=7wAPNShPycc');

  // Extract the video title from the page
  const rawTitle = await page.title();
  const videoTitle = rawTitle.replace(' - YouTube', '').trim();
  console.log(`Video Title: ${videoTitle}`);

  await page.getByLabel('YouTube Video Player').click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('achardwarestreams.downloader@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('m8oJSFHX7grW');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Get a verification code from' }).click();
  
  // Get verification code from verify_pyotp.py
  const totpCode = process.env.TOTP_CODE;
  if (!totpCode) {
    throw new Error("Missing TOTP_CODE from environment");
  }


  await page.getByRole('textbox', { name: 'Enter code' }).fill(totpCode);
  await page.getByRole('button', { name: 'Next' }).click();
  console.log("Successfully signed in.");

  // After signing in, go to your page
  await page.getByRole('button', { name: 'Account menu' }).click();
  await page.getByRole('link', { name: 'Switch account' }).click();
  await page.getByRole('option', { name: 'AC Hardware Streams @ac-' }).locator('#img').click();
  await page.getByRole('button', { name: 'Got it' }).click();
  await page.getByRole('button', { name: 'Account menu' }).click();
  await page.getByRole('link', { name: 'YouTube Studio' }).click();
  await page.getByRole('button', { name: 'Content' }).click();
  await page.getByRole('link', { name: videoTitle }).click();
  await page.getByRole('button', { name: 'Options' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await downloadPromise;
  const filePath = `C:/Users/zwemi/Downloads/youtube_video_${videoTitle}.mp4`;
  await download.saveAs(filePath);
  console.log(`Downloaded: ${filePath}`);
});