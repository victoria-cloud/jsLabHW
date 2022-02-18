# Module #3

### Description

For this task you have to create UI tests to check 
[Finance Yahoo](https://finance.yahoo.com/). You can choose between Cypress test environment or WebdriverIO.

### Tasks

You have to implement all of the tests listed below using the Page Object pattern.

#### Pagination, work with select, work with hidden elements 
1. Open https://finance.yahoo.com/rates 
1. Click at Investing tab

1. Define All option for Investment type select //check presence

1. Follow to the 2nd page using the paginator

1. Find the last item on the list //check presence

1. Rolldown the details block clicking on the View Details link

1. Verify that Details block contains at least one feature

#### Form inputs manipulations, Valid zip code 
1. Open https://finance.yahoo.com/rates 
1. Click at Mortgage tab 
1. Click on Purchase button // clicked by default
1. Type value "10001" for Zip Code input

1. Verify that Zip Code input contains "New York, NY" value     
const myInput = $('input')
expect(myInput).toHaveValue('user', { ignoreCase: true })

1. Verify that Zip Code input is market as a field containing valid value

#### Form inputs manipulations, Invalid zip code
1. Open https://finance.yahoo.com/rates using main menu
1. Click at Mortgage tab
1. Click on Purchase button
1. Type value "10000" for Zip Code input
1. Verify that Zip Code input contains "Invalid zipcode" value
1. Verify that Zip Code input is market as a field containing invalid value

#### Fields initialization, results verifications
1. Open https://finance.yahoo.com/rates using main menu
1. Click at Mortgage tab
1. Click on Purchase button
1. Type value "10001" for Zip Code input
1. Type value "1000000" for Property Value input
1. Type value "25" for percent Value input
1. Click at More Options link
1. Enable "Include FHA loan options" checkbox
1. Verify that the result table contains at least one item
1. Verify that APR cell contains percent value
1. Verify that APR cell contains date
1. Verify that Rate cell contains percent value
1. Verify that Rate cell contains points flat value with "Points" prefix
1. Verify that Mo. Payment cell contains monetary value
1. Verify that Mo. Payment cell contains monetary value with "Fees" prefix

#### Drag n drop
1. Open https://finance.yahoo.com/rates using main menu
1. Click at Personal Loans tab
1. Define "1000" value for Personal Loans input using the slider
1. Verify that the result table contains at least one item
1. Verify that all items of the result table contains Max cell with a value that does not exceed value "100k"

#### Work with several windows //double tab switchTab
1. Open https://finance.yahoo.com/rates using main menu
1. Click at Mortgage tab
1. Click on Purchase button
1. Type value "10001" for Zip Code input
1. Type value "1000000" for Property Value input
1. Type value "25" for percent Value input
1. Find Learn More button leading to welcome.better.com site and click at this one
1. Verify that the opened window has https://welcome.better.com/ url
1. Close the new opened window
1. Click at Investing tab
