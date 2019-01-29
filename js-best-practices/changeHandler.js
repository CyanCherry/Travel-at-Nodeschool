// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
const coins = {
    'p': 1,
    'n': 5,
    'd': 10,
    'q': 25
};
module.exports = {
    getAmount: function (coinType) {
        if (!coins.hasOwnProperty(coinType)) {
            throw new Error('Unrecognized coin ' + coinType);
        }
        return coins[coinType];
    },

    convertToChange: function (price) {
        let coins = [];
        while (price >= 25) {
            coins.push("q");
            price -= 25;
        }
        while (price >= 10) {
            coins.push("d");
            price -= 10;
        }
        while (price >= 5) {
            coins.push("n");
            price -= 5;
        }
        while (price >= 1) {
            coins.push("p");
            price -= 1;
        }
        return coins;
    }
};