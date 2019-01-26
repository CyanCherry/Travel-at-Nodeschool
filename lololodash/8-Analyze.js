const _ = require("lodash");

const classDivision = (incomes) => {
    let average = _.reduce(incomes, (container, income) => {
        return container + income.income
    }, 0) / _.size(incomes);
    incomes = _.sortBy(incomes, "income");
    return {
        average: average,
        underperform: _.filter(incomes, (income) => {
            return income.income <= average;
        }),
        overperform: _.filter(incomes, (income) => {
            return income.income > average;
        })
    }
};

module.exports = classDivision;

console.log(classDivision(
    [
        {name: "mike", income: 2563},
        {name: "kim", income: 1587},
        {name: "liz", income: 3541},
        {name: "tom", income: 2475},
        {name: "bello", income: 987},
        {name: "frank", income: 2975}
    ]
));