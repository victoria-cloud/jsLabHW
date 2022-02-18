import { expect } from 'chai';
import FinanceIndexPage from '../page_objects/FinanceIndexPage';

describe('As a Yahoo Finance site user', function () {
  describe('I should have menu items', function () {
    before(async function () {
      await FinanceIndexPage.open();
    });

    // use XPATH for this test
    it('Watchlist', async function () {
      const newsFutureCarouselBlock = await FinanceIndexPage.isMenuItemElementDisplayed('Watchlists');
      expect(newsFutureCarouselBlock).to.be.true;
    });

    // use XPATH for this test
    it('My Portfolio', async function () {
      const newsFutureCarouselBlock = await FinanceIndexPage.isMenuItemElementDisplayed('My Portfolio');
      expect(newsFutureCarouselBlock).to.be.true;
    });

    after(async function () {
      await FinanceIndexPage.close();
    });
  });
});
