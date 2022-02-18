import { BasePage } from './base.page';

export class HomePage extends BasePage {
  get root() {
    return $('div.home-page');
  }

  get settingsButton() {
    return $("a[href='/settings']");
  }

  async open() {
    await super.open('/');
  }

  async waitHomePageLoaded() {
    await this.waitForDisplayed(this.root);
  }
  
  async clickSettingsButton() {
    await this.settingsButton.click();
  }

}
