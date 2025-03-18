import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = 'input[name="username"]';
      this.passwordInput = 'input[name="password"]';
      this.signInButton = 'input[type="submit"]';
      this.errorMessage = 'xpath=//div[contains(@class, "okta-form-infobox-error")]//p';
    }
  
    async goto() {
      await this.page.goto('https://qa-app-01.qventus.com');
    }
  
    async enterUsername(username) {
      await this.page.fill(this.usernameInput, username);
    }
  
    async enterPassword(password) {
      await this.page.fill(this.passwordInput, password);
    }
  
    async clickSignIn() {
      await this.page.click(this.signInButton);
    }

    async clickNext() {
        await this.page.click(this.signInButton);
    }
  
    async assertErrorMessage(expectedText) {
      const errorMessageLocator = await this.page.locator(this.errorMessage);
      await expect(errorMessageLocator).toContainText(expectedText);
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.clickNext();
        await this.enterPassword(password);
        await this.clickSignIn();
    }
  }
  
export default LoginPage;
  