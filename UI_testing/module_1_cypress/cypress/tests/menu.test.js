/// <reference types="cypress" />

import { FinanceIndexPage } from '../pages/FinanceIndexPage';
import { home } from '../elements/home';

describe('As a Yahoo Finance site user', function () {
  describe('I should have menu items', function () {
    before(function () {
      FinanceIndexPage.open();
    });

    // use cy.contains for this test https://docs.cypress.io/api/commands/contains#Selector
    // here is a custom command cy.getElementByContains(selector, text)
    it('Watchlist', function () {
      cy.contains(home.menuItemElements, 'Watchlist');
    });

    // use cy.contains for this test https://docs.cypress.io/api/commands/contains#Selector
    // here is a custom command cy.getElementByContains(selector, text)
    it('My Portfolio', function () {
      cy.contains(home.menuItemElements, 'My Portfolio');
    });
  });
});
