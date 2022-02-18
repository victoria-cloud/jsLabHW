/// <reference types="cypress" />

export class Button {
  static click(locator) {
    cy.get(locator).click();
  }

  static clickByText(text) {
    cy.contains(text).click();
  }

  static clickByTextWithLocator(locator, text) {
    cy.contains(locator, text).click();
  }

  static clickWithIndex(locator, index) {
    cy.get(locator).eq(index).click();
  }
}
