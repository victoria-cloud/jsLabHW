# Module #2 - WebdriverIO

### Description

For this task you have to create UI tests to check 
[Finance Yahoo](https://finance.yahoo.com/). You have to practice writing test cases using WebdriverIO framework.

---

### Preparation

1. Clone the template project https://git.epam.com/yevhen_petryk/30-days-of-javascript.git

2. Open `26_Day_UI_Testing` directory

  ```sh
  cd 26_Day_UI_Testing
  ```

3. Open `module-2-ui-with-wdio-and-mocha` directory

  ```sh
  cd module-2-ui-with-wdio-and-mocha
  ```

4. Install dependencies

  ```sh
  npm install
  ```

### Project stuff

##### Config:

The [configs](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/26_Day_UI_Testing/module-2-ui-with-wdio-and-mocha/configs) directory contains different configurations of WebdriverIO framework.


##### Page Object:

The [page_objects](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/26_Day_UI_Testing/module-2-ui-with-wdio-and-mocha/page_objects) directory contains page objects.

##### Tests:

The [test](https://git.epam.com/yevhen_petryk/30-days-of-javascript/-/tree/master/26_Day_UI_Testing/module-2-ui-with-wdio-and-mocha/test) directory contains files with tests.


---

### Test run

  Run tests:

  ```sh
  npm test
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
        search input field is clickable
        search button is displayed
        search button is clickable

As a Yahoo Finance site user
    I should have menu items
        Watchlist
        My Portfolio
```

---

### Documentation

Please, use the following manuals to perform tasks:

- https://webdriver.io/
