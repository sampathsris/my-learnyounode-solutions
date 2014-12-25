require('http').createServer(function (req, res) {
    require('fs').createReadStream(process.argv[3]).pipe(res);
}).listen(Number(process.argv[2]));
