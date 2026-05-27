import { test as base, expect } from '@playwright/test';
import env from '../config/env.js';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto(env.baseURL);
    await use(page);
  }
});

export { expect };