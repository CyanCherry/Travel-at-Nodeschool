var path = require('path');
module.exports = function (folderPath, extName, callback) {
    var fs = require("fs");
    fs.readdir(folderPath, function (err, fileList) {
        if (err)
            return callback(err);
        var filetedList = fileList.filter(function (file) {
            return path.extname(file) === '.' + extName;
        });
        callback(null, filetedList);
    });
};