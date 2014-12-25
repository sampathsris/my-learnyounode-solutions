var path = require('path');
var fs = require('fs');

fs.readdir(
    process.argv[2],
    function (err, list) {
        if (!err) {
            list.forEach(function(e, i, a) {
                if (path.extname(e) == '.' + process.argv[3]) {
                    console.log(e);
                }
            });
        }
    }
);
