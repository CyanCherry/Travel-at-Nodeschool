/*jshint esversion:6*/
var http = require("http");
http.get(process.argv[2], (response) => {
    var html = "";
    response
        .on("end", () => {
            console.log(html);
        })
        .on("data", (data) => {
            data.toString("utf-8").split("\n").forEach(line => {
                html += line;
                html += "\n";
            });
        })
        .on("error", console.error);
}).on("error", (e) => {
    console.log(e);
});