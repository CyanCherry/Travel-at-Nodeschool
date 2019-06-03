repeat = (operation, num) => {
    while (--num)
        operation();
};

module.exports = repeat;