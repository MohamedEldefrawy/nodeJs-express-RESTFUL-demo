import {readFileSync, writeFileSync} from 'fs';

class FileHandler {
    fileName;

    get fileName() {
        return this._fileName;
    }

    set fileName(value) {
        this._fileName = value;
    }

    constructor(fileName) {
        this._fileName = fileName;
    }

    readJsonFile(fileName) {
        try {
            return JSON.parse(readFileSync(fileName, 'utf8'));
        } catch (err) {
            console.error(err)
        }
    }

    writeJsonFile(content) {
        writeFileSync(this.fileName, content.toString());
    }
}