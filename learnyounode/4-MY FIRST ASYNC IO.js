var fs = require("fs");
var data;
fs.readFile(process.argv[2], "utf-8", function (err, buffer) {
  if (err) throw err;

  function getData() {
    return buffer;
  }
  data = getData;
  console.log(buffer.split("\n").length - 1);
});
//console.log(data.split("\n").length - 1);
//data is undefined