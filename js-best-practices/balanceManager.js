let balance = 0;

module.exports = {
    isValidAmount: function (amount) {
        return !(amount === null || amount === undefined)
    },

    increaseBalance: function (amount) {
        if (!this.isValidAmount(amount))
            throw new Error("Invalid Input");
        balance += amount;
    },

    canAfford: function (amount) {
        if (!this.isValidAmount(amount))
            throw new Error("Invalid Input");
        return amount <= balance;
    },

    decreaseBalance: function (amount) {
        if (!this.canAfford(amount))
            throw new Error("Insufficient balance");
        balance -= amount;
    },

    getBalance: function () {
        return balance;
    }
};