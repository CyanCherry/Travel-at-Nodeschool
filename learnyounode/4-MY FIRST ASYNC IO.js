const fs = require('fs');

// 异步读取文件
fs.readFile(process.argv[2], 'utf-8', function (err, buffer) {
    // 处理异常情况
    if (err)
        throw err;

    console.log(buffer.split("\n").length - 1);
});