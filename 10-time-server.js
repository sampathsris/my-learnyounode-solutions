// we need a function to fill zeros in numbers less than
// 10. I could do the following:

function fill(num) {
    return (num == 10 ? '' : '0') + num;
}

// but hey, lpad should have been a function in String
// object IMO. so let's get a bit more adventurous.
String.prototype.lpad = function(pad, length) {
    var s = this;
    while (s.length < length) {
        s = pad + s;
    }
    
    return s;
}

require('net').createServer(function (socket) {
    var date = new Date();
    socket.end(
        date.getFullYear() + '-' +
        (date.getMonth() + 1).toString().lpad('0', 2) + '-' +
        date.getDate().toString().lpad('0', 2) + ' ' +
        date.getHours().toString().lpad('0', 2) + ':' +
        date.getMinutes().toString().lpad('0', 2) + '\n');
}).listen(Number(process.argv[2]));