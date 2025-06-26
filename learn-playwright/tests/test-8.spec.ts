import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fstudio.youtube.com%252Fchannel%252FUCHBzCfYpGwoqygH9YNh9A6g%252Fvideos%252Fupload%253Ffilter%253D%25255B%25255D%2526sort%253D%25257B%252522columnType%252522%25253A%252522date%252522%25252C%252522sortOrder%252522%25253A%252522DESCENDING%252522%25257D%26feature%3Dredirect_login&hl=en&ifkv=AdBytiMMD62f5ryHyo6-nGLth2RWtdsQHhsFci3w2XmltEtUhBbOxwkBGacQOi7pL6jN1oDfloqYDA&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-448994837%3A1750725487682405');
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('achardwarestreams.downloader@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('m8oJSFHX7grW');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Get a verification code from' }).click();
  
  const totpCode = process.env.TOTP_CODE;
  if (!totpCode) {
    throw new Error("Missing TOTP_CODE from environment");
  }

  await page.getByRole('textbox', { name: 'Enter code' }).fill(totpCode);
  await page.getByRole('button', { name: 'Next' }).click();
  console.log("✅ Successfully signed in.");
});