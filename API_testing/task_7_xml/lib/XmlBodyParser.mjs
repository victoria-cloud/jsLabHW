import { DOMParser } from "xmldom";

class XmlBodyParser {
  static async getTitle(httpResponseBody) {
    const documentObject = new DOMParser().parseFromString(
      httpResponseBody,
      "text/xml"
    );
    const channelElement = documentObject
      .getElementsByTagName("rss")[0]
      .getElementsByTagName("channel")[0];

    const contentPropertiesList = channelElement.childNodes;
    for (let k = 0; k < contentPropertiesList.length; k++) {
      const property = contentPropertiesList.item(k);
      if (property.nodeName === "title") {
        return property.textContent
      }
    }
  }

  static async getItems(httpResponseBody, prop) {
      //TODO: extract and return Item node list
    const documentObject = new DOMParser().parseFromString(httpResponseBody, "text/xml");
    let itemsList = documentObject.getElementsByTagName('item')

    for(let i = 0; i < itemsList.length; i++) {
      const propertiesList = itemsList[i].childNodes
        for (let k = 0; k < propertiesList.length; k++) {
          const property = propertiesList.item(k)
            if (property.nodeName === prop) {
              return 'Item\'s property ' + prop + ' has text - ' + property.textContent;
            }
            if (prop === 'guid2') {
              return property.nodeName === 'guid' //return property to check isPermaLink, not text content
            }
        }
    }       
  }
    static async getPermalink(httpResponseBody, prop) {
      //TODO: extract and return Item node list
    const documentObject = new DOMParser().parseFromString(httpResponseBody, "text/xml");
    let itemsList = documentObject.getElementsByTagName('item')
    
    for(let i = 0; i < itemsList.length; i++) {
      const propertiesList = itemsList[i].childNodes
          for (let k = 0; k < propertiesList.length; k++) {
            const property = propertiesList.item(k)
              if (property.nodeName === prop) {
                return 'Item\'s property ' + prop + ' has text - ' + property;
              }            
          }
    }       
  }     
}

export default XmlBodyParser;
