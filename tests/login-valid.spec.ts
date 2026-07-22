import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  // successfull login checkpoint
  await page.goto('https://practicetestautomation.com/logged-in-successfully/');
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await expect(page.getByRole('strong')).toContainText('Congratulations student. You successfully logged in!');
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.goto('https://practicetestautomation.com/practice-test-login/');
});