import { expect } from 'chai';
import { Given, Then } from '@wdio/cucumber-framework';

import PageFactory from '../page_objects/PageFactory';

Given(/^the user is on the (\w+) page$/, async (pageName) => {
  const page = await PageFactory.getPage(pageName);
  await page.open();
});

Then(/^the browser URL contains "([^"]*)" on the (\w+) page$/, async (url, pageName) => {
  // TODO: Implement a step that checks the browser url according to the given arguments - "url" and "pageName"
  const currentPage = await PageFactory.getPage(pageName);
  const currentURL = await currentPage.getUrl();
  expect(currentURL).contains(url);
});

Given(/^the user is on the "(.*)" page$/, async (pageName) => {
  const page = await PageFactory.getPage(pageName);
  await page.open();
});

Then(/^the page title is "(.*)" on the "(.*)" page$/, async (title, page) => {
  // TODO: Implement a step that checks the browser url according to the given arguments - "url" and "pageName"
  const currentPage = await PageFactory.getPage(page);
  const currentTitle = await currentPage.getTitle();
  expect(title).to.equal(currentTitle);
  console.log(`the page title is ${currentTitle} on the ${currentPage}`);
});

