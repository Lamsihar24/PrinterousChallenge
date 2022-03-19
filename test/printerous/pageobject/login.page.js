/* eslint-env jquery */
const homepageUrl = process.env.BASE_URL;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Login Page
const fieldEmail = $('bg-r-10 form-control is-invalid');
const fieldPassword = $('border-right-0 bg-r-10 form-control is-invalid');
const submitButton = $('btn btn-primary btn-block');
const validatehomepage = $('navbar-brand');

// Account Page

const LoginPage = function loginpage() {
  this.navigateToLogin = async () => {
    await browser.url('https://orion.printerous.com/id/masuk');
    await fieldEmail.waitForExist({ timeout: 10000 });
    await fieldPassword.waitForExist({ timeout: 10000 });

    await browser.pause(5000);
  };

  this.setPassword = async () => {
    await fieldPassword.setValue(password);
  };

  this.setEmail = async () => {
    await fieldEmail.waitForExist({ timeout: 30000 });
    await fieldEmail.setValue(email);
  };

  this.submitData = async () => {
    await submitButton.click();
    await browser.pause(7000);
  };

  this.validateHomepage = async () => {
    await browser.switchWindow(homepageUrl);
    await expect(validatehomepage).toBeDisplayed();
  };

};

module.exports = new LoginPage();
