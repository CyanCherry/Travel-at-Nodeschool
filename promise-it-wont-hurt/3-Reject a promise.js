const promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        reject(new Error("REJECTED!"))
    }, 300);
});
onReject = function (error) {
    console.log(error.message)
};
onFulfill = function () {
    console.log("FULFILLED!")
};
promise.then(onFulfill, onReject);
