const express = require("express");
const app = express();

app.get("/search", (request, response) => {
    response.end(JSON.stringify(request.query));
});

app.listen(process.argv[2]);