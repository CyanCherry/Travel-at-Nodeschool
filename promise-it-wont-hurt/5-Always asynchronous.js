const promise = new Promise((fulfill) => {
    fulfill("PROMISE VALUE");
});
promise.then((result) => {
    console.log(result)
});
console.log("MAIN PROGRAM");