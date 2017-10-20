import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('protractor-test App', () => {
  let page: AppPage;

  beforeEach(async () => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    let test = await browser.get('/');
    let aa = await Promise.resolve('hahaha');
    console.log(aa);
    let test2 = await page.navigateTo();
    let test3 = await page.navigateTo();
    let test4 = await page.navigateTo();
    let test5 = await page.navigateTo();
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", test)
    // const test = await browser.get('localhost:4200');
    // expect(page.getParagraphText()).toEqual('Welcome to app!');
    // console.log(test);
  });
});
