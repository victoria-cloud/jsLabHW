import AppConfig from "../configs/AppConfig";
import TokenProvider from "../lib/TokenProvider";
import axios from "axios";
class PasteModel {
  static async postPastePlainData(data, tokenName) {
    const token = TokenProvider.getToken(tokenName);
    try {
      return await axios.post(
        AppConfig.baseUrl,
        `api_dev_key=${token}` + "&api_paste_code=test" + "&api_option=paste"
      );
    } catch (e) {
      return e.response;
    }
  }

  static async postPaste(tokenName, data) {
    //TODO: develop the method to be able to get data in object format
    // and define HTTP POST options
    // ...
    const {
      api_paste_name,
      api_paste_code,
      api_option,
      api_paste_expire_date,
    } = data;

    try {
      return await axios.post(
        AppConfig.baseUrl,
        `api_dev_key=${tokenName}&api_paste_code=${api_paste_code}&api_option=${api_option}&api_paste_expire_date=${api_paste_expire_date}&api_pate_name=${api_paste_name}`
      );
    } catch (e) {
      return e.response;
    }
  }
}

export default PasteModel;
