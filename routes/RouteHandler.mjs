import express from "express";
import {UsersController} from "../controllers/UsersController.mjs";

export class RouteHandler {

    static router;
    static userController;

    static getRouter() {
        RouteHandler.router = new express.Router();
        RouteHandler.userController = new UsersController();
        RouteHandler.router.get('/', RouteHandler.userController.homeController);
        RouteHandler.router.get('/home', RouteHandler.userController.homeController);
        return this.router;
    }
}