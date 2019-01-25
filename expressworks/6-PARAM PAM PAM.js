const express = require("express");
const app = express();

app.put('/message/:id', function (request, response) {
    response.end(require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + request.params.id)
        .digest('hex'));
});

app.listen(process.argv[2]);