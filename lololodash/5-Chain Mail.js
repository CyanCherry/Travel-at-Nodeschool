const _ = require("lodash");

chain = (words) =>
    _.chain(words)
        .map((word) => (word + "chained").toUpperCase())
        .sort()
        .value();

module.exports = chain;

console.log(chain(['Test', 'Hello', 'World', 'Node', 'JavaScript']));