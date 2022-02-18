import AbstractPage from './AbstractPage';

class HomePage extends AbstractPage {
  constructor() {
    super('Home');
  };

  async open() {
    await super.open('/');
  }

  get menuNavItems() {
    return $$('li[data-subnav-type] a.nr-applet-nav-item');
  }

  async menuItemElement(menuItemName) {
    return $(`//a[contains(@class, "nr-applet-nav-item")][@title="${menuItemName}"]`);
  }

  async getMenuNavItemsText() {
    return await this.getTextFromElements(this.menuNavItems);
  }

  async clickOnMenuItem(menuItemName) {
    await this.click(await this.menuItemElement(menuItemName));
    await this.waitForPageLoading();
  }
}

module.exports = HomePage;
