import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Download all videos', async ({ page }) => {
  // --- Login ---
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fstudio.youtube.com%252Fchannel%252FUCHBzCfYpGwoqygH9YNh9A6g%26feature%3Dredirect_login&hl=en&ifkv=AdBytiNNadzfOWCTN45WOWHgbYlkWEb2AelEhvSeqzmQi9GNB9wA3mD5Bq1V3eHU-QcZ1x03Xrh5ag&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1731896300%3A1750611560698780');
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('Achardwarestreams.downloader@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('m8oJSFHX7grW');
  await page.getByRole('button', { name: 'Next' }).click();

  // --- Navigate to Content page ---
  await page.getByRole('button', { name: 'Content' }).click();
  await page.waitForTimeout(5000);  // wait 5 seconds

  // --- Find all video rows ---
  const rows = await page.locator('tp-yt-paper-checkbox').elementHandles();
  console.log(`Found ${rows.length} videos.`);

  for (let i = 0; i < rows.length; i++) {
    // Deselect any previously selected checkboxes (optional safety)
    await page.keyboard.press('Escape');

    // Click this video's checkbox
    await rows[i].click();
    await page.waitForTimeout(500);

    // Open 'More actions' menu
    await page.locator('ytcp-dropdown-trigger').filter({ hasText: 'More actions' }).getByRole('button').click();
    await page.waitForTimeout(200);

    // Wait for download to begin
    const downloadPromise = page.waitForEvent('download');
    await page.getByText('Download').click();
    const download = await downloadPromise;

    // Save the file with a unique name
    const filePath = `C:/Users/zwemi/Downloads/youtube_video_${i + 1}.mp4`;
    await download.saveAs(filePath);
    console.log(`Downloaded: ${filePath}`);

    await page.waitForTimeout(1000); // slight pause between downloads
  }
});
