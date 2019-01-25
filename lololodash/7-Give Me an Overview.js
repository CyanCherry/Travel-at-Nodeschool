const _ = require("lodash");

function reduce(orders) {
    return _.chain(orders)
        .groupBy("article")
        .map((groupedOrders, article) => {
            return {
                article: parseInt(article), total_orders: _.reduce(groupedOrders, (container, order) => {
                    return container + order.quantity;
                }, 0)
            }
        })
        .sortBy("total_orders")
        .reverse()
        .value();
}

module.exports = reduce;

console.log(reduce(
    [
        {article: 1, quantity: 4},
        {article: 2, quantity: 2},
        {article: 1, quantity: 5}
    ]
));