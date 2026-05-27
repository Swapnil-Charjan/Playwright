class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeader = page.getByRole("heading", { name: "Dashboard" });
    this.clientDropdown = page.getByRole("combobox", { name: /client/i });
  }

  verifyDashboardLoaded() {
    return this.dashboardHeader;
  }

  async selectClient(clientName) {
    await this.clientDropdown.click();
    await this.clientDropdown.fill(clientName);
    const option = this.page.getByRole("option", { name: clientName });
    await option.waitFor();
    await option.click();
  }
}

export { DashboardPage };
