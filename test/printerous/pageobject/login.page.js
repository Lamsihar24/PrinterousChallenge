/* eslint-env jquery */
const homepageUrl = process.env.BASE_URL;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Login Page
const fieldEmail = $('//*[@id="root"]/section/div[2]/div[2]/div[2]/div[1]/div/form/div[1]/div/input');
const fieldPassword = $('//*[@id="root"]/section/div[2]/div[2]/div[2]/div[1]/div/form/div[2]/div/input');
const submitButton = $('//*[@id="root"]/section/div[2]/div[2]/div[2]/div[1]/div/form/button');
const validatehomepage = $('.navbar-brand');
const validatehomepage2 = $('//*[@id="root"]/section[1]/div/div/div/div/div/a/img');

const LoginPage = function loginpage() {
  this.navigateToLogin = async () => {
    await browser.url('https://orion.printerous.com/id/masuk');
    await fieldEmail.waitForExist({ timeout: 15000 });
    await fieldPassword.waitForExist({ timeout: 15000 });

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
    await expect(validatehomepage2).toBeDisplayed();
  };
};

module.exports = new LoginPage();
