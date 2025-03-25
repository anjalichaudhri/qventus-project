import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = 'input[name="username"]';
      this.passwordInput = 'input[name="password"]';
      this.signInButton = 'input[type="submit"]';
      this.errorMessage = 'xpath=//div[contains(@class, "okta-form-infobox-error")]//p';
      this.validUsername = "input[name='username']";
      this.validPassword = "input[name='password']";
      this.signInButtonValid = "button[type='submit']";
    }
  
    async goto() {
      await this.page.goto('https://qa-app-06.qventus.com');
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

    async enterValidUsername(username) {
      await this.page.fill(this.validUsername, username);
    }
  
    async enterValidPassword(password) {
      await this.page.fill(this.validPassword, password);
    }

    async clickLoginButton() {
      await this.page.click(this.signInButtonValid);
    }
  }
  
export default LoginPage;
  