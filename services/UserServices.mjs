import {FileHandler} from '../utilities/FileHandler.mjs'

export class UserServices {

    getUser(userName) {
        return this.getAllUsers().find((user) => {
            if (user.name === userName)
                return user;
        });
    }

    getAllUsers() {
        return new FileHandler().readJsonFile('./model/users.json');
    }

    createUser(newUser) {
        let users = this.getAllUsers();
        let user = this.getUser(newUser.name);

        if (user === undefined) {
            users.push(newUser);
            new FileHandler().writeJsonFile(users);
            return {
                'success': true,
                'newUser': newUser
            }
        }
        return {
            success: false,
            message: 'user name already exists'
        }
    }

    updateUser(userName, newUser) {
        let users = this.getAllUsers();
        let selectedUser = this.getUser(userName);

        if (selectedUser !== undefined) {
            selectedUser.email = newUser.email;
            selectedUser.phone = newUser.phone;
            selectedUser.name = newUser.name;
            selectedUser.password = newUser.password
            users.splice(users.findIndex(value => {
                return value.name === userName;
            }), 1);

            users.push(selectedUser);

            new FileHandler().writeJsonFile(users);

            return {
                'success': true,
                'newUser': selectedUser
            }
        }
        return {
            success: false,
            message: "couldn't find selected user"
        }
    }

    deleteUser(userName) {
        let users = this.getAllUsers();
        let selectedUser = this.getUser(userName);
        if (selectedUser !== undefined) {
            users.splice(users.findIndex(value => {
                return value.name === userName;
            }), 1);
            new FileHandler().writeJsonFile(users);

            return {
                'success': true,
                message: 'selected user has been deleted',
                'newUser': selectedUser
            }
        }

        return {
            'success': false,
            message: "'couldn't find selected user",
        }
    }

    login(user) {
        let currentUser = this.getUser(user.name);

        if (currentUser !== undefined && user.password === currentUser.password)
            return {
                'success': true,
                'message': `Welcome ${user.name}`
            };
        return {
            'success': false,
            'message': "Wrong username or password"
        };
    }
}