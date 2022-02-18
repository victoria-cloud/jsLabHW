import { BasePage } from './base.page';

export class ArticlePage extends BasePage {
 
  get detailsElement() {
    return $("//span[contains(text(), 'Read more...')]");
  }

  get commentBlock() {
    return $('div.card');
  }

  get deleteCommentIcon() {
    return $('span.mod-options i.ion-trash-a');
  }

  async clickDetailsElement() {
    await this.detailsElement.click();
  }

  async isCommentBlockDisplayed() {
    return await this.commentBlock.isDisplayed();
  }

  async clickDeleteCommentIcon() {
    await this.deleteCommentIcon.click();
  }

}
