import {UserServices} from "../services/UserServices.mjs";

export class UsersController {

    homeController(request, response) {
        response.render("home", {});
    }

    registerController(request, response) {
        // let result = new UserServices().createUser(request.body);
        // console.log(result);
        response.json(new UserServices().createUser(request.body).then(data => {
            return {
                'success': true,
                'newUser': request.body
            }
        }).catch(error => {
            return {
                success: false,
                message: 'user name already exists',
                error: error
            }
        }));
    }

    loginController(request, response) {
        let loginResult = new UserServices().login(request.body);
        response.json(loginResult);
    }

    getUserController(request, response) {
        let selectedUser = new UserServices().getUser(request.params.name);
        console.log(selectedUser);
        response.json(selectedUser);
    }

    getUsersController(request, response) {
        let userService = new UserServices();
        let users = userService.getAllUsers().then(data => {
            response.json(data);
        });
    }

    updateUserController(request, response) {
        let result = new UserServices().updateUser(request.params.name, request.body);
        response.json(result);
    }

    deleteUserController(request, response) {
        let result = new UserServices().deleteUser(request.params.name);
        response.json(result);
    }

}