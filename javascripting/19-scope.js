// 对于同时处于多个同名变量的作用域中的语句而言，小作用域的变量的可视性高于大作用域的变量
let a = 1,
    b = 2,
    c = 3;
// a: 1, b: 2, c: 3
(function firstFunction() {
    let b = 5,
        c = 6;
    // a: 1, b: 5, c: 6
    (function secondFunction() {
        let b = 8;
        // a: 1, b: 8, c: 6
        console.log("a: " + a + ", b: " + b + ", c: " + c);
        (function thirdFunction() {
            let a = 7,
                c = 9;
            // a: 7, b: 8, c: 9
            (function fourthFunction() {
                let a = 1,
                    c = 8;
                // a: 1, b: 8, c: 8
            })();
        })();
    })();
})();