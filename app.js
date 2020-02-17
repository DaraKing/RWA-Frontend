let api = require('./common/api');
let constants = require('./common/constants');

var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
// import * as u from 'public/js/dist/utilis.js';
// import * as _c from 'public/js/dist/constants.js';

// const _c = import('public/js/dist/constants.js')
//     .catch((err) => {
//         console.log(err)
//     });
// const u = import('public/js/dist/utilis.js')
//     .catch((err) => {
//         console.log(err)
//     });

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
    let users = api.call('GET' ,`${constants.API_URL}/api/users/all`,null);
    if (!users) {
        return
    }

    res.render("users", {data: users});
});

//USER EDIT
app.get("/users/edit/:id", function(req, res){
    let id = req.params.id;
    let user = api.call('GET', `${constants.API_URL}/api/users/${id}`, null);
    if(!user) {
        return
    }

    let roles = api.call('GET', `${constants.API_URL}/api/roles/all`, null);
    if(!roles) {
        return
    }

    res.render("userEdit", {user, roles});
});

//LISTENER

app.listen(port, function () {
	console.log("Server has started!");
});
