const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var operation = req.body.operation;

  if(operation == "add"){
    var result = num1 + num2;
  }

  else if(operation == "subtract"){
    var result = num1 - num2;
  }

  else if(operation == "multiply"){
    var result = num1*num2;
  }

  else if(operation == "divide"){
    var result = num1/num2;
  }



  res.send("The result after calculation is "+ result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){


var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);

var bmi = weight/(height*height);

res.send("Your BMI Is: " + bmi);



});

app.listen(3000,function(){
  console.log("server started");
});
