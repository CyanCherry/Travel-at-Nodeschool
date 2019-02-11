console.log(
    // 通过require加载模块，fs模块用于文件操作
    require('fs')
        .readFileSync(process.argv[2])    // 同步读取文件，读取时阻塞程序
        .toString()
        .split("\n").length - 1
);
