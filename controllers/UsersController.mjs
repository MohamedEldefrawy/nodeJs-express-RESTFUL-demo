import {UserServices} from "../services/UserServices.mjs";

export class UsersController {

    static userService = new UserServices();

    homeController(request, response) {
        response.render("home", {});
    }

    registerController(request, response) {
        UsersController.userService.createUser(request.body).then(data => {
            response.json({
                'success': true,
                'newUser': request.body
            })
        }).catch(error => {
            response.json({
                success: false,
                message: 'user name already exists',
                error: error
            });
        });
    }

    loginController(request, response) {
        UsersController.userService.login(request.body).then(data => {
            response.json(data);
        });
    }

    getUserController(request, response) {
        UsersController.userService.getUser(request.params.email).then(data => {
            response.json(
                {
                    success: true,
                    user: data
                }
            )
        }).catch(error => {
            response.json({
                success: false,
                error: error
            });
        });
    }

    getUsersController(request, response) {
        UsersController.userService.getAllUsers().then(data => {
            response.json({
                success: true,
                data: data
            });
        }).catch(onerror => {
            return {
                success: false,
                error: onerror
            }
        });
    }

    updateUserController(request, response) {
        UsersController.userService.updateUser(request.params.email, request.body).then(data => {
            response.json({
                success: true,
                data: data
            });
        }).catch(onerror => {
            return {
                success: false,
                error: onerror
            }
        });
    }

    deleteUserController(request, response) {
        UsersController.userService.deleteUser(request.params.email).then(data => {
            response.json({
                success: true,
                data: data
            });
        }).catch(onerror => {
            return {
                success: false,
                error: onerror
            }
        });
    }

}