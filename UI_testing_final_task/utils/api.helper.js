import { Article } from '../api/service/article';
import { User } from '../api/service/user';
import { HomePage } from '../page_objects/home.page';
import { globalConfig } from '../api/global';
import { Axios } from './axios';
import { endpoints } from '../api/service/endpoints';
export class ApiHelper {
  static async createUser(user) {
    const { data } = await browser.call(async function () {
      return await User.register(user);
    });
    const jwtToken = data?.user?.token;
  
    if (!jwtToken) {
      throw new Error('Did not receive user JWT Token in response');
    }
  
    return jwtToken;
  }

  static async signInUser(user) {
    const { data } = await browser.call(async function () {
      return await User.login(user);
    });
  
    const jwtToken = data?.user?.token;
  
    if (!jwtToken) {
      throw new Error('Did not receive user JWT Token in response');
    }
  
    return jwtToken;
  }

  static async loginToApp(token) {
    const homePage = new HomePage();
    await homePage.open();
  
    await browser.execute(function (key, value) {
      window.localStorage.setItem(key, value);
    },'id_token', token);
  
    await homePage.refreshCurrentPage();
    await homePage.waitHomePageLoaded();
  }

  static async createArticle(article, token) {

    const { data } = await browser.call(async function () {
      return await Article.createArticle(article, token);
    });
    const articleSlug = data['article']['slug'];
  
    if (articleSlug) {
      // eslint-disable-next-line no-console
      console.log(`Article slug is ${articleSlug}`);
    } else {
      throw new Error('Article slug is not exist!');
    }
  
    return articleSlug;
  }

  static async addToFavorite(articleSlug, token) {
    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));
    return await Axios.post(endpoints.article.addArticleToFavorite(articleSlug), requestHeaders);
  }

}
