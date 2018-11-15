/* jshint esversion:6 */
const net = require("net");

function zeroFill(number) {
    return (number < 10 ? "0" : "") + number;
}

function getTimeStr() {
    let date = new Date();
    return date.getFullYear() + "-" +
        zeroFill(date.getMonth() + 1) + "-" +
        zeroFill(date.getDate()) + " " +
        zeroFill(date.getHours()) + ":" +
        zeroFill(date.getMinutes());
}

const server = net.createServer((socket) => {
    socket.write(getTimeStr() + "\n");
    socket.end();
});
server.listen(process.argv[2]);