var express = require("express");
var filsSystem = require("fs");

var app = express();
app.get("/",function(req,res){
	filsSystem.readFile("/index.html",function(err,data){
	});
	res.end();
});
 app.liste(8080);