// Truly name of this exercise is "Basic: Recursion"

let reduce = (arr, fn, initial) => {
    if (arr.length < 1)
        return initial;
    else {
        fn(initial, arr[0]);
        return reduce(arr.slice(1), fn, initial);
    }
};

module.exports = reduce;