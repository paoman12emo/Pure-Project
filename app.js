const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs")
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));

app.set("view engine", "ejs");

app.get("/",function(req, res){
  res.render("home",{
    title: "Hello"
  })
});

app.get("/about",function(req, res){
  res.render("about",{
    title: "Hello"
  })

});

app.get("/contact",function(req, res){
  res.render("contact",{
    title: "Hello"
  })

});




app.listen(3000,function(){
  console.log("Server is online");
});
