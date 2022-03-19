/* eslint-env jquery */
const homepageUrl = process.env.BASE_URL;

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Login Page
const modalKemasan = $('css-1ftjvpy');
const fieldPassword = $('border-right-0 bg-r-10 form-control is-invalid');
const submitButton = $('btn btn-primary btn-block');
const validatehomepage = $('navbar-brand');
const valKemasan = $('//span[text()="Menampilkan 1 - 16 dari total 45 untuk"]');

// Account Page

const LoginPage = function loginpage() {
  this.validateKemasanLogin = async () => {
    await browser.switchWindow(`${process.env.KEMASAN_URL}`);
    await expect(modalKemasan).toBeDisplayed();
    await expect(valKemasan).toBeDisplayed();
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
