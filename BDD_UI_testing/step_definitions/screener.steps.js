import { expect } from 'chai';
import { When, Then } from '@wdio/cucumber-framework';
import AbstractPage from '../page_objects/AbstractPage';
import PageFactory from '../page_objects/PageFactory';

const abstractPage = new AbstractPage();

Then(/^the "([^"]*)" button is displayed$/, async (button) => {
  const page = await PageFactory.getPage('Screener');
  let isButtonDisplayed = null;

  switch (button) {
    case 'Create New Screener':
      isButtonDisplayed = await page.isCreateNewScreenButtonDisplayed();
      expect(isButtonDisplayed).to.be.true;
      break;
    default:
      throw new Error(`Option ${button} is not available`);
  }
});

Then(/^the "([^"]*)" button is clickable$/, async (button) => {
  // TODO: Implement a step that verifies that the Create New Screen button is clickable on the Screener page
  const page = await PageFactory.getPage('Screener');
  let isButtonClickable = null;

  switch (button) {
    case 'Create New Screener':
      isButtonClickable = await page.isCreateNewScreenButtonClickable();
      expect(isButtonClickable).to.be.true;
      break;
    default:
      throw new Error(`Option ${button} is not available`);
  }
});

When(/^the user clicks on the "([^"]*)" button$/, async (button) => {
  // TODO: Implement a step that clicks the button according to the given argument - "button"
  const page = await PageFactory.getPage('Screener');

  switch (button) {
    case 'Create New Screener':
      await page.clickOnCreateNewScreenButton();
      break;
    default:
      throw new Error(`Option ${button} is not available`);
  }
});

Then(/^the page title is "([^"]*)" on the Screener page$/, async (title) => {
  const currentTitle = await abstractPage.getTitle();
  console.log(title, currentTitle);
  expect(currentTitle).to.contain(title);
}); 
