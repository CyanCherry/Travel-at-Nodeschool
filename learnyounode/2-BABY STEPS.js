let total = 0;

// process.argv是包含程序的启动参数的一个数组
process.argv.forEach(element => {
    if (!isNaN(Number(element)))
        total += Number(element);
});
console.log(total);