import AbstractPage from './AbstractPage';
class RatesPage extends AbstractPage {
  get iFrame() {
    return $('iframe[title="Mortgage Rates for 30 year fixed"]');
  }

  async openIframe() {
    await super.switchToFrame(this.iFrame);
  }

  get investingTab() {
    return $('a[href="#investing"]');
  }

  async clickInvestingTab() {
    await this.investingTab.waitForDisplayed();
    await this.investingTab.click();
  }

  get investmentTypeOption() {
    return $('//label[text()="Investment type"]/following-sibling::div[@class="v-select__selections"]');
  }

  async getInvestmentTypeOptionText() {
    await this.investmentTypeOption.isDisplayed();
    return await this.investmentTypeOption.getText();
  }

  get paginationButtons() {
    return $$('div.row.row--dense > div > button.v-btn');
  }

  async scrollToPagination() {
    await this.scrollDown(1100);
  }

  async clickNextButtonPagination() {
    await ((await this.paginationButtons)[1]).click();
  }

  get cardItems() {
    return $$(`div.v-data-iterator > div.container.pa-0.container--fluid > div.v-card.v-card--flat.v-sheet.v-sheet--tile`);
  }

  async isLastItemDisplayed() {
    await this.waitForElements(await this.cardItems);
    return (await this.cardItems[5]).isDisplayed();
  }

  get viewDetailsLinks() {
    return $$('//div[contains(text(), "View details")]');
  }

  async clickLastViewDetailsLink() {
    return (await this.viewDetailsLinks[5]).click();
  }

  get viewDetailsBlockFeature() {
    return $$('li.featured-item');
  }

  async isDetailsBlockContainsFeatures() {
    return this.viewDetailsBlockFeature.length;
  }

  get mortgageTab() {
    return $('a[href="#mortgage"]');
  }

  async isMortgageButtonClickable() {
    return this.mortgageTab.isClickable();
  }

  get purchaseButton() {
    return $('button[value="purchase"]');
  }

  async isPurchaseButtonClickable() {
    return this.purchaseButton.isClickable();
  }

  get zipCodeInput() {
    return $('input[name="zipcode"]');
  }

  async typeZipCode(zipCode) {
    await this.zipCodeInput.click();
    await browser.execute(function () {
      document.querySelector('input[name="zipcode"]').value = '';
    });
    await this.zipCodeInput.click();
    await this.zipCodeInput.setValue(zipCode);
    await browser.pause(2000);
  }

  get zipCodeCityState() {
    return $('span.city-state-append');
  }

  async getZipCodeCityState() {
    await this.zipCodeCityState.waitForDisplayed();
    return await this.zipCodeCityState.getText();
  }

  get zipCodeField() {
    return $('div.zipcode-input');
  }

  async getZipCodeFieldStatus() {
    return await (await this.zipCodeField).getAttribute('class');
  }

  get percentDownInput() {
    return $('input[name="percent_down"]');
  }

  async typePercentDown(percent) {
    await this.percentDownInput.click();
    await browser.execute(function () {
      document.querySelector('input[name="percent_down"]').value = '';
    });
    await this.percentDownInput.click();
    await this.percentDownInput.setValue(percent);
    await browser.pause(2000);
  }

  get propertyValueInput() {
    return $('input[name="property_value"]');
  }

  async typePropertyValue(propertyValue) {
    await this.propertyValueInput.setValue(propertyValue);
    await browser.execute(function () {
      document.querySelector('input[name="property_value"]').value = '';
    });
    await this.propertyValueInput.setValue(propertyValue);
    await browser.pause(2000);
  }

  get moreOptionsLink() {
    return $('a.toggle-advanced-filters');
  }

  async clickMoreOptionsLink() {
    return await this.moreOptionsLink.click();
  }

  get fhaCheckbox() {
    return $("//label[contains(text(), 'Include FHA loan options')]");
  }

  async clickFhaCheckbox() {
    await this.fhaCheckbox.waitForDisplayed();
    return await this.fhaCheckbox.click();
  }

  get tableItems() {
    return $$('div[role="progressbar"] + div.container > div');
  }

  async getTableItems() {
    await this.waitForElements(await this.tableItems);
    return await this.tableItems.length;
  }

  get aprPercentItems() {
    return $$('div div:nth-child(1) > div > div > div.mf-product__num');
  }

  async isAprItemsContainsPercent() {
    const items = await this.getTextArray(await this.aprPercentItems);
    console.log(items);

    const result = items.every((item) => {
      return item.includes('%');
    });

    return result;
  }

  get aprDateItems() {
    return $$('div > div > div > div.col.col-true > div > div:nth-child(1) > div > div > div.mf-product__caption');
  }

  async isAprItemsContainsDate() {
    const items = await this.getTextArray(await this.aprDateItems);
    console.log(items);

    const result = items.every((item) => {
      return item.match(/[a-zA-Z]{3} [0-9]{2}, [0-9]{4}/gm);
    });

    return result;
  }

  get ratePercentItems() {
    return $$('div.col.col-true > div > div.py-0.pl-md-0.col.col-true > div > div > div.mf-product__num');
  }

  async isRateItemsContainsPercent() {
    const items = await this.getTextArray(await this.ratePercentItems);
    console.log(items);

    const result = items.every((item) => {
      return item.includes('%');
    });

    return result;
  }

  get ratePointsItems() {
    return $$('div.col.col-true > div > div.py-0.pl-md-0.col.col-true > div > div > div.mf-product__caption');
  }

  async isRateItemsContainsPoints() {
    const items = await this.getTextArray(await this.ratePointsItems);
    console.log(items);

    const result = items.every((item) => {
      return item.match(/Points: \d[.]\d/gm);
    });

    return result;
  }

  get monetaryPriceItems() {
    return $$('div.col.col-true > div > div.py-0.px-md-0.col.col-true > div > div > div.mf-product__num');
  }

  async isPaymentItemsContainsPrice() {
    const items = await this.getTextArray(await this.monetaryPriceItems);
    console.log(items);

    const result = items.every((item) => {
      return item.match(/[$\d+,]/gm);
    });

    return result;
  }

  get monetaryFeesItems() {
    return $$('div.col.col-true > div > div.py-0.px-md-0.col.col-true > div > div > div.mf-product__caption');
  }

  async isPaymentItemsContainsFees() {
    const items = await this.getTextArray(await this.monetaryFeesItems);
    console.log(items);

    const result = items.every((item) => {
      return item.match(/Fees: [$\d+,]/gm);
    });

    return result;
  }

  get betterComItem() {
    return $("div[aria-label='Better.com']");
  }

  async clickBetterComItem() {
    await this.scrollDown(500);
    await this.betterComItem.waitForDisplayed();
    return this.betterComItem.click();
  }

  get personalLoansTab() {
    return $("a[href='#personal_loans']");
  }

  async clickPersonalLoansTab() {
    return this.personalLoansTab.click();
  }

  get loanAmountSlider() {
    return $('div.v-slider__thumb');
  }

  async decreaseLoanAmount() {
    await browser.pause(3000);
    await this.loanAmountSlider.dragAndDrop({ x: -500, y: 0 });
    await browser.pause(3000);
  }

  async decreaseLoanAmountWithJS() {
    await browser.pause(3000);
    const locator = 'div.v-slider__thumb-container';
    await browser.execute(`return document.querySelector('${locator}').setAttribute('style', 'left: 0%;')`);
    await browser.pause(3000);
  }

  get loanAmountValue() {
    return $('div:nth-child(4) div.v-text-field__slot input[name="loan_amount"]');
  }

  async getLoanAmountValue() {
    return await this.loanAmountValue.getValue();
  }

  get maxLoansItems() {
    return $$('div.col.col-6 > div > div:nth-child(3) > div > div > div.mf-product__num.desktop-large-data');
  }

  async isMaxLoansNotExceed(maxValue) {
    const items = await this.getTextArray(await this.maxLoansItems);

    const extractPrices = items.map((item) => {
      return Number(item.match(/(\d+)/)[0]);
    });
    console.log(extractPrices);

    const result = extractPrices.every((item) => {
      return item <= maxValue;
    });

    return result;
  }
}

module.exports = new RatesPage();
