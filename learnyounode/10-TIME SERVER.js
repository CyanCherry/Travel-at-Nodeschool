/* jshint esversion:6 */
var net = require("net");

function zeroFill(number) {
    return (number < 10 ? "0" : "") + number;
}

function getTimeStr() {
    date = new Date();
    var timeStr = date.getFullYear() + "-" +
        zeroFill(date.getMonth() + 1) + "-" +
        zeroFill(date.getDate()) + " " +
        zeroFill(date.getHours()) + ":" +
        zeroFill(date.getMinutes());
    return timeStr;
}

var server = net.createServer((socket) => {
    socket.write(getTimeStr() + "\n");
    socket.end();
});
server.listen(process.argv[2]);