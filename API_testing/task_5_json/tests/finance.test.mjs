import FinanceModel from "../model/FinanceModel";
import JsonBodyParser from "../lib/JsonBodyParser";
import { expect } from "@jest/globals";

describe("As a FinanceModel API user", () => {
  describe("I have to get HTTP response body", () => {
    test.only("with [Symbol] property", async () => {
      // TODO: define valid path to extract data for Symbol property
      const SYMBOL_PATH = "$.chart.result[0].meta.symbol";
      let { data } = await FinanceModel.getFinanceData();
      const value = JsonBodyParser.getValueForPath(data, SYMBOL_PATH);
      expect(value).toContain("AAPL");
      // TODO: insert verifications to verify that Symbol property contains a value
      // corresponding test data: AAPL...
      // ...
    });

    test("with [range] property", async () => {
      //TODO: define valid path to extract data for Range property
      const RANGE_PATH = "$.chart.result[0].meta.range";
      let { data } = await FinanceModel.getFinanceData();
      const value = JsonBodyParser.getValueForPath(data, RANGE_PATH);
      // TODO: insert verifications to verify that range property contains a value
      // corresponding test data: 1d, 2d...
      expect(value).toContain("1d");  
    });

    test("with [tradingPeriods] property", async () => {
      // TODO: define valid path to extract data for TradingPeriods property
      const TRADING_PATH = "$.chart.result[0].meta.tradingPeriods";
      let { data } = await FinanceModel.getFinanceData();
      const value = JsonBodyParser.getValueForPath(data, TRADING_PATH);
      // TODO: insert verifications to verify that TradingPeriods property contains a
      // non empty array
      expect(value).not.toBeUndefined();
    });

    test("with [currentTradingPeriod] property", async () => {
      // TODO: define valid path to extract data for CurrentTradingPeriod property
      const CURRENT_TRADING_PERIOD_PATH = "$.chart.result[0].meta.currentTradingPeriod";
      let { data } = await FinanceModel.getFinanceData();
      const value = JsonBodyParser.getValueForPath(data, CURRENT_TRADING_PERIOD_PATH);
      const keysToCompare = ['pre', 'regular', 'post'];
      // TODO: insert verifications
      // The test should check that
      // CurrentTradingPeriod property contains 3 objects: pre, regular, post
      expect(Object.keys(value[0])).toEqual(keysToCompare);
    });

    test("with [error] property", async () => {
      // TODO: define valid path to extract data for error property
      const ERROR_PATH = '$.chart.error.code'
      let { data } = await FinanceModel.getFinanceData({range:'100d'});
      const value = JsonBodyParser.getValueForPath(data, ERROR_PATH);
      expect(value).toContain('Unprocessable Entity');
      // TODO: insert verifications
      // The test should check that code property contains
      // "Unprocessable Entity" value when an invalid range was used.
      // ...
    });
  });
});
