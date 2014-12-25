var http = require('http'),
    count = 0,
    everything = [],
    urls = process.argv.slice(2),
    numurls = urls.length;

urls.forEach(function (url, i, a) {
    var collection = '';
    
    http.get(url, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            collection += data;
        });
        res.on('end', function () {
            everything[i] = collection;
            count++;
            
            if (count == numurls) {
                everything.forEach(function (str, index, all) {
                    console.log(str);
                });
            }
        });
    });
});
