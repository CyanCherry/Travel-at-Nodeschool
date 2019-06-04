// Truly name of this exercise is "Basic: Call"

function duckCount() {
    return Array.prototype.reduce.call(
        arguments,
        (count, argument) => Object.prototype.hasOwnProperty.call(argument, 'quack') ? count + 1 : count,
        0
    )
}

// duckCount = () => {
//     return Array.prototype.reduce.call(
//         arguments,
//         (count, argument) => Object.prototype.hasOwnProperty.call(argument, 'quack') ? count + 1 : count,
//         0
//     )
// }
// don't make sense, because each arrow function without its own bindings to the this, arguments, super, or new.target keywords.

module.exports = duckCount;
