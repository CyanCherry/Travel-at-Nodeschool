// 函数作为一个对象类型，可以赋值给变量，
// 通过变量名可以调用变量中存储的函数
let eat = function (food) {
    return food + ' tasted really good.';
};
console.log(eat('bananas'));