import {readFileSync, writeFileSync, stat} from 'fs';

export class FileHandler {
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
        // try {
        //     return JSON.parse(readFileSync(fileName, 'utf8'));
        // } catch (err) {
        //     console.error(err);
        // }
        stat(fileName, function (error, stat) {
            if (error == null) {
                console.log("File exists");
            } else if (error.code === "ENOENT") {
                writeFileSync(fileName, JSON.stringify([]));
            }
        });
        return JSON.parse(readFileSync(fileName, 'utf8'));
    }

    writeJsonFile(content) {
        writeFileSync(this.fileName, content.toString());
    }
}