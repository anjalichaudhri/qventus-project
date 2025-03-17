const { test } = require('@playwright/test');
import LoginPage from '../pages/LoginPage';


// Test for login with invalid credentials
test('Login with bad username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  test.setTimeout(120000);
  await loginPage.goto();
  await loginPage.enterUsername('BadUser');
  await loginPage.clickNext();
  await loginPage.enterPassword('BadPassword');
  await loginPage.clickSignIn();
  await loginPage.assertErrorMessage('Unable to sign in');
});

// test('Login with valid credentials', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.enterUsername('');
//   await loginPage.enterPassword('');
//   await loginPage.clickSignIn();
//   await expect(page).toHaveURL();
// });
