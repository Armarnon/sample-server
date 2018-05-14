const fs = require('fs');

fs.watchFile("message.txt", function (cur, prev) {
    fs.readFile('message.txt', 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
});