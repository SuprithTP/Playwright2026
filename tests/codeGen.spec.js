import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testclient5-oversight.qa.lokavant.com/#platform/overview/STUDY09');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'name@host.com' }).click();
  await page.getByRole('textbox', { name: 'name@host.com' }).fill('rishwan.k@lokavant.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test#123');
  await page.getByRole('button', { name: 'submit' }).click();
  await page.getByRole('cell', { name: 'Workload Item' }).click();
  await page.getByTestId('userMenu').click();
  await page.getByText('Open Trial Intelligence').click();
  await page.getByRole('link', { name: 'Study Planning' }).click();
});