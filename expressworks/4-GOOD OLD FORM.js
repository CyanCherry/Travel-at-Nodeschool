const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (request, response) => {
    response.render("<form><input name=\"str\"/></form>");
});

app.post("/form", (request, response) => {
    response.end(request.body.str.split("").reverse().join(""));
});

app.listen(process.argv[2] || 3000);