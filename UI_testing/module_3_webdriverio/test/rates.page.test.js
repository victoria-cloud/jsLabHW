/* eslint-disable no-magic-numbers */

import { expect } from 'chai';
import RatesPage from '../page_objects/RatesPage';

describe('As a Yahoo Finance site user', function () {
  beforeEach(async function () {
    await RatesPage.open();
    await RatesPage.openIframe();
  });

  it('Pagination, work with select, work with hidden elements', async function () {
    // Click at Investing tab
    await RatesPage.clickInvestingTab();

    // Define All option for Investment type select
    const selectedOption = await RatesPage.getInvestmentTypeOptionText();
    expect(selectedOption).to.equal('All');

    // Follow to the 2nd page using the paginator
    await RatesPage.scrollToPagination();
    await RatesPage.clickNextButtonPagination();

    // Find the last item on the list
    const isLastItemDisplayed = await RatesPage.isLastItemDisplayed();
    expect(isLastItemDisplayed).to.be.true;

    // Rolldown the details block clicking on the View Details link
    await RatesPage.clickLastViewDetailsLink();

    // Verify that Details block contains at least one feature
    const featuresLength = await RatesPage.isDetailsBlockContainsFeatures();
    expect(featuresLength).to.be.greaterThan(0);
  });

  it('Form inputs manipulations, Valid zip code', async function () {
    // Click at Mortgage tab
    const isMortgageButtonClickable = await RatesPage.isMortgageButtonClickable();
    expect(isMortgageButtonClickable).to.be.true;

    // Click on Purchase button
    const isPurchaseButtonClickable = await RatesPage.isPurchaseButtonClickable();
    expect(isPurchaseButtonClickable).to.be.true;
    
    // Type value "10001" for Zip Code input
    await RatesPage.typeZipCode('10001');

    // Verify that Zip Code input contains "New York, NY" value
    const zipCodeCityState = await RatesPage.getZipCodeCityState();
    expect(zipCodeCityState).to.equal('New York, NY');

    // Verify that Zip Code input is market as a field containing valid value
    const zipCodeFieldStatus = await RatesPage.getZipCodeFieldStatus();
    expect(zipCodeFieldStatus).not.to.include('error--text');
  });

  it('Form inputs manipulations, Invalid zip code', async function () {
    // Click at Mortgage tab
    const isMortgageButtonClickable = await RatesPage.isMortgageButtonClickable();
    expect(isMortgageButtonClickable).to.be.true;

    // Click on Purchase button
    const isPurchaseButtonClickable = await RatesPage.isPurchaseButtonClickable();
    expect(isPurchaseButtonClickable).to.be.true;
    
    // Type value "10000" for Zip Code input
    await RatesPage.typeZipCode('10000');
    
    // Type value "10000" for Zip Code input
    const zipCodeCityState = await RatesPage.getZipCodeCityState();
    expect(zipCodeCityState).to.equal('Invalid zipcode');
    
    // Verify that Zip Code input is market as a field containing invalid value
    const zipCodeFieldStatus = await RatesPage.getZipCodeFieldStatus();
    expect(zipCodeFieldStatus).to.include('error--text');
  });

  it('Fields initialization, results verifications', async function () {   
    // Click at Mortgage tab
    const isMortgageButtonClickable = await RatesPage.isMortgageButtonClickable();
    expect(isMortgageButtonClickable).to.be.true;

    // Click on Purchase button
    const isPurchaseButtonClickable = await RatesPage.isPurchaseButtonClickable();
    expect(isPurchaseButtonClickable).to.be.true;

    // Type value "10000" for Zip Code input
    await RatesPage.typeZipCode('10001');

    // Type value "1000000" for Property Value input
    await RatesPage.typePropertyValue('1000000');

    // Type value "25" for Property Value input
    await RatesPage.typePercentDown('25');

    // Click at More Options link
    await RatesPage.clickMoreOptionsLink();

    // Enable "Include FHA loan options" checkbox
    await RatesPage.clickFhaCheckbox();

    // Verify that the result table contains at least one item
    const tableItems = await RatesPage.getTableItems();
    expect(tableItems).to.be.greaterThan(0);

    // Verify that APR cell contains percent value
    const isAprItemsContainsPercent = await RatesPage.isAprItemsContainsPercent();
    expect(isAprItemsContainsPercent).to.be.true;

    // Verify that APR cell contains date
    const isAprItemsContainsDate = await RatesPage.isAprItemsContainsDate();
    expect(isAprItemsContainsDate).to.be.true;

    // Verify that Rate cell contains percent value
    const isRateItemsContainsPercent = await RatesPage.isRateItemsContainsPercent();
    expect(isRateItemsContainsPercent).to.be.true;

    // Verify that Rate cell contains points flat value with "Points" prefix
    const isRateItemsContainsPoints = await RatesPage.isRateItemsContainsPoints();
    expect(isRateItemsContainsPoints).to.be.true;

    // Verify that Mo. Payment cell contains monetary value
    const isPaymentItemsContainsPrice = await RatesPage.isPaymentItemsContainsPrice();
    expect(isPaymentItemsContainsPrice).to.be.true;
    
    // Verify that Mo. Payment cell contains monetary value with "Fees" prefix
    const isPaymentItemsContainsFees = await RatesPage.isPaymentItemsContainsFees();
    expect(isPaymentItemsContainsFees).to.be.true;
  });

  it('Work with several windows', async function () { 
    // Click at Mortgage tab
    const isMortgageButtonClickable = await RatesPage.isMortgageButtonClickable();
    expect(isMortgageButtonClickable).to.be.true;

    // Click on Purchase button
    const isPurchaseButtonClickable = await RatesPage.isPurchaseButtonClickable();
    expect(isPurchaseButtonClickable).to.be.true;

    // Type value "10000" for Zip Code input
    await RatesPage.typeZipCode('10001');

    // Type value "1000000" for Property Value input
    await RatesPage.typePropertyValue('1000000');

    // Type value "25" for Property Value input
    await RatesPage.typePercentDown('25');

    // Click at More Options link
    await RatesPage.clickMoreOptionsLink();

    // Enable "Include FHA loan options" checkbox
    await RatesPage.clickFhaCheckbox();

    // Find Learn More button leading to welcome.better.com site and click at this one
    await RatesPage.clickBetterComItem();
  
    const newPageTitle = 'BankRate – Better Mortgage';
    await RatesPage.switchToWindow(newPageTitle);

    // Verify that the opened window has https://welcome.better.com/ url
    const currentUrl = await RatesPage.getCurrentUrl();
    expect(currentUrl).to.match(/https:\/\/welcome.better.com/gm);
    
    // Close the new opened window
    await RatesPage.closeCurrentWindow();

    // Click at Investing tab
    const oldPageTitle = 'Mortgage Rates for 30 year fixed';
    await RatesPage.switchToWindow(oldPageTitle);

    await RatesPage.openIframe();
    await RatesPage.clickInvestingTab();
  });

  it('Drag n drop', async function () { 
    // Click at Personal Loans tab
    await RatesPage.clickPersonalLoansTab();

    // Define "1000" value for Personal Loans input using the slider
    await RatesPage.decreaseLoanAmountWithJS();

    const getLoanAmountValue = await RatesPage.getLoanAmountValue();
    expect(getLoanAmountValue).to.equal('325,000');

    // Verify that the result table contains at least one item
    const tableItems = await RatesPage.getTableItems();
    expect(tableItems).to.be.greaterThan(0);

    // Verify that all items of the result table contains Max cell with a value that does not exceed value "100k"
    const isMaxLoansNotExceed = await RatesPage.isMaxLoansNotExceed(100);
    expect(isMaxLoansNotExceed).to.be.true;
  });
});
