const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

module.exports = {
    getProducts: function () {
        return productInventory.getProducts()
    },

    releaseChange: function () {
        const currentBalance = balanceManager.getBalance();
        balanceManager.decreaseBalance(currentBalance);
        return changeHandler.convertToChange(currentBalance);
    },

    insertCoin: function (coinType) {
        const value = changeHandler.getAmount(coinType);
        balanceManager.increaseBalance(value);
    },

    vendProduct: function (productId) {
        const product = productInventory.getProduct(productId);
        balanceManager.decreaseBalance(product.price);
        return product;
    }
};
