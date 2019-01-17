const qioHttp = require("q-io/http");

qioHttp.read("http://localhost:7000")
    .then((id) => qioHttp.read("http://localhost:7001/" + id))
    .then(json => console.log(JSON.parse(json)))
    .catch(console.error);