const _ = require("lodash");

const divide = (cities) => {
    return _.forEach(cities, (city) => {
        if (city.population > 1)
            city.size = "big";
        else if (city.population > 0.5)
            city.size = "med";
        else
            city.size = "small";
    });
};

module.exports = divide;