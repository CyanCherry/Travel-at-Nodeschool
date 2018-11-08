/* jshint esversion:6 */
var http = require("http");
var bl = require("bl");

var results = [];
var count = 0;

function tryOutput() {
    if (count === 3) {
        for (let index = 0; index < 3; index++)
            console.log(results[index]);
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], (response) => {
        response.pipe(bl((err, data) => {
            if (err)
                return console.log(err);
            results[index] = data.toString("utf-8");
            count++;
            tryOutput();
        }));
    });
}

for (let index = 0; index < 3; index++) {
    httpGet(index);
}