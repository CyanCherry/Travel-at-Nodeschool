function attachTitle(username) {
    return "DR. " + username;
}

Promise.resolve("MANHATTAN")
    .then(attachTitle)
    .then(console.log);