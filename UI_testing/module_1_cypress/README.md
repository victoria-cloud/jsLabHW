# Module #1 - Cypress

### Description

For this task you have to create UI tests to check 
[Finance Yahoo](https://finance.yahoo.com/). You have to practice writing test cases using Cypress framework.

---

### Preparation

1. Clone the template project https://git.epam.com/yevhen_petryk/30-days-of-javascript.git

2. Open `26_Day_UI_Testing` directory

  ```sh
  cd 26_Day_UI_Testing
  ```

3. Open `module-1-ui-with-cypress` directory

  ```sh
  cd module-1-ui-with-cypress
  ```

4. Install dependencies

  ```sh
  npm install
  ```

### Project stuff

##### Components:

The [components](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/26_Day_UI_Testing/module-1-ui-with-cypress/cypress/components) directory contains Cypress methods for interacting with UI elements.

##### Elements:

The [elements](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/26_Day_UI_Testing/module-1-ui-with-cypress/cypress/elements) directory contains CSS selectors that identify particular elements on a web page.

##### Pages:

The [pages](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/26_Day_UI_Testing/module-1-ui-with-cypress/cypress/pages) directory contains page objects.

##### Tests:

The [tests](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/26_Day_UI_Testing/module-1-ui-with-cypress/cypress/tests) directory contains files with tests.

##### Config:

The [cypress.json](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/blob/master/26_Day_UI_Testing/module-1-ui-with-cypress/cypress.json) file contains different configurations of Cypress framework.

---

### Test run

  Open Cypress in UI application:

  ```sh
  npm test
  ```

  Run tests in headless mode:

  ```sh
  npm run cy:headless
  ```

### Expected result

```
As a Yahoo Finance site user
    I have to watch blocks
        future container
        news article list
        cryptocurrencies list
        video list

As a Yahoo Finance site user
    I should have the opportunity to use search features so that
        search input field is displayed
        search input field is enabled
        search button is displayed
        search button is enabled

As a Yahoo Finance site user
    I should have menu items
        Watchlist
        My Portfolio
```

---

### Documentation

Please, use the following manuals to perform tasks:

- https://docs.cypress.io/
