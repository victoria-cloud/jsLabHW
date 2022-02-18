/// <reference types="cypress" />

import { FinanceIndexPage } from '../pages/FinanceIndexPage';
import { home } from '../elements/home';

describe('As a Yahoo Finance site user', function () {
  describe('I have to watch blocks', function () {
    before(function () {
      FinanceIndexPage.open();
    });

    it('future container', function () {
      cy.getElementBySelector(home.futureCarouselBlock).should('be.visible');
    });

    it('news article list', function () {
      cy.getElementBySelector(home.newsArticleListBlock).should('be.visible');
    });

    it('cryptocurrencies list', function () {
      cy.getElementBySelector(home.cryptocurrenciesListBlock).should('be.visible');
    });

    it('video list', function () {
      cy.getElementBySelector(home.videoListBlock).should('be.visible');
    });
  });
});
