/// <reference types="cypress" />

export class Browser {
  static open(url) {
    cy.visit(url);
  }
}
