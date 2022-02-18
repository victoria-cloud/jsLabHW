/// <reference types="cypress" />

import { FinanceIndexPage } from '../pages/FinanceIndexPage';
import { home } from '../elements/home';

describe('As a Yahoo Finance site user', function () {
  describe('I should have the opportunity to use search features so that', function () {
    before(function () {
      FinanceIndexPage.open();
    });

    it('search input field is displayed', function () {
      cy.getElementBySelector(home.search.input).should('be.visible');
    });

    it('search input field is enabled', function () {
      cy.getElementBySelector(home.search.input).should('not.be.disabled');
    });

    it('search button is displayed', function () {
      cy.getElementBySelector(home.search.input).should('be.visible');
    });

    it('search button is enabled', function () {
      cy.getElementBySelector(home.search.input).should('not.be.disabled');
    });
  });
});
