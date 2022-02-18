class AbstractPage {
  //async open(pageUrl) {
  //await browser.url(pageUrl);
  async open() {
    await browser.url('https://finance.yahoo.com/rates');
    await this.waitForPageLoading();
  }

  async switchToSpecificFrame(framePath) {
    const frame = await browser.$(framePath);      
    await browser.pause(5000);
    await browser.switchToFrame(frame);
    await browser.setTimeout({ 'implicit': 10000 });
  };

  async waitForPageLoading() {
    await browser.waitUntil(async () => {
      const state = await browser.execute('return document.readyState;');
      return state === 'complete';
    },
    {
      timeout: 10000,
      timeoutMsg: 'Page loading timeout',
      interval: 1000,
    });
  }

  async scrollDown(pixels) {
    await browser.executeScript(`window.scrollBy(0,${pixels})`, []);
  }

  async close() {
    await browser.closeWindow();
  }
};

export default AbstractPage;
