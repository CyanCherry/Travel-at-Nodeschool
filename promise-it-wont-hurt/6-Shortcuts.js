const fulfill = Promise.resolve("FULFILLED");
const reject = Promise.reject(new Error("REJECTED"));
fulfill.then((result) => {
    console.log(result)
});
reject.catch((error)=>{
    console.log(error.message)
});