import express from "express";
import {RouteHandler} from "./routes/RouteHandler.mjs";


let app = new express();
const PORT = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(RouteHandler.getRouter());
app.use('/static/css', express.static('./static/css'));

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});