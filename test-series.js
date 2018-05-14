const series = require("async").series;

series([
    function (callback) {
        // do some stuff ...
        console.log("step1");
        callback(null, 'one');
    },
    function (callback) {
        // do some more stuff ...
        console.log("step2");
        callback(null, 'two');
    },
    function (callback) {
        // do some more stuff ...
        console.log("step3");
        callback("error-3", null);
    },
    function (callback) {
        // do some more stuff ...
        console.log("step4");
        callback(null, 'four');
    }
],
    // optional callback
    function (err, results) {
        if(err){
            //Error case
            console.log(err);
        }else{
            //Success case
            console.log(results)
        }
       
        // results is now equal to ['one', 'two']
    });
