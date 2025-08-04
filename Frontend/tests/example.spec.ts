import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200');
});

test('should show person parent componenent', async ({page}) => {
    await expect(page.locator('app-person-parent')).toBeVisible();
});
