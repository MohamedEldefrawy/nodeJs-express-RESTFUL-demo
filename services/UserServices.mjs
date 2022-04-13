import {FileHandler} from '../utilities/FileHandler.mjs'

export class UserServices {

    getUser(userName) {
        return this.getAllUsers().find((user) => {
            if (user.username === userName)
                return user;
        });
    }

    getAllUsers() {
        return new FileHandler().readJsonFile('./users.json');
    }

    createUser(newUser) {
        let users = this.getAllUsers();
        console.log(this.getUser(newUser.username));

        if (this.getUser(newUser.username) === undefined) {
            users.push(newUser);
            let fileHandler = new FileHandler();
            fileHandler.fileName = './users.json';
            fileHandler.writeJsonFile(JSON.stringify(users));
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
            users.filter((user) => {
                return user.name !== userName;
            });
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
            users.filter((user) => {
                return user.name !== userName;
            });
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
        let currentUser = this.getUser(user.username);

        if (currentUser !== null && user.password === currentUser.password)
            return {
                'success': true,
                'message': `Welcome${user.username}`
            };
        return {
            'success': false,
            'message': "Wrong username or password"
        };
    }
}