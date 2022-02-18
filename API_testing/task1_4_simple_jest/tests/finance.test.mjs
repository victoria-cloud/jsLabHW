import { expect } from "@jest/globals";
import FinanceModel from "../model/FinanceModel";

describe("As a FinanceModel API user", () => {
  describe("I have to get HTTP response code", () => {
    test("200 for a valid range", async () => {
      //TODO: replace this method with FinanceModel.getFinanceData(...) method
      // to be able to define different test conditions:
      // - company
      // - region
      // - interval
      // - range

      const { status } = await FinanceModel.getFinanceData({ range: "1d" });
      expect(status).toBe(200);
    });

    test("422 for a invalid range", async () => {
      // TODO: put required parameter to simulate the required test condition
      const { status } = await FinanceModel.getFinanceData({ range: "1000d" });
      //  TODO: insert verifications
      expect(status).toBe(422);
     
    });

    test("404 for a nonexistent company", async () => {
      // TODO: put required parameter to simulate the required test condition
      const { status } = await FinanceModel.getFinanceData({ company: null });
      //  TODO: insert verifications
      expect(status).toBe(404);
     
    });
    test("200 for a valid company", async () => {
      // TODO: put required parameter to simulate the required test condition
      const { status } = await FinanceModel.getFinanceData({ company: "APPL" });
      //  TODO: insert verifications
      expect(status).toBe(200);
     
    });
    test("200 for a valid interval", async () => {
      // TODO: put required parameter to simulate the required test condition
      const { status } = await FinanceModel.getFinanceData({ interval: "2m" });
      //  TODO: insert verifications
      expect(status).toBe(200);
      // ...
    });
    test.only("200 for a valid region", async () => {
      // TODO: put required parameter to simulate the required test condition
      const { status } = await FinanceModel.getFinanceData({ region: "US" });
      // const response= await FinanceModel.getFinanceData();
      // console.log(response.config['url']);
      // console.log(response.request['_header']);
      //  TODO: insert verifications
      expect(response.status).toBe(200);
    });
  });

  describe("I have to get values for response headers", () => {
    test("content-type", async () => {
      const { headers } = await FinanceModel.getFinanceData();
      expect(headers["content-type"]).toBe("application/json;charset=utf-8");
    });

    test("x-request-id", async () => {
      const { headers } = await FinanceModel.getFinanceData();
      //  TODO: insert verifications for "x-request-id" header
      //  You have to use regular expression to verify a headers unique value:
      //  "d5f838b8-fe84-4f2a-b950-7a07f13264a7"
      const re = /^[0-9a-z]{8}-([0-9a-z]{4}-){3}[0-9a-z]{12}$/gm;
      expect(headers["x-request-id"]).toMatch(re);
    });
  });
});
