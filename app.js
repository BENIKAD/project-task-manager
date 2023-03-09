const express = require("express")
const bodyParser = require("body-parser");
const request = require("request");
const date = require(__dirname + "/date.js");


const app = express();
 
const Items =["Pray", "Read", "Code"];
const workItems= [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));    
app.use(express.static("public"));
app.get("/", function(req, res){

const day = date.getDate();
    res.render("list", {listTitle: day, newListItems: Items});
});

app.post("/",function(req,res){

    const Item = req.body.newItem;

    if (req.body.list == "work"){
        workItems.push(Item);
        res.redirect("/work");
    } else {
        
        Items.push(Item);
        res.redirect("/" );
        
    }

});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "work List", newListItems: workItems});
});

app.get("/about", function(req,res){
    res.render("about");
});

app.post("/work", function(req,res){
    let Item = req.body.newItem;
    workItems.push(Item);
    res.redirect("/work"); 
});

 
app.listen(3000, function(){
console.log("server dey run wella")
});