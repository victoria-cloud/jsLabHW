import { expect } from 'chai';
import { article } from '../models/article';
import { user } from '../models/user';
import { ProfilePage } from '../page_objects/profile.page';
import { ApiHelper } from '../utils/api.helper';

describe('Manipulations with article', () => {
  const profilePage = new ProfilePage();

  it('should create a new article via API, add to favorites and verify title', async () => {
    const token = await ApiHelper.createUser(user);
    const articleSlug = await ApiHelper.createArticle(article, token); 
    await ApiHelper.addToFavorite(articleSlug, token);
    
    //Login to application (use method ApiHelper.loginToApp)
    await ApiHelper.loginToApp(token); 
    
    //Open the profile page
    await profilePage.clickProfileElement();

    //Click on the Favorited Articles Tab
    await profilePage.clickFavoritedArticles();

    //Verify that there is one article
    const isArticleExist = await profilePage.isFavoritedArticleExist();
    expect(isArticleExist).to.equal(true);

    //Verify that the article contains correct title
    const articleTitle = await profilePage.getArticleTitle();
    expect(articleTitle).to.match(/^My api article$/g);
  });
});
