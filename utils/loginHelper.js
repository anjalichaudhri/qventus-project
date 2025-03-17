const { chromium } = require('@playwright/test');
import LoginPage from '../pages/LoginPage';

async function setupLoginPage() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new LoginPage(page);
  return { browser, context, page, loginPage };
}

module.exports = setupLoginPage;
