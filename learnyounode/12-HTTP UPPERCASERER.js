const http = require("http");
const map = require("through2-map");

const port = process.argv[2];

const server = http.createServer(function(request, response){
    request.pipe(map((request)=>{
        return request.toString().toUpperCase()
    })).pipe(response);
});

server.listen(port);