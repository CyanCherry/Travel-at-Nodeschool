/* jshint esversion:6 */
const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const path = process.argv[3];

const server = http.createServer((request, response) => {
    response.writeHead(200, {"content-type": "text/plain"});
    fs.createReadStream(path).pipe(response);
});

server.listen(port);