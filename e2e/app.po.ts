import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    return browser.get('https://angular.io/tutorial');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
