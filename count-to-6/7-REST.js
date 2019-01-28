module.exports = (...numbers) => {
    let sum = numbers.reduce((container, number) => container + number, 0);
    return sum / numbers.length;
};