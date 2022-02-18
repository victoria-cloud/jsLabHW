import AppConfig from "../configs/AppConfig.cjs";
import axios from "axios";

class FinanceModel {
  //TODO: this is the bad method that should be replaced by getFinanceData method

  // TODO: define parameters to be able to get dynamic test data
  static async getFinanceData({ company = "AAPL", region = "US", range = '1d', interval = '2m'} = {}) {
    // TODO: the value should contain template variables
    
    const params = `chart/${company}?region=${region}&lang=en-US&includePrePost=false&interval=${interval}&range=${range}&corsDomain=finance.yahoo.com&.tsrc=finance`;
    
    try {
      return await axios.get(AppConfig.baseUrl + params);
    } catch (e) {
      return e.response;
    }
  }
}

export default FinanceModel;
