import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/');
});

test('should create person and go to list page', async ({ page }) =>{
  await page.getByRole('button', { name: 'Create Person' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Bruno');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('24');

  await page.getByRole('button', { name: 'Create' }).click();

  await expect(page.getByText('Bruno')).toBeVisible();
});

test('should create a new person and display the details page successfully', async ({ page }) => {
  // act
  await page.getByRole('button', { name: 'Create Person' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Bruno');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('24');

  await page.getByRole('button', { name: 'Create' }).click();

  await expect(page.getByText('Bruno')).toBeVisible();

  await page.getByRole('row', { name: 'Bruno Details' }).getByRole('button').click();

  // assert
  await expect(page.locator('app-person-details')).toBeVisible();
  await expect(page.getByText('Name: Bruno')).toBeVisible();
  await expect(page.getByText('Age: 24')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
});

test('should not create person if age is under 0', async ({page}) => {
  await page.getByRole('button', {name: 'Create Person'}).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Bruno');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('-1');

  await page.getByRole('button', { name: 'Create' }).click();

  // should not create person, so the content shown is still the same
  await expect(page.locator('app-person-create')).toBeVisible();
});

test('should not create person if age is over 120', async ({page}) => {
  await page.getByRole('button', {name: 'Create Person'}).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Bruno');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('121');

  await page.getByRole('button', { name: 'Create' }).click();

  // should not create person, so the content shown is still the same
  await expect(page.locator('app-person-create')).toBeVisible();
});