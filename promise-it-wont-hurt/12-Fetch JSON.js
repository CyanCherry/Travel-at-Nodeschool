const qioHttp = require('q-io/http');
qioHttp.read("http://localhost:1337")
    .then((json) => {
        console.log(JSON.parse(json))
    })
    .catch((err) => {
        console.error(err.message)
    });

