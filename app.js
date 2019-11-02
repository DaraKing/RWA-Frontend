var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

//=========
//ROUTES
//=========

app.get("/", function(req, res){
	res.redirect("photocon");
});

app.get("/photocon", function(req, res){
    res.render("photocon");
});

//SIGNUP AND LOGIN

app.get("/register", function(req, res){
    res.render("register");
});

app.get("/login", function(req, res){
    res.render("login");
});

//CONTEST ROUTES

app.get("/photocon/nature", function(req, res){
    res.render("nature");
});

app.get("/photocon/animals", function(req, res){
    res.render("animals");
});

app.get("/photocon/food", function(req, res){
    res.render("food");
});

//NEW

app.get("/photocon/nature/new", function(req, res){
    res.render("newNature");
});

app.get("/photocon/animals/new", function(req, res){
    res.render("newAnimals");
});

app.get("/photocon/food/new", function(req, res){
    res.render("newFood");
});


//OVDE CE ICI ZA LOGIN I SIGN UP

//LISTENER

app.listen(port, function () {
	console.log("Server has started!");
});