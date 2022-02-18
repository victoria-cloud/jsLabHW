import { BasePage } from './base.page';

export class ProfilePage extends BasePage {
 
  get profileElement() {
    return $('ul.nav.navbar-nav.pull-xs-right li:nth-child(4)');
  }

  get articleTitle() {
    return $("//h1[@data-qa-type='preview-title']");
  }

  get favoritedArticles() {
    return $("//a[contains(text(), 'Favorited Articles')]");
  }

  get articleElement() {
    return $("div[class='article-preview']");
  }
  
  async clickProfileElement() {
    await this.profileElement.click();
  }

  async clickFavoritedArticles() {
    await this.favoritedArticles.click();
  }

  async isFavoritedArticleExist() {
    return await this.articleElement.isDisplayed();
  }

  async getArticleTitle() {
    return await this.articleTitle.getText();
  }
}
