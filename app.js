var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
// import * as u from 'public/js/dist/utilis.js';
// import * as _c from 'public/js/dist/constants.js';

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

//CREATE 
app.post("/photocon/nature/new", function(req,res){
    
});

app.post("/photocon/animals/new", function(req,res){

});

app.post("/photocon/food/new", function(req,res){

});


//OVDE CE ICI ZA LOGIN I SIGN UP



//USERS ROUTES
app.get("/users", function(req, res){
    let users;
    u._apiCall('GET', `${_c.API_URL.user}/api/users/all`)
        .then((resp) => {
            users = resp;
        })
        .catch((error) => {
            console.log(error)
        });
    res.render("users", {data: users});
});

//USER EDIT
app.get("/users/edit", function(req, res){
    res.render("userEdit");
});

//LISTENER

app.listen(port, function () {
	console.log("Server has started!");
});
