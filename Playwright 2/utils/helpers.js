// utils/helpers.js
async function waitAndClick(page, locator) {
  await page.waitForSelector(locator);
  await page.click(locator);
}

export { waitAndClick };