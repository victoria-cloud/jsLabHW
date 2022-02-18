import jsonpath from 'jsonpath';

class JsonBodyParser {

    static getValueForPath(jsonData, path) {
        return jsonpath.query(jsonData, path);
    }
}

export default JsonBodyParser;
