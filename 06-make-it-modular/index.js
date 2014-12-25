
var fls = require('./filtered-ls'),
    v = process.argv;

fls(v[2], v[3], function (err, list) {
    if (err) {
        console.log(err);
    } else {
        list.forEach(function(e, i, a) {
            console.log(e);
        });
    }
});
