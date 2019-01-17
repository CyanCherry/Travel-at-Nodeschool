function alwaysThrows() {
    throw new Error("OH NOES");
}

function iterate(integer) {
    console.log(integer);
    return integer + 1;
}

function onRejected(error) {
    console.log(error.message)
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onRejected);


