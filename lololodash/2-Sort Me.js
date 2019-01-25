const _ = require("lodash");

const sorter = (Objects) => {
    return _.sortBy(Objects, item => {
        return -item.quantity
    });
};

module.exports = sorter;