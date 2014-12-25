var http = require('http');
var collection = '';

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        collection += data;
    });
    response.on('end', function() {
        console.log(collection.length);
        console.log(collection);
    });
});
