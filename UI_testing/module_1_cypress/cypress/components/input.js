/// <reference types="cypress" />

export class Input {
  static enterValue(locator, value) {
    cy.get(locator).clear().type(value);
  }
}
