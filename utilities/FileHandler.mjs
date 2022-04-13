import {readFileSync, writeFileSync, stat} from 'fs';

export class FileHandler {
    fileName;


    get fileName() {
        return this._fileName;
    }

    set fileName(value) {
        this._fileName = value;
    }

    constructor() {
        this._fileName = "./model/users.json";
    }

    readJsonFile(fileName) {
        stat(fileName, function (error, stat) {
            if (error == null) {
            } else if (error.code === "ENOENT") {
                writeFileSync(fileName, JSON.stringify([]));
            }
        });
        return JSON.parse(readFileSync(fileName, 'utf8'));
    }

    writeJsonFile(content) {
        writeFileSync(this._fileName, JSON.stringify(content));
    }
}