import AbstractPage from './AbstractPage';

class FinanceIndexPage extends AbstractPage {
  async open() {
    await super.open('/');
  }

  get futureCarouselBlock() {
    return $('div#YDC-Lead');
  }

  get videoListBlock() {
    // TODO: put getting the element using CSS selector for block marked with 2 on screenshot 1
    return $$('div[data-reactid="40"]')[0];
  }

  get newsArticleListBlock() {
    // TODO: put getting the element using CSS selector for block marked with 3 on screenshot 1
    return $('div[data-reactid="35"]');
  }

  get cryptocurrenciesListBlock() {
    // TODO: put getting the element using CSS selector for block marked with 4 on screenshot 1
    return $('section[data-yaft-module="tdv2-applet-crypto_currencies"]');
  }

  get inputField() {
    return $('input#yfin-usr-qry');
  }

  get searchButton() {
    return $('button#header-desktop-search-button');
  }

  menuItemElement(menuItemName) {
    // TODO: put getting the element using XPath selector for elements marked with 5 on screenshot 1          
    return $(`//a[contains(text(), '${menuItemName}')]`); 
  }

  async isFutureCarouselBlockDisplayed() {
    return await this.futureCarouselBlock.isDisplayed();
  }

  async isVideoListBlockDisplayed() {
    return await this.videoListBlock.isDisplayed();
  }

  async isNewsArticleListBlockDisplayed() {
    return await this.newsArticleListBlock.isDisplayed();
  }

  async isCryptocurrenciesListBlockDisplayed() {
    return await this.cryptocurrenciesListBlock.isDisplayed();
  }

  async isMenuItemElementDisplayed(menuItemName) {
    return await this.menuItemElement(menuItemName).isDisplayed();
  }

  async isInputDisplayed() {
    return await this.inputField.isDisplayed();
  }

  async isInputEnabled() {
    return await this.inputField.isEnabled();
  }

  async isInputClickable() {
    return await this.inputField.isClickable();
  }

  async isSearchButtonDisplayed() {
    return await this.searchButton.isDisplayed();
  }

  async isSearchButtonClickable() {
    return await this.searchButton.isClickable();
  }

}

module.exports = new FinanceIndexPage();
