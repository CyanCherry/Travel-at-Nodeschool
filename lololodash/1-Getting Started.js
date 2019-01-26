const _ = require("lodash");

const filter = (Objects) => _.filter(Objects, {"active": true});

module.exports = filter;