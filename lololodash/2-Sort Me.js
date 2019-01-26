const _ = require("lodash");

const sorter = (Objects) => _.sortBy(Objects, item => -item.quantity);

module.exports = sorter;