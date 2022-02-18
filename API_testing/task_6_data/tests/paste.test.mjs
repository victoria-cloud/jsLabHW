import PasteModel from "../model/PasteModel";
import InputTestDataProvider from "../lib/InputTestDataProvider";
import TokenProvider from "../lib/TokenProvider";
import { expect } from "@jest/globals";

describe("As a Paste API user", () => {
  describe("I need to be able to create Paste and get", () => {
    test("200 for a valid data", async () => {
      const { data } = await PasteModel.postPastePlainData(
        "test",
        "pastbin_token_1"
      );
      // TODO: received data contains URL of created Paste: "https://pastebin.com/C3ZZxfm7"
      // put your verifications here
      const re = /^https\:\/\/pastebin\.com\/[0-9a-zA-Z]{8}/gm;
      expect(data).toMatch(re);
      // ...
    });
  });

  describe("I need to be able to create Paste with", () => {
    test.only("10 min expiration time", async () => {
      // TODO: Develop "getTestData" method to extract file content from files located on "<projectDir>/data/post_data" directory
      // to be able to define POST body dynamically
      const testData = InputTestDataProvider.getTestData("case1.json");
      const token = TokenProvider.getToken("pastbin_token_1");
      const res = await PasteModel.postPaste(token, testData);
      expect(res.config.data).toMatch(/(api_paste_expire_date=10M)/gm);
      // put your verifications here. You need to verify that the created Paste has been created with 10 min
      // expiration timeout
      // ...
    });
  });
});
