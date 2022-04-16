import express from "express";
import {UsersController} from "../controllers/UsersController.mjs";

export class RouteHandler {

    static router;
    static userController;

    static getRouter() {
        RouteHandler.router = new express.Router();
        RouteHandler.userController = new UsersController();
        // RouteHandler.router("/").get().post()
        RouteHandler.router.get('/', RouteHandler.userController.homeController);
        RouteHandler.router.get('/home', RouteHandler.userController.homeController);
        RouteHandler.router.get('/users', RouteHandler.userController.getUsersController);
        RouteHandler.router.post('/users', RouteHandler.userController.registerController);
        RouteHandler.router.post('/users/login', RouteHandler.userController.loginController);
        RouteHandler.router.get('/users/:name', RouteHandler.userController.getUserController);
        RouteHandler.router.put('/users/:name', RouteHandler.userController.updateUserController);
        RouteHandler.router.delete('/users/:name', RouteHandler.userController.deleteUserController);
        return this.router;
    }
}