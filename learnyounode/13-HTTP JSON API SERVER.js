const http = require("http");
const url = require("url");

const port = process.argv[2];

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime(time) {
    return {unixtime: time.getTime()}
}

const server = http.createServer((request, response) => {
    response.writeHead(200, {"content-type": "application/json"});
    let pathname = url.parse(request.url, true).pathname;
    let time = new Date(url.parse(request.url, true).query.iso);

    if (pathname === "/api/parsetime") {
        response.end(JSON.stringify(parseTime(time)));
    }
    else if (pathname === "/api/unixtime") {
        response.end(JSON.stringify(unixTime(time)));
    }
});

server.listen(port);