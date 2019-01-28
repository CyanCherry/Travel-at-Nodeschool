let hello = (helloString, bangs = helloString.length) => helloString + "!".repeat(bangs);

module.exports = hello;