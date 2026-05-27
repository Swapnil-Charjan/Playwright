import { LoginPage } from "../../pages/loginPage.js";
import { DashboardPage } from "../../pages/dashboard.js";
import { test, expect } from "../../fixtures/baseTest.js";
import env from "../../config/env.js";

test.describe("Dashboard Tests", () => {
  let loginPage;
  let dashboard;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboard = new DashboardPage(page);

    await loginPage.login(env.username, env.password);
  });

  test("TC_LOGIN_001 - Valid Login", async () => {
    await expect(dashboard.verifyDashboardLoaded()).toBeVisible();
  });

  test("TC_DASH_003 - Select Client Cadent Gas", async () => {
    await dashboard.selectClient("Cadent Gas");
    await expect(dashboard.clientDropdown).toHaveValue("Cadent Gas");
  });
});
