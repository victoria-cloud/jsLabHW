import { NavBarComponent } from './components/nav.bar';

export class BasePage {
  navBar = new NavBarComponent();

  async open(path) {
    await browser.url(path);
    await this.waitForPageLoading();
  }

  async getBaseUrl() {
    return await browser.options.baseUrl;
  }

  async getPageUrl() {
    return await browser.getUrl();
  }

  async getPageTitle() {
    return await browser.getTitle();
  }

  async refreshCurrentPage() {
    await browser.refresh();
    await this.waitForPageLoading();
  }

  async waitForPageLoading() {
    try {
      await browser.waitUntil(async () => {
        const state = await browser.execute('return document.readyState;');
        return state === 'complete';
      },
      {
        timeout: 10000,
        interval: 1000,
      },);
    } catch (error) {
      if (error.name === 'TimeoutError') {
        throw new Error('Page loading timeout');
      } else {
        throw error;
      }
    }
  }

  // eslint-disable-next-line no-magic-numbers
  async waitForDisplayed(element, timeout = 30000) {
    await (await element).waitForDisplayed({ timeout });
  }

  // eslint-disable-next-line no-magic-numbers
  async waitForClickable(element, timeout = 30000) {
    await (await element).waitForClickable({ timeout });
  }
}
