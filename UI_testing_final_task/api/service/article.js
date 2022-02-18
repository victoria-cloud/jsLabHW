import { Axios } from '../../utils/axios';
import { endpoints } from './endpoints';
import { globalConfig } from '../global';

export class Article {
  static async createArticle(article, token) {
    const { author, title, description, body, tagList } = article;

    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));

    const requestBody = {
      article: {
        author,
        title,
        description,
        body,
        tagList
      },
    };
    
    return await Axios.post(endpoints.article.createArticle, requestHeaders, requestBody);
  }

}
