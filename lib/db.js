var mysql = require('mysql');


var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"data"
});
con.connect(function(err){
    if(err){
        console.log("Database not connected")
    }else{
        console.log("Connected successfully.. !");
    }
});
module.exports=con;