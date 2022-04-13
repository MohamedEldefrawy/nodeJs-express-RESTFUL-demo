import express from "express";
import {RouteHandler} from "./routes/RouteHandler.mjs";

let app = new express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use('/', RouteHandler.getRouter());

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});