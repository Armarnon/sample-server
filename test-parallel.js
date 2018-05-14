const parallel = require("async").parallel;

parallel([
    function(callback) {
        console.log('step1');
        setTimeout(function() {
            
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        console.log('step2');
        setTimeout(function() {
           
            console.log('two');
            callback(null, 'two');
        }, 100);
    },
    function(callback) {
        console.log('step3');
        setTimeout(function() {
            console.log('three');
            callback("error-step-3", 'three');
        }, 150);
    }
],
// optional callback
function(err, results) {
    console.log(err);
    console.dir(results);
});
