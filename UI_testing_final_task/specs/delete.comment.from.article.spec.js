import { expect } from 'chai';
import { article } from '../models/article';
import { user } from '../models/user';
import { comment } from '../models/comment';
import { ArticlePage } from '../page_objects/article.page';
import { ApiHelper } from '../utils/api.helper';
import { Comment } from '../api/service/comment';
import { ProfilePage } from '../page_objects/profile.page';

describe('Add and delete an article\'s comment', () => {
  const articlePage = new ArticlePage();
  const profilePage = new ProfilePage();

  it('User is able to create article comment on the Article Details page via API', async () => {

    const token = await ApiHelper.createUser(user);
    const articleSlug = await ApiHelper.createArticle(article, token); 
      
    //Add comment to article via API
    await Comment.createComment(articleSlug, token, comment);

    //Login to application (use method ApiHelper.loginToApp)
    await ApiHelper.loginToApp(token); 
    
    //Open the profile page
    await profilePage.clickProfileElement();

    // Open the Article Details page for the previously created article
    await articlePage.clickDetailsElement();

    //Click on the delete comment icon
    await articlePage.clickDeleteCommentIcon();
   
    //Verify that there are no comments for the opened artcile
    const isCommentBlockExistAfterDeletion = await articlePage.isCommentBlockDisplayed();
    expect(isCommentBlockExistAfterDeletion).to.equal(false);
  });
});
