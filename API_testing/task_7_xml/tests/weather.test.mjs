import WeatherModel from "../model/WeatherModel.mjs";
import XmlBodyParser from "../lib/XmlBodyParser";
import { expect } from "@jest/globals";

describe("As a Weather API user", () => {
  describe("I have to get HTTP response body", () => {
    test("with [Title] node", async () => {
      const { data } = await WeatherModel.getWeatherData();
      const title = await XmlBodyParser.getTitle(data);
      //  TODO: insert verifications to verify Title node value
      expect(title).toEqual("New York, NY - AccuWeather.com Forecast");
      // ...
    });
    //  TODO: insert verifications to check that every item node contains the following child nodes:
    //title
    test("with [Channel] items: title", async () => {
      const { data } = await WeatherModel.getWeatherData();
      const items = await XmlBodyParser.getItems(data, 'title');
      expect(items).not.toBeUndefined();
      console.log(items);
    });
    //link
    test("with [Channel] items: link", async () => {
      const { data } = await WeatherModel.getWeatherData();
      const items = await XmlBodyParser.getItems(data, 'link');
      expect(items).not.toBeUndefined();
      console.log(items);
    });
    //guid
    test("with [Channel] items: guid", async () => {
      const { data } = await WeatherModel.getWeatherData();
      const items = await XmlBodyParser.getItems(data, 'guid');
      expect(items).not.toBeUndefined();
      console.log(items);
    });
    // - description
    test("with [Channel] items: description", async () => {
      const { data } = await WeatherModel.getWeatherData();
      const items = await XmlBodyParser.getItems(data, 'description');
      expect(items).not.toBeUndefined();
      console.log(items);
    });
    // - pubDate
    test("with [Channel] items: pubDate", async () => {
      const { data } = await WeatherModel.getWeatherData();
      const items = await XmlBodyParser.getItems(data, 'pubDate');
      expect(items).not.toBeUndefined();
      console.log(items);
    });
      //  TODO: the verifications should check that:
      // - link node value contains a https 
      test("with [Channel] items: link node value contains a https", async () => {
        const { data } = await WeatherModel.getWeatherData();
        const items = await XmlBodyParser.getItems(data, 'link');
        const regexp1 = /https/gm
        expect(items).toMatch(regexp1);
        console.log(items);
      });
        // - guid node has "isPermaLink" attribute
      test("with [Channel] items: guid node has 'isPermaLink' attribute", async () => {
        const { data } = await WeatherModel.getWeatherData();
        const permalink = await XmlBodyParser.getPermalink(data, 'guid');
        expect(permalink).toMatch(/isPermaLink/m) //<node isPermaLink="false">
        console.log(permalink);
      });
  });
});
