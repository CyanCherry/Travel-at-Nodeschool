/*jshint esversion:6*/
const http = require("http");
http.get(process.argv[2], (response) => {
    let html = "";
    response
        .on("end", () => {
            console.log(html);
        })
        .on("data", (data) => {
            data.toString().split("\n").forEach(line => {
                html += line;
                html += "\n";
            });
        })
        .on("error", console.error);
}).on("error", (e) => {
    console.log(e);
});