import {UserServices} from "../services/UserServices.mjs";

export class UsersController {

    homeController(request, response) {
        response.render("home", {});
    }

    registerController(request, response) {
        let result = new UserServices().createUser(request.body);
        console.log(result);
        response.json(result);
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
        let users = userService.getAllUsers();
        response.json(users);
    }

    updateUserController(request, response) {
    }

    deleteUserController(request, response) {
    }

}