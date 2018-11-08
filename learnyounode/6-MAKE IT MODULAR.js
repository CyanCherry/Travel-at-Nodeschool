var module = require('./6-filtedLs');
var folderPath = process.argv[2];
var extName = process.argv[3];
var callback = function (err, fileList) {
    if (err)
        console.log(err);
    fileList.forEach(function (file) {
        console.log(file);
    });
};
module(folderPath, extName, callback);