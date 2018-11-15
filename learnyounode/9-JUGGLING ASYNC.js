const http = require("http");
const bl = require("bl");

let results = [];
let count = 0;

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
            results[index] = data.toString();
            count++;
            tryOutput();
        }));
    });
}

for (let index = 0; index < 3; index++) {
    httpGet(index);
}