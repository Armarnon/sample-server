var express = require('express');
var router = express.Router();
var mysqldb = require('../shared/mysql-db');


router.get('/test', function(req, res){
    mysqldb.log("select * from test", function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }else{
            res.json(result);
        }
        
    });
});

router.get('/test2', testResolve);


function testResolve(req, res){

}

module.exports = router;