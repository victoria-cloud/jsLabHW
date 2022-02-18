export class NavBarComponent {
  get brandLogo() {
    return $('[data-qa-id=site-header] a.navbar-brand');
  }

  get links() {
    return $$('[data-qa-id=site-nav] a.nav-link');
  }

  async isBrandLogoDisplayed() {
    return await (await this.brandLogo).isDisplayed();
  }

  async getBrandLogoLink() {
    return await (await this.brandLogo).getAttribute('href');
  }

  async getNavLinksLength() {
    return await this.links.length;
  }

  async getNavLinksText() {
    const elNumber = (await this.links).length;
    const textArr = [];
    for (let i = 0; i < elNumber; i++) {
      textArr.push((await (await this.links)[i].getText()).trim());
    }
    return textArr;
  }
}
