let total = 0;
let limit = 10;

// 小括号内的三个语句，分别用于
// 初始化循环控制变量i，
// 设定循环条件，循环条件满足时会执行循环体，
// 设定每次执行完循环体后执行的语句
for (let i = 0; i < limit; i++) {
    total += i;
}
console.log(total);