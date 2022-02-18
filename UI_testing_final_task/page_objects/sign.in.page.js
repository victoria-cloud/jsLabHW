import { BasePage } from './base.page';

export class SignInPage extends BasePage {
  get root() {
    return $('div.auth-page');
  }

  get header() {
    return $('h1');
  }

  get needAnAccountLink() {
    return $('p a');
  }

  get emailInput() {
    return $('input[type=email');
  }

  get passwordInput() {
    return $('input[type=password]');
  }

  get signInButton() {
    return $('button.btn');
  }

  async open() {
    await super.open('/login');
  }

  async waitSignInPageLoaded() {
    await this.waitForDisplayed(await this.root);
  }

  async getPageHeader() {
    await this.waitForDisplayed(await this.header);
    return (await this.header).getText();
  }

  async getNeedAnAccountLinkText() {
    await this.waitForDisplayed(await this.needAnAccountLink);
    return (await this.needAnAccountLink.getText()).trim();
  }

  async getNeedAnAccountLinkHrefAttr() {
    await this.waitForDisplayed(await this.needAnAccountLink);
    return await this.needAnAccountLink.getAttribute('href');
  }

  async signInAs(user) {
    const { email, password } = user;

    await (await this.emailInput).setValue(email);
    await (await this.passwordInput).setValue(password);
    await (await this.signInButton).click();
  }
}
