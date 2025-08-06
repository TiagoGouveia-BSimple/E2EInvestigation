import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/');
});

test('Should cancel create person and display person list', async ({page}) => {
    // check if create form is displayed
    const listItemSize = await page.getByRole('listitem').count();
    await page.getByRole('button', { name: 'Create Person' }).click();
    await expect(page.locator('app-person-create')).toBeVisible();

    // check if person list is displayed after cancel
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page.locator('app-person-list')).toBeVisible();
    await expect(page.getByRole('listitem')).toHaveCount(listItemSize);
});