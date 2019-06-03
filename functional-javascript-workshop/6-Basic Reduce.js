// Truly name of this exercise is "Basic: Reduce"

countWords = inputWords => inputWords.reduce(
    (accumulator, inputWord) => {
        accumulator[inputWord] ? accumulator[inputWord]++ : accumulator[inputWord] = 1;
        return accumulator;
    }, {}
);

module.exports = countWords;