require('http').createServer(function (req, res) {
    var url = require('url').parse(req.url, true),
        obj = {},
        date = new Date(url.query.iso);
    
    if (url.pathname.indexOf('/api/parsetime') == 0) {
        obj.hour = date.getHours();
        obj.minute = date.getMinutes();
        obj.second = date.getSeconds();
    } else if (url.pathname.indexOf('/api/unixtime') == 0) {
        obj.unixtime = date.getTime();
    }
    
    res.end(JSON.stringify(obj));
}).listen(Number(process.argv[2]));