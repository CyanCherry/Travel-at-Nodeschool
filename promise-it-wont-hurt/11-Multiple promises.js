function all(promise1, promise2) {
    return new Promise((fulfill) => {
        let count = 0;
        let result1;
        let result2;
        promise1.then((result) => {
            count++;
            result1 = result;
            if (count === 2)
                fulfill([result1, result2]);
        });
        promise2.then((result) => {
            count++;
            result2 = result;
            if (count === 2)
                fulfill([result1, result2]);
        })
    })
}

function onRejected(error) {
    console.log(error.message)
}

all(getPromise1(), getPromise2())
    .then(console.log, onRejected);