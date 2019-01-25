const express = require("express");
const fs = require("fs");
const app = express();

app.get("/books", (req, res) => {
    res.end(JSON.stringify(JSON.parse(fs.readFileSync(process.argv[3]).toString())));
});

app.listen(process.argv[2]);

