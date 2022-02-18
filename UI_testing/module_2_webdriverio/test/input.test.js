import { expect } from 'chai';
import FinanceIndexPage from '../page_objects/FinanceIndexPage';

describe('As a Yahoo Finance site user', function () {
  describe('I should have the opportunity to use search features so that', function () {
    before(async function () {
      await FinanceIndexPage.open();
    });

    it('search input field is displayed', async function () {
      // TODO: Implement test scenario
      const input = await FinanceIndexPage.isInputDisplayed();
      expect(input).to.be.true;
      
    });

    it('search input field is enabled', async function () {
      // TODO: Implement test scenario
      const input = await FinanceIndexPage.isInputEnabled();
      expect(input).to.be.true;
    });

    it('search input field is clickable', async function () {
      // TODO: Implement test scenario
      const input = await FinanceIndexPage.isInputClickable();
      expect(input).to.be.true;
    });

    it('search button is displayed', async function () {
      // TODO: Implement test scenario
      const button = await FinanceIndexPage.isSearchButtonDisplayed();
      expect(button).to.be.true;
    });

    it('search button is clickable', async function () {
      // TODO: Implement test scenario
      const button = await FinanceIndexPage.isSearchButtonClickable();
      expect(button).to.be.true;
    });

    after(async function () {
      await FinanceIndexPage.close();
    });
  });
});
