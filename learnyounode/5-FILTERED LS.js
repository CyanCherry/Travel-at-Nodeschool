const fs = require("fs");
const path = require("path");
const folderPath = process.argv[2];
const extName = "." + process.argv[3];

fs.readdir(folderPath, function (err, list) {
  if (err) throw err;
  list.forEach(file => {
    if (path.extname(file) === extName) console.log(file);
  });
});
