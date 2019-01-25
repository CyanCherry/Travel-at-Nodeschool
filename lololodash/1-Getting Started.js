const _ = require("lodash");

const filter = (Objects) => {
    return _.filter(Objects, {"active": true});
};

module.exports = filter;