const express = require("express");
const app = express();

app.set('views', process.argv[3]);
app.set("view engine", "pug");

app.get("/home", (request, response) => {
    response.render("index", {date: new Date().toDateString()});
});

app.listen(process.argv[2]);