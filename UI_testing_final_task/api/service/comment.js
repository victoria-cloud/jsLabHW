import { Axios } from '../../utils/axios';
import { endpoints } from './endpoints';
import { globalConfig } from '../global';

export class Comment {
  static async createComment(articleSlug, token, comment) {
    const { body } = comment;

    const requestHeaders = Object.assign(globalConfig.commonHeader, globalConfig.authorizationHeader(token));

    const requestBody = {
      comment: {
        body,
      },
    };
    
    return await Axios.post(endpoints.comment.createComment(articleSlug), requestHeaders, requestBody);
  }

}
