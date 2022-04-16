import mongoose from "mongoose";

export class Users {
    _schema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    });

    get schema() {
        return this._schema;
    }
}