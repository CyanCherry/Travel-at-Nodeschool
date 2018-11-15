const module = require('./6-filtedLs');
const folderPath = process.argv[2];
const extName = process.argv[3];
const callback = function (err, fileList) {
    if (err)
        console.log(err);
    fileList.forEach(function (file) {
        console.log(file);
    });
};
module(folderPath, extName, callback);