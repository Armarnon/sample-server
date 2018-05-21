var MysqlDB = function () {}; 
var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : "192.168.99.100",
    user     : "issue",
    password : "issue",
    database : "issue_db",
    connectionLimit : 10,
    multipleStatements :true
});


MysqlDB.prototype.log = function (sql,cb) { 	
   pool.getConnection(function(err, _con){
        if(err){
            console.log('Connection error');
            console.log(err);
        }else{
            _con.query(sql,cb);
        }
   });
}; 

module.exports = new MysqlDB();
