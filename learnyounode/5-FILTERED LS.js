var fs = require("fs");
var path = require("path");
var folderPath = process.argv[2];
var extName = "." + process.argv[3];
fs.readdir(folderPath, function(err, list) {
  if (err) throw err;
  list.forEach(file => {
    if (path.extname(file) === extName) console.log(file);
  });
});
