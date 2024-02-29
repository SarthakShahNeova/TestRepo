import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://voiceuat.dev.nextiva.xyz/Platform/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('sandeep.chouhan+testdev@lab.nextiva.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Cybage@1');
  await page.getByLabel('Toggle password visibility').click();
  await page.getByLabel('Toggle password visibility').click();
  await page.goto('https://voiceuat.dev.nextiva.xyz/apps/home/');
  await page.goto('https://voiceuat.dev.nextiva.xyz/apps/nextiva-connect/#/communications/all');
 // await page.getByTestId('CommunicationsUI-Compact-View-toggleView-button').click();
  // await page.getByText('Compact view').click();
  // await page.getByText('SCSandeep COutgoing call', { exact: true }).click();
  // await page.getByRole('link', { name: 'All communications' }).click();
});