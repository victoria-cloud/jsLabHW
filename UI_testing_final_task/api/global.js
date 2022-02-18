import AppConfig from '../configs/AppConfig';

export const globalConfig = {
  baseUrl: AppConfig.apiUrl,
  commonHeader: {
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json;charset=UTF-8',
  },
  authorizationHeader(token) {
    return {
      Authorization: `Token ${token}`,
    };
  },
};
