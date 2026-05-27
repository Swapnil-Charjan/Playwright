// tests/regression/dashboard.spec.js
import { test, expect } from ('@playwright/test');
import DashboardPage from ('../../pages/dashboard');

test('Dashboard validation', async ({ page }) => {
  const dashboard = new DashboardPage(page);

  await dashboard.verifyDashboardLoaded();

  await expect(page.locator('#welcome')).toBeVisible();
});