import * as fs from 'fs';
import * as path from 'path';

const TEST_DATA_DIR = 'data/post_data/';
class InputTestDataProvider {

    static getTestData(fileName) {
        let postData ='';
        const filePath = path.join(TEST_DATA_DIR, fileName)
        try {
            postData = fs.readFileSync(filePath, 'utf8');
        } catch (e) {
            console.log(e.stack);
        }
        return JSON.parse(postData);
    }
}


export default InputTestDataProvider;
