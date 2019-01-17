const JsonParsePromised = (json) => {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(json))
        } catch (err) {
            reject(err)
        }
    });
};

JsonParsePromised(process.argv[2]).then(
    null, (err) => {
        console.log(err.message)
    }
);