import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qarestaurant.orderonthego.com/login.php');
  await page.getByRole('textbox', { name: 'Email Id' }).click();
  await page.getByRole('textbox', { name: 'Email Id' }).fill('test1863@maildrop.cc');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: ' Manage Staffs' }).click();
  await page.getByRole('link', { name: 'Add Staff' }).click();
  await page.getByTitle('Select Role').click();
  await page.getByRole('treeitem', { name: 'Operations Supervisor' }).click();
  await page.locator('#cname').click();
  await page.locator('#cname').fill('Staff 2');
  //await page.locator('#password').click();
  //await page.locator('#password').fill('');
  await page.locator('#loginpin').click();
  await page.locator('#loginpin').fill('2222');
  await page.locator('#reloginpin').click();
  await page.locator('#reloginpin').fill('2222');
  await page.locator('div:nth-child(4) > div > .form-group > .field > .btn-group > label').first().click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Test 1.8.6 (3)' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await page.close();
});