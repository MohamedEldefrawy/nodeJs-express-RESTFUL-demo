import express from "express"

let app = new express();
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});