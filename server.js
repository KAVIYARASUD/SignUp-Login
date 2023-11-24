var db= require('./lib/db');
var mysql = require('mysql');
var express = require('express');
var app= express()
var cors = require('cors')

app.use(cors());
app.use(express.json());
var port = 8080;

app.post('/insert',function(req,res){
    var sql="INSERT INTO bio (NAME,GENDER ,AGE,MOBILE,GMAIL,ADDRESS,DISTRICT,STATE)VALUES(?,?,?,?,?,?,?,?)";
    var Values= [
        req.body.Name,
        req.body.Gender,
        req.body.Age,
        req.body.Mobile,
        req.body.Gmail,
        req.body.Address,
        req.body.District,
        req.body.State

    ]
    db.query(sql,Values,function(err,data){
        if(err){
            res.json({success:false,error:err})
             console.log("failed",err);
        }else{
            res.json({success:true,data})
            console.log("Success",data);
        }
    })
})

app.listen(port,function(err){
    if(err){
        console.log("server is not run", err);
    }else{
        console.log("Port is Running.. !");
    }
})