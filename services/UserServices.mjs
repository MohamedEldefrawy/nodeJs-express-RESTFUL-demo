import {FileHandler} from '../utilities/FileHandler.mjs'
import {DbConnection} from "../model/DbConnection.mjs";

export class UserServices {

    dbContext;

    constructor() {
        this.dbContext = DbConnection.openConnection("test_users");
    }

    getUser(email) {
        return this.dbContext.find({"email": email});
    }

    getAllUsers() {
        return this.dbContext.find({});
    }

    createUser(newUser) {
        return this.dbContext.create(newUser);
    }

    updateUser(email, newUser) {
        return this.dbContext.findOneAndUpdate({"email": email}, newUser);
    }

    deleteUser(email) {
        return this.dbContext.findOneAndDelete({"email": email});
    }

    async login(user) {
        let currentUser = await this.dbContext.findOne({"email": user.email}).exec();

        // console.log(currentUser);
        // console.log(user);
        if (currentUser !== undefined && currentUser.password === user.password)
            return {
                success: true,
                email: user.email,
                message: `Welcome ${user.name}`
            }
        else
            return {
                success: false,
                message: "Wrong username or password"
            };

    }


}