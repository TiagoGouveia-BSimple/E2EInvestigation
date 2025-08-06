import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/');
});

test('Should create a new person and display the details page successfully', async ({ page }) => {
  // act
  await page.getByRole('button', { name: 'Create Person' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Bruno');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('24');

  await page.getByRole('button', { name: 'Create' }).click();

  await expect(page.getByText('Test')).toBeVisible();
  await expect(page.getByText('Bruno')).toBeVisible();

  await page.getByRole('row', { name: 'Bruno Details' }).getByRole('button').click();

  // assert
  await expect(page.locator('app-person-details')).toBeVisible();
  await expect(page.getByText('Name: Bruno')).toBeVisible();
  await expect(page.getByText('Age: 24')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
});