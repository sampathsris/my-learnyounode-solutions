var path = require('path');
var fs = require('fs');

module.exports = function (dirpath, ext, callback) {
    var ext2 = '.' + ext;

    fs.readdir(dirpath, function (err, list) {
        if (err) {
            return callback(err, undefined);
        }

        return callback(null, list.filter(function (e) {
            return path.extname(e) == ext2;
        }));
    });
}
