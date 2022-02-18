import { expect } from 'chai';
import FinanceIndexPage from '../page_objects/FinanceIndexPage';

describe('As a Yahoo Finance site user', function () {
  describe('I have to watch blocks', function () {
    before(async function () {
      await FinanceIndexPage.open();
    });

    it('future container', async function () {
      const newsFutureCarouselBlock = await FinanceIndexPage.isFutureCarouselBlockDisplayed();
      expect(newsFutureCarouselBlock).to.be.true;
    });

    it('news article list', async function () {
      const newsArticleListBlock = await FinanceIndexPage.isNewsArticleListBlockDisplayed();
      expect(newsArticleListBlock).to.be.true;
    });

    it('cryptocurrencies list', async function () {
      const cryptocurrenciesListBlock = await FinanceIndexPage.isCryptocurrenciesListBlockDisplayed();
      expect(cryptocurrenciesListBlock).to.be.true;
    });

    it('video list', async function () {
      const videoListBlock = await FinanceIndexPage.isVideoListBlockDisplayed();
      expect(videoListBlock).to.be.true;
    });

    after(async function () {
      await FinanceIndexPage.close();
    });
  });
});
