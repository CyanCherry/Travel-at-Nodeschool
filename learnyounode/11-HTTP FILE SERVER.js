/* jshint esversion:6 */
var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var path = process.argv[3];
var readStream = fs.createReadStream(path);

var server = http.createServer((request, response) => {
    response.pipe(readStream);
});

server.listen(port);