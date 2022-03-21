import { Given, When, Then } from '@cucumber/cucumber';
import cartPrinterous from '../pageobject/cart.page';

Given('User on Printerous login page', async () => {
  await cartPrinterous.navigateToLogin();
});

When('User login with valid data into the text box', async () => {
  await cartPrinterous.setEmail();
  await cartPrinterous.setPassword();
  await cartPrinterous.submitData();
});

When('User directed to Pinterous homepage', async () => {
await cartPrinterous.validateHomepage();
});

When('User click menu kemasan dan Label', async () => {
  await cartPrinterous.clickKemasandanLogin();
});

When('User directed to Kemasan Label page', async () => {
  await cartPrinterous.validateKemasan();
});

When('User select product label stiker kemasan satuan die cut', async () => {
  await cartPrinterous.selectProduct();
});

// When('User will see product label stiker kemasan satuan die cut', async () => {
//   await cartPrinterous.validateProduct();
// });

When('User click Skip Tutorial', async () => {
  await cartPrinterous.skipTutor();
});

When('User select spec Vinyl Matte', async () => {
  await cartPrinterous.selectSpecProduct1();
});

When('User select spec 10 x 10cm', async () => {
  await cartPrinterous.selectSpecProduct3();
});

When('User select spec Bulat', async () => {
  await cartPrinterous.selectSpecProduct2();
});

When('User select quantity 25pcs', async () => {
  await cartPrinterous.selectQuantity();
});

When('User select template design', async () => {
  await cartPrinterous.selectMetode();
});

When('User click URL', async () => {
  await cartPrinterous.uploadlink();
});

When('User set template URL', async () => {
  await cartPrinterous.setLink();
});

When('User click tambah ke Keranjang', async () => {
  await cartPrinterous.addtoCart();
});

When('User can see modal notification', async () => {
  await cartPrinterous.validateModal();
});

When('User click Lihat Keranjang', async () => {
  await cartPrinterous.selectLihatKeranjang();
});

Then('User redirected to cart', async () => {
  await cartPrinterous.navigateToCart();
});
