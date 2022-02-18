import { BasePage } from './base.page';

export class SettingsPage extends BasePage {
 
  get logOutButton() {
    return $("button[class='btn btn-outline-danger']");
  }

  async clickLogOutButton() {
    await this.logOutButton.click();
  }
}
