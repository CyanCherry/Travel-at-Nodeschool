/* jshint esversion:6 */
const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const path = process.argv[3];
const readStream = fs.createReadStream(path);

const server = http.createServer((request, response) => {
    response.pipe(readStream);
});

server.listen(port);