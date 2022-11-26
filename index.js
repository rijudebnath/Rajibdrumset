// jshint esversion:6;
const express = require("express");
const request = require("request");
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public"))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html"); 
})











app.listen(3000,function(){
    console.log("port 3000 Online");
})
