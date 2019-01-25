const _ = require("lodash");

function chain(words) {
    return _.chain(words)
        .map((word) => {
            return (word + "chained").toUpperCase();
        })
        .sort()
        .value();
}

module.exports = chain;

console.log(chain(['Test', 'Hello', 'World', 'Node', 'JavaScript']));