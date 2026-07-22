import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {  
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('incorrectusername');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('incorrectpassword');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await expect(page.locator('#error')).toContainText('Your username is invalid!');
}); 

// test passed failed login with incorrect credentials for user


