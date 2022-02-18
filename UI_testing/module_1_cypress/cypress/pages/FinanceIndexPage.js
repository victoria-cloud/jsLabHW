/// <reference types="cypress" />

import { Browser } from '../components';

export class FinanceIndexPage {
  static open() {
    Browser.open('/');
  }
}
