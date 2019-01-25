const express = require("express");
const app = express();

app.set("views", process.argv[3]);

app.use(require("stylus").middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2] || 3000);