import { Axios } from '../../utils/axios';
import { globalConfig } from '../global';

export class User {
  static async register(user) {
    const { email, password, username } = user;

    const requestBody = {
      user: {
        email,
        password,
        username,
      },
    };

    return await Axios.post('/users', globalConfig.commonHeader, requestBody);
  }

  static async login(user) {
    const { email, password } = user;

    const requestBody = {
      user: {
        email,
        password,
      },
    };

    return await Axios.post('/users/login', globalConfig.commonHeader, requestBody);
  }
}
