const _ = require("lodash");

reduce = (orders) => _.chain(orders)
    .groupBy("article")
    .map((groupedOrders, article) => ({
            article:
                parseInt(article),
            total_orders:
                _.reduce(groupedOrders,
                    (container, order) => container + order.quantity,
                    0)
        })
    )
    .sortBy("total_orders")
    .reverse()
    .value();

module.exports = reduce;

console.log(reduce([
    {article: 1, quantity: 4},
    {article: 2, quantity: 2},
    {article: 1, quantity: 5}
]));