import mongoose from 'mongoose'
import {Users} from './Users.mjs'

export class DbConnection {
    static openConnection(name) {
        mongoose.connect("mongodb://localhost:27017/" + name).then(r => {
            console.log("Database has been connected");
        });

        return mongoose.model("Users", new Users().schema);
    }
}