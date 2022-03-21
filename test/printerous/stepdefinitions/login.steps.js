import { Given, When, Then } from '@cucumber/cucumber';
import loginPrinterous from '../pageobject/login.page';

Given('User on Printerous login page', async () => {
    await loginPrinterous.navigateToLogin();
  });

When('User login with valid data into the text box', async () => {
    await loginPrinterous.setEmail();
    await loginPrinterous.setPassword();
    await loginPrinterous.submitData();
});

Then('User directed to Pinterous homepage', async () => {
  await loginPrinterous.validateHomepage();
});
