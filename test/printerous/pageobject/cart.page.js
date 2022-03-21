const linkk = process.env.LINKTEMPALTE_URL;
const kemasanURL = process.env.KEMASAN_URL;
const prodURL = process.env.PROD_URL;
const homepageUrl = process.env.BASE_URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const fieldEmail = $('//*[@id="root"]/section/div[2]/div[2]/div[2]/div[1]/div/form/div[1]/div/input');
const fieldPassword = $('//*[@id="root"]/section/div[2]/div[2]/div[2]/div[1]/div/form/div[2]/div/input');
const submitButton = $('//*[@id="root"]/section/div[2]/div[2]/div[2]/div[1]/div/form/button');
const validatehomepage = $('.navbar-brand');
const validatehomepage2 = $('//*[@id="root"]/section[1]/div/div/div/div/div/a/img');

const modalKemasan = $('//*[@id="root"]/section/div/div[1]/div/div/div');
const kemasandanLabel = $('//*[@id="root"]/nav/div[3]/a[1]');
const valKemasan = $('//span[text()="Menampilkan 1 - 16 dari total 45 untuk"]');
const selectProd = $('//*[@id="root"]/section/div/div[2]/div[2]/div[2]/div[1]/div/div/div/div[3]/div[3]');
const valProd = $('//*[@id="root"]/section/div[1]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[1]/div/div/div[1]/label/div/div');
const valProd2 = $('//h1[contains(text(), "Label Stiker Kemasan Satuan (Die Cut)")]');
const specProd1 = $('//*[@id="root"]/section/div[1]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[1]/div[1]/div/div/div[1]/label/div/div/div');
const specProd2 = $('//*[@id="root"]/section/div[1]/div[2]/div[2]/div[2]/div[3]/div[2]/div[1]/div/div/div[1]/label/div/div/div');
const specProd3 = $('//*[@id="root"]/section/div[1]/div[2]/div[2]/div[2]/div[4]/div[2]/div/div[3]/div[2]/div/div/div/label/div');
const specQuantity = $('//*[@id="table-pricing"]/tbody/tr[2]/td[2]');
const tempalte = $('//*[@id="root"]/section/div[1]/div[2]/div[2]/div[2]/div[9]/div[2]/div[3]/label/div/div[2]/div/div[2]');
const linktempalte = $('//*[@id="root"]/section/div[1]/div[2]/div[2]/div[2]/div[9]/div[2]/div[4]/div/div/div[1]/div/button[2]');
const inputLink = $('//*[@id="root"]/section/div[1]/div[2]/div[2]/div[2]/div[9]/div[2]/div[4]/div/div/div[2]/div/div/input');
const addCart = $('//*[@id="pdp-cta"]');
const lihatKeranjang = $('/html/body/div[9]/div/div/div/div[4]/a[2]/button');
const valModal = $('/html/body/div[9]/div/div/div/div[2]/div[2]/div[1]');
const cart = $('//*[@id="root"]/section/div[2]/h1');
const skipTutorr = $('//*[@id="react-joyride-step-0"]/div/div/div/div[3]/div[1]/button');


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
    await validatehomepage.waitForExist({ timeout: 10000 });
    await expect(validatehomepage).toBeDisplayed();
    await expect(validatehomepage2).toBeDisplayed();
  };

  this.clickKemasandanLogin = async () => {
    await kemasandanLabel.click();
  };

  this.validateKemasan = async () => {
    await browser.switchWindow(kemasanURL);
    await valKemasan.waitForExist({ timeout: 20000 });
    await expect(modalKemasan).toBeDisplayed();
    await expect(valKemasan).toBeDisplayed();
  };

  this.selectProduct = async () => {
    await selectProd.click();
    await browser.pause(5000);
  };

  this.validateProduct = async () => {
    await browser.switchWindow(prodURL);
    await valProd.waitForExist({ timeout: 10000 });
    await expect(valProd).toBeDisplayed();
    await expect(valProd2).toBeDisplayed();
    await browser.pause(5000);
  };

  this.skipTutor = async () => {
    await skipTutorr.click();
  };

  this.selectSpecProduct1 = async () => {
    await specProd1.click();
  };

  this.selectSpecProduct2 = async () => {
    await specProd2.click();
  };

  this.selectSpecProduct3 = async () => {
    await specProd3.click();
  };

  this.selectQuantity = async () => {
    await specQuantity.click();
  };

  this.selectMetode = async () => {
    await tempalte.click();
  };

  this.uploadlink = async () => {
    await linktempalte.click();
  };

  this.setLink = async () => {
    await inputLink.waitForExist({ timeout: 5000 });
    await inputLink.setValue(linkk);
  };

  this.addtoCart = async () => {
    await addCart.click();
  };

  this.validateModal = async () => {
    await valModal.waitForExist({ timeout: 10000 });
    await expect(valModal).toBeDisplayed();
  };

  this.selectLihatKeranjang = async () => {
    await lihatKeranjang.click();
  };

  this.navigateToCart = async () => {
    await cart.waitForExist({ timeout: 10000 });
    await expect(cart).toBeDisplayed();
  };
};

module.exports = new LoginPage();
