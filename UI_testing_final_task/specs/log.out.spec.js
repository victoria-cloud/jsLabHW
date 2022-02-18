import { expect } from 'chai';
import { user } from '../models/user';
import { HomePage } from '../page_objects/home.page';
import { SettingsPage } from '../page_objects/settings.page';
import { SignInPage } from '../page_objects/sign.in.page';
import { ApiHelper } from '../utils/api.helper';

describe('Log out', () => {
  let homePage;
  let signInPage;
  let settingsPage;
  
  before(async () => {
    const token = await ApiHelper.createUser(user);
    await ApiHelper.loginToApp(token);
  });

  beforeEach(async () => {
    homePage = new HomePage();
    signInPage = new SignInPage();
    settingsPage = new SettingsPage();

    await signInPage.open();
    await signInPage.waitSignInPageLoaded();
  });

  it('user is able to log out', async () => {
    //Open the Settings page
    await homePage.clickSettingsButton();
    
    //Click on the Log Out button
    await settingsPage.clickLogOutButton();

    //Verify that the Home page is open
    const pageTitle = await homePage.getPageTitle();
    expect(pageTitle).to.eq('Conduit');

    //Verify that the Header contains the following links - 'Home', 'Sign in', 'Sign up'
    const navbarLinksText = await homePage.navBar.getNavLinksText();
    expect(navbarLinksText).to.eql(['Home', 'Sign in', 'Sign up']);
  });
});
