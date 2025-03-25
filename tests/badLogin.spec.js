import { test, expect } from "@playwright/test";

import LoginPage from '../pages/LoginPage';

/*
URL == https://qa-app-06.qventus.com	
Login with hjayaswal+2000@qventus.com  
and T@c301124

Himanshu Jayaswal
19:22
7.	Locate Timefinder icon and click 
8.	Enter patient name – Test Auto
9.	Select “Charles” as surgeon
10.	Select 30 days duration from today
11.	Select 3rd Procedure 
12.	Select first service
13.	Click Search Icon
locate element and create

*/


// Test for login with invalid credentials
test('Login with bad username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  test.setTimeout(120000);
  await loginPage.goto();
  await loginPage.enterUsername(process.env.LOGIN_INVALID_EMAIL);
  await loginPage.clickNext();
  await loginPage.enterPassword(process.env.LOGIN_INVALID_PASSWORD);
  await loginPage.clickSignIn();
  await loginPage.assertErrorMessage('Unable to sign in');
});

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  test.setTimeout(120000);
  await loginPage.goto();
  await loginPage.enterValidUsername('hjayaswal+2000@qventus.com');
  await loginPage.enterValidPassword('T@c301124');
  await loginPage.clickLoginButton();
  await expect(page).toHaveURL("https://qa-app-06.qventus.com/");

await page.locator("text=TimeFinder").nth(0).click();
await page.waitForLoadState('load'); 

await expect(page.locator("#case_name")).toBeVisible();
await page.fill("#case_name", "automation");

//await page.locator("#procedures-38_procedure_name").click();
//await page.locator("//li[@data-surgeon-id='5']").click();

await page.locator("input[placeholder='Start date']").click();
await page.locator("button[aria-label='calendar-day-24']").first().click();
await page.locator("button[aria-label='calendar-day-24']").nth(1).click();

await page.locator("input[aria-label*='procedure']").press('enter');
await page.locator("li[data-procedure-id='3148']").click();

await page.locator("input[id='procedures-38_case_specialty']").click();
await page.locator("div[id='20']").click();

await page.locator("#duration").fill('20');

await page.locator("button[data-testid='slotsearchform-submit']").click();

// Add assertion to verify successful form submission
await expect(page.locator("selector-for-success-message")).toHaveText("Expected Success Message");

});
