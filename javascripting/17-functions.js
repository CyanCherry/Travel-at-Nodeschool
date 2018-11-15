//函数作为一个数据类型，可以复制给变量并通过变量名调用
let eat = function (food) {
    return food + ' tasted really good.';
};
console.log(eat('bananas'));