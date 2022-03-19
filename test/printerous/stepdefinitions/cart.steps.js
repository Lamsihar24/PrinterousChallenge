import { When, Then } from '@cucumber/cucumber';
import cartPrinterous from '../pageobject/cart.page';

When('User click menu kemasan dan Label', async () => {
    await cartPrinterous.validateKemasanLogin();
  });

When('User select product label stiker kemasan satuan (die cut)', async () => {
  await cartPrinterous.validateHomePage();
});

When('User select spec Vinyl Matte  Bulat 10 x 10 cm', async () => {
  await cartPrinterous.validateHomePage();
});

When('User select quantity 25pcs', async () => {
  await cartPrinterous.validateHomePage();
});

When('User select motode design', async () => {
  await cartPrinterous.validateHomePage();
});
When('User click tambah ke Keranjang', async () => {
  await cartPrinterous.validateHomePage();
});

Then('User redirected to cart', async () => {
  await cartPrinterous.navigateToAllEpaper();
});
