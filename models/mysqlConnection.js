// Mysql was chosen for DB.
const mysql = require("mysql");

var connection = mysql.createConnection({
    host : 'localhost',
    user : "root",
    password : "root",
    database : "denmarkDB"
});

connection.connect(function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Connection Successfully!"); 
    }
});

module.exports = connection;