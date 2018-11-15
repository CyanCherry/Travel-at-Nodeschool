const http = require("http");
const BufferList = require("bl");

const url = process.argv[2];

http.get(url, (response) => {
    if (response.statusCode === 200) {
        response.pipe(BufferList((err, data) => {
            if (err)
                console.log(err);
            console.log(data.toString().length);
            console.log(data.toString());
        }));
        // let string = "";
        // response
        //     .on("data", (data, err) => {
        //         string += data.toString();
        //     })
        //     .on("end", () => {
        //         console.log(string);
        //         string = "";
        //     });
    }
});