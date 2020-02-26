// let api = require('./common/api'),
//     constants = require('./common/constants'),
//     users = require('./controllers/users'),
//     categories = require('./controllers/categories')

// Setup
let express = require("express"),
    app = express(),
    port = process.env.PORT || 3000

// Requiring routes
var indexRoutes = require("./routes/index"),
    adminRoutes = require("./routes/admin"),
    userRoutes = require("./routes/users"),
    authRoutes = require("./routes/auth");

// Ejs and static
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

// Use routes
app.use("/", indexRoutes);
app.use("/", adminRoutes);
app.use("/", userRoutes);
app.use("/", authRoutes);

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

// app.get("/", function(req, res){
// 	res.redirect("photocon");
// });

// app.get("/photocon", categories.webCategories);

//CONTEST ROUTES
app.get("/photocon/nature", function (req, res) {
    res.render("categories/singleCategory");
});

app.get("/photocon/animals", function (req, res) {
    res.render("categories/singleCategory");
});

app.get("/photocon/food", function (req, res) {
    res.render("categories/singleCategory");
});

//NEW
app.get("/photocon/nature/new", function (req, res) {
    res.render("newPost");
});

app.get("/photocon/animals/new", function (req, res) {
    res.render("newPost");
});

app.get("/photocon/food/new", function (req, res) {
    res.render("newPost");
});

//CREATE
app.post("/photocon/nature/new", function (req, res) {

});

app.post("/photocon/animals/new", function (req, res) {

});

app.post("/photocon/food/new", function (req, res) {

});


//OVDE CE ICI ZA LOGIN I SIGN UP

// //USERS ROUTES
// app.get("/users", users.getAll);

// //USER EDIT
// app.get("/users/edit/:id", users.edit);

//ALL CATEGORIES
// app.get("/admin/categories/all", categories.getAll);

// app.get("/admin/categories/create", categories.create);

//LISTENER

app.listen(port, function () {
    console.log("Server has started!");
});
