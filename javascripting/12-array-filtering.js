let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//JavaScript的回调函数是大坑
//数组提供了filter，可以挑选出并返回符合过滤条件的元素，需要传入一个包含了过滤条件的回调函数
const filtered = numbers.filter(function evenNumbers(number) {
    return number % 2 === 0;
});
console.log(filtered);
