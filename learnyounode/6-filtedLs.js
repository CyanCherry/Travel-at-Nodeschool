const path = require('path');
module.exports = function (folderPath, extName, callback) {
    const fs = require("fs");
    fs.readdir(folderPath, function (err, fileList) {
        if (err)
            return callback(err);
        const filteredList = fileList.filter(function (file) {
            return path.extname(file) === '.' + extName;
        });
        callback(null, filteredList);
    });
};